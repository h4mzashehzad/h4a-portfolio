import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { ProjectCardProps } from '../components/cards/ProjectCard'

interface ProjectModalContextType {
  isOpen: boolean
  project: ProjectCardProps | null
  images: string[]
  showLiveButton: boolean
  openModal: (project: ProjectCardProps, images?: string[], showLiveButton?: boolean) => void
  closeModal: () => void
}

const ProjectModalContext = createContext<ProjectModalContextType | undefined>(undefined)

interface ProjectModalProviderProps {
  children: ReactNode
}

export function ProjectModalProvider({ children }: ProjectModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [project, setProject] = useState<ProjectCardProps | null>(null)
  const [images, setImages] = useState<string[]>([])
  const [showLiveButton, setShowLiveButton] = useState(true)

  const openModal = (
    projectData: ProjectCardProps, 
    projectImages: string[] = [], 
    showButton: boolean = true
  ) => {
    setProject(projectData)
    setImages(projectImages)
    setShowLiveButton(showButton)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    // Delay clearing data to allow exit animation to complete
    setTimeout(() => {
      setProject(null)
      setImages([])
      setShowLiveButton(true)
    }, 300)
  }

  const value = {
    isOpen,
    project,
    images,
    showLiveButton,
    openModal,
    closeModal
  }

  return (
    <ProjectModalContext.Provider value={value}>
      {children}
    </ProjectModalContext.Provider>
  )
}

export function useProjectModal() {
  const context = useContext(ProjectModalContext)
  if (context === undefined) {
    throw new Error('useProjectModal must be used within a ProjectModalProvider')
  }
  return context
}