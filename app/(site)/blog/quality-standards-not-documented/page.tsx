import Link from 'next/link'

export const metadata = {
  title: 'Why 'Good Enough' Keeps Causing Rework',
  description: 'Your team doesn't know what quality looks like. So everything needs your review.'
}

export default function BlogPost() {
  return (
    <div className="pb-20 max-w-3xl">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <time className="text-white/60 text-sm">November 9, 2024</time>
          <h1 className="mt-2 mb-4">Why 'Good Enough' Keeps Causing Rework</h1>
          <p className="text-xl text-white/80">Your team doesn't know what quality looks like. So everything needs your review.</p>
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
