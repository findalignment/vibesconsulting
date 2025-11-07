import Link from 'next/link'

export const metadata = { title: 'Flow Map - Business Flow Consulting' }

export default function FlowMapPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/business-flow" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Business Flow Consulting
      </Link>

      <h1 className="mb-4">Flow Map (Current vs. Ideal)</h1>
      <p className="text-xl text-white/90 mb-8">Side-by-side visual comparison showing how your workflows operate now versus how they should work.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What the Flow Map Shows</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-3">Current State Diagram</h3>
              <p className="text-white/70 text-sm mb-4">Your actual workflow mapped in detail. Every step, every handoff, every decision point, every delay.</p>
              <ul className="text-white/60 text-xs space-y-1">
                <li>• Pain points highlighted in red</li>
                <li>• Bottlenecks marked with time delays</li>
                <li>• Workarounds documented</li>
                <li>• Dependencies mapped</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Ideal State Design</h3>
              <p className="text-white/70 text-sm mb-4">The reimagined process with friction removed. Streamlined, clear ownership, minimal handoffs.</p>
              <ul className="text-white/60 text-xs space-y-1">
                <li>• Simplified steps</li>
                <li>• Clear decision rights</li>
                <li>• Automated where possible</li>
                <li>• Smooth handoffs</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Gap Analysis</h2>
          <div className="card p-6">
            <p className="text-white/80 mb-4">We don't just show you two diagrams. We explain exactly what needs to change to get from current to ideal:</p>
            <div className="space-y-3">
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Process Changes</h4>
                <p className="text-white/70 text-xs">Which steps to eliminate, combine, or reorder. What to automate.</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Role Clarifications</h4>
                <p className="text-white/70 text-xs">Who should own each step. Where decision rights need to shift.</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-1">System Requirements</h4>
                <p className="text-white/70 text-xs">What tools, templates, or documentation you need to support the new flow.</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Behavioral Changes</h4>
                <p className="text-white/70 text-xs">What habits or norms need to shift for the new process to work.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Decision Rights Matrix</h2>
          <div className="card p-6">
            <p className="text-white/80 mb-4">Every ideal state includes a Decision Rights Matrix using the RACI framework:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="card p-3 bg-white/5">
                <div className="font-medium text-current-500 mb-1">Responsible</div>
                <p className="text-white/60">Does the work</p>
              </div>
              <div className="card p-3 bg-white/5">
                <div className="font-medium text-current-500 mb-1">Accountable</div>
                <p className="text-white/60">Makes final decision</p>
              </div>
              <div className="card p-3 bg-white/5">
                <div className="font-medium text-current-500 mb-1">Consulted</div>
                <p className="text-white/60">Provides input</p>
              </div>
              <div className="card p-3 bg-white/5">
                <div className="font-medium text-current-500 mb-1">Informed</div>
                <p className="text-white/60">Kept in the loop</p>
              </div>
            </div>
            <p className="text-white/70 text-sm mt-4">This eliminates 90% of "do we need a meeting for this?" questions.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Example Transformations</h2>
          <div className="space-y-4">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Client Onboarding</h4>
              <p className="text-white/60 text-xs mb-2"><strong>Current:</strong> 12 steps, 6 handoffs, 4 approval points, 3-week timeline</p>
              <p className="text-current-500 text-xs"><strong>Ideal:</strong> 7 steps, 2 handoffs, 1 approval point, 1-week timeline</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Project Kickoff</h4>
              <p className="text-white/60 text-xs mb-2"><strong>Current:</strong> Informal, inconsistent, key details often missed</p>
              <p className="text-current-500 text-xs"><strong>Ideal:</strong> Standardized template, clear roles, documented decisions</p>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Flow Check Package</h2>
          <p className="text-white/80">The Flow Map is included in The Flow Check ($2,500). It's delivered alongside your Friction Audit and 90-Day Improvement Plan.</p>
          <Link href="/packages/flow-check" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more about Flow Check →</Link>
        </section>
      </div>
    </div>
  )
}

