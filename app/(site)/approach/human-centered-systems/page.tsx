import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Human-Centered Systems - Vibes Consulting',
  description: 'Structure, rituals, and communication loops that work with how people actually operate - not against them.'
}

export default function HumanCenteredSystemsPage() {
  return (
    <div className="pb-20">
      <Link href="/#how" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to How We Work
      </Link>

      <header className="mb-12">
        <h1 className="mb-4">Human-Centered Systems</h1>
        <p className="text-xl text-brand-text/90 max-w-3xl">We design structure, rituals, and communication loops that work with how people actually operate - not against them. Systems should serve humans, not the other way around.</p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="mb-6">What Are Human-Centered Systems?</h2>
          <div className="card p-8 bg-white/5">
            <p className="text-brand-text/70 mb-4">Most business systems are designed for efficiency on paper but ignore how humans actually work. They assume perfect information flow, rational decision-making, and unlimited attention.</p>
            <p className="text-brand-text/70 mb-4">Human-centered systems start with reality: People have limited attention. They need context to make decisions. They forget things. They get overwhelmed. They need psychological safety to do their best work.</p>
            <p className="text-brand-text/70">We design processes that account for these realities instead of fighting them.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Core Principles</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-3">1. Work With Human Limits, Not Against Them</h3>
              <p className="text-brand-text/70 text-sm mb-3">People can't hold more than 7 things in working memory. Meetings longer than 90 minutes lose effectiveness. Context switching costs 20+ minutes of productivity. We design systems that respect these constraints.</p>
              <p className="text-brand-text/60 text-xs italic">Example: Breaking long processes into discrete phases so people don't need to remember everything at once.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">2. Make the Right Thing the Easy Thing</h3>
              <p className="text-brand-text/70 text-sm mb-3">If your process requires heroic effort to follow, it won't get followed. We design workflows where the correct path is also the path of least resistance.</p>
              <p className="text-brand-text/60 text-xs italic">Example: Pre-filled templates that guide people through the process instead of expecting them to remember steps.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">3. Build in Psychological Safety</h3>
              <p className="text-brand-text/70 text-sm mb-3">People do their best work when they feel safe to experiment, ask questions, and admit mistakes. Systems should encourage transparency, not hide problems.</p>
              <p className="text-brand-text/60 text-xs italic">Example: Retrospective rituals where the focus is "what can we improve?" not "who messed up?"</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">4. Design for Clarity, Not Control</h3>
              <p className="text-brand-text/70 text-sm mb-3">Rigid processes create bottlenecks. Clear principles with room for judgment create autonomy. We focus on making expectations clear, then trusting people to execute.</p>
              <p className="text-brand-text/60 text-xs italic">Example: Decision rights frameworks that clarify authority instead of requiring approval for everything.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">5. Embed Learning Into Work</h3>
              <p className="text-brand-text/70 text-sm mb-3">Learning shouldn't be separate from doing. We build reflection, feedback, and iteration directly into your workflows so improvement happens continuously.</p>
              <p className="text-brand-text/60 text-xs italic">Example: Quick retrospectives built into project close-outs so lessons get captured while fresh.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Key Elements We Design</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-3">Rituals & Rhythms</h3>
              <p className="text-brand-text/70 text-sm mb-3">Recurring practices that create predictability and connection. Weekly standups, monthly retrospectives, quarterly planning.</p>
              <p className="text-brand-text/60 text-xs">Not meetings for meeting's sake - intentional touchpoints that serve specific human needs: alignment, learning, celebration.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Communication Norms</h3>
              <p className="text-brand-text/70 text-sm mb-3">Clear expectations about how information flows. What needs a meeting vs. a message. How to give feedback. When to escalate.</p>
              <p className="text-brand-text/60 text-xs">Reduces ambiguity and decision fatigue. Everyone knows how to communicate effectively.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Decision Frameworks</h3>
              <p className="text-brand-text/70 text-sm mb-3">Clear criteria for who decides what. Thresholds for escalation. Guidelines for when to consult vs. inform.</p>
              <p className="text-brand-text/60 text-xs">Empowers autonomy while maintaining alignment. Reduces bottlenecks and "waiting for approval" delays.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Feedback Loops</h3>
              <p className="text-brand-text/70 text-sm mb-3">Regular mechanisms for surfacing problems, celebrating wins, and adjusting course. Pulse surveys, retrospectives, one-on-ones.</p>
              <p className="text-brand-text/60 text-xs">Ensures issues get addressed before they become crises. Creates culture of continuous improvement.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Environmental Design</h3>
              <p className="text-brand-text/70 text-sm mb-3">Physical and digital spaces that support different work modes. Quiet zones for focus, collaborative spaces, async-first digital environments.</p>
              <p className="text-brand-text/60 text-xs">Your environment shapes behavior. We optimize both physical offices and digital workspaces.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Recognition Systems</h3>
              <p className="text-brand-text/70 text-sm mb-3">Intentional practices for acknowledging contributions, celebrating milestones, and reinforcing desired behaviors.</p>
              <p className="text-brand-text/60 text-xs">People need to feel seen and valued. Recognition shouldn't be an afterthought.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">How This Shows Up in Our Work</h2>
          <div className="card p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-current-500 text-xl">→</div>
                <div>
                  <h4 className="text-brand-text font-medium mb-1">In Culture Optimization</h4>
                  <p className="text-brand-text/70 text-sm">We redesign rituals, communication patterns, and environmental factors that shape team culture. Every recommendation is rooted in human psychology and behavior.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-current-500 text-xl">→</div>
                <div>
                  <h4 className="text-brand-text font-medium mb-1">In Business Flow Consulting</h4>
                  <p className="text-brand-text/70 text-sm">We map decision rights, clarify communication protocols, and build feedback loops into workflows. Systems work because they align with how humans actually operate.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-current-500 text-xl">→</div>
                <div>
                  <h4 className="text-brand-text font-medium mb-1">In Meeting OS Add-On</h4>
                  <p className="text-brand-text/70 text-sm">We redesign meeting cadences around human attention spans, energy levels, and need for both alignment and autonomy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Why This Matters</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-brand-text/90 mb-4">Too many businesses optimize for theoretical efficiency while ignoring human reality:</p>
            <ul className="space-y-2 text-brand-text/70 text-sm mb-4">
              <li>✗ Meetings that assume everyone has perfect context</li>
              <li>✗ Processes that require remembering 20 steps</li>
              <li>✗ Communication norms that create anxiety ("Did I escalate too early?")</li>
              <li>✗ Workflows that punish mistakes instead of learning from them</li>
              <li>✗ Spaces designed for aesthetics, not actual work</li>
            </ul>
            <p className="text-brand-text/90 mb-4">When systems work against human nature, people either burn out or work around them. Neither is sustainable.</p>
            <p className="text-brand-text/90">We design systems that make it easy to do good work - systems that feel natural, not forced.</p>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready for Systems That Work With Your Team?</h2>
          <p className="text-brand-text/70 max-w-2xl mx-auto mb-6">Start with a Flow Check to see where your current systems are fighting human nature instead of supporting it.</p>
          <CTAButton>Book Your Flow Check</CTAButton>
        </section>
      </div>
    </div>
  )
}

