import type { Transition, Variants } from 'framer-motion'

export const spring: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 22,
  mass: 0.8,
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...spring },
  },
}

export const itemFade: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...spring },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

export const hoverLift = (amount = 3) => ({
  whileHover: { y: -amount },
  whileTap: { y: 0 },
})
