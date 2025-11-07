import Link from 'next/link'

export const metadata = { title: 'For Growing Teams (5-20 people) - Business Flow Consulting' }

export default function GrowingTeamsPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/business-flow" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Business Flow Consulting
      </Link>

      <h1 className="mb-4">For Growing Teams (5-20 people)</h1>
      <p className="text-xl text-white/90 mb-8">You've outgrown informal systems. Things that used to "just work" now require coordination and clarity.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">The Growth Inflection Point</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">At 5-7 people, you hit the coordination threshold. Everyone can't be in every conversation anymore. Informal norms break down. What used to flow naturally now requires intentional systems.</p>
            <p className="text-white/70 text-sm">But you haven't built those systems yet. You're caught between startup chaos and enterprise structure - and it feels messy.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Signs You're at This Stage</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Information Gaps</h3>
              <p className="text-white/70 text-xs">New hires ask "where do I find X?" and the answer is always "ask Sarah." Information lives in people's heads, not documentation.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Coordination Overhead</h3>
              <p className="text-white/70 text-xs">You spend more time in meetings coordinating work than actually doing work. Every project requires multiple check-ins.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Onboarding Takes Forever</h3>
              <p className="text-white/70 text-xs">New people take 6-8 weeks to ramp up because nothing is documented. They shadow others to learn "how we do things."</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Process Confusion</h3>
              <p className="text-white/70 text-xs">"What's our process for X?" gets different answers from different people. There's no single source of truth.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Quality Inconsistency</h3>
              <p className="text-white/70 text-xs">Work quality depends on who does it. No standardized processes means no consistent output.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Decision Bottlenecks</h3>
              <p className="text-white/70 text-xs">Founders/leaders are bottlenecks for every decision because there's no documented decision rights.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Why Business Flow Consulting Works for You</h2>
          <div className="space-y-4">
            <div className="card p-4">
              <h3 className="text-lg mb-2">You Need Structure, Not Bureaucracy</h3>
              <p className="text-white/70 text-sm">We build lightweight systems that create clarity without slowing you down. Documentation that actually gets used. Processes that feel helpful, not restrictive.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-lg mb-2">You're Building the Foundation</h3>
              <p className="text-white/70 text-sm">The systems you build now will support you to 50+ people. Get them right at 10 people and scaling becomes easier.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-lg mb-2">You Have Momentum to Maintain</h3>
              <p className="text-white/70 text-sm">Growing teams can't afford 6-month transformation projects. We focus on high-impact improvements that don't disrupt operations.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What Changes For You</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4 bg-current-600/10">
              <h4 className="text-white text-sm font-medium mb-2">Before</h4>
              <ul className="text-white/60 text-xs space-y-1">
                <li>• Informal everything</li>
                <li>• Info in people's heads</li>
                <li>• Coordination chaos</li>
                <li>• Slow onboarding</li>
              </ul>
            </div>
            <div className="card p-4 bg-white/5 flex items-center justify-center">
              <div className="text-current-500 text-2xl">→</div>
            </div>
            <div className="card p-4 bg-current-600/10">
              <h4 className="text-white text-sm font-medium mb-2">After</h4>
              <ul className="text-white/60 text-xs space-y-1">
                <li>• Clear processes</li>
                <li>• Documented knowledge</li>
                <li>• Smooth coordination</li>
                <li>• Fast onboarding</li>
              </ul>
            </div>
          </div>
        </section>

        

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Build Your Foundation?</h2>
          <p className="text-white/80 mb-4">Start with a Flow Check to identify which systems need building first.</p>
          <Link href="/packages/flow-check" className="btn btn-primary inline-block">Book Flow Check</Link>
        </section>
      </div>
    </div>
  )
}

