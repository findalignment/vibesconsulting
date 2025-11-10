import Link from 'next/link'

export const metadata = {
  title: "The 10-Minute Operations Audit - Free Assessment | Vibes Consulting",
  description: "A quick self-assessment to identify your biggest operational bottlenecks. Free downloadable checklist for Santa Cruz business owners."
}

export default function TenMinuteAuditPage() {
  return (
    <div className="pb-20">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-current-600/20 border border-current-500/30 rounded-full text-current-400 text-sm mb-6">
            Free Self-Assessment
          </div>
          <h1 className="mb-6">The 10-Minute Operations Audit</h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
            Answer 20 quick questions to pinpoint exactly where your business operations are breaking down-and what to fix first.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="card p-8 bg-gradient-to-br from-current-600/20 to-current-800/30 border-current-500/30">
              <h2 className="text-2xl font-bold mb-6 text-brand-text">You'll Identify:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-brand-text/70">Your #1 operational bottleneck</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-brand-text/70">Which processes are slowing you down</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-brand-text/70">Where knowledge gaps exist in your team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-brand-text/70">Communication breakdowns and their root causes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-brand-text/70">Quick wins you can implement today</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-brand-text/70">When it's time to get professional help</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 bg-white/5 border-l-4 border-current-500">
              <h3 className="text-lg font-bold text-brand-text mb-3">How It Works</h3>
              <ol className="space-y-3 text-brand-text/70 text-sm">
                <li><strong className="text-brand-text">1.</strong> Download the PDF checklist</li>
                <li><strong className="text-brand-text">2.</strong> Answer 20 yes/no questions (10 minutes)</li>
                <li><strong className="text-brand-text">3.</strong> Score yourself across 5 key areas</li>
                <li><strong className="text-brand-text">4.</strong> Get your customized recommendations</li>
              </ol>
            </div>

            <div className="card p-6 bg-white/5">
              <p className="text-brand-text/70 text-sm">
                <strong className="text-brand-text">This audit covers:</strong> Decision-making, documentation, communication, onboarding, and scalability. Each area gets a clarity score so you know exactly where to focus.
              </p>
            </div>
          </div>

          <div>
            <div className="card p-8 sticky top-8">
              <h3 className="text-xl font-bold mb-4 text-brand-text">Get Your Free Audit</h3>
              <p className="text-brand-text/70 mb-6">Instant download. No spam, just the checklist.</p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-brand-text/70 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-brand-text placeholder:text-white/40 focus:outline-none focus:border-current-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-brand-text/70 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-brand-text placeholder:text-white/40 focus:outline-none focus:border-current-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="team-size" className="block text-sm text-brand-text/70 mb-2">Team Size (Optional)</label>
                  <select
                    id="team-size"
                    name="team-size"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-brand-text focus:outline-none focus:border-current-500"
                  >
                    <option value="">Select...</option>
                    <option value="solo">Just me</option>
                    <option value="2-5">2-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="11-20">11-20 people</option>
                    <option value="20+">20+ people</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Download Free Audit
                </button>
              </form>

              <p className="text-white/50 text-xs mt-4 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        <section className="card p-8 md:p-12 bg-white/5 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-brand-text text-center">The 5 Areas We Assess</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="card p-6 bg-white/5">
              <div className="w-12 h-12 rounded-full bg-current-600/20 border border-current-500/30 flex items-center justify-center text-current-500 font-bold text-xl mb-4">1</div>
              <h3 className="text-lg font-bold text-brand-text mb-2">Decision-Making</h3>
              <p className="text-brand-text/70 text-sm">Who can decide what? Where do decisions stall? Are you the bottleneck?</p>
            </div>

            <div className="card p-6 bg-white/5">
              <div className="w-12 h-12 rounded-full bg-current-600/20 border border-current-500/30 flex items-center justify-center text-current-500 font-bold text-xl mb-4">2</div>
              <h3 className="text-lg font-bold text-brand-text mb-2">Documentation</h3>
              <p className="text-brand-text/70 text-sm">Is knowledge in people's heads or in systems? Can someone onboard without you?</p>
            </div>

            <div className="card p-6 bg-white/5">
              <div className="w-12 h-12 rounded-full bg-current-600/20 border border-current-500/30 flex items-center justify-center text-current-500 font-bold text-xl mb-4">3</div>
              <h3 className="text-lg font-bold text-brand-text mb-2">Communication</h3>
              <p className="text-brand-text/70 text-sm">How does info flow? What falls through cracks? Are meetings actually useful?</p>
            </div>

            <div className="card p-6 bg-white/5">
              <div className="w-12 h-12 rounded-full bg-current-600/20 border border-current-500/30 flex items-center justify-center text-current-500 font-bold text-xl mb-4">4</div>
              <h3 className="text-lg font-bold text-brand-text mb-2">Onboarding</h3>
              <p className="text-brand-text/70 text-sm">How long until someone's productive? Do they shadow forever or have real training?</p>
            </div>

            <div className="card p-6 bg-white/5 md:col-span-2 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-current-600/20 border border-current-500/30 flex items-center justify-center text-current-500 font-bold text-xl mb-4">5</div>
              <h3 className="text-lg font-bold text-brand-text mb-2">Scalability</h3>
              <p className="text-brand-text/70 text-sm">Can you grow without chaos? What breaks at 2x revenue? At 3x team size?</p>
            </div>
          </div>
        </section>

        <section className="card p-8 bg-gradient-to-br from-current-600/10 to-current-800/20 border-current-500/20 mb-12">
          <h2 className="text-xl font-bold mb-4 text-brand-text">What Happens After You Complete the Audit?</h2>
          <div className="space-y-4 text-brand-text/70">
            <p>The checklist gives you a score for each area (0-4 points). Based on your total score:</p>
            <ul className="space-y-2 ml-6">
              <li><strong className="text-brand-text">16-20 points:</strong> You're doing great. Minor optimizations only.</li>
              <li><strong className="text-brand-text">11-15 points:</strong> Some friction. Fixable with focused effort.</li>
              <li><strong className="text-brand-text">6-10 points:</strong> Significant gaps. Time to systematize.</li>
              <li><strong className="text-brand-text">0-5 points:</strong> Critical issues. Professional help recommended.</li>
            </ul>
            <p className="mt-6">Each score range includes specific action steps you can take immediately.</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-brand-text">Need Help Implementing Your Findings?</h2>
          <p className="text-brand-text/70 mb-8 max-w-2xl mx-auto">
            If your audit reveals operational gaps, our <Link href="/packages/flow-check" className="text-current-500 hover:underline">Flow Check</Link> goes deeper with a full analysis and implementation roadmap.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/packages" className="btn btn-primary">
              View Packages
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Talk to an Expert
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

