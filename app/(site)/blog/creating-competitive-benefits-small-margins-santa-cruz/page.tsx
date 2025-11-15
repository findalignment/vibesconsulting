import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Creating Competitive Benefits on Small Margins in Santa Cruz | Low-Cost Perks',
  description: 'Build attractive benefits packages for Santa Cruz employees without breaking budget. Creative low-cost perks that compete with larger employers.',
  keywords: 'employee benefits, small business perks, affordable benefits, santa cruz employment, competitive compensation'
})

export default function CompetitiveBenefitsSmallMargins() {
  const sections = [
    {
      title: 'The Benefits Expectation Gap',
      content: (
        <>
          <p className="mb-4">
            Tech companies offer: full health/dental/vision, 401k match, unlimited PTO, gym memberships, free meals, stock options. You offer: $20/hour and good vibes. Candidate asks about benefits. You say "We're small, can't afford benefits." They accept job at company that can. Repeat until you realize benefits aren't optional luxury—they're competitive necessity.
          </p>
          <p className="mb-4">
            But "benefits" doesn't require corporate budget. It requires creativity about what employees actually value in Santa Cruz. Tech offers expensive perks employees don't use. You can offer affordable perks employees desperately want. Match value, not cost.
          </p>
        </>
      )
    },
    {
      title: 'Low-Cost, High-Value Benefits',
      content: (
        <>
          <p className="mb-4">
            These benefits cost little but mean a lot in Santa Cruz culture.
          </p>

          <p className="mb-6 mt-6">
            <strong>Affordable Benefits That Matter:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Flexible Scheduling ($0 cost, huge value)</strong>
          </p>
          <p className="mb-4">
            Surf flexibility, consistent schedule, compressed work weeks, shift swapping. Costs nothing, addresses primary reason people live in Santa Cruz. More valuable than $5K raise to lifestyle-focused employees.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. PTO (Even Small Amount)</strong>
          </p>
          <p className="mb-4">
            California requires sick leave. Go beyond: 5-10 days PTO shows you value work-life balance. Cost = wages during absence, but retention benefit outweighs cost.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Employee Discounts (Near-Zero Cost)</strong>
          </p>
          <p className="mb-4">
            If retail: 40-50% employee discount. If food: free meal per shift. If service: free/discounted services. Your cost = wholesale/materials, their value = retail price. Huge perceived value at low cost.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Bike-Friendly Policies ($100-300)</strong>
          </p>
          <p className="mb-4">
            Bike parking, shower access, $50/month bike stipend, help with bike purchase. Santa Cruz has strong cycling culture. Shows environmental values and practical support.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Professional Development ($200-500/year)</strong>
          </p>
          <p className="mb-4">
            Pay for relevant courses, certifications, conference attendance. Demonstrates investment in their growth. Creates loyalty and improves skills.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Free Coffee/Snacks ($50-100/month)</strong>
          </p>
          <p className="mb-4">
            Keep good coffee, healthy snacks stocked. Small cost, daily reminder you care. Legitimately saves employees $3-5 daily = $60-100/month value.
          </p>

          <p className="mb-4 mt-8">
            <strong>7. Flexible Dress Code ($0)</strong>
          </p>
          <p className="mb-4">
            Unless customer-facing roles require specific appearance, let people dress casually/comfortably. Costs nothing, valued highly.
          </p>

          <p className="mb-4 mt-8">
            <strong>8. Community Event Time ($0-200)</strong>
          </p>
          <p className="mb-4">
            Paid time for beach cleanups, volunteer events, community engagement. Shows values alignment, creates team bonding, benefits community.
          </p>
        </>
      )
    },
    {
      title: 'Creative Healthcare Solutions',
      content: (
        <>
          <p className="mb-4">
            Full health insurance is expensive ($500-800/month per employee). But there are middle-ground options.
          </p>

          <p className="mb-6 mt-6">
            <strong>Healthcare Alternatives:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Healthcare Stipend</strong>
          </p>
          <p className="mb-4">
            Can't afford full insurance? Offer $200-400/month healthcare stipend. Employees use for Covered California premiums, medical expenses, or save for healthcare costs. Not perfect but acknowledges need and helps.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. QSEHRA (Qualified Small Employer HRA)</strong>
          </p>
          <p className="mb-4">
            Tax-advantaged way to reimburse employee health costs. Small employers can contribute set amount monthly, employees use for premiums/medical expenses, reimbursements are tax-free. More efficient than straight stipend.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Group Plan with Employee Contribution</strong>
          </p>
          <p className="mb-4">
            Can't afford 100% of premium? Offer group plan, cover 50%, employee pays rest. Still significant help and often cheaper than individual plans employees would buy.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Catastrophic/High-Deductible Plan + HSA</strong>
          </p>
          <p className="mb-4">
            Lower premium plans with high deductibles. Pair with employer HSA contributions. Covers major events, employees pay routine care. Much cheaper than full coverage.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Tele-Health Membership</strong>
          </p>
          <p className="mb-4">
            Services like Teladoc: $10-20/month, provides 24/7 doctor access. Not comprehensive insurance but handles common issues. Affordable supplement.
          </p>

          <p className="mb-4 mt-6">
            <strong>Honest Approach:</strong> "We can't afford full health insurance yet. We provide $300/month healthcare stipend. As business grows, we'll expand benefits." Transparency and trajectory matter.
          </p>
        </>
      )
    },
    {
      title: 'Retirement Benefits on Budget',
      content: (
        <>
          <p className="mb-4">
            401k seems impossible for small business. But options exist.
          </p>

          <p className="mb-6 mt-6">
            <strong>Affordable Retirement Options:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. SIMPLE IRA</strong>
          </p>
          <p className="mb-4">
            Easiest small business retirement plan. Required employer contribution: 3% match OR 2% non-elective. Low admin costs. Qualifies as retirement benefit without 401k complexity.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. SEP IRA</strong>
          </p>
          <p className="mb-4">
            Employer contributes up to 25% of compensation. Flexible—contribute in good years, skip in bad. Simple administration.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. CalSavers (California Mandate)</strong>
          </p>
          <p className="mb-4">
            If 5+ employees and don't offer retirement plan, must enroll in state-run CalSavers. Zero employer contribution required, but provides employee access to retirement savings. Free benefit to offer.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Start Small, Grow Over Time</strong>
          </p>
          <p className="mb-4">
            "We'll start 1% match this year, increase 0.5% annually as business grows." Shows commitment even if you can't do 6% match immediately.
          </p>

          <p className="mb-4 mt-6">
            Even small retirement benefit demonstrates long-term thinking and employee investment.
          </p>
        </>
      )
    },
    {
      title: 'Non-Traditional Perks That Work in Santa Cruz',
      content: (
        <>
          <p className="mb-4">
            Santa Cruz values are different. Offer perks aligned with local culture.
          </p>

          <p className="mb-6 mt-6">
            <strong>Santa Cruz-Specific Perks:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Surf Equipment Support</strong>
          </p>
          <p className="mb-4">
            Wetsuit cleaning station, board storage at work, $200 annual surf gear stipend, wetsuit repair/discount partnerships. Directly supports primary lifestyle activity.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Outdoor Recreation Support</strong>
          </p>
          <p className="mb-4">
            State parks pass ($195/year = $16/month per employee), ski pass discounts, outdoor gear library (company-owned camping/kayaking equipment employees can borrow).
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Local Business Discounts</strong>
          </p>
          <p className="mb-4">
            Partner with other local businesses for employee discounts. Costs them little, creates employee value, supports local economy. "Employee discount network" across multiple businesses.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Sustainability Perks</strong>
          </p>
          <p className="mb-4">
            Reusable container discounts, composting education, renewable energy credits, sustainability bonuses. Aligns with Santa Cruz environmental values.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Education/Arts Support</strong>
          </p>
          <p className="mb-4">
            Cabrillo class tuition, art class fees, music lesson stipends. Santa Cruz has strong creative culture. Supporting creative pursuits builds loyalty.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Child/Family Support</strong>
          </p>
          <p className="mb-4">
            Flexible schedules for school events, family beach days, kid-friendly workplace policies. Santa Cruz families value work-life integration.
          </p>

          <p className="mb-4 mt-8">
            <strong>7. Mental Health/Wellness</strong>
          </p>
          <p className="mb-4">
            Meditation app subscriptions ($10-15/month), yoga class passes, mental health days, employee assistance program. Wellness-focused culture resonates here.
          </p>
        </>
      )
    },
    {
      title: 'Building Benefits Package Systematically',
      content: (
        <>
          <p className="mb-4">
            Start minimal, add strategically as business grows.
          </p>

          <p className="mb-6 mt-6">
            <strong>Benefits Roadmap:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Year 1: Foundation (Minimal Cost)</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Flexible scheduling</li>
            <li>Employee discounts</li>
            <li>5 days PTO</li>
            <li>Free coffee/snacks</li>
            <li>Bike-friendly policies</li>
            <li><strong>Total added cost: $100-200/month per employee</strong></li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>Year 2: Growing (Modest Investment)</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Healthcare stipend ($200/month)</li>
            <li>CalSavers/SIMPLE IRA (1-2% match)</li>
            <li>Professional development budget</li>
            <li>10 days PTO</li>
            <li><strong>Total added cost: $400-500/month per employee</strong></li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>Year 3: Established (Competitive Package)</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Group health insurance (50-100% coverage)</li>
            <li>401k with 3% match</li>
            <li>15 days PTO</li>
            <li>Expanded perks</li>
            <li><strong>Total cost: $600-900/month per employee</strong></li>
          </ul>

          <p className="mb-4 mt-6">
            Gradual growth shows trajectory. Employees see improvement over time, creates loyalty through investment.
          </p>
        </>
      )
    },
    {
      title: 'Communicating Your Benefits Effectively',
      content: (
        <>
          <p className="mb-4">
            Benefits don't help if employees don't know about them or understand their value.
          </p>

          <p className="mb-6 mt-6">
            <strong>Benefits Communication:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Total Compensation Statement</strong>
          </p>
          <p className="mb-4">
            Show full value: "$20/hour base + $300 healthcare stipend + employee discount (value $150/month) + 5 days PTO ($800 value) = $25,450 effective annual compensation." Makes benefits tangible.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Benefits Summary in Offer Letter</strong>
          </p>
          <p className="mb-4">
            Don't just state salary. List all benefits: PTO, healthcare support, retirement, flexibility, perks. Shows total package.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Regular Reminders</strong>
          </p>
          <p className="mb-4">
            Annual benefits review meeting. "Here's what we provide, here's the value, here's what we're adding next year." Keeps benefits top of mind.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Compare to Alternatives</strong>
          </p>
          <p className="mb-4">
            "Individual health insurance costs $400-600/month. Our $300 stipend covers most of it. Corporate jobs require rigid schedules—we offer flexibility. Here's why our package works for Santa Cruz lifestyle."
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Make It Visible</strong>
          </p>
          <p className="mb-4">
            Post benefits summary in break room. Include in employee handbook. Mention in team meetings. Benefits unused = wasted money.
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
            Creating Competitive Benefits on Small Margins in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Build attractive benefits packages without corporate budget. Low-cost, high-value perks that resonate with Santa Cruz employees.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Designing Benefits Package?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz small businesses create competitive benefits packages that work within budget while attracting quality employees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Build Benefits Strategy
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Needs
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

