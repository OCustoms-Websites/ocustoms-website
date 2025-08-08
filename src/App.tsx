import { useState } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Button from './components/ui/Button'
import Card from './components/ui/Card'
import Badge from './components/ui/Badge'
import Input from './components/ui/Input'
import TextArea from './components/ui/TextArea'
import ComingSoonDialog from './components/ComingSoonDialog'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { fakeSubmitContact } from './lib/fakeSubmitContact'
import type { ContactFormData } from './lib/fakeSubmitContact'
import { track } from './lib/analytics'
import {
  CheckCircle,
  Zap,
  Layout,
  LifeBuoy,
  Compass,
  Palette,
  Code2,
  Rocket,
} from 'lucide-react'

function Hero() {
  return (
    <Section id="home" className="relative pt-32 text-center">
      <div className="absolute inset-0 -z-10 animate-pulse bg-[radial-gradient(circle_at_top_left,var(--brand-primary)_0%,transparent_70%)]" />
      <h1 className="mb-4 text-4xl font-bold">
        Launch a polished travel-agent portfolio in days—not months.
      </h1>
      <p className="mb-8 text-lg">
        We design, build, and support websites for independent agents and small agencies.
      </p>
      <div className="flex justify-center gap-4">
        <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Book a consult
        </Button>
        <Button
          variant="secondary"
          onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
        >
          See templates
        </Button>
      </div>
    </Section>
  )
}

