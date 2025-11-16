import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: "Online Review Response Strategy | Reputation Management",
  description: "How to respond to Google, Yelp, and Facebook reviews professionally. Turn feedback into reputation asset and customer relationships."
}

export default function BlogPost() {
  const sections = [
    {
      title: "Why Response Matters",
      content: (
        <>
          <p className="text-lg leading-relaxed text-brand-text/70">Review responses affect your reputation significantly:</p>

          <p><strong className="text-brand-text">Future customers read responses.</strong> They're not just reading reviews—they're reading your responses. How you handle criticism, acknowledge praise, and engage with customers tells prospects everything about your character and customer service. Professional gracious responses to even harsh criticism demonstrate integrity. Defensive angry responses confirm critics' complaints. Your responses are part of your marketing whether you treat them that way or not. Every response is public performance visible to thousands of future customers. Make them count.</p>

          <p><strong className="text-brand-text">Engagement shows you care.</strong> Responding demonstrates active business ownership. Neglected reviews signal abandoned or indifferent business. Even simple "thank you" responses show appreciation. This engagement matters to customers—they want to know business values their feedback. Unresponded reviews feel like shouting into void. Responded reviews feel like conversation. People prefer doing business with responsive engaged owners versus distant absent ones. Response rate itself is reputation signal.</p>

          <p><strong className="text-brand-text">Negative reviews are opportunities.</strong> Handled well, negative review becomes positive demonstration of customer service. "Had issue, they fixed it immediately and went above and beyond" is powerful testimonial. Potential customers understand problems happen—they evaluate businesses by problem resolution, not perfection. Your response to criticism shows character more than glowing review shows competence. Many successful businesses have converted critics into advocates through excellent review response and follow-up.</p>
        </>
      )
    },
    {
      title: "Response Framework",
      content: (
        <>
          <p className="text-lg leading-relaxed text-brand-text/70">Follow this structure for all responses:</p>

          <p><strong className="text-brand-text">Thank the reviewer.</strong> Start every response with gratitude—even for negative reviews. "Thank you for your feedback" or "We appreciate you taking time to share your experience." This sets constructive tone and shows respect. It's hard to stay angry when met with genuine thanks. Even harsh critics soften when treated with unexpected grace. Gratitude diffuses tension and demonstrates professionalism. Make it first thing you say every time.</p>

          <p><strong className="text-brand-text">Acknowledge specific points.</strong> Show you actually read their review by referencing specifics. Don't copy-paste generic responses. "I'm glad you enjoyed the [specific menu item] and that [specific staff member] took good care of you." Or "I understand your frustration with [specific issue]—that's not the experience we want to provide." Specificity proves genuine engagement. Generic responses feel automated and insincere. Personalization matters.</p>

          <p><strong className="text-brand-text">Address concerns honestly.</strong> If they're right, admit it. "You're absolutely correct that the wait time was too long. We were understaffed that evening, which isn't acceptable excuse but explains what happened. We've since adjusted scheduling to prevent this." Honesty and accountability build trust. Defensiveness destroys it. Own mistakes. Explain (not excuse). Share what you're doing differently. This transparency shows integrity and continuous improvement.</p>

          <p><strong className="text-brand-text">Offer resolution privately.</strong> For negative reviews, invite offline conversation. "I'd love to make this right. Please contact me directly at [email/phone] so we can discuss how to resolve this." Takes conversation private where you can fully address issue without public back-and-forth. Also shows genuine desire to fix problems versus just managing public perception. Many reviewers update reviews positively after private resolution. But invitation must be genuine—follow through when they contact you.</p>

          <p><strong className="text-brand-text">Keep it brief and professional.</strong> 3-5 sentences typically sufficient. Don't write essays. Don't argue. Don't be defensive. Professional, courteous, constructive. Use proper grammar and spelling. Remember this is public business communication. Treat it with same care as important email to valued client. Because that's exactly what it is—public communication observed by current and future clients.</p>
        </>
      )
    },
    {
      title: "Handling Different Review Types",
      content: (
        <>
          <p className="text-lg leading-relaxed text-brand-text/70">Adjust approach to review category:</p>

          <p><strong className="text-brand-text">Positive reviews: Gratitude and personality.</strong> "Thank you so much, [name]! We're thrilled you enjoyed [specific thing they mentioned]. [Staff member] will be happy to hear your kind words. We look forward to seeing you again soon!" Show genuine appreciation. Use names (theirs and staff mentioned). Reference specifics. Add bit of personality reflecting your brand. This isn't just acknowledging review—it's continuing relationship and showing others your business culture. Makes strong impression on readers.</p>

          <p><strong className="text-brand-text">Constructive criticism: Acknowledge and improve.</strong> "Thank you for this feedback, [name]. You're absolutely right that [issue] needs improvement. We've heard similar concerns and are implementing [specific change]. We appreciate customers who help us get better. Please give us another opportunity to provide the experience you deserve." This response shows humility, accountability, and commitment to improvement. Prospective customers see business that listens and evolves versus business that makes excuses.</p>

          <p><strong className="text-brand-text">Unfair/false reviews: Facts without anger.</strong> "Thank you for your review. For accuracy: [factual correction]. We have no record of [claimed event] and [specific facts that contradict review]. If you'd like to discuss privately, please contact us at [contact]. We're committed to excellent service and addressing legitimate concerns." Calm factual response without attacking reviewer. Other readers can judge credibility. Don't let false reviews stand uncorrected, but correction must be professional and fact-based, not emotional or accusatory.</p>

          <p><strong className="text-brand-text">Vague negative reviews: Seek details privately.</strong> "Thank you for feedback. I'm sorry we didn't meet expectations. Could you contact me at [contact]? I'd like to understand specifically what went wrong so we can address it and make things right." Without specifics, can't respond substantively publicly. Invite private conversation to get details and resolve. This shows willingness to address issues even when reviewer was vague. Often vague negative reviewers don't respond to outreach—that itself tells prospective customers something about review legitimacy.</p>

          <p><strong className="text-brand-text">Competitor sabotage: Report and respond briefly.</strong> Occasionally competitors post false reviews. Report to platform (Google/Yelp have processes for this). Respond briefly: "We have no record of this visit and believe this review doesn't reflect genuine customer experience. We're working with [platform] to investigate." Don't accuse competitor publicly. Let facts speak. Most readers distinguish between legitimate criticism and suspicious one-star reviews with generic complaints. Your professional response helps them differentiate.</p>
        </>
      )
    },
    {
      title: "Review Management System",
      content: (
        <>
          <p className="text-lg leading-relaxed text-brand-text/70">Build sustainable review management practice:</p>

          <p><strong className="text-brand-text">Monitor platforms daily.</strong> Set up Google Alerts or use review management software (Podium, Birdeye, ReviewTrackers—$100-300/month). Get notified immediately when reviews post. Respond within 24-48 hours while review is fresh. Delayed responses look like you don't care or don't monitor reviews. Quick responses show engagement and care. Make review monitoring daily habit like checking email. Assign responsibility clearly if multiple people could do it. Can't be everyone's job—becomes nobody's job. Designate owner. Track consistently.</p>

          <p><strong className="text-brand-text">Create response templates.</strong> Don't copy-paste them—customize for each review. But having templates saves time and ensures you hit key points. Positive review template, constructive criticism template, service issue template, false review template. These frameworks speed response without sacrificing personalization. Update templates quarterly based on what's working. Train team members on response guidelines so multiple people can respond consistently and appropriately. This enables scaling review response as volume grows.</p>

          <p><strong className="text-brand-text">Track and resolve offline.</strong> When negative review leads to private resolution, document it. Note in CRM or spreadsheet: reviewer contacted, issue discussed, resolution provided. Follow up: "Did our solution work for you? Would you consider updating your review?" Don't demand update—invite it. Many satisfied resolved customers happily update reviews. But only if you actually resolved their issue and followed up personally. This systematic offline follow-up converts negative reviews into positive outcomes and demonstrates to other reviewers that you genuinely address concerns.</p>

          <p><strong className="text-brand-text">Generate positive reviews systematically.</strong> Don't just manage reviews—actively generate them. Ask happy customers to review you. Make it easy: text with direct review link, email with instructions, business cards with QR codes. Ask at point of satisfaction: after great service, when they thank you, when they refer someone. "Would you mind sharing your experience on Google? It really helps other customers find us." Most happy customers are willing—they just need to be asked and directed. Build 100+ positive reviews creating buffer when occasional negative review appears.</p>

          <p className="text-brand-text/70 mt-6">Need help developing review management strategy? <Link href="/contact">Contact us</Link> for reputation management guidance.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'Client Experience', href: '/blog/client-experience' },
        { label: 'Review Response', href: '/blog/online-review-response-strategy' }
      ]} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>August 4, 2025</time>
            <span>•</span>
            <span>9 min read</span>
            <span>•</span>
            <span className="text-current-500">Reputation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Online Review Response Strategy</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">How to respond to Google, Yelp, and Facebook reviews professionally. Turn feedback into reputation asset and customer relationships.</p>
        </header>

        <div className="space-y-12 mb-12">
          <p className="text-lg leading-relaxed">Every business gets reviews—Google, Yelp, Facebook, industry-specific platforms. Some are glowing praise. Some are constructive criticism. Some are harsh attacks. Most business owners read reviews nervously, unsure how to respond or whether to respond at all. Should you thank positive reviewers? Address negative feedback? Ignore false accusations? The uncertainty leads to inconsistent responses or complete silence. Meanwhile, prospective customers read both reviews AND your responses (or lack thereof), forming impressions about your character, customer service, and professionalism. Your review response strategy—or absence of strategy—directly affects reputation and customer acquisition.</p>

          <p>Professional consistent review responses accomplish multiple goals simultaneously: they show appreciation to positive reviewers, demonstrate accountability and problem-solving to critics, prove active business ownership to prospects, and create opportunities to convert problems into positive resolutions. Done well, review responses become reputation asset strengthening business image. Done poorly or not at all, reviews become reputation liability where your silence or defensive responses confirm worst interpretations. The difference isn't difficult or time-consuming—it's having clear framework and consistent execution. Most businesses lack both.</p>

          <p>This guide provides structured approach to review responses: why they matter, framework for crafting effective responses, how to handle different review types, and building sustainable review management system. Because reviews will keep coming. Question is whether you manage them strategically or let them manage you. Let's build system turning reviews into reputation asset.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
          <div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Need reputation management support?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/contact">Contact us</Link> for review response strategies and training.</p>
            <Link href="/contact" className="text-current-500 hover:underline text-sm">Get in touch →</Link>
          </div>
        
          <div className="mt-16 pt-12 border-t border-white/10">
            <Link href="/blog/client-experience" className="inline-flex items-center gap-2 text-current-500 hover:text-current-400 transition-colors mb-8">
              <span>←</span> Back to Client Experience Hub
            </Link>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-brand-text mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/yelp-google-reviews-santa-cruz-businesses" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Marketing</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Managing Online Reviews</h4>
                <p className="text-brand-text/70 text-sm">Review generation strategies.</p>
              </Link>
              <Link href="/blog/word-of-mouth-travels-fast-small-community-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Reputation</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Word-of-Mouth Dynamics</h4>
                <p className="text-brand-text/70 text-sm">Managing local reputation.</p>
              </Link>
              <Link href="/blog/handling-difficult-customers-small-community-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Handling Difficult Customers</h4>
                <p className="text-brand-text/70 text-sm">Conflict resolution strategies.</p>
              </Link>
            </div>

            <div className="mt-8 p-6 bg-current-600/10 rounded-lg">
              <p className="font-semibold text-brand-text mb-2">Building strong online reputation?</p>
              <Link href="/contact" className="text-current-500 hover:text-current-400 font-semibold inline-flex items-center gap-2">
                Get Strategic Guidance <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

