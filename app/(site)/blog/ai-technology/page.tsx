import Link from 'next/link'
import Section from '@/components/Section'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'AI & Technology for Small Business | Practical AI Integration Guide',
  description: 'Learn how to integrate AI and technology into your small business without the hype. Practical guides for automation, tools, and staying human-centered.',
})

export default function AITechnologyHub() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-text">
            AI & Technology for Small Business
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Cut through the AI hype and learn how to actually use technology to improve your business. Practical guides for automation, tool selection, and maintaining humanity in an increasingly automated world.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-brand-text/80 leading-relaxed mb-6">
            Every business owner is being told they need AI. The hype says it'll revolutionize your business, eliminate entire job categories, and make you obsolete if you don't adopt immediately. The reality is more nuanced. AI and automation are powerful tools—but they're only valuable when applied to the right problems in the right ways.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            The businesses winning with technology aren't the ones implementing the latest tools. They're the ones who understand their processes first, identify where technology actually adds value, and integrate tools in ways that enhance rather than replace human judgment. This guide is about practical technology adoption—not hype, not FOMO, just what actually works for small businesses.
          </p>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            The Technology Adoption Paradox
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            Here's the paradox: businesses with the worst processes are the most eager to adopt new technology. They're drowning in operational chaos and hoping a new tool will fix everything. But technology doesn't fix broken processes—it just automates them faster. If your workflow is inefficient, automating it just means you'll make mistakes at scale.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            The businesses that get value from technology are the ones with clear, documented processes. They know what they're trying to accomplish, they understand their current workflow, and they can articulate exactly what problem a new tool needs to solve. Technology is the accelerant, not the solution.
          </p>

          <div className="bg-brand-accent/5 border-l-4 border-brand-accent p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-brand-text mb-3">
              Signs You're Ready for Technology Adoption:
            </h3>
            <ul className="space-y-2 text-brand-text/80">
              <li>• You have documented, repeatable processes</li>
              <li>• You can clearly articulate what problem needs solving</li>
              <li>• Your team understands current workflows</li>
              <li>• You're willing to change processes to fit the tool</li>
              <li>• You have capacity to learn and implement properly</li>
              <li>• You've identified specific ROI metrics</li>
            </ul>
          </div>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            AI Integration for Real Businesses
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-8">
            AI isn't magic, and it's not going to eliminate the need for human judgment. What it can do is handle repetitive tasks, surface insights from data, and augment human decision-making. But only if you implement it thoughtfully.
          </p>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Understanding AI Realistically</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              Before you implement AI, you need to understand what it actually is, what it can do, and—more importantly—what it can't. The gap between AI marketing and AI reality is enormous.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/ai-for-humans" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">AI for Humans</h4>
                <p className="text-sm text-brand-text/70">Understanding AI without the technical jargon</p>
              </Link>
              
              <Link href="/blog/ai-for-santa-cruz-businesses" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">AI for Small Local Businesses</h4>
                <p className="text-sm text-brand-text/70">Practical AI applications for local companies</p>
              </Link>
              
              <Link href="/blog/data-privacy-ai-local-business" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Data Privacy & AI</h4>
                <p className="text-sm text-brand-text/70">Protecting customer data when using AI tools</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Automation Without Losing Humanity</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              The biggest risk with automation isn't that it'll take your job—it's that it'll make your business feel robotic. Your customers chose you because you're human, personal, and authentic. Automation should enhance that, not eliminate it.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/automation-without-losing-personal-touch" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Automating Without Losing Personality</h4>
                <p className="text-sm text-brand-text/70">How to automate the right things the right way</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Tool Selection & Implementation</h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              The problem isn't lack of tools—it's too many tools. Every business has a graveyard of software they bought, implemented halfway, and eventually abandoned. Successful technology adoption isn't about picking the best tool—it's about implementing the right tool properly.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/too-many-tools-low-adoption" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">Too Many Tools, Low Adoption</h4>
                <p className="text-sm text-brand-text/70">Why your team isn't using the tools you bought</p>
              </Link>
              
              <Link href="/blog/crm-for-non-technical-owners" className="block p-4 border border-brand-neutral rounded-lg hover:border-brand-accent transition-colors">
                <h4 className="font-bold text-brand-text mb-2">CRM for Non-Technical Owners</h4>
                <p className="text-sm text-brand-text/70">Choosing and implementing customer management systems</p>
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            The Human-First Technology Philosophy
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            Technology should serve humans, not the other way around. The best technology implementations are invisible—they fade into the background and just make work easier. When your team is constantly fighting with software, when customers complain about automated systems, when technology creates more work than it saves, you've implemented it wrong.
          </p>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            The goal isn't to automate everything. It's to automate the repetitive, tedious, low-value tasks so humans can focus on judgment, creativity, and relationship-building. Technology should amplify human capability, not replace it. That's the difference between technology that adds value and technology that just adds cost.
          </p>

          <div className="bg-brand-neutral/10 border border-brand-neutral rounded-xl p-8 my-12">
            <h3 className="text-2xl font-bold text-brand-text mb-4">
              Our AI Integration Approach
            </h3>
            <p className="text-brand-text/80 leading-relaxed mb-4">
              We help businesses integrate AI and automation in ways that enhance rather than replace human judgment. Our approach:
            </p>
            <ul className="space-y-3 text-brand-text/80 mb-6">
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">1.</span>
                <span>Understand your current processes before recommending technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">2.</span>
                <span>Identify high-value automation opportunities that save time without losing quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">3.</span>
                <span>Implement gradually, starting with quick wins that build momentum</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">4.</span>
                <span>Train your team so adoption is natural, not forced</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-accent font-bold mr-2">5.</span>
                <span>Measure results and iterate based on actual business impact</span>
              </li>
            </ul>
            <Link href="/services/ai-integration" className="text-brand-accent font-bold hover:text-brand-accent-dark transition-colors">
              Learn more about our AI Integration service →
            </Link>
          </div>

          <h2 className="text-3xl font-extrabold text-brand-text mt-12 mb-6">
            Technology as Competitive Advantage
          </h2>

          <p className="text-brand-text/80 leading-relaxed mb-6">
            The businesses that win with technology aren't the early adopters or the ones with the biggest tech budgets. They're the ones who implement thoughtfully, focus on their specific needs, and use technology to enhance what already makes them special. Technology isn't a strategy—it's a tool. Used well, it's an incredible competitive advantage. Used poorly, it's an expensive distraction.
          </p>
        </div>

        <div className="bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Ready to Integrate AI Thoughtfully?
          </h2>
          <p className="text-brand-text/70 mb-6 max-w-2xl mx-auto">
            We help businesses identify and implement AI and automation in ways that actually add value. No hype, no overselling—just practical technology that solves real problems.
          </p>
          <Link href="/services/ai-integration" className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors">
            Start Your AI Integration
          </Link>
        </div>
      </div>
    </Section>
  )
}

