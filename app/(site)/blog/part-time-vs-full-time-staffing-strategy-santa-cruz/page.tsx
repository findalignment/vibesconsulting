import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Part-Time vs Full-Time Staffing Strategy for Santa Cruz Businesses',
  description: 'Strategic analysis of part-time vs full-time staffing models for Santa Cruz businesses. Balance cost, reliability, and flexibility.',
  keywords: 'part-time vs full-time, staffing strategy, santa cruz employment, workforce planning, scheduling'
})

export default function PartTimeVsFullTimeStaffing() {
  const sections = [
    {
      title: 'The Staffing Model Decision',
      content: (
        <>
          <p className="mb-4">
            Full-time employees: more commitment, higher costs, benefits expectations, but stable and invested. Part-time employees: flexible, lower cost, easier to find, but less reliable and committed. Which should you build around?
          </p>
          <p className="mb-4">
            The answer isn't one-size-fits-all. Your optimal staffing model depends on business type, hours of operation, budget constraints, and Santa Cruz's specific labor market realities. Most successful businesses use intentional hybrid approach—some full-time core, supplemented by strategic part-time staff.
          </p>
        </>
      )
    },
    {
      title: 'Full-Time Staffing Model',
      content: (
        <>
          <p className="mb-6 mt-4">
            <strong>Advantages of Full-Time Staff:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Higher commitment:</strong> Full-time job = primary income = more invested in success</li>
            <li><strong>Better training ROI:</strong> Worth investing heavily in training someone working 40 hours vs 15</li>
            <li><strong>Consistency:</strong> Same people, every day, building expertise and relationships</li>
            <li><strong>Accountability:</strong> Easier to hold full-time staff to high standards—it's their career</li>
            <li><strong>Institutional knowledge:</strong> Full-time staff become experts in your operations</li>
            <li><strong>Manager material:</strong> Leadership comes from full-time ranks</li>
            <li><strong>Customer relationships:</strong> Regulars build connections with consistent staff</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Disadvantages of Full-Time Staff:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Higher cost:</strong> Full-time = healthcare, benefits, PTO, higher hourly expectations</li>
            <li><strong>Harder to find in Santa Cruz:</strong> People need high wages for full-time commitment, which you might not afford</li>
            <li><strong>Less flexibility:</strong> Can't easily cut hours when slow</li>
            <li><strong>Harder to fire:</strong> Full-time termination feels more significant, creates more risk</li>
            <li><strong>Benefit obligations:</strong> In California, 30+ hours triggers various benefit requirements</li>
            <li><strong>Higher unemployment costs:</strong> Full-time terminations cost more in UI</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Full-Time Makes Sense When:</strong> You need deep expertise, have stable year-round demand, can afford benefits, and value institutional knowledge over flexibility.
          </p>
        </>
      )
    },
    {
      title: 'Part-Time Staffing Model',
      content: (
        <>
          <p className="mb-6 mt-4">
            <strong>Advantages of Part-Time Staff:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Lower cost:</strong> No benefits, fewer hours, more affordable</li>
            <li><strong>Easier to find:</strong> Students, parents, retirees, people with other jobs—larger candidate pool</li>
            <li><strong>Flexibility:</strong> Can adjust hours based on demand without guilt/commitment</li>
            <li><strong>Multiple people = coverage:</strong> One person sick? Others can cover. Full-timer out = crisis</li>
            <li><strong>Lower commitment risk:</strong> Hiring part-time feels less permanent, easier to test</li>
            <li><strong>Diverse perspectives:</strong> Multiple people bring different skills/ideas</li>
            <li><strong>Works with Santa Cruz lifestyle:</strong> Many people want part-time to maintain surf/life balance</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Disadvantages of Part-Time Staff:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Lower commitment:</strong> It's not their primary focus, just supplemental income</li>
            <li><strong>Higher turnover:</strong> Easier to quit part-time job than full-time career</li>
            <li><strong>Scheduling complexity:</strong> Coordinating 6-8 part-timers vs managing 2-3 full-timers</li>
            <li><strong>Training burden:</strong> More people = more training, more onboarding</li>
            <li><strong>Less expertise:</strong> 15 hours/week = slower skill development</li>
            <li><strong>Availability conflicts:</strong> "I need this Saturday off" × 6 employees = scheduling nightmare</li>
            <li><strong>Less invested:</strong> Don't identify with business success like full-timers do</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Part-Time Makes Sense When:</strong> You have variable demand, tight budget, need flexibility, and can handle higher turnover and scheduling complexity.
          </p>
        </>
      )
    },
    {
      title: 'The Hybrid Model (Most Common Success)',
      content: (
        <>
          <p className="mb-4">
            Most Santa Cruz businesses don't choose one or the other—they build strategic mix.
          </p>

          <p className="mb-6 mt-6">
            <strong>Optimal Hybrid Structure:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Full-Time Core Positions:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Owner/manager:</strong> Leadership requires full-time commitment</li>
            <li><strong>Opening person:</strong> Needs to be there every day, reliable</li>
            <li><strong>Key operational roles:</strong> Head chef, lead technician, core producer</li>
            <li><strong>1-2 senior staff:</strong> Institutional knowledge holders</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>Part-Time Flexible Positions:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Weekend coverage:</strong> Students, people with other weekday jobs</li>
            <li><strong>Peak time support:</strong> Lunch rush, dinner service, busy season</li>
            <li><strong>Specialized roles:</strong> Once-weekly bookkeeping, monthly deep clean</li>
            <li><strong>Variable demand positions:</strong> Scale up/down with business needs</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>Example: Restaurant Hybrid Model</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Full-time (3 people):</strong> Manager, head chef, lead server</li>
            <li><strong>Part-time (6-8 people):</strong> Line cooks, servers, hosts, dishwashers</li>
            <li><strong>Total labor:</strong> ~150-180 hours/week covered by mix</li>
          </ul>

          <p className="mb-4 mt-6">
            Full-timers provide stability and expertise. Part-timers provide flexibility and coverage. Together = sustainable model.
          </p>
        </>
      )
    },
    {
      title: 'Converting Part-Time to Full-Time',
      content: (
        <>
          <p className="mb-4">
            Smart strategy: hire as part-time, promote best ones to full-time after proving themselves.
          </p>

          <p className="mb-6 mt-6">
            <strong>Trial-to-Full-Time Pipeline:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Start Everyone Part-Time</strong>
          </p>
          <p className="mb-4">
            Lower commitment, lower risk. See who's actually reliable, skilled, culture fit. After 3-6 months, evaluate for full-time.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Gradual Hour Increase</strong>
          </p>
          <p className="mb-4">
            Top performers: offer more hours. 15 → 20 → 25 → 30 → 35. Shows growth path and tests their capacity before full-time commitment.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Full-Time as Reward</strong>
          </p>
          <p className="mb-4">
            "You've been excellent. We'd like to offer full-time position with benefits." Becomes aspiration instead of gamble. They've earned it.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Selective Conversion</strong>
          </p>
          <p className="mb-4">
            Not everyone wants or deserves full-time. Keep some roles part-time permanently. Only convert exceptional performers who want full-time commitment.
          </p>
        </>
      )
    },
    {
      title: 'Managing Part-Time Staff Effectively',
      content: (
        <>
          <p className="mb-4">
            Part-time staff require different management approach than full-time. Here's what works.
          </p>

          <p className="mb-6 mt-6">
            <strong>Part-Time Management Best Practices:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Consistent Scheduling</strong>
          </p>
          <p className="mb-4">
            "You work every Tuesday 4-9pm and Saturday 11-5pm" = predictable. Changes weekly = chaos. Consistent schedule despite part-time status builds reliability.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Minimum Hours Guarantee</strong>
          </p>
          <p className="mb-4">
            "Minimum 12 hours/week" ensures income predictability. They can plan life around guaranteed base.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Clear Communication Channels</strong>
          </p>
          <p className="mb-4">
            Group chat, shift scheduling app, clear system for shift trades. Part-timers aren't there every day—need digital coordination.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Proportional Respect</strong>
          </p>
          <p className="mb-4">
            Don't treat part-timers as lesser. They're choosing to work for you. Respect their time and contributions equally.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Team Integration</strong>
          </p>
          <p className="mb-4">
            Include part-timers in team meetings, social events, decisions. Don't create two-tier culture. Inclusion builds commitment.
          </p>
        </>
      )
    },
    {
      title: 'Cost Analysis: Which Is Actually Cheaper?',
      content: (
        <>
          <p className="mb-4">
            Part-time seems cheaper but hidden costs exist. Full-time seems expensive but creates efficiencies. Do the real math.
          </p>

          <p className="mb-6 mt-6">
            <strong>True Cost Comparison:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Scenario: Need 80 hours/week of labor coverage</strong>
          </p>

          <p className="mb-4 mt-6">
            <strong>Option A: 2 Full-Time Employees (40 hours each)</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Hourly: $22/hour × 80 hours = $1,760/week</li>
            <li>Healthcare: $400/month per person = $200/week</li>
            <li>PTO (2 weeks/year): $1,760/26 = $68/week</li>
            <li>Payroll taxes/UI: ~11% = $194/week</li>
            <li><strong>Total: $2,222/week</strong></li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>Option B: 5 Part-Time Employees (16 hours each)</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Hourly: $20/hour × 80 hours = $1,600/week</li>
            <li>No benefits: $0</li>
            <li>Payroll taxes/UI: ~9% (lower) = $144/week</li>
            <li>Training costs: 5 people instead of 2 = +$100/week amortized</li>
            <li>Scheduling management time: +$75/week</li>
            <li><strong>Total: $1,919/week</strong></li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Savings: $303/week with part-time model (~16% cheaper)</strong>
          </p>

          <p className="mb-4">
            But: Full-time model has less turnover, better service quality, institutional knowledge, less management overhead. Part-time model has flexibility, easier hiring, spread risk.
          </p>

          <p className="mb-4">
            Choose based on priorities, not just cost.
          </p>
        </>
      )
    },
    {
      title: 'California Legal Considerations',
      content: (
        <>
          <p className="mb-4">
            California has specific regulations around full-time vs part-time. Know what you're committing to.
          </p>

          <p className="mb-6 mt-6">
            <strong>Key Legal Issues:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. ACA Healthcare Threshold: 30 Hours</strong>
          </p>
          <p className="mb-4">
            If employee averages 30+ hours/week, you may need to offer health insurance (if over 50 employees total). Keep part-timers under 30 to avoid.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. California Predictive Scheduling Laws</strong>
          </p>
          <p className="mb-4">
            Some cities require advance schedule posting and pay for last-minute changes. Know local requirements.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Part-Time Rights</strong>
          </p>
          <p className="mb-4">
            Part-time employees have same rights as full-time: minimum wage, meal breaks, sick leave, etc. Don't treat as lesser class legally.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Misclassification Risk</strong>
          </p>
          <p className="mb-4">
            If "part-time" staff consistently work 40 hours, they're effectively full-time. Can't avoid full-time obligations by calling them part-time.
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
            Part-Time vs Full-Time Staffing Strategy for Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Strategic analysis of part-time and full-time staffing models. Build optimal workforce structure for your Santa Cruz business.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Designing Your Staffing Model?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses analyze staffing needs and build optimal mix of full-time and part-time employees for sustainability and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Optimize Your Staffing
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Workforce Needs
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

