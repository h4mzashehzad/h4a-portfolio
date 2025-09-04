import * as React from 'react'

interface SectionProps {
  id?: string
  title: string
  subtitle?: string
  description?: string
  children?: React.ReactNode
}

export function Section({ id, title, subtitle, description, children }: SectionProps) {
  return (
    <section id={id} className="container mx-auto px-4">
      <header className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-100">{title}</h2>
        {subtitle ? <p className="mt-1 text-slate-400">{subtitle}</p> : null}
        {description ? <p className="mt-3 max-w-2xl text-slate-300">{description}</p> : null}
      </header>
      {children}
    </section>
  )
}
