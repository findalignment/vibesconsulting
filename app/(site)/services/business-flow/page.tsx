import CTAButton from '@/components/CTAButton'
import Link from 'next/link'

export const metadata = { 
  title: 'Business Flow Consulting — Vibes Consulting',
  description: 'End-to-end process optimization using TQM principles. Identify friction, map ideal state, implement lasting change.'
}

export default function BusinessFlowPage() {
  return (
    <div className="pb-20">
      <Link href="/services" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Services
      </Link>

      <header className="mb-12">
        <h1 className="mb-4">Business Flow Consulting</h1>
        <p className="text-xl max-w-3xl">End-to-end process optimization that removes friction and creates sustainable momentum. We use Total Quality Management principles to help your business operate with clarity and ease.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="card p-8">
          <h3 className="mb-4 text-current-500">The Problem We Solve</h3>
          <p className="text-white/80 mb-4">You're working harder than you should be. Tasks take too long. Information gets lost. Decisions stall. Your team is capable, but the <strong>systems aren't supporting them</strong>.</p>
          <p className="text-white/80">Most businesses live with invisible friction for years — until someone maps it, names it, and redesigns the flow.</p>
        </div>

        <div className="card p-8">
          <h3 className="mb-4 text-current-500">What Makes This Different</h3>
          <p className="text-white/80 mb-4">We don't just recommend changes. We <strong>walk the floor with you</strong>, watch how work actually moves, and co-design solutions your team will actually use.</p>
          <p className="text-white/80">No generic playbooks. No consulting theater. Just honest diagnosis and practical redesign.</p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="mb-6">What's Included</h2>
        <div className="space-y-6">
          <Link href="/services/business-flow/whats-included/friction-audit" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl mb-2 group-hover:text-current-500 transition-colors">1. Friction Audit</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-white/70 mb-3">Two-week deep dive into where your business gets stuck.</p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 text-sm">
              <li><strong>Process mapping:</strong> We shadow your team and document how work actually flows</li>
              <li><strong>Bottleneck analysis:</strong> Identify the 3-5 friction points costing you the most time</li>
              <li><strong>Root cause discovery:</strong> Why is this happening?</li>
              <li><strong>Friction Report:</strong> A visual map showing exactly where work slows down</li>
            </ul>
          </Link>

          <Link href="/services/business-flow/whats-included/flow-map" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl mb-2 group-hover:text-current-500 transition-colors">2. Flow Map (Current vs. Ideal)</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-white/70 mb-3">Side-by-side comparison of how things work now vs. how they should work.</p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 text-sm">
              <li><strong>Current state diagram:</strong> Your actual workflow with pain points highlighted</li>
              <li><strong>Ideal state design:</strong> Simplified, streamlined process</li>
              <li><strong>Gap analysis:</strong> What needs to change to get from A to B</li>
              <li><strong>Decision rights matrix:</strong> Who owns what, who approves, who's informed</li>
            </ul>
          </Link>

          <Link href="/services/business-flow/whats-included/improvement-plan" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl mb-2 group-hover:text-current-500 transition-colors">3. 90-Day Improvement Plan</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-white/70 mb-3">Phased roadmap to implement changes without disrupting operations.</p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 text-sm">
              <li><strong>Quick wins (Week 1-4):</strong> Immediate fixes you can implement right away</li>
              <li><strong>System redesign (Week 5-8):</strong> Rebuild one critical workflow</li>
              <li><strong>Stabilization (Week 9-12):</strong> Lock in habits, measure results</li>
              <li><strong>Success metrics:</strong> Clear KPIs so you know what good looks like</li>
            </ul>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">What to Expect</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/services/business-flow/what-to-expect/discovery" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Week 1-2: Discovery</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Kickoff meeting (90 min)</li>
              <li>• On-site observation (3-4 hours)</li>
              <li>• Team interviews (30 min each, 5-7 people)</li>
              <li>• Process documentation review</li>
            </ul>
          </Link>

          <Link href="/services/business-flow/what-to-expect/analysis" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Week 2: Analysis & Design</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Data synthesis and pattern analysis</li>
              <li>• Visual flow mapping</li>
              <li>• Ideal state design</li>
              <li>• Mid-week check-in (15 min)</li>
            </ul>
          </Link>

          <Link href="/services/business-flow/what-to-expect/presentation" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Week 2: Final Presentation</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• 60-minute presentation (findings + Q&A)</li>
              <li>• Friction Report + Flow Maps</li>
              <li>• 90-Day Implementation Plan</li>
              <li>• Complete documentation package</li>
            </ul>
          </Link>

          <Link href="/services/business-flow/what-to-expect/support" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Post-Engagement Support</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• 30-day email support</li>
              <li>• 60-day check-in call (optional)</li>
              <li>• Credit toward Flow Rebuild if you continue</li>
            </ul>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Who This Is For</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/services/business-flow/who-this-is-for/growing-teams" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Growing Teams (5-20 people)</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-white/70 text-sm">You've outgrown informal systems. Things that used to "just work" now require coordination and clarity.</p>
          </Link>

          <Link href="/services/business-flow/who-this-is-for/service-businesses" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Service Businesses</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-white/70 text-sm">Agencies, studios, consultancies where client work flows through multiple hands and handoffs cause delays.</p>
          </Link>

          <Link href="/services/business-flow/who-this-is-for/owner-operators" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Owner-Operators</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-white/70 text-sm">You're the bottleneck. Every decision runs through you because systems don't exist yet.</p>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Real Results</h2>
        <div className="space-y-4">
          <div className="card p-6 border-l-4 border-current-600">
            <p className="text-white/90 mb-2"><strong>Creative agency, 12 people:</strong></p>
            <p className="text-white/70">"Onboarding used to take 6 weeks and involve 14 different documents. Now it's 2 weeks with one intake form and a kickoff call. Clients tell us we're easier to work with than our competitors."</p>
          </div>

          <div className="card p-6 border-l-4 border-current-600">
            <p className="text-white/90 mb-2"><strong>Design studio, 8 people:</strong></p>
            <p className="text-white/70">"We were having 12 internal meetings a week. Vibes helped us redesign our cadence and clarify decision rights. Now we meet 4 times a week and finish projects 30% faster."</p>
          </div>
        </div>
      </section>

      <section className="mb-16 card p-8 bg-current-600/10">
        <h2 className="mb-4">Investment</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-3xl font-semibold text-white mb-2">$2,500</p>
            <p className="text-white/80">One-time engagement. Full credit applied if you continue with Flow Rebuild.</p>
            <p className="text-white/60 text-sm mt-2">Typical timeline: 4 weeks from kickoff to final delivery</p>
          </div>
          <CTAButton>Book Your Flow Check</CTAButton>
        </div>
      </section>

      <section className="card p-8">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg mb-2">Do we need to pause operations during the audit?</h3>
            <p className="text-white/70">No. We work around your schedule. Most observation happens during normal business hours, and interviews are 30 minutes each.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">What if we're too small for this?</h3>
            <p className="text-white/70">If you have 3+ people and recurring friction, you're the right size. Most of our clients are 5-15 person teams.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">What happens after the 90-day plan is delivered?</h3>
            <p className="text-white/70">You can implement it yourself, or continue with our Flow Rebuild service where we execute the plan with you. The $2,500 is credited toward that engagement.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">Do you work remotely or in-person?</h3>
            <p className="text-white/70">Both. In-person is ideal for Santa Cruz and Bay Area clients. For remote teams, we do video observation and async process documentation.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="mb-4">Ready to Fix Your Flow?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">Book a 30-minute intro call to see if this is the right fit. We'll ask about your biggest friction points and walk you through what a typical engagement looks like.</p>
        <CTAButton>Schedule Intro Call</CTAButton>
      </section>
    </div>
  )
}

