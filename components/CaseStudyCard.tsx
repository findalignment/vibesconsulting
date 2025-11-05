export default function CaseStudyCard({ title, result, description }: { title: string; result: string; description: string }) {
  return (
    <article className="card p-6">
      <h3 className="mb-2">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <div className="text-sm text-white/90 bg-white/10 inline-flex px-3 py-1 rounded-full">Outcome: {result}</div>
    </article>
  )
}

