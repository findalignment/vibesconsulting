import Link from 'next/link'

export const metadata = {
  title: "Meeting Overload? How Santa Cruz Businesses Are Reclaiming Their Calendars",
  description: "Santa Cruz teams are drowning in meetings. Here's how local businesses are cutting meeting time by 40% without losing alignment."
}

export default function BlogPost() {
  return (
    <div className="pb-20">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-8 inline-flex items-center gap-2 hover:gap-3 transition-all">
        <span>←</span> Back to Blog
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-white/60 mb-4">
            <time>October 05, 2024</time>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Meeting Overload? How Santa Cruz Businesses Are Reclaiming Their Calendars</h1>

        <div className="space-y-8">
          {/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-current-500 first-letter:mr-2 first-letter:float-left">Your calendar is a nightmare. Back-to-back meetings. No time for actual work. Your team spends more time talking about work than doing work.</p>

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

          <div className="bg-gradient-to-br from-current-600/20 to-current-800/30 p-8 md:p-10 rounded-xl border border-current-500/20 mt-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-2xl font-bold text-white mb-3">Need help redesigning your meeting cadence?</p>
                <p className="text-white/80 text-lg">Our Meeting OS add-on audits your current meetings and builds a new cadence that actually works.</p>
              </div>
              <Link 
                href="/packages/addons/meeting-os" 
                className="btn btn-primary whitespace-nowrap group"
              >
                Learn about Meeting OS
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        
          <div className="mt-20 pt-12 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/santa-cruz-gym-membership-retention" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-current-500 transition-colors">Santa Cruz Gym Membership Retention</h4>
                <p className="text-white/70 text-sm">Practical insights on improving your business operations.</p>
              </Link>
              <Link href="/blog/santa-cruz-fitness-client-communication" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-current-500 transition-colors">Santa Cruz Fitness Client Communication</h4>
                <p className="text-white/70 text-sm">Learn how to build better systems and reduce friction.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
