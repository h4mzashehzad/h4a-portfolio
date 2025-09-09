import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, User, Phone, MessageSquare, Shield } from 'lucide-react'
import { Button } from './ui/Button'
import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [state, handleFormspreeSubmit] = useForm("mqadnkev")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: ''
  })
  const [captchaError, setCaptchaError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear captcha error when user types
    if (name === 'captcha') {
      setCaptchaError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate captcha
    if (formData.captcha !== '6') {
      setCaptchaError('Please try again. The answer should be 6.')
      return
    }
    
    setCaptchaError('')
    
    // Submit to Formspree
    await handleFormspreeSubmit(e)
    
    // Close modal after successful submission
    if (state.succeeded) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient glows */}
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors duration-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="relative p-6 pb-4">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-2xl font-bold text-white mb-2"
              >
                Get in Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-slate-300 text-sm"
              >
                Leave your details down below, and I'll reach out in no time!
              </motion.p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="relative p-6 pt-2 space-y-4">
              {/* Success Message */}
              {state.succeeded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center"
                >
                  <p className="text-green-400 font-medium">Thanks for your message! I'll get back to you soon.</p>
                </motion.div>
              )}
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="space-y-2"
              >
                <label htmlFor="name" className="block text-sm font-medium text-slate-200">
                  Name <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                    placeholder="Your name"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-2"
              >
                <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                  Email <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                    placeholder="email@example.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
              </motion.div>

              {/* Phone Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="space-y-2"
              >
                <label htmlFor="phone" className="block text-sm font-medium text-slate-200">
                  Phone <span className="text-slate-400">(Optional)</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                  <ValidationError 
                    prefix="Phone" 
                    field="phone"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="space-y-2"
              >
                <label htmlFor="message" className="block text-sm font-medium text-slate-200">
                  Message <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
              </motion.div>

              {/* Captcha Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="space-y-2"
              >
                <label htmlFor="captcha" className="block text-sm font-medium text-slate-200">
                  Quick test (just making sure you're not a robot 🤖) <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    id="captcha"
                    name="captcha"
                    required
                    value={formData.captcha}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                      captchaError 
                        ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' 
                        : 'border-slate-600/50 focus:ring-cyan-500/50 focus:border-cyan-500/50'
                    }`}
                    placeholder="2 + 4 = ?"
                  />
                </div>
                {captchaError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {captchaError}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="pt-2"
              >
                <Button
                  type="submit"
                  className="w-full px-4 py-3 text-base font-medium bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-transparent transition-all duration-200 cursor-pointer"
                  disabled={state.submitting}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}