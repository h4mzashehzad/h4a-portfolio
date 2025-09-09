import { motion } from 'framer-motion'
import { Github, Mail, Linkedin } from 'lucide-react'
import { Button } from './ui/neon-button'
import { Badge } from './ui/Badge'
import { fadeInUp, itemFade, staggerContainer } from '../lib/animations'
import ProfileCard from './ui/ProfileCard'
import LogoLoop from './ui/LogoLoop'
import DotGrid from './ui/DotGrid'
import DownloadResumeButton from './ui/DownloadResumeButton'
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
      {/* Download Resume Button - Top Right */}
      <motion.div 
        className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-6 lg:right-6 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="scale-75 sm:scale-90 lg:scale-100">
          <DownloadResumeButton />
        </div>
      </motion.div>
      
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
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 sm:py-20 lg:py-16 pb-20 sm:pb-24 lg:pb-16">
          <motion.div
            className="flex flex-col items-start justify-center order-2 lg:order-1"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
        
          <motion.h1
            variants={fadeInUp}
            className="text-pretty text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-100 text-center lg:text-left"
          >
            Hamza Shehzad
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-slate-300 text-left text-sm sm:text-base">
            Results driven full‑stack developer with 2+ years of hands-on experience. 
            Specializing in delivering scalable and performing cross-platform mobile apps and
            responsive web apps. Proven track record of delivering high quality products 
            with a focus on user experience and performance.
          </motion.p>

          <motion.div variants={staggerContainer} className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2">
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

          <motion.div variants={fadeInUp} className="mt-7 flex flex-col items-center gap-3">
            <div className="flex justify-center items-center gap-2 sm:gap-3 sm:flex-wrap">
              <Button onClick={() => (window.location.href = 'mailto:h4mzashehzad@gmail.com')} className="px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base">
                <Mail className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                Contact
              </Button>
              <a href="https://github.com/h4mzashehzad" target="_blank" rel="noreferrer" className="cursor-pointer">
                <Button className="px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base">
                  <Github className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                  GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/hamzashehzadpk" target="_blank" rel="noreferrer" className="cursor-pointer">
                <Button className="px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base">
                  <Linkedin className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Enhanced Scroll indicator */}
            <motion.div 
              variants={fadeInUp} 
              className="mt-8 sm:mt-12 lg:mt-16 flex flex-col items-center space-y-4"
            >
              <motion.div 
                className="group cursor-pointer select-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                <div className="relative">
                  {/* Glowing background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Main content */}
                  <div className="relative px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
                    <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                      <span className="tracking-wide">Explore My Work</span>
                      
                      {/* Animated arrow with trail effect */}
                      <div className="relative">
                        <motion.div
                          className="text-lg"
                          animate={{ y: [0, 6, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          ↓
                        </motion.div>
                        
                        {/* Trail dots */}
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="absolute left-1/2 w-1 h-1 bg-blue-400 rounded-full transform -translate-x-1/2"
                            style={{ top: `${(i + 1) * 8}px` }}
                            animate={{ 
                              opacity: [0, 0.8, 0],
                              scale: [0.5, 1, 0.5]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "easeInOut",
                              delay: i * 0.2
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover hint */}
                <motion.div 
                  className="mt-2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  Click to scroll
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Profile Card Column */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-none">
              <ProfileCard />
            </div>
          </motion.div>
        </div>
        
        {/* Technology Logo Loop - positioned at bottom of hero */}
        <motion.div 
          className="absolute bottom-2 sm:bottom-4 lg:bottom-8 left-0 right-0 px-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={40}
            gap={32}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#0f172a"
            ariaLabel="Technology stack"
            className="opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>
      </div>

      {/* Optional: place for animated background from React Bits if added later */}
    </section>
  )
}
