import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Weekend vs Weekday Staffing Optimization for Santa Cruz Businesses',
  description: 'How to staff for weekend rush vs weekday consistency in Santa Cruz. Optimize labor costs while maintaining service quality across different demand patterns.',
  keywords: 'weekend staffing, weekday operations, santa cruz staffing patterns, labor optimization, weekend rush'
})

export default function WeekendWeekdayStaffing() {
  const sections = [
    {
      title: 'The Weekend-Weekday Demand Split',
      content: (
        <>
          <p className="mb-4">
            In Santa Cruz, weekends aren't just busier—they're a completely different business. Tourist-heavy Saturday afternoons bear no resemblance to local-driven Tuesday mornings. Staff appropriately for both and you're profitable. Staff the same for both and you're either wasting money or delivering terrible service.
          </p>
          <p className="mb-4">
            Most businesses make one of two mistakes: they staff for average demand (understaffed weekends, overstaffed weekdays) or they staff for peak demand (perfect weekends, hemorrhaging money on weekdays). Neither works. You need variable staffing that matches actual demand patterns.
          </p>
          <p className="mb-4">
            The businesses that get this right aren't guessing—they've tracked their demand patterns, built flexible staffing models, and created systems that allow scaling up and down without chaos. This isn't complicated, but it requires data and discipline.
          </p>
        </>
      )
    },
    {
      title: 'Understanding Your Specific Demand Pattern',
      content: (
        <>
          <p className="mb-4">
            "Weekends are busier" isn't specific enough. You need to know exactly how much busier, which hours, and how consistent the pattern is.
          </p>

          <p className="mb-6 mt-6">
            <strong>Data to Track (For 4-6 Weeks):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Transactions per hour by day of week:</strong> Monday through Sunday</li>
            <li><strong>Revenue per hour by day:</strong> Volume and dollars might differ</li>
            <li><strong>Peak hours each day:</strong> When do rushes actually happen?</li>
            <li><strong>Slow periods:</strong> When could you operate with minimal staff?</li>
            <li><strong>Variability:</strong> Is Saturday consistently busy or unpredictable?</li>
            <li><strong>Seasonal differences:</strong> Summer weekdays vs winter weekdays</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Common Santa Cruz Patterns:</strong>
          </p>

          <p className="mb-4">
            <strong>Tourist-Focused Businesses:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Saturday: 200-300% of weekday average</li>
            <li>Sunday: 150-200% of weekday average</li>
            <li>Friday: 120-150% (weekend starts early)</li>
            <li>Monday-Thursday: Relatively consistent, local-driven</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Local-Focused Businesses:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Weekend: 130-160% of weekday</li>
            <li>Less dramatic difference, more consistent overall</li>
            <li>Tuesday-Thursday often busiest weekdays</li>
            <li>Monday slightly slower</li>
          </ul>

          <p className="mb-4 mt-6">
            Once you know your specific pattern, you can staff appropriately instead of guessing.
          </p>
        </>
      )
    },
    {
      title: 'Building a Flexible Staffing Model',
      content: (
        <>
          <p className="mb-4">
            The goal is a staffing model that scales with demand without requiring complete schedule rewrites every week.
          </p>

          <p className="mb-6 mt-6">
            <strong>Core Team + Flex Team Approach:</strong>
          </p>

          <p className="mb-4">
            <strong>Core Team (Full-Time or Consistent Part-Time):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Sized for your baseline weekday demand</li>
            <li>Work consistent schedules (easier for them, reliable for you)</li>
            <li>Handle all shifts Monday-Thursday</li>
            <li>Some work weekends, but not all weekend shifts</li>
            <li>Your experienced, trained, reliable staff</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>Flex Team (Variable Hours):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Primarily work high-demand periods (weekends, evenings)</li>
            <li>Variable weekly hours (10-30 depending on need)</li>
            <li>Scheduled week-to-week based on forecasted demand</li>
            <li>Often students, retirees, or people with other part-time work</li>
            <li>Compensate variability with slightly higher hourly rate</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Example Schedule Structure:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Monday-Thursday:</strong> Core team handles everything (3-4 people)</li>
            <li><strong>Friday:</strong> Core team + 1-2 flex workers</li>
            <li><strong>Saturday:</strong> Mix of core + 3-4 flex workers</li>
            <li><strong>Sunday:</strong> Mix of core + 2-3 flex workers</li>
          </ul>

          <p className="mb-4">
            This model gives you flexibility without constant schedule chaos. Core team knows their schedule weeks in advance. Flex team expects variable hours and gets scheduled based on demand.
          </p>
        </>
      )
    },
    {
      title: 'The Math of Labor Cost Optimization',
      content: (
        <>
          <p className="mb-4">
            Labor should be your largest variable cost—it should scale with revenue. But most businesses treat it like a fixed cost, scheduling the same people regardless of demand.
          </p>

          <p className="mb-6 mt-6">
            <strong>Target Labor Percentage:</strong>
          </p>
          <p className="mb-4">
            Most Santa Cruz service businesses should target 25-35% labor cost as percentage of revenue. If you're consistently above 40%, you're overstaffed. Below 20% means you're probably understaffed and service is suffering.
          </p>

          <p className="mb-6 mt-8">
            <strong>Calculate Your Labor Efficiency:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Monday revenue:</strong> $1,200</li>
            <li><strong>Monday labor cost:</strong> $360 (3 staff @ $20/hr × 6 hours)</li>
            <li><strong>Labor %:</strong> 30% (good)</li>
          </ul>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Saturday revenue:</strong> $3,600</li>
            <li><strong>Saturday labor cost:</strong> $1,000 (8 staff @ $20/hr × 6 hours + overtime)</li>
            <li><strong>Labor %:</strong> 28% (good, even better)</li>
          </ul>

          <p className="mb-4 mt-6">
            If your Saturday labor percentage is higher than weekday despite more revenue, you're overstaffing weekends. If it's dramatically lower, you might be understaffing and losing sales to poor service.
          </p>

          <p className="mb-6 mt-8">
            <strong>Revenue Per Labor Hour (Better Metric):</strong>
          </p>
          <p className="mb-4">
            Track revenue generated per employee hour worked. This shows productivity directly.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Target: $60-100+ revenue per labor hour for most businesses</li>
            <li>Below $50: Probably overstaffed</li>
            <li>Above $120: Might be understaffed, service could be suffering</li>
          </ul>
        </>
      )
    },
    {
      title: 'Scheduling Systems That Work',
      content: (
        <>
          <p className="mb-4">
            Manual scheduling is painful and error-prone. Build systems that make flexible staffing manageable.
          </p>

          <p className="mb-6 mt-6">
            <strong>Simple Scheduling Rules:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Publish schedules 2 weeks out:</strong> Employees need predictability</li>
            <li><strong>Core team gets first pick of shifts:</strong> Reward consistency</li>
            <li><strong>Flex team scheduled last:</strong> Fill gaps based on forecasted demand</li>
            <li><strong>Shift swaps allowed:</strong> Staff work it out, manager just approves</li>
            <li><strong>Minimum 4-hour shifts:</strong> Short shifts are inefficient</li>
            <li><strong>No split shifts:</strong> Bad for morale, hard to fill</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Software Solutions (Optional but Helpful):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>When I Work:</strong> Simple, affordable, handles shift trading</li>
            <li><strong>Deputy:</strong> More features, demand forecasting built in</li>
            <li><strong>7shifts:</strong> Popular for restaurants specifically</li>
            <li><strong>Google Sheets:</strong> Free, works fine if you're organized</li>
          </ul>

          <p className="mb-4 mt-6">
            Software isn't required, but it eliminates schedule confusion, reduces time spent scheduling, and makes shift trades seamless. Worth the $50-100/month for most businesses.
          </p>
        </>
      )
    },
    {
      title: 'Handling Weekend Rush Without Burnout',
      content: (
        <>
          <p className="mb-4">
            Weekend rush is exhausting. If your core team works intense weekends week after week, they'll burn out. Build sustainability into your weekend operations.
          </p>

          <p className="mb-6 mt-6">
            <strong>Strategies to Prevent Weekend Burnout:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Rotating Weekend Coverage</strong>
          </p>
          <p className="mb-4">
            Don't require all core staff to work every weekend. Rotate so everyone gets 1-2 weekends off per month. Yes, this means some weekends are staffed with more flex workers, but your core team won't quit from exhaustion.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Weekend Differential Pay</strong>
          </p>
          <p className="mb-4">
            Pay $1-3/hour more for weekend shifts. Compensates for harder work and makes weekend shifts desirable rather than dreaded.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Limited Consecutive Weekends</strong>
          </p>
          <p className="mb-4">
            Nobody should work more than 3 weekends in a row without a break. Build this into scheduling rules.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Monday Recovery</strong>
          </p>
          <p className="mb-4">
            If someone worked hard weekend shifts, give them Monday off or shorter shift. Physical recovery matters.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Team Approach to Rush</strong>
          </p>
          <p className="mb-4">
            Have all hands on deck for 2-3 hour peak periods rather than skeleton crew struggling all day. Concentrated teamwork is less exhausting than prolonged understaffing.
          </p>
        </>
      )
    },
    {
      title: 'Weekday Optimization Opportunities',
      content: (
        <>
          <p className="mb-4">
            While everyone focuses on weekend optimization, weekday efficiency often has more improvement potential.
          </p>

          <p className="mb-6 mt-6">
            <strong>Weekday Staffing Strategies:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Strategic Closure Times</strong>
          </p>
          <p className="mb-4">
            If Tuesday 2-4pm generates $80 revenue but costs $120 in labor, consider closing that window. Save labor, redirect customers to profitable hours.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Consolidated Hours</strong>
          </p>
          <p className="mb-4">
            Instead of 8am-8pm with gaps of no customers, consider 10am-6pm when demand is concentrated. Same revenue, less labor waste.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Appointment-Based Weekdays</strong>
          </p>
          <p className="mb-4">
            Services businesses: Tuesday/Wednesday by appointment only. Staff only when confirmed business exists. No paying people to wait for walk-ins.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Manager-Heavy Weekdays</strong>
          </p>
          <p className="mb-4">
            Schedule managers for slower weekdays when they have time for admin, planning, training, inventory. Use high-demand weekends for customer-facing staff while manager oversees.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Deep Work Days</strong>
          </p>
          <p className="mb-4">
            Designate one slow weekday for projects: menu development, staff training, process improvement, marketing planning. Still generating some revenue but investing in business building.
          </p>
        </>
      )
    },
    {
      title: 'Measuring Success',
      content: (
        <>
          <p className="mb-4">
            Track these metrics weekly to know if your weekend/weekday staffing is optimized:
          </p>

          <p className="mb-6 mt-6">
            <strong>Key Metrics:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Labor cost % by day of week:</strong> Should be relatively consistent (±5%)</li>
            <li><strong>Revenue per labor hour by day:</strong> Target similar productivity</li>
            <li><strong>Customer complaints about wait times:</strong> Understaffing indicator</li>
            <li><strong>Employee complaints about stress/workload:</strong> Understaffing or poor rush management</li>
            <li><strong>Overtime hours:</strong> Should be minimal with good planning</li>
            <li><strong>Schedule change frequency:</strong> Constant changes = poor forecasting</li>
          </ul>

          <p className="mb-4 mt-6">
            If labor cost percentage on weekdays is 35% but weekends is 25%, you're overstaffed weekdays. If weekend is 40% and weekday is 30%, you're overstaffed weekends (or underpricing).
          </p>

          <p className="mb-4 mt-6">
            The goal isn't perfection—it's continuous improvement. Track data, adjust staffing, measure results, repeat. Over 3-6 months, you'll dial in the right model for your specific business.
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
            Weekend vs Weekday Staffing Optimization
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Build flexible staffing systems that match Santa Cruz's weekend rush and weekday consistency. Optimize labor costs without sacrificing service quality.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Optimizing Staffing and Labor Costs?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses analyze demand patterns, build flexible staffing models, and create scheduling systems that optimize labor efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Analyze Your Operations
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Staffing Challenges
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

