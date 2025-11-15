import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Competing with Tech Salaries for Santa Cruz Talent | Small Business Hiring',
  description: 'How small businesses in Santa Cruz compete with tech companies for quality employees without matching six-figure salaries. Alternative compensation strategies.',
  keywords: 'santa cruz tech salaries, competing for talent, small business hiring, tech competition, employee compensation'
})

export default function CompetingTechSalaries() {
  const sections = [
    {
      title: 'The Salary Reality Check',
      content: (
        <>
          <p className="mb-4">
            Your talented potential employee has two offers: $20/hour at your Santa Cruz retail shop, or $35/hour remote for a tech company. Or they're weighing your $55K operations manager role against a $110K tech job over the hill. You can't match those numbers. So how do you compete?
          </p>
          <p className="mb-4">
            The uncomfortable truth: you don't compete on salary. You compete on everything else—and for the right people in Santa Cruz, everything else matters more than you think. The tech workers moving here and taking pay cuts to stay prove it. The remote workers who could live anywhere but choose Santa Cruz prove it. Your job is finding people for whom lifestyle, values, and work environment outweigh maximum compensation.
          </p>
          <p className="mb-4">
            This isn't about paying poverty wages and calling it "culture." It's about paying fairly within your constraints while offering genuine value that tech companies structurally cannot provide.
          </p>
        </>
      )
    },
    {
      title: 'What You Cannot Compete On',
      content: (
        <>
          <p className="mb-4">
            Before strategy, acknowledge reality. You will lose certain candidates to tech, and that's okay.
          </p>

          <p className="mb-6 mt-6">
            <strong>Where Tech Companies Win:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Base salary:</strong> 1.5-3x what small businesses can pay</li>
            <li><strong>Benefits:</strong> Full health/dental, 401k matching, stock options</li>
            <li><strong>Parental leave:</strong> 12+ weeks paid</li>
            <li><strong>Career progression:</strong> Clear paths to senior roles and big salary jumps</li>
            <li><strong>Resume value:</strong> Big company names open future doors</li>
            <li><strong>Professional development:</strong> Training budgets, conference attendance</li>
            <li><strong>Job security:</strong> Larger financial cushion (though layoffs happen)</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Who You'll Lose to Tech:</strong> People prioritizing maximum earnings, aggressive career advancement, or comprehensive benefits. That's fine—they're not your target anyway.
          </p>
        </>
      )
    },
    {
      title: 'Your Competitive Advantages',
      content: (
        <>
          <p className="mb-4">
            Small businesses in Santa Cruz have structural advantages that tech companies cannot replicate. Your job is making these advantages visible and appealing to right candidates.
          </p>

          <p className="mb-6 mt-6">
            <strong>Where Small Business Wins:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Actual Work-Life Balance</strong>
          </p>
          <p className="mb-4">
            Tech claims work-life balance but reality is often: always-on culture, evening Slack messages, Sunday deployments, pressure to work extra hours because "everyone's passionate." Small businesses can offer genuine boundaries: when you're off, you're off. No laptop at home. No weekend emails. Shifts end and work stays at work.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Surf/Lifestyle Flexibility</strong>
          </p>
          <p className="mb-4">
            Tech has "unlimited PTO" but cultural pressure makes taking it awkward. You can offer real flexibility: "If it's firing, swap shifts with someone" or "Take off for powder day, make it up later." For people who moved to Santa Cruz FOR the lifestyle, this matters more than salary.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Tangible Impact</strong>
          </p>
          <p className="mb-4">
            At big tech: you're optimizing ad click-through rates or building features that might get canceled. At small business: you see direct impact. Customers thank you. Community knows you. You're building something real, not just moving pixels.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Human-Scale Work</strong>
          </p>
          <p className="mb-4">
            Tech work is often: meetings about meetings, bureaucracy, corporate politics, HR policies, remote team coordination. Small business: real work with real people. Less politics, more autonomy, faster decisions.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Values Alignment</strong>
          </p>
          <p className="mb-4">
            Many Santa Cruz residents chose this community for values: sustainability, local economy, authenticity, anti-corporate culture. Working for local business aligns with those values. Tech job creates cognitive dissonance.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Escape from Tech Burnout</strong>
          </p>
          <p className="mb-4">
            Tons of people flee tech because: toxic culture, layoff anxiety, soulless work, constant pressure, ageism. They actively want something different—even at lower pay. These are your target hires.
          </p>
        </>
      )
    },
    {
      title: 'The Value Proposition Framework',
      content: (
        <>
          <p className="mb-4">
            Don't just list job duties. Articulate the complete value proposition that addresses what tech cannot offer.
          </p>

          <p className="mb-6 mt-6">
            <strong>Sample Job Post Structure:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Opening (Lead with lifestyle):</strong>
          </p>
          <p className="mb-4 italic">
            "Live in Santa Cruz, work in Santa Cruz. No commute over the hill. No corporate politics. No Zoom meetings about meetings. Real work, real impact, real balance. Surf before work, bike to the office, home by 5pm. This is why you moved here."
          </p>

          <p className="mb-4 mt-8">
            <strong>Role Description (Emphasize autonomy and impact):</strong>
          </p>
          <p className="mb-4 italic">
            "We need someone to build and run our operations systems. You'll have actual autonomy—not fake 'empowerment' with 15 approval layers. You'll see direct results of your work daily. Small team (8 people), everyone matters."
          </p>

          <p className="mb-4 mt-8">
            <strong>Compensation (Honest and complete):</strong>
          </p>
          <p className="mb-4 italic">
            "$55-65K base depending on experience. We know that's not tech money. We also know you don't want tech life. No after-hours emails. Real PTO (encouraged to use). Surf-flexible schedule. Bike commute from anywhere in town. Health stipend. Profit sharing after year one."
          </p>

          <p className="mb-4 mt-8">
            <strong>Who Should Apply:</strong>
          </p>
          <p className="mb-4 italic">
            "You're done with corporate bureaucracy. You want work that matters in a community you love. You value autonomy over hierarchy, impact over resume flex, balance over burnout."
          </p>
        </>
      )
    },
    {
      title: 'Creative Compensation Strategies',
      content: (
        <>
          <p className="mb-4">
            You can't match tech salary, but you can structure compensation creatively to close the gap and provide value tech doesn't.
          </p>

          <p className="mb-6 mt-6">
            <strong>Beyond Base Salary:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Compressed Work Weeks</strong>
          </p>
          <p className="mb-4">
            Four 10-hour days = three-day weekend every week. For lifestyle-focused people, this is worth thousands in "salary equivalent." Tech can't easily do this due to meeting culture.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Profit Sharing</strong>
          </p>
          <p className="mb-4">
            "Base is $60K, but you get 3% of net profits quarterly." Good year might add $5-10K. Aligns incentives, gives ownership feeling.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Performance Bonuses (Clear and Achievable)</strong>
          </p>
          <p className="mb-4">
            "$500 bonus each quarter we hit revenue target" or "$1,000 if we maintain 95%+ customer satisfaction." Not corporate vague bonus promises—concrete, achievable, paid.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Reduced Hours for Same Pay</strong>
          </p>
          <p className="mb-4">
            $55K for 35 hours/week vs. tech's $90K for 50+ hours/week = similar hourly rate, way better life. For right person, this wins.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Housing Support</strong>
          </p>
          <p className="mb-4">
            If you own property: offer below-market rent as part of compensation. Or housing stipend. Or help with housing search. Housing crisis is biggest obstacle—help solve it.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Lifestyle Perks</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Gym/fitness membership ($50-100/month value)</li>
            <li>Surf coach or lessons ($200-400/month value)</li>
            <li>Bike purchase/maintenance budget</li>
            <li>Free product/services (if retail/food/wellness)</li>
            <li>Paid time for volunteer work</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>7. Development Opportunities</strong>
          </p>
          <p className="mb-4">
            "We'll send you to [relevant conference] annually" or "Budget for courses/certifications" or "Path to partnership/ownership." Long-term growth potential offsets lower starting salary.
          </p>
        </>
      )
    },
    {
      title: 'Target the Right Candidates',
      content: (
        <>
          <p className="mb-4">
            You're not competing for ALL talent. You're competing for talent that values what you offer.
          </p>

          <p className="mb-6 mt-6">
            <strong>Ideal Candidate Profiles:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Tech Refugees</strong>
          </p>
          <p className="mb-4">
            People leaving tech industry deliberately. They know corporate life, they're done with it, they'll take pay cut for sanity. Often highly skilled. Target them explicitly: "Tired of tech? We are too."
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Lifestyle Migrants</strong>
          </p>
          <p className="mb-4">
            Moved to Santa Cruz for quality of life, not career maximization. Already made financial sacrifice to be here. Not going to commute over hill.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Values-Driven Workers</strong>
          </p>
          <p className="mb-4">
            Prioritize mission, community impact, sustainability over maximum earnings. Want work aligned with values.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Parents Prioritizing Balance</strong>
          </p>
          <p className="mb-4">
            Need real work-life balance for family. Tech's "flexible" culture with evening Slack doesn't work. Your actual boundaries do.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Early Retirees or Semi-Retired</strong>
          </p>
          <p className="mb-4">
            Don't need maximum income, want meaningful part-time engagement. Bring tons of experience for below-market rates.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Local Loyalists</strong>
          </p>
          <p className="mb-4">
            Born and raised in Santa Cruz, committed to staying, want to contribute to local economy. Won't leave for tech job.
          </p>
        </>
      )
    },
    {
      title: 'Marketing Your Opportunity',
      content: (
        <>
          <p className="mb-4">
            Post on Indeed and you're competing with tech. Post where your target candidates hang out, and you're the only option.
          </p>

          <p className="mb-6 mt-6">
            <strong>Where to Reach Right Candidates:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Local Facebook groups:</strong> "Santa Cruz Living," neighborhood groups (people committed to staying local)</li>
            <li><strong>Activity communities:</strong> Surf, yoga, cycling groups (lifestyle-focused people)</li>
            <li><strong>Co-working spaces:</strong> Nextspace, etc. (remote workers considering local opportunities)</li>
            <li><strong>Local events:</strong> Farmers market flyers, community boards, sponsorships</li>
            <li><strong>Your existing network:</strong> Customers, suppliers, friends (referrals are gold)</li>
            <li><strong>Anti-corporate messaging:</strong> "Tired of Zoom culture? Want real work?" resonates with target audience</li>
          </ul>
        </>
      )
    },
    {
      title: 'The Long-Term Strategy',
      content: (
        <>
          <p className="mb-4">
            You won't win everyone. But you only need to win the right few people. Build systems that retain them.
          </p>

          <p className="mb-6 mt-6">
            <strong>Retention Matters More Than Acquisition:</strong>
          </p>
          <p className="mb-4">
            If you can keep good employees 3-5 years instead of 1-2, you're solving the tech competition problem. They develop institutional knowledge, build relationships, become invested in business success. Their compensation grows but still stays below tech. And they're happy because they're living the life they chose Santa Cruz for.
          </p>

          <p className="mb-6 mt-8">
            <strong>Build Culture That Retains:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Actually respect time off (don't text employees on days off)</li>
            <li>Honor surf flexibility (if you promise it, deliver it)</li>
            <li>Regular raises (even small ones show appreciation)</li>
            <li>Genuine autonomy (let people own their work)</li>
            <li>Transparent finances (when business does well, share it)</li>
            <li>Community involvement (sponsor local events, support causes)</li>
          </ul>

          <p className="mb-4 mt-6">
            Your competitive advantage isn't what you promise—it's what you deliver consistently over years.
          </p>
        </>
      )
    }
  ]

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-text">
            Competing with Tech Salaries for Santa Cruz Talent
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            How small businesses attract quality employees without matching tech company salaries. Compete on lifestyle, values, and work environment instead of pure compensation.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Competing for Talent?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz small businesses build compensation strategies, value propositions, and culture that attract quality employees without tech-level salaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Build Better Hiring Strategy
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Talent Challenges
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

