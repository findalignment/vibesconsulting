import Section from '@/components/Section'
import BlogAccordion from '@/components/BlogAccordion'
import { createMetadata as generateMeta } from '@/lib/seo'

export const metadata = generateMeta({
  title: 'Finding Employees Who Align with Santa Cruz Local Values | Culture Fit Hiring',
  description: 'How to identify and hire employees who genuinely align with Santa Cruz values of sustainability, community, and authenticity. Build values-based team.',
  keywords: 'values-based hiring, santa cruz culture, employee alignment, authentic hiring, community values'
})

export default function EmployeesAlignLocalValues() {
  const sections = [
    {
      title: 'Why Values Alignment Matters',
      content: (
        <>
          <p className="mb-4">
            Technical skills can be trained. Values alignment cannot. Employee who doesn't share Santa Cruz values will feel miserable, perform poorly, and leave quickly. Customer can sense inauthenticity immediately. Team culture deteriorates when someone's values conflict with community identity.
          </p>
          <p className="mb-4">
            Santa Cruz has distinct cultural values: environmental sustainability, support for local economy, anti-corporate authenticity, outdoor lifestyle, progressive social values, community over profit. Not everyone shares these. Someone who sees Santa Cruz as quaint beach town they're passing through creates friction. Someone who genuinely chose Santa Cruz for these values becomes your best employee.
          </p>
        </>
      )
    },
    {
      title: 'Santa Cruz Core Values (What to Look For)',
      content: (
        <>
          <p className="mb-6 mt-4">
            <strong>Key Cultural Values:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Environmental Sustainability</strong>
          </p>
          <p className="mb-4">
            Not just talking points—actual lifestyle choices. They bike/bus instead of drive. Care about waste reduction. Choose reusable over disposable. Understand ocean health and coastal preservation.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Local Economy Support</strong>
          </p>
          <p className="mb-4">
            Shop locally when possible. Appreciate independent businesses. Understand value of keeping money in community vs sending to corporations. Willing to pay slight premium for local.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Authenticity Over Corporate Culture</strong>
          </p>
          <p className="mb-4">
            Prefer real over polished. Value genuine relationships over transactional interactions. Skeptical of corporate speak and manufactured culture.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Outdoor Lifestyle Integration</strong>
          </p>
          <p className="mb-4">
            Surf, hiking, biking, kayaking—outdoor activities aren't just hobbies, they're identity. Understand why someone would prioritize powder day over extra shift.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Progressive Social Values</strong>
          </p>
          <p className="mb-4">
            LGBTQ+ support, racial justice, economic equity. Not performative—genuinely held beliefs. Comfortable with diverse, inclusive community.
          </p>

          <p className="mb-4 mt-8">
            <strong>6. Community Connection</strong>
          </p>
          <p className="mb-4">
            Know their neighbors. Participate in community events. Care about Santa Cruz as place, not just location to extract income.
          </p>

          <p className="mb-4 mt-8">
            <strong>7. Quality of Life Over Career Advancement</strong>
          </p>
          <p className="mb-4">
            Explicitly chose lower wages and slower career progression for lifestyle. Not bitter about trade-off—at peace with it.
          </p>
        </>
      )
    },
    {
      title: 'Screening for Values During Hiring',
      content: (
        <>
          <p className="mb-4">
            Resume shows skills. Interview reveals values. Here's how to assess alignment.
          </p>

          <p className="mb-6 mt-6">
            <strong>Values-Based Interview Questions:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. "Why Santa Cruz?"</strong>
          </p>
          <p className="mb-4">
            Listen for genuine connection vs "nice beach town." Good answers: "I grew up surfing here," "Community values align with mine," "Wanted to raise kids somewhere with outdoor focus." Red flags: "Temporary until I save money," "Close to Bay Area jobs," "Cheap rent" (they haven't been looking).
          </p>

          <p className="mb-4 mt-8">
            <strong>2. "What do you do outside of work?"</strong>
          </p>
          <p className="mb-4">
            Reveals lifestyle priorities. Aligned candidates: surfing, hiking, volunteering, local events, creative pursuits. Misaligned: "Just work and save money," "Netflix," nothing that connects to community.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. "Tell me about your favorite local business."</strong>
          </p>
          <p className="mb-4">
            Tests local engagement. Aligned: can name specific places, knows owners, has relationships with local spots. Misaligned: blank stare or mentions Starbucks.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. "What attracted you to our business specifically?"</strong>
          </p>
          <p className="mb-4">
            Aligned: mentions values, mission, local reputation. Misaligned: "Just need job," "Heard you pay well," generic answers that could apply to any employer.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. "How do you get around Santa Cruz?"</strong>
          </p>
          <p className="mb-4">
            Reveals practical values alignment. Bike/bus/walk = living values. Giant truck for solo commuting = probably not aligned with environmental priorities (unless job requires).
          </p>

          <p className="mb-4 mt-8">
            <strong>6. "What's your 5-year plan?"</strong>
          </p>
          <p className="mb-4">
            Aligned: staying in Santa Cruz, building life here, depth over breadth. Misaligned: "Make money and move," "Build resume for bigger city," using Santa Cruz as stepping stone.
          </p>
        </>
      )
    },
    {
      title: 'Attracting Values-Aligned Candidates',
      content: (
        <>
          <p className="mb-4">
            Generic job posts attract generic candidates. Values-forward job posts attract values-aligned candidates.
          </p>

          <p className="mb-6 mt-6">
            <strong>Values-Based Job Posting Strategy:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Lead with Mission and Values</strong>
          </p>
          <p className="mb-4">
            Don't bury values at bottom. Start with: "We're locally-owned, sustainability-focused, community-centered business looking for team member who shares these values."
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Describe Culture, Not Just Duties</strong>
          </p>
          <p className="mb-4">
            "We're small team that knows regulars by name, sources locally, closes for beach cleanups, and makes decisions based on community impact, not just profit." Paints picture of values in action.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Mention Specific Local Connections</strong>
          </p>
          <p className="mb-4">
            "We've been in Seabright for 12 years," "We source from Happy Boy Farms and New Leaf," "We sponsor local youth surf contests." Demonstrates rootedness.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Post in Values-Aligned Spaces</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Local Facebook groups (not indeed.com)</li>
            <li>Community centers and co-ops</li>
            <li>Outdoor recreation spots</li>
            <li>Farmers market bulletin boards</li>
            <li>Local sustainability organizations</li>
          </ul>

          <p className="mb-4 mt-8">
            <strong>5. Show, Don't Just Tell</strong>
          </p>
          <p className="mb-4">
            Include photo of team at beach cleanup, or composting system, or local event sponsorship. Visual proof of values beats words.
          </p>
        </>
      )
    },
    {
      title: 'Red Flags: Values Misalignment',
      content: (
        <>
          <p className="mb-4">
            Sometimes candidates say right things but don't mean them. Watch for misalignment signals.
          </p>

          <p className="mb-6 mt-6">
            <strong>Warning Signs:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Everything is about money:</strong> Only asks about pay, never mission or culture</li>
            <li><strong>Corporate language:</strong> Talks about "synergy" and "value-add" instead of authentic communication</li>
            <li><strong>Unfamiliar with Santa Cruz:</strong> Just moved here, doesn't know community, sees as generic beach town</li>
            <li><strong>Status-focused:</strong> Concerned with title, advancement, resume building over doing good work</li>
            <li><strong>Disparaging remarks:</strong> Comments about "hippies" or "slow pace" or "lack of ambition" in Santa Cruz</li>
            <li><strong>Temporary mindset:</strong> Explicitly says they're here short-term or saving to leave</li>
            <li><strong>Doesn't ask questions:</strong> Not curious about mission, community impact, or values—just wants job</li>
          </ul>

          <p className="mb-4 mt-6">
            Trust gut feeling. If something feels off about cultural fit, it probably is. Better to keep looking than hire misaligned person.
          </p>
        </>
      )
    },
    {
      title: 'Building and Maintaining Values-Based Culture',
      content: (
        <>
          <p className="mb-4">
            Hiring for values is start. Maintaining values-based culture requires ongoing intentionality.
          </p>

          <p className="mb-6 mt-6">
            <strong>Culture Maintenance:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Walk the Talk</strong>
          </p>
          <p className="mb-4">
            If you claim sustainability values but use single-use everything, employees see hypocrisy. Values must be lived daily, not marketing copy.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Involve Team in Values Decisions</strong>
          </p>
          <p className="mb-4">
            "Should we switch to more sustainable packaging even if it costs more?" Ask team input. Shows values matter and creates ownership.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Community Engagement as Team</strong>
          </p>
          <p className="mb-4">
            Beach cleanups, volunteer events, local sponsorships—do them together. Reinforces shared values through action.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Celebrate Values Wins</strong>
          </p>
          <p className="mb-4">
            When team member suggests improvement aligned with values, celebrate it. "Great idea to source locally—let's do it." Reinforces what matters.
          </p>

          <p className="mb-4 mt-8">
            <strong>5. Address Values Violations</strong>
          </p>
          <p className="mb-4">
            If employee's behavior conflicts with stated values, address it. "We don't talk about customers that way" or "We committed to sustainability—let's follow through." Values with no accountability become empty.
          </p>
        </>
      )
    },
    {
      title: 'When Values and Business Conflict',
      content: (
        <>
          <p className="mb-4">
            Sometimes values-based decision costs money or creates inconvenience. How you handle these moments defines whether values are real or performative.
          </p>

          <p className="mb-6 mt-6">
            <strong>Navigating Values-Profit Tensions:</strong>
          </p>

          <p className="mb-4 mt-4">
            <strong>1. Be Transparent</strong>
          </p>
          <p className="mb-4">
            "Switching to compostable containers costs $500/month more. Here's why we're doing it anyway." Transparency builds trust even when decision has cost.
          </p>

          <p className="mb-4 mt-8">
            <strong>2. Make Values-Based Trade-Offs</strong>
          </p>
          <p className="mb-4">
            Can't afford everything. Choose values-aligned options that fit budget. "We can't pay Bay Area wages, but we can source locally and maintain work-life balance." Honest about constraints while staying aligned.
          </p>

          <p className="mb-4 mt-8">
            <strong>3. Involve Team in Dilemmas</strong>
          </p>
          <p className="mb-4">
            "We need to cut costs. Options: cheaper (non-local) suppliers or reduce hours. What matters more to us?" Team buy-in makes tough choices sustainable.
          </p>

          <p className="mb-4 mt-8">
            <strong>4. Acknowledge When You Fall Short</strong>
          </p>
          <p className="mb-4">
            "We try to source everything locally but [product] isn't available. We're still looking for local option." Imperfection with honesty better than pretending.
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
            Finding Employees Who Align with Santa Cruz Local Values
          </h1>
          <p className="text-xl text-brand-text/70 leading-relaxed">
            Hire for values alignment, not just skills. Build team that genuinely shares Santa Cruz's commitment to sustainability, community, and authenticity.
          </p>
        </header>

        <BlogAccordion sections={sections} />

        <div className="mt-16 bg-brand-accent/5 border-2 border-brand-accent rounded-2xl p-8">
          <h2 className="text-2xl font-extrabold text-brand-text mb-4">
            Need Help Building Values-Based Team?
          </h2>
          <p className="text-brand-text/70 mb-6">
            We help Santa Cruz businesses define their values, screen for alignment, and build authentic workplace culture that attracts right people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/services/business-flow" 
              className="inline-block bg-brand-accent text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-accent-dark transition-colors text-center"
            >
              Build Values-Based Culture
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-brand-accent text-brand-accent font-bold px-8 py-4 rounded-xl hover:bg-brand-accent/10 transition-colors text-center"
            >
              Discuss Your Culture
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

