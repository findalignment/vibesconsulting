import Link from 'next/link'

export const metadata = { title: 'Non-Technical Teams - AI Integration Service' }

export default function NonTechnicalPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to AI Integration Service
      </Link>

      <h1 className="mb-4">Non-Technical Teams</h1>
      <p className="text-xl text-white/90 mb-8">You don't need to understand machine learning, APIs, or Python to use AI effectively. We translate the tech into practical, everyday tools your team can use immediately.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">You Don't Need to Be Technical</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-4">Most small businesses don't have developers, data scientists, or IT departments. That's fine. The AI tools we implement require <strong>zero coding</strong> and work like normal software you already use.</p>
            <p className="text-white/70 text-sm">Think of it like using email: you don't need to understand SMTP protocols to send a message. You just type and click send. AI tools work the same way.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Signs This Service Is Right for You</h2>
          <div className="space-y-3">
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ You don't have a technical background and feel intimidated by AI</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ You've tried AI tools but found them confusing or frustrating</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ You don't want to manage integrations, APIs, or custom code</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ You want simple, point-and-click tools that don't require training manuals</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ You need someone to translate AI jargon into plain language</p>
            </div>
            <div className="card p-4">
              <p className="text-white/80 text-sm">✓ You want hands-on training, not white papers or webinars</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">What "Non-Technical" Means in Practice</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-2 text-current-500">No Coding Required</h3>
              <p className="text-white/70 text-sm">Every tool we implement uses a simple interface. If you can use Google Docs or Excel, you can use these AI tools.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2 text-current-500">No IT Department Needed</h3>
              <p className="text-white/70 text-sm">We handle setup and integration. You don't need to configure servers, manage APIs, or troubleshoot technical issues.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2 text-current-500">Plain Language Training</h3>
              <p className="text-white/70 text-sm">We skip the jargon. You'll learn what to do, not how the algorithm works. Think "driver's ed," not "mechanical engineering."</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg mb-2 text-current-500">Ongoing Support</h3>
              <p className="text-white/70 text-sm">If something breaks or you forget how to do something, we're here to help. No ticketing system, no waiting days for support.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Tools We Typically Use (All No-Code)</h2>
          <div className="space-y-4">
            <div className="card p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-white text-sm font-medium mb-1">ChatGPT (or similar)</h4>
                  <p className="text-white/70 text-xs mb-2">For drafting, research, brainstorming, and problem-solving. Works like a search engine but gives you full responses.</p>
                  <p className="text-white/60 text-xs italic">What you do: Type a question or request. Review the output. Copy-paste what's useful.</p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-white text-sm font-medium mb-1">Otter.ai or Fireflies.ai</h4>
                  <p className="text-white/70 text-xs mb-2">Automatically transcribes meetings and generates action items. Integrates with Zoom/Google Meet.</p>
                  <p className="text-white/60 text-xs italic">What you do: Enable the bot in your meeting. It records, transcribes, and emails you a summary.</p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-white text-sm font-medium mb-1">Notion AI or Mem.ai</h4>
                  <p className="text-white/70 text-xs mb-2">Helps organize notes, generate summaries, and answer questions about your documentation.</p>
                  <p className="text-white/60 text-xs italic">What you do: Highlight text and click "Summarize" or "Make this clearer." The AI rewrites it.</p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-white text-sm font-medium mb-1">Grammarly or Wordtune</h4>
                  <p className="text-white/70 text-xs mb-2">Improves writing tone, grammar, and clarity. Works in email, Google Docs, and most text fields.</p>
                  <p className="text-white/60 text-xs italic">What you do: Write normally. The tool suggests edits. Accept or reject them.</p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-white text-sm font-medium mb-1">Zapier AI</h4>
                  <p className="text-white/70 text-xs mb-2">Automates repetitive tasks between apps (e.g., "When I get an email, summarize it and add it to my to-do list").</p>
                  <p className="text-white/60 text-xs italic">What you do: Describe what you want automated. Zapier builds the workflow. You just turn it on.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How We Teach Your Team</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Hands-On Workshops (Not Lectures)</h3>
              <p className="text-white/70 text-sm mb-3">We don't do PowerPoint presentations. We sit with your team and walk through real use cases step-by-step.</p>
              <div className="text-xs text-white/60">
                <p className="mb-1">Example: Email drafting workshop</p>
                <ul className="pl-3 space-y-1">
                  <li>1. Open ChatGPT</li>
                  <li>2. Paste this prompt template</li>
                  <li>3. Fill in the blanks with your details</li>
                  <li>4. Review the output for tone and accuracy</li>
                  <li>5. Copy-paste into your email client</li>
                </ul>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Custom Prompt Library</h3>
              <p className="text-white/70 text-sm">We build a library of copy-paste prompts for your specific use cases. Your team doesn't need to figure out how to ask AI for help - we give them the exact wording.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Simple SOPs (Standard Operating Procedures)</h3>
              <p className="text-white/70 text-sm">We create 1-page guides for each AI tool: when to use it, how to use it, what to watch out for, and where to get help.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Ongoing Q&A Support</h3>
              <p className="text-white/70 text-sm">After training, your team will have questions. We provide 30-60 days of email support so they can ask anything.</p>
            </div>
          </div>
        </section>

        

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Adopt AI Without the Tech Overwhelm?</h2>
          <p className="text-white/80 mb-4">AI Integration is part of our Flow Rebuild package ($8,000). We handle the setup, train your team in plain language, and provide ongoing support - no technical background required.</p>
          <div className="flex gap-4">
            <Link href="/packages/flow-rebuild" className="btn btn-primary">Learn About Flow Rebuild</Link>
            <Link href="/contact" className="btn btn-ghost">Schedule Intro Call</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

