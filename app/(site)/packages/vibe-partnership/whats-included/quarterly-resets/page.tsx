import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Quarterly Vibe Resets - Vibe Partnership - Vibes Consulting',
  description: 'Deep-dive strategy sessions every 3 months to keep culture and operations healthy as you grow.'
}

export default function QuarterlyResetsPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/packages/vibe-partnership" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to Vibe Partnership
      </Link>

      <h1 className="mb-4">Quarterly Vibe Resets</h1>
      <p className="text-xl text-brand-text/90 mb-8">Deep-dive strategy sessions every 3 months to review what's working, what's slipping, and adjust your systems.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What They Are</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-brand-text/70 mb-4">Every 3 months, we spend 90 minutes together reviewing your culture, operations, and team health. It's like a quarterly check-up for your business's operating system.</p>
            <p className="text-brand-text/70">We track trends, catch issues early, and make proactive adjustments before small problems become big ones.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What We Cover</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Culture & Flow Assessment</h3>
              <p className="text-brand-text/70 text-sm">We review pulse survey data, talk through what's changed since last quarter, and identify emerging patterns. Are rituals still serving you? Is communication still working?</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Ritual Tuning & Optimization</h3>
              <p className="text-brand-text/70 text-sm">What rituals should we keep, tweak, or kill? As your team grows and evolves, what worked at 8 people might not work at 15. We help you adapt.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Priority Setting for Next Quarter</h3>
              <p className="text-brand-text/70 text-sm">Based on data and discussion, we identify the 2-3 highest-leverage improvements for the next 3 months. Clear priorities, not a laundry list.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Leadership Coaching</h3>
              <p className="text-brand-text/70 text-sm">We address leadership challenges: delegation, communication, team dynamics. Real-time coaching on what you're struggling with.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Why Quarterly?</h2>
          <div className="card p-6">
            <p className="text-brand-text/70 mb-3">Quarterly is the sweet spot for continuous improvement:</p>
            <ul className="text-brand-text/70 text-sm space-y-2">
              <li>• <strong>Long enough</strong> to see trends and measure impact</li>
              <li>• <strong>Short enough</strong> to catch problems before they compound</li>
              <li>• <strong>Natural rhythm</strong> that aligns with business planning cycles</li>
              <li>• <strong>Prevents drift</strong> - keeps you intentional as you grow</li>
            </ul>
          </div>
        </section>

        

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready for Continuous Improvement?</h2>
          <p className="text-brand-text/70 mb-6">Quarterly Resets are included in every Vibe Partnership. Book an intro call to discuss.</p>
          <CTAButton>Schedule Intro Call</CTAButton>
        </section>
      </div>
    </div>
  )
}

