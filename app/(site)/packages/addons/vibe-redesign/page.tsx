import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Brand/Space Vibe Redesign Add-On — Vibes Consulting',
  description: 'Physical or digital environment optimization for flow. Make your workspace support deep work and collaboration. $2,000.'
}

export default function VibeRedesignPage() {
  return (
    <div className="pb-20">
      <Link href="/packages" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Packages
      </Link>

      <header className="mb-12">
        <h1 className="mb-4">Brand/Space Vibe Redesign</h1>
        <p className="text-xl text-white/90 max-w-3xl">Optimize your physical workspace or digital environment to support flow. Because where work happens shapes how work happens.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">$2,000</div>
          <p className="text-white/70 text-sm">Physical or digital space</p>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">2 weeks</div>
          <p className="text-white/70 text-sm">Assessment & redesign</p>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">Custom</div>
          <p className="text-white/70 text-sm">Tailored to your needs</p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="mb-6">Two Paths</h2>
        <p className="text-white/80 mb-6">Choose one focus area:</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-xl mb-3">Physical Space Optimization</h3>
            <p className="text-white/70 text-sm mb-4">For offices, studios, retail spaces, or co-working environments. We assess layout, flow, noise, lighting, and zones to support different work modes.</p>
            <div className="text-xs text-white/60">
              <p className="font-medium mb-1">What we evaluate:</p>
              <ul className="space-y-1 pl-3">
                <li>• Layout & traffic flow</li>
                <li>• Focus vs collaboration zones</li>
                <li>• Noise & distraction management</li>
                <li>• Lighting & comfort</li>
                <li>• Meeting space utilization</li>
              </ul>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl mb-3">Digital Environment Optimization</h3>
            <p className="text-white/70 text-sm mb-4">For remote or hybrid teams. We redesign your digital workspace — Slack, Notion, Drive structure, tool stack — to reduce noise and improve findability.</p>
            <div className="text-xs text-white/60">
              <p className="font-medium mb-1">What we optimize:</p>
              <ul className="space-y-1 pl-3">
                <li>• Slack channel architecture</li>
                <li>• File organization & naming</li>
                <li>• Tool consolidation</li>
                <li>• Notification management</li>
                <li>• Search & findability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Physical Space: What We Redesign</h2>
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="text-lg mb-2">Zone Planning</h3>
            <p className="text-white/70 text-sm mb-3">Designate areas for focus work, collaboration, casual conversation, and recharge. People need different environments for different work modes.</p>
            <p className="text-white/60 text-xs">Deliverable: Floor plan with zone map, furniture recommendations, usage guidelines</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Noise Management</h3>
            <p className="text-white/70 text-sm mb-3">Identify acoustic problems and recommend solutions (panels, layout changes, quiet zones). Noise is the #1 productivity killer in open offices.</p>
            <p className="text-white/60 text-xs">Deliverable: Noise audit, acoustic treatment plan, behavioral norms</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Flow Optimization</h3>
            <p className="text-white/70 text-sm mb-3">Ensure traffic patterns don't disrupt focus areas. Position teams based on collaboration frequency. Reduce unnecessary movement.</p>
            <p className="text-white/60 text-xs">Deliverable: Seating chart, team placement rationale, traffic flow map</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Meeting Space Strategy</h3>
            <p className="text-white/70 text-sm mb-3">Right-size meeting rooms (most are too big), add phone booths for calls, create drop-in collaboration spots.</p>
            <p className="text-white/60 text-xs">Deliverable: Meeting space utilization report, booking system recommendations</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Digital Environment: What We Redesign</h2>
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="text-lg mb-2">Slack Architecture Redesign</h3>
            <p className="text-white/70 text-sm mb-3">Most Slack workspaces have 50+ channels where half are dead. We consolidate, archive, reorganize, and create clear naming conventions.</p>
            <p className="text-white/60 text-xs">Deliverable: Channel structure, naming guide, notification protocols</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">File Organization System</h3>
            <p className="text-white/70 text-sm mb-3">Google Drive, Dropbox, or Notion chaos ends. We create a logical folder structure, naming conventions, and access permissions that make sense.</p>
            <p className="text-white/60 text-xs">Deliverable: Folder structure, naming guide, migration plan</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Tool Stack Audit</h3>
            <p className="text-white/70 text-sm mb-3">You're probably paying for tools nobody uses. We audit your stack, identify redundancies, and recommend consolidation.</p>
            <p className="text-white/60 text-xs">Deliverable: Tool inventory, usage analysis, consolidation recommendations</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Notification Management</h3>
            <p className="text-white/70 text-sm mb-3">The constant pings are killing focus. We design notification protocols: what's urgent (notify), what's important (check daily), what's FYI (check weekly).</p>
            <p className="text-white/60 text-xs">Deliverable: Notification protocol, channel-specific rules, Do Not Disturb guidelines</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">The Process</h2>
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="text-sm font-medium text-current-500 mb-2">Week 1: Assessment</h3>
            <p className="text-white/70 text-sm mb-3"><strong>Physical:</strong> On-site visit (Santa Cruz/Bay Area) or video tour. We observe usage patterns, interview team, measure spaces.</p>
            <p className="text-white/70 text-sm"><strong>Digital:</strong> Audit Slack, file structure, tools. We analyze usage data and interview team about pain points.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-sm font-medium text-current-500 mb-2">Week 2: Redesign & Implement</h3>
            <p className="text-white/70 text-sm mb-3">We create the new system, present to your team, and help you implement. For physical spaces, we provide vendor recommendations if needed.</p>
            <p className="text-white/60 text-xs italic">Note: Implementation costs (furniture, acoustic panels, etc.) not included in $2,000 fee</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Who This Is For</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg mb-3">Physical Space Candidates</h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Open offices with noise complaints</li>
              <li>• Teams struggling with focus</li>
              <li>• Growing teams needing space replanning</li>
              <li>• Retail/studios optimizing customer flow</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Digital Space Candidates</h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Remote teams drowning in Slack noise</li>
              <li>• File chaos (can't find anything)</li>
              <li>• Too many tools, low adoption</li>
              <li>• Constant interruptions from notifications</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16 card p-6">
        <h2 className="mb-4">Common Questions</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Can we do both physical and digital?</h4>
            <p className="text-white/70 text-sm">Yes, for $3,500 total. Most clients choose one focus area first.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Do you source furniture/equipment?</h4>
            <p className="text-white/70 text-sm">We provide recommendations and vendor contacts, but purchasing is separate.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">What if we're fully remote?</h4>
            <p className="text-white/70 text-sm">Digital environment optimization is perfect for remote teams. Physical space isn't relevant.</p>
          </div>
        </div>
      </section>

      <section className="card p-8 bg-current-600/10 text-center">
        <h2 className="mb-4">Ready to Optimize Your Environment?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-6">Add this to any package or purchase standalone. Book a call to discuss whether physical or digital makes more sense for you.</p>
        <CTAButton>Schedule Intro Call</CTAButton>
      </section>
    </div>
  )
}

