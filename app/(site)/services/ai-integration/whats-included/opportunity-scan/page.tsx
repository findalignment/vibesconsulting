import Link from 'next/link'

export const metadata = { title: 'AI Opportunity Scan — AI Integration' }

export default function OpportunityScanPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to AI Integration
      </Link>

      <h1 className="mb-4">AI Opportunity Scan</h1>
      <p className="text-xl text-white/90 mb-8">We audit your operations to identify where AI can save time without exposing sensitive data.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What We Do</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Task Inventory</h3>
              <p className="text-white/70 text-sm mb-3">We catalog repetitive tasks across your team: email responses, scheduling, content creation, data entry, report generation, research.</p>
              <p className="text-white/60 text-xs">Usually 20-30 distinct tasks emerge. Most teams are surprised how much repetition exists.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Time-Waste Analysis</h3>
              <p className="text-white/70 text-sm mb-3">For each task, we estimate: how often it happens, how long it takes, how much value it creates. This tells us where AI offers highest ROI.</p>
              <p className="text-white/60 text-xs">Example: If you spend 3 hours/week writing similar client emails, that's 156 hours/year — prime AI target.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Data Safety Audit</h3>
              <p className="text-white/70 text-sm mb-3">We identify which tasks involve sensitive information (client data, financials, PII) and which are safe for AI tools.</p>
              <p className="text-white/60 text-xs">Safety first. We never recommend AI for tasks that risk exposing protected information.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Opportunity Ranking</h3>
              <p className="text-white/70 text-sm mb-3">We score each AI opportunity on: time savings, ease of implementation, risk level. Top 5-7 opportunities get detailed recommendations.</p>
              <p className="text-white/60 text-xs">You get a prioritized roadmap: start here, add this next, save this for later.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You Receive</h2>
          <div className="card p-6 bg-white/5">
            <h3 className="text-lg mb-3">AI Opportunity Report (8-12 pages)</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Section 1: Task Inventory Matrix</h4>
                <p className="text-white/70 text-xs">Visual grid showing all repetitive tasks, time spent, and automation potential.</p>
              </div>
              
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Section 2: Top 5-7 AI Opportunities</h4>
                <p className="text-white/70 text-xs">Detailed breakdown of each opportunity: what tool to use, expected time savings, implementation difficulty.</p>
              </div>
              
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Section 3: Data Safety Matrix</h4>
                <p className="text-white/70 text-xs">Clear guidelines on what's safe to automate vs. what should stay human-controlled.</p>
              </div>
              
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Section 4: Implementation Roadmap</h4>
                <p className="text-white/70 text-xs">Phased rollout plan: quick wins first, complex automation later.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Real Example</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-white/90 font-medium mb-3">Boutique Design Agency (8-person team)</p>
            
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="text-white font-medium mb-1">Top AI Opportunities We Found:</h4>
                <ul className="text-white/70 text-xs space-y-1 pl-3">
                  <li>• Client status email templates (saves 2 hrs/week)</li>
                  <li>• Meeting notes summarization (saves 1.5 hrs/week)</li>
                  <li>• Social media caption drafts (saves 3 hrs/week)</li>
                  <li>• Proposal formatting automation (saves 1 hr/week)</li>
                  <li>• Design brief intake form analysis (saves 45 min/week)</li>
                </ul>
              </div>
              
              <div className="pt-3 border-t border-current-600/20">
                <p className="text-white/80"><strong>Total annual time savings:</strong> 400+ hours</p>
                <p className="text-white/60 text-xs">Equivalent to adding a part-time team member, but with zero HR overhead.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How We Gather Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-3">Team Interviews (30 min each)</h3>
              <p className="text-white/70 text-sm mb-3">We talk to 5-7 team members across different roles to understand their repetitive work.</p>
              <p className="text-white/60 text-xs">Questions like: "What tasks do you do every day that feel robotic?" "Where do you copy-paste frequently?"</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg mb-3">Tool/Process Observation</h3>
              <p className="text-white/70 text-sm mb-3">We review your current tools (email, PM software, spreadsheets) to see workflow patterns.</p>
              <p className="text-white/60 text-xs">No access to sensitive data needed — we're observing structure, not content.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Timeline</h2>
          <div className="card p-6 bg-white/5">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white text-sm font-medium mb-1">Week 1: Discovery</h4>
                  <p className="text-white/70 text-xs">Team interviews, task inventory, tool review</p>
                </div>
                <span className="text-current-500 text-xs">Days 1-3</span>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white text-sm font-medium mb-1">Week 1-2: Analysis</h4>
                  <p className="text-white/70 text-xs">Time-waste calculation, data safety audit, opportunity ranking</p>
                </div>
                <span className="text-current-500 text-xs">Days 4-7</span>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white text-sm font-medium mb-1">Week 2: Report Delivery</h4>
                  <p className="text-white/70 text-xs">Final report + 60-min presentation to leadership</p>
                </div>
                <span className="text-current-500 text-xs">Day 10</span>
              </div>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Flow Rebuild Package</h2>
          <p className="text-white/80 mb-4">The AI Opportunity Scan is included in our Flow Rebuild package, along with Safe AI Integration and custom SOP creation.</p>
          <Link href="/packages/flow-rebuild" className="btn btn-primary inline-block">View Flow Rebuild Package</Link>
        </section>
      </div>
    </div>
  )
}

