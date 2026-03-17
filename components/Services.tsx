import React from 'react';
import { Button } from './Button';

const SERVICES = [
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

export const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-linen to-warmWhite">
            <div className="container mx-auto px-6 max-w-[1290px]">
                <div className="text-center mb-12">
                    <h4 className="font-nav text-sm font-bold uppercase tracking-widest text-sage mb-4">
                        Our Specialties
                    </h4>
                    <h2 className="font-heading text-4xl md:text-5xl text-forest mb-4">
                        Select Your Service
                    </h2>
                    <p className="font-body text-lg text-forest-light max-w-2xl mx-auto">
                        From intimate moments to professional branding, we specialize in capturing what matters most to you.
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Weddings - Tall */}
                    <div className="relative group overflow-hidden cursor-pointer aspect-[3/4] lg:row-span-2">
                        <img
                            src={SERVICES[0].image}
                            alt={SERVICES[0].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 w-full p-8 text-center">
                            <h3 className="font-heading text-3xl text-warmWhite mb-2">{SERVICES[0].title}</h3>
                            <p className="font-nav text-xs uppercase tracking-widest text-warmWhite/90 mb-6">
                                {SERVICES[0].description}
                            </p>
                            <Button variant="primary" className="!bg-warmWhite !text-forest hover:!bg-terracotta hover:!text-warmWhite !border-none">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Engagements - Square */}
                    <div className="relative group overflow-hidden cursor-pointer aspect-square">
                        <img
                            src={SERVICES[1].image}
                            alt={SERVICES[1].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                            <h3 className="font-heading text-2xl text-warmWhite mb-2">{SERVICES[1].title}</h3>
                            <p className="font-nav text-xs uppercase tracking-widest text-warmWhite/90 mb-4">
                                {SERVICES[1].description}
                            </p>
                            <Button variant="primary" className="!bg-warmWhite !text-forest hover:!bg-terracotta hover:!text-warmWhite !border-none">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Families - Square */}
                    <div className="relative group overflow-hidden cursor-pointer aspect-square">
                        <img
                            src={SERVICES[2].image}
                            alt={SERVICES[2].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                            <h3 className="font-heading text-2xl text-warmWhite mb-2">{SERVICES[2].title}</h3>
                            <p className="font-nav text-xs uppercase tracking-widest text-warmWhite/90 mb-4">
                                {SERVICES[2].description}
                            </p>
                            <Button variant="primary" className="!bg-warmWhite !text-forest hover:!bg-terracotta hover:!text-warmWhite !border-none">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Branding - Tall */}
                    <div className="relative group overflow-hidden cursor-pointer aspect-[3/4] lg:row-span-2">
                        <img
                            src={SERVICES[3].image}
                            alt={SERVICES[3].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 w-full p-8 text-center">
                            <h3 className="font-heading text-3xl text-warmWhite mb-2">{SERVICES[3].title}</h3>
                            <p className="font-nav text-xs uppercase tracking-widest text-warmWhite/90 mb-6">
                                {SERVICES[3].description}
                            </p>
                            <Button variant="primary" className="!bg-warmWhite !text-forest hover:!bg-terracotta hover:!text-warmWhite !border-none">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Headshots - Square */}
                    <div className="relative group overflow-hidden cursor-pointer aspect-square">
                        <img
                            src={SERVICES[4].image}
                            alt={SERVICES[4].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                            <h3 className="font-heading text-2xl text-warmWhite mb-2">{SERVICES[4].title}</h3>
                            <p className="font-nav text-xs uppercase tracking-widest text-warmWhite/90 mb-4">
                                {SERVICES[4].description}
                            </p>
                            <Button variant="primary" className="!bg-warmWhite !text-forest hover:!bg-terracotta hover:!text-warmWhite !border-none">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* High School Seniors - Square */}
                    <div className="relative group overflow-hidden cursor-pointer aspect-square">
                        <img
                            src={SERVICES[5].image}
                            alt={SERVICES[5].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                            <h3 className="font-heading text-2xl text-warmWhite mb-2">{SERVICES[5].title}</h3>
                            <p className="font-nav text-xs uppercase tracking-widest text-warmWhite/90 mb-4">
                                {SERVICES[5].description}
                            </p>
                            <Button variant="primary" className="!bg-warmWhite !text-forest hover:!bg-terracotta hover:!text-warmWhite !border-none">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
