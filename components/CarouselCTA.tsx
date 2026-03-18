'use client'

import React, { useRef } from 'react';
import { Button } from './Button';

const IMAGES = [
    'https://picsum.photos/seed/carousel1/600/900',
    'https://picsum.photos/seed/carousel2/600/900',
    'https://picsum.photos/seed/carousel3/600/900',
    'https://picsum.photos/seed/carousel4/600/900',
    'https://picsum.photos/seed/carousel5/600/900',
];

const ArrowLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);

const ArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

export const CarouselCTA: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth / 2;
            const newScrollLeft = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="w-full bg-linen border-t border-driftwood overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">

                {/* Left Side - Image Carousel (Full Bleed) */}
                <div className="w-full lg:w-[65%] relative group h-[500px] lg:h-[700px] py-12 lg:py-24">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-forest hover:bg-terracotta hover:text-white transition-all shadow-lg opacity-0 group-hover:opacity-100"
                        aria-label="Scroll left"
                    >
                        <ArrowLeft />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-forest hover:bg-terracotta hover:text-white transition-all shadow-lg opacity-0 group-hover:opacity-100"
                        aria-label="Scroll right"
                    >
                        <ArrowRight />
                    </button>

                    {/* Images Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex h-full overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {IMAGES.map((src, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 w-1/2 md:w-1/3 h-full snap-start border-r border-white/20"
                            >
                                <img
                                    src={src}
                                    alt={`Portfolio ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-[35%] flex flex-col justify-center items-center text-center p-12 lg:p-20">
                    <h2 className="font-heading text-4xl md:text-5xl text-forest mb-3">
                        Quote your
                    </h2>
                    <h2 className="font-heading text-4xl md:text-5xl text-forest-light italic mb-8">
                        project now
                    </h2>

                    <p className="font-body text-forest-light leading-relaxed mb-10 max-w-md">
                        Ready to create something extraordinary? Tell us about your vision, and let's start planning your perfect session.
                    </p>

                    <Button variant="primary" className="!py-4 !px-10 text-xs tracking-widest uppercase w-full max-w-xs">
                        Get a Quote
                    </Button>
                </div>

            </div>
        </section>
    );
};
