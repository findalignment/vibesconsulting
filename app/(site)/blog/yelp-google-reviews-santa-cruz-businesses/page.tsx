import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: "Yelp and Google Reviews Make or Break Santa Cruz Businesses",
  description: "One bad review can tank your week. One great review brings customers. In a small town, your online reputation is everything. Here's how to manage it."
}

export default function BlogPost() {
  const sections = [
    {
      title: "Why Reviews Matter More in Santa Cruz",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">In big cities, businesses can absorb bad reviews. Volume and anonymity help. Santa Cruz is different:</p>

          <p><strong className="text-brand-text">Small market amplifies everything.</strong> A bad review from a local gets seen by everyone. Your competitor's customers see it. Your potential customers see it. Your employees see it. Damage spreads fast.</p>

          <p><strong className="text-brand-text">Tourists trust reviews blindly.</strong> Visitors don't know anyone here. They Google "best [your category] Santa Cruz" and pick from the top results. Your rating determines if you're even considered.</p>

          <p><strong className="text-brand-text">Word travels fast locally.</strong> One bad experience becomes a Nextdoor thread, becomes a coffee shop conversation, becomes "I heard that place has issues." In a connected community, reviews create or destroy reputations quickly.</p>

          <p><strong className="text-brand-text">You can't hide.</strong> In a town of 60,000, anonymity doesn't exist. Reviewers are your neighbors. Bad reviews often have context—someone knows someone who knows you. This makes them more credible and more damaging.</p>

          <p><strong className="text-brand-text">Competitors are one click away.</strong> If your rating is 3.8 and your competitor's is 4.5, you lose customers you'll never even know considered you. The algorithm is brutal.</p>
        </>
      )
    },
    {
      title: "The Common Review Management Mistakes",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Most Santa Cruz businesses handle reviews poorly:</p>

          <p><strong className="text-brand-text">Ignoring reviews entirely.</strong> "I don't have time for that." Meanwhile, customers are making decisions based on outdated or inaccurate information. Silence looks like you don't care.</p>

          <p><strong className="text-brand-text">Getting defensive with negative reviews.</strong> Arguing with reviewers publicly makes you look worse than the original complaint. Even if you're right, you lose.</p>

          <p><strong className="text-brand-text">Only asking happy customers for reviews.</strong> You need volume and consistency. Selective asking creates bias. Plus, when you only ask sometimes, happy customers forget.</p>

          <p><strong className="text-brand-text">Fake or incentivized reviews.</strong> Platforms detect this. Customers detect this. The pattern is obvious. And when caught, the backlash destroys your credibility.</p>

          <p><strong className="text-brand-text">No system for improvement.</strong> Reviews are feedback. If three people mention slow service, that's not three bad customers—it's a systems problem. Ignoring patterns means repeating mistakes.</p>
        </>
      )
    },
    {
      title: "Your Proactive Review Strategy",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">The businesses with strong reputations don't manage reviews—they design for them. Here's how:</p>

          <p><strong className="text-brand-text">1. Build review requests into your process.</strong> After every completed service or purchase, ask for a review. Email, text, or in-person. Make it automatic, not occasional. Timing matters—ask within 24 hours while experience is fresh.</p>

          <p><strong className="text-brand-text">2. Make reviewing easy.</strong> Send direct links to Google, Yelp, or your review platform. Don't make people search for you. The fewer clicks, the higher the completion rate.</p>

          <p><strong className="text-brand-text">3. Ask everyone, not just happy customers.</strong> You want volume. You want consistency. If your service is good, most reviews will be positive. Selective asking creates suspicious patterns.</p>

          <p><strong className="text-brand-text">4. Respond to every review.</strong> Good reviews: Thank them specifically. Reference what they mentioned. Show you're paying attention. Bad reviews: Acknowledge, apologize if warranted, offer to make it right. Take the conversation offline quickly.</p>

          <p><strong className="text-brand-text">5. Track review themes.</strong> Monthly, categorize what people mention. Positive patterns are strengths to highlight. Negative patterns are operations problems to fix. Reviews are free market research.</p>
        </>
      )
    },
    {
      title: "Handling Negative Reviews Like a Pro",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Bad reviews happen. Here's the response framework:</p>

          <p><strong className="text-brand-text">Step 1: Pause before responding.</strong> Your emotional reaction is defensiveness. Don't type angry. Wait 24 hours. Craft a thoughtful response, not a reactive one.</p>

          <p><strong className="text-brand-text">Step 2: Acknowledge their experience.</strong> "I'm sorry you had this experience" validates without admitting fault. Start with empathy, not explanation.</p>

          <p><strong className="text-brand-text">Step 3: Take responsibility where appropriate.</strong> If you legitimately messed up, own it. "You're right, we should have handled that differently." Accountability builds credibility.</p>

          <p><strong className="text-brand-text">Step 4: Offer resolution.</strong> "I'd like to make this right. Please reach out to me directly at [email/phone]." Move the conversation offline. Show willingness to fix it.</p>

          <p><strong className="text-brand-text">Step 5: Keep it brief.</strong> Don't write a novel. Don't over-explain. Future customers are reading this. Show you're reasonable, responsive, and committed to quality. That's enough.</p>

          <p><strong className="text-brand-text">For unfair/false reviews:</strong> Still start with empathy. Then state facts briefly without attacking the reviewer. "We don't have any record of this visit on the date mentioned. We'd love to understand this better if you'd reach out directly." Let readers judge credibility.</p>
        </>
      )
    },
    {
      title: "Building Review Momentum",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">The goal is consistent, positive reviews that push down negatives and improve your rating over time:</p>

          <p><strong className="text-brand-text">Create a remarkable experience.</strong> This is obvious but often forgotten. The best review strategy is being review-worthy. Find the moments in your customer experience where you can exceed expectations, and do those consistently.</p>

          <p><strong className="text-brand-text">Train your team on review importance.</strong> Every employee should know that customer experience = reviews = business survival. When everyone understands the stakes, service improves.</p>

          <p><strong className="text-brand-text">Celebrate great reviews with your team.</strong> Read them aloud. Share them in team meetings. Recognize people mentioned by name. This reinforces the behaviors that generate more great reviews.</p>

          <p><strong className="text-brand-text">Set a review goal.</strong> "We want 10 new reviews per month" gives you a target. Track it. When you fall short, diagnose why. Are you asking? Is experience slipping? Measure what matters.</p>

          <p><strong className="text-brand-text">Be patient with recovery.</strong> If your rating is damaged, it takes time to recover. You can't delete bad reviews. You can only bury them with volume of great ones. Commit to 6-12 months of consistent improvement.</p>
        </>
      )
    },
    {
      title: "Your 30-Day Review System Setup",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's how to implement this immediately:</p>

          <p><strong className="text-brand-text">Day 1: Claim all your profiles.</strong> Google Business Profile, Yelp, Facebook, TripAdvisor (if relevant). Make sure information is accurate and complete. Add photos. Fill out every field. This is your foundation.</p>

          <p><strong className="text-brand-text">Day 2-3: Create review request templates.</strong> Email template, text template, in-person script. Include direct links. Make it easy to copy and send.</p>

          <p><strong className="text-brand-text">Day 4-5: Train your team.</strong> Explain why reviews matter. Show them how to ask (timing, language, tone). Role-play if necessary. Get buy-in.</p>

          <p><strong className="text-brand-text">Day 6-10: Respond to every existing review.</strong> Start with recent ones. Work backward. Thank positive reviews, respond professionally to negative ones. Show you're engaged.</p>

          <p><strong className="text-brand-text">Day 11-30: Build the habit.</strong> Ask every customer for a review. Track how many requests you sent vs. reviews received. Refine your approach. Make it routine.</p>
          
          <p className="text-brand-text/70 mt-6">Need help building your reputation management system? <Link href="/packages/flow-check">Book a Flow Check</Link> to create your review generation and response process.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'Client Experience', href: '/blog/client-experience' },
        { label: 'Managing Reviews', href: '/blog/yelp-google-reviews-santa-cruz-businesses' }
      ]} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>April 6, 2025</time>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Yelp and Google Reviews Make or Break Santa Cruz Businesses</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">One bad review can tank your week. One great review brings customers. In a small town, your online reputation is everything. Here's how to manage it.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">In Santa Cruz, you can't hide from your reputation. Everyone knows someone who knows someone. And everyone checks Google and Yelp before trying a new business.</p>

          <p>Your online reviews aren't a reflection of your business. They are your business. Here's how to manage them systematically.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Need a reputation management system?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/packages/flow-check">Book a Flow Check</Link> to build your review generation and response process.</p>
            <Link href="/packages/flow-check" className="text-current-500 hover:underline text-sm">Learn about Flow Check →</Link>
          </div>
        
          {/* Hub Navigation */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <Link href="/blog/client-experience" className="inline-flex items-center gap-2 text-current-500 hover:text-current-400 transition-colors mb-8">
              <span>←</span> Back to Client Experience Hub
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-brand-text mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/client-experience-inconsistent" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Customer Experience</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Why Every Client Gets a Different Experience</h4>
                <p className="text-brand-text/70 text-sm">Consistency creates better reviews and referrals.</p>
              </Link>
              <Link href="/blog/customer-experience-operations-disconnect" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">The Customer Experience and Operations Disconnect</h4>
                <p className="text-brand-text/70 text-sm">Poor reviews are usually operations problems.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

