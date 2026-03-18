'use client'

import React, { useRef } from 'react'

interface ServiceCarouselProps {
  images: string[]
}

const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
)

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
)

export const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ images }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.clientWidth / 2
      const newScrollLeft =
        direction === 'left'
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="relative group h-full w-full">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-forest hover:bg-terracotta hover:text-white transition-all shadow-lg opacity-0 group-hover:opacity-100"
        aria-label="Scroll left"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-forest hover:bg-terracotta hover:text-white transition-all shadow-lg opacity-0 group-hover:opacity-100"
        aria-label="Scroll right"
      >
        <ArrowRight />
      </button>

      {/* Images Container */}
      <div
        ref={scrollContainerRef}
        className="flex h-full overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[85%] md:w-[45%] lg:w-[calc(33.333%-11px)] h-full snap-center"
          >
            <img
              src={src}
              alt={`Service detail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
