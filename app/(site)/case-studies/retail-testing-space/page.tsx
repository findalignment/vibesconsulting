import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Retail + Testing Space Case Study - Vibes Consulting',
  description: 'How we helped a hybrid retail and testing space increase NPS by 18 points in 45 days through AI-integrated workflow automation.'
}

export default function RetailTestingSpaceCaseStudy() {
  return (
    <div className="pb-20">
      <Link href="/case-studies" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to Case Studies
      </Link>

      <header className="mb-12">
        <div className="text-6xl font-bold text-current-500/20 mb-4">03</div>
        <h1 className="mb-4">Retail + Testing Space</h1>
        <p className="text-xl text-brand-text/90 max-w-3xl">Integrating AI to Sync CRM, Scheduling, and Analytics</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="card p-6 bg-current-600/10">
          <div className="text-3xl font-semibold text-current-500 mb-2">+18</div>
          <p className="text-brand-text/70 text-sm">NPS improvement in 45 days</p>
        </div>
        <div className="card p-6 bg-current-600/10">
          <div className="text-3xl font-semibold text-current-500 mb-2">90%</div>
          <p className="text-brand-text/70 text-sm">Fewer data entry errors</p>
        </div>
        <div className="card p-6 bg-current-600/10">
          <div className="text-3xl font-semibold text-current-500 mb-2">Same-day</div>
          <p className="text-brand-text/70 text-sm">Client follow-ups</p>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="mb-6">The Problem</h2>
          <div className="card p-8 bg-white/5">
            <p className="text-brand-text/70 mb-4">A hybrid retail and performance testing space ran multiple disconnected platforms: a CRM for clients, a booking app for appointments, and spreadsheets for metrics. Staff spent hours syncing data manually and writing follow-ups.</p>
            <p className="text-brand-text/70">Worse, they were missing critical retention signals. Clients who were drifting away went unnoticed until they'd already cancelled, and there was no systematic way to identify trends or patterns.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-6">The Process</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-3">1. Platform Integration Design</h3>
              <p className="text-brand-text/70 text-sm">Vibes Consulting built an AI-integrated workflow that merged data from each platform into a live dashboard. No more manual data entry or syncing between systems.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">2. Automated Client Communication</h3>
              <p className="text-brand-text/70 text-sm">GPT-based scripts handled client check-ins, summarized feedback, and generated personalized follow-ups. Every client received timely, relevant communication automatically.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">3. Predictive Analytics Implementation</h3>
              <p className="text-brand-text/70 text-sm">AI generated trend insights automatically, showing the team exactly who was engaging, who was drifting, and what was working. Retention became proactive instead of reactive.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">The Outcome</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-3 text-current-500">NPS +18 in 45 Days</h3>
              <p className="text-brand-text/70 text-sm">Consistent follow-ups and proactive outreach made clients feel valued and supported. Response times improved dramatically, and issues were addressed before they escalated.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3 text-current-500">90% Fewer Manual Data Entry Errors</h3>
              <p className="text-brand-text/70 text-sm">Automated data syncing eliminated human error. Information flowed seamlessly between platforms, always accurate and up-to-date.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3 text-current-500">Consistent, Same-Day Client Follow-Ups</h3>
              <p className="text-brand-text/70 text-sm">No client fell through the cracks. Every session, booking, or inquiry received timely follow-up, creating a professional and attentive experience.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3 text-current-500">Better Insight Into Churn and Sales Trends</h3>
              <p className="text-brand-text/70 text-sm">The dashboard revealed patterns in member engagement, allowing the team to intervene before cancellations and double down on what was driving sales.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Tools Used</h2>
          <div className="card p-6">
            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-brand-text/70 bg-white/10 px-4 py-2 rounded-full">OpenAI API</span>
              <span className="text-sm text-brand-text/70 bg-white/10 px-4 py-2 rounded-full">Make (Integromat)</span>
              <span className="text-sm text-brand-text/70 bg-white/10 px-4 py-2 rounded-full">Airtable</span>
              <span className="text-sm text-brand-text/70 bg-white/10 px-4 py-2 rounded-full">Calendly</span>
              <span className="text-sm text-brand-text/70 bg-white/10 px-4 py-2 rounded-full">HubSpot CRM</span>
              <span className="text-sm text-brand-text/70 bg-white/10 px-4 py-2 rounded-full">Custom AI prompt frameworks</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Key Learnings</h2>
          <div className="card p-8 bg-current-600/10">
            <p className="text-brand-text/90 text-lg mb-4">AI systems work best when they talk to each other.</p>
            <p className="text-brand-text/70">The real magic isn't the automation - it's in designing flow that feels natural, reliable, and human on the front end. When platforms integrate seamlessly, the client experience becomes effortless, and staff can focus on high-value interactions instead of administrative tasks.</p>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Dealing With Disconnected Systems?</h2>
          <p className="text-brand-text/70 max-w-2xl mx-auto mb-6">Let's integrate your platforms so data flows automatically and you can focus on serving clients.</p>
          <CTAButton>Book Your Flow Check</CTAButton>
        </section>
      </div>
    </div>
  )
}

