import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'The Flow Check — Vibes Consulting',
  description: 'A 2-week diagnostic that identifies bottlenecks, cultural drag, and operational blind spots. $2,500, credited to any future engagement.'
}

export default function FlowCheckPage() {
  return (
    <div className="pb-20">
      <Link href="/packages" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Packages
      </Link>

      <header className="mb-12">
        <h1 className="mb-4">The Flow Check</h1>
        <p className="text-xl text-white/90 max-w-3xl">The low-risk diagnostic that shows you exactly where your business gets stuck — and how to fix it.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">$2,500</div>
          <p className="text-white/70 text-sm">One-time investment</p>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">2 weeks</div>
          <p className="text-white/70 text-sm">From kickoff to final delivery</p>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">100%</div>
          <p className="text-white/70 text-sm">Credit toward Flow Rebuild</p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="mb-6">What You Get</h2>
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="text-xl mb-2">Friction Audit Report</h3>
            <p className="text-white/70 mb-3">Visual map of where work slows down in your business. We identify the 3-5 highest-impact friction points costing you time and momentum.</p>
            <p className="text-white/60 text-sm">Includes: Process observation, team interviews, bottleneck analysis, root cause documentation</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl mb-2">Flow Map (Current vs. Ideal)</h3>
            <p className="text-white/70 mb-3">Side-by-side comparison showing how your workflows operate now versus how they should work. Clear gap analysis with decision rights matrix.</p>
            <p className="text-white/60 text-sm">Includes: Current state diagram, ideal state design, implementation roadmap</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl mb-2">90-Day Continuous Improvement Plan</h3>
            <p className="text-white/70 mb-3">Phased action plan with quick wins (weeks 1-4), system redesign (weeks 5-8), and stabilization (weeks 9-12). Includes success metrics and accountability structure.</p>
            <p className="text-white/60 text-sm">Includes: Prioritized improvements, timeline, owner assignments, measurement framework</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl mb-2">Final Presentation + Strategy Session</h3>
            <p className="text-white/70 mb-3">60-minute presentation of findings with your leadership team. We walk through the report, answer questions, and help you decide next steps.</p>
            <p className="text-white/60 text-sm">Plus: 30 days of email support for implementation questions</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">The Process</h2>
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-current-500">1</div>
              <div className="flex-1">
                <h3 className="text-lg mb-2">Kickoff Call (Week 1, Day 1)</h3>
                <p className="text-white/70 text-sm mb-3">90-minute session to understand your business model, current pain points, and what success looks like. We'll identify who to interview and which processes to observe.</p>
                <p className="text-white/60 text-sm italic">Your time: 90 minutes</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-current-500">2</div>
              <div className="flex-1">
                <h3 className="text-lg mb-2">Discovery Phase (Week 1)</h3>
                <p className="text-white/70 text-sm mb-3">We conduct 5-7 team interviews (30 min each), observe operations for 3-4 hours, and review your existing documentation. You keep running your business — we work around your schedule.</p>
                <p className="text-white/60 text-sm italic">Your time: 30-minute interviews, optional observation participation</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-current-500">3</div>
              <div className="flex-1">
                <h3 className="text-lg mb-2">Analysis & Design (Week 2, Days 1-3)</h3>
                <p className="text-white/70 text-sm mb-3">We synthesize findings, create visual flow maps, and draft the 90-day improvement plan. You'll see a preview of key insights before the final presentation.</p>
                <p className="text-white/60 text-sm italic">Your time: 15-minute check-in call</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-bold text-current-500">4</div>
              <div className="flex-1">
                <h3 className="text-lg mb-2">Final Presentation (Week 2, Day 4-5)</h3>
                <p className="text-white/70 text-sm mb-3">60-minute presentation with your leadership team. We walk through the Friction Audit, Flow Maps, and 90-Day Plan. You decide if you want to implement yourself or continue with Flow Rebuild.</p>
                <p className="text-white/60 text-sm italic">Your time: 60 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Who This Is For</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg mb-3">You're Growing (5-20 people)</h3>
            <p className="text-white/70 text-sm mb-4">Things that used to "just work" now require coordination. You've outgrown informal systems but haven't built formal ones yet. Everyone's busy but nothing feels smooth.</p>
            <p className="text-current-500 text-sm font-medium">Perfect fit if: You can feel the friction but can't name it</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">You're the Bottleneck</h3>
            <p className="text-white/70 text-sm mb-4">Every decision runs through you. Your team waits for your input. You work nights and weekends but the business still feels chaotic. You know this isn't sustainable.</p>
            <p className="text-current-500 text-sm font-medium">Perfect fit if: You need to delegate but don't know how</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Processes Feel Broken</h3>
            <p className="text-white/70 text-sm mb-4">Onboarding takes too long. Client projects have too many handoffs. Information gets lost. Simple tasks require too many meetings. You know it should be easier.</p>
            <p className="text-current-500 text-sm font-medium">Perfect fit if: Your gut says "there's a better way"</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">You Want Proof Before Investing</h3>
            <p className="text-white/70 text-sm mb-4">You're not ready to commit to a full engagement without seeing the quality of work. You want a diagnostic that gives you value even if you implement it yourself.</p>
            <p className="text-current-500 text-sm font-medium">Perfect fit if: You prefer "try before you buy"</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">What Happens After</h2>
        <div className="card p-8">
          <p className="text-white/90 mb-6">You have three options:</p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="text-current-500 text-xl">→</div>
              <div>
                <h4 className="text-white font-medium mb-1">Implement It Yourself</h4>
                <p className="text-white/70 text-sm">Take the 90-Day Plan and run with it. We include 30 days of email support to answer questions. Some clients choose this path and it works great.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-current-500 text-xl">→</div>
              <div>
                <h4 className="text-white font-medium mb-1">Continue with Flow Rebuild</h4>
                <p className="text-white/70 text-sm">We implement the plan with you over 6 weeks. The $2,500 Flow Check fee is fully credited, so you only pay $5,500 more ($8,000 total). Most clients choose this path.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-current-500 text-xl">→</div>
              <div>
                <h4 className="text-white font-medium mb-1">Pause and Return Later</h4>
                <p className="text-white/70 text-sm">Not ready to implement? That's fine. The credit stays active for 12 months. Come back when timing is better.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 card p-6">
        <h2 className="mb-4">Common Questions</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Do we need to pause operations?</h4>
            <p className="text-white/70 text-sm">No. We work around your schedule. Most observation happens during normal hours.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">What if we're too small?</h4>
            <p className="text-white/70 text-sm">If you have 3+ people and recurring friction, you're the right size.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Can you work remotely?</h4>
            <p className="text-white/70 text-sm">Yes. In-person is ideal for Santa Cruz / Bay Area, but we do video observation for remote teams.</p>
          </div>
        </div>
      </section>

      <section className="card p-8 bg-current-600/10 text-center">
        <h2 className="mb-4">Ready to See Where You're Stuck?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-6">Book a 30-minute intro call. We'll discuss your friction points and see if a Flow Check makes sense. No pressure, no sales pitch.</p>
        <CTAButton>Schedule Intro Call</CTAButton>
      </section>
    </div>
  )
}

