import Link from 'next/link'

export const metadata = { title: '90-Day Continuous Improvement Plan - Business Flow Consulting' }

export default function ImprovementPlanPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/business-flow" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Business Flow Consulting
      </Link>

      <h1 className="mb-4">90-Day Continuous Improvement Plan</h1>
      <p className="text-xl text-white/90 mb-8">Phased action plan to implement changes without disrupting operations. Quick wins first, system redesign second, stabilization third.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Three-Phase Approach</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-current-500">1</div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2">Quick Wins (Days 1-30)</h3>
                  <p className="text-white/70 text-sm mb-3">Immediate fixes that require minimal effort but deliver visible results. These build momentum and buy-in for bigger changes.</p>
                  <div className="text-xs text-white/60">
                    <p className="font-medium mb-1">Examples:</p>
                    <ul className="space-y-1 pl-3">
                      <li>• Clarify one critical decision right</li>
                      <li>• Document one frequently-asked process</li>
                      <li>• Kill one unnecessary meeting</li>
                      <li>• Create one missing template</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-current-500">2</div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2">System Redesign (Days 31-60)</h3>
                  <p className="text-white/70 text-sm mb-3">Rebuild one critical workflow using the ideal state from your Flow Map. This is the heavy lift but delivers lasting change.</p>
                  <div className="text-xs text-white/60">
                    <p className="font-medium mb-1">Includes:</p>
                    <ul className="space-y-1 pl-3">
                      <li>• Launch new process</li>
                      <li>• Train team on changes</li>
                      <li>• Create documentation</li>
                      <li>• Iterate based on feedback</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-current-500">3</div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2">Stabilization (Days 61-90)</h3>
                  <p className="text-white/70 text-sm mb-3">Lock in the new habits. Measure results. Address edge cases. Ensure the system runs without constant oversight.</p>
                  <div className="text-xs text-white/60">
                    <p className="font-medium mb-1">Deliverables:</p>
                    <ul className="space-y-1 pl-3">
                      <li>• Final documentation</li>
                      <li>• Success metrics report</li>
                      <li>• Refinement recommendations</li>
                      <li>• Next friction points to tackle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What's Included in the Plan</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-sm font-medium text-white mb-2">Prioritized Action Items</h3>
              <p className="text-white/70 text-xs">Specific tasks, sequenced by dependencies. You know exactly what to do first, second, third.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-sm font-medium text-white mb-2">Owner Assignments</h3>
              <p className="text-white/70 text-xs">Who's responsible for each action. No ambiguity about accountability.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-sm font-medium text-white mb-2">Timeline & Milestones</h3>
              <p className="text-white/70 text-xs">Realistic dates for each phase. Weekly checkpoints to track progress.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-sm font-medium text-white mb-2">Success Metrics</h3>
              <p className="text-white/70 text-xs">How you'll know it's working. Time saved, quality improved, team satisfaction up.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-sm font-medium text-white mb-2">Risk Mitigation</h3>
              <p className="text-white/70 text-xs">What could go wrong and how to prevent it. Contingency plans for common issues.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-sm font-medium text-white mb-2">Communication Plan</h3>
              <p className="text-white/70 text-xs">How to roll out changes. What to tell the team, when to tell them.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Implementation Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-3">Self-Implement</h3>
              <p className="text-white/70 text-sm mb-4">Take the plan and run with it yourself. We provide 30 days of email support for questions.</p>
              <p className="text-current-500 text-sm font-medium">Best for: Teams with capacity and execution experience</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Flow Rebuild (Guided)</h3>
              <p className="text-white/70 text-sm mb-4">We implement the plan with you over 6 weeks. Your Flow Check fee ($2,500) is fully credited.</p>
              <p className="text-current-500 text-sm font-medium">Best for: Teams who want expert implementation</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Why 90 Days?</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3">Not too fast (change needs time to settle). Not too slow (momentum fades after 3 months).</p>
            <p className="text-white/70 text-sm mb-3">90 days is the sweet spot for meaningful organizational change. Long enough to rebuild a system. Short enough to maintain focus.</p>
            <p className="text-white/70 text-sm">After 90 days, you can tackle the next friction point or continue with ongoing support through a Vibe Partnership.</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Flow Check Package</h2>
          <p className="text-white/80">The 90-Day Improvement Plan is included in The Flow Check ($2,500). It's delivered alongside your Friction Audit and Flow Map.</p>
          <Link href="/packages/flow-check" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more about Flow Check →</Link>
        </section>
      </div>
    </div>
  )
}

