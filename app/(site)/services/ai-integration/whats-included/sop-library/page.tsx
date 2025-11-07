import Link from 'next/link'

export const metadata = { title: 'Custom SOP Library + Quick-Start Guide - AI Integration' }

export default function SOPLibraryPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to AI Integration
      </Link>

      <h1 className="mb-4">Custom SOP Library + Quick-Start Guide</h1>
      <p className="text-xl text-white/90 mb-8">Step-by-step documentation so your team knows exactly how to use AI tools safely and effectively.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">What's Included</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Quick-Start Guide (1-Pager)</h3>
              <p className="text-white/70 text-sm mb-3">A visual one-page reference: which AI tool to use for what, basic safety rules, and where to get help.</p>
              <p className="text-white/60 text-xs">Lives on your shared drive, pinned in Slack, or printed and posted. Everyone has easy access.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Tool-Specific SOPs (5-8 documents)</h3>
              <p className="text-white/70 text-sm mb-3">Detailed guides for each AI tool you're adopting. How to log in, how to use it, what not to do, troubleshooting tips.</p>
              <p className="text-white/60 text-xs">Example: "How to Use ChatGPT for Email Drafts (Without Exposing Client Data)"</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Prompt Templates Library</h3>
              <p className="text-white/70 text-sm mb-3">Pre-written AI prompts for your most common tasks. Copy, paste, customize. No need to figure out prompt design from scratch.</p>
              <p className="text-white/60 text-xs">Saves 80% of the learning curve. Your team gets results immediately.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Data Safety Checklist</h3>
              <p className="text-white/70 text-sm mb-3">A simple checklist to run before using AI on any task: "Does this involve client data? If yes, anonymize. If no, proceed."</p>
              <p className="text-white/60 text-xs">Makes compliance automatic. No one has to guess what's safe.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Troubleshooting Guide</h3>
              <p className="text-white/70 text-sm mb-3">Common issues and how to fix them. "AI output sounds robotic - what to do?" "Tool not working - try this."</p>
              <p className="text-white/60 text-xs">Reduces support requests. Empowers team to solve problems independently.</p>
            </div>
          </div>
        </section>

        

        <section>
          <h2 className="mb-4">Prompt Template Library Examples</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Meeting Summarization</h3>
              <p className="text-white/60 text-xs mb-2">Prompt: "Summarize these meeting notes in 5 bullet points. Focus on decisions made and action items."</p>
              <p className="text-white/50 text-xs">Use case: After every team meeting</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Social Media Captions</h3>
              <p className="text-white/60 text-xs mb-2">Prompt: "Write 3 Instagram captions for [PRODUCT/SERVICE]. Tone: casual, engaging, under 150 words."</p>
              <p className="text-white/50 text-xs">Use case: Content planning</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Research Synthesis</h3>
              <p className="text-white/60 text-xs mb-2">Prompt: "Read these 5 articles and extract the 3 most important trends. Format as a brief."</p>
              <p className="text-white/50 text-xs">Use case: Market research</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Proposal Formatting</h3>
              <p className="text-white/60 text-xs mb-2">Prompt: "Take these rough notes and format them into a professional proposal outline."</p>
              <p className="text-white/50 text-xs">Use case: Client proposals</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Format & Access</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg mb-3">Notion or Google Drive</h3>
              <p className="text-white/70 text-sm mb-3">We deliver the SOP library in whatever format your team already uses. Easy to update and share.</p>
              <p className="text-white/60 text-xs">Template structure is clean, searchable, and mobile-friendly.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg mb-3">Editable & Yours Forever</h3>
              <p className="text-white/70 text-sm mb-3">You own all documentation. Add new prompts, update tools, customize to your brand voice.</p>
              <p className="text-white/60 text-xs">Living library that evolves with your needs.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Training Integration</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3">The SOP library pairs with our team training workshops. We teach:</p>
            
            <ul className="space-y-2 text-sm text-white/70">
              <li>• How to use each SOP effectively</li>
              <li>• When to follow the template vs. customize</li>
              <li>• How to troubleshoot common issues</li>
              <li>• How to suggest new prompts/improvements</li>
            </ul>
            
            <p className="text-white/60 text-xs mt-4">Result: Team is confident, compliant, and productive with AI from Day 1.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">ROI Example</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-white/90 font-medium mb-3">Wellness Studio (6-person team)</p>
            
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-white/80 text-sm">Email drafting prompts</span>
                <span className="text-current-500 text-sm font-medium">8 hrs/month saved</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-white/80 text-sm">Social media caption templates</span>
                <span className="text-current-500 text-sm font-medium">4 hrs/month saved</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-white/80 text-sm">Meeting summary automation</span>
                <span className="text-current-500 text-sm font-medium">2 hrs/month saved</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-white/80 text-sm">Onboarding doc generation</span>
                <span className="text-current-500 text-sm font-medium">3 hrs/month saved</span>
              </div>
              <div className="pt-3 border-t border-current-600/20 flex justify-between items-start">
                <span className="text-white font-medium">Total monthly savings</span>
                <span className="text-current-500 font-medium">17 hours</span>
              </div>
            </div>
            
            <p className="text-white/60 text-xs mt-4">That's 200+ hours per year - equivalent to adding a part-time team member without payroll costs.</p>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Included in Flow Rebuild</h2>
          <p className="text-white/80 mb-4">The Custom SOP Library is created as part of our 6-week Flow Rebuild package, along with AI tool implementation and team training.</p>
          <Link href="/packages/flow-rebuild" className="btn btn-primary inline-block">View Flow Rebuild Package</Link>
        </section>
      </div>
    </div>
  )
}

