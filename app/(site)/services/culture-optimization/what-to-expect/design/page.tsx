import Link from 'next/link'

export const metadata = { title: 'Design Phase — Culture & Environment Optimization' }

export default function DesignPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/culture-optimization" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Culture & Environment Optimization
      </Link>

      <h1 className="mb-4">Week 3-4: Design Phase</h1>
      <p className="text-xl text-white/90 mb-8">We co-design solutions with leadership: new rituals, communication norms, recognition systems, and space improvements. This phase turns insights into action plans.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What Happens</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Culture Flow Report Presentation (Day 11, 60 min)</h3>
              <p className="text-white/70 text-sm mb-3">We present findings to leadership. Walk through strengths, drag points, root causes, and recommendations.</p>
              <p className="text-white/60 text-xs">This happens during the Leadership Coaching Session.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Leadership Coaching Session (Day 11, 90 min)</h3>
              <p className="text-white/70 text-sm mb-3">Deep-dive conversation with founders/managers. Address blind spots, discuss leadership behaviors, and align on culture strategy.</p>
              <p className="text-white/60 text-xs">See Leadership Coaching detail page for full scope.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Solution Co-Design Workshops (Days 12-16, 2-3 sessions)</h3>
              <p className="text-white/70 text-sm mb-3">Working sessions with leadership to design specific improvements: new rituals, communication norms, recognition systems, space changes.</p>
              <div className="text-xs text-white/60">
                <p className="font-medium mb-1">Example workshops:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Recognition system design (what to celebrate, how often, who's involved)</li>
                  <li>• Meeting cadence redesign (eliminate redundancies, add missing touchpoints)</li>
                  <li>• Workspace optimization (layout, noise, comfort improvements)</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Implementation Plan Creation (Days 17-20)</h3>
              <p className="text-white/70 text-sm mb-3">We draft a phased rollout plan: quick wins (0-30 days), system changes (30-90 days), and ongoing practices.</p>
              <div className="text-xs text-white/60">
                <p className="font-medium mb-1">Plan includes:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Specific actions with owners and deadlines</li>
                  <li>• Communication plan (how to introduce changes to team)</li>
                  <li>• Success metrics (how to measure progress)</li>
                  <li>• Change management strategy</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Vibe Reset Framework Setup (Days 18-20)</h3>
              <p className="text-white/70 text-sm mb-3">We build the quarterly Vibe Reset framework: pulse survey template, meeting agenda, dashboard, and facilitation guide.</p>
              <p className="text-white/60 text-xs">This becomes your ongoing culture maintenance system.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Your Time Investment</h2>
          <div className="card p-6 bg-white/5">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Week 3</h4>
                <ul className="text-white/70 text-xs space-y-1">
                  <li>• 60-min report presentation</li>
                  <li>• 90-min coaching session</li>
                  <li>• 60-min co-design workshop</li>
                </ul>
                <p className="text-current-500 text-xs mt-2 font-medium">Total: ~3.5 hours</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Week 4</h4>
                <ul className="text-white/70 text-xs space-y-1">
                  <li>• 2-3 co-design workshops (60-90 min each)</li>
                  <li>• Review draft implementation plan (30 min)</li>
                </ul>
                <p className="text-current-500 text-xs mt-2 font-medium">Total: ~3 hours</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You Get at the End</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-white text-sm font-medium mb-2">90-Day Implementation Plan</h3>
              <p className="text-white/70 text-xs">Phased roadmap with specific actions, owners, timelines, and success metrics.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-white text-sm font-medium mb-2">New Rituals & Systems</h3>
              <p className="text-white/70 text-xs">Designed and documented: recognition rituals, communication norms, meeting cadences, etc.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-white text-sm font-medium mb-2">Space Improvement Plan</h3>
              <p className="text-white/70 text-xs">Physical and digital workspace optimizations with budget estimates and vendor recommendations.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-white text-sm font-medium mb-2">Vibe Reset Framework</h3>
              <p className="text-white/70 text-xs">Complete system for quarterly culture check-ins: survey, meeting agenda, dashboard, facilitation guide.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-white text-sm font-medium mb-2">Change Management Playbook</h3>
              <p className="text-white/70 text-xs">Scripts, FAQs, and communication templates to introduce changes to your team.</p>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Culture Optimization Process</h2>
          <p className="text-white/80">Design phase happens during Week 3-4 of the Culture & Environment Optimization engagement.</p>
          <Link href="/services/culture-optimization" className="text-current-500 hover:text-current-400 text-sm inline-block mt-4">Learn more about the full service →</Link>
        </section>
      </div>
    </div>
  )
}

