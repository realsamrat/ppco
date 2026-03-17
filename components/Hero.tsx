import React from 'react';
import { Button } from './Button';

const CATEGORIES = [
    {
        id: 'weddings',
        title: 'Weddings',
        image: 'https://picsum.photos/seed/weddings/800/1200',
        description: 'Capturing your love story',
    },
    {
        id: 'engagements',
        title: 'Engagements',
        image: 'https://picsum.photos/seed/engagements/800/1200',
        description: 'The beginning of forever',
    },
    {
        id: 'families',
        title: 'Families',
        image: 'https://picsum.photos/seed/families/800/1200',
        description: 'Moments that matter',
    },
    {
        id: 'branding',
        title: 'Branding',
        image: 'https://picsum.photos/seed/branding/800/1200',
        description: 'Professional brand imagery',
    },
    {
        id: 'headshots',
        title: 'Headshots',
        image: 'https://picsum.photos/seed/headshots/800/1200',
        description: 'Stand out from the crowd',
    },
    {
        id: 'seniors',
        title: 'High School Seniors',
        image: 'https://picsum.photos/seed/seniors/800/1200',
        description: 'Celebrate this milestone',
    },
];

export const Hero: React.FC = () => {
    return (
        <section className="pt-28 md:pt-32">
            <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-1 w-max">
                    {CATEGORIES.map((category) => (
                        <div
                            key={category.id}
                            className="relative w-[85vw] md:w-[40vw] lg:w-[25vw] aspect-[3/4] flex-shrink-0 group overflow-hidden"
                        >
                            {/* Image */}
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                            {/* Content - Lower 3rd */}
                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col items-center text-center">
                                <h2 className="font-heading text-2xl md:text-3xl text-warmWhite mb-2">
                                    {category.title}
                                </h2>
                                <p className="font-nav text-xs uppercase tracking-widest text-warmWhite/90 mb-6">
                                    {category.description}
                                </p>
                                <Button variant="primary" className="!bg-warmWhite !text-forest hover:!bg-terracotta hover:!text-warmWhite !border-none">
                                    View Gallery
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
