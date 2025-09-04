import { motion } from 'framer-motion'
import { Github, Mail } from 'lucide-react'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { fadeInUp, itemFade, staggerContainer } from '../lib/animations'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex min-h-[70vh] flex-col items-start justify-center py-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemFade} className="mb-2 font-mono text-sm text-slate-400">
            &gt; hello-world <span className="text-slate-500">// developer portfolio</span>
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="text-pretty text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl"
          >
            Hamza Shehzad
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-slate-300">
            Full‑stack engineer crafting resilient, fast, and accessible web apps.
            Focused on TypeScript, React, and modern tooling.
          </motion.p>

          <motion.div variants={staggerContainer} className="mt-5 flex flex-wrap items-center gap-2">
            <motion.div variants={itemFade}>
              <Badge variant="mono">TypeScript</Badge>
            </motion.div>
            <motion.div variants={itemFade}>
              <Badge variant="mono">React</Badge>
            </motion.div>
            <motion.div variants={itemFade}>
              <Badge variant="mono">Vite</Badge>
            </motion.div>
            <motion.div variants={itemFade}>
              <Badge variant="mono">Node.js</Badge>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-7 flex flex-wrap gap-3">
            <Button leftIcon={Mail} onClick={() => (window.location.href = 'mailto:hamza@')}>
              Contact
            </Button>
            <a href="https://github.com/h4mzashehzad" target="_blank" rel="noreferrer">
              <Button variant="ghost" leftIcon={Github}>
                GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Optional: place for animated background from React Bits if added later */}
    </section>
  )
}
