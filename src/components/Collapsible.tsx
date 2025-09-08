import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/Accordion'
import { Timeline } from './timeline/timeline'
import { ProjectCard, type ProjectCardProps } from './cards/ProjectCard'
import AboutMe from './AboutMe'
import { ProjectModal } from './ProjectModal'
import { ProjectModalProvider, useProjectModal } from '../contexts/ProjectModalContext'
import { staggerContainer, itemFade } from '../lib/animations'

function PortfolioContent() {
  const { isOpen, project, images, showLiveButton, closeModal } = useProjectModal()

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
      image: '/Projects/project1.png',
      href: 'https://www.aurazemedia.com',
      images: [
        '/Projects/auraze-media/1.png',
        '/Projects/auraze-media/2.png', 
        '/Projects/auraze-media/3.png',
        '/Projects/auraze-media/4.png',
      ], // Add your project images here: ['/Projects/project1-1.png', '/Projects/project1-2.png']
      showLiveButton: false
    },
    {
      title: 'API Dashboard',
      description: 'Live usage analytics with charts, filters, and role-based access control.',
      stack: ['TypeScript', 'Vite', 'Charts'],
      image: '/Projects/project2.png',
      href: '#',
      images: [], // Add your project images here: ['/Projects/project2-1.png', '/Projects/project2-2.png']
      showLiveButton: true
    },
    {
      title: 'Design Tokens',
      description: 'Cross-platform design tokens pipeline powering theming and accessibility.',
      stack: ['Tokens', 'CI/CD', 'Theming'],
      image: '/Projects/project3.png',
      href: '#',
      images: [], // Add your project images here: ['/Projects/project3-1.png', '/Projects/project3-2.png']
      showLiveButton: false // Example: hiding live button for this project
    },
  ]

  return (
    <>
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
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-4"
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
              <AccordionTrigger subtitle="A quick snapshot and what I'm up to">About Me</AccordionTrigger>
              <AccordionContent>
                <AboutMe />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      {/* Project Modal */}
      <ProjectModal
        isOpen={isOpen}
        onClose={closeModal}
        project={project}
        images={images}
        showLiveButton={showLiveButton}
      />
    </>
  )
}

export default function Collapsible() {
  return (
    <ProjectModalProvider>
      <PortfolioContent />
    </ProjectModalProvider>
  )
}
