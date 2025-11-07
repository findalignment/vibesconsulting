import Link from 'next/link'

export const metadata = { title: 'Safe AI Integration Plan - AI Integration' }

export default function IntegrationPlanPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to AI Integration
      </Link>

      <h1 className="mb-4">Safe AI Integration Plan</h1>
      <p className="text-xl text-white/90 mb-8">A step-by-step roadmap for adopting AI tools without exposing sensitive data or overwhelming your team.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What's In The Plan</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Phased Rollout Timeline</h3>
              <p className="text-white/70 text-sm mb-3">We don't dump 10 AI tools on your team at once. The plan sequences adoption across 90 days: quick wins first, complex tools later.</p>
              <p className="text-white/60 text-xs">Example: Start with email drafting (Week 1), add meeting transcription (Week 4), introduce design automation (Week 8).</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">2. Tool Recommendations</h3>
              <p className="text-white/70 text-sm mb-3">For each AI opportunity, we specify exactly which tool to use, why, and how much it costs. Free vs. paid options included.</p>
              <p className="text-white/60 text-xs">We only recommend tools we've tested and know work well for small teams.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">3. Data Safety Protocols</h3>
              <p className="text-white/70 text-sm mb-3">Clear rules for what data can/can't go into AI tools. Privacy guidelines, anonymization steps, and fallback processes.</p>
              <p className="text-white/60 text-xs">Example: "Never input client names/emails into ChatGPT. Use placeholders like [CLIENT A] instead."</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">4. Team Training Plan</h3>
              <p className="text-white/70 text-sm mb-3">Who needs training on what, when. Includes workshop agendas and follow-up resources.</p>
              <p className="text-white/60 text-xs">Different training for different roles. Designers need different AI skills than ops managers.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">5. Success Metrics</h3>
              <p className="text-white/70 text-sm mb-3">How to measure ROI. Time savings tracked, error rates monitored, team satisfaction surveyed.</p>
              <p className="text-white/60 text-xs">Data-driven approach ensures you know what's working and what's not.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Safety-First Approach</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/90 font-medium mb-3">AI is powerful, but misuse can create serious risks:</p>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Privacy Breaches</h4>
                <p className="text-white/70 text-xs">Accidentally uploading client data to public AI tools. (We prevent this.)</p>
              </div>
              
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Brand Damage</h4>
                <p className="text-white/70 text-xs">AI-generated content that sounds robotic or gets facts wrong. (We teach quality control.)</p>
              </div>
              
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Team Overwhelm</h4>
                <p className="text-white/70 text-xs">Too many tools, too fast. Nobody uses them effectively. (We phase adoption slowly.)</p>
              </div>
            </div>
            
            <p className="text-white/80 text-sm mt-4">Our integration plan addresses all of these risks upfront.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Example 90-Day Rollout</h2>
          <div className="space-y-4">
            <div className="card p-6 bg-current-600/10">
              <h3 className="text-lg mb-2">Phase 1: Quick Wins (Weeks 1-4)</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• <strong>Week 1:</strong> Email drafting with AI templates</li>
                <li>• <strong>Week 2:</strong> Meeting transcription & summarization</li>
                <li>• <strong>Week 3:</strong> Social media caption generation</li>
                <li>• <strong>Week 4:</strong> Team training workshop #1</li>
              </ul>
              <p className="text-white/60 text-xs mt-3">Focus: Build confidence. Show immediate time savings. Establish safe usage habits.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Phase 2: Process Automation (Weeks 5-8)</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• <strong>Week 5:</strong> Document formatting automation</li>
                <li>• <strong>Week 6:</strong> Data entry/extraction tools</li>
                <li>• <strong>Week 7:</strong> Research & competitive analysis AI</li>
                <li>• <strong>Week 8:</strong> Team training workshop #2</li>
              </ul>
              <p className="text-white/60 text-xs mt-3">Focus: Automate repetitive processes. Integrate AI into existing workflows.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Phase 3: Advanced Tools (Weeks 9-12)</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• <strong>Week 9:</strong> Custom AI prompts for complex tasks</li>
                <li>• <strong>Week 10:</strong> AI-assisted design/content creation</li>
                <li>• <strong>Week 11:</strong> Analytics & reporting automation</li>
                <li>• <strong>Week 12:</strong> 90-day review & optimization</li>
              </ul>
              <p className="text-white/60 text-xs mt-3">Focus: Deploy sophisticated tools. Measure total impact. Plan next phase.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Format & Delivery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-3">The Document</h3>
              <p className="text-white/70 text-sm mb-3">15-20 page Google Doc or Notion page. Organized by phase, with tool links, training resources, and safety protocols.</p>
              <p className="text-white/60 text-xs">Living document - you can edit and adapt as you go.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg mb-3">Presentation</h3>
              <p className="text-white/70 text-sm mb-3">60-minute walkthrough with your leadership team. We explain the plan, answer questions, and align on expectations.</p>
              <p className="text-white/60 text-xs">Everyone understands the "why" before you start implementing.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Customization</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3">Every integration plan is tailored to your team's:</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Current tech literacy level</li>
                <li>• Industry-specific needs</li>
                <li>• Data privacy requirements</li>
                <li>• Budget constraints</li>
              </ul>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Team size and structure</li>
                <li>• Workflow complexity</li>
                <li>• Risk tolerance</li>
                <li>• Growth plans</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Included in Flow Rebuild</h2>
          <p className="text-white/80 mb-4">The Safe AI Integration Plan is part of our 6-week Flow Rebuild package, which includes implementation support, team training, and SOP creation.</p>
          <Link href="/packages/flow-rebuild" className="btn btn-primary inline-block">View Flow Rebuild Package</Link>
        </section>
      </div>
    </div>
  )
}

