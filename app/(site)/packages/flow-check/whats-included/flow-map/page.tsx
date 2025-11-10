import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Flow Map (Current vs Ideal) - Flow Check - Vibes Consulting',
  description: 'Side-by-side comparison showing how your workflows operate now versus how they should work. Clear gap analysis with decision rights matrix.'
}

export default function FlowMapPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/flow-check" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to Flow Check
      </Link>

      <h1 className="mb-4">Flow Map (Current vs. Ideal)</h1>
      <p className="text-xl text-brand-text/90 mb-8">A side-by-side comparison that shows how work happens now - and how it should happen.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What It Is</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-brand-text/70 mb-4">The Flow Map is a visual blueprint of your operations. We diagram your current workflows (with all their messiness), then design the ideal state - cleaner, faster, with clear ownership.</p>
            <p className="text-brand-text/70">It's like having "before and after" photos, but for how work gets done.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Current State: How Work Actually Happens</h2>
          <p className="text-brand-text/70 mb-4">We map the reality, not the theory:</p>
          <div className="space-y-3">
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">All the Steps (Even the Hidden Ones)</h3>
              <p className="text-brand-text/70 text-xs mb-2">That "quick approval" that takes 3 days. The Slack message that requires 2 follow-ups. The email chain that should've been a meeting. We document what really happens.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Every Handoff Point</h3>
              <p className="text-brand-text/70 text-xs mb-2">When work moves from person to person, team to team, or system to system. Handoffs are where work gets dropped, delayed, or duplicated.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Decision Bottlenecks</h3>
              <p className="text-brand-text/70 text-xs mb-2">Where work stops waiting for approval, clarification, or input. We show who's making decisions (and who's waiting for them).</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Time Costs</h3>
              <p className="text-brand-text/70 text-xs mb-2">How long each step takes. Not "should take" - actually takes. This reveals where time disappears.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Ideal State: How Work Should Happen</h2>
          <p className="text-brand-text/70 mb-4">We redesign the workflow to be faster, clearer, and less dependent on heroics:</p>
          <div className="space-y-3">
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Fewer Steps</h3>
              <p className="text-brand-text/70 text-xs">We eliminate unnecessary handoffs, redundant approvals, and "just in case" check-ins that add no value.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Clear Ownership</h3>
              <p className="text-brand-text/70 text-xs">Every step has an owner. Every decision has a DRI (directly responsible individual). No more "I thought you were handling it."</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Decision Rights Matrix</h3>
              <p className="text-brand-text/70 text-xs">Who decides, who's consulted, who's informed. Clarifies authority so decisions happen faster without escalation.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Exception Handling</h3>
              <p className="text-brand-text/70 text-xs">What to do when things don't go according to plan. Clear escalation paths for edge cases.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Gap Analysis: What Needs to Change</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-brand-text/70 mb-4">We don't just show you two maps and wish you luck. We document exactly what needs to change to get from current to ideal:</p>
            <ul className="space-y-2 text-brand-text/70 text-sm">
              <li>• Which steps to eliminate entirely</li>
              <li>• Which handoffs to streamline or automate</li>
              <li>• What documentation needs to be created</li>
              <li>• Who needs training or authority to make decisions</li>
              <li>• Which tools or systems need to be implemented</li>
              <li>• Where to pilot changes before full rollout</li>
            </ul>
          </div>
        </section>

        

        <section>
          <h2 className="mb-4">What's Included in Your Flow Map</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-1">Visual Process Diagrams</h4>
              <p className="text-brand-text/70 text-xs">Easy-to-read flowcharts for 3-5 major workflows. Current state and ideal state side-by-side.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-1">Decision Rights Matrix</h4>
              <p className="text-brand-text/70 text-xs">Clear table showing who decides, who's consulted, and who's informed for each major decision type.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-1">Implementation Roadmap</h4>
              <p className="text-brand-text/70 text-xs">Step-by-step path from current to ideal. What to change first, what can wait, what needs testing.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-1">Time Savings Projection</h4>
              <p className="text-brand-text/70 text-xs">Estimated hours saved per week once ideal state is implemented.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Why This Matters</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-brand-text/70 mb-4">Most teams operate on muscle memory. "This is how we've always done it." But as you grow, old workflows break down.</p>
            <p className="text-brand-text/70 mb-4">The Flow Map gives you a blueprint for rebuilding. It shows you not just *what's wrong*, but *what right looks like*.</p>
            <p className="text-brand-text/70">Whether you implement it yourself or continue with Flow Rebuild, you'll have a clear vision of where you're headed.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What Happens Next</h2>
          <p className="text-brand-text/70 mb-4">The Flow Map is part of the Flow Check package, alongside:</p>
          <div className="space-y-3">
            <Link href="/packages/flow-check/whats-included/friction-audit" className="card p-4 hover:border-current-600/60 transition-all block">
              <p className="text-current-500 text-sm font-medium mb-1">Friction Audit Report →</p>
              <p className="text-brand-text/70 text-xs">Identifies where work slows down and why</p>
            </Link>
            <Link href="/packages/flow-check/whats-included/improvement-plan" className="card p-4 hover:border-current-600/60 transition-all block">
              <p className="text-current-500 text-sm font-medium mb-1">90-Day Improvement Plan →</p>
              <p className="text-brand-text/70 text-xs">Phased action plan for implementing the ideal state</p>
            </Link>
            <Link href="/packages/flow-check/whats-included/final-presentation" className="card p-4 hover:border-current-600/60 transition-all block">
              <p className="text-current-500 text-sm font-medium mb-1">Final Presentation & Strategy Session →</p>
              <p className="text-brand-text/70 text-xs">60-minute walkthrough of findings with your team</p>
            </Link>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to See Your Ideal Flow?</h2>
          <p className="text-brand-text/70 mb-6">The Flow Map is included in every Flow Check. Book an intro call to get started.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

