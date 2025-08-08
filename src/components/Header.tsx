import useScrollSpy from '../hooks/useScrollSpy'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'why', label: 'Why us' },
  { id: 'templates', label: 'Templates' },
  { id: 'process', label: 'Process' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const active = useScrollSpy(navItems.map((n) => n.id))
  return (
    <header className="fixed top-0 z-50 w-full bg-brand-bg/80 backdrop-blur">
      <nav className="container flex items-center justify-between py-4">
        <a href="#home" className="font-bold text-brand-fg focus:outline-none focus:ring-2 focus:ring-brand-accent">
          ocustoms digital solutions
        </a>
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent ${
                  active === item.id ? 'text-brand-accent' : ''
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
