import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'

export const metadata = {
  title: "Decision-Making in Small Teams: Why Everything Runs Through You",
  description: "You're the bottleneck. Every decision waits for you. Here's how Santa Cruz business owners are delegating without losing control."
}

export default function BlogPost() {
  const sections = [
    {
      title: "Why Everything Runs Through You",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">The bottleneck problem usually stems from a few patterns:</p>

          <p><strong className="text-brand-text">You haven't defined decision-making boundaries.</strong> Your team doesn't know what they're authorized to decide, so they ask about everything to be safe.</p>

          <p><strong className="text-brand-text">You've corrected their decisions before.</strong> Once bitten, twice shy. If you've overruled their judgment in the past, they'll stop making judgment calls.</p>

          <p><strong className="text-brand-text">There are no documented standards.</strong> Without clear criteria for "good" decisions, every choice feels risky to your team.</p>

          <p><strong className="text-brand-text">You move faster than they do.</strong> It's often quicker to ask you than to figure it out themselves, so they default to asking.</p>

          <p><strong className="text-brand-text">You actually like being needed.</strong> Honest question: does being the go-to person validate your role? If so, you're incentivizing dependency.</p>
        </>
      )
    },
    {
      title: "The Cost of Being the Bottleneck",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">This pattern has real costs:</p>

          <ul className="list-disc pl-8 space-y-3 my-6 text-brand-text/70">
            <li><strong className="text-brand-text">Slow response times</strong> - Customers wait while staff wait for you</li>
            <li><strong className="text-brand-text">Lost opportunities</strong> - Time-sensitive decisions don't get made</li>
            <li><strong className="text-brand-text">Team disengagement</strong> - Smart people hate not being trusted</li>
            <li><strong className="text-brand-text">Owner burnout</strong> - You can't scale if you're the only decision-maker</li>
            <li><strong className="text-brand-text">Weak succession planning</strong> - Nobody's learning to lead</li>
          </ul>
        </>
      )
    },
    {
      title: "How to Delegate Decision-Making",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's how to break the bottleneck:</p>

          <p><strong className="text-brand-text">1. Define decision categories.</strong> Create three levels: decisions they own, decisions they recommend, decisions you own. Be explicit about what falls where.</p>

          <p><strong className="text-brand-text">2. Set clear criteria.</strong> For common decision types, document what "good" looks like. Give them a framework, not just freedom.</p>

          <p><strong className="text-brand-text">3. Start with reversible decisions.</strong> Let them own low-stakes choices first. Build confidence before delegating high-stakes decisions.</p>

          <p><strong className="text-brand-text">4. Support their decisions publicly.</strong> Even if you disagree, back their call in front of others. Coach them privately afterward.</p>

          <p><strong className="text-brand-text">5. Create feedback loops.</strong> Regular check-ins where they explain their reasoning. This builds judgment over time.</p>

          <p><strong className="text-brand-text">6. Let them fail small.</strong> Some decisions won't be perfect. That's how people learn. Protect them from catastrophic failures, not from small mistakes.</p>
        </>
      )
    },
    {
      title: "What Good Delegation Looks Like",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">In well-run small businesses, decision-making flows like this:</p>

          <p><strong className="text-brand-text">Front-line staff</strong> handle customer-facing decisions within established guidelines. They know when to escalate.</p>

          <p><strong className="text-brand-text">Managers</strong> make operational decisions about schedules, processes, and resource allocation. They update the owner, but don't wait for approval.</p>

          <p><strong className="text-brand-text">Owners</strong> focus on strategic decisions: hiring key roles, major investments, long-term direction. They're consulted, not involved in daily operations.</p>
        </>
      )
    },
    {
      title: "The Mindset Shift",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">The hardest part isn't teaching your team to decide. It's letting go of control yourself.</p>

          <p>Your job isn't to make every decision. Your job is to build a system where good decisions get made consistently, whether you're there or not.</p>

          <p>That's how you scale. That's how you take a vacation. That's how you build a business, not a job.</p>

          <p>Learn how our <Link href="/services/business-flow">Business Flow service</Link> helps you build these systems.</p>
          
          <p className="text-brand-text/70 mt-6">Explore our <Link href="/services">consulting services</Link> or <Link href="/packages">packages</Link> for comprehensive support.</p>
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
            <time>August 07, 2024</time>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="text-current-500">Team & Culture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Decision-Making in Small Teams: Why Everything Runs Through You</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">You're the bottleneck. Every decision waits for you. Here's how Santa Cruz business owners are delegating without losing control.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">You've built a team, but every decision still waits for you. Staff ask permission for things they should handle themselves. Projects stall until you weigh in. Nothing moves forward without your approval.</p>

          <p>This isn't because your team is incompetent. It's because you haven't built a system that empowers them to decide.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Need help with your business operations?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/packages/flow-check">Book a Flow Check</Link> to identify your biggest operational opportunities.</p>
            <Link href="/packages/flow-check" className="text-current-500 hover:underline text-sm">Learn about Flow Check →</Link>
          </div>
        
          <div className="mt-24 pt-16 border-t border-white/10">
            <h3 className="text-2xl font-bold text-brand-text mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/team-working-late-accomplishing-less" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Team & Culture</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Team Working Late Accomplishing Less</h4>
                <p className="text-brand-text/70 text-sm">Practical insights on improving your business operations.</p>
              </Link>
              <Link href="/blog/team-asks-permission-everything" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Team & Culture</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Team Asks Permission Everything</h4>
                <p className="text-brand-text/70 text-sm">Learn how to build better systems and reduce friction.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
