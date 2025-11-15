import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Training Seasonal Employees Quickly and Effectively | Santa Cruz',
  description: 'Fast onboarding systems for seasonal workers. Learn to train Santa Cruz summer staff quickly without sacrificing quality or overwhelming your team.',
})

export default function TrainingSeasonalEmployees() {
  const sections = [
    {
      title: 'The Seasonal Training Challenge',
      content: (
        <>
          <p className="mb-4">
            You have two weeks to transform someone who's never worked in your business into someone who can deliver consistent, high-quality service during your busiest season of the year. There's no time for slow shadowing, gradual responsibility increases, or letting them "figure it out." Memorial Day weekend is coming, and they need to be competent now.
          </p>
          <p className="mb-4">
            Most Santa Cruz businesses handle seasonal training terribly. They throw new hires into the deep end during rush hours, hope they pick things up from watching others, and wonder why service quality suffers every summer. Then they repeat the same chaos next year.
          </p>
          <p className="mb-4">
            The businesses that train seasonal workers well aren't spending more time training—they're spending time once building systems that make training fast, consistent, and repeatable. They've documented what good looks like, created structured onboarding processes, and built training programs that work whether you're onboarding one person or ten.
          </p>
        </>
      )
    },
    {
      title: 'Pre-Training: Setting Them Up For Success',
      content: (
        <>
          <p className="mb-4">
            Training doesn't start on the first day—it starts the moment someone accepts the job. Smart businesses use the gap between hiring and first shift to frontload basic information, reducing time needed for in-person training.
          </p>

          <p className="mb-6 mt-6">
            <strong>Send Before First Day:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Welcome packet:</strong> Business history, values, what to expect</li>
            <li><strong>Practical info:</strong> Parking, dress code, where to enter, who to ask for</li>
            <li><strong>Menu/product knowledge:</strong> If applicable, send menu, product list, terminology</li>
            <li><strong>Training videos:</strong> 5-10 minute videos covering basics</li>
            <li><strong>Written SOPs:</strong> One-page guides for common procedures</li>
            <li><strong>Quiz or reading:</strong> Simple assignment to ensure they reviewed materials</li>
          </ul>

          <p className="mb-4 mt-6">
            This seems like extra work, but it compresses what would be 4-6 hours of in-person training into pre-shift homework. When they show up, they already know your menu, understand basic terminology, and have seen procedures demonstrated on video. Now you're refining and practicing, not starting from zero.
          </p>

          <p className="mb-6 mt-8">
            <strong>Example Training Video Topics:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>How to open and close the location</li>
            <li>POS system basics</li>
            <li>Customer service standards and scripts</li>
            <li>Safety procedures and emergency protocols</li>
            <li>Common customer questions and how to answer them</li>
          </ul>

          <p className="mb-4">
            Record these once, use them every season. Update them when processes change. This is how you train consistently without burning out your core team who would otherwise have to repeat the same explanations to every new hire.
          </p>
        </>
      )
    },
    {
      title: 'The First Week Structure',
      content: (
        <>
          <p className="mb-4">
            Don't wing the first week. Have a structured plan that moves from observation to assistance to independence in logical stages.
          </p>

          <p className="mb-6 mt-6">
            <strong>Day 1: Observe and Learn (4-6 Hours)</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Morning:</strong> Tour, introductions, review training materials they watched</li>
            <li><strong>Mid-day:</strong> Shadow your best employee during busy period</li>
            <li><strong>Afternoon:</strong> Shadow during slower period, ask questions</li>
            <li><strong>End of shift:</strong> Debrief, clarify confusion, answer questions</li>
          </ul>
          <p className="mb-4">
            <strong>Key:</strong> Give them a specific observation checklist. "Watch how Sarah greets customers, handles transactions, and answers questions. Note specific phrases she uses." This makes shadowing active learning, not passive watching.
          </p>

          <p className="mb-6 mt-8">
            <strong>Day 2-3: Assisted Practice (6-8 Hours Each)</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Start with simple, low-stakes tasks</li>
            <li>Work alongside experienced employee who can help</li>
            <li>Handle real customers with backup available</li>
            <li>Gradually increase responsibility based on competence</li>
            <li>Immediate feedback after each interaction</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Day 4-5: Supervised Independence (Full Shifts)</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Work independently but with supervisor nearby</li>
            <li>Handle full range of tasks</li>
            <li>Call for help on edge cases</li>
            <li>End-of-shift review: what went well, what needs work</li>
          </ul>

          <p className="mb-4 mt-8">
            By end of week one, they should be 70-80% competent at core tasks. Week two refines edge cases, speeds up execution, and builds confidence for busy periods.
          </p>
        </>
      )
    },
    {
      title: 'The Checklist Method',
      content: (
        <>
          <p className="mb-4">
            Checklists are the secret weapon of fast training. They externalize knowledge from experts' heads into simple, followable steps that anyone can execute.
          </p>

          <p className="mb-6 mt-6">
            <strong>Create Checklists For:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Opening procedures:</strong> Every step from unlocking to ready-for-customers</li>
            <li><strong>Closing procedures:</strong> Every step from last customer to locked and clean</li>
            <li><strong>Common transactions:</strong> Step-by-step for POS, returns, exchanges</li>
            <li><strong>Customer service scenarios:</strong> Scripts for common questions and situations</li>
            <li><strong>Safety and emergency:</strong> What to do when things go wrong</li>
            <li><strong>End-of-shift duties:</strong> Cleaning, restocking, money handling</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Format That Works:</strong> One-page laminated sheets posted at relevant locations. Opening checklist by the door. POS checklist by register. Closing checklist in back room. New employees literally check off steps as they complete them.
          </p>

          <p className="mb-6 mt-8">
            <strong>Example: Coffee Shop Opening Checklist</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>☐ Unlock front door, disarm alarm (code: ____)</li>
            <li>☐ Turn on all lights</li>
            <li>☐ Start espresso machine, grinders (30 min to heat)</li>
            <li>☐ Check walk-in temps (should be 38-42°F)</li>
            <li>☐ Brew first batch of drip coffee</li>
            <li>☐ Stock pastry case from walk-in</li>
            <li>☐ Count cash drawer, verify starting amount ($200)</li>
            <li>☐ Check bathrooms, restock if needed</li>
            <li>☐ Wipe down all counters and tables</li>
            <li>☐ Flip sign to OPEN at exactly 7:00am</li>
          </ul>

          <p className="mb-4 mt-6">
            First few times, new employees follow this religiously, checking off each step. After week two, they've internalized it and no longer need the checklist. But it's still there for memory refreshers or training the next round of seasonal workers.
          </p>
        </>
      )
    },
    {
      title: 'The Buddy System That Actually Works',
      content: (
        <>
          <p className="mb-4">
            Pairing new hires with experienced employees is common. Making it work well is rare. Most "buddy systems" fail because they're informal and unstructured.
          </p>

          <p className="mb-6 mt-6">
            <strong>How to Structure It:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Select buddies intentionally:</strong> Your best performers, who want to mentor</li>
            <li><strong>Give them authority:</strong> Buddies can give feedback and correct mistakes</li>
            <li><strong>Pay them extra:</strong> $1-2/hour bonus for training weeks recognizes their extra work</li>
            <li><strong>Provide training checklist:</strong> Specific skills buddy needs to teach and verify</li>
            <li><strong>Scheduled check-ins:</strong> Buddy reports on trainee progress daily</li>
            <li><strong>Limited duration:</strong> 1-2 weeks, then trainee is on their own</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Why Pay Buddies More:</strong> Training someone is harder than just doing the work yourself. If you don't compensate for this, your best employees will resent being assigned trainees. A small pay bump during training weeks makes it a desirable responsibility instead of a burden.
          </p>

          <p className="mb-4 mt-6">
            <strong>Buddy Responsibilities:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Demonstrate all core tasks</li>
            <li>Let trainee practice with supervision</li>
            <li>Provide immediate feedback (positive and corrective)</li>
            <li>Answer questions patiently</li>
            <li>Report concerns to manager</li>
            <li>Sign off when trainee is competent</li>
          </ul>

          <p className="mb-4">
            This works especially well if you can pair returning seasonal workers as buddies for brand-new hires. They remember what it was like to be new, they already know your systems, and they're invested in maintaining quality standards.
          </p>
        </>
      )
    },
    {
      title: 'Fast Competence Through Staged Responsibility',
      content: (
        <>
          <p className="mb-4">
            Don't ask new seasonal workers to do everything on day one. Build competence through stages, where each stage has clear mastery before moving forward.
          </p>

          <p className="mb-6 mt-6">
            <strong>Example: Restaurant Server Training Stages</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Stage 1: Busser/Runner (Days 1-3)</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Learn table layout, POS system, menu basics</li>
            <li>Run food from kitchen to tables</li>
            <li>Clear and reset tables</li>
            <li>No customer orders yet, just support</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Stage 2: Server with Limited Section (Days 4-7)</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Take orders for 2-3 tables max</li>
            <li>Senior server nearby for questions</li>
            <li>Master POS, basic menu knowledge, service timing</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Stage 3: Full Server (Week 2+)</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Full section of tables</li>
            <li>Handle typical situations independently</li>
            <li>Call manager for complex issues</li>
          </ul>

          <p className="mb-4 mt-8">
            This progression builds confidence and competence simultaneously. Trying to skip stages creates overwhelmed employees who make mistakes and deliver poor service. Taking stages seriously creates competent employees faster.
          </p>
        </>
      )
    },
    {
      title: 'Common Training Mistakes to Avoid',
      content: (
        <>
          <p className="mb-6">
            <strong>Mistake 1: Assuming They Know Common Sense Stuff</strong>
          </p>
          <p className="mb-4">
            Your "obvious" is their mystery. Explicitly teach things you think are common sense: how to greet customers, phone etiquette, what to do when you don't know something. College students have never worked retail. Retirees haven't worked in decades. Assume zero baseline knowledge.
          </p>

          <p className="mb-6 mt-8">
            <strong>Mistake 2: Training During Your Busiest Times</strong>
          </p>
          <p className="mb-4">
            Don't start training someone on Saturday at noon. Train during slower periods when you have bandwidth to teach properly. Once they're competent, schedule them for busy times. Throwing them into chaos on day one teaches panic, not excellence.
          </p>

          <p className="mb-6 mt-8">
            <strong>Mistake 3: No Written Documentation</strong>
          </p>
          <p className="mb-4">
            Verbal training disappears the moment the conversation ends. Write it down. Record it. Create simple documents they can reference later. "Remember when I told you..." doesn't work. "Check the sheet by the register" does.
          </p>

          <p className="mb-6 mt-8">
            <strong>Mistake 4: Inconsistent Training Across Staff</strong>
          </p>
          <p className="mb-4">
            If every experienced employee teaches differently, new hires get confused. Standardize training. Same videos, same checklists, same progression. Personality can vary, but core content should be identical.
          </p>

          <p className="mb-6 mt-8">
            <strong>Mistake 5: No Feedback Until Something Goes Wrong</strong>
          </p>
          <p className="mb-4">
            Give daily feedback in the first two weeks—both positive and corrective. "Great job on greeting customers" reinforces good behavior. "Here's a better way to handle that situation" corrects mistakes while habits are forming. Waiting until week three to give feedback means bad habits are already ingrained.
          </p>
        </>
      )
    },
    {
      title: 'Building a Training System That Scales',
      content: (
        <>
          <p className="mb-4">
            The goal isn't just training this year's seasonal workers—it's building a system that works whether you're training one person or twenty, this year and every year after.
          </p>

          <p className="mb-6 mt-6">
            <strong>Your Training System Should Include:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Pre-shift materials:</strong> Videos, SOPs, reading materials sent before day one</li>
            <li><strong>Day-by-day schedule:</strong> What happens each day of week one</li>
            <li><strong>Checklists and guides:</strong> Laminated one-pagers for common tasks</li>
            <li><strong>Buddy pairing process:</strong> Who trains, how they're compensated, expectations</li>
            <li><strong>Skills verification:</strong> How you confirm they're competent before unsupervised work</li>
            <li><strong>Feedback system:</strong> Daily check-ins first week, then weekly</li>
          </ul>

          <p className="mb-4 mt-6">
            Invest 10-20 hours once building this system. Then use it every season forever. Update it when processes change. But stop reinventing training every single year.
          </p>

          <p className="mb-4">
            The businesses that train seasonal workers well aren't spending more time—they're spending time differently. Less time explaining the same things over and over. More time building systems that make training fast, consistent, and scalable.
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
            Training Seasonal Employees Quickly and Effectively
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Build onboarding systems that get seasonal workers competent fast without overwhelming them or your core team. Stop reinventing training every summer.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Building Training and Onboarding Systems?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses document their processes, create training materials, and build onboarding systems that work year after year. Stop training from scratch every season—build systems that scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Learn About Our Process Documentation
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Training Challenges
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

