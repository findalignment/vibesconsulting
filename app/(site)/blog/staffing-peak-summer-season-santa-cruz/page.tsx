import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Staffing for Summer Peak Season in Santa Cruz Without Overhiring',
  description: 'How to scale your team for Santa Cruz summer rush without getting stuck with too many employees in winter. Seasonal staffing strategies that actually work.',
  keywords: 'santa cruz summer staffing, seasonal hiring, peak season employees, summer rush staffing, temporary workers santa cruz'
})

export default function StaffingPeakSummer() {
  const sections = [
    {
      title: 'The Summer Staffing Paradox',
      content: (
        <>
          <p className="mb-4">
            Summer in Santa Cruz demands triple the staff. Winter requires minimal coverage. If you staff for summer capacity year-round, you'll go broke paying people who have nothing to do six months of the year. If you staff for winter efficiency, you'll drown in summer chaos, deliver terrible service, and burn out your core team.
          </p>
          <p className="mb-4">
            This isn't a hiring problem—it's a workforce architecture problem. You need a staffing model that scales up and down predictably without constant turnover, endless training, or unemployment insurance penalties. And you need to build it in a market where everyone's competing for the same seasonal workers.
          </p>
          <p className="mb-4">
            The Santa Cruz businesses that handle summer rush well aren't just lucky with hiring. They've built deliberate systems for seasonal workforce scaling that most businesses never think about.
          </p>
        </>
      )
    },
    {
      title: 'The Core Team vs. Seasonal Team Model',
      content: (
        <>
          <p className="mb-4">
            The most effective staffing model for seasonal Santa Cruz businesses is simple: maintain a small core team year-round, and build a larger seasonal team that expects temporary work.
          </p>

          <p className="mb-6">
            <strong>Your Core Team (Year-Round):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Managers and lead positions</li>
            <li>Key operational roles that require deep business knowledge</li>
            <li>People responsible for training seasonal staff</li>
            <li>Customer relationships and reputation management</li>
            <li>Financial and administrative functions</li>
          </ul>
          <p className="mb-4">
            These are your full-time, year-round employees. They get benefits, consistent hours, and job security. In winter, they work reduced hours but stay on payroll. This team should be sized to handle your minimum winter capacity, not your maximum summer demand.
          </p>

          <p className="mb-6 mt-8">
            <strong>Your Seasonal Team (April-October):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Customer-facing service roles</li>
            <li>Kitchen or back-of-house support</li>
            <li>Cleaning and maintenance</li>
            <li>Sales floor or retail support</li>
            <li>Delivery and logistics</li>
          </ul>
          <p className="mb-4">
            These are explicitly temporary positions with defined start and end dates. Ideally, you hire the same people back each summer, so they already know your business and require minimal training.
          </p>

          <p className="mb-4">
            <strong>The key insight:</strong> Both teams need to know what they are from the start. Core team members aren't worried about being let go in winter. Seasonal team members aren't surprised when the season ends. Clarity eliminates drama.
          </p>
        </>
      )
    },
    {
      title: 'Recruiting Seasonal Workers Who Come Back',
      content: (
        <>
          <p className="mb-4">
            The best seasonal workers are the ones who return year after year. Training new people every summer is expensive, slow, and destroys service quality. Building a roster of returning seasonal employees is a competitive advantage.
          </p>

          <p className="mb-6">
            <strong>Who Makes Great Seasonal Workers in Santa Cruz:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Teachers:</strong> Off all summer, looking for supplemental income, reliable adults</li>
            <li><strong>College students:</strong> Home for summer, flexible schedules, energetic</li>
            <li><strong>Retirees:</strong> Want part-time work, reliable, experienced with customer service</li>
            <li><strong>Remote workers:</strong> Need in-person social time, flexible main job allows side work</li>
            <li><strong>Artists/creatives:</strong> Need summer income to support winter creative work</li>
            <li><strong>Seasonal workers from other industries:</strong> Ski instructors looking for summer work, etc.</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>How to Keep Them Coming Back:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Pay slightly above market rate (retention is cheaper than recruiting)</li>
            <li>Create a great work environment (people return to places they enjoy)</li>
            <li>Provide flexibility for good performers</li>
            <li>Offer small raises for each returning season</li>
            <li>Stay in touch during off-season (email updates, social events)</li>
            <li>Give priority rehire status to previous season's strong performers</li>
            <li>Create an "alumni network" so returning workers know each other</li>
          </ul>

          <p className="mb-4 mt-6">
            Some Santa Cruz businesses have 80%+ return rates for seasonal workers. This isn't luck—it's intentional relationship building that extends beyond the employment period.
          </p>
        </>
      )
    },
    {
      title: 'The Seasonal Hiring Timeline',
      content: (
        <>
          <p className="mb-4">
            If you're posting seasonal job listings in May, you're too late. The best seasonal workers are claimed by February or March. Here's the timeline that works:
          </p>

          <p className="mb-6 mt-6">
            <strong>January-February: Recruit Returning Seasonal Workers</strong>
          </p>
          <p className="mb-4">
            Contact everyone who worked for you last summer. Offer them first right of refusal for the upcoming season. Get commitments early. These people require minimal training and hit the ground running.
          </p>

          <p className="mb-6 mt-8">
            <strong>March: Fill Remaining Positions</strong>
          </p>
          <p className="mb-4">
            Now recruit for the positions your returning workers didn't fill. This gives you 8-10 weeks to interview, hire, and possibly do background checks before you need people on the floor.
          </p>

          <p className="mb-6 mt-8">
            <strong>April: Training and Onboarding</strong>
          </p>
          <p className="mb-4">
            Bring seasonal workers on early April at reduced hours. Train them before the rush hits. Let them learn systems while you still have time to teach properly. By Memorial Day, they should be fully operational.
          </p>

          <p className="mb-6 mt-8">
            <strong>May-September: Peak Season Operation</strong>
          </p>
          <p className="mb-4">
            Everyone's working full capacity. You're not thinking about hiring—you're executing.
          </p>

          <p className="mb-6 mt-8">
            <strong>September-October: Transition Planning</strong>
          </p>
          <p className="mb-4">
            Have clear conversations about end dates. Identify who you want to invite back next year. Document what they did well and areas for improvement. Get their contact info for next season.
          </p>

          <p className="mb-6 mt-8">
            <strong>November-December: Seasonal Team Ends, Core Team Continues</strong>
          </p>
          <p className="mb-4">
            Seasonal workers transition out (with thanks and goodbye bonuses for top performers). Core team continues at reduced winter hours. Begin planning for next season's staffing.
          </p>
        </>
      )
    },
    {
      title: 'Training Systems for Fast Onboarding',
      content: (
        <>
          <p className="mb-4">
            You don't have time to train seasonal workers slowly. They need to be competent quickly, or your summer service quality suffers. This requires training systems, not just "shadow someone for a week and hope it works out."
          </p>

          <p className="mb-6">
            <strong>What Works for Rapid Training:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Video training modules:</strong> Record core procedures once, new hires watch before first shift</li>
            <li><strong>Checklists for every position:</strong> Step-by-step guides for opening, closing, common tasks</li>
            <li><strong>Buddy system:</strong> Pair new hires with returning seasonal workers who know the ropes</li>
            <li><strong>Staged responsibility:</strong> Simple tasks first, complex tasks after proven competence</li>
            <li><strong>Daily feedback in first two weeks:</strong> Correct mistakes immediately while habits are forming</li>
            <li><strong>Written SOPs:</strong> One-page guides for common situations and edge cases</li>
          </ul>

          <p className="mb-4 mt-6">
            The businesses that train seasonal workers well spend 1-2 hours documenting processes once, then reuse that training material every season. The businesses that train poorly spend 40+ hours every summer explaining the same things repeatedly.
          </p>
        </>
      )
    },
    {
      title: 'Managing Reduced Hours vs. Layoffs',
      content: (
        <>
          <p className="mb-4">
            When summer ends, you have three options for your core team: lay them off, keep them at full hours with nothing to do, or reduce to part-time winter hours. Most successful seasonal businesses choose option three.
          </p>

          <p className="mb-6">
            <strong>Why Reduced Hours Beat Layoffs:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Keeps trained team intact (rehiring and retraining costs more)</li>
            <li>Maintains unemployment insurance rates (layoffs increase rates)</li>
            <li>Preserves morale and loyalty</li>
            <li>Allows flexibility to scale back up if winter is better than expected</li>
            <li>Ensures you're ready when season ramps back up</li>
          </ul>

          <p className="mb-4 mt-6">
            Be transparent from the start: "This is a full-time position April-October, part-time November-March." People can plan their finances accordingly. Surprises create resentment; clarity creates loyalty.
          </p>

          <p className="mb-4">
            Some businesses offer a "winter stipend" on top of reduced hours—a small monthly bonus to help cover the gap. This costs less than unemployment insurance rate increases and keeps your best people from finding year-round work elsewhere.
          </p>
        </>
      )
    },
    {
      title: 'The "Floater" Strategy for Unpredictable Demand',
      content: (
        <>
          <p className="mb-4">
            Summer demand isn't consistent—some days you're crushed, some days you're comfortable. Rather than overstaffing every day, smart businesses use "floater" positions: people who work variable hours based on actual demand.
          </p>

          <p className="mb-6">
            <strong>How Floaters Work:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Hired with expectation of variable weekly hours (10-30 hours)</li>
            <li>Scheduled week-to-week based on reservations/bookings</li>
            <li>Get first pick of extra shifts when busy</li>
            <li>Usually have other part-time work or flexible schedules</li>
            <li>Paid slightly higher hourly rate to compensate for uncertainty</li>
          </ul>

          <p className="mb-4">
            This works well for roles like kitchen support, retail sales floor, cleaning crew, or customer service. It doesn't work well for positions requiring consistent presence like management or skilled technical roles.
          </p>

          <p className="mb-4">
            The key is finding people who value flexibility over consistency: students, retirees, gig workers, or people with other part-time jobs. In Santa Cruz's flexible culture, these workers are easier to find than you'd expect.
          </p>
        </>
      )
    },
    {
      title: 'Legal and Compliance Considerations',
      content: (
        <>
          <p className="mb-4">
            California has strict labor laws, and seasonal hiring doesn't exempt you from any of them. Getting this wrong is expensive.
          </p>

          <p className="mb-6">
            <strong>Key Compliance Issues:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Employee vs. contractor:</strong> Seasonal workers are almost always employees, not contractors</li>
            <li><strong>Overtime rules:</strong> Apply regardless of seasonal status</li>
            <li><strong>Meal and rest breaks:</strong> Required even for temporary workers</li>
            <li><strong>Workers compensation:</strong> Must cover all employees including seasonal</li>
            <li><strong>Unemployment insurance:</strong> Seasonal workers may qualify; understand how this affects rates</li>
            <li><strong>Final paycheck timing:</strong> Must provide immediately upon termination in California</li>
          </ul>

          <p className="mb-4 mt-6">
            Consult with an employment attorney or HR professional familiar with California seasonal employment law. The cost of a consultation is trivial compared to the cost of a labor law violation.
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
            Staffing for Peak Summer Season Without Overhiring
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            How to scale your team for Santa Cruz's summer rush without getting stuck with too many employees when winter hits. Build a seasonal staffing system that works year after year.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Building Hiring and Training Systems?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses document their training processes, build onboarding systems, and create staffing models that scale with seasonal demand. Stop reinventing hiring every year—build systems that work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Learn About Business Flow Analysis
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

