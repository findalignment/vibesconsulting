import CTAButton from '@/components/CTAButton'

export default function HomePage() {
  return (
    <div className="pb-24">
      <section className="mt-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1>We fix the flow.</h1>
          <p className="mt-4 max-w-xl text-lg">Vibes Consulting helps small businesses in Santa Cruz operate with ease, alignment, and intelligence. We merge total quality management, human systems insight, and modern AI tools to create environments where people actually want to be.</p>
          <p className="mt-3 text-white/70 max-w-xl">You can feel when a business works — and when it doesn't. We identify invisible friction, restore operational flow, and teach you how to keep it that way.</p>
          <div className="mt-8 flex gap-4 items-center">
            <CTAButton>Get Your Flow Check</CTAButton>
            <a href="#how" className="btn btn-ghost">How it works</a>
          </div>
        </div>
        <div className="card p-0 overflow-hidden">
          <img src="/images/hero.jpg" alt="Flow" className="w-full h-full object-cover" />
        </div>
      </section>

      <section id="how" className="mt-20">
        <div className="text-center mb-12">
          <h2 className="mb-4">How We Work</h2>
          <p className="text-white/80 max-w-2xl mx-auto">We blend three disciplines to create lasting operational flow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: 'TQM Principles',
            text: 'Continuous improvement, customer focus, and process optimization. We diagnose friction using proven quality management frameworks.'
          },{
            title: 'Human-Centered Systems',
            text: 'Structure, rituals, and communication loops that work with how people actually operate — not against them.'
          },{
            title: 'Safe AI Enablement',
            text: 'Practical, low-risk adoption of automation tools that reduce noise and error without exposing data.'
          }].map((b) => (
            <div key={b.title} className="card p-6">
              <h3 className="mb-2">{b.title}</h3>
              <p className="text-white/70">{b.text}</p>
            </div>
          ))}
        </div>
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

