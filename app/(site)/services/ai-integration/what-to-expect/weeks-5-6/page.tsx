import Link from 'next/link'

export const metadata = { title: 'Weeks 5-6: Optimization & Support - AI Integration' }

export default function Weeks56Page() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to AI Integration
      </Link>

      <h1 className="mb-4">Weeks 5-6: Optimization & Support</h1>
      <p className="text-xl text-white/90 mb-8">We monitor adoption, refine workflows, and measure ROI to ensure AI tools stick.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What We Do</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Week 5: Adoption Monitoring</h3>
              <p className="text-white/70 text-sm mb-3">We check in with your team to see how AI tools are being used in practice.</p>
              <ul className="text-white/60 text-xs space-y-1 pl-3 mt-2">
                <li>• Which tools are being used regularly?</li>
                <li>• Which are being ignored? (Why?)</li>
                <li>• What's working well?</li>
                <li>• What's confusing or frustrating?</li>
                <li>• Any safety concerns or errors?</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Week 5: Troubleshooting & Refinement</h3>
              <p className="text-white/70 text-sm mb-3">Based on feedback, we adjust prompts, update SOPs, and fix workflow friction.</p>
              <p className="text-white/60 text-xs">Example: "AI email drafts are too formal" → We adjust prompt templates to match your brand tone.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Week 5-6: Individual Support Sessions</h3>
              <p className="text-white/70 text-sm mb-3">15-30 minute check-ins with team members who need extra help or want to explore advanced use cases.</p>
              <p className="text-white/60 text-xs">We meet people where they are. Some pick up AI instantly, others need more guidance.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Week 6: ROI Measurement</h3>
              <p className="text-white/70 text-sm mb-3">We calculate time saved, productivity gains, and cost savings from AI adoption.</p>
              <ul className="text-white/60 text-xs space-y-1 pl-3 mt-2">
                <li>• Hours saved per week per tool</li>
                <li>• Tasks completed faster</li>
                <li>• Volume increase (more output, same time)</li>
                <li>• Cost savings (avoided hiring, reduced tool costs)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Your Time Investment</h2>
          <div className="card p-6 bg-white/5">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-white/80">Team feedback session</span>
                <span className="text-current-500 font-medium">30 minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Individual support (optional)</span>
                <span className="text-current-500 font-medium">15-30 min per person</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">ROI review meeting</span>
                <span className="text-current-500 font-medium">30 minutes</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Common Adjustments We Make</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Prompt Refinement</h3>
              <p className="text-white/70 text-xs">AI outputs don't match brand voice → We adjust prompt templates to better reflect your tone and style.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Workflow Simplification</h3>
              <p className="text-white/70 text-xs">Tool feels complicated → We streamline steps or create one-click shortcuts.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Training Gaps</h3>
              <p className="text-white/70 text-xs">Team member struggling → We provide 1-on-1 coaching or create role-specific guides.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Safety Protocols</h3>
              <p className="text-white/70 text-xs">Someone almost exposed sensitive data → We add safeguards and reinforce training.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">End of Week 6 Deliverable</h2>
          <div className="card p-6 bg-current-600/10">
            <h3 className="text-lg mb-3">AI Impact Report (5-8 pages)</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• Adoption metrics (which tools, how often)</li>
              <li>• Time savings by tool and task</li>
              <li>• Before/after productivity comparison</li>
              <li>• Cost-benefit analysis</li>
              <li>• Recommendations for next phase</li>
              <li>• Updated SOP library with refinements</li>
            </ul>
            <p className="text-white/60 text-xs mt-4">Shows concrete ROI and guides future AI expansion.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Typical ROI After 6 Weeks</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">8-15</div>
              <p className="text-white text-sm font-medium mb-1">Hours/Week Saved</p>
              <p className="text-white/60 text-xs">Per team member using AI tools</p>
            </div>
            
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">40-60%</div>
              <p className="text-white text-sm font-medium mb-1">Time Reduction</p>
              <p className="text-white/60 text-xs">On automated tasks (emails, admin, content)</p>
            </div>
            
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">3-6mo</div>
              <p className="text-white text-sm font-medium mb-1">Payback Period</p>
              <p className="text-white/60 text-xs">Time to recoup AI integration investment</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Post-Engagement Support</h2>
          <div className="card p-6 bg-white/5">
            <h3 className="text-lg mb-3">30 Days of Email Support (Included)</h3>
            <p className="text-white/70 text-sm mb-3">After Week 6, you have 30 days of email access for questions, troubleshooting, and optimization advice.</p>
            
            <div className="mt-4 space-y-2 text-xs text-white/60">
              <p><strong>Common questions we answer:</strong></p>
              <ul className="pl-3 space-y-1">
                <li>• "How do I adapt this prompt for a new use case?"</li>
                <li>• "Tool isn't working as expected - what's wrong?"</li>
                <li>• "Can we add AI to this new task?"</li>
                <li>• "Team member needs refresher training - any tips?"</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Next Steps Options</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Option 1: Self-Sustain</h3>
              <p className="text-white/70 text-sm">Your team runs with AI tools independently. Use email support as needed for next 30 days.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg mb-2">Option 2: Expand AI Use (Add-On)</h3>
              <p className="text-white/70 text-sm">Add more tools, automate additional tasks, or build custom AI solutions for complex workflows.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg mb-2">Option 3: Vibe Partnership (Ongoing Support)</h3>
              <p className="text-white/70 text-sm">Quarterly retainer includes continuous AI strategy updates, tool monitoring, and team training.</p>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Integrate AI Safely?</h2>
          <p className="text-white/80 mb-4">The 6-week AI Integration is part of our Flow Rebuild package. We identify opportunities, implement tools, train your team, and measure results.</p>
          <Link href="/packages/flow-rebuild" className="btn btn-primary inline-block">Explore Flow Rebuild</Link>
        </section>
      </div>
    </div>
  )
}

