import * as React from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: LucideIcon
  size?: number
  className?: string
}

export function Icon({ icon: IconCmp, size = 18, className, ...props }: IconProps) {
  return <IconCmp className={cn('shrink-0', className)} size={size} strokeWidth={1.75} {...props} />
}
