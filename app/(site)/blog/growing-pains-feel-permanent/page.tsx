import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'

export const metadata = {
  title: "Growing Pains That Feel Permanent",
  description: "You thought these issues were temporary. But months pass and nothing improves. Growth doesn't fix bad systems."
}

export default function BlogPost() {
  const sections = [
    {
      title: "What AI Actually Does for Small Businesses",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">Forget the hype. Here's what AI is actually good at for small businesses:</p>

          <p><strong className="text-white">Drafting repetitive communications.</strong> Client onboarding emails, follow-ups, proposal templates, FAQ responses. AI can generate first drafts in seconds.</p>

          <p><strong className="text-white">Summarizing information.</strong> Meeting notes, customer feedback, long email threads. AI can extract key points and action items.</p>

          <p><strong className="text-white">Structuring unstructured data.</strong> Voice notes, brainstorms, messy documents. AI can organize chaos into usable formats.</p>

          <p><strong className="text-white">Answering routine questions.</strong> Internal knowledge bases, customer FAQs, policy lookups. AI can serve information faster than humans.</p>

          <p><strong className="text-white">Catching errors.</strong> Proofreading, formatting, data validation. AI spots mistakes humans miss.</p>
        </>
      )
    },
    {
      title: "Where to Start",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">Don't try to automate everything. Start with these high-value, low-risk applications:</p>

          <p><strong className="text-white">1. Email drafting.</strong> Use AI to generate first drafts of common emails. Client onboarding, project updates, follow-ups. You edit before sending, so there's no risk.</p>

          <p><strong className="text-white">2. Meeting summaries.</strong> Record meetings (with permission) and use AI to generate notes and action items. Saves 15-20 minutes per meeting.</p>

          <p><strong className="text-white">3. Knowledge base creation.</strong> Turn your process documents, SOPs, and FAQs into a searchable AI assistant. Your team gets instant answers.</p>

          <p><strong className="text-white">4. Content repurposing.</strong> Take one piece of content and have AI help you create variations for different channels. Blog post becomes social posts, newsletter, etc.</p>

          <p><strong className="text-white">5. Data organization.</strong> Use AI to categorize customer feedback, organize project notes, structure brainstorm sessions.</p>
        </>
      )
    },
    {
      title: "Data Privacy Concerns",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">The biggest objection I hear: "What about our data?"</p>

          <p>Valid concern. Here's how to be safe:</p>

          <ul className="list-disc pl-8 space-y-3 my-6 text-white/80">
            <li><strong className="text-white">Never input client-identifying information</strong> - Remove names, emails, specific details before using AI</li>
            <li><strong className="text-white">Use business-tier services</strong> - Consumer versions often train on your data; business versions don't</li>
            <li><strong className="text-white">Keep sensitive data out</strong> - Financial info, health data, legal documents stay human-processed</li>
            <li><strong className="text-white">Review everything</strong> - AI is a first draft tool, not a final product</li>
            <li><strong className="text-white">Establish clear policies</strong> - Document what can and can't go into AI tools</li>
          </ul>
        </>
      )
    },
    {
      title: "Common Mistakes to Avoid",
      content: (
        <>
<p><strong className="text-white">Starting too big.</strong> Don't try to automate your entire business. Pick one annoying task and automate it well.</p>

          <p><strong className="text-white">Trusting AI blindly.</strong> AI makes mistakes. Always review output before using it.</p>

          <p><strong className="text-white">Skipping training.</strong> Your team needs to know what AI can do and how to use it safely. Don't assume they'll figure it out.</p>

          <p><strong className="text-white">Choosing complexity over simplicity.</strong> The best AI implementations are invisible. Staff uses them naturally, not as "projects."</p>
        </>
      )
    },
    {
      title: "The Reality Check",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">AI won't replace your team. It won't magically fix broken processes. It won't make strategic decisions for you.</p>

          <p>What it will do: eliminate hours of repetitive, low-value work so your team can focus on what actually requires human judgment, creativity, and relationship skills.</p>

          <p>That's where the value is. Not in replacing people, but in freeing them to do better work.</p>
          
          <div className="bg-gradient-to-br from-current-600/20 to-current-800/30 p-8 md:p-10 rounded-xl border border-current-500/20 mt-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-2xl font-bold text-white mb-3">Facing operational challenges?</p>
                <p className="text-white/80 text-lg">Book a Flow Check to diagnose where your systems need help.</p>
              </div>
              <Link 
                href="/packages/flow-check" 
                className="btn btn-primary whitespace-nowrap group"
              >
                Learn about Flow Check
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-8 inline-flex items-center gap-2 hover:gap-3 transition-all">
        <span>←</span> Back to Blog
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-white/60 mb-4">
            <time>September 30, 2024</time>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="text-current-500">AI & Automation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Growing Pains That Feel Permanent</h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed">You thought these issues were temporary. But months pass and nothing improves. Growth doesn't fix bad systems.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">AI feels intimidating. The headlines make it sound like you need a tech team and a huge budget to even start. Meanwhile, your competitors are quietly using AI to eliminate hours of repetitive work.</p>

          <p>The truth? Small businesses are perfect candidates for AI adoption - if you focus on the right problems.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="mt-24 pt-16 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/ai-for-humans" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">AI & Automation</p>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-current-500 transition-colors">Ai For Humans</h4>
                <p className="text-white/70 text-sm">Practical insights on improving your business operations.</p>
              </Link>
              <Link href="/blog/operational-sustainability-efficiency" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">AI & Automation</p>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-current-500 transition-colors">Operational Sustainability Efficiency</h4>
                <p className="text-white/70 text-sm">Learn how to build better systems and reduce friction.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
