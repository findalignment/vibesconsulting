import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: "Revenue Looks Good But No Profit at End of Month in Santa Cruz",
  description: "You're busy. Money's coming in. But your bank account isn't growing. Where is it all going? Here's how to find the leaks and fix them."
}

export default function BlogPost() {
  const sections = [
    {
      title: "The Revenue-Profit Illusion",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">This is the most common complaint from Santa Cruz business owners:</p>

          <p><strong className="text-brand-text">"We're doing $50K per month. I'm working 60 hours a week. But I can't pay myself more than $3K."</strong></p>

          <p><strong className="text-brand-text">"Summer was our biggest season ever. Made $200K in three months. By October, the bank account is back to $5K."</strong></p>

          <p><strong className="text-brand-text">"We grew revenue 30% this year. But I have less money personally than last year."</strong></p>

          <p>Revenue feels like success. But revenue isn't profit. And in Santa Cruz, with high rents, expensive labor, and razor-thin margins, the gap between the two can be devastating.</p>

          <p>You're not failing. You're just measuring the wrong thing.</p>
        </>
      )
    },
    {
      title: "Why Santa Cruz Businesses Struggle With Profit",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Several factors make profitability especially hard here:</p>

          <p><strong className="text-brand-text">Fixed costs are brutal.</strong> Rent for commercial space in Santa Cruz is insane. $4K-10K+ per month for decent locations. That's $48K-120K in annual rent that has to be covered before you make a dollar of profit.</p>

          <p><strong className="text-brand-text">Labor costs are climbing.</strong> To attract anyone reliable, you're paying $18-25/hour minimum. Add payroll taxes, workers comp, and benefits, and that's $30-40/hour fully loaded. A team of 5 costs $300K-400K annually.</p>

          <p><strong className="text-brand-text">Seasonal revenue but year-round costs.</strong> You make money June-September. You spend it October-May. Without careful management, summer profits evaporate in winter burn.</p>

          <p><strong className="text-brand-text">Lifestyle creep.</strong> Business is going well, so you upgrade equipment, hire faster, expand inventory. Each decision is small. Cumulatively, they eliminate profit.</p>

          <p><strong className="text-brand-text">Hidden costs everywhere.</strong> Processing fees, software subscriptions, insurance, licensing, maintenance. Death by a thousand small expenses you barely notice.</p>
        </>
      )
    },
    {
      title: "The Profit Diagnostic: Finding Your Leaks",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's how to figure out where profit is disappearing:</p>

          <p><strong className="text-brand-text">1. Calculate your true gross margin.</strong> Revenue minus cost of goods sold (COGS). COGS is everything directly required to deliver your service or product. If you're below 60% gross margin, you have a pricing or COGS problem.</p>

          <p><strong className="text-brand-text">2. Map your fixed costs.</strong> Rent, insurance, utilities, salaried employees, software subscriptions—everything you pay regardless of revenue. Divide by monthly revenue. If fixed costs are over 40% of revenue, you have a structural problem.</p>

          <p><strong className="text-brand-text">3. Track variable costs.</strong> Everything that scales with revenue: hourly labor, materials, processing fees, commissions. These should be predictable percentages. If they're not, you don't have cost controls.</p>

          <p><strong className="text-brand-text">4. Categorize discretionary spending.</strong> Marketing, equipment purchases, renovations, consulting—things you choose to spend on. Look at last 6 months. Was it necessary? Did it generate return? This is where profit often leaks.</p>

          <p><strong className="text-brand-text">5. Calculate owner's draw.</strong> What are you actually taking out personally? Include salary, distributions, personal expenses run through business. Be honest. Is it sustainable based on profit, or are you eroding the business?</p>
        </>
      )
    },
    {
      title: "The Profitability Framework",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's the framework that works for Santa Cruz businesses:</p>

          <p><strong className="text-brand-text">Target: 60-70% Gross Margin.</strong> If you're a service business, aim for 65-70%. Product business, 60-65%. Below 60%, you're probably underpricing or over-delivering. Fix pricing first.</p>

          <p><strong className="text-brand-text">Fixed Costs: Under 35% of revenue.</strong> Rent, core staff, baseline operations. If fixed costs are 40%+, you need more revenue, lower rent, or fewer fixed expenses. This is your overhead constraint.</p>

          <p><strong className="text-brand-text">Variable Costs: 15-20% of revenue.</strong> Labor, materials, transaction fees—things that scale with sales. These should be relatively predictable. Track them weekly.</p>

          <p><strong className="text-brand-text">Operating Profit: 15-25% of revenue.</strong> What's left after COGS, fixed costs, and variable costs. This is your buffer for taxes, growth, and owner income. Below 10%, you're in danger.</p>

          <p><strong className="text-brand-text">Owner's Pay: 30-50% of operating profit.</strong> Take a reasonable salary or distribution. Save 30% for taxes. Reinvest 20-40% in growth. This ensures sustainability.</p>
        </>
      )
    },
    {
      title: "Fast Fixes for Immediate Profit Improvement",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">These changes can improve profit within 30-60 days:</p>

          <p><strong className="text-brand-text">Raise prices 10-15%.</strong> Most businesses are underpriced. Test a price increase with new customers first. Track close rate. If you don't lose more than 20% of conversions, the increase is profitable. Do the math—10% higher prices usually means 30-50% more profit.</p>

          <p><strong className="text-brand-text">Cut the bottom 20% of SKUs/services.</strong> You probably have offerings that generate revenue but destroy profit (high COGS, high labor, low margin). Kill them. Focus on profitable core.</p>

          <p><strong className="text-brand-text">Audit subscriptions and recurring costs.</strong> Software, services, memberships you don't use. You'll find $200-500/month of waste easily. That's $2,400-6,000 annual profit.</p>

          <p><strong className="text-brand-text">Renegotiate vendor terms.</strong> Longer payment terms improve cash flow. Volume discounts reduce COGS. Better credit card processing rates save thousands. You won't get it unless you ask.</p>

          <p><strong className="text-brand-text">Improve labor productivity.</strong> If tasks take longer than they should, you're overpaying for labor. Better processes, training, or tools reduce labor cost per unit of work. That flows straight to profit.</p>
        </>
      )
    },
    {
      title: "Building Your Profitability System",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Long-term profitability requires systems, not just cost cuts:</p>

          <p><strong className="text-brand-text">Implement weekly financial reviews.</strong> Revenue, gross margin, major expenses. 30 minutes every Monday. Spot problems when they're small, not after they've compounded for months.</p>

          <p><strong className="text-brand-text">Build a profit-first budget.</strong> Start with desired profit (15-20% of revenue). Add fixed costs. That leaves X for variable costs. Structure operations to fit the budget, don't budget to fit operations.</p>

          <p><strong className="text-brand-text">Track unit economics.</strong> What's the profit per customer, per service, per hour, per square foot? Knowing this lets you optimize for profitability, not just revenue.</p>

          <p><strong className="text-brand-text">Create spending approval thresholds.</strong> Under $100, anyone can spend. $100-500 requires manager approval. Over $500 requires owner approval. Prevents death-by-small-expenses.</p>

          <p><strong className="text-brand-text">Schedule annual pricing reviews.</strong> Costs increase every year. If prices don't increase, margins shrink. Review pricing every 12 months minimum. Adjust for cost increases at minimum.</p>
          
          <p className="text-brand-text/70 mt-6">Need help fixing your profit problem? <Link href="/packages/flow-check">Book a Flow Check</Link> to diagnose leaks and build your profitability system.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'Santa Cruz Business', href: '/blog/santa-cruz-business' },
        { label: 'Revenue vs Profit', href: '/blog/revenue-good-no-profit-santa-cruz' }
      ]} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>February 13, 2025</time>
            <span>•</span>
            <span>9 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Revenue Looks Good But No Profit at End of Month</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">You're busy. Money's coming in. But your bank account isn't growing. Where is it all going? Here's how to find the leaks and fix them.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">The worst feeling in business: working harder than ever, revenue growing, but your personal bank account staying flat—or shrinking. You're not alone. This is the most common problem I see in Santa Cruz businesses.</p>

          <p>The good news: if you're generating revenue, you're doing the hard part. Keeping profit is a systems problem. And systems problems are fixable.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Struggling with profitability?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/packages/flow-check">Book a Flow Check</Link> to diagnose your profit leaks and build a sustainable financial model.</p>
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
              <Link href="/blog/revenue-up-profits-flat" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Financial</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Revenue Is Up But Profits Are Flat</h4>
                <p className="text-brand-text/70 text-sm">Understanding the revenue-profit disconnect.</p>
              </Link>
              <Link href="/blog/managing-cash-flow-tourist-off-season" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Managing Cash Flow Between Tourist and Off-Season</h4>
                <p className="text-brand-text/70 text-sm">Smooth out seasonal cash flow extremes.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

