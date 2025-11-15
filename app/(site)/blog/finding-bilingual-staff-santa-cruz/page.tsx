import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Finding Bilingual Staff in Santa Cruz | Spanish-English Employees',
  description: 'How to find and hire bilingual Spanish-English employees in Santa Cruz to better serve diverse customer base. Recruitment strategies and fair compensation.',
  keywords: 'bilingual staff, spanish speaking employees, santa cruz hiring, diverse workforce, bilingual recruitment'
})

export default function BilingualStaff() {
  const sections = [
    {
      title: 'The Language Gap Reality',
      content: (
        <>
          <p className="mb-4">
            Santa Cruz County is 33% Hispanic/Latino. Many customers prefer or need Spanish communication. Yet you struggle to find bilingual employees, or worse—you find them but lose them quickly because every business wants them too. Bilingual staff aren't just "nice to have"—they're competitive advantage that expands your accessible customer base by thousands.
          </p>
          <p className="mb-4">
            The challenge isn't lack of bilingual people in Santa Cruz—it's that bilingual candidates have more opportunities, higher expectations, and knowledge that their skill is valuable. Generic hiring tactics don't work. You need targeted strategies to find, attract, and retain bilingual employees.
          </p>
        </>
      )
    },
    {
      title: 'Where to Find Bilingual Candidates',
      content: (
        <>
          <p className="mb-6 mt-4">
            <strong>Targeted Recruitment Channels:</strong>
          </p>
          
          <p className="mb-4 mt-4">
            <strong>1. Post Job Listings in Spanish</strong>
          </p>
          <p className="mb-4">
            Don't just post in English and ask for Spanish skills. Post complete job description in Spanish too. Shows you value language skills and attracts native speakers who might not apply to English-only listings.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Community Organizations</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>La Manzana Community Resources (Watsonville)</li>
            <li>Siembra Community Center</li>
            <li>Community Bridges</li>
            <li>Local churches with Spanish services</li>
            <li>Community college job boards (Cabrillo has large Latino student population)</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>3. Spanish-Language Media</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Radio Lobo (95.3 FM) - local Spanish radio</li>
            <li>Spanish Facebook groups</li>
            <li>Watsonville-focused job boards</li>
            <li>Spanish newspapers and community bulletins</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>4. Employee Referrals (Most Effective)</strong>
          </p>
          <p className="mb-4">
            Your current bilingual employees know other bilingual people. Offer generous referral bonus ($500+) specifically for bilingual hires who stay 90 days.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Watsonville and South County</strong>
          </p>
          <p className="mb-4">
            Watsonville is 82% Hispanic. Many bilingual workers live there. Post jobs explicitly welcoming Watsonville residents. Consider offering transportation support.
          </p>
        </>
      )
    },
    {
      title: 'Paying Fairly for Bilingual Skills',
      content: (
        <>
          <p className="mb-4">
            Bilingual skills are additional qualifications that deserve additional pay. Many businesses want bilingual employees but won't pay more. Then wonder why they can't find or retain them.
          </p>

          <p className="mb-6 mt-6">
            <strong>Bilingual Compensation Strategy:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Language Differential Pay</strong>
          </p>
          <p className="mb-4">
            Add $1-2/hour specifically for bilingual capability. "$18/hour base + $1.50 bilingual differential = $19.50/hour." Makes it explicit that language skills are valued and compensated.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Bilingual Bonus Structure</strong>
          </p>
          <p className="mb-4">
            If you can't do hourly differential: "$150-300/month bonus for serving Spanish-speaking customers." Track usage, pay accordingly.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Premium Hiring Rate</strong>
          </p>
          <p className="mb-4">
            If standard rate is $18-20/hour, advertise bilingual positions at $20-22/hour. Signals immediately that this skill is valued.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Faster Advancement</strong>
          </p>
          <p className="mb-4">
            Create clear path: "Bilingual employees advance to senior/lead roles faster due to increased value to business." Bilingualism becomes career accelerator.
          </p>

          <p className="mb-4 mt-6">
            <strong>Why This Matters:</strong> Bilingual employees know their skills are valuable. If you don't pay fairly, competitor will. You'll cycle through bilingual hires constantly instead of retaining them.
          </p>
        </>
      )
    },
    {
      title: 'Creating Bilingual-Friendly Workplace',
      content: (
        <>
          <p className="mb-4">
            Finding bilingual employees is one thing. Keeping them requires workplace culture that respects and utilizes their language skills appropriately.
          </p>

          <p className="mb-6 mt-6">
            <strong>Culture and Environment:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Don't Exploit Language Skills</strong>
          </p>
          <p className="mb-4">
            Hiring bilingual employee and then making them translate everything for entire business without extra pay = exploitation. Respect boundaries. Compensate appropriately for translation work beyond normal duties.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Bilingual Materials and Signage</strong>
          </p>
          <p className="mb-4">
            Have Spanish versions of: menus, signs, policies, training materials. Shows commitment to serving Spanish speakers, not just hiring token bilingual employee.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Respect Language Preferences</strong>
          </p>
          <p className="mb-4">
            Don't police "English only" among staff. People code-switch naturally. Unless it's disrupting operations, bilingual staff communicating in Spanish is fine.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Cultural Competency</strong>
          </p>
          <p className="mb-4">
            Train all staff on cultural awareness. Create environment where Latino employees feel respected and valued, not just utilized for language skills.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Recognize Different Types of Bilingual</strong>
          </p>
          <p className="mb-4">
            Some employees are equally fluent in both languages. Others are native Spanish speakers with good English. Others are heritage speakers. All valuable, but different comfort levels for different tasks.
          </p>
        </>
      )
    },
    {
      title: 'The Business Case for Bilingual Staff',
      content: (
        <>
          <p className="mb-4">
            If you're hesitant about paying premium for bilingual employees, understand the ROI.
          </p>

          <p className="mb-6 mt-6">
            <strong>Financial Impact of Bilingual Staff:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Expanded Customer Base</strong>
          </p>
          <p className="mb-4">
            Spanish-speaking customers currently avoid your business if they can't communicate easily. Bilingual staff removes that barrier. Immediate access to 33% of county population.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Better Customer Service = Higher Sales</strong>
          </p>
          <p className="mb-4">
            Spanish-speaking customers can ask questions, understand options, feel comfortable. Results in higher average transactions and repeat visits.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Community Word-of-Mouth</strong>
          </p>
          <p className="mb-4">
            Latino communities have strong networks. "This place has Spanish speakers, they're welcoming" spreads fast. Organic marketing to entire demographic.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Competitive Advantage</strong>
          </p>
          <p className="mb-4">
            If competitors don't have bilingual staff, you capture all Spanish-speaking customers in your industry. Market differentiation worth significant revenue.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Retention of Spanish-Speaking Customers</strong>
          </p>
          <p className="mb-4">
            Once Spanish-speaking customers find business where they're comfortable, they're extremely loyal. High lifetime value.
          </p>

          <p className="mb-4 mt-6">
            <strong>Example ROI:</strong> Paying $2/hour premium for bilingual employee ($4,000/year) attracts 50 new Spanish-speaking customers averaging $500 annually = $25,000 additional revenue. 6x return on investment.
          </p>
        </>
      )
    },
    {
      title: 'Training and Development',
      content: (
        <>
          <p className="mb-4">
            Not every position requires native-level bilingual skills. Sometimes customer service Spanish phrases are sufficient. Consider developing language skills in existing staff.
          </p>

          <p className="mb-6 mt-6">
            <strong>Language Development Options:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Basic Spanish Training for All Staff</strong>
          </p>
          <p className="mb-4">
            Teach everyone: greetings, common questions, "Let me get someone who speaks Spanish." Basic phrases improve service even without fluency.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Pay for Language Classes</strong>
          </p>
          <p className="mb-4">
            Offer to pay for Spanish classes at Cabrillo for interested employees. "$50-100/month tuition + you earn bilingual differential once conversational." Invests in your team while solving staffing need.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Create Language Learning Incentive</strong>
          </p>
          <p className="mb-4">
            "$500 bonus when you pass Spanish fluency assessment." Motivates English-dominant staff to develop valuable skill.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Leverage Native Speakers for Training</strong>
          </p>
          <p className="mb-4">
            Your bilingual employees can teach others during slow times. Compensate them for teaching role.
          </p>
        </>
      )
    },
    {
      title: 'Legal and Compliance Considerations',
      content: (
        <>
          <p className="mb-4">
            When hiring specifically for language skills, understand legal requirements and best practices.
          </p>

          <p className="mb-6 mt-6">
            <strong>Compliance Issues:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Bona Fide Occupational Qualification (BFOQ)</strong>
          </p>
          <p className="mb-4">
            You can legally require Spanish fluency IF it's reasonably necessary for job duties. Customer-facing roles serving Spanish-speaking community = valid requirement. Office role with no customer contact = probably not valid.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. National Origin Discrimination</strong>
          </p>
          <p className="mb-4">
            You can require Spanish language skills. You CANNOT require being Latino/Hispanic. Language ability is the qualification, not ethnicity.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Testing Language Skills Fairly</strong>
          </p>
          <p className="mb-4">
            Have objective way to assess language ability during interviews. Conversation in Spanish about job duties. Don't just take their word for "fluent."
          </p>

          <p className="mb-4 mt-8">
            <strong>4. English Proficiency Requirements</strong>
          </p>
          <p className="mb-4">
            Can require English proficiency for safety or operational reasons. But don't require unnecessary English skills that exclude qualified bilingual candidates.
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
            Finding Bilingual Staff in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Recruit, compensate, and retain bilingual Spanish-English employees to better serve Santa Cruz County's diverse population. Turn language skills into competitive advantage.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Building Diverse Workforce?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses create inclusive hiring strategies, fair compensation structures, and workplace cultures that attract and retain bilingual employees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Develop Hiring Strategy
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Workforce Needs
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

