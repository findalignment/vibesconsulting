'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <header className="py-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <img src="/images/logo-mark.svg" alt="Vibes" className="h-8 w-8" />
        <span className="font-semibold tracking-wide">Vibes Consulting</span>
      </Link>
      <nav className="hidden md:flex gap-6 text-white/80">
        {links.map(l => (
          <Link key={l.href} href={l.href} className={clsx('hover:text-white', pathname === l.href && 'text-white font-medium')}>{l.label}</Link>
        ))}
      </nav>
      <Link href="/contact" className="btn btn-primary">Fix Your Flow</Link>
    </header>
  )
}

