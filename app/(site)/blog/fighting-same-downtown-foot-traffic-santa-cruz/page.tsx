import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Fighting for Same Downtown Foot Traffic in Santa Cruz | Location Strategy',
  description: 'How Santa Cruz downtown businesses compete for limited foot traffic. Strategies to capture pedestrians and drive in-store visits.',
})

export default function FightingDowntownFootTraffic() {
  const sections = [
    {
      title: 'The Downtown Zero-Sum Game',
      content: (
        <>
          <p className="mb-4">
            Pacific Avenue has finite pedestrians. Every customer who walks into competitor's store is customer who might have walked into yours. Location matters, but so does storefront appeal, signage, and attraction tactics. All downtown businesses fishing from same pedestrian pool.
          </p>
        </>
      )
    },
    {
      title: 'Maximizing Storefront Capture',
      content: (
        <>
          <p className="mb-6 mt-6">
            <strong>1. Irresistible Window Displays</strong>
          </p>
          <p className="mb-4">
            Change weekly. Create scenes, not just product placement. Tell stories. Make pedestrians stop and look. Static displays = invisible to regular foot traffic.
          </p>

          <p className="mb-6 mt-8">
            <strong>2. Sidewalk Presence</strong>
          </p>
          <p className="mb-4">
            A-frame signs, sidewalk displays, outdoor seating. Extend your presence beyond storefront. More physical space = more attention capture.
          </p>

          <p className="mb-6 mt-8">
            <strong>3. Sensory Marketing</strong>
          </p>
          <p className="mb-4">
            Music that draws people in. Smells that attract (coffee, baked goods). Lighting that creates ambiance. Appeal to senses beyond sight.
          </p>

          <p className="mb-6 mt-8">
            <strong>4. Activity and Movement</strong>
          </p>
          <p className="mb-4">
            Live demonstrations, staff visible in windows, movement creates interest. Static store is boring. Activity is engaging.
          </p>
        </>
      )
    },
    {
      title: 'Creating Destination Status',
      content: (
        <>
          <p className="mb-4">
            Don't just capture walk-by traffic. Create reasons people come specifically to you.
          </p>

          <p className="mb-6 mt-6">
            <strong>Destination Strategies:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Unique products:</strong> Carry items available nowhere else downtown</li>
            <li><strong>Events:</strong> Weekly events that draw crowds</li>
            <li><strong>Expert reputation:</strong> THE place for specific need</li>
            <li><strong>Experience:</strong> Shopping becomes entertainment</li>
            <li><strong>Community hub:</strong> Gathering place, not just store</li>
          </ul>
        </>
      )
    },
    {
      title: 'Peak Time Optimization',
      content: (
        <>
          <p className="mb-4">
            Downtown traffic peaks: lunch hours, evenings, weekends. Maximize capture during high-traffic times.
          </p>

          <p className="mb-6 mt-6">
            <strong>Peak Time Tactics:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Full staffing:</strong> More employees to engage browsers</li>
            <li><strong>Special promotions:</strong> "Lunch hour special" or "Friday evening deals"</li>
            <li><strong>Samples/demos:</strong> Free coffee, tastings, try-before-buy</li>
            <li><strong>Street engagement:</strong> Staff on sidewalk inviting people in</li>
            <li><strong>Event timing:</strong> Schedule workshops during peak traffic</li>
          </ul>
        </>
      )
    },
    {
      title: 'Collaboration Over Competition',
      content: (
        <>
          <p className="mb-4">
            Downtown businesses benefit when overall foot traffic increases. Collaborate to grow the pie.
          </p>

          <p className="mb-6 mt-6">
            <strong>Collaborative Approaches:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Cross-promotions:</strong> "Show receipt from [neighbor], get discount"</li>
            <li><strong>Joint events:</strong> Block parties, art walks, seasonal festivals</li>
            <li><strong>Referral networks:</strong> Send customers to complementary businesses</li>
            <li><strong>Shared marketing:</strong> "Shop downtown" campaigns</li>
            <li><strong>Parking solutions:</strong> Validate parking collectively</li>
          </ul>
        </>
      )
    }
  ]

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-text">
            Fighting for Same Downtown Foot Traffic in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Compete for limited pedestrian traffic in downtown Santa Cruz. Storefront strategies to capture and convert walk-by customers.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Maximizing Foot Traffic?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help downtown Santa Cruz businesses optimize storefronts, capture pedestrians, and create destination status.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Optimize Your Location
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Foot Traffic Strategy
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

