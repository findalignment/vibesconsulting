import Link from 'next/link'

export const metadata = {
  title: "When Your Team Asks Permission for Everything",
  description: "Your team is capable but won't make decisions without you. The problem isn't your people - it's your system."
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
            <time>September 23, 2024</time>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="text-current-500">Team & Culture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">When Your Team Asks Permission for Everything</h1>

        <div className="space-y-8">
          {/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-current-500 first-letter:mr-2 first-letter:float-left">You've built a team, but every decision still waits for you. Staff ask permission for things they should handle themselves. Projects stall until you weigh in. Nothing moves forward without your approval.</p>

          <p>This isn't because your team is incompetent. It's because you haven't built a system that empowers them to decide.</p>

          <div className="my-12 border-l-4 border-current-500 pl-6 py-2">
            <h2 className="text-3xl font-bold text-white mb-4">Why Everything Runs Through You</h2>
          </div>
          
          <p>The bottleneck problem usually stems from a few patterns:</p>

          <p><strong>You haven't defined decision-making boundaries.</strong> Your team doesn't know what they're authorized to decide, so they ask about everything to be safe.</p>

          <p><strong>You've corrected their decisions before.</strong> Once bitten, twice shy. If you've overruled their judgment in the past, they'll stop making judgment calls.</p>

          <p><strong>There are no documented standards.</strong> Without clear criteria for "good" decisions, every choice feels risky to your team.</p>

          <p><strong>You move faster than they do.</strong> It's often quicker to ask you than to figure it out themselves, so they default to asking.</p>

          <p><strong>You actually like being needed.</strong> Honest question: does being the go-to person validate your role? If so, you're incentivizing dependency.</p>

          <div className="my-12 border-l-4 border-current-500 pl-6 py-2">
            <h2 className="text-3xl font-bold text-white mb-4">The Cost of Being the Bottleneck</h2>
          </div>
          
          <p>This pattern has real costs:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Slow response times</strong> - Customers wait while staff wait for you</li>
            <li><strong>Lost opportunities</strong> - Time-sensitive decisions don't get made</li>
            <li><strong>Team disengagement</strong> - Smart people hate not being trusted</li>
            <li><strong>Owner burnout</strong> - You can't scale if you're the only decision-maker</li>
            <li><strong>Weak succession planning</strong> - Nobody's learning to lead</li>
          </ul>

          <div className="my-12 border-l-4 border-current-500 pl-6 py-2">
            <h2 className="text-3xl font-bold text-white mb-4">How to Delegate Decision-Making</h2>
          </div>
          
          <p>Here's how to break the bottleneck:</p>

          <p><strong>1. Define decision categories.</strong> Create three levels: decisions they own, decisions they recommend, decisions you own. Be explicit about what falls where.</p>

          <p><strong>2. Set clear criteria.</strong> For common decision types, document what "good" looks like. Give them a framework, not just freedom.</p>

          <p><strong>3. Start with reversible decisions.</strong> Let them own low-stakes choices first. Build confidence before delegating high-stakes decisions.</p>

          <p><strong>4. Support their decisions publicly.</strong> Even if you disagree, back their call in front of others. Coach them privately afterward.</p>

          <p><strong>5. Create feedback loops.</strong> Regular check-ins where they explain their reasoning. This builds judgment over time.</p>

          <p><strong>6. Let them fail small.</strong> Some decisions won't be perfect. That's how people learn. Protect them from catastrophic failures, not from small mistakes.</p>

          <div className="my-12 border-l-4 border-current-500 pl-6 py-2">
            <h2 className="text-3xl font-bold text-white mb-4">What Good Delegation Looks Like</h2>
          </div>
          
          <p>In well-run small businesses, decision-making flows like this:</p>

          <p><strong>Front-line staff</strong> handle customer-facing decisions within established guidelines. They know when to escalate.</p>

          <p><strong>Managers</strong> make operational decisions about schedules, processes, and resource allocation. They update the owner, but don't wait for approval.</p>

          <p><strong>Owners</strong> focus on strategic decisions: hiring key roles, major investments, long-term direction. They're consulted, not involved in daily operations.</p>

          <div className="my-12 border-l-4 border-current-500 pl-6 py-2">
            <h2 className="text-3xl font-bold text-white mb-4">The Mindset Shift</h2>
          </div>
          
          <p>The hardest part isn't teaching your team to decide. It's letting go of control yourself.</p>

          <p>Your job isn't to make every decision. Your job is to build a system where good decisions get made consistently, whether you're there or not.</p>

          <p>That's how you scale. That's how you take a vacation. That's how you build a business, not a job.

          <p>Learn how our <Link href="/services/business-flow">Business Flow service</Link> helps you build these systems.</p>
          
          <div className="bg-gradient-to-br from-current-600/20 to-current-800/30 p-8 md:p-10 rounded-xl border border-current-500/20 mt-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-2xl font-bold text-white mb-3">Struggling with operational friction?</p>
                <p className="text-white/80 text-lg">Book a Flow Check to identify where your systems are breaking down.</p>
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
        
          <div className="mt-20 pt-12 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/team-siloed-not-collaborating" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Team & Culture</p>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-current-500 transition-colors">Team Siloed Not Collaborating</h4>
                <p className="text-white/70 text-sm">Practical insights on improving your business operations.</p>
              </Link>
              <Link href="/blog/hiring-season-preparation" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Team & Culture</p>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-current-500 transition-colors">Hiring Season Preparation</h4>
                <p className="text-white/70 text-sm">Learn how to build better systems and reduce friction.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
