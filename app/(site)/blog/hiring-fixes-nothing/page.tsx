import Link from 'next/link'

export const metadata = {
  title: "You Keep Hiring But Nothing Gets Easier",
  description: "More people should mean less work. But you\'re busier than ever. Broken systems don\'t scale.",
}

export default function BlogPost() {
  return (
    <div className="pb-20 max-w-3xl">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <time className="text-white/60 text-sm">September 27, 2024</time>
          <h1 className="mt-2 mb-4">You Keep Hiring But Nothing Gets Easier</h1>
          <p className="text-xl text-white/80">More people should mean less work. But you\'re busier than ever. Broken systems don\'t scale.</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-white/80">
          <p>Content coming soon...</p>
          
          <div className="bg-current-600/10 p-6 rounded-lg mt-8">
            <p className="font-semibold text-white mb-2">Facing operational challenges?</p>
            <p className="text-white/70 text-sm">Book a Flow Check to diagnose where your systems need help.</p>
            <Link href="/packages/flow-check" className="text-current-500 hover:underline text-sm">Learn about Flow Check →</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
