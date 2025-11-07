import Link from 'next/link'

export const metadata = { title: 'Final Presentation - Business Flow Consulting' }

export default function PresentationPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/business-flow" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Business Flow Consulting
      </Link>

      <h1 className="mb-4">Week 2: Final Presentation</h1>
      <p className="text-xl text-white/90 mb-8">60-minute presentation where we walk through findings, answer questions, and help you decide next steps.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Presentation Format (60 minutes)</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <div className="flex items-start gap-3">
                <div className="text-current-500 font-bold">15min</div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white mb-1">Friction Audit Findings</h3>
                  <p className="text-white/70 text-xs">We present the visual Friction Map, walk through the top 3-5 bottlenecks, and explain root causes. You'll see exactly where work gets stuck and why.</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-3">
                <div className="text-current-500 font-bold">15min</div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white mb-1">Flow Map (Current vs. Ideal)</h3>
                  <p className="text-white/70 text-xs">Side-by-side comparison of how work flows now vs. how it should flow. We explain what needs to change and why the ideal state will work better.</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-3">
                <div className="text-current-500 font-bold">20min</div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white mb-1">90-Day Improvement Plan</h3>
                  <p className="text-white/70 text-xs">Phased roadmap with specific actions, owners, timeline, and success metrics. We break down quick wins (weeks 1-4), system redesign (weeks 5-8), and stabilization (weeks 9-12).</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-3">
                <div className="text-current-500 font-bold">10min</div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white mb-1">Q&A & Next Steps</h3>
                  <p className="text-white/70 text-xs">Your questions, clarifications, and discussion of implementation options (self-implement vs. Flow Rebuild).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Who Should Attend</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4"><strong>Required:</strong> Leadership/decision-makers (founders, owners, directors)</p>
            <p className="text-white/70 text-sm mb-4"><strong>Recommended:</strong> Key managers who will implement the plan</p>
            <p className="text-white/60 text-xs">Typical attendance: 3-7 people. Small enough for real discussion, large enough to build buy-in.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You Receive</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Presentation Deck</h3>
              <p className="text-white/70 text-xs">Complete slide deck with all findings, maps, and recommendations. You keep this for reference.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Friction Audit Report</h3>
              <p className="text-white/70 text-xs">Detailed document with visual maps, analysis, and prioritized friction points.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Flow Maps</h3>
              <p className="text-white/70 text-xs">Current and Ideal state diagrams with decision rights matrix and gap analysis.</p>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">90-Day Plan</h3>
              <p className="text-white/70 text-xs">Implementation roadmap with actions, owners, timeline, metrics, and communication plan.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Discussion Topics</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Are the findings accurate?</h4>
              <p className="text-white/70 text-xs">Sometimes we discover friction that leadership wasn't aware of. We discuss whether our findings match your understanding.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Is the ideal state realistic?</h4>
              <p className="text-white/70 text-xs">We validate assumptions. Can you staff this? Do you have the tools? Are there constraints we missed?</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Which improvements to prioritize?</h4>
              <p className="text-white/70 text-xs">We recommend a sequence, but you might have different priorities. We adjust the plan based on your input.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Self-implement or get help?</h4>
              <p className="text-white/70 text-xs">We discuss your capacity, execution experience, and whether Flow Rebuild makes sense.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Three Paths Forward</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4">
              <h3 className="text-sm font-medium text-current-500 mb-2">Implement Yourself</h3>
              <p className="text-white/70 text-xs mb-2">Take the plan and run with it. We provide 30 days of email support for questions.</p>
              <p className="text-white/60 text-xs italic">Cost: $0 (already paid)</p>
            </div>

            <div className="card p-4">
              <h3 className="text-sm font-medium text-current-500 mb-2">Flow Rebuild</h3>
              <p className="text-white/70 text-xs mb-2">We implement the plan with you over 6 weeks. Your $2,500 is fully credited.</p>
              <p className="text-white/60 text-xs italic">Cost: $5,500 more</p>
            </div>

            <div className="card p-4">
              <h3 className="text-sm font-medium text-current-500 mb-2">Pause & Return</h3>
              <p className="text-white/70 text-xs mb-2">Not ready to implement? No problem. Credit stays active for 12 months.</p>
              <p className="text-white/60 text-xs italic">Cost: $0</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Post-Presentation Support</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3"><strong>30 days of email support included</strong></p>
            <p className="text-white/70 text-sm mb-3">After the presentation, you'll have questions as you start implementing. We're available via email to answer:</p>
            <ul className="text-white/60 text-xs space-y-1 pl-3">
              <li>• Clarifications on recommendations</li>
              <li>• Guidance on sequencing</li>
              <li>• Tool or template suggestions</li>
              <li>• Troubleshooting implementation issues</li>
            </ul>
            <p className="text-white/60 text-xs mt-3">Response time: Within 24-48 hours</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Flow Check Process</h2>
          <p className="text-white/80">Final Presentation happens on Day 14-15 of The Flow Check engagement.</p>
          <Link href="/packages/flow-check" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more about Flow Check →</Link>
        </section>
      </div>
    </div>
  )
}
