import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'For Broken Processes - Flow Check - Vibes Consulting',
  description: 'Onboarding takes too long. Projects have too many handoffs. Information gets lost. Simple tasks require too many meetings. The Flow Check shows you what to fix first.'
}

export default function BrokenProcessesPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/flow-check" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Flow Check
      </Link>

      <h1 className="mb-4">For Broken Processes: When Your Gut Says "There's a Better Way"</h1>
      <p className="text-xl text-white/90 mb-8">You know things should be easier. The Flow Check shows you exactly what's broken and how to fix it.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">The Broken Process Pattern</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Onboarding a new client takes 3 weeks when it should take 5 days. Getting approval for simple things requires 4 emails and 2 meetings. Information lives in 6 different places and nobody can find it.</p>
            <p className="text-white/80 mb-4">You can feel the friction every day. Things that should be simple are complicated. Work gets duplicated. Important details fall through cracks.</p>
            <p className="text-white/80">Your gut says "there has to be a better way." You're right.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Signs Your Processes Are Broken</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Onboarding (clients or employees) takes way too long</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Projects have 5+ handoffs where things get lost</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Same information requested multiple times</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Simple approvals take days</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ "Where is that file?" asked daily</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Meetings to figure out what happened in last meeting</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Common Broken Processes</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Client Onboarding</h3>
              <p className="text-white/70 text-xs mb-2"><strong>Broken:</strong> Intake form incomplete → 3 rounds of back-and-forth → still missing info at kickoff → project starts late</p>
              <p className="text-current-500 text-xs"><strong>Fixed:</strong> Comprehensive intake form → auto-populates project brief → kickoff has everything → project starts on time</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Project Handoffs</h3>
              <p className="text-white/70 text-xs mb-2"><strong>Broken:</strong> Work passed from person to person with verbal context → details lost → rework required</p>
              <p className="text-current-500 text-xs"><strong>Fixed:</strong> Standard handoff checklist → written context → next person has what they need → no rework</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Approval Workflows</h3>
              <p className="text-white/70 text-xs mb-2"><strong>Broken:</strong> Email for approval → no response → follow up Slack → "let's meet about it" → decision in 5 days</p>
              <p className="text-current-500 text-xs"><strong>Fixed:</strong> Decision thresholds documented → most things don't need approval → what does has SLA → 24-hour turnaround</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Information Management</h3>
              <p className="text-white/70 text-xs mb-2"><strong>Broken:</strong> Files in Drive, Dropbox, email, Slack → nobody can find anything → ask in Slack "where's that doc?"</p>
              <p className="text-current-500 text-xs"><strong>Fixed:</strong> Single source of truth → clear folder structure → naming conventions → findable in 30 seconds</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How Flow Check Helps</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">We Map the Mess</h3>
              <p className="text-white/70 text-sm">The Friction Audit documents every step in your broken processes. Not how it should work - how it actually works. This reveals why things are slow.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">We Show You the Clean Version</h3>
              <p className="text-white/70 text-sm">The Flow Map redesigns your workflows: fewer steps, clear ownership, better handoffs. You see exactly what the ideal process looks like.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">We Give You a Fix-It Plan</h3>
              <p className="text-white/70 text-sm">The 90-Day Plan prioritizes fixes by impact. You tackle the biggest time-wasters first, not random improvements.</p>
            </div>
          </div>
        </section>

        

        <section>
          <h2 className="mb-4">What You'll Learn</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-white/90 mb-4">The Flow Check will show you:</p>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>✓ Which process is costing you the most time (fix that first)</li>
              <li>✓ Where handoffs are breaking down and how to fix them</li>
              <li>✓ What steps can be eliminated entirely</li>
              <li>✓ What documentation would prevent repeated questions</li>
              <li>✓ How to redesign workflows to be faster and more reliable</li>
            </ul>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to Fix What's Broken?</h2>
          <p className="text-white/80 mb-6">The Flow Check shows you exactly what to fix first and how to fix it right.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

