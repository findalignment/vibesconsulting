import Link from 'next/link'

export const metadata = {
  title: "Why Santa Cruz Small Businesses Struggle With Operations (And How to Fix It)",
  description: "Santa Cruz businesses are thriving creatively but drowning in operational chaos. Learn how local businesses are fixing their systems without losing their vibe."
}

export default function BlogPost() {
  return (
    <div className="pb-20 max-w-3xl">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <time className="text-white/60 text-sm">October 1, 2024</time>
          <h1 className="mt-2 mb-4">Why Santa Cruz Small Businesses Struggle With Operations (And How to Fix It)</h1>
          <p className="text-xl text-white/80">Santa Cruz businesses are thriving creatively but drowning in operational chaos. Learn how local businesses are fixing their systems without losing their vibe.</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-white/80">
          <p>Santa Cruz has incredible small businesses. Coffee roasters, surf shops, yoga studios, creative agencies, wellness centers. The creative energy here is unmatched.</p>

          <p>But here's what we see behind the scenes: Spreadsheets everywhere. Client information scattered across email, text, and DMs. Onboarding that takes weeks. Staff asking the same questions repeatedly because nothing's documented.</p>

          <h2 className="text-white text-2xl font-semibold mt-8 mb-4">The Santa Cruz Business Paradox</h2>

          <p>You started your business because you're good at something - training, consulting, making things, serving people. Not because you love administrative systems.</p>

          <p>But as you grow from 1 person to 5, then 10, the informal systems that worked break down. You become the bottleneck. Everything runs through you.</p>

          <h2 className="text-white text-2xl font-semibold mt-8 mb-4">What Good Operations Actually Looks Like</h2>

          <p>It's not corporate bureaucracy. Good operations for a Santa Cruz business means:</p>

          <ul className="space-y-2">
            <li>Onboarding a new client takes 2 days, not 2 weeks</li>
            <li>Your team knows what they can decide without asking you</li>
            <li>Client information lives in one place, not scattered across platforms</li>
            <li>You can take a vacation without everything grinding to a halt</li>
            <li>New hires get up to speed in days, not months</li>
          </ul>

          <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Local Businesses Getting This Right</h2>

          <p>We've worked with Santa Cruz training studios, consulting firms, and retail spaces. The ones who fix their operations don't become corporate - they become sustainable.</p>

          <p>They reclaim 10-15 hours per week. They grow without burning out. Their teams feel empowered instead of confused.</p>

          <h2 className="text-white text-2xl font-semibold mt-8 mb-4">Where to Start</h2>

          <p>Start with a simple audit:</p>

          <ul className="space-y-2">
            <li>What tasks do you do repeatedly that could be templated?</li>
            <li>What questions does your team ask you over and over?</li>
            <li>Where does client information get lost or require digging?</li>
            <li>What processes require you personally that shouldn't?</li>
          </ul>

          <p>These friction points are costing you hours every week. Fix them and you'll feel the difference immediately.</p>

          <div className="bg-current-600/10 p-6 rounded-lg mt-8">
            <p className="font-semibold text-white mb-2">Need help identifying what to fix first?</p>
            <p className="text-white/70 text-sm">Our Flow Check is a 2-week diagnostic specifically for Santa Cruz small businesses. We identify your biggest operational bottlenecks and give you a 90-day plan to fix them.</p>
            <Link href="/packages/flow-check" className="text-current-500 hover:underline text-sm">Learn about Flow Check →</Link>
          </div>
        </div>
      </article>
    </div>
  )
}

