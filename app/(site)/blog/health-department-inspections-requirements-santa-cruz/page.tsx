import { Metadata } from 'next'
import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Health Department Inspections and Requirements | Santa Cruz Food Business',
  description: 'Pass Santa Cruz County health inspections with confidence. Complete guide to food safety requirements, common violations, and inspection preparation for restaurants, cafés, and food businesses.',
  keywords: 'health department inspection, food safety Santa Cruz, health code compliance, restaurant regulations, food handler certification, Santa Cruz County health, food safety requirements',
  openGraph: {
    title: 'Health Department Inspections and Requirements in Santa Cruz',
    description: 'Navigate health inspections with confidence and maintain compliance year-round.',
    type: 'article',
    publishedTime: '2025-07-18T00:00:00Z',
    authors: ['Vibes Consulting'],
    url: 'https://vibes.consulting/blog/health-department-inspections-requirements-santa-cruz',
  },
}

export default function HealthInspectionsPage() {
  return (
    <div className="bg-white text-zinc-900">
      <Section width="default" className="pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
          Health Department Inspections and Requirements
        </h1>
        <p className="text-xl text-zinc-600 mb-8">
          The comprehensive guide to passing Santa Cruz County health inspections—from daily compliance practices to inspection day preparation for restaurants, cafés, and food businesses.
        </p>
        <div className="w-16 h-1 bg-purple-600"></div>
      </Section>

      <Section width="default" className="py-8">
        <div className="prose prose-lg max-w-none">
          
          <h2>The Inspection That Can Shut You Down</h2>
          
          <p>
            The health inspector walks in unannounced at 2pm on your busiest Tuesday. Your heart sinks. You know the walk-in cooler thermometer has been broken for two weeks. The hand-washing sink has a leaky faucet. One employee doesn't have their food handler card updated yet.
          </p>

          <p>
            Two hours later, you're staring at a violation list:
          </p>

          <ul>
            <li>4 critical violations (could lead to closure)</li>
            <li>8 non-critical violations</li>
            <li>Re-inspection required within 7 days</li>
            <li>If not corrected: fines or temporary closure</li>
          </ul>

          <p>
            You're panicked. Customers saw the inspection. Word spreads fast in Santa Cruz. Your reputation is at risk. And you have one week to fix everything or face serious consequences.
          </p>

          <p>
            This scenario is preventable. Health code compliance isn't mysterious—it's a system. Build the right habits and processes, and inspections become routine instead of terrifying.
          </p>

          <h2>Understanding Santa Cruz County Health Department Inspections</h2>

          <h3>Inspection Frequency:</h3>

          <ul>
            <li><strong>Restaurants and high-risk food facilities:</strong> 1-3x per year (unannounced)</li>
            <li><strong>Lower-risk food facilities:</strong> 1x per year</li>
            <li><strong>Follow-up inspections:</strong> Within 7-30 days if violations found</li>
            <li><strong>Complaint-driven inspections:</strong> Any time (if customer reports issue)</li>
          </ul>

          <h3>What They're Inspecting:</h3>

          <p>
            <strong>Critical violations (can cause illness):</strong>
          </p>

          <ul>
            <li>Food temperatures (holding, cooking, storage)</li>
            <li>Cross-contamination risks</li>
            <li>Employee hygiene and food handling</li>
            <li>Approved water source and sewage disposal</li>
            <li>Toxic substance storage</li>
          </ul>

          <p>
            <strong>Non-critical violations (maintenance/cleanliness):</strong>
          </p>

          <ul>
            <li>Equipment maintenance and cleanliness</li>
            <li>Facility structure (walls, floors, ceilings)</li>
            <li>Pest control</li>
            <li>Storage and organization</li>
            <li>Handwashing facilities</li>
          </ul>

          <h2>The Daily Compliance System</h2>

          <h3>Temperature Logging (Most Common Violation):</h3>

          <p>
            <strong>Requirements:</strong>
          </p>

          <ul>
            <li>Check refrigerator/freezer temps 2x daily (opening and mid-shift)</li>
            <li>Log all temps in notebook or digital form</li>
            <li>Refrigerators: 41°F or below</li>
            <li>Freezers: 0°F or below</li>
            <li>Hot holding: 135°F or above</li>
          </ul>

          <p>
            <strong>System implementation:</strong>
          </p>

          <ul>
            <li>Post laminated temp log sheet on walk-in door</li>
            <li>Assign to opening/closing manager (specific responsibility)</li>
            <li>Set phone reminder (7am and 3pm daily)</li>
            <li>If temp is out of range, fix immediately and document action taken</li>
          </ul>

          <p>
            <strong>Cost to implement:</strong> $20 (thermometers) + 5 minutes/day<br />
            <strong>Cost of violation:</strong> Re-inspection, potential closure, reputation damage
          </p>

          <h3>Food Handler Certification Tracking:</h3>

          <p>
            <strong>Requirement:</strong> All food handlers must have valid California Food Handler Card (renewed every 3 years)
          </p>

          <p>
            <strong>System implementation:</strong>
          </p>

          <ul>
            <li>Create spreadsheet: Employee name, certification date, expiration date</li>
            <li>Set calendar reminder 30 days before expiration</li>
            <li>Require employees to renew before expiration (not after)</li>
            <li>Keep copies of certificates in binder (inspector may ask to see)</li>
          </ul>

          <p>
            <strong>Cost:</strong> $10-15 per employee every 3 years<br />
            <strong>Online courses:</strong> ServSafe, 360training.com (takes 2 hours)
          </p>

          <h3>Cleaning and Sanitizing Schedule:</h3>

          <p>
            <strong>Create posted cleaning schedule showing:</strong>
          </p>

          <ul>
            <li>What gets cleaned (equipment, surfaces, floors)</li>
            <li>When it gets cleaned (frequency)</li>
            <li>Who's responsible</li>
            <li>How to clean (procedure, chemicals used)</li>
            <li>Verification (sign-off when completed)</li>
          </ul>

          <p>
            <strong>Example schedule (restaurant):</strong>
          </p>

          <ul>
            <li><strong>Every 4 hours:</strong> Sanitize cutting boards, knives, prep surfaces</li>
            <li><strong>End of day:</strong> Deep clean grill, ovens, fryers, floors</li>
            <li><strong>Weekly:</strong> Walk-in cooler, reach-ins, behind equipment, walls</li>
            <li><strong>Monthly:</strong> Hood and vent system, drains, ceiling, light fixtures</li>
          </ul>

          <p>
            <strong>Key:</strong> Post this visibly. Inspector wants to see you have a system.
          </p>

          <h2>Preparing for Inspection Day (Even Though It's Unannounced)</h2>

          <h3>The "Always Inspection-Ready" Philosophy:</h3>

          <p>
            <strong>Instead of:</strong> Scrambling to clean and fix when inspector arrives<br />
            <strong>Adopt:</strong> Maintain inspection-ready standards every single day
          </p>

          <p>
            <strong>Daily "Pre-Shift Inspection" (5 minutes):</strong>
          </p>

          <ul>
            <li>Walk through kitchen as if you're the health inspector</li>
            <li>Check temps, check cleanliness, check organization</li>
            <li>Fix issues immediately</li>
          </ul>

          <p>
            <strong>Why this works:</strong> If you're inspection-ready daily, actual inspections are non-events.
          </p>

          <h3>The Most Common Violations (And How to Prevent):</h3>

          <p>
            <strong>1. Temperature Control Issues</strong>
          </p>

          <ul>
            <li><strong>Prevention:</strong> Working thermometers, daily logging, immediate response to out-of-range temps</li>
          </ul>

          <p>
            <strong>2. Cross-Contamination Risks</strong>
          </p>

          <ul>
            <li><strong>Prevention:</strong> Color-coded cutting boards (red=meat, green=produce, yellow=poultry), separate storage, proper handwashing between tasks</li>
          </ul>

          <p>
            <strong>3. Improper Food Storage</strong>
          </p>

          <ul>
            <li><strong>Prevention:</strong> First-in-first-out (FIFO) system, date labeling everything, raw below cooked, proper containers</li>
          </ul>

          <p>
            <strong>4. Employee Hygiene</strong>
          </p>

          <ul>
            <li><strong>Prevention:</strong> Handwashing enforcement, no jewelry/watches, hair restraints, clean uniforms, no working while sick</li>
          </ul>

          <p>
            <strong>5. Facility and Equipment Maintenance</strong>
          </p>

          <ul>
            <li><strong>Prevention:</strong> Regular deep cleaning, fix leaks immediately, seal cracks/gaps, proper storage (off floors, organized)</li>
          </ul>

          <h2>What to Do When the Inspector Arrives</h2>

          <h3>During the Inspection:</h3>

          <ul>
            <li><strong>Be cooperative and professional:</strong> "Welcome, I'm happy to show you around"</li>
            <li><strong>Don't interfere:</strong> Let them do their job, answer questions directly</li>
            <li><strong>Take notes:</strong> Write down violations as they're mentioned</li>
            <li><strong>Ask for clarification:</strong> "Can you show me specifically what needs to be corrected?"</li>
            <li><strong>Don't make excuses:</strong> "I understand, we'll fix this immediately"</li>
          </ul>

          <h3>After the Inspection:</h3>

          <ul>
            <li><strong>Review report thoroughly:</strong> Understand each violation</li>
            <li><strong>Create action plan:</strong> Prioritize critical violations first</li>
            <li><strong>Fix everything within 24-48 hours:</strong> Don't wait until re-inspection</li>
            <li><strong>Document corrections:</strong> Take photos, save receipts for repairs/purchases</li>
            <li><strong>Train staff:</strong> Address any procedure violations with team training</li>
            <li><strong>Request re-inspection:</strong> Once everything's fixed (don't wait for them to come back)</li>
          </ul>

          <h2>Case Study: Restaurant Goes from C to A Rating</h2>

          <p>
            <strong>Initial situation:</strong> C rating (multiple violations), losing customers, reputation damaged
          </p>

          <p>
            <strong>Common violations:</strong>
          </p>

          <ul>
            <li>Inconsistent temperature logging</li>
            <li>Poor cleaning practices (grease buildup)</li>
            <li>Improper food storage (no date labels)</li>
            <li>Employee hygiene gaps</li>
          </ul>

          <p>
            <strong>Systematic improvements:</strong>
          </p>

          <ol>
            <li>Created daily temp logging checklist (mandatory, signed by manager)</li>
            <li>Implemented cleaning schedule with specific tasks/times</li>
            <li>Bought label maker, implemented date labeling system</li>
            <li>Retrained all staff on food safety (required 2-hour refresher)</li>
            <li>Fixed all equipment issues (repaired leaks, replaced broken items)</li>
            <li>Designated "health compliance manager" (existing employee with added responsibility + $1/hour raise)</li>
          </ol>

          <p>
            <strong>Results after 6 months:</strong>
          </p>

          <ul>
            <li>Next inspection: A rating (zero critical violations)</li>
            <li>Customer volume recovered (no more "I saw their C rating" comments)</li>
            <li>Team culture improved (pride in cleanliness, professionalism)</li>
            <li>Future inspections became non-events (maintained A rating for 3+ years)</li>
          </ul>

          <h2>Resources for Santa Cruz County Food Businesses</h2>

          <ul>
            <li><strong>Santa Cruz County Environmental Health:</strong> (831) 454-2022, www.santacruzhealth.org</li>
            <li><strong>Food Handler Card Training:</strong> ServSafe.com, 360training.com, local community college</li>
            <li><strong>Free consultation:</strong> Health department offers pre-opening consultations and guidance</li>
            <li><strong>California Retail Food Code:</strong> Available online, search "CalCode California Retail Food Code"</li>
          </ul>

          <h2>The Bottom Line: Compliance Is Non-Negotiable</h2>

          <p>
            Health code violations aren't just bureaucratic annoyances—they're serious risks to:
          </p>

          <ul>
            <li>Customer health and safety</li>
            <li>Your business reputation</li>
            <li>Your ability to operate (closure risk)</li>
            <li>Your legal liability</li>
          </ul>

          <p>
            <strong>Building a compliance system requires:</strong>
          </p>

          <ol>
            <li>Daily habits (temp logging, cleaning, hygiene)</li>
            <li>Clear documentation (checklists, schedules, logs)</li>
            <li>Staff training (everyone knows requirements)</li>
            <li>Regular self-audits (catch issues before inspector does)</li>
            <li>Immediate response to problems (don't let violations persist)</li>
          </ol>

          <p>
            Take compliance seriously from day one. It's easier to maintain good habits than fix bad ones under inspection pressure.
          </p>

        </div>
      </Section>

      <Section width="default" className="py-16 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">Need Help with Health Code Compliance?</h2>
          <p className="text-xl text-zinc-600 mb-8">
            We help Santa Cruz food businesses implement health code compliance systems, prepare for inspections, and maintain A ratings consistently.
          </p>
          <CTAButton href="/contact" text="Let's Build Your Compliance System" />
        </div>
      </Section>
    </div>
  )
}


