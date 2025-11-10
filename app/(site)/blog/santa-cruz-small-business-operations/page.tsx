import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'

export const metadata = {
  title: "Why Santa Cruz Small Businesses Struggle With Operations (And How to Fix It)",
  description: "Santa Cruz businesses are thriving creatively but drowning in operational chaos. Learn how local businesses are fixing their systems without losing their vibe."
}

export default function BlogPost() {
  const sections = [
    {
      title: "The Santa Cruz Business Paradox",
      content: (
        <>
<p>You started your business because you're good at something - training, consulting, making things, serving people. Not because you love administrative systems.</p>

          <p>But as you grow from 1 person to 5, then 10, the informal systems that worked break down. You become the bottleneck. Everything runs through you.</p>
        </>
      )
    },
    {
      title: "What Good Operations Actually Looks Like",
      content: (
        <>
<p>It's not corporate bureaucracy. Good operations for a Santa Cruz business means:</p>

          <ul className="space-y-2">
            <li>Onboarding a new client takes 2 days, not 2 weeks</li>
            <li>Your team knows what they can decide without asking you</li>
            <li>Client information lives in one place, not scattered across platforms</li>
            <li>You can take a vacation without everything grinding to a halt</li>
            <li>New hires get up to speed in days, not months</li>
          </ul>
        </>
      )
    },
    {
      title: "Local Businesses Getting This Right",
      content: (
        <>
<p>We've worked with Santa Cruz training studios, consulting firms, and retail spaces. The ones who fix their operations don't become corporate - they become sustainable.</p>

          <p>They reclaim 10-15 hours per week. They grow without burning out. Their teams feel empowered instead of confused.</p>
        </>
      )
    },
    {
      title: "Where to Start",
      content: (
        <>
<p>Start with a simple audit:</p>

          <ul className="space-y-2">
            <li>What tasks do you do repeatedly that could be templated?</li>
            <li>What questions does your team ask you over and over?</li>
            <li>Where does client information get lost or require digging?</li>
            <li>What processes require you personally that shouldn't?</li>
          </ul>

          <p>These friction points are costing you hours every week. Fix them and you'll feel the difference immediately.</p>

          <div className="bg-gradient-to-br from-current-600/20 to-current-800/30 p-8 md:p-10 rounded-xl border border-current-500/20 mt-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-2xl font-bold text-brand-text mb-3">Need help identifying what to fix first?</p>
                <p className="text-brand-text/70 text-lg">Our Flow Check is a 2-week diagnostic specifically for Santa Cruz small businesses. We identify your biggest operational bottlenecks and give you a 90-day plan to fix them.</p>
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
      <Link href="/blog" className="text-brand-text/60 hover:text-brand-text text-sm mb-8 inline-flex items-center gap-2 hover:gap-3 transition-all">
        <span>←</span> Back to Blog
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>November 01, 2024</time>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Why Santa Cruz Small Businesses Struggle With Operations (And How to Fix It)</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">Santa Cruz businesses are thriving creatively but drowning in operational chaos. Learn how local businesses are fixing their systems without losing their vibe.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">Santa Cruz has incredible small businesses. Coffee roasters, surf shops, yoga studios, creative agencies, wellness centers. The creative energy here is unmatched.</p>

          <p>But here's what we see behind the scenes: Spreadsheets everywhere. Client information scattered across email, text, and DMs. Onboarding that takes weeks. Staff asking the same questions repeatedly because nothing's documented.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-gradient-to-br from-current-600/20 to-current-800/30 p-8 md:p-10 rounded-xl border border-current-500/20 mt-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-2xl font-bold text-brand-text mb-3">Need help identifying what to fix first?</p>
                <p className="text-brand-text/70 text-lg">Our Flow Check is a 2-week diagnostic specifically for Santa Cruz small businesses. We identify your biggest operational bottlenecks and give you a 90-day plan to fix them.</p>
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
        
          <div className="mt-24 pt-16 border-t border-white/10">
            <h3 className="text-2xl font-bold text-brand-text mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/creative-agencies-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Creative Agencies Santa Cruz</h4>
                <p className="text-brand-text/70 text-sm">Practical insights on improving your business operations.</p>
              </Link>
              <Link href="/blog/santa-cruz-fitness-client-communication" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Santa Cruz Fitness Client Communication</h4>
                <p className="text-brand-text/70 text-sm">Learn how to build better systems and reduce friction.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
