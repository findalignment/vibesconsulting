import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Holiday Season Planning for Santa Cruz Retail & Restaurants | Nov-Dec Strategy',
  description: 'Navigate the unique holiday season dynamics in Santa Cruz. Strategies for retail and restaurant businesses to capitalize on local spending while managing slow tourist periods.',
  keywords: 'santa cruz holiday season, holiday retail planning, restaurant holiday strategy, november december santa cruz, holiday business planning'
})

export default function HolidaySeasonPlanning() {
  const sections = [
    {
      title: 'The Santa Cruz Holiday Paradox',
      content: (
        <>
          <p className="mb-4">
            Holiday season in Santa Cruz is nothing like traditional retail markets. You don't get the tourist surge that carries you through summer. Instead, you get a complex mix: UCSC students leaving mid-December, locals focused on family and travel, weather keeping beach visitors away, but also concentrated local spending on gifts and experiences.
          </p>
          <p className="mb-4">
            November can be surprisingly strong—locals are still around, holiday shopping starts early, Thanksgiving brings visitors. But December often disappoints businesses expecting retail's "best month of the year." By mid-December, students are gone, many locals have left for holidays elsewhere, and rain keeps casual visitors away.
          </p>
          <p className="mb-4">
            Success during Santa Cruz's holiday season requires understanding these unique dynamics and building a strategy that captures local spending while managing the reality that this isn't a universal boom period like other markets experience.
          </p>
        </>
      )
    },
    {
      title: 'November: The Hidden Opportunity',
      content: (
        <>
          <p className="mb-4">
            For many Santa Cruz businesses, November is actually stronger than December. Understanding why helps you capitalize on it.
          </p>

          <p className="mb-6 mt-6">
            <strong>Why November Works:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Everyone still here:</strong> Students, locals, regular patterns intact</li>
            <li><strong>Early gift shopping:</strong> Locals avoiding December crowds</li>
            <li><strong>Thanksgiving visitors:</strong> Alumni, family returning for holiday</li>
            <li><strong>Black Friday/Small Business Saturday:</strong> Concentrated shopping days</li>
            <li><strong>Holiday party season:</strong> Corporate and social gatherings begin</li>
            <li><strong>Weather still decent:</strong> Not yet heavy rain season</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>November Strategy:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Launch holiday promotions early:</strong> November 1, not after Thanksgiving</li>
            <li><strong>Stock up inventory:</strong> November is when people are buying</li>
            <li><strong>Extended hours for Black Friday weekend:</strong> Locals shop local too</li>
            <li><strong>Gift guides and bundles:</strong> Make shopping decisions easy</li>
            <li><strong>Catering and party bookings:</strong> December parties booked in November</li>
            <li><strong>Thanksgiving week specials:</strong> Capture visiting family/alumni</li>
          </ul>

          <p className="mb-4 mt-6">
            Many Santa Cruz retailers do 30-40% of holiday revenue in November, only 20-30% in December. Plan accordingly.
          </p>
        </>
      )
    },
    {
      title: 'December: Managing the Mid-Month Cliff',
      content: (
        <>
          <p className="mb-4">
            December starts strong, then drops dramatically after UCSC finals end (around December 10-15). Businesses unprepared for this feel blindsided.
          </p>

          <p className="mb-6 mt-6">
            <strong>December Timeline:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>December 1-10:</strong> Strong. Holiday shopping continues, students finishing quarter.</li>
            <li><strong>December 11-15:</strong> Finals week. Students stressed, minimal shopping.</li>
            <li><strong>December 16-23:</strong> Cliff. Students gone, many locals traveling.</li>
            <li><strong>December 24-31:</strong> Dead. Only year-round locals and a few visitors.</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>December Strategy:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Front-load promotions:</strong> Push hard December 1-10</li>
            <li><strong>Last-minute gift positioning:</strong> December 15-23 serve procrastinators</li>
            <li><strong>Reduce inventory orders:</strong> Don't get stuck with excess in January</li>
            <li><strong>Plan staff reductions:</strong> Schedule lighter after December 15</li>
            <li><strong>Consider closure:</strong> December 24-January 1 might not be worth staying open</li>
            <li><strong>Local appreciation:</strong> Special offers for those who stayed in town</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Restaurant-Specific:</strong> Holiday parties drive December revenue more than retail shopping. Book corporate parties and family gatherings in November for December dates. Private events and catering can save December for restaurants.
          </p>
        </>
      )
    },
    {
      title: 'Gift-Giving Market Intelligence',
      content: (
        <>
          <p className="mb-4">
            Santa Cruz holiday gift spending has unique patterns. Understanding what locals buy helps you stock and promote appropriately.
          </p>

          <p className="mb-6 mt-6">
            <strong>What Santa Cruz Locals Buy as Gifts:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Local/handmade goods:</strong> Strong preference for supporting local makers</li>
            <li><strong>Experience gifts:</strong> Massage, yoga classes, restaurant gift cards</li>
            <li><strong>Outdoor/active gear:</strong> Surf, bike, hiking equipment</li>
            <li><strong>Food/beverage:</strong> Local wine, coffee, chocolates, specialty foods</li>
            <li><strong>Art and home decor:</strong> From local artists and makers</li>
            <li><strong>Sustainable/eco products:</strong> Reusable items, organic, minimal packaging</li>
            <li><strong>Books:</strong> From local bookstores (strong independent bookstore culture)</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>What Doesn't Sell Well:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Generic mall-brand items (Amazon can do that)</li>
            <li>Overly trendy products (locals are practical)</li>
            <li>High-markup tourist kitsch</li>
            <li>Products with excessive packaging</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Positioning Strategy:</strong> Emphasize local, handmade, sustainable, experiential. "Shop Local" isn't just a slogan in Santa Cruz—it's how locals actually buy. Market accordingly.
          </p>
        </>
      )
    },
    {
      title: 'Holiday Staffing Challenges',
      content: (
        <>
          <p className="mb-4">
            Holiday staffing in Santa Cruz is tricky. You need extra help for November, but many regular staff want time off for December holidays, and your student workers are gone.
          </p>

          <p className="mb-6 mt-6">
            <strong>Staffing Solutions:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Hire Temporary November Workers</strong>
          </p>
          <p className="mb-4">
            Bring on seasonal help specifically for November-early December rush. Make it clear upfront: "Temporary position, November 1 through December 15." College students home for break, retirees looking for extra income, and people wanting short-term work are good candidates.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Offer Holiday Scheduling Swaps</strong>
          </p>
          <p className="mb-4">
            Let staff trade shifts for their preferred holidays. Someone wants Christmas off, someone else wants New Year's Eve—let them work it out. Reduces scheduling conflicts.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Bonus Pay for Working Key Days</strong>
          </p>
          <p className="mb-4">
            Black Friday, Small Business Saturday, December weekends—offer bonus pay ($50-100 extra) for working these crucial days. Makes staffing them easier.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Plan Closure Dates Early</strong>
          </p>
          <p className="mb-4">
            If you're closing December 24-26 or December 31-January 1, tell staff in October. Lets them plan family travel. Reduces last-minute callouts.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Owner/Manager Coverage</strong>
          </p>
          <p className="mb-4">
            Late December when it's slow, owners and managers can cover shifts. Save labor cost when revenue is low anyway.
          </p>
        </>
      )
    },
    {
      title: 'Marketing & Promotions That Work',
      content: (
        <>
          <p className="mb-6">
            <strong>Early November Launch (Before November 10):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Gift guides (categorize by recipient, price point, interest)</li>
            <li>Holiday loyalty bonuses (spend $X, get $Y in January)</li>
            <li>Email campaign to existing customers</li>
            <li>Social media content plan for entire season</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Black Friday/Small Business Saturday (Thanksgiving Weekend):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Shop local campaign (coordinate with other Santa Cruz businesses)</li>
            <li>Limited-time discounts (create urgency)</li>
            <li>Bundle deals (easier decision making)</li>
            <li>Extended hours Friday-Sunday</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>December 1-10 (Final Push):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>"Last chance for holiday delivery/availability"</li>
            <li>Gift wrapping services (convenience sells)</li>
            <li>Daily social posts showing inventory</li>
            <li>Gift cards as last-minute option</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>December 15-23 (Procrastinators & Locals Who Stayed):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>"For those who stuck around" local appreciation</li>
            <li>Last-minute gift cards</li>
            <li>Experiences and services (no shipping needed)</li>
            <li>Digital/immediate fulfillment options</li>
          </ul>
        </>
      )
    },
    {
      title: 'Inventory Management for Holiday Season',
      content: (
        <>
          <p className="mb-4">
            Holiday inventory requires precision. Order too much and you're discounting in January. Order too little and you miss November sales.
          </p>

          <p className="mb-6 mt-6">
            <strong>Holiday Inventory Strategy:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>August-September:</strong> Order holiday inventory for November delivery</li>
            <li><strong>Mid-October:</strong> Final top-off orders based on early interest</li>
            <li><strong>November 1:</strong> Should be fully stocked</li>
            <li><strong>November 15:</strong> Evaluate what's selling, reorder hot items if possible</li>
            <li><strong>December 1:</strong> Stop major ordering, work through existing inventory</li>
            <li><strong>December 15:</strong> Start planning January clearance</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>What to Order More Of:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Gift items under $50 (price sweet spot)</li>
            <li>Local/handmade products (always sell well)</li>
            <li>Gift cards (no inventory risk, pure profit)</li>
            <li>Proven bestsellers from last year</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>What to Order Less Of:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Trendy items with no track record</li>
            <li>Products over $200 (smaller market)</li>
            <li>Anything that won't sell in January if leftover</li>
          </ul>
        </>
      )
    },
    {
      title: 'Restaurant-Specific Holiday Strategies',
      content: (
        <>
          <p className="mb-6">
            <strong>November-December Revenue Drivers for Restaurants:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Private holiday parties:</strong> Book these aggressively (contact corporate clients in October)</li>
            <li><strong>Catering:</strong> Thanksgiving week and December parties</li>
            <li><strong>Special holiday menus:</strong> Prix fixe options for parties</li>
            <li><strong>Gift cards:</strong> Huge revenue and brings customers in January/February</li>
            <li><strong>New Year's Eve:</strong> One big night can save December revenue</li>
            <li><strong>Wine/beer for home parties:</strong> Retail sales if you're licensed</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Critical Dates to Book Solid:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Thanksgiving week (Wednesday-Sunday)</li>
            <li>December Friday/Saturday nights (parties)</li>
            <li>December 15-22 (last week before Christmas)</li>
            <li>New Year's Eve</li>
          </ul>

          <p className="mb-4 mt-6">
            Everything else (late December, post-NYE) will likely be slow. Plan staffing accordingly. Some Santa Cruz restaurants close completely December 24-January 2, others stay open with skeleton crew and limited menu.
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
            Holiday Season Planning for Santa Cruz Businesses
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Navigate November-December's unique dynamics in Santa Cruz. Strategies to capitalize on local holiday spending while managing the mid-December exodus.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Planning Your Holiday Season Strategy?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses build marketing, inventory, and staffing plans that maximize holiday revenue. Get strategic support tailored to Santa Cruz's unique seasonal patterns.
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
              Discuss Holiday Planning
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

