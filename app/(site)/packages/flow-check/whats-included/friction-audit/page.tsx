import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Friction Audit Report - Flow Check - Vibes Consulting',
  description: 'Visual map of where work slows down in your business. We identify the 3-5 highest-impact friction points costing you time and momentum.'
}

export default function FrictionAuditPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/flow-check" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to Flow Check
      </Link>

      <h1 className="mb-4">Friction Audit Report</h1>
      <p className="text-xl text-brand-text/90 mb-8">A visual diagnostic that shows exactly where your business gets stuck - and why.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What It Is</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-brand-text/70 mb-4">The Friction Audit is a comprehensive analysis of where work slows down in your business. We map every major workflow, identify bottlenecks, and document the root causes behind each friction point.</p>
            <p className="text-brand-text/70">Think of it as an MRI for your operations - it reveals problems you can feel but couldn't see.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What's Included</h2>
          <div className="space-y-4">
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Process Observation (3-4 hours)</h3>
              <p className="text-brand-text/70 text-xs mb-2">We shadow your team during real work. Client calls, project handoffs, internal meetings. We observe where work flows and where it stalls.</p>
              <p className="text-brand-text/60 text-xs italic">Example: We watch a project kickoff and notice the same questions get asked every time because there's no standard brief template.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Team Interviews (5-7 people, 30 min each)</h3>
              <p className="text-brand-text/70 text-xs mb-2">Confidential conversations with team members at different levels. We ask: What takes longer than it should? What's frustrating? What would you change?</p>
              <p className="text-brand-text/60 text-xs italic">Example: Three people independently mention that getting approval for small decisions is a bottleneck.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Bottleneck Analysis</h3>
              <p className="text-brand-text/70 text-xs mb-2">We map the 3-5 highest-impact friction points. For each one, we document: what's happening, why it's happening, how much time it costs, and who's affected.</p>
              <p className="text-brand-text/60 text-xs italic">Example: "Client onboarding takes 2 weeks because intake forms are incomplete, requiring 3-4 back-and-forth emails per client."</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Root Cause Documentation</h3>
              <p className="text-brand-text/70 text-xs mb-2">Surface symptoms vs. actual problems. We don't just say "communication is bad" - we identify *why* (no decision rights? Unclear escalation paths? Too many meetings?).</p>
              <p className="text-brand-text/60 text-xs italic">Example: "Team waits for founder approval not because they lack skills, but because decision thresholds were never documented."</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Visual Friction Map</h3>
              <p className="text-brand-text/70 text-xs mb-2">A diagram showing where work flows smoothly (green), where it slows (yellow), and where it stops completely (red). Makes the invisible visible.</p>
              <p className="text-brand-text/60 text-xs italic">Example: Your project workflow shows green until "client review" - then it turns red because reviews take 5-7 days due to unclear feedback expectations.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How We Find Friction</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-2">We Look For:</h4>
              <ul className="text-brand-text/70 text-xs space-y-1">
                <li>• Work that requires multiple handoffs</li>
                <li>• Decisions that take too long to make</li>
                <li>• Information that lives in people's heads</li>
                <li>• Tasks that get repeated unnecessarily</li>
                <li>• Meetings that should be messages</li>
                <li>• Processes that have outgrown their systems</li>
              </ul>
            </div>
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-2">We Measure:</h4>
              <ul className="text-brand-text/70 text-xs space-y-1">
                <li>• Time cost (hours per week)</li>
                <li>• People affected (who feels the pain)</li>
                <li>• Frequency (how often it happens)</li>
                <li>• Impact (what gets delayed because of it)</li>
                <li>• Morale cost (team frustration level)</li>
              </ul>
            </div>
          </div>
        </section>

        

        <section>
          <h2 className="mb-4">What You Learn</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-brand-text/90 mb-4">After the Friction Audit, you'll know:</p>
            <ul className="space-y-2 text-brand-text/70 text-sm">
              <li>✓ The top 3-5 friction points costing you the most time</li>
              <li>✓ Why they exist (root causes, not just symptoms)</li>
              <li>✓ Who's affected and how much time they're losing</li>
              <li>✓ Which problems to fix first (we prioritize by impact)</li>
              <li>✓ What patterns keep showing up across different areas</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What Happens Next</h2>
          <p className="text-brand-text/70 mb-4">The Friction Audit is one of four deliverables in the Flow Check package. It gets paired with:</p>
          <div className="space-y-3">
            <Link href="/packages/flow-check/whats-included/flow-map" className="card p-4 hover:border-current-600/60 transition-all block">
              <p className="text-current-500 text-sm font-medium mb-1">Flow Map (Current vs. Ideal) →</p>
              <p className="text-brand-text/70 text-xs">Shows how your workflows should work once friction is removed</p>
            </Link>
            <Link href="/packages/flow-check/whats-included/improvement-plan" className="card p-4 hover:border-current-600/60 transition-all block">
              <p className="text-current-500 text-sm font-medium mb-1">90-Day Improvement Plan →</p>
              <p className="text-brand-text/70 text-xs">Phased action plan for fixing the friction we found</p>
            </Link>
            <Link href="/packages/flow-check/whats-included/final-presentation" className="card p-4 hover:border-current-600/60 transition-all block">
              <p className="text-current-500 text-sm font-medium mb-1">Final Presentation & Strategy Session →</p>
              <p className="text-brand-text/70 text-xs">60-minute walkthrough of findings with your team</p>
            </Link>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to See Where You're Stuck?</h2>
          <p className="text-brand-text/70 mb-6">The Friction Audit is included in every Flow Check. Book an intro call to get started.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

