const links = [
  { label: "GITHUB", href: "https://github.com/h4mzashehzad" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/hamzashehzadpk/" },
  { label: "RESUME", href: "/Hamza Shehzad_Resume.pdf" },
];

export const Contact = () => (
  <section className="relative min-h-screen w-full px-6 md:px-10 py-32 flex flex-col justify-between">
    <div className="text-[11px] tracking-[0.2em] text-meta uppercase">/ OPEN CHANNEL / P. 006</div>

    <div className="flex-1 flex flex-col justify-center mt-20">
      <div className="text-meta text-sm tracking-[0.2em] uppercase mb-6">
        Let's build something that matters.
      </div>
      <a
        href="mailto:h4mzashehzad@gmail.com"
        className="font-display uppercase text-[clamp(2.5rem,9vw,9rem)] text-foreground hover:text-primary transition-colors leading-none break-all"
      >
        H4MZASHEHZAD@GMAIL.COM
      </a>
      <div className="h-px w-full bg-primary/40 mt-12 mb-8" />
      <div className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] tracking-[0.2em] uppercase">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="hover-underline text-foreground/80 hover:text-primary"
          >
            {l.label} ↗
          </a>
        ))}
      </div>
    </div>

    <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.2em] text-foreground/40 uppercase">
      <span>© 2026 Hamza Shehzad — Islamabad, PK</span>
      <span>Built raw. Kept minimal.</span>
    </footer>
  </section>
);
