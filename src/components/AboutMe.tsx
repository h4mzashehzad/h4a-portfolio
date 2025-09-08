import { motion } from 'framer-motion'
import { Badge } from './ui/Badge'
import { staggerContainer, itemFade } from '../lib/animations'
import { Code2, Coffee, Zap, Heart, Globe, Users, BookOpen, Lightbulb } from 'lucide-react'

export default function AboutMe() {
  const personalityTraits = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: 'Problem Solver',
      description: 'I thrive on breaking down complex challenges into elegant, maintainable solutions.'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Performance Focused',
      description: 'Obsessed with creating lightning-fast, optimized experiences that users love.'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Collaborative',
      description: 'I believe the best products come from diverse teams working together seamlessly.'
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Innovation Driven',
      description: 'Always exploring cutting-edge technologies and pushing the boundaries of what\'s possible.'
    }
  ]

  const currentFocus = [
    {
      icon: <Globe className="w-4 h-4" />,
      title: 'Web3 & Blockchain',
      description: 'Building decentralized applications with modern React patterns'
    },
    {
      icon: <Zap className="w-4 h-4" />,
      title: 'AI Integration',
      description: 'Exploring LLM APIs and AI-powered user experiences'
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      title: 'System Design',
      description: 'Deepening knowledge in scalable architecture patterns'
    },
    {
      icon: <Coffee className="w-4 h-4" />,
      title: 'Open Source',
      description: 'Contributing to React ecosystem and developer tooling'
    }
  ]

  const coreSkills = {
    'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    'Backend': ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Supabase'],
    'Tools': ['Git', 'Docker', 'Vercel', 'Figma', 'Linear'],
    'Concepts': ['Design Systems', 'Performance', 'Accessibility', 'Testing']
  }

  const interests = [
    { icon: <Code2 className="w-4 h-4" />, text: 'Clean Architecture' },
    { icon: <Heart className="w-4 h-4" />, text: 'User Experience' },
    { icon: <Zap className="w-4 h-4" />, text: 'Web Performance' },
    { icon: <Globe className="w-4 h-4" />, text: 'Open Source' },
    { icon: <BookOpen className="w-4 h-4" />, text: 'Continuous Learning' },
    { icon: <Coffee className="w-4 h-4" />, text: 'Developer Tools' }
  ]

  return (
    <motion.div 
      variants={staggerContainer} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Hero Statement */}
      <motion.div variants={itemFade} className="relative pt-6">
        <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
        <div className="pl-8">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">Building the Future, One Component at a Time</h3>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            I'm a passionate full-stack developer who believes in the power of clean code, beautiful design, and 
            meaningful user experiences. With a deep love for React and modern web technologies, I craft digital 
            solutions that are not just functional, but delightful to use.
          </p>
        </div>
      </motion.div>

      {/* Personality Traits Grid */}
      <motion.div variants={itemFade}>
        <h4 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-400" />
          What Drives Me
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalityTraits.map((trait) => (
            <motion.div
              key={trait.title}
              variants={itemFade}
              className="group p-4 rounded-lg border border-slate-800/80 bg-gradient-to-br from-slate-900/50 to-slate-800/30 hover:border-slate-600/80 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-800/50 text-blue-400 group-hover:text-blue-300 transition-colors">
                  {trait.icon}
                </div>
                <div>
                  <h5 className="font-semibold text-slate-200 mb-1">{trait.title}</h5>
                  <p className="text-sm text-slate-400 leading-relaxed">{trait.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Current Focus & Learning */}
      <motion.div variants={itemFade}>
        <h4 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          Currently Exploring
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentFocus.map((item) => (
            <motion.div
              key={item.title}
              variants={itemFade}
              className="p-4 rounded-lg border border-slate-800/50 bg-slate-900/30 hover:bg-slate-900/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-purple-400">{item.icon}</div>
                <h5 className="font-medium text-slate-200">{item.title}</h5>
              </div>
              <p className="text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Matrix */}
      <motion.div variants={itemFade}>
        <h4 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-green-400" />
          Technical Arsenal
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(coreSkills).map(([category, skills]) => (
            <motion.div key={category} variants={itemFade} className="space-y-3">
              <h5 className="font-mono text-sm text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                {category}
              </h5>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="mono" className="mr-2 mb-2 hover:bg-slate-700/50 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interests & Passions */}
      <motion.div variants={itemFade}>
        <h4 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
          <Coffee className="w-5 h-5 text-orange-400" />
          Beyond the Code
        </h4>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest) => (
            <motion.div
              key={interest.text}
              variants={itemFade}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700/50 bg-slate-800/30 hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 cursor-default"
            >
              <span className="text-slate-400">{interest.icon}</span>
              <span className="text-sm text-slate-300">{interest.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div variants={itemFade} className="pt-6 border-t border-slate-800/50">
        <div className="text-center space-y-4">
          <p className="text-slate-300 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects and connect with fellow developers. 
            Let's build something amazing together!
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for new opportunities
            </span>
            <span>•</span>
            <span>Based in Pakistan</span>
            <span>•</span>
            <span>Remote-friendly</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}