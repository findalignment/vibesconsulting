export const metadata = { title: 'Services — Vibes Consulting' }

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1>Services</h1>
        <p className="mt-3 max-w-2xl">We blend Total Quality Management, human-centered systems, and safe AI to remove friction and amplify flow.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        {[{
          title: 'Business Flow Consulting',
          bullets: ['Friction Audit', 'Flow Map (current vs ideal)', '90-Day Improvement Plan']
        },{
          title: 'AI Integration for Small Business',
          bullets: ['AI Opportunity Scan', 'Safe AI stack + trainings', 'SOPs & quick-start library']
        },{
          title: 'Culture & Environment Optimization',
          bullets: ['Culture Flow Report', 'Rituals & cadences', 'Quarterly Vibe Reset']
        }].map(s => (
          <div key={s.title} className="card p-6">
            <h3 className="mb-3">{s.title}</h3>
            <ul className="list-disc pl-5 text-white/80 space-y-2">
              {s.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}

