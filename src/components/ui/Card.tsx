import type { HTMLAttributes } from 'react'

export default function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl bg-brand-fg text-brand-bg p-6 shadow-sm ${className}`}
      {...props}
    />
  )
}