function Why() {
  const items = [
    { icon: CheckCircle, title: 'Done-for-you setup' },
    { icon: Zap, title: 'Fast & SEO-ready' },
    { icon: Layout, title: 'Template or custom' },
    { icon: LifeBuoy, title: 'Ongoing support' },
  ]
  return (
    <Section id="why">
      <h2 className="mb-8 text-center text-3xl font-bold">Why choose us</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {items.map(({ icon: Icon, title }) => (
          <div key={title} className="text-center">
            <Icon className="mx-auto mb-2 h-8 w-8 text-brand-primary" />
            <p className="font-semibold">{title}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Templates() {
  const templates = ['Luxury', 'Adventure', 'Family', 'Corporate', 'Destination weddings', 'Cruise']
  return (
    <Section id="templates">
      <h2 className="mb-8 text-center text-3xl font-bold">Templates</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {templates.map((t) => (
          <ComingSoonDialog key={t}>
            <Card className="cursor-pointer text-center hover:shadow-md">
              <p className="font-semibold">{t}</p>
            </Card>
          </ComingSoonDialog>
        ))}
      </div>
    </Section>
  )
}

function Process() {
  const steps = [
    { icon: Compass, title: 'Discover' },
    { icon: Palette, title: 'Design' },
    { icon: Code2, title: 'Build' },
    { icon: Rocket, title: 'Launch' },
  ]
  return (
    <Section id="process">
      <h2 className="mb-8 text-center text-3xl font-bold">Our process</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {steps.map(({ icon: Icon, title }, i) => (
          <div key={title} className="text-center">
            <Icon className="mx-auto mb-2 h-8 w-8 text-brand-primary" />
            <p className="font-semibold">
              {i + 1}. {title}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')
  const tiers = [
    { name: 'Starter', price: 59, popular: false },
    { name: 'Pro', price: 129, popular: true },
    { name: 'Agency', price: 0, custom: true },
  ]
  return (
    <Section id="pricing">
      <h2 className="mb-4 text-center text-3xl font-bold">Pricing</h2>
      <div className="mb-8 flex justify-center gap-2">
        <button
          onClick={() => setBilling('monthly')}
          className={`rounded-l-md px-3 py-1 text-sm font-medium border border-brand-primary ${
            billing === 'monthly' ? 'bg-brand-primary text-brand-fg' : 'bg-transparent text-brand-fg'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling('yearly')}
          className={`rounded-r-md px-3 py-1 text-sm font-medium border border-brand-primary ${
            billing === 'yearly' ? 'bg-brand-primary text-brand-fg' : 'bg-transparent text-brand-fg'
          }`}
        >
          Yearly
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col items-center text-center">
            <h3 className="mb-2 text-2xl font-bold">{tier.name}</h3>
            {tier.popular && <Badge className="mb-2">Most popular</Badge>}
            {tier.custom ? (
              <p className="mb-4 text-3xl font-bold">Custom</p>
            ) : (
              <p className="mb-4 text-3xl font-bold">
                {billing === 'monthly' ? (
                  <>${tier.price}/mo</>
                ) : (
                  <>
                    <span className="mr-2 line-through">${tier.price * 12}</span>${tier.price * 10}/yr
                  </>
                )}
              </p>
            )}
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact us
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Valid email required'),
    phone: z.string().optional(),
    business: z.string().min(1, 'Business name required'),
    url: z.string().url('Invalid URL').optional().or(z.literal('')),
    message: z.string().min(1, 'Message is required'),
  })
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>()

  const onSubmit = async (values: ContactFormData) => {
    const result = schema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      Object.entries(fieldErrors).forEach(([field, messages]) => {
        if (messages && messages[0]) {
          setError(field as keyof ContactFormData, { type: 'manual', message: messages[0] })
        }
      })
      return
    }
    await fakeSubmitContact(result.data)
    track('contact_submit', result.data)
    reset()
  }

  return (
    <Section id="contact">
      <h2 className="mb-8 text-center text-3xl font-bold">Contact</h2>
      <div className="mx-auto max-w-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input placeholder="Name*" {...register('name')} />
            {errors.name && (
              <p className="text-sm text-brand-warn">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input type="email" placeholder="Email*" {...register('email')} />
            {errors.email && (
              <p className="text-sm text-brand-warn">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Input placeholder="Phone" {...register('phone')} />
            {errors.phone && (
              <p className="text-sm text-brand-warn">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <Input placeholder="Business name*" {...register('business')} />
            {errors.business && (
              <p className="text-sm text-brand-warn">{errors.business.message}</p>
            )}
          </div>
          <div>
            <Input placeholder="Current site URL" {...register('url')} />
            {errors.url && (
              <p className="text-sm text-brand-warn">{errors.url.message}</p>
            )}
          </div>
          <div>
            <TextArea rows={5} placeholder="Message*" {...register('message')} />
            {errors.message && (
              <p className="text-sm text-brand-warn">{errors.message.message}</p>
            )}
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Sending...' : 'Send message'}
          </Button>
          {isSubmitSuccessful && (
            <p className="text-center text-brand-accent">Thanks! We'll be in touch.</p>
          )}
        </form>
        <p className="mt-4 text-center">
          <a href="#" className="underline">
            Schedule a call
          </a>
        </p>
      </div>
    </Section>
  )
}

function Footer() {
  const nav = ['home', 'why', 'templates', 'process', 'testimonials', 'pricing', 'faq', 'contact']
  const [newsletter, setNewsletter] = useState('')
  const [joined, setJoined] = useState(false)
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setJoined(true)
  }
  return (
    <footer className="bg-brand-bg/90 py-8">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-bold">ocustoms digital solutions</p>
          <p className="text-sm">Web portfolios for travel agents, delivered fast.</p>
        </div>
        <nav>
          <ul className="space-y-2">
            {nav.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-brand-accent">
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          {joined ? (
            <p>Thanks for joining!</p>
          ) : (
            <form onSubmit={submit} className="mb-4 flex gap-2">
              <Input
                type="email"
                value={newsletter}
                onChange={(e) => setNewsletter(e.target.value)}
                placeholder="Email"
                required
              />
              <Button type="submit">Join</Button>
            </form>
          )}
          <div className="flex gap-2">
            <a href="#" aria-label="Twitter" className="text-brand-fg">
              T
            </a>
            <a href="#" aria-label="Facebook" className="text-brand-fg">
              F
            </a>
            <a href="#" aria-label="Instagram" className="text-brand-fg">
              I
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Why />
        <Templates />
        <Process />
        <Section id="testimonials">
          <h2 className="mb-8 text-center text-3xl font-bold">Testimonials</h2>
          <Testimonials />
        </Section>
        <Pricing />
        <Section id="faq">
          <h2 className="mb-8 text-center text-3xl font-bold">FAQ</h2>
          <FAQ />
        </Section>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
