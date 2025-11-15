import Link from 'next/link'
import Section from '@/components/Section'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Team Leadership & Management Guide | Building High-Performing Teams',
  description: 'Comprehensive guide to team leadership, delegation, and management for small business owners. Learn to build autonomous teams without micromanaging.',
})

export default function TeamLeadershipHub() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-text">
            Team Leadership & Management Guide
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Build teams that operate independently, make good decisions, and don't need you to function. Practical leadership strategies for founders who want their business to run without them.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-brand-text/80 leading-relaxed mb-6">
            Most business owners don't have a team problem—they have a systems problem that looks like a team problem. You've hired good people. They're smart, capable, and motivated. But they still wait for your approval on everything. They ask the same questions repeatedly. They can't make decisions without you. And when you're gone, everything stops.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            This isn't because your team is incompetent. It's because you haven't built the systems, clarity, and decision-making frameworks they need to operate independently. Real team leadership isn't about managing people—it's about building an environment where people can manage themselves.
          </p>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            The Delegation Paradox
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            You know you need to delegate. Every business book says so. You've tried it. But somehow, you're still doing everything. The work either doesn't get done right, comes back to you for approval, or creates more problems than it solves. So you end up doing it yourself "just this once"—which becomes every time.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            The problem isn't delegation itself. It's that delegation without systems is just wishful thinking. You can't delegate effectively when decision-making authority is unclear, when quality standards aren't documented, when knowledge lives only in your head, and when your team doesn't have the context they need to make good calls.
          </p>

          <div className="bg-brand-accent/5 border-l-4 border-brand-accent p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-brand-text mb-3">
              Signs Your Team Needs Better Leadership Systems:
            </h3>
            <ul className="space-y-2 text-brand-text/80">
              <li>• Team asks permission for everything</li>
              <li>• Decisions get revisited or second-guessed</li>
              <li>• Quality is inconsistent across team members</li>
              <li>• You can't take vacation without everything falling apart</li>
              <li>• New hires take months to become productive</li>
              <li>• Knowledge lives only in your head or key employees</li>
              <li>• Team members work hard but accomplish little</li>
            </ul>
          </div>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            Building Team Autonomy
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-8">
            Team autonomy doesn't mean chaos. It means building the frameworks, clarity, and systems that allow people to make good decisions without you. Here's how to build truly autonomous teams:
          </p>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Decision-Making Frameworks</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Your team asks for permission because they don't know where their authority starts and stops. Clear decision-making frameworks give them confidence to act.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/team-asks-permission-everything" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">When Teams Ask Permission for Everything</h4>
                <p className="text-sm text-brand-text/70">How to clarify decision-making authority</p>
              </Link>
              
              <Link href="/blog/decision-making-small-teams" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Decision-Making in Small Teams</h4>
                <p className="text-sm text-brand-text/70">Frameworks for empowered team decisions</p>
              </Link>
              
              <Link href="/blog/decisions-get-revisited" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Why Decisions Get Revisited</h4>
                <p className="text-sm text-brand-text/70">How to make decisions that stick</p>
              </Link>
              
              <Link href="/blog/team-autonomy-without-chaos" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Team Autonomy Without Chaos</h4>
                <p className="text-sm text-brand-text/70">Building independence with clear boundaries</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Delegation & Letting Go</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Delegation fails when you hand off tasks without the context, authority, or systems needed to complete them successfully. Effective delegation means transferring not just work, but the decision-making power and knowledge that come with it.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/delegate-but-still-doing-everything" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">You Delegate But Still Do Everything</h4>
                <p className="text-sm text-brand-text/70">Why delegation fails and how to fix it</p>
              </Link>
              
              <Link href="/blog/micromanaging-without-realizing" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Micromanaging Without Realizing It</h4>
                <p className="text-sm text-brand-text/70">How to let go without losing control</p>
              </Link>
              
              <Link href="/blog/founder-cant-take-vacation" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">When the Founder Can't Take Vacation</h4>
                <p className="text-sm text-brand-text/70">Building a business that runs without you</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Knowledge Transfer & Documentation</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              When knowledge lives only in your head (or key employees' heads), your team is stuck. Every question comes back to you. Every edge case requires your input. Building systems for knowledge transfer is essential for team independence.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/knowledge-in-founders-head" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Knowledge Lives in the Founder's Head</h4>
                <p className="text-sm text-brand-text/70">How to extract and systematize expertise</p>
              </Link>
              
              <Link href="/blog/repeating-same-questions" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Your Team Keeps Repeating Questions</h4>
                <p className="text-sm text-brand-text/70">Building knowledge systems that actually work</p>
              </Link>
              
              <Link href="/blog/documentation-that-actually-gets-used" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Documentation That Actually Gets Used</h4>
                <p className="text-sm text-brand-text/70">How to document processes people will follow</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Hiring & Training Systems</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Hiring isn't the problem—lack of systems is. Good people can't perform in broken systems. And hiring more people into broken systems just creates more chaos. The solution isn't better hiring—it's building better systems for the people you already have.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/hiring-fixes-nothing" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Why Hiring Fixes Nothing</h4>
                <p className="text-sm text-brand-text/70">When more people makes things worse</p>
              </Link>
              
              <Link href="/blog/new-hires-take-months" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">New Hires Take Months to Be Productive</h4>
                <p className="text-sm text-brand-text/70">Building onboarding systems that work</p>
              </Link>
              
              <Link href="/blog/good-people-bad-systems" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Good People, Bad Systems</h4>
                <p className="text-sm text-brand-text/70">Why capable people underperform</p>
              </Link>
              
              <Link href="/blog/hiring-season-preparation" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Preparing for Hiring Season</h4>
                <p className="text-sm text-brand-text/70">Systems to onboard multiple people efficiently</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Team Communication & Collaboration</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              When teams are siloed, waiting for answers, or spending all their time in meetings, you have a communication system problem. Effective team communication isn't about more meetings—it's about better information flow.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/team-waiting-for-answers" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Your Team Is Waiting for Answers</h4>
                <p className="text-sm text-brand-text/70">Eliminating communication bottlenecks</p>
              </Link>
              
              <Link href="/blog/team-siloed-not-collaborating" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">When Teams Are Siloed</h4>
                <p className="text-sm text-brand-text/70">Building cross-functional collaboration</p>
              </Link>
              
              <Link href="/blog/information-scattered-everywhere" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Information Scattered Everywhere</h4>
                <p className="text-sm text-brand-text/70">Creating a single source of truth</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Performance & Quality Standards</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              When quality is inconsistent across team members, it's not a people problem—it's a standards problem. Your team can't deliver consistent results if they don't know what good looks like.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/quality-inconsistent-across-team" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Inconsistent Quality Across Team</h4>
                <p className="text-sm text-brand-text/70">How to standardize without micromanaging</p>
              </Link>
              
              <Link href="/blog/quality-standards-not-documented" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">When Quality Standards Aren't Documented</h4>
                <p className="text-sm text-brand-text/70">Creating clear quality definitions</p>
              </Link>
              
              <Link href="/blog/team-working-late-accomplishing-less" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Team Works Late, Accomplishes Less</h4>
                <p className="text-sm text-brand-text/70">Fixing effort vs. results disconnect</p>
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            From Manager to Leader
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            The shift from manager to leader isn't about charisma or vision—it's about building systems that make management unnecessary. When decision-making frameworks are clear, when knowledge is accessible, when quality standards are documented, and when communication flows freely, your team doesn't need to be managed. They can lead themselves.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            That's the goal: building a team that doesn't need you to function. Not because they don't value your input, but because you've built the systems that allow them to make good decisions, solve problems independently, and deliver consistent results without constant oversight.
          </p>
        </div>

        <div className="bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Ready to Build a Self-Managing Team?
          </h2>
          <p className="text-brand-text/70 mb-6 max-w-2xl mx-auto">
            We help business owners build the systems and frameworks that enable team autonomy. Get your operations assessment and see where your leadership systems need work.
          </p>
          <Link href="/contact" className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors">
            Start Your Assessment
          </Link>
        </div>
      </div>
    </Section>
  )
}

