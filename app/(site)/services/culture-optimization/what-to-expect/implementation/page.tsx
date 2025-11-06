import Link from 'next/link'

export const metadata = { title: 'Implementation Phase — Culture & Environment Optimization' }

export default function ImplementationPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/culture-optimization" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Culture & Environment Optimization
      </Link>

      <h1 className="mb-4">Week 5-6: Implementation Phase</h1>
      <p className="text-xl text-white/90 mb-8">We help you roll out new rituals, systems, and space improvements. We train your team, manage change communication, and ensure adoption.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What Happens</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Team Kickoff Meeting (Day 22, 30-45 min)</h3>
              <p className="text-white/70 text-sm mb-3">Leadership introduces culture improvements to the full team. We help you communicate why changes are happening and what to expect.</p>
              <div className="text-xs text-white/60">
                <p className="font-medium mb-1">Key messages:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Here's what we learned from the culture assessment</li>
                  <li>• Here's what we're changing and why</li>
                  <li>• Here's how you'll be involved</li>
                  <li>• Your feedback matters — we'll check in regularly</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Ritual Launch & Training (Days 22-28)</h3>
              <p className="text-white/70 text-sm mb-3">We introduce new rituals (recognition, meetings, feedback loops) and train team on how to participate.</p>
              <div className="text-xs text-white/60">
                <p className="font-medium mb-1">Examples:</p>
                <ul className="pl-3 space-y-1">
                  <li>• First "wins" ritual: We facilitate, show how it works</li>
                  <li>• New meeting cadence: We observe first rounds, provide feedback</li>
                  <li>• Peer recognition system: We demo and encourage participation</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Space Improvements (Days 22-35)</h3>
              <p className="text-white/70 text-sm mb-3">Physical and digital workspace changes begin. We provide vendor recommendations, manage logistics, and ensure adoption.</p>
              <div className="text-xs text-white/60">
                <p className="font-medium mb-1">Common improvements:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Furniture upgrades (ergonomic chairs, standing desks)</li>
                  <li>• Noise reduction (sound panels, phone booths)</li>
                  <li>• Digital tool consolidation (archive unused tools)</li>
                  <li>• Information architecture (organize docs, files, knowledge base)</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Leadership Coaching Check-Ins (Days 24, 31, 38)</h3>
              <p className="text-white/70 text-sm mb-3">Weekly 30-minute calls with leadership. Troubleshoot issues, adjust approach, and ensure momentum.</p>
              <div className="text-xs text-white/60">
                <p className="font-medium mb-1">What we cover:</p>
                <ul className="pl-3 space-y-1">
                  <li>• How are rituals landing?</li>
                  <li>• What resistance are you seeing?</li>
                  <li>• What adjustments do we need to make?</li>
                  <li>• How can you reinforce changes?</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Mid-Rollout Pulse Check (Day 28, 5 min)</h3>
              <p className="text-white/70 text-sm mb-3">Quick anonymous survey sent to team. Measure early reactions to changes and identify concerns.</p>
              <p className="text-white/60 text-xs">This helps us adjust before issues compound.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Final Handoff & Training (Days 35-40)</h3>
              <p className="text-white/70 text-sm mb-3">We train leadership on how to sustain changes: how to run Vibe Resets, how to coach team on new rituals, and how to measure progress.</p>
              <div className="text-xs text-white/60">
                <p className="font-medium mb-1">Deliverables:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Facilitation guides for rituals</li>
                  <li>• Vibe Reset facilitation training</li>
                  <li>• Dashboard walkthrough (how to track culture health)</li>
                  <li>• Troubleshooting playbook</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Your Time Investment</h2>
          <div className="card p-6 bg-white/5">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Leadership</h4>
                <ul className="text-white/70 text-xs space-y-1">
                  <li>• 30-min team kickoff</li>
                  <li>• 3x 30-min check-ins</li>
                  <li>• 60-min handoff training</li>
                </ul>
                <p className="text-current-500 text-xs mt-2 font-medium">Total: ~3 hours over 2 weeks</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Team</h4>
                <ul className="text-white/70 text-xs space-y-1">
                  <li>• 30-min kickoff meeting</li>
                  <li>• 5-min pulse check</li>
                  <li>• Participate in new rituals (normal work time)</li>
                </ul>
                <p className="text-current-500 text-xs mt-2 font-medium">Total: ~35 min + ritual time</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What Success Looks Like</h2>
          <div className="space-y-3">
            <div className="card p-4 bg-current-600/10">
              <p className="text-white/80 text-sm">✓ New rituals are running without external facilitation</p>
            </div>
            <div className="card p-4 bg-current-600/10">
              <p className="text-white/80 text-sm">✓ Team is participating voluntarily (not feeling forced)</p>
            </div>
            <div className="card p-4 bg-current-600/10">
              <p className="text-white/80 text-sm">✓ Leadership can run Vibe Resets independently</p>
            </div>
            <div className="card p-4 bg-current-600/10">
              <p className="text-white/80 text-sm">✓ Early morale indicators are positive (pulse check results)</p>
            </div>
            <div className="card p-4 bg-current-600/10">
              <p className="text-white/80 text-sm">✓ Space improvements are complete and being used</p>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Culture Optimization Process</h2>
          <p className="text-white/80">Implementation happens during Week 5-6 of the Culture & Environment Optimization engagement.</p>
          <Link href="/services/culture-optimization" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more about the full service →</Link>
        </section>
      </div>
    </div>
  )
}

