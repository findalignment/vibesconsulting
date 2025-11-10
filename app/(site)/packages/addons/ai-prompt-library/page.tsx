import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata = { 
  title: 'AI Prompt Library Add-On - Vibes Consulting',
  description: 'Custom prompt templates for your most common tasks. Stop guessing, start getting consistent AI results. $1,000.'
}

export default function AIPromptLibraryPage() {
  return (
    <div className="pb-20">
      <Link href="/packages" className="text-brand-text/60 hover:text-brand-text text-sm mb-6 inline-block">
        ← Back to Packages
      </Link>

      <header className="mb-12">
        <h1 className="mb-4">AI Prompt Library</h1>
        <p className="text-xl text-brand-text/90 max-w-3xl">Custom prompt templates built for your specific business. Stop experimenting with AI - start getting consistent, high-quality results every time.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">$1,000</div>
          <p className="text-brand-text/70 text-sm">One-time build</p>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">15-20</div>
          <p className="text-brand-text/70 text-sm">Custom prompts</p>
        </div>
        <div className="card p-6">
          <div className="text-3xl font-semibold text-current-500 mb-2">1 week</div>
          <p className="text-brand-text/70 text-sm">Delivery timeline</p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="mb-6">What You Get</h2>
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="text-lg mb-2">15-20 Battle-Tested Prompts</h3>
            <p className="text-brand-text/70 text-sm mb-3">We interview your team, identify repetitive tasks, and build prompts that actually work for your specific business. Not generic templates - tailored to your voice, industry, and needs.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Organized Library Document</h3>
            <p className="text-brand-text/70 text-sm mb-3">Notion page, Google Doc, or your preferred format. Searchable, categorized by use case, with clear instructions for each prompt.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Usage Guidelines</h3>
            <p className="text-brand-text/70 text-sm mb-3">When to use each prompt, how to customize variables, what to review before using output. Makes adoption foolproof.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg mb-2">Training Session (1 hour)</h3>
            <p className="text-brand-text/70 text-sm mb-3">Live walkthrough with your team. Everyone practices using the prompts with real work. Questions answered in real-time.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Common Prompt Categories We Build</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card p-4">
            <h4 className="text-brand-text text-sm font-medium mb-2">Client Communication</h4>
            <ul className="text-brand-text/60 text-xs space-y-1">
              <li>• Proposal drafts</li>
              <li>• Follow-up emails</li>
              <li>• Project update summaries</li>
              <li>• Difficult conversation scripts</li>
            </ul>
          </div>

          <div className="card p-4">
            <h4 className="text-brand-text text-sm font-medium mb-2">Content Creation</h4>
            <ul className="text-brand-text/60 text-xs space-y-1">
              <li>• Social media post variations</li>
              <li>• Blog post outlines</li>
              <li>• Email newsletter drafts</li>
              <li>• Long-form to short-form conversion</li>
            </ul>
          </div>

          <div className="card p-4">
            <h4 className="text-brand-text text-sm font-medium mb-2">Meeting & Documentation</h4>
            <ul className="text-brand-text/60 text-xs space-y-1">
              <li>• Meeting note summaries</li>
              <li>• Action item extraction</li>
              <li>• Project brief templates</li>
              <li>• SOP documentation</li>
            </ul>
          </div>

          <div className="card p-4">
            <h4 className="text-brand-text text-sm font-medium mb-2">Data & Analysis</h4>
            <ul className="text-brand-text/60 text-xs space-y-1">
              <li>• Report generation from data</li>
              <li>• Survey response analysis</li>
              <li>• Trend identification</li>
              <li>• Executive summaries</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">The Process</h2>
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="text-sm font-medium text-current-500 mb-2">Day 1-2: Discovery</h3>
            <p className="text-brand-text/70 text-sm">We interview 3-5 team members (15 min each) to understand your most time-consuming repetitive tasks. We capture your brand voice, tone preferences, and specific use cases.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-sm font-medium text-current-500 mb-2">Day 3-5: Build & Test</h3>
            <p className="text-brand-text/70 text-sm">We create prompts, test them with sample data, refine based on output quality, and organize them into your library document.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-sm font-medium text-current-500 mb-2">Day 6-7: Train & Deliver</h3>
            <p className="text-brand-text/70 text-sm">1-hour training session with your team. We deliver the final library and answer questions. You're ready to use AI consistently.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Why This Matters</h2>
        <div className="card p-6 bg-white/5">
          <p className="text-brand-text/70 mb-4">Most teams waste hours experimenting with AI prompts. "How do I phrase this?" "Why isn't this working?" "The output is inconsistent."</p>
          <p className="text-brand-text/70 mb-4">A custom prompt library eliminates that friction. Your team copies the prompt, fills in variables, gets good output. No guessing. No experimentation.</p>
          <p className="text-brand-text/70">This isn't just convenience - it's how you actually get ROI from AI. Adoption happens when tools are frictionless.</p>
        </div>
      </section>

      <section className="mb-16 card p-6">
        <h2 className="mb-4">Common Questions</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-brand-text font-medium mb-1 text-sm">Can we update the library later?</h4>
            <p className="text-brand-text/70 text-sm">Yes. We deliver it in an editable format. Add your own prompts as you discover new use cases.</p>
          </div>
          <div>
            <h4 className="text-brand-text font-medium mb-1 text-sm">What AI tools do these work with?</h4>
            <p className="text-brand-text/70 text-sm">ChatGPT, Claude, Gemini - any text-based AI. We specify which tool works best for each prompt.</p>
          </div>
          <div>
            <h4 className="text-brand-text font-medium mb-1 text-sm">Is this included in Flow Rebuild?</h4>
            <p className="text-brand-text/70 text-sm">Flow Rebuild includes 5-7 prompts specific to the system we're rebuilding. This add-on gives you 15-20 prompts across your entire business.</p>
          </div>
        </div>
      </section>

      <section className="card p-8 bg-current-600/10 text-center">
        <h2 className="mb-4">Ready to Stop Guessing with AI?</h2>
        <p className="text-brand-text/70 max-w-2xl mx-auto mb-6">Add this to any package or purchase standalone. Book a call to discuss your use cases.</p>
        <CTAButton>Schedule Intro Call</CTAButton>
      </section>
    </div>
  )
}

