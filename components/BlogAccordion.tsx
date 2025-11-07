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
        <div key={index} className="border border-white/10 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection(index)}
            className="w-full flex items-center justify-between p-6 text-left bg-white/5 hover:bg-white/10 transition-colors border-l-4 border-current-500"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
            <svg
              className={`w-6 h-6 text-current-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
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
            <div className="p-6 space-y-6">
              {section.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

