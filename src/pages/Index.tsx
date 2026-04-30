import { useEffect } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { SideRail } from "@/components/SideRail";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  useEffect(() => {
    document.title = "Hamza Shehzad — Full Stack Developer";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Hamza Shehzad — Full Stack Developer building React, React Native and Laravel products from Islamabad."
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <main className="relative bg-background text-foreground grain">
      <SmoothScroll />
      <Cursor />
      <SideRail />
      <h1 className="sr-only">Hamza Shehzad — Full Stack Developer Portfolio</h1>
      <Hero />
      <Manifesto />
      <WhatIBuild />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;
