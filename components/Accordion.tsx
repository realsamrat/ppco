'use client'

import React, { useState } from 'react'
import { IconChevronDown } from './Icons'

interface AccordionItemProps {
  title: string
  content: string
  isOpen: boolean
  onClick: () => void
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-driftwood">
      <button
        className="w-full flex items-center justify-between py-6 text-left group"
        onClick={onClick}
      >
        <span
          className={`font-nav text-sm font-medium uppercase tracking-widest transition-colors duration-200 ${
            isOpen ? 'text-terracotta' : 'text-forest group-hover:text-terracotta'
          }`}
        >
          {title}
        </span>
        <div
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-forest`}
        >
          <IconChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-8 text-forest-light leading-relaxed font-body">{content}</div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: { title: string; content: string }[]
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="border-t border-forest w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  )
}
