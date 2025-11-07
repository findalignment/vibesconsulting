import Link from 'next/link'

export const metadata = { title: 'Leadership Coaching - Culture & Environment Optimization' }

export default function LeadershipCoachingPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/culture-optimization" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Culture & Environment Optimization
      </Link>

      <h1 className="mb-4">Leadership Coaching Session</h1>
      <p className="text-xl text-white/90 mb-8">90-minute session with founders and managers to align on culture strategy, address blind spots, and build leadership skills that support team well-being.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What We Cover</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Culture Flow Report Debrief</h3>
              <p className="text-white/70 text-sm mb-3">We walk through the findings together. Address surprises, clarify insights, and discuss root causes.</p>
              <p className="text-white/60 text-xs">Focus: Understanding what's really happening vs. what you thought was happening.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">2. Leadership Blind Spots</h3>
              <p className="text-white/70 text-sm mb-3">Most culture issues trace back to leadership behaviors. We identify patterns you might not see: unclear expectations, inconsistent communication, unintentional favoritism.</p>
              <p className="text-white/60 text-xs">Focus: Self-awareness without blame. This is about growth, not criticism.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">3. Decision Rights & Delegation</h3>
              <p className="text-white/70 text-sm mb-3">If you're the bottleneck, we work on empowering others. If decision-making is unclear, we design a framework.</p>
              <p className="text-white/60 text-xs">Focus: Building systems so you don't have to be involved in everything.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">4. Communication Effectiveness</h3>
              <p className="text-white/70 text-sm mb-3">Are you communicating enough? Too much? In the wrong way? We assess your cadence, tone, and channels.</p>
              <p className="text-white/60 text-xs">Focus: How to say the right things at the right frequency without over-communicating.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">5. Modeling Desired Culture</h3>
              <p className="text-white/70 text-sm mb-3">Culture flows from leadership. If you want open communication, you have to model it. If you want work-life balance, you have to demonstrate it.</p>
              <p className="text-white/60 text-xs">Focus: Aligning your behaviors with your stated values.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">6. Handling Difficult Conversations</h3>
              <p className="text-white/70 text-sm mb-3">Addressing underperformance, conflict, or toxic behavior. We provide frameworks and practice scenarios.</p>
              <p className="text-white/60 text-xs">Focus: Saying hard things with clarity and respect.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Format & Approach</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Duration</h4>
              <p className="text-white/70 text-xs">90 minutes (can extend if needed)</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Attendees</h4>
              <p className="text-white/70 text-xs">Founders, owners, and key managers (2-4 people max)</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Setting</h4>
              <p className="text-white/70 text-xs">Private, confidential. In-person or video call.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Tone</h4>
              <p className="text-white/70 text-xs">Direct but supportive. No shame, just growth.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Sample Topics Discussed</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <p className="text-white/80 text-sm mb-2">"Our team says they don't feel heard. But we have an open-door policy!"</p>
              <p className="text-white/70 text-xs"><strong>Coaching:</strong> Open-door ≠ psychological safety. Do people actually use the open door? Do you respond defensively? Let's design structured feedback rituals.</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm mb-2">"I want to delegate more, but nobody takes initiative."</p>
              <p className="text-white/70 text-xs"><strong>Coaching:</strong> Have you clearly defined decision rights? Do they know what they're empowered to do? Let's create a delegation matrix.</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm mb-2">"We have high turnover. People leave for 'better opportunities.'"</p>
              <p className="text-white/70 text-xs"><strong>Coaching:</strong> Exit interviews reveal patterns. Are they leaving for money or culture? Let's dig into engagement and recognition gaps.</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm mb-2">"I want a collaborative culture, but I keep making unilateral decisions."</p>
              <p className="text-white/70 text-xs"><strong>Coaching:</strong> Behavior &gt; stated values. Let's identify decisions you can delegate or co-create. Practice letting go of control.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You'll Leave With</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-white text-sm font-medium mb-2">Clarity on Root Causes</h3>
              <p className="text-white/70 text-xs">You'll understand why culture issues exist and your role in fixing them.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-white text-sm font-medium mb-2">Specific Behavior Changes</h3>
              <p className="text-white/70 text-xs">3-5 concrete actions you can take to model better leadership (e.g., weekly team check-ins, clearer delegation, better feedback delivery).</p>
            </div>
            <div className="card p-6">
              <h3 className="text-white text-sm font-medium mb-2">Frameworks for Future Use</h3>
              <p className="text-white/70 text-xs">Decision rights matrix, communication cadence template, feedback frameworks.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-white text-sm font-medium mb-2">Confidence to Have Hard Conversations</h3>
              <p className="text-white/70 text-xs">Scripts and strategies for addressing underperformance, conflict, and culture violations.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Follow-Up Support</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3">After the session, you get 30 days of email coaching. If questions come up as you implement changes, we're available to advise.</p>
            <p className="text-white/70 text-sm">Typical questions: "How do I deliver this feedback?" "We tried X and it didn't work. What now?" "Can you review this new policy?"</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Culture Optimization Service</h2>
          <p className="text-white/80 mb-4">Leadership Coaching is included in all Culture & Environment Optimization engagements. It happens after the Culture Flow Report is delivered.</p>
          <Link href="/services/culture-optimization" className="text-current-500 hover:text-current-400 text-sm">Learn more about the full service →</Link>
        </section>
      </div>
    </div>
  )
}

