import Link from 'next/link'

export const metadata = { title: 'Growing Companies — Culture & Environment Optimization' }

export default function GrowingCompaniesPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/culture-optimization" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Culture & Environment Optimization
      </Link>

      <h1 className="mb-4">Growing Companies</h1>
      <p className="text-xl text-white/90 mb-8">You've outgrown informal culture. What worked at 5 people doesn't work at 15. You need to intentionally design culture before it becomes a mess.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Signs This Is You</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ Team size doubled in the last 12-18 months</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ "Family culture" is breaking down as you hire more people</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ New hires don't "get" the culture like early employees did</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ Communication feels messy (what used to be verbal now needs structure)</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ You're hiring managers for the first time</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ Decisions are slower because more people are involved</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What Happens When Culture Isn't Designed</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Culture Becomes Accidental</h3>
              <p className="text-white/70 text-sm mb-3">When you're small, culture emerges naturally. As you grow, it fragments. Different teams develop different norms. Cliques form. Silos appear.</p>
              <p className="text-white/60 text-xs">If you don't design it, it designs itself — and not always well.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Early Employees vs. New Hires</h3>
              <p className="text-white/70 text-sm mb-3">Founders and early employees have implicit understanding of "how we do things." New hires don't. This creates tension and confusion.</p>
              <p className="text-white/60 text-xs">You need to make the implicit explicit.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Communication Breaks Down</h3>
              <p className="text-white/70 text-sm mb-3">What used to be a quick verbal sync now requires documentation, meetings, and systems. Informal doesn't scale.</p>
              <p className="text-white/60 text-xs">Structure isn't bureaucracy. It's clarity.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Values Drift</h3>
              <p className="text-white/70 text-sm mb-3">The values you started with get diluted as new people join. If you don't actively reinforce them, they become meaningless wall art.</p>
              <p className="text-white/60 text-xs">Culture is what you tolerate, not what you post.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How We Help You Scale Culture</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Codify What's Working</h3>
              <p className="text-white/70 text-sm">We identify the cultural strengths from your early days and document them so new hires can learn them.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2">2. Design Scalable Rituals</h3>
              <p className="text-white/70 text-sm">We create rituals that work at 15 people and will still work at 30: team meetings, recognition systems, feedback loops.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2">3. Build Communication Infrastructure</h3>
              <p className="text-white/70 text-sm">We design communication norms, meeting cadences, and documentation systems that scale without creating bureaucracy.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2">4. Train New Managers</h3>
              <p className="text-white/70 text-sm">First-time managers need help. We coach them on how to lead teams, give feedback, and model culture.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2">5. Create Onboarding That Scales</h3>
              <p className="text-white/70 text-sm">We design a repeatable onboarding process that transmits culture, sets expectations, and integrates new hires quickly.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Real Example: Design Agency</h2>
          <div className="card p-6 border-l-4 border-current-600">
            <p className="text-white/90 mb-3"><strong>Problem:</strong> Grew from 8 to 20 people in 18 months. Culture felt chaotic. Early employees frustrated with new hires. Morale dropping.</p>

            <p className="text-white/90 mb-2 mt-4"><strong>What we did:</strong></p>
            <ul className="text-white/70 text-xs space-y-2 pl-3 mb-4">
              <li><strong>• Codified values:</strong> Turned implicit norms into explicit values ("ship fast, iterate," "client comes first," "no ego").</li>
              <li><strong>• Designed rituals:</strong> Weekly all-hands (15 min), monthly team retros (90 min), quarterly offsites.</li>
              <li><strong>• Built communication systems:</strong> Clear meeting cadence, decision documentation in Notion, Slack channel strategy.</li>
              <li><strong>• Trained managers:</strong> 3 new team leads got 1-on-1 coaching on feedback, delegation, and culture modeling.</li>
              <li><strong>• Redesigned onboarding:</strong> 30-day onboarding plan with buddy system, culture immersion, and milestone check-ins.</li>
            </ul>

            <p className="text-current-500 text-xs font-medium">Result: Morale rebounded from 6/10 to 9/10. New hires integrated in half the time. Culture felt intentional, not chaotic.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">The Right Time to Design Culture</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Best times to invest in culture design:</p>
            <ul className="text-white/70 text-sm space-y-2 pl-3">
              <li>• <strong>10-15 people:</strong> Right before you outgrow informal culture</li>
              <li>• <strong>Rapid hiring phase:</strong> Adding 5+ people in 6 months</li>
              <li>• <strong>First manager hires:</strong> Transitioning from flat to hierarchical</li>
              <li>• <strong>Post-crisis:</strong> After turnover spike, conflict, or morale drop</li>
              <li>• <strong>New funding:</strong> Before you scale aggressively</li>
            </ul>
            <p className="text-white/60 text-xs mt-4 italic">The earlier you design culture, the easier it is to maintain. Fixing broken culture is 10x harder than designing it proactively.</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Design Culture That Scales?</h2>
          <p className="text-white/80 mb-4">Culture & Environment Optimization starts at $5,500. We help you codify values, design rituals, and build systems that scale with your team.</p>
          <div className="flex gap-4">
            <Link href="/services/culture-optimization" className="btn btn-primary">Learn About the Service</Link>
            <Link href="/contact" className="btn btn-ghost">Schedule Intro Call</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

