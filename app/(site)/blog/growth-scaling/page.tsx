import Link from 'next/link'
import Section from '@/components/Section'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Business Growth & Scaling Guide | Sustainable Growth Without Burnout',
  description: 'Learn how to scale your business sustainably. Strategies for growth without chaos, managing growing pains, and building businesses that last.',
})

export default function GrowthScalingHub() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-text">
            Business Growth & Scaling Guide
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Grow your business without losing what made it special. Learn sustainable scaling strategies that build long-term value instead of short-term chaos.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-brand-text/80 leading-relaxed mb-6">
            Growth is supposed to be good, right? More revenue, more customers, more team members—these should be signs of success. But for many business owners, growth feels like punishment. You're working harder than ever, making less profit than you used to, and the business that once felt manageable now feels chaotic. This isn't sustainable growth—it's growth-induced chaos.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            Sustainable scaling isn't about growing faster. It's about building operational foundations that can support growth without breaking. It's about preserving what makes your business special while removing the constraints that keep you small. And it's about understanding that not all growth is good growth—sometimes the smartest thing you can do is say no to the wrong opportunities so you can say yes to the right ones.
          </p>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            The Hidden Cost of Unmanaged Growth
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            Revenue growth without operational systems creates a dangerous illusion. You're making more money, so things must be working, right? Wrong. Revenue can grow while profit margins shrink, team morale collapses, customer experience degrades, and founder burnout accelerates. You can grow your way into failure.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            The businesses that scale successfully understand this: growth amplifies what's already there. If you have good systems, growth makes them better. If you have broken processes, growth makes them catastrophic. Before you scale, you need to build the operational foundation that can handle increased volume without increased chaos.
          </p>

          <div className="bg-brand-accent/5 border-l-4 border-brand-accent p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-brand-text mb-3">
              Warning Signs of Unsustainable Growth:
            </h3>
            <ul className="space-y-2 text-brand-text/80">
              <li>• Revenue up, profits flat or declining</li>
              <li>• Quality declining as you serve more customers</li>
              <li>• Team burning out from increased workload</li>
              <li>• Losing what made you special in the first place</li>
              <li>• Growing pains feel permanent, not temporary</li>
              <li>• Hiring creates more problems than it solves</li>
              <li>• Founder working more hours than ever</li>
              <li>• Customer complaints increasing with revenue</li>
            </ul>
          </div>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            Sustainable Growth Strategies
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-8">
            Sustainable growth isn't sexy. It's not about hockey-stick curves or exponential expansion. It's about building a business that can grow steadily, profitably, and without destroying the people who work there. Here's how to do it:
          </p>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Understanding Growing Pains</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Growing pains are normal. But they should be temporary—a sign that your systems need to evolve, not evidence that growth is inherently painful. When growing pains feel permanent, you're not growing sustainably.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/growing-pains-feel-permanent" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">When Growing Pains Feel Permanent</h4>
                <p className="text-sm text-brand-text/70">Identifying system issues disguised as growth problems</p>
              </Link>
              
              <Link href="/blog/grew-past-informal-systems" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">You Grew Past Informal Systems</h4>
                <p className="text-sm text-brand-text/70">When to formalize processes that used to work</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Growth Without Burnout</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              You can't grow a business you've burned yourself out building. Sustainable growth means building systems that allow the business to expand without requiring more of your personal time, energy, or capacity.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/growth-without-burnout" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">How to Grow Without Burning Out</h4>
                <p className="text-sm text-brand-text/70">Scaling strategies that preserve founder capacity</p>
              </Link>
              
              <Link href="/blog/founder-cant-take-vacation" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">When You Can't Take Vacation</h4>
                <p className="text-sm text-brand-text/70">Building a business that runs without you</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Sustainable vs. Growth-at-All-Costs</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Not all growth is good growth. Growth-at-all-costs mindset leads to accepting bad clients, compromising values, overworking teams, and building businesses that eventually collapse under their own weight. Sustainable growth means being selective about the opportunities you pursue.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/sustainable-growth-versus-growth-at-all-costs" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Sustainable Growth vs Growth at All Costs</h4>
                <p className="text-sm text-brand-text/70">Choosing the right growth strategy for long-term success</p>
              </Link>
              
              <Link href="/blog/building-business-that-lasts" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Building a Business That Lasts</h4>
                <p className="text-sm text-brand-text/70">Long-term thinking in a short-term world</p>
              </Link>
              
              <Link href="/blog/small-business-sustainability-paradox" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">The Small Business Sustainability Paradox</h4>
                <p className="text-sm text-brand-text/70">Balancing growth with sustainability</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Profitable Scaling</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Revenue growth without profit growth isn't success—it's a more expensive way to stay broke. Profitable scaling means understanding your unit economics, identifying margin erosion, and building systems that improve efficiency as you grow.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/revenue-up-profits-flat" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Revenue Up, Profits Flat</h4>
                <p className="text-sm text-brand-text/70">Where profit disappears as you grow</p>
              </Link>
              
              <Link href="/blog/operational-sustainability-efficiency" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Operational Sustainability & Efficiency</h4>
                <p className="text-sm text-brand-text/70">Building operations that scale profitably</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Scaling Service Businesses</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Service businesses face unique scaling challenges. You can't just manufacture more inventory or add more automation. Growth requires more people, and more people means more complexity. Successful service scaling requires building systems that maintain quality while increasing capacity.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/scaling-service-business-santa-cruz" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Scaling Service Businesses</h4>
                <p className="text-sm text-brand-text/70">How to grow service delivery without losing quality</p>
              </Link>
              
              <Link href="/blog/lost-what-made-you-special" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">You Lost What Made You Special</h4>
                <p className="text-sm text-brand-text/70">Preserving your unique value while scaling</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Managing Seasonal Growth</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Some businesses face predictable seasonal fluctuations. The challenge isn't just managing peak demand—it's building systems that can scale up and down without breaking, and maintaining profitability during slow periods.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/seasonal-business-operations" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Seasonal Business Operations</h4>
                <p className="text-sm text-brand-text/70">Managing growth during peak and off-peak seasons</p>
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            The Growth Mindset Shift
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            Sustainable growth requires a mindset shift. Instead of asking "How fast can we grow?" ask "How well can we grow?" Instead of "How many customers can we serve?" ask "How well can we serve our customers?" Instead of "How quickly can we hire?" ask "What systems do we need before we hire?"
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            The businesses that scale successfully are patient. They build foundations before adding floors. They say no to opportunities that don't fit. They prioritize sustainability over speed. This approach isn't as exciting as hockey-stick growth, but it's far more likely to result in a business that's still thriving in 5, 10, 20 years.
          </p>

          <div className="bg-brand-neutral/10 border border-brand-neutral rounded-xl p-8 my-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">
              Our Approach to Sustainable Scaling
            </h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              We help businesses identify and eliminate growth constraints without sacrificing what makes them special:
            </p>
            <ul className="space-y-3 text-brand-text/80 mb-6">
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">•</span>
                <span>Map your current operations to identify bottlenecks before they become crises</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">•</span>
                <span>Build operational systems that can handle 2-3x your current volume</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">•</span>
                <span>Create clarity around decision-making so founders aren't bottlenecks</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">•</span>
                <span>Document what makes you special so it doesn't get lost as you scale</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">•</span>
                <span>Build financial visibility so you understand true profitability</span>
              </li>
            </ul>
            <Link href="/services/business-flow" className="text-brand-accent font-bold hover:text-brand-accent-dark transition-colors">
              Learn more about our Business Flow Analysis →
            </Link>
          </div>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            Growth as a Byproduct, Not a Goal
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            The best growth doesn't come from chasing growth. It comes from building something valuable, serving customers exceptionally well, creating systems that allow you to scale that service, and letting growth be the natural result. When you build operational foundations that support sustainability, growth becomes inevitable—and manageable.
          </p>
        </div>

        <div className="bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Ready to Scale Sustainably?
          </h2>
          <p className="text-brand-text/70 mb-6 max-w-2xl mx-auto">
            We help businesses build the operational foundations for sustainable growth. Get your business flow assessment and see what's constraining your growth potential.
          </p>
          <Link href="/packages/flow-check" className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors">
            Get Your Flow Check
          </Link>
        </div>
      </div>
    </Section>
  )
}

