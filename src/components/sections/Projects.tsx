import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Project = {
  num: string;
  title: string;
  kicker: string;
  desc: string;
  tags: string[];
  bg: string; // gradient fallback (shown when no image is set)
  accent: "primary" | "secondary" | "foreground";
  /**
   * 👉 IMAGE PLACEHOLDER
   * Drop your project image into `src/assets/projects/` (or `public/projects/`)
   * and set the path here, e.g. `image: "/projects/redlife.jpg"`.
   * Leave as `null` to show the gradient fallback.
   */
  image: string | null;
  /**
   * 👉 LINK PLACEHOLDER
   * Set the external URL for this project, e.g.
   * `url: "https://redlife.app"`. Leave as `null` to disable the link.
   */
  url: string | null;
};

const projects: Project[] = [
  {
    num: "001",
    title: "REDLIFE",
    kicker: "Blood Donors Community App",
    desc: "A life-critical mobile platform connecting donors, recipients, and blood banks across Pakistan — built for fast, reliable emergency access.",
    tags: ["REACT NATIVE", "LARAVEL", "MYSQL", "REAL-TIME"],
    bg: "linear-gradient(135deg, hsl(0 70% 25%), hsl(13 100% 30%))",
    accent: "foreground",
    image: null, // TODO: add RedLife image → e.g. "/projects/redlife.jpg"
    url: null, // TODO: add RedLife URL → e.g. "https://redlife.app"
  },
  {
    num: "002",
    title: "MARKAZ",
    kicker: "Property & Agency Manager",
    desc: "A comprehensive management app for real-estate agencies — centralised listings, inquiries, and operations from one platform.",
    tags: ["REACT NATIVE", "MYSQL", "ADMIN DASHBOARD", "REACT"],
    bg: "linear-gradient(135deg, hsl(200 50% 18%), hsl(220 60% 28%))",
    accent: "secondary",
    image: null, // TODO: add Markaz image → e.g. "/projects/markaz.jpg"
    url: null, // TODO: add Markaz URL → e.g. "https://markaz.app"
  },
  {
    num: "003",
    title: "PKDOMAINS",
    kicker: "Domain Marketplace",
    desc: "A polished, minimal mobile marketplace for buying and selling .pk domains — the first of its kind in Pakistan.",
    tags: ["REACT NATIVE", "MYSQL", "MARKETPLACE"],
    bg: "linear-gradient(135deg, hsl(160 40% 15%), hsl(140 50% 22%))",
    accent: "foreground",
    image: null, // TODO: add PKDomains image → e.g. "/projects/pkdomains.jpg"
    url: null, // TODO: add PKDomains URL → e.g. "https://pkdomains.com"
  },
  {
    num: "004",
    title: "AURAZE",
    kicker: "Photography Portfolio",
    desc: "A visually immersive portfolio for a photography brand. Masonry layout, infinite scroll, and a custom CMS — built end-to-end.",
    tags: ["REACT 18", "VITE", "MASONRY", "CUSTOM CMS"],
    bg: "linear-gradient(135deg, hsl(30 30% 15%), hsl(20 50% 25%))",
    accent: "secondary",
    image: null, // TODO: add Auraze image → e.g. "/projects/auraze.jpg"
    url: null, // TODO: add Auraze URL → e.g. "https://auraze.com"
  },
  {
    num: "005",
    title: "THIS PORTFOLIO",
    kicker: "Editorial scroll experience",
    desc: "The site you're reading right now. Built to feel like something. Built to mean something. Kept raw.",
    tags: ["REACT", "TYPESCRIPT", "GSAP", "LENIS", "TAILWIND"],
    bg: "linear-gradient(135deg, hsl(266 44% 25%), hsl(24 11% 4%))",
    accent: "primary",
    image: null, // TODO: add screenshot → e.g. "/projects/portfolio.jpg"
    url: null, // TODO: add live URL → e.g. "https://hamza.dev"
  },
];

