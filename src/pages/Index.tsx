import { useEffect, useRef } from "react";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import "@/portfolio.css";

export default function Index() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.title = "Hamza Shehzad — Full Stack Developer";
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        if (!media.matches) element.animate(
          [{ opacity: .45, transform: element.dataset.reveal === "image" ? "translateY(30px) scale(.98)" : "translateY(24px)" }, { opacity: 1, transform: "translateY(0) scale(1)" }],
          { duration: 850, easing: "cubic-bezier(.16,1,.3,1)", delay: Number(element.dataset.delay || 0) }
        );
        observer.unobserve(element);
      });
    }, { threshold: .08 });
    root.current?.querySelectorAll("[data-reveal]").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <div className="portfolio" ref={root}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header frame">
      <a className="wordmark" href="#main" aria-label="Hamza Shehzad home">h4a.</a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a></nav>
      <a className="header-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
    </header>
    <main id="main"><Hero /><Projects /><WhatIBuild /><Experience /></main>
    <Contact />
  </div>;
}
