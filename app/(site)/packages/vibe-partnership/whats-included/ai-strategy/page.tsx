import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Continuous AI Strategy — Vibe Partnership — Vibes Consulting',
  description: 'Stay ahead of AI evolution. Monthly opportunity scans, quarterly implementations, ongoing tool evaluation.'
}

export default function AIStrategyPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/vibe-partnership" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Vibe Partnership
      </Link>

      <h1 className="mb-4">Continuous AI Strategy</h1>
      <p className="text-xl text-white/90 mb-8">As AI tools evolve, we keep you updated on what's worth adopting. Monthly scans, quarterly implementations.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What It Is</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">AI is evolving fast. New tools every month. Hard to know what's hype vs. what's actually useful for your business.</p>
            <p className="text-white/80 mb-4">We track the landscape, test new tools, and bring you only the opportunities that make sense for your team. You stay ahead without the overwhelm.</p>
            <p className="text-white/80">Think of us as your AI research and implementation team.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What's Included</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Monthly AI Opportunity Scan</h3>
              <p className="text-white/70 text-sm mb-3">We review new AI tools and identify 1-2 opportunities specific to your business. Not "here's what's new in AI" — "here's what could save your team 5 hours this week."</p>
              <p className="text-white/60 text-xs italic">Delivered as a short brief via email or Slack.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Tool Evaluation & Testing</h3>
              <p className="text-white/70 text-sm mb-3">Before recommending a tool, we test it with scenarios similar to your work. We check: Does it actually work? Is it worth the learning curve? What are the risks?</p>
              <p className="text-white/60 text-xs italic">You only see vetted recommendations, not every shiny new thing.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Quarterly Implementation (1-2 new automations)</h3>
              <p className="text-white/70 text-sm mb-3">Every quarter, we implement 1-2 new AI workflows: custom prompts, automation setups, tool integrations. We configure, test, train your team.</p>
              <p className="text-white/60 text-xs italic">Hands-on implementation, not just recommendations.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Team Training Updates</h3>
              <p className="text-white/70 text-sm mb-3">When we add new AI tools, we train your team (usually 30-60 min session). Everyone knows how to use it properly and safely.</p>
              <p className="text-white/60 text-xs italic">Plus: updated prompt libraries and usage guidelines.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Why This Matters</h2>
          <div className="card p-6">
            <p className="text-white/80 mb-4">Most businesses approach AI in one of two ways:</p>
            <ul className="text-white/70 text-sm space-y-2 mb-4">
              <li>• <strong>Overwhelmed:</strong> Too many tools, don't know where to start, do nothing</li>
              <li>• <strong>Haphazard:</strong> Everyone uses different tools, no standards, messy results</li>
            </ul>
            <p className="text-white/80">Continuous AI Strategy gives you a third option: strategic, incremental adoption. Add value every quarter without chaos.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Real Example: Marketing Agency, Vibe Partner for 6 Months</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/90 mb-2 font-medium">Q1 Implementation:</p>
            <p className="text-white/70 text-sm mb-4">AI meeting note-taker (Fireflies). Captures action items automatically. Saves 3 hours per week on note-taking and follow-up.</p>

            <p className="text-white/90 mb-2 font-medium">Q2 Implementation:</p>
            <p className="text-white/70 text-sm mb-4">Custom ChatGPT prompt library for client communications (proposals, follow-ups, project updates). Cuts drafting time by 50%.</p>

            <p className="text-white/90 mb-2 font-medium">Monthly Scans:</p>
            <p className="text-white/70 text-sm mb-4">We flagged 2 tools that didn't make sense (too expensive, not mature enough). Saved them from wasting time testing bad fits.</p>

            <p className="text-current-500 text-sm font-medium">Result: 10+ hours per week saved from AI adoption. No tool overwhelm. Team actually uses the tools.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What You Avoid</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4 bg-red-500/10">
              <h4 className="text-white text-sm font-medium mb-2">Without Continuous AI Strategy</h4>
              <ul className="text-white/70 text-xs space-y-1">
                <li>• Everyone uses different AI tools (chaos)</li>
                <li>• Wasting time testing tools that don't fit</li>
                <li>• Missing valuable opportunities</li>
                <li>• No consistent prompts or workflows</li>
                <li>• Security and privacy risks</li>
              </ul>
            </div>
            <div className="card p-4 bg-green-500/10">
              <h4 className="text-white text-sm font-medium mb-2">With Continuous AI Strategy</h4>
              <ul className="text-white/70 text-xs space-y-1">
                <li>• Curated toolset, everyone aligned</li>
                <li>• Only adopt tools that make sense</li>
                <li>• Proactive about new opportunities</li>
                <li>• Standard prompts and workflows</li>
                <li>• Safe, responsible AI usage</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to Stay Ahead of AI?</h2>
          <p className="text-white/80 mb-6">Continuous AI Strategy is included in every Vibe Partnership. Book an intro call to discuss.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

