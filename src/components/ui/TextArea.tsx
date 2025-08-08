import { forwardRef } from 'react'
import type { TextareaHTMLAttributes } from 'react'

const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = '', ...props }, ref) => (
    <textarea
      ref={ref}
      className={`w-full rounded-md border border-brand-primary/30 bg-brand-bg/10 p-2 text-brand-fg placeholder-brand-fg/50 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary ${className}`}
      {...props}
    />
  )
)

export default TextArea
