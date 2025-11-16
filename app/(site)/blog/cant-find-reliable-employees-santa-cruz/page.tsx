import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: "Can't Find Reliable Employees in Santa Cruz: The Real Problem",
  description: "Every Santa Cruz business owner says the same thing: 'I can't find reliable people.' Here's why—and what actually works to attract and keep good employees."
}

export default function BlogPost() {
  const sections = [
    {
      title: "The Reliable Employee Problem Is Universal Here",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Talk to any Santa Cruz business owner and you'll hear the same frustration:</p>

          <p><strong className="text-brand-text">"People don't show up for interviews."</strong> You schedule five interviews. Two show up. One is qualified. You make an offer. They ghost you.</p>

          <p><strong className="text-brand-text">"They say they want the job, then quit after two weeks."</strong> Training costs time and money. Just when they're getting productive, they're gone.</p>

          <p><strong className="text-brand-text">"They call out constantly."</strong> Surf's good. They're hungover. Car trouble. Family emergency. Every week there's a reason. You're always scrambling to cover shifts.</p>

          <p><strong className="text-brand-text">"Good employees leave for Bay Area jobs."</strong> You finally find someone great. Six months in, they get offered $10K more over the hill. They're gone.</p>

          <p>This isn't bad luck. This is the Santa Cruz labor market. And it requires a different approach than traditional hiring advice.</p>
        </>
      )
    },
    {
      title: "Why Traditional Hiring Doesn't Work Here",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">The Santa Cruz hiring market has unique challenges:</p>

          <p><strong className="text-brand-text">Cost of living is insane.</strong> $18/hour doesn't cover rent here. Your "competitive" wage is poverty wages when rent is $2,000 for a room. People take your job while looking for better options.</p>

          <p><strong className="text-brand-text">Competition is fierce.</strong> Tech companies pay $25-40/hour for entry-level. Restaurants and retail compete at $18-22 plus tips. If you're offering minimum wage, you're getting leftover candidates.</p>

          <p><strong className="text-brand-text">Santa Cruz lifestyle attracts transient workers.</strong> College students here for 4 years. Seasonal workers here for summer. People trying out the surf lifestyle for 6 months. Long-term commitment isn't the culture.</p>

          <p><strong className="text-brand-text">Remote work changed everything.</strong> Why take a service job for $18/hour when you can do remote customer service for $22/hour in your pajamas?</p>

          <p><strong className="text-brand-text">Surf culture is real.</strong> When the waves are good, some people prioritize that over showing up. Not everyone—but enough that it's a real scheduling issue.</p>
        </>
      )
    },
    {
      title: "What Actually Works: The Reliable Employee System",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Successful Santa Cruz businesses don't find reliable employees. They create them. Here's how:</p>

          <p><strong className="text-brand-text">1. Pay enough to care.</strong> If someone's working two jobs to afford rent, reliability suffers. Pay at the top of local market or offer creative compensation (housing assistance, flexible schedules, profit sharing). Cheap labor is expensive when you account for turnover.</p>

          <p><strong className="text-brand-text">2. Hire for values, train for skills.</strong> Someone who cares about your mission and aligns with your culture will stay. Someone who just needs a paycheck won't. Screen for fit first, skills second.</p>

          <p><strong className="text-brand-text">3. Build flexibility into your model.</strong> Fighting surf culture is exhausting. Instead, build systems that accommodate it. Core team stays consistent. Flex team handles surges. Clear expectations upfront about reliability requirements.</p>

          <p><strong className="text-brand-text">4. Create a culture worth staying for.</strong> People leave jobs for money. They stay for culture. If your team likes working together, respects leadership, and finds meaning in the work, they'll turn down higher-paying offers elsewhere.</p>

          <p><strong className="text-brand-text">5. Make onboarding exceptional.</strong> First two weeks determine if they stay. Clear training, immediate connection to team, early wins, constant feedback. Most businesses lose good people because onboarding sucks.</p>
        </>
      )
    },
    {
      title: "The Retention System: Keeping Good People",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Finding good employees is hard. Keeping them is harder. Here's what works:</p>

          <p><strong className="text-brand-text">Pay raises before they ask.</strong> Don't wait for annual reviews. If someone's performing well at 90 days, bump their pay. Show them you notice and value growth.</p>

          <p><strong className="text-brand-text">Create growth paths.</strong> Even in small businesses, people want to see a future. Shift lead to assistant manager to manager. More responsibility, more pay, more autonomy. Show them the path.</p>

          <p><strong className="text-brand-text">Invest in development.</strong> Training, courses, conferences. When you invest in their growth, they invest in your success. Plus, better skills make them more valuable to you.</p>

          <p><strong className="text-brand-text">Solve the housing problem creatively.</strong> Some businesses offer housing stipends, rent guarantees for landlords, or even shared housing for seasonal workers. Housing security increases job stability.</p>

          <p><strong className="text-brand-text">Protect work-life balance.</strong> Ironically, respecting boundaries increases reliability. People who feel controlled rebel. People who feel respected show up. Set clear expectations, then trust them.</p>
        </>
      )
    },
    {
      title: "Alternative Staffing Models for Santa Cruz",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Traditional full-time employment might not be your best model here. Consider these alternatives:</p>

          <p><strong className="text-brand-text">Core + Flex model.</strong> 2-3 highly reliable full-timers as your core. 4-6 part-timers who cover peaks and fill gaps. Smaller core means you can pay them better. Larger flex pool means you're not dependent on any single person showing up.</p>

          <p><strong className="text-brand-text">Profit sharing for key roles.</strong> If someone's essential to your business, give them a stake in the outcome. Monthly bonuses tied to performance metrics. Makes them owners, not just employees.</p>

          <p><strong className="text-brand-text">Seasonal cohorts.</strong> Hire a group of seasonal workers together. They bond as a cohort. Higher retention within the season, and some return next year. Builds team culture faster than rolling individual hires.</p>

          <p><strong className="text-brand-text">Remote roles where possible.</strong> Not everything requires physical presence. Administrative work, customer service, social media, bookkeeping—these can be remote. Access a different labor pool without competing on Santa Cruz cost of living.</p>

          <p><strong className="text-brand-text">Contractor relationships.</strong> For specialized work (marketing, bookkeeping, IT), contractors can be more reliable than employees. They're running their own business, so reliability is their competitive advantage.</p>
        </>
      )
    },
    {
      title: "Building Your Reliable Team This Quarter",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's your 90-day hiring system:</p>

          <p><strong className="text-brand-text">Week 1: Audit your compensation.</strong> Research what competitors pay. Calculate true cost of turnover (training, lost productivity, recruiting). Determine if you can afford to pay more. Usually, you can't afford not to.</p>

          <p><strong className="text-brand-text">Week 2-3: Redesign your job posts.</strong> Stop listing requirements. Start selling culture, mission, and growth opportunities. Highlight what makes your business different. Attract people who care, not just people who need a job.</p>

          <p><strong className="text-brand-text">Week 4-6: Build your onboarding system.</strong> Document your training process. Create a 2-week onboarding plan. Assign a buddy. Schedule daily check-ins. Make the first two weeks exceptional.</p>

          <p><strong className="text-brand-text">Week 7-8: Implement stay interviews.</strong> Talk to your current reliable people. Ask why they stay. What would make them leave? What would make this their dream job? Use those insights to improve retention.</p>

          <p><strong className="text-brand-text">Week 9-12: Launch recruiting continuously.</strong> Don't hire only when desperate. Always be building a pipeline. Regular job posts, ongoing interviews, a waitlist of interested candidates. When someone leaves, you have options.</p>
          
          <p className="text-brand-text/70 mt-6">Need help building your hiring and retention system? <Link href="/packages/business-flow">Book a Business Flow package</Link> to design staffing systems that work for Santa Cruz.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'Team Leadership', href: '/blog/team-leadership' },
        { label: 'Finding Reliable Employees', href: '/blog/cant-find-reliable-employees-santa-cruz' }
      ]} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>July 22, 2025</time>
            <span>•</span>
            <span>9 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Can't Find Reliable Employees in Santa Cruz: The Real Problem</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">Every Santa Cruz business owner says the same thing: "I can't find reliable people." Here's why—and what actually works to attract and keep good employees.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">The number one complaint I hear from Santa Cruz business owners isn't about revenue, marketing, or competition. It's about finding reliable employees.</p>

          <p>And here's the hard truth: the problem isn't the labor pool. It's that most businesses are using hiring strategies designed for different markets. Santa Cruz requires a different approach.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Struggling with hiring and retention?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/packages/business-flow">Book a Business Flow package</Link> to build hiring systems that attract and keep reliable employees in Santa Cruz.</p>
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
              <Link href="/blog/hiring-season-preparation" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Hiring</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Preparing for Holiday Hiring Season</h4>
                <p className="text-brand-text/70 text-sm">Get your onboarding ready before you need it.</p>
              </Link>
              <Link href="/blog/new-hires-take-months" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Why New Hires Take 3 Months to Get Up to Speed</h4>
                <p className="text-brand-text/70 text-sm">Fix your onboarding and accelerate productivity.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

