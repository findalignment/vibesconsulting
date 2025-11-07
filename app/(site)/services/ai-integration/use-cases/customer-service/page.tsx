import Link from 'next/link'

export const metadata = { title: 'Customer Service Support - AI Use Case' }

export default function CustomerServicePage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to AI Integration
      </Link>

      <h1 className="mb-4">Customer Service Support</h1>
      <p className="text-xl text-white/90 mb-8">Use AI to handle common inquiries, draft responses, and support your customer service team.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Common Applications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">FAQ Chatbots</h3>
              <p className="text-white/70 text-xs">AI-powered chat widget answers common questions 24/7. Reduces ticket volume by 30-50%.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Email Response Drafts</h3>
              <p className="text-white/70 text-xs">AI reads customer email, suggests response. Team reviews, personalizes, sends. Cuts response time in half.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Ticket Categorization</h3>
              <p className="text-white/70 text-xs">AI reads incoming support requests and auto-categorizes by urgency and topic. Proper routing, faster resolution.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Knowledge Base Creation</h3>
              <p className="text-white/70 text-xs">AI analyzes common questions and generates FAQ articles, help docs, video scripts.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Sentiment Analysis</h3>
              <p className="text-white/70 text-xs">AI flags frustrated or angry customer messages for immediate attention. Prevents escalations.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Follow-Up Automation</h3>
              <p className="text-white/70 text-xs">AI drafts check-in messages: "Did our solution work?" "Need anything else?" Maintains engagement.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Train AI on Your FAQs</h3>
              <p className="text-white/70 text-sm mb-3">We feed AI your existing help docs, common questions, and brand voice guidelines. It learns your typical responses.</p>
              <p className="text-white/60 text-xs">The more context you provide, the better AI's suggestions become.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">2. AI Handles Routine Inquiries</h3>
              <p className="text-white/70 text-sm mb-3">Simple questions (hours, pricing, policies) get answered instantly by chatbot. Complex issues get routed to humans with AI-drafted response.</p>
              <p className="text-white/60 text-xs">Example: "What are your hours?" → AI answers immediately. "I have a billing issue" → Routes to human with context summary.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">3. Team Reviews AI Drafts</h3>
              <p className="text-white/70 text-sm mb-3">For complex inquiries, AI provides a draft response. Your team edits for accuracy and adds personal touch before sending.</p>
              <p className="text-white/60 text-xs">AI doesn't replace humans - it makes them faster and more consistent.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">4. Continuous Learning</h3>
              <p className="text-white/70 text-sm mb-3">As your team corrects AI responses, the system improves. Over time, drafts need less editing.</p>
              <p className="text-white/60 text-xs">First month: 40% of draft needs revision. After 3 months: 10% needs revision.</p>
            </div>
          </div>
        </section>

        

        <section>
          <h2 className="mb-4">Tools We Recommend</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">Intercom or Drift (AI Chatbots)</h3>
              <p className="text-white/70 text-sm mb-2">Chat widgets with AI-powered responses. Integrates with your website and help docs.</p>
              <p className="text-white/60 text-xs"><strong>Cost:</strong> Starting at $39-$50/month</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Zendesk or Freshdesk (AI-Assisted Ticketing)</h3>
              <p className="text-white/70 text-sm mb-2">Support ticket systems with AI response suggestions, auto-categorization, and sentiment analysis.</p>
              <p className="text-white/60 text-xs"><strong>Cost:</strong> Starting at $15-25/agent/month</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">ChatGPT + Custom GPT</h3>
              <p className="text-white/70 text-sm mb-2">Build custom AI trained on your specific help docs. Team uses it to draft responses.</p>
              <p className="text-white/60 text-xs"><strong>Cost:</strong> ChatGPT Plus at $20/month per user</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">Tidio or Chatfuel (Simple Chatbots)</h3>
              <p className="text-white/70 text-sm mb-2">Budget-friendly chatbot options for small businesses. Less sophisticated but easy to set up.</p>
              <p className="text-white/60 text-xs"><strong>Cost:</strong> Free tier available, paid plans $25-50/month</p>
            </div>
          </div>
          
          <p className="text-white/70 text-sm mt-4">We help you choose based on your inquiry volume, complexity, and budget.</p>
        </section>

        <section>
          <h2 className="mb-4">Safety & Quality Considerations</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3">Customer service AI requires careful implementation:</p>
            
            <ul className="space-y-2 text-sm text-white/70">
              <li>• <strong>Always allow human escalation.</strong> Customers should easily reach a real person if AI can't help.</li>
              <li>• <strong>Don't let AI make promises.</strong> Refunds, policy exceptions, custom solutions need human approval.</li>
              <li>• <strong>Train AI on brand voice.</strong> Robotic or overly formal responses damage brand perception.</li>
              <li>• <strong>Monitor AI accuracy weekly.</strong> Check flagged conversations to catch errors before customers complain.</li>
              <li>• <strong>Never expose customer data.</strong> If using public AI tools for drafting, anonymize all personal information.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Expected Impact</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">40-60%</div>
              <p className="text-white text-sm font-medium mb-1">Inquiry Reduction</p>
              <p className="text-white/60 text-xs">Chatbot handles common questions without human involvement</p>
            </div>
            
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">50%</div>
              <p className="text-white text-sm font-medium mb-1">Faster Response Time</p>
              <p className="text-white/60 text-xs">AI drafts cut response time from hours to minutes</p>
            </div>
            
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">10-20</div>
              <p className="text-white text-sm font-medium mb-1">Hours/Week Saved</p>
              <p className="text-white/60 text-xs">Per team member handling customer support</p>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Scale Customer Support?</h2>
          <p className="text-white/80 mb-4">We implement AI support tools that maintain your brand voice and delight customers. Part of our AI Integration service.</p>
          <Link href="/packages/flow-rebuild" className="btn btn-primary inline-block">Explore AI Integration</Link>
        </section>
      </div>
    </div>
  )
}

