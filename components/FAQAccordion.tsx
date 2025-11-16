'use client'

import BlogAccordion from '@/components/BlogAccordion'

export interface FAQItem {
  question: string
  answer: React.ReactNode
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const sections = items.map(i => ({ title: i.question, content: i.answer }))
  return <BlogAccordion sections={sections} />
}
