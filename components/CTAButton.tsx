import Link from 'next/link'
export default function CTAButton({ href = '/contact', children = 'Get Your Flow Check' }: { href?: string; children?: React.ReactNode }) {
  return <Link href={href} className="btn btn-primary">{children}</Link>
}

