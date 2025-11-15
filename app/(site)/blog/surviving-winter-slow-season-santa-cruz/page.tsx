import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'How to Survive the Winter Slow Season in Santa Cruz | Cash Flow Strategies',
  description: 'Practical strategies for Santa Cruz businesses to survive and thrive during the off-season. Cash flow management, staffing, and revenue diversification for seasonal businesses.',
})

export default function SurvivingWinterSlowSeason() {
  const sections = [
    {
      title: 'Why Winter Hits Santa Cruz Businesses So Hard',
      content: (
        <>
          <p className="mb-4">
            Summer in Santa Cruz means packed beaches, full restaurants, and lines out the door. Winter means empty storefronts, canceled surf lessons, and the same five locals cycling through your business. For many Santa Cruz businesses, the slow season isn't just a dip in revenue—it's an existential threat.
          </p>
          <p className="mb-4">
            The economic reality of Santa Cruz creates a perfect storm for seasonal businesses. High rent (which doesn't decrease in winter), year-round staffing costs, and California's regulatory expenses mean your fixed costs stay constant while revenue drops 40-70%. You can't simply hibernate and wait for summer—you have to navigate six months of reduced income while maintaining operations.
          </p>
          <p className="mb-4">
            The businesses that survive multiple winter seasons aren't just toughing it out—they're implementing specific strategies to manage cash flow, reduce costs strategically, and create alternative revenue streams that carry them through the quiet months.
          </p>
        </>
      )
    },
    {
      title: 'Understanding Your Seasonal Cash Flow Pattern',
      content: (
        <>
          <p className="mb-4">
            Before you can survive winter, you need to understand exactly how your cash flow patterns work. Most Santa Cruz business owners have a general sense that "winter is slow," but don't have specific numbers. This vagueness kills businesses.
          </p>
          <p className="mb-6">
            <strong>What you need to track:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Monthly revenue for the past 2-3 years</li>
            <li>Fixed costs that stay constant regardless of revenue</li>
            <li>Variable costs that scale with revenue</li>
            <li>Cash reserves needed to cover slow months</li>
            <li>When exactly the drop happens (October? November?)</li>
            <li>When recovery begins (March? April? Memorial Day?)</li>
          </ul>
          <p className="mb-4">
            For most Santa Cruz businesses, the pattern looks like this: strong summer (June-September), decent shoulder season (April-May, October), and brutal winter (November-March). But your specific pattern might differ based on your industry, location, and customer base.
          </p>
          <p className="mb-4">
            Once you have real numbers, you can calculate your "winter survival number"—the cash reserve you need to cover the gap between winter revenue and fixed costs. For most businesses, this is 3-6 months of operating expenses.
          </p>
        </>
      )
    },
    {
      title: 'Cash Flow Strategies That Actually Work',
      content: (
        <>
          <p className="mb-6">
            <strong>1. Build Your War Chest During Peak Season</strong>
          </p>
          <p className="mb-4">
            The biggest mistake Santa Cruz business owners make: spending summer profits in summer. When revenue is high, it's tempting to upgrade equipment, increase inventory, or boost marketing spend. Resist this urge.
          </p>
          <p className="mb-4">
            Instead, set aside 30-40% of summer profits specifically for winter operating expenses. Treat it like a separate account you don't touch until November. Yes, this means being more conservative during your best months. But it's the difference between barely surviving winter and having breathing room to invest in slow-season opportunities.
          </p>

          <p className="mb-6 mt-8">
            <strong>2. Negotiate Payment Terms With Vendors</strong>
          </p>
          <p className="mb-4">
            Your vendors know winter is slow. Talk to them before October hits. Many will extend payment terms from 30 days to 60 or 90 days for reliable customers, or allow you to stock up during summer with delayed payment.
          </p>
          <p className="mb-4">
            This isn't about not paying—it's about matching cash outflows to cash inflows. When your revenue drops 50%, your vendor payments shouldn't stay at 100% capacity.
          </p>

          <p className="mb-6 mt-8">
            <strong>3. Shift to Local Customer Focus</strong>
          </p>
          <p className="mb-4">
            Tourists leave in winter, but 60,000+ locals stay. The businesses that survive winter are the ones locals actively support. This means different pricing, different offerings, and different marketing.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Local appreciation discounts or memberships</li>
            <li>Winter specials that appeal to year-round residents</li>
            <li>Community partnerships with other local businesses</li>
            <li>Events that bring locals together</li>
            <li>Email marketing to your local customer list</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>4. Create Off-Season Revenue Streams</strong>
          </p>
          <p className="mb-4">
            The best winter survival strategy isn't cutting costs—it's finding revenue sources that work when your primary offering doesn't. Examples that work in Santa Cruz:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Surf shop:</strong> Winter wetsuit sales, repair services, local surf lessons for year-round residents</li>
            <li><strong>Restaurant:</strong> Catering for holiday parties, meal prep services for locals, private events</li>
            <li><strong>Fitness studio:</strong> Corporate wellness programs, online classes, winter challenge programs</li>
            <li><strong>Retail:</strong> Holiday gift sales, online presence for out-of-town customers, workshops and classes</li>
            <li><strong>Tour operator:</strong> Winter hiking tours, whale watching, storm watching experiences</li>
          </ul>
        </>
      )
    },
    {
      title: 'Strategic Cost Reduction Without Destroying Your Business',
      content: (
        <>
          <p className="mb-4">
            Cutting costs is necessary, but most businesses do it wrong. They slash everything equally, panic-fire good employees, and eliminate the very things that keep locals loyal. Smart cost reduction is surgical, not panicked.
          </p>

          <p className="mb-6 mt-6">
            <strong>What to Cut First:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Tourist-focused marketing (save it for spring ramp-up)</li>
            <li>Peak-season inventory levels (adjust to winter volume)</li>
            <li>Variable labor hours (reduce without eliminating positions)</li>
            <li>Discretionary equipment upgrades</li>
            <li>Premium supplier options (negotiate or find winter alternatives)</li>
          </ul>

          <p className="mb-6 mt-6">
            <strong>What NOT to Cut:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Your core team (firing and rehiring is expensive and destroys morale)</li>
            <li>Customer service quality (locals remember poor winter experiences)</li>
            <li>Basic maintenance (catching up in spring costs more)</li>
            <li>Local community presence (goodwill pays dividends)</li>
            <li>Financial planning time (this is when you need it most)</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>The Part-Time Strategy:</strong> Instead of laying off employees, many successful Santa Cruz businesses shift to reduced winter hours or part-time schedules. This keeps your trained team intact, maintains unemployment insurance rates, and ensures you're ready when business picks up. Good employees will appreciate predictability over complete job loss.
          </p>
        </>
      )
    },
    {
      title: 'The UC Santa Cruz Student Factor',
      content: (
        <>
          <p className="mb-4">
            UC Santa Cruz has 17,000+ students who largely disappear from November to January (Thanksgiving to winter break). Then they return in January but are broke from holiday spending. Then they disappear again in March for spring break.
          </p>
          <p className="mb-4">
            If students are part of your customer base, plan for these cycles:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>September-October:</strong> Peak student spending (new school year, settling in)</li>
            <li><strong>November-January:</strong> Gone for holidays</li>
            <li><strong>Late January-February:</strong> Back but broke</li>
            <li><strong>March:</strong> Spring break exodus</li>
            <li><strong>April-May:</strong> Final push before summer</li>
          </ul>
          <p className="mb-4">
            Student-focused businesses should build reserves in September-October and early spring, not rely on consistent winter revenue.
          </p>
        </>
      )
    },
    {
      title: 'Using Winter for Strategic Planning',
      content: (
        <>
          <p className="mb-4">
            Winter isn't just survival time—it's the only time all year you're not drowning in customer demand. Smart businesses use winter to build systems that make next summer smoother.
          </p>

          <p className="mb-6">
            <strong>Winter Planning Projects:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Document processes while you have time to think</li>
            <li>Train staff on new systems before summer chaos</li>
            <li>Negotiate vendor contracts for next year</li>
            <li>Revamp your website and online presence</li>
            <li>Build or update your marketing calendar</li>
            <li>Analyze what worked (and didn't) last summer</li>
            <li>Fix operational bottlenecks you ignored during rush</li>
            <li>Plan staffing needs for next peak season</li>
          </ul>

          <p className="mb-4">
            The businesses that thrive don't just survive winter—they use it strategically to get better. While competitors are panicking about cash flow, you're building the operational foundation for a stronger next year.
          </p>
        </>
      )
    },
    {
      title: 'When to Consider Closing vs. Staying Open',
      content: (
        <>
          <p className="mb-4">
            Some Santa Cruz businesses close completely for 1-2 months in winter. Others stay open with reduced hours. Neither is inherently right or wrong—it depends on your specific economics.
          </p>

          <p className="mb-6">
            <strong>Consider Closing If:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Variable costs + labor exceed winter revenue</li>
            <li>Your customer base is 90%+ tourists</li>
            <li>You can pause rent (sublease, seasonal lease, etc.)</li>
            <li>Closure doesn't hurt local reputation</li>
            <li>You can travel/work elsewhere during closure</li>
          </ul>

          <p className="mb-6 mt-6">
            <strong>Stay Open If:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>You have a loyal local customer base that depends on you</li>
            <li>Fixed costs continue regardless (rent, insurance)</li>
            <li>Closing damages reputation or customer relationships</li>
            <li>You can reduce to minimal staffing and still break even</li>
            <li>Winter revenue covers variable costs + some fixed costs</li>
          </ul>

          <p className="mb-4 mt-6">
            If you do close, communicate clearly and early. Locals will support seasonal closures if they know when you're returning and why you're closed. Mystery closures create rumors you don't want.
          </p>
        </>
      )
    },
    {
      title: 'Building Multi-Year Resilience',
      content: (
        <>
          <p className="mb-4">
            Surviving one winter is luck. Surviving five winters is strategy. The goal isn't just to make it through this slow season—it's to build a business model that expects and thrives despite seasonality.
          </p>

          <p className="mb-6">
            <strong>Long-Term Resilience Strategies:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Maintain 6-9 months of operating expenses in reserves</li>
            <li>Diversify revenue across tourist and local segments</li>
            <li>Build recurring revenue that persists in winter (memberships, subscriptions)</li>
            <li>Create products or services with different seasonal peaks</li>
            <li>Develop online revenue streams less dependent on location</li>
            <li>Build relationships with landlords willing to work with seasonal cycles</li>
          </ul>

          <p className="mb-4">
            The businesses that last decades in Santa Cruz aren't fighting seasonality—they've designed their entire operation around it. They know exactly how much to save in summer, when to hire and reduce staff, and how to serve locals when tourists disappear.
          </p>

          <p className="mb-4">
            That doesn't happen accidentally. It requires financial planning, operational discipline, and the willingness to make conservative decisions during good times so you survive bad times.
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
            How to Survive the Winter Slow Season in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Practical cash flow strategies, cost management, and revenue diversification tactics to carry your Santa Cruz business through the off-season without panic or financial crisis.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Planning for Your Slow Season?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses build financial and operational systems that account for seasonal fluctuations. Our Business Flow Analysis identifies exactly where cash is leaking and how to build reserves that carry you through winter.
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
              Talk to Us About Your Situation
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

