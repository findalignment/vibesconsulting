import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 text-sm text-brand-text/60">
      <div className="border-t border-brand-neutral pt-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-brand-text font-semibold mb-4">Services</h3>
            <div className="flex flex-col gap-2">
              <Link href="/services/business-flow" className="hover:text-brand-accent transition-colors">Business Flow</Link>
              <Link href="/services/ai-integration" className="hover:text-brand-accent transition-colors">AI Integration</Link>
              <Link href="/services/culture-optimization" className="hover:text-brand-accent transition-colors">Culture Optimization</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-brand-text font-semibold mb-4">Resources</h3>
            <div className="flex flex-col gap-2">
              <Link href="/resources/5-signs" className="hover:text-brand-accent transition-colors">5 Signs Guide</Link>
              <Link href="/resources/10-minute-audit" className="hover:text-brand-accent transition-colors">10-Min Audit</Link>
              <Link href="/resources/delegation-framework" className="hover:text-brand-accent transition-colors">Delegation Framework</Link>
              <Link href="/blog" className="hover:text-brand-accent transition-colors">Blog</Link>
              <Link href="/faq" className="hover:text-brand-accent transition-colors">FAQ</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-brand-text font-semibold mb-4">Company</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="hover:text-brand-accent transition-colors">About</Link>
              <Link href="/case-studies" className="hover:text-brand-accent transition-colors">Case Studies</Link>
              <Link href="/contact" className="hover:text-brand-accent transition-colors">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-brand-text font-semibold mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
              <Link href="/return-policy" className="hover:text-brand-accent transition-colors">Return Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-neutral pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p>© 2025 Rock Hudson - Santa Cruz, CA</p>
          <a href="mailto:info@vibes.consulting" className="hover:text-brand-accent transition-colors">info@vibes.consulting</a>
        </div>
      </div>
    </footer>
  )
}

