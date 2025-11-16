import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Managing Employee Surf Schedule Conflicts in Santa Cruz | Reliability Strategies',
  description: 'Balance surf culture flexibility with operational reliability. Practical systems for managing schedule conflicts in Santa Cruz\'s surf-obsessed workforce.',
})

export default function SurfScheduleConflicts() {
  const sections = [
    {
      title: 'The Surf Reality',
      content: (
        <>
          <p className="mb-4">
            Text arrives 5:45am: "Swell is insane, can someone cover my 7am shift?" Employee scheduled for Saturday suddenly requests Friday off because surf forecast changed. Your best worker is perpetually tired Monday mornings from weekend surf sessions. Welcome to operating a business in one of world's premier surf towns, where ocean conditions compete with your schedule for employee attention.
          </p>
          <p className="mb-4">
            You didn't hire employees to not let them surf—that's why they live in Santa Cruz. But you also can't run business with staff randomly disappearing when waves arrive. The solution isn't choosing between surf culture accommodation and operational reliability. It's building systems that acknowledge surf reality while maintaining coverage. Businesses that figure this out gain access to passionate, committed surf community. Those that fight it lose talent to more flexible competitors.
          </p>
        </>
      )
    },
    {
      title: 'Understanding Surf Culture Dynamics',
      content: (
        <>
          <p className="mb-4">
            Before solving problem, understand what you're dealing with.
          </p>

          <p className="mb-6 mt-6">
            <strong>Surf Culture Realities:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Surf Isn't Hobby—It's Identity</strong>
          </p>
          <p className="mb-4">
            For serious surfers, it's not "I like to surf." It's "I am a surfer." Missing good conditions creates genuine distress. They moved to Santa Cruz specifically for surf access.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Conditions Are Unpredictable</strong>
          </p>
          <p className="mb-4">
            Can check forecast but conditions change. Perfect morning might be flat by afternoon. Big swell might arrive day early. Surf requires flexibility because ocean isn't predictable.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Good Conditions Are Brief Windows</strong>
          </p>
          <p className="mb-4">
            "Just surf after work" doesn't understand tides, wind, crowds. Morning might be glassy perfection, afternoon blown out garbage. Miss the window, might not get another for weeks.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Surf Community Is Tight</strong>
          </p>
          <p className="mb-4">
            Reputation spreads. "That business lets you surf when it's good" attracts best talent. "They never accommodate surf" makes recruiting difficult.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Surfers Will Choose Waves Over Jobs</strong>
          </p>
          <p className="mb-4">
            If forced to choose between missing epic session or job that doesn't accommodate, they'll quit and find employer who understands. Not flaky—priorities are different.
          </p>
        </>
      )
    },
    {
      title: 'Structured Surf Flexibility Systems',
      content: (
        <>
          <p className="mb-4">
            Accommodation without chaos requires systems. Here's what actually works.
          </p>

          <p className="mb-6 mt-6">
            <strong>Surf-Friendly Scheduling Systems:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Shift Swap Protocol</strong>
          </p>
          <p className="mb-4">
            "You can swap for surf if: (1) You find coverage yourself, (2) Replacement is trained for role, (3) You give 2+ hours notice." Puts responsibility on employee, maintains coverage, allows flexibility. Most effective system.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Surf Call List</strong>
          </p>
          <p className="mb-4">
            Maintain list of employees willing to cover on short notice for surf days. "I'll cover your shift for big swell if you cover mine next time." Creates mutual support network. Often employees coordinate swaps without manager involvement.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Core Hours + Flex Hours</strong>
          </p>
          <p className="mb-4">
            "Must work 30 hours/week. Core shifts Monday/Wednesday/Friday non-negotiable. Other days flexible for swaps." Guarantees minimum coverage, builds in flexibility systematically.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Built-In Surf Time</strong>
          </p>
          <p className="mb-4">
            Schedule intentionally: "Morning shifts start 9am (allows dawn patrol surf). Afternoon shifts 2-close (allows midday surf)." Acknowledges reality instead of fighting it.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Surf Days as Benefit</strong>
          </p>
          <p className="mb-4">
            "2 surf days per month—request 24 hours ahead when forecast looks good." Formalizes accommodation, prevents abuse, shows you value surf culture.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Seasonal Flex</strong>
          </p>
          <p className="mb-4">
            Winter has better surf but fewer customers. Summer has worse surf but more customers. Allow more winter flexibility when it's busier in ocean than business.
          </p>
        </>
      )
    },
    {
      title: 'Setting Boundaries That Work',
      content: (
        <>
          <p className="mb-4">
            Flexibility needs limits. Without boundaries, accommodation becomes exploitation.
          </p>

          <p className="mb-6 mt-6">
            <strong>Necessary Boundaries:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Minimum Notice (With Exceptions)</strong>
          </p>
          <p className="mb-4">
            "2 hours notice for day-of surf requests. Exception: true epic conditions (we'll know—we check surf too)." Protects opening shifts while acknowledging rare perfect days.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Coverage Required</strong>
          </p>
          <p className="mb-4">
            "You can surf if someone covers. If no one available, you work." Non-negotiable. Business needs come first when coverage fails.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Reciprocity Expected</strong>
          </p>
          <p className="mb-4">
            "If coworkers cover your surf days, you cover theirs." Track to ensure fairness. Person always requesting coverage but never offering it gets called out.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Peak Times Protected</strong>
          </p>
          <p className="mb-4">
            "During summer weekends (our busiest), minimum flexibility. During slow January weekdays, maximum flexibility." Aligns with business needs.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Performance Required</strong>
          </p>
          <p className="mb-4">
            "Surf flexibility is earned privilege. If quality/reliability suffers, flexibility reduces." Keeps accommodation from enabling poor performance.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Abuse Gets Addressed</strong>
          </p>
          <p className="mb-4">
            Pattern of every Friday off when forecast is good = conversation needed. "We've accommodated 10 surf days this month. That's beyond reasonable. Here's what's sustainable..."
          </p>
        </>
      )
    },
    {
      title: 'Hiring for Surf Compatibility',
      content: (
        <>
          <p className="mb-4">
            Some surf schedules integrate better with business than others. Screen for compatibility during hiring.
          </p>

          <p className="mb-6 mt-6">
            <strong>Assessing Surf Compatibility:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Questions to Ask:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>"Do you surf? How important is it to your lifestyle?" (Get honesty upfront)</li>
            <li>"How do you balance surf and work commitments?" (Tests maturity)</li>
            <li>"What would you do if epic swell arrived on your scheduled shift?" (Reveals priorities and problem-solving)</li>
            <li>"Tell me about time you had to miss good surf for work commitment." (Shows they understand trade-offs)</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>Green Flags:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Acknowledges work commitments come first</li>
            <li>Has history of managing both successfully</li>
            <li>Proposes solutions (shift swaps, different schedule)</li>
            <li>Understands reciprocity and fairness</li>
            <li>Mature about trade-offs</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>Red Flags:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>"Surf comes first always"</li>
            <li>"I'll just call in sick when it's good"</li>
            <li>"Previous employer didn't understand surf culture" (maybe previous employer understood professional reliability)</li>
            <li>Entitled attitude about accommodation</li>
            <li>No awareness of business needs</li>
          </ul>
        </>
      )
    },
    {
      title: 'When Surf Flexibility Isn\'t Working',
      content: (
        <>
          <p className="mb-4">
            Sometimes accommodation becomes one-sided or operational problems emerge. Address directly.
          </p>

          <p className="mb-6 mt-6">
            <strong>Problem Scenarios and Responses:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Scenario 1: Chronic Abuser</strong>
          </p>
          <p className="mb-4">
            Employee constantly requests surf flexibility but never reciprocates coverage. Conversation: "You've had 8 surf accommodations this month, covered 0 shifts for others. This isn't sustainable. Moving forward, 1:1 ratio required."
          </p>

          <p className="mb-4 mt-8">
            <strong>Scenario 2: Business Suffering</strong>
          </p>
          <p className="mb-4">
            Multiple people calling out same day for swell, leaving you unable to operate. Response: "We support surf culture, but today showed our system failing. New rule: maximum 2 people off for surf same day. First to request gets it."
          </p>

          <p className="mb-4 mt-8">
            <strong>Scenario 3: Customer Complaints</strong>
          </p>
          <p className="mb-4">
            Service quality suffering because everyone's tired from dawn patrol. Response: "Surf on your own time is great. Showing up exhausted and ineffective isn't. If you can't perform after surfing, don't surf before shifts."
          </p>

          <p className="mb-4 mt-8">
            <strong>Scenario 4: Team Resentment</strong>
          </p>
          <p className="mb-4">
            Non-surfers resentful that surfers get flexibility they don't. Response: "All employees get same flexibility policy. Surfers use it for waves, you can use it for whatever matters to you. But same rules apply."
          </p>
        </>
      )
    },
    {
      title: 'Building Surf-Positive Culture',
      content: (
        <>
          <p className="mb-4">
            Instead of seeing surf as problem, build it into positive culture element.
          </p>

          <p className="mb-6 mt-6">
            <strong>Surf-Positive Practices:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Check Surf Report Together</strong>
          </p>
          <p className="mb-4">
            Start team meetings: "Surf was firing this morning, who got out?" Acknowledges importance and builds camaraderie.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Team Surf Sessions</strong>
          </p>
          <p className="mb-4">
            Occasional close business for team surf. "Next Thursday, closing 11am-2pm for team surf session." Demonstrates genuine support.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Surf-Related Perks</strong>
          </p>
          <p className="mb-4">
            Wetsuit discount, board storage at work, rinse station. Small accommodations that show you understand lifestyle.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Celebrate Surf Achievements</strong>
          </p>
          <p className="mb-4">
            Employee gets sponsored or wins contest? Celebrate it. Part of who they are.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Hire Surfers Intentionally</strong>
          </p>
          <p className="mb-4">
            "Surfers welcome—we have flex systems" in job posts. Attracts culture fit instead of fighting culture.
          </p>

          <p className="mb-4 mt-6">
            When you embrace surf culture instead of resenting it, you tap into passionate, committed workforce that other businesses can't access.
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
            Managing Employee Surf Schedule Conflicts in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Balance surf culture accommodation with operational reliability. Build systems that embrace Santa Cruz lifestyle while maintaining coverage and performance.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Building Surf-Friendly Work Systems?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses design scheduling and flexibility systems that accommodate surf culture while maintaining operational reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Design Flexibility Systems
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Challenges
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

