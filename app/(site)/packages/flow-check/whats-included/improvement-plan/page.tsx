import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: '90-Day Improvement Plan - Flow Check - Vibes Consulting',
  description: 'Phased action plan with quick wins, system redesign, and stabilization. Includes success metrics and accountability structure.'
}

export default function ImprovementPlanPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/flow-check" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Flow Check
      </Link>

      <h1 className="mb-4">90-Day Continuous Improvement Plan</h1>
      <p className="text-xl text-white/90 mb-8">A phased roadmap that turns insights into action - with clear priorities, owners, and success metrics.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What It Is</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">After the Friction Audit shows you what's broken and the Flow Map shows you what right looks like, the 90-Day Plan tells you exactly how to get there.</p>
            <p className="text-white/80">It's not a wishlist. It's a realistic, phased implementation plan that fits around your actual operations.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">The 3-Phase Structure</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-xl mb-3 text-current-500">Weeks 1-4: Quick Wins</h3>
              <p className="text-white/80 mb-4">Low-effort, high-impact changes that create immediate momentum. These prove the value of improvement and build team buy-in.</p>
              <div className="space-y-2">
                <div className="text-white/70 text-sm">
                  <p className="font-medium mb-1">Examples:</p>
                  <ul className="text-xs space-y-1 pl-4">
                    <li>• Kill 2-3 wasteful recurring meetings</li>
                    <li>• Create a simple intake form template</li>
                    <li>• Document decision thresholds ("you can approve up to $500")</li>
                    <li>• Set up a shared project brief template</li>
                    <li>• Clarify who owns which client relationships</li>
                  </ul>
                </div>
                <p className="text-white/60 text-xs italic mt-2">Goal: 5-8 hours saved per week within first month</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl mb-3 text-current-500">Weeks 5-8: System Redesign</h3>
              <p className="text-white/80 mb-4">Rebuild 1-2 core workflows based on your Flow Map. This is where you implement the ideal state for your highest-friction processes.</p>
              <div className="space-y-2">
                <div className="text-white/70 text-sm">
                  <p className="font-medium mb-1">Examples:</p>
                  <ul className="text-xs space-y-1 pl-4">
                    <li>• Redesign client onboarding end-to-end</li>
                    <li>• Implement new project kickoff process</li>
                    <li>• Build decision rights framework</li>
                    <li>• Create async communication protocols</li>
                    <li>• Set up automation for repetitive tasks</li>
                  </ul>
                </div>
                <p className="text-white/60 text-xs italic mt-2">Goal: 1-2 major systems running smoothly by end of month 2</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl mb-3 text-current-500">Weeks 9-12: Stabilization</h3>
              <p className="text-white/80 mb-4">Fine-tune what you've built. Address edge cases, update documentation, train new habits, and measure results.</p>
              <div className="space-y-2">
                <div className="text-white/70 text-sm">
                  <p className="font-medium mb-1">Examples:</p>
                  <ul className="text-xs space-y-1 pl-4">
                    <li>• Refine processes based on real-world usage</li>
                    <li>• Document exceptions and how to handle them</li>
                    <li>• Train team on new systems</li>
                    <li>• Measure time savings and quality improvements</li>
                    <li>• Identify next improvements for month 4+</li>
                  </ul>
                </div>
                <p className="text-white/60 text-xs italic mt-2">Goal: New systems running independently, 10-15 hours saved per week sustained</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What's Included in Your Plan</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Prioritized Improvement List</h4>
              <p className="text-white/70 text-xs">We rank every fix by impact (how much time it saves) vs. effort (how hard it is). You tackle high-impact, low-effort wins first.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Week-by-Week Timeline</h4>
              <p className="text-white/70 text-xs">Specific tasks for each week. Not overwhelming - 2-3 improvements per week that fit around your actual work.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Owner Assignments</h4>
              <p className="text-white/70 text-xs">Every improvement has a DRI (directly responsible individual). Clear accountability prevents "we'll get to it eventually."</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Success Metrics</h4>
              <p className="text-white/70 text-xs">How you'll know it's working. Time saved, decisions made faster, fewer handoffs, better team satisfaction.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Check-in Cadence</h4>
              <p className="text-white/70 text-xs">Recommended touchpoints for reviewing progress (weekly 15-min standup, biweekly retrospective). Keeps momentum going.</p>
            </div>
          </div>
        </section>

        

        <section>
          <h2 className="mb-4">Why 90 Days?</h2>
          <div className="card p-6">
            <p className="text-white/80 mb-3">90 days is the sweet spot for creating sustainable change:</p>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• <strong>Long enough</strong> to implement real systems (not just surface fixes)</li>
              <li>• <strong>Short enough</strong> to maintain momentum (not "someday we'll get to it")</li>
              <li>• <strong>Phased approach</strong> prevents overwhelming your team</li>
              <li>• <strong>Quick wins first</strong> prove value before tackling harder changes</li>
              <li>• <strong>Time to stabilize</strong> means changes actually stick</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Can You Implement It Yourself?</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-white/90 mb-3">Yes. The 90-Day Plan is designed to be self-executable.</p>
            <p className="text-white/80 mb-3">Some clients take the plan and run with it. They have internal bandwidth and just needed a clear roadmap. That works great.</p>
            <p className="text-white/80">Others continue with <Link href="/packages/flow-rebuild" className="text-current-500 hover:underline">Flow Rebuild</Link> - we implement it with you over 6 weeks. The $2,500 Flow Check fee is fully credited, so you only pay $5,500 more.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What Happens Next</h2>
          <p className="text-white/80 mb-4">The 90-Day Plan is part of the Flow Check package, alongside:</p>
          <div className="space-y-3">
            <Link href="/packages/flow-check/whats-included/friction-audit" className="card p-4 hover:border-current-600/60 transition-all block">
              <p className="text-current-500 text-sm font-medium mb-1">Friction Audit Report →</p>
              <p className="text-white/70 text-xs">Identifies where work slows down and why</p>
            </Link>
            <Link href="/packages/flow-check/whats-included/flow-map" className="card p-4 hover:border-current-600/60 transition-all block">
              <p className="text-current-500 text-sm font-medium mb-1">Flow Map (Current vs. Ideal) →</p>
              <p className="text-white/70 text-xs">Shows how workflows should work once friction is removed</p>
            </Link>
            <Link href="/packages/flow-check/whats-included/final-presentation" className="card p-4 hover:border-current-600/60 transition-all block">
              <p className="text-current-500 text-sm font-medium mb-1">Final Presentation & Strategy Session →</p>
              <p className="text-white/70 text-xs">60-minute walkthrough of findings with your team</p>
            </Link>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready for a Clear Roadmap?</h2>
          <p className="text-white/80 mb-6">The 90-Day Plan is included in every Flow Check. Book an intro call to get started.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

