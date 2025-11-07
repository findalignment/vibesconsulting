import Link from 'next/link'

export const metadata = { title: 'High-Turnover Teams - Culture & Environment Optimization' }

export default function HighTurnoverPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/culture-optimization" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Culture & Environment Optimization
      </Link>

      <h1 className="mb-4">High-Turnover Teams</h1>
      <p className="text-xl text-white/90 mb-8">People keep leaving. You're constantly hiring and onboarding. Turnover is expensive and demoralizing. We help you identify why people leave and fix the culture issues driving them away.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Signs This Is You</h2>
          <div className="space-y-3">
            <div className="card p-4 bg-red-500/10">
              <p className="text-white/80 text-sm">✓ Turnover rate above 20-30% per year</p>
            </div>
            <div className="card p-4 bg-red-500/10">
              <p className="text-white/80 text-sm">✓ Good people leave for "better opportunities" (code for culture problems)</p>
            </div>
            <div className="card p-4 bg-red-500/10">
              <p className="text-white/80 text-sm">✓ Exit interviews reveal vague dissatisfaction ("not a good fit")</p>
            </div>
            <div className="card p-4 bg-red-500/10">
              <p className="text-white/80 text-sm">✓ New hires don't last past 6 months</p>
            </div>
            <div className="card p-4 bg-red-500/10">
              <p className="text-white/80 text-sm">✓ You're spending more time hiring than managing</p>
            </div>
            <div className="card p-4 bg-red-500/10">
              <p className="text-white/80 text-sm">✓ Team morale suffers every time someone leaves</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Common Root Causes of Turnover</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Invisible Culture Problems</h3>
              <p className="text-white/70 text-sm mb-3">Most turnover isn't about pay. It's about culture: unclear expectations, lack of recognition, poor communication, no growth path, or toxic dynamics.</p>
              <p className="text-white/60 text-xs">People don't leave jobs. They leave managers and environments.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Misaligned Expectations</h3>
              <p className="text-white/70 text-sm mb-3">Job description promised one thing, reality delivered another. Or onboarding was chaotic and set people up to fail.</p>
              <p className="text-white/60 text-xs">First 90 days make or break retention.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Burnout & Overwork</h3>
              <p className="text-white/70 text-sm mb-3">Team is understaffed. Everyone is stretched thin. No boundaries. Chronic overwork drives people away.</p>
              <p className="text-white/60 text-xs">You can't solve turnover by working people harder.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Lack of Belonging</h3>
              <p className="text-white/70 text-sm mb-3">People don't feel connected to the team or the mission. They show up, do the work, and leave. No emotional investment.</p>
              <p className="text-white/60 text-xs">Belonging is the antidote to turnover.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How We Help You Fix It</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Diagnose Why People Leave</h3>
              <p className="text-white/70 text-sm">We conduct exit interview analysis (if available), pulse surveys, and 1-on-1s with current team. We identify patterns you can't see.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2">2. Fix Culture Drag Points</h3>
              <p className="text-white/70 text-sm">We address root causes: unclear roles, poor communication, lack of recognition, toxic dynamics, overwork, or misaligned expectations.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2">3. Build Retention Systems</h3>
              <p className="text-white/70 text-sm">We design rituals that create belonging: recognition systems, feedback loops, growth conversations, team connection rituals.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2">4. Improve Onboarding</h3>
              <p className="text-white/70 text-sm">We redesign your first 90 days to set new hires up for success: clear expectations, buddy systems, regular check-ins.</p>
            </div>
          </div>
        </section>

        

        <section>
          <h2 className="mb-4">The Cost of Turnover</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Replacing an employee costs 1.5-2x their annual salary when you factor in:</p>
            <ul className="text-white/70 text-sm space-y-2 pl-3">
              <li>• Recruiting and hiring time</li>
              <li>• Onboarding and training</li>
              <li>• Lost productivity during transition</li>
              <li>• Knowledge loss when experienced people leave</li>
              <li>• Morale hit on remaining team</li>
            </ul>
            <p className="text-current-500 text-sm mt-4 font-medium">If you have 10 people and 30% turnover, that's $150K-300K per year in hidden costs.</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Stop the Turnover Cycle?</h2>
          <p className="text-white/80 mb-4">Culture & Environment Optimization starts at $5,500. We diagnose why people leave, fix culture issues, and build retention systems that last.</p>
          <div className="flex gap-4">
            <Link href="/services/culture-optimization" className="btn btn-primary">Learn About the Service</Link>
            <Link href="/contact" className="btn btn-ghost">Schedule Intro Call</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

