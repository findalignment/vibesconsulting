import Link from 'next/link'

export const metadata = {
  title: "When Your Team Asks Permission for Everything",
  description: "Your team is capable but won't make decisions without you. The problem isn't your people - it's your system."
}

export default function BlogPost() {
  return (
    <div className="pb-20 max-w-3xl">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <time className="text-white/60 text-sm">September 23, 2024</time>
          <h1 className="mt-2 mb-4">When Your Team Asks Permission for Everything</h1>
          <p className="text-xl text-white/80">Your team is capable but won't make decisions without you. The problem isn't your people - it's your system.</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-white/80">
          <p>You've built a team, but every decision still waits for you. Staff ask permission for things they should handle themselves. Projects stall until you weigh in. Nothing moves forward without your approval.</p>

          <p>This isn't because your team is incompetent. It's because you haven't built a system that empowers them to decide.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Why Everything Runs Through You</h2>
          
          <p>The bottleneck problem usually stems from a few patterns:</p>

          <p><strong>You haven't defined decision-making boundaries.</strong> Your team doesn't know what they're authorized to decide, so they ask about everything to be safe.</p>

          <p><strong>You've corrected their decisions before.</strong> Once bitten, twice shy. If you've overruled their judgment in the past, they'll stop making judgment calls.</p>

          <p><strong>There are no documented standards.</strong> Without clear criteria for "good" decisions, every choice feels risky to your team.</p>

          <p><strong>You move faster than they do.</strong> It's often quicker to ask you than to figure it out themselves, so they default to asking.</p>

          <p><strong>You actually like being needed.</strong> Honest question: does being the go-to person validate your role? If so, you're incentivizing dependency.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">The Cost of Being the Bottleneck</h2>
          
          <p>This pattern has real costs:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Slow response times</strong> - Customers wait while staff wait for you</li>
            <li><strong>Lost opportunities</strong> - Time-sensitive decisions don't get made</li>
            <li><strong>Team disengagement</strong> - Smart people hate not being trusted</li>
            <li><strong>Owner burnout</strong> - You can't scale if you're the only decision-maker</li>
            <li><strong>Weak succession planning</strong> - Nobody's learning to lead</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How to Delegate Decision-Making</h2>
          
          <p>Here's how to break the bottleneck:</p>

          <p><strong>1. Define decision categories.</strong> Create three levels: decisions they own, decisions they recommend, decisions you own. Be explicit about what falls where.</p>

          <p><strong>2. Set clear criteria.</strong> For common decision types, document what "good" looks like. Give them a framework, not just freedom.</p>

          <p><strong>3. Start with reversible decisions.</strong> Let them own low-stakes choices first. Build confidence before delegating high-stakes decisions.</p>

          <p><strong>4. Support their decisions publicly.</strong> Even if you disagree, back their call in front of others. Coach them privately afterward.</p>

          <p><strong>5. Create feedback loops.</strong> Regular check-ins where they explain their reasoning. This builds judgment over time.</p>

          <p><strong>6. Let them fail small.</strong> Some decisions won't be perfect. That's how people learn. Protect them from catastrophic failures, not from small mistakes.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">What Good Delegation Looks Like</h2>
          
          <p>In well-run small businesses, decision-making flows like this:</p>

          <p><strong>Front-line staff</strong> handle customer-facing decisions within established guidelines. They know when to escalate.</p>

          <p><strong>Managers</strong> make operational decisions about schedules, processes, and resource allocation. They update the owner, but don't wait for approval.</p>

          <p><strong>Owners</strong> focus on strategic decisions: hiring key roles, major investments, long-term direction. They're consulted, not involved in daily operations.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">The Mindset Shift</h2>
          
          <p>The hardest part isn't teaching your team to decide. It's letting go of control yourself.</p>

          <p>Your job isn't to make every decision. Your job is to build a system where good decisions get made consistently, whether you're there or not.</p>

          <p>That's how you scale. That's how you take a vacation. That's how you build a business, not a job.</p>
          
          <div className="bg-current-600/10 p-6 rounded-lg mt-8">
            <p className="font-semibold text-white mb-2">Struggling with operational friction?</p>
            <p className="text-white/70 text-sm">Book a Flow Check to identify where your systems are breaking down.</p>
            <Link href="/packages/flow-check" className="text-current-500 hover:underline text-sm">Learn about Flow Check →</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
