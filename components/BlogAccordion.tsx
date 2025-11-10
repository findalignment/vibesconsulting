'use client'

import { useState } from 'react'

interface AccordionSection {
  title: string
  content: React.ReactNode
}

interface BlogAccordionProps {
  sections: AccordionSection[]
}

export default function BlogAccordion({ sections }: BlogAccordionProps) {
  const [openSections, setOpenSections] = useState<Set<number>>(new Set([0])) // First section open by default

  const toggleSection = (index: number) => {
    const newOpenSections = new Set(openSections)
    if (newOpenSections.has(index)) {
      newOpenSections.delete(index)
    } else {
      newOpenSections.add(index)
    }
    setOpenSections(newOpenSections)
  }

  return (
    <div className="space-y-6">
      {sections.map((section, index) => (
        <div key={index} className="border border-brand-neutral rounded-xl overflow-hidden shadow-card bg-white">
          <button
            onClick={() => toggleSection(index)}
            className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-brand-neutral/20 transition-colors border-l-4 border-brand-accent"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text">{section.title}</h2>
            <svg
              className={`w-6 h-6 text-brand-accent transition-transform duration-300 flex-shrink-0 ml-4 ${
                openSections.has(index) ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openSections.has(index) ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-6 md:p-8 space-y-6 bg-brand-base border-t border-brand-neutral">
              {section.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

