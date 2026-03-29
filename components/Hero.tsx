import React from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { GALLERY_DATA } from '../constants';

const CATEGORIES = [
    {
        id: 'weddings',
        title: GALLERY_DATA.weddings.serviceName,
        image: GALLERY_DATA.weddings.heroImage,
        description: 'Capturing your love story',
    },
    {
        id: 'engagements',
        title: GALLERY_DATA.engagements.serviceName,
        image: GALLERY_DATA.engagements.heroImage,
        description: 'The beginning of forever',
    },
    {
        id: 'families',
        title: GALLERY_DATA.families.serviceName,
        image: GALLERY_DATA.families.heroImage,
        description: 'Moments that matter',
    },
    {
        id: 'branding',
        title: GALLERY_DATA.branding.serviceName,
        image: GALLERY_DATA.branding.heroImage,
        description: 'Professional brand imagery',
    },
    {
        id: 'headshots',
        title: GALLERY_DATA.headshots.serviceName,
        image: GALLERY_DATA.headshots.heroImage,
        description: 'Stand out from the crowd',
    },
    {
        id: 'seniors',
        title: GALLERY_DATA.seniors.serviceName,
        image: GALLERY_DATA.seniors.heroImage,
        description: 'Celebrate this milestone',
    },
];

export const Hero: React.FC = () => {
    return (
        <section className="pt-28 md:pt-32 relative group/carousel">
            {/* Fade Overlays */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-32 lg:w-48 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-32 lg:w-48 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

            <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
                <div className="flex gap-1 w-max pb-8 md:pb-12">
                    {/* Spacers to force items to start under the fade for a perfect blend */}
                    <div className="w-6 md:w-16 lg:w-24 flex-shrink-0" />

                    {CATEGORIES.map((category) => (
                        <div
                            key={category.id}
                            className="relative w-[85vw] md:w-[40vw] lg:w-[25vw] aspect-[3/4] flex-shrink-0 group"
                        >
                            <div className="w-full h-full relative transition-all duration-500 group-hover:scale-[0.98]"
                                 style={{
                                     WebkitMaskImage: 'url(/frame_mask.png)',
                                     WebkitMaskSize: '100% 100%',
                                     WebkitMaskRepeat: 'no-repeat',
                                     WebkitMaskPosition: 'center',
                                     maskImage: 'url(/frame_mask.png)',
                                     maskSize: '100% 100%',
                                     maskRepeat: 'no-repeat',
                                     maskPosition: 'center'
                                 }}>
                                {/* Image */}
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Organic Texture Overlay (Softer Inner Shadow) */}
                                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.15)] pointer-events-none" />

                                {/* Lighter Smooth Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100" />
                            </div>

                            {/* Content - Lower 3rd */}
                            <div className="absolute bottom-0 left-0 w-full p-6 md:pb-16 md:pt-10 flex flex-col items-center text-center z-20">
                                <h2 className="font-heading text-2xl md:text-4xl text-warmWhite mb-2 drop-shadow-xl">
                                    {category.title}
                                </h2>
                                <p className="text-[10px] md:text-xs uppercase tracking-[3px] font-medium text-warmWhite/90 mb-6 drop-shadow-lg">
                                    {category.description}
                                </p>
                                <Link href={`/services/${category.id}`}>
                                    <Button variant="primary" className="!bg-[#161613] !text-warmWhite hover:!bg-terracotta hover:!text-warmWhite border border-warmWhite/10 hover:border-terracotta !py-4 !px-8 text-xs font-bold tracking-widest transition-all duration-300 shadow-xl">
                                        View Gallery
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}

                    <div className="w-6 md:w-16 lg:w-24 flex-shrink-0" />
                </div>
            </div>
        </section>
    );
};
