import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Preventing Employees from Leaving for Bay Area Jobs | Santa Cruz Retention',
  description: 'Why Santa Cruz employees leave for higher-paying Bay Area jobs and how to retain them. Strategies beyond just salary to keep quality staff.',
  keywords: 'employee retention, bay area jobs, santa cruz staffing, preventing turnover, keeping employees'
})

export default function PreventingBayAreaDepartures() {
  const sections = [
    {
      title: 'The Bay Area Poaching Problem',
      content: (
        <>
          <p className="mb-4">
            You just hired and trained someone excellent. They're reliable, customers love them, they know your systems. Then: "I got an offer over the hill for $15K more. It's a 90-minute commute, but I need the money." And they're gone. Three months of recruiting, hiring, and training vanished. You're back to square one.
          </p>
          <p className="mb-4">
            The Bay Area is a constant gravitational pull on Santa Cruz talent. Higher salaries, more job opportunities, better benefits, impressive company names. You can't compete on salary—tech administrative roles pay what you pay managers. But you're not losing to Bay Area alone. You're losing to the combination of proximity and financial pressure. Every employee is one indeed.com search away from discovering they could make 30-50% more over the hill.
          </p>
          <p className="mb-4">
            The businesses that keep employees aren't trying to outbid the Bay Area—they're making the lifestyle/compensation trade-off so favorable that commuting over the hill feels like a terrible deal even at higher pay.
          </p>
        </>
      )
    },
    {
      title: 'Why Employees Actually Leave',
      content: (
        <>
          <p className="mb-4">
            "More money" is what they tell you. But money is often the symptom, not the root cause. Understanding the real reasons helps you address them before Bay Area job looks appealing.
          </p>

          <p className="mb-6 mt-6">
            <strong>Actual Reasons People Leave:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Financial Crisis</strong>
          </p>
          <p className="mb-4">
            Rent increase, medical bills, car breakdown—sudden expense creates urgency. Need $500 more per month immediately. Bay Area salary solves crisis. They don't want to leave, but feel forced.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Feeling Undervalued</strong>
          </p>
          <p className="mb-4">
            No raise in two years while taking on more responsibility. Bay Area offer isn't just about money—it's validation. "Someone thinks I'm worth $60K, why are you paying me $40K?"
          </p>

          <p className="mb-4 mt-8">
            <strong>3. No Growth Path</strong>
          </p>
          <p className="mb-4">
            They've mastered their role but nowhere to progress. Bay Area offers senior title and advancement opportunities. Money matters but career trajectory matters more.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Lifestyle Creep Pressure</strong>
          </p>
          <p className="mb-4">
            Friends buying houses, having kids, traveling. They feel stuck financially. Bay Area money promises life progress. Social comparison drives decision.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Boredom or Frustration</strong>
          </p>
          <p className="mb-4">
            Same tasks daily, no variety, dealing with ongoing problems that never get fixed. Bay Area offers "fresh start." Money is excuse, real issue is stagnation.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Work-Life Balance Already Compromised</strong>
          </p>
          <p className="mb-4">
            You're already texting them on days off, requiring irregular schedules, creating stress. "If I'm going to be miserable, might as well make more money doing it." You've destroyed the main competitive advantage you had.
          </p>
        </>
      )
    },
    {
      title: 'Proactive Retention Strategies',
      content: (
        <>
          <p className="mb-4">
            Don't wait until they hand you resignation letter. Build retention into your culture from day one.
          </p>

          <p className="mb-6 mt-6">
            <strong>Continuous Retention Tactics:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Regular Raises (Non-Negotiable)</strong>
          </p>
          <p className="mb-4">
            Minimum $0.50/hour raise every 6 months or $1/hour annually. Small to you ($1,000-2,000/year), significant to them (shows appreciation). If you can't afford annual raises, you'll pay more in turnover costs.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Stay Interviews (Not Just Exit Interviews)</strong>
          </p>
          <p className="mb-4">
            Quarterly check-ins: "What would make you leave?" "What keeps you here?" "What could we improve?" Find out problems before they start job searching.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Acknowledge the Trade-Off</strong>
          </p>
          <p className="mb-4">
            Be explicit: "I know you could make more over the hill. I also know that commute sucks and corporate culture is different. We can't match Bay Area money, but here's what we offer instead." Honesty builds trust.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Lifestyle Benefits They'll Lose</strong>
          </p>
          <p className="mb-4">
            Remind them (subtly) what they have: "Enjoy surfing this morning?" "Nice to bike to work, right?" "At least you don't sit in 17 traffic." Make current quality of life visible.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Create Growth Without Promotion</strong>
          </p>
          <p className="mb-4">
            Can't promote to senior role because no space? Create growth anyway: special projects, cross-training, mentoring responsibilities, autonomy increases. Title change + $2 raise can feel like progression.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Financial Emergency Fund</strong>
          </p>
          <p className="mb-4">
            Offer interest-free loans for emergencies. $500-1,000 advance against future pay. Car breaks down? Don't let financial crisis force them to take first higher-paying job. Help them solve immediate problem so they can stay.
          </p>
        </>
      )
    },
    {
      title: 'Counter-Offer Strategy (When They\'re Leaving)',
      content: (
        <>
          <p className="mb-4">
            They give notice. You're shocked. Now what? Counter-offers are tricky—sometimes they work, often they don't. Here's how to approach it.
          </p>

          <p className="mb-6 mt-6">
            <strong>The Counter-Offer Conversation:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Step 1: Understand Real Reasons</strong>
          </p>
          <p className="mb-4">
            "I appreciate your notice. Before you go, help me understand—what led to this decision?" Listen without defensiveness. Money? Commute already sucks? Career growth? Specific frustration? You need truth to decide if you can fix it.
          </p>

          <p className="mb-4 mt-8">
            <strong>Step 2: Assess If You Can Actually Address Issue</strong>
          </p>
          <p className="mb-4">
            If it's purely money and you can match or get close: consider it. If it's career growth you can't provide: don't make false promises. If it's frustrations you've ignored repeatedly: counter-offer won't fix broken trust.
          </p>

          <p className="mb-4 mt-8">
            <strong>Step 3: Make Compelling Counter (If Appropriate)</strong>
          </p>
          <p className="mb-4">
            Don't just match money. Match money + fix underlying issues: "$5K raise + you've been asking for better schedule—let's make that happen + we'll create senior role with real responsibilities."
          </p>

          <p className="mb-4 mt-8">
            <strong>Step 4: Accept Gracefully If They Decline</strong>
          </p>
          <p className="mb-4">
            "I understand. You've been great, and I wish you well. If Bay Area doesn't work out, door is open to return." Maintain relationship. Sometimes they come back after discovering commute and corporate culture are worse than expected.
          </p>

          <p className="mb-6 mt-8">
            <strong>When NOT to Counter-Offer:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>They're leaving due to issues you can't/won't fix</li>
            <li>They've been problematic employee (let them go)</li>
            <li>You're only reacting because timing is bad (poor long-term strategy)</li>
            <li>They've clearly mentally checked out</li>
            <li>Counter-offer would create pay inequity with other staff</li>
          </ul>
        </>
      )
    },
    {
      title: 'Making the Santa Cruz Lifestyle Tangible',
      content: (
        <>
          <p className="mb-4">
            Your main competitive advantage is lifestyle. But "lifestyle" is abstract. Make it concrete and visible daily.
          </p>

          <p className="mb-6 mt-6">
            <strong>Emphasizing Lifestyle Value:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Commute Time = Life Time</strong>
          </p>
          <p className="mb-4">
            Bay Area job = 3 hours daily in traffic = 15 hours weekly = 750 hours annually. That's 31 full days per year sitting in a car. $15K more = $20/hour for commute time. Not actually a raise.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Real Work-Life Balance</strong>
          </p>
          <p className="mb-4">
            Tech companies say "work-life balance" but reality is evening emails, weekend work, always-on culture. You actually let people disconnect. Document this: "No contact on days off," "Leave work at work," "Fixed schedule you can plan life around."
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Flexibility for Santa Cruz Lifestyle</strong>
          </p>
          <p className="mb-4">
            Surf flexibility, outdoor activities, kid events. Corporate jobs have rigid schedules and culture. Small business can actually accommodate life. Make this explicit and consistent.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Community and Values</strong>
          </p>
          <p className="mb-4">
            Working locally, knowing customers, contributing to community you live in, alignment with Santa Cruz values. Many people experience cognitive dissonance working for big corporation while living in Santa Cruz. Local work resolves that.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Small Team Dynamics</strong>
          </p>
          <p className="mb-4">
            You know everyone. No bureaucracy. No corporate politics. Direct impact visible daily. For people leaving corporate world, this is massive.
          </p>
        </>
      )
    },
    {
      title: 'The Boomerang Strategy',
      content: (
        <>
          <p className="mb-4">
            Sometimes you can't keep them. But you can get them back. Many people take Bay Area jobs, hate the commute/culture, and want to return. Make it easy.
          </p>

          <p className="mb-6 mt-6">
            <strong>Welcome Back Policy:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Positive Exit</strong>
          </p>
          <p className="mb-4">
            Even if you're frustrated they're leaving, be gracious. "Good luck. You've been great. If it doesn't work out, let me know." Leaves door open.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Stay in Touch</strong>
          </p>
          <p className="mb-4">
            Occasional text: "How's the new job?" Not pushy, just friendly. After 3-6 months, many realize grass isn't greener.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Make Return Easy</strong>
          </p>
          <p className="mb-4">
            "Hey, we have opening. You were great, would love to have you back." No ego, no punishment. They return with Bay Area experience (valuable) and renewed appreciation for Santa Cruz quality of life.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Rehire at Higher Rate</strong>
          </p>
          <p className="mb-4">
            They've proven their value twice—when they worked for you, and by realizing Bay Area wasn't better. Bring them back at higher rate than they left. Shows you value them and prevents them leaving again soon.
          </p>

          <p className="mb-4 mt-6">
            Boomerang employees are often your best employees—they've seen the alternative and actively choose you.
          </p>
        </>
      )
    },
    {
      title: 'Long-Term Strategic Defense',
      content: (
        <>
          <p className="mb-4">
            You can't eliminate Bay Area competition. But you can build culture and compensation that makes leaving feel like bad trade-off.
          </p>

          <p className="mb-6 mt-6">
            <strong>Building Retention Culture:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Pay maximum you can afford:</strong> Minimize wage gap with Bay Area</li>
            <li><strong>Regular raises:</strong> Show trajectory even if slow</li>
            <li><strong>Actual flexibility:</strong> Don't just promise it, deliver consistently</li>
            <li><strong>Respect time off:</strong> Never contact on days off unless true emergency</li>
            <li><strong>Growth opportunities:</strong> Cross-training, responsibilities, progression</li>
            <li><strong>Financial support:</strong> Help with emergencies that trigger job searches</li>
            <li><strong>Community:</strong> Create workplace people actually enjoy</li>
            <li><strong>Values alignment:</strong> Local, sustainable, community-focused</li>
            <li><strong>Acknowledge trade-off:</strong> "Less money, better life" made explicit</li>
          </ul>

          <p className="mb-4 mt-6">
            Your retention strategy is making Santa Cruz employment so good that Bay Area jobs look unappealing even at higher pay. That's achievable—many people already make this choice deliberately.
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
            Preventing Employees from Leaving for Bay Area Jobs
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Retain quality Santa Cruz employees despite higher Bay Area salaries. Build culture and compensation that makes the lifestyle trade-off worth it.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Building Employee Retention Systems?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses create retention strategies that compete with Bay Area jobs on lifestyle and culture instead of pure salary. Stop losing talent over the hill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Build Retention Strategy
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Turnover Challenges
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

