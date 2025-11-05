export default function Section({
  title,
  subtitle,
  kicker
}: {
  title: string
  subtitle?: string
  kicker?: string
}) {
  return (
    <section className="my-16">
      {kicker && <p className="text-sm uppercase tracking-widest text-white/60 mb-3">{kicker}</p>}
      <h2 className="mb-4">{title}</h2>
      {subtitle && <p className="max-w-2xl">{subtitle}</p>}
    </section>
  )
}

