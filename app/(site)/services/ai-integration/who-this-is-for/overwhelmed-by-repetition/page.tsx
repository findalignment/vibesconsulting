import Link from 'next/link'

export const metadata = { title: 'Overwhelmed by Repetitive Tasks - AI Integration Service' }

export default function OverwhelmedPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to AI Integration Service
      </Link>

      <h1 className="mb-4">Overwhelmed by Repetitive Tasks</h1>
      <p className="text-xl text-white/90 mb-8">You're spending hours on work that doesn't require deep expertise: email drafts, meeting notes, data entry, research synthesis. AI can handle most of this - and you can supervise it.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Common Time Drains AI Can Fix</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">📧 Email & Communication</h3>
              <ul className="text-white/70 text-xs space-y-1">
                <li>• Drafting responses to routine inquiries</li>
                <li>• Summarizing long email threads</li>
                <li>• Formatting professional messages</li>
                <li>• Writing follow-up sequences</li>
              </ul>
              <p className="text-current-500 text-xs mt-2 font-medium">Save: 3-5 hours/week</p>
            </div>

            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">📄 Documentation & Reports</h3>
              <ul className="text-white/70 text-xs space-y-1">
                <li>• Meeting notes and action items</li>
                <li>• Status reports and updates</li>
                <li>• Client summaries</li>
                <li>• Process documentation</li>
              </ul>
              <p className="text-current-500 text-xs mt-2 font-medium">Save: 2-4 hours/week</p>
            </div>

            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">🔍 Research & Analysis</h3>
              <ul className="text-white/70 text-xs space-y-1">
                <li>• Competitor research</li>
                <li>• Market trend summaries</li>
                <li>• Customer feedback synthesis</li>
                <li>• Data pattern identification</li>
              </ul>
              <p className="text-current-500 text-xs mt-2 font-medium">Save: 2-3 hours/week</p>
            </div>

            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">✍️ Content Creation</h3>
              <ul className="text-white/70 text-xs space-y-1">
                <li>• Social media drafts</li>
                <li>• Blog outlines and first drafts</li>
                <li>• Product descriptions</li>
                <li>• Marketing copy variations</li>
              </ul>
              <p className="text-current-500 text-xs mt-2 font-medium">Save: 3-6 hours/week</p>
            </div>

            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">📊 Data Entry & Formatting</h3>
              <ul className="text-white/70 text-xs space-y-1">
                <li>• Cleaning messy spreadsheets</li>
                <li>• Extracting data from documents</li>
                <li>• Standardizing formats</li>
                <li>• Categorizing information</li>
              </ul>
              <p className="text-current-500 text-xs mt-2 font-medium">Save: 2-4 hours/week</p>
            </div>

            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">🎓 Training & Onboarding</h3>
              <ul className="text-white/70 text-xs space-y-1">
                <li>• Creating FAQs</li>
                <li>• Writing training materials</li>
                <li>• Answering common questions</li>
                <li>• Building knowledge bases</li>
              </ul>
              <p className="text-current-500 text-xs mt-2 font-medium">Save: 1-3 hours/week</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Signs This Service Is Right for You</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ You spend 10+ hours per week on tasks that feel mechanical or repetitive</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ You're constantly behind on emails, documentation, or admin work</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ You hire contractors or VAs for work that AI could do faster and cheaper</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ You avoid tasks you know you should do because they're tedious</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ Your team complains about busywork taking time away from real work</p>
            </div>
          </div>
        </section>

        

        <section>
          <h2 className="mb-4">What We Do for You</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Identify Your Biggest Time Drains</h3>
              <p className="text-white/70 text-sm">We audit where your time goes and rank tasks by automation potential. Not everything should be automated - we focus on the right wins.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2">2. Build Custom AI Workflows</h3>
              <p className="text-white/70 text-sm">We design prompts, templates, and workflows for your specific use cases. You get copy-paste-ready tools, not generic advice.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2">3. Train Your Team</h3>
              <p className="text-white/70 text-sm">We run hands-on workshops so your team knows how to use AI confidently and safely. They'll understand when to trust it and when to double-check.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2">4. Build Safety Protocols</h3>
              <p className="text-white/70 text-sm">We teach you how to use AI without exposing sensitive data, introducing bias, or creating liability.</p>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-white/5">
          <h2 className="mb-4">Typical ROI</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-semibold text-current-500 mb-1">10-20 hrs</p>
              <p className="text-white/70 text-xs">Reclaimed per week</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-current-500 mb-1">60-90 days</p>
              <p className="text-white/70 text-xs">To full adoption</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-semibold text-current-500 mb-1">5-10x</p>
              <p className="text-white/70 text-xs">Return on investment</p>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Automate the Busywork?</h2>
          <p className="text-white/80 mb-4">AI Integration is part of our Flow Rebuild package ($8,000). We identify your highest-value use cases, set up tools, and train your team - all with safety and privacy protocols built in.</p>
          <div className="flex gap-4">
            <Link href="/packages/flow-rebuild" className="btn btn-primary">Learn About Flow Rebuild</Link>
            <Link href="/contact" className="btn btn-ghost">Schedule Intro Call</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

