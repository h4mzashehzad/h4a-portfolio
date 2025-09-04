import { motion } from 'framer-motion'
import { itemFade, staggerContainer } from '../../lib/animations'
import { Badge } from '../ui/Badge'

export interface TimelineItem {
  company: string
  role: string
  period: string
  bullets: string[]
  stack?: string[]
}

export interface ResumeTimelineProps {
  items: TimelineItem[]
}

export function ResumeTimeline({ items }: ResumeTimelineProps) {
  return (
    <motion.ol variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative ml-2 border-l border-slate-800 pl-6">
      {items.map((it, idx) => (
        <motion.li key={idx} variants={itemFade} className="relative mb-8">
          <div className="absolute -left-[9px] top-1 size-2 rounded-full bg-slate-500" />
          <div className="mb-1 text-sm text-slate-400">{it.period}</div>
          <div className="text-slate-200">
            <span className="font-semibold">{it.role}</span>
            <span className="text-slate-400"> @ {it.company}</span>
          </div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
            {it.bullets.map((b, bi) => (
              <li key={bi}>{b}</li>
            ))}
          </ul>
          {it.stack && it.stack.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {it.stack.map((s) => (
                <Badge key={s} variant="outline">
                  {s}
                </Badge>
              ))}
            </div>
          ) : null}
        </motion.li>
      ))}
    </motion.ol>
  )
}
