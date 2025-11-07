import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 text-sm text-white/60">
      <div className="border-t border-white/10 pt-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="flex flex-col gap-2">
              <Link href="/services/business-flow" className="hover:text-white">Business Flow</Link>
              <Link href="/services/ai-integration" className="hover:text-white">AI Integration</Link>
              <Link href="/services/culture-optimization" className="hover:text-white">Culture Optimization</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <div className="flex flex-col gap-2">
              <Link href="/resources/5-signs" className="hover:text-white">5 Signs Guide</Link>
              <Link href="/resources/10-minute-audit" className="hover:text-white">10-Min Audit</Link>
              <Link href="/resources/delegation-framework" className="hover:text-white">Delegation Framework</Link>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <Link href="/faq" className="hover:text-white">FAQ</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/case-studies" className="hover:text-white">Case Studies</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/return-policy" className="hover:text-white">Return Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p>© 2025 Rock Hudson — Santa Cruz, CA</p>
          <a href="mailto:hello@vibes.consulting" className="hover:text-white">hello@vibes.consulting</a>
        </div>
      </div>
    </footer>
  )
}

