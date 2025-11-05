import CTAButton from '@/components/CTAButton'
import Link from 'next/link'

export const metadata = { 
  title: 'Culture & Environment Optimization — Vibes Consulting',
  description: 'Design rituals, cadences, and spaces that help teams do their best work. Move from chaos to clarity with intentional culture design.'
}

export default function CultureOptimizationPage() {
  return (
    <div className="pb-20">
      <Link href="/services" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Services
      </Link>

      <header className="mb-12">
        <h1 className="mb-4">Culture & Environment Optimization</h1>
        <p className="text-xl max-w-3xl">Intentional design of rituals, rhythms, and physical spaces that enable focus, collaboration, and wellbeing. We help teams move from reactive chaos to deliberate flow.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="card p-8">
          <h3 className="mb-4 text-current-500">The Problem We Solve</h3>
          <p className="text-white/80 mb-4">Your team is capable, but the <strong>environment isn't supporting them</strong>. Too many interruptions. Unclear expectations. Meetings that could've been emails. A vibe that feels off but you can't name why.</p>
          <p className="text-white/80">Culture isn't ping pong tables. It's the invisible scaffolding that determines whether people can do their best work.</p>
        </div>

        <div className="card p-8">
          <h3 className="mb-4 text-current-500">What Makes This Different</h3>
          <p className="text-white/80 mb-4">We don't run trust falls or personality tests. We <strong>redesign the operating system</strong> — the meetings, rituals, communication norms, and physical environment that shape how work feels.</p>
          <p className="text-white/80">You'll leave with new rhythms in place, not a manifesto no one follows.</p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="mb-6">What's Included</h2>
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-xl mb-2">1. Culture Flow Report</h3>
            <p className="text-white/70 mb-3">A diagnostic of how your team actually operates vs. how you think they operate.</p>
            <ul className="list-disc pl-6 text-white/80 space-y-2">
              <li><strong>Anonymous team survey:</strong> Uncover what's really causing stress, confusion, or disengagement</li>
              <li><strong>Ritual audit:</strong> Map all recurring meetings and evaluate which ones add value vs. drain energy</li>
              <li><strong>Communication flow analysis:</strong> Where do decisions get stuck? Who's in too many loops?</li>
              <li><strong>Environment assessment:</strong> Does your physical or digital workspace support focus and collaboration?</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl mb-2">2. Rituals & Cadence Redesign</h3>
            <p className="text-white/70 mb-3">Build a predictable rhythm that balances focus time with collaboration.</p>
            <ul className="list-disc pl-6 text-white/80 space-y-2">
              <li><strong>Meeting OS:</strong> Redesign your calendar to eliminate unnecessary meetings and improve the useful ones</li>
              <li><strong>Communication norms:</strong> When to Slack vs. email vs. meet. When silence is okay.</li>
              <li><strong>Decision-making rituals:</strong> Who decides what, and how quickly</li>
              <li><strong>Feedback loops:</strong> Weekly check-ins, monthly retros, quarterly planning — done well</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl mb-2">3. Quarterly Vibe Reset</h3>
            <p className="text-white/70 mb-3">Ongoing support to keep your culture healthy as you grow.</p>
            <ul className="list-disc pl-6 text-white/80 space-y-2">
              <li><strong>Quarterly check-ins (90 min):</strong> Review what's working, what's slipping, what needs adjustment</li>
              <li><strong>Ritual tuning:</strong> Refine or retire rituals based on team feedback</li>
              <li><strong>Onboarding refresh:</strong> Update processes as your team evolves</li>
              <li><strong>Culture pulse surveys:</strong> Track engagement, clarity, and wellbeing over time</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">What We Optimize</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg mb-3">🕐 Time & Attention</h3>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Reduce meeting load by 30-50%</li>
              <li>• Create protected focus blocks</li>
              <li>• Design async-first communication</li>
              <li>• Eliminate notification chaos</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">🤝 Collaboration Patterns</h3>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Clarify who owns what</li>
              <li>• Design effective standups and retros</li>
              <li>• Build peer feedback rituals</li>
              <li>• Create space for brainstorming vs. execution</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">📍 Physical & Digital Space</h3>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Optimize office layout for focus + collaboration</li>
              <li>• Design remote-friendly rituals</li>
              <li>• Organize Slack/tools to reduce noise</li>
              <li>• Create environments that support flow</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">🌱 Wellbeing & Momentum</h3>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Prevent burnout through sustainable rhythms</li>
              <li>• Celebrate wins (not just deadlines)</li>
              <li>• Build psychological safety</li>
              <li>• Create clarity around expectations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">What to Expect</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg mb-3">Week 1-2: Discovery</h3>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Kickoff with leadership (90 min)</li>
              <li>• Anonymous team survey</li>
              <li>• Shadow observation (half day)</li>
              <li>• Calendar and communication audit</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Week 3: Analysis & Co-Design</h3>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Culture Flow Report delivered</li>
              <li>• Redesign workshop with team (2 hours)</li>
              <li>• Co-create new rituals and norms</li>
              <li>• Prioritize quick wins vs. longer changes</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Week 4-6: Implementation</h3>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Launch new meeting cadence</li>
              <li>• Roll out communication norms</li>
              <li>• Train team on new rituals</li>
              <li>• Adjust physical/digital workspace</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Ongoing: Quarterly Vibe Resets</h3>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• 90-minute check-in every 3 months</li>
              <li>• Pulse survey and results review</li>
              <li>• Ritual tuning and adjustments</li>
              <li>• Continuous improvement mindset</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Who This Is For</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-lg mb-2">Fast-Growing Teams</h3>
            <p className="text-white/70 text-sm">You've doubled in size and the old informal vibe doesn't scale. You need intentional systems before chaos becomes culture.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Meeting-Heavy Businesses</h3>
            <p className="text-white/70 text-sm">Your calendar is packed but nothing gets done. You need to redesign how decisions happen and how teams coordinate.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Post-Burnout Recovery</h3>
            <p className="text-white/70 text-sm">Your team hit the wall. You need to rebuild in a way that's sustainable, not just push harder with the same broken systems.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Real Results</h2>
        <div className="space-y-4">
          <div className="card p-6 border-l-4 border-current-600">
            <p className="text-white/90 mb-2"><strong>Design studio, 14 people:</strong></p>
            <p className="text-white/70">"We were in 12 meetings a week and still felt out of sync. Vibes helped us cut it to 4 focused meetings and move everything else to async updates. Team satisfaction went up 40% in one quarter."</p>
          </div>

          <div className="card p-6 border-l-4 border-current-600">
            <p className="text-white/90 mb-2"><strong>Tech startup, 18 people:</strong></p>
            <p className="text-white/70">"Our Slack was a nightmare — 24/7 pings, no boundaries. Vibes redesigned our communication norms and reorganized channels. Now people actually disconnect at night and we're more productive during the day."</p>
          </div>

          <div className="card p-6 border-l-4 border-current-600">
            <p className="text-white/90 mb-2"><strong>Retail business, 9 people:</strong></p>
            <p className="text-white/70">"Our team turnover was high and exit interviews all mentioned 'unclear expectations.' Vibes ran a culture audit and helped us redesign onboarding and weekly check-ins. We haven't had a resignation in 8 months."</p>
          </div>
        </div>
      </section>

      <section className="mb-16 card p-8 bg-current-600/10">
        <h2 className="mb-4">Investment</h2>
        
        <div className="mb-8">
          <h3 className="text-lg mb-4 text-white">One-Time Culture Optimization</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-3xl font-semibold text-white mb-2">$5,500</p>
              <p className="text-white/80">Includes Culture Flow Report, ritual redesign, and 6 weeks of implementation support.</p>
              <p className="text-white/60 text-sm mt-2">Typical timeline: 6-8 weeks</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <h3 className="text-lg mb-4 text-white">Ongoing: The Vibe Partnership (Quarterly Retainer)</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-3xl font-semibold text-white mb-2">$3,500/month</p>
              <p className="text-white/80">Quarterly Vibe Resets + ongoing culture coaching. Includes monthly pulse surveys, ritual tuning, and on-call support for culture decisions.</p>
              <p className="text-white/60 text-sm mt-2">Best for teams that want continuous improvement</p>
            </div>
            <CTAButton>Start Vibe Partnership</CTAButton>
          </div>
        </div>
      </section>

      <section className="card p-8">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg mb-2">How is this different from team coaching or consulting?</h3>
            <p className="text-white/70">We focus on systems, not individuals. We're redesigning the rituals and environment that shape how your team operates, not facilitating personal development workshops.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">Do we need to do a full culture overhaul?</h3>
            <p className="text-white/70">No. We start with the highest-leverage changes. Often that's just redesigning meetings and communication norms. The rest can evolve over time.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">What if our team resists change?</h3>
            <p className="text-white/70">We involve the team in the design process so they feel ownership, not imposition. And we start with experiments — try it for 4 weeks, then decide if it stays.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">Can we do this for a remote team?</h3>
            <p className="text-white/70">Yes. Most of the work is designing rituals and communication norms, which apply to remote, hybrid, or in-person teams. We adjust recommendations based on your setup.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">What's the difference between the one-time engagement and the Vibe Partnership?</h3>
            <p className="text-white/70">The one-time engagement redesigns your culture once. The Vibe Partnership provides ongoing support as your team grows and evolves. Think of it as a retainer for continuous culture maintenance.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="mb-4">Ready to Fix Your Culture?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">Book a 30-minute intro call to talk about what's not working. We'll ask about your team dynamics, rituals, and environment to see if culture optimization is the right move.</p>
        <CTAButton>Schedule Intro Call</CTAButton>
      </section>
    </div>
  )
}

