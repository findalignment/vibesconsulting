import Link from 'next/link'

export const metadata = {
  title: "Consistency: The One Thing Every Great Business Gets Right",
  description: "After 25 years evaluating businesses, consistency is the only thing that separates good from great. Here\'s how to build it.",
}

export default function BlogPost() {
  return (
    <div className="pb-20 max-w-3xl">
      <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <time className="text-white/60 text-sm">January 23, 2025</time>
          <h1 className="mt-2 mb-4">Consistency: The One Thing Every Great Business Gets Right</h1>
          <p className="text-xl text-white/80">After 25 years evaluating businesses, consistency is the only thing that separates good from great. Here\'s how to build it.</p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-white/80">
          <p>Content coming soon...</p>
          
          <div className="bg-current-600/10 p-6 rounded-lg mt-8">
            <p className="font-semibold text-white mb-2">Want operational insights for your business?</p>
            <p className="text-white/70 text-sm">Book a Flow Check to get an expert evaluation of your systems.</p>
            <Link href="/packages/flow-check" className="text-current-500 hover:underline text-sm">Learn about Flow Check →</Link>
          </div>
        </div>
      </article>
    </div>
  )
}
