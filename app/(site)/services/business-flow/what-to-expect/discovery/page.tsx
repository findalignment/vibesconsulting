import Link from 'next/link'

export const metadata = { title: 'Discovery Phase - Business Flow Consulting' }

export default function DiscoveryPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/business-flow" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to Business Flow Consulting
      </Link>

      <h1 className="mb-4">Week 1-2: Discovery Phase</h1>
      <p className="text-xl text-brand-text/90 mb-8">We conduct interviews, observe operations, and review documentation. You keep running your business - we work around your schedule.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What Happens</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Kickoff Meeting (Day 1, 90 minutes)</h3>
              <p className="text-brand-text/70 text-sm mb-3">We meet with leadership to understand your business model, current pain points, and what success looks like. We identify who to interview and which processes to observe.</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">Attendees:</p>
                <p>Founders/owners, key managers (3-5 people max)</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Team Interviews (Days 2-5, 30 min each)</h3>
              <p className="text-brand-text/70 text-sm mb-3">We talk to 5-7 team members across different roles and seniority levels. These are conversational, not interrogations. We ask about daily friction, what slows them down, and what workarounds exist.</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">Topics we cover:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Where does work get stuck?</li>
                  <li>• What information is hard to find?</li>
                  <li>• Which meetings feel wasteful?</li>
                  <li>• What would make their job easier?</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Process Observation (Days 3-7, 3-4 hours)</h3>
              <p className="text-brand-text/70 text-sm mb-3">We shadow your team during normal operations. We watch how work moves, where handoffs happen, where delays occur. This reveals friction that people have stopped noticing.</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">What we observe:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Meetings and decision-making</li>
                  <li>• Handoffs between team members</li>
                  <li>• How information is shared</li>
                  <li>• How problems get escalated</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Documentation Review (Days 5-10)</h3>
              <p className="text-brand-text/70 text-sm mb-3">We review whatever documentation you have: process docs, org charts, templates, SOPs. We assess what exists, what's missing, and what's outdated.</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">This happens in the background</p>
                <p>No time required from your team</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Your Time Investment</h2>
          <div className="card p-6 bg-white/5">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-brand-text text-sm font-medium mb-2">Leadership</h4>
                <ul className="text-brand-text/70 text-xs space-y-1">
                  <li>• 90-min kickoff</li>
                  <li>• 30-min individual interview</li>
                  <li>• Optional: sit in on observation</li>
                </ul>
                <p className="text-current-500 text-xs mt-2 font-medium">Total: ~2 hours</p>
              </div>
              <div>
                <h4 className="text-brand-text text-sm font-medium mb-2">Team Members</h4>
                <ul className="text-brand-text/70 text-xs space-y-1">
                  <li>• 30-min interview</li>
                  <li>• Work normally during observation</li>
                  <li>• No extra prep needed</li>
                </ul>
                <p className="text-current-500 text-xs mt-2 font-medium">Total: 30 minutes each</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How We Work Around You</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Flexible Scheduling</h3>
              <p className="text-brand-text/70 text-xs">We book interviews at your team's convenience. Early morning, lunch breaks, end of day - whatever works.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Minimal Disruption</h3>
              <p className="text-brand-text/70 text-xs">Observation happens during normal work. We're flies on the wall, not disruptive consultants asking constant questions.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Async When Possible</h3>
              <p className="text-brand-text/70 text-xs">Documentation review, analysis, and synthesis happen on our time, not yours.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Remote Options</h3>
              <p className="text-brand-text/70 text-xs">For remote teams, we do video interviews and observe via screen share or recorded meetings.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You Get at the End</h2>
          <div className="card p-6">
            <p className="text-brand-text/70 mb-4">Discovery feeds directly into your Friction Audit Report and Flow Map. By the end of Week 2, we have everything we need to create your 90-Day Improvement Plan.</p>
            <p className="text-brand-text/70 text-sm">You'll see a preview of key findings in Week 2 before the final presentation.</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Flow Check Process</h2>
          <p className="text-brand-text/70">Discovery happens during Week 1-2 of The Flow Check engagement.</p>
          <Link href="/packages/flow-check" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more about Flow Check →</Link>
        </section>
      </div>
    </div>
  )
}
