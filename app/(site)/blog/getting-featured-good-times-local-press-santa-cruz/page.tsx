import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: "Getting Featured in Good Times or Santa Cruz Local Press",
  description: "Local press coverage drives customers and builds credibility. But how do you get featured? Here's the insider approach to earning Santa Cruz media attention."
}

export default function BlogPost() {
  const sections = [
    {
      title: "Why Local Press Coverage Matters",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Local media attention is marketing gold in Santa Cruz:</p>

          <p><strong className="text-brand-text">Credibility you can't buy.</strong> A Good Times feature carries more weight than $10K in ads. Third-party validation from trusted local media builds instant credibility. People trust editorial content over advertising.</p>

          <p><strong className="text-brand-text">Reach the exact audience you want.</strong> Good Times readers are Santa Cruz locals—your year-round customers. Local online publications reach both residents and tourists researching the area. This is your market.</p>

          <p><strong className="text-brand-text">Content you can leverage forever.</strong> One feature becomes social media content, website testimonials, "As featured in..." badges, and email marketing material. Single article, multiple uses.</p>

          <p><strong className="text-brand-text">SEO benefits.</strong> Links from Good Times, Santa Cruz Sentinel, local blogs improve your search rankings. Local media backlinks signal to Google that you're legitimate and relevant locally.</p>

          <p><strong className="text-brand-text">It's completely free.</strong> Editorial coverage costs nothing except time invested in pitching and relationship building. Unlike advertising, earned media has zero dollar cost and higher trust.</p>
        </>
      )
    },
    {
      title: "What Makes You Newsworthy",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Media outlets need stories. You need coverage. Here's what they want:</p>

          <p><strong className="text-brand-text">Local angle and community impact.</strong> You're not just a business—you're contributing to Santa Cruz. Hiring locally, sourcing from local vendors, participating in community, solving local problems. That's the story.</p>

          <p><strong className="text-brand-text">Something new or different.</strong> New business opening. New product launch. Innovative approach. Unique story. 25-year anniversary. Journalists need fresh angles. Give them something that hasn't been covered before.</p>

          <p><strong className="text-brand-text">Human interest element.</strong> Stories about people resonate. Your journey starting the business. Employee spotlights. Customer transformations. Media wants human stories, not business press releases.</p>

          <p><strong className="text-brand-text">Timely hooks.</strong> Tie your story to current events, seasons, or trends. Opening an ice cream shop? Pitch it in May before summer. Sustainability initiative? Tie it to Earth Day or recent climate news. Timing matters.</p>

          <p><strong className="text-brand-text">Visual appeal.</strong> Good photos or video opportunities increase your chances. Media needs content that looks good. If your business, product, or story is photogenic, lead with that.</p>
        </>
      )
    },
    {
      title: "How to Pitch Local Media",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's the step-by-step approach:</p>

          <p><strong className="text-brand-text">1. Identify the right outlet and contact.</strong> Good Times (arts, culture, food, lifestyle). Santa Cruz Sentinel (news, business). Lookout Santa Cruz (local news, deep dives). Each has specific beats and writers. Find who covers businesses like yours.</p>

          <p><strong className="text-brand-text">2. Research their past coverage.</strong> Read what they've written recently. Understand their angle and style. Reference their work in your pitch. "I saw your article on [topic] and thought you might be interested in..."</p>

          <p><strong className="text-brand-text">3. Craft a compelling subject line.</strong> "New Santa Cruz bakery using 100% local flour" beats "Business opening announcement." Be specific. Be interesting. Make them want to open your email.</p>

          <p><strong className="text-brand-text">4. Write a tight 3-paragraph pitch.</strong> Paragraph 1: What's the story and why now? Paragraph 2: Why it matters to Santa Cruz readers. Paragraph 3: Your availability for interview and photo opportunities. Keep it under 150 words.</p>

          <p><strong className="text-brand-text">5. Make it easy for them.</strong> Offer interview availability. Provide high-res photos. Suggest angles they could take. Journalists are busy. The easier you make their job, the more likely they'll cover you.</p>
        </>
      )
    },
    {
      title: "Building Media Relationships",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">One-off pitches work. Relationships work better:</p>

          <p><strong className="text-brand-text">Follow and engage with local journalists.</strong> Twitter, Instagram, LinkedIn—follow Santa Cruz journalists. Comment thoughtfully on their work. Share their articles. Build familiarity before you need coverage.</p>

          <p><strong className="text-brand-text">Be a source, not just a pitch.</strong> When journalists are working on Santa Cruz business stories, offer yourself as a source even if you're not the focus. Provide useful insights. Help them with their work. They'll remember.</p>

          <p><strong className="text-brand-text">Respond quickly and completely.</strong> When a journalist reaches out, respond within hours (not days). Answer questions thoroughly. Provide what they need. Reputation for being responsive = more coverage.</p>

          <p><strong className="text-brand-text">Never badger or complain.</strong> If they don't cover your story, accept it gracefully. Don't complain about coverage angles. Don't demand corrections for minor things. Be professional. The relationship matters more than any single story.</p>

          <p><strong className="text-brand-text">Thank them and share their work.</strong> When you get coverage, thank the journalist publicly and share widely. Tag them in social media. Send a personal thank-you note. Make them glad they covered you.</p>
        </>
      )
    },
    {
      title: "Alternative Local Coverage Opportunities",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Beyond traditional media:</p>

          <p><strong className="text-brand-text">Local podcasts and YouTube channels.</strong> Santa Cruz has local content creators with engaged audiences. Pitch yourself as a guest. Easier to book than traditional media, often more intimate conversations, still builds credibility.</p>

          <p><strong className="text-brand-text">Community calendars and event listings.</strong> Good Times events calendar, local blogs, neighborhood newsletters. Any public event you're hosting—list it everywhere. Free visibility that drives attendance.</p>

          <p><strong className="text-brand-text">Local blogs and influencers.</strong> Santa Cruz lifestyle bloggers, food Instagram accounts, local influencers. They're always looking for content. Invite them in. Give them reason to feature you. Their audiences trust them.</p>

          <p><strong className="text-brand-text">Industry and trade publications.</strong> If you're in hospitality, food, retail—there are trade publications covering Santa Cruz businesses. Pitch them. Less competitive than consumer media, still builds credibility.</p>

          <p><strong className="text-brand-text">Business associations and chambers.</strong> Get featured in Chamber of Commerce newsletters, Downtown Association communications, neighborhood business group publications. These reach other business owners who become customers and referral sources.</p>
        </>
      )
    },
    {
      title: "Your Media Outreach Plan",
      content: (
        <>
<p className="text-lg leading-relaxed text-brand-text/70">Here's your 90-day execution:</p>

          <p><strong className="text-brand-text">Month 1: Build your story and assets.</strong> Write your story. What makes you newsworthy? Create 3-5 pitch angles. Take professional photos. Build a simple media kit (bio, photos, key facts). Prepare foundation.</p>

          <p><strong className="text-brand-text">Month 2: Start relationship building.</strong> Follow 10-15 local journalists and content creators. Engage with their work. Comment thoughtfully. Share their articles. Build visibility before pitching.</p>

          <p><strong className="text-brand-text">Month 3: Launch outreach.</strong> Send 5-10 personalized pitches to targeted journalists. Follow up once after a week if no response. Track who you've contacted and what you pitched. Be systematic.</p>

          <p><strong className="text-brand-text">Ongoing: Create newsworthy moments.</strong> Don't wait for news—create it. Events, partnerships, initiatives, milestones. Give yourself reasons to pitch quarterly. Consistent outreach beats one-off attempts.</p>

          <p><strong className="text-brand-text">When you get coverage: Leverage it.</strong> Social media, website, email, physical displays. Milk that coverage for everything it's worth. One article becomes 20 pieces of content.</p>
          
          <p className="text-brand-text/70 mt-6">Need help crafting your story and media strategy? <Link href="/packages/flow-check">Book a Flow Check</Link> to build your local PR approach.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'Client Experience', href: '/blog/client-experience' },
        { label: 'Local Press', href: '/blog/getting-featured-good-times-local-press-santa-cruz' }
      ]} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>July 30, 2025</time>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span className="text-current-500">Santa Cruz Business</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Getting Featured in Good Times or Santa Cruz Local Press</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">Local press coverage drives customers and builds credibility. But how do you get featured? Here's the insider approach to earning Santa Cruz media attention.</p>
        </header>

        <div className="space-y-12 mb-12">
{/* Opening paragraph with drop cap effect */}
          <p className="text-lg leading-relaxed">A Good Times feature or Sentinel article can change your business overnight. Suddenly everyone knows who you are. Your phone rings. Your website traffic spikes. Locals start showing up saying "I saw the article."</p>

          <p>But most businesses never get covered because they don't know how to pitch. Local journalists want to feature Santa Cruz businesses—you just need to make it easy for them. Here's how.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
<div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Need help with local PR strategy?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/packages/flow-check">Book a Flow Check</Link> to craft your story and media outreach plan.</p>
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
              <Link href="/blog/zero-marketing-budget-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Marketing Budget Is Zero</h4>
                <p className="text-brand-text/70 text-sm">Free marketing tactics including PR.</p>
              </Link>
              <Link href="/blog/building-local-loyalty-offset-tourist-dependency" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Santa Cruz Business</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Building Local Loyalty</h4>
                <p className="text-brand-text/70 text-sm">Press coverage builds local awareness.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

