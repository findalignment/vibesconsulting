import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'For Growing Teams (5-20 People) — Flow Check — Vibes Consulting',
  description: "Things that used to work now require coordination. You've outgrown informal systems but haven't built formal ones yet. The Flow Check helps you see where to add structure without losing agility."
}

export default function GrowingTeamsPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/flow-check" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Flow Check
      </Link>

      <h1 className="mb-4">For Growing Teams (5-20 People)</h1>
      <p className="text-xl text-white/90 mb-8">You've outgrown "winging it" but aren't sure what structure to add. The Flow Check shows you exactly where to build systems.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">The Growing Pains Pattern</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">When you were 3-5 people, everyone just "knew" what to do. You could figure things out on Slack. Decisions happened organically. Information lived in people's heads and that was fine.</p>
            <p className="text-white/80 mb-4">Now you're 8-12 people (or more). Suddenly nothing feels smooth. Simple tasks require coordination. Questions go unanswered. Work gets duplicated. People wait for decisions.</p>
            <p className="text-white/80">You can feel the friction but can't name it. That's what the Flow Check is for.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Signs This Is You</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ "It used to be easier when we were smaller"</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ New hires ask "where's the documentation?" (there isn't any)</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Same questions get asked repeatedly</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Projects fall through cracks during handoffs</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ You're not sure who owns what anymore</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Meetings feel necessary but wasteful</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Why This Happens</h2>
          <div className="space-y-4">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">1. You Crossed the "Everyone Knows" Threshold</h3>
              <p className="text-white/70 text-xs">At 5 people, everyone's in the loop naturally. At 12, information silos form. Not intentionally — it just happens.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">2. Tribal Knowledge Doesn't Scale</h3>
              <p className="text-white/70 text-xs">The founder knows how everything works. But that knowledge lives in their head, not in systems.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">3. Informal Processes Break Down</h3>
              <p className="text-white/70 text-xs">"Just figure it out" worked when everyone was a generalist. Now you have specialists who need clear handoffs.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">4. Nobody Has Time to Fix It</h3>
              <p className="text-white/70 text-xs">You're too busy executing to step back and redesign. So friction compounds.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How Flow Check Helps</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">We Show You Where to Add Structure</h3>
              <p className="text-white/70 text-sm mb-3">Not everywhere — just where it matters. The Friction Audit pinpoints the 3-5 places where lack of systems is costing you the most time.</p>
              <p className="text-white/60 text-xs italic">Example: You need a client intake checklist, but you don't need a formal approval process for Slack purchases.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">We Clarify Ownership</h3>
              <p className="text-white/70 text-sm mb-3">The Flow Map shows who should own what. No more "I thought you were handling it." Clear roles without bureaucracy.</p>
              <p className="text-white/60 text-xs italic">Example: Project Manager owns client communication. Designer owns creative decisions. Founder owns strategy, not execution.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">We Document What's in People's Heads</h3>
              <p className="text-white/70 text-sm mb-3">The 90-Day Plan includes creating essential documentation: project brief templates, decision thresholds, onboarding checklists. Just enough structure to scale.</p>
              <p className="text-white/60 text-xs italic">Example: "How we kick off a new client" becomes a 1-page template instead of tribal knowledge.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Real Example: Design Agency, 10 People</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/90 mb-2 font-medium">Before Flow Check:</p>
            <ul className="text-white/70 text-sm space-y-2 mb-4">
              <li>• Client projects had inconsistent kickoffs</li>
              <li>• Design revisions took forever (unclear expectations)</li>
              <li>• New designers struggled for first 2 months</li>
              <li>• Founder involved in every decision</li>
              <li>• Team working 50+ hour weeks but behind</li>
            </ul>

            <p className="text-white/90 mb-2 font-medium">After Flow Check (and 90-Day Plan implementation):</p>
            <ul className="text-white/70 text-sm space-y-2 mb-4">
              <li>• Standard project kickoff template (30 min vs. 2 hours)</li>
              <li>• Client expectation doc reduced revisions by 40%</li>
              <li>• Designer onboarding checklist cut ramp time to 3 weeks</li>
              <li>• Project Managers empowered to make $500 decisions</li>
              <li>• Founder works 35 hours, team feels less chaotic</li>
            </ul>

            <p className="text-current-500 text-sm font-medium">Result: 15+ hours saved per week, faster delivery, less stress</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You'll Learn</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-white/90 mb-4">The Flow Check will show you:</p>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>✓ Which informal processes need to become formal systems</li>
              <li>✓ Where documentation would save the most time</li>
              <li>✓ What decisions can be delegated (and to whom)</li>
              <li>✓ Which meetings to keep, kill, or convert to async</li>
              <li>✓ How to onboard new people without overwhelming them</li>
              <li>✓ Where to add structure without killing your culture</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Why Start with Flow Check?</h2>
          <div className="card p-6">
            <p className="text-white/80 mb-3">Growing teams often over-correct in one of two ways:</p>
            <ul className="text-white/70 text-sm space-y-2 mb-4">
              <li>• <strong>Too little structure:</strong> "We don't want to be bureaucratic" → chaos continues</li>
              <li>• <strong>Too much structure:</strong> "Let's implement [big system]" → team rebels, nothing sticks</li>
            </ul>
            <p className="text-white/80">The Flow Check finds the middle ground. Just enough process to scale, not so much that you lose agility.</p>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to Add Structure Without Losing Your Vibe?</h2>
          <p className="text-white/80 mb-6">The Flow Check is perfect for growing teams. Book an intro call to see where you need systems.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

