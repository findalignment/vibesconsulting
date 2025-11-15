import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Managing Employee Housing Challenges in Santa Cruz | Employer Support Strategies',
  description: 'How Santa Cruz employers can help employees navigate the housing crisis. Practical strategies from direct housing support to creative solutions.',
  keywords: 'employee housing, santa cruz housing crisis, employer housing support, workforce housing, staff accommodation'
})

export default function ManagingEmployeeHousing() {
  const sections = [
    {
      title: 'The Housing Crisis Is Your Hiring Crisis',
      content: (
        <>
          <p className="mb-4">
            Your perfect candidate just declined your offer. Why? "I can't find anywhere to live in Santa Cruz." Another excellent employee gave notice. Reason? "Rent went up $600, I have to move to Watsonville." Your best manager wants more hours but can't work full-time because housing costs require second income. Santa Cruz's housing crisis isn't just community problem—it's your operational problem.
          </p>
          <p className="mb-4">
            You didn't create housing crisis. You can't solve it alone. But you can either ignore it and accept staffing consequences, or address it strategically and gain competitive advantage. Businesses that help employees with housing challenges attract better candidates and retain them longer. Those that don't lose talent to anyone offering housing support.
          </p>
        </>
      )
    },
    {
      title: 'Direct Housing Solutions',
      content: (
        <>
          <p className="mb-4">
            Most impactful (and expensive) approach: provide housing directly. Not realistic for all businesses but transformative when possible.
          </p>

          <p className="mb-6 mt-6">
            <strong>Direct Housing Options:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Employer-Owned Housing</strong>
          </p>
          <p className="mb-4">
            If you own or can buy rental property: offer to key employees at below-market rates. Example: Buy 3-bedroom house for $900K. Rent to 3 employees at $800/month each = $2,400/month. Market rate would be $1,200-1,500 each. Your $600-900/month/person housing subsidy is worth $7,200-10,800 annually per employee—equivalent to $3-5/hour raise.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. On-Site Housing</strong>
          </p>
          <p className="mb-4">
            Some industries (farms, property management, hospitality): on-site housing makes sense. Guest unit, converted garage, ADU on business property. Often easier to build/convert than buying separate rental property.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Group House for Employees</strong>
          </p>
          <p className="mb-4">
            Rent 4-bedroom house, offer rooms to employees. Market rent = $4,000/month. Charge employees $600/month each = $2,400. You cover $1,600/month gap. Subsidizes 4 employees, keeps team together, costs less than losing them to housing issues.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Housing as Compensation Package</strong>
          </p>
          <p className="mb-4">
            "$45K salary + housing included" vs "$60K no housing." Total compensation value is similar, but housing solves their biggest problem. Especially effective for key positions or seasonal workers.
          </p>

          <p className="mb-4 mt-6">
            <strong>ROI Reality:</strong> Seems expensive, but calculate alternative: constantly recruiting and training replacements, dealing with turnover, settling for mediocre employees who happen to have housing. Housing support often cheaper than turnover costs.
          </p>
        </>
      )
    },
    {
      title: 'Financial Housing Support',
      content: (
        <>
          <p className="mb-4">
            Can't provide housing directly? Provide financial support to make housing more affordable.
          </p>

          <p className="mb-6 mt-6">
            <strong>Financial Support Options:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Housing Stipend</strong>
          </p>
          <p className="mb-4">
            Add $300-800/month specifically for housing. "$20/hour + $500 housing stipend" = transparent about total compensation and addresses main obstacle. Makes your effective wages competitive with Bay Area when housing support is included.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Security Deposit Loan</strong>
          </p>
          <p className="mb-4">
            First/last/deposit = $6,000-9,000 upfront. Impossible barrier for many workers. Offer interest-free loan: "We'll cover your $6K deposit, you repay $250/month for 24 months." Removes barrier to finding housing in first place.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Rent Increase Protection</strong>
          </p>
          <p className="mb-4">
            When employee's rent increases, you increase their compensation to match. Shows commitment and prevents sudden departures due to rent spikes.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Co-Signing Leases</strong>
          </p>
          <p className="mb-4">
            Many landlords require income = 3x rent. Your $22/hour employee makes ~$3,600/month, can't qualify for $1,800 room. Offer to co-sign lease for key employees. Risk exists but shows commitment.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Housing Search Support</strong>
          </p>
          <p className="mb-4">
            Pay employee to spend work hours finding housing. "Take 10 hours this week on the clock to find place." Small cost prevents losing trained employee.
          </p>
        </>
      )
    },
    {
      title: 'Facilitation and Connections',
      content: (
        <>
          <p className="mb-4">
            You might not have money for direct housing support, but you have local network. Use connections to help employees find housing.
          </p>

          <p className="mb-6 mt-6">
            <strong>Network-Based Support:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Landlord Relationships</strong>
          </p>
          <p className="mb-4">
            Build relationships with local landlords. "I have excellent, employed, responsible tenant candidates." Landlords value referrals. Your recommendation carries weight. Helps employees get chosen from application pools.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Roommate Matching</strong>
          </p>
          <p className="mb-4">
            Connect employees looking for housing with each other. "Jane needs roommate, Tom needs place = introduce them." Solves problem for both, builds team culture.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Housing Board/List</strong>
          </p>
          <p className="mb-4">
            Maintain list of available rooms, apartments, house shares. Ask customers, network, local contacts. Post for employees. Saves them search time.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Property Manager Partnerships</strong>
          </p>
          <p className="mb-4">
            "We'll consistently refer quality tenants if you give our employees priority consideration." Win-win: they get pre-vetted tenants, you help staff.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Alternative Housing Solutions</strong>
          </p>
          <p className="mb-4">
            Help connect employees with: ADU rentals, house-sitting opportunities, live-in positions, van living resources, co-housing communities. Think creatively.
          </p>
        </>
      )
    },
    {
      title: 'Hiring Strategy Adaptations',
      content: (
        <>
          <p className="mb-4">
            If you can't help with housing, adapt hiring strategy to target people who've already solved housing problem.
          </p>

          <p className="mb-6 mt-6">
            <strong>Housing-Adapted Hiring:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Target People With Stable Housing</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Students in dorms (housing provided)</li>
            <li>People living with family (no rent)</li>
            <li>Homeowners (paid off or affordable mortgages)</li>
            <li>Long-term renters in rent-controlled units</li>
            <li>Retirees with established housing</li>
            <li>People with working partners who cover housing</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>2. Recruit from Lower-Cost Areas</strong>
          </p>
          <p className="mb-4">
            Watsonville, Scotts Valley, Capitola rent is 20-40% cheaper. Recruit there explicitly. Offer gas stipend for commute. Your wages work better for them.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Part-Time for Supplemental Income</strong>
          </p>
          <p className="mb-4">
            People who need full-time living wages can't afford Santa Cruz. People who need supplemental income can. Structure jobs for 15-25 hours, target people with housing covered.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Job Ads Acknowledge Housing</strong>
          </p>
          <p className="mb-4">
            "Watsonville residents welcome—easy commute" or "Housing stipend included" or "Help finding housing available." Shows you understand reality.
          </p>
        </>
      )
    },
    {
      title: 'Creative Housing Models',
      content: (
        <>
          <p className="mb-4">
            Some businesses get creative with housing. Not conventional but effective.
          </p>

          <p className="mb-6 mt-6">
            <strong>Unconventional Solutions:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. RV/Van Parking</strong>
          </p>
          <p className="mb-4">
            If you have parking lot: offer free overnight RV/van parking to employees. Increasing number of workers choose vehicle living to afford Santa Cruz. Provide safe spot, bathroom/shower access. Costs you nothing, solves their housing.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Tiny Home on Business Property</strong>
          </p>
          <p className="mb-4">
            If you own property: install tiny home or converted shipping container. One-time $20-40K investment provides housing for key employee indefinitely. Often easier to get permits as "accessory structure" than building traditional ADU.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. House-Sitting Networks</strong>
          </p>
          <p className="mb-4">
            Connect employees with customers who travel frequently. Free housing in exchange for house-sitting. Helps travelers, solves employee housing.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Seasonal Housing Swaps</strong>
          </p>
          <p className="mb-4">
            For seasonal businesses: UCSC students need summer housing when on campus. Non-students need winter housing when students are there. Facilitate swaps.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Employer Housing Cooperative</strong>
          </p>
          <p className="mb-4">
            Multiple small businesses pool resources to buy shared employee housing. Split costs and management. More feasible than one business alone.
          </p>
        </>
      )
    },
    {
      title: 'Legal and Liability Considerations',
      content: (
        <>
          <p className="mb-4">
            Housing support creates legal complexity. Do it right to avoid problems.
          </p>

          <p className="mb-6 mt-6">
            <strong>Legal Issues to Consider:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Housing as Taxable Benefit</strong>
          </p>
          <p className="mb-4">
            IRS may consider employer-provided housing as taxable income. Exceptions exist for on-site housing required for business. Consult tax professional.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Landlord-Tenant Law</strong>
          </p>
          <p className="mb-4">
            If you provide housing, you're landlord. Subject to California landlord-tenant law. Can't evict employee-tenant without proper process, even if fired.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Liability Issues</strong>
          </p>
          <p className="mb-4">
            If employee injured in your housing, potential workers comp or premises liability. Need proper insurance coverage.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Fair Housing Law</strong>
          </p>
          <p className="mb-4">
            Can't discriminate in housing decisions. If providing housing to employees, need consistent policies about who's eligible.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Separation of Work and Home</strong>
          </p>
          <p className="mb-4">
            When employee lives in your housing, work-life boundaries blur. Establish clear policies about separation. Can they have guests? Rules about noise, visitors, etc.?
          </p>

          <p className="mb-4 mt-6">
            <strong>Recommendation:</strong> Consult attorney before implementing housing programs. Better to structure correctly than deal with legal issues later.
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
            Managing Employee Housing Challenges in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Practical strategies for helping employees navigate Santa Cruz's housing crisis. Turn housing support into competitive advantage for hiring and retention.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Developing Housing Support Programs?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses design housing support strategies that work within budget while solving your biggest hiring and retention challenge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Develop Housing Strategy
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Staffing Challenges
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

