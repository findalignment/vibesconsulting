import CTAButton from '@/components/CTAButton'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="mt-12 mb-32">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="mb-8 animate-fade-in">We fix the flow.</h1>
          <p className="text-2xl md:text-3xl text-brand-text/70 mb-12 font-light max-w-3xl mx-auto animate-slide-up">Align your people, pull the data, execute with intelligence.</p>
          
          <div className="mb-16">
            <div className="rounded-3xl overflow-hidden shadow-soft bg-brand-neutral/20">
              <img src="/images/home-hero.png" alt="Business Flow Visualization" className="w-full h-auto" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-20">
            <CTAButton>Start Your Flow Check</CTAButton>
            <a href="#how" className="text-brand-accent hover:text-brand-accent-dark transition-colors font-medium text-lg">How We Work →</a>
          </div>

          {/* Quick Value Proposition */}
          <div className="grid md:grid-cols-3 gap-12 mb-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <p className="text-brand-text font-semibold text-lg">Reduce friction</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <p className="text-brand-text font-semibold text-lg">Improve performance</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤖</div>
              <p className="text-brand-text font-semibold text-lg">Leverage smart AI</p>
            </div>
          </div>
          <p className="text-brand-text/50 text-sm tracking-wide">Based in Santa Cruz • Serving national clients</p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="mb-4">What we do</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Link 
            href="/services/business-flow"
            className="service-card group"
          >
            <div className="text-5xl mb-6 transition-transform group-hover:scale-110 duration-300">🔄</div>
            <h3 className="mb-4 group-hover:text-brand-accent transition-colors">Business Flow Optimization</h3>
            <p className="text-brand-text/70 mb-6">Identify bottlenecks and streamline operations for maximum efficiency.</p>
            <span className="text-brand-accent font-medium group-hover:text-brand-accent-dark transition-colors">Learn more →</span>
          </Link>

          <Link 
            href="/services/ai-integration"
            className="service-card group"
          >
            <div className="text-5xl mb-6 transition-transform group-hover:scale-110 duration-300">🚀</div>
            <h3 className="mb-4 group-hover:text-brand-accent transition-colors">AI & Automation Strategy</h3>
            <p className="text-brand-text/70 mb-6">Safe, practical AI integration that reduces repetitive work.</p>
            <span className="text-brand-accent font-medium group-hover:text-brand-accent-dark transition-colors">Learn more →</span>
          </Link>

          <Link 
            href="/services/culture-optimization"
            className="service-card group"
          >
            <div className="text-5xl mb-6 transition-transform group-hover:scale-110 duration-300">👥</div>
            <h3 className="mb-4 group-hover:text-brand-accent transition-colors">Human Systems & Culture Design</h3>
            <p className="text-brand-text/70 mb-6">Build rituals and communication patterns that people actually follow.</p>
            <span className="text-brand-accent font-medium group-hover:text-brand-accent-dark transition-colors">Learn more →</span>
          </Link>
        </div>
      </section>

      {/* Case Study / Trust Section */}
      <section className="mb-32 bg-brand-neutral/10 -mx-6 px-6 py-20 md:-mx-8 md:px-8 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="mb-4">Results that show up</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link href="/case-studies/retail-testing-space" className="card p-10 group">
            <div className="text-brand-accent font-extrabold text-4xl mb-4">35% cost reduction</div>
            <h3 className="mb-3 group-hover:text-brand-accent transition-colors">Retail Testing Space</h3>
            <p className="text-brand-text/70 mb-6">Streamlined their client onboarding and operational workflow in under 90 days.</p>
            <span className="text-brand-accent font-medium">Read case study →</span>
          </Link>

          <Link href="/case-studies/training-studio" className="card p-10 group">
            <div className="text-brand-accent font-extrabold text-4xl mb-4">50% time saved</div>
            <h3 className="mb-3 group-hover:text-brand-accent transition-colors">Training Studio</h3>
            <p className="text-brand-text/70 mb-6">Automated scheduling and client communication with AI integration.</p>
            <span className="text-brand-accent font-medium">Read case study →</span>
          </Link>
        </div>
      </section>

      {/* Our Approach */}
      <section id="how" className="mb-32">
        <div className="text-center mb-16">
          <h2 className="mb-6">Our approach</h2>
          <p className="text-brand-text/70 max-w-2xl mx-auto text-xl">Three steps to operational clarity</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="card p-10 group hover:shadow-card-hover transition-all">
              <div className="text-6xl mb-6 transition-transform group-hover:scale-110 duration-300">🔍</div>
              <h3 className="mb-4 text-2xl">1. Diagnose</h3>
              <p className="text-brand-text/70">We observe your operations and identify friction points through team interviews and process mapping.</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card p-10 group hover:shadow-card-hover transition-all">
              <div className="text-6xl mb-6 transition-transform group-hover:scale-110 duration-300">✏️</div>
              <h3 className="mb-4 text-2xl">2. Design</h3>
              <p className="text-brand-text/70">Create clear flow maps and actionable improvement plans tailored to your business reality.</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card p-10 group hover:shadow-card-hover transition-all">
              <div className="text-6xl mb-6 transition-transform group-hover:scale-110 duration-300">⚙️</div>
              <h3 className="mb-4 text-2xl">3. Deploy</h3>
              <p className="text-brand-text/70">Implement changes with your team, providing tools and coaching to make improvements stick.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="card p-12 md:p-16 bg-brand-accent/5 border-2 border-brand-accent text-center">
        <h2 className="mb-6">Ready to fix your flow?</h2>
        <p className="text-brand-text/70 max-w-2xl mx-auto mb-10 text-lg">Two-week diagnostic to pinpoint bottlenecks and produce a 90-day improvement plan. Full credit applied to any future engagement.</p>
        <CTAButton>Start Your Flow Check</CTAButton>
      </section>
    </div>
  )
}

