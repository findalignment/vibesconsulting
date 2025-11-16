import Link from 'next/link'

export default function CTAButton({ href = '/contact', children, text }: { href?: string; children?: React.ReactNode; text?: string }) {
  const content = children ?? text ?? 'Get Your Flow Check'
  return <Link href={href} className="btn btn-primary">{content}</Link>
}

