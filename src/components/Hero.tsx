import { motion } from 'framer-motion'
import { Github, Mail } from 'lucide-react'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { fadeInUp, itemFade, staggerContainer } from '../lib/animations'
import ProfileCard from './ProfileCard'
import LogoLoop from './LogoLoop'
import DotGrid from './DotGrid'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, SiGithub, SiPrisma, SiSupabase, SiVite } from 'react-icons/si'

export default function Hero() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiGithub />, title: "Github", href: "https://github.com" },
    { node: <SiPrisma />, title: "Prisma", href: "https://prisma.io" },
    { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
    { node: <SiVite />, title: "Vite", href: "https://vite.dev" }
  ];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* DotGrid Background */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#010101"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid min-h-[70vh] grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16">
          <motion.div
            className="flex flex-col items-start justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
          <motion.span variants={itemFade} className="mb-2 font-mono text-sm text-slate-400">
            &gt; import Innovation <span className="text-slate-500">// from developer portfolio</span>
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="text-pretty text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl"
          >
            Hamza Shehzad
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-slate-300">
            Full‑stack engineer specializing in cross-platform mobile app 
            development and web app development.
          </motion.p>

          <motion.div variants={staggerContainer} className="mt-5 flex flex-wrap items-center gap-2">
            <motion.div variants={itemFade}>
              <Badge variant="mono">React Native</Badge>
            </motion.div>
            <motion.div variants={itemFade}>
              <Badge variant="mono">TypeScript</Badge>
            </motion.div>
            <motion.div variants={itemFade}>
              <Badge variant="mono">Vite</Badge>
            </motion.div>
            <motion.div variants={itemFade}>
              <Badge variant="mono">Next.js</Badge>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-7 flex flex-wrap gap-3">
            <Button leftIcon={Mail} onClick={() => (window.location.href = 'mailto:h4mzashehzad@gmail.com')}>
              Contact
            </Button>
            <a href="https://github.com/h4mzashehzad" target="_blank" rel="noreferrer">
              <Button variant="ghost" leftIcon={Github}>
                GitHub
              </Button>
            </a>
          </motion.div>
          </motion.div>
          
          {/* Profile Card Column */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <ProfileCard />
          </motion.div>
        </div>
      </div>

      {/* Technology Logo Loop */}
      <div className="pb-12">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0f172a"
          ariaLabel="Technology partners"
        />
      </div>

      {/* Optional: place for animated background from React Bits if added later */}
    </section>
  )
}
