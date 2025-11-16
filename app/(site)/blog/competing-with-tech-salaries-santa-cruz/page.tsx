import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: "Competing With Tech Salaries for Good Talent in Santa Cruz",
  description: "Tech companies pay $80K-150K+ for entry-level roles. Your small business can't match that. Here's how to compete anyway—and win."
}

export default function BlogPost() {
  const sections = [
    {
      title: "The Santa Cruz Salary Reality",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's what you're up against:</p>

          <p><strong className="text-brand-text">Tech companies are everywhere.</strong> Remote work means Silicon Valley companies hire Santa Cruz residents. They pay $100K+ for roles you'd pay $50K for. Same talent pool, double the salary.</p>

          <p><strong className="text-brand-text">Local tech startups pay aggressively.</strong> Even small tech companies here pay $80K-120K for junior roles. They're venture-funded. They're competing for talent globally. You're competing with profit margins.</p>

          <p><strong className="text-brand-text">Cost of living demands it.</strong> To live comfortably in Santa Cruz (rent, food, transportation), you need $60K minimum. Realistically $75K+. If you're offering $45K, you're offering financial stress.</p>

          <p><strong className="text-brand-text">Over the hill is always an option.</strong> A 30-minute commute to South Bay means 30-50% more pay. Every local employee is constantly getting LinkedIn messages from recruiters offering more money for more predictable work.</p>

          <p>You can't win on salary. So you need to win on everything else.</p>
        </>
      )
    },
    {
      title: "What You're Really Competing On",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">The good news: money isn't everything. Especially in Santa Cruz. Here's what actually matters:</p>

          <p><strong className="text-brand-text">Lifestyle and flexibility.</strong> Tech jobs pay more but demand more. Always-on culture, late-night launches, weekend work. Your smaller business can offer actual work-life balance. In Santa Cruz, that's valuable.</p>

          <p><strong className="text-brand-text">Mission and meaning.</strong> People move to Santa Cruz for quality of life. Many care more about doing meaningful work than maximizing income. If your business aligns with local values (sustainability, community, wellness), that attracts talent.</p>

          <p><strong className="text-brand-text">Culture and connection.</strong> Tech companies have hundreds or thousands of employees. You have 5-15. That means real relationships, direct impact, and personal connection. For some people, that's worth $20K less.</p>

          <p><strong className="text-brand-text">Autonomy and ownership.</strong> Big companies have layers of approval, rigid processes, and limited decision-making authority. Small businesses can give talented people real responsibility early. That accelerates growth.</p>

          <p><strong className="text-brand-text">Local community impact.</strong> Working for a Santa Cruz business means contributing to the local economy, supporting neighbors, and building community. For people who care about that (and many do here), it's a compelling reason to stay.</p>
        </>
      )
    },
    {
      title: "The Competitive Compensation Package",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">You can't pay tech salaries. But you can build a competitive total package:</p>

          <p><strong className="text-brand-text">Pay fairly, even if not top-tier.</strong> You don't need to match tech salaries, but you need to pay enough that money isn't a constant source of stress. Aim for the top 25% of your industry locally, not the bottom 50%.</p>

          <p><strong className="text-brand-text">Offer real flexibility.</strong> Remote work options, flexible hours, unlimited PTO (if you trust your team), compressed work weeks. These cost you nothing but attract people who value control over their time.</p>

          <p><strong className="text-brand-text">Build professional development budgets.</strong> $2K-5K per year for courses, conferences, or certifications. Shows you're investing in their growth. Makes them more valuable to you and gives them skills for their career.</p>

          <p><strong className="text-brand-text">Create equity or profit-sharing.</strong> If someone's critical to your success, give them a stake in the outcome. Profit-sharing, equity grants, or performance bonuses tied to business results. Aligns interests.</p>

          <p><strong className="text-brand-text">Help with the housing crisis.</strong> Rent stipends, first/last/deposit assistance, landlord referrals, co-signing leases. Housing is the #1 cost-of-living issue. Help solve it and you dramatically improve compensation value.</p>
        </>
      )
    },
    {
      title: "Hiring People Who Value More Than Money",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">The key is finding people who prioritize things you can offer. Here's how:</p>

          <p><strong className="text-brand-text">Screen for values alignment early.</strong> In interviews, ask what matters to them. Work-life balance? Mission? Autonomy? Community? If they only care about salary, they're not your candidate. If they care about things you offer, they're perfect.</p>

          <p><strong className="text-brand-text">Tell your story compellingly.</strong> Why does your business exist? What impact do you have? What makes working here special? People don't join businesses—they join missions. Make yours clear.</p>

          <p><strong className="text-brand-text">Showcase your culture.</strong> Don't just describe it—show it. Let candidates meet the team. Share testimonials from current employees. Show what daily life looks like. Culture is your competitive advantage.</p>

          <p><strong className="text-brand-text">Hire people already in Santa Cruz.</strong> Someone who moved here for lifestyle has already chosen lower pay for better living. They're not comparing you to tech—they're comparing you to other local options.</p>

          <p><strong className="text-brand-text">Target people at life transitions.</strong> Parents wanting better balance. Burned-out tech workers seeking meaning. Recent grads who care about mission. These people actively choose non-tech paths.</p>
        </>
      )
    },
    {
      title: "Retention: Keeping People Who Have Options",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Everyone in Santa Cruz has tech recruiters in their inbox. Here's how to keep good people:</p>

          <p><strong className="text-brand-text">Regular raises without being asked.</strong> If someone's performing well, bump their pay proactively. Don't wait for them to get an offer elsewhere. Show you're paying attention and rewarding growth.</p>

          <p><strong className="text-brand-text">Create clear growth paths.</strong> Even in a 10-person business, people want to see progression. More responsibility, more autonomy, more pay, better title. Show them the 2-year path from where they are to where they could be.</p>

          <p><strong className="text-brand-text">Protect what they value.</strong> If they took your job for work-life balance, protect that fiercely. Don't slowly creep into nights and weekends. If you violate the thing they chose you for, they'll leave.</p>

          <p><strong className="text-brand-text">Give them ownership and impact.</strong> The antidote to higher-paying corporate jobs is meaningful work with visible impact. Let them lead projects, make decisions, and see direct results of their work.</p>

          <p><strong className="text-brand-text">Stay connected to their goals.</strong> Quarterly check-ins about career goals, learning interests, and what would make this their dream job. If you know what they want, you can often provide it. If you don't ask, they leave quietly.</p>
        </>
      )
    },
    {
      title: "Building Your Talent Strategy This Month",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's your action plan:</p>

          <p><strong className="text-brand-text">Week 1: Audit total compensation.</strong> Calculate what you actually offer including salary, benefits, flexibility, development budget, and perks. Compare that to tech companies on total value, not just salary. You might be more competitive than you think.</p>

          <p><strong className="text-brand-text">Week 2: Define your value proposition.</strong> Write down the top 5 reasons someone should work for you instead of a tech company. Make these reasons central to your recruiting message.</p>

          <p><strong className="text-brand-text">Week 3: Redesign job postings.</strong> Lead with culture, mission, and lifestyle. Talk about flexibility, impact, and growth. Mention salary last. Attract people who value what you offer.</p>

          <p><strong className="text-brand-text">Week 4: Interview your current team.</strong> Ask why they stay. What would make them leave? What would make them refer friends? Use those insights to improve retention and recruiting.</p>

          <p><strong className="text-brand-text">Ongoing: Build your employer brand.</strong> Share team photos, celebrate wins, highlight culture. Show what makes your business special. Good people are watching before they apply.</p>
          
          <p className="text-brand-text/70 mt-6">Need help competing for talent? <Link href="/packages/business-flow">Book a Business Flow package</Link> to design compensation and culture systems that attract great people without tech salaries.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'Team Leadership', href: '/blog/team-leadership' },
        { label: 'Competing with Tech Salaries', href: '/blog/competing-with-tech-salaries-santa-cruz' }
      ]} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>July 27, 2025</time>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Competing With Tech Salaries for Good Talent in Santa Cruz</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">Tech companies pay $80K-150K+ for entry-level roles. Your small business can't match that. Here's how to compete anyway—and win.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">You're competing for talent with companies that have unlimited recruiting budgets, equity packages worth millions, and salaries you can't touch. It feels impossible.</p>

          <p>But here's the thing: you're not actually competing on salary. You're competing on everything else. And in Santa Cruz, everything else matters more than most places.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Need help building your talent strategy?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/packages/business-flow">Book a Business Flow package</Link> to create a competitive advantage in hiring and retention.</p>
            <Link href="/packages/business-flow" className="text-current-500 hover:underline text-sm">Learn about Business Flow →</Link>
          </div>
        
          {/* Hub Navigation */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <Link href="/blog/team-leadership" className="inline-flex items-center gap-2 text-current-500 hover:text-current-400 transition-colors mb-8">
              <span>←</span> Back to Team Leadership Hub
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-brand-text mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/cant-find-reliable-employees-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Can't Find Reliable Employees in Santa Cruz</h4>
                <p className="text-brand-text/70 text-sm">The complete guide to hiring reliable people locally.</p>
              </Link>
              <Link href="/blog/new-hires-take-months" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Why New Hires Take 3 Months to Get Up to Speed</h4>
                <p className="text-brand-text/70 text-sm">Accelerate productivity with better onboarding.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

