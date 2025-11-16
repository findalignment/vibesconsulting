import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: "Pricing Too Low to Cover Santa Cruz Cost of Living: How to Fix It",
  description: "Your prices made sense 5 years ago. But costs have exploded. Your pricing hasn't kept up. Here's how to raise prices without losing customers."
}

export default function BlogPost() {
  const sections = [
    {
      title: "The Pricing-Reality Gap",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Most Santa Cruz businesses are chronically underpriced:</p>

          <p><strong className="text-brand-text">You set prices years ago.</strong> When rent was $3K, labor was $15/hour, and costs were manageable. You've added services, improved quality, but haven't touched pricing. Meanwhile, costs doubled.</p>

          <p><strong className="text-brand-text">You're afraid to raise prices.</strong> "Customers will leave." "Competitors are cheaper." "People already complain about cost." So you keep prices flat while expenses climb. Your margin vanishes.</p>

          <p><strong className="text-brand-text">You're competing with yourself.</strong> Low prices attract price-sensitive customers who'll leave for anyone cheaper. You trained your market to expect discount pricing. Now you're trapped.</p>

          <p><strong className="text-brand-text">You don't know your true costs.</strong> You think you're making money on that $50 service. But when you factor in labor, overhead, materials, and your time, you're losing money. Ignorance feels better than reality.</p>

          <p><strong className="text-brand-text">You can't pay yourself fairly.</strong> After covering costs, there's nothing left. You're subsidizing customer discounts with your own unpaid labor. That's not a business—it's an expensive hobby.</p>
        </>
      )
    },
    {
      title: "Calculate Your Real Cost of Business",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Before you can price correctly, you need to know what things actually cost:</p>

          <p><strong className="text-brand-text">Direct costs per unit.</strong> Labor, materials, supplies—everything directly required to deliver one unit of your product/service. This is your floor. Price below this and you lose money on every sale.</p>

          <p><strong className="text-brand-text">Overhead allocation.</strong> Rent, utilities, insurance, software, equipment, marketing—divide by units sold. Every sale must contribute to covering overhead. If your overhead is $10K/month and you sell 500 units, each unit carries $20 of overhead.</p>

          <p><strong className="text-brand-text">Owner compensation.</strong> What should you earn? Add it to costs. If you need $80K/year ($6,667/month), that cost must be covered by pricing. You're an employee too.</p>

          <p><strong className="text-brand-text">Profit margin.</strong> After all costs including your salary, you need 10-20% profit for taxes, reinvestment, and buffer. This isn't greed—it's sustainability.</p>

          <p><strong className="text-brand-text">Santa Cruz adjustment.</strong> Your costs are 30-50% higher than national averages (rent, labor, insurance). Your pricing must reflect local cost structure, not generic industry benchmarks.</p>
        </>
      )
    },
    {
      title: "The Price Increase Strategy",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's how to raise prices without destroying your business:</p>

          <p><strong className="text-brand-text">Increase in stages, not all at once.</strong> If you need to raise prices 30%, do 10% now, 10% in 6 months, 10% in a year. Gradual increases are less shocking than one massive jump.</p>

          <p><strong className="text-brand-text">Grandfather existing customers temporarily.</strong> New customers pay new prices immediately. Existing customers get 60-90 days at old prices, then transition. Rewards loyalty while moving to sustainable pricing.</p>

          <p><strong className="text-brand-text">Add value before increasing.</strong> Raise prices after improving something—service, product, experience. Give customers something to point to. "Yes, we raised prices, AND we added X, Y, Z."</p>

          <p><strong className="text-brand-text">Communicate clearly and confidently.</strong> "Our costs have increased significantly. To maintain quality and service, we're adjusting pricing to sustainable levels." Don't apologize. Don't over-explain. State facts.</p>

          <p><strong className="text-brand-text">Expect to lose 10-20% of customers.</strong> The most price-sensitive customers will leave. That's okay. They were your least profitable customers anyway. You're trading volume for margin. The math works.</p>
        </>
      )
    },
    {
      title: "Pricing Strategies for Santa Cruz",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Pricing approaches that work locally:</p>

          <p><strong className="text-brand-text">Value-based pricing, not cost-plus.</strong> Don't price based on costs. Price based on value delivered. If you save customers time, stress, or money, charge accordingly. Value pricing captures customer benefit, not just your costs.</p>

          <p><strong className="text-brand-text">Tiered pricing structures.</strong> Good/better/best options. Basic tier for price-sensitive customers. Premium tier for people who want the best. Most will choose middle. Gives customers choice while protecting margins.</p>

          <p><strong className="text-brand-text">Local vs. tourist pricing.</strong> Locals get membership/loyalty pricing. Tourists pay full retail. Different customers, different price sensitivity, different pricing. Both segments can be profitable.</p>

          <p><strong className="text-brand-text">Packages over à la carte.</strong> Bundling increases perceived value and average transaction. $150 package feels better than $50 + $50 + $50 even though it's the same price. Packaging improves conversion and margin.</p>

          <p><strong className="text-brand-text">Subscription or membership models.</strong> Predictable recurring revenue. Higher lifetime value. Customers commit upfront. You get cash flow stability. Win-win if you can make it work for your business model.</p>
        </>
      )
    },
    {
      title: "Handling Price Objections",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">When customers push back on pricing:</p>

          <p><strong className="text-brand-text">"That's more expensive than before."</strong> Response: "Yes, costs have increased significantly—rent, labor, materials. To maintain the quality you expect, we had to adjust pricing." State facts, don't apologize.</p>

          <p><strong className="text-brand-text">"Your competitor is cheaper."</strong> Response: "We're priced based on the value we provide. Here's what you get with us [list differentiators]. You're welcome to compare, but we stand behind our pricing."</p>

          <p><strong className="text-brand-text">"I can't afford that."</strong> Response: "I understand. We have [lower-tier option] that might work better for your budget. Or we can revisit when timing is better for you." Offer alternatives, don't discount.</p>

          <p><strong className="text-brand-text">"Can you give me a discount?"</strong> Response: "Our pricing reflects the value we deliver. We don't discount because that's not fair to customers who paid full price. But we do have [loyalty program/package option] that provides better value."</p>

          <p><strong className="text-brand-text">The customer leaves.</strong> That's fine. Not every customer is your customer. Chasing price-shoppers destroys margins and attracts wrong customers. Let them go. Focus on customers who value what you offer.</p>
        </>
      )
    },
    {
      title: "Your Pricing Transformation Plan",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's how to fix your pricing:</p>

          <p><strong className="text-brand-text">Week 1: Calculate true costs.</strong> Every product/service—what does it really cost to deliver? Include all costs: direct, overhead, your time. Build a complete cost model. Face reality.</p>

          <p><strong className="text-brand-text">Week 2: Research competitive pricing.</strong> What do competitors charge? Not to match them, but to understand market positioning. Are you the cheapest? Why? Is that strategic or accidental?</p>

          <p><strong className="text-brand-text">Week 3: Design new pricing structure.</strong> Based on costs, value, and positioning—what should you charge? Build tiers if appropriate. Plan the transition strategy. Get specific.</p>

          <p><strong className="text-brand-text">Week 4: Communicate and implement.</strong> Announce new pricing. Update website, menus, quotes. Train staff on messaging. Answer objections confidently. Transition begins.</p>

          <p><strong className="text-brand-text">Month 2-3: Monitor and adjust.</strong> Track conversion rates, customer feedback, revenue, and profitability. If you're losing less than 20% of customers, the increase worked. If you're losing more, maybe you need better positioning, not lower prices.</p>
          
          <p className="text-brand-text/70 mt-6">Need help fixing your pricing? <Link href="/packages/flow-check">Book a Flow Check</Link> to analyze costs, calculate proper pricing, and build your transition strategy.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'Santa Cruz Business', href: '/blog/santa-cruz-business' },
        { label: 'Pricing Strategy', href: '/blog/pricing-too-low-santa-cruz-cost-of-living' }
      ]} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>June 16, 2025</time>
            <span>•</span>
            <span>9 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Pricing Too Low to Cover Santa Cruz Cost of Living</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">Your prices made sense 5 years ago. But costs have exploded. Your pricing hasn't kept up. Here's how to raise prices without losing customers.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">The most common problem I see in Santa Cruz businesses: pricing that made sense in 2019 but is unsustainable in 2024. Rent doubled. Labor costs jumped 40%. Everything is more expensive. Except your prices.</p>

          <p>You're not being generous—you're slowly going out of business. Here's how to fix your pricing before it's too late.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Need help with pricing strategy?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/packages/flow-check">Book a Flow Check</Link> to calculate your true costs and design sustainable pricing.</p>
            <Link href="/packages/flow-check" className="text-current-500 hover:underline text-sm">Learn about Flow Check →</Link>
          </div>
        
          {/* Hub Navigation */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <Link href="/blog/santa-cruz-business" className="inline-flex items-center gap-2 text-current-500 hover:text-current-400 transition-colors mb-8">
              <span>←</span> Back to Santa Cruz Business Hub
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-brand-text mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/revenue-good-no-profit-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Revenue Looks Good But No Profit</h4>
                <p className="text-brand-text/70 text-sm">Fix the revenue-profit disconnect.</p>
              </Link>
              <Link href="/blog/revenue-up-profits-flat" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Financial</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Revenue Is Up But Profits Are Flat</h4>
                <p className="text-brand-text/70 text-sm">Understanding margin and profitability.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

