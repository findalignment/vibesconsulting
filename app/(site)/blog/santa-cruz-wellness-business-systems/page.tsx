import Link from 'next/link'

export const metadata = {
  title: "Systems for Santa Cruz Wellness Businesses That Don't Kill the Vibe",
  description: "Yoga studios, training spaces, and wellness centers need structure that supports, not stifles. Here's how to build it."
}

export default function BlogPost() {
  return (
    <div className="pb-20 max-w-3xl">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <time className="text-white/60 text-sm">October 15, 2024</time>
          <h1 className="mt-2 mb-4">Systems for Santa Cruz Wellness Businesses That Don't Kill the Vibe</h1>
          <p className="text-xl text-white/80">Yoga studios, training spaces, and wellness centers need structure that supports, not stifles. Here's how to build it.</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-white/80">
          <p>Santa Cruz businesses have a unique challenge: we want to grow, but we don't want to lose what makes us special. Big-company operations feel corporate and cold. But informal, "figure-it-out-as-we-go" operations don't scale.</p>

          <p>The businesses thriving here have found the middle ground: systems that create consistency without killing culture.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">The Santa Cruz Business Identity</h2>
          
          <p>Local businesses here share a common tension:</p>

          <p><strong>We value relationships over transactions.</strong> But without process, relationships become inefficient and inconsistent.</p>

          <p><strong>We pride ourselves on being flexible.</strong> But without structure, flexibility becomes chaos.</p>

          <p><strong>We want to feel small and personal.</strong> But without systems, growth makes us messy, not bigger.</p>

          <p>The answer isn't choosing between culture and operations. It's designing operations that protect your culture.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Common Operational Struggles Locally</h2>
          
          <p>Here's what I see in Santa Cruz businesses constantly:</p>

          <p><strong>Informal onboarding.</strong> New hires learn by osmosis. Some figure it out, others struggle for months. Quality varies based on who trained whom.</p>

          <p><strong>Inconsistent customer experience.</strong> Your regulars love you because they know how things work. New customers feel confused because nothing's clearly explained.</p>

          <p><strong>Owner dependency.</strong> The business runs great when you're there, falls apart when you're not. This isn't sustainable.</p>

          <p><strong>Information silos.</strong> Critical knowledge lives in people's heads, not in accessible systems. When someone's out, things stop.</p>

          <p><strong>Reactive problem-solving.</strong> You're always putting out fires instead of preventing them. There's no time to improve because you're too busy surviving.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">What Good Operations Look Like Here</h2>
          
          <p>Santa Cruz businesses that nail operations share these traits:</p>

          <p><strong>They document the essentials.</strong> Not everything, but the core processes that define quality. Simple, visual, accessible documentation.</p>

          <p><strong>They train with intention.</strong> New hires get structured onboarding that teaches your way of doing things, not just the basics.</p>

          <p><strong>They build flexible systems.</strong> Clear frameworks that leave room for personality and judgment. Structure that enables creativity, not restricts it.</p>

          <p><strong>They empower their teams.</strong> Staff can make decisions within clear boundaries. They don't need permission for everything.</p>

          <p><strong>They communicate consistently.</strong> Regular check-ins, clear expectations, feedback loops that actually work.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How to Fix Operations Without Losing Your Soul</h2>
          
          <p>Here's how to get started:</p>

          <p><strong>1. Document your non-negotiables.</strong> What absolutely must happen every time? Write those down. Everything else can stay flexible.</p>

          <p><strong>2. Create a simple onboarding path.</strong> Week-by-week plan for new hires. Ensures everyone learns the same foundation.</p>

          <p><strong>3. Build decision frameworks, not scripts.</strong> Give people principles to apply, not words to memorize. Trust their judgment within boundaries.</p>

          <p><strong>4. Establish communication rhythms.</strong> Weekly check-ins, monthly reviews, clear channels for questions. Communication can't be random.</p>

          <p><strong>5. Measure what matters.</strong> Pick 3-5 key metrics that show if things are working. Track them. Adjust when they drift.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Why This Matters for Santa Cruz</h2>
          
          <p>Our local economy depends on small businesses that can compete on experience, quality, and community connection. You can't do that consistently without good operations.</p>

          <p>But good operations here don't look like corporate operations. They look like systems designed by people who value culture as much as efficiency.</p>

          <p>That's the Santa Cruz way: professional without being corporate. Structured without being rigid. Scalable without losing soul.</p>
          
          <p className="text-white/70 mt-6">Explore our <Link href="/services">consulting services</Link> or <Link href="/packages">packages</Link> for comprehensive support.</p>

          <div className="bg-current-600/10 p-6 rounded-lg mt-8">
            <p className="font-semibold text-white mb-2">Need help with your business operations?</p>
            <p className="text-white/70 text-sm"><Link href="/packages/flow-check">Book a Flow Check</Link> to identify your biggest operational opportunities.</p>
            <Link href="/packages/flow-check" className="text-current-500 hover:underline text-sm">Learn about Flow Check →</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
