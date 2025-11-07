import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'

export const metadata = {
  title: "Context Switching Is Killing Your Team's Productivity",
  description: "Your team jumps between tasks all day. Deep work never happens. This is a structure problem."
}

export default function BlogPost() {
  const sections = [
    {
      title: "What This Looks Like",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">Here are the signs you're dealing with a systems problem, not a people problem:</p>

          <p><strong className="text-white">High performers struggle too.</strong> If even your best people can't seem to execute consistently, the system is broken.</p>

          <p><strong className="text-white">People keep asking the same questions.</strong> They're not stupid - they're operating without clear documentation or standards.</p>

          <p><strong className="text-white">Quality varies by person.</strong> Everyone does the same task differently because there's no defined "right way."</p>

          <p><strong className="text-white">New hires take forever to ramp up.</strong> Without structured onboarding, everyone learns by trial and error.</p>

          <p><strong className="text-white">Mistakes get repeated.</strong> There's no system for capturing and preventing recurring errors.</p>
        </>
      )
    },
    {
      title: "The Systems That Are Probably Broken",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">Most team problems trace back to a few system failures:</p>

          <p><strong className="text-white">Unclear expectations.</strong> People don't know what success looks like, so they're guessing. This creates anxiety and inconsistency.</p>

          <p><strong className="text-white">No documentation.</strong> Procedures exist in people's heads, not in accessible formats. Knowledge transfer is impossible.</p>

          <p><strong className="text-white">Inconsistent training.</strong> New hires get different onboarding depending on who trains them. Standards can't exist without standard training.</p>

          <p><strong className="text-white">Poor communication channels.</strong> Important information gets lost in email/Slack chaos. There's no single source of truth.</p>

          <p><strong className="text-white">No feedback loops.</strong> People don't know if they're doing well or poorly until it's a crisis. Course-correction happens too late.</p>
        </>
      )
    },
    {
      title: "How to Fix the System",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">Here's how to build systems that enable good work:</p>

          <p><strong className="text-white">1. Document core processes.</strong> Write down how things should be done. Make it visual and simple. This isn't bureaucracy - it's clarity.</p>

          <p><strong className="text-white">2. Define quality standards.</strong> For each key task, specify what "good" looks like. Give people a target to aim for.</p>

          <p><strong className="text-white">3. Create structured onboarding.</strong> New hires should all learn the same foundation. Build a week-by-week plan with clear checkpoints.</p>

          <p><strong className="text-white">4. Establish communication norms.</strong> Decide where different types of information live. Make it easy to find answers without asking.</p>

          <p><strong className="text-white">5. Build regular feedback into the routine.</strong> Weekly check-ins, monthly reviews, real-time observations. Feedback can't be random.</p>

          <p><strong className="text-white">6. Empower decision-making.</strong> Give people clear authority within boundaries. Let them solve problems without escalating everything.</p>
        </>
      )
    },
    {
      title: "The Mindset Shift",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">When something goes wrong, most owners blame the person who made the mistake. Better question: why did the system allow that mistake to happen?</p>

          <p>Good systems make it easy to do the right thing and hard to do the wrong thing. Bad systems create friction everywhere.</p>

          <p>If your team is struggling, look at the system first. You might be surprised how much changes when you remove the obstacles to good work.</p>
        </>
      )
    },
    {
      title: "What Success Looks Like",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">In businesses with good systems:</p>

          <ul className="list-disc pl-8 space-y-3 my-6 text-white/80">
            <li><strong className="text-white">New hires become productive faster</strong> - Clear onboarding and documentation accelerate learning</li>
            <li><strong className="text-white">Quality stays consistent</strong> - Standards exist and people follow them</li>
            <li><strong className="text-white">Questions decrease over time</strong> - Information is documented and accessible</li>
            <li><strong className="text-white">Staff take ownership</strong> - They know what they're responsible for and have authority to act</li>
            <li><strong className="text-white">Problems get solved, not repeated</strong> - Feedback loops catch issues early</li>
          </ul>

          <p>That's what happens when you fix the system, not just coach the people.</p>
          
          <div className="bg-gradient-to-br from-current-600/20 to-current-800/30 p-8 md:p-10 rounded-xl border border-current-500/20 mt-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-2xl font-bold text-white mb-3">Facing operational challenges?</p>
                <p className="text-white/80 text-lg">Book a Flow Check to diagnose where your systems need help.</p>
              </div>
              <Link 
                href="/packages/flow-check" 
                className="btn btn-primary whitespace-nowrap group"
              >
                Learn about Flow Check
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-8 inline-flex items-center gap-2 hover:gap-3 transition-all">
        <span>←</span> Back to Blog
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-white/60 mb-4">
            <time>October 18, 2024</time>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="text-current-500">Operations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Context Switching Is Killing Your Team's Productivity</h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed">Your team jumps between tasks all day. Deep work never happens. This is a structure problem.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">You hired good people. They're smart, capable, and motivated. Yet somehow, work isn't getting done efficiently, quality is inconsistent, and everyone seems frustrated.</p>

          <p>The problem usually isn't your people. It's the system they're working in.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="mt-24 pt-16 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/working-in-business-not-on" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-current-500 transition-colors">Working In Business Not On</h4>
                <p className="text-white/70 text-sm">Practical insights on improving your business operations.</p>
              </Link>
              <Link href="/blog/good-people-bad-systems" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-current-500 transition-colors">Good People Bad Systems</h4>
                <p className="text-white/70 text-sm">Learn how to build better systems and reduce friction.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
