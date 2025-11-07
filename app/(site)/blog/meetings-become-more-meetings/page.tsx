import Link from 'next/link'

export const metadata = {
  title: "Meetings That Create More Meetings",
  description: "You meet to discuss. Then meet again to decide. Then meet to update. It never ends."
}

export default function BlogPost() {
  return (
    <div className="pb-20 max-w-3xl">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <time className="text-white/60 text-sm">December 1, 2024</time>
          <h1 className="mt-2 mb-4">Meetings That Create More Meetings</h1>
          <p className="text-xl text-white/80">You meet to discuss. Then meet again to decide. Then meet to update. It never ends.</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-white/80">
          <p>Content coming soon...</p>
          
          <div className="bg-current-600/10 p-6 rounded-lg mt-8">
            <p className="font-semibold text-white mb-2">Struggling with operational friction?</p>
            <p className="text-white/70 text-sm">Book a Flow Check to identify where your systems are breaking down.</p>
            <Link href="/packages/flow-check" className="text-current-500 hover:underline text-sm">Learn about Flow Check →</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
