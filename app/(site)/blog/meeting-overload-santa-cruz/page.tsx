import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'

export const metadata = {
  title: "Meeting Overload? How Santa Cruz Businesses Are Reclaiming Their Calendars",
  description: "Santa Cruz teams are drowning in meetings. Here's how local businesses are cutting meeting time by 40% without losing alignment."
}

export default function BlogPost() {
  const sections = [
    {
      title: "The Meeting Trap",
      content: (
        <>
<p>Meetings feel productive. You're aligned! You're communicating! But here's what's really happening:</p>

          <ul className="space-y-2">
            <li>Status updates disguised as collaboration</li>
            <li>Decisions that could be made async</li>
            <li>FYI information that should be a Slack message</li>
            <li>Meetings to plan meetings</li>
          </ul>
        </>
      )
    },
    {
      title: "What Santa Cruz Businesses Are Doing Instead",
      content: (
        <>
<p>The most effective local businesses we work with have cut their meeting load by 30-50%. Here's how:</p>

          <ul className="space-y-2">
            <li><strong className="text-brand-text">Async status updates:</strong> Loom videos or written updates replace standup meetings</li>
            <li><strong className="text-brand-text">Decision rights frameworks:</strong> Clear criteria for who decides what without a meeting</li>
            <li><strong className="text-brand-text">Meeting minimums:</strong> Every meeting must have a clear decision to make or problem to solve</li>
            <li><strong className="text-brand-text">Default to 25 minutes:</strong> Not 30. Not 60. Forces focus.</li>
          </ul>
        </>
      )
    },
    {
      title: "The Audit That Changes Everything",
      content: (
        <>
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
                <p className="text-2xl font-bold text-brand-text mb-3">Need help redesigning your meeting cadence?</p>
                <p className="text-brand-text/70 text-lg">Our Meeting OS add-on audits your current meetings and builds a new cadence that actually works.</p>
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
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Link href="/blog" className="text-brand-text/60 hover:text-brand-text text-sm mb-8 inline-flex items-center gap-2 hover:gap-3 transition-all">
        <span>←</span> Back to Blog
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>April 17, 2025</time>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Meeting Overload? How Santa Cruz Businesses Are Reclaiming Their Calendars</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">Santa Cruz teams are drowning in meetings. Here's how local businesses are cutting meeting time by 40% without losing alignment.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">Your calendar is a nightmare. Back-to-back meetings. No time for actual work. Your team spends more time talking about work than doing work.</p>

          <p>This is the reality for most Santa Cruz small businesses once they hit 5-10 people. Meetings multiply. Calendars fill up. Deep work disappears.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-gradient-to-br from-current-600/20 to-current-800/30 p-8 md:p-10 rounded-xl border border-current-500/20 mt-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-2xl font-bold text-brand-text mb-3">Need help redesigning your meeting cadence?</p>
                <p className="text-brand-text/70 text-lg">Our Meeting OS add-on audits your current meetings and builds a new cadence that actually works.</p>
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
        
          <div className="mt-24 pt-16 border-t border-white/10">
            <h3 className="text-2xl font-bold text-brand-text mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/santa-cruz-gym-membership-retention" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Santa Cruz Gym Membership Retention</h4>
                <p className="text-brand-text/70 text-sm">Practical insights on improving your business operations.</p>
              </Link>
              <Link href="/blog/santa-cruz-fitness-client-communication" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Santa Cruz Fitness Client Communication</h4>
                <p className="text-brand-text/70 text-sm">Learn how to build better systems and reduce friction.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
