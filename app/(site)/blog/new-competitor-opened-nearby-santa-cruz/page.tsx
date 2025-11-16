import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'New Competitor Opened Nearby in Santa Cruz | Response Strategy',
  description: 'How to respond when new competitor opens near your Santa Cruz business. Strategic analysis and action plan for competitive threats.',
})

export default function NewCompetitorOpenedNearby() {
  const sections = [
    {
      title: 'The New Threat Assessment',
      content: (
        <>
          <p className="mb-4">
            New café opened two blocks away. New yoga studio across the street. New consultant targeting your exact niche. Panic sets in: Will I lose customers? Should I drop prices? Do I need to match their offerings? The arrival of new competitor feels like existential threat. Sometimes it is. Often it isn't. Your response determines outcome more than competitor's presence.
          </p>
        </>
      )
    },
    {
      title: 'Initial Assessment: Gather Intelligence',
      content: (
        <>
          <p className="mb-4">
            Before reacting, understand what you're dealing with.
          </p>

          <p className="mb-6 mt-6">
            <strong>Competitive Intelligence Checklist:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Who's behind it?</strong> Experienced operator or naive newcomer?</li>
            <li><strong>Their positioning:</strong> Premium, budget, specialty, or general?</li>
            <li><strong>Target customer:</strong> Same as yours or different demographic?</li>
            <li><strong>Pricing strategy:</strong> Higher, lower, or similar to yours?</li>
            <li><strong>Quality level:</strong> Superior, comparable, or inferior?</li>
            <li><strong>Differentiation:</strong> Unique offering or copying you?</li>
            <li><strong>Funding:</strong> Well-capitalized or bootstrapped?</li>
            <li><strong>Marketing approach:</strong> Aggressive or low-key?</li>
            <li><strong>Location advantage:</strong> Better, worse, or equivalent?</li>
          </ul>
        </>
      )
    },
    {
      title: 'Threat Level Analysis',
      content: (
        <>
          <p className="mb-6 mt-6">
            <strong>Low Threat (Monitor but Don't Panic):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Serving different customer segment</li>
            <li>Different price point (premium vs budget)</li>
            <li>Complementary rather than competing</li>
            <li>Weak execution or inexperienced operators</li>
            <li>Your loyal customer base is strong</li>
            <li>Location disadvantage for them</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Medium Threat (Adjust Strategy):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Similar offering to yours</li>
            <li>Comparable quality and pricing</li>
            <li>Good location</li>
            <li>Competent operators</li>
            <li>Will capture some market share</li>
            <li>Market can likely support both businesses</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>High Threat (Strategic Response Required):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Superior offering or execution</li>
            <li>Better location</li>
            <li>Well-funded with aggressive strategy</li>
            <li>Targeting your exact customers</li>
            <li>Small market cannot support multiple competitors</li>
            <li>Your differentiation is weak</li>
          </ul>
        </>
      )
    },
    {
      title: 'Immediate Actions (First 30 Days)',
      content: (
        <>
          <p className="mb-6 mt-6">
            <strong>1. Strengthen Customer Relationships</strong>
          </p>
          <p className="mb-4">
            Reach out to regulars personally. Thank them for loyalty. Subtle reminder of your value and relationship. Create emotional switching costs before competitor can poach.
          </p>

          <p className="mb-6 mt-8">
            <strong>2. Enhance Your Offering</strong>
          </p>
          <p className="mb-4">
            Now is time to implement improvements you've been delaying. Better service, new products, facility upgrades. Show customers you're evolving, not stagnating.
          </p>

          <p className="mb-6 mt-8">
            <strong>3. Communicate Your Advantages</strong>
          </p>
          <p className="mb-4">
            Subtly remind customers what makes you valuable: "Celebrating 10 years serving Santa Cruz," "Thanks to community that made us successful." Reinforce your established position.
          </p>

          <p className="mb-6 mt-8">
            <strong>4. Don't Panic-React</strong>
          </p>
          <p className="mb-4">
            Resist urge to immediately drop prices, copy their offerings, or make rash changes. Panic looks weak. Calm confidence looks strong.
          </p>

          <p className="mb-6 mt-8">
            <strong>5. Welcome Them (Publicly)</strong>
          </p>
          <p className="mb-4">
            Counterintuitive but effective: publicly welcome new competitor. Shows confidence, prevents looking threatened, demonstrates community values. "Welcome to neighborhood!" beats hostile silence.
          </p>
        </>
      )
    },
    {
      title: 'Strategic Response (Months 2-6)',
      content: (
        <>
          <p className="mb-6 mt-6">
            <strong>1. Differentiate More Clearly</strong>
          </p>
          <p className="mb-4">
            If you were generic before, now is time to specialize. Own specific niche, expertise, or customer segment competitor cannot easily replicate.
          </p>

          <p className="mb-6 mt-8">
            <strong>2. Build Switching Costs</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Loyalty programs with accumulated value</li>
            <li>Subscription or membership models</li>
            <li>Personalized service based on history</li>
            <li>Community and relationships</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>3. Expand Offerings</strong>
          </p>
          <p className="mb-4">
            Add services competitor doesn't have. If they copy your core product, be ahead on adjacent offerings. Moving target is hard to hit.
          </p>

          <p className="mb-6 mt-8">
            <strong>4. Double Down on Service</strong>
          </p>
          <p className="mb-4">
            Compete on dimensions where established relationships win: know customers by name, understand preferences, provide personalized experience. Competitor starts from scratch.
          </p>

          <p className="mb-6 mt-8">
            <strong>5. Capture Competitor's Dissatisfied Customers</strong>
          </p>
          <p className="mb-4">
            Not everyone will love new competitor. Make it easy for their unhappy customers to find you: "Not happy elsewhere? Come try us."
          </p>
        </>
      )
    },
    {
      title: 'What NOT to Do',
      content: (
        <>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Price war:</strong> Race to bottom destroys both businesses</li>
            <li><strong>Trash-talking:</strong> Makes you look petty and defensive</li>
            <li><strong>Copying everything they do:</strong> Shows lack of own vision</li>
            <li><strong>Obsessing over competitor:</strong> Focus on customers, not competition</li>
            <li><strong>Ignoring threat entirely:</strong> Denial is not strategy</li>
            <li><strong>Panic-induced bad decisions:</strong> Rushed changes often backfire</li>
          </ul>
        </>
      )
    },
    {
      title: 'Long-Term Coexistence Strategy',
      content: (
        <>
          <p className="mb-4">
            Often, market can support multiple competitors if positioned differently.
          </p>

          <p className="mb-6 mt-6">
            <strong>1. Clear Positioning Differentiation</strong>
          </p>
          <p className="mb-4">
            You be premium, they be value. Or you be traditional, they be modern. Clear positioning lets customers choose based on preference, not direct comparison.
          </p>

          <p className="mb-6 mt-8">
            <strong>2. Collaborate Where Possible</strong>
          </p>
          <p className="mb-4">
            Refer overflow customers to each other. Co-market for local business events. Rising tide lifts all boats.
          </p>

          <p className="mb-6 mt-8">
            <strong>3. Focus on Your Strengths</strong>
          </p>
          <p className="mb-4">
            Instead of trying to match everything competitor does, excel at what you do best. Let them have their strengths, you have yours.
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
            New Competitor Opened Nearby in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Strategic response when new competitor threatens your Santa Cruz business. Assessment framework and action plan.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Responding to New Competition?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses develop strategic responses to competitive threats. Turn challenge into opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/packages/flow-check" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Get Strategic Analysis
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Competition Strategy
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