export const Projects = () => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".project-panel");
      panels.forEach((panel, i) => {
        const title = panel.querySelector(".project-title");
        const meta = panel.querySelector(".project-meta");
        gsap.from(title, {
          yPercent: 30,
          opacity: 0,
          ease: "power3.out",
          duration: 1.2,
          scrollTrigger: { trigger: panel, start: "top 75%" },
        });
        gsap.from(meta, {
          y: 40,
          opacity: 0,
          duration: 1,
          delay: 0.15,
          scrollTrigger: { trigger: panel, start: "top 75%" },
        });
        // Parallax background
        gsap.to(panel.querySelector(".project-bg"), {
          yPercent: -15,
          ease: "none",
          scrollTrigger: { trigger: panel, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative w-full">
      <div className="sticky top-0 z-10 px-6 md:px-10 pt-6 text-[11px] tracking-[0.2em] text-meta uppercase pointer-events-none">
        / SELECTED WORK / P. 004
      </div>
      {projects.map((p) => {
        const Wrapper: any = p.url ? "a" : "article";
        const wrapperProps = p.url
          ? {
              href: p.url,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": `${p.title} — open in new tab`,
            }
          : {};
        return (
        <Wrapper
          key={p.num}
          {...wrapperProps}
          className={`project-panel group relative min-h-screen w-full overflow-hidden flex items-end px-6 md:px-10 py-20 ${
            p.url ? "block cursor-pointer transition-colors" : ""
          }`}
        >
          {/* ===== PROJECT BACKGROUND =====
              If `image` is set, it renders here. Otherwise, the gradient
              fallback is shown. Replace via the `image` field above. */}
          <div className="project-bg absolute inset-0 -z-10">
            {p.image ? (
              <img
                src={p.image}
                alt={`${p.title} — ${p.kicker}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="h-full w-full" style={{ background: p.bg }} />
            )}
          </div>
          <div className="absolute inset-0 -z-10 bg-background/60 transition-colors group-hover:bg-background/40" />

          {/* Visible-in-dev placeholder marker — remove once images are added */}
          {!p.image && (
            <div className="absolute top-24 right-6 md:right-10 border border-dashed border-foreground/30 px-3 py-2 text-[10px] tracking-[0.2em] text-foreground/50 uppercase">
              [ IMAGE PLACEHOLDER · {p.title} ]
            </div>
          )}

          {/* Visit-link cue (top-right). Shown only when a URL is set. */}
          {p.url && (
            <div className="absolute top-24 right-6 md:right-10 flex items-center gap-2 border border-foreground/40 px-3 py-2 text-[10px] tracking-[0.2em] text-foreground/80 uppercase backdrop-blur-sm transition-all group-hover:border-primary group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1">
              <span>Visit Site</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </div>
          )}
          {/* Placeholder cue when no URL is set yet — remove once URLs are added */}
          {!p.url && (
            <div className="absolute bottom-6 right-6 md:right-10 border border-dashed border-foreground/30 px-3 py-2 text-[10px] tracking-[0.2em] text-foreground/40 uppercase">
              [ ADD URL · {p.title} ]
            </div>
          )}

          <div className="absolute top-24 left-6 md:left-10 text-[11px] tracking-[0.2em] text-meta">
            {p.num} / {projects.length.toString().padStart(3, "0")}
          </div>

          <div className="w-full">
            <h3
              className={`project-title font-display uppercase text-[clamp(4rem,15vw,16rem)] leading-[0.82] tracking-[-0.03em] ${
                p.accent === "primary"
                  ? "text-primary"
                  : p.accent === "secondary"
                  ? "text-secondary"
                  : "text-foreground"
              }`}
            >
              {p.title}
            </h3>
            <div className="project-meta mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
              <div className="max-w-2xl">
                <div className="text-primary text-sm tracking-[0.15em] uppercase mb-3">{p.kicker}</div>
                <p className="text-foreground/80 text-base leading-[1.7]">{p.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-foreground/30 px-2 py-1 text-[10px] tracking-[0.15em] text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Wrapper>
        );
      })}
    </section>
  );
};
