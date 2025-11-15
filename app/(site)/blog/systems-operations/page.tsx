import Link from 'next/link'
import Section from '@/components/Section'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Business Systems & Operations Guide | Process Optimization & Efficiency',
  description: 'Complete guide to building business systems that scale. Learn process optimization, documentation, and operational efficiency for sustainable growth.',
  keywords: 'business systems, operations management, process optimization, business efficiency, SOPs, operational systems'
})

export default function SystemsOperationsHub() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-text">
            Business Systems & Operations Guide
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Transform chaos into consistency. Learn how to build operational systems that scale, eliminate bottlenecks, and free you from day-to-day firefighting.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-brand-text/80 leading-relaxed mb-6">
            Systems aren't sexy. They're not the reason you started your business. Nobody dreams of building documentation, creating process maps, or writing standard operating procedures. But here's what happens without them: you become the bottleneck. Every decision flows through you. Every question comes back to you. Every problem lands on your desk. The business can't function without you, which means it can't scale beyond you.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            Business systems aren't about bureaucracy—they're about freedom. When you build the right operational systems, you create predictability, consistency, and independence. Work gets done the same way every time, regardless of who does it. Your team can make decisions without you. Problems get solved before they reach you. And you can finally step back from the day-to-day operations and focus on actually growing your business.
          </p>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            Why Most Business Systems Fail
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            You've probably tried building systems before. You created an operations manual that nobody reads. You documented processes that nobody follows. You implemented new tools that nobody uses. This isn't because your team is resistant to change—it's because most business systems fail at the design stage.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            Systems fail when they're built for the business you wish you had instead of the business you actually have. They fail when they're too complex, too rigid, or disconnected from how work actually happens. The best business systems are simple, flexible, and designed around actual workflows—not theoretical ideals.
          </p>

          <div className="bg-brand-accent/5 border-l-4 border-brand-accent p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-brand-text mb-3">
              Signs You Need Better Operational Systems:
            </h3>
            <ul className="space-y-2 text-brand-text/80">
              <li>• Work gets done differently every time</li>
              <li>• Handoffs between team members fail consistently</li>
              <li>• You're the bottleneck for most decisions</li>
              <li>• Knowledge lives only in people's heads</li>
              <li>• Quality varies depending on who does the work</li>
              <li>• Onboarding new people takes forever</li>
              <li>• The same problems keep recurring</li>
              <li>• You can't scale without hiring more people</li>
            </ul>
          </div>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            Building Systems That Actually Work
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-8">
            Effective business systems aren't about control—they're about clarity. When everyone knows what good looks like, how decisions get made, and where to find the information they need, systems become invisible. They fade into the background and work becomes effortless.
          </p>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Process Documentation & SOPs</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Documentation doesn't have to be complicated. The best SOPs are simple, visual, and designed to be referenced in the moment—not read cover to cover. If your team isn't using your documentation, it's not a discipline problem, it's a design problem.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/documentation-that-actually-gets-used" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Documentation That Gets Used</h4>
                <p className="text-sm text-brand-text/70">How to create docs people actually follow</p>
              </Link>
              
              <Link href="/blog/standard-operating-procedures-ignored" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Why SOPs Get Ignored</h4>
                <p className="text-sm text-brand-text/70">Making procedures people want to follow</p>
              </Link>
              
              <Link href="/blog/quality-standards-not-documented" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Documenting Quality Standards</h4>
                <p className="text-sm text-brand-text/70">How to define what "good" looks like</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Workflow & Process Optimization</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Before you automate or improve a process, you need to understand how work actually flows through your business. Where does it slow down? Where does it break? Where do handoffs fail? Process optimization starts with understanding current reality, not implementing best practices.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/handoffs-where-work-dies" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Handoffs: Where Work Dies</h4>
                <p className="text-sm text-brand-text/70">Fixing the transitions between people and processes</p>
              </Link>
              
              <Link href="/blog/waste-in-business-operations" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Identifying Waste in Operations</h4>
                <p className="text-sm text-brand-text/70">Finding and eliminating operational inefficiency</p>
              </Link>
              
              <Link href="/blog/operational-sustainability-efficiency" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Operational Sustainability vs Efficiency</h4>
                <p className="text-sm text-brand-text/70">Building systems that last, not just run fast</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Knowledge Management Systems</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              When information is scattered across emails, Slack messages, someone's notebook, and "the way we've always done it," you don't have knowledge management—you have knowledge chaos. Good systems make information findable, accessible, and up to date.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/knowledge-in-founders-head" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Knowledge in the Founder's Head</h4>
                <p className="text-sm text-brand-text/70">Extracting and systematizing expertise</p>
              </Link>
              
              <Link href="/blog/information-scattered-everywhere" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Information Scattered Everywhere</h4>
                <p className="text-sm text-brand-text/70">Creating a single source of truth</p>
              </Link>
              
              <Link href="/blog/repeating-same-questions" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Team Keeps Repeating Questions</h4>
                <p className="text-sm text-brand-text/70">Building self-service knowledge systems</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Feedback Loops & Continuous Improvement</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Systems need to evolve. What works for a 5-person company doesn't work for 15. What works in slow season doesn't work during peak demand. Without feedback loops, your systems calcify and become obstacles instead of assets.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/feedback-loops-dont-exist" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">When Feedback Loops Don't Exist</h4>
                <p className="text-sm text-brand-text/70">Building systems that get better over time</p>
              </Link>
              
              <Link href="/blog/grew-past-informal-systems" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">You Grew Past Informal Systems</h4>
                <p className="text-sm text-brand-text/70">When to formalize processes that used to work</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Onboarding & Training Systems</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              If new hires take months to get productive, you don't have an onboarding problem—you have a systems problem. Great onboarding isn't about personality—it's about having the documentation, processes, and training that allow anyone to get up to speed quickly.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/new-hires-take-months" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">New Hires Take Months to Be Productive</h4>
                <p className="text-sm text-brand-text/70">Building onboarding systems that work</p>
              </Link>
              
              <Link href="/blog/onboarding-bottleneck-local-business" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">The Onboarding Bottleneck</h4>
                <p className="text-sm text-brand-text/70">Scaling training without founder time</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Quality Control & Consistency</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Consistency isn't about controlling people—it's about building systems that make the right way the easy way. When quality varies across team members, you don't have a people problem, you have a systems problem.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/quality-inconsistent-across-team" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Quality Inconsistent Across Team</h4>
                <p className="text-sm text-brand-text/70">Creating consistent results without micromanaging</p>
              </Link>
              
              <Link href="/blog/good-people-bad-systems" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Good People, Bad Systems</h4>
                <p className="text-sm text-brand-text/70">Why capable people underperform in broken systems</p>
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            The Compounding Value of Good Systems
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            Building systems takes time upfront. It's easier to just do the work yourself. But systems compound. Every process you document is knowledge you only have to capture once. Every workflow you optimize reduces friction forever. Every decision framework you clarify eliminates hundreds of future interruptions.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            The businesses that scale successfully aren't the ones with the best ideas or the most funding. They're the ones with the best systems. They've built operational foundations that allow them to grow without chaos, add team members without confusion, and serve more customers without sacrificing quality. That's what good systems enable: sustainable, scalable, profitable growth.
          </p>
        </div>

        <div className="bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Ready to Build Systems That Scale?
          </h2>
          <p className="text-brand-text/70 mb-6 max-w-2xl mx-auto">
            We specialize in building operational systems for businesses that have outgrown informal processes. Get your business flow assessment and see where your systems need work.
          </p>
          <Link href="/packages/flow-check" className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors">
            Get Your Flow Check
          </Link>
        </div>
      </div>
    </Section>
  )
}

