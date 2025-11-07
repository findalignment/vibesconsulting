import Link from 'next/link'

export const metadata = { title: 'For Businesses with Broken Processes - Business Flow Consulting' }

export default function BrokenProcessesPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/business-flow" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Business Flow Consulting
      </Link>

      <h1 className="mb-4">For Businesses Where Processes Feel Broken</h1>
      <p className="text-xl text-white/90 mb-8">Onboarding takes too long. Projects have too many handoffs. Information gets lost. Simple tasks require too many meetings. You know it should be easier.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">When "Good Enough" Becomes a Problem</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Your processes worked when you built them. Maybe they were never perfect, but they got the job done.</p>
            <p className="text-white/70 text-sm mb-4">But now they're actively slowing you down. Every project feels harder than it should. Quality is inconsistent. Things slip through cracks. Your team is frustrated.</p>
            <p className="text-white/70 text-sm">The problem isn't your people. It's the systems they're working within.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Common Broken Process Patterns</h2>
          <div className="space-y-4">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">The Handoff Nightmare</h3>
              <p className="text-white/70 text-xs">Work moves through 5-6 people before it's done. At each handoff, context gets lost. Someone has to explain what the last person did. Rework is common.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">The Approval Gauntlet</h3>
              <p className="text-white/70 text-xs">Everything requires 3-4 approvals. Work sits in queues waiting for reviews. The people approving often don't add real value - they just need to be "in the loop."</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">The Template Graveyard</h3>
              <p className="text-white/70 text-xs">You have 12 versions of the same document template. Nobody knows which one is current. Half the team uses their own version.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">The Status Update Loop</h3>
              <p className="text-white/70 text-xs">You have meetings to prepare for meetings. Updates about updates. Coordination about coordination. More time spent reporting on work than doing work.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">The Black Box Process</h3>
              <p className="text-white/70 text-xs">Something goes in, something comes out, but nobody can explain what happens in the middle. When it breaks, fixing it requires detective work.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">The Workaround Culture</h3>
              <p className="text-white/70 text-xs">The official process is too slow, so everyone has their own shortcut. But shortcuts aren't documented, so they only work if you know the right person.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">The Cost of Broken Processes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Time Waste</h3>
              <p className="text-white/70 text-xs">Tasks that should take 2 hours take 2 days because of handoffs, approvals, and coordination overhead.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Quality Issues</h3>
              <p className="text-white/70 text-xs">Without clear standards, quality depends on who does the work. Rework is common. Client satisfaction suffers.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Team Frustration</h3>
              <p className="text-white/70 text-xs">Good people are hamstrung by bad systems. They know it could be better but don't have time to fix it.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Can't Scale</h3>
              <p className="text-white/70 text-xs">Adding more people makes things worse, not better. Coordination overhead grows faster than output.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How We Fix Broken Processes</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">We Map Current vs. Ideal</h3>
              <p className="text-white/70 text-sm mb-3">First, we document how work actually flows (not how you think it flows). Then we design the ideal state: fewer handoffs, clear ownership, no unnecessary approvals.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">We Eliminate Waste</h3>
              <p className="text-white/70 text-sm mb-3">Using TQM principles, we identify steps that add no value. Approvals that are rubber stamps. Handoffs that exist for historical reasons.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">We Clarify Ownership</h3>
              <p className="text-white/70 text-sm mb-3">Every step has a clear owner. Every decision has a clear maker. No more "I thought you were handling that."</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">We Document the New Way</h3>
              <p className="text-white/70 text-sm mb-3">Simple, visual documentation that actually gets used. Not 50-page manuals. One-pagers with diagrams.</p>
            </div>
          </div>
        </section>

        

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Fix Your Processes?</h2>
          <p className="text-white/80 mb-4">Start with a Flow Check to identify which processes are costing you the most.</p>
          <Link href="/packages/flow-check" className="btn btn-primary inline-block">Book Flow Check</Link>
        </section>
      </div>
    </div>
  )
}

