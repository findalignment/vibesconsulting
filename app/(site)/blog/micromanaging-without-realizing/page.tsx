import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'

export const metadata = {
  title: "Signs You're Micromanaging (Even If You Don't Think You Are)",
  description: "You hired people to help. But you're still reviewing everything. Here's what's actually happening."
}

export default function BlogPost() {
  const sections = [
    {
      title: "Why This Keeps Happening",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">The same operational problems repeat for predictable reasons:</p>

          <p><strong className="text-brand-text">No documented standard.</strong> If the "right way" only exists in your head, everyone will do it their own way.</p>

          <p><strong className="text-brand-text">Inconsistent enforcement.</strong> If you address the problem sometimes but not always, people learn that the standard is optional.</p>

          <p><strong className="text-brand-text">Inadequate training.</strong> Telling people once what to do isn't training. Training requires demonstration, practice, and feedback.</p>

          <p><strong className="text-brand-text">No feedback loop.</strong> If people don't know they're doing something wrong, they'll keep doing it wrong.</p>

          <p><strong className="text-brand-text">Competing priorities.</strong> If you reward speed over quality, people will prioritize speed even when you say you want quality.</p>
        </>
      )
    },
    {
      title: "The Real Cost",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">These operational gaps have actual business costs:</p>

          <ul className="list-disc pl-8 space-y-3 my-6 text-brand-text/70">
            <li><strong className="text-brand-text">Wasted time</strong> - Rework, corrections, and repeated explanations eat hours every week</li>
            <li><strong className="text-brand-text">Inconsistent quality</strong> - Customers experience different service depending on who's working</li>
            <li><strong className="text-brand-text">Team frustration</strong> - Nobody likes operating in ambiguity or fixing the same problems repeatedly</li>
            <li><strong className="text-brand-text">Slower growth</strong> - You can't scale operations that only work when you're directly involved</li>
            <li><strong className="text-brand-text">Owner burnout</strong> - You become the bottleneck for everything</li>
          </ul>
        </>
      )
    },
    {
      title: "How to Actually Fix It",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's the systematic approach that works:</p>

          <p><strong className="text-brand-text">1. Document the standard.</strong> Write down exactly how this should work. Be specific. "Do it right" isn't a standard. Include visuals if helpful.</p>

          <p><strong className="text-brand-text">2. Train everyone on the standard.</strong> Don't assume they'll read the documentation. Walk them through it. Have them demonstrate understanding.</p>

          <p><strong className="text-brand-text">3. Make it easy to follow.</strong> If your process is complicated or requires extra steps, people will skip it. Simplify where possible.</p>

          <p><strong className="text-brand-text">4. Measure compliance.</strong> Spot-check regularly. What gets measured gets managed. This isn't about punishment - it's about accountability.</p>

          <p><strong className="text-brand-text">5. Give immediate feedback.</strong> When someone deviates from the standard, address it right away. Don't let it compound into a habit.</p>

          <p><strong className="text-brand-text">6. Update when needed.</strong> If the standard doesn't make sense anymore, change it officially. Don't let informal workarounds become the new normal.</p>
        </>
      )
    },
    {
      title: "Common Mistakes",
      content: (
        <>
<p><strong className="text-brand-text">Assuming once is enough.</strong> Telling people once doesn't create lasting change. You need repetition and reinforcement.</p>

          <p><strong className="text-brand-text">Blaming individuals.</strong> If multiple people are doing it wrong, the problem is your system, not your people.</p>

          <p><strong className="text-brand-text">Creating complexity.</strong> More rules and procedures aren't the answer. Clarity is the answer.</p>

          <p><strong className="text-brand-text">Skipping the "why."</strong> People follow standards better when they understand the reasoning behind them.</p>
        </>
      )
    },
    {
      title: "What Good Looks Like",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">When you fix operational gaps properly:</p>

          <ul className="list-disc pl-8 space-y-3 my-6 text-brand-text/70">
            <li>The same task gets done the same way regardless of who's doing it</li>
            <li>New hires learn the right way from day one</li>
            <li>Quality stays consistent even during busy periods</li>
            <li>You spend less time correcting and more time improving</li>
            <li>Your team operates confidently because expectations are clear</li>
          </ul>

          <p>That's the difference between businesses that struggle to grow and businesses that scale smoothly.</p>
        </>
      )
    },
    {
      title: "Taking the First Step",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Pick one operational problem that's costing you time or money. Just one. Document the standard. Train your team. Measure compliance. Give feedback.</p>

          <p>Once you fix one thing properly, you'll see how the same approach works for everything else.</p>

          <p>That's how you build operational excellence: one fixed system at a time.</p>
          
          <div className="bg-gradient-to-br from-current-600/20 to-current-800/30 p-8 md:p-10 rounded-xl border border-current-500/20 mt-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-2xl font-bold text-brand-text mb-3">Struggling with operational friction?</p>
                <p className="text-brand-text/70 text-lg">Book a Flow Check to identify where your systems are breaking down.</p>
              </div>
              <Link 
                href="/packages/flow-check" 
                className="btn btn-primary whitespace-nowrap group"
              >
                Learn about Flow Check
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
            <time>January 24, 2025</time>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="text-current-500">Operations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Signs You're Micromanaging (Even If You Don't Think You Are)</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">You hired people to help. But you're still reviewing everything. Here's what's actually happening.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">This problem shows up in every small business at some point. It feels like something you should be able to fix with a quick conversation or a new policy. But it keeps happening because it's not an isolated issue - it's a symptom of a deeper operational gap.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="mt-24 pt-16 border-t border-white/10">
            <h3 className="text-2xl font-bold text-brand-text mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/urgent-always-beats-important" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Urgent Always Beats Important</h4>
                <p className="text-brand-text/70 text-sm">Practical insights on improving your business operations.</p>
              </Link>
              <Link href="/blog/meetings-become-more-meetings" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Meetings Become More Meetings</h4>
                <p className="text-brand-text/70 text-sm">Learn how to build better systems and reduce friction.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
