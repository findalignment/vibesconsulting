import Link from 'next/link'

export const metadata = {
  title: "The Delegation Framework - Free Guide for Business Owners | Vibes Consulting",
  description: "Learn how to delegate effectively without micromanaging or losing control. Free framework and templates for Santa Cruz business owners."
}

export default function DelegationFrameworkPage() {
  return (
    <div className="pb-20">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-current-600/20 border border-current-500/30 rounded-full text-current-400 text-sm mb-6">
            Free Framework + Templates
          </div>
          <h1 className="mb-6">The Delegation Framework</h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
            Stop being the bottleneck. This framework shows you exactly what to delegate, how to delegate it, and how to let go without losing control.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="card p-8 bg-gradient-to-br from-current-600/20 to-current-800/30 border-current-500/30">
              <h2 className="text-2xl font-bold mb-6 text-brand-text">What's Included:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-brand-text/70">The 3-tier decision framework (what they own, what they recommend, what you own)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-brand-text/70">Task audit template to identify what's delegatable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-brand-text/70">Delegation conversation script</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-brand-text/70">How to set clear expectations without micromanaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-brand-text/70">Feedback loop template for checking in without hovering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-current-500 text-xl">✓</span>
                  <span className="text-brand-text/70">When to take a task back (and when to let them learn)</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 bg-white/5 border-l-4 border-current-500">
              <h3 className="text-lg font-bold text-brand-text mb-3">Who This Is For</h3>
              <ul className="space-y-2 text-brand-text/70 text-sm">
                <li>• Business owners who can't take a vacation</li>
                <li>• Managers who review everything</li>
                <li>• Leaders whose team asks permission for everything</li>
                <li>• Anyone who says "it's faster if I just do it myself"</li>
              </ul>
            </div>

            <div className="card p-6 bg-white/5">
              <p className="text-brand-text/70 text-sm">
                <strong className="text-brand-text">Why it works:</strong> This isn't theory. It's the exact framework we use with clients to shift from founder-dependent to team-empowered operations.
              </p>
            </div>
          </div>

          <div>
            <div className="card p-8 sticky top-8">
              <h3 className="text-xl font-bold mb-4 text-brand-text">Download the Framework</h3>
              <p className="text-brand-text/70 mb-6">Get instant access to the framework and all templates.</p>
              
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
                  <label htmlFor="role" className="block text-sm text-brand-text/70 mb-2">Your Role (Optional)</label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-brand-text focus:outline-none focus:border-current-500"
                  >
                    <option value="">Select...</option>
                    <option value="owner">Business Owner</option>
                    <option value="founder">Founder/CEO</option>
                    <option value="manager">Manager</option>
                    <option value="director">Director</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Get the Framework
                </button>
              </form>

              <p className="text-white/50 text-xs mt-4 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        <section className="card p-8 md:p-12 bg-white/5 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-brand-text text-center">The 3-Tier Decision Framework</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="card p-6 bg-gradient-to-r from-green-600/20 to-green-800/30 border-green-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-400 font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">Tier 1: They Own It</h3>
                  <p className="text-brand-text/70 mb-3">Decisions they can make without asking. They inform you after, if at all.</p>
                  <p className="text-brand-text/60 text-sm"><strong className="text-brand-text">Examples:</strong> Scheduling, client communication within guidelines, routine operational choices</p>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-r from-yellow-600/20 to-yellow-800/30 border-yellow-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-600/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">Tier 2: They Recommend</h3>
                  <p className="text-brand-text/70 mb-3">They bring you a recommendation. You approve or coach. They're building judgment.</p>
                  <p className="text-brand-text/60 text-sm"><strong className="text-brand-text">Examples:</strong> Hiring, vendor selection, process changes, client issues outside normal scope</p>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-r from-red-600/20 to-red-800/30 border-red-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">Tier 3: You Own It</h3>
                  <p className="text-brand-text/70 mb-3">Strategic decisions that shape the business. They provide input, you decide.</p>
                  <p className="text-brand-text/60 text-sm"><strong className="text-brand-text">Examples:</strong> Pricing strategy, major investments, business direction, key partnerships</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/5 rounded-lg max-w-3xl mx-auto">
            <p className="text-brand-text/70 text-sm">
              <strong className="text-brand-text">The key:</strong> Most things should be Tier 1. If everything's in Tier 2 or 3, you're the bottleneck. The framework helps you move decisions down over time as trust and systems build.
            </p>
          </div>
        </section>

        <section className="card p-8 bg-gradient-to-br from-current-600/10 to-current-800/20 border-current-500/20 mb-12">
          <h2 className="text-xl font-bold mb-6 text-brand-text">What Else Is in the Guide?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-brand-text mb-2">Task Audit Template</h3>
              <p className="text-brand-text/70 text-sm">Map everything on your plate. Identify what's delegatable, what's not, and what needs systems first.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-text mb-2">Delegation Script</h3>
              <p className="text-brand-text/70 text-sm">Word-for-word conversation template for handing off ownership without confusion.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-text mb-2">Expectation-Setting Checklist</h3>
              <p className="text-brand-text/70 text-sm">The 7 things people need to know before they can own a task or decision.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-text mb-2">Feedback Loop System</h3>
              <p className="text-brand-text/70 text-sm">How to check in without micromanaging. Frequency, format, and what to actually discuss.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-brand-text">Ready to Get Your Time Back?</h2>
          <p className="text-brand-text/70 mb-8 max-w-2xl mx-auto">
            If you need help implementing delegation across your whole team, our <Link href="/services/business-flow" className="text-current-500 hover:underline">Business Flow service</Link> builds the systems that make delegation stick.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/services/business-flow" className="btn btn-primary">
              Learn About Business Flow
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Book a Call
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

