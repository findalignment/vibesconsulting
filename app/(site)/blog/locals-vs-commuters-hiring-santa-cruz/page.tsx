import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Should I Hire Local vs Commuter Employees in Santa Cruz? | Staffing Strategy',
  description: 'Pros and cons of hiring Santa Cruz locals vs commuters from Watsonville, Scotts Valley, and over the hill. Strategic decision-making for sustainable staffing.',
  keywords: 'santa cruz hiring, local employees, commuter workforce, staffing strategy, employee location'
})

export default function LocalsVsCommuters() {
  const sections = [
    {
      title: 'The Location Trade-Off',
      content: (
        <>
          <p className="mb-4">
            You want employees who live in Santa Cruz—they're embedded in community, don't deal with commute hassles, embody local culture. But Santa Cruz locals either can't afford to work for what you pay, or they're already employed by businesses that snagged them first. Meanwhile, you have qualified applicants from Watsonville, Scotts Valley, even over the hill—but worried about commute reliability and cultural fit.
          </p>
          <p className="mb-4">
            The "local vs commuter" question isn't about which is better in absolute terms. It's about understanding trade-offs and building staffing strategy that leverages advantages of both while mitigating disadvantages. Most successful Santa Cruz businesses have intentional mix, not ideological preference.
          </p>
        </>
      )
    },
    {
      title: 'Advantages of Santa Cruz Local Employees',
      content: (
        <>
          <p className="mb-6 mt-4">
            <strong>Why Locals Are Valuable:</strong>
          </p>
          
          <p className="mb-4 mt-4">
            <strong>1. Zero Commute = Higher Reliability</strong>
          </p>
          <p className="mb-4">
            Can bike or walk to work. No "traffic was bad" excuses. No weather-dependent commute over Highway 17. Less likely to be late or no-show due to transportation issues.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Community Connection</strong>
          </p>
          <p className="mb-4">
            They know the community, recognize regulars, understand Santa Cruz culture. Especially valuable for customer-facing roles. They are your customer base.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Higher Availability</strong>
          </p>
          <p className="mb-4">
            Can come in for emergency shifts, respond to schedule changes, stay late if needed. 5-minute commute makes flexibility possible.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Long-Term Stability</strong>
          </p>
          <p className="mb-4">
            They chose Santa Cruz deliberately and work to stay here. Less likely to leave for opportunities elsewhere (already where they want to be).
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Cultural Alignment</strong>
          </p>
          <p className="mb-4">
            Naturally understand and embody Santa Cruz values: sustainability, local-first, authenticity, outdoor lifestyle. Don't need to train on culture—they live it.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Marketing Value</strong>
          </p>
          <p className="mb-4">
            "Locally staffed" matters to Santa Cruz customers. Locals as employees reinforces local business identity.
          </p>
        </>
      )
    },
    {
      title: 'Challenges with Santa Cruz Local Employees',
      content: (
        <>
          <p className="mb-6 mt-4">
            <strong>Why Locals Are Difficult:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Cost of Living Makes Wages Insufficient</strong>
          </p>
          <p className="mb-4">
            If they're paying Santa Cruz rent ($2,000-3,000+/month), your $18-22/hour doesn't work. They need $25-30+/hour to survive independently. You can't compete.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Limited Candidate Pool</strong>
          </p>
          <p className="mb-4">
            Everyone wants Santa Cruz locals. Competition is fierce. Every business is fishing from same small pond.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Lifestyle Expectations</strong>
          </p>
          <p className="mb-4">
            They live in Santa Cruz FOR the lifestyle. Expect surf flexibility, work-life balance, values alignment. Higher expectations than commuters who are purely here for job.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Many Are Students (Temporary)</strong>
          </p>
          <p className="mb-4">
            Affordable locals often = UCSC students. High turnover when they graduate. Not long-term stable workforce.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Housing Instability</strong>
          </p>
          <p className="mb-4">
            Many locals are one rent increase away from being priced out. "Local" today might be "relocated to Watsonville" next month.
          </p>
        </>
      )
    },
    {
      title: 'Advantages of Commuter Employees',
      content: (
        <>
          <p className="mb-6 mt-4">
            <strong>Why Commuters Are Valuable:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Your Wages Actually Work for Them</strong>
          </p>
          <p className="mb-4">
            Watsonville rent: $1,500-2,000 vs Santa Cruz $2,500-3,500. Your $20/hour is livable in Watsonville, poverty wages in Santa Cruz. They can actually afford to work for you.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Larger Candidate Pool</strong>
          </p>
          <p className="mb-4">
            Watsonville, Capitola, Aptos, Soquel, Scotts Valley, Felton, Boulder Creek—combined population far exceeds Santa Cruz proper. More people = more qualified candidates.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Less Competition for Talent</strong>
          </p>
          <p className="mb-4">
            Not every Santa Cruz business recruits from surrounding areas. If you do, you're accessing underutilized labor pool.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Job-Focused (Not Lifestyle-Focused)</strong>
          </p>
          <p className="mb-4">
            They're commuting to work, not living the Santa Cruz dream. More transactional relationship: do good work, get paid fairly. Lower lifestyle expectations.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Housing Stability</strong>
          </p>
          <p className="mb-4">
            Rent increases in Watsonville/Scotts Valley are less dramatic. They're less likely to be suddenly priced out and have to relocate again.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Often Bilingual (Especially Watsonville)</strong>
          </p>
          <p className="mb-4">
            Watsonville is 82% Hispanic. Many commuters from there are bilingual—huge advantage for serving diverse customer base.
          </p>
        </>
      )
    },
    {
      title: 'Challenges with Commuter Employees',
      content: (
        <>
          <p className="mb-6 mt-4">
            <strong>Why Commuters Are Difficult:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Commute Reliability Issues</strong>
          </p>
          <p className="mb-4">
            Traffic on 17, Highway 1, or surface streets. Weather impacts. Car breakdowns. More variables = more potential for lateness or no-shows.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Transportation Costs</strong>
          </p>
          <p className="mb-4">
            Gas, car maintenance, time. Commute costs eat into effective wages. $20/hour - $100/month gas - 1 hour daily commute time = less attractive than it appears.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Less Flexibility</strong>
          </p>
          <p className="mb-4">
            Can't easily cover emergency shifts or stay late. "Can you come in an hour early?" is bigger ask when it means waking up even earlier for commute.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Higher Turnover Risk</strong>
          </p>
          <p className="mb-4">
            If they find equivalent job closer to home, they'll take it. Commute is tolerable, not preferred. Always looking for closer opportunities.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Less Community Connection</strong>
          </p>
          <p className="mb-4">
            Don't live Santa Cruz lifestyle, might not know local culture, don't recognize community members. Can feel less authentic to customers who value local businesses.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Split Shifts Don't Work</strong>
          </p>
          <p className="mb-4">
            "Work 8-11am, break, return 5-9pm" is impossible for commuters. Requires schedule accommodation.
          </p>
        </>
      )
    },
    {
      title: 'The Strategic Mix Approach',
      content: (
        <>
          <p className="mb-4">
            Best staffing strategy: intentional combination of locals and commuters, leveraging strengths of each.
          </p>

          <p className="mb-6 mt-6">
            <strong>Optimal Staffing Mix Strategy:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Hire Locals For:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Management/senior roles:</strong> Need deep community understanding and high availability</li>
            <li><strong>Opening/closing shifts:</strong> Early mornings or late nights harder for commuters</li>
            <li><strong>Customer-facing positions:</strong> Where Santa Cruz cultural fluency matters</li>
            <li><strong>On-call needs:</strong> Emergency coverage requires proximity</li>
            <li><strong>Brand ambassador roles:</strong> They embody your local identity</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>Hire Commuters For:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Mid-day shifts:</strong> Standard hours, no early/late challenges</li>
            <li><strong>Backend roles:</strong> Kitchen, production, operations where customer interaction is minimal</li>
            <li><strong>Bilingual positions:</strong> Watsonville has large Spanish-speaking workforce</li>
            <li><strong>Stable, consistent schedules:</strong> Same hours weekly makes commute predictable</li>
            <li><strong>Full-time roles:</strong> Commute more worthwhile for 40 hours than 20</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Example Mix:</strong> Restaurant with 10 employees: 3 Santa Cruz locals (manager, morning prep, closing lead) + 7 commuters (line cooks, servers on consistent mid-shifts). Locals provide stability and culture, commuters provide affordable reliable workforce.
          </p>
        </>
      )
    },
    {
      title: 'Supporting Commuter Success',
      content: (
        <>
          <p className="mb-4">
            If you hire commuters, set them up for success. Don't just hope commute works out—actively support them.
          </p>

          <p className="mb-6 mt-6">
            <strong>Commuter Support Strategies:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Transportation Stipend</strong>
          </p>
          <p className="mb-4">
            $100-200/month gas stipend or mileage reimbursement. Acknowledges their transportation cost, makes job more economically viable.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Compressed Schedules</strong>
          </p>
          <p className="mb-4">
            Four 10-hour shifts instead of five 8-hour. Reduces commute days from 5 to 4 per week. Saves gas and time.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Consistent Schedules</strong>
          </p>
          <p className="mb-4">
            Same days and times weekly. Allows carpooling, predictable budgeting, routine establishment. Reduces commute burden.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Carpool Coordination</strong>
          </p>
          <p className="mb-4">
            If multiple employees commute from same area, help connect them for carpools. Splits costs and makes commute social instead of solo grind.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Weather/Traffic Grace Period</strong>
          </p>
          <p className="mb-4">
            Acknowledge that commute has unpredictable variables. "If you're late due to Highway 17 closure, we understand." Build trust and reduce stress.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Meal Benefits</strong>
          </p>
          <p className="mb-4">
            Free meal during shift reduces need to pack lunch or eat out. Small cost to you, meaningful value to them (especially for long shifts where eating at home isn't option).
          </p>
        </>
      )
    },
    {
      title: 'Finding Hidden "Functional Locals"',
      content: (
        <>
          <p className="mb-4">
            Some people technically aren't Santa Cruz residents but function like locals: they're here daily anyway for other reasons.
          </p>

          <p className="mb-6 mt-6">
            <strong>"Functional Local" Categories:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. UCSC Students Living On-Campus</strong>
          </p>
          <p className="mb-4">
            Technically not Santa Cruz city residents, but they're here 9 months/year with no commute. Affordable (dorm living), available, embedded in community during school year.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. People Who Work in Santa Cruz for Other Jobs</strong>
          </p>
          <p className="mb-4">
            Already commuting to Santa Cruz daily for main job. Your part-time evening/weekend role requires no additional commute. They're already here.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Partners of Santa Cruz Residents</strong>
          </p>
          <p className="mb-4">
            Live in Aptos/Capitola but partner works in Santa Cruz. They're in town regularly anyway. Hybrid between true local and distant commuter.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Parents with Kids in Santa Cruz Schools</strong>
          </p>
          <p className="mb-4">
            Commute from Scotts Valley but kids go to school in Santa Cruz. Already making trip daily. Perfect for 9am-3pm shifts during school hours.
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
            Should I Hire Locals vs Commuters in Santa Cruz?
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Strategic analysis of hiring Santa Cruz residents vs commuters from surrounding areas. Build optimal staffing mix for reliability and sustainability.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Building Effective Staffing Strategy?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses design staffing models that balance local cultural fit with practical wage/commute realities. Create sustainable workforce strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Design Staffing Strategy
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

