import Link from 'next/link'

export const metadata = { title: 'Services — Vibes Consulting' }

const services = [
  {
    title: 'Business Flow Consulting',
    slug: 'business-flow',
    description: 'End-to-end process optimization using TQM principles. Identify friction, map ideal state, implement lasting change.',
    bullets: ['Friction Audit', 'Flow Map (current vs ideal)', '90-Day Improvement Plan'],
    investment: '$2,500'
  },
  {
    title: 'AI Integration for Small Business',
    slug: 'ai-integration',
    description: 'Practical AI adoption that increases productivity without introducing risk. Safe tools, proper training, real results.',
    bullets: ['AI Opportunity Scan', 'Safe AI stack + trainings', 'SOPs & quick-start library'],
    investment: '$4,500'
  },
  {
    title: 'Culture & Environment Optimization',
    slug: 'culture-optimization',
    description: 'Design rituals, cadences, and spaces that help teams do their best work. Move from chaos to clarity.',
    bullets: ['Culture Flow Report', 'Rituals & cadences', 'Quarterly Vibe Reset'],
    investment: 'From $5,500'
  }
]

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1>Services</h1>
        <p className="mt-3 max-w-2xl">We blend Total Quality Management, human-centered systems, and safe AI to remove friction and amplify flow.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        {services.map(s => (
          <Link 
            key={s.slug} 
            href={`/services/${s.slug}`}
            className="card p-6 hover:border-walnut/50 transition-colors group"
          >
            <h3 className="mb-2 group-hover:text-walnut transition-colors">{s.title}</h3>
            <p className="text-white/60 text-sm mb-4">{s.description}</p>
            <ul className="list-disc pl-5 text-white/80 space-y-2 text-sm mb-4">
              {s.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-white/90 font-medium">{s.investment}</span>
              <span className="text-white/60 text-sm group-hover:text-white transition-colors">Learn more →</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="card p-8 mt-12">
        <h2 className="mb-4">Not sure which service fits?</h2>
        <p className="text-white/80 mb-6 max-w-2xl">Book a 30-minute intro call. We'll ask about your biggest friction points and recommend the right starting place. No pressure, no sales pitch.</p>
        <Link href="/contact" className="btn btn-primary">Schedule Intro Call</Link>
      </section>
    </div>
  )
}

