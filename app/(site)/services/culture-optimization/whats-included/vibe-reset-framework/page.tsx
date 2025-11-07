import Link from 'next/link'

export const metadata = { title: 'Vibe Reset Framework - Culture & Environment Optimization' }

export default function VibeResetPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/culture-optimization" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Culture & Environment Optimization
      </Link>

      <h1 className="mb-4">Quarterly Vibe Reset Framework</h1>
      <p className="text-xl text-white/90 mb-8">A structured ritual for checking in on culture health, recalibrating team norms, and ensuring values stay alive. This keeps culture from drifting.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Why Quarterly Resets Matter</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Culture isn't set-it-and-forget-it. Teams evolve. People join. Priorities shift. Without regular check-ins, culture drifts and problems compound.</p>
            <p className="text-white/70 text-sm">The Vibe Reset is a lightweight, repeatable process to assess culture health and make small adjustments before issues become crises.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What's Included in the Framework</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Pulse Survey Template</h3>
              <p className="text-white/70 text-sm mb-3">5-minute anonymous survey sent to the full team each quarter. Tracks morale, engagement, trust, and communication quality over time.</p>
              <div className="text-xs text-white/60">
                <p className="font-medium mb-1">Sample questions:</p>
                <ul className="pl-3 space-y-1">
                  <li>• How energized do you feel about work right now? (1-10)</li>
                  <li>• Do you feel your voice is heard? (Yes/Somewhat/No)</li>
                  <li>• Are our values lived or just stated? (Lived/Sometimes/Rarely)</li>
                  <li>• What's one thing that would improve your experience here?</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">2. Leadership Review Checklist</h3>
              <p className="text-white/70 text-sm mb-3">A self-assessment for founders/managers to evaluate their own behaviors and identify areas for improvement.</p>
              <div className="text-xs text-white/60">
                <p className="font-medium mb-1">Sample checks:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Have I communicated clearly about priorities this quarter?</li>
                  <li>• Have I recognized good work publicly?</li>
                  <li>• Have I addressed underperformance promptly?</li>
                  <li>• Am I modeling the behaviors I want to see?</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">3. Team Vibe Reset Meeting Agenda</h3>
              <p className="text-white/70 text-sm mb-3">60-minute facilitated session with the full team. Share survey results, celebrate wins, name problems, and commit to 1-2 improvements for next quarter.</p>
              <div className="text-xs text-white/60">
                <p className="font-medium mb-1">Agenda structure:</p>
                <ul className="pl-3 space-y-1">
                  <li>• Wins from last quarter (10 min)</li>
                  <li>• Survey insights (10 min)</li>
                  <li>• Open discussion: what's working, what's not (25 min)</li>
                  <li>• Commit to 1-2 improvements (10 min)</li>
                  <li>• Close with appreciation ritual (5 min)</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">4. Cultural Health Dashboard</h3>
              <p className="text-white/70 text-sm mb-3">Simple spreadsheet to track key metrics over time: morale scores, engagement trends, turnover, absenteeism.</p>
              <p className="text-white/60 text-xs">This helps you spot trends before they become problems.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">5. Facilitation Guide</h3>
              <p className="text-white/70 text-sm mb-3">Step-by-step instructions for running the Vibe Reset meeting. Includes tips for handling resistance, encouraging honesty, and staying on track.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How It Works (Quarterly Cycle)</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Week 1: Send Pulse Survey</h4>
              <p className="text-white/70 text-xs">Deploy survey to team (5 min to complete). Give 3-5 days for responses.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Week 2: Analyze Results</h4>
              <p className="text-white/70 text-xs">Review survey data, identify trends, and prepare for Vibe Reset meeting.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Week 3: Hold Vibe Reset Meeting</h4>
              <p className="text-white/70 text-xs">60-minute team session. Share results, discuss openly, commit to improvements.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Weeks 4-12: Implement & Iterate</h4>
              <p className="text-white/70 text-xs">Execute the 1-2 improvements you committed to. Track progress. Repeat next quarter.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Example Improvements from Vibe Resets</h2>
          <div className="space-y-3">
            <div className="card p-4 border-l-4 border-current-600">
              <p className="text-white/80 text-sm mb-2"><strong>Issue:</strong> "Information gets lost. We don't know what other teams are working on."</p>
              <p className="text-white/70 text-xs mb-2"><strong>Improvement:</strong> Start weekly 15-minute all-hands standup to share updates.</p>
              <p className="text-white/60 text-xs italic">Result: Better coordination, fewer duplicate efforts.</p>
            </div>
            <div className="card p-4 border-l-4 border-current-600">
              <p className="text-white/80 text-sm mb-2"><strong>Issue:</strong> "Good work goes unrecognized. We don't celebrate wins."</p>
              <p className="text-white/70 text-xs mb-2"><strong>Improvement:</strong> Add 5-minute "wins" ritual to Friday meetings.</p>
              <p className="text-white/60 text-xs italic">Result: Morale boost, people feel seen.</p>
            </div>
            <div className="card p-4 border-l-4 border-current-600">
              <p className="text-white/80 text-sm mb-2"><strong>Issue:</strong> "Meetings feel chaotic. No clear agendas or outcomes."</p>
              <p className="text-white/70 text-xs mb-2"><strong>Improvement:</strong> Require agenda 24 hours before any meeting. No agenda = no meeting.</p>
              <p className="text-white/60 text-xs italic">Result: 30% fewer meetings, higher quality discussions.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You Get</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-white text-sm font-medium mb-2">Complete Framework Package</h3>
              <ul className="text-white/70 text-xs space-y-1 pl-3">
                <li>• Pulse survey template (Google Form or Typeform)</li>
                <li>• Leadership review checklist</li>
                <li>• Vibe Reset meeting agenda + facilitation guide</li>
                <li>• Cultural health dashboard (Google Sheets)</li>
                <li>• Implementation timeline</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-white text-sm font-medium mb-2">Training on How to Use It</h3>
              <p className="text-white/70 text-xs">We walk you through the framework, demonstrate a sample Vibe Reset meeting, and coach you on facilitation best practices.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-white text-sm font-medium mb-2">First Vibe Reset (Optional)</h3>
              <p className="text-white/70 text-xs">We can facilitate your first Vibe Reset meeting so you see how it works before running it yourself.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Long-Term Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Prevents Culture Drift</h4>
              <p className="text-white/70 text-xs">Regular check-ins keep values alive and catch problems early.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Builds Trust</h4>
              <p className="text-white/70 text-xs">Team sees that leadership listens and acts on feedback.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Creates Continuous Improvement Culture</h4>
              <p className="text-white/70 text-xs">Small, regular changes compound over time.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Tracks Progress</h4>
              <p className="text-white/70 text-xs">Dashboard shows whether culture is improving or regressing.</p>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Part of Culture Optimization Service</h2>
          <p className="text-white/80 mb-4">The Vibe Reset Framework is delivered at the end of every Culture & Environment Optimization engagement. It's designed to be self-sustaining - you can run it without us.</p>
          <Link href="/services/culture-optimization" className="text-current-500 hover:text-current-400 text-sm">Learn more about the full service →</Link>
        </section>
      </div>
    </div>
  )
}

