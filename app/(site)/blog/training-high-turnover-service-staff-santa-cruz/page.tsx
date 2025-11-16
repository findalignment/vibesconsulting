import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Training High-Turnover Service Staff in Santa Cruz | Quick Onboarding Systems',
  description: 'Build efficient training systems for service industry staff in Santa Cruz where turnover is inevitable. Get new employees productive fast.',
})

export default function TrainingHighTurnoverStaff() {
  const sections = [
    {
      title: 'The Training Treadmill',
      content: (
        <>
          <p className="mb-4">
            You hire someone, spend two weeks training them, they work three months, then quit. Repeat. You're perpetually training instead of actually running your business. Every time someone leaves, you lose institutional knowledge, customer relationships, and operational momentum. The cycle is exhausting and expensive.
          </p>
          <p className="mb-4">
            High turnover in Santa Cruz service industry isn't going away. Students graduate. Seasonal workers leave. People find better-paying jobs. Housing costs force relocation. Fighting turnover is futile. Instead, build training systems so efficient that turnover becomes manageable instead of catastrophic.
          </p>
        </>
      )
    },
    {
      title: 'The Real Cost of Poor Training',
      content: (
        <>
          <p className="mb-4">
            Poor training doesn't just mean slower employees—it costs you money in ways you might not track.
          </p>

          <p className="mb-6 mt-6">
            <strong>Hidden Costs of Inadequate Training:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Mistakes and waste:</strong> Improperly trained staff make errors that cost materials, time, customer goodwill</li>
            <li><strong>Supervision time:</strong> You or managers spending hours micromanaging undertrained employees</li>
            <li><strong>Lost customers:</strong> Bad service from new employees drives away regulars</li>
            <li><strong>Other staff burnout:</strong> Good employees carrying weight for poorly trained ones quit faster</li>
            <li><strong>Slower operations:</strong> Undertrained staff bottleneck entire workflow</li>
            <li><strong>Safety incidents:</strong> Improper training creates liability risks</li>
          </ul>

          <p className="mb-4 mt-6">
            Investing in training systems isn't expense—it's cost avoidance. Better to spend 40 hours building solid training program than spend 400 hours per year fixing problems from inadequate training.
          </p>
        </>
      )
    },
    {
      title: 'The 3-Day Productivity Goal',
      content: (
        <>
          <p className="mb-4">
            Traditional training: two weeks until somewhat productive. Modern training: 3 days until independently useful. Here's how.
          </p>

          <p className="mb-6 mt-6">
            <strong>Day 1: Survival Skills</strong>
          </p>
          <p className="mb-4">
            Teach minimum skills to be helpful, not perfect. Goal: they can do SOMETHING useful while learning.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>How to greet customers properly</li>
            <li>Where things are located</li>
            <li>Basic safety and hygiene protocols</li>
            <li>One simple task they can do well (bussing tables, stocking, basic prep)</li>
            <li>Who to ask for help</li>
            <li>How to say "I'm new, let me get someone who can help"</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Day 2: Core Function</strong>
          </p>
          <p className="mb-4">
            Main job responsibilities, step by step. Goal: can perform primary duties with supervision.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Primary job tasks broken into procedures</li>
            <li>Quality standards for each task</li>
            <li>Common problems and solutions</li>
            <li>Practice with feedback</li>
            <li>Shadow experienced employee doing real work</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Day 3: Independence and Polish</strong>
          </p>
          <p className="mb-4">
            Refinement and autonomy. Goal: can work independently, knows who to ask for edge cases.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Handle real customers/tasks with trainer nearby</li>
            <li>Learn less-common scenarios</li>
            <li>Speed and efficiency techniques</li>
            <li>Recovery from mistakes</li>
            <li>Understanding "why" behind procedures</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Days 4-30: Ongoing Development</strong>
          </p>
          <p className="mb-4">
            They're independently productive but still learning. Regular check-ins, gradually add complexity, refine skills. But they're contributing value, not pure cost.
          </p>
        </>
      )
    },
    {
      title: 'Documentation That Actually Works',
      content: (
        <>
          <p className="mb-4">
            "Training manual" that no one reads helps nobody. Documentation needs to be accessible, scannable, and actually used.
          </p>

          <p className="mb-6 mt-6">
            <strong>Effective Training Documentation:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. One-Page Quick Reference Guides</strong>
          </p>
          <p className="mb-4">
            Not 50-page manual. One laminated page per task: opening checklist, closing checklist, common drink recipes, etc. Posted at workstations for quick reference.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Video Training (Phone-Recorded)</strong>
          </p>
          <p className="mb-4">
            Your phone can record your best employee doing task correctly. 2-minute video of "how to make cappuccino" beats 10-minute explanation. New hires watch, then practice.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Checklist-Based Systems</strong>
          </p>
          <p className="mb-4">
            Every process = checkbox list. "Opening Procedures: ☐ Turn on equipment, ☐ Check inventory..." Ensures nothing forgotten, builds consistency, easy for new staff.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Troubleshooting Flowcharts</strong>
          </p>
          <p className="mb-4">
            "Customer says X → Do Y." Visual decision trees for common problems. Empowers new staff to handle issues without finding manager.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Digital Accessibility</strong>
          </p>
          <p className="mb-4">
            Google Drive folder, shared with all staff. Videos, PDFs, checklists accessible from phone. They can review at home before shift.
          </p>
        </>
      )
    },
    {
      title: 'Buddy System Training',
      content: (
        <>
          <p className="mb-4">
            Trainer-dependent system fails when trainer is sick/busy. Peer-based buddy system scales better.
          </p>

          <p className="mb-6 mt-6">
            <strong>How Buddy System Works:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Assign Buddy (Not Manager)</strong>
          </p>
          <p className="mb-4">
            New hire gets paired with experienced (not necessarily senior) employee. Buddy is responsible for first 2 weeks of training.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Compensate Buddies</strong>
          </p>
          <p className="mb-4">
            $50-100 bonus for being training buddy, paid when new hire completes 30 days. Incentivizes good training and gives buddy skin in game (want new hire to succeed).
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Shadow First, Then Reverse</strong>
          </p>
          <p className="mb-4">
            Day 1-2: New hire shadows buddy doing tasks. Day 3-5: Buddy watches new hire doing tasks, provides feedback. Day 6+: Work alongside, buddy available for questions.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Buddy Accountability</strong>
          </p>
          <p className="mb-4">
            If new hire isn't properly trained, buddy didn't fulfill responsibility. Creates natural quality control—buddies don't want to look bad.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Rotation</strong>
          </p>
          <p className="mb-4">
            Every experienced employee takes turns being buddy. Distributes training burden, prevents burnout, ensures everyone can train (builds institutional resilience).
          </p>
        </>
      )
    },
    {
      title: 'Modular Training for Partial Productivity',
      content: (
        <>
          <p className="mb-4">
            Instead of "you must learn everything before you're useful," teach modules that create immediate value.
          </p>

          <p className="mb-6 mt-6">
            <strong>Modular Training Approach:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Example: Restaurant Training Modules</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Module 1 (Day 1):</strong> Food runner and busser—they can help immediately</li>
            <li><strong>Module 2 (Day 2-3):</strong> Hosting and seating—customer interaction with low complexity</li>
            <li><strong>Module 3 (Day 4-7):</strong> Taking orders and simple bartending—revenue-generating activities</li>
            <li><strong>Module 4 (Week 2+):</strong> Complex drinks, wine knowledge, handling complaints</li>
          </ul>

          <p className="mb-4 mt-6">
            After Module 1, they're productive (even if limited). Each module adds capability. If they quit after 3 weeks, you still got value from their work.
          </p>
        </>
      )
    },
    {
      title: 'Testing and Certification',
      content: (
        <>
          <p className="mb-4">
            Don't assume training worked. Verify competency before allowing independent work.
          </p>

          <p className="mb-6 mt-6">
            <strong>Skill Verification Methods:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Practical Skill Tests</strong>
          </p>
          <p className="mb-4">
            "Make 3 lattes meeting our quality standard" or "Process 5 transactions correctly" or "Complete opening checklist in 20 minutes." Pass test = certified for independent work.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Scenario-Based Assessment</strong>
          </p>
          <p className="mb-4">
            "Customer complains drink is wrong. What do you do?" Tests judgment, not just mechanical skills.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Trainer Sign-Off</strong>
          </p>
          <p className="mb-4">
            Buddy/trainer must certify: "They can do [task] independently." Creates accountability for trainer and clear standard for trainee.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Progressive Responsibility</strong>
          </p>
          <p className="mb-4">
            Can't advance to next training module until certified in current one. Prevents undertrained employees being thrust into situations they can't handle.
          </p>
        </>
      )
    },
    {
      title: 'Retaining Through Training Investment',
      content: (
        <>
          <p className="mb-4">
            Good training isn't just about productivity—it's retention tool. People stay where they feel competent and valued.
          </p>

          <p className="mb-6 mt-6">
            <strong>Training as Retention Strategy:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Continued Development</strong>
          </p>
          <p className="mb-4">
            Training doesn't stop after onboarding. Monthly skill-building sessions: latte art workshop, customer service training, new menu items. Shows investment in their growth.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Cross-Training</strong>
          </p>
          <p className="mb-4">
            Teach multiple roles. Keeps work interesting, provides variety, makes them more valuable (and they know it). More investment = more likely to stay.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Leadership Training</strong>
          </p>
          <p className="mb-4">
            After mastering their role, train them to train others. Gives status and responsibility without necessarily promoting. "You're certified trainer now" feels like recognition.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. External Certifications</strong>
          </p>
          <p className="mb-4">
            Pay for relevant certifications: ServSafe, bartending license, barista certification. Investment in their career, not just your business. Creates loyalty.
          </p>

          <p className="mb-4 mt-6">
            <strong>Psychology:</strong> People don't want to leave places that invested in them. Good training creates obligation and appreciation that reduces turnover.
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
            Training High-Turnover Service Staff in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Build efficient training systems that get new employees productive in days, not weeks. Manage inevitable turnover without operational chaos.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Building Training Systems?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz service businesses create documentation, training programs, and onboarding systems that turn new hires into productive employees fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Build Training Systems
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Training Needs
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

