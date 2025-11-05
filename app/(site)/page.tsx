import CTAButton from '@/components/CTAButton'

export default function HomePage() {
  return (
    <div className="pb-24">
      <section className="mt-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1>We fix the flow.</h1>
          <p className="mt-4 max-w-xl">TQM discipline + human systems + safe AI. Vibes Consulting helps small businesses in Santa Cruz operate with ease, alignment, and intelligence.</p>
          <div className="mt-8 flex gap-4 items-center">
            <CTAButton>Get Your Flow Check</CTAButton>
            <a href="#how" className="btn btn-ghost">How it works</a>
          </div>
        </div>
        <div className="card p-0 overflow-hidden">
          <img src="/images/hero.jpg" alt="Flow" className="w-full h-full object-cover" />
        </div>
      </section>

      <section id="how" className="mt-20 grid md:grid-cols-3 gap-6">
        {[{
          title: 'Find the friction',
          text: 'We map your processes, people dynamics, and space to reveal invisible blockers.'
        },{
          title: 'Rebuild the flow',
          text: 'Redesign rituals, decision rights, and workflows using TQM tools.'
        },{
          title: 'Future-proof with AI',
          text: 'Introduce low-risk automations and train your team to use them well.'
        }].map((b) => (
          <div key={b.title} className="card p-6">
            <h3 className="mb-2">{b.title}</h3>
            <p className="text-white/70">{b.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-20 card p-10 flex items-center justify-between gap-6">
        <div>
          <h2 className="mb-2">Book your Flow Check</h2>
          <p className="text-white/70 max-w-2xl">Two-week diagnostic to pinpoint bottlenecks and produce a 90-day improvement plan. Credit applied to any engagement.</p>
        </div>
        <CTAButton />
      </section>
    </div>
  )
}

