export const SideRail = () => (
  <a
    href="/hamza-shehzad-resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="fixed right-0 top-1/2 z-40 -translate-y-1/2 flex flex-col items-center gap-3 bg-foreground text-background px-2 py-4 text-[11px] font-mono-ed tracking-[0.2em]"
    aria-label="Download résumé"
  >
    <span className="font-display text-2xl leading-none">H.</span>
    <span style={{ writingMode: "vertical-rl" }} className="rotate-180">
      Résumé
    </span>
  </a>
);
