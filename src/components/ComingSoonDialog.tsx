import { useState } from 'react'
import type { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import Button from './ui/Button'
import Input from './ui/Input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({ email: z.string().email('Valid email required') })

type FormData = z.infer<typeof schema>;

export default function ComingSoonDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, setError, formState: { errors } } = useForm<FormData>()

  const onSubmit = (values: FormData) => {
    const result = schema.safeParse(values)
    if (!result.success) {
      setError('email', { message: result.error.issues[0].message })
      return
    }
    setSubmitted(true)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-brand-fg p-6 text-brand-bg focus:outline-none">
          <Dialog.Title className="mb-2 text-xl font-semibold">Templates are coming soon</Dialog.Title>
          <Dialog.Description className="mb-4 text-sm">
            We're crafting a set of ready-to-go travel niches. Drop your email to be first to know.
          </Dialog.Description>
          <Dialog.Close asChild>
            <button aria-label="Close" className="absolute right-3 top-3 text-brand-bg">
              <X />
            </button>
          </Dialog.Close>
          {submitted ? (
            <p className="text-sm">Thanks! We'll be in touch.</p>
          ) : showForm ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <Input type="email" placeholder="you@example.com" {...register('email')} />
              {errors.email && (
                <p className="text-sm text-brand-warn">{errors.email.message}</p>
              )}
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          ) : (
            <Button onClick={() => setShowForm(true)}>Notify me</Button>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
