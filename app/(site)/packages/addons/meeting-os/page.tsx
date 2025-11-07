import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Meeting OS Add-On - Vibes Consulting',
  description: 'Complete meeting cadence redesign with templates and rituals. Cut meeting time by 40% while improving alignment. $1,500.'
}

export default function MeetingOSPage() {
  return (
    <div className="pb-20">
      <Link href="/packages" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Packages
      </Link>

      <header className="mb-12">
        <h1 className="mb-4">Meeting OS</h1>
        <p className="text-xl text-white/90 max-w-3xl">A complete operating system for how your team meets. Eliminate wasteful meetings, make the useful ones actually productive, and reclaim 10+ hours per week.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">$1,500</div>
          <p className="text-white/70 text-sm">One-time build</p>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">2 weeks</div>
          <p className="text-white/70 text-sm">Design & implementation</p>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">40%</div>
          <p className="text-white/70 text-sm">Typical meeting reduction</p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="mb-6">What You Get</h2>
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="text-lg mb-2">Meeting Audit & Redesign</h3>
            <p className="text-white/70 text-sm mb-3">We analyze your current meeting load, identify which ones are status updates disguised as collaboration, and redesign your entire cadence. You'll know exactly which meetings to keep, kill, or convert to async.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Meeting Type Library</h3>
            <p className="text-white/70 text-sm mb-3">Templates for every meeting type: standups, retros, decision meetings, brainstorms, strategy sessions. Each has a clear purpose, agenda structure, and facilitation guide.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Communication Protocol</h3>
            <p className="text-white/70 text-sm mb-3">Clear rules for when to meet vs. Slack vs. email vs. async doc. No more "let's hop on a call" for things that could be a message.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Decision Rights Matrix</h3>
            <p className="text-white/70 text-sm mb-3">Who decides what, who needs to be consulted, who just needs to be informed. Eliminates 90% of "do we need a meeting for this?" questions.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Implementation Support</h3>
            <p className="text-white/70 text-sm mb-3">2-hour workshop to train your team on the new system. We help you actually adopt it, not just document it.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Meeting Types We Redesign</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg mb-3">Weekly Team Sync</h3>
            <p className="text-white/70 text-sm mb-3">Currently: 60-min status update where everyone waits for their turn to talk.</p>
            <p className="text-current-500 text-sm font-medium">Redesigned: 15-min standup + async updates doc</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Monthly All-Hands</h3>
            <p className="text-white/70 text-sm mb-3">Currently: 90-min presentation where people zone out.</p>
            <p className="text-current-500 text-sm font-medium">Redesigned: 30-min focused updates + 15-min Q&A + async deep dives</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Project Kickoffs</h3>
            <p className="text-white/70 text-sm mb-3">Currently: No standard format, important details get missed.</p>
            <p className="text-current-500 text-sm font-medium">Redesigned: Structured template covering scope, roles, timeline, success metrics</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Retrospectives</h3>
            <p className="text-white/70 text-sm mb-3">Currently: Either don't happen or feel like therapy sessions.</p>
            <p className="text-current-500 text-sm font-medium">Redesigned: Focused 45-min format with clear action items</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">The Process</h2>
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="text-sm font-medium text-current-500 mb-2">Week 1: Audit</h3>
            <p className="text-white/70 text-sm mb-3">We review everyone's calendars, attend 2-3 meetings as observers, interview the team about meeting effectiveness. We calculate how much time is spent in meetings vs. deep work.</p>
            <p className="text-white/60 text-xs italic">Your time: 30-min kickoff + meeting observation (no extra time)</p>
          </div>

          <div className="card p-6">
            <h3 className="text-sm font-medium text-current-500 mb-2">Week 2: Redesign</h3>
            <p className="text-white/70 text-sm mb-3">We design your new meeting cadence, create all templates, write communication protocols, and build the decision rights matrix. You review and give feedback.</p>
            <p className="text-white/60 text-xs italic">Your time: 30-min review call</p>
          </div>

          <div className="card p-6">
            <h3 className="text-sm font-medium text-current-500 mb-2">Week 2: Workshop & Launch</h3>
            <p className="text-white/70 text-sm mb-3">2-hour team workshop to introduce the new Meeting OS. We practice using templates, answer questions, and help you update calendars. New system goes live immediately.</p>
            <p className="text-white/60 text-xs italic">Your time: 2-hour workshop</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Real Impact</h2>
        <div className="card p-6 bg-white/5">
          <p className="text-white/90 mb-4 font-medium">Typical results after implementing Meeting OS:</p>
          <ul className="space-y-3 text-white/70 text-sm">
            <li>• <strong>Meeting load drops 30-50%</strong> - Status updates move to async, redundant meetings get killed</li>
            <li>• <strong>Decisions happen faster</strong> - Clear decision rights mean less "let's have a meeting about it"</li>
            <li>• <strong>Better meeting quality</strong> - When you do meet, it's focused and productive</li>
            <li>• <strong>More deep work time</strong> - Calendar blocks open up for actual work</li>
            <li>• <strong>Team satisfaction improves</strong> - People feel their time is respected</li>
          </ul>
        </div>
      </section>

      <section className="mb-16 card p-6">
        <h2 className="mb-4">Common Questions</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Will people actually follow the new system?</h4>
            <p className="text-white/70 text-sm">Yes, if it's easier than the old way. We design for adoption, not perfection. The new system should feel lighter, not more bureaucratic.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">What if we're fully remote?</h4>
            <p className="text-white/70 text-sm">Even better. Remote teams benefit most from meeting discipline and async-first communication.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Can we customize the templates?</h4>
            <p className="text-white/70 text-sm">Absolutely. We deliver them in editable format. Tweak as your needs evolve.</p>
          </div>
        </div>
      </section>

      <section className="card p-8 bg-current-600/10 text-center">
        <h2 className="mb-4">Ready to Reclaim Your Calendar?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-6">Add this to any package or purchase standalone. Book a call to discuss your current meeting pain points.</p>
        <CTAButton>Schedule Intro Call</CTAButton>
      </section>
    </div>
  )
}

