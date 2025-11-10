import Link from 'next/link'

export const metadata = { title: 'Assessment Phase - Culture & Environment Optimization' }

export default function AssessmentPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/culture-optimization" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to Culture & Environment Optimization
      </Link>

      <h1 className="mb-4">Week 1-2: Assessment Phase</h1>
      <p className="text-xl text-brand-text/90 mb-8">We diagnose culture health through surveys, interviews, and observation. This phase identifies strengths, drag points, and root causes.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What Happens</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Kickoff Meeting (Day 1, 90 minutes)</h3>
              <p className="text-brand-text/70 text-sm mb-3">Meet with leadership to understand your culture challenges, history, and goals. We identify who to interview and what to observe.</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">Attendees:</p>
                <p>Founders, owners, key managers (2-5 people)</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Pulse Survey (Days 1-3)</h3>
              <p className="text-brand-text/70 text-sm mb-3">Anonymous 5-minute survey sent to all team members. Measures morale, engagement, trust, communication, and belonging.</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">Participation:</p>
                <p>Full team. Results are aggregated and confidential.</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">1-on-1 Interviews (Days 2-7, 30 min each)</h3>
              <p className="text-brand-text/70 text-sm mb-3">We talk to 5-8 team members across roles and seniority. Conversational, not interrogational. We ask what's working, what's not, and what would improve work life.</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">Topics:</p>
                <ul className="pl-3 space-y-1">
                  <li>• What do you love about working here?</li>
                  <li>• What frustrates you?</li>
                  <li>• Do you feel heard and valued?</li>
                  <li>• What would make this a better place to work?</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Team Observation (Days 3-7, 2-3 hours)</h3>
              <p className="text-brand-text/70 text-sm mb-3">We observe meetings, workspace dynamics, and team interactions. Non-invasive "fly on the wall" approach. We watch how people communicate, collaborate, and handle conflict.</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">What we look for:</p>
                <p>Energy levels, body language, communication patterns, engagement, psychological safety indicators.</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Environment Audit (Days 5-7)</h3>
              <p className="text-brand-text/70 text-sm mb-3">We assess physical and digital workspace. Does the environment support focus, collaboration, and well-being?</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">What we evaluate:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Layout, noise, lighting, comfort</li>
                  <li>• Tool sprawl and digital organization</li>
                  <li>• Meeting culture and notification norms</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Data Synthesis (Days 8-10)</h3>
              <p className="text-brand-text/70 text-sm mb-3">We analyze survey results, interview themes, and observation notes. We identify patterns and root causes.</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">This happens behind the scenes</p>
                <p>No time required from your team.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Your Time Investment</h2>
          <div className="card p-6 bg-white/5">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-brand-text text-sm font-medium mb-2">Leadership</h4>
                <ul className="text-brand-text/70 text-xs space-y-1">
                  <li>• 90-min kickoff meeting</li>
                  <li>• 30-min individual interview</li>
                  <li>• 5-min pulse survey</li>
                </ul>
                <p className="text-current-500 text-xs mt-2 font-medium">Total: ~2 hours</p>
              </div>
              <div>
                <h4 className="text-brand-text text-sm font-medium mb-2">Team Members</h4>
                <ul className="text-brand-text/70 text-xs space-y-1">
                  <li>• 5-min pulse survey</li>
                  <li>• 30-min interview (5-8 people)</li>
                  <li>• Work normally during observation</li>
                </ul>
                <p className="text-current-500 text-xs mt-2 font-medium">Total: 5-35 min per person</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You Get at the End</h2>
          <div className="card p-6">
            <p className="text-brand-text/70 mb-4">By Day 10, the Culture Flow Report is complete:</p>
            <ul className="text-brand-text/70 text-sm space-y-2">
              <li>✓ Executive Summary (top 3 strengths, top 3 drag points)</li>
              <li>✓ Detailed Findings (survey data, interview themes, observation notes)</li>
              <li>✓ Prioritized Recommendations (quick wins + system changes)</li>
              <li>✓ Cultural health score (1-10)</li>
            </ul>
            <p className="text-brand-text/60 text-xs mt-4">We present this in Week 2 during the Leadership Coaching Session.</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Culture Optimization Process</h2>
          <p className="text-brand-text/70">Assessment happens during Week 1-2 of the Culture & Environment Optimization engagement.</p>
          <Link href="/services/culture-optimization" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more about the full service →</Link>
        </section>
      </div>
    </div>
  )
}

