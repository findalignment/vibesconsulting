export default function Section({
  title,
  subtitle,
  kicker,
  children,
  width,
  className,
}: {
  title?: string
  subtitle?: string
  kicker?: string
  children?: React.ReactNode
  width?: 'default' | 'full' | 'narrow'
  className?: string
}) {
  const widthClass = width === 'full' ? 'max-w-none' : width === 'narrow' ? 'max-w-2xl' : 'max-w-4xl'
  const wrapperClass = className ? `${className}` : ''

  return (
    <section className={`my-16 ${wrapperClass}`}>
      <div className={`${widthClass} mx-auto`}>
        {kicker && (
          <p className="text-sm uppercase tracking-widest text-white/60 mb-3">{kicker}</p>
        )}
        {title && <h2 className="mb-4">{title}</h2>}
        {subtitle && <p className="max-w-2xl">{subtitle}</p>}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </section>
  )
}

