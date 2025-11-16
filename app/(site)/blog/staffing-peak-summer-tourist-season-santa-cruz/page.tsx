import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: "Staffing for Peak Summer Tourist Season Without Overhiring in Santa Cruz",
  description: "You need 3x the staff in July. But you can't keep them all in January. Here's how to scale staffing for summer without destroying your winter budget."
}

export default function BlogPost() {
  const sections = [
    {
      title: "The Santa Cruz Seasonal Staffing Challenge",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Summer in Santa Cruz requires completely different staffing:</p>

          <p><strong className="text-brand-text">Volume triples overnight.</strong> Memorial Day hits and suddenly you're slammed. Lines out the door. Customers everywhere. Your regular staff is drowning. You need help immediately.</p>

          <p><strong className="text-brand-text">You can't keep everyone year-round.</strong> If you hire enough people to handle July, you can't afford them in January. Your winter revenue won't cover summer-level payroll.</p>

          <p><strong className="text-brand-text">Training takes time you don't have.</strong> You need people productive NOW. But new hires take 2-4 weeks to get up to speed. By the time they're trained, summer's half over.</p>

          <p><strong className="text-brand-text">Quality suffers when you're understaffed.</strong> Wait times increase. Service quality drops. Mistakes happen. Customers notice. Your reputation takes a hit just when you need it most.</p>

          <p><strong className="text-brand-text">You can't predict exactly when you'll need them.</strong> Weather, events, UC Santa Cruz calendar—they all affect tourist volume. You're constantly guessing at the right staffing level.</p>
        </>
      )
    },
    {
      title: "The Core + Seasonal Staffing Model",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">The solution is a two-tier system:</p>

          <p><strong className="text-brand-text">Core team (year-round).</strong> 3-5 people who work all year. These are your key players. They know the business inside out. They train seasonal staff. They handle off-season operations. Pay them well. Treat them like partners. They're your foundation.</p>

          <p><strong className="text-brand-text">Seasonal team (May-September).</strong> 5-10 people hired specifically for summer. Set expectations upfront: this is seasonal work. They know it ends in September. No surprises. Structure their employment around the season from day one.</p>

          <p><strong className="text-brand-text">Flex team (on-call).</strong> 2-4 people who work peak times only—weekends, holidays, special events. They're not guaranteed hours. They fill gaps when you're unexpectedly slammed. Former seasonal workers, college students, semi-retired locals.</p>

          <p><strong className="text-brand-text">Why this works:</strong> Fixed costs stay manageable (core team only). Variable costs scale with revenue (seasonal team). Flexibility handles unpredictability (flex team). You're never dramatically over or under-staffed.</p>
        </>
      )
    },
    {
      title: "Recruiting and Hiring Seasonal Staff",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Start recruiting in March, not May. Here's the timeline:</p>

          <p><strong className="text-brand-text">March: Post seasonal positions.</strong> Be explicit: "Seasonal positions, May-September. Approximately 30 hours/week." Clear expectations prevent awkward conversations later. Target college students finishing spring semester, teachers looking for summer work, people who want seasonal employment.</p>

          <p><strong className="text-brand-text">April: Interview and hire.</strong> Hire 20-30% more than you think you need. Some will flake. Some will quit. Some will be terrible. Build a cohort, not individual hires. They'll bond as a group and retention improves.</p>

          <p><strong className="text-brand-text">Late April/Early May: Training.</strong> Two weeks of training before Memorial Day. Have your core team lead it. Create a structured onboarding program. Don't wing it—you'll repeat this process annually, so systematize it.</p>

          <p><strong className="text-brand-text">Memorial Day-Labor Day: Peak season.</strong> Your seasonal team is at full capacity. Monitor performance. Identify top performers for potential core team openings. Document who you'd rehire next year.</p>

          <p><strong className="text-brand-text">September: Structured off-boarding.</strong> Thank them. Give references. Invite them back next year. Former seasonal workers who know your business are gold for future seasons.</p>
        </>
      )
    },
    {
      title: "Accelerated Training Systems",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">You don't have months to train. You have weeks. Here's how to compress training:</p>

          <p><strong className="text-brand-text">Pre-hire training materials.</strong> Videos, documents, simple quizzes. Send them before day one. Have them complete basics remotely. They show up with foundational knowledge already in place.</p>

          <p><strong className="text-brand-text">Structured 2-week onboarding.</strong> Week 1: Shadow core team, learn basics, practice during slow hours. Week 2: Handle real customers with backup, gradually increase responsibility. Clear milestones each day.</p>

          <p><strong className="text-brand-text">Buddy system.</strong> Pair each seasonal hire with a core team member. That person is their go-to for questions, feedback, and support. Creates accountability and accelerates learning.</p>

          <p><strong className="text-brand-text">Visual job aids and checklists.</strong> Step-by-step guides for common tasks. Laminated cards they can reference while working. Reduces memory burden, increases consistency, speeds learning.</p>

          <p><strong className="text-brand-text">Daily 10-minute debriefs.</strong> First two weeks, quick daily check-in. What went well? What was confusing? What do you need help with? Catch problems early, adjust training in real-time.</p>
        </>
      )
    },
    {
      title: "Managing Mixed Teams",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Core team + seasonal team creates management challenges:</p>

          <p><strong className="text-brand-text">Different compensation and benefits.</strong> Core team makes more, gets benefits, has year-round stability. Seasonal team knows this. Be transparent about why. "You're paid X because this is seasonal. Core team earns Y because they work year-round and have additional responsibilities."</p>

          <p><strong className="text-brand-text">Clear hierarchy and responsibilities.</strong> Core team makes decisions. Seasonal team executes. Don't blur lines. Seasonal workers shouldn't be managing other seasonal workers in week two. Experience and investment level determine authority.</p>

          <p><strong className="text-brand-text">Integration without dependency.</strong> Create team culture—everyone matters, everyone contributes. But operations can't depend on any single seasonal worker. If someone quits or doesn't show, you adapt without crisis.</p>

          <p><strong className="text-brand-text">Recognition and appreciation.</strong> Seasonal doesn't mean disposable. Recognize good work. Celebrate team wins. Thank people regularly. High morale = better performance and fewer mid-season quits.</p>

          <p><strong className="text-brand-text">Path to core team.</strong> Top seasonal performers should know they could become year-round. "We typically hire 1-2 core team members from our seasonal team each year." Gives ambitious people something to work toward.</p>
        </>
      )
    },
    {
      title: "Your Seasonal Hiring Playbook",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's your step-by-step plan for next season:</p>

          <p><strong className="text-brand-text">January: Analyze last season.</strong> How many people did you need? When were you over/understaffed? What did staffing cost? What would you do differently? Document insights while they're fresh.</p>

          <p><strong className="text-brand-text">February: Plan this season.</strong> Based on projected revenue, how many seasonal hires do you need? What's your budget? When will you need them? Create hiring timeline.</p>

          <p><strong className="text-brand-text">March: Launch recruiting.</strong> Post jobs everywhere—Indeed, local Facebook groups, Craigslist, UC Santa Cruz job boards, Good Times classifieds. Target seasonal workers specifically.</p>

          <p><strong className="text-brand-text">April: Hire and onboard.</strong> Interview, make offers, start training. Get people productive before Memorial Day. Use early May for training while business is still manageable.</p>

          <p><strong className="text-brand-text">May-September: Manage and document.</strong> Track performance, note top performers, document processes that work and don't work. This data informs next year's plan.</p>
          
          <p className="text-brand-text/70 mt-6">Need help building your seasonal staffing system? <Link href="/packages/business-flow">Book a Business Flow package</Link> to design your hiring, training, and management processes.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'Santa Cruz Business', href: '/blog/santa-cruz-business' },
        { label: 'Summer Staffing', href: '/blog/staffing-peak-summer-tourist-season-santa-cruz' }
      ]} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>April 9, 2025</time>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Staffing for Peak Summer Tourist Season Without Overhiring</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">You need 3x the staff in July. But you can't keep them all in January. Here's how to scale staffing for summer without destroying your winter budget.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">Every Santa Cruz business owner knows the feeling: summer hits and you're suddenly understaffed. But if you hire enough people for July, you can't afford them in January. It's a no-win situation—until you build the right system.</p>

          <p>The answer isn't hiring more or hiring less. It's hiring differently. Here's how successful seasonal businesses staff for summer without sabotaging their winter survival.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Need help with seasonal staffing strategy?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/packages/business-flow">Book a Business Flow package</Link> to build your seasonal hiring and training systems.</p>
            <Link href="/packages/business-flow" className="text-current-500 hover:underline text-sm">Learn about Business Flow →</Link>
          </div>
        
          {/* Hub Navigation */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <Link href="/blog/santa-cruz-business" className="inline-flex items-center gap-2 text-current-500 hover:text-current-400 transition-colors mb-8">
              <span>←</span> Back to Santa Cruz Business Hub
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-brand-text mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/seasonal-business-operations" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Operations for Seasonal Santa Cruz Businesses</h4>
                <p className="text-brand-text/70 text-sm">Build systems that work when volume fluctuates.</p>
              </Link>
              <Link href="/blog/cant-find-reliable-employees-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Can't Find Reliable Employees in Santa Cruz</h4>
                <p className="text-brand-text/70 text-sm">Hiring strategies that work locally.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

