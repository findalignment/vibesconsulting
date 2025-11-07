import Link from 'next/link'

export const metadata = {
  title: "Your Team Keeps Asking the Same Questions",
  description: "If you're answering the same question three times, it should be documented."
}

export default function BlogPost() {
  return (
    <div className="pb-20 max-w-3xl">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <time className="text-white/60 text-sm">October 09, 2024</time>
          <h1 className="mt-2 mb-4">Your Team Keeps Asking the Same Questions</h1>
          <p className="text-xl text-white/80">If you're answering the same question three times, it should be documented.</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-white/80">
          <p>You hired good people. They're smart, capable, and motivated. Yet somehow, work isn't getting done efficiently, quality is inconsistent, and everyone seems frustrated.</p>

          <p>The problem usually isn't your people. It's the system they're working in.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">What This Looks Like</h2>
          
          <p>Here are the signs you're dealing with a systems problem, not a people problem:</p>

          <p><strong>High performers struggle too.</strong> If even your best people can't seem to execute consistently, the system is broken.</p>

          <p><strong>People keep asking the same questions.</strong> They're not stupid - they're operating without clear documentation or standards.</p>

          <p><strong>Quality varies by person.</strong> Everyone does the same task differently because there's no defined "right way."</p>

          <p><strong>New hires take forever to ramp up.</strong> Without structured onboarding, everyone learns by trial and error.</p>

          <p><strong>Mistakes get repeated.</strong> There's no system for capturing and preventing recurring errors.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">The Systems That Are Probably Broken</h2>
          
          <p>Most team problems trace back to a few system failures:</p>

          <p><strong>Unclear expectations.</strong> People don't know what success looks like, so they're guessing. This creates anxiety and inconsistency.</p>

          <p><strong>No documentation.</strong> Procedures exist in people's heads, not in accessible formats. Knowledge transfer is impossible.</p>

          <p><strong>Inconsistent training.</strong> New hires get different onboarding depending on who trains them. Standards can't exist without standard training.</p>

          <p><strong>Poor communication channels.</strong> Important information gets lost in email/Slack chaos. There's no single source of truth.</p>

          <p><strong>No feedback loops.</strong> People don't know if they're doing well or poorly until it's a crisis. Course-correction happens too late.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How to Fix the System</h2>
          
          <p>Here's how to build systems that enable good work:</p>

          <p><strong>1. Document core processes.</strong> Write down how things should be done. Make it visual and simple. This isn't bureaucracy - it's clarity.</p>

          <p><strong>2. Define quality standards.</strong> For each key task, specify what "good" looks like. Give people a target to aim for.</p>

          <p><strong>3. Create structured onboarding.</strong> New hires should all learn the same foundation. Build a week-by-week plan with clear checkpoints.</p>

          <p><strong>4. Establish communication norms.</strong> Decide where different types of information live. Make it easy to find answers without asking.</p>

          <p><strong>5. Build regular feedback into the routine.</strong> Weekly check-ins, monthly reviews, real-time observations. Feedback can't be random.</p>

          <p><strong>6. Empower decision-making.</strong> Give people clear authority within boundaries. Let them solve problems without escalating everything.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">The Mindset Shift</h2>
          
          <p>When something goes wrong, most owners blame the person who made the mistake. Better question: why did the system allow that mistake to happen?</p>

          <p>Good systems make it easy to do the right thing and hard to do the wrong thing. Bad systems create friction everywhere.</p>

          <p>If your team is struggling, look at the system first. You might be surprised how much changes when you remove the obstacles to good work.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">What Success Looks Like</h2>
          
          <p>In businesses with good systems:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>New hires become productive faster</strong> - Clear onboarding and documentation accelerate learning</li>
            <li><strong>Quality stays consistent</strong> - Standards exist and people follow them</li>
            <li><strong>Questions decrease over time</strong> - Information is documented and accessible</li>
            <li><strong>Staff take ownership</strong> - They know what they're responsible for and have authority to act</li>
            <li><strong>Problems get solved, not repeated</strong> - Feedback loops catch issues early</li>
          </ul>

          <p>That's what happens when you fix the system, not just coach the people.</p>
          
          <div className="bg-current-600/10 p-6 rounded-lg mt-8">
            <p className="font-semibold text-white mb-2">Struggling with operational friction?</p>
            <p className="text-white/70 text-sm">Book a Flow Check to identify where your systems are breaking down.</p>
            <Link href="/packages/flow-check" className="text-current-500 hover:underline text-sm">Learn about Flow Check →</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
