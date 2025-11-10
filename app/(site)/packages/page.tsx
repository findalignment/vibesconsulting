import Link from 'next/link'

export const metadata = { title: 'Packages - Vibes Consulting' }

const packages = [
  { 
    name: 'The Flow Check',
    slug: 'flow-check',
    desc: 'A 2-week diagnostic identifying bottlenecks, cultural drag, and operational blind spots. Credit applied to any engagement.', 
    duration: '2 weeks', 
    price: '$2,500',
    highlights: ['Friction Audit', 'Flow Map', '90-Day Improvement Plan', 'Credit toward next engagement']
  },
  { 
    name: 'The Flow Rebuild',
    slug: 'flow-rebuild',
    desc: '6-week rebuild of one critical system: meetings, onboarding, or workflow. Includes AI enablement and custom SOPs.', 
    duration: '6 weeks', 
    price: '$8,000',
    highlights: ['System redesign', 'AI tool integration', 'Team training', 'SOP library']
  },
  { 
    name: 'The Vibe Partnership',
    slug: 'vibe-partnership',
    desc: 'Quarterly retainer for full ongoing support: ops flow, team culture, and AI strategy. For teams committed to continuous improvement.', 
    duration: '3 months', 
    price: '$3,500/mo',
    highlights: ['Quarterly Vibe Resets', 'Monthly pulse surveys', 'On-call support', 'Priority access']
  },
]

const addons = [
  { name: 'AI Prompt Library', slug: 'addons/ai-prompt-library', desc: 'Custom prompt templates for your most common tasks', price: '$1,000' },
  { name: 'Meeting OS', slug: 'addons/meeting-os', desc: 'Complete meeting cadence redesign with templates and rituals', price: '$1,500' },
  { name: 'Brand/Space Vibe Redesign', slug: 'addons/vibe-redesign', desc: 'Physical or digital environment optimization for flow', price: '$2,000' },
]

export default function PackagesPage() {
  return (
    <div className="pb-20">
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="mb-6">Packages</h1>
        <p className="text-brand-text/70 text-xl">Simple offers built for small businesses who value clarity and momentum. Each package is designed to deliver tangible results without overwhelming your operations.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {packages.map(p => (
          <Link 
            key={p.name} 
            href={`/packages/${p.slug}`}
            className="service-card flex flex-col group"
          >
            <h3 className="mb-4 group-hover:text-brand-accent transition-colors">{p.name}</h3>
            <p className="text-brand-text/70 mb-6 flex-1 leading-relaxed">{p.desc}</p>
            
            <div className="mb-6 bg-brand-neutral/10 -mx-8 px-8 py-6">
              <h4 className="text-sm font-bold text-brand-text uppercase tracking-wide mb-3">What's included:</h4>
              <ul className="space-y-2">
                {p.highlights.map(h => (
                  <li key={h} className="text-brand-text/80 flex items-start gap-2">
                    <span className="text-brand-accent mt-1">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6 border-t border-brand-neutral flex items-center justify-between">
              <span className="text-brand-text/60 font-medium">{p.duration}</span>
              <div className="flex items-center gap-3">
                <span className="text-brand-text font-bold text-xl">{p.price}</span>
                <span className="text-brand-accent group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <section className="mb-20">
        <h2 className="mb-6 text-center">Add-Ons</h2>
        <p className="text-brand-text/70 mb-10 max-w-2xl mx-auto text-center text-lg">Extend any package with these focused deliverables.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {addons.map(a => (
            <Link 
              key={a.name} 
              href={`/packages/${a.slug}`}
              className="card p-8 group"
            >
              <h3 className="text-xl mb-3 group-hover:text-brand-accent transition-colors">{a.name}</h3>
              <p className="text-brand-text/70 mb-6">{a.desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-brand-neutral">
                <p className="text-brand-text font-bold text-lg">{a.price}</p>
                <span className="text-brand-accent group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-20 bg-brand-neutral/10 -mx-6 px-6 py-16 md:-mx-8 md:px-8 rounded-3xl">
        <h2 className="mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-5xl mb-4">📞</div>
            <div className="text-brand-accent font-bold mb-3 text-lg">1. Book Intro Call</div>
            <p className="text-brand-text/70">30-minute conversation to understand your friction points and recommend the right package.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🔍</div>
            <div className="text-brand-accent font-bold mb-3 text-lg">2. Start with Flow Check</div>
            <p className="text-brand-text/70">Most clients begin here. It's low-risk, high-insight, and credit applies to larger engagements.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <div className="text-brand-accent font-bold mb-3 text-lg">3. Decide Next Steps</div>
            <p className="text-brand-text/70">After the Flow Check, you'll know exactly what needs fixing. Continue with Rebuild or Partnership as needed.</p>
          </div>
        </div>
      </section>

      <section className="card p-12 md:p-16 bg-brand-accent/5 border-2 border-brand-accent text-center mb-16">
        <h2 className="mb-6">Not Sure Which Package Fits?</h2>
        <p className="text-brand-text/70 max-w-2xl mx-auto mb-8 text-lg">Most clients start with The Flow Check. It's a low-commitment way to diagnose what's really going on and build a roadmap. The $2,500 is fully credited if you continue.</p>
        <Link href="/contact" className="btn btn-primary">Book Your Flow Check</Link>
      </section>

      <section className="card p-10">
        <h3 className="mb-8 text-center text-2xl">Common Questions</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h4 className="text-brand-text font-bold mb-2">Can I customize a package?</h4>
            <p className="text-brand-text/70">Yes. We adjust scope and pricing to your needs.</p>
          </div>
          <div>
            <h4 className="text-brand-text font-bold mb-2">Payment plans available?</h4>
            <p className="text-brand-text/70">Yes. We split into milestone payments.</p>
          </div>
          <div>
            <h4 className="text-brand-text font-bold mb-2">What's the typical ROI?</h4>
            <p className="text-brand-text/70">10-20 hours reclaimed per week within 2 months.</p>
          </div>
          <div>
            <h4 className="text-brand-text font-bold mb-2">Add-ons standalone?</h4>
            <p className="text-brand-text/70">Yes, but work best paired with a package.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

