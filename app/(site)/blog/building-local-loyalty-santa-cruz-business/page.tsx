import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { generateMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Building Local Loyalty to Offset Tourist Dependency in Santa Cruz',
  description: 'How to build a loyal local customer base that sustains your Santa Cruz business year-round. Strategies to reduce reliance on tourist revenue.',
  keywords: 'local customer loyalty, santa cruz locals, reduce tourist dependency, year-round customers, community business santa cruz'
})

export default function BuildingLocalLoyalty() {
  const sections = [
    {
      title: 'Why Local Loyalty Matters More Than You Think',
      content: (
        <>
          <p className="mb-4">
            Tourists bring the big summer revenue, but locals determine whether your business survives winter, thrives long-term, and builds a reputation worth protecting. Locals are the ones who come back weekly. Who bring their friends. Who defend you in Nextdoor arguments. Who carry you through November to March.
          </p>
          <p className="mb-4">
            But local loyalty doesn't happen accidentally, and it definitely doesn't happen if you treat locals like temporary tourists. It requires deliberate strategy, consistent execution, and genuine commitment to being part of the community rather than just extracting profit from it.
          </p>
          <p className="mb-4">
            The Santa Cruz businesses that last decades aren't the ones maximizing tourist extraction—they're the ones locals feel ownership of. "My coffee shop." "Our gym." "The place we always go." That possessiveness translates to loyalty that survives competition, economic downturns, and seasonal fluctuations.
          </p>
        </>
      )
    },
    {
      title: 'Understanding What Locals Actually Want',
      content: (
        <>
          <p className="mb-4">
            Locals and tourists want fundamentally different things. If you build your entire business for tourists, you'll struggle to earn local loyalty.
          </p>

          <p className="mb-6 mt-6">
            <strong>What Locals Value (Priority Order):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>1. Consistency:</strong> Same quality every single time</li>
            <li><strong>2. Recognition:</strong> Staff remember their name/order/preferences</li>
            <li><strong>3. Fair pricing:</strong> Not being charged tourist rates</li>
            <li><strong>4. Community contribution:</strong> Business gives back to Santa Cruz</li>
            <li><strong>5. Local hiring:</strong> Employing people from the community</li>
            <li><strong>6. Authenticity:</strong> Not performative or fake</li>
            <li><strong>7. Longevity:</strong> Being there for years, not months</li>
            <li><strong>8. Values alignment:</strong> Caring about what locals care about</li>
          </ul>

          <p className="mb-4 mt-6">
            Notice what's not on this list: Instagram-ability, trendiness, maximum convenience. Locals want reliability and relationship, not novelty. Build for that, and loyalty follows.
          </p>
        </>
      )
    },
    {
      title: 'The Locals Program That Actually Works',
      content: (
        <>
          <p className="mb-4">
            A "locals discount" card is table stakes, not differentiation. Every business has one. To build real loyalty, you need programs that create belonging and reciprocity.
          </p>

          <p className="mb-6 mt-6">
            <strong>Effective Locals Programs Include:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Tiered Recognition System</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Bronze: Any Santa Cruz zip code (10% off)</li>
            <li>Silver: 5+ visits (15% off + priority reservations)</li>
            <li>Gold: Regular customer (20% off + exclusive events + early access)</li>
          </ul>
          <p className="mb-4">
            Tiering creates gamification and rewards frequency, not just geography. Your best locals get the best treatment.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Members-Only Events</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>First Friday locals nights with special menu/pricing</li>
            <li>Annual appreciation party</li>
            <li>Preview access to new products/services</li>
            <li>Behind-the-scenes tours or classes</li>
            <li>Collaborative events with other local businesses</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>3. Community Currency</strong>
          </p>
          <p className="mb-4">
            Create a "locals dollar" system where regulars earn credit for visits that can be redeemed for products/services or donated to local causes. This builds both frequency and community goodwill.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Referral Rewards</strong>
          </p>
          <p className="mb-4">
            Give locals incentives to bring their friends: "Refer a neighbor, you both get $20 off." Locals are your best marketing channel—activate them.
          </p>
        </>
      )
    },
    {
      title: 'Showing Up in the Community',
      content: (
        <>
          <p className="mb-4">
            Physical presence in Santa Cruz's community life builds loyalty faster than any marketing campaign. You need to be visible in ways that demonstrate commitment beyond profit.
          </p>

          <p className="mb-6 mt-6">
            <strong>High-ROI Community Activities:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Sponsor local youth sports teams:</strong> Parents remember who supports their kids</li>
            <li><strong>Donate to school fundraisers:</strong> Auction items, gift cards, services</li>
            <li><strong>Support non-profits:</strong> Food bank, homeless services, environmental groups</li>
            <li><strong>First Friday participation:</strong> Art openings, downtown events</li>
            <li><strong>Beach cleanup sponsorship:</strong> Align with Santa Cruz environmental values</li>
            <li><strong>Local farmers market presence:</strong> Booth or product sampling</li>
            <li><strong>Partnership with other locals:</strong> Cross-promote complementary businesses</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>What Not to Do:</strong> Write a check and disappear. Locals see through transactional community involvement. Show up physically. Volunteer time, not just money. Let your staff participate. Make it real, not a PR stunt.
          </p>

          <p className="mb-4 mt-6">
            <strong>Document and Share:</strong> Post about community involvement on social media, but frame it as "proud to support" not "look how generous we are." Locals will share your posts if they're authentic, bringing free visibility.
          </p>
        </>
      )
    },
    {
      title: 'Building Relationships Through Micro-Interactions',
      content: (
        <>
          <p className="mb-4">
            Loyalty isn't built in grand gestures—it's built in thousands of small interactions that make locals feel seen, valued, and remembered.
          </p>

          <p className="mb-6 mt-6">
            <strong>Micro-Interactions That Build Loyalty:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Remember names:</strong> Train staff to learn regular customers' names</li>
            <li><strong>Recall preferences:</strong> "The usual?" shows you pay attention</li>
            <li><strong>Genuine conversation:</strong> Ask about their day, their family, their life</li>
            <li><strong>Acknowledge milestones:</strong> Birthday discount, congratulations on graduation/promotion</li>
            <li><strong>Personalized recommendations:</strong> "Based on what you like, you should try..."</li>
            <li><strong>Problem solving:</strong> Go slightly out of your way to help</li>
            <li><strong>Welcome back:</strong> Notice when regulars return after absence</li>
          </ul>

          <p className="mb-4 mt-6">
            This requires systems. Keep simple customer notes in your POS or CRM. "Prefers window seat." "Allergic to nuts." "Daughter named Emma." These details turn transactions into relationships.
          </p>

          <p className="mb-4 mt-6">
            <strong>Staff Training Critical:</strong> Seasonal staff won't build these relationships—they're gone in three months. Your year-round core team needs to own relationship building with locals. Make it part of their job description and performance evaluation.
          </p>
        </>
      )
    },
    {
      title: 'Using Winter to Deepen Local Relationships',
      content: (
        <>
          <p className="mb-4">
            Summer you're slammed serving tourists. Winter you actually have time to invest in local relationships. Use it strategically.
          </p>

          <p className="mb-6 mt-6">
            <strong>Winter Local Loyalty Strategies:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Special winter pricing:</strong> "Locals winter rate" lower than summer</li>
            <li><strong>More time for conversation:</strong> Slower pace allows relationship building</li>
            <li><strong>Test new offerings with locals:</strong> Get feedback before tourist season</li>
            <li><strong>Host community gatherings:</strong> Use your space for local groups</li>
            <li><strong>Extended loyalty perks:</strong> Bonus points/discounts during slow season</li>
            <li><strong>Personal outreach:</strong> Email newsletter specifically for locals</li>
            <li><strong>Ask for feedback:</strong> Surveys, focus groups, casual conversations</li>
          </ul>

          <p className="mb-4 mt-6">
            Winter is when you prove you're not just here for tourist dollars. Locals notice which businesses treat them well when times are slow versus only caring about them when tourists aren't around.
          </p>
        </>
      )
    },
    {
      title: 'Communication That Builds Local Connection',
      content: (
        <>
          <p className="mb-4">
            How you communicate with locals should be different than how you market to tourists. Locals want insider information and genuine updates, not promotional blasts.
          </p>

          <p className="mb-6 mt-6">
            <strong>Effective Local Communication Channels:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Locals-only email list:</strong> Separate from general marketing</li>
            <li><strong>Nextdoor presence:</strong> Respond to questions, participate in community discussions</li>
            <li><strong>Local Facebook groups:</strong> "Buy Nothing Santa Cruz," neighborhood groups</li>
            <li><strong>In-person announcements:</strong> Tell regulars about changes before posting online</li>
            <li><strong>Text/SMS for regulars:</strong> "Your favorite is back in stock"</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>What to Communicate to Locals:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Changes to hours or operations (give advance warning)</li>
            <li>New products/services (early access)</li>
            <li>Community involvement activities</li>
            <li>Staff updates (new hires, promotions—locals care about people)</li>
            <li>Behind-the-scenes stories</li>
            <li>Asking for input on decisions</li>
            <li>Appreciation and thanks</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Tone Matters:</strong> Talk to locals like neighbors, not customers. Casual, authentic, personal. Save the polished marketing speak for tourist-facing channels.
          </p>
        </>
      )
    },
    {
      title: 'Measuring Local Loyalty',
      content: (
        <>
          <p className="mb-4">
            You can't manage what you don't measure. Track local loyalty metrics to understand if your strategies are working.
          </p>

          <p className="mb-6 mt-6">
            <strong>Key Metrics to Track:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>% revenue from repeat customers:</strong> Goal: 50%+ from regulars</li>
            <li><strong>Average visits per year:</strong> True loyalty = frequent visits</li>
            <li><strong>Winter vs summer local ratio:</strong> Are locals sustaining you in off-season?</li>
            <li><strong>Locals program enrollment:</strong> How many have signed up?</li>
            <li><strong>Referral rate:</strong> How often do locals bring friends?</li>
            <li><strong>Review sentiment from locals:</strong> Different from tourist reviews?</li>
            <li><strong>Community event participation:</strong> How many locals show up?</li>
          </ul>

          <p className="mb-4 mt-6">
            If these numbers aren't improving year-over-year, your local loyalty strategy isn't working. Adjust and try new approaches.
          </p>

          <p className="mb-4 mt-6">
            <strong>The Ultimate Test:</strong> Could your business survive if tourists stopped coming? If the answer is "barely" or "no," you're too dependent on tourist revenue and haven't built sufficient local loyalty. Keep working on it.
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
            Building Local Loyalty to Offset Tourist Dependency
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Create a loyal local customer base that sustains your business year-round. Reduce reliance on seasonal tourist revenue through genuine community connection.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Building Customer Loyalty Systems?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses create loyalty programs, community engagement strategies, and customer relationship systems that build lasting connections. Turn one-time customers into lifelong advocates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/culture-optimization" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Learn About Culture Optimization
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Customer Strategy
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

