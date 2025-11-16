import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: "Google My Business Optimization for Santa Cruz Local Search",
  description: "Tourists and locals start their search on Google. If your Google Business Profile isn't optimized, you're invisible. Here's how to dominate local search results."
}

export default function BlogPost() {
  const sections = [
    {
      title: "Why Google My Business Matters in Santa Cruz",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">For local Santa Cruz businesses, Google My Business (GMB) is everything:</p>

          <p><strong className="text-brand-text">It's the first thing people see.</strong> Search "coffee shops Santa Cruz"—the map pack shows up first. Those 3 businesses get the majority of clicks. If you're not in the top 3, you're practically invisible.</p>

          <p><strong className="text-brand-text">Tourists search on Google, not Yelp.</strong> Visitors pull out their phone and Google "[your category] near me." If your GMB profile isn't complete and optimized, they'll never find you. You're losing tourist dollars to worse businesses with better profiles.</p>

          <p><strong className="text-brand-text">Locals use it to verify you're legit.</strong> Hours, reviews, photos, responses—locals check all of it. An incomplete or outdated profile signals "unprofessional" or "out of business." First impressions happen on Google.</p>

          <p><strong className="text-brand-text">It's free marketing.</strong> Unlike paid ads, GMB optimization costs nothing but time. And the return is massive. Showing up in local pack = steady stream of qualified leads who are searching for exactly what you offer.</p>

          <p><strong className="text-brand-text">Your competitors are ignoring it.</strong> Most Santa Cruz businesses have claimed their profile but done nothing else. Basic optimization puts you ahead of 80% of competitors. Deep optimization makes you dominant.</p>
        </>
      )
    },
    {
      title: "Complete Profile Optimization",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Start with the basics—complete every field:</p>

          <p><strong className="text-brand-text">Business name and category.</strong> Use your actual business name (no keyword stuffing). Choose your primary category precisely—Google weighs this heavily. Add secondary categories if relevant. Be specific, not broad.</p>

          <p><strong className="text-brand-text">Complete business description.</strong> 750 characters. Use first 250 for key services and location ("Family-owned coffee roaster in downtown Santa Cruz serving..."). Include relevant keywords naturally. Mention Santa Cruz, your neighborhood, and what makes you different.</p>

          <p><strong className="text-brand-text">Accurate hours and special hours.</strong> Update immediately when they change. Mark holidays. Nothing frustrates customers more than driving to a business that's closed when Google said it was open. Accuracy builds trust.</p>

          <p><strong className="text-brand-text">Service areas and attributes.</strong> If you serve specific Santa Cruz neighborhoods, list them. Check all applicable attributes (wheelchair accessible, outdoor seating, women-owned, etc.). These show up in search filters.</p>

          <p><strong className="text-brand-text">Products and services.</strong> Add your menu, services, or products. Include descriptions and pricing where appropriate. Google surfaces this information in search results. More information = more visibility.</p>
        </>
      )
    },
    {
      title: "Photo Strategy That Converts",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Photos are the most viewed part of your profile:</p>

          <p><strong className="text-brand-text">Upload 20+ high-quality photos minimum.</strong> Exterior, interior, products, team, customers (with permission). Google favors businesses with robust photo libraries. More photos = higher rankings and more clicks.</p>

          <p><strong className="text-brand-text">Update photos monthly.</strong> Fresh content signals active business. Add seasonal photos, new menu items, updated space. Regular uploads improve rankings and show you're engaged.</p>

          <p><strong className="text-brand-text">Showcase what makes you unique.</strong> Santa Cruz vibes, local partnerships, sustainability practices, community involvement. Differentiate visually. Generic stock photos don't convert—authentic local photos do.</p>

          <p><strong className="text-brand-text">Include people and activity.</strong> Photos with people perform better than empty spaces. Show your team, happy customers (again, with permission), bustling atmosphere. Humans want to see humans.</p>

          <p><strong className="text-brand-text">Professional quality, authentic feel.</strong> Phone photos are fine if well-lit and clear. But if you can afford it, hire a local photographer for 50-100 professional shots. One-time investment, permanent benefit.</p>
        </>
      )
    },
    {
      title: "Review Generation and Management",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Reviews are the biggest ranking factor:</p>

          <p><strong className="text-brand-text">Ask every customer for a Google review.</strong> Not Yelp. Not Facebook. Google. Send follow-up emails or texts with direct review link. "We'd love your feedback on Google if you have 2 minutes." Make it part of your process.</p>

          <p><strong className="text-brand-text">Aim for 50+ reviews minimum, 100+ ideally.</strong> More reviews = higher rankings. Velocity matters too—consistent new reviews signal active business. Target 5-10 new reviews per month.</p>

          <p><strong className="text-brand-text">Respond to every single review.</strong> Good reviews: thank them specifically, reference what they mentioned. Bad reviews: acknowledge, apologize if warranted, offer to resolve. Google sees responsiveness. Customers see you care.</p>

          <p><strong className="text-brand-text">Keywords in reviews help rankings.</strong> When people mention specific services or products in reviews, Google associates your business with those terms. Gently guide reviews: "Let us know what you thought of [specific thing]."</p>

          <p><strong className="text-brand-text">Never buy fake reviews or incentivize them.</strong> Google detects patterns. Getting caught tanks your rankings permanently. Authentic reviews from real customers only. It's slower but sustainable.</p>
        </>
      )
    },
    {
      title: "Google Posts and Q&A",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Use GMB's engagement features:</p>

          <p><strong className="text-brand-text">Post weekly updates.</strong> New products, specials, events, news, tips. Posts appear in your profile and search results. They expire after 7 days, so post consistently. Keeps your profile fresh and engaged.</p>

          <p><strong className="text-brand-text">Answer questions preemptively.</strong> Go to Q&A section. Post and answer common questions yourself. "Do you have outdoor seating?" "Yes, we have..." This controls the narrative and provides useful information upfront.</p>

          <p><strong className="text-brand-text">Monitor and answer user questions fast.</strong> When customers ask questions, respond within 24 hours. Quick responses show attentiveness. Unanswered questions look bad—like you're ignoring customers.</p>

          <p><strong className="text-brand-text">Use keywords naturally in posts and answers.</strong> If you want to rank for "best breakfast Santa Cruz," mention that in posts and Q&A. Don't spam, but strategic keyword use helps Google understand your offerings.</p>

          <p><strong className="text-brand-text">Call-to-action on every post.</strong> "Call to book," "Order online," "Visit us today." Make it easy for people to convert. Posts should drive action, not just inform.</p>
        </>
      )
    },
    {
      title: "Your GMB Optimization Checklist",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's your step-by-step implementation plan:</p>

          <p><strong className="text-brand-text">Week 1: Complete your profile 100%.</strong> Fill every field. Choose precise categories. Write compelling description. Add all services/products. Set accurate hours. Upload 20+ photos. This is foundation.</p>

          <p><strong className="text-brand-text">Week 2: Launch review generation system.</strong> Create email/text template with direct review link. Train staff to ask every customer. Start tracking review velocity. Target 2-5 new reviews this week.</p>

          <p><strong className="text-brand-text">Week 3: Set up posting schedule.</strong> Create 4 posts (one per week). Product spotlights, special offers, tips, behind-the-scenes. Schedule them. Make this routine.</p>

          <p><strong className="text-brand-text">Week 4: Answer all Q&A.</strong> Seed 10-15 common questions and answer them. Monitor for new questions daily. Respond within 24 hours. Make Q&A section a resource.</p>

          <p><strong className="text-brand-text">Monthly: Update photos and monitor insights.</strong> Add 5-10 new photos monthly. Check GMB insights—how are people finding you? What keywords? Where are they calling from? Use data to refine.</p>
          
          <p className="text-brand-text/70 mt-6">Need help optimizing your Google presence? <Link href="/packages/flow-check">Book a Flow Check</Link> to audit your GMB profile and build your local SEO strategy.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'Client Experience', href: '/blog/client-experience' },
        { label: 'Google Business', href: '/blog/google-my-business-optimization-santa-cruz' }
      ]} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>August 6, 2025</time>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Google My Business Optimization for Santa Cruz Local Search</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">Tourists and locals start their search on Google. If your Google Business Profile isn't optimized, you're invisible. Here's how to dominate local search results.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">In Santa Cruz, showing up in the Google map pack for "[your category] Santa Cruz" can make or break your business. Those three spots get 60-70% of all clicks. The businesses below the map get scraps.</p>

          <p>Optimizing your Google My Business profile is the highest-ROI marketing activity you can do. It's free, it's effective, and most of your competitors are doing it wrong. Here's how to do it right.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Want to dominate local search?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/packages/flow-check">Book a Flow Check</Link> to audit your GMB profile and build your local SEO strategy.</p>
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
              <Link href="/blog/yelp-google-reviews-santa-cruz-businesses" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Yelp and Google Reviews Make or Break Businesses</h4>
                <p className="text-brand-text/70 text-sm">Reputation management for local businesses.</p>
              </Link>
              <Link href="/blog/zero-marketing-budget-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Marketing Budget Is Zero But Need More Customers</h4>
                <p className="text-brand-text/70 text-sm">Free marketing tactics that actually work.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

