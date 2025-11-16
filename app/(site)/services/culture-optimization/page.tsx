import CTAButton from '@/components/CTAButton'
import Link from 'next/link'

export const metadata = { 
  title: 'Culture & Environment Optimization - Vibes Consulting',
  description: 'Design rituals, cadences, and spaces that help teams do their best work. Move from chaos to clarity with intentional culture design.'
}

export default function CultureOptimizationPage() {
  return (
    <div className="pb-20">
      <Link href="/services" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to Services
      </Link>

      <header className="mb-12">
        <h1 className="mb-4">Culture & Environment Optimization</h1>
        <p className="text-xl max-w-3xl">Intentional design of rituals, rhythms, and physical spaces that enable focus, collaboration, and wellbeing. We help teams move from reactive chaos to deliberate flow.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="card p-8">
          <h3 className="mb-4 text-current-500">The Problem We Solve</h3>
          <p className="text-brand-text/70 mb-4">Your team is capable, but the <strong>environment isn't supporting them</strong>. Too many interruptions. Unclear expectations. Meetings that could've been emails. A vibe that feels off but you can't name why.</p>
          <p className="text-brand-text/70">Culture isn't ping pong tables. It's the invisible scaffolding that determines whether people can do their best work.</p>
        </div>

        <div className="card p-8">
          <h3 className="mb-4 text-current-500">What Makes This Different</h3>
          <p className="text-brand-text/70 mb-4">We don't run trust falls or personality tests. We <strong>redesign the operating system</strong> - the meetings, rituals, communication norms, and physical environment that shape how work feels.</p>
          <p className="text-brand-text/70">You'll leave with new rhythms in place, not a manifesto no one follows.</p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="mb-6">What's Included</h2>
        <div className="space-y-6">
          <Link href="/services/culture-optimization/whats-included/culture-flow-report" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl mb-2 group-hover:text-current-500 transition-colors">1. Culture Flow Report</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-brand-text/70 mb-3">A diagnostic of how your team actually operates vs. how you think they operate.</p>
            <ul className="list-disc pl-6 text-brand-text/70 space-y-2 text-sm">
              <li><strong>Anonymous team survey:</strong> Uncover what's really causing stress</li>
              <li><strong>Ritual audit:</strong> Evaluate which meetings add value vs. drain energy</li>
              <li><strong>Communication flow analysis:</strong> Where do decisions get stuck?</li>
              <li><strong>Environment assessment:</strong> Does your workspace support focus?</li>
            </ul>
          </Link>

          <Link href="/services/culture-optimization/whats-included/leadership-coaching" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl mb-2 group-hover:text-current-500 transition-colors">2. Leadership Coaching Session</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-brand-text/70 mb-3">90-minute session with founders and managers to align on culture strategy and address blind spots.</p>
            <ul className="list-disc pl-6 text-brand-text/70 space-y-2 text-sm">
              <li><strong>Report debrief:</strong> Walk through findings together</li>
              <li><strong>Leadership blind spots:</strong> Self-awareness without blame</li>
              <li><strong>Decision rights:</strong> Build systems so you're not the bottleneck</li>
              <li><strong>Modeling culture:</strong> Align behaviors with values</li>
            </ul>
          </Link>

          <Link href="/services/culture-optimization/whats-included/vibe-reset-framework" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl mb-2 group-hover:text-current-500 transition-colors">3. Quarterly Vibe Reset Framework</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-brand-text/70 mb-3">Ongoing support to keep your culture healthy as you grow.</p>
            <ul className="list-disc pl-6 text-brand-text/70 space-y-2 text-sm">
              <li><strong>Quarterly check-ins:</strong> Review what's working, what's slipping</li>
              <li><strong>Ritual tuning:</strong> Refine or retire based on feedback</li>
              <li><strong>Pulse surveys:</strong> Track engagement over time</li>
              <li><strong>Self-sustaining:</strong> You can run this without us</li>
            </ul>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">What We Optimize</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/services/culture-optimization/what-we-optimize/communication" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">📢 Communication Patterns</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-brand-text/70 space-y-2 text-sm">
              <li>• Reduce meeting load by 30-50%</li>
              <li>• Create protected focus blocks</li>
              <li>• Design async-first communication</li>
              <li>• Eliminate notification chaos</li>
            </ul>
          </Link>

          <Link href="/services/culture-optimization/what-we-optimize/rituals" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">🤝 Team Rituals</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-brand-text/70 space-y-2 text-sm">
              <li>• Recognition systems</li>
              <li>• Connection rituals</li>
              <li>• Feedback loops</li>
              <li>• Transition rituals</li>
            </ul>
          </Link>

          <Link href="/services/culture-optimization/what-we-optimize/space" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">📍 Physical & Digital Space</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-brand-text/70 space-y-2 text-sm">
              <li>• Optimize office layout</li>
              <li>• Design remote-friendly rituals</li>
              <li>• Organize Slack/tools to reduce noise</li>
              <li>• Create environments that support flow</li>
            </ul>
          </Link>

          <Link href="/services/culture-optimization/what-we-optimize/recognition" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">🌱 Recognition Systems</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-brand-text/70 space-y-2 text-sm">
              <li>• Celebrate wins (not just deadlines)</li>
              <li>• Build psychological safety</li>
              <li>• Create clarity around expectations</li>
              <li>• Prevent burnout through sustainable rhythms</li>
            </ul>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">What to Expect</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/services/culture-optimization/what-to-expect/assessment" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Week 1-2: Assessment</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-brand-text/70 space-y-2 text-sm">
              <li>• Kickoff with leadership (90 min)</li>
              <li>• Anonymous team survey</li>
              <li>• Shadow observation (half day)</li>
              <li>• Calendar and communication audit</li>
            </ul>
          </Link>

          <Link href="/services/culture-optimization/what-to-expect/design" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Week 3-4: Design</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-brand-text/70 space-y-2 text-sm">
              <li>• Culture Flow Report delivered</li>
              <li>• Redesign workshop with team (2 hours)</li>
              <li>• Co-create new rituals and norms</li>
              <li>• Prioritize quick wins vs. longer changes</li>
            </ul>
          </Link>

          <Link href="/services/culture-optimization/what-to-expect/implementation" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Week 5-6: Implementation</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-brand-text/70 space-y-2 text-sm">
              <li>• Launch new meeting cadence</li>
              <li>• Roll out communication norms</li>
              <li>• Train team on new rituals</li>
              <li>• Adjust physical/digital workspace</li>
            </ul>
          </Link>

          <Link href="/services/culture-optimization/what-to-expect/ongoing-support" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Ongoing Support</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-brand-text/70 space-y-2 text-sm">
              <li>• 60 days of email coaching</li>
              <li>• 30-day and 60-day check-in calls</li>
              <li>• First Vibe Reset facilitation (optional)</li>
              <li>• Continuous improvement mindset</li>
            </ul>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Who This Is For</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/services/culture-optimization/who-this-is-for/high-turnover" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">High-Turnover Teams</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-brand-text/70 text-sm">People keep leaving. You're constantly hiring and onboarding. Turnover is expensive and demoralizing.</p>
          </Link>

          <Link href="/services/culture-optimization/who-this-is-for/growing-companies" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Growing Companies</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-brand-text/70 text-sm">You've doubled in size and the old informal vibe doesn't scale. You need intentional systems before chaos becomes culture.</p>
          </Link>

          <Link href="/services/culture-optimization/who-this-is-for/culture-first-leaders" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Culture-First Leaders</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-brand-text/70 text-sm">You believe culture is a competitive advantage. You want to build a workplace people love. You're willing to invest.</p>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Real Results</h2>
        <div className="space-y-4">
          <div className="card p-6 border-l-4 border-current-600">
            <p className="text-brand-text/90 mb-2"><strong>Design studio, 14 people:</strong></p>
            <p className="text-brand-text/70">"We were in 12 meetings a week and still felt out of sync. Vibes helped us cut it to 4 focused meetings and move everything else to async updates. Team satisfaction went up 40% in one quarter."</p>
          </div>

          <div className="card p-6 border-l-4 border-current-600">
            <p className="text-brand-text/90 mb-2"><strong>Tech startup, 18 people:</strong></p>
            <p className="text-brand-text/70">"Our Slack was a nightmare - 24/7 pings, no boundaries. Vibes redesigned our communication norms and reorganized channels. Now people actually disconnect at night and we're more productive during the day."</p>
          </div>

          <div className="card p-6 border-l-4 border-current-600">
            <p className="text-brand-text/90 mb-2"><strong>Retail business, 9 people:</strong></p>
            <p className="text-brand-text/70">"Our team turnover was high and exit interviews all mentioned 'unclear expectations.' Vibes ran a culture audit and helped us redesign onboarding and weekly check-ins. We haven't had a resignation in 8 months."</p>
          </div>
        </div>
      </section>

      <section className="mb-16 card p-8 bg-current-600/10">
        <h2 className="mb-4">Investment</h2>
        
        <div className="mb-8">
          <h3 className="text-lg mb-4 text-brand-text">One-Time Culture Optimization</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-3xl font-semibold text-brand-text mb-2">$5,500</p>
              <p className="text-brand-text/70">Includes Culture Flow Report, ritual redesign, and 6 weeks of implementation support.</p>
              <p className="text-brand-text/60 text-sm mt-2">Typical timeline: 6-8 weeks</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <h3 className="text-lg mb-4 text-brand-text">Ongoing: The Vibe Partnership (Quarterly Retainer)</h3>
          <div className="flex flex-col items-center text-center gap-6">
            <div>
              <p className="text-3xl font-semibold text-brand-text mb-2">$3,500/month</p>
              <p className="text-brand-text/70">Quarterly Vibe Resets + ongoing culture coaching. Includes monthly pulse surveys, ritual tuning, and on-call support for culture decisions.</p>
              <p className="text-brand-text/60 text-sm mt-2">Best for teams that want continuous improvement</p>
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
            <p className="text-brand-text/70">We focus on systems, not individuals. We're redesigning the rituals and environment that shape how your team operates, not facilitating personal development workshops.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">Do we need to do a full culture overhaul?</h3>
            <p className="text-brand-text/70">No. We start with the highest-leverage changes. Often that's just redesigning meetings and communication norms. The rest can evolve over time.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">What if our team resists change?</h3>
            <p className="text-brand-text/70">We involve the team in the design process so they feel ownership, not imposition. And we start with experiments - try it for 4 weeks, then decide if it stays.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">Can we do this for a remote team?</h3>
            <p className="text-brand-text/70">Yes. Most of the work is designing rituals and communication norms, which apply to remote, hybrid, or in-person teams. We adjust recommendations based on your setup.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">What's the difference between the one-time engagement and the Vibe Partnership?</h3>
            <p className="text-brand-text/70">The one-time engagement redesigns your culture once. The Vibe Partnership provides ongoing support as your team grows and evolves. Think of it as a retainer for continuous culture maintenance.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="mb-4">Ready to Fix Your Culture?</h2>
        <p className="text-brand-text/70 max-w-2xl mx-auto mb-8">Book a 30-minute intro call to talk about what's not working. We'll ask about your team dynamics, rituals, and environment to see if culture optimization is the right move.</p>
        <CTAButton>Schedule Intro Call</CTAButton>
      </section>
    </div>
  )
}

