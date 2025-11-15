import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Balancing Tourist vs Local Customers in Santa Cruz | Business Strategy',
  description: 'How to serve both tourists and locals without alienating either. Pricing, marketing, and operational strategies for Santa Cruz businesses with mixed customer bases.',
  keywords: 'santa cruz tourists vs locals, santa cruz business strategy, local customer loyalty, tourist pricing, santa cruz business balance'
})

export default function TouristVsLocalBalance() {
  const sections = [
    {
      title: 'The Two Santa Cruz Markets',
      content: (
        <>
          <p className="mb-4">
            Santa Cruz isn't one market—it's two markets operating in the same physical space. Tourists want convenience, Instagram-worthy experiences, and don't care much about price. Locals want value, authentic community connections, and remember every interaction for years.
          </p>
          <p className="mb-4">
            Try to serve both equally and you'll fail at both. Price like you're serving tourists, and locals will resent you and tell everyone. Build your entire business for locals, and you'll miss the revenue surge that keeps you alive. The businesses that succeed in Santa Cruz have figured out how to navigate this tension deliberately.
          </p>
          <p className="mb-4">
            This isn't about being fake or manipulative—it's about understanding that different customer segments have different needs, different budgets, and different relationships with your business. Treating everyone the same is actually bad service.
          </p>
        </>
      )
    },
    {
      title: 'Understanding the Local Customer Psychology',
      content: (
        <>
          <p className="mb-4">
            Locals aren't just customers—they're your neighbors, your reputation, and your winter survival strategy. They have completely different expectations than tourists.
          </p>

          <p className="mb-6">
            <strong>What Locals Value:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Consistency:</strong> Same quality every time, not variable</li>
            <li><strong>Recognition:</strong> Being remembered and treated as individuals</li>
            <li><strong>Fair pricing:</strong> Not being gouged because tourists will pay it</li>
            <li><strong>Community contribution:</strong> Supporting local causes and events</li>
            <li><strong>Authenticity:</strong> Real, not performed for Instagram</li>
            <li><strong>Relationships:</strong> Knowing the owner/staff personally</li>
            <li><strong>Local hiring:</strong> Employing people from the community</li>
          </ul>

          <p className="mb-4 mt-6">
            Locals are evaluating whether you're "one of us" or "just here for tourist money." This judgment affects everything—your reputation, your winter survival, your word-of-mouth referrals, your standing in the community. Get it wrong and you'll be forever labeled as a tourist trap, even if your service is excellent.
          </p>

          <p className="mb-4">
            <strong>The Local Memory Factor:</strong> Santa Cruz is small enough that reputations stick. One bad experience with a local doesn't just lose that customer—it loses their entire social network. Conversely, creating raving fans among locals creates exponential word-of-mouth growth that no marketing budget can buy.
          </p>
        </>
      )
    },
    {
      title: 'Understanding the Tourist Customer Psychology',
      content: (
        <>
          <p className="mb-4">
            Tourists are here for 1-7 days. They're on vacation. They're spending discretionary income. They want different things than locals and shouldn't be treated the same.
          </p>

          <p className="mb-6">
            <strong>What Tourists Value:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Convenience:</strong> Easy parking, clear signage, no confusion</li>
            <li><strong>Experience:</strong> Instagram moments, stories to tell</li>
            <li><strong>Speed of service:</strong> They're on vacation schedules</li>
            <li><strong>Recommendations:</strong> "What should I do/see/eat?"</li>
            <li><strong>Premium options:</strong> Often willing to pay more for quality</li>
            <li><strong>Local authenticity:</strong> Want "real Santa Cruz" not chains</li>
            <li><strong>Beach proximity:</strong> Location matters more for tourists</li>
          </ul>

          <p className="mb-4 mt-6">
            Tourists aren't price-sensitive in the same way locals are. They've already spent money on lodging and travel—your product/service is incremental. They're comparing you to their vacation expectations, not their everyday budget.
          </p>

          <p className="mb-4">
            But they're also leaving reviews. A bad tourist experience goes on Yelp/Google and affects your ability to attract both tourists and locals. You can't afford to treat tourists as "just money to extract."
          </p>
        </>
      )
    },
    {
      title: 'Pricing Strategies That Work for Both',
      content: (
        <>
          <p className="mb-4">
            Pricing is where the tourist/local tension becomes most obvious. You need to capture tourist spending power without alienating locals. Here are strategies that actually work:
          </p>

          <p className="mb-6 mt-6">
            <strong>Strategy 1: Locals Discount or Membership Program</strong>
          </p>
          <p className="mb-4">
            Offer a "locals card" or membership that provides 10-20% off regular prices. This lets you price at tourist levels publicly while giving locals a fair deal. Verification can be as simple as showing ID with Santa Cruz zip code.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Pros:</strong> Clear differentiation, locals feel appreciated, tourist pricing maximized</li>
            <li><strong>Cons:</strong> Requires verification system, can feel exclusionary if handled poorly</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Strategy 2: Peak vs Off-Peak Pricing</strong>
          </p>
          <p className="mb-4">
            Charge more during summer weekends (when tourists dominate) and less during winter weekdays (when locals dominate). Hotels and airlines do this—service businesses can too.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Pros:</strong> Economically rational, matches demand to capacity</li>
            <li><strong>Cons:</strong> Requires dynamic pricing system, can confuse customers</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Strategy 3: Good/Better/Best Product Tiers</strong>
          </p>
          <p className="mb-4">
            Offer multiple price points. Tourists gravitate toward premium options. Locals appreciate having affordable choices. Everyone feels they got what they wanted.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Example (Restaurant):</strong> Regular portion, premium seafood upgrade, full experience package</li>
            <li><strong>Example (Retail):</strong> Basic product, locally-made premium, luxury tourist gift version</li>
            <li><strong>Example (Tour):</strong> Group tour, semi-private, private experience</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Strategy 4: Bundling for Tourists, À La Carte for Locals</strong>
          </p>
          <p className="mb-4">
            Create packages that tourists find convenient (and profitable for you) while allowing locals to buy exactly what they want à la carte. Same offerings, different packaging.
          </p>

          <p className="mb-4 mt-8">
            <strong>What Doesn't Work:</strong> Trying to hide that you have different pricing. Small communities talk. If tourists find out locals get deals, they feel ripped off. If locals find out tourists get special treatment, they feel disrespected. Be transparent about your pricing logic.
          </p>
        </>
      )
    },
    {
      title: 'Marketing to Two Audiences Without Confusion',
      content: (
        <>
          <p className="mb-4">
            Your marketing needs to speak to both audiences without confusing either. This requires channel separation and message targeting.
          </p>

          <p className="mb-6 mt-6">
            <strong>Tourist-Focused Marketing Channels:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>TripAdvisor and travel review sites</li>
            <li>Visit Santa Cruz website and visitor center materials</li>
            <li>Hotel concierge partnerships</li>
            <li>Beach/boardwalk-area advertising</li>
            <li>Instagram (with location tags tourists search)</li>
            <li>Google Maps and local search</li>
          </ul>
          <p className="mb-4">
            <strong>Messages for tourists:</strong> Emphasize experience, convenience, local authenticity, Instagram-worthy moments. Use language like "must-see," "best in Santa Cruz," "insider favorite."
          </p>

          <p className="mb-6 mt-8">
            <strong>Local-Focused Marketing Channels:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Email newsletter to local customer list</li>
            <li>Nextdoor and local Facebook groups</li>
            <li>Good Times and local publications</li>
            <li>Community event sponsorships</li>
            <li>Partnerships with local businesses</li>
            <li>Word-of-mouth from existing local customers</li>
          </ul>
          <p className="mb-4">
            <strong>Messages for locals:</strong> Emphasize value, community, consistency, relationships. Use language like "neighborhood favorite," "locally-owned," "supporting local."
          </p>

          <p className="mb-4 mt-8">
            <strong>Universal Channels (Require Both Messages):</strong> Your website and social media need to serve both. Use different pages/sections for tourist info vs local community updates. Pin tourist info, but post local community content regularly.
          </p>
        </>
      )
    },
    {
      title: 'Operational Adjustments for Mixed Customers',
      content: (
        <>
          <p className="mb-4">
            Your operations need flexibility to serve both segments well without driving your team crazy.
          </p>

          <p className="mb-6">
            <strong>Staffing Considerations:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Locals appreciate seeing familiar faces; keep core staff year-round</li>
            <li>Tourists need more hand-holding; seasonal staff should be trained on FAQs</li>
            <li>Consider "local regular" staff positions who build relationships</li>
          </ul>

          <p className="mb-6 mt-6">
            <strong>Service Speed vs Quality:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Tourists often want faster service (they're on schedules)</li>
            <li>Locals appreciate taking time for conversation</li>
            <li>Train staff to read which type of service each customer wants</li>
          </ul>

          <p className="mb-6 mt-6">
            <strong>Reservation/Booking Systems:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Hold some capacity for walk-ins (locals often don't book ahead)</li>
            <li>Online booking for tourists who plan in advance</li>
            <li>Phone/text option for regulars who prefer personal contact</li>
            <li>Priority booking for loyalty program members during peak times</li>
          </ul>
        </>
      )
    },
    {
      title: 'Building Local Loyalty While Maximizing Tourist Revenue',
      content: (
        <>
          <p className="mb-4">
            The goal isn't to choose between tourists and locals—it's to build a sustainable business model that serves both. Here's what that looks like in practice:
          </p>

          <p className="mb-6 mt-6">
            <strong>Summer (June-September): Tourist Priority</strong>
          </p>
          <p className="mb-4">
            Maximize tourist revenue during peak season. Locals understand this is your time to make money. Just don't completely ignore them or take them for granted.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Locals-only hours (early morning, weekday afternoons)</li>
            <li>Express line or phone-ahead for regulars during busy times</li>
            <li>Maintain locals discount/membership benefits</li>
            <li>Communicate peak times so locals know when to avoid</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Winter (November-March): Local Appreciation</strong>
          </p>
          <p className="mb-4">
            This is when you repay local loyalty. Show them you're not just here for tourist dollars.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Special winter pricing or promotions</li>
            <li>Community events and gatherings</li>
            <li>More time for personal service and conversation</li>
            <li>Try new offerings with local feedback</li>
            <li>Support local causes and fundraisers</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Shoulder Seasons (April-May, October): Test Balance</strong>
          </p>
          <p className="mb-4">
            Use shoulder seasons to test your tourist/local balance. Adjust pricing, offerings, and operations based on what worked and what didn't.
          </p>
        </>
      )
    },
    {
      title: 'Case Study: What Works in Santa Cruz',
      content: (
        <>
          <p className="mb-4">
            The Santa Cruz businesses that successfully balance tourist and local customers share common patterns:
          </p>

          <p className="mb-6">
            <strong>Coffee Shops:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Tourist line (grab-and-go) vs local seating (laptops welcome)</li>
            <li>Loyalty card for locals (every 10th coffee free)</li>
            <li>Tourist pricing on specialty drinks, reasonable pricing on drip coffee</li>
            <li>Local art on walls rotates monthly</li>
          </ul>

          <p className="mb-6 mt-6">
            <strong>Surf Shops:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Tourist retail front (gear, rentals, lessons)</li>
            <li>Local repairs and services in back</li>
            <li>Local surfer discount program</li>
            <li>Sponsor local surf events and competitions</li>
          </ul>

          <p className="mb-6 mt-6">
            <strong>Restaurants:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Tourist-friendly menu with explanations and photos</li>
            <li>Secret locals menu or daily specials</li>
            <li>Happy hour timing for locals (4-6pm before tourist dinner rush)</li>
            <li>Reservations held for regulars even during busy season</li>
          </ul>

          <p className="mb-4 mt-6">
            Notice the pattern: These businesses create explicit space for both segments. They don't try to pretend tourists and locals are the same. They acknowledge the difference and build systems around it.
          </p>
        </>
      )
    },
    {
      title: 'When the Balance Tips Too Far',
      content: (
        <>
          <p className="mb-4">
            You'll know you've tipped too far toward tourists when locals stop coming and start bad-mouthing you. You'll know you've tipped too far toward locals when tourists feel unwelcome or confused and your summer revenue disappoints.
          </p>

          <p className="mb-6">
            <strong>Warning Signs You're Too Tourist-Focused:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Locals call you a "tourist trap"</li>
            <li>Local customer frequency drops</li>
            <li>Winter revenue craters more than expected</li>
            <li>Staff turnover high (locals don't want to work for "tourist businesses")</li>
            <li>Community events stop inviting you</li>
          </ul>

          <p className="mb-6 mt-6">
            <strong>Warning Signs You're Too Local-Focused:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Tourist reviews complain about feeling unwelcome</li>
            <li>Summer revenue growth plateaus</li>
            <li>Missing obvious tourist revenue opportunities</li>
            <li>Can't afford to pay competitive wages</li>
            <li>Struggling to cover rent despite being "busy"</li>
          </ul>

          <p className="mb-4 mt-6">
            The right balance depends on your location, industry, and business model. Businesses on the boardwalk can skew heavily tourist. Businesses in residential neighborhoods should skew local. Most downtown businesses need genuine balance.
          </p>

          <p className="mb-4">
            Check your balance quarterly: What percentage of revenue comes from tourists vs locals? What percentage do you want? If there's misalignment, adjust pricing, marketing, and operations accordingly.
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
            Balancing Tourist and Local Customers in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            How to serve both tourists and locals without alienating either. Pricing strategies, marketing approaches, and operational systems that honor both customer segments.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Optimizing Your Customer Strategy?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses design operational systems that serve multiple customer segments effectively. From pricing strategy to service delivery, we'll help you find the right balance for sustainable growth.
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
              Discuss Your Business
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

