import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'The Flow Rebuild - Vibes Consulting',
  description: '6-week implementation to rebuild one critical system. Includes AI enablement, team training, and custom SOPs. $8,000 total ($5,500 after Flow Check credit).'
}

export default function FlowRebuildPage() {
  return (
    <div className="pb-20">
      <Link href="/packages" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Packages
      </Link>

      <header className="mb-12">
        <h1 className="mb-4">The Flow Rebuild</h1>
        <p className="text-xl text-white/90 max-w-3xl">We don't just tell you what to fix - we rebuild it with you. One critical system, reimagined and implemented over 6 weeks.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">$8,000</div>
          <p className="text-white/70 text-sm">$5,500 after Flow Check credit</p>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">6 weeks</div>
          <p className="text-white/70 text-sm">From kickoff to full implementation</p>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">1 system</div>
          <p className="text-white/70 text-sm">Deep rebuild, not surface fixes</p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="mb-6">What We Rebuild</h2>
        <p className="text-white/80 mb-6">Choose one critical system that's causing the most friction:</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link 
            href="/packages/flow-rebuild/systems/meeting-decision-os"
            className="card p-6 group cursor-pointer hover:border-current-600/60 transition-all"
          >
            <h3 className="text-lg mb-3 group-hover:text-current-500 transition-colors">Meeting & Decision OS</h3>
            <p className="text-white/70 text-sm mb-4">Redesign your entire meeting cadence, clarify decision rights, implement async communication norms. Cut meeting time by 40-50% while improving alignment.</p>
            <div className="text-xs text-white/60">
              <p className="font-medium mb-1">Includes:</p>
              <ul className="space-y-1 pl-3">
                <li>• Meeting audit & redesign</li>
                <li>• Decision rights matrix</li>
                <li>• Communication playbook</li>
                <li>• Template library</li>
              </ul>
            </div>
          </Link>

          <Link 
            href="/packages/flow-rebuild/systems/client-onboarding"
            className="card p-6 group cursor-pointer hover:border-current-600/60 transition-all"
          >
            <h3 className="text-lg mb-3 group-hover:text-current-500 transition-colors">Client Onboarding</h3>
            <p className="text-white/70 text-sm mb-4">Streamline intake, clarify handoffs, automate repetitive steps, create a client experience that feels effortless. Reduce onboarding time by 30-40%.</p>
            <div className="text-xs text-white/60">
              <p className="font-medium mb-1">Includes:</p>
              <ul className="space-y-1 pl-3">
                <li>• Intake form redesign</li>
                <li>• Workflow automation</li>
                <li>• Client-facing templates</li>
                <li>• Internal checklists</li>
              </ul>
            </div>
          </Link>

          <Link 
            href="/packages/flow-rebuild/systems/project-delivery"
            className="card p-6 group cursor-pointer hover:border-current-600/60 transition-all"
          >
            <h3 className="text-lg mb-3 group-hover:text-current-500 transition-colors">Project Delivery Workflow</h3>
            <p className="text-white/70 text-sm mb-4">Map current vs. ideal state, eliminate unnecessary handoffs, clarify ownership, build quality checkpoints. Make delivery predictable and smooth.</p>
            <div className="text-xs text-white/60">
              <p className="font-medium mb-1">Includes:</p>
              <ul className="space-y-1 pl-3">
                <li>• Process redesign</li>
                <li>• Role clarification</li>
                <li>• Quality checklist</li>
                <li>• Handoff protocols</li>
              </ul>
            </div>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">AI Enablement Included</h2>
        <p className="text-white/80 mb-6">Every Flow Rebuild includes practical AI integration to eliminate repetitive tasks:</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg mb-2">AI Opportunity Scan</h3>
            <p className="text-white/70 text-sm">We identify 3-5 high-value, low-risk automations specific to the system we're rebuilding. No generic recommendations - only what will actually save your team time.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Tool Setup & Configuration</h3>
            <p className="text-white/70 text-sm">We configure AI tools with proper security settings, test them with real data, and build workflows that integrate with your existing systems.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Custom Prompt Library</h3>
            <p className="text-white/70 text-sm">Pre-written, tested prompts for common tasks. Your team copies, pastes, and gets consistent results. No guessing, no experimentation.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Team Training (2 hours)</h3>
            <p className="text-white/70 text-sm">Hands-on workshop using your actual work. Everyone leaves knowing exactly how to use AI for their specific tasks. Plus 4 weeks of office hours for questions.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">The 6-Week Process</h2>
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="text-lg mb-2">Weeks 1-2: Deep Dive & Redesign</h3>
            <p className="text-white/70 text-sm mb-3">We map the current system in detail, identify every friction point, and co-design the ideal state with your team. This isn't consultant-imposed - it's collaborative.</p>
            <p className="text-white/60 text-sm italic">Your time: 3 hours total (kickoff, check-ins, design workshop)</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Weeks 3-4: Build & Implement</h3>
            <p className="text-white/70 text-sm mb-3">We create documentation, templates, automations, and training materials. Your team starts using the new system with our support. We iterate based on real-world friction.</p>
            <p className="text-white/60 text-sm italic">Your time: 2 hours (training session + weekly check-in)</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Weeks 5-6: Stabilize & Optimize</h3>
            <p className="text-white/70 text-sm mb-3">We refine based on usage, address edge cases, and ensure the new system is fully documented. By week 6, it runs without our involvement.</p>
            <p className="text-white/60 text-sm italic">Your time: 1 hour (final review + handoff)</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">What You Walk Away With</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg mb-3">System Documentation</h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Step-by-step process guide</li>
              <li>• Decision rights & ownership map</li>
              <li>• Visual workflow diagram</li>
              <li>• Exception handling protocols</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Template Library</h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Meeting agendas & formats</li>
              <li>• Client-facing documents</li>
              <li>• Internal checklists</li>
              <li>• Communication templates</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">AI Integration</h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Configured AI tools</li>
              <li>• Custom prompt library</li>
              <li>• Automation workflows</li>
              <li>• Safety guidelines</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-3">Training & Support</h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Recorded training videos</li>
              <li>• Quick-start guides</li>
              <li>• 30 days email support</li>
              <li>• Onboarding checklist for new hires</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16 card p-6">
        <h2 className="mb-4">Common Questions</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Can we rebuild multiple systems?</h4>
            <p className="text-white/70 text-sm">Not in one engagement. We focus on one system at a time so it's done right. Many clients do multiple Flow Rebuilds sequentially.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">What if we haven't done a Flow Check?</h4>
            <p className="text-white/70 text-sm">We recommend starting there, but if you know exactly what needs fixing, we can skip it. The Flow Rebuild starts with a condensed diagnostic anyway.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1 text-sm">Do you offer payment plans?</h4>
            <p className="text-white/70 text-sm">Yes. We can split into milestone payments: 50% upfront, 25% at week 3, 25% at completion.</p>
          </div>
        </div>
      </section>

      <section className="card p-8 bg-current-600/10 text-center">
        <h2 className="mb-4">Ready to Rebuild a System?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-6">Most clients start with a Flow Check to identify the highest-leverage system to rebuild. Want to talk through which one makes sense for you?</p>
        <CTAButton>Schedule Intro Call</CTAButton>
      </section>
    </div>
  )
}

