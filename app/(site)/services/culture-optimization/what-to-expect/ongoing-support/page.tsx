import Link from 'next/link'

export const metadata = { title: 'Ongoing Support — Culture & Environment Optimization' }

export default function OngoingSupportPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/culture-optimization" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Culture & Environment Optimization
      </Link>

      <h1 className="mb-4">Post-Engagement Support</h1>
      <p className="text-xl text-white/90 mb-8">60 days of coaching and check-ins to ensure changes stick. We don't disappear after implementation — we help you sustain momentum.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What's Included (No Extra Cost)</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">60 Days of Email Coaching</h3>
              <p className="text-white/70 text-sm mb-3">As you implement changes, questions and challenges will arise. We're available via email to troubleshoot, advise, and coach.</p>
              <div className="text-xs text-white/60">
                <p className="font-medium mb-1">Common questions:</p>
                <ul className="pl-3 space-y-1">
                  <li>• "The wins ritual feels forced. How do we fix it?"</li>
                  <li>• "One team member is resisting. What should we do?"</li>
                  <li>• "Can you review this Vibe Reset survey before we send it?"</li>
                  <li>• "Morale dipped this month. What are we missing?"</li>
                </ul>
              </div>
              <p className="text-white/60 text-xs mt-3">Response time: Within 24-48 hours</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">30-Day Check-In Call (30 minutes)</h3>
              <p className="text-white/70 text-sm mb-3">One month after implementation, we meet to assess progress, troubleshoot issues, and adjust approach.</p>
              <div className="text-xs text-white/60">
                <p className="font-medium mb-1">Agenda:</p>
                <ul className="pl-3 space-y-1">
                  <li>• What's working well?</li>
                  <li>• What's not sticking?</li>
                  <li>• How is team responding?</li>
                  <li>• What adjustments do we need to make?</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">60-Day Check-In Call (30 minutes)</h3>
              <p className="text-white/70 text-sm mb-3">Two months after implementation, we assess sustained momentum and plan for the first Vibe Reset.</p>
              <div className="text-xs text-white/60">
                <p className="font-medium mb-1">Agenda:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Review morale trends</li>
                  <li>• Prepare for first Vibe Reset</li>
                  <li>• Identify next phase improvements</li>
                  <li>• Discuss ongoing partnership options</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">First Vibe Reset Facilitation (Optional)</h3>
              <p className="text-white/70 text-sm mb-3">We can facilitate your first quarterly Vibe Reset so you see how it works before running it yourself.</p>
              <p className="text-white/60 text-xs">This happens around Day 90 (3 months post-engagement).</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Common Support Scenarios</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">"Rituals feel forced. People aren't engaging."</h4>
              <p className="text-white/70 text-xs">We help diagnose why (timing, format, leadership modeling) and adjust.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">"One person is resisting changes and influencing others."</h4>
              <p className="text-white/70 text-xs">We coach you on how to have that conversation and whether to involve them differently.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">"We tried the new meeting cadence but it's not working."</h4>
              <p className="text-white/70 text-xs">We review what's off and suggest tweaks (frequency, duration, agenda structure).</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">"Morale improved initially but now it's dropping again."</h4>
              <p className="text-white/70 text-xs">We help identify what changed (external factors, leadership behaviors, communication gaps).</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">"We want to run our first Vibe Reset but need help."</h4>
              <p className="text-white/70 text-xs">We walk you through prep, review your survey, and provide facilitation tips.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What Support Doesn't Cover</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3">The 60-day support is for <strong>implementation coaching</strong>, not ongoing consulting. It doesn't include:</p>
            <ul className="text-white/70 text-sm space-y-2">
              <li>✗ Designing new systems beyond what was already created</li>
              <li>✗ Facilitating ongoing meetings or rituals for you</li>
              <li>✗ Creating new documentation or templates</li>
              <li>✗ Conducting additional culture assessments</li>
              <li>✗ Addressing new problems unrelated to implemented changes</li>
            </ul>
            <p className="text-white/60 text-xs mt-4">For ongoing support beyond 60 days, consider The Vibe Partnership (quarterly retainer).</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Continuing with Vibe Partnership</h2>
          <div className="card p-6 bg-current-600/10">
            <h3 className="text-lg mb-2">Quarterly Retainer for Continuous Improvement</h3>
            <p className="text-white/70 text-sm mb-4">If you want ongoing culture support, consider The Vibe Partnership: $3,500/month (billed quarterly).</p>
            <div className="text-xs text-white/60 mb-4">
              <p className="font-medium mb-1">What's included:</p>
              <ul className="pl-3 space-y-1">
                <li>• Quarterly Vibe Resets (we facilitate)</li>
                <li>• Monthly pulse surveys and analysis</li>
                <li>• On-call coaching for culture challenges</li>
                <li>• Continuous optimization (rituals, systems, space)</li>
              </ul>
            </div>
            <Link href="/packages/vibe-partnership" className="text-current-500 hover:text-current-400 text-sm inline-block">Learn more about Vibe Partnership →</Link>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Questions About Support?</h2>
          <p className="text-white/80 mb-4">We're happy to clarify what's included before you book.</p>
          <Link href="/contact" className="btn btn-primary inline-block">Schedule Intro Call</Link>
        </section>
      </div>
    </div>
  )
}

