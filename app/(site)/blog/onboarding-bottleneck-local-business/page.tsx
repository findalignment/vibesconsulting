import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'

export const metadata = {
  title: "The Onboarding Bottleneck Killing Santa Cruz Business Growth",
  description: "If onboarding new clients takes weeks, you're losing revenue. Here's how Santa Cruz businesses are fixing this friction point."
}

export default function BlogPost() {
  const sections = [
    {
      title: "Why Onboarding Takes Forever",
      content: (
        <>
<p>Common culprits we see in Santa Cruz businesses:</p>

          <ul className="space-y-2">
            <li>Intake forms that require manual follow-up</li>
            <li>Scheduling that requires 3-4 email exchanges</li>
            <li>Information that lives in your head, not documentation</li>
            <li>No clear handoff between sales and delivery</li>
            <li>Waiting for you to personally review everything</li>
          </ul>
        </>
      )
    },
    {
      title: "What Fast Onboarding Looks Like",
      content: (
        <>
<p>The best Santa Cruz businesses we work with onboard clients in 48-72 hours. Here's their system:</p>

          <ul className="space-y-2">
            <li><strong className="text-brand-text">Automated intake:</strong> Form submission triggers welcome email and scheduling link</li>
            <li><strong className="text-brand-text">Pre-populated templates:</strong> Client info flows into your system automatically</li>
            <li><strong className="text-brand-text">Self-service scheduling:</strong> Clients book their own kickoff call</li>
            <li><strong className="text-brand-text">Clear handoff protocol:</strong> Sales-to-delivery transition is documented</li>
            <li><strong className="text-brand-text">Async welcome packet:</strong> Video orientation clients can watch anytime</li>
          </ul>
        </>
      )
    },
    {
      title: "The Revenue Impact",
      content: (
        <>
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
                <p className="text-2xl font-bold text-brand-text mb-3">Want to redesign your client onboarding?</p>
                <p className="text-brand-text/70 text-lg">Our Flow Rebuild service can tackle your onboarding process specifically - from intake to first delivery.</p>
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
            <time>February 17, 2025</time>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="text-current-500">Operations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">The Onboarding Bottleneck Killing Santa Cruz Business Growth</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">If onboarding new clients takes weeks, you're losing revenue. Here's how Santa Cruz businesses are fixing this friction point.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">A new client signs up. They're excited. Then... crickets for a week. Forms get lost. Intake calls keep rescheduling. By the time they actually start, momentum is gone.</p>

          <p>If your onboarding takes more than 3-5 days, you're leaving money on the table. And you're frustrating clients before they even get started.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-gradient-to-br from-current-600/20 to-current-800/30 p-8 md:p-10 rounded-xl border border-current-500/20 mt-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-2xl font-bold text-brand-text mb-3">Want to redesign your client onboarding?</p>
                <p className="text-brand-text/70 text-lg">Our Flow Rebuild service can tackle your onboarding process specifically - from intake to first delivery.</p>
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
        
          <div className="mt-24 pt-16 border-t border-white/10">
            <h3 className="text-2xl font-bold text-brand-text mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/customer-experience-operations-disconnect" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Customer Experience Operations Disconnect</h4>
                <p className="text-brand-text/70 text-sm">Practical insights on improving your business operations.</p>
              </Link>
              <Link href="/blog/busy-but-not-productive" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Busy But Not Productive</h4>
                <p className="text-brand-text/70 text-sm">Learn how to build better systems and reduce friction.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
