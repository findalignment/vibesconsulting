import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Final Presentation & Strategy Session — Flow Check — Vibes Consulting',
  description: '60-minute presentation of findings with your leadership team. We walk through the report, answer questions, and help you decide next steps.'
}

export default function FinalPresentationPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/flow-check" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Flow Check
      </Link>

      <h1 className="mb-4">Final Presentation & Strategy Session</h1>
      <p className="text-xl text-white/90 mb-8">A 60-minute working session where we walk through your findings and help you decide what to do next.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What It Is</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">This isn't a one-way presentation where we talk at you for an hour. It's a collaborative strategy session where we review the findings together, answer your questions, and help you chart the path forward.</p>
            <p className="text-white/80">You'll leave with clarity on what to fix first, whether to implement yourself or get help, and what success looks like.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What We Cover</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Friction Audit Walkthrough (15 min)</h3>
              <p className="text-white/70 text-sm mb-3">We review the top 3-5 friction points we found, why they exist, and how much time they're costing. This often surfaces surprises — things you felt but couldn't name.</p>
              <p className="text-white/60 text-xs italic">Common reaction: "That explains why everyone's so frustrated with [that process]."</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Flow Map Review (15 min)</h3>
              <p className="text-white/70 text-sm mb-3">Side-by-side comparison of current vs. ideal workflows. We show you exactly what needs to change and how much faster things could be.</p>
              <p className="text-white/60 text-xs italic">Common reaction: "I didn't realize we had that many unnecessary steps."</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">90-Day Plan Discussion (20 min)</h3>
              <p className="text-white/70 text-sm mb-3">We walk through the improvement roadmap: quick wins, system redesigns, and stabilization. You'll see what's realistic to tackle first and what can wait.</p>
              <p className="text-white/60 text-xs italic">Common reaction: "This actually feels doable. I thought we'd have to change everything at once."</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Next Steps Strategy (10 min)</h3>
              <p className="text-white/70 text-sm mb-3">We help you decide: implement yourself, continue with Flow Rebuild, or pause and return later. No pressure — just honest guidance on what makes sense for your team.</p>
              <p className="text-white/60 text-xs italic">Plus: 30 days of email support for implementation questions</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Who Should Attend</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Essential:</h4>
              <ul className="text-white/70 text-xs space-y-1">
                <li>• Founder / Owner</li>
                <li>• COO / Operations Lead</li>
                <li>• Anyone with budget authority</li>
              </ul>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Recommended:</h4>
              <ul className="text-white/70 text-xs space-y-1">
                <li>• Key managers (2-3 people)</li>
                <li>• Anyone who'll implement changes</li>
                <li>• Project leads</li>
              </ul>
            </div>
          </div>
          <p className="text-white/70 text-sm mt-4">Ideal group size: 2-5 people. Small enough for discussion, large enough for buy-in.</p>
        </section>

        <section>
          <h2 className="mb-4">What You'll Receive</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-1">Complete Report Package (Digital)</h4>
              <p className="text-white/70 text-xs">PDF or Notion doc with all findings: Friction Audit, Flow Maps, 90-Day Plan. Yours to keep and reference.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-1">Presentation Recording</h4>
              <p className="text-white/70 text-xs">Video recording of the session so you can share with team members who couldn't attend.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-1">30 Days of Email Support</h4>
              <p className="text-white/70 text-xs">Questions during implementation? We're available via email for a month after delivery. "Does this sound like the right approach?" "Should we prioritize X or Y?"</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-1">$2,500 Credit (If You Continue)</h4>
              <p className="text-white/70 text-xs">If you book Flow Rebuild or Vibe Partnership, the $2,500 Flow Check fee is fully credited. Valid for 12 months.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Your Three Options After</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Option 1: Implement It Yourself</h3>
              <p className="text-white/70 text-sm mb-3">Take the 90-Day Plan and run with it. Some clients have internal bandwidth and just needed a clear roadmap. With 30 days of email support, this can work great.</p>
              <p className="text-white/60 text-xs italic">Best for: Teams with internal project management capacity and moderate technical complexity</p>
            </div>

            <div className="card p-6 bg-current-600/10">
              <h3 className="text-lg mb-2">Option 2: Continue with Flow Rebuild (Most Common)</h3>
              <p className="text-white/70 text-sm mb-3">We implement the plan with you over 6 weeks. The $2,500 is fully credited, so you only pay $5,500 more ($8,000 total). Most clients choose this path.</p>
              <p className="text-white/60 text-xs italic">Best for: Teams who want expert implementation support and faster results</p>
              <Link href="/packages/flow-rebuild" className="text-current-500 text-sm hover:underline mt-2 inline-block">Learn about Flow Rebuild →</Link>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Option 3: Pause and Return Later</h3>
              <p className="text-white/70 text-sm mb-3">Not ready to implement now? That's fine. You keep the report, the credit stays active for 12 months, and you come back when timing is better.</p>
              <p className="text-white/60 text-xs italic">Best for: Teams with upcoming busy seasons or budget constraints</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Common Questions During the Session</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-1">"Is this really the biggest problem?"</h4>
              <p className="text-white/70 text-xs">Yes. We show you the data: time cost, people affected, frequency. The numbers don't lie.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-1">"Can we fix just one thing first?"</h4>
              <p className="text-white/70 text-xs">Absolutely. The plan is phased. Start with quick wins, see results, then tackle bigger changes.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-1">"What if we disagree with a recommendation?"</h4>
              <p className="text-white/70 text-xs">We discuss it. You know your business best. The plan is a starting point, not a mandate.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-1">"How do we get team buy-in?"</h4>
              <p className="text-white/70 text-xs">We help you frame the changes. Show them the "before and after" time savings. People support what they help create.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What Makes This Different</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Most consulting engagements end with a 100-slide deck that sits on a shelf. Ours ends with a working session where you actually make decisions.</p>
            <p className="text-white/80 mb-4">We're not trying to impress you with jargon. We're trying to give you clarity on what to do Monday morning.</p>
            <p className="text-white/80">And if you decide to implement yourself? Great. If you want our help? Even better. Either way, you leave with a clear path forward.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">The Complete Flow Check Package</h2>
          <p className="text-white/80 mb-4">The Final Presentation ties together all the deliverables:</p>
          <div className="space-y-3">
            <Link href="/packages/flow-check/whats-included/friction-audit" className="card p-4 hover:border-current-600/60 transition-all block">
              <p className="text-current-500 text-sm font-medium mb-1">Friction Audit Report →</p>
              <p className="text-white/70 text-xs">Identifies where work slows down and why</p>
            </Link>
            <Link href="/packages/flow-check/whats-included/flow-map" className="card p-4 hover:border-current-600/60 transition-all block">
              <p className="text-current-500 text-sm font-medium mb-1">Flow Map (Current vs. Ideal) →</p>
              <p className="text-white/70 text-xs">Shows how workflows should work once friction is removed</p>
            </Link>
            <Link href="/packages/flow-check/whats-included/improvement-plan" className="card p-4 hover:border-current-600/60 transition-all block">
              <p className="text-current-500 text-sm font-medium mb-1">90-Day Improvement Plan →</p>
              <p className="text-white/70 text-xs">Phased action plan for implementing the ideal state</p>
            </Link>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to See What's Possible?</h2>
          <p className="text-white/80 mb-6">The Final Presentation is where insights become action. Book an intro call to start your Flow Check.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

