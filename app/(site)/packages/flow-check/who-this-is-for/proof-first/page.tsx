import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'For Proof-First Buyers — Flow Check — Vibes Consulting',
  description: 'You want to see the quality of work before committing to a full engagement. The Flow Check delivers value whether you continue or not.'
}

export default function ProofFirstPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/flow-check" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Flow Check
      </Link>

      <h1 className="mb-4">For Proof-First Buyers: See Quality Before Committing</h1>
      <p className="text-xl text-white/90 mb-8">You're not ready to commit $8K without seeing the work first. The Flow Check gives you proof of value for $2,500.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">The "Try Before You Buy" Approach</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Most consulting engagements ask for a big commitment upfront. $10K, $20K, $50K. You're supposed to trust the process and hope for results.</p>
            <p className="text-white/80 mb-4">That's backwards. Why commit to implementation before you know if the consultant actually understands your business?</p>
            <p className="text-white/80">The Flow Check is our "try before you buy." For $2,500, you get real deliverables that prove value — whether you continue with us or not.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Signs This Is You</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Skeptical of consultants who promise big results</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Want proof of quality before full engagement</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Prefer smaller commitments to test fit</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Need to show leadership team tangible value</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Budget-conscious, want ROI-focused solutions</p>
            </div>
            <div className="card p-4">
              <p className="text-white/70 text-xs">✓ Had bad experiences with consultants before</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Why Flow Check Works as Proof</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">It's a Complete Deliverable, Not Just a Proposal</h3>
              <p className="text-white/70 text-sm mb-3">You don't get a "here's what we'd do if you hire us." You get a full diagnostic: Friction Audit, Flow Map, 90-Day Plan. Actionable whether you continue or not.</p>
              <p className="text-white/60 text-xs italic">Some clients implement the plan themselves. Others continue with Flow Rebuild. Both outcomes are fine.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">You See Our Quality of Thinking</h3>
              <p className="text-white/70 text-sm mb-3">The Flow Check shows how we work: Do we actually understand your business? Are the insights valuable? Is the plan realistic? You'll know in 2 weeks.</p>
              <p className="text-white/60 text-xs italic">If the Flow Check is mediocre, you spent $2,500 to avoid a $10K mistake. That's a win.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">The Cost Is Fully Credited</h3>
              <p className="text-white/70 text-sm mb-3">If you continue with Flow Rebuild ($8,000), the $2,500 is credited. You only pay $5,500 more. So it's really a $2,500 test-drive that becomes free if you proceed.</p>
              <p className="text-white/60 text-xs italic">Credit valid for 12 months. Take time to decide.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You Can Do with Just the Flow Check</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/90 mb-4">Even if you never hire us again, the Flow Check gives you:</p>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>✓ Clear diagnosis of your top 3-5 friction points (you can fix these yourself)</li>
              <li>✓ Visual flow maps showing current vs. ideal state (gives your team a target)</li>
              <li>✓ 90-Day implementation plan (step-by-step roadmap for improvements)</li>
              <li>✓ Decision rights framework (clarifies who should decide what)</li>
              <li>✓ 30 days of email support (we answer questions during implementation)</li>
            </ul>
            <p className="text-white/80 mt-4">That's $2,500 for a diagnostic that saves you 10-15 hours per week. ROI in month 1.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Real Example: Consulting Firm, Risk-Averse</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/90 mb-2 font-medium">Situation:</p>
            <p className="text-white/70 text-sm mb-4">Managing partner wanted help with operations but had hired 2 consultants in the past who delivered generic templates and disappeared. Skeptical of spending more.</p>

            <p className="text-white/90 mb-2 font-medium">Flow Check Process:</p>
            <ul className="text-white/70 text-sm space-y-1 mb-4">
              <li>• We interviewed 6 team members, observed their project kickoff process</li>
              <li>• Friction Audit identified client onboarding as biggest bottleneck (2-week delay per client)</li>
              <li>• Flow Map showed how to cut onboarding to 3-5 days with better intake process</li>
              <li>• 90-Day Plan laid out phased implementation with clear owners</li>
            </ul>

            <p className="text-white/90 mb-2 font-medium">Outcome:</p>
            <p className="text-white/70 text-sm mb-4">Managing partner: "This is the first time a consultant actually understood our business. The plan is specific to us, not generic best practices."</p>
            <p className="text-current-500 text-sm font-medium">They continued with Flow Rebuild. But they would've been happy with just the Flow Check — it was that useful.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How to Decide If You Continue</h2>
          <div className="card p-6">
            <p className="text-white/80 mb-4">After the Flow Check, ask yourself:</p>
            <ul className="text-white/70 text-sm space-y-2">
              <li><strong>Were the insights valuable?</strong> Did we find friction you didn't know about? Was the plan realistic?</li>
              <li><strong>Do you have bandwidth to implement?</strong> Some teams can execute the 90-Day Plan themselves. Others need help.</li>
              <li><strong>Is the ROI clear?</strong> If the plan saves 15 hours/week, that's $15K-30K annual value (at $20-40/hour). Does continuing make financial sense?</li>
            </ul>
            <p className="text-white/80 mt-4">We'll help you think through this during the final presentation. No pressure, just honest guidance.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What Clients Say</h2>
          <div className="space-y-3">
            <div className="card p-4 bg-white/5">
              <p className="text-white/80 text-sm italic mb-2">"I was skeptical of consultants, but the Flow Check proved its value in week 1. The insights were specific to our business, not generic frameworks."</p>
              <p className="text-white/60 text-xs">— Founder, Design Agency</p>
            </div>
            <div className="card p-4 bg-white/5">
              <p className="text-white/80 text-sm italic mb-2">"We implemented the 90-Day Plan ourselves. It worked. Saved us $5,500 and we got exactly what we needed."</p>
              <p className="text-white/60 text-xs">— COO, Tech Startup</p>
            </div>
            <div className="card p-4 bg-white/5">
              <p className="text-white/80 text-sm italic mb-2">"The Flow Check was our test. They passed. We immediately booked Flow Rebuild and haven't looked back."</p>
              <p className="text-white/60 text-xs">— Operations Manager, Marketing Firm</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">The Low-Risk Entry Point</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-white/90 mb-3">Flow Check is our lowest-risk offer:</p>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>✓ $2,500 (not $10K or $20K)</li>
              <li>✓ 2 weeks (not 3 months)</li>
              <li>✓ Actionable even if you don't continue</li>
              <li>✓ Fully credited if you do continue</li>
              <li>✓ No long-term commitment required</li>
            </ul>
            <p className="text-white/80 mt-4">If we're good, you'll see it fast. If we're not, you didn't bet the farm to find out.</p>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to Test Drive?</h2>
          <p className="text-white/80 mb-6">The Flow Check proves value before you commit. Book an intro call to get started.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

