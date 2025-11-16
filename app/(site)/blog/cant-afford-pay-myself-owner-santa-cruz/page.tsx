import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: "Can't Afford to Pay Myself as the Owner in Santa Cruz",
  description: "You're working 60+ hours per week but taking home less than your employees. Here's why—and how to fix owner compensation without destroying your business."
}

export default function BlogPost() {
  const sections = [
    {
      title: "The Owner Compensation Crisis",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">This is the silent crisis in Santa Cruz small business:</p>

          <p><strong className="text-brand-text">You started this business for freedom and income.</strong> Instead, you're working more hours for less money than you made as an employee. Your staff makes $50-70K. You're taking home $30K. Something's very wrong.</p>

          <p><strong className="text-brand-text">"I'll pay myself when the business can afford it."</strong> That's what you said 2 years ago. Business is fine. Revenue is good. But you still can't afford to pay yourself fairly. When will it be enough?</p>

          <p><strong className="text-brand-text">You're subsidizing your business with unpaid labor.</strong> If you hired someone to do your job, you'd pay them $80-100K. You're doing it for $30K or less. That $50-70K difference is hidden subsidy. It's not sustainable.</p>

          <p><strong className="text-brand-text">Your personal finances are suffering.</strong> Can't save. Can't plan for retirement. Living paycheck to paycheck despite running a "successful" business. The stress is crushing.</p>

          <p><strong className="text-brand-text">You feel trapped.</strong> Can't afford to keep going like this. Can't afford to close. Can't afford to sell. Every option feels impossible. But staying in this position will break you.</p>
        </>
      )
    },
    {
      title: "Why Owner Compensation Fails",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Several factors create this problem:</p>

          <p><strong className="text-brand-text">You price based on what you think customers will pay.</strong> Not on what the business needs to generate. Your pricing doesn't include fair owner compensation. It can't, because you've never calculated it.</p>

          <p><strong className="text-brand-text">You treat yourself as the flexible expense.</strong> Rent must be paid. Employees must be paid. Vendors must be paid. You're the only one who can wait. So you always wait. And you never catch up.</p>

          <p><strong className="text-brand-text">You don't separate owner roles.</strong> You're the CEO, manager, employee, and investor. Each role deserves compensation. But you lump them together and pay yourself nothing for any of them.</p>

          <p><strong className="text-brand-text">Your profit margin is too thin.</strong> If there's barely profit after expenses, there's nothing to pay yourself. Thin margins work for corporations with volume. They don't work for small businesses that need owner income.</p>

          <p><strong className="text-brand-text">You grew revenue without growing profit.</strong> More customers, more revenue, same profit (or less). You added complexity and work without adding margin. Growth that doesn't increase owner income isn't real growth.</p>
        </>
      )
    },
    {
      title: "Calculate Your Real Compensation Need",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">First, determine what you actually need to earn:</p>

          <p><strong className="text-brand-text">Living expenses in Santa Cruz.</strong> What do you need monthly to live? Rent/mortgage, food, insurance, transportation, basics. Be realistic. In Santa Cruz, this is probably $5K-8K per month minimum. That's $60-96K annually.</p>

          <p><strong className="text-brand-text">Taxes and benefits.</strong> Self-employment tax is 15.3%. Plus income tax. Plus health insurance (not cheap). You need to gross 40-50% more than your take-home to cover these. If you need $70K net, you need $100-105K gross.</p>

          <p><strong className="text-brand-text">Savings and retirement.</strong> You're not building wealth through equity (yet). You need to save like an employee would. Add 10-15% for retirement. Another $10-15K annually.</p>

          <p><strong className="text-brand-text">Risk premium.</strong> You carry all the risk. No unemployment insurance. No paid time off. No job security. You should earn 20-30% more than you'd make as an employee for equivalent work. If you'd make $80K as an employee, you need $96-104K as an owner.</p>

          <p><strong className="text-brand-text">Your total number.</strong> Add it up. You probably need $100-150K annually to live, save, and compensate for risk in Santa Cruz as a business owner. That's your target. Anything less is unsustainable.</p>
        </>
      )
    },
    {
      title: "The Path to Fair Owner Compensation",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's how to fix this systematically:</p>

          <p><strong className="text-brand-text">1. Make owner salary a fixed cost.</strong> Not "what's left over." A line item in your budget like rent and payroll. Calculate your number ($100-150K). Divide by 12. That's your monthly owner salary. Build your business to support it.</p>

          <p><strong className="text-brand-text">2. Redesign pricing to include it.</strong> Your pricing must cover: COGS + overhead + employee labor + owner salary + 10-20% profit margin. If current pricing can't support this, pricing is wrong. Fix pricing first.</p>

          <p><strong className="text-brand-text">3. Increase revenue or reduce costs.</strong> If you need $10K more monthly for owner salary, either add $50-60K in new revenue (at current margins) or cut $10K in expenses. Run the numbers. What's more feasible?</p>

          <p><strong className="text-brand-text">4. Eliminate low-margin work.</strong> Stop doing things that generate revenue but no profit. That $5K client that takes 40 hours? They're costing you money when you factor in your time properly. Fire them.</p>

          <p><strong className="text-brand-text">5. Build profitability before growth.</strong> Don't chase revenue growth if it doesn't improve owner income. Focus on profit margin improvements, pricing optimization, and cost efficiency. Profitable first, big second.</p>
        </>
      )
    },
    {
      title: "Transition Strategy",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">You can't go from $30K to $120K overnight. Here's the path:</p>

          <p><strong className="text-brand-text">Phase 1: Pay yourself $50K (months 1-6).</strong> Bare minimum livable wage. Requires immediate pricing increases, cost cuts, or revenue growth. Focus on quick wins. This gets you out of poverty mode.</p>

          <p><strong className="text-brand-text">Phase 2: Pay yourself $75K (months 7-12).</strong> Approaching sustainable. Requires operational improvements, better margins, or significant revenue growth. You're investing in systems that support higher throughput.</p>

          <p><strong className="text-brand-text">Phase 3: Pay yourself $100K+ (months 13-24).</strong> Sustainable owner income. Business runs profitably. You're compensated fairly. From here, growth is optional, not mandatory. You've built a real business.</p>

          <p><strong className="text-brand-text">What if you can't see the path?</strong> If you can't envision getting to $100K owner income within 24 months, your business model might be broken. Consider pivoting, restructuring, or exiting. Life is too short to run an unprofitable business indefinitely.</p>
        </>
      )
    },
    {
      title: "Your 90-Day Owner Pay Fix",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's your action plan:</p>

          <p><strong className="text-brand-text">Week 1-2: Calculate the gap.</strong> What do you need annually? What are you currently taking? What's the monthly gap? Example: Need $120K, taking $36K, gap is $84K annually or $7K monthly. Face the number.</p>

          <p><strong className="text-brand-text">Week 3-4: Identify path to close gap.</strong> Pricing increases? New revenue? Cost cuts? Client firing? Run scenarios. What combination gets you to target? Be specific. "We need to raise prices 15% AND add $3K in new monthly revenue AND cut $2K in costs."</p>

          <p><strong className="text-brand-text">Month 2: Implement changes.</strong> Execute price increases. Launch new offerings. Cut unnecessary costs. Make hard decisions. The discomfort of change is less than the pain of staying broke.</p>

          <p><strong className="text-brand-text">Month 3: Measure and adjust.</strong> Did revenue increase? Did margins improve? Can you pay yourself more? If not, why? What's blocking progress? Fix that. Keep iterating until owner income grows.</p>

          <p><strong className="text-brand-text">Ongoing: Treat it like rent.</strong> Owner salary is not optional. It's not flexible. It's a fixed cost. If the business can't pay it, the business is broken. Fix the business or exit it. Don't spend years subsidizing a broken model.</p>
          
          <p className="text-brand-text/70 mt-6">Struggling with owner compensation? <Link href="/packages/flow-check">Book a Flow Check</Link> to analyze your financials and build your path to fair owner pay.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'Santa Cruz Business', href: '/blog/santa-cruz-business' },
        { label: 'Owner Compensation', href: '/blog/cant-afford-pay-myself-owner-santa-cruz' }
      ]} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>June 5, 2025</time>
            <span>•</span>
            <span>9 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Can't Afford to Pay Myself as the Owner</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">You're working 60+ hours per week but taking home less than your employees. Here's why—and how to fix owner compensation without destroying your business.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">The hardest truth in small business: you can be "successful" on paper while personally broke. Good revenue, happy customers, growing business—but you're taking home $3K per month while working 60-hour weeks. This isn't success. It's self-exploitation.</p>

          <p>You deserve to earn a living from your business. Here's how to make that happen.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Need help fixing owner compensation?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/packages/flow-check">Book a Flow Check</Link> to analyze your financials and build your path to sustainable owner income.</p>
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
                <p className="text-brand-text/70 text-sm">Understanding the revenue-profit gap.</p>
              </Link>
              <Link href="/blog/pricing-too-low-santa-cruz-cost-of-living" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Pricing Too Low to Cover Cost of Living</h4>
                <p className="text-brand-text/70 text-sm">Fix pricing to support owner compensation.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

