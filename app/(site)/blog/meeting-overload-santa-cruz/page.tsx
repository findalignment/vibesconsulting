import Link from 'next/link'

export const metadata = {
  title: 'Meeting Overload? How Santa Cruz Businesses Are Reclaiming Their Calendars',
  description: 'Santa Cruz teams are drowning in meetings. Here's how local businesses are cutting meeting time by 40% without losing alignment.'
}

export default function BlogPost() {
  return (
    <div className="pb-20 max-w-3xl">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <time className="text-white/60 text-sm">October 5, 2024</time>
          <h1 className="mt-2 mb-4">Meeting Overload? How Santa Cruz Businesses Are Reclaiming Their Calendars</h1>
          <p className="text-xl text-white/80">Santa Cruz teams are drowning in meetings. Here's how local businesses are cutting meeting time by 40% without losing alignment.</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-white/80">
          <p>Your calendar is a nightmare. Back-to-back meetings. No time for actual work. Your team spends more time talking about work than doing work.</p>

          <p>This is the reality for most Santa Cruz small businesses once they hit 5-10 people. Meetings multiply. Calendars fill up. Deep work disappears.</p>

          <h2 className="text-white text-2xl font-semibold mt-8 mb-4">The Meeting Trap</h2>

          <p>Meetings feel productive. You're aligned! You're communicating! But here's what's really happening:</p>

          <ul className="space-y-2">
            <li>Status updates disguised as collaboration</li>
            <li>Decisions that could be made async</li>
            <li>FYI information that should be a Slack message</li>
            <li>Meetings to plan meetings</li>
          </ul>

          <h2 className="text-white text-2xl font-semibold mt-8 mb-4">What Santa Cruz Businesses Are Doing Instead</h2>

          <p>The most effective local businesses we work with have cut their meeting load by 30-50%. Here's how:</p>

          <ul className="space-y-2">
            <li><strong>Async status updates:</strong> Loom videos or written updates replace standup meetings</li>
            <li><strong>Decision rights frameworks:</strong> Clear criteria for who decides what without a meeting</li>
            <li><strong>Meeting minimums:</strong> Every meeting must have a clear decision to make or problem to solve</li>
            <li><strong>Default to 25 minutes:</strong> Not 30. Not 60. Forces focus.</li>
          </ul>

          <h2 className="text-white text-2xl font-semibold mt-8 mb-4">The Audit That Changes Everything</h2>

          <p>List every recurring meeting. For each one, ask:</p>

          <ul className="space-y-2">
            <li>What decision gets made here?</li>
            <li>Could this be handled async?</li>
            <li>Who actually needs to attend?</li>
            <li>What would break if we cancelled it?</li>
          </ul>

          <p>You'll find that 40% of your meetings can be eliminated or moved async immediately.</p>

          <div className="bg-current-600/10 p-6 rounded-lg mt-8">
            <p className="font-semibold text-white mb-2">Need help redesigning your meeting cadence?</p>
            <p className="text-white/70 text-sm">Our Meeting OS add-on audits your current meetings and builds a new cadence that actually works.</p>
            <Link href="/packages/addons/meeting-os" className="text-current-500 hover:underline text-sm">Learn about Meeting OS →</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
