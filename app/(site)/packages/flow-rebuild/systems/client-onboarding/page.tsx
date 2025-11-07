import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Client Onboarding Rebuild - Flow Rebuild - Vibes Consulting',
  description: 'Streamline intake, clarify handoffs, automate repetitive steps. Reduce onboarding time by 30-40% and create a client experience that feels effortless.'
}

export default function ClientOnboardingPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/flow-rebuild" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Flow Rebuild
      </Link>

      <h1 className="mb-4">Client Onboarding Rebuild</h1>
      <p className="text-xl text-white/90 mb-8">Turn your messy onboarding process into a smooth, predictable system that delights clients and saves your team time.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">The Problem</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Onboarding new clients takes 2-3 weeks when it should take 3-5 days. Intake forms are incomplete. You ask for the same information multiple times. Projects start without all the context.</p>
            <p className="text-white/80 mb-4">Handoffs between sales and delivery are rough. Important details get lost. Clients feel confused about what happens next.</p>
            <p className="text-white/80">First impressions matter. Your onboarding process is making you look more chaotic than you are.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What We Build</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Comprehensive Intake System</h3>
              <p className="text-white/70 text-sm mb-3">We redesign your intake process to capture everything upfront: project goals, stakeholders, constraints, success metrics. One form, all the info you need.</p>
              <p className="text-white/60 text-xs italic">Result: No more back-and-forth asking for missing information</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Sales-to-Delivery Handoff</h3>
              <p className="text-white/70 text-sm mb-3">Clear protocol for transitioning clients from sales to project team. Templated handoff doc, kickoff checklist, context preservation.</p>
              <p className="text-white/60 text-xs italic">Result: Nothing falls through cracks, clients feel taken care of</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Client-Facing Templates</h3>
              <p className="text-white/70 text-sm mb-3">Welcome email sequence, onboarding guide, kickoff agenda, project timeline template. Clients know exactly what to expect.</p>
              <p className="text-white/60 text-xs italic">Result: Less client anxiety, fewer "what happens next?" emails</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Internal Checklists & Automation</h3>
              <p className="text-white/70 text-sm mb-3">Step-by-step checklist for your team. AI automation for repetitive tasks (data entry, email sequences, calendar scheduling).</p>
              <p className="text-white/60 text-xs italic">Result: Onboarding runs on autopilot, team doesn't forget steps</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You Walk Away With</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Intake Form & System</h4>
              <p className="text-white/70 text-xs">Captures all necessary info in one go. Auto-populates project brief.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Handoff Documentation</h4>
              <p className="text-white/70 text-xs">Template for sales-to-delivery transition. No context lost.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Client Welcome Kit</h4>
              <p className="text-white/70 text-xs">Email sequences, onboarding guide, kickoff agenda. Professional first impression.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Internal Playbook</h4>
              <p className="text-white/70 text-xs">Step-by-step checklist for team. New hires can follow it day 1.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Automation Workflows</h4>
              <p className="text-white/70 text-xs">AI tools for data entry, email sequences, scheduling. Saves 3-5 hours per client.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Team Training</h4>
              <p className="text-white/70 text-xs">2-hour workshop on new onboarding process. Everyone aligned.</p>
            </div>
          </div>
        </section>

        

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to Fix Your Onboarding?</h2>
          <p className="text-white/80 mb-6">Client Onboarding is one of three systems you can rebuild with Flow Rebuild. Book an intro call to discuss.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

