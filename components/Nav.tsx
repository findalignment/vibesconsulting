'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

export default function Nav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo-mark.svg" alt="Vibes" className="h-8 w-8" />
          <span className="font-semibold tracking-wide">Vibes Consulting</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-white/80">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={clsx('hover:text-white', pathname === l.href && 'text-white font-medium')}>{l.label}</Link>
          ))}
        </nav>
        
        {/* Desktop CTA */}
        <Link href="/contact" className="hidden md:inline-block btn btn-primary">Fix Your Flow</Link>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
          {links.map(l => (
            <Link 
              key={l.href} 
              href={l.href} 
              onClick={() => setMobileMenuOpen(false)}
              className={clsx(
                'text-white/80 hover:text-white py-2',
                pathname === l.href && 'text-white font-medium'
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary inline-block text-center mt-2"
          >
            Fix Your Flow
          </Link>
        </nav>
      )}
    </header>
  )
}

