import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'

export const metadata = {
  title: "What Secret Shopping Reveals About Employee Experience",
  description: "Customer experience reflects employee experience. After 25 years, this pattern never changes."
}

export default function BlogPost() {
  const sections = [
    {
      title: "The Tell-Tale Signs",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">When I walk into a business, I'm watching body language, energy, and how staff interact with each other before I even say hello.</p>

          <p><strong className="text-white">Employees who avoid eye contact.</strong> This isn't shyness. It's exhaustion or disengagement. Staff who feel supported and valued greet customers naturally.</p>

          <p><strong className="text-white">Staff complaining in earshot of customers.</strong> When employees openly vent about policies, schedules, or management, it tells me the feedback loop is broken. They've given up on internal channels.</p>

          <p><strong className="text-white">Confusion about procedures.</strong> When staff hesitate, ask each other questions mid-transaction, or seem unsure of basic processes, it's a training issue - but it's also a morale issue. Nobody likes feeling incompetent at their job.</p>

          <p><strong className="text-white">High energy from some, low energy from others.</strong> Inconsistent engagement across a team usually means favoritism, unclear expectations, or burnout that's not being addressed.</p>
        </>
      )
    },
    {
      title: "What Good Employee Experience Looks Like",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">The businesses that score highest in my evaluations have employees who:</p>

          <ul className="list-disc pl-8 space-y-3 my-6 text-white/80">
            <li><strong className="text-white">Move with purpose</strong> - They're busy but not frantic, efficient but not robotic</li>
            <li><strong className="text-white">Help each other without being asked</strong> - There's natural collaboration, not competition</li>
            <li><strong className="text-white">Speak positively about the business</strong> - Not fake enthusiasm, but genuine pride</li>
            <li><strong className="text-white">Handle problems calmly</strong> - They have the authority and training to fix issues</li>
            <li><strong className="text-white">Greet customers warmly</strong> - It feels authentic because they're not miserable</li>
          </ul>

          <p>These behaviors don't happen by accident. They're the result of good systems, clear communication, proper training, and leadership that actually supports the team.</p>
        </>
      )
    },
    {
      title: "The Broken Systems That Kill Morale",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">I've seen the same morale killers across thousands of evaluations:</p>

          <p><strong className="text-white">Unclear expectations.</strong> Employees don't know what success looks like, so they're always second-guessing themselves. This creates anxiety, not engagement.</p>

          <p><strong className="text-white">No decision-making authority.</strong> Staff have to ask permission for everything, even obvious things. This is exhausting and demoralizing.</p>

          <p><strong className="text-white">Inconsistent enforcement.</strong> Rules apply to some people but not others. Or policies exist but aren't followed. This breeds resentment.</p>

          <p><strong className="text-white">Poor communication from leadership.</strong> Changes happen without explanation. Questions go unanswered. Feedback disappears into a void.</p>

          <p><strong className="text-white">No recognition.</strong> Good work goes unnoticed. Mistakes get immediate attention. Employees learn that effort doesn't matter.</p>
        </>
      )
    },
    {
      title: "The Customer Pays the Price",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">Here's what business owners often miss: you can't hide poor employee experience from customers.</p>

          <p>When staff are frustrated, customers feel it. When processes are unclear, customers experience the confusion. When morale is low, service suffers.</p>

          <p>I've evaluated businesses where the product was excellent but the customer experience was terrible - not because the staff were bad, but because they were operating in a bad system.</p>

          <p>And I've evaluated businesses where the product was average but the customer experience was exceptional - because the employees were happy, trained, and empowered.</p>
        </>
      )
    },
    {
      title: "How to Improve Employee Experience (And Therefore Customer Experience)",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">Based on 25 years of observations, here's what actually works:</p>

          <p><strong className="text-white">1. Clarify expectations.</strong> Every role should have clear responsibilities, standards, and success metrics. Ambiguity creates stress.</p>

          <p><strong className="text-white">2. Train properly.</strong> Don't just show people what to do - explain why it matters and give them time to practice. Confidence comes from competence.</p>

          <p><strong className="text-white">3. Give authority to solve problems.</strong> If you want staff to take ownership, they need the power to make decisions within clear boundaries.</p>

          <p><strong className="text-white">4. Communicate consistently.</strong> Regular updates, clear channels for questions, and actual responses to feedback. Communication can't be one-way.</p>

          <p><strong className="text-white">5. Recognize good work.</strong> Not just with words - with raises, opportunities, and visible appreciation. People notice who gets rewarded.</p>

          <p><strong className="text-white">6. Fix broken processes.</strong> When staff complain about a procedure that doesn't make sense, listen. They're on the front lines and often know better than management.</p>
        </>
      )
    },
    {
      title: "The Pattern Never Changes",
      content: (
        <>
<p className="text-lg leading-relaxed text-white/80">I've evaluated mom-and-pop shops and multi-million dollar operations. The size doesn't matter.</p>

          <p>Businesses that treat employee experience as a priority deliver better customer experiences. Businesses that ignore employee experience struggle with retention, consistency, and quality.</p>

          <p>It's not complicated. You can't build a great customer experience on top of a broken employee experience.</p>

          <p>Fix the foundation first.</p>
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
            <time>October 23, 2024</time>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="text-current-500">Secret Shopping Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">What Secret Shopping Reveals About Employee Experience</h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed">Customer experience reflects employee experience. After 25 years, this pattern never changes.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">After 25 years of secret shopping, I can predict the customer experience before I even interact with staff. How? By watching how employees behave when they think nobody's paying attention.</p>

          <p>Customer experience and employee experience are inseparable. You cannot deliver a great customer experience if your employees are frustrated, confused, or burnt out.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-white mb-2">Want operational insights for your business?</p>
            <p className="text-white/70 text-sm"><Link href="/packages/flow-check">Book a Flow Check</Link> to get an expert evaluation of your systems.</p>
            <Link href="/packages/flow-check" className="text-current-500 hover:underline text-sm">Learn about Flow Check →</Link>
          </div>
        
          <div className="mt-24 pt-16 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/secret-shopper-reveals-training-gaps" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Secret Shopping Insights</p>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-current-500 transition-colors">Secret Shopper Reveals Training Gaps</h4>
                <p className="text-white/70 text-sm">Practical insights on improving your business operations.</p>
              </Link>
              <Link href="/blog/25-years-secret-shopping-operations" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Secret Shopping Insights</p>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-current-500 transition-colors">25 Years Secret Shopping Operations</h4>
                <p className="text-white/70 text-sm">Learn how to build better systems and reduce friction.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
