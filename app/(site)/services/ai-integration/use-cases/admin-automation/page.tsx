import Link from 'next/link'

export const metadata = { title: 'Admin Task Automation - AI Use Case' }

export default function AdminAutomationPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to AI Integration
      </Link>

      <h1 className="mb-4">Admin Task Automation</h1>
      <p className="text-xl text-brand-text/90 mb-8">Automate scheduling, data entry, document formatting, and other repetitive admin work.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Common Applications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Meeting Scheduling</h3>
              <p className="text-brand-text/70 text-xs">AI tools like Calendly + ChatGPT can draft scheduling messages, suggest times, handle rescheduling.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Meeting Transcription & Notes</h3>
              <p className="text-brand-text/70 text-xs">Tools like Otter.ai or Fireflies auto-transcribe meetings and generate summaries. No more manual note-taking.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Data Entry & Extraction</h3>
              <p className="text-brand-text/70 text-xs">AI extracts data from PDFs, invoices, forms and populates spreadsheets. Reduces manual copy-paste by 80%.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Document Formatting</h3>
              <p className="text-brand-text/70 text-xs">Turn rough notes into polished documents. AI handles headers, bullets, spacing, professional layout.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Email Sorting & Prioritization</h3>
              <p className="text-brand-text/70 text-xs">AI filters inbox, flags urgent items, drafts responses to common questions.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-brand-text text-sm font-medium mb-2">Expense Categorization</h3>
              <p className="text-brand-text/70 text-xs">AI reads receipts, categorizes expenses, flags anomalies. Bookkeeping becomes semi-automated.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Identify Repetitive Tasks</h3>
              <p className="text-brand-text/70 text-sm mb-3">We audit your team's admin work. What gets done daily? What follows a pattern? What's copy-paste heavy?</p>
              <p className="text-brand-text/60 text-xs">Example: "We spend 2 hours/week copying invoice data into our accounting spreadsheet."</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">2. Match Task to Tool</h3>
              <p className="text-brand-text/70 text-sm mb-3">We recommend the right AI tool for each task. Some need specialized tools, others just need ChatGPT.</p>
              <p className="text-brand-text/60 text-xs">Example: Meeting notes → Otter.ai. Invoice data entry → Docparser or ChatGPT with OCR.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">3. Set Up Automation</h3>
              <p className="text-brand-text/70 text-sm mb-3">We configure the tool, create templates, and build simple workflows. Often using Zapier or Make to connect systems.</p>
              <p className="text-brand-text/60 text-xs">Example: Invoice arrives → AI extracts data → Auto-populates spreadsheet → Notifies bookkeeper.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">4. Train Team & Monitor</h3>
              <p className="text-brand-text/70 text-sm mb-3">We teach your team how to use the automation. Monitor for 2-3 weeks to catch edge cases and refine.</p>
              <p className="text-brand-text/60 text-xs">After initial adjustment, automation runs in background with minimal intervention.</p>
            </div>
          </div>
        </section>

        

        <section>
          <h2 className="mb-4">Tools We Recommend</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Otter.ai (Meeting Transcription)</h3>
              <p className="text-brand-text/70 text-sm mb-2">Records, transcribes, and summarizes meetings in real-time. Integrates with Zoom, Google Meet.</p>
              <p className="text-brand-text/60 text-xs"><strong>Cost:</strong> Free tier available, Pro at $17/month</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Zapier or Make (Workflow Automation)</h3>
              <p className="text-brand-text/70 text-sm mb-2">Connects different apps and automates repetitive workflows without coding.</p>
              <p className="text-brand-text/60 text-xs"><strong>Cost:</strong> Starting at $20/month</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">ChatGPT + Plugins (Data Processing)</h3>
              <p className="text-brand-text/70 text-sm mb-2">Can read PDFs, extract data, format documents, and more with the right prompts.</p>
              <p className="text-brand-text/60 text-xs"><strong>Cost:</strong> ChatGPT Plus at $20/month</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Calendly (Scheduling)</h3>
              <p className="text-brand-text/70 text-sm mb-2">Automated scheduling with AI-powered features. Eliminates back-and-forth email ping-pong.</p>
              <p className="text-brand-text/60 text-xs"><strong>Cost:</strong> Free tier available, Standard at $12/month</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Safety Considerations</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-brand-text/70 mb-3">Admin automation is generally low-risk, but watch for:</p>
            
            <ul className="space-y-2 text-sm text-brand-text/70">
              <li>• <strong>Sensitive data exposure.</strong> Don't upload confidential documents to public AI tools. Use enterprise versions with data protection.</li>
              <li>• <strong>Accuracy checks.</strong> AI can misread handwriting or complex formats. Always spot-check automated data entry.</li>
              <li>• <strong>Over-automation.</strong> Some tasks need human judgment. Don't automate decisions, only repetitive processing.</li>
              <li>• <strong>Tool reliability.</strong> Have backup processes if automation fails. Don't be 100% dependent on AI tools.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Expected Time Savings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">70-90%</div>
              <p className="text-brand-text text-sm font-medium mb-1">Time Reduction</p>
              <p className="text-brand-text/60 text-xs">Admin tasks that are highly repetitive see massive savings</p>
            </div>
            
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">8-12</div>
              <p className="text-brand-text text-sm font-medium mb-1">Hours/Week Saved</p>
              <p className="text-brand-text/60 text-xs">Per admin role, depending on task mix</p>
            </div>
            
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">$15-30k</div>
              <p className="text-brand-text text-sm font-medium mb-1">Annual Value</p>
              <p className="text-brand-text/60 text-xs">In reclaimed time or avoided hiring costs</p>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Automate Admin Work?</h2>
          <p className="text-brand-text/70 mb-4">We identify your highest-impact automation opportunities and implement them safely. Part of our AI Integration service.</p>
          <Link href="/packages/flow-rebuild" className="btn btn-primary inline-block">Explore AI Integration</Link>
        </section>
      </div>
    </div>
  )
}

