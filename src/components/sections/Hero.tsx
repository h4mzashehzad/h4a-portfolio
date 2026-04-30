import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Hero = () => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-line-1", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-line-2", {
        xPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.from(".hero-meta", { opacity: 0, y: 20, duration: 1, stagger: 0.1, delay: 0.2 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-screen w-full overflow-hidden">
      {/* Top meta */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 text-[11px] tracking-[0.2em] text-meta uppercase">
        <span className="hero-meta">HAMZASHEHZAD.DEV</span>
        <span className="hero-meta">VOL 1 / 2026</span>
      </div>

      {/* Display name */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
        <h1 className="font-display text-[clamp(5rem,18vw,20rem)] uppercase leading-[0.82] tracking-[-0.03em]">
          <span className="hero-line-1 block text-primary">Hamza</span>
          <span className="hero-line-2 block text-secondary">Shehzad</span>
        </h1>
      </div>

      {/* Bottom rule + meta */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
        <div className="h-px w-full bg-primary/40 mb-3" />
        <div className="flex items-end justify-between text-[11px] tracking-[0.2em] uppercase">
          <span className="hero-meta text-meta">P. 001</span>
          <div className="hero-meta text-right">
            <div className="text-foreground/80">/ FULL STACK DEVELOPER</div>
            <div className="text-primary mt-1">↓ SCROLL TO TUNE IN</div>
          </div>
        </div>
      </div>
    </section>
  );
};
