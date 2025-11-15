import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Customers Switching to Competitors in Santa Cruz | Win-Back Strategy',
  description: 'Why Santa Cruz customers leave for competitors and how to prevent churn. Retention and win-back strategies.',
  keywords: 'customer retention, customer churn, win back customers, santa cruz business, customer loyalty'
})

export default function CustomersSwitchingCompetitors() {
  const sections = [
    {
      title: 'Understanding Why Customers Leave',
      content: (
        <>
          <p className="mb-6 mt-6">
            <strong>Real Reasons (Not What They Tell You):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Felt undervalued:</strong> No recognition of loyalty</li>
            <li><strong>Problem not resolved:</strong> Complaint ignored or dismissed</li>
            <li><strong>Better experience elsewhere:</strong> Competitor treated them better</li>
            <li><strong>Curiosity:</strong> Wanted to try something new</li>
            <li><strong>Price:</strong> Competitor offer too good to refuse</li>
            <li><strong>Convenience:</strong> Competitor closer or easier</li>
            <li><strong>Relationship broke:</strong> Favorite staff member left</li>
          </ul>
        </>
      )
    },
    {
      title: 'Prevention Strategies',
      content: (
        <>
          <p className="mb-6 mt-6">
            <strong>1. Track Customer Behavior</strong>
          </p>
          <p className="mb-4">
            Notice when regular customer's frequency drops. Reach out before they leave: "Haven't seen you lately, everything okay?"
          </p>

          <p className="mb-6 mt-8">
            <strong>2. Reward Loyalty Visibly</strong>
          </p>
          <p className="mb-4">
            Loyal customers need to feel valued. Surprise discounts, recognition, exclusive perks. Make staying rewarding.
          </p>

          <p className="mb-6 mt-8">
            <strong>3. Fix Problems Fast</strong>
          </p>
          <p className="mb-4">
            Most customer loss happens after complaint mishandled. Address issues immediately with generosity. Cost of making it right < cost of losing customer.
          </p>

          <p className="mb-6 mt-8">
            <strong>4. Stay Relevant</strong>
          </p>
          <p className="mb-4">
            Don't stagnate. Regular improvements, new offerings, fresh approach. Give customers reasons to stay engaged.
          </p>

          <p className="mb-6 mt-8">
            <strong>5. Build Relationships</strong>
          </p>
          <p className="mb-4">
            Know customers personally. Remember preferences. Create emotional connection. Harder to leave relationship than transaction.
          </p>
        </>
      )
    },
    {
      title: 'Win-Back Campaign',
      content: (
        <>
          <p className="mb-4">
            When customer leaves, don't give up. Systematic win-back is cheaper than new acquisition.
          </p>

          <p className="mb-6 mt-6">
            <strong>Win-Back Steps:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Acknowledge Departure</strong>
          </p>
          <p className="mb-4">
            "Noticed you haven't been in. We miss you. Did something go wrong?" Shows you care and opens dialogue.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Understand Why They Left</strong>
          </p>
          <p className="mb-4">
            If they respond, listen. Don't defend. Understand their perspective. Insight helps prevent future loss.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Make Compelling Offer</strong>
          </p>
          <p className="mb-4">
            "Come back and we'll make it right" + specific incentive. Shows you value their business.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Address Root Cause</strong>
          </p>
          <p className="mb-4">
            If they left due to fixable issue, show you fixed it. "You mentioned X. We changed Y. Please give us another chance."
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Follow Up</strong>
          </p>
          <p className="mb-4">
            If they return, check in to ensure experience improved. Prevent second departure.
          </p>
        </>
      )
    },
    {
      title: 'Retention Metrics',
      content: (
        <>
          <p className="mb-4">
            What gets measured gets managed. Track retention to improve it.
          </p>

          <p className="mb-6 mt-6">
            <strong>Key Retention Metrics:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Churn rate:</strong> % of customers lost per month/year</li>
            <li><strong>Repeat purchase rate:</strong> % who buy again</li>
            <li><strong>Customer lifetime value:</strong> Total revenue per customer</li>
            <li><strong>Time between visits:</strong> Frequency changes signal risk</li>
            <li><strong>Net Promoter Score:</strong> Would they recommend you?</li>
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
            Customers Switching to Competitors in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Why customers leave for competitors and how to prevent churn. Retention and win-back strategies.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Reducing Customer Churn?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses build retention systems that keep customers loyal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Build Retention System
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Retention Strategy
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

