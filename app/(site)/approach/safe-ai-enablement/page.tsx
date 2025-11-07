import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Safe AI Enablement - Vibes Consulting',
  description: 'Practical, low-risk adoption of automation tools that reduce noise and error without exposing data or creating new dependencies.'
}

export default function SafeAIEnablementPage() {
  return (
    <div className="pb-20">
      <Link href="/#how" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to How We Work
      </Link>

      <header className="mb-12">
        <h1 className="mb-4">Safe AI Enablement</h1>
        <p className="text-xl text-white/90 max-w-3xl">Practical, low-risk adoption of AI and automation tools that reduce repetitive work and eliminate errors - without exposing sensitive data or creating vendor lock-in.</p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="mb-6">What is Safe AI Enablement?</h2>
          <div className="card p-8 bg-white/5">
            <p className="text-white/80 mb-4">AI is powerful but risky. Most businesses either avoid it entirely (falling behind) or adopt recklessly (exposing data, wasting money on tools they don't use).</p>
            <p className="text-white/80 mb-4">Safe AI Enablement is our framework for adopting AI responsibly: Focus on high-value, low-risk use cases. Protect data. Train teams properly. Build systems that don't depend on any single vendor.</p>
            <p className="text-white/80">We help you get AI's benefits without the headaches.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Our Approach</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-3">1. Start With High-Value, Low-Risk Use Cases</h3>
              <p className="text-white/70 text-sm mb-3">Not all AI applications are equal. We identify tasks that are repetitive, time-consuming, and low-stakes. These are perfect for AI because mistakes aren't catastrophic.</p>
              <p className="text-white/60 text-xs italic">Example: Using AI to draft meeting notes, summarize documents, or generate email templates. If the output is wrong, you catch it before it goes out.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">2. Protect Your Data</h3>
              <p className="text-white/70 text-sm mb-3">We configure AI tools with proper security settings. Use business accounts (not personal). Enable data opt-outs. Never input confidential client information. Train teams on what's safe to share.</p>
              <p className="text-white/60 text-xs italic">Example: Using ChatGPT Team accounts with data opt-out enabled, and clear guidelines on never pasting client names or sensitive details.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">3. Build Around Prompts, Not Integrations</h3>
              <p className="text-white/70 text-sm mb-3">Complex integrations create vendor lock-in and technical debt. Instead, we focus on well-designed prompts that work across multiple AI tools. If ChatGPT stops working tomorrow, you can use Claude or Gemini with the same prompts.</p>
              <p className="text-white/60 text-xs italic">Example: A prompt library that works with any text-based AI, not a custom-built integration tied to one vendor.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">4. Train Teams, Don't Just Deploy Tools</h3>
              <p className="text-white/70 text-sm mb-3">Most AI adoption fails because teams don't know how to use the tools effectively. We provide hands-on training with real work examples. Everyone leaves knowing exactly when and how to use AI.</p>
              <p className="text-white/60 text-xs italic">Example: 2-hour workshop where team members practice using AI prompts with their actual work, not theoretical examples.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">5. Measure Impact, Iterate Based on Results</h3>
              <p className="text-white/70 text-sm mb-3">We track time saved, quality improvements, and adoption rates. If a tool isn't delivering value, we adjust or replace it. AI should save you time and money - if it doesn't, something's wrong.</p>
              <p className="text-white/60 text-xs italic">Example: Tracking hours saved on meeting notes before and after implementing AI transcription tools.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Use Cases We Focus On</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-3">Content Creation</h3>
              <p className="text-white/70 text-sm mb-2">First drafts of emails, social posts, blog outlines, proposals. AI handles the blank page problem. Humans add personality and accuracy.</p>
              <p className="text-white/60 text-xs">Time saved: 30-40% on content creation tasks</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Meeting & Documentation</h3>
              <p className="text-white/70 text-sm mb-2">Transcription, note-taking, action item extraction, summary generation. Turns messy conversation into structured documentation.</p>
              <p className="text-white/60 text-xs">Time saved: 15-20 min per meeting</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Research & Analysis</h3>
              <p className="text-white/70 text-sm mb-2">Synthesizing information, identifying patterns, comparing options, generating insights from data. AI handles the heavy lifting, you handle the judgment.</p>
              <p className="text-white/60 text-xs">Time saved: 50-60% on research tasks</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Process Automation</h3>
              <p className="text-white/70 text-sm mb-2">Data entry, form filling, status updates, routine communications. Anything repetitive and rule-based is a candidate.</p>
              <p className="text-white/60 text-xs">Time saved: 5-10 hours per week per person</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">What We Don't Recommend</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/90 mb-4">We're selective about AI use because not all applications are safe or valuable:</p>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>✗ Using AI for high-stakes decisions without human review</li>
              <li>✗ Inputting confidential client data into public AI tools</li>
              <li>✗ Complex integrations that create technical debt</li>
              <li>✗ Adopting AI just because it's trendy</li>
              <li>✗ Replacing human judgment with AI outputs</li>
              <li>✗ Tools that require months of setup before delivering value</li>
            </ul>
            <p className="text-white/80 mt-4">If it's risky, expensive, or doesn't solve a real problem, we don't recommend it.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Our AI Safety Framework</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-3">Data Protection</h3>
              <ul className="text-white/70 text-sm space-y-2">
                <li>• Use business accounts with data opt-out</li>
                <li>• Never input confidential information</li>
                <li>• Clear guidelines on what's safe to share</li>
                <li>• Regular training on data security</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Quality Control</h3>
              <ul className="text-white/70 text-sm space-y-2">
                <li>• Human review for all AI outputs</li>
                <li>• Clear prompts that reduce errors</li>
                <li>• Testing before deployment</li>
                <li>• Feedback loops to improve quality</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Vendor Independence</h3>
              <ul className="text-white/70 text-sm space-y-2">
                <li>• Prompt-based approaches work across tools</li>
                <li>• Avoid deep integrations</li>
                <li>• Export data regularly</li>
                <li>• Plan for tool replacement</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">How This Shows Up in Our Work</h2>
          <div className="card p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-current-500 text-xl">→</div>
                <div>
                  <h4 className="text-white font-medium mb-1">In AI Integration Service</h4>
                  <p className="text-white/70 text-sm">6-week engagement focused entirely on safe AI adoption. We scan for opportunities, configure tools properly, train your team, and build safety protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-current-500 text-xl">→</div>
                <div>
                  <h4 className="text-white font-medium mb-1">In Flow Rebuild</h4>
                  <p className="text-white/70 text-sm">Every Flow Rebuild includes AI enablement for the system we're rebuilding. If we're redesigning meetings, we add AI note-taking. If we're fixing onboarding, we add AI-assisted documentation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-current-500 text-xl">→</div>
                <div>
                  <h4 className="text-white font-medium mb-1">In AI Prompt Library Add-On</h4>
                  <p className="text-white/70 text-sm">15-20 tested, safe prompts for your specific business. No experimentation needed - just copy, paste, and get consistent results.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-current-500 text-xl">→</div>
                <div>
                  <h4 className="text-white font-medium mb-1">In Vibe Partnership</h4>
                  <p className="text-white/70 text-sm">Continuous AI strategy. We monitor new tools, evaluate if they're worth adopting, and implement 1-2 new automations each quarter.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Why "Safe" Matters</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-white/90 mb-4">AI moves fast. Many businesses adopt tools without thinking through the risks:</p>
            <ul className="space-y-2 text-white/80 text-sm mb-4">
              <li>• Confidential data leaked to AI training datasets</li>
              <li>• Tools abandoned after expensive implementations</li>
              <li>• Teams overwhelmed by complexity</li>
              <li>• Vendor lock-in making it impossible to switch</li>
              <li>• AI outputs published without review, damaging reputation</li>
            </ul>
            <p className="text-white/90">We help you avoid these pitfalls. Get AI's benefits - time savings, reduced errors, improved quality - without the risks.</p>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to Adopt AI Safely?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">Start with our AI Integration Service or add AI enablement to any Flow Rebuild engagement.</p>
          <CTAButton>Book a Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

