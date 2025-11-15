import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { generateMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Managing Cash Flow Between Tourist and Off-Season in Santa Cruz',
  description: 'Cash flow management strategies for seasonal Santa Cruz businesses. Learn to build reserves, manage expenses, and survive the transition between peak and slow seasons.',
  keywords: 'seasonal cash flow, santa cruz business finance, off-season cash management, tourist season revenue, cash flow planning'
})

export default function ManagingSeasonalCashFlow() {
  const sections = [
    {
      title: 'The Seasonal Cash Flow Reality',
      content: (
        <>
          <p className="mb-4">
            Most Santa Cruz business owners understand conceptually that cash flow is seasonal. What they don't understand is how brutally fast the transition happens and how little room for error exists between peak and trough.
          </p>
          <p className="mb-4">
            In September, you're depositing $50,000/month. By November, you're lucky to hit $15,000. Your rent didn't change. Your insurance didn't change. Your core staff didn't disappear. But your revenue dropped 70%. If you haven't prepared for this transition, you're now in survival mode—cutting costs in panic, missing vendor payments, and making desperate decisions that hurt your business long-term.
          </p>
          <p className="mb-4">
            Successful seasonal businesses don't react to cash flow swings—they anticipate them. They build financial systems that smooth out the peaks and valleys, creating predictable operations even when revenue is anything but predictable.
          </p>
        </>
      )
    },
    {
      title: 'Understanding Your Cash Flow Pattern',
      content: (
        <>
          <p className="mb-4">
            Before you can manage seasonal cash flow, you need to understand your specific pattern with precision. "Summer is busy, winter is slow" isn't precise enough.
          </p>

          <p className="mb-6">
            <strong>What to Track (Monthly for Past 2-3 Years):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Gross revenue:</strong> Total sales before any expenses</li>
            <li><strong>Cost of goods sold:</strong> Variable costs that scale with revenue</li>
            <li><strong>Fixed operating expenses:</strong> Rent, insurance, base salaries, utilities</li>
            <li><strong>Variable operating expenses:</strong> Marketing, seasonal labor, supplies</li>
            <li><strong>Net cash flow:</strong> What's actually left after everything</li>
            <li><strong>Cash reserves:</strong> How much you have in the bank at month-end</li>
          </ul>

          <p className="mb-4 mt-6">
            Once you have this data, create a simple chart showing revenue and expenses month-by-month. You'll see exactly when the gap opens, how wide it gets, and when it closes. This isn't abstract theory—it's your business's financial reality.
          </p>

          <p className="mb-6 mt-6">
            <strong>Calculate Your Critical Numbers:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Monthly burn rate:</strong> Fixed expenses you can't eliminate</li>
            <li><strong>Off-season shortfall:</strong> Gap between winter revenue and expenses</li>
            <li><strong>Months of negative cash flow:</strong> How long the gap lasts</li>
            <li><strong>Total reserve needed:</strong> Shortfall × months (usually $30K-$150K+)</li>
          </ul>

          <p className="mb-4">
            For most Santa Cruz seasonal businesses, you need 4-6 months of operating expenses saved to survive winter comfortably. Less than that and you're operating on hope, not strategy.
          </p>
        </>
      )
    },
    {
      title: 'Building Your Seasonal Reserve Fund',
      content: (
        <>
          <p className="mb-4">
            The fundamental rule of seasonal cash flow management: <strong>Build your war chest during peak season, draw it down during slow season, repeat.</strong> Simple concept. Incredibly hard to execute when summer profits are tempting you to spend.
          </p>

          <p className="mb-6 mt-6">
            <strong>The 40% Rule:</strong>
          </p>
          <p className="mb-4">
            Set aside 40% of peak season gross profit specifically for off-season operating expenses. Not for expansion, not for equipment upgrades, not for increased owner compensation. This money is sacred—it's your winter survival fund.
          </p>

          <p className="mb-6 space-y-2">
            <strong>How it works:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>May-September: Every dollar of profit, 40% goes to separate savings account</li>
            <li>October: Last month of accumulation, smaller contributions</li>
            <li>November-March: Draw from reserve to cover expense/revenue gap</li>
            <li>April: Minimal draw or slight accumulation as season starts</li>
            <li>May: Cycle restarts</li>
          </ul>

          <p className="mb-4 mt-6">
            This requires discipline when times are good. When you're crushing it in July and have an extra $20,000 in the bank, the temptation to upgrade equipment or increase your salary is massive. Resist. That money needs to cover December and January when revenue is a third of what it is now.
          </p>

          <p className="mb-6 mt-6">
            <strong>Alternative: Percentage of Revenue Method</strong>
          </p>
          <p className="mb-4">
            If 40% of profit feels arbitrary, calculate exactly what you need: Total off-season shortfall ÷ peak season months = monthly savings target. This gives you a specific dollar amount to set aside each month during peak season.
          </p>
        </>
      )
    },
    {
      title: 'Expense Timing Strategies',
      content: (
        <>
          <p className="mb-4">
            Smart cash flow management isn't just about having money—it's about timing expenses to match revenue. When you pay matters as much as what you pay.
          </p>

          <p className="mb-6 mt-6">
            <strong>Concentrate Expenses During Peak Season:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Annual insurance payments:</strong> Pay in July/August when cash is abundant</li>
            <li><strong>Equipment purchases:</strong> Buy during peak season, not when cash is tight</li>
            <li><strong>Major repairs/maintenance:</strong> Schedule for summer when you can afford them</li>
            <li><strong>Inventory for following year:</strong> Stock up during peak season at negotiated rates</li>
            <li><strong>Marketing campaigns:</strong> Pay upfront in summer for spring/summer advertising</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Defer or Spread Expenses to Off-Season:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Professional services:</strong> Accounting, legal can often be done in winter</li>
            <li><strong>Training and education:</strong> Winter is perfect for staff development</li>
            <li><strong>Strategic planning:</strong> Do this when you have time to think</li>
            <li><strong>Renovations:</strong> If you must, do them during slow season when closed</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Negotiate Payment Terms With Vendors:</strong>
          </p>
          <p className="mb-4">
            Talk to your major vendors before off-season hits. Many will work with you:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Extended payment terms (60-90 days instead of 30)</li>
            <li>Seasonal billing that matches your cash flow</li>
            <li>Summer deposits with winter delivery (pay now, get product later)</li>
            <li>Payment plans that spread large invoices across multiple months</li>
          </ul>

          <p className="mb-4 mt-6">
            The key is proactive communication. Call your vendors in September/October, before you're desperate. Explain your seasonal pattern and ask what's possible. Most would rather work with you than chase unpaid invoices.
          </p>
        </>
      )
    },
    {
      title: 'Revenue Smoothing Strategies',
      content: (
        <>
          <p className="mb-4">
            While managing expenses helps, creating more consistent revenue is even better. The goal isn't to eliminate seasonality completely (impossible in Santa Cruz), but to reduce the amplitude of swings.
          </p>

          <p className="mb-6 mt-6">
            <strong>1. Recurring Revenue Models</strong>
          </p>
          <p className="mb-4">
            Memberships, subscriptions, and retainers create predictable monthly revenue that persists through slow seasons.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Fitness studios:</strong> Monthly memberships vs. drop-in classes</li>
            <li><strong>Retail shops:</strong> Subscription boxes or loyalty programs</li>
            <li><strong>Restaurants:</strong> Meal plans, wine clubs, catering contracts</li>
            <li><strong>Service businesses:</strong> Retainer agreements, maintenance plans</li>
            <li><strong>Tour operators:</strong> Annual passes, locals-only memberships</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>2. Gift Cards and Pre-Sales</strong>
          </p>
          <p className="mb-4">
            Sell summer services during winter (or vice versa). This moves revenue from slow periods to peak periods.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>December holiday gift card sales for summer services</li>
            <li>Spring "summer package" pre-sales at discount</li>
            <li>Class or service packs sold in winter, redeemable in summer</li>
            <li>Early-bird pricing for peak season bookings</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>3. Counter-Seasonal Offerings</strong>
          </p>
          <p className="mb-4">
            Create products or services that appeal during your traditionally slow period.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Surf shops:</strong> Wetsuit sales, repairs, winter surf lessons for locals</li>
            <li><strong>Tour operators:</strong> Whale watching, storm watching, hiking tours</li>
            <li><strong>Restaurants:</strong> Holiday catering, winter comfort food specials</li>
            <li><strong>Fitness:</strong> New Year challenge programs, corporate wellness</li>
          </ul>

          <p className="mb-4 mt-8">
            None of these will make winter as profitable as summer. That's not the goal. The goal is reducing the gap so your reserves last longer and recovery is faster.
          </p>
        </>
      )
    },
    {
      title: 'Using Lines of Credit Strategically',
      content: (
        <>
          <p className="mb-4">
            A business line of credit can be a useful tool for managing seasonal cash flow—but only if used correctly. Used wrong, it's a trap that makes your financial situation worse.
          </p>

          <p className="mb-6 mt-6">
            <strong>When Lines of Credit Make Sense:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Bridge short-term gaps:</strong> When timing of payments doesn't match revenue</li>
            <li><strong>Emergency buffer:</strong> Unexpected expense during slow season</li>
            <li><strong>Growth investments:</strong> Opportunity that will generate quick return</li>
            <li><strong>Smooth inevitable transitions:</strong> Known seasonal patterns</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>How to Use It Right:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Establish line of credit during peak season (easier approval)</li>
            <li>Only draw what you need, when you need it</li>
            <li>Have a specific repayment plan before drawing</li>
            <li>Pay it off completely during next peak season</li>
            <li>Don't use it to fund expansion you can't afford</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Warning Signs You're Using It Wrong:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Balance never goes to zero (you're using debt to fund operations)</li>
            <li>Drawing during peak season (cash flow problem, not seasonal timing)</li>
            <li>Using it to cover owner compensation</li>
            <li>Multiple years of carrying balance year-round</li>
            <li>Drawing without knowing how you'll repay</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>The Golden Rule:</strong> A line of credit should smooth seasonal timing differences, not fund an unprofitable business. If you can't pay it off during peak season, you don't have a cash flow problem—you have a profitability problem.
          </p>
        </>
      )
    },
    {
      title: 'Creating a 12-Month Cash Flow Forecast',
      content: (
        <>
          <p className="mb-4">
            Flying blind is expensive. Create a simple 12-month cash flow forecast that shows expected revenue, expenses, and cash position for every month ahead.
          </p>

          <p className="mb-6">
            <strong>What to Include:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Expected monthly revenue (based on past years + adjustments)</li>
            <li>Fixed expenses (rent, insurance, base salaries)</li>
            <li>Variable expenses (scaled to expected revenue)</li>
            <li>Seasonal expenses (things that happen certain months)</li>
            <li>Starting cash position</li>
            <li>Ending cash position</li>
            <li>Minimum cash threshold (danger zone if you go below this)</li>
          </ul>

          <p className="mb-4 mt-6">
            Update this forecast monthly with actual results. Compare forecast to reality. Adjust future months based on what you're learning. This isn't academic—it's how you avoid cash flow emergencies before they happen.
          </p>

          <p className="mb-4">
            When your forecast shows you'll hit minimum cash threshold in January, you know in July to cut discretionary expenses and build bigger reserves. When reality outperforms forecast in October, you know you can relax slightly. Knowledge removes panic.
          </p>
        </>
      )
    },
    {
      title: 'The Year-One vs Year-Five Reality',
      content: (
        <>
          <p className="mb-4">
            First-year seasonal businesses almost always struggle with cash flow. They haven't experienced the full cycle, don't have reserves built, and didn't save enough during their first peak season. This is normal.
          </p>
          <p className="mb-4">
            By year three, you should have one full season of reserves. By year five, you should have cash flow management dialed in—you know exactly when to save, when to draw, and how much you need. If you're in year five and still panicking every winter, you haven't learned the lessons your business is teaching you.
          </p>

          <p className="mb-6 mt-6">
            <strong>Building Reserves Over Time:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Year 1:</strong> Survive however you can (loan, credit, side work)</li>
            <li><strong>Year 2:</strong> Save enough to avoid debt next winter (partial success likely)</li>
            <li><strong>Year 3:</strong> Build full season of reserves (4-6 months expenses)</li>
            <li><strong>Year 4:</strong> Operate from reserves comfortably, refine expense timing</li>
            <li><strong>Year 5+:</strong> Cash flow is predictable, reserves replenish automatically</li>
          </ul>

          <p className="mb-4 mt-6">
            This progression requires patience and discipline. You can't shortcut it. But once you're there, seasonal cash flow stops being a crisis and becomes just another operational rhythm you manage.
          </p>
        </>
      )
    }
  ]

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-text">
            Managing Cash Flow Between Tourist and Off-Season
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Build financial systems that smooth out seasonal revenue swings. Learn to build reserves, time expenses, and create predictable operations even when revenue isn't predictable.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help With Financial Planning and Cash Flow?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help seasonal Santa Cruz businesses build financial systems and forecasts that take the panic out of cash flow management. Our Flow Check includes cash flow analysis and reserve planning tailored to your seasonal pattern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/packages/flow-check" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Get Your Flow Check
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Talk About Your Cash Flow
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

