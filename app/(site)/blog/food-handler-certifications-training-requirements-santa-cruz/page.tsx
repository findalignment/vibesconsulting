import { Metadata } from 'next'
import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Food Handler Certifications and Training Requirements | Santa Cruz',
  description: 'Complete guide to California Food Handler Card requirements for Santa Cruz restaurants and food businesses. Training resources, renewal process, and compliance management.',
  keywords: 'food handler card California, food safety certification, food handler training, Santa Cruz food business, ServSafe, food safety requirements, employee certification',
  openGraph: {
    title: 'Food Handler Certifications and Training Requirements in Santa Cruz',
    description: 'Ensure all staff have proper food handler certifications with efficient tracking systems.',
    type: 'article',
    publishedTime: '2025-03-09T00:00:00Z',
    authors: ['Vibes Consulting'],
    url: 'https://vibes.consulting/blog/food-handler-certifications-training-requirements-santa-cruz',
  },
}

export default function FoodHandlerCertificationsPage() {
  return (
    <div className="bg-white text-zinc-900">
      <Section width="default" className="pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
          Food Handler Certifications and Training Requirements
        </h1>
        <p className="text-xl text-zinc-600 mb-8">
          Everything Santa Cruz food businesses need to know about California Food Handler Card requirements—who needs them, how to get them, and how to track renewals effortlessly.
        </p>
        <div className="w-16 h-1 bg-purple-600"></div>
      </Section>

      <Section width="default" className="py-8">
        <div className="prose prose-lg max-w-none">
          
          <h2>The Certification You Can't Skip</h2>
          
          <p>
            Health inspector walks in. First question: "Can I see food handler certificates for all employees?"
          </p>

          <p>
            You pull out your folder. Employee A: current. Employee B: current. Employee C: expired 4 months ago. You didn't realize.
          </p>

          <p>
            <strong>Violation.</strong> The inspector notes it. You now have 30 days to correct or face fines. Employee C can't work until recertified. You're short-staffed during your busiest week.
          </p>

          <p>
            This scenario is completely preventable. Food handler certification isn't complicated—it's a $10, 2-hour online course. But tracking renewals for multiple employees across different schedules is where businesses fail.
          </p>

          <p>
            Here's how to ensure 100% compliance, zero stress.
          </p>

          <h2>California Food Handler Card Requirements</h2>

          <h3>Who Needs Certification:</h3>

          <p>
            <strong>Required for:</strong> Anyone who handles unpackaged food during preparation, storage, or service
          </p>

          <p>
            <strong>Includes:</strong>
          </p>

          <ul>
            <li>Cooks, chefs, prep staff</li>
            <li>Servers, bartenders (handling food)</li>
            <li>Bussers (clearing dishes)</li>
            <li>Dishwashers</li>
            <li>Baristas making food items</li>
          </ul>

          <p>
            <strong>Not required for:</strong>
          </p>

          <ul>
            <li>Hosts/hostesses (only seating customers)</li>
            <li>Cashiers (not handling food)</li>
            <li>Owners/managers (if only supervising, not handling food)</li>
          </ul>

          <p>
            <strong>Exception:</strong> Food Managers need higher certification (ServSafe Manager or equivalent)
          </p>

          <h3>Timeline Requirements:</h3>

          <ul>
            <li><strong>New employees:</strong> Must obtain certification within 30 days of hire</li>
            <li><strong>Certification period:</strong> Valid for 3 years from date of issuance</li>
            <li><strong>Renewal:</strong> Complete new course and exam before expiration</li>
          </ul>

          <h2>How to Get Food Handler Card (Employee Process)</h2>

          <h3>Approved Online Training Providers:</h3>

          <ul>
            <li><strong>ServSafe (National Restaurant Association):</strong> $15, ~2 hours</li>
            <li><strong>360training.com:</strong> $10-12, ~90 minutes</li>
            <li><strong>Learn2Serve:</strong> $8-10, ~2 hours</li>
            <li><strong>StateFoodSafety.com:</strong> $10-15, ~2 hours</li>
          </ul>

          <p>
            <strong>Process:</strong>
          </p>

          <ol>
            <li>Employee registers online at approved provider</li>
            <li>Completes interactive course (food safety basics)</li>
            <li>Passes final exam (80%+ required, can retake if needed)</li>
            <li>Receives printable certificate immediately</li>
            <li>Digital certificate sent to California database</li>
          </ol>

          <p>
            <strong>Total time:</strong> 90-120 minutes<br />
            <strong>Can be done at home or during paid work time</strong>
          </p>

          <h2>Managing Certifications for Your Team</h2>

          <h3>The Certification Tracking System:</h3>

          <p>
            <strong>Create a simple spreadsheet or use software:</strong>
          </p>

          <p>
            <strong>Columns needed:</strong>
          </p>

          <ul>
            <li>Employee Name</li>
            <li>Hire Date</li>
            <li>Certification Date</li>
            <li>Expiration Date (3 years from certification)</li>
            <li>Status (Current, Expiring Soon, Expired)</li>
            <li>Certificate on File? (Yes/No)</li>
          </ul>

          <p>
            <strong>Automation:</strong> Use Google Sheets with conditional formatting (highlight cells red when expiration is within 30 days)
          </p>

          <h3>The Reminder System:</h3>

          <p>
            <strong>Set up three calendar reminders per employee:</strong>
          </p>

          <ul>
            <li><strong>60 days before expiration:</strong> "Employee X cert expires in 60 days—notify them"</li>
            <li><strong>30 days before:</strong> "Employee X must renew now"</li>
            <li><strong>7 days before:</strong> "URGENT: Employee X cert expires in 7 days"</li>
          </ul>

          <p>
            <strong>Best practice:</strong> Require employees to renew 30+ days before expiration (buffer for delays).
          </p>

          <h3>Onboarding Protocol for New Employees:</h3>

          <p>
            <strong>Day 1:</strong> Inform employee of requirement, provide list of approved providers<br />
            <strong>Week 1:</strong> Employee completes certification (ideally during first week)<br />
            <strong>Week 2:</strong> Verify certificate received, add copy to file, add to tracking spreadsheet
          </p>

          <p>
            <strong>Policy:</strong> "All food handlers must provide proof of valid certification by end of Week 2. This is non-negotiable for employment."
          </p>

          <h3>Storage and Documentation:</h3>

          <ul>
            <li>Keep physical or digital copies of all certificates</li>
            <li>Organize in binder or folder system (inspector may request to see)</li>
            <li>Update immediately when employee renews</li>
          </ul>

          <h2>Food Safety Manager Certification (Higher Level)</h2>

          <h3>When Required:</h3>

          <p>
            <strong>California law:</strong> At least one person on-site during operations must have Food Manager certification if you're a full-service restaurant or high-risk facility.
          </p>

          <h3>What It Is:</h3>

          <ul>
            <li><strong>ServSafe Manager:</strong> Most common (2-day course + exam, or online)</li>
            <li><strong>Cost:</strong> $100-250</li>
            <li><strong>Duration:</strong> 16+ hours of training</li>
            <li><strong>Valid for:</strong> 5 years</li>
          </ul>

          <p>
            <strong>Who should get it:</strong> Owners, managers, head chefs—someone always present during operations
          </p>

          <h2>The Bottom Line: Simple Compliance with Simple Systems</h2>

          <p>
            Food handler certification is easy and inexpensive. The only challenge is tracking renewals for multiple employees.
          </p>

          <p>
            <strong>Build your system this week:</strong>
          </p>

          <ol>
            <li>Create certification tracking spreadsheet</li>
            <li>Verify all current employees have valid certificates</li>
            <li>Set calendar reminders for all expirations</li>
            <li>Add to onboarding checklist for new hires</li>
            <li>Review quarterly to catch any gaps</li>
          </ol>

          <p>
            <strong>Time investment:</strong> 2 hours setup, 15 minutes quarterly maintenance<br />
            <strong>Cost avoidance:</strong> Health violations, fines, operational disruptions
          </p>

          <p>
            Never get caught with expired certifications again. System &gt; memory.
          </p>

        </div>
      </Section>

      <Section width="default" className="py-16 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">Need Help Managing Food Safety Compliance?</h2>
          <p className="text-xl text-zinc-600 mb-8">
            We help Santa Cruz food businesses implement certification tracking, build food safety systems, and ensure full compliance with health requirements.
          </p>
          <CTAButton href="/contact" text="Let's Ensure Your Compliance" />
        </div>
      </Section>
    </div>
  )
}

