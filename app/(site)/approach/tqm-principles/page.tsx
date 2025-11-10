import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'TQM Principles - Vibes Consulting',
  description: 'Continuous improvement, customer focus, and process optimization. We diagnose friction using proven quality management frameworks.'
}

export default function TQMPrinciplesPage() {
  return (
    <div className="pb-20">
      <Link href="/#how" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to How We Work
      </Link>

      <header className="mb-12">
        <h1 className="mb-4">TQM Principles</h1>
        <p className="text-xl text-brand-text/90 max-w-3xl">Total Quality Management applied to small business operations. We use proven frameworks to diagnose friction, optimize processes, and create systems for continuous improvement.</p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="mb-6">What is TQM?</h2>
          <div className="card p-8 bg-white/5">
            <p className="text-brand-text/70 mb-4">Total Quality Management (TQM) is a management philosophy focused on continuous improvement, customer satisfaction, and process optimization. Originally developed for manufacturing, its principles apply perfectly to service businesses and knowledge work.</p>
            <p className="text-brand-text/70">We adapt TQM frameworks for small businesses - making them practical, not bureaucratic.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Core Principles We Apply</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-3">1. Customer Focus</h3>
              <p className="text-brand-text/70 text-sm mb-3">Every process exists to serve someone - either your external customers or internal team members. We map who your customers are for each workflow and optimize for their experience.</p>
              <p className="text-brand-text/60 text-xs italic">Example: If your project delivery process frustrates clients with unclear timelines, we redesign it around their need for predictability.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">2. Process-Oriented Thinking</h3>
              <p className="text-brand-text/70 text-sm mb-3">Problems aren't personal failures - they're process failures. When work gets stuck, we look at the system, not the people. This removes blame and focuses on improvement.</p>
              <p className="text-brand-text/60 text-xs italic">Example: If onboarding takes too long, we don't blame the team. We map the handoffs, identify bottlenecks, and redesign the workflow.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">3. Continuous Improvement (Kaizen)</h3>
              <p className="text-brand-text/70 text-sm mb-3">Small, incremental changes compound over time. Rather than massive overhauls, we help you build a culture where everyone identifies and fixes friction as they encounter it.</p>
              <p className="text-brand-text/60 text-xs italic">Example: Monthly retrospectives where the team proposes small process tweaks, then measures if they worked.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">4. Data-Driven Decision Making</h3>
              <p className="text-brand-text/70 text-sm mb-3">We measure what matters. Time to completion, error rates, team satisfaction. You can't improve what you don't measure, but you also don't need complex analytics - just enough data to see patterns.</p>
              <p className="text-brand-text/60 text-xs italic">Example: Tracking how long client onboarding takes before and after changes, so you know if your improvements actually worked.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">5. Employee Empowerment</h3>
              <p className="text-brand-text/70 text-sm mb-3">The people doing the work know where the problems are. We create systems where your team can identify issues, propose solutions, and implement improvements without waiting for approval.</p>
              <p className="text-brand-text/60 text-xs italic">Example: Clear decision rights so team members can fix small process problems independently.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">6. Integrated Systems</h3>
              <p className="text-brand-text/70 text-sm mb-3">Everything connects. Your meeting cadence affects your project delivery. Your communication norms affect your culture. We optimize holistically, not in silos.</p>
              <p className="text-brand-text/60 text-xs italic">Example: Fixing your decision-making process improves both meeting efficiency and team autonomy simultaneously.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">TQM Tools We Use</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-3">Process Mapping</h3>
              <p className="text-brand-text/70 text-sm">Visual diagrams showing how work flows through your business. Makes invisible friction visible. Reveals unnecessary handoffs, redundant steps, and bottlenecks.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Root Cause Analysis</h3>
              <p className="text-brand-text/70 text-sm">Going beyond surface symptoms to identify why problems exist. We use "5 Whys" and fishbone diagrams to find the real issue, not just the obvious one.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">PDCA Cycle (Plan-Do-Check-Act)</h3>
              <p className="text-brand-text/70 text-sm">Structured experimentation for improvements. We help you test changes, measure results, and iterate based on what actually works.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Value Stream Mapping</h3>
              <p className="text-brand-text/70 text-sm">Identifying which activities add value vs. create waste. Helps you focus improvement efforts on high-impact areas.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">How This Shows Up in Our Work</h2>
          <div className="card p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-current-500 text-xl">→</div>
                <div>
                  <h4 className="text-brand-text font-medium mb-1">In Flow Check</h4>
                  <p className="text-brand-text/70 text-sm">We use process mapping and root cause analysis to diagnose where your business gets stuck. The Friction Audit is essentially a TQM diagnostic adapted for small business.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-current-500 text-xl">→</div>
                <div>
                  <h4 className="text-brand-text font-medium mb-1">In Flow Rebuild</h4>
                  <p className="text-brand-text/70 text-sm">We apply PDCA cycles to redesign systems. Test changes, measure results, refine based on data. Every Flow Rebuild includes measurement frameworks so you know if it's working.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-current-500 text-xl">→</div>
                <div>
                  <h4 className="text-brand-text font-medium mb-1">In Vibe Partnership</h4>
                  <p className="text-brand-text/70 text-sm">Continuous improvement becomes embedded in your culture. Quarterly Vibe Resets use Kaizen principles to make small, compounding improvements over time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Why TQM Works for Small Business</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-brand-text/90 mb-4">TQM is often associated with big corporations and manufacturing plants. But its principles are universal:</p>
            <ul className="space-y-2 text-brand-text/70 text-sm">
              <li>✓ Focus on the customer (whether that's your clients or your team)</li>
              <li>✓ Improve processes, not people</li>
              <li>✓ Make small changes consistently rather than massive overhauls</li>
              <li>✓ Use data to guide decisions</li>
              <li>✓ Empower everyone to improve their own work</li>
            </ul>
            <p className="text-brand-text/70 mt-4">These principles work at any scale. We just adapt the tools to fit your size and context.</p>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to Apply TQM to Your Business?</h2>
          <p className="text-brand-text/70 max-w-2xl mx-auto mb-6">Start with a Flow Check to see how we use TQM principles to diagnose operational friction.</p>
          <CTAButton>Book Your Flow Check</CTAButton>
        </section>
      </div>
    </div>
  )
}

