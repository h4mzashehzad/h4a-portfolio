import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const itemRef = React.useRef<HTMLDivElement>(null)
  
  React.useEffect(() => {
    const element = itemRef.current
    if (!element) return
    
    const handleStateChange = () => {
      const isOpen = element.getAttribute('data-state') === 'open'
      if (isOpen) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          })
        }, 150)
      }
    }
    
    const observer = new MutationObserver(handleStateChange)
    observer.observe(element, { attributes: true, attributeFilter: ['data-state'] })
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <AccordionPrimitive.Item 
      ref={(node) => {
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
        itemRef.current = node
      }} 
      className={cn(
        'w-full border-b border-slate-700/50 backdrop-blur-sm',
        'hover:border-slate-600/70 transition-all duration-300',
        'bg-gradient-to-r from-slate-900/20 to-slate-800/10',
        'mb-0 overflow-hidden',
        className
      )} 
      {...props} 
    />
  )
})
AccordionItem.displayName = 'AccordionItem'

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { subtitle?: React.ReactNode }
>(({ className, children, subtitle, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex w-full items-center justify-between px-8 py-8 text-left cursor-pointer',
        'text-xl font-bold text-slate-100 transition-all duration-300',
        'hover:text-white hover:bg-slate-800/30',
        'focus:outline-none focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-2 focus:ring-offset-slate-900',
        'data-[state=open]:text-white data-[state=open]:bg-slate-800/20',
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <motion.div 
          className="text-2xl font-bold tracking-tight"
          initial={false}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {children}
        </motion.div>
        {subtitle ? (
          <motion.div 
            className="text-base text-slate-400 font-medium"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {subtitle}
          </motion.div>
        ) : null}
      </div>
      <motion.div
        initial={false}
        animate={{ rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        className="group-data-[state=open]:rotate-180 transition-transform duration-300 ease-out"
      >
        <ChevronDown
          className="size-7 shrink-0 text-slate-400 group-hover:text-slate-200 group-data-[state=open]:text-white transition-colors duration-200"
          aria-hidden="true"
        />
      </motion.div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = 'AccordionTrigger'

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden text-slate-300',
      'data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up',
      className,
    )}
    {...props}
  >
    <motion.div 
      className="px-8 pb-8 pt-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ 
        duration: 0.3, 
        ease: [0.4, 0.0, 0.2, 1],
        delay: 0.1
      }}
    >
      <div className="text-lg leading-relaxed text-slate-300 space-y-4">
        {children}
      </div>
    </motion.div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = 'AccordionContent'
