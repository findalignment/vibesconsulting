export const metadata = { title: 'About - Vibes Consulting' }

export default function AboutPage() {
  return (
    <div className="pb-20">
      <header className="mb-12">
        <h1>About Vibes Consulting</h1>
        <p className="mt-3 text-xl text-brand-text/90 max-w-3xl">We fix the flow.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="card p-8">
          <h2 className="text-2xl mb-4 text-current-500">Mission</h2>
          <p className="text-brand-text/70 leading-relaxed">Vibes Consulting helps small businesses operate with ease, alignment, and intelligence. We merge total quality management, human systems insight, and modern AI tools to create environments where people actually want to be - cohesive, efficient, and alive with purpose.</p>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl mb-4 text-current-500">Vision</h2>
          <p className="text-brand-text/70 leading-relaxed">To make "flow" the new business metric - not just profit or productivity. When people enjoy how things move, everything works better.</p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="mb-6">Core Philosophy</h2>
        <div className="card p-8">
          <p className="text-brand-text/90 text-lg mb-6">You can feel when a business works - and when it doesn't. Vibes Consulting identifies invisible friction, restores operational flow, and teaches leaders how to keep it that way.</p>
          
          <h3 className="text-xl mb-4 text-current-500">We blend three disciplines:</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-brand-text mb-2">TQM Principles</h4>
              <p className="text-brand-text/70">Continuous improvement, customer focus, process optimization. We use proven quality management frameworks to diagnose and fix operational friction.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-brand-text mb-2">Human-Centered Systems Thinking</h4>
              <p className="text-brand-text/70">Structure, rituals, communication loops. We design systems that work with how people actually operate, not against them.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-brand-text mb-2">AI Enablement</h4>
              <p className="text-brand-text/70">Practical, safe adoption of automation tools to reduce noise and error. We help teams use AI responsibly and effectively.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Our Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg mb-2">Clarity over noise</h3>
            <p className="text-brand-text/70">Simple, actionable insights. No jargon, no consultant theater.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg mb-2">Flow over force</h3>
            <p className="text-brand-text/70">Systems should enable momentum, not require constant pushing.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg mb-2">People over theatrics</h3>
            <p className="text-brand-text/70">Real humans doing real work. We design for how teams actually operate.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg mb-2">Continuous improvement over quick wins</h3>
            <p className="text-brand-text/70">Sustainable change beats temporary fixes. We build systems that last.</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">Who We Serve</h2>
        <div className="card p-8">
          <p className="text-brand-text/90 mb-6">Based in <strong>Santa Cruz, CA</strong>, we work with boutique businesses and owner-operators who care about their people and the vibe.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <h3 className="text-lg mb-2 text-current-500">Boutique Businesses</h3>
              <p className="text-brand-text/70 text-sm">Gyms, wellness studios, design agencies, retail, hospitality - places where culture matters as much as output.</p>
            </div>
            <div>
              <h3 className="text-lg mb-2 text-current-500">Owner-Operators</h3>
              <p className="text-brand-text/70 text-sm">Founders who want less chaos and more joy. Leaders who know something's off but can't name it.</p>
            </div>
            <div>
              <h3 className="text-lg mb-2 text-current-500">AI-Curious Teams</h3>
              <p className="text-brand-text/70 text-sm">Local businesses experimenting with AI but unsure how to start safely without exposing client data.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6">About Rock Hudson</h2>
        <div className="card p-8">
          <p className="text-brand-text/70 leading-relaxed mb-4">Founded by Rock Hudson in Santa Cruz, Vibes Consulting brings together decades of experience in total quality management, organizational design, and modern technology adoption.</p>
          <p className="text-brand-text/70 leading-relaxed">Rock has helped owner-operators across industries transform chaotic operations into smooth, sustainable systems that people love working within.</p>
        </div>
      </section>

      <section className="card p-8 bg-current-600/10 text-center">
        <h2 className="mb-4">Ready to Fix Your Flow?</h2>
        <p className="text-brand-text/70 max-w-2xl mx-auto mb-6">If your business feels harder than it should, let's talk. Book a 30-minute intro call to explore what flow could look like for your team.</p>
        <a href="/contact" className="btn btn-primary">Schedule Intro Call</a>
      </section>
    </div>
  )
}

