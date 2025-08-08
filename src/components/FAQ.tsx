const faqs = [
  {
    q: 'Do you handle hosting?',
    a: 'Yes, secure hosting is included in every plan.',
  },
  {
    q: 'Can you purchase my domain?',
    a: 'We guide you on choosing and connecting a domain you own.',
  },
  {
    q: 'How long does it take?',
    a: 'Most sites launch within two weeks.',
  },
  {
    q: 'How many revisions are allowed?',
    a: 'Two design rounds are included; more can be added if needed.',
  },
  {
    q: 'Do you optimize for search engines?',
    a: 'Every site ships with on-page SEO best practices.',
  },
  {
    q: 'Who owns the website?',
    a: 'You own your content and domain; cancel anytime.',
  },
]

export default function FAQ() {
  return (
    <div className="space-y-4">
      {faqs.map((item) => (
        <details key={item.q} className="rounded-md border border-brand-fg/10 p-4" data-qa="faq-item">
          <summary className="cursor-pointer font-medium focus:outline-none focus:ring-2 focus:ring-brand-accent">
            {item.q}
          </summary>
          <p className="mt-2 text-sm">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
