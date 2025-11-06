import Link from 'next/link'

export const metadata = { title: 'Friction Audit Report — Business Flow Consulting' }

export default function FrictionAuditPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/business-flow" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Business Flow Consulting
      </Link>

      <h1 className="mb-4">Friction Audit Report</h1>
      <p className="text-xl text-white/90 mb-8">Two-week deep dive into where your business gets stuck. We identify the 3-5 highest-impact friction points costing you time and momentum.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What We Analyze</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-lg mb-2">Process Observation</h3>
              <p className="text-white/70 text-sm">We shadow your team for 3-4 hours, watching how work actually flows. Not how you think it flows — how it really moves through your business.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-lg mb-2">Team Interviews</h3>
              <p className="text-white/70 text-sm">30-minute conversations with 5-7 team members across roles. We ask where work stalls, what causes delays, and what workarounds exist.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-lg mb-2">Bottleneck Analysis</h3>
              <p className="text-white/70 text-sm">We map every handoff, approval, and decision point. Which ones slow work down? Which ones add no value? Which create dependencies?</p>
            </div>
            <div className="card p-4">
              <h3 className="text-lg mb-2">Root Cause Discovery</h3>
              <p className="text-white/70 text-sm">Why is this happening? Usually it's unclear ownership, missing information, outdated rituals, or informal workarounds that became the norm.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You Receive</h2>
          <div className="card p-6 space-y-4">
            <div>
              <h3 className="text-lg mb-2">Visual Friction Map</h3>
              <p className="text-white/70 text-sm">A diagram showing exactly where work slows down. Color-coded by severity: red = critical bottleneck, yellow = moderate friction, green = smooth flow.</p>
            </div>
            <div>
              <h3 className="text-lg mb-2">Prioritized Friction List</h3>
              <p className="text-white/70 text-sm">The 3-5 friction points causing the most damage, ranked by time cost and team frustration. Each includes root cause analysis.</p>
            </div>
            <div>
              <h3 className="text-lg mb-2">Impact Assessment</h3>
              <p className="text-white/70 text-sm">How much time is each friction point costing you per week? What's the cumulative effect over a quarter?</p>
            </div>
            <div>
              <h3 className="text-lg mb-2">Recommendations Preview</h3>
              <p className="text-white/70 text-sm">High-level guidance on what needs to change. Full implementation plan comes in the 90-Day Improvement Plan.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Common Friction Points We Find</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Unclear Decision Rights</h4>
              <p className="text-white/60 text-xs">Nobody knows who decides what. Everything requires a meeting or email chain.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Information Silos</h4>
              <p className="text-white/60 text-xs">Critical info lives in people's heads or scattered across tools.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Approval Bottlenecks</h4>
              <p className="text-white/60 text-xs">Work stalls waiting for 1-2 people to review or approve.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Handoff Failures</h4>
              <p className="text-white/60 text-xs">Context gets lost when work moves between people or teams.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Meeting Overload</h4>
              <p className="text-white/60 text-xs">Status updates disguised as collaboration eat 40% of the week.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Outdated Processes</h4>
              <p className="text-white/60 text-xs">Workflows built for 3 people still used by 15 people.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How Long It Takes</h2>
          <div className="card p-6">
            <p className="text-white/80 mb-4">The Friction Audit happens during Week 1-2 of a Flow Check engagement.</p>
            <p className="text-white/70 text-sm"><strong>Your time investment:</strong> 90-min kickoff + 5-7 short interviews (30 min each) + optional observation participation. Most of our work happens in the background.</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Flow Check Package</h2>
          <p className="text-white/80">The Friction Audit Report is included in The Flow Check ($2,500). It's delivered alongside your Flow Map and 90-Day Improvement Plan.</p>
          <Link href="/packages/flow-check" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more about Flow Check →</Link>
        </section>
      </div>
    </div>
  )
}

