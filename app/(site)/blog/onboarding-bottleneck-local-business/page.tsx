import Link from 'next/link'

export const metadata = {
  title: "The Onboarding Bottleneck Killing Santa Cruz Business Growth",
  description: "If onboarding new clients takes weeks, you\'re losing revenue. Here\'s how Santa Cruz businesses are fixing this friction point."
}

export default function BlogPost() {
  return (
    <div className="pb-20 max-w-3xl">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <time className="text-white/60 text-sm">September 04, 2024</time>
          <h1 className="mt-2 mb-4">The Onboarding Bottleneck Killing Santa Cruz Business Growth</h1>
          <p className="text-xl text-white/80">If onboarding new clients takes weeks, you're losing revenue. Here's how Santa Cruz businesses are fixing this friction point.</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-white/80">
          <p>A new client signs up. They're excited. Then... crickets for a week. Forms get lost. Intake calls keep rescheduling. By the time they actually start, momentum is gone.</p>

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
            <li><strong>Automated intake:</strong> Form submission triggers welcome email and scheduling link</li>
            <li><strong>Pre-populated templates:</strong> Client info flows into your system automatically</li>
            <li><strong>Self-service scheduling:</strong> Clients book their own kickoff call</li>
            <li><strong>Clear handoff protocol:</strong> Sales-to-delivery transition is documented</li>
            <li><strong>Async welcome packet:</strong> Video orientation clients can watch anytime</li>
          </ul>

          <h2 className="text-white text-2xl font-semibold mt-8 mb-4">The Revenue Impact</h2>

          <p>Faster onboarding means:</p>

          <ul className="space-y-2">
            <li>Higher conversion rates (momentum doesn't die)</li>
            <li>Better first impressions (professional, organized)</li>
            <li>More capacity (you're not manually processing each one)</li>
            <li>Happier clients (they start seeing value immediately)</li>
          </ul>

          <div className="bg-current-600/10 p-6 rounded-lg mt-8">
            <p className="font-semibold text-white mb-2">Want to redesign your client onboarding?</p>
            <p className="text-white/70 text-sm">Our Flow Rebuild service can tackle your onboarding process specifically - from intake to first delivery.</p>
            <Link href="/packages/flow-rebuild" className="text-current-500 hover:underline text-sm">Learn about Flow Rebuild →</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
