import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 text-sm text-white/60">
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p>© 2025 Rock Hudson — Santa Cruz, CA</p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/return-policy" className="hover:text-white">Return Policy</Link>
          <a href="mailto:hello@vibes.consulting" className="hover:text-white">hello@vibes.consulting</a>
        </div>
      </div>
    </footer>
  )
}

