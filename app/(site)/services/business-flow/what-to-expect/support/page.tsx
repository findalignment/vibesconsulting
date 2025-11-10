import Link from 'next/link'

export const metadata = { title: 'Post-Engagement Support - Business Flow Consulting' }

export default function SupportPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/business-flow" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to Business Flow Consulting
      </Link>

      <h1 className="mb-4">Post-Engagement Support</h1>
      <p className="text-xl text-brand-text/90 mb-8">30 days of email support, optional check-ins, and credit toward future work. We don't disappear after the presentation.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What's Included (No Extra Cost)</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">30 Days of Email Support</h3>
              <p className="text-brand-text/70 text-sm mb-3">As you start implementing the 90-Day Plan, questions will come up. We're available via email to provide guidance, clarify recommendations, and troubleshoot issues.</p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-brand-text/70 text-xs font-medium mb-1">Response time:</p>
                  <p className="text-brand-text/60 text-xs">Within 24-48 hours</p>
                </div>
                <div>
                  <p className="text-brand-text/70 text-xs font-medium mb-1">Scope:</p>
                  <p className="text-brand-text/60 text-xs">Implementation questions, not ongoing consulting</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">60-Day Check-In Call (Optional)</h3>
              <p className="text-brand-text/70 text-sm mb-3">Two months after the Flow Check, we offer a 30-minute call to see how implementation is going. This is optional and scheduled at your request.</p>
              <div className="text-xs text-brand-text/60">
                <p className="font-medium mb-1">What we cover:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Progress on quick wins</li>
                  <li>• Obstacles you've encountered</li>
                  <li>• Adjustments to the plan</li>
                  <li>• Whether you need additional help</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Credit Toward Flow Rebuild</h3>
              <p className="text-brand-text/70 text-sm mb-3">Your $2,500 Flow Check fee is fully credited if you continue with Flow Rebuild within 12 months. No catch, no expiration tricks.</p>
              <div className="text-xs text-brand-text/60 bg-current-600/10 p-3 rounded-lg mt-3">
                <p className="font-medium mb-1">Example:</p>
                <p>Flow Check = $2,500</p>
                <p>Flow Rebuild = $8,000</p>
                <p className="text-current-500 mt-1">You pay = $5,500 if you continue</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Common Support Questions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-2">"Should we implement A before B?"</h4>
              <p className="text-brand-text/70 text-xs">We help you think through sequencing if your situation changes.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-2">"Our team is resisting this change"</h4>
              <p className="text-brand-text/70 text-xs">We provide guidance on change management and communication.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-2">"What tool should we use for X?"</h4>
              <p className="text-brand-text/70 text-xs">We recommend specific tools, templates, or platforms.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-2">"This is taking longer than expected"</h4>
              <p className="text-brand-text/70 text-xs">We help adjust timelines and priorities based on reality.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-2">"We hit an edge case"</h4>
              <p className="text-brand-text/70 text-xs">We provide guidance on handling exceptions not covered in the plan.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-2">"Should we hire for this?"</h4>
              <p className="text-brand-text/70 text-xs">We advise on whether a role, contractor, or tool makes sense.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What Support Doesn't Cover</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-brand-text/70 mb-3">The 30-day support is for <strong>implementation questions</strong>, not ongoing consulting. It doesn't include:</p>
            <ul className="text-brand-text/70 text-sm space-y-2">
              <li>✗ Doing the implementation work for you</li>
              <li>✗ Creating new documentation or templates</li>
              <li>✗ Facilitating meetings or workshops</li>
              <li>✗ Redesigning processes we didn't cover</li>
              <li>✗ Training your team on new systems</li>
            </ul>
            <p className="text-brand-text/60 text-xs mt-4">For hands-on implementation help, that's what Flow Rebuild is for.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Continuing with Flow Rebuild</h2>
          <div className="card p-6">
            <p className="text-brand-text/70 mb-4">Most clients who want implementation help choose Flow Rebuild. Here's what that looks like:</p>
            <div className="space-y-3">
              <div>
                <h4 className="text-brand-text text-sm font-medium mb-1">What changes:</h4>
                <p className="text-brand-text/70 text-xs">We go from advisors to implementers. We execute the 90-Day Plan with you over 6 weeks.</p>
              </div>
              <div>
                <h4 className="text-brand-text text-sm font-medium mb-1">What you get:</h4>
                <p className="text-brand-text/70 text-xs">Hands-on implementation, documentation creation, team training, AI tool setup, and ongoing iteration.</p>
              </div>
              <div>
                <h4 className="text-brand-text text-sm font-medium mb-1">Cost:</h4>
                <p className="text-brand-text/70 text-xs">$8,000 total, but your $2,500 Flow Check is fully credited = $5,500 to continue.</p>
              </div>
            </div>
            <Link href="/packages/flow-rebuild" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more about Flow Rebuild →</Link>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Ongoing Partnership Option</h2>
          <div className="card p-6 bg-current-600/10">
            <h3 className="text-lg mb-2">The Vibe Partnership</h3>
            <p className="text-brand-text/70 text-sm mb-4">If you want continuous improvement beyond a single engagement, consider a quarterly retainer. You get ongoing flow optimization, culture coaching, and AI strategy.</p>
            <p className="text-brand-text/70 text-sm mb-4"><strong>$3,500/month</strong> (billed quarterly)</p>
            <Link href="/packages/vibe-partnership" className="text-current-500 hover:text-current-400 text-sm inline-block">Learn more about Vibe Partnership →</Link>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Have Questions About Support?</h2>
          <p className="text-brand-text/70 mb-4">We're happy to clarify what's included before you book.</p>
          <Link href="/contact" className="btn btn-primary inline-block">Schedule Intro Call</Link>
        </section>
      </div>
    </div>
  )
}
