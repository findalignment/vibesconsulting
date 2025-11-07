import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'

export const metadata = {
  title: "Frequently Asked Questions - Vibes Consulting",
  description: "Common questions about our business operations consulting services, packages, pricing, and process for Santa Cruz businesses."
}

export default function FAQPage() {
  const generalQuestions = [
    {
      title: "What exactly does Vibes Consulting do?",
      content: (
        <>
          <p>We help small businesses remove operational friction and build sustainable systems. That means:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/80 my-4">
            <li>Identifying where work gets stuck or duplicated</li>
            <li>Designing processes that actually work for your team</li>
            <li>Implementing AI tools safely and practically</li>
            <li>Building cultures that support flow instead of burnout</li>
          </ul>
          <p>We don't do generic consulting. We work hands-on with your team to design and implement systems that fit how you actually work.</p>
        </>
      )
    },
    {
      title: "Who do you work with?",
      content: (
        <>
          <p>We work best with:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/80 my-4">
            <li><strong className="text-white">Small businesses (5-20 people)</strong> that have outgrown informal systems</li>
            <li><strong className="text-white">Service-based businesses</strong> (consulting, creative, wellness, fitness, professional services)</li>
            <li><strong className="text-white">Founders who are the bottleneck</strong> and want to build a business that runs without them</li>
            <li><strong className="text-white">Teams that care about culture</strong> and want sustainable growth, not chaos</li>
          </ul>
          <p>Most of our clients are in Santa Cruz County, but we work remotely with businesses anywhere.</p>
        </>
      )
    },
    {
      title: "How is this different from other consultants?",
      content: (
        <>
          <p>Three big differences:</p>
          <p><strong className="text-white">1. We implement, not just advise.</strong> Most consultants give you a deck and leave. We stay until it's working.</p>
          <p><strong className="text-white">2. We design for how you actually work.</strong> No corporate frameworks that don't fit small businesses. Everything is tailored to your size and style.</p>
          <p><strong className="text-white">3. We focus on flow, not just efficiency.</strong> We care about whether people can do their best work, not just whether they're "productive."</p>
        </>
      )
    },
    {
      title: "Do you work remotely or in-person?",
      content: (
        <>
          <p>Both. For Santa Cruz County clients, we can do in-person kickoffs and workshops. For everyone else (or if you prefer), we work entirely remotely via Zoom, Loom, and async collaboration.</p>
          <p>Most of our work happens async anyway-we observe your workflows, interview your team, and design systems that work for you. We don't need to be in your office every day to do that well.</p>
        </>
      )
    }
  ]

  const pricingQuestions = [
    {
      title: "How much does this cost?",
      content: (
        <>
          <p>Our packages range from $1,500 to $12,000 depending on scope:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/80 my-4">
            <li><strong className="text-white">Flow Check:</strong> $1,500 - 3-week operational audit</li>
            <li><strong className="text-white">Flow Rebuild:</strong> $8,500 - 8-week implementation project</li>
            <li><strong className="text-white">Vibe Partnership:</strong> $12,000 - 12-week full transformation</li>
            <li><strong className="text-white">Add-ons:</strong> $750-$2,500 (AI Prompt Library, Meeting OS, etc.)</li>
          </ul>
          <p>For ongoing services (Business Flow, AI Integration, Culture Optimization), we typically work on 3-6 month engagements starting around $3k/month.</p>
          <p><Link href="/packages" className="text-current-500 hover:underline">See all packages and pricing →</Link></p>
        </>
      )
    },
    {
      title: "Do you offer payment plans?",
      content: (
        <>
          <p>Yes. For packages over $5,000, we can split payments into milestones. For example:</p>
          <p>50% upfront, 50% at midpoint or completion.</p>
          <p>We're a small business too. We get it. Let's talk about what works for your cash flow.</p>
        </>
      )
    },
    {
      title: "What's included in the price?",
      content: (
        <>
          <p>Everything you need to implement and sustain the changes. That typically includes:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/80 my-4">
            <li>Initial discovery and audit</li>
            <li>Process design and documentation</li>
            <li>Team training and coaching</li>
            <li>Implementation support</li>
            <li>Templates, frameworks, and tools</li>
            <li>Follow-up check-ins</li>
          </ul>
          <p>No surprise fees. No hourly billing creep. Fixed scope, fixed price.</p>
        </>
      )
    },
    {
      title: "Do you work hourly?",
      content: (
        <>
          <p>No. We only do project-based or retainer work.</p>
          <p>Hourly billing creates bad incentives. We'd rather agree on outcomes upfront and work as efficiently as possible to get you there.</p>
          <p>If your needs don't fit a package, we can design a custom project scope with a fixed price.</p>
        </>
      )
    }
  ]

  const processQuestions = [
    {
      title: "How long does an engagement take?",
      content: (
        <>
          <p>Depends on the package:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/80 my-4">
            <li><strong className="text-white">Flow Check:</strong> 3 weeks (audit only, no implementation)</li>
            <li><strong className="text-white">Flow Rebuild:</strong> 8 weeks (design + implementation)</li>
            <li><strong className="text-white">Vibe Partnership:</strong> 12 weeks (full transformation)</li>
            <li><strong className="text-white">Ongoing services:</strong> 3-6 month engagements</li>
          </ul>
          <p>Most of this is async work on your end-interviews, feedback, testing. We're not in your way.</p>
        </>
      )
    },
    {
      title: "What's the first step?",
      content: (
        <>
          <p>Book a 20-minute intro call. We'll discuss:</p>
          <ol className="list-decimal pl-6 space-y-2 text-white/80 my-4">
            <li>What's not working in your operations</li>
            <li>What you've already tried</li>
            <li>Whether we're a good fit</li>
            <li>Which package or service makes sense</li>
          </ol>
          <p>No pressure, no sales pitch. If we're not the right fit, we'll tell you and point you in a better direction.</p>
          <p><Link href="/contact" className="text-current-500 hover:underline">Schedule intro call →</Link></p>
        </>
      )
    },
    {
      title: "How much of my team's time does this require?",
      content: (
        <>
          <p>Less than you think. Most work happens async:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/80 my-4">
            <li><strong className="text-white">Discovery:</strong> 30-60 min interviews with key people</li>
            <li><strong className="text-white">Feedback rounds:</strong> Review our recommendations (async)</li>
            <li><strong className="text-white">Implementation:</strong> Training sessions (1-2 hours total)</li>
            <li><strong className="text-white">Check-ins:</strong> Weekly 15-30 min syncs</li>
          </ul>
          <p>We're designed for busy teams. You won't be stuck in endless workshops.</p>
        </>
      )
    },
    {
      title: "What happens after the project ends?",
      content: (
        <>
          <p>You keep everything we built: documentation, templates, systems, training materials. It's all yours.</p>
          <p>Most clients continue with:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/80 my-4">
            <li><strong className="text-white">Ongoing support:</strong> Monthly retainer for coaching and optimization</li>
            <li><strong className="text-white">Implementation help:</strong> We stay until it sticks</li>
            <li><strong className="text-white">Quarterly check-ins:</strong> Make sure things are still working</li>
          </ul>
          <p>But there's no obligation. If you're set, you're set.</p>
        </>
      )
    }
  ]

  const serviceQuestions = [
    {
      title: "Can you help us implement AI tools?",
      content: (
        <>
          <p>Yes. Our <Link href="/services/ai-integration" className="text-current-500 hover:underline">AI Integration service</Link> helps small businesses adopt AI safely and practically.</p>
          <p>We focus on:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/80 my-4">
            <li>Low-risk, high-value use cases (admin automation, not customer-facing)</li>
            <li>Data privacy (keeping sensitive info local)</li>
            <li>Training your team to use AI confidently</li>
            <li>Custom prompts and workflows that fit your business</li>
          </ul>
          <p>No hype. No replacing people. Just practical automation that gives you time back.</p>
        </>
      )
    },
    {
      title: "Do you build software or apps?",
      content: (
        <>
          <p>No. We help you use existing tools better (or choose the right ones).</p>
          <p>Most small businesses don't need custom software. They need:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/80 my-4">
            <li>Clear processes</li>
            <li>Better tool adoption</li>
            <li>Integration between systems they already have</li>
          </ul>
          <p>If you truly need custom software, we'll tell you-and refer you to someone who can build it.</p>
        </>
      )
    },
    {
      title: "Can you help with hiring or HR?",
      content: (
        <>
          <p>Not directly. We're not recruiters or HR consultants.</p>
          <p>But we can help with:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/80 my-4">
            <li>Defining roles clearly (so you hire the right people)</li>
            <li>Building onboarding systems (so new hires get productive faster)</li>
            <li>Designing team structures that don't rely on heroic effort</li>
          </ul>
          <p>If you have HR or legal questions, we'll refer you to specialists.</p>
        </>
      )
    },
    {
      title: "What if we've tried consultants before and it didn't work?",
      content: (
        <>
          <p>We hear this a lot. Usually the issue is one of three things:</p>
          <p><strong className="text-white">1. The consultant gave you a plan but didn't help implement it.</strong> Plans are useless if they sit in a drawer. We stay until it's working.</p>
          <p><strong className="text-white">2. The solution didn't fit your culture or size.</strong> Cookie-cutter frameworks from big-company consulting don't work for 10-person teams. We design for you.</p>
          <p><strong className="text-white">3. There was no follow-through.</strong> Change requires coaching, feedback loops, and accountability. We build that in.</p>
          <p>If you've been burned before, let's talk about what went wrong. We'll be honest about whether we can do better.</p>
        </>
      )
    }
  ]

  return (
    <div className="pb-20">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to know about working with Vibes Consulting. Don't see your question? <Link href="/contact" className="text-current-500 hover:underline">Ask us directly</Link>.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">General Questions</h2>
            <BlogAccordion sections={generalQuestions} />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Pricing & Investment</h2>
            <BlogAccordion sections={pricingQuestions} />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Process & Timeline</h2>
            <BlogAccordion sections={processQuestions} />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Services & Capabilities</h2>
            <BlogAccordion sections={serviceQuestions} />
          </section>
        </div>

        <section className="mt-20 card p-8 md:p-12 bg-gradient-to-br from-current-600/20 to-current-800/30 border-current-500/30 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            The best way to know if we're a fit is to talk. Book a 20-minute intro call and we'll discuss your specific situation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="btn btn-primary">
              Schedule Intro Call
            </Link>
            <Link href="/packages" className="btn btn-secondary">
              View Packages & Pricing
            </Link>
          </div>
        </section>

        <section className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            Looking for something specific? Try our <Link href="/blog" className="text-current-500 hover:underline">blog</Link> or check out our <Link href="/services" className="text-current-500 hover:underline">services</Link>.
          </p>
        </section>
      </div>
    </div>
  )
}

