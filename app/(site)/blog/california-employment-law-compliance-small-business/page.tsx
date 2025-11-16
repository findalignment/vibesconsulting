import Link from 'next/link'
import BlogAccordion from '@/components/BlogAccordion'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: "California Employment Law Compliance for Small Business | Legal Guide",
  description: "Navigating California's complex employment laws as small business owner. Here's what you need to know to stay compliant and avoid costly mistakes."
}

export default function BlogPost() {
  const sections = [
    {
      title: "California Employment Law Complexity",
      content: (
        <>
          <p className="text-lg leading-relaxed text-brand-text/70">Small businesses face these compliance challenges:</p>

          <p><strong className="text-brand-text">Laws are more strict than federal.</strong> California employment law exceeds federal requirements dramatically. Minimum wage higher. Overtime rules stricter. Meal and rest break requirements specific. Sick leave mandated. Many protections federal law doesn't provide. You must comply with stricter California standard, not just federal minimums. This creates complexity especially for businesses operating multiple states or owners unfamiliar with California's employee-protective regulatory environment. What's legal federally might be illegal in California. Don't assume federal compliance equals California compliance.</p>

          <p><strong className="text-brand-text">Penalties are severe.</strong> Violations cost thousands per employee per violation. Wage and hour claims can bankrupt small businesses. Meal break violations: 1 hour pay per violation per day. That compounds fast. Employee working 200 days without proper meal breaks = 200 hours of penalty pay. At $20/hour, that's $4,000 for one employee. Multiply across team and violations add up catastrophically. Plus attorney fees, penalties, and potential damages. Employment law violations aren't minor mistakes—they're existential risks for small businesses with thin margins.</p>

          <p><strong className="text-brand-text">Rules change frequently.</strong> California legislature passes new employment laws constantly. What was compliant last year might be illegal this year. Minimum wage increases annually on predictable schedule but other changes are unpredictable. Keeping current requires attention. Many small business owners don't realize they're out of compliance because rules changed and they didn't know. Ignorance isn't defense. "I didn't know" doesn't prevent penalties. Staying informed is ongoing responsibility, not one-time achievement.</p>

          <p><strong className="text-brand-text">Independent contractor classification is risky.</strong> AB5 dramatically tightened independent contractor rules. Many arrangements that seemed fine pre-2020 are now employee relationships legally. Misclassification penalties are severe. Plus back taxes, benefits, overtime owed. Using "contractors" incorrectly is common mistake costing businesses six figures when caught. The ABC test is strict: unless someone passes all three prongs clearly, they're employees. Don't assume contractor status because you want it or they want it. Legal definition determines reality. Most service businesses using "contractors" are actually employing people incorrectly.</p>

          <p><strong className="text-brand-text">Wage and hour rules are detailed.</strong> Meal breaks required before 5 hours. Rest breaks every 4 hours. Off-the-clock work prohibited. Overtime calculated daily AND weekly. Split shift premiums. Reporting time pay. Expense reimbursements. Final paycheck timing rules. Each requirement has specific implementation details. Missing any creates liability. These aren't suggestions—they're legal requirements with specific penalties for non-compliance. Most small businesses violate something unknowingly. Common violations: skipped meal breaks, off-the-clock work, improper overtime calculation. Each creates legal exposure accumulating silently until employee complaint or Labor Commissioner audit.</p>

          <p><strong className="text-brand-text">Documentation requirements are extensive.</strong> Must provide written notices. Keep time records. Document performance issues properly. Provide pay stubs with specific information. Maintain personnel files. Each requirement has specific rules. Missing documentation makes defending claims impossible even if you did nothing wrong. "I'm sure we did it right" without records loses to "they never did X" with no counter-evidence. In employment disputes, documentation is everything. Verbal agreements and memories don't matter. Written contemporaneous records do. Most small businesses under-document, creating vulnerability they don't realize until facing claim.</p>
        </>
      )
    },
    {
      title: "Core Compliance Requirements",
      content: (
        <>
          <p className="text-lg leading-relaxed text-brand-text/70">These areas require immediate attention:</p>

          <p><strong className="text-brand-text">Wage and hour compliance.</strong> Pay minimum wage ($16.50/hour in 2024, higher in some cities). Calculate overtime correctly: daily over 8 hours, weekly over 40 hours, 7th consecutive day. Provide meal breaks before 5th hour. Provide rest breaks. Don't allow off-the-clock work. Pay all worked time. Issue paychecks on time. Provide accurate pay stubs. These are non-negotiable basics. Violations are per-employee, per-instance. One employee working through breaks for year creates hundreds of violations. Get wage and hour right—it's highest-risk compliance area for small businesses.</p>

          <p><strong className="text-brand-text">Employee classification.</strong> Determine if workers are employees or true independent contractors using ABC test. A: Free from control and direction. B: Performing work outside usual business course. C: Customarily engaged in independently established trade. All three required for contractor status. If uncertain, classify as employee. Misclassification risk vastly exceeds payroll cost savings. Most service workers, anyone working regular hours on your premises, anyone you direct how to do work—these are employees regardless of what you call them. Respect legal definitions, not desired arrangements.</p>

          <p><strong className="text-brand-text">Required notices and postings.</strong> Multiple state and federal posters required: minimum wage, discrimination, workers comp, safety, wage theft prevention. New employees need written notices within specific timeframes. Wage theft prevention notice at hire and annually. Each requirement has specific format and timing. Missing notices create technical violations even if substantive compliance exists. Get poster service ($100-200/year) providing current required posters. Give new employees complete packet including all required notices. Keep acknowledgments signed. This is easy compliance if systematic. Neglect creates unnecessary vulnerability.</p>

          <p><strong className="text-brand-text">Meal and rest break policies.</strong> Meal break before end of 5th hour (30 minutes, uninterrupted, relieved of duties). Second meal break before end of 10th hour if working over 10 hours. Rest breaks: 10 minutes paid for every 4 hours or major fraction thereof. Can't be skipped or combined. Can't work through breaks even if employee wants to (except specific limited exceptions). Provide breaks. Document that you provided them. If employee skips despite being offered, document that. Burden is on employer to prove breaks were provided. System that ensures and documents breaks prevents liability. Informal "take breaks when you want" fails legally even if well-intentioned.</p>

          <p><strong className="text-brand-text">Expense reimbursement.</strong> Reimburse employees for all necessary business expenses: mileage, phone use, supplies, tools. This isn't optional. Can't make employees bear business costs. Many businesses miss this, especially phone and mileage. If employee uses personal vehicle for work, reimburse IRS rate ($0.67/mile in 2024) or actual costs. If employee uses personal phone for work, reimburse reasonable portion. Establish clear reimbursement policy. Process expense reports promptly. Document reimbursements. Failure to reimburse is wage and hour violation. Penalties compound over time and employees.</p>

          <p><strong className="text-brand-text">Final paycheck timing.</strong> Employee quits: final pay due within 72 hours. Employee terminated: final pay due immediately. "Immediately" means at termination or mailed that day. Late final paychecks trigger waiting time penalties: full day of pay for each day delayed, up to 30 days. Terminate employee Friday, don't issue final check until next Friday = $1,200-2,400 penalty (depending on wage). This is automatic—no need to prove harm. Just delayed = penalty. Have system for immediate final pay processing. Keep enough cash to issue checks same-day. Don't let payroll schedule delay final checks. Waiting time penalties are expensive and completely avoidable with proper planning.</p>
        </>
      )
    },
    {
      title: "Practical Compliance Steps",
      content: (
        <>
          <p className="text-lg leading-relaxed text-brand-text/70">Implement these systems and practices:</p>

          <p><strong className="text-brand-text">Use proper payroll service.</strong> Don't do payroll yourself unless you're expert. Payroll companies ($30-100/month per employee) handle tax calculations, filings, required notices, and compliance updates. They keep current with law changes. They provide documentation. They reduce errors. This is highest-ROI compliance investment. Mistakes doing payroll yourself cost thousands. Payroll service costs hundreds. Easy math. Use established provider: ADP, Paychex, Gusto. They have California-specific compliance built in. Don't try to save $50/month on payroll and create $10K liability.</p>

          <p><strong className="text-brand-text">Implement time tracking system.</strong> Accurate time records are legal requirement and audit defense. Employees clock in/out (digital systems like When I Work, Deputy, or TSheets). System tracks all hours including overtime. Prevents off-the-clock work. Documents meal and rest breaks. Creates records defending against claims. Manual time tracking or honor system fails compliance and evidentiary requirements. Modern time tracking systems cost $5-10/employee monthly. Worth every penny for compliance protection and operational clarity. Plus eliminates timecard disputes and payroll errors.</p>

          <p><strong className="text-brand-text">Document everything.</strong> Performance issues: written documentation dated and specific. Discipline: documented warnings and employee acknowledgment. Policy violations: incident reports. Accommodation requests: interactive process documentation. Every employment decision should have paper trail explaining rationale. When facing claim or lawsuit, documentation is defense. Testimony without records loses credibility. Contemporary records win cases. Document as situations occur, not retroactively when problems arise. Create simple forms and checklists ensuring consistent documentation. Train managers that if it's not documented, it didn't happen legally.</p>

          <p><strong className="text-brand-text">Employee handbook with acknowledgments.</strong> Written policies establishing expectations and procedures. Handbook must include: anti-discrimination, harassment, meal/rest breaks, overtime, expense reimbursement, complaint procedures. Employees sign acknowledgment receiving and understanding handbook. This creates notice and acceptance of policies. Handbook guides consistent treatment and provides defense when policies are followed. Without handbook, you're making up rules situationally—inviting discrimination claims. Handbook costs $500-2,000 from employment attorney or HR service. Worth it. Update every 2-3 years or when major law changes. Get employee acknowledgments always.</p>

          <p><strong className="text-brand-text">Regular HR audit.</strong> Annual review of employment practices with attorney or HR consultant ($1,000-2,500). They audit: classification, wage hour, documentation, policies, I-9s, postings. Identify compliance gaps. Provide correction plan. This proactive audit prevents violations before they become claims. Fixing issues costs hundreds. Fighting claims costs tens of thousands. Audit investment is insurance and prevention. Find problems yourself when you can fix them quietly. Don't wait for employees or auditors to find them when penalties are mandatory. Most businesses have compliance gaps. Question is whether you find and fix them or employees and attorneys do.</p>

          <p><strong className="text-brand-text">Employment Practices Liability Insurance (EPLI).</strong> Insurance covering employment claims: discrimination, wrongful termination, harassment. Costs $1,000-3,000 annually for small businesses. Covers defense costs (can be $50K-100K even if you win) and settlements. This doesn't replace compliance—but it provides financial protection when claims happen despite best efforts. Some employment claims are frivolous but still expensive to defend. EPLI prevents one claim from destroying business financially. Given California's employee-friendly legal environment, this insurance is essential risk management for employers. Don't skip it.</p>
        </>
      )
    },
    {
      title: "Common Small Business Violations",
      content: (
        <>
          <p className="text-lg leading-relaxed text-brand-text/70">Avoid these frequent mistakes:</p>

          <p><strong className="text-brand-text">Misclassifying employees as exempt.</strong> Just because someone is salaried doesn't make them exempt from overtime. Exemption requires specific duties tests (executive, administrative, professional) PLUS minimum salary ($66,560 annually in 2024). Job title doesn't determine exemption. Actual duties do. Many small businesses pay salary thinking that avoids overtime. Wrong. Misclassified exempt employees are owed years of back overtime. This is six-figure mistake. When uncertain, classify non-exempt and pay overtime. Saves versus misclassification liability. Get professional help determining exemption status—don't guess based on how you'd like to classify them.</p>

          <p><strong className="text-brand-text">Requiring off-the-clock work.</strong> Employees working before clocking in, after clocking out, through lunch, from home in evening—all must be paid. "Just checking email quick" is work. "Finishing this one thing" is work. Must be tracked and paid. "But they want to" doesn't matter. Can't waive right to be paid. Many managers unconsciously encourage this by praising employees who "go above and beyond" in ways that include unpaid work. Create culture respecting work boundaries. Pay all time worked. Discipline off-the-clock work. This protects business from liability and employees from pressure to work unpaid.</p>

          <p><strong className="text-brand-text">Skipping meal and rest breaks.</strong> "We're too busy" isn't exemption. "Employee doesn't want breaks" isn't allowed. Breaks are legal requirement, not employee preference. Employer must provide opportunity. If employee chooses not to take offered break, document that. But can't discourage breaks or make them impractical. Rest breaks must be paid, uninterrupted, in reasonable increment. Meal breaks must relieve employee of duties—can't eat while watching counter. Common violation: technically providing breaks but making them impossible through understaffing or workload. Provide real breaks. Document. Violations are costly.</p>

          <p><strong className="text-brand-text">Improper final pay timing.</strong> Assuming next regular payday is fine for final check. It's not. Termination requires immediate pay. Resignation requires 72-hour pay. Missing these deadlines triggers automatic waiting time penalties regardless of intent or circumstances. System must handle final checks outside regular payroll cycle. Keep ability to cut checks immediately. Don't let accounting convenience violate law. Train managers that terminations require same-day final checks. Build this into termination procedures. Waiting time penalties are preventable through proper procedure. Yet they're common because businesses don't prioritize final check timing.</p>

          <p><strong className="text-brand-text">No sexual harassment training.</strong> California requires sexual harassment prevention training: supervisors (2 hours every 2 years), employees (1 hour every 2 years), businesses with 5+ employees. Training must be interactive and California-specific. Certification of completion required. Many businesses don't know this requirement exists or skip it assuming small size exempts them. Five employees triggers requirement—that's most small businesses. Online training services exist ($30-50/employee). Provide training. Document completion. Requirement is clear. Compliance is easy. Non-compliance is liability when harassment claims arise and you haven't trained as required. Plus training actually prevents issues, so it's worthwhile beyond legal compliance.</p>

          <p className="text-brand-text/70 mt-6">Need employment law compliance guidance? <Link href="/contact">Contact us</Link> for referrals to qualified employment attorneys serving Santa Cruz businesses.</p>
        </>
      )
    },
  ]

  return (
    <div className="pb-20">
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: 'Systems & Operations', href: '/blog/systems-operations' },
        { label: 'Employment Law', href: '/blog/california-employment-law-compliance-small-business' }
      ]} />

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-brand-text/60 mb-4">
            <time>February 4, 2025</time>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span className="text-current-500">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">California Employment Law Compliance for Small Business</h1>
          <p className="text-xl md:text-2xl text-brand-text/70 leading-relaxed">Navigating California's complex employment laws as small business owner. Here's what you need to know to stay compliant and avoid costly mistakes.</p>
        </header>

        <div className="space-y-12 mb-12">
          <p className="text-lg leading-relaxed">California employment law is legendarily complex, employee-protective, and strictly enforced. What's perfectly legal in most states can trigger five-figure penalties here. Small business owners—especially those who've operated in other states or hired their first employees recently—face steep learning curve navigating wage and hour requirements, meal break rules, overtime calculations, independent contractor restrictions, final paycheck timing, harassment prevention training mandates, and dozens of other specific requirements unique to California. The stakes are high: employment law violations can bankrupt small businesses through penalties, back pay, attorney fees, and waiting time damages that compound per-employee and per-violation into catastrophic liability.</p>

          <p>The challenge isn't that California employment law is unreasonable—most requirements protect employees from exploitation and create fair workplaces. The challenge is that requirements are numerous, specific, frequently changing, and harshly penalized when violated even unintentionally. "I didn't know" doesn't prevent liability. "We're small business" doesn't exempt you from most requirements. "Employee was fine with it" doesn't waive legal rights. The law is what it is. You must comply or face consequences. Many small business owners operate for years with violations they don't know exist—until employee complaint, Labor Commissioner audit, or lawsuit suddenly creates crisis. Proactive compliance prevents these crises. Reactive compliance after violations is exponentially more expensive.</p>

          <p>This guide provides overview of California employment law requirements most relevant to small businesses, practical compliance steps, and common violations to avoid. This isn't comprehensive legal advice—employment law fills volumes. But it covers high-risk basics every Santa Cruz employer must understand. Consider this starting point for compliance journey, not destination. Partner with qualified employment attorney or HR professional for guidance specific to your situation. Investment in proper compliance infrastructure pays for itself many times over through avoided liability. Let's build that foundation.</p>
        </div>

        <BlogAccordion sections={sections} />

        <div className="space-y-12 mt-12">
          <div className="bg-current-600/10 p-6 rounded-lg mt-12">
            <p className="font-semibold text-brand-text mb-2">Need employment law compliance support?</p>
            <p className="text-brand-text/70 text-sm"><Link href="/contact">Contact us</Link> for referrals to employment attorneys and HR consultants.</p>
            <Link href="/contact" className="text-current-500 hover:underline text-sm">Get in touch →</Link>
          </div>
        
          {/* Hub Navigation */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <Link href="/blog/systems-operations" className="inline-flex items-center gap-2 text-current-500 hover:text-current-400 transition-colors mb-8">
              <span>←</span> Back to Systems & Operations Hub
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-brand-text mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/cant-find-reliable-employees-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Hiring</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Finding Reliable Employees</h4>
                <p className="text-brand-text/70 text-sm">Building strong hiring processes.</p>
              </Link>
              <Link href="/blog/training-high-turnover-service-industry-staff-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Operations</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">Training High-Turnover Staff</h4>
                <p className="text-brand-text/70 text-sm">Compliance-focused training systems.</p>
              </Link>
              <Link href="/blog/when-to-transition-solopreneur-to-employer-santa-cruz" className="card p-6 hover:border-current-500/50 transition-colors group">
                <p className="text-sm text-current-500 mb-2">Growth</p>
                <h4 className="text-xl font-semibold text-brand-text mb-3 group-hover:text-current-500 transition-colors">First Hire Decisions</h4>
                <p className="text-brand-text/70 text-sm">Transitioning to employer responsibly.</p>
              </Link>
            </div>

            {/* Service CTA */}
            <div className="mt-8 p-6 bg-current-600/10 rounded-lg">
              <p className="font-semibold text-brand-text mb-2">Building compliant employment systems?</p>
              <Link href="/packages/business-flow" className="text-current-500 hover:text-current-400 font-semibold inline-flex items-center gap-2">
                Explore Business Flow Package <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

