export default function Footer() {
  return (
    <footer className="py-12 text-sm text-white/60">
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p>© {new Date().getFullYear()} Vibes Consulting — Santa Cruz, CA</p>
        <div className="flex gap-6">
          <a href="/robots.txt" className="hover:text-white">Robots</a>
          <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
          <a href="mailto:hello@vibesconsulting.com" className="hover:text-white">hello@vibesconsulting.com</a>
        </div>
      </div>
    </footer>
  )
}

