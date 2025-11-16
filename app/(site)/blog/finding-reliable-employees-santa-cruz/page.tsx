import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Finding Reliable Employees in Santa Cruz | Hiring Strategies',
  description: 'How to find and hire reliable employees in Santa Cruz\'s competitive labor market. Strategies for attracting, vetting, and retaining quality staff.',
})

export default function FindingReliableEmployees() {
  const sections = [
    {
      title: 'The Santa Cruz Hiring Paradox',
      content: (
        <>
          <p className="mb-4">
            Santa Cruz has 60,000+ residents, a major university, and constant influx of job seekers attracted by the lifestyle. Yet somehow, finding reliable employees feels impossible. You post jobs and get either no applicants or dozens of unqualified ones. You hire someone who seems great, and they quit after three weeks. You finally find a good employee, and they leave for a $3/hour raise somewhere else.
          </p>
          <p className="mb-4">
            The hiring challenge in Santa Cruz isn't lack of people—it's the intersection of high cost of living, proximity to higher-paying Bay Area jobs, lifestyle-driven work culture, and housing crisis creating a labor market unlike anywhere else. What works for hiring in other cities doesn't work here. You need Santa Cruz-specific strategies.
          </p>
          <p className="mb-4">
            The businesses that successfully hire and retain reliable employees in Santa Cruz aren't offering significantly higher wages—they're offering something different that resonates with what makes people choose to live here in the first place.
          </p>
        </>
      )
    },
    {
      title: 'Understanding What "Reliable" Actually Means',
      content: (
        <>
          <p className="mb-4">
            Before you can find reliable employees, define what reliability means for your specific business. Generic job descriptions attract generic applicants.
          </p>

          <p className="mb-6 mt-6">
            <strong>Reliability Dimensions:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Attendance:</strong> Shows up for scheduled shifts consistently</li>
            <li><strong>Punctuality:</strong> Arrives on time, ready to work</li>
            <li><strong>Follow-through:</strong> Completes tasks without constant oversight</li>
            <li><strong>Quality consistency:</strong> Maintains standards shift after shift</li>
            <li><strong>Communication:</strong> Responds to messages, gives advance notice for issues</li>
            <li><strong>Longevity:</strong> Stays longer than 3-6 months</li>
            <li><strong>Flexibility:</strong> Willing to cover shifts, adapt to changing needs</li>
            <li><strong>Accountability:</strong> Owns mistakes, fixes problems</li>
          </ul>

          <p className="mb-4 mt-6">
            Most businesses want all eight dimensions. Reality: you'll get 5-6 from most employees. Decide which 2-3 are non-negotiable for your operation and which you can work around.
          </p>

          <p className="mb-4 mt-6">
            <strong>Example:</strong> Restaurant absolutely needs attendance and punctuality (can't serve customers without staff). Can work around someone who needs consistent schedule (less flexible). Can train for quality consistency. Prioritize accordingly in hiring.
          </p>
        </>
      )
    },
    {
      title: 'Where to Find Quality Candidates',
      content: (
        <>
          <p className="mb-4">
            Indeed and Craigslist aren't working because everyone posts there and quality candidates are buried in noise. Go where reliable people actually look for work.
          </p>

          <p className="mb-6 mt-6">
            <strong>High-Quality Candidate Sources:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Employee Referrals (Best Source)</strong>
          </p>
          <p className="mb-4">
            Your good employees know other good employees. Offer referral bonuses: $250-500 if referred employee stays 90 days. People protect their reputation—they won't refer unreliable friends.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Local Facebook Groups</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>"Santa Cruz Jobs" (targeted, local audience)</li>
            <li>Neighborhood-specific groups (Westside, Eastside)</li>
            <li>"Buy Nothing Santa Cruz" (community-engaged people)</li>
            <li>Interest-based groups (surf, yoga, cycling—depends on business)</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>3. UCSC Career Center</strong>
          </p>
          <p className="mb-4">
            17,000 students, many looking for part-time work. Post on their job board. Attend job fairs. Students can be reliable if expectations are clear about school schedules.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Cabrillo College</strong>
          </p>
          <p className="mb-4">
            Local community college students often need work and aren't leaving for Bay Area. More stable than university students.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Local Fitness Studios/Gyms</strong>
          </p>
          <p className="mb-4">
            People who show up consistently for 6am yoga are reliable. Ask instructors if you can post job flyers. Fitness-oriented people often have good work ethic.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Competitor's Good Employees</strong>
          </p>
          <p className="mb-4">
            Don't poach aggressively, but if you know someone excellent at another business, approach professionally. Better pay, schedule, or culture might interest them.
          </p>

          <p className="mb-4 mt-8">
            <strong>7. Parents and Retirees</strong>
          </p>
          <p className="mb-4">
            Parents need flexible schedules but are often very reliable within their availability. Retirees want part-time engagement. Both groups value consistency over maximum wages.
          </p>
        </>
      )
    },
    {
      title: 'Writing Job Posts That Attract Reliable People',
      content: (
        <>
          <p className="mb-4">
            Generic job posts attract generic applicants. Specific, honest posts attract the right people and pre-filter wrong ones.
          </p>

          <p className="mb-6 mt-6">
            <strong>What to Include:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Specific Schedule Requirements</strong>
          </p>
          <p className="mb-4">
            Don't say "flexible schedule required." Say "Must be available Friday-Sunday, 10am-6pm, plus one weekday evening." Pre-filters people who can't meet needs.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Real Pay Range (Not "Competitive")</strong>
          </p>
          <p className="mb-4">
            "$18-22/hour based on experience" is honest. "Competitive pay" wastes everyone's time. In Santa Cruz's market, transparency builds trust.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. What Makes Your Business Different</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>"Surf-friendly schedule (flexibility for good conditions)"</li>
            <li>"Local, family-owned, been here 15 years"</li>
            <li>"Free employee meals/product discounts"</li>
            <li>"Training provided, no experience needed"</li>
            <li>"Stable year-round work (not seasonal)"</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>4. Who You're Looking For (Cultural Fit)</strong>
          </p>
          <p className="mb-4">
            "We're looking for someone who loves coffee, enjoys chatting with regulars, and thrives in busy morning rushes" tells candidates what daily life is actually like.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. How to Apply (Make It Easy)</strong>
          </p>
          <p className="mb-4">
            "Stop by Monday-Friday 2-4pm with resume" or "Email [address] with resume" or "Text [number] to set up interview." Don't require 10-page applications for hourly positions.
          </p>

          <p className="mb-6 mt-8">
            <strong>What NOT to Include:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Unrealistic requirements ("5 years experience for entry-level pay")</li>
            <li>Vague descriptions ("dynamic team player")</li>
            <li>Excessive personality requirements ("must be outgoing"—introverts can be excellent)</li>
            <li>Illegal questions (age, marital status, etc.)</li>
          </ul>
        </>
      )
    },
    {
      title: 'The Interview Process That Reveals Reliability',
      content: (
        <>
          <p className="mb-4">
            Interviews don't predict reliability well. But these techniques improve your odds significantly.
          </p>

          <p className="mb-6 mt-6">
            <strong>Reliability Screening Techniques:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. The Punctuality Test</strong>
          </p>
          <p className="mb-4">
            Schedule interview at specific time. If they're late without calling ahead, that's your answer. People who are punctual to interviews are usually punctual to shifts.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Reference Checks (Actually Do Them)</strong>
          </p>
          <p className="mb-4">
            Call previous employers. Ask: "Would you rehire them?" and "Did they have attendance issues?" Past behavior predicts future behavior.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Trial Shift (Paid)</strong>
          </p>
          <p className="mb-4">
            Offer 4-hour paid trial shift. See how they actually perform, interact with team, handle stress. Worth $80-100 to avoid bad hire.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Schedule Clarity Test</strong>
          </p>
          <p className="mb-4">
            During interview: "The schedule is [specific days/times]. Can you commit to this?" If they hesitate or say "probably," that's a red flag.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Scenario Questions</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>"What would you do if you woke up sick on a shift day?"</li>
            <li>"How do you handle conflicts with coworkers?"</li>
            <li>"Tell me about a time you made a mistake at work. What happened?"</li>
          </ul>
          <p className="mb-4">
            You're listening for accountability and problem-solving, not perfect answers.
          </p>
        </>
      )
    },
    {
      title: 'Compensation Beyond Just Wages',
      content: (
        <>
          <p className="mb-4">
            You can't compete with tech companies on salary. But you can offer things tech companies can't—things that matter in Santa Cruz's lifestyle-driven culture.
          </p>

          <p className="mb-6 mt-6">
            <strong>Non-Wage Compensation That Attracts Reliable People:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Schedule Flexibility (Strategically)</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Surf/ski flexibility (swap shifts for good conditions)</li>
            <li>Consistent schedule (same days/times every week)</li>
            <li>No late-night shifts (if possible)</li>
            <li>Ability to request specific days off in advance</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>2. Lifestyle Perks</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Free/discounted products (food, retail, services)</li>
            <li>Gym membership or fitness classes</li>
            <li>Bike commute support</li>
            <li>Beach/outdoor activity time</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>3. Development Opportunities</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Skills training (barista certification, leadership development)</li>
            <li>Path to management/ownership</li>
            <li>Cross-training in multiple roles</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>4. Community and Culture</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Team outings (surf sessions, beach cleanups)</li>
            <li>Local values alignment (sustainability, community focus)</li>
            <li>Small team where people matter</li>
            <li>Owner actually present and engaged</li>
          </ul>

          <p className="mb-4 mt-6">
            For many Santa Cruz workers, "$3 less per hour but I can surf when it's good and my boss isn't a corporation" is a worthwhile trade.
          </p>
        </>
      )
    },
    {
      title: 'Retention: Keeping Reliable Employees',
      content: (
        <>
          <p className="mb-4">
            Finding reliable employees is hard. Keeping them is harder. High turnover creates perpetual hiring crisis.
          </p>

          <p className="mb-6 mt-6">
            <strong>Retention Strategies That Work:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Regular Raises (Even Small Ones)</strong>
          </p>
          <p className="mb-4">
            $0.50-1.00 raise every 6-12 months shows appreciation. Costs you $1,000-2,000/year per employee. Replacing them costs $2,000-5,000 in hiring and training.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Consistent Communication</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Weekly check-ins (even 5 minutes)</li>
            <li>Ask for feedback, actually implement suggestions</li>
            <li>Explain decisions that affect them</li>
            <li>Recognize good work publicly</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>3. Respect Their Time</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Don't call/text on days off unless emergency</li>
            <li>Post schedules 2 weeks in advance</li>
            <li>Honor time-off requests when possible</li>
            <li>Don't guilt trip about needing coverage</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>4. Create Growth Path</strong>
          </p>
          <p className="mb-4">
            Even small businesses can offer progression: Server → Senior Server → Shift Lead → Assistant Manager. People stay when they see future.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Address Problems Early</strong>
          </p>
          <p className="mb-4">
            If attendance or quality slips, talk about it immediately. Don't let resentment build. Sometimes there's fixable reason (schedule conflict, personal issue).
          </p>
        </>
      )
    },
    {
      title: 'When to Cut Losses',
      content: (
        <>
          <p className="mb-4">
            Sometimes you hire wrong and need to move on quickly. Keeping unreliable employees destroys morale of good ones and costs more than firing and rehiring.
          </p>

          <p className="mb-6 mt-6">
            <strong>Clear Firing Criteria:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>No-call, no-show = immediate termination</li>
            <li>Three late arrivals without valid reason = warning</li>
            <li>Missing shifts repeatedly = termination</li>
            <li>Refusing to follow basic protocols after training = termination</li>
            <li>Conflict with customers/coworkers that can't be resolved = termination</li>
          </ul>

          <p className="mb-4 mt-6">
            Document everything. Have clear policies. Follow California employment law. But don't keep someone who's clearly not working out just because hiring is hard. It's harder to keep rehiring because your good employees quit from carrying dead weight.
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
            Finding Reliable Employees in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Navigate Santa Cruz's unique labor market to find, hire, and retain quality staff. Strategies that work in this lifestyle-driven, high-cost community.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Building Hiring Systems?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses create hiring processes, compensation packages, and retention strategies that attract reliable employees. Stop the hiring treadmill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Improve Your Hiring Process
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

