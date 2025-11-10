import Link from 'next/link'

export const metadata = { title: 'AI-Curious Teams - AI Integration Service' }

export default function AICuriousPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to AI Integration Service
      </Link>

      <h1 className="mb-4">AI-Curious Teams</h1>
      <p className="text-xl text-brand-text/90 mb-8">You've heard about AI, maybe even tried ChatGPT. But you don't know how to adopt it safely, responsibly, or effectively. We help you move from curiosity to confident use.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">You Know AI Could Help, But...</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4 bg-white/5">
              <p className="text-brand-text/70 text-sm">❓ "Where do we even start?"</p>
            </div>
            <div className="card p-4 bg-white/5">
              <p className="text-brand-text/70 text-sm">🔒 "What about client data privacy?"</p>
            </div>
            <div className="card p-4 bg-white/5">
              <p className="text-brand-text/70 text-sm">⚠️ "How do we use it without introducing errors?"</p>
            </div>
            <div className="card p-4 bg-white/5">
              <p className="text-brand-text/70 text-sm">💸 "Is it worth the investment?"</p>
            </div>
            <div className="card p-4 bg-white/5">
              <p className="text-brand-text/70 text-sm">👥 "Will my team actually use it?"</p>
            </div>
            <div className="card p-4 bg-white/5">
              <p className="text-brand-text/70 text-sm">📊 "Which tools are actually useful vs. hype?"</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Signs This Service Is Right for You</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <p className="text-brand-text/70 text-sm">✓ You've experimented with ChatGPT personally but don't have a team-wide strategy</p>
            </div>
            <div className="card p-4">
              <p className="text-brand-text/70 text-sm">✓ You're drowning in repetitive tasks (email drafting, data entry, research, scheduling)</p>
            </div>
            <div className="card p-4">
              <p className="text-brand-text/70 text-sm">✓ You're concerned about data privacy and want to adopt AI safely</p>
            </div>
            <div className="card p-4">
              <p className="text-brand-text/70 text-sm">✓ You don't have technical expertise but want practical, usable AI tools</p>
            </div>
            <div className="card p-4">
              <p className="text-brand-text/70 text-sm">✓ You want to train your team on AI, not just implement tools</p>
            </div>
            <div className="card p-4">
              <p className="text-brand-text/70 text-sm">✓ You're skeptical of AI hype but open to low-risk wins</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What We Help You Achieve</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-2 text-current-500">Safe Adoption</h3>
              <p className="text-brand-text/70 text-sm">You'll understand how to use AI without exposing client data, introducing bias, or creating compliance risk.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2 text-current-500">Team Confidence</h3>
              <p className="text-brand-text/70 text-sm">Your team will know when to use AI, how to prompt effectively, and when to rely on human judgment.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2 text-current-500">Practical Wins</h3>
              <p className="text-brand-text/70 text-sm">You'll save 5-10 hours per week on repetitive tasks: drafting, research, data formatting, meeting notes.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2 text-current-500">Future-Proof Skills</h3>
              <p className="text-brand-text/70 text-sm">You'll build internal AI literacy so your team can keep evolving their use as tools improve.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Example Use Cases</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h4 className="text-brand-text font-medium mb-2 text-sm">Wellness Studio Owner</h4>
              <p className="text-brand-text/70 text-xs mb-2">Uses AI to draft class descriptions, respond to FAQs, and generate social media content. Saves 8 hours per week.</p>
              <p className="text-brand-text/60 text-xs italic">Privacy concern: Never inputs client names or health data into public AI tools.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-brand-text font-medium mb-2 text-sm">Design Agency Lead</h4>
              <p className="text-brand-text/70 text-xs mb-2">Uses AI to synthesize client feedback, draft project proposals, and create meeting agendas. Frees up 10 hours per week for creative work.</p>
              <p className="text-brand-text/60 text-xs italic">Privacy concern: Only uses AI for non-confidential work; never uploads client files.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-brand-text font-medium mb-2 text-sm">Retail Owner</h4>
              <p className="text-brand-text/70 text-xs mb-2">Uses AI to write product descriptions, respond to customer emails, and analyze sales trends. Improves response time and inventory planning.</p>
              <p className="text-brand-text/60 text-xs italic">Privacy concern: Uses anonymized data for trend analysis; never inputs PII.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Common Hesitations (And Why They're Valid)</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-1">"I don't understand the technology"</h4>
              <p className="text-brand-text/70 text-xs">You don't need to. We teach you how to use it, not how to build it. Think of it like driving a car - you don't need to know how the engine works.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-1">"What if it makes mistakes?"</h4>
              <p className="text-brand-text/70 text-xs">It will. That's why we train your team to review AI output, not trust it blindly. We build review processes into every use case.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-1">"I'm worried about data privacy"</h4>
              <p className="text-brand-text/70 text-xs">Good. We are too. That's why we teach you how to anonymize data, use private tools, and know when NOT to use AI.</p>
            </div>
            <div className="card p-4">
              <h4 className="text-brand-text text-sm font-medium mb-1">"My team will resist this"</h4>
              <p className="text-brand-text/70 text-xs">Change is hard. That's why we run hands-on training, show practical wins, and address fears directly. Adoption is part of our process.</p>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Adopt AI Safely?</h2>
          <p className="text-brand-text/70 mb-4">AI Integration is part of our Flow Rebuild package ($8,000). We help you identify use cases, implement tools, and train your team - all with data privacy baked in.</p>
          <div className="flex gap-4">
            <Link href="/packages/flow-rebuild" className="btn btn-primary">Learn About Flow Rebuild</Link>
            <Link href="/contact" className="btn btn-ghost">Schedule Intro Call</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

