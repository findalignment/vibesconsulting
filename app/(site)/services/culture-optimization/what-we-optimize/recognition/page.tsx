import Link from 'next/link'

export const metadata = { title: 'Recognition Systems - Culture & Environment Optimization' }

export default function RecognitionPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/culture-optimization" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Culture & Environment Optimization
      </Link>

      <h1 className="mb-4">Recognition Systems</h1>
      <p className="text-xl text-white/90 mb-8">How you acknowledge good work, celebrate wins, and make people feel seen. Recognition systems shape motivation and belonging.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Why Recognition Matters</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3">People want to feel their work matters. When good work goes unnoticed, motivation drains. When effort is acknowledged, people engage more deeply.</p>
            <p className="text-white/70 text-sm">Most businesses either over-rely on annual bonuses (too infrequent) or forget recognition entirely. We design systems that make recognition regular, meaningful, and sustainable.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Types of Recognition</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Public Recognition</h3>
              <p className="text-white/70 text-sm mb-3">Celebrate wins in front of the team. Makes people feel seen and valued.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Weekly "wins" ritual in team meetings</li>
                  <li>• Slack shoutouts in #wins channel</li>
                  <li>• Monthly team MVP (peer-nominated)</li>
                  <li>• Quarterly all-hands recognition spotlight</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">2. Private Recognition</h3>
              <p className="text-white/70 text-sm mb-3">One-on-one acknowledgment. More intimate, sometimes more meaningful.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Manager 1-on-1 appreciation</li>
                  <li>• Handwritten thank-you notes</li>
                  <li>• Personal email from founder/CEO</li>
                  <li>• Private feedback after presentations or launches</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">3. Peer-to-Peer Recognition</h3>
              <p className="text-white/70 text-sm mb-3">Team members recognize each other. Builds camaraderie and trust.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• "Thank you" channel in Slack</li>
                  <li>• Peer nomination for monthly awards</li>
                  <li>• End-of-project appreciation rounds</li>
                  <li>• Anonymous kudos board</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">4. Milestone Recognition</h3>
              <p className="text-white/70 text-sm mb-3">Acknowledge tenure, achievements, and personal milestones.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Work anniversaries (1 year, 3 years, 5 years)</li>
                  <li>• Project completion celebrations</li>
                  <li>• Personal milestones (birthdays, life events)</li>
                  <li>• Skill development achievements (certifications, courses)</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">5. Tangible Rewards</h3>
              <p className="text-white/70 text-sm mb-3">Sometimes words aren't enough. Small rewards can amplify recognition.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Gift cards ($25-50)</li>
                  <li>• Extra PTO day</li>
                  <li>• Team lunch on the company</li>
                  <li>• Professional development budget</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What Makes Recognition Effective</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Timely</h4>
              <p className="text-white/70 text-xs">Recognize soon after the achievement. Waiting 3 months kills impact.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Specific</h4>
              <p className="text-white/70 text-xs">"Great job" means nothing. "Your presentation clarified our strategy for the board" means everything.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Sincere</h4>
              <p className="text-white/70 text-xs">Fake praise is worse than no praise. Only recognize when it's genuine.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Inclusive</h4>
              <p className="text-white/70 text-xs">Don't only recognize visible work. Acknowledge behind-the-scenes contributions.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Consistent</h4>
              <p className="text-white/70 text-xs">Recognition needs to be regular, not just when leadership remembers.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Values-Aligned</h4>
              <p className="text-white/70 text-xs">Recognize behaviors that reflect your stated values. This reinforces culture.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Common Recognition Mistakes</h2>
          <div className="space-y-3">
            <div className="card p-4 bg-red-500/10 border-l-4 border-red-500">
              <p className="text-white/80 text-sm mb-2"><strong>Only recognizing results, not effort</strong></p>
              <p className="text-white/70 text-xs">Someone can work incredibly hard and fail due to bad luck. Acknowledge the effort, not just the outcome.</p>
            </div>
            <div className="card p-4 bg-red-500/10 border-l-4 border-red-500">
              <p className="text-white/80 text-sm mb-2"><strong>Always recognizing the same people</strong></p>
              <p className="text-white/70 text-xs">If only the loudest or most visible people get recognized, others will disengage.</p>
            </div>
            <div className="card p-4 bg-red-500/10 border-l-4 border-red-500">
              <p className="text-white/80 text-sm mb-2"><strong>Generic, vague praise</strong></p>
              <p className="text-white/70 text-xs">"Good job team!" doesn't land. Be specific about what was good and why it mattered.</p>
            </div>
            <div className="card p-4 bg-red-500/10 border-l-4 border-red-500">
              <p className="text-white/80 text-sm mb-2"><strong>Recognition without follow-through</strong></p>
              <p className="text-white/70 text-xs">If you say "we should celebrate this" but never do, recognition feels hollow.</p>
            </div>
          </div>
        </section>

        

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Culture Optimization</h2>
          <p className="text-white/80">Recognition system design is a core part of our Culture & Environment Optimization work.</p>
          <Link href="/services/culture-optimization" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more →</Link>
        </section>
      </div>
    </div>
  )
}

