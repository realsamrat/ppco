import React from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { GALLERY_DATA } from '../constants';

const SERVICES = [
    {
        id: 'weddings',
        title: GALLERY_DATA.weddings.serviceName,
        image: GALLERY_DATA.weddings.heroImage,
        description: 'Capturing your love story',
        size: 'tall',
    },
    {
        id: 'engagements',
        title: GALLERY_DATA.engagements.serviceName,
        image: GALLERY_DATA.engagements.heroImage,
        description: 'The beginning of forever',
        size: 'square',
    },
    {
        id: 'families',
        title: GALLERY_DATA.families.serviceName,
        image: GALLERY_DATA.families.heroImage,
        description: 'Moments that matter',
        size: 'square',
    },
    {
        id: 'branding',
        title: GALLERY_DATA.branding.serviceName,
        image: GALLERY_DATA.branding.heroImage,
        description: 'Professional brand imagery',
        size: 'tall',
    },
    {
        id: 'headshots',
        title: GALLERY_DATA.headshots.serviceName,
        image: GALLERY_DATA.headshots.heroImage,
        description: 'Stand out from the crowd',
        size: 'square',
    },
    {
        id: 'seniors',
        title: GALLERY_DATA.seniors.serviceName,
        image: GALLERY_DATA.seniors.heroImage,
        description: 'Celebrate this milestone',
        size: 'square',
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
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            className={`relative group overflow-hidden cursor-pointer ${
                                service.size === 'tall'
                                    ? 'aspect-[3/4] lg:row-span-2'
                                    : 'aspect-square'
                            }`}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className={`absolute bottom-0 left-0 w-full text-center ${service.size === 'tall' ? 'p-8' : 'p-6'}`}>
                                <h3 className={`font-heading text-warmWhite mb-2 ${service.size === 'tall' ? 'text-3xl' : 'text-2xl'}`}>
                                    {service.title}
                                </h3>
                                <p className={`font-nav text-xs uppercase tracking-widest text-warmWhite/90 ${service.size === 'tall' ? 'mb-6' : 'mb-4'}`}>
                                    {service.description}
                                </p>
                                <Link href={`/services/${service.id}`}>
                                    <Button variant="primary" className="!bg-warmWhite !text-forest hover:!bg-terracotta hover:!text-warmWhite !border-none">
                                        View Gallery
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
