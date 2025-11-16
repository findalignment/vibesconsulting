import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Hiring Challenges from Santa Cruz High Cost of Living | Workforce Solutions',
  description: 'How Santa Cruz\'s high housing costs and cost of living create hiring challenges. Strategies to help employees afford to work for your business.',
})

export default function CostOfLivingHiring() {
  const sections = [
    {
      title: 'The Math That Doesn\'t Work',
      content: (
        <>
          <p className="mb-4">
            You're paying $18-20/hour, which feels decent. That's $37-41K annually. After taxes, about $30-33K take-home. Average Santa Cruz rent for one-bedroom: $2,500/month = $30K/year. Your employee would need 100% of take-home pay just for rent, with nothing left for food, transportation, utilities, healthcare, or anything else.
          </p>
          <p className="mb-4">
            Standard financial advice says housing shouldn't exceed 30% of income. To afford $2,500 rent, someone needs $100K salary. You're offering $40K. Even with roommates ($1,200/month share), they need $48K minimum to hit 30% ratio. The math just doesn't work.
          </p>
          <p className="mb-4">
            This is why you can't find employees. This is why good employees quit. This is why people commute from Watsonville or Scotts Valley. The cost of living in Santa Cruz has completely disconnected from wages small businesses can afford to pay. You can't fix the housing crisis. But you can adapt your hiring strategy to work within this broken reality.
          </p>
        </>
      )
    },
    {
      title: 'Who Can Actually Afford to Work Here',
      content: (
        <>
          <p className="mb-4">
            Understanding who can afford Santa Cruz helps you target the right candidates instead of wasting time on people who'll quit when rent is due.
          </p>

          <p className="mb-6 mt-6">
            <strong>People Who Can Afford Santa Cruz at Modest Wages:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Students Living in Dorms/Group Houses</strong>
          </p>
          <p className="mb-4">
            UCSC students have housing through school. Cabrillo students often live with family. They can work for $18-22/hour because housing is covered or heavily subsidized. Target them explicitly.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. People Living with Family</strong>
          </p>
          <p className="mb-4">
            Young adults living with parents, or multi-generational households. No rent payment means modest wages are livable. Santa Cruz has significant population in this category.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Dual-Income Households</strong>
          </p>
          <p className="mb-4">
            Partner earning $60-80K can cover bulk of housing. Your $40K becomes supplemental income, not primary support. Combined household income makes it work.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Retirees with Owned Homes</strong>
          </p>
          <p className="mb-4">
            Bought house decades ago, paid off or very low payment. Don't need living wage, want engagement and supplemental income. Often excellent, reliable employees.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. People with Rent-Controlled Housing</strong>
          </p>
          <p className="mb-4">
            Long-term renters with protected rent ($1,200-1,500 vs $2,500 market rate). Can afford to stay in Santa Cruz at modest wages. Hard to identify but very stable when you find them.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Roommate Arrangements (4+ people)</strong>
          </p>
          <p className="mb-4">
            Young workers splitting $4,000 four-bedroom house = $1,000/person. Tight but doable on $40K. Look for people comfortable with communal living.
          </p>

          <p className="mb-4 mt-8">
            <strong>7. Van/RV Living</strong>
          </p>
          <p className="mb-4">
            Growing number of people choosing alternative housing to stay in Santa Cruz. If they've solved housing creatively, modest wages work. Don't judge—they're often most motivated employees.
          </p>

          <p className="mb-4 mt-6">
            <strong>Who You'll Lose:</strong> Single people trying to afford their own apartment. They literally cannot make the math work unless you're paying $30-35+/hour.
          </p>
        </>
      )
    },
    {
      title: 'Direct Housing Support Strategies',
      content: (
        <>
          <p className="mb-4">
            Some businesses directly address housing to make employment viable. These aren't realistic for all businesses, but if you can, housing support is the most effective recruitment and retention tool.
          </p>

          <p className="mb-6 mt-6">
            <strong>Direct Housing Solutions:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Employer-Provided Housing</strong>
          </p>
          <p className="mb-4">
            If you own rental property: offer below-market rent as part of compensation. Example: $20/hour + room in shared house for $800/month. Total compensation value: $35/hour equivalent. Suddenly competitive.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Housing Stipend</strong>
          </p>
          <p className="mb-4">
            Add $500-800/month housing stipend on top of base wage. Explicitly labeled for housing. Makes total compensation transparent: "$18/hour + $600 housing = $21.75/hour equivalent."
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Rent Subsidy for Key Employees</strong>
          </p>
          <p className="mb-4">
            For managers or critical roles, contribute to rent directly. "$60K salary + we cover $500/month of your rent." Costs you $6K annually, makes role $10K+ more valuable to employee.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Help Finding Housing</strong>
          </p>
          <p className="mb-4">
            Partner with landlords you know. Offer to guarantee rent. Connect employees with roommate opportunities. Leverage your local network to solve housing barrier.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. On-Site Housing (For Specific Industries)</strong>
          </p>
          <p className="mb-4">
            Farms, hospitality, property management: if you have land or manage properties, on-site housing can be built into compensation.
          </p>
        </>
      )
    },
    {
      title: 'Indirect Compensation to Offset Cost of Living',
      content: (
        <>
          <p className="mb-4">
            If you can't help with housing directly, reduce other costs of living to make modest wages stretch further.
          </p>

          <p className="mb-6 mt-6">
            <strong>Cost-Reduction Benefits:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Free/Discounted Meals</strong>
          </p>
          <p className="mb-4">
            Restaurants and cafes: free meal per shift = $10-15/day = $200-300/month value = $2,400-3,600/year. That's a $1.50/hour raise equivalent. For food businesses, this costs you less than retail value.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Transportation Support</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Bus pass ($60/month value)</li>
            <li>Bike purchase/maintenance budget</li>
            <li>Gas cards for commuters</li>
            <li>Parking pass (eliminates $150-200/month parking costs)</li>
            <li>Company vehicle for work use that employee can also use personally</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>3. Product/Service Discounts</strong>
          </p>
          <p className="mb-4">
            Retail: 40-50% employee discount saves hundreds monthly. Fitness: free gym membership ($100-150/month value). Services: free/discounted haircuts, massages, etc. Reduces need for higher wage.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Healthcare Stipend</strong>
          </p>
          <p className="mb-4">
            Can't afford full health insurance? Offer $200-300/month healthcare stipend for employees to buy their own coverage or use for medical expenses. Better than nothing.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Utilities Allowance</strong>
          </p>
          <p className="mb-4">
            $50-100/month toward phone/internet (especially if they need them for work). Small amount but meaningful when every dollar counts.
          </p>

          <p className="mb-4 mt-6">
            <strong>The Strategy:</strong> Stack multiple small benefits. $20/hour base + free meals ($1.50/hour) + bus pass ($0.75/hour) + product discount ($1/hour) + phone stipend ($0.50/hour) = $23.75/hour effective compensation. You're paying $20, they're receiving $23.75 value.
          </p>
        </>
      )
    },
    {
      title: 'Hiring from Lower Cost-of-Living Areas',
      content: (
        <>
          <p className="mb-4">
            If your employees can commute from Watsonville, Capitola, Aptos, Scotts Valley, Felton—where rent is 20-40% cheaper—your wages become viable.
          </p>

          <p className="mb-6 mt-6">
            <strong>Commuter-Friendly Hiring Strategy:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Post Jobs in Surrounding Areas</strong>
          </p>
          <p className="mb-4">
            Don't just post in Santa Cruz. Post in Watsonville, Scotts Valley, Soquel, Capitola job boards and Facebook groups. Explicitly mention: "Watsonville residents welcome—easy commute."
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Schedule to Minimize Commute Burden</strong>
          </p>
          <p className="mb-4">
            Avoid requiring split shifts (commute twice daily). Offer longer single shifts. Compress schedules (four 10-hour days instead of five 8-hour). Make commute worthwhile.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Gas Stipend</strong>
          </p>
          <p className="mb-4">
            Offer $100-200/month gas stipend for commuters. Acknowledges their transportation cost, makes job more viable.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Carpool Coordination</strong>
          </p>
          <p className="mb-4">
            If multiple employees commute from same area, help coordinate carpools. Reduces individual cost and environmental impact.
          </p>

          <p className="mb-4 mt-6">
            <strong>Reality Check:</strong> Many Santa Cruz businesses already depend on commuters from lower-cost areas. Embrace this instead of fighting it.
          </p>
        </>
      )
    },
    {
      title: 'Part-Time and Flexible Work Models',
      content: (
        <>
          <p className="mb-4">
            If you can't pay living wages for full-time work, structure jobs for people who don't need living wages.
          </p>

          <p className="mb-6 mt-6">
            <strong>Alternative Work Models:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Part-Time Roles for Supplemental Income</strong>
          </p>
          <p className="mb-4">
            Target people with main income covered: retirees, students, parents with working partners, people with remote primary jobs. They can work 15-25 hours/week at modest wages because it's supplemental, not survival income.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Job Sharing</strong>
          </p>
          <p className="mb-4">
            One full-time role split between two part-time people. Each works 20 hours, each can manage with supplemental income. You get coverage and flexibility.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Seasonal Employment</strong>
          </p>
          <p className="mb-4">
            Hire for summer only. Teachers, students on break, people who have winter income covered. Paying modest wages for temporary work is more acceptable than for year-round survival needs.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Project-Based Contract Work</strong>
          </p>
          <p className="mb-4">
            Instead of hourly employee, hire contractors for specific projects. They might have multiple clients, making total income viable even if your piece is modest.
          </p>
        </>
      )
    },
    {
      title: 'The Painful Truth: Some Businesses Can\'t Sustain Local Wages',
      content: (
        <>
          <p className="mb-4">
            If your business model requires paying $15-18/hour for positions that require employees to afford Santa Cruz housing, your business model doesn't work in this market. Hard truth.
          </p>

          <p className="mb-6 mt-6">
            <strong>Options:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Raise prices</strong> to support higher wages (customers might accept $1-2 increases)</li>
            <li><strong>Reduce staffing</strong> and owner works more hours</li>
            <li><strong>Automate</strong> where possible to need fewer employees</li>
            <li><strong>Restructure roles</strong> to need fewer full-time positions</li>
            <li><strong>Accept commuter workforce</strong> from lower-cost areas</li>
            <li><strong>Relocate business</strong> to area where wages match cost of living</li>
            <li><strong>Exit business</strong> if model isn't sustainable</li>
          </ul>

          <p className="mb-4 mt-6">
            Santa Cruz's cost-of-living crisis will not resolve soon. Your business needs a strategy that works in current reality, not wishful thinking about housing costs decreasing.
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
            Hiring Challenges from Santa Cruz's High Cost of Living
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Navigate the disconnect between wages and housing costs in Santa Cruz. Strategies to help employees afford to work for your business.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Structuring Competitive Compensation?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses create compensation packages that work within budget constraints while addressing cost-of-living realities. Build sustainable staffing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Design Compensation Strategy
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Hiring Challenges
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

