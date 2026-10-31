/**
 * Generate a screen-faithful A4 PDF that matches the HTML layout.
 * Serves the repo over localhost (reliable fonts/images), uses screen CSS,
 * waits for fonts + images, then prints at scale 1.
 *
 * Usage: node generate-pdf.mjs
 */
import { chromium } from "playwright";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const outPath = path.join(__dirname, "portfolio.pdf");
const outPathAlt = path.join(__dirname, "Hamza-Shehzad-Mobile-Portfolio.pdf");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".pdf": "application/pdf",
};

function contentType(filePath) {
  return MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream";
}

function startServer(rootDir) {
  const root = path.normalize(rootDir);
  const server = http.createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
      const rel = urlPath === "/" ? "/pdf-portfolio/index.html" : urlPath;
      const filePath = path.normalize(path.join(root, rel));
      if (!filePath.startsWith(root)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.writeHead(404);
        res.end("Not found: " + rel);
        return;
      }
      res.writeHead(200, {
        "Content-Type": contentType(filePath),
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
      });
      fs.createReadStream(filePath).pipe(res);
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });

  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      resolve({ server, port });
    });
  });
}

async function main() {
  const { server, port } = await startServer(repoRoot);
  const pageUrl = `http://127.0.0.1:${port}/pdf-portfolio/index.html`;

  const browser = await chromium.launch({
    headless: true,
    args: [
      "--font-render-hinting=none",
      "--disable-lcd-text",
      "--disable-font-subpixel-positioning",
    ],
  });

  // A4 CSS reference width; 2× DPR for crisp paint into the PDF pipeline
  const page = await browser.newPage({
    viewport: { width: 794, height: 1123 },
    deviceScaleFactor: 2,
  });

  // Match the on-screen HTML — do not apply @media print rewrites
  await page.emulateMedia({ media: "screen" });

  await page.goto(pageUrl, { waitUntil: "networkidle", timeout: 120000 });

  const fontStatus = await page.evaluate(async () => {
    document.documentElement.classList.add("is-pdf");
    if (document.fonts?.ready) await document.fonts.ready;
    const faces = [...document.fonts].map((f) => `${f.family}:${f.weight}:${f.status}`);
    const imgs = [...document.images];
    await Promise.all(
      imgs.map((img) => {
        if (img.complete && img.naturalWidth > 0) return Promise.resolve();
        return new Promise((res) => {
          img.addEventListener("load", res, { once: true });
          img.addEventListener("error", res, { once: true });
        });
      })
    );
    const failed = imgs.filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.src);
    return { faces, failed, imgCount: imgs.length };
  });

  if (fontStatus.failed?.length) {
    console.warn("Some images failed to load:", fontStatus.failed);
  }
  console.log(`Fonts ready · ${fontStatus.faces.length} faces · ${fontStatus.imgCount} images`);

  await page.waitForTimeout(600);

  // Virtually paginate A4 and force clean breaks so Chromium won't slice
  // paragraphs/figures (CSS break-inside is unreliable for images).
  const pagination = await page.evaluate(() => {
    const PAGE_H = (297 / 25.4) * 96; // A4 height in CSS px ≈ 1122.52
    const scrollY = window.scrollY || window.pageYOffset || 0;

    const absBox = (el) => {
      const r = el.getBoundingClientRect();
      return { top: r.top + scrollY, height: r.height, bottom: r.bottom + scrollY };
    };

    /** @type {HTMLElement[]} */
    const atoms = [
      ...document.querySelectorAll(
        "figure.shot, .keep-together, p, .lede, .pull, .process li, .job, .stack-row, .inline-head, .case-meta, .tags, .close__cta, .ornament"
      ),
    ].filter((el) => !el.closest(".keep-together") || el.classList.contains("keep-together"));

    /** Elements that already request a new page in CSS */
    const sectionBreaks = [
      ...document.querySelectorAll(".chapter--break, .close"),
    ];

    // Build timeline of events from continuous layout Y
    const events = [
      ...sectionBreaks.map((el) => ({ type: "section", el, ...absBox(el) })),
      ...atoms.map((el) => ({ type: "atom", el, ...absBox(el) })),
    ].sort((a, b) => a.top - b.top || (a.type === "section" ? -1 : 1));

    let shift = 0;
    let forced = 0;

    const forceBreak = (el) => {
      el.style.setProperty("break-before", "page", "important");
      el.style.setProperty("page-break-before", "always", "important");
      forced += 1;
    };

    for (const ev of events) {
      const top = ev.top + shift;

      if (ev.type === "section") {
        // Honor existing chapter page-break: consume remaining page space
        const offset = top % PAGE_H;
        if (offset > 0.5) {
          shift += PAGE_H - offset;
        }
        continue;
      }

      // Skip atoms nested inside something we already broke? still check fit
      const offset = top % PAGE_H;
      const spaceLeft = PAGE_H - offset;
      const h = ev.height;

      // Too tall for a full page — leave it (max-height CSS should prevent this)
      if (h > PAGE_H - 2) continue;

      // Would be sliced by the page edge → push to next page
      // Use a small slack so near-misses still move (Chromium rounds differently)
      const slack = ev.el.tagName === "FIGURE" || ev.el.classList.contains("shot") ? 8 : 2;
      if (h > spaceLeft - slack && offset > 1) {
        forceBreak(ev.el);
        shift += spaceLeft;
      }
    }

    return { forced, pageH: PAGE_H };
  });

  console.log(`Pagination · forced ${pagination.forced} clean breaks (pageH=${pagination.pageH.toFixed(1)}px)`);

  const tmpPath = path.join(__dirname, `portfolio.tmp-${Date.now()}.pdf`);

  await page.pdf({
    path: tmpPath,
    width: "210mm",
    height: "297mm",
    printBackground: true,
    preferCSSPageSize: true,
    scale: 1,
    margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
  });

  await browser.close();
  server.close();

  // Always write a fresh unlockable filename, then try the stable names
  const stampedPath = path.join(
    __dirname,
    `Hamza-Shehzad-Mobile-Portfolio-${new Date().toISOString().replace(/[:.]/g, "-")}.pdf`
  );
  fs.copyFileSync(tmpPath, stampedPath);
  console.log(`Wrote ${stampedPath}`);

  for (const dest of [outPathAlt, outPath]) {
    let ok = false;
    for (let i = 0; i < 6; i++) {
      try {
        fs.copyFileSync(tmpPath, dest);
        console.log(`Wrote ${dest}`);
        ok = true;
        break;
      } catch {
        await new Promise((r) => setTimeout(r, 400));
      }
    }
    if (!ok) {
      console.warn(`Could not overwrite ${dest} (file locked). Use the stamped file above.`);
    }
  }

  try {
    fs.unlinkSync(tmpPath);
  } catch {
    /* ignore */
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
