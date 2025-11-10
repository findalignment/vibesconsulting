import CTAButton from '@/components/CTAButton'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="mt-12 mb-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">We fix the flow.</h1>
          <p className="text-2xl text-white/90 mb-10 font-light">Align your people, pull the data, execute with intelligence.</p>
          
          <div className="mb-12">
            <div className="card p-0 overflow-hidden bg-white/[0.02]">
              <img src="/images/home-hero.png" alt="Business Flow Visualization" className="w-full h-auto" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
            <CTAButton>Start Your Flow Check</CTAButton>
            <a href="#how" className="text-current-400 hover:text-current-300 transition-colors font-medium">How We Work →</a>
          </div>

          {/* Quick Value Proposition */}
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div className="text-center">
              <div className="text-current-500 mb-2">⚡</div>
              <p className="text-white/90 font-medium">Reduce friction</p>
            </div>
            <div className="text-center">
              <div className="text-current-500 mb-2">📈</div>
              <p className="text-white/90 font-medium">Improve performance</p>
            </div>
            <div className="text-center">
              <div className="text-current-500 mb-2">🤖</div>
              <p className="text-white/90 font-medium">Leverage smart AI</p>
            </div>
          </div>
          <p className="text-white/60 text-sm">Based in Santa Cruz • Serving national clients</p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="mb-4">What we do</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Link 
            href="/services/business-flow"
            className="card p-8 group cursor-pointer hover:border-current-600/60 transition-all"
          >
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="mb-3 group-hover:text-current-500 transition-colors">Business Flow Optimization</h3>
            <p className="text-white/70 mb-4 text-sm">Identify bottlenecks and streamline operations for maximum efficiency.</p>
            <span className="text-current-400 text-sm group-hover:text-current-300 transition-colors">Learn more →</span>
          </Link>

          <Link 
            href="/services/ai-integration"
            className="card p-8 group cursor-pointer hover:border-current-600/60 transition-all"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="mb-3 group-hover:text-current-500 transition-colors">AI & Automation Strategy</h3>
            <p className="text-white/70 mb-4 text-sm">Safe, practical AI integration that reduces repetitive work.</p>
            <span className="text-current-400 text-sm group-hover:text-current-300 transition-colors">Learn more →</span>
          </Link>

          <Link 
            href="/services/culture-optimization"
            className="card p-8 group cursor-pointer hover:border-current-600/60 transition-all"
          >
            <div className="text-4xl mb-4">👥</div>
            <h3 className="mb-3 group-hover:text-current-500 transition-colors">Human Systems & Culture Design</h3>
            <p className="text-white/70 mb-4 text-sm">Build rituals and communication patterns that people actually follow.</p>
            <span className="text-current-400 text-sm group-hover:text-current-300 transition-colors">Learn more →</span>
          </Link>
        </div>
      </section>

      {/* Case Study / Trust Section */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <h2 className="mb-4">Results that show up</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/case-studies/retail-testing-space" className="card p-8 hover:border-current-600/60 transition-all group">
            <div className="text-current-500 font-bold text-2xl mb-3">35% cost reduction</div>
            <h3 className="mb-2 group-hover:text-current-500 transition-colors">Retail Testing Space</h3>
            <p className="text-white/70 text-sm mb-4">Streamlined their client onboarding and operational workflow in under 90 days.</p>
            <span className="text-current-400 text-sm">Read case study →</span>
          </Link>

          <Link href="/case-studies/training-studio" className="card p-8 hover:border-current-600/60 transition-all group">
            <div className="text-current-500 font-bold text-2xl mb-3">50% time saved</div>
            <h3 className="mb-2 group-hover:text-current-500 transition-colors">Training Studio</h3>
            <p className="text-white/70 text-sm mb-4">Automated scheduling and client communication with AI integration.</p>
            <span className="text-current-400 text-sm">Read case study →</span>
          </Link>
        </div>
      </section>

      {/* Our Approach */}
      <section id="how" className="mb-24">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our approach</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Three steps to operational clarity</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="card p-8">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="mb-3 text-xl">1. Diagnose</h3>
              <p className="text-white/70 text-sm">We observe your operations and identify friction points through team interviews and process mapping.</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card p-8">
              <div className="text-5xl mb-4">✏️</div>
              <h3 className="mb-3 text-xl">2. Design</h3>
              <p className="text-white/70 text-sm">Create clear flow maps and actionable improvement plans tailored to your business reality.</p>
            </div>
          </div>
          <div className="text-center">
            <div className="card p-8">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="mb-3 text-xl">3. Deploy</h3>
              <p className="text-white/70 text-sm">Implement changes with your team, providing tools and coaching to make improvements stick.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="card p-12 bg-current-600/10 text-center">
        <h2 className="mb-4">Ready to fix your flow?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">Two-week diagnostic to pinpoint bottlenecks and produce a 90-day improvement plan. Full credit applied to any future engagement.</p>
        <CTAButton>Start Your Flow Check</CTAButton>
      </section>
    </div>
  )
}

