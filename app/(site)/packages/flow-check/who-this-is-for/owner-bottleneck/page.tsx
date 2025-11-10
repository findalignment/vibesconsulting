import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'For Owner-Bottlenecks - Flow Check - Vibes Consulting',
  description: 'Every decision runs through you. Your team waits for your input. You work nights and weekends but the business still feels chaotic. The Flow Check shows you how to delegate without losing control.'
}

export default function OwnerBottleneckPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/flow-check" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to Flow Check
      </Link>

      <h1 className="mb-4">For Owner-Bottlenecks: When You're the Holdup</h1>
      <p className="text-xl text-brand-text/90 mb-8">Every decision runs through you. Your team is capable but constantly waiting. You know this isn't sustainable.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">The Bottleneck Pattern</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-brand-text/70 mb-4">You started the business. You know how everything should work. So when questions come up, people ask you. When decisions need making, you make them.</p>
            <p className="text-brand-text/70 mb-4">This worked when you had 3 people. Now you have 8+ and you're drowning. Your calendar is back-to-back. Your team is smart but waiting for you constantly.</p>
            <p className="text-brand-text/70">The business can't grow past your personal capacity.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Signs You're the Bottleneck</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <p className="text-brand-text/70 text-xs">✓ Team says "let me check with [your name]" constantly</p>
            </div>
            <div className="card p-4">
              <p className="text-brand-text/70 text-xs">✓ Can't take vacation without things grinding to halt</p>
            </div>
            <div className="card p-4">
              <p className="text-brand-text/70 text-xs">✓ Every review, email, or proposal needs your sign-off</p>
            </div>
            <div className="card p-4">
              <p className="text-brand-text/70 text-xs">✓ Working 50+ hour weeks but still behind</p>
            </div>
            <div className="card p-4">
              <p className="text-brand-text/70 text-xs">✓ Team doesn't make decisions without you</p>
            </div>
            <div className="card p-4">
              <p className="text-brand-text/70 text-xs">✓ More time answering questions than doing strategic work</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Why This Happens</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Decision Rights Aren't Documented</h3>
              <p className="text-brand-text/70 text-xs">Your team doesn't know what they're empowered to decide. So they ask you. Because it's safer than guessing wrong.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Knowledge Lives in Your Head</h3>
              <p className="text-brand-text/70 text-xs">You know how things should be done. But it's not written down. So every new situation requires your guidance.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">No Escalation Framework</h3>
              <p className="text-brand-text/70 text-xs">Without criteria for "when to escalate vs. decide yourself," everything escalates to you by default.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How Flow Check Helps</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">We Extract Knowledge From Your Head</h3>
              <p className="text-brand-text/70 text-sm">Through interviews and observation, we document how you make decisions, what quality looks like, and when exceptions are okay. Then we turn that into systems your team can reference.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">We Clarify Decision Rights</h3>
              <p className="text-brand-text/70 text-sm">We map which decisions you need to make vs. which your team should own. Your team gets clear boundaries: "You own X. Consult me on Y. Inform me about Z."</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">We Build Escalation Frameworks</h3>
              <p className="text-brand-text/70 text-sm">Clear criteria for when to escalate: budget thresholds, risk levels, client tier. 90% of decisions stop requiring your input because the rules are clear.</p>
            </div>
          </div>
        </section>

        

        <section>
          <h2 className="mb-4">What You'll Learn</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-brand-text/90 mb-4">The Flow Check will show you:</p>
            <ul className="space-y-2 text-brand-text/70 text-sm">
              <li>✓ Which decisions you actually need to make (fewer than you think)</li>
              <li>✓ What knowledge needs to be documented vs. living in your head</li>
              <li>✓ How to delegate without feeling like you're losing control</li>
              <li>✓ Where to set decision thresholds ($500? $2K? Client tier?)</li>
              <li>✓ What systems to build so your team doesn't need to ask you</li>
            </ul>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to Stop Being the Bottleneck?</h2>
          <p className="text-brand-text/70 mb-6">The Flow Check shows you how to delegate without losing quality or control.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

