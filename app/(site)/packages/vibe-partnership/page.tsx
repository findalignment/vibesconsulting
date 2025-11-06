import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'The Vibe Partnership — Vibes Consulting',
  description: 'Quarterly retainer for ongoing flow optimization, culture coaching, and AI strategy. $3,500/month for continuous improvement.'
}

export default function VibePartnershipPage() {
  return (
    <div className="pb-20">
      <Link href="/packages" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Packages
      </Link>

      <header className="mb-12">
        <h1 className="mb-4">The Vibe Partnership</h1>
        <p className="text-xl text-white/90 max-w-3xl">Your ongoing partner for operational flow, team culture, and AI strategy. For businesses committed to continuous improvement.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">$3,500/mo</div>
          <p className="text-white/70 text-sm">Billed quarterly ($10,500)</p>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">Quarterly</div>
          <p className="text-white/70 text-sm">3-month minimum commitment</p>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">On-call</div>
          <p className="text-white/70 text-sm">Priority access & fast response</p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="mb-6">What's Included</h2>
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="text-xl mb-2">Quarterly Vibe Resets (90 min each)</h3>
            <p className="text-white/70 text-sm mb-3">Deep-dive strategy sessions every 3 months. We review what's working, what's slipping, and adjust your systems accordingly. Keeps culture and operations healthy as you grow.</p>
            <div className="text-xs text-white/60">
              <p className="font-medium mb-1">Includes:</p>
              <ul className="space-y-1 pl-3">
                <li>• Culture & flow assessment</li>
                <li>• Ritual tuning & optimization</li>
                <li>• Priority setting for next quarter</li>
                <li>• Leadership coaching</li>
              </ul>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl mb-2">Monthly Pulse Surveys</h3>
            <p className="text-white/70 text-sm mb-3">Anonymous team surveys tracking engagement, clarity, and flow. We analyze the data and surface patterns before they become problems.</p>
            <div className="text-xs text-white/60">
              <p className="font-medium mb-1">Tracking:</p>
              <ul className="space-y-1 pl-3">
                <li>• Team satisfaction trends</li>
                <li>• Friction point tracking</li>
                <li>• Communication effectiveness</li>
                <li>• Decision-making clarity</li>
              </ul>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl mb-2">On-Call Culture & Ops Support</h3>
            <p className="text-white/70 text-sm mb-3">Slack/email access for questions as they come up. "Should we change this ritual?" "How do we handle this team dynamic?" "Is this process still serving us?" Fast, actionable guidance.</p>
            <div className="text-xs text-white/60">
              <p className="font-medium mb-1">Response time:</p>
              <ul className="space-y-1 pl-3">
                <li>• Urgent: Same day</li>
                <li>• Standard: Within 24 hours</li>
                <li>• Strategic: 48-hour turnaround</li>
              </ul>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl mb-2">Continuous AI Strategy</h3>
            <p className="text-white/70 text-sm mb-3">As AI tools evolve, we keep you updated on what's worth adopting. Monthly scan of new opportunities, quarterly implementation of 1-2 new automations.</p>
            <div className="text-xs text-white/60">
              <p className="font-medium mb-1">Includes:</p>
              <ul className="space-y-1 pl-3">
                <li>• Monthly AI opportunity scan</li>
                <li>• Tool evaluation & testing</li>
                <li>• Implementation support</li>
                <li>• Team training updates</li>
              </ul>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl mb-2">Priority Access to Services</h3>
            <p className="text-white/70 text-sm mb-3">Need a Flow Rebuild or add-on service? Partners get priority scheduling and 20% discount on all additional engagements.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Typical Quarterly Rhythm</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-lg mb-3">Month 1</h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Pulse survey sent</li>
              <li>• Results analyzed</li>
              <li>• On-call support ongoing</li>
              <li>• AI opportunity scan</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Month 2</h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Pulse survey sent</li>
              <li>• Mid-quarter check-in call (30 min)</li>
              <li>• On-call support ongoing</li>
              <li>• AI implementation (if needed)</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Month 3</h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Pulse survey sent</li>
              <li>• Quarterly Vibe Reset (90 min)</li>
              <li>• Plan for next quarter</li>
              <li>• On-call support ongoing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Who This Is For</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg mb-3">Fast-Growing Teams</h3>
            <p className="text-white/70 text-sm">You're hiring, scaling, and evolving quickly. Systems that worked 6 months ago don't work now. You need someone checking in regularly to prevent chaos.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Culture-First Businesses</h3>
            <p className="text-white/70 text-sm">You know culture eats strategy for breakfast. You want to be intentional about rituals, communication, and team health as you grow.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Continuous Improvers</h3>
            <p className="text-white/70 text-sm">You don't want a one-time fix. You want an ongoing partner who helps you stay ahead of friction, not reactive to it.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">AI-Forward Teams</h3>
            <p className="text-white/70 text-sm">You're committed to adopting AI responsibly and effectively. You want someone keeping you updated as tools evolve and opportunities emerge.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">How It Works</h2>
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="text-lg mb-2">Quarter 1: Foundation</h3>
            <p className="text-white/70 text-sm">We establish baseline metrics, set up pulse surveys, and create your quarterly improvement roadmap. This sets the rhythm for everything that follows.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Quarter 2-3: Optimize & Iterate</h3>
            <p className="text-white/70 text-sm">We track trends, make adjustments, and continuously refine. Each Vibe Reset builds on the last. You'll see compounding improvements over time.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Quarter 4+: Sustain & Scale</h3>
            <p className="text-white/70 text-sm">By this point, continuous improvement is part of your culture. We help you maintain momentum as you hire, grow, and evolve.</p>
          </div>
        </div>
      </section>

      <section className="mb-16 card p-6">
        <h2 className="mb-4">Common Questions</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Can we start with one quarter?</h4>
            <p className="text-white/70 text-sm">Yes. 3-month minimum, then month-to-month after that. Most partners stay 12+ months.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Do we need to have done Flow Check first?</h4>
            <p className="text-white/70 text-sm">Recommended but not required. If you skip it, we'll do a condensed diagnostic in Month 1.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">What if we pause and want to restart?</h4>
            <p className="text-white/70 text-sm">You can pause anytime after the initial 3 months. Restarting just requires 30 days notice.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Can we add project work?</h4>
            <p className="text-white/70 text-sm">Yes. Partners get 20% off Flow Rebuilds and add-on services, plus priority scheduling.</p>
          </div>
        </div>
      </section>

      <section className="card p-8 bg-current-600/10 text-center">
        <h2 className="mb-4">Ready for Continuous Improvement?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-6">Book a 30-minute intro call to discuss your growth trajectory and whether the Vibe Partnership makes sense for where you're headed.</p>
        <CTAButton>Schedule Intro Call</CTAButton>
      </section>
    </div>
  )
}

