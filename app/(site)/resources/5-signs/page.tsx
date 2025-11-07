import Link from 'next/link'

export const metadata = {
  title: "5 Signs Your Business Needs Better Systems - Free Guide | Vibes Consulting",
  description: "Download our free guide to identify the warning signs that your business operations need optimization. Quick assessment for Santa Cruz business owners."
}

export default function FiveSignsPage() {
  return (
    <div className="pb-20">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-current-600/20 border border-current-500/30 rounded-full text-current-400 text-sm mb-6">
            Free Resource
          </div>
          <h1 className="mb-6">5 Signs Your Business Needs Better Systems</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Most friction is invisible until you know what to look for. This guide shows you the exact warning signs that your operations need attention.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="card p-8 bg-gradient-to-br from-current-600/20 to-current-800/30 border-current-500/30">
              <h2 className="text-2xl font-bold mb-6 text-white">What You'll Learn:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-white/80">The #1 sign that your business depends too much on you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-white/80">How to spot operational bottlenecks before they become crises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-white/80">Warning signs that your team is working around broken processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-white/80">Simple diagnostics to assess your current systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-white/80">When to fix it yourself vs. when to get help</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 bg-white/5">
              <p className="text-white/70 text-sm mb-4">
                <strong className="text-white">Perfect for:</strong> Small business owners, managers, and operators who suspect things could run more smoothly but aren't sure where to start.
              </p>
              <p className="text-white/70 text-sm">
                <strong className="text-white">Time to read:</strong> 8 minutes
              </p>
            </div>
          </div>

          <div>
            <div className="card p-8 sticky top-8">
              <h3 className="text-xl font-bold mb-4 text-white">Download Your Free Guide</h3>
              <p className="text-white/70 mb-6">Enter your email and we'll send you the guide immediately.</p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-current-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-current-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="business" className="block text-sm text-white/70 mb-2">Business Type (Optional)</label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-current-500"
                    placeholder="e.g. Retail, Fitness Studio, Agency"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Download Free Guide
                </button>
              </form>

              <p className="text-white/50 text-xs mt-4 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        <section className="card p-8 md:p-12 bg-white/5 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-white text-center">What's Inside the Guide</h2>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="border-l-4 border-current-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-white mb-3">Sign #1: You Can't Take a Vacation</h3>
              <p className="text-white/70">When the business stops without you, that's not dedication-that's dependency. Learn what this really means and the specific systems missing.</p>
            </div>

            <div className="border-l-4 border-current-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-white mb-3">Sign #2: Everything Runs Through You</h3>
              <p className="text-white/70">Your team asks permission for things they should handle themselves. Discover why this happens and how to delegate decision-making authority.</p>
            </div>

            <div className="border-l-4 border-current-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-white mb-3">Sign #3: Repeating the Same Conversations</h3>
              <p className="text-white/70">If you answer the same questions three times a week, you need documentation. We show you what to document and what to skip.</p>
            </div>

            <div className="border-l-4 border-current-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-white mb-3">Sign #4: New Hires Take Forever to Onboard</h3>
              <p className="text-white/70">Three months to get someone productive? That's a systems problem. Learn how to create onboarding that works.</p>
            </div>

            <div className="border-l-4 border-current-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-white mb-3">Sign #5: Revenue Up, Profits Flat</h3>
              <p className="text-white/70">Making more but keeping less. This is the clearest sign of operational inefficiency-and the most fixable.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to Fix These Issues?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Our <Link href="/packages/flow-check" className="text-current-500 hover:underline">Flow Check package</Link> gives you a complete operational audit and roadmap in just 3 weeks.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/packages/flow-check" className="btn btn-primary">
              Learn About Flow Check
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Schedule a Call
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

