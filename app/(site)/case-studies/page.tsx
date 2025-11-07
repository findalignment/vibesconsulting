import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = { title: 'Case Studies - Vibes Consulting' }

const cases = [
  { title: 'Boutique Studio', result: 'Onboarding 30% faster', description: 'Simplified intake, clarified roles, built a meeting OS.' },
  { title: 'Creative Agency', result: '50% fewer meetings', description: 'Decision rights and cadence redesign + async briefs.' },
  { title: 'Retail Space', result: 'NPS +22 in 60 days', description: 'Vibe reset + safe AI scheduling and CRM automations.' },
]

export default function CaseStudiesPage() {
  return (
    <div>
      <h1>Case Studies</h1>
      <p className="mt-3 text-white/80 max-w-2xl">Before-and-after snapshots that show what flow feels like in practice.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {cases.map(c => <CaseStudyCard key={c.title} {...c} />)}
      </div>
    </div>
  )
}

