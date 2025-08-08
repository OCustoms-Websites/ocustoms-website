import type { HTMLAttributes } from 'react'

export default function Badge({ className = '', ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={`inline-block rounded-full bg-brand-accent px-2 py-1 text-xs font-medium text-brand-bg ${className}`} {...props} />
}
