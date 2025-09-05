import { motion } from 'framer-motion'
import { fadeInUp } from '../lib/animations'

export default function ProfileCard() {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative mx-auto w-96 h-116 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50"
    >
      {/* Glimmer animation background */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute inset-0 translate-x-[-100%] animate-[shimmer_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
        </div>
      </div>
      
      {/* Profile image covering full card */}
      <div className="relative z-10 h-full w-full">
        <img
          src="/hero_frontal_self.png"
          alt="Hamza Shehzad"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
    </motion.div>
  )
}