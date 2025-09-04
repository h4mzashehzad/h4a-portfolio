import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-b border-slate-800', className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { subtitle?: React.ReactNode }
>(({ className, children, subtitle, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex w-full items-center justify-between py-4 text-left',
        'text-base text-slate-200 transition-colors hover:text-white',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div className="text-lg font-semibold">{children}</div>
        {subtitle ? <div className="text-sm text-slate-400">{subtitle}</div> : null}
      </div>
      <ChevronDown
        className="size-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-slate-400"
        aria-hidden="true"
      />
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
    <div className="pb-6 pt-2">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = 'AccordionContent'
