import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'Consulting Collective Case Study - Vibes Consulting',
  description: 'How we helped a creative consultancy reduce decision-making lag by 40% and cut meetings by 50% through AI-driven workflow mapping.'
}

export default function ConsultingCollectiveCaseStudy() {
  return (
    <div className="pb-20">
      <Link href="/case-studies" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Case Studies
      </Link>

      <header className="mb-12">
        <div className="text-6xl font-bold text-current-500/20 mb-4">02</div>
        <h1 className="mb-4">Consulting Collective</h1>
        <p className="text-xl text-white/90 max-w-3xl">AI Workflow Mapping for Clarity and Cadence</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="card p-6 bg-current-600/10">
          <div className="text-3xl font-semibold text-current-500 mb-2">40%</div>
          <p className="text-white/70 text-sm">Faster decision-making</p>
        </div>
        <div className="card p-6 bg-current-600/10">
          <div className="text-3xl font-semibold text-current-500 mb-2">50%</div>
          <p className="text-white/70 text-sm">Fewer meetings</p>
        </div>
        <div className="card p-6 bg-current-600/10">
          <div className="text-3xl font-semibold text-current-500 mb-2">3 teams</div>
          <p className="text-white/70 text-sm">Clear ownership established</p>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="mb-6">The Problem</h2>
          <div className="card p-8 bg-white/5">
            <p className="text-white/80 mb-4">A small creative consultancy struggled with inconsistent deliverables, unclear ownership, and meeting overload. Internal friction was high, but the leadership team couldn't pinpoint where time or decisions were being lost.</p>
            <p className="text-white/80">Team members knew the system wasn't working, but without visibility into the actual workflows, they couldn't agree on what to fix first.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-6">The Process</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-3">1. AI-Driven Alignment Audit</h3>
              <p className="text-white/70 text-sm">Vibes Consulting ran an "Alignment Audit" using workflow mapping tools and structured interviews. We visualized the client's process in real time, making invisible friction visible to everyone.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">2. AI-Assisted Documentation Rewrite</h3>
              <p className="text-white/70 text-sm">We used GPT-based drafting to rewrite SOPs and client briefs in plain, consistent language. This eliminated ambiguity and gave everyone a shared reference point.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">3. Meeting Cadence Redesign</h3>
              <p className="text-white/70 text-sm">AI-assisted summarization and async brief generators replaced endless status meetings. Information flowed asynchronously, freeing up calendar space for actual collaboration.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">The Outcome</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-3 text-current-500">40% Reduction in Decision-Making Lag</h3>
              <p className="text-white/70 text-sm">Clear decision rights and async communication protocols meant fewer bottlenecks. Decisions happened faster because everyone knew who was empowered to make them.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3 text-current-500">50% Fewer Meetings After Cadence Redesign</h3>
              <p className="text-white/70 text-sm">Status updates moved to async briefs. Meetings were reserved for actual collaboration and decision-making, not information sharing.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3 text-current-500">Clearer Ownership Across Three Project Teams</h3>
              <p className="text-white/70 text-sm">Each team understood their scope, decision authority, and when to escalate. Overlap and confusion were eliminated through clear role definitions.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3 text-current-500">Weekly Rhythm Based on Clarity, Not Chaos</h3>
              <p className="text-white/70 text-sm">Managers gained predictable cadences for planning, execution, and review. Work became rhythmic instead of reactive.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Tools Used</h2>
          <div className="card p-6">
            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-white/80 bg-white/10 px-4 py-2 rounded-full">Miro (process mapping)</span>
              <span className="text-sm text-white/80 bg-white/10 px-4 py-2 rounded-full">Notion AI</span>
              <span className="text-sm text-white/80 bg-white/10 px-4 py-2 rounded-full">ChatGPT (custom agents for SOP drafting)</span>
              <span className="text-sm text-white/80 bg-white/10 px-4 py-2 rounded-full">Loom</span>
              <span className="text-sm text-white/80 bg-white/10 px-4 py-2 rounded-full">Slack API automations</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Key Learnings</h2>
          <div className="card p-8 bg-current-600/10">
            <p className="text-white/90 text-lg mb-4">AI clarity tools aren't about replacing managers - they're about designing a system where everyone sees the same map.</p>
            <p className="text-white/80">Once visibility increases, energy naturally aligns. When everyone can see the workflow, understand decision rights, and access clear documentation, coordination becomes effortless.</p>
          </div>
        </section>

        <section className="card p-8 bg-current-600/10 text-center">
          <h2 className="mb-4">Struggling With Meeting Overload?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">Let's map your workflows and design a cadence that creates clarity instead of chaos.</p>
          <CTAButton>Book Your Flow Check</CTAButton>
        </section>
      </div>
    </div>
  )
}

