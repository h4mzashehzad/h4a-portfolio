import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/Accordion'
import { Timeline } from './timeline/timeline'
import { ProjectCard, type ProjectCardProps } from './cards/ProjectCard'
import { Badge } from './ui/Badge'
import { staggerContainer, itemFade } from '../lib/animations'

export default function Collapsible() {
  const timelineData = [
    {
      title: '2023 — Present',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-200">Senior Frontend Engineer</h3>
            <p className="text-slate-400">@ Acme Inc.</p>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li>Led migration to React 18 + Vite with code-splitting and prefetching.</li>
            <li>Built UI kit with composable primitives and motion-driven interactions.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            {['TypeScript', 'React', 'Vite', 'Tailwind', 'Framer Motion'].map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: '2021 — 2023',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-200">Full‑stack Engineer</h3>
            <p className="text-slate-400">@ Globex</p>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li>Shipped SSR features and optimized TTFB for key customer flows.</li>
            <li>Implemented CI checks and tightened Lighthouse performance budgets.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            {['Node.js', 'PostgreSQL', 'Playwright'].map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: '2019 — 2021',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-200">Frontend Developer</h3>
            <p className="text-slate-400">@ StartupXYZ</p>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li>Developed responsive web applications using modern JavaScript frameworks.</li>
            <li>Collaborated with design team to implement pixel-perfect UI components.</li>
            <li>Optimized application performance and improved user experience metrics.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'Vue.js', 'SCSS', 'Webpack'].map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ]

  const projects: ProjectCardProps[] = [
    {
      title: 'Portfolio Starter',
      description: 'Dark-first, motion-polished portfolio template with accessible primitives.',
      stack: ['React', 'Tailwind', 'Radix', 'Motion'],
      href: '#',
      repo: 'https://github.com/h4mzashehzad',
    },
    {
      title: 'API Dashboard',
      description: 'Live usage analytics with charts, filters, and role-based access control.',
      stack: ['TypeScript', 'Vite', 'Charts'],
      href: '#',
      repo: '#',
    },
    {
      title: 'Design Tokens',
      description: 'Cross-platform design tokens pipeline powering theming and accessibility.',
      stack: ['Tokens', 'CI/CD', 'Theming'],
      href: '#',
      repo: '#',
    },
  ]

  const nowList = [
    'Exploring Motion patterns for complex UIs',
    'Deepening TypeScript ergonomics for DX',
    'Shipping small OSS utilities',
  ]

  const skills = ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Framer Motion', 'Radix UI']

  return (
    <section className="relative bg-slate-950">
      <div className="w-full">
        <Accordion type="single" collapsible className="divide-y divide-slate-800">
          {/* Resume */}
          <AccordionItem value="resume">
            <AccordionTrigger subtitle="Experience, roles, highlights">Resume</AccordionTrigger>
            <AccordionContent>
              <Timeline data={timelineData} />
            </AccordionContent>
          </AccordionItem>

          {/* Portfolio */}
          <AccordionItem value="portfolio">
            <AccordionTrigger subtitle="Selected work with code and demos">Portfolio</AccordionTrigger>
            <AccordionContent>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {projects.map((p, i) => (
                  <motion.div key={i} variants={itemFade}>
                    <ProjectCard {...p} />
                  </motion.div>
                ))}
              </motion.div>
            </AccordionContent>
          </AccordionItem>

          {/* About Me */}
          <AccordionItem value="about">
            <AccordionTrigger subtitle="A quick snapshot and what I’m up to">About Me</AccordionTrigger>
            <AccordionContent>
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.p variants={itemFade} className="max-w-2xl text-slate-300">
                  I build resilient, accessible, and fast web apps. I enjoy systemizing UI with composable primitives
                  and motion that supports understanding. Always learning, always shipping.
                </motion.p>

                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  <motion.div variants={itemFade}>
                    <h4 className="mb-2 font-mono text-sm text-slate-400">Now</h4>
                    <ul className="list-disc space-y-1 pl-4 text-sm text-slate-300">
                      {nowList.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div variants={itemFade}>
                    <h4 className="mb-2 font-mono text-sm text-slate-400">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((s) => (
                        <Badge key={s} variant="mono">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
