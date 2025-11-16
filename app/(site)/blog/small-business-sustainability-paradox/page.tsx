import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'

export const metadata = {
  title: "The Small Business Sustainability Paradox",
  description: "You care about the environment. But your business operations are unsustainable. How to fix both."
}

export default function BlogPost() {
  const sections = [
    {
      title: "What AI Actually Does for Small Businesses",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Forget the hype. Here's what AI is actually good at for small businesses:</p>

          <p><strong className="text-brand-text">Drafting repetitive communications.</strong> Client onboarding emails, follow-ups, proposal templates, FAQ responses. AI can generate first drafts in seconds.</p>

          <p><strong className="text-brand-text">Summarizing information.</strong> Meeting notes, customer feedback, long email threads. AI can extract key points and action items.</p>

          <p><strong className="text-brand-text">Structuring unstructured data.</strong> Voice notes, brainstorms, messy documents. AI can organize chaos into usable formats.</p>

          <p><strong className="text-brand-text">Answering routine questions.</strong> Internal knowledge bases, customer FAQs, policy lookups. AI can serve information faster than humans.</p>

          <p><strong className="text-brand-text">Catching errors.</strong> Proofreading, formatting, data validation. AI spots mistakes humans miss.</p>
        </>
      )
    },
    {
      title: "Where to Start",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Don't try to automate everything. Start with these high-value, low-risk applications:</p>

          <p><strong className="text-brand-text">1. Email drafting.</strong> Use AI to generate first drafts of common emails. Client onboarding, project updates, follow-ups. You edit before sending, so there's no risk.</p>

          <p><strong className="text-brand-text">2. Meeting summaries.</strong> Record meetings (with permission) and use AI to generate notes and action items. Saves 15-20 minutes per meeting.</p>

          <p><strong className="text-brand-text">3. Knowledge base creation.</strong> Turn your process documents, SOPs, and FAQs into a searchable AI assistant. Your team gets instant answers.</p>

          <p><strong className="text-brand-text">4. Content repurposing.</strong> Take one piece of content and have AI help you create variations for different channels. Blog post becomes social posts, newsletter, etc.</p>

          <p><strong className="text-brand-text">5. Data organization.</strong> Use AI to categorize customer feedback, organize project notes, structure brainstorm sessions.</p>
        </>
      )
    },
    {
      title: "Data Privacy Concerns",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">The biggest objection I hear: "What about our data?"</p>

          <p>Valid concern. Here's how to be safe:</p>

          <ul className="list-disc pl-8 space-y-3 my-6 text-brand-text/70">
            <li><strong className="text-brand-text">Never input client-identifying information</strong> - Remove names, emails, specific details before using AI</li>
            <li><strong className="text-brand-text">Use business-tier services</strong> - Consumer versions often train on your data; business versions don't</li>
            <li><strong className="text-brand-text">Keep sensitive data out</strong> - Financial info, health data, legal documents stay human-processed</li>
            <li><strong className="text-brand-text">Review everything</strong> - AI is a first draft tool, not a final product</li>
            <li><strong className="text-brand-text">Establish clear policies</strong> - Document what can and can't go into AI tools</li>
          </ul>
        </>
      )
    },
    {
      title: "Common Mistakes to Avoid",
      content: (
        <>
<p><strong className="text-brand-text">Starting too big.</strong> Don't try to automate your entire business. Pick one annoying task and automate it well.</p>

          <p><strong className="text-brand-text">Trusting AI blindly.</strong> AI makes mistakes. Always review output before using it.</p>

          <p><strong className="text-brand-text">Skipping training.</strong> Your team needs to know what AI can do and how to use it safely. Don't assume they'll figure it out.</p>

          <p><strong className="text-brand-text">Choosing complexity over simplicity.</strong> The best AI implementations are invisible. Staff uses them naturally, not as "projects."</p>
        </>
      )
    },
    {
      title: "The Reality Check",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">AI won't replace your team. It won't magically fix broken processes. It won't make strategic decisions for you.</p>

          <p>What it will do: eliminate hours of repetitive, low-value work so your team can focus on what actually requires human judgment, creativity, and relationship skills.</p>

          <p>That's where the value is. Not in replacing people, but in freeing them to do better work.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Link href="/blog" className="text-brand-text/60 hover:text-brand-text text-sm mb-8 inline-flex items-center gap-2 hover:gap-3 transition-all">
        <span>←</span> Back to Blog
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>March 18, 2025</time>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="text-current-500">AI & Automation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">The Small Business Sustainability Paradox</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">You care about the environment. But your business operations are unsustainable. How to fix both.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">AI feels intimidating. The headlines make it sound like you need a tech team and a huge budget to even start. Meanwhile, your competitors are quietly using AI to eliminate hours of repetitive work.</p>

          <p>The truth? Small businesses are perfect candidates for AI adoption - if you focus on the right problems.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Want operational insights for your business?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/packages/flow-check">Book a Flow Check</Link> to get an expert evaluation of your systems.</p>
            <Link href="/packages/flow-check" className="text-current-500 hover:underline text-sm">Learn about Flow Check →</Link>
          </div>
        
          <div className="mt-24 pt-16 border-t border-white/10">
            <h3 className="text-2xl font-bold text-brand-text mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/data-privacy-ai-local-business" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">AI & Automation</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Data Privacy Ai Local Business</h4>
                <p className="text-brand-text/70 text-sm">Practical insights on improving your business operations.</p>
              </Link>
              <Link href="/blog/growing-pains-feel-permanent" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">AI & Automation</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Growing Pains Feel Permanent</h4>
                <p className="text-brand-text/70 text-sm">Learn how to build better systems and reduce friction.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
