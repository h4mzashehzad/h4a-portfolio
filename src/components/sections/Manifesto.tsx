import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const lines = [
  { text: "BUILD IT FAST.", indent: "ml-0", color: "text-foreground" },
  { text: "SHIP IT CLEAN.", indent: "md:ml-[18%]", color: "text-foreground" },
  { text: "MAKE IT MATTER.", indent: "md:ml-[6%]", color: "text-secondary" },
];

export const Manifesto = () => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".manifesto-line", {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative min-h-screen w-full px-6 md:px-10 py-32 flex flex-col justify-center">
      <div className="absolute top-6 left-6 text-[11px] tracking-[0.2em] text-meta uppercase">/ MANIFESTO / P. 002</div>
      <div className="space-y-4 md:space-y-6">
        {lines.map((l) => (
          <div
            key={l.text}
            className={`manifesto-line font-display uppercase text-[clamp(3rem,10vw,11rem)] leading-[0.88] tracking-[-0.02em] ${l.indent} ${l.color}`}
          >
            {l.text}
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 right-6 text-[11px] tracking-[0.2em] text-foreground/30 uppercase">
        hamza shehzad / 2026
      </div>
    </section>
  );
};
