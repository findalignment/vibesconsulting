import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Background Checks and Hiring Compliance in Santa Cruz | Legal Requirements',
  description: 'Navigate California employment law for background checks, compliance, and legal hiring practices in Santa Cruz. Protect your business while hiring fairly.',
})

export default function BackgroundChecksCompliance() {
  const sections = [
    {
      title: 'Why Compliance Matters',
      content: (
        <>
          <p className="mb-4">
            Small business hiring often operates on gut feeling and informal process. Then one wrongful termination claim, one discrimination lawsuit, one hiring violation hits—and suddenly you're dealing with legal fees exceeding your annual revenue. California has strictest employment laws in country. Santa Cruz has progressive enforcement. Ignoring compliance isn't just risky—it's business-ending.
          </p>
          <p className="mb-4">
            But compliance isn't just risk avoidance. Proper background checks protect you from negligent hiring claims. Fair hiring processes attract better candidates. Documentation protects you when terminations inevitably happen. Basic compliance is operational necessity.
          </p>
        </>
      )
    },
    {
      title: 'Background Check Requirements in California',
      content: (
        <>
          <p className="mb-6 mt-4">
            <strong>California Background Check Laws:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. "Ban the Box" Law</strong>
          </p>
          <p className="mb-4">
            Cannot ask about criminal history on application. Can only inquire after conditional job offer made. Must conduct individualized assessment—not automatic disqualification for conviction. Exception: direct relationship between conviction and job duties.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Fair Chance Act</strong>
          </p>
          <p className="mb-4">
            If you discover disqualifying criminal history after conditional offer, must: (1) Provide copy of report, (2) Give written notice of potential denial, (3) Wait minimum 5 business days, (4) Provide written explanation if rescinding offer, (5) Allow opportunity to dispute.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. FCRA Compliance (Federal)</strong>
          </p>
          <p className="mb-4">
            Must get written permission before running background check. Must provide specific disclosure separate from application. If taking adverse action based on report, must follow FCRA adverse action process.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Credit Check Restrictions</strong>
          </p>
          <p className="mb-4">
            Cannot run credit checks unless position is: management, law enforcement, access to confidential info, regular access to $10K+ cash/valuables. Most small business positions don't qualify.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Salary History Prohibition</strong>
          </p>
          <p className="mb-4">
            Cannot ask about previous salary. Cannot rely on salary history to determine offer. Can only discuss salary expectations and offer range.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. References Must Be Factual</strong>
          </p>
          <p className="mb-4">
            When checking references, can only verify factual info: dates of employment, position held, duties performed. Previous employers may not provide opinions without risk.
          </p>
        </>
      )
    },
    {
      title: 'What You Can and Cannot Ask',
      content: (
        <>
          <p className="mb-4">
            Interview questions are minefield. California prohibits questions about protected characteristics.
          </p>

          <p className="mb-6 mt-6">
            <strong>NEVER Ask About:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Age or date of birth (age discrimination)</li>
            <li>Marital status, children, or family plans (sex/family status discrimination)</li>
            <li>National origin, citizenship (unless required for specific job)</li>
            <li>Religion or religious observations</li>
            <li>Disabilities or health conditions</li>
            <li>Sexual orientation or gender identity</li>
            <li>Race or ethnicity</li>
            <li>Arrest records (only convictions, and only after conditional offer)</li>
            <li>Salary history</li>
            <li>Workers comp history</li>
            <li>Genetic information</li>
          </ul>

          <p className="mb-6 mt-8">
            <strong>Can Ask About:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Work experience and qualifications</li>
            <li>Education and certifications</li>
            <li>Availability for required schedule</li>
            <li>Ability to perform essential job functions (with or without accommodation)</li>
            <li>Authorization to work in US (for all candidates equally)</li>
            <li>Professional references</li>
            <li>Salary expectations (not history)</li>
            <li>Reasons for leaving previous jobs</li>
          </ul>

          <p className="mb-4 mt-6">
            <strong>Gray Area—Risky Questions:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>"How long have you lived in Santa Cruz?" (Could reveal age or family status)</li>
            <li>"Do you have reliable transportation?" (OK) vs "Do you have car?" (Discriminatory against disabled)</li>
            <li>"Can you work weekends?" (OK) vs "Will church interfere with Sunday shifts?" (Religious discrimination)</li>
          </ul>
        </>
      )
    },
    {
      title: 'Running Background Checks Properly',
      content: (
        <>
          <p className="mb-4">
            If you decide to run background checks, follow precise process to avoid liability.
          </p>

          <p className="mb-6 mt-6">
            <strong>Compliant Background Check Process:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>Step 1: Make Conditional Job Offer</strong>
          </p>
          <p className="mb-4">
            "We'd like to offer you the position, contingent on satisfactory background check." Cannot ask about criminal history before this point.
          </p>

          <p className="mb-4 mt-8">
            <strong>Step 2: Provide FCRA Disclosure</strong>
          </p>
          <p className="mb-4">
            Separate document (not buried in application) stating you'll conduct background check. Must be standalone disclosure.
          </p>

          <p className="mb-4 mt-8">
            <strong>Step 3: Get Written Authorization</strong>
          </p>
          <p className="mb-4">
            Candidate must sign permission for background check. Keep signed authorization on file.
          </p>

          <p className="mb-4 mt-8">
            <strong>Step 4: Use FCRA-Compliant Service</strong>
          </p>
          <p className="mb-4">
            Don't just Google someone. Use professional background check service (Checkr, GoodHire, etc.) that complies with FCRA and California law. Costs $20-50 per check—cheap insurance.
          </p>

          <p className="mb-4 mt-8">
            <strong>Step 5: If Considering Adverse Action</strong>
          </p>
          <p className="mb-4">
            Background check reveals concerning information? Must: (1) Provide pre-adverse action notice, (2) Include copy of report and FCRA rights summary, (3) Wait 5+ business days, (4) Conduct individualized assessment of conviction relevance.
          </p>

          <p className="mb-4 mt-8">
            <strong>Step 6: If Rescinding Offer</strong>
          </p>
          <p className="mb-4">
            Provide: (1) Written notice of denial, (2) Copy of background check, (3) Specific reasons, (4) Explanation of right to dispute, (5) Contact info for background check company.
          </p>

          <p className="mb-4 mt-6">
            <strong>Documentation:</strong> Keep all disclosure forms, authorizations, reports, and correspondence. If challenged, you need proof you followed process.
          </p>
        </>
      )
    },
    {
      title: 'I-9 and Work Authorization',
      content: (
        <>
          <p className="mb-4">
            Every employee must complete I-9 within 3 days of start. Non-negotiable federal requirement. Failure = hefty fines.
          </p>

          <p className="mb-6 mt-6">
            <strong>I-9 Requirements:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Timing</strong>
          </p>
          <p className="mb-4">
            Employee completes Section 1 on/before first day of work. You complete Section 2 within 3 business days of start date.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Acceptable Documents</strong>
          </p>
          <p className="mb-4">
            Employee provides documents from List A (proves identity and work authorization) OR combination of List B (identity) + List C (work authorization). You cannot specify which documents they must provide.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Physical Examination Required</strong>
          </p>
          <p className="mb-4">
            Must physically examine original documents. Cannot accept photocopies. Remote employees create complexity—consult attorney.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Keep I-9s Separate</strong>
          </p>
          <p className="mb-4">
            Don't file with personnel files. Keep separate in case of ICE audit. Must retain 3 years from hire or 1 year after termination (whichever is longer).
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Cannot Discriminate</strong>
          </p>
          <p className="mb-4">
            Cannot: Require specific documents, refuse valid documents, treat employees differently based on citizenship status, retaliate for exercising rights.
          </p>
        </>
      )
    },
    {
      title: 'Documenting Your Hiring Process',
      content: (
        <>
          <p className="mb-4">
            Solid documentation protects you if hiring decisions are ever challenged.
          </p>

          <p className="mb-6 mt-6">
            <strong>Essential Documentation:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Job Descriptions</strong>
          </p>
          <p className="mb-4">
            Written description of: essential functions, required qualifications, physical requirements, schedule. Shows your hiring criteria are job-related, not discriminatory.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Applications</strong>
          </p>
          <p className="mb-4">
            Use consistent application for all candidates. Include EEO statement. Don't ask prohibited questions. Keep all applications for 2 years.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Interview Notes</strong>
          </p>
          <p className="mb-4">
            Document interview: qualifications discussed, concerns, reasons for hire/no-hire decision. Stick to job-related factors. If questioned later, you can show non-discriminatory reasons.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Offer Letters</strong>
          </p>
          <p className="mb-4">
            Written offer stating: position, salary, start date, at-will status, contingencies. Confirms agreement and sets expectations.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Onboarding Paperwork</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>I-9 form</li>
            <li>W-4 (federal and state)</li>
            <li>Direct deposit authorization</li>
            <li>Acknowledgment of employee handbook</li>
            <li>Emergency contact info</li>
            <li>Any industry-specific requirements</li>
          </ul>
        </>
      )
    },
    {
      title: 'Common Hiring Mistakes to Avoid',
      content: (
        <>
          <p className="mb-6">
            <strong>1. Informal "Trial Period" Without Employment</strong>
          </p>
          <p className="mb-4">
            "Work a few shifts, see if it works out, then we'll hire you officially." NO. If they're working, they're employee. Must complete I-9, pay wages, provide workers comp. No unpaid trials.
          </p>

          <p className="mb-6 mt-8">
            <strong>2. Misclassifying as Independent Contractor</strong>
          </p>
          <p className="mb-4">
            Can't call employee "contractor" to avoid taxes/compliance. California AB-5 makes this very difficult. Almost all workers are employees unless clearly meeting ABC test.
          </p>

          <p className="mb-6 mt-8">
            <strong>3. Asking Prohibited Questions "Casually"</strong>
          </p>
          <p className="mb-4">
            "You have kids?" during small talk is still illegal question. Candidate could claim family status discrimination. Stick to professional topics.
          </p>

          <p className="mb-6 mt-8">
            <strong>4. Hiring Family/Friends Without Process</strong>
          </p>
          <p className="mb-4">
            Even hiring your cousin requires I-9, wage requirements, workers comp. No exceptions for family.
          </p>

          <p className="mb-6 mt-8">
            <strong>5. Not Checking Work Authorization</strong>
          </p>
          <p className="mb-4">
            "They seem legal" isn't sufficient. Must complete I-9 for everyone. Failure creates huge liability.
          </p>

          <p className="mb-6 mt-8">
            <strong>6. Verbal-Only Offer</strong>
          </p>
          <p className="mb-4">
            Handshake agreement creates misunderstanding. Write it down: salary, hours, start date, contingencies.
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
            Background Checks and Hiring Compliance in Santa Cruz
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Navigate California's strict employment laws for background checks and compliant hiring. Protect your business while hiring fairly.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help with Hiring Compliance?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses build compliant hiring processes that protect against legal risk while attracting quality candidates. Get it right from the start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Build Compliant Process
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Compliance Needs
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

