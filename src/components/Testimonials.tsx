import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Card from './ui/Card'

const testimonials = [
  {
    quote: 'My portfolio was live in a week and looks amazing.',
    author: 'Independent agent',
  },
  {
    quote: 'Clients love our new site. We saw inquiries jump immediately.',
    author: 'Small agency',
  },
  {
    quote: 'The luxury template perfectly matched our brand.',
    author: 'Luxury specialist',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((index + testimonials.length - 1) % testimonials.length)
  const next = () => setIndex((index + 1) % testimonials.length)

  return (
    <div className="relative" role="region" aria-roledescription="carousel">
      <Card className="text-center">
        <p className="mb-4 italic">“{testimonials[index].quote}”</p>
        <p className="font-semibold">— {testimonials[index].author}</p>
      </Card>
      <button
        aria-label="Previous testimonial"
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-brand-fg text-brand-bg p-2"
      >
        <ChevronLeft />
      </button>
      <button
        aria-label="Next testimonial"
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-brand-fg text-brand-bg p-2"
      >
        <ChevronRight />
      </button>
    </div>
  )
}
