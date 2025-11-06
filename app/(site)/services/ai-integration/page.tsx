import CTAButton from '@/components/CTAButton'
import Link from 'next/link'

export const metadata = { 
  title: 'AI Integration for Small Business — Vibes Consulting',
  description: 'Practical AI adoption for teams who want efficiency without risk. Identify opportunities, implement safe tools, train your team.'
}

export default function AIIntegrationPage() {
  return (
    <div className="pb-20">
      <Link href="/services" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Services
      </Link>

      <header className="mb-12">
        <h1 className="mb-4">AI Integration for Small Business</h1>
        <p className="text-xl max-w-3xl">Practical AI adoption that increases productivity without introducing risk. We help small teams use AI tools safely, effectively, and sustainably.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="card p-8">
          <h3 className="mb-4 text-current-500">The Problem We Solve</h3>
          <p className="text-white/80 mb-4">AI is everywhere, but most small businesses don't know where to start. You've heard the hype. You've tried ChatGPT. But you haven't figured out how to <strong>systematically integrate AI</strong> into your operations.</p>
          <p className="text-white/80">The risk? Wasting time on tools that don't fit, exposing client data, or your team resisting adoption because they're scared or skeptical.</p>
        </div>

        <div className="card p-8">
          <h3 className="mb-4 text-current-500">What Makes This Different</h3>
          <p className="text-white/80 mb-4">We're not AI evangelists. We're <strong>pragmatists</strong>. We only recommend tools that have proven ROI, prioritize data safety, and actually get used.</p>
          <p className="text-white/80">You won't leave with a 50-page AI strategy doc. You'll leave with 3-5 automations running, SOPs written, and your team trained.</p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="mb-6">What's Included</h2>
        <div className="space-y-6">
          <Link href="/services/ai-integration/whats-included/opportunity-scan" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl mb-2 group-hover:text-current-500 transition-colors">1. AI Opportunity Scan</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-white/70 mb-3">We identify the highest-value, lowest-risk AI use cases in your business.</p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 text-sm">
              <li><strong>Process walkthrough:</strong> Review your workflows to spot repetitive, manual tasks AI can handle</li>
              <li><strong>Use case ranking:</strong> Score opportunities by time saved, cost, implementation complexity, and risk</li>
              <li><strong>Tool recommendations:</strong> Specific platforms matched to your needs</li>
              <li><strong>Data safety audit:</strong> Ensure no client info or IP leaks through public AI tools</li>
            </ul>
          </Link>

          <Link href="/services/ai-integration/whats-included/integration-plan" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl mb-2 group-hover:text-current-500 transition-colors">2. Safe AI Stack + Implementation</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-white/70 mb-3">We set up your AI tools, test them, and make sure they're secure.</p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 text-sm">
              <li><strong>Tool setup:</strong> Configure AI platforms with proper permissions and security settings</li>
              <li><strong>Workflow automation:</strong> Build 3-5 automations</li>
              <li><strong>Prompt libraries:</strong> Pre-written prompts your team can reuse</li>
              <li><strong>Data policies:</strong> Clear guidelines on what you can/can't put into AI tools</li>
            </ul>
          </Link>

          <Link href="/services/ai-integration/whats-included/sop-library" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl mb-2 group-hover:text-current-500 transition-colors">3. Team Training & SOPs</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-white/70 mb-3">Your team learns how to use AI confidently and consistently.</p>
            <ul className="list-disc pl-6 text-white/80 space-y-2 text-sm">
              <li><strong>Hands-on workshop (2 hours):</strong> Live demos of AI tools in action</li>
              <li><strong>SOPs for each use case:</strong> Step-by-step guides</li>
              <li><strong>Quick-start video library:</strong> Screen recordings for future onboarding</li>
              <li><strong>Office hours (4 weeks):</strong> Weekly Q&A sessions</li>
            </ul>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Common AI Use Cases We Implement</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/services/ai-integration/use-cases/content-creation" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">📝 Content & Communication</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Draft client emails and proposals</li>
              <li>• Summarize meeting notes automatically</li>
              <li>• Generate social media content</li>
              <li>• Rewrite copy for tone/clarity</li>
            </ul>
          </Link>

          <Link href="/services/ai-integration/use-cases/research-analysis" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">📊 Research & Analysis</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Generate client reports from CRM data</li>
              <li>• Analyze survey responses for patterns</li>
              <li>• Create data visualizations</li>
              <li>• Summarize long documents or research</li>
            </ul>
          </Link>

          <Link href="/services/ai-integration/use-cases/admin-automation" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">🤖 Admin Automation</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Auto-tag and route incoming emails</li>
              <li>• Generate invoice reminders and follow-ups</li>
              <li>• Transcribe and summarize calls</li>
              <li>• Create project briefs from intake forms</li>
            </ul>
          </Link>

          <Link href="/services/ai-integration/use-cases/customer-service" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">💬 Customer Service</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Draft FAQ responses</li>
              <li>• Generate support templates</li>
              <li>• Analyze customer feedback themes</li>
              <li>• Create knowledge base articles</li>
            </ul>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">What to Expect</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/services/ai-integration/what-to-expect/weeks-1-2" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Week 1-2: Discovery & Prioritization</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Kickoff call (60 min)</li>
              <li>• Workflow review and opportunity mapping</li>
              <li>• AI Opportunity Scan delivered</li>
              <li>• Tool selection and security review</li>
            </ul>
          </Link>

          <Link href="/services/ai-integration/what-to-expect/weeks-3-4" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Week 3-4: Implementation</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Tool setup and configuration</li>
              <li>• Build 3-5 automations</li>
              <li>• Create prompt libraries and templates</li>
              <li>• Write SOPs for each use case</li>
            </ul>
          </Link>

          <Link href="/services/ai-integration/what-to-expect/weeks-5-6" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Week 5-6: Training & Launch</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• 2-hour team workshop</li>
              <li>• Hands-on practice with real tasks</li>
              <li>• Deliver SOP library and videos</li>
              <li>• Launch automations</li>
            </ul>
          </Link>

          <Link href="/services/ai-integration/what-to-expect/ongoing-support" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Ongoing Support</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <ul className="text-white/80 space-y-2 text-sm">
              <li>• Weekly office hours (30 min)</li>
              <li>• Troubleshoot issues and refine workflows</li>
              <li>• Measure time savings and ROI</li>
              <li>• Identify next phase opportunities</li>
            </ul>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Who This Is For</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/services/ai-integration/who-this-is-for/ai-curious" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">AI-Curious Teams</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-white/70 text-sm">You know AI could help, but you don't have time to experiment. You want someone to do the research and show you what works.</p>
          </Link>

          <Link href="/services/ai-integration/who-this-is-for/overwhelmed-by-repetition" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Overwhelmed by Repetitive Tasks</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-white/70 text-sm">You're drowning in repetitive tasks (emails, reports, scheduling). AI can automate 30-40% of that.</p>
          </Link>

          <Link href="/services/ai-integration/who-this-is-for/non-technical-teams" className="card p-6 block group hover:border-current-600/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg group-hover:text-current-500 transition-colors">Non-Technical Teams</h3>
              <span className="text-white/40 text-sm group-hover:text-current-500 transition-colors">→</span>
            </div>
            <p className="text-white/70 text-sm">You handle sensitive client data and need to adopt AI without exposing information or violating privacy policies.</p>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Real Results</h2>
        <div className="space-y-4">
          <div className="card p-6 border-l-4 border-current-600">
            <p className="text-white/90 mb-2"><strong>Marketing agency, 6 people:</strong></p>
            <p className="text-white/70">"We were spending 8 hours a week on client reporting. Vibes built an automation that pulls data from our CRM and generates reports in 15 minutes. That's 30+ hours a month back."</p>
          </div>

          <div className="card p-6 border-l-4 border-current-600">
            <p className="text-white/90 mb-2"><strong>Consulting firm, 10 people:</strong></p>
            <p className="text-white/70">"Our team was skeptical of AI. After the workshop, everyone had at least one use case they loved. Now AI is part of our normal workflow, not a side experiment."</p>
          </div>
        </div>
      </section>

      <section className="mb-16 card p-8 bg-current-600/10">
        <h2 className="mb-4">Investment</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-3xl font-semibold text-white mb-2">$4,500</p>
            <p className="text-white/80">Includes opportunity scan, implementation, training, and 4 weeks of support.</p>
            <p className="text-white/60 text-sm mt-2">Typical timeline: 6-8 weeks from kickoff to full adoption</p>
            <p className="text-white/60 text-sm mt-1">Can be combined with Business Flow Consulting for integrated optimization</p>
          </div>
          <CTAButton>Get Started with AI</CTAButton>
        </div>
      </section>

      <section className="card p-8">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg mb-2">Is our client data safe with AI tools?</h3>
            <p className="text-white/70">We only recommend tools with strong privacy policies, and we configure them correctly. For sensitive data, we use enterprise plans with data residency guarantees or private instances.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">What if our team is resistant to AI?</h3>
            <p className="text-white/70">Normal. We address concerns directly in training and show them how AI makes their jobs easier, not replaces them. Most teams become advocates after seeing one workflow that saves them hours.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">Do we need technical skills to use these tools?</h3>
            <p className="text-white/70">No. We set up everything and write SOPs so non-technical people can use them. If you can use Google Docs, you can use these tools.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">What's the typical ROI?</h3>
            <p className="text-white/70">Most clients save 10-20 hours per week across their team within 2 months. At $50/hour, that's $2,000-4,000/month in reclaimed capacity.</p>
          </div>

          <div>
            <h3 className="text-lg mb-2">Can we start with just one use case?</h3>
            <p className="text-white/70">Yes. We can scope a smaller engagement focused on one high-impact automation (e.g., meeting notes or client reporting). Contact us for custom pricing.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="mb-4">Ready to Adopt AI Safely?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">Book a 30-minute intro call to discuss your biggest time sinks and explore whether AI can help. We'll be honest about what AI can and can't do for your specific situation.</p>
        <CTAButton>Schedule Intro Call</CTAButton>
      </section>
    </div>
  )
}

