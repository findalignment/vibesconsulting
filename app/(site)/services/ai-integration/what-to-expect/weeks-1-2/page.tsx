import Link from 'next/link'

export const metadata = { title: 'Weeks 1-2: AI Opportunity Discovery - AI Integration' }

export default function Weeks12Page() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to AI Integration
      </Link>

      <h1 className="mb-4">Weeks 1-2: AI Opportunity Discovery</h1>
      <p className="text-xl text-brand-text/90 mb-8">We identify where AI can save you time without exposing sensitive data.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What We Do</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Day 1: Kickoff Workshop (2 hours)</h3>
              <p className="text-brand-text/70 text-sm mb-3">We meet with your team to understand your business, current pain points, and AI comfort level.</p>
              <ul className="text-brand-text/60 text-xs space-y-1 pl-3 mt-2">
                <li>• What tasks feel most repetitive?</li>
                <li>• Where do you waste time on manual work?</li>
                <li>• What have you tried with AI already?</li>
                <li>• What data privacy concerns do you have?</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Days 2-5: Task Inventory & Observation</h3>
              <p className="text-brand-text/70 text-sm mb-3">We interview 5-7 team members and observe daily workflows to catalog repetitive tasks.</p>
              <p className="text-brand-text/60 text-xs">We're looking for patterns: What gets done daily? What follows a template? What involves copy-paste?</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Days 6-8: Time-Waste Calculation</h3>
              <p className="text-brand-text/70 text-sm mb-3">For each task, we estimate frequency and duration. This reveals highest-impact automation opportunities.</p>
              <p className="text-brand-text/60 text-xs">Example: "Team spends 8 hours/week writing similar client emails" = prime AI target.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Days 9-10: Data Safety Audit</h3>
              <p className="text-brand-text/70 text-sm mb-3">We categorize tasks by data sensitivity. What's safe for AI? What requires anonymization? What should stay manual?</p>
              <p className="text-brand-text/60 text-xs">Safety first. We never recommend AI for high-risk data exposure.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Your Time Investment</h2>
          <div className="card p-6 bg-white/5">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-brand-text/70">Kickoff workshop</span>
                <span className="text-current-500 font-medium">2 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-text/70">Team interviews (per person)</span>
                <span className="text-current-500 font-medium">30 minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-text/70">Workflow observation</span>
                <span className="text-current-500 font-medium">Passive (we shadow)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-text/70">Documentation sharing</span>
                <span className="text-current-500 font-medium">15 minutes</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">End of Week 2 Deliverable</h2>
          <div className="card p-6 bg-current-600/10">
            <h3 className="text-lg mb-3">AI Opportunity Report (8-12 pages)</h3>
            <ul className="space-y-2 text-sm text-brand-text/70">
              <li>• Task inventory matrix with time-waste calculation</li>
              <li>• Top 5-7 AI opportunities ranked by ROI</li>
              <li>• Data safety matrix (what's safe to automate)</li>
              <li>• Tool recommendations with cost estimates</li>
              <li>• Phased implementation roadmap</li>
            </ul>
            <p className="text-brand-text/60 text-xs mt-4">Presented in 60-minute meeting with Q&A.</p>
          </div>
        </section>

        <section className="card p-6 bg-white/5">
          <h2 className="mb-4">What Happens Next</h2>
          <p className="text-brand-text/70">Weeks 3-4: We implement the top 3-5 AI tools with your team, create SOPs, and provide training.</p>
        </section>
      </div>
    </div>
  )
}

