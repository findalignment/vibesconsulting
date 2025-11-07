import Link from 'next/link'

export const metadata = {
  title: "The Onboarding Bottleneck Killing Santa Cruz Business Growth",
  description: "If onboarding new clients takes weeks, you're losing revenue. Here's how Santa Cruz businesses are fixing this friction point."
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
            <time>September 04, 2024</time>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="text-current-500">Operations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">The Onboarding Bottleneck Killing Santa Cruz Business Growth</h1>

        <div className="space-y-8">
          {/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-current-500 first-letter:mr-2 first-letter:float-left">A new client signs up. They're excited. Then... crickets for a week. Forms get lost. Intake calls keep rescheduling. By the time they actually start, momentum is gone.</p>

          <p>If your onboarding takes more than 3-5 days, you're leaving money on the table. And you're frustrating clients before they even get started.</p>

          <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Why Onboarding Takes Forever</h2>

          <p>Common culprits we see in Santa Cruz businesses:</p>

          <ul className="space-y-2">
            <li>Intake forms that require manual follow-up</li>
            <li>Scheduling that requires 3-4 email exchanges</li>
            <li>Information that lives in your head, not documentation</li>
            <li>No clear handoff between sales and delivery</li>
            <li>Waiting for you to personally review everything</li>
          </ul>

          <h2 className="text-white text-2xl font-semibold mt-8 mb-4">What Fast Onboarding Looks Like</h2>

          <p>The best Santa Cruz businesses we work with onboard clients in 48-72 hours. Here's their system:</p>

          <ul className="space-y-2">
            <li><strong className="text-white">Automated intake:</strong> Form submission triggers welcome email and scheduling link</li>
            <li><strong className="text-white">Pre-populated templates:</strong> Client info flows into your system automatically</li>
            <li><strong className="text-white">Self-service scheduling:</strong> Clients book their own kickoff call</li>
            <li><strong className="text-white">Clear handoff protocol:</strong> Sales-to-delivery transition is documented</li>
            <li><strong className="text-white">Async welcome packet:</strong> Video orientation clients can watch anytime</li>
          </ul>

          <h2 className="text-white text-2xl font-semibold mt-8 mb-4">The Revenue Impact</h2>

          <p>Faster onboarding means:</p>

          <ul className="space-y-2">
            <li>Higher conversion rates (momentum doesn't die)</li>
            <li>Better first impressions (professional, organized)</li>
            <li>More capacity (you're not manually processing each one)</li>
            <li>Happier clients (they start seeing value immediately)</li>
          </ul>

          <div className="bg-gradient-to-br from-current-600/20 to-current-800/30 p-8 md:p-10 rounded-xl border border-current-500/20 mt-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-2xl font-bold text-white mb-3">Want to redesign your client onboarding?</p>
                <p className="text-white/80 text-lg">Our Flow Rebuild service can tackle your onboarding process specifically - from intake to first delivery.</p>
              </div>
              <Link 
                href="/packages/flow-rebuild" 
                className="btn btn-primary whitespace-nowrap group"
              >
                Learn about Flow Rebuild
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        
          <div className="mt-20 pt-12 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/customer-experience-operations-disconnect" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-current-500 transition-colors">Customer Experience Operations Disconnect</h4>
                <p className="text-white/70 text-sm">Practical insights on improving your business operations.</p>
              </Link>
              <Link href="/blog/busy-but-not-productive" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-current-500 transition-colors">Busy But Not Productive</h4>
                <p className="text-white/70 text-sm">Learn how to build better systems and reduce friction.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
