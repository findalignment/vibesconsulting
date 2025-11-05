import Link from 'next/link'

export const metadata = { title: 'Blog — Vibes Consulting' }

const posts = [
  { 
    title: 'The path of least resistance', 
    slug: 'path-of-least-resistance',
    date: '2025-11-22',
    excerpt: 'How natural forces shape systems. Why friction compounds. And what carving canyons teaches us about organizational change.',
    readTime: '8 min'
  },
  { 
    title: 'Culture is the real productivity hack', 
    slug: 'culture-productivity-hack',
    date: '2025-11-15',
    excerpt: 'Why optimizing workflows won\'t fix burnout, disengagement, or turnover. And what will.',
    readTime: '6 min'
  },
  { 
    title: 'AI for humans: low-risk wins', 
    slug: 'ai-for-humans',
    date: '2025-11-08',
    excerpt: 'How to adopt AI without exposing client data, overwhelming your team, or wasting money on tools nobody uses.',
    readTime: '7 min'
  },
  { 
    title: 'Why your business feels harder than it should', 
    slug: 'why-business-feels-harder',
    date: '2025-11-01',
    excerpt: 'Most friction in small businesses is invisible. Here\'s how to spot it and what to do about it.',
    readTime: '6 min'
  }
]

export default function BlogPage() {
  return (
    <div className="pb-20">
      <header className="mb-12">
        <h1>The Flow Report</h1>
        <p className="mt-3 text-white/80 max-w-2xl">Practical insights on removing friction, building sustainable systems, and creating businesses that work with people instead of against them.</p>
      </header>

      <div className="space-y-6">
        {posts.map(p => (
          <Link 
            key={p.slug} 
            href={`/blog/${p.slug}`}
            className="card p-8 block hover:border-current-600/50 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-2xl font-semibold group-hover:text-current-500 transition-colors">{p.title}</h2>
              <span className="text-white/60 text-sm whitespace-nowrap">{p.readTime} read</span>
            </div>
            <p className="text-white/70 mb-4">{p.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">{new Date(p.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="text-white/60 text-sm group-hover:text-white transition-colors">Read more →</span>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-16 card p-8 bg-current-600/10">
        <h2 className="mb-4">Want these insights applied to your business?</h2>
        <p className="text-white/80 mb-6 max-w-2xl">We can help you identify friction, redesign systems, and build a culture that actually supports flow.</p>
        <Link href="/contact" className="btn btn-primary">Schedule Intro Call</Link>
      </section>
    </div>
  )
}

