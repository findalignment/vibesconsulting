import Link from 'next/link'

export const metadata = { title: 'Ongoing AI Support — AI Integration' }

export default function OngoingSupportPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to AI Integration
      </Link>

      <h1 className="mb-4">Ongoing AI Support</h1>
      <p className="text-xl text-white/90 mb-8">How we continue to support your AI adoption after the initial 6-week integration.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">30 Days Email Support (Included)</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">After Week 6, you have 30 days of direct email access for questions and troubleshooting.</p>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-white text-sm font-medium mb-1">What We Help With:</h4>
                <ul className="text-white/70 text-xs space-y-1 pl-3">
                  <li>• Prompt adjustments for new use cases</li>
                  <li>• Troubleshooting tool errors or unexpected outputs</li>
                  <li>• Guidance on expanding AI to additional tasks</li>
                  <li>• Data safety questions</li>
                  <li>• Team member training refreshers</li>
                </ul>
              </div>
              
              <div className="pt-3 border-t border-white/10">
                <p className="text-white/70 text-xs"><strong>Response time:</strong> Within 24 hours (usually same-day)</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">90-Day Check-In (Optional)</h2>
          <div className="card p-6">
            <p className="text-white/80 mb-3">Schedule a 30-minute call at the 90-day mark to review long-term adoption and ROI.</p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="text-white text-sm font-medium mb-2">What We Review:</h4>
                <ul className="text-white/70 text-xs space-y-1 pl-3">
                  <li>• Which tools are still being used?</li>
                  <li>• What's been abandoned? (Why?)</li>
                  <li>• Cumulative time savings</li>
                  <li>• New AI opportunities</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">We Provide:</h4>
                <ul className="text-white/70 text-xs space-y-1 pl-3">
                  <li>• Tool usage optimization tips</li>
                  <li>• Recommendations for next phase</li>
                  <li>• Updates on new AI tools worth considering</li>
                  <li>• Revised ROI calculations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Vibe Partnership (Ongoing Retainer)</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-white/90 font-medium mb-3">For Continuous AI Strategy & Support</p>
            <p className="text-white/70 text-sm mb-4">The Vibe Partnership provides quarterly AI strategy updates, tool monitoring, and ongoing team support.</p>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-white text-sm font-medium mb-1">What's Included:</h4>
                <ul className="text-white/70 text-xs space-y-1 pl-3">
                  <li>• Quarterly AI Strategy Sessions (identify new automation opportunities)</li>
                  <li>• Monthly tool performance monitoring</li>
                  <li>• Priority email/Slack support for AI questions</li>
                  <li>• Updates on emerging AI tools relevant to your business</li>
                  <li>• Quarterly team training refreshers</li>
                  <li>• 20% discount on additional AI projects</li>
                </ul>
              </div>
              
              <div className="pt-3 border-t border-current-600/20">
                <p className="text-white/80 text-sm mb-2"><strong>Investment:</strong> $3,500/month (billed quarterly)</p>
                <Link href="/packages/vibe-partnership" className="text-current-500 hover:text-current-400 text-sm">Learn more about Vibe Partnership →</Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">AI Expansion Projects (Add-On)</h2>
          <div className="card p-6">
            <p className="text-white/80 mb-3">After the initial 6-week integration, many clients want to expand AI to additional areas.</p>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Common Expansion Projects:</h4>
                <ul className="text-white/70 text-xs space-y-1 pl-3">
                  <li>• Custom GPT or AI assistant for specific workflows</li>
                  <li>• Advanced automation (Zapier/Make workflows)</li>
                  <li>• AI for new departments or roles</li>
                  <li>• Integration with industry-specific tools</li>
                  <li>• Custom prompt libraries for complex use cases</li>
                </ul>
              </div>
              
              <div className="pt-3 border-t border-white/10">
                <p className="text-white/70 text-xs"><strong>Pricing:</strong> Project-based, starting at $2,500 depending on scope</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">AI Tools Evolve — We Keep You Updated</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3">The AI landscape changes fast. New tools emerge, existing tools add features, pricing models shift.</p>
            <p className="text-white/70 text-sm mb-3">If you're on Vibe Partnership, we monitor these changes for you and recommend updates:</p>
            
            <ul className="space-y-2 text-xs text-white/70">
              <li>• "ChatGPT added a feature that replaces the Zapier workflow we built — let's switch."</li>
              <li>• "A new tool launched that's better for your specific use case — here's why."</li>
              <li>• "The tool you're using increased pricing 3x — here's a cost-effective alternative."</li>
            </ul>
            
            <p className="text-white/60 text-xs mt-4">You stay optimized without spending hours researching AI news.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What Most Clients Do</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">50%</div>
              <p className="text-white text-sm font-medium mb-1">Self-Sustain</p>
              <p className="text-white/60 text-xs">Run with AI independently, reach out occasionally via email</p>
            </div>
            
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">30%</div>
              <p className="text-white text-sm font-medium mb-1">Expand AI Use</p>
              <p className="text-white/60 text-xs">Add more tools or automate additional workflows within 6 months</p>
            </div>
            
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">20%</div>
              <p className="text-white text-sm font-medium mb-1">Vibe Partnership</p>
              <p className="text-white/60 text-xs">Ongoing strategic support for continuous AI evolution</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Success Story: 1-Year Post-Integration</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-white/90 font-medium mb-3">Design Agency (8-person team)</p>
            
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="text-white font-medium mb-1">After 6-Week Integration:</h4>
                <p className="text-white/70 text-xs">Saved 12 hours/week with email drafting, meeting transcription, and content creation AI.</p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-1">6 Months Later:</h4>
                <p className="text-white/70 text-xs">Expanded AI to design brief analysis and client reporting. Total savings: 20 hours/week.</p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-1">1 Year Later:</h4>
                <p className="text-white/70 text-xs">Built custom GPT for their specific design process. Team handles 30% more projects without hiring. Joined Vibe Partnership for ongoing optimization.</p>
              </div>
            </div>
            
            <p className="text-white/60 text-xs mt-4"><strong>Result:</strong> What started as "let's try AI" became a competitive advantage. Team spends time on creative work, not admin.</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Integrate AI?</h2>
          <p className="text-white/80 mb-4">The 6-week AI Integration is part of our Flow Rebuild package. We handle discovery, implementation, training, and provide ongoing support options.</p>
          <Link href="/packages/flow-rebuild" className="btn btn-primary inline-block">Explore Flow Rebuild</Link>
        </section>
      </div>
    </div>
  )
}

