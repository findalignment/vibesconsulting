import Link from 'next/link'
import Section from '@/components/Section'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Productivity & Time Management for Business Owners | Work Smarter Systems',
  description: 'Stop being busy and start being productive. Learn time management strategies, meeting systems, and productivity frameworks for business owners.',
})

export default function ProductivityTimeManagementHub() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-text">
            Productivity & Time Management Guide
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Stop confusing busy with productive. Learn how to reclaim your time, eliminate worthless meetings, and focus on work that actually moves your business forward.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-brand-text/80 leading-relaxed mb-6">
            You're working more hours than ever but accomplishing less. Your calendar is a solid block of meetings. Your inbox owns you. You start every day planning to do strategic work and end every day wondering where the time went. This isn't a discipline problem or a time management problem—it's a systems problem disguised as a productivity issue.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            Real productivity isn't about working harder or finding more hours in the day. It's about eliminating the systems, behaviors, and patterns that create unnecessary work in the first place. It's about designing your business so that the default path leads to productive work, not reactive busywork. And it's about understanding that being busy isn't the same as being effective.
          </p>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            The Busy-Productive Paradox
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            Busy feels productive. A full calendar feels important. Constant Slack messages feel like momentum. But busy is often the enemy of productive. When you're constantly reacting—to messages, to meetings, to urgent requests—you never have time for the work that actually matters: building systems, making strategic decisions, solving root-cause problems.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            The business owners who get the most done aren't the ones working the longest hours. They're the ones who've built systems that protect their time, eliminate unnecessary work, and create space for deep, focused attention on high-value activities. They've learned to distinguish urgent from important, and they've built operations that handle urgent without requiring their constant involvement.
          </p>

          <div className="bg-brand-accent/5 border-l-4 border-brand-accent p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-brand-text mb-3">
              Signs You're Busy But Not Productive:
            </h3>
            <ul className="space-y-2 text-brand-text/80">
              <li>• Calendar full of meetings, no time for actual work</li>
              <li>• Working long hours but not moving key metrics</li>
              <li>• Constantly reacting, never planning proactively</li>
              <li>• Inbox and messages control your day</li>
              <li>• Urgent always beats important</li>
              <li>• Context switching between tasks constantly</li>
              <li>• Never time for strategic thinking or planning</li>
              <li>• End of day feels exhausting but not accomplished</li>
            </ul>
          </div>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            Reclaiming Your Time
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-8">
            Time management isn't about squeezing more into your day. It's about eliminating the systems and patterns that waste time in the first place. Here's how to take back control:
          </p>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Understanding Busy vs. Productive</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Activity isn't the same as progress. Being in motion isn't the same as moving forward. Understanding the difference between busy work and productive work is the first step to reclaiming your time.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/busy-but-not-productive" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Busy But Not Productive</h4>
                <p className="text-sm text-brand-text/70">How to identify and eliminate busywork</p>
              </Link>
              
              <Link href="/blog/working-in-business-not-on" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Working IN Your Business vs ON It</h4>
                <p className="text-sm text-brand-text/70">Creating time for strategic work</p>
              </Link>
              
              <Link href="/blog/urgent-always-beats-important" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">When Urgent Always Beats Important</h4>
                <p className="text-sm text-brand-text/70">Breaking the reactive work cycle</p>
              </Link>
              
              <Link href="/blog/reactive-not-proactive" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Reactive Instead of Proactive</h4>
                <p className="text-sm text-brand-text/70">Systems to stop firefighting mode</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Meeting Management Systems</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Meetings are the biggest time sink in modern business. They multiply like rabbits, accomplish little, and spawn more meetings to discuss what the previous meetings failed to resolve. Good meeting systems eliminate 80% of meetings and make the remaining 20% actually productive.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/meeting-overload-santa-cruz" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Meeting Overload</h4>
                <p className="text-sm text-brand-text/70">Reducing meetings without losing alignment</p>
              </Link>
              
              <Link href="/blog/meetings-become-more-meetings" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Meetings That Spawn More Meetings</h4>
                <p className="text-sm text-brand-text/70">Breaking the meeting multiplication cycle</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Calendar & Schedule Management</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              If your calendar controls you instead of you controlling it, you don't have a schedule—you have a cage. Effective schedule management means designing your calendar to support your priorities, not just accommodate everyone else's requests.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/calendar-owns-you" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Your Calendar Owns You</h4>
                <p className="text-sm text-brand-text/70">Taking back control of your schedule</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Focus & Deep Work</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Context switching destroys productivity. Every time you jump between tasks, you lose momentum, focus, and effectiveness. Building systems that protect deep work time is essential for getting meaningful work done.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/context-switching-killing-productivity" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Context Switching Kills Productivity</h4>
                <p className="text-sm text-brand-text/70">How to protect focused work time</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Communication Systems</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Email, Slack, texts, DMs—every communication channel becomes an interruption channel. Without clear communication systems, you're constantly at the mercy of whoever wants your attention right now. Effective communication systems create boundaries while maintaining responsiveness.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/inbox-zero-myth" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">The Inbox Zero Myth</h4>
                <p className="text-sm text-brand-text/70">Managing email without letting it manage you</p>
              </Link>
              
              <Link href="/blog/async-communication-small-business" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Async Communication for Small Teams</h4>
                <p className="text-sm text-brand-text/70">Reducing interruptions while staying aligned</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Balancing Client Work vs. Business Building</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              The tyranny of billable hours: every hour spent on business development, systems building, or strategic planning is an hour you're not billing. But if you never invest in the business, you stay stuck in a hamster wheel of client delivery. The key is systems that create space for both.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/client-work-versus-business-building" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Client Work vs. Business Building</h4>
                <p className="text-sm text-brand-text/70">Creating time for both without sacrificing either</p>
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            From Time Management to System Design
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            The biggest productivity insight: most time management problems are actually system design problems. When your team constantly interrupts you, that's a decision-making clarity problem. When you're drowning in meetings, that's a communication system problem. When you can't focus, that's a workflow design problem.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            Stop trying to optimize your personal productivity and start fixing the systems that create unnecessary work. Build decision-making frameworks so people don't need to ask you everything. Create asynchronous communication systems so you're not constantly interrupted. Design workflows that batch similar work together instead of forcing constant context switching.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            When you fix the systems, time management becomes effortless. You're no longer fighting against broken processes—you're flowing with systems that naturally create space for productive work.
          </p>

          <div className="bg-brand-neutral/10 border border-brand-neutral rounded-xl p-8 my-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">
              How We Help You Reclaim Your Time
            </h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              We don't teach time management tips—we fix the operational systems that waste your time:
            </p>
            <ul className="space-y-3 text-brand-text/80 mb-6">
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">•</span>
                <span>Map where your time actually goes (usually shocking)</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">•</span>
                <span>Identify what work should never reach you in the first place</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">•</span>
                <span>Build decision-making frameworks that eliminate constant interruptions</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">•</span>
                <span>Design communication systems that reduce unnecessary meetings</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">•</span>
                <span>Create workflows that batch similar work and protect deep focus time</span>
              </li>
            </ul>
            <Link href="/services/business-flow" className="text-brand-accent font-bold hover:text-brand-accent-dark transition-colors">
              Get your time back with Business Flow Analysis →
            </Link>
          </div>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            Productivity as a System, Not a Habit
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            Personal productivity habits can only take you so far. When the business systems create constant interruptions, no amount of personal discipline will save you. Real productivity comes from designing business operations that default to focused, high-value work—not from trying harder to manage chaos.
          </p>
        </div>

        <div className="bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Ready to Stop Being Busy and Start Being Productive?
          </h2>
          <p className="text-brand-text/70 mb-6 max-w-2xl mx-auto">
            We help business owners identify and eliminate the systems creating unnecessary work. Get your operations assessment and see where your time is really going.
          </p>
          <Link href="/packages/flow-check" className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors">
            Reclaim Your Time
          </Link>
        </div>
      </div>
    </Section>
  )
}

