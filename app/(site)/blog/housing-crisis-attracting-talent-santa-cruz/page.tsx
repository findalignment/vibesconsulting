import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Housing Crisis Makes It Hard to Attract Talent in Santa Cruz | Recruitment Solutions',
  description: 'How Santa Cruz housing crisis prevents attracting quality candidates. Creative recruitment strategies when housing is your biggest obstacle.',
})

export default function HousingCrisisAttractingTalent() {
  const sections = [
    {
      title: 'The Recruitment Dead End',
      content: (
        <>
          <p className="mb-4">
            Perfect candidate: experienced, professional, excited about opportunity. Interview goes great. You make offer. They say yes. Then: "I can't find anywhere to live in Santa Cruz. I have to decline." Or they accept, move here, spend month searching desperately for housing, fail, and resign. Housing isn't just retention problem—it's recruitment killer before employment even starts.
          </p>
          <p className="mb-4">
            You can't control Santa Cruz housing market. You can't build apartments. You can't force landlords to accept your candidates. But you can acknowledge that housing is primary barrier between you and quality employees, and build recruitment strategy around this reality instead of pretending it doesn't exist.
          </p>
        </>
      )
    },
    {
      title: 'Why Housing Kills Recruitment',
      content: (
        <>
          <p className="mb-6 mt-4">
            <strong>The Recruitment Housing Trap:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Can't Move Without Housing Secured</strong>
          </p>
          <p className="mb-4">
            Most people won't relocate or commit to job without knowing where they'll live. Catch-22: Landlords want proof of local employment. Candidates can't accept employment without housing.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Housing Search Takes Time</strong>
          </p>
          <p className="mb-4">
            Finding place in Santa Cruz takes weeks or months. Candidate can't wait—they have current job, bills to pay. They accept different opportunity that doesn't require relocation.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Upfront Costs Are Prohibitive</strong>
          </p>
          <p className="mb-4">
            First month, last month, security deposit = $6,000-9,000 before moving in. Plus moving costs. Most people don't have $10K+ liquid for job transition.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Competition for Housing</strong>
          </p>
          <p className="mb-4">
            Your candidate is competing with tech workers making $150K, UC faculty, established locals. At your offered salary, they're bottom of housing application pool.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Partner/Family Housing Needs</strong>
          </p>
          <p className="mb-4">
            Single professional is hard enough. Candidate with partner and kids needs 3-bedroom = $3,500-4,500/month. Impossible on small business wages.
          </p>
        </>
      )
    },
    {
      title: 'Addressing Housing in Recruitment',
      content: (
        <>
          <p className="mb-4">
            Don't wait until offer stage to discuss housing. Address proactively in recruitment process.
          </p>

          <p className="mb-6 mt-6">
            <strong>Housing-Forward Recruitment Strategy:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Mention Housing in Job Post</strong>
          </p>
          <p className="mb-4">
            "We understand Santa Cruz housing challenges. We provide [housing stipend/assistance finding housing/connections to landlords/whatever you offer]." Shows awareness and solution.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Discuss Housing in First Interview</strong>
          </p>
          <p className="mb-4">
            "Do you currently live in Santa Cruz? If not, have you considered housing situation?" Brings issue to surface early. Don't waste time on candidates who haven't thought through housing.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Provide Housing Resources</strong>
          </p>
          <p className="mb-4">
            Create document for candidates: average rents by area, recommended neighborhoods, landlord contacts, roommate resources, commute options from surrounding areas. Shows you're helping solve their biggest concern.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Offer to Connect with Housing Before Start Date</strong>
          </p>
          <p className="mb-4">
            "While you're searching for housing, we can introduce you to landlords we know." Active support, not just sympathy.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Build Housing Into Compensation Discussion</strong>
          </p>
          <p className="mb-4">
            "$55K salary + $500/month housing stipend = $61K total compensation." Make it explicit that you're addressing their primary expense.
          </p>
        </>
      )
    },
    {
      title: 'Recruiting People Who Already Have Housing',
      content: (
        <>
          <p className="mb-4">
            Most effective strategy: target candidates who've already solved housing problem.
          </p>

          <p className="mb-6 mt-6">
            <strong>Housing-Secure Candidate Pools:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Current Santa Cruz Residents</strong>
          </p>
          <p className="mb-4">
            Obviously. But be aware: employed people with housing are comfortable. Need compelling reason to switch jobs. Focus recruitment on people currently unhappy in roles or unemployed with housing intact.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. People Living with Family</strong>
          </p>
          <p className="mb-4">
            Young professionals living with parents in Santa Cruz. No housing cost = your wages are viable. Local connections = stable. Targeted demographic.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Commuters from Surrounding Areas</strong>
          </p>
          <p className="mb-4">
            Watsonville, Capitola, Aptos, Scotts Valley, Felton—housing costs 20-40% less. Your Santa Cruz wages are competitive there. Recruit explicitly from these areas.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Students in Dorms</strong>
          </p>
          <p className="mb-4">
            UCSC students have housing through school. Don't need to find rental. Available for part-time or post-graduation full-time roles.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. People in Established Rentals</strong>
          </p>
          <p className="mb-4">
            Long-term renters with reasonable rates who aren't moving. They're not relocating candidates but they're available if currently unemployed or unhappy.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Homeowners</strong>
          </p>
          <p className="mb-4">
            Retirees, people who bought years ago, those with inherited homes. Housing is sorted. Often looking for meaningful part-time or full-time engagement.
          </p>
        </>
      )
    },
    {
      title: 'Creative Housing Solutions for Candidates',
      content: (
        <>
          <p className="mb-4">
            If you can offer housing assistance, it becomes massive recruitment advantage.
          </p>

          <p className="mb-6 mt-6">
            <strong>Recruitment-Stage Housing Support:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Employer-Provided Housing</strong>
          </p>
          <p className="mb-4">
            Ultimate solution: "Position includes housing." Room in shared house or small apartment. Transforms impossible recruitment into easy win. Worth investment for key roles.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Security Deposit Loan</strong>
          </p>
          <p className="mb-4">
            "$6K interest-free loan for security deposit, repaid over 24 months at $250/month." Removes primary barrier to accepting position.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Co-Signing Leases</strong>
          </p>
          <p className="mb-4">
            Many landlords require income 3x rent. Your offered salary doesn't qualify. Offer to co-sign lease for strong candidates. Shows commitment and solves their qualification problem.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Temp Housing During Search</strong>
          </p>
          <p className="mb-4">
            "First month, you can stay in [guest room/AirBnB we cover/employee housing] while finding permanent place." Allows them to accept job and search locally.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Landlord Connections</strong>
          </p>
          <p className="mb-4">
            "We have relationships with local landlords who trust our referrals." Your recommendation moves candidate up application pile.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Housing Search Support</strong>
          </p>
          <p className="mb-4">
            "We'll pay you for 10 hours to house hunt before start date." Shows you understand it's work and provides financial support during transition.
          </p>

          <p className="mb-4 mt-8">
            <strong>7. Relocation Bonus Specifically for Housing</strong>
          </p>
          <p className="mb-4">
            "$2,000 relocation bonus to cover deposits and moving." Not huge but meaningful help with upfront costs.
          </p>
        </>
      )
    },
    {
      title: 'Marketing Your Housing Support',
      content: (
        <>
          <p className="mb-4">
            If you offer housing assistance, make it prominent in recruitment messaging. It's your competitive advantage.
          </p>

          <p className="mb-6 mt-6">
            <strong>Housing-Forward Job Posts:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Example Opening:</strong>
          </p>
          <p className="mb-4 italic">
            "Yes, we know Santa Cruz housing is insane. We provide $600/month housing stipend + connections to local landlords + co-signing assistance. We've helped every employee find housing successfully."
          </p>

          <p className="mb-4 mt-8">
            <strong>Benefits Section:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>$55K base salary</li>
            <li>$600/month housing stipend ($7,200/year)</li>
            <li>Security deposit loan available</li>
            <li>Landlord referral network</li>
            <li>Total compensation: $62K+ housing support</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>Website Careers Page:</strong>
          </p>
          <p className="mb-4">
            Dedicated section: "Living in Santa Cruz: How We Help." Photos of area, housing resources, testimonials from employees about how they found housing with your support.
          </p>
        </>
      )
    },
    {
      title: 'Setting Realistic Expectations',
      content: (
        <>
          <p className="mb-4">
            Even with support, not everyone will successfully find housing. Be honest about challenge and fallback options.
          </p>

          <p className="mb-6 mt-6">
            <strong>Honest Housing Conversation:</strong>
          </p>

          <p className="mb-4 mt-4">
            "Santa Cruz housing is genuinely difficult. Here's what we provide to help [specific support]. Many employees commute from Watsonville/Capitola/Scotts Valley where housing is more available. We support that with gas stipend. Some employees find roommate situations—we can connect you with others looking. It's challenging but solvable with effort and flexibility."
          </p>

          <p className="mb-4 mt-8">
            <strong>Fallback Options:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Commute from surrounding area (offer gas stipend)</li>
            <li>Temporary housing while searching (AirBnB, employee housing)</li>
            <li>Roommate matching with current employees</li>
            <li>Extended job start date to allow housing search</li>
            <li>Alternative housing (van living, house-sitting, etc.) with your support</li>
          </ul>

          <p className="mb-4 mt-6">
            Don't promise what you can't deliver. But show you understand problem and actively help solve it. That alone differentiates you from employers who ignore housing elephant in room.
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
            Housing Crisis Makes It Hard to Attract Talent in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            How Santa Cruz's housing crisis prevents recruiting quality candidates. Strategies to attract talent despite housing obstacles.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Attracting Talent Despite Housing Challenges?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses develop recruitment strategies that address housing obstacles. Turn your biggest hiring challenge into competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Develop Recruitment Strategy
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Challenges
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

