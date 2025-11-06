import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'On-Call Support — Vibe Partnership — Vibes Consulting',
  description: 'Slack/email access for questions as they come up. Fast, actionable guidance on culture and operations.'
}

export default function OnCallSupportPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/vibe-partnership" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Vibe Partnership
      </Link>

      <h1 className="mb-4">On-Call Culture & Ops Support</h1>
      <p className="text-xl text-white/90 mb-8">Your team has questions. We have answers. Fast, practical guidance when you need it.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What It Is</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Slack or email access to us for questions as they come up. Not hourly consulting — just fast, practical guidance on culture and operations decisions.</p>
            <p className="text-white/80">"Should we change this ritual?" "How do we handle this team dynamic?" "Is this process still serving us?" We help you make better decisions in real-time.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Common Questions We Answer</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-1">Culture & Team Dynamics</h4>
              <p className="text-white/70 text-xs mb-2">Examples: "Two team members not collaborating well." "Should we do team-building event?" "How to give difficult feedback?"</p>
              <p className="text-white/60 text-xs italic">Response: Specific advice based on your team's context, not generic frameworks.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-1">Process & Operations</h4>
              <p className="text-white/70 text-xs mb-2">Examples: "This workflow isn't working anymore." "Should we add approval step?" "How to improve handoffs?"</p>
              <p className="text-white/60 text-xs italic">Response: Quick process design guidance or validation of your proposed solution.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-1">Rituals & Communication</h4>
              <p className="text-white/70 text-xs mb-2">Examples: "Standup feels wasteful." "All-hands getting boring." "Too many meetings, what to cut?"</p>
              <p className="text-white/60 text-xs italic">Response: Specific suggestions for redesigning or killing rituals.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-1">Leadership Challenges</h4>
              <p className="text-white/70 text-xs mb-2">Examples: "How much to delegate?" "Team wants remote, I want in-office." "New manager struggling."</p>
              <p className="text-white/60 text-xs italic">Response: Leadership coaching on the specific challenge you're facing.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Response Times</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Urgent</h4>
              <p className="text-white/70 text-xs mb-2">Same day response</p>
              <p className="text-white/60 text-xs italic">Example: "Employee giving notice, how to handle exit interview?"</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Standard</h4>
              <p className="text-white/70 text-xs mb-2">Within 24 hours</p>
              <p className="text-white/60 text-xs italic">Example: "Thinking about changing our retro format, thoughts?"</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Strategic</h4>
              <p className="text-white/70 text-xs mb-2">48-hour turnaround</p>
              <p className="text-white/60 text-xs italic">Example: "Considering major org restructure, can you review plan?"</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Why This Matters</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Most consultants disappear after delivering a report. You're left implementing alone, second-guessing decisions, or worse — not implementing at all.</p>
            <p className="text-white/80 mb-4">On-call support means you have a trusted advisor in your pocket. When questions come up (and they always do), you get fast, practical guidance.</p>
            <p className="text-white/80">It's the difference between theory and actual implementation.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Real Example: Tech Startup, Vibe Partner for 9 Months</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/90 mb-2 font-medium">Typical Month:</p>
            <ul className="text-white/70 text-sm space-y-1 mb-4">
              <li>• 3-4 quick questions via Slack ("Does this sound right?")</li>
              <li>• 1-2 deeper questions via email (process review, team dynamic advice)</li>
              <li>• Occasional urgent question (employee issue, client crisis)</li>
            </ul>

            <p className="text-white/90 mb-2 font-medium">Value:</p>
            <p className="text-white/70 text-sm mb-4">"Having on-call support means I make better decisions faster. I'm not paralyzed wondering if I'm doing the right thing. I ask, get guidance, move forward."</p>

            <p className="text-current-500 text-sm font-medium">Result: Faster decisions, fewer mistakes, more confident leadership.</p>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready for On-Demand Guidance?</h2>
          <p className="text-white/80 mb-6">On-Call Support is included in every Vibe Partnership. Book an intro call to discuss.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

