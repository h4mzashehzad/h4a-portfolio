const left: [string, string][] = [
  ["LANGS", "TypeScript · JavaScript · PHP"],
  ["FRONT", "React · Next.js · React Native"],
  ["BACK", "Node.js · Laravel · Express"],
  ["DATA", "MySQL · PostgreSQL"],
  ["TOOLS", "Vite · Tailwind · Figma · Git"],
  ["DEPLOY", "Vercel · cPanel · Docker"],
];

const right: [string, string][] = [
  ["READ", "Manga · Mystery Novels"],
  ["LISTEN", "Lo-fi · Pop · Synthwave"],
  ["CITY", "Islamabad → Pakistan"],
  ["LEARN", "Software Engineering @ SZABIST"],
  ["NOW", "Building in public. Shipping weekly."],
  ["OPEN", "Freelance & full-time roles"],
];

const Row = ({ k, v }: { k: string; v: string }) => (
  <div className="grid grid-cols-[80px_1fr] items-center gap-4 border-b border-border/60 py-3 text-sm">
    <span className="text-primary text-[11px] tracking-[0.2em]">{k}</span>
    <span className="text-foreground/90">{v}</span>
  </div>
);

export const WhatIBuild = () => (
  <section className="relative min-h-screen w-full px-6 md:px-10 py-32">
    <div className="absolute top-6 left-6 text-[11px] tracking-[0.2em] text-meta uppercase">/ STACK / P. 003</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 mt-12">
      <div className="md:pr-16 md:border-r md:border-primary/40">
        <h2 className="font-display uppercase text-[clamp(3rem,8vw,7rem)] leading-[0.9] mb-10">
          What<br />I Build
        </h2>
        <div>{left.map(([k, v]) => <Row key={k} k={k} v={v} />)}</div>
      </div>
      <div className="md:pl-16">
        <h2 className="font-display uppercase text-[clamp(3rem,8vw,7rem)] leading-[0.9] mb-10">
          What<br />Moves Me
        </h2>
        <div>{right.map(([k, v]) => <Row key={k} k={k} v={v} />)}</div>
      </div>
    </div>
  </section>
);
