import Link from 'next/link'

export const metadata = { title: 'Packages — Vibes Consulting' }

const packages = [
  { 
    name: 'The Flow Check', 
    desc: 'A 2-week diagnostic identifying bottlenecks, cultural drag, and operational blind spots. Credit applied to any engagement.', 
    duration: '2 weeks', 
    price: '$2,500',
    highlights: ['Friction Audit', 'Flow Map', '90-Day Improvement Plan', 'Credit toward next engagement']
  },
  { 
    name: 'The Flow Rebuild', 
    desc: '6-week rebuild of one critical system: meetings, onboarding, or workflow. Includes AI enablement and custom SOPs.', 
    duration: '6 weeks', 
    price: '$8,000',
    highlights: ['System redesign', 'AI tool integration', 'Team training', 'SOP library']
  },
  { 
    name: 'The Vibe Partnership', 
    desc: 'Quarterly retainer for full ongoing support: ops flow, team culture, and AI strategy. For teams committed to continuous improvement.', 
    duration: '3 months', 
    price: '$3,500/mo',
    highlights: ['Quarterly Vibe Resets', 'Monthly pulse surveys', 'On-call support', 'Priority access']
  },
]

const addons = [
  { name: 'AI Prompt Library', desc: 'Custom prompt templates for your most common tasks', price: '$1,000' },
  { name: 'Meeting OS', desc: 'Complete meeting cadence redesign with templates and rituals', price: '$1,500' },
  { name: 'Brand/Space Vibe Redesign', desc: 'Physical or digital environment optimization for flow', price: '$2,000' },
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
          <div key={p.name} className="card p-6 flex flex-col">
            <h3 className="mb-3">{p.name}</h3>
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
              <span className="text-white font-semibold text-lg">{p.price}</span>
            </div>
          </div>
        ))}
      </div>

      <section className="mb-16">
        <h2 className="mb-6">Add-Ons</h2>
        <p className="text-white/80 mb-6 max-w-2xl">Extend any package with these focused deliverables.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {addons.map(a => (
            <div key={a.name} className="card p-6">
              <h3 className="text-lg mb-2">{a.name}</h3>
              <p className="text-white/70 text-sm mb-4">{a.desc}</p>
              <p className="text-white font-semibold">{a.price}</p>
            </div>
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
        <h3 className="mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-medium mb-1">Can I customize a package?</h4>
            <p className="text-white/70 text-sm">Yes. These are starting points. We adjust scope and pricing based on your specific needs.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">What if I only need one add-on?</h4>
            <p className="text-white/70 text-sm">Add-ons work best when paired with a package, but we can scope standalone projects. Contact us to discuss.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Do you offer payment plans?</h4>
            <p className="text-white/70 text-sm">Yes for The Flow Rebuild and Vibe Partnership. We can split payments across project milestones.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">What's the typical ROI?</h4>
            <p className="text-white/70 text-sm">Most clients reclaim 10-20 hours per week across their team within 2 months. That's $2,000-4,000/month in capacity at $50/hour rates.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

