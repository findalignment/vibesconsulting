export const metadata = { title: 'Blog — Vibes Consulting' }

const posts = [
  { title: 'Why your business feels harder than it should', date: '2025-11-01' },
  { title: 'AI for humans: low-risk wins', date: '2025-11-08' },
  { title: 'Culture is the real productivity hack', date: '2025-11-15' }
]

export default function BlogPage() {
  return (
    <div>
      <h1>The Flow Report</h1>
      <p className="mt-3 text-white/80 max-w-2xl">Short, actionable posts to remove friction and build momentum.</p>
      <div className="mt-8 space-y-4">
        {posts.map(p => (
          <article key={p.title} className="card p-6">
            <h3>{p.title}</h3>
            <p className="text-white/60 text-sm mt-1">{new Date(p.date).toLocaleDateString()}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

