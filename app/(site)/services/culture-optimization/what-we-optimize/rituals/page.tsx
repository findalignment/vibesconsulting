import Link from 'next/link'

export const metadata = { title: 'Team Rituals - Culture & Environment Optimization' }

export default function RitualsPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/culture-optimization" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Culture & Environment Optimization
      </Link>

      <h1 className="mb-4">Team Rituals</h1>
      <p className="text-xl text-white/90 mb-8">Recurring practices that reinforce belonging, recognition, and shared values. Rituals create predictability and culture momentum.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Why Rituals Matter</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3">Rituals are the operating system of culture. They turn abstract values into lived behaviors. Without rituals, culture is just words on a wall.</p>
            <p className="text-white/70 text-sm">Good rituals are simple, repeatable, and meaningful. Bad rituals feel forced, performative, or wasteful.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Types of Rituals We Design</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Recognition Rituals</h3>
              <p className="text-white/70 text-sm mb-3">Make good work visible. Celebrate wins. Acknowledge effort.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Weekly "wins" share (5 min at Friday meeting)</li>
                  <li>• Monthly team shoutouts (peer-to-peer recognition)</li>
                  <li>• Quarterly MVP award (voted by team)</li>
                  <li>• Anniversary celebrations (years at company)</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">2. Connection Rituals</h3>
              <p className="text-white/70 text-sm mb-3">Build relationships beyond work tasks. Foster belonging.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Monday morning check-in (how was your weekend?)</li>
                  <li>• Monthly team lunch or coffee</li>
                  <li>• Quarterly offsite or team-building activity</li>
                  <li>• Welcome ritual for new hires</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">3. Learning Rituals</h3>
              <p className="text-white/70 text-sm mb-3">Create space for growth, reflection, and knowledge sharing.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Weekly "lunch and learn" (team member teaches something)</li>
                  <li>• Monthly book club or article discussion</li>
                  <li>• Quarterly retrospectives (what did we learn?)</li>
                  <li>• Post-project debriefs (what worked, what didn't)</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">4. Transition Rituals</h3>
              <p className="text-white/70 text-sm mb-3">Mark beginnings and endings. Create closure and momentum.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Kick-off meetings for new projects</li>
                  <li>• End-of-project celebrations</li>
                  <li>• Farewell ritual for departing employees</li>
                  <li>• Year-end reflection and planning session</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">5. Feedback Rituals</h3>
              <p className="text-white/70 text-sm mb-3">Normalize giving and receiving feedback. Make improvement continuous.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Weekly 1-on-1s with managers</li>
                  <li>• Monthly team retrospectives</li>
                  <li>• Quarterly performance reviews</li>
                  <li>• Post-presentation peer feedback sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How We Design Rituals</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">1. Identify What's Missing</h4>
              <p className="text-white/70 text-xs">Do people feel unrecognized? Disconnected? Unclear on priorities? We design rituals that address real gaps.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">2. Keep It Simple</h4>
              <p className="text-white/70 text-xs">Rituals should be easy to execute and low-friction. If it takes 30 minutes of prep, it won't stick.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">3. Make It Meaningful</h4>
              <p className="text-white/70 text-xs">Rituals can't feel performative. They have to serve a real purpose and resonate with your team's values.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">4. Test & Iterate</h4>
              <p className="text-white/70 text-xs">We pilot rituals for 4-6 weeks, gather feedback, and adjust. Not every ritual will land on the first try.</p>
            </div>
          </div>
        </section>

        

        <section>
          <h2 className="mb-4">Common Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4 bg-red-500/10">
              <h4 className="text-white text-sm font-medium mb-2">Too Many Rituals</h4>
              <p className="text-white/70 text-xs">Start with 2-3. Add more only if they're working. More isn't better.</p>
            </div>
            <div className="card p-4 bg-red-500/10">
              <h4 className="text-white text-sm font-medium mb-2">Copying Other Companies</h4>
              <p className="text-white/70 text-xs">Google's rituals won't work for you. Design for your team's values and context.</p>
            </div>
            <div className="card p-4 bg-red-500/10">
              <h4 className="text-white text-sm font-medium mb-2">Forcing Participation</h4>
              <p className="text-white/70 text-xs">Opt-in &gt; mandatory. If people don't want to participate, the ritual is probably wrong.</p>
            </div>
            <div className="card p-4 bg-red-500/10">
              <h4 className="text-white text-sm font-medium mb-2">No Follow-Through</h4>
              <p className="text-white/70 text-xs">Rituals die if leadership doesn't model them. You have to show up consistently.</p>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Culture Optimization</h2>
          <p className="text-white/80">Team ritual design is a core part of our Culture & Environment Optimization work.</p>
          <Link href="/services/culture-optimization" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more →</Link>
        </section>
      </div>
    </div>
  )
}

