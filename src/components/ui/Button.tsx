import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import type { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Icon } from './Icon'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-md border',
    'transition-colors outline-none disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
  ].join(' '),
  {
    variants: {
      variant: {
        primary:
          'border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700',
        ghost:
          'border-transparent bg-transparent text-slate-200 hover:bg-slate-800/60',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-11 px-5 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props}>
        {leftIcon ? <Icon icon={leftIcon} className="opacity-90" /> : null}
        {children}
        {rightIcon ? <Icon icon={rightIcon} className="opacity-90" /> : null}
      </button>
    )
  },
)
Button.displayName = 'Button'
