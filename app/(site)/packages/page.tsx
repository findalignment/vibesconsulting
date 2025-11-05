export const metadata = { title: 'Packages — Vibes Consulting' }

const packages = [
  { name: 'The Flow Check', desc: 'Two-week diagnostic to identify bottlenecks and cultural drag.', duration: '2 weeks', price: '$2,500' },
  { name: 'The Flow Rebuild', desc: 'Rebuild one critical system + AI enablement and SOPs.', duration: '6 weeks', price: '$8,000' },
  { name: 'The Vibe Partnership', desc: 'Quarterly retainer for ongoing flow, culture, and AI.', duration: '3 months', price: '$3,500/mo' },
]

export default function PackagesPage() {
  return (
    <div>
      <h1>Packages</h1>
      <p className="mt-3 text-white/80 max-w-2xl">Simple offers built for small businesses who value clarity and momentum.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {packages.map(p => (
          <div key={p.name} className="card p-6 flex flex-col">
            <h3>{p.name}</h3>
            <p className="text-white/70 mt-2 flex-1">{p.desc}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-white/90">{p.duration}</span>
              <span className="text-white font-semibold">{p.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

