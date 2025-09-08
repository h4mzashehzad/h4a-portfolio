import { motion } from 'framer-motion'
import { Badge } from '../ui/Badge'
import { hoverLift, itemFade } from '../../lib/animations'
import { useProjectModal } from '../../contexts/ProjectModalContext'

export interface ProjectCardProps {
  title: string
  description: string
  stack: string[]
  image?: string
  href?: string
  images?: string[] // Array of images for the modal
  showLiveButton?: boolean // Option to show/hide live website button
}

export function ProjectCard({ 
  title, 
  description, 
  stack, 
  image, 
  href, 
  images = [], 
  showLiveButton = true 
}: ProjectCardProps) {
  const { openModal } = useProjectModal()

  const handleClick = () => {
    openModal(
      { title, description, stack, image, href },
      images,
      showLiveButton
    )
  }

  return (
    <motion.article
      className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:border-slate-600/80 hover:shadow-xl hover:shadow-slate-900/20 cursor-pointer"
      {...hoverLift(6)}
      variants={itemFade}
      onClick={handleClick}
    >
      {/* Image Section */}
      {image && (
        <div className="relative h-85 w-full overflow-hidden">
          <img
            src={image}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        </div>
      )}
      
      {/* Content Section */}
      <div className="p-6">
        <header className="mb-3">
          <h3 className="text-xl font-bold text-slate-100 transition-colors group-hover:text-white">
            {title}
          </h3>
        </header>
        
        <p className="mb-4 text-slate-300/90 leading-relaxed">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline"
              className="border-slate-600/50 bg-slate-800/50 text-slate-300 transition-colors hover:border-slate-500 hover:bg-slate-700/50 hover:text-slate-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
