import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Should You Close During Slow Season in Santa Cruz? | Winter Closure Decision',
  description: 'Analyze whether to close your Santa Cruz business during off-season or stay open with reduced operations. Financial analysis and strategic considerations.',
  keywords: 'seasonal business closure, winter closure santa cruz, should i close my business, off-season strategy, seasonal operations'
})

export default function ClosingVsStayingOpen() {
  const sections = [
    {
      title: 'The Closure Question Every Seasonal Business Faces',
      content: (
        <>
          <p className="mb-4">
            Every Santa Cruz seasonal business owner has asked: "Should I just close during slow months?" On paper, it makes sense—why stay open when you're barely covering costs? But closure has hidden costs, strategic implications, and long-term reputation effects that aren't obvious until you've done it.
          </p>
          <p className="mb-4">
            Some seasonal businesses thrive with winter closure—they save money, give staff time off, return refreshed in spring, and customers accept it as part of their identity. Others tried closure and regretted it—lost momentum, customers found alternatives, staff found other jobs, and reopening was harder than staying open.
          </p>
          <p className="mb-4">
            The right answer depends on your specific economics, customer base, industry norms, and long-term strategy. This decision requires rigorous financial analysis, not just gut feeling about being tired of slow months.
          </p>
        </>
      )
    },
    {
      title: 'The Financial Analysis: Actual Math',
      content: (
        <>
          <p className="mb-4">
            Emotion and exhaustion often drive closure decisions. The right approach is cold, ruthless math.
          </p>

          <p className="mb-6 mt-6">
            <strong>Calculate: Cost of Staying Open</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Fixed costs (continue regardless):</strong> Rent, insurance, loan payments, utilities minimum</li>
            <li><strong>Semi-variable costs (reduced but not eliminated):</strong> Minimal staff, basic inventory, maintenance</li>
            <li><strong>Fully variable costs (can eliminate):</strong> Additional staff, marketing, supplies</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Example: Coffee Shop Winter Analysis</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Rent: $3,500 (fixed, paid whether open or closed)</li>
            <li>Utilities: $400 (maybe $200 if closed)</li>
            <li>Insurance: $300 (fixed)</li>
            <li>Staff (minimal): $4,000 (zero if closed)</li>
            <li>Inventory: $800 (zero if closed)</li>
            <li><strong>Total monthly cost if open: $9,000</strong></li>
            <li><strong>Total monthly cost if closed: $4,000</strong></li>
            <li><strong>Cost to stay open: $5,000/month</strong></li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Calculate: Revenue During Slow Period</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Average daily revenue × days open</li>
            <li>Subtract cost of goods sold (typically 30-40%)</li>
            <li>Result = Gross profit available to cover costs</li>
          </ul>

          <p className="mb-4">
            Continuing example: $400/day revenue × 30 days = $12,000 monthly revenue. Minus 35% COGS = $7,800 gross profit.
          </p>

          <p className="mb-6 mt-8">
            <strong>The Decision Point:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Gross profit > Cost to stay open:</strong> Stay open (making money)</li>
            <li><strong>Gross profit ≈ Cost to stay open:</strong> Borderline (consider strategic factors)</li>
            <li><strong>Gross profit < Cost to stay open:</strong> Closure makes financial sense</li>
          </ul>

          <p className="mb-4">
            In example: $7,800 profit vs $5,000 cost to stay open = +$2,800 monthly benefit to staying open. Clear choice: stay open.
          </p>

          <p className="mb-4">
            But if winter revenue dropped to $200/day, profit would be $3,900, which is less than $5,000 cost. Losing $1,100/month to stay open = close and save money.
          </p>
        </>
      )
    },
    {
      title: 'Strategic Considerations Beyond Pure Math',
      content: (
        <>
          <p className="mb-4">
            Even if math says close, strategic factors might argue for staying open. And vice versa—math might say stay open but strategy suggests closing.
          </p>

          <p className="mb-6 mt-6">
            <strong>Reasons to Stay Open (Even if Marginally Profitable):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Local customer loyalty:</strong> Locals remember who stuck around</li>
            <li><strong>Staff retention:</strong> Keep good employees who'd find other work if you closed</li>
            <li><strong>Competitive positioning:</strong> Only one open in winter = capture all demand</li>
            <li><strong>Momentum:</strong> Easier to maintain operations than restart</li>
            <li><strong>Lease requires it:</strong> Some leases prohibit seasonal closure</li>
            <li><strong>Testing new offerings:</strong> Quiet period to experiment</li>
            <li><strong>Community presence:</strong> Being reliable builds long-term reputation</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Reasons to Close (Even if Breaking Even):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Owner burnout:</strong> Break needed to avoid long-term damage</li>
            <li><strong>Staff exhaustion:</strong> Team needs reset before next season</li>
            <li><strong>Industry norm:</strong> Customers expect seasonal closure</li>
            <li><strong>Alternative income:</strong> Owner/staff can earn more elsewhere in winter</li>
            <li><strong>Major renovations:</strong> Perfect time for updates</li>
            <li><strong>Cash preservation:</strong> Rather save reserves than spend them breaking even</li>
            <li><strong>Weather makes operations miserable:</strong> Quality of life matters</li>
          </ul>
        </>
      )
    },
    {
      title: 'The Reduced Operations Alternative',
      content: (
        <>
          <p className="mb-4">
            The choice isn't binary: full operations or total closure. Many successful seasonal businesses choose middle ground: significantly reduced operations.
          </p>

          <p className="mb-6 mt-6">
            <strong>Reduced Operations Strategies:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Reduced Hours</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Summer: Open 7 days, 8am-8pm (84 hours/week)</li>
            <li>Winter: Open 5 days, 10am-5pm (35 hours/week)</li>
            <li>Cut labor 60%, still serve core customers</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>2. Weekend-Only Operations</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Open Friday-Sunday when demand is concentrated</li>
            <li>Close Monday-Thursday when nearly empty</li>
            <li>Staff works 3 days instead of 7</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>3. Appointment-Only</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Don't staff for walk-ins</li>
            <li>Schedule specific times when customers book</li>
            <li>Staff only when confirmed revenue</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>4. Skeleton Crew</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Owner + 1 employee instead of full team</li>
            <li>Limited menu/services</li>
            <li>Maintain presence without full operations</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>5. Retail + Online Hybrid</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Reduced retail hours</li>
            <li>Focus on fulfilling online orders</li>
            <li>Space generates revenue without foot traffic dependency</li>
          </ul>

          <p className="mb-4 mt-6">
            Reduced operations capture most of the cost savings from closure while maintaining customer relationships, staff continuity, and operational momentum.
          </p>
        </>
      )
    },
    {
      title: 'If You Choose to Close: Doing It Right',
      content: (
        <>
          <p className="mb-4">
            Seasonal closure done well maintains customer loyalty and sets up strong reopening. Done poorly, it damages reputation and makes recovery harder.
          </p>

          <p className="mb-6 mt-6">
            <strong>Closure Best Practices:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Communicate Early and Clearly</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Announce closure plans 4-6 weeks in advance</li>
            <li>Be specific: "Closed November 15 - March 1, reopening March 2"</li>
            <li>Explain why (seasonal pattern, staff rest, renovations)</li>
            <li>Normalize it: "Annual winter closure"</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>2. Maintain Presence</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Keep social media active (planning for spring, behind-the-scenes)</li>
            <li>Email updates to customer list</li>
            <li>Gift card sales continue (online if possible)</li>
            <li>Respond to inquiries about reopening</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>3. Staff Retention Plan</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Guarantee jobs upon reopening</li>
            <li>Stay in touch during closure</li>
            <li>Confirm return dates well in advance</li>
            <li>Consider winter stipend for key staff</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>4. Use Closure Productively</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Deep cleaning and maintenance</li>
            <li>Renovations or improvements</li>
            <li>Menu/product development for next season</li>
            <li>Systems documentation</li>
            <li>Marketing planning</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>5. Plan Strong Reopening</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Reopening event or promotion</li>
            <li>Email announcement 2 weeks before</li>
            <li>Social media countdown</li>
            <li>Special offers for first week back</li>
            <li>Fully stocked and staffed from day one</li>
          </ul>
        </>
      )
    },
    {
      title: 'If You Choose to Stay Open: Optimizing for Survival',
      content: (
        <>
          <p className="mb-4">
            Staying open during slow season requires operational discipline to avoid bleeding cash unnecessarily.
          </p>

          <p className="mb-6 mt-6">
            <strong>Winter Operations Optimization:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Cut Every Non-Essential Cost</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Marketing spend: minimal to zero</li>
            <li>Inventory: lean, just-in-time</li>
            <li>Supplies: use what you have</li>
            <li>Subscriptions/services: pause what you can</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>2. Owner Works More</strong>
          </p>
          <p className="mb-4">
            During slow months, owner covers shifts that would require paid staff during busy season. Save labor cost when volume doesn't require full team.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Local-Only Focus</strong>
          </p>
          <p className="mb-4">
            No tourists around anyway. Optimize for serving locals: local deals, community events, personal service.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Leverage Slow Time</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Train staff properly (finally have time)</li>
            <li>Build systems and documentation</li>
            <li>Deep customer conversations (relationship building)</li>
            <li>Test new products/services with immediate feedback</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>5. Create Winter-Specific Offerings</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Products/services that work in winter</li>
            <li>Local appreciation specials</li>
            <li>Cozy, indoor experiences</li>
            <li>Holiday-related offerings</li>
          </ul>
        </>
      )
    },
    {
      title: 'Making the Decision: Framework',
      content: (
        <>
          <p className="mb-4">
            Here's a simple decision framework to clarify whether closure makes sense for your specific situation:
          </p>

          <p className="mb-6 mt-6">
            <strong>Close if 3+ of These Are True:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Winter revenue doesn't cover cost of staying open</li>
            <li>Lease allows closure or can be negotiated</li>
            <li>Competitors close (industry norm)</li>
            <li>Staff willing to take winter off</li>
            <li>Customer base expects/accepts it</li>
            <li>Owner is burned out</li>
            <li>Major renovations needed</li>
            <li>Can save $10K+ by closing</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Stay Open if 3+ of These Are True:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Winter generates net positive profit (even small)</li>
            <li>Local customer base depends on you</li>
            <li>Staff need year-round income</li>
            <li>Only business open = capture all winter demand</li>
            <li>Building long-term local loyalty</li>
            <li>Lease requires staying open</li>
            <li>Reopening costs/risks outweigh winter losses</li>
            <li>Testing/building for future growth</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Consider Reduced Operations if:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Close call financially either way</li>
            <li>Want benefits of both approaches</li>
            <li>Partial closure saves most of the cost</li>
            <li>Can concentrate demand into fewer days/hours</li>
          </ul>
        </>
      )
    },
    {
      title: 'Learning From Your Decision',
      content: (
        <>
          <p className="mb-4">
            Whatever you choose, track results so you can make a better decision next year.
          </p>

          <p className="mb-6 mt-6">
            <strong>If You Closed, Track:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Total cost savings vs staying open</li>
            <li>Staff retention rate (who came back?)</li>
            <li>Spring reopening strength (revenue first month back)</li>
            <li>Customer reactions (positive, negative, neutral)</li>
            <li>Competitor actions (did they capture your customers?)</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>If You Stayed Open, Track:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Actual profit/loss each winter month</li>
            <li>Local customer frequency increase</li>
            <li>Staff satisfaction and retention</li>
            <li>Projects completed during slow time</li>
            <li>Whether you'd make same decision again</li>
          </ul>

          <p className="mb-4 mt-6">
            This isn't a one-time decision. Conditions change: your finances, competition, customer base, personal priorities. Reevaluate annually based on data, not emotion.
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
            Should You Close During Slow Season in Santa Cruz?
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Analyze whether seasonal closure makes financial and strategic sense for your business. Decision framework, cost analysis, and execution strategies.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Analyzing Your Closure Decision?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz seasonal businesses run the numbers, evaluate strategic implications, and make informed decisions about winter operations. Get clarity on what's best for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/packages/flow-check" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Get Financial Analysis
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Situation
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

