import Link from 'next/link'

export const metadata = { title: 'Culture Flow Report — Culture & Environment Optimization' }

export default function CultureFlowReportPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/culture-optimization" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Culture & Environment Optimization
      </Link>

      <h1 className="mb-4">Culture Flow Report</h1>
      <p className="text-xl text-white/90 mb-8">A comprehensive assessment of your team's morale, engagement, communication patterns, and cultural health. This is the foundation for all culture work.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What We Assess</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Team Morale & Engagement</h3>
              <p className="text-white/70 text-sm mb-3">How do people feel about coming to work? Are they energized or drained?</p>
              <ul className="text-white/60 text-xs space-y-1 pl-3">
                <li>• Pulse surveys (anonymous) to gauge satisfaction</li>
                <li>• 1-on-1 interviews to uncover unspoken concerns</li>
                <li>• Observation of energy levels and body language</li>
                <li>• Analysis of turnover and absenteeism patterns</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">2. Communication Quality</h3>
              <p className="text-white/70 text-sm mb-3">Do people feel heard? Is information flowing or stuck?</p>
              <ul className="text-white/60 text-xs space-y-1 pl-3">
                <li>• Communication channels audit (Slack, email, meetings)</li>
                <li>• Feedback loop effectiveness</li>
                <li>• Conflict resolution patterns</li>
                <li>• Psychological safety indicators</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">3. Belonging & Trust</h3>
              <p className="text-white/70 text-sm mb-3">Do people feel safe to speak up? Do they trust leadership and each other?</p>
              <ul className="text-white/60 text-xs space-y-1 pl-3">
                <li>• Team cohesion assessment</li>
                <li>• Inclusivity and equity patterns</li>
                <li>• Trust indicators (do people ask for help?)</li>
                <li>• Social dynamics and cliques</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">4. Values Alignment</h3>
              <p className="text-white/70 text-sm mb-3">Are your stated values actually lived? Or just wall decorations?</p>
              <ul className="text-white/60 text-xs space-y-1 pl-3">
                <li>• Gap analysis between stated and lived values</li>
                <li>• Decision-making consistency</li>
                <li>• Recognition and reward patterns</li>
                <li>• Behavioral norms (written and unwritten)</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">5. Physical/Digital Environment</h3>
              <p className="text-white/70 text-sm mb-3">Does the space support focus, collaboration, and well-being?</p>
              <ul className="text-white/60 text-xs space-y-1 pl-3">
                <li>• Workspace flow and layout</li>
                <li>• Noise, lighting, and comfort factors</li>
                <li>• Digital tool satisfaction</li>
                <li>• Remote/hybrid work dynamics</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How We Gather Data</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Anonymous Pulse Survey</h4>
              <p className="text-white/70 text-xs">15-20 questions assessing morale, engagement, communication, and trust. Takes 5 minutes. Results aggregated for confidentiality.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">1-on-1 Conversations</h4>
              <p className="text-white/70 text-xs">30-minute interviews with 5-8 team members. Confidential. We ask what's working, what's not, and what would make work better.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Direct Observation</h4>
              <p className="text-white/70 text-xs">We spend 2-3 hours observing meetings, workspace dynamics, and team interactions. Non-invasive "fly on the wall" approach.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Leadership Debrief</h4>
              <p className="text-white/70 text-xs">60-minute session with founders/managers to understand their perspective on culture challenges and history.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What the Report Includes</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Executive Summary (2 pages)</h3>
              <p className="text-white/70 text-sm">Top 3 cultural strengths, top 3 drag points, and overall culture health score (1-10).</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2">Detailed Findings (8-12 pages)</h3>
              <p className="text-white/70 text-sm mb-3">Deep dive into each assessment area with data visualizations, quotes (anonymized), and examples.</p>
              <ul className="text-white/60 text-xs space-y-1 pl-3">
                <li>• Survey results (aggregated)</li>
                <li>• Interview themes</li>
                <li>• Observation notes</li>
                <li>• Comparative benchmarks (if available)</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2">Recommendations (3-5 pages)</h3>
              <p className="text-white/70 text-sm">Prioritized actions to improve culture flow. Organized by quick wins (0-30 days), system changes (30-90 days), and long-term evolution (90+ days).</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2">Appendix</h3>
              <p className="text-white/70 text-sm">Full survey results, interview protocol, and methodology notes.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Sample Findings</h2>
          <div className="space-y-3">
            <div className="card p-4 border-l-4 border-current-600">
              <p className="text-white/80 text-sm mb-2"><strong>Strength:</strong> High trust between peers</p>
              <p className="text-white/70 text-xs">"People genuinely like working together. Strong informal support network. Low internal politics."</p>
            </div>
            <div className="card p-4 border-l-4 border-red-500">
              <p className="text-white/80 text-sm mb-2"><strong>Drag Point:</strong> Unclear decision rights</p>
              <p className="text-white/70 text-xs">"Team members don't know who has authority to approve what. Causes delays and frustration. Decisions often remade multiple times."</p>
            </div>
            <div className="card p-4 border-l-4 border-yellow-500">
              <p className="text-white/80 text-sm mb-2"><strong>Opportunity:</strong> Recognition rituals missing</p>
              <p className="text-white/70 text-xs">"Good work goes unnoticed. People want to feel seen. Simple weekly wins ritual could boost morale significantly."</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Timeline & Process</h2>
          <div className="card p-6 bg-white/5">
            <div className="space-y-3">
              <div>
                <p className="text-white font-medium text-sm mb-1">Week 1: Data Collection</p>
                <p className="text-white/70 text-xs">Send survey, conduct interviews, observe team, debrief leadership.</p>
              </div>
              <div>
                <p className="text-white font-medium text-sm mb-1">Week 2: Analysis & Writing</p>
                <p className="text-white/70 text-xs">Synthesize data, identify patterns, draft recommendations.</p>
              </div>
              <div>
                <p className="text-white font-medium text-sm mb-1">Week 3: Delivery</p>
                <p className="text-white/70 text-xs">Present findings to leadership, discuss recommendations, answer questions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Culture Optimization Service</h2>
          <p className="text-white/80 mb-4">The Culture Flow Report is the foundation of our Culture & Environment Optimization work. It's included in all culture engagements.</p>
          <Link href="/services/culture-optimization" className="text-current-500 hover:text-current-400 text-sm">Learn more about the full service →</Link>
        </section>
      </div>
    </div>
  )
}

