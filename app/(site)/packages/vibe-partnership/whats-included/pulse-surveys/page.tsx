import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Monthly Pulse Surveys — Vibe Partnership — Vibes Consulting',
  description: 'Anonymous team surveys tracking engagement, clarity, and flow. Surface patterns before they become problems.'
}

export default function PulseSurveysPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/vibe-partnership" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Vibe Partnership
      </Link>

      <h1 className="mb-4">Monthly Pulse Surveys</h1>
      <p className="text-xl text-white/90 mb-8">Track team health in real-time. Anonymous surveys that surface issues before they become problems.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What They Are</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Every month, your team gets a short anonymous survey (5 minutes max). We track engagement, clarity, communication, and flow over time.</p>
            <p className="text-white/80">We analyze the data, identify trends, and flag issues before they escalate. It's like having early-warning radar for culture problems.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What We Track</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Team Satisfaction Trends</h4>
              <p className="text-white/70 text-xs">Overall happiness, work-life balance, sense of progress. Are things getting better or worse?</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Friction Point Tracking</h4>
              <p className="text-white/70 text-xs">Where work slows down. What's frustrating. What's taking too long. Operational health check.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Communication Effectiveness</h4>
              <p className="text-white/70 text-xs">Are people getting the info they need? Too many meetings? Not enough clarity? Communication audit.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-white text-sm font-medium mb-2">Decision-Making Clarity</h4>
              <p className="text-white/70 text-xs">Do people know who decides what? Are decisions taking too long? Empowerment check.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Why This Matters</h2>
          <div className="card p-6">
            <p className="text-white/80 mb-4">Most culture problems don't appear overnight. They build slowly:</p>
            <ul className="text-white/70 text-sm space-y-2 mb-4">
              <li>• One person frustrated → no big deal</li>
              <li>• Three people frustrated → pattern emerging</li>
              <li>• Whole team frustrated → culture crisis</li>
            </ul>
            <p className="text-white/80">Pulse surveys catch issues at stage 2, before they reach stage 3. Prevention, not crisis management.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Real Example: Design Agency, 10 People</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/90 mb-2 font-medium">Month 1:</p>
            <p className="text-white/70 text-sm mb-4">Satisfaction score: 7.2/10. One comment: "Not sure who to ask for approval on small things."</p>

            <p className="text-white/90 mb-2 font-medium">Month 2:</p>
            <p className="text-white/70 text-sm mb-4">Satisfaction drops to 6.8. Three comments about approval delays. Pattern detected. We flag it.</p>

            <p className="text-white/90 mb-2 font-medium">Action Taken:</p>
            <p className="text-white/70 text-sm mb-4">During quarterly reset, we build decision rights matrix. Clear thresholds documented.</p>

            <p className="text-white/90 mb-2 font-medium">Month 3:</p>
            <p className="text-white/70 text-sm mb-4">Satisfaction back up to 7.8. Comments: "Feels better now that I know what I can decide."</p>

            <p className="text-current-500 text-sm font-medium">Result: Caught and fixed issue before it became turnover risk.</p>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready for Real-Time Team Insights?</h2>
          <p className="text-white/80 mb-6">Monthly Pulse Surveys are included in every Vibe Partnership. Book an intro call to discuss.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

