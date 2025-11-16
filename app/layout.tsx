import './globals.css'
import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  ...createMetadata(),
  icons: {
    icon: '/images/flavicon.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="container">
          <Nav />
        </div>
        <main className="mt-16 container">
          {children}
        </main>
        <div className="container">
          <Footer />
        </div>
      </body>
    </html>
  )
}

