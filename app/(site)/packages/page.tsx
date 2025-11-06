import Link from 'next/link'

export const metadata = { title: 'Packages — Vibes Consulting' }

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
      <header className="mb-12">
        <h1>Packages</h1>
        <p className="mt-3 text-white/80 max-w-2xl">Simple offers built for small businesses who value clarity and momentum. Each package is designed to deliver tangible results without overwhelming your operations.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {packages.map(p => (
          <Link 
            key={p.name} 
            href={`/packages/${p.slug}`}
            className="card p-6 flex flex-col group cursor-pointer hover:border-current-600/60 transition-all"
          >
            <h3 className="mb-3 group-hover:text-current-500 transition-colors">{p.name}</h3>
            <p className="text-white/70 text-sm mb-4 flex-1">{p.desc}</p>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white/90 mb-2">What's included:</h4>
              <ul className="space-y-1">
                {p.highlights.map(h => (
                  <li key={h} className="text-white/70 text-sm">• {h}</li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-white/60 text-sm">{p.duration}</span>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold text-lg">{p.price}</span>
                <span className="text-white/60 text-sm group-hover:text-current-500 transition-colors">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <section className="mb-16">
        <h2 className="mb-6">Add-Ons</h2>
        <p className="text-white/80 mb-6 max-w-2xl">Extend any package with these focused deliverables.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {addons.map(a => (
            <Link 
              key={a.name} 
              href={`/packages/${a.slug}`}
              className="card p-6 group cursor-pointer hover:border-current-600/60 transition-all"
            >
              <h3 className="text-lg mb-2 group-hover:text-current-500 transition-colors">{a.name}</h3>
              <p className="text-white/70 text-sm mb-4">{a.desc}</p>
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold">{a.price}</p>
                <span className="text-white/60 text-sm group-hover:text-current-500 transition-colors">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16 card p-8">
        <h2 className="mb-4">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-current-500 font-semibold mb-2">1. Book Intro Call</div>
            <p className="text-white/70 text-sm">30-minute conversation to understand your friction points and recommend the right package.</p>
          </div>
          <div>
            <div className="text-current-500 font-semibold mb-2">2. Start with Flow Check</div>
            <p className="text-white/70 text-sm">Most clients begin here. It's low-risk, high-insight, and credit applies to larger engagements.</p>
          </div>
          <div>
            <div className="text-current-500 font-semibold mb-2">3. Decide Next Steps</div>
            <p className="text-white/70 text-sm">After the Flow Check, you'll know exactly what needs fixing. Continue with Rebuild or Partnership as needed.</p>
          </div>
        </div>
      </section>

      <section className="card p-8 bg-current-600/10">
        <div className="text-center">
          <h2 className="mb-4">Not Sure Which Package Fits?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">Most clients start with The Flow Check. It's a low-commitment way to diagnose what's really going on and build a roadmap. The $2,500 is fully credited if you continue.</p>
          <Link href="/contact" className="btn btn-primary">Book Your Flow Check</Link>
        </div>
      </section>

      <section className="mt-12 card p-6">
        <h3 className="mb-4">Common Questions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Can I customize a package?</h4>
            <p className="text-white/70 text-sm">Yes. We adjust scope and pricing to your needs.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Payment plans available?</h4>
            <p className="text-white/70 text-sm">Yes. We split into milestone payments.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">What's the typical ROI?</h4>
            <p className="text-white/70 text-sm">10-20 hours reclaimed per week within 2 months.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Add-ons standalone?</h4>
            <p className="text-white/70 text-sm">Yes, but work best paired with a package.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

