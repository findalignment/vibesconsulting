import Link from 'next/link'

export const metadata = { title: 'Weeks 3-4: Tool Implementation & Training - AI Integration' }

export default function Weeks34Page() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to AI Integration
      </Link>

      <h1 className="mb-4">Weeks 3-4: Tool Implementation & Training</h1>
      <p className="text-xl text-white/90 mb-8">We set up AI tools, create SOPs, and train your team on safe, effective use.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What We Do</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Week 3: Tool Setup & Configuration</h3>
              <p className="text-white/70 text-sm mb-3">We set up the 3-5 highest-impact AI tools identified in the Discovery phase.</p>
              <ul className="text-white/60 text-xs space-y-1 pl-3 mt-2">
                <li>• Create accounts (team or enterprise versions as needed)</li>
                <li>• Configure settings for your specific use cases</li>
                <li>• Build custom prompts and templates</li>
                <li>• Set up integrations with existing tools (Slack, email, etc.)</li>
                <li>• Test with sample tasks to ensure quality</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Week 3: SOP Creation</h3>
              <p className="text-white/70 text-sm mb-3">We document exactly how to use each tool safely and effectively.</p>
              <ul className="text-white/60 text-xs space-y-1 pl-3 mt-2">
                <li>• Step-by-step guides for each AI tool</li>
                <li>• Prompt library (copy-paste templates)</li>
                <li>• Data safety checklists</li>
                <li>• Troubleshooting guides</li>
                <li>• Quick-start 1-pager for team reference</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Week 4: Team Training Workshop (2-3 hours)</h3>
              <p className="text-white/70 text-sm mb-3">Hands-on training where your team learns to use each tool.</p>
              <ul className="text-white/60 text-xs space-y-1 pl-3 mt-2">
                <li>• Live demo of each AI tool</li>
                <li>• Team practices with real tasks</li>
                <li>• Data safety protocols review</li>
                <li>• Q&A and troubleshooting</li>
                <li>• Access to SOP library</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Week 4: Individual Role Training (30 min each)</h3>
              <p className="text-white/70 text-sm mb-3">We meet 1-on-1 with key roles to customize AI use for their specific tasks.</p>
              <p className="text-white/60 text-xs">Example: Designers need different AI skills than admin staff. We tailor training to each role.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Your Time Investment</h2>
          <div className="card p-6 bg-white/5">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-white/80">Team training workshop</span>
                <span className="text-current-500 font-medium">2-3 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Individual role training (optional)</span>
                <span className="text-current-500 font-medium">30 min per person</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Practice time (self-directed)</span>
                <span className="text-current-500 font-medium">1-2 hours/week</span>
              </div>
            </div>
            <p className="text-white/60 text-xs mt-4">Most team members are productive with AI tools within first week.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Training Philosophy</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3">We don't just show you tools - we teach principles.</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>• <strong>Prompt design:</strong> How to ask AI for what you need</li>
              <li>• <strong>Quality control:</strong> How to spot AI errors before they become problems</li>
              <li>• <strong>Safety habits:</strong> Data anonymization, source verification, human oversight</li>
              <li>• <strong>Continuous improvement:</strong> How to adapt AI use as you learn</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4">End of Week 4 Deliverables</h2>
          <div className="card p-6 bg-current-600/10">
            <h3 className="text-lg mb-3">What You'll Have:</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• 3-5 AI tools fully set up and configured</li>
              <li>• Custom SOP library with prompt templates</li>
              <li>• Team trained and confident using AI safely</li>
              <li>• Data safety protocols in place</li>
              <li>• Measurement baseline (time spent on tasks pre-AI)</li>
            </ul>
            <p className="text-white/60 text-xs mt-4">Your team is ready to use AI independently with support available.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Common Tools We Implement</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Phase 1: Quick Wins</h3>
              <ul className="text-white/70 text-xs space-y-1 pl-3">
                <li>• ChatGPT for email & content drafting</li>
                <li>• Otter.ai for meeting transcription</li>
                <li>• Calendly for scheduling automation</li>
              </ul>
            </div>
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Phase 2: Process Automation</h3>
              <ul className="text-white/70 text-xs space-y-1 pl-3">
                <li>• Zapier for workflow automation</li>
                <li>• Document AI for data extraction</li>
                <li>• Industry-specific tools as needed</li>
              </ul>
            </div>
          </div>
          <p className="text-white/70 text-sm mt-4">Exact tools depend on your AI Opportunity Report findings.</p>
        </section>

        <section className="card p-6 bg-white/5">
          <h2 className="mb-4">What Happens Next</h2>
          <p className="text-white/80">Weeks 5-6: Optimization & support. We monitor adoption, troubleshoot issues, and measure ROI.</p>
        </section>
      </div>
    </div>
  )
}

