import { Metadata } from 'next'
import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'ADA Compliance for Older Santa Cruz Buildings | Accessibility Solutions',
  description: 'Navigate ADA compliance challenges in historic Santa Cruz buildings. Practical solutions for accessibility, legal requirements, and retrofitting older spaces on limited budgets.',
  keywords: 'ADA compliance Santa Cruz, accessibility requirements, historic building ADA, wheelchair access, disability access, California accessibility law, ADA retrofitting, small business compliance',
  openGraph: {
    title: 'ADA Compliance for Older Santa Cruz Buildings',
    description: 'Navigate accessibility requirements in historic buildings with practical, budget-friendly solutions.',
    type: 'article',
    publishedTime: '2025-03-08T00:00:00Z',
    authors: ['Vibes Consulting'],
    url: 'https://vibes.consulting/blog/ada-compliance-older-santa-cruz-buildings',
  },
}

export default function ADACompliancePage() {
  return (
    <div className="bg-white text-zinc-900">
      <Section width="default" className="pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900">
          ADA Compliance for Older Santa Cruz Buildings
        </h1>
        <p className="text-xl text-zinc-600 mb-8">
          How Santa Cruz businesses in historic or older buildings can navigate ADA accessibility requirements—with practical solutions that balance legal compliance, customer access, and budget constraints.
        </p>
        <div className="w-16 h-1 bg-purple-600"></div>
      </Section>

      <Section width="default" className="py-8">
        <div className="prose prose-lg max-w-none">
          
          <h2>The Historic Building Accessibility Challenge</h2>
          
          <p>
            Your business is in a beautiful historic building on Pacific Avenue. Built in 1920. Three steps up to entrance. Narrow doorways. Bathroom on second floor. No elevator.
          </p>

          <p>
            A customer in a wheelchair approaches. They can't enter. They leave frustrated. You feel terrible—you want to serve everyone—but renovating for full accessibility would cost $80,000+. Your landlord says it's "not their responsibility." And you're not sure what's legally required vs. what's optional.
          </p>

          <p>
            This is the ADA dilemma for many Santa Cruz businesses operating in older buildings: the law requires accessibility, but buildings weren't designed for it, and retrofitting is expensive or physically impossible.
          </p>

          <p>
            Here's what you're actually required to do—and what practical solutions exist.
          </p>

          <h2>Understanding ADA Requirements</h2>

          <h3>What ADA Requires:</h3>

          <p>
            <strong>Title III of ADA:</strong> Places of public accommodation must be accessible to people with disabilities.
          </p>

          <p>
            <strong>"Accessible" means:</strong>
          </p>

          <ul>
            <li>Accessible entrance (no stairs, or ramp provided)</li>
            <li>Wide enough doorways (32" minimum clear width)</li>
            <li>Accessible routes through facility</li>
            <li>Accessible bathrooms</li>
            <li>Accessible parking (if you have parking lot)</li>
            <li>Service counters at accessible height</li>
            <li>Appropriate signage</li>
          </ul>

          <h3>The "Readily Achievable" Standard for Existing Buildings:</h3>

          <p>
            <strong>Good news:</strong> Older buildings don't have to meet same standards as new construction.
          </p>

          <p>
            <strong>"Readily achievable" means:</strong> Easily accomplishable without much difficulty or expense
          </p>

          <p>
            <strong>What this means practically:</strong>
          </p>

          <ul>
            <li>You must make reasonable modifications that don't create undue financial burden</li>
            <li>Simple, low-cost fixes = required</li>
            <li>Expensive structural changes that would bankrupt a small business = may not be required</li>
          </ul>

          <p>
            <strong>Examples of "readily achievable":</strong>
          </p>

          <ul>
            <li>Installing a portable ramp ($500-2,000)</li>
            <li>Rearranging furniture to widen pathways ($0)</li>
            <li>Lowering display shelves for wheelchair access ($200)</li>
            <li>Adding grab bars in bathrooms ($100-300)</li>
          </ul>

          <p>
            <strong>Examples of NOT "readily achievable" (may be exempt):</strong>
          </p>

          <ul>
            <li>Installing elevator in 2-story building ($150,000+)</li>
            <li>Completely rebuilding entrance (structural impossibility)</li>
            <li>Modifications that would destroy historic character</li>
          </ul>

          <h2>Practical Solutions for Common Accessibility Barriers</h2>

          <h3>Problem #1: Steps at Entrance</h3>

          <p>
            <strong>Solutions (in order of cost/feasibility):</strong>
          </p>

          <ol>
            <li><strong>Portable ramp:</strong> $500-2,000, can be moved, no structural changes (most common solution)</li>
            <li><strong>Permanent ramp:</strong> $3,000-8,000, requires construction, more accessible but expensive</li>
            <li><strong>Alternative accessible entrance:</strong> If back or side entrance is level, designate as accessible entrance with signage</li>
            <li><strong>Assisted entry:</strong> Offer to help customers up stairs (NOT compliant, but better than nothing while you work on permanent solution)</li>
          </ol>

          <p>
            <strong>Recommendation:</strong> Install portable ramp immediately (it's affordable and likely legally required).
          </p>

          <h3>Problem #2: Narrow Doorways or Aisles</h3>

          <p>
            <strong>Solutions:</strong>
          </p>

          <ul>
            <li>Rearrange displays to create wider pathways (32" minimum for wheelchairs)</li>
            <li>Remove unnecessary furniture or fixtures</li>
            <li>Install French doors or double doors (widens entrance from 30" to 60")</li>
            <li>If structurally impossible to widen, document this and provide alternative service (bring products to customer outside, offer online ordering)</li>
          </ul>

          <h3>Problem #3: Inaccessible Bathrooms</h3>

          <p>
            <strong>If bathroom is upstairs or through narrow hallway:</strong>
          </p>

          <ul>
            <li><strong>Best solution:</strong> Install accessible bathroom on main floor ($10,000-30,000)</li>
            <li><strong>Budget alternative:</strong> Partner with nearby business to allow your customers to use their accessible bathroom</li>
            <li><strong>Temporary solution:</strong> Post signage showing nearest accessible public restrooms, offer to call taxi/rideshare if needed</li>
          </ul>

          <p>
            <strong>Note:</strong> If you're remodeling bathrooms anyway, you MUST make them ADA-compliant. No exemptions for renovations.
          </p>

          <h3>Problem #4: Service Counter Too High</h3>

          <p>
            <strong>Requirement:</strong> At least portion of counter must be 34" high or lower (wheelchair accessible)
          </p>

          <p>
            <strong>Solutions:</strong>
          </p>

          <ul>
            <li>Lower section of existing counter (carpenter, $500-1,500)</li>
            <li>Add separate lower transaction surface adjacent to main counter ($200-500)</li>
            <li>Use mobile transaction method (bring iPad/terminal to customer wherever they are)</li>
          </ul>

          <h2>When Compliance Feels Impossible</h2>

          <h3>Document "Undue Hardship":</h3>

          <p>
            <strong>If modifications are genuinely not feasible:</strong>
          </p>

          <ul>
            <li>Get professional assessment (architect or ADA consultant)</li>
            <li>Document why modifications are impossible or would create undue financial burden</li>
            <li>Show what alternatives you ARE providing (online ordering, curb service, etc.)</li>
          </ul>

          <p>
            <strong>Legal protection:</strong> If sued, you can demonstrate good-faith effort and legitimate hardship.
          </p>

          <h3>Alternative Service Methods:</h3>

          <p>
            <strong>If physical space can't be made fully accessible, provide equivalent service:</strong>
          </p>

          <ul>
            <li><strong>Curbside service:</strong> Customer calls/texts, you bring products outside</li>
            <li><strong>Online ordering with delivery:</strong> Eliminates need for physical access</li>
            <li><strong>House calls:</strong> For service businesses, offer to come to customer's accessible location</li>
            <li><strong>Video consultations:</strong> For professional services</li>
          </ul>

          <p>
            <strong>Legal standard:</strong> Must provide "equal access" to goods/services, even if access method is different.
          </p>

          <h2>Funding Accessibility Improvements</h2>

          <h3>Disabled Access Tax Credit:</h3>

          <p>
            <strong>Federal tax credit for small businesses (under 30 employees or $1M revenue):</strong>
          </p>

          <ul>
            <li>50% tax credit on accessibility expenditures between $250-$10,250</li>
            <li>Maximum credit: $5,000/year</li>
            <li>Covers ramps, grab bars, wider doors, accessible restrooms, etc.</li>
          </ul>

          <p>
            <strong>Example:</strong> Spend $6,000 on accessibility improvements<br />
            Tax credit: 50% × ($6,000 - $250) = <strong>$2,875</strong><br />
            Net cost: $3,125
          </p>

          <h3>California State Grants and Programs:</h3>

          <ul>
            <li><strong>CASp (Certified Access Specialist) Inspection Program:</strong> Get free or low-cost accessibility assessment</li>
            <li><strong>Small Business Technical Assistance:</strong> Free guidance from disability access specialists</li>
          </ul>

          <h2>The Bottom Line: Do What's Reasonable, Document What's Not</h2>

          <p>
            ADA compliance in older Santa Cruz buildings requires balance:
          </p>

          <ol>
            <li><strong>Make readily achievable improvements:</strong> Ramps, clear pathways, accessible service</li>
            <li><strong>Document genuine barriers:</strong> Get professional assessment of what's physically/financially impossible</li>
            <li><strong>Provide alternative access:</strong> Curbside, delivery, online options</li>
            <li><strong>Budget for gradual improvements:</strong> Use tax credits to offset costs</li>
            <li><strong>Consult attorney if uncertain:</strong> Better to ask than risk lawsuit</li>
          </ol>

          <p>
            Perfect accessibility might not be achievable in 1920s buildings, but meaningful access is always possible.
          </p>

        </div>
      </Section>

      <Section width="default" className="py-16 bg-zinc-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">Need ADA Compliance Guidance?</h2>
          <p className="text-xl text-zinc-600 mb-8">
            We help Santa Cruz businesses assess accessibility requirements, implement practical solutions, and ensure compliance within budget constraints.
          </p>
          <CTAButton href="/contact" text="Let's Assess Your Accessibility" />
        </div>
      </Section>
    </div>
  )
}


