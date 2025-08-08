import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'rounded-md px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-accent transition-colors'
  const variants: Record<string, string> = {
    primary: 'bg-brand-primary text-brand-fg hover:bg-brand-accent',
    secondary: 'bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-brand-fg',
  }
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
