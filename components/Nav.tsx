'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'

// Primary nav items visible on desktop
const primaryLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
]

// Items in hamburger menu
const hamburgerLinks = [
  { href: '/', label: 'Home' },
  { href: '/packages', label: 'Packages' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' }
]

// All links for mobile
const allLinks = [
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
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const hamburgerRef = useRef<HTMLDivElement>(null)

  // Close hamburger menu when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)) {
        setHamburgerOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setHamburgerOpen(false)
        setMobileMenuOpen(false)
      }
    }

    if (hamburgerOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleEscape)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }
  }, [hamburgerOpen, mobileMenuOpen])

  return (
    <header className="py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <img src="/images/logo-mark.svg" alt="Vibes" className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0" />
          <span className="font-semibold tracking-wide text-sm sm:text-base truncate">Vibes Consulting</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Hamburger Menu Button (Desktop) */}
          <div className="relative" ref={hamburgerRef}>
            <button 
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
              className="text-white/80 hover:text-white p-2"
              aria-label="More menu"
              aria-expanded={hamburgerOpen}
              aria-haspopup="true"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Hamburger Dropdown */}
            {hamburgerOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-lg shadow-lg overflow-hidden z-50 animate-fadeIn">
                <nav className="py-2" role="menu">
                  {hamburgerLinks.map(l => (
                    <Link 
                      key={l.href} 
                      href={l.href}
                      onClick={() => setHamburgerOpen(false)}
                      className={clsx(
                        'block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors',
                        pathname === l.href && 'text-white font-medium bg-white/5'
                      )}
                      role="menuitem"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Primary Nav Links */}
          <nav className="flex gap-6 text-white/80">
            {primaryLinks.map(l => (
              <Link key={l.href} href={l.href} className={clsx('hover:text-white', pathname === l.href && 'text-white font-medium')}>{l.label}</Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
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
        <nav id="mobile-menu" className="md:hidden mt-4 flex flex-col gap-4 pb-4 animate-fadeIn" role="navigation">
          {allLinks.map(l => (
            <Link 
              key={l.href} 
              href={l.href} 
              onClick={() => setMobileMenuOpen(false)}
              className={clsx(
                'text-white/80 hover:text-white py-2 transition-colors',
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

