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
      title: '2025 — Present',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-200">React Native App/Web Developer</h3>
            <p className="text-slate-400">@ Markaz.pk</p>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li>Building a complex, data‑rich application with robust database connectivity, 
              real‑time data flows, and a strong focus on user experience and performance.</li>
            <li>Developing new website features and optimizing responsive UI to improve Core 
              Web Vitals, elevate user experience, and drive growth metrics.</li>
            <li>Implementing scalable feature enhancements in a complex admin dashboard 
              to add, manage, and govern content with reliable role‑based workflows.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            {['Connectivity', 'Security', 'Responsiveness', 'UI/UX'].map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: '2023 — 2024',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-200">Full Stack Developer Intern</h3>
            <p className="text-slate-400">@ GRIPHENS Technologies</p>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li>Engineered responsive websites in WordPress, Webflow, and React, collaborating with 
              design teams to translate Figma/UI/UX specs into accessible, pixel‑perfect interfaces 
              that improve engagement and conversions.</li>
            <li>Built back‑end functionality and integrated third‑party APIs 
              (payments, auth, analytics) to enable secure data flows, automation, 
              and feature scalability.</li>
            <li>Optimized performance and Core Web Vitals, resolved production issues, and 
              maintained clean Git workflows (branching, reviews, CI) for reliable releases.</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            {['Figma to Code', 'API Integration', 'Git Workflows'].map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    }
  ]

  const projects: ProjectCardProps[] = [
    {
      title: 'Commercial Property Manager App',
      description: 'A complete management app for agencies to add, update and organize listings and inquiries.',
      stack: ['React Native', 'Expo', 'MySQL', 'REST API'],
      image: '/Projects/markaz-agent/main.png',
      href: '#',
      images: [
        '/Projects/markaz-agent/1.png',
        '/Projects/markaz-agent/2.png',
        '/Projects/markaz-agent/3.png',
        '/Projects/markaz-agent/4.png',
      ], // Add your project images here: ['/Projects/project3-1.png', '/Projects/project3-2.png']
      showLiveButton: false // Example: hiding live button for this project
    },
    {
      title: 'Domain Marketplace App',
      description: 'A sleek, minimal React Native domain marketplace app dedicated to .pk domains.',
      stack: ['React Native', 'Expo', 'MySQL', 'Axios'],
      image: '/Projects/pk-domains/main.png',
      href: '#',
      images: [
        '/Projects/pk-domains/1.png',
        '/Projects/pk-domains/2.png',
        '/Projects/pk-domains/3.png',
        '/Projects/pk-domains/4.png',
      ], // Add your project images here: ['/Projects/project2-1.png', '/Projects/project2-2.png']
      showLiveButton: false
    },
    {
      title: 'Masonry Photography Portfolio',
      description: 'Dark‑mode, motion‑polished media gallery with auto‑resize and responsive performance.',
      stack: ['Vite', 'Tailwind', 'Radix', 'Supabase'],
      image: '/Projects/auraze-media/main.png',
      href: 'https://www.aurazemedia.com',
      images: [
        '/Projects/auraze-media/1.png',
        '/Projects/auraze-media/2.png', 
        '/Projects/auraze-media/3.png',
        '/Projects/auraze-media/4.png',
      ], // Add your project images here: ['/Projects/project1-1.png', '/Projects/project1-2.png']
      showLiveButton: true
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
              <AccordionTrigger subtitle="Latest work">Portfolio</AccordionTrigger>
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
