import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: "Managing Cash Flow Between Tourist and Off-Season in Santa Cruz",
  description: "Cash flow swings from feast to famine. Learn how to smooth out seasonal extremes and maintain healthy cash flow year-round."
}

export default function BlogPost() {
  const sections = [
    {
      title: "The Cash Flow Roller Coaster",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Santa Cruz seasonal businesses face a brutal pattern:</p>

          <p><strong className="text-brand-text">June-September: Cash floods in.</strong> You're depositing $15K-30K+ per week. Bank account grows. Bills get paid easily. You feel financially comfortable. Maybe even confident.</p>

          <p><strong className="text-brand-text">October: Things slow down.</strong> Revenue drops 30-40% but you're still okay. Summer savings cover the gap. You tell yourself it's temporary.</p>

          <p><strong className="text-brand-text">November-February: The squeeze.</strong> Revenue drops another 30-50%. Now you're at 30-40% of summer levels. But rent, insurance, utilities, and core staff stay the same. You're burning $5K-10K per month more than you're bringing in.</p>

          <p><strong className="text-brand-text">March-May: Recovery mode.</strong> Revenue picks back up, but you're depleted. You spent your reserves. Now you're playing catch-up, deferring investments, and hoping to survive until summer refills the tank.</p>

          <p>This cycle is exhausting. And it's avoidable.</p>
        </>
      )
    },
    {
      title: "Why Traditional Cash Flow Advice Doesn't Work Here",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Most cash flow advice assumes relatively consistent revenue. That doesn't work in Santa Cruz.</p>

          <p><strong className="text-brand-text">"Keep 3 months of expenses in reserve."</strong> Great, but which 3 months? Summer months or winter months? Your winter burn rate is 2-3x your summer burn rate when you account for lower revenue.</p>

          <p><strong className="text-brand-text">"Smooth out revenue with recurring income."</strong> Easier said than done when your entire market disappears for 4 months.</p>

          <p><strong className="text-brand-text">"Reduce expenses when revenue drops."</strong> You can't cut rent. You can't cut insurance. You need skeleton staff to stay open. Your fixed costs don't flex with revenue.</p>

          <p>You need a cash flow system designed for extreme seasonality, not normal business cycles.</p>
        </>
      )
    },
    {
      title: "The Santa Cruz Seasonal Cash Flow System",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's the system that works:</p>

          <p><strong className="text-brand-text">1. Calculate your winter burn rate.</strong> Add up November-February expenses. Include everything: rent, utilities, insurance, minimum staffing, inventory maintenance, marketing. Divide by 4. That's your average monthly winter burn.</p>

          <p><strong className="text-brand-text">2. Calculate your winter revenue baseline.</strong> What's your realistic low-end revenue November-February? Not what you hope for—what actually happens in slow months. Be honest.</p>

          <p><strong className="text-brand-text">3. Calculate your monthly winter deficit.</strong> Winter burn rate minus winter revenue = monthly deficit. Multiply by 4. That's how much reserve you need to build during summer.</p>

          <p><strong className="text-brand-text">4. Build your reserve systematically.</strong> Divide your winter deficit by your high-season months (typically June-September = 4 months, but adjust for your business). Bank that amount every month during high season. Automatically. Before you spend on anything else.</p>

          <p><strong className="text-brand-text">5. Create a visual cash flow timeline.</strong> Map every month. Show expected revenue, expected expenses, and expected cash position. Update it monthly. This removes surprises.</p>
        </>
      )
    },
    {
      title: "Advanced Cash Flow Tactics",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Once you have the basics covered, these tactics smooth things further:</p>

          <p><strong className="text-brand-text">Negotiate seasonal payment terms.</strong> Some vendors will let you pay more in summer, less in winter. Rent is harder, but some landlords will work with established tenants on seasonal adjustments.</p>

          <p><strong className="text-brand-text">Build strategic local partnerships.</strong> Winter revenue often comes from locals. Partner with complementary businesses to create winter packages, cross-promotions, and local-focused events.</p>

          <p><strong className="text-brand-text">Pre-sell for next season.</strong> Gift certificates, seasonal passes, membership renewals. Selling summer services in winter generates off-season cash flow.</p>

          <p><strong className="text-brand-text">Use off-season for receivables.</strong> If you have any B2B or invoiced work, schedule those projects for winter when you need cash flow most.</p>

          <p><strong className="text-brand-text">Plan major expenses for shoulder season.</strong> Equipment purchases, renovations, inventory orders—do them in April-May or October when cash is available but you're not slammed with customers.</p>
        </>
      )
    },
    {
      title: "Common Cash Flow Mistakes to Avoid",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">These mistakes kill Santa Cruz businesses every year:</p>

          <p><strong className="text-brand-text">Spending summer profits on summer expenses.</strong> That new equipment, extra marketing, additional inventory—it feels justified when cash is flowing. But if it's not generating winter revenue, you're borrowing from your winter fund.</p>

          <p><strong className="text-brand-text">Overstaffing summer for convenience.</strong> Extra hands make summer easier. But every additional employee in summer needs to generate enough profit to cover their winter absence. Otherwise you're subsidizing summer comfort with winter stress.</p>

          <p><strong className="text-brand-text">Waiting until October to panic.</strong> By then it's too late to build reserves. Cash flow planning happens in May-June, not when you're already in the deficit.</p>

          <p><strong className="text-brand-text">Treating every summer like it will be your best.</strong> Plan conservatively. If you have a record summer, great—your winter will be easier. But don't bank on record revenue to cover winter deficit.</p>

          <p><strong className="text-brand-text">Raiding your reserve fund early.</strong> If you dip into winter reserves in September, you'll regret it in January. Protect that fund like it's sacred. Because it is.</p>
        </>
      )
    },
    {
      title: "Building Your Cash Flow System This Week",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's your action plan:</p>

          <p><strong className="text-brand-text">Day 1: Build your 12-month cash flow model.</strong> Use actual numbers from last year. Project revenue and expenses by month. Identify your deficit months.</p>

          <p><strong className="text-brand-text">Day 2: Calculate your seasonal reserve requirement.</strong> How much do you need banked by September 30 to make it through February without stress?</p>

          <p><strong className="text-brand-text">Day 3: Create your automatic transfer system.</strong> Set up a separate savings account. Schedule automatic transfers from your operating account to reserve account every Monday during high season.</p>

          <p><strong className="text-brand-text">Day 4: Review and adjust your pricing.</strong> If your reserve requirement seems impossible, your pricing might not account for seasonal reality. Your summer pricing needs to subsidize your winter operations.</p>

          <p><strong className="text-brand-text">Day 5: Plan your winter revenue strategy.</strong> What will you offer November-February? Start planning now, not when you're desperate for cash.</p>
          
          <p className="text-brand-text/70 mt-6">Need help building your seasonal cash flow system? <Link href="/packages/flow-check">Book a Flow Check</Link> and we'll build your 12-month model together.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'Santa Cruz Business', href: '/blog/santa-cruz-business' },
        { label: 'Managing Cash Flow', href: '/blog/managing-cash-flow-tourist-off-season' }
      ]} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>August 17, 2025</time>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Managing Cash Flow Between Tourist and Off-Season in Santa Cruz</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">Cash flow swings from feast to famine. Learn how to smooth out seasonal extremes and maintain healthy cash flow year-round.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">The difference between Santa Cruz businesses that survive long-term and those that close after 3-5 years often comes down to one thing: cash flow management between seasons.</p>

          <p>It's not sexy. But it's essential. And it's entirely manageable once you have a system.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Ready to build your seasonal cash flow system?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/packages/flow-check">Book a Flow Check</Link> to create your 12-month model and eliminate cash flow stress.</p>
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
              <Link href="/blog/survive-winter-slow-season-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Seasonal</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Surviving Winter Slow Season</h4>
                <p className="text-brand-text/70 text-sm">Winter survival strategies.</p>
              </Link>
              <Link href="/blog/revenue-good-no-profit-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Financial</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Revenue Good But No Profit</h4>
                <p className="text-brand-text/70 text-sm">Finding profitability drains.</p>
              </Link>
              <Link href="/blog/rent-increases-unsustainable-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Financial</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Managing Rent Increases</h4>
                <p className="text-brand-text/70 text-sm">Financial sustainability strategies.</p>
              </Link>
            </div>

            {/* Service CTA */}
            <div className="mt-8 p-6 bg-current-600/10 rounded-lg">
              <p className="font-semibold text-brand-text mb-2">Need help with financial planning?</p>
              <Link href="/packages/business-flow" className="text-current-500 hover:text-current-400 font-semibold inline-flex items-center gap-2">
                Explore Business Flow Package <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

