const jobs = [
  {
    role: "Full-Stack Mobile Developer",
    company: "RedLife",
    type: "Part Time",
    when: "Jan 2026 — Present",
    bullets: [
      "Architecting a cross-platform React Native app for iOS & Android with a focus on performance and reliability.",
      "Maintaining and extending a complex Laravel backend, ensuring scalable API communication across mobile and web.",
    ],
  },
  {
    role: "React Native App / Web Developer",
    company: "Markaz.pk",
    type: "Part Time",
    when: "Feb 2025 — Present",
    bullets: [
      "Building and maintaining a high-traffic React Native app with strong DB connectivity and performance focus.",
      "Leading feature development inside a complex admin dashboard for content managers.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "GRIPHENS Technologies",
    type: "Internship",
    when: "Oct 2023 — Apr 2024",
    bullets: [
      "Engineered production-ready websites in WordPress, Webflow, and React, faithfully implementing UI/UX specs.",
      "Handled back-end functionality and 3rd-party API integrations, end-to-end client delivery.",
    ],
  },
];

export const Experience = () => (
  <section className="relative min-h-screen w-full px-6 md:px-10 py-32">
    <div className="absolute top-6 left-6 text-[11px] tracking-[0.2em] text-meta uppercase">/ FIELD LOG / P. 005</div>
    <h2 className="font-display uppercase text-[clamp(3rem,10vw,10rem)] leading-[0.9] mb-16">
      Where<br />I've Been
    </h2>
    <div className="space-y-10 max-w-5xl">
      {jobs.map((j, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-10 border-t border-border/60 pt-6">
          <div className="text-[11px] tracking-[0.2em] text-meta uppercase">{j.when}</div>
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-display uppercase text-3xl md:text-5xl text-foreground">{j.company}</span>
              <span className="text-primary text-sm tracking-[0.15em] uppercase">— {j.role}</span>
              <span className="text-meta text-[11px] tracking-[0.2em] uppercase">[{j.type}]</span>
            </div>
            <ul className="mt-4 space-y-2 text-foreground/80 text-sm leading-relaxed list-none">
              {j.bullets.map((b, k) => (
                <li key={k} className="pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-primary">{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);
