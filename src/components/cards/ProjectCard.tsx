import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { hoverLift, itemFade } from '../../lib/animations'

export interface ProjectCardProps {
  title: string
  description: string
  stack: string[]
  href?: string
  repo?: string
}

export function ProjectCard({ title, description, stack, href, repo }: ProjectCardProps) {
  return (
    <motion.article
      className="group relative rounded-lg border border-slate-800/80 bg-slate-900/50 p-5 backdrop-blur-sm transition-colors hover:border-slate-700"
      {...hoverLift(4)}
      variants={itemFade}
    >
      <header className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
        <div className="flex items-center gap-2">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition-colors hover:text-slate-200 cursor-pointer"
              aria-label="Open live demo"
            >
              <ExternalLink className="size-4" />
            </a>
          ) : null}
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition-colors hover:text-slate-200 cursor-pointer"
              aria-label="Open GitHub repo"
            >
              <Github className="size-4" />
            </a>
          ) : null}
        </div>
      </header>
      <p className="text-sm text-slate-300/90">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((s) => (
          <Badge key={s} variant="outline">
            {s}
          </Badge>
        ))}
      </div>
    </motion.article>
  )
}
