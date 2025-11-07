import Link from 'next/link'

export const metadata = { 
  title: 'Why Your Business Feels Harder Than It Should - Vibes Consulting',
  description: 'Most friction in small businesses is invisible. Here\'s how to spot it and what to do about it.'
}

export default function BlogPost() {
  return (
    <div className="pb-20 max-w-3xl">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="mb-4">Why Your Business Feels Harder Than It Should</h1>
          <p className="text-white/60">November 1, 2025 · 6 min read</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-white/80 leading-relaxed">
          <p className="text-lg text-white/90">
            You're working more hours than you planned. Simple tasks take twice as long as they should. Information gets lost between people. Decisions stall for unclear reasons.
          </p>

          <p>
            It's not that your team is incapable. It's not that you lack tools or ambition. The problem is <strong>invisible friction</strong> - small inefficiencies that compound into exhaustion.
          </p>

          <p>
            Most business owners live with this for years because they can't see it clearly enough to fix it. Let me show you where to look.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">The Five Places Friction Hides</h2>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Unclear Decision Rights</h3>
          <p>
            Who decides what? If the answer is "it depends" or "we'll figure it out in the meeting," you have a problem.
          </p>
          
          <p>
            When decision rights aren't explicit, every choice requires a meeting, a Slack thread, or an email chain. People wait for permission they shouldn't need. Leaders become bottlenecks without realizing it.
          </p>

          <div className="card p-6 bg-white/5 my-6">
            <p className="text-white/90 text-sm mb-2"><strong>Example:</strong></p>
            <p className="text-white/70 text-sm">
              A design studio with 8 people was approving every client email before it went out. The founder thought this maintained quality. In reality, it created a 24-hour delay on every response and trained the team not to think for themselves.
            </p>
          </div>

          <p>
            <strong>Fix:</strong> Write down who owns what. Use a simple matrix: Who decides? Who approves? Who's just informed? When you make it explicit, half the meetings disappear.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Information Living in People's Heads</h3>
          <p>
            "Just ask Sarah, she knows how to do that."
          </p>

          <p>
            When critical information lives in someone's brain instead of a document, you create a single point of failure. Sarah goes on vacation and work stops. Sarah gets busy and becomes a bottleneck. Sarah leaves and you realize you never actually understood the process.
          </p>

          <p>
            <strong>Fix:</strong> Whenever you say "just ask [person]," that's a sign you need documentation. Not a 50-page manual - just a one-pager that captures the steps, the exceptions, and who to contact if something breaks.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Meetings That Should Be Emails</h3>
          <p>
            If you're in more than 6 hours of meetings per week, some of them are status updates disguised as collaboration.
          </p>

          <p>
            Real collaboration requires debate, creativity, or problem-solving. Status updates require typing. Most teams spend 40% of their meeting time just telling each other what they already did.
          </p>

          <div className="card p-6 bg-white/5 my-6">
            <p className="text-white/90 text-sm mb-2"><strong>Test:</strong></p>
            <p className="text-white/70 text-sm">
              Look at your calendar. For each recurring meeting, ask: "Could this be an async update with a 24-hour response window?" If yes, kill the meeting.
            </p>
          </div>

          <p>
            <strong>Fix:</strong> Default to async updates in a shared doc or Slack channel. Only meet when you need to decide something together or work through a complex problem in real-time.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">4. Too Many Communication Channels</h3>
          <p>
            Email, Slack, text, phone, project management tool, Google Docs comments. Where does the important information live? Everywhere and nowhere.
          </p>

          <p>
            When communication is fragmented, people miss things, duplicate work, or waste time searching for context. "I swear I saw that somewhere..." becomes a daily experience.
          </p>

          <p>
            <strong>Fix:</strong> Pick two channels max. One for urgent ("respond today") and one for async ("respond this week"). Make the rule explicit. Enforce it gently but consistently.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">5. Workflows Built for the Past</h3>
          <p>
            You started doing things a certain way when you had 3 people. Now you have 10, but the process never evolved.
          </p>

          <p>
            Maybe you're still cc'ing everyone on everything. Maybe every project still routes through the founder. Maybe onboarding still involves 14 different documents because no one ever sat down to simplify it.
          </p>

          <p>
            <strong>Fix:</strong> Pick one workflow that annoys everyone and map it. Draw boxes and arrows showing how work actually moves. Then ask: "If we were designing this from scratch today, what would it look like?" The gap between current and ideal is your roadmap.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">Why You Can't See Your Own Friction</h2>

          <p>
            Here's the hard truth: you're too close to your business to see the friction clearly.
          </p>

          <p>
            You've adapted to the inefficiencies. They feel normal. When someone suggests a change, your brain says "but we've always done it this way" without realizing that's exactly the problem.
          </p>

          <p>
            This is why fresh eyes matter. Someone who isn't embedded in your day-to-day can watch how work moves and immediately spot the patterns you've stopped noticing.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">What Flow Actually Feels Like</h2>

          <p>
            When a business has good flow:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li>People know what they own and make decisions without constant check-ins</li>
            <li>Information is accessible without hunting through Slack history</li>
            <li>Meetings are rare and actually productive when they happen</li>
            <li>New people can ramp up quickly because processes are documented</li>
            <li>Work moves at a sustainable pace instead of constant firefighting</li>
          </ul>

          <p>
            It's not about working more hours. It's about removing the invisible tax on every task.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">Start With One Thing</h2>

          <p>
            You don't need to fix everything at once. In fact, trying to overhaul your entire operation usually creates more chaos.
          </p>

          <p>
            Instead, pick the friction point that costs you the most time or causes the most frustration. Maybe it's unclear ownership. Maybe it's meeting overload. Maybe it's information stuck in people's heads.
          </p>

          <p>
            Fix that one thing. Document the new way. Give it 4 weeks to settle. Then move to the next friction point.
          </p>

          <p>
            Continuous improvement isn't sexy. But it works. Small fixes compound into massive time savings over 6 months.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">The Two-Week Test</h2>

          <p>
            If you want to see your friction clearly, try this:
          </p>

          <ol className="list-decimal pl-6 space-y-2 text-white/80">
            <li>For two weeks, keep a "friction log." Every time something takes longer than it should or feels unnecessarily complicated, write it down.</li>
            <li>Note the pattern: Is it waiting for decisions? Missing information? Too many handoffs? Unclear ownership?</li>
            <li>At the end of two weeks, look for the most common theme. That's your starting point.</li>
          </ol>

          <p>
            Most people discover 3-5 recurring patterns that account for 80% of their frustration. Those are the leverage points.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">When to Get Help</h2>

          <p>
            Some friction you can fix yourself. Clear communication norms, better meeting hygiene, documented decision rights - these are within reach if you have the time and discipline.
          </p>

          <p>
            But sometimes you need someone to map the whole system, spot the patterns you can't see, and design solutions that stick. That's when a Flow Check makes sense.
          </p>

          <p>
            Two weeks, diagnostic, roadmap. You'll know exactly where the friction lives and how to fix it.
          </p>

          <p>
            Because your business shouldn't feel this hard.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="card p-8 bg-current-600/10">
            <h3 className="text-xl mb-3">Want to Fix Your Friction?</h3>
            <p className="text-white/80 mb-6">Book a 30-minute intro call. We'll talk about where your business gets stuck and whether a Flow Check makes sense.</p>
            <Link href="/contact" className="btn btn-primary">Schedule Intro Call</Link>
          </div>
        </div>
      </article>
    </div>
  )
}

