import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Online Retailers Killing Local Brick-and-Mortar in Santa Cruz | Survival Strategy',
  description: 'How Santa Cruz brick-and-mortar businesses compete with Amazon and online retailers. Leverage physical advantages against e-commerce.',
})

export default function OnlineRetailersKillingLocal() {
  const sections = [
    {
      title: 'The Amazon Problem',
      content: (
        <>
          <p className="mb-4">
            Customer browses your store, asks questions, touches products, gets expert advice. Then: "Thanks, I'll think about it." Translation: "I'm buying it on Amazon for 20% less with free shipping." You provided showroom and consultation. Amazon got the sale. Repeat until you close.
          </p>
          <p className="mb-4">
            Online retail has structural advantages brick-and-mortar cannot match: unlimited inventory without physical space, lower overhead, algorithmic efficiency, frictionless purchasing. Fighting Amazon on their terms is suicide. But physical retail has advantages online cannot replicate. Your job is making those advantages more valuable than price and convenience.
          </p>
        </>
      )
    },
    {
      title: 'What Brick-and-Mortar Can Do That Online Cannot',
      content: (
        <>
          <p className="mb-4">
            Before strategy, understand your structural advantages.
          </p>

          <p className="mb-6 mt-6">
            <strong>Physical Retail Advantages:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Immediate Gratification</strong>
          </p>
          <p className="mb-4">
            Customer wants it now, not in 2 days. Need gift today. Problem to solve immediately. Physical retail = instant possession. Priceless for urgent needs.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Tactile Experience</strong>
          </p>
          <p className="mb-4">
            Touch fabric quality. Smell products. Try on. Test fit. Sense weight and feel. Online shows pictures. You provide sensory experience that drives confident purchases.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Expert Human Guidance</strong>
          </p>
          <p className="mb-4">
            Amazon has reviews and AI recommendations. You have knowledgeable humans who ask questions, understand context, provide nuanced advice. Expertise beats algorithms for complex purchases.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Community and Social Experience</strong>
          </p>
          <p className="mb-4">
            Shopping alone on laptop vs shopping experience with friends, conversation, atmosphere, serendipitous discovery. Physical retail is social. Online is isolating.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Trust and Authenticity Verification</strong>
          </p>
          <p className="mb-4">
            Online filled with counterfeits, misleading descriptions, fake reviews. Physical store = verified authentic, see actual product, trust established through face-to-face interaction.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. No Returns Hassle</strong>
          </p>
          <p className="mb-4">
            Online purchase doesn't fit = repackage, print label, drive to UPS, wait for refund. In store = exchange immediately. Convenience of correct purchase first time.
          </p>

          <p className="mb-4 mt-8">
            <strong>7. Supporting Local Economy</strong>
          </p>
          <p className="mb-4">
            In Santa Cruz specifically, many customers actively want to support local businesses. That's worth price premium to values-aligned shoppers.
          </p>
        </>
      )
    },
    {
      title: 'Strategic Response to Online Competition',
      content: (
        <>
          <p className="mb-4">
            Effective strategies leverage physical advantages while neutralizing online advantages.
          </p>

          <p className="mb-6 mt-6">
            <strong>Anti-Amazon Strategies:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Curated Selection, Not Everything</strong>
          </p>
          <p className="mb-4">
            Amazon has everything. That's overwhelming. You curate: "We stock 200 products chosen for quality and local relevance." Curation is service. Editing is value.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Experience-Centered Retail</strong>
          </p>
          <p className="mb-4">
            Transform from transactional to experiential. Classes, workshops, demonstrations, tastings, consultations. People come for experience, buy while there. Make store destination, not just distribution point.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Exclusive Products Online Can't Get</strong>
          </p>
          <p className="mb-4">
            Local artisan products, exclusive partnerships, small-batch items. If Amazon doesn't stock it, customers can't comparison shop. Uniqueness beats price competition.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Service as Primary Product</strong>
          </p>
          <p className="mb-4">
            Bike shop: Don't compete on bike sales. Compete on expert fitting, maintenance, repair, relationship. Product facilitates service relationship.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Membership/Subscription Model</strong>
          </p>
          <p className="mb-4">
            Monthly membership with perks: discounts, exclusive access, events, services. Creates recurring relationship and switching costs. Harder to leave for one-time Amazon purchase.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Bundle Products with Services</strong>
          </p>
          <p className="mb-4">
            Sell guitar + include setup and first lesson. Amazon sells guitar. You sell playing music. Bundle creates value online cannot match.
          </p>

          <p className="mb-4 mt-8">
            <strong>7. Immediate Problem Solving</strong>
          </p>
          <p className="mb-4">
            Position as solution for urgent needs. "Need it today? We have it now." Emergency purchases won't wait for shipping.
          </p>
        </>
      )
    },
    {
      title: 'Price Competition Tactics',
      content: (
        <>
          <p className="mb-4">
            You cannot match Amazon pricing on everything. But you can be strategic about price.
          </p>

          <p className="mb-6 mt-6">
            <strong>Smart Pricing Strategies:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Price Match on Loss Leaders</strong>
          </p>
          <p className="mb-4">
            Match Amazon on popular items customers definitely comparison shop. Lose margin there, make it up on accessories and complementary items they don't comparison shop.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Transparent Pricing Explanation</strong>
          </p>
          <p className="mb-4">
            "We cost more because: We pay living wages, source sustainably, provide expert service, support local economy." Many Santa Cruz customers accept premium for values alignment.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Value-Add Justification</strong>
          </p>
          <p className="mb-4">
            "Amazon: $80 + wait 2 days + might not fit. Us: $95 + have it now + we ensure proper fit + free adjustments." Make premium obvious value, not just markup.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Membership Pricing</strong>
          </p>
          <p className="mb-4">
            "$50 annual membership gets you cost-plus-10% on everything." Creates loyalty and competitive pricing for committed customers.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Package Deals</strong>
          </p>
          <p className="mb-4">
            Bundle multiple items at attractive price. Customer evaluates total value vs purchasing separately online. Harder to comparison shop bundles.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Used/Refurbished Market</strong>
          </p>
          <p className="mb-4">
            Sell quality used items alongside new. Creates price points Amazon cannot match on specific items. Sustainability angle resonates in Santa Cruz.
          </p>
        </>
      )
    },
    {
      title: 'Online Presence for Brick-and-Mortar',
      content: (
        <>
          <p className="mb-4">
            Fighting online requires being online. But differently than pure e-commerce.
          </p>

          <p className="mb-6 mt-6">
            <strong>Strategic Online Presence:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Showroom Online, Buy In-Store</strong>
          </p>
          <p className="mb-4">
            Website shows inventory, provides information, builds interest. But: "Visit us to experience firsthand" or "Call for expert consultation." Drive online traffic to physical store.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Local SEO Dominance</strong>
          </p>
          <p className="mb-4">
            When someone searches "bike shop Santa Cruz," you appear top. Local search intent = high purchase intent. Capture local online searches before Amazon does.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Click-and-Collect</strong>
          </p>
          <p className="mb-4">
            "Order online, pick up in 2 hours." Convenience of online shopping, immediacy of brick-and-mortar. Combine advantages.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Social Media as Community Hub</strong>
          </p>
          <p className="mb-4">
            Instagram/Facebook for events, new arrivals, community engagement. Not transactional sales platform—relationship platform that drives store visits.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Content That Drives Store Traffic</strong>
          </p>
          <p className="mb-4">
            "How to choose" guides, comparison tools, expert advice. Educate online, convert in-store where you have consultation advantage.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Gift Cards and Store Credit Online</strong>
          </p>
          <p className="mb-4">
            Sell gift cards online. Gets customers thinking about your store, creates obligation to visit, generates cash flow before product delivery.
          </p>
        </>
      )
    },
    {
      title: 'The Showrooming Problem',
      content: (
        <>
          <p className="mb-4">
            Customers using your store to evaluate products then buying online. How to prevent or convert?
          </p>

          <p className="mb-6 mt-6">
            <strong>Anti-Showrooming Tactics:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Exclusive Products</strong>
          </p>
          <p className="mb-4">
            Stock items not available on Amazon. Can't showroom if online option doesn't exist. Partner with brands for exclusive local retail.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Same-Day Discount</strong>
          </p>
          <p className="mb-4">
            "10% off if you buy today." Incentivizes immediate purchase over going home to order online.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Make Experience Valuable Enough</strong>
          </p>
          <p className="mb-4">
            If consultation saves customer hours of research and prevents wrong purchase, that's worth price premium. Position expertise as billable value you're providing free.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Ask for the Sale</strong>
          </p>
          <p className="mb-4">
            "Would you like to take this home today?" Direct ask creates moment of decision. Many people will buy if directly invited.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Return Policy That Beats Online</strong>
          </p>
          <p className="mb-4">
            "30-day satisfaction guarantee, exchange anytime, no restocking fee." Remove risk that might drive them to try Amazon first.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Capture Contact for Follow-Up</strong>
          </p>
          <p className="mb-4">
            Even if they don't buy today: "Can I email you when we get new inventory?" or "Join our list for exclusive offers." Second chance to convert.
          </p>
        </>
      )
    },
    {
      title: 'Services That Create Stickiness',
      content: (
        <>
          <p className="mb-4">
            Amazon can't repair your bike, hem your pants, or teach you how to use products. Services create ongoing relationships.
          </p>

          <p className="mb-6 mt-6">
            <strong>Service-Based Retention:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Examples by Category:</strong>
          </p>

          <p className="mb-4 mt-6">
            <strong>Bike Shop:</strong> Free tune-ups for first year, maintenance classes, group rides, bike fitting
          </p>

          <p className="mb-4 mt-6">
            <strong>Outdoor Gear:</strong> Gear repair, equipment rentals, skills workshops, trip planning consultation
          </p>

          <p className="mb-4 mt-6">
            <strong>Clothing:</strong> Tailoring, alterations, styling consultation, wardrobe planning
          </p>

          <p className="mb-4 mt-6">
            <strong>Bookstore:</strong> Reading groups, author events, staff recommendations, special orders
          </p>

          <p className="mb-4 mt-6">
            <strong>Garden Supply:</strong> Soil testing, garden design consultation, planting workshops, seasonal guides
          </p>

          <p className="mb-4 mt-6">
            <strong>Pet Store:</strong> Nutrition consultation, grooming, training classes, pet socialization events
          </p>

          <p className="mb-4 mt-8">
            Services transform transaction into relationship. Relationships create loyalty Amazon cannot match.
          </p>
        </>
      )
    },
    {
      title: 'When Omnichannel Makes Sense',
      content: (
        <>
          <p className="mb-4">
            Some brick-and-mortar businesses successfully add e-commerce. Know when it helps vs hurts.
          </p>

          <p className="mb-6 mt-6">
            <strong>Add E-Commerce When:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>You have unique products not available elsewhere online</li>
            <li>Shipping costs don't eat all margin</li>
            <li>You can handle fulfillment without overwhelming operations</li>
            <li>Customer base extends beyond local area</li>
            <li>Products don't require hands-on evaluation before purchase</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Skip E-Commerce When:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Products commodity items Amazon sells cheaper</li>
            <li>Shipping logistics too complex/expensive</li>
            <li>Your advantage is consultation/experience (can't ship that)</li>
            <li>Limited resources better spent on in-store experience</li>
            <li>Already struggling with current operations</li>
          </ul>

          <p className="mb-4 mt-6">
            E-commerce isn't mandatory. Some brick-and-mortar thrives by being exclusively local and doubling down on physical advantages. Know your strengths.
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
            Online Retailers Killing Local Brick-and-Mortar in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            How Santa Cruz brick-and-mortar businesses compete with Amazon and online retailers. Leverage physical advantages against e-commerce giants.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Competing with Online Retail?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz brick-and-mortar businesses develop strategies that leverage physical advantages and create experiences online cannot replicate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Build Anti-Amazon Strategy
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Challenges
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

