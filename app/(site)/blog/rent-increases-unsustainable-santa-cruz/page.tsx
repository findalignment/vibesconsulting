import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: "Rent Increases Making Business Unsustainable in Santa Cruz",
  description: "Your landlord just raised rent 20%. That's $1,500 more per month you need to cover. Can your business absorb it? Here's how to navigate rent increases without closing."
}

export default function BlogPost() {
  const sections = [
    {
      title: "The Santa Cruz Rent Crisis for Businesses",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Commercial rent in Santa Cruz is brutal and getting worse:</p>

          <p><strong className="text-brand-text">Rent increases are aggressive.</strong> 10-20% increases at renewal are common. Some landlords push 30-40% if they think market will support it. That's thousands more per month.</p>

          <p><strong className="text-brand-text">Limited commercial space.</strong> Santa Cruz doesn't have abundant retail or office space. When something becomes available, competition drives prices up. Landlords know you have few alternatives.</p>

          <p><strong className="text-brand-text">Prop 13 doesn't apply to commercial leases.</strong> Residential properties have rent control protections. Commercial properties don't. Landlords can increase rent to market rates at lease renewal without restriction.</p>

          <p><strong className="text-brand-text">Prime locations command insane premiums.</strong> Pacific Avenue, Westside, Pleasure Point locations can be $8K-15K+ per month for small spaces. That's $96K-180K annually before you make a single sale.</p>

          <p><strong className="text-brand-text">Your alternatives are limited.</strong> Move to a cheaper location and lose foot traffic. Move out of Santa Cruz and lose local identity. Close and restart elsewhere. None are good options when you've built a business.</p>
        </>
      )
    },
    {
      title: "When a Rent Increase Becomes Unsustainable",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's how to know if you can absorb the increase:</p>

          <p><strong className="text-brand-text">Calculate the new rent as a percentage of revenue.</strong> General rule: rent should be 8-12% of gross revenue for retail, 5-8% for service businesses. If new rent pushes you above 15%, you're in trouble unless you can grow revenue immediately.</p>

          <p><strong className="text-brand-text">Determine the monthly profit impact.</strong> If rent goes up $1,500/month, that's $18K annual profit gone. Do you have $18K in profit to give up? Or does this turn profit into loss?</p>

          <p><strong className="text-brand-text">Project required revenue increase.</strong> How much more revenue do you need to maintain current profit? If you need to grow 20%+ to absorb rent, that's not happening in 30 days. Be realistic.</p>

          <p><strong className="text-brand-text">Consider your lease term.</strong> If this is a 1-year lease, you might absorb it temporarily. If this is 3-5 years with annual increases, you're signing up for compounding pain. Future increases will be based on the new higher rate.</p>

          <p><strong className="text-brand-text">Assess your negotiating position.</strong> Are you a good tenant? Have you been there long? Is the space hard to fill? Your leverage matters in negotiations.</p>
        </>
      )
    },
    {
      title: "Negotiation Strategies That Actually Work",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Don't just accept the increase. Negotiate. Here's how:</p>

          <p><strong className="text-brand-text">Counter with data.</strong> Research comparable spaces. Show what similar locations rent for. If they're asking above market, point it out. Come with numbers, not emotions.</p>

          <p><strong className="text-brand-text">Offer a longer term for better rate.</strong> Landlords value stability. "I can do the increase if we sign 5 years instead of 3, with capped annual increases at 3%." Predictability has value to them.</p>

          <p><strong className="text-brand-text">Request phased increases.</strong> "Instead of 20% now, let's do 7% per year for three years." Spreads the pain, gives you time to adjust operations and pricing.</p>

          <p><strong className="text-brand-text">Ask for tenant improvements.</strong> "I'll accept the increase if you cover [parking lot resurfacing, HVAC replacement, storefront refresh]." Convert cash into capital improvements that benefit the business.</p>

          <p><strong className="text-brand-text">Negotiate out early if needed.</strong> "I can't sustain this rate. Can we agree on 6 months to find a replacement tenant, allowing me to close gracefully?" Better than breaking lease and getting sued.</p>

          <p><strong className="text-brand-text">Get creative with terms.</strong> Percentage rent (base + % of revenue), seasonal adjustments, revenue-sharing, reduced square footage. Everything is negotiable if both sides benefit.</p>
        </>
      )
    },
    {
      title: "Operational Adjustments to Absorb Rent Increases",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">If you're staying, you need to cover the increase. Here's how:</p>

          <p><strong className="text-brand-text">Immediate price increase.</strong> If rent goes up $1,500/month and your gross margin is 60%, you need $2,500 more monthly revenue to maintain profit. That's roughly a 5-10% price increase for most businesses. Implement immediately.</p>

          <p><strong className="text-brand-text">Cut low-margin products/services.</strong> Focus on your highest-profit offerings. Drop things that generate revenue but kill margin. Better to do less at higher profit than more at lower margin.</p>

          <p><strong className="text-brand-text">Increase revenue per customer.</strong> Upsells, add-ons, packages. If you can't get more customers, get more from existing customers. Higher ticket averages offset rent increases.</p>

          <p><strong className="text-brand-text">Reduce other costs aggressively.</strong> If rent takes more of your budget, everything else needs to shrink. Labor efficiency, vendor negotiations, subscription cuts. Find $500-1000 in monthly savings elsewhere.</p>

          <p><strong className="text-brand-text">Maximize space productivity.</strong> If you're paying more per square foot, generate more revenue per square foot. Better layout, better merchandising, additional services that leverage existing space.</p>
        </>
      )
    },
    {
      title: "When to Consider Moving or Closing",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Sometimes the math doesn't work. Here's how to know when to exit:</p>

          <p><strong className="text-brand-text">The new rent exceeds 15% of revenue.</strong> At that level, rent is choking profitability. Unless you're in an extremely high-margin business, this is unsustainable.</p>

          <p><strong className="text-brand-text">You need to double prices to stay profitable.</strong> If the price increase required to cover rent would eliminate your customer base, the location isn't viable anymore.</p>

          <p><strong className="text-brand-text">You'd need 50%+ revenue growth to maintain profit.</strong> That's not happening organically. And aggressive growth often kills margins further through increased costs and inefficiency.</p>

          <p><strong className="text-brand-text">Your personal income would drop below livable.</strong> If covering rent means you can't pay yourself enough to survive, you're subsidizing a business that doesn't work. That's not sustainable.</p>

          <p><strong className="text-brand-text">Alternatives exist that preserve your business.</strong> Maybe you can pivot to online, mobile, or home-based. Maybe a cheaper location works. Exit doesn't mean failure if you preserve the brand and customer relationships.</p>
        </>
      )
    },
    {
      title: "Your Action Plan for Rent Negotiations",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's what to do when you get a rent increase notice:</p>

          <p><strong className="text-brand-text">Week 1: Analyze the impact.</strong> Run the numbers. Calculate new rent as % of revenue. Determine profit impact. Model different scenarios (stay, negotiate, move, close). Make a decision tree based on outcomes.</p>

          <p><strong className="text-brand-text">Week 2: Research alternatives.</strong> Look at other available spaces. What do they cost? What would moving cost? Is there a viable alternative? This gives you negotiating leverage.</p>

          <p><strong className="text-brand-text">Week 3: Prepare your counteroffer.</strong> Based on your analysis and alternatives, what terms work for you? Be specific. Have a walk-away number. Know your leverage points.</p>

          <p><strong className="text-brand-text">Week 4: Negotiate.</strong> Present your counter professionally. Show data. Explain your constraints. Propose creative solutions. Get everything in writing. Don't sign anything until terms are final.</p>

          <p><strong className="text-brand-text">Week 5-6: Execute your plan.</strong> If you negotiated successfully, implement operational changes to cover the increase. If negotiation failed, execute your alternative (move, pivot model, or close gracefully).</p>
          
          <p className="text-brand-text/70 mt-6">Facing a rent increase and need help analyzing options? <Link href="/packages/flow-check">Book a Flow Check</Link> to model scenarios and make the right decision.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'Santa Cruz Business', href: '/blog/santa-cruz-business' },
        { label: 'Managing Rent Increases', href: '/blog/rent-increases-unsustainable-santa-cruz' }
      ]} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>June 20, 2025</time>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Rent Increases Making Business Unsustainable in Santa Cruz</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">Your landlord just raised rent 20%. That's $1,500 more per month you need to cover. Can your business absorb it? Here's how to navigate rent increases without closing.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">Few things are more stressful than opening a lease renewal notice and seeing a massive rent increase. It feels like your landlord is forcing you out. And sometimes, they are.</p>

          <p>But before you panic or give up, understand your options. Some rent increases can be absorbed, some can be negotiated, and some signal it's time to make a strategic move.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Need help navigating a rent increase?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/packages/flow-check">Book a Flow Check</Link> to analyze your options and create your action plan.</p>
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
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Revenue Looks Good But No Profit at End of Month</h4>
                <p className="text-brand-text/70 text-sm">Fix profit leaks to absorb cost increases.</p>
              </Link>
              <Link href="/blog/revenue-up-profits-flat" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Financial</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Revenue Is Up But Profits Are Flat</h4>
                <p className="text-brand-text/70 text-sm">Understanding cost structure and profitability.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

