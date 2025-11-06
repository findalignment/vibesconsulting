import Link from 'next/link'

export const metadata = { title: 'For Owner-Operators (You're the Bottleneck) — Business Flow Consulting' }

export default function OwnerBottleneckPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/business-flow" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Business Flow Consulting
      </Link>

      <h1 className="mb-4">For Owner-Operators: When You're the Bottleneck</h1>
      <p className="text-xl text-white/90 mb-8">Every decision runs through you. Your team waits for your input. You work nights and weekends but the business still feels chaotic.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">The Owner-Bottleneck Pattern</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">You started the business. You know how everything should work. So when questions come up, people ask you. When decisions need making, you make them. When problems arise, you solve them.</p>
            <p className="text-white/70 text-sm mb-4">This worked when you had 3 people. Now you have 8, and you're drowning. Your calendar is back-to-back. Your team is capable but constantly waiting for you.</p>
            <p className="text-white/70 text-sm">The business can't grow past your personal capacity. And you know this isn't sustainable.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Signs You're the Bottleneck</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <p className="text-white/70 text-xs mb-2">✓ Your team says "let me check with [your name]" constantly</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs mb-2">✓ You can't take a vacation without everything grinding to a halt</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs mb-2">✓ Every project review, client email, or proposal needs your approval</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs mb-2">✓ You're working 50+ hour weeks but still behind</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs mb-2">✓ Your team is smart but doesn't make decisions without you</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs mb-2">✓ You spend more time answering questions than doing strategic work</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Why This Happens</h2>
          <div className="space-y-4">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">1. Decision Rights Aren't Documented</h3>
              <p className="text-white/70 text-xs">Your team doesn't know what they're empowered to decide. So they ask you. Because it's safer than guessing wrong.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">2. Knowledge Lives in Your Head</h3>
              <p className="text-white/70 text-xs">You know how things should be done. But it's not written down. So every new situation requires your guidance.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">3. Quality Standards Aren't Clear</h3>
              <p className="text-white/70 text-xs">"Good enough" is subjective. Your team doesn't want to disappoint you, so they wait for your review.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">4. There's No Decision Framework</h3>
              <p className="text-white/70 text-xs">Without criteria for "when to escalate vs. decide yourself," everything escalates to you by default.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How Business Flow Consulting Helps</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">We Extract Knowledge From Your Head</h3>
              <p className="text-white/70 text-sm mb-3">Through interviews and observation, we document how you make decisions, what quality looks like, and when exceptions are okay.</p>
              <p className="text-white/60 text-xs">Then we turn that into systems your team can reference instead of asking you.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">We Clarify Decision Rights</h3>
              <p className="text-white/70 text-sm mb-3">We map which decisions you need to make vs. which your team should own. Then we document that.</p>
              <p className="text-white/60 text-xs">Your team gets clear boundaries: "You own X. Consult me on Y. Inform me about Z."</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">We Build Escalation Frameworks</h3>
              <p className="text-white/70 text-sm mb-3">Clear criteria for when to escalate: budget thresholds, risk levels, client tier, etc.</p>
              <p className="text-white/60 text-xs">90% of decisions stop requiring your input because the rules are clear.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What Changes For You</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4 bg-current-600/10">
              <h4 className="text-white text-sm font-medium mb-2">Before</h4>
              <ul className="text-white/60 text-xs space-y-1">
                <li>• 50+ hour weeks</li>
                <li>• Can't take vacation</li>
                <li>• Constant interruptions</li>
                <li>• No strategic time</li>
              </ul>
            </div>
            <div className="card p-4 bg-white/5 flex items-center justify-center">
              <div className="text-current-500 text-2xl">→</div>
            </div>
            <div className="card p-4 bg-current-600/10">
              <h4 className="text-white text-sm font-medium mb-2">After</h4>
              <ul className="text-white/60 text-xs space-y-1">
                <li>• 35-40 hour weeks</li>
                <li>• Team self-sufficient</li>
                <li>• Decisions delegated</li>
                <li>• Time for growth</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Real Example</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/90 mb-2 font-medium">Marketing agency, 10 people, founder-led</p>
            <p className="text-white/70 text-sm mb-4"><strong>Problem:</strong> Founder reviewed every client deliverable, approved every email, made every project decision. Working 60-hour weeks. Team felt micromanaged but didn't know what they could decide.</p>
            <p className="text-white/70 text-sm mb-4"><strong>Solution:</strong> Documented decision rights, created quality checklists, built escalation framework, empowered project leads.</p>
            <p className="text-current-500 text-sm font-medium"><strong>Result:</strong> Founder's approval queue dropped 80%. Team made decisions confidently. Work weeks dropped to 40 hours.</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Stop Being the Bottleneck?</h2>
          <p className="text-white/80 mb-4">Start with a Flow Check to identify which decisions to delegate first.</p>
          <Link href="/packages/flow-check" className="btn btn-primary inline-block">Book Flow Check</Link>
        </section>
      </div>
    </div>
  )
}

