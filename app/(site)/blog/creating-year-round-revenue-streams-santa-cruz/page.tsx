import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Creating Year-Round Revenue Streams for Seasonal Santa Cruz Businesses',
  description: 'How to build revenue streams that work regardless of season. Strategies for Santa Cruz businesses to reduce dependence on peak season tourism.',
})

export default function YearRoundRevenueStreams() {
  const sections = [
    {
      title: 'Breaking Free from Seasonal Dependency',
      content: (
        <>
          <p className="mb-4">
            Pure seasonal businesses are inherently risky. One bad summer, one extended rainy season, one unexpected economic downturn—and you're in financial crisis because 70-80% of your annual revenue comes from 3-4 months. Building year-round revenue streams isn't just smart strategy—it's existential risk management.
          </p>
          <p className="mb-4">
            Year-round revenue doesn't mean eliminating seasonality entirely (impossible in Santa Cruz for most businesses). It means diversifying so that winter slow months still generate meaningful revenue, creating cash flow stability that allows you to sleep at night and invest in growth instead of just surviving off-season.
          </p>
          <p className="mb-4">
            The businesses that thrive long-term in Santa Cruz aren't the ones with the best peak season—they're the ones that have built multiple revenue streams that work regardless of weather, tourist counts, or seasonal patterns. Here's how to do it.
          </p>
        </>
      )
    },
    {
      title: 'The Revenue Stream Portfolio Approach',
      content: (
        <>
          <p className="mb-4">
            Think of revenue streams like investment diversification. You want multiple sources generating income at different times, through different channels, from different customer segments.
          </p>

          <p className="mb-6 mt-6">
            <strong>Ideal Revenue Portfolio for Seasonal Business:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>40-50%:</strong> Primary seasonal offering (what you're known for)</li>
            <li><strong>20-30%:</strong> Recurring revenue (memberships, subscriptions, retainers)</li>
            <li><strong>15-20%:</strong> Counter-seasonal offerings (work when primary doesn't)</li>
            <li><strong>10-15%:</strong> Location-independent revenue (online, digital, wholesale)</li>
            <li><strong>5-10%:</strong> Complementary services/products (related but different)</li>
          </ul>

          <p className="mb-4 mt-6">
            This mix means even if your primary offering completely fails one season (weather disaster, pandemic, etc.), you still have 50-60% of revenue from other sources. That's survivability.
          </p>
        </>
      )
    },
    {
      title: 'Recurring Revenue Models',
      content: (
        <>
          <p className="mb-4">
            Recurring revenue is the holy grail of seasonal business stability. Monthly income that persists regardless of daily weather or tourist patterns creates predictable cash flow and long-term customer relationships.
          </p>

          <p className="mb-6 mt-6">
            <strong>Recurring Revenue Options by Business Type:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Fitness/Wellness:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Monthly unlimited class memberships</li>
            <li>Quarterly or annual prepaid packages</li>
            <li>Online course subscriptions</li>
            <li>Virtual training programs</li>
            <li>Corporate wellness contracts</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Retail:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Subscription boxes (monthly product deliveries)</li>
            <li>VIP member programs (priority access + discounts)</li>
            <li>Loyalty programs with recurring benefits</li>
            <li>Consignment or affiliate recurring commissions</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Services:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Retainer agreements (set monthly fee)</li>
            <li>Maintenance packages (quarterly service contracts)</li>
            <li>Membership clubs (access + perks)</li>
            <li>Software/platform subscriptions</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Food & Beverage:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Coffee subscription (monthly delivery)</li>
            <li>Wine club memberships</li>
            <li>Meal prep subscriptions</li>
            <li>Catering contracts with regular clients</li>
            <li>Cooking class series (pay upfront)</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>The Math of Recurring Revenue:</strong> If you can get just 100 customers paying $50/month, that's $5,000 guaranteed monthly revenue ($60K annually) that exists regardless of season. That's rent covered or 1-2 full-time employees or your entire winter survival fund—from one revenue stream.
          </p>
        </>
      )
    },
    {
      title: 'Counter-Seasonal Offerings',
      content: (
        <>
          <p className="mb-4">
            Instead of fighting slow season with discounts and desperation, create offerings that thrive when your primary business is quiet.
          </p>

          <p className="mb-6 mt-6">
            <strong>Counter-Seasonal Strategy Examples:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Surf Shop Winter Revenue:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Wetsuit sales (winter wetsuits when summer is flat)</li>
            <li>Surf lessons for locals (winter swells)</li>
            <li>Repair and maintenance services</li>
            <li>Indoor surf training/fitness classes</li>
            <li>Surfboard shaping courses</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Beach-Focused Business Winter Pivot:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Storm watching tours (leverage weather)</li>
            <li>Indoor alternative activities</li>
            <li>Holiday gift products</li>
            <li>Corporate team building (off-season rates)</li>
            <li>Local resident focus groups/classes</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Restaurant Off-Season:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Meal prep services for locals</li>
            <li>Cooking classes</li>
            <li>Holiday catering</li>
            <li>Private chef services</li>
            <li>Recipe e-books or online courses</li>
          </ul>

          <p className="mb-4 mt-6">
            The key insight: your slow season is someone else's peak season. Find complementary offerings that align with winter demand patterns.
          </p>
        </>
      )
    },
    {
      title: 'Location-Independent Revenue',
      content: (
        <>
          <p className="mb-4">
            Revenue that doesn't require customers to physically visit your Santa Cruz location works regardless of local weather, tourist patterns, or foot traffic.
          </p>

          <p className="mb-6 mt-6">
            <strong>Online/Digital Revenue Streams:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. E-Commerce</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Ship products nationwide (rain in Santa Cruz doesn't stop Texas sales)</li>
            <li>Digital products (guides, templates, courses—zero shipping)</li>
            <li>Wholesale to other retailers</li>
            <li>Amazon/Etsy storefronts</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>2. Content and Education</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Online courses (create once, sell repeatedly)</li>
            <li>YouTube ad revenue + sponsorships</li>
            <li>Patreon or membership communities</li>
            <li>E-books and digital guides</li>
            <li>Licensing content to others</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>3. Virtual Services</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Online coaching/consulting</li>
            <li>Virtual fitness classes</li>
            <li>Remote design/creative services</li>
            <li>Telehealth or virtual wellness</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>4. B2B Sales</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Wholesale to retailers outside Santa Cruz</li>
            <li>Corporate contracts (year-round, not seasonal)</li>
            <li>Licensing your brand/methods</li>
            <li>White-label products for other businesses</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Example Success:</strong> Local surf shop does $300K retail in-store (70% summer). Added $150K e-commerce (year-round) and $50K wholesale accounts. Now only 60% seasonal dependency instead of 100%.
          </p>
        </>
      )
    },
    {
      title: 'Complementary Products and Services',
      content: (
        <>
          <p className="mb-4">
            Look at what your existing customers need adjacent to your core offering. You already have their trust and attention—serve them in additional ways.
          </p>

          <p className="mb-6 mt-6">
            <strong>Adjacent Revenue Opportunities:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>If You Sell Products:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Add services (repairs, customization, maintenance)</li>
            <li>Add education (workshops, classes using products)</li>
            <li>Add rentals (lower commitment than purchase)</li>
            <li>Add financing (help customers afford premium products)</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>If You Offer Services:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Add products (tools, equipment, supplies)</li>
            <li>Add digital offerings (online courses, guides)</li>
            <li>Add group programs (leverage your time better)</li>
            <li>Add certification/training (teach others your methods)</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>Questions to Uncover Opportunities:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>What do customers ask for that you don't currently offer?</li>
            <li>What do they buy elsewhere that you could provide?</li>
            <li>What happens before/after they use your service?</li>
            <li>What problems persist that you could solve?</li>
            <li>What expertise do you have that could be productized?</li>
          </ul>
        </>
      )
    },
    {
      title: 'The Implementation Roadmap',
      content: (
        <>
          <p className="mb-4">
            Don't try to launch five new revenue streams simultaneously. Build methodically over 1-3 years.
          </p>

          <p className="mb-6 mt-6">
            <strong>Year 1: Foundation</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Q1-Q2:</strong> Research and test one new revenue stream</li>
            <li><strong>Q3:</strong> Soft launch during peak season (when you have attention)</li>
            <li><strong>Q4:</strong> Iterate and optimize through slow season</li>
            <li><strong>Goal:</strong> New stream generates 5-10% of revenue</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Year 2: Diversification</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Q1-Q2:</strong> Scale existing new stream, add second stream</li>
            <li><strong>Q3-Q4:</strong> Both streams operational year-round</li>
            <li><strong>Goal:</strong> Combined 15-20% of revenue from new streams</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Year 3: Maturity</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Optimize all revenue streams</li>
            <li>Consider third stream if capacity allows</li>
            <li><strong>Goal:</strong> 30-40% revenue from non-seasonal sources</li>
          </ul>

          <p className="mb-4 mt-6">
            This gradual approach prevents overwhelming yourself/team while steadily reducing seasonal risk.
          </p>
        </>
      )
    },
    {
      title: 'Common Mistakes to Avoid',
      content: (
        <>
          <p className="mb-6">
            <strong>1. Adding Revenue Streams That Conflict With Core Business</strong>
          </p>
          <p className="mb-4">
            Don't launch winter offerings that prevent you from serving summer customers well. New streams should complement, not compete with, your primary business.
          </p>

          <p className="mb-6 mt-8">
            <strong>2. Insufficient Marketing for New Streams</strong>
          </p>
          <p className="mb-4">
            Just because you built it doesn't mean they'll come. New offerings need dedicated marketing, clear positioning, and time to gain traction.
          </p>

          <p className="mb-6 mt-8">
            <strong>3. Underpricing New Offerings</strong>
          </p>
          <p className="mb-4">
            New revenue streams should be profitable from the start. Don't discount heavily just to get initial customers. Price appropriately and attract right customers.
          </p>

          <p className="mb-6 mt-8">
            <strong>4. No Systems for Delivery</strong>
          </p>
          <p className="mb-4">
            Build operational systems for new offerings before launching. Otherwise you're just adding chaos to existing operations.
          </p>

          <p className="mb-6 mt-8">
            <strong>5. Giving Up Too Soon</strong>
          </p>
          <p className="mb-4">
            New revenue streams take 6-12 months to gain traction. Most businesses quit after 2-3 months. Be patient and iterate based on feedback.
          </p>
        </>
      )
    },
    {
      title: 'Measuring Success',
      content: (
        <>
          <p className="mb-4">
            Track these metrics to know if your diversification strategy is working:
          </p>

          <p className="mb-6 mt-6">
            <strong>Key Metrics:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Revenue diversification %:</strong> What % comes from non-peak-season sources?</li>
            <li><strong>Winter revenue trend:</strong> Is off-season revenue growing year-over-year?</li>
            <li><strong>Customer lifetime value:</strong> Are customers buying from multiple streams?</li>
            <li><strong>Profit margins:</strong> Are new streams actually profitable?</li>
            <li><strong>Reserve growth:</strong> Are you building cash reserves instead of depleting them?</li>
            <li><strong>Stress level:</strong> Do you feel less financially anxious during slow season?</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Success Looks Like:</strong> After 2-3 years, your worst winter month generates 40-50% of your best summer month (vs 15-20% before diversification). You're no longer panicking about weather or tourist counts because revenue is more stable.
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
            Creating Year-Round Revenue Streams for Seasonal Businesses
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Build revenue streams that work regardless of season. Reduce dependence on peak season tourism and create sustainable, stable cash flow for your Santa Cruz business.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Diversifying Your Revenue Streams?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses identify, develop, and implement new revenue streams that reduce seasonal dependency. Get strategic support to build a more stable, sustainable business model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Analyze Your Revenue Model
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Diversification Strategy
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

