import Link from 'next/link'

export const metadata = { title: 'Analysis & Design Phase - Business Flow Consulting' }

export default function AnalysisPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/business-flow" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to Business Flow Consulting
      </Link>

      <h1 className="mb-4">Week 2: Analysis & Design Phase</h1>
      <p className="text-xl text-brand-text/90 mb-8">We synthesize findings, create visual flow maps, and draft your improvement plan. You'll see a preview before the final presentation.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What Happens Behind the Scenes</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Data Synthesis (Days 8-10)</h3>
              <p className="text-brand-text/70 text-sm mb-3">We analyze all interview notes, observation findings, and documentation gaps. We look for patterns: What friction comes up repeatedly? Where are the biggest bottlenecks? What quick wins exist?</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">Output:</p>
                <p>Prioritized list of friction points ranked by impact</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Friction Mapping (Days 10-11)</h3>
              <p className="text-brand-text/70 text-sm mb-3">We create visual diagrams showing where work slows down. Color-coded by severity. Annotated with root causes. This makes invisible friction visible.</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">Output:</p>
                <p>Visual Friction Map with 3-5 critical points highlighted</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Ideal State Design (Days 11-12)</h3>
              <p className="text-brand-text/70 text-sm mb-3">We design the ideal workflow: fewer steps, clear ownership, minimal handoffs. We apply TQM principles to eliminate waste while maintaining quality.</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">Output:</p>
                <p>Flow Map showing Current vs. Ideal state</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Implementation Planning (Days 12-13)</h3>
              <p className="text-brand-text/70 text-sm mb-3">We draft the 90-Day Improvement Plan: phased approach, specific actions, owner assignments, timeline, success metrics.</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">Output:</p>
                <p>Draft 90-Day Plan with quick wins → redesign → stabilization</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Mid-Week Check-In (Day 11, 15 minutes)</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-brand-text/70 mb-3">We schedule a quick call to share key findings before the final presentation. This ensures we're aligned and there are no surprises.</p>
            <div className="text-sm text-brand-text/70">
              <p className="font-medium mb-1">What we cover:</p>
              <ul className="pl-3 space-y-1 text-xs">
                <li>• Top 3 friction points we identified</li>
                <li>• High-level improvement recommendations</li>
                <li>• Any clarifying questions</li>
                <li>• Preview of final presentation format</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Your Time Investment</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-brand-text/70 mb-2"><strong>15-minute check-in call</strong></p>
            <p className="text-brand-text/70 text-sm">That's it. Everything else happens on our end.</p>
            <p className="text-brand-text/60 text-xs mt-3">Most of your time investment comes in Week 1 (discovery) and Week 2 (final presentation).</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Quality Checks We Run</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Feasibility Check</h3>
              <p className="text-brand-text/70 text-xs">Will the ideal state actually work with your team size, tools, and constraints? We design for reality, not theory.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Impact Validation</h3>
              <p className="text-brand-text/70 text-xs">We estimate time savings for each improvement. If it won't save 5+ hours per week, we question whether it's worth doing.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Adoption Assessment</h3>
              <p className="text-brand-text/70 text-xs">Will your team actually use this? We design for adoption, not perfection. Simple beats comprehensive if simple gets used.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Phasing Logic</h3>
              <p className="text-brand-text/70 text-xs">Are quick wins truly quick? Do system redesigns have the right sequencing? We validate dependencies.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You Get</h2>
          <div className="card p-6">
            <p className="text-brand-text/70 mb-4">By Day 13, your complete Flow Check deliverables are ready:</p>
            <ul className="text-brand-text/70 text-sm space-y-2">
              <li>✓ Friction Audit Report with visual maps</li>
              <li>✓ Flow Map (Current vs. Ideal)</li>
              <li>✓ 90-Day Continuous Improvement Plan</li>
              <li>✓ Final presentation deck</li>
            </ul>
            <p className="text-brand-text/60 text-xs mt-4">We present everything in Week 2, Day 14-15 (final presentation).</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Flow Check Process</h2>
          <p className="text-brand-text/70">Analysis & Design happens during Week 2 of The Flow Check engagement.</p>
          <Link href="/packages/flow-check" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more about Flow Check →</Link>
        </section>
      </div>
    </div>
  )
}
