import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative isolate bg-black text-white overflow-hidden">
      {/* Top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      {/* Soft ambient glows */}
      <div className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <div className="mx-auto w-full max-w-screen-2xl px-6 py-16 sm:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -20% 0px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
        >
          Let's build something cool!
        </motion.h2>

        <motion.a
          href="mailto:hi@h4a.dev"
          aria-label="Email Hamza at hi@h4a.dev"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -20% 0px' }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 inline-block bg-gradient-to-br from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight underline decoration-white/10 underline-offset-[10px] hover:decoration-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60"
        >
          hi@h4a.dev
        </motion.a>
      </div>

      {/* Minimal bottom bar */}
      <div className="border-t border-white/10 bg-black/95">
        <div className="mx-auto w-full max-w-screen-2xl px-6 py-4 flex items-center justify-between text-sm text-white/70">
          <span className="flex items-center gap-2">
            <span aria-hidden="true">©</span>
            <span>2025 Hamza Shehzad</span>
          </span>
          <nav className="flex items-center gap-4">
            <a
              href="https://github.com/h4mzashehzad"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white/90 transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamzashehzadpk"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white/90 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
