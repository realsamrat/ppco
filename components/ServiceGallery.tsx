import React from 'react';
import { ContactForm } from './ContactForm';
import { ServiceJsonLd, ImageGalleryJsonLd, BreadcrumbJsonLd } from './JsonLd';
import { SERVICES_SEO } from '../seo.config';

interface ServiceGalleryProps {
    serviceName: string;
    heroImage: string;
    galleryImages: string[];
}

export const ServiceGallery: React.FC<ServiceGalleryProps> = ({ serviceName, heroImage, galleryImages }) => {
    // Get the service key from serviceName
    const serviceKey = serviceName.toLowerCase().replace(/\s+/g, '') as keyof typeof SERVICES_SEO;
    const seoData = SERVICES_SEO[serviceKey] || SERVICES_SEO[serviceName.toLowerCase() as keyof typeof SERVICES_SEO];

    // Generate URL slug
    const urlSlug = serviceName.toLowerCase().replace(/\s+/g, '-').replace('high-school-', '');
    const serviceUrl = `/services/${urlSlug === 'high-school-seniors' ? 'seniors' : urlSlug}`;

    return (
        <div className="bg-white">
            {seoData && (
                <>
                    <ServiceJsonLd
                        name={`${serviceName} Photography`}
                        description={seoData.description}
                        image={heroImage}
                        url={serviceUrl}
                    />
                    <ImageGalleryJsonLd
                        name={`${serviceName} Photography Gallery`}
                        description={`Browse our ${serviceName.toLowerCase()} photography portfolio showcasing our work in Portland, Oregon.`}
                        images={galleryImages.slice(0, 10)}
                        url={serviceUrl}
                    />
                    <BreadcrumbJsonLd
                        items={[
                            { name: 'Home', url: '/' },
                            { name: 'Services', url: '/services' },
                            { name: serviceName, url: serviceUrl }
                        ]}
                    />
                </>
            )}

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt={serviceName}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/70"></div>
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="font-heading text-5xl md:text-7xl text-warmWhite mb-4 drop-shadow-lg">{serviceName}</h1>
                    <p className="font-body text-lg md:text-xl text-warmWhite/90 max-w-2xl mx-auto drop-shadow-md">
                        Explore our portfolio of {serviceName.toLowerCase()} photography
                    </p>
                </div>
            </section>

            {/* Masonry Gallery */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {galleryImages.map((image, idx) => (
                            <div
                                key={idx}
                                className="break-inside-avoid group cursor-pointer"
                            >
                                <div className="relative overflow-hidden bg-stone">
                                    <img
                                        src={image}
                                        alt={`${serviceName} ${idx + 1}`}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <ContactForm />
        </div>
    );
};
