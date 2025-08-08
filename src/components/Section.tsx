import type { ReactNode } from 'react'

interface Props {
  id: string
  className?: string
  children: ReactNode
}

export default function Section({ id, className = '', children }: Props) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  )
}
