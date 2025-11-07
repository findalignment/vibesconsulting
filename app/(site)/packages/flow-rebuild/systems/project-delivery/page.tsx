import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Project Delivery Workflow Rebuild - Flow Rebuild - Vibes Consulting',
  description: 'Map current vs ideal state, eliminate unnecessary handoffs, clarify ownership. Make delivery predictable and smooth.'
}

export default function ProjectDeliveryPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/flow-rebuild" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Flow Rebuild
      </Link>

      <h1 className="mb-4">Project Delivery Workflow Rebuild</h1>
      <p className="text-xl text-white/90 mb-8">Transform chaotic project execution into a smooth, predictable workflow with clear ownership and fewer handoffs.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">The Problem</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Projects start strong but drift. Handoffs are messy. Nobody's sure who owns what. Work gets duplicated or falls through cracks. Quality is inconsistent.</p>
            <p className="text-white/80 mb-4">You hit the same problems on every project: scope creep, miscommunication, last-minute surprises, missed deadlines.</p>
            <p className="text-white/80">You need a predictable delivery system, not heroic effort every time.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What We Build</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">End-to-End Process Redesign</h3>
              <p className="text-white/70 text-sm mb-3">We map your current delivery workflow (all the mess), then design the ideal state: fewer steps, clear ownership, better checkpoints. You see exactly what needs to change.</p>
              <p className="text-white/60 text-xs italic">Result: Projects flow smoothly from kickoff to delivery</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Role & Ownership Clarity</h3>
              <p className="text-white/70 text-sm mb-3">RACI matrix for every project phase. Who's responsible, who's consulted, who's informed. No more "I thought you were handling it."</p>
              <p className="text-white/60 text-xs italic">Result: Everyone knows their role, nothing falls through cracks</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Quality Checkpoints & Checklists</h3>
              <p className="text-white/70 text-sm mb-3">Built-in review points at key stages. Quality checklist for common scenarios. Catch issues before they reach the client.</p>
              <p className="text-white/60 text-xs italic">Result: Consistent quality, fewer surprises at final review</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Handoff Protocols</h3>
              <p className="text-white/70 text-sm mb-3">Standardized handoff documentation. When work moves from person to person, all context comes with it. No more verbal handoffs that lose details.</p>
              <p className="text-white/60 text-xs italic">Result: Next person has what they need, no rework required</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You Walk Away With</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Visual Process Map</h4>
              <p className="text-white/70 text-xs">Current vs ideal workflow diagrams. Clear gap analysis.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">RACI Matrix</h4>
              <p className="text-white/70 text-xs">Who's responsible, accountable, consulted, informed for each project phase.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Quality Checklists</h4>
              <p className="text-white/70 text-xs">Review criteria for each stage. Catches issues early.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Handoff Templates</h4>
              <p className="text-white/70 text-xs">Standard documentation for transitioning work between team members.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Project Brief Template</h4>
              <p className="text-white/70 text-xs">Standard kickoff doc. Every project starts with clear scope and ownership.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">AI Integration</h4>
              <p className="text-white/70 text-xs">Automation for status updates, handoff docs, quality checks. Saves 4-6 hours per project.</p>
            </div>
          </div>
        </section>

        

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to Fix Your Delivery Workflow?</h2>
          <p className="text-white/80 mb-6">Project Delivery is one of three systems you can rebuild with Flow Rebuild. Book an intro call to discuss.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

