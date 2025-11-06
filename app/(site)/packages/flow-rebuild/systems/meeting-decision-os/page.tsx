import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Meeting & Decision OS Rebuild — Flow Rebuild — Vibes Consulting',
  description: 'Redesign your entire meeting cadence and decision rights. Cut meeting time by 40-50% while improving alignment and clarity.'
}

export default function MeetingDecisionOSPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/flow-rebuild" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Flow Rebuild
      </Link>

      <h1 className="mb-4">Meeting & Decision OS Rebuild</h1>
      <p className="text-xl text-white/90 mb-8">Cut your meeting load by 40-50%, clarify decision rights, and get your time back for actual work.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">The Problem</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Your calendar is full of meetings. Some are useful. Most feel wasteful. You spend more time talking about work than doing work.</p>
            <p className="text-white/80 mb-4">Decisions take forever because nobody knows who should decide what. Everything escalates. Meetings beget more meetings.</p>
            <p className="text-white/80">You need a complete redesign of how your team meets and makes decisions.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What We Build</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Meeting Audit & Redesign</h3>
              <p className="text-white/70 text-sm mb-3">We analyze every recurring meeting: purpose, attendees, format, outcomes. Then we kill wasteful ones, convert status updates to async, and redesign what's left to be faster and more focused.</p>
              <p className="text-white/60 text-xs italic">Result: 40-50% fewer meetings, better outcomes from the ones you keep</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Decision Rights Matrix</h3>
              <p className="text-white/70 text-sm mb-3">Clear framework for who decides, who's consulted, who's informed. Budget thresholds, risk levels, decision types. Team knows what they can decide without asking.</p>
              <p className="text-white/60 text-xs italic">Result: 80% of decisions happen without escalation</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Async Communication Playbook</h3>
              <p className="text-white/70 text-sm mb-3">Rules for when to meet vs. Slack vs. email vs. doc. Meeting request templates. Async decision-making protocols. "Let's hop on a call" becomes the exception, not the default.</p>
              <p className="text-white/60 text-xs italic">Result: More deep work time, fewer interruptions</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Meeting Template Library</h3>
              <p className="text-white/70 text-sm mb-3">Agendas and formats for every meeting type: standups, retros, decision meetings, strategy sessions. Clear structure means less prep, better facilitation.</p>
              <p className="text-white/60 text-xs italic">Result: Meetings start on time, end on time, produce clear outcomes</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You Walk Away With</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">New Meeting Cadence</h4>
              <p className="text-white/70 text-xs">Redesigned schedule with 40-50% fewer meetings. Clear purpose for each one.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Decision Rights Doc</h4>
              <p className="text-white/70 text-xs">Who decides what, with clear thresholds and escalation criteria.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Communication Protocol</h4>
              <p className="text-white/70 text-xs">Rules for async vs. sync, written down and agreed upon.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Meeting Templates</h4>
              <p className="text-white/70 text-xs">Agendas for every meeting type, ready to copy and use.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Team Training</h4>
              <p className="text-white/70 text-xs">2-hour workshop on the new system. Everyone knows how to use it.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">AI Integration</h4>
              <p className="text-white/70 text-xs">Tools for meeting notes, action items, async updates. Saves 5+ hours/week.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Real Example: Tech Startup, 15 People</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/90 mb-2 font-medium">Before:</p>
            <ul className="text-white/70 text-sm space-y-1 mb-4">
              <li>• 12 recurring meetings per week (18 hours total)</li>
              <li>• Every decision escalated to founders</li>
              <li>• "Quick sync" calls that lasted 45 minutes</li>
              <li>• No clear decision-making authority</li>
            </ul>

            <p className="text-white/90 mb-2 font-medium">After Flow Rebuild:</p>
            <ul className="text-white/70 text-sm space-y-1 mb-4">
              <li>• 6 recurring meetings (8 hours total)</li>
              <li>• Project leads empowered to make decisions under $5K</li>
              <li>• Status updates moved to async Loom videos</li>
              <li>• Decision rights matrix posted in Notion</li>
            </ul>

            <p className="text-current-500 text-sm font-medium">Result: 10 hours per week saved, decisions 3x faster, team feels more autonomous</p>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to Reclaim Your Calendar?</h2>
          <p className="text-white/80 mb-6">Meeting & Decision OS is one of three systems you can rebuild with Flow Rebuild. Book an intro call to discuss.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

