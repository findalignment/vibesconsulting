import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Training Studio Case Study - Vibes Consulting',
  description: 'How we helped a boutique training studio reclaim 8+ hours weekly through smart automation while improving client retention by 15%.'
}

export default function TrainingStudioCaseStudy() {
  return (
    <div className="pb-20">
      <Link href="/case-studies" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Case Studies
      </Link>

      <header className="mb-12">
        <div className="text-6xl font-bold text-current-500/20 mb-4">01</div>
        <h1 className="mb-4">Training Studio</h1>
        <p className="text-xl text-white/90 max-w-3xl">Streamlining Operations Through Smart Automation</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="card p-6 bg-current-600/10">
          <div className="text-3xl font-semibold text-current-500 mb-2">30%</div>
          <p className="text-white/70 text-sm">Faster onboarding</p>
        </div>
        <div className="card p-6 bg-current-600/10">
          <div className="text-3xl font-semibold text-current-500 mb-2">8+ hours</div>
          <p className="text-white/70 text-sm">Admin time reclaimed weekly</p>
        </div>
        <div className="card p-6 bg-current-600/10">
          <div className="text-3xl font-semibold text-current-500 mb-2">+15%</div>
          <p className="text-white/70 text-sm">Client retention improvement</p>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="mb-6">The Problem</h2>
          <div className="card p-8 bg-white/5">
            <p className="text-white/80 mb-4">A high-performing boutique training studio was losing hours each week on repetitive administrative tasks - onboarding clients, sending reminders, updating spreadsheets, and writing follow-up notes.</p>
            <p className="text-white/80">The owner knew these processes were slowing growth and consuming energy that could be spent coaching. The manual work was necessary but draining, and it was becoming a bottleneck as the client roster grew.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-6">The Process</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-3">1. Systems Audit</h3>
              <p className="text-white/70 text-sm">Vibes Consulting conducted a comprehensive systems audit to map every client touchpoint from initial inquiry through post-session follow-up. We identified which tasks were repetitive, time-consuming, and suitable for automation.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">2. Automation Design</h3>
              <p className="text-white/70 text-sm">We designed lightweight automations using AI-based scheduling tools and custom prompt templates for intake forms, confirmations, and progress summaries. Every automation was built to maintain the studio's brand voice and personal touch.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">3. Implementation & Training</h3>
              <p className="text-white/70 text-sm">Every communication touchpoint became structured, personalized, and consistent. The owner was trained on managing and refining the automations, ensuring they could adapt as the business evolved.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">The Outcome</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-3 text-current-500">Onboarding Time Reduced by 30%</h3>
              <p className="text-white/70 text-sm">Automated intake forms and scheduling eliminated back-and-forth emails. New clients could get started faster with less manual coordination.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3 text-current-500">8+ Admin Hours Reclaimed Weekly</h3>
              <p className="text-white/70 text-sm">The owner regained time previously spent on spreadsheet updates, reminder emails, and follow-up note writing. This time was redirected to coaching and business development.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3 text-current-500">Client Retention Improved by 15%</h3>
              <p className="text-white/70 text-sm">Consistent, timely follow-through made clients feel more supported. Progress summaries and check-ins happened reliably instead of when time allowed.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3 text-current-500">No Loss of Personal Touch</h3>
              <p className="text-white/70 text-sm">AI was carefully tuned to the brand's voice and coaching style. Clients received personalized communication that felt human, not robotic.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Tools Used</h2>
          <div className="card p-6">
            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-white/80 bg-white/10 px-4 py-2 rounded-full">ChatGPT (custom prompt library)</span>
              <span className="text-sm text-white/80 bg-white/10 px-4 py-2 rounded-full">Zapier</span>
              <span className="text-sm text-white/80 bg-white/10 px-4 py-2 rounded-full">Wix Automations</span>
              <span className="text-sm text-white/80 bg-white/10 px-4 py-2 rounded-full">Airtable</span>
              <span className="text-sm text-white/80 bg-white/10 px-4 py-2 rounded-full">Google Workspace</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Key Learnings</h2>
          <div className="card p-8 bg-current-600/10">
            <p className="text-white/90 text-lg mb-4">The most effective automations are invisible.</p>
            <p className="text-white/80">When implemented correctly, AI becomes an extension of the brand's personality - amplifying human connection rather than replacing it. The goal isn't to remove the personal touch, but to ensure it happens consistently and reliably.</p>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Ready to Reclaim Your Time?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">Let's identify where automation can free up your hours for the work that actually matters.</p>
          <CTAButton>Book Your Flow Check</CTAButton>
        </section>
      </div>
    </div>
  )
}

