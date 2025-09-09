import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Eye } from 'lucide-react'
import { Button } from './ui/neon-button'
import type { ProjectCardProps } from './cards/ProjectCard'
import { useState } from 'react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: ProjectCardProps | null
  images?: string[] // Array of image URLs for the 2-column grid
  showLiveButton?: boolean // Option to hide/show the live website button
}

export function ProjectModal({ 
  isOpen, 
  onClose, 
  project, 
  images = [], 
  showLiveButton = true 
}: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!project) return null

  const handleLiveWebsiteClick = () => {
    if (project.href) {
      window.open(project.href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* Backdrop with blur effect */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-7xl h-[90vh] bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              duration: 0.4 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white transition-all duration-200 backdrop-blur-sm cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content Container */}
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-slate-700/50">
                <h2 className="text-3xl font-bold text-slate-100">
                  {project.title}
                </h2>
              </div>

              {/* Images Grid */}
              <div className="flex-1 p-6 overflow-y-auto relative">
                {images.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-lg bg-slate-800/30 border border-slate-700/30 group cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Preview button - visible on mobile, hover on desktop */}
                        <div className="absolute bottom-2 right-2 p-2 bg-black/60 rounded-full transition-all duration-200 md:opacity-0 md:group-hover:opacity-100">
                          <Eye className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-slate-800/50 rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-slate-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-slate-300 mb-2">
                          Project Images
                        </h3>
                        <p className="text-slate-400 text-sm">
                          Add project images to the images array to display them here in a 2-column grid.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Hovering CTA Button */}
                {showLiveButton && project.href && images.length > 0 && (
                  <motion.div 
                    className="absolute bottom-4 right-4 z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button
                      onClick={handleLiveWebsiteClick}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Website
                    </Button>
                  </motion.div>
                )}
              </div>

              {/* Footer with CTA Button (for when no images) */}
              {showLiveButton && project.href && images.length === 0 && (
                <motion.div 
                  className="p-6 border-t border-slate-700/50 bg-slate-900/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex justify-center">
                    <Button
                      onClick={handleLiveWebsiteClick}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Website
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Full-size Image Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[95vw] max-h-[95vh] bg-slate-900 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Full-size Image */}
              <img
                src={selectedImage}
                alt="Full size view"
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}