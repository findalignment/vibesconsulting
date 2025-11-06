import Link from 'next/link'

export const metadata = { title: 'Content Creation & Copywriting — AI Use Case' }

export default function ContentCreationPage() {
  return (
    <div className="pb-20 max-w-4xl">
      <Link href="/services/ai-integration" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to AI Integration
      </Link>

      <h1 className="mb-4">Content Creation & Copywriting</h1>
      <p className="text-xl text-white/90 mb-8">Use AI to draft emails, social posts, blog outlines, and marketing copy — without sounding robotic.</p>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4">Common Applications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Email Templates</h3>
              <p className="text-white/70 text-xs">Client follow-ups, status updates, scheduling requests. AI drafts the structure, you add the personal touch.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Social Media Captions</h3>
              <p className="text-white/70 text-xs">Instagram, LinkedIn, Facebook posts. Generate 5 options, pick the best, tweak to match your voice.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Blog Outlines</h3>
              <p className="text-white/70 text-xs">AI creates structure and key points. You fill in the details and expertise.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Marketing Copy</h3>
              <p className="text-white/70 text-xs">Service descriptions, ad copy, landing page text. First draft in minutes instead of hours.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Newsletters</h3>
              <p className="text-white/70 text-xs">Monthly updates, announcements, educational content. AI organizes, you customize.</p>
            </div>
            
            <div className="card p-4">
              <h3 className="text-white text-sm font-medium mb-2">Proposals & Pitches</h3>
              <p className="text-white/70 text-xs">Client proposals, partnership pitches. Professional formatting and structure from rough notes.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg mb-2">1. Start with a Good Prompt</h3>
              <p className="text-white/70 text-sm mb-3">The better your input, the better the output. We teach you prompt design: clarity, context, constraints.</p>
              <p className="text-white/60 text-xs">Example: "Write a friendly email to a potential client who visited our studio yesterday. Tone: warm but professional. Length: 3 paragraphs."</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">2. AI Generates First Draft</h3>
              <p className="text-white/70 text-sm mb-3">In 10-30 seconds, you have a solid starting point. Not perfect, but 70-80% of the way there.</p>
              <p className="text-white/60 text-xs">Saves the blank-page problem. You're editing instead of creating from scratch.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">3. You Add the Human Touch</h3>
              <p className="text-white/70 text-sm mb-3">Personalize details, adjust tone, fix awkward phrasing, add specific facts only you know.</p>
              <p className="text-white/60 text-xs">This step is critical. AI gives structure, you add soul.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-2">4. Final Quality Check</h3>
              <p className="text-white/70 text-sm mb-3">Read it aloud. Does it sound like you? Is everything accurate? Then publish/send.</p>
              <p className="text-white/60 text-xs">Never skip this step. AI makes mistakes — you're the final filter.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Real Example: Email Campaign</h2>
          <div className="card p-6 bg-current-600/10">
            <p className="text-white/90 font-medium mb-3">Fitness Studio: New Class Launch Email</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Old Process (45 minutes):</h4>
                <ul className="text-white/70 text-xs space-y-1 pl-3">
                  <li>• Stare at blank screen for 10 minutes</li>
                  <li>• Write rough draft (20 minutes)</li>
                  <li>• Rewrite 3 times to get tone right (15 minutes)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white text-sm font-medium mb-1">New Process with AI (10 minutes):</h4>
                <ul className="text-white/70 text-xs space-y-1 pl-3">
                  <li>• Input prompt with class details (2 minutes)</li>
                  <li>• AI generates 3 email options (30 seconds)</li>
                  <li>• Pick best option, personalize (5 minutes)</li>
                  <li>• Final check and send (2 minutes)</li>
                </ul>
              </div>
            </div>
            
            <p className="text-white/60 text-xs mt-4"><strong>Time saved:</strong> 35 minutes per email. Over 20 campaigns/year = 12+ hours saved.</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Tools We Recommend</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg mb-2">ChatGPT (OpenAI)</h3>
                  <p className="text-white/70 text-sm mb-2">Most versatile. Great for all content types. Easy to use.</p>
                  <p className="text-white/60 text-xs mb-2"><strong>Best for:</strong> Email, social posts, blog outlines, general copywriting</p>
                  <p className="text-white/60 text-xs"><strong>Cost:</strong> Free tier available, Plus at $20/month</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg mb-2">Jasper</h3>
                  <p className="text-white/70 text-sm mb-2">Marketing-focused AI. Templates for specific use cases.</p>
                  <p className="text-white/60 text-xs mb-2"><strong>Best for:</strong> Marketing copy, ads, landing pages, SEO content</p>
                  <p className="text-white/60 text-xs"><strong>Cost:</strong> Starting at $49/month</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg mb-2">Copy.ai</h3>
                  <p className="text-white/70 text-sm mb-2">Simpler interface, good for quick tasks.</p>
                  <p className="text-white/60 text-xs mb-2"><strong>Best for:</strong> Social captions, short emails, product descriptions</p>
                  <p className="text-white/60 text-xs"><strong>Cost:</strong> Free tier available, Pro at $36/month</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-white/70 text-sm mt-4">We help you choose the right tool based on your needs and budget.</p>
        </section>

        <section>
          <h2 className="mb-4">Safety Considerations</h2>
          <div className="card p-6 bg-white/5">
            <p className="text-white/80 mb-3">Content creation is low-risk, but follow these guidelines:</p>
            
            <ul className="space-y-2 text-sm text-white/70">
              <li>• <strong>Don't input client-specific sensitive data.</strong> Use placeholders like [CLIENT NAME].</li>
              <li>• <strong>Always fact-check.</strong> AI can hallucinate details — verify before publishing.</li>
              <li>• <strong>Maintain your voice.</strong> Don't copy-paste AI output verbatim. Add personality.</li>
              <li>• <strong>Disclose if required.</strong> Some industries require AI disclosure. Check your rules.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Expected Time Savings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">50-70%</div>
              <p className="text-white text-sm font-medium mb-1">Time Reduction</p>
              <p className="text-white/60 text-xs">Most content tasks take half the time with AI assistance</p>
            </div>
            
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">5-10</div>
              <p className="text-white text-sm font-medium mb-1">Hours/Week Saved</p>
              <p className="text-white/60 text-xs">For teams doing regular content creation</p>
            </div>
            
            <div className="card p-4">
              <div className="text-2xl font-bold text-current-500 mb-2">3-5x</div>
              <p className="text-white text-sm font-medium mb-1">Volume Increase</p>
              <p className="text-white/60 text-xs">Produce more content in the same amount of time</p>
            </div>
          </div>
        </section>

        <section className="card p-6 bg-current-600/10">
          <h2 className="mb-4">Ready to Streamline Content Creation?</h2>
          <p className="text-white/80 mb-4">We teach you how to use AI for content without losing your voice. Part of our AI Integration service.</p>
          <Link href="/packages/flow-rebuild" className="btn btn-primary inline-block">Explore AI Integration</Link>
        </section>
      </div>
    </div>
  )
}

