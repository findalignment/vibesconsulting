import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Managing Rent Costs During Slow Months in Santa Cruz | Commercial Lease Strategy',
  description: 'How to handle high Santa Cruz rent during off-season when revenue drops. Negotiation strategies, alternatives, and financial planning for seasonal businesses.',
})

export default function ManagingRentCosts() {
  const sections = [
    {
      title: 'The Santa Cruz Rent Reality',
      content: (
        <>
          <p className="mb-4">
            Santa Cruz commercial rent is expensive—often $3-8/sq ft/month for retail, which translates to $3,000-10,000+ monthly for modest spaces. This wouldn't be catastrophic if revenue was consistent year-round. But when summer brings $50,000 revenue and winter brings $15,000, that same $5,000 rent payment becomes either manageable or business-ending depending on the month.
          </p>
          <p className="mb-4">
            Landlords set rent based on market rates, not your seasonal cash flow struggles. They don't care that tourists leave in November. Your lease likely has zero accommodation for seasonality. This mismatch between fixed rent and variable revenue is the #1 reason seasonal Santa Cruz businesses fail—not bad service, not poor marketing, but inability to cover rent during slow months.
          </p>
          <p className="mb-4">
            Managing rent during off-season requires a combination of negotiation, financial planning, and sometimes difficult decisions about location, lease terms, and whether staying in business is viable at current rent levels.
          </p>
        </>
      )
    },
    {
      title: 'Understanding True Rent-to-Revenue Ratio',
      content: (
        <>
          <p className="mb-4">
            Most businesses target 8-15% rent as percentage of revenue. But that's an annual average. For seasonal businesses, you need to understand monthly ratios.
          </p>

          <p className="mb-6 mt-6">
            <strong>Calculate Your Monthly Rent Burden:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Summer months:</strong> Rent % should be 5-10% (high revenue absorbs it)</li>
            <li><strong>Shoulder months:</strong> Rent % might be 15-20% (acceptable)</li>
            <li><strong>Winter months:</strong> Rent % often hits 25-40% (dangerous territory)</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Example:</strong> $5,000/month rent
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>July revenue $60,000 = 8.3% rent (fine)</li>
            <li>October revenue $30,000 = 16.7% rent (acceptable)</li>
            <li>January revenue $12,000 = 41.7% rent (crisis)</li>
          </ul>

          <p className="mb-4 mt-6">
            If winter rent percentage exceeds 30%, you likely have a location/rent problem, not just a cash flow problem. Either revenue needs to increase or rent needs to decrease—the current model isn't sustainable.
          </p>

          <p className="mb-6 mt-8">
            <strong>Warning Signs Rent is Too High:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Can't save during peak season (all profit goes to rent)</li>
            <li>Drawing from reserves every winter</li>
            <li>Reserves depleting year-over-year</li>
            <li>Can't afford basic business investments</li>
            <li>Owner not taking salary during slow months</li>
          </ul>
        </>
      )
    },
    {
      title: 'Negotiating with Landlords',
      content: (
        <>
          <p className="mb-4">
            Many seasonal businesses assume their lease is non-negotiable. It's not. Landlords would rather negotiate than have vacant space. But you need leverage and timing.
          </p>

          <p className="mb-6 mt-6">
            <strong>Best Times to Negotiate:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Before signing initial lease:</strong> Maximum leverage, can walk away</li>
            <li><strong>Lease renewal time:</strong> Landlord wants to avoid vacancy</li>
            <li><strong>When paying consistently:</strong> Good tenant = negotiating power</li>
            <li><strong>Winter slow season:</strong> Harder to re-lease space in winter</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>What to Negotiate For:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Seasonal Rent Structure</strong>
          </p>
          <p className="mb-4">
            Rare but possible: Variable rent based on season. Higher rent May-September, lower October-April. Same annual total, better cash flow alignment.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Percentage Rent</strong>
          </p>
          <p className="mb-4">
            Common in retail centers: Base rent + percentage of sales over threshold. Aligns landlord interest with your success.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Deferred Payment Terms</strong>
          </p>
          <p className="mb-4">
            Pay full annual rent but on different schedule. Maybe quarterly payments, or higher rent in summer, lower in winter.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Tenant Improvement Allowance</strong>
          </p>
          <p className="mb-4">
            Instead of lower rent, negotiate one-time build-out money. Reduces upfront costs, helps you open with better setup.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Shorter Initial Term</strong>
          </p>
          <p className="mb-4">
            1-2 year initial lease vs 5-year. Tests location viability before long commitment. Include options to renew at defined rates.
          </p>

          <p className="mb-6 mt-8">
            <strong>How to Approach the Conversation:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Come with data: your revenue patterns, competitor comparisons</li>
            <li>Propose specific alternatives (don't just complain)</li>
            <li>Emphasize your value as reliable tenant</li>
            <li>Be willing to compromise</li>
            <li>Have alternative location options (leverage)</li>
          </ul>
        </>
      )
    },
    {
      title: 'Alternative Location Strategies',
      content: (
        <>
          <p className="mb-4">
            If rent is unsustainable, sometimes the answer isn't negotiation—it's different location strategy.
          </p>

          <p className="mb-6 mt-6">
            <strong>Lower-Rent Location Options:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Residential Neighborhood vs Downtown</strong>
          </p>
          <p className="mb-4">
            Westside, Eastside, or Capitola neighborhoods: 30-50% lower rent than downtown/Boardwalk area. Trade foot traffic for local loyalty and lower overhead.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Shared Retail Space</strong>
          </p>
          <p className="mb-4">
            Partner with complementary business, split rent. Surf shop shares space with coffee shop. Both benefit from combined foot traffic, half the rent.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Pop-Up or Seasonal Lease</strong>
          </p>
          <p className="mb-4">
            Only lease space April-October. Close completely November-March. Some landlords prefer this to year-round vacancy during slow season.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Mobile/No Fixed Location</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Food truck vs restaurant (zero rent)</li>
            <li>Mobile service vs fixed shop</li>
            <li>Online-first with occasional pop-ups</li>
            <li>Operate from home, meet clients elsewhere</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>5. Capitola/Aptos/Scotts Valley</strong>
          </p>
          <p className="mb-4">
            Slightly outside Santa Cruz proper, significantly lower rent. Still serves Santa Cruz market, better economics.
          </p>

          <p className="mb-4 mt-6">
            <strong>The Relocation Decision:</strong> Moving is disruptive and risky (lose some existing customers). But if current rent is slowly bankrupting you, staying isn't sustainable either. Calculate breakeven on moving costs vs annual rent savings.
          </p>
        </>
      )
    },
    {
      title: 'Building Rent Reserves',
      content: (
        <>
          <p className="mb-4">
            The only sustainable way to handle fixed rent with variable revenue is building reserves during high-revenue months to cover low-revenue months.
          </p>

          <p className="mb-6 mt-6">
            <strong>The Rent Reserve System:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Step 1: Calculate Annual Rent Gap</strong>
          </p>
          <p className="mb-4">
            How many months does revenue not fully cover rent + basic operating costs? For most seasonal Santa Cruz businesses: 4-6 months. Multiply by monthly rent to get total gap.
          </p>
          <p className="mb-4">
            Example: $5,000 rent × 5 months shortfall = $25,000 annual gap
          </p>

          <p className="mb-4 mt-8">
            <strong>Step 2: Save During Peak Season</strong>
          </p>
          <p className="mb-4">
            Divide gap by number of profitable months. Save that amount monthly during good months.
          </p>
          <p className="mb-4">
            Example: $25,000 gap ÷ 7 good months = $3,571/month savings needed
          </p>

          <p className="mb-4 mt-8">
            <strong>Step 3: Separate Rent Reserve Account</strong>
          </p>
          <p className="mb-4">
            Don't mix with general operating funds. Dedicated account = harder to raid for other purposes.
          </p>

          <p className="mb-4 mt-8">
            <strong>Step 4: Draw Only for Rent During Slow Months</strong>
          </p>
          <p className="mb-4">
            Use reserve strictly for rent shortfalls November-March. Replenish April-October.
          </p>

          <p className="mb-4 mt-6">
            This system requires discipline during good months (when you're tempted to spend excess cash) but eliminates panic during slow months.
          </p>
        </>
      )
    },
    {
      title: 'Revenue Maximization to Cover Rent',
      content: (
        <>
          <p className="mb-4">
            Sometimes the rent problem is actually a revenue problem. Your space could generate more revenue with different strategies.
          </p>

          <p className="mb-6 mt-6">
            <strong>Space Utilization Strategies:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Sublease During Off-Season</strong>
          </p>
          <p className="mb-4">
            If your lease allows, sublease part of space during slow months. Example: Surf shop subleases half the space November-March to winter holiday vendor.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. After-Hours Revenue</strong>
          </p>
          <p className="mb-4">
            Rent space to others when you're closed. Yoga studio rents to meditation group evenings. Retail space hosts workshops weekends.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Online Revenue</strong>
          </p>
          <p className="mb-4">
            Your rent includes space for inventory. Use it to fulfill online orders nationwide, not just serve walk-in traffic.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Events and Experiences</strong>
          </p>
          <p className="mb-4">
            Host paid events: workshops, classes, private parties. Monetize the space beyond regular business hours.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Multi-Business Use</strong>
          </p>
          <p className="mb-4">
            Daytime coffee shop becomes evening wine bar. Space generates revenue across more hours = better rent coverage.
          </p>
        </>
      )
    },
    {
      title: 'When to Walk Away',
      content: (
        <>
          <p className="mb-4">
            Sometimes rent is simply unsustainable at your location with your business model. Knowing when to walk away prevents years of struggling.
          </p>

          <p className="mb-6 mt-6">
            <strong>Signs It's Time to Move or Close:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Reserves depleting year-over-year:</strong> Not sustainable long-term</li>
            <li><strong>Can't invest in business:</strong> All money goes to rent, nothing left for growth</li>
            <li><strong>Owner working without pay:</strong> Business isn't supporting you</li>
            <li><strong>Constant stress about rent:</strong> Quality of life matters</li>
            <li><strong>Better economics elsewhere:</strong> Different location could be profitable</li>
            <li><strong>Landlord won't negotiate:</strong> No path to sustainable rent</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Exit Strategy Considerations:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Can you sublease remaining lease term?</li>
            <li>Will landlord let you out early?</li>
            <li>Can you move to lower-rent location?</li>
            <li>Would mobile/online model work?</li>
            <li>Is there someone who wants to buy your lease?</li>
          </ul>

          <p className="mb-4 mt-6">
            Walking away from unsustainable rent isn't failure—it's smart business. Staying in a location that slowly bankrupts you is the real failure.
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
            Managing Rent Costs During Slow Months
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Strategies for handling high Santa Cruz commercial rent when seasonal revenue drops. Negotiation tactics, financial planning, and knowing when to make hard decisions.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help With Cash Flow and Financial Planning?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses analyze their rent-to-revenue ratios, build reserve systems, and make strategic decisions about location and lease terms. Get clarity on whether your current rent is sustainable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/packages/flow-check" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Get Your Financial Analysis
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Rent Challenges
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

