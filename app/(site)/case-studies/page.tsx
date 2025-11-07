import Link from 'next/link'

export const metadata = { title: 'Case Studies - Vibes Consulting' }

const caseStudies = [
  {
    number: '01',
    title: 'Training Studio',
    tagline: 'Streamlining Operations Through Smart Automation',
    slug: 'training-studio',
    challenge: 'Losing hours on repetitive admin tasks - onboarding, reminders, spreadsheets, follow-ups',
    results: ['30% faster onboarding', '8+ admin hours reclaimed weekly', '15% improved client retention'],
    industry: 'Fitness & Wellness'
  },
  {
    number: '02',
    title: 'Consulting Collective',
    tagline: 'AI Workflow Mapping for Clarity and Cadence',
    slug: 'consulting-collective',
    challenge: 'Inconsistent deliverables, unclear ownership, meeting overload, high internal friction',
    results: ['40% faster decision-making', '50% fewer meetings', 'Clear ownership across 3 teams'],
    industry: 'Creative Services'
  },
  {
    number: '03',
    title: 'Retail + Testing Space',
    tagline: 'Integrating AI to Sync CRM, Scheduling, and Analytics',
    slug: 'retail-testing-space',
    challenge: 'Disconnected platforms, manual data syncing, missed retention signals',
    results: ['NPS +18 in 45 days', '90% fewer data errors', 'Same-day client follow-ups'],
    industry: 'Retail & Performance'
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="pb-20">
      <header className="mb-12">
        <h1 className="mb-3">Case Studies</h1>
        <p className="text-white/80 max-w-2xl">Real results from real businesses. See how we've helped companies optimize flow, adopt AI, and create environments that support their teams.</p>
      </header>
      
      <div className="space-y-6">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="card p-8 block group cursor-pointer hover:border-current-600/60 transition-all"
          >
            <div className="flex items-start gap-6">
              <div className="text-6xl font-bold text-current-500/20 group-hover:text-current-500/40 transition-colors">
                {study.number}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-2xl mb-1 group-hover:text-current-500 transition-colors">{study.title}</h2>
                    <p className="text-white/80">{study.tagline}</p>
                  </div>
                  <span className="text-xs text-white/60 bg-white/5 px-3 py-1 rounded-full">{study.industry}</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-white/60 text-sm mb-2"><strong className="text-white/80">Challenge:</strong> {study.challenge}</p>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  {study.results.map((result, i) => (
                    <span key={i} className="text-xs text-current-500 bg-current-500/10 px-3 py-1 rounded-full">
                      {result}
                    </span>
                  ))}
                </div>

                <span className="text-white/60 text-sm group-hover:text-current-500 transition-colors">
                  Read full case study →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-16 card p-8 bg-current-600/10 text-center">
        <h2 className="mb-4">Ready for Your Own Success Story?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-6">Book a Flow Check to identify your biggest opportunities for improvement.</p>
        <Link href="/contact" className="btn btn-primary">Get Started</Link>
      </section>
    </div>
  )
}
