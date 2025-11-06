import Link from 'next/link'

export const metadata = { title: 'Communication Patterns — Culture & Environment Optimization' }

export default function CommunicationPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/culture-optimization" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Culture & Environment Optimization
      </Link>

      <h1 className="mb-4">Communication Patterns</h1>
      <p className="text-xl text-white/90 mb-8">How information flows (or doesn't flow) in your organization. We optimize channels, cadence, and clarity to reduce noise and increase signal.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Common Communication Problems</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4 bg-red-500/10 border-l-4 border-red-500">
              <h4 className="text-white text-sm font-medium mb-2">Information Gets Lost</h4>
              <p className="text-white/70 text-xs">Key updates buried in Slack threads. Email chains nobody reads. Decisions made but never documented.</p>
            </div>
            <div className="card p-4 bg-red-500/10 border-l-4 border-red-500">
              <h4 className="text-white text-sm font-medium mb-2">Over-Communication</h4>
              <p className="text-white/70 text-xs">Too many meetings. Too many channels. Constant pings. People can't focus because they're always responding.</p>
            </div>
            <div className="card p-4 bg-red-500/10 border-l-4 border-red-500">
              <h4 className="text-white text-sm font-medium mb-2">One-Way Broadcasting</h4>
              <p className="text-white/70 text-xs">Leadership talks at team, not with them. No space for questions or feedback. People feel unheard.</p>
            </div>
            <div className="card p-4 bg-red-500/10 border-l-4 border-red-500">
              <h4 className="text-white text-sm font-medium mb-2">Unclear Expectations</h4>
              <p className="text-white/70 text-xs">Vague instructions. Unstated assumptions. People guess what's expected and guess wrong.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What We Optimize</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Channel Strategy</h3>
              <p className="text-white/70 text-sm mb-3">Define what communication belongs where. Email vs. Slack vs. meetings vs. async docs.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Example rules:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Urgent: Slack ping or call</li>
                  <li>• Updates: Weekly email or Slack #announcements</li>
                  <li>• Decisions: Documented in Notion/Google Docs</li>
                  <li>• Brainstorming: Meetings or async Miro boards</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">2. Meeting Cadence</h3>
              <p className="text-white/70 text-sm mb-3">Design a rhythm that balances sync and focus time. Eliminate redundant meetings.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Sample cadence:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Monday: 15-min all-hands (what's happening this week)</li>
                  <li>• Wednesday: 1-on-1s (manager check-ins)</li>
                  <li>• Friday: 30-min team retrospective (wins + learnings)</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">3. Feedback Loops</h3>
              <p className="text-white/70 text-sm mb-3">Create structured ways for team to voice concerns, ask questions, and share ideas.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Anonymous suggestion box (reviewed monthly)</li>
                  <li>• Open Q&A in team meetings</li>
                  <li>• Quarterly pulse surveys</li>
                  <li>• Regular 1-on-1s with managers</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">4. Decision Communication</h3>
              <p className="text-white/70 text-sm mb-3">Ensure decisions are documented, explained, and accessible. No more "I didn't know that was decided."</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Best practice:</p>
                <p>After any decision, post a 3-line summary: What was decided, why, and who's responsible for what.</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">5. Transparency Standards</h3>
              <p className="text-white/70 text-sm mb-3">Define what information is shared openly vs. kept private. Reduce "leadership knows things we don't" feeling.</p>
              <div className="text-xs text-white/60 bg-white/5 p-3 rounded">
                <p className="font-medium mb-1">Example:</p>
                <p>Share financials quarterly (revenue, runway). Share hiring plans. Share strategic priorities. Keep personnel issues private.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Real Example: Agency Overhaul</h2>
          <div className="card p-6 border-l-4 border-current-600">
            <p className="text-white/90 mb-3"><strong>Before:</strong></p>
            <ul className="text-white/70 text-xs space-y-1 pl-3 mb-4">
              <li>• 12 meetings per week (8 hours of team time)</li>
              <li>• 4 Slack channels with overlapping purposes</li>
              <li>• Important updates buried in email</li>
              <li>• No clear decision-making process</li>
            </ul>

            <p className="text-white/90 mb-3"><strong>After:</strong></p>
            <ul className="text-white/70 text-xs space-y-1 pl-3 mb-4">
              <li>• 4 standing meetings per week (3 hours of team time)</li>
              <li>• 2 Slack channels with clear purposes</li>
              <li>• All updates posted in #announcements + weekly email digest</li>
              <li>• Decision log in Notion (who decided what and why)</li>
            </ul>

            <p className="text-current-500 text-xs font-medium">Result: 5 hours/week reclaimed per person. Less confusion. Faster decisions.</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Culture Optimization</h2>
          <p className="text-white/80">Communication pattern optimization is a core part of our Culture & Environment Optimization work.</p>
          <Link href="/services/culture-optimization" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more →</Link>
        </section>
      </div>
    </div>
  )
}

