import React from 'react';
import Link from 'next/link';
import { ContactForm } from './ContactForm';
import { Button } from './Button';
import { IconCheck } from './Icons';
import { ServiceCarousel } from './ServiceCarousel';
import { BreadcrumbJsonLd } from './JsonLd';
import { GALLERY_DATA } from '../constants';

const SERVICES_LIST = [
    {
        id: 'weddings',
        title: GALLERY_DATA.weddings.serviceName,
        description: 'Your wedding day is a collection of fleeting moments and grand emotions. We capture it all—from the quiet anticipation to the wild celebration. Our documentary approach ensures your gallery feels authentic, timeless, and uniquely yours.',
        features: ['Full Day Coverage', 'Second Photographer', 'Engagement Session Included', 'Online Gallery & Print Rights'],
        images: GALLERY_DATA.weddings.galleryImages,
    },
    {
        id: 'engagements',
        title: GALLERY_DATA.engagements.serviceName,
        description: 'Celebrate your love story with a session that feels like a date. Whether it\'s an adventure in the Gorge or a cozy coffee shop hang, we create a relaxed environment where you can just be yourselves.',
        features: ['90 Minute Session', '2 Locations', 'Outfit Changes', 'Styling Guide'],
        images: GALLERY_DATA.engagements.galleryImages,
    },
    {
        id: 'families',
        title: GALLERY_DATA.families.serviceName,
        description: 'Forget the stiff poses. We want to capture the chaos, the laughter, and the love that makes your family who they are. We play games, run around, and let the kids lead the way.',
        features: ['60 Minute Session', 'Outdoor Location', 'Online Gallery', 'Print Store Access'],
        images: GALLERY_DATA.families.galleryImages,
    },
    {
        id: 'branding',
        title: GALLERY_DATA.branding.serviceName,
        description: 'Elevate your business with imagery that connects. We work with entrepreneurs and small businesses to create a visual library that tells your brand story and attracts your dream clients.',
        features: ['Strategy Call', 'Headshots & Lifestyle', 'Product Detail Shots', 'Social Media Content'],
        images: GALLERY_DATA.branding.galleryImages,
    },
    {
        id: 'headshots',
        title: GALLERY_DATA.headshots.serviceName,
        description: 'Modern, approachable headshots that show the real you. Perfect for LinkedIn, your website, or speaking engagements. We ditch the stiff backdrops for natural light and genuine expressions.',
        features: ['30 Minute Session', '2 Looks', 'Retouching Included', 'Fast Turnaround'],
        images: GALLERY_DATA.headshots.galleryImages,
    },
    {
        id: 'seniors',
        title: GALLERY_DATA.seniors.serviceName,
        description: 'Celebrate this major milestone with a session that showcases your personality. Bring your guitar, your dog, or your varsity jacket—we want these photos to feel 100% like you.',
        features: ['2 Hour Experience', 'Multiple Locations', 'Unlimited Outfits', 'Yearbook Submission'],
        images: GALLERY_DATA.seniors.galleryImages,
    },
];

export const ServicesPage: React.FC = () => {
    return (
        <div className="bg-white">
            <BreadcrumbJsonLd
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Services', url: '/services' }
                ]}
            />

            {/* Hero */}
            <section className="pt-48 pb-32 bg-linen text-center px-6">
                <h1 className="font-heading text-5xl md:text-6xl text-forest mb-6">Our Services</h1>
                <p className="font-body text-lg text-forest-light max-w-2xl mx-auto leading-relaxed">
                    We offer a range of photography services tailored to capture the most important moments of your life and business.
                </p>
            </section>

            {/* Services List */}
            <div className="w-full">
                {SERVICES_LIST.map((service, idx) => (
                    <section key={service.id} id={service.id} className="w-full border-b border-driftwood last:border-none bg-white">
                        <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-[600px] lg:h-[800px]`}>

                            {/* Image Side - Full Bleed with Padding */}
                            <div className="w-full lg:w-[65%] relative h-[500px] lg:h-auto py-12 lg:py-24">
                                <ServiceCarousel images={service.images} />
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-[35%] p-12 lg:p-20 flex flex-col justify-center bg-white">
                                <div className="max-w-xl mx-auto lg:mx-0">
                                    <h2 className="font-heading text-4xl md:text-5xl text-forest mb-6">{service.title}</h2>
                                    <p className="font-body text-lg text-forest-light leading-relaxed mb-8">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3 mb-10">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <IconCheck className="w-5 h-5 text-terracotta flex-shrink-0" />
                                                <span className="font-nav text-sm text-forest font-bold tracking-wide uppercase">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button variant="primary">Inquire Now</Button>
                                        <Link href={`/services/${service.id}`}>
                                            <Button variant="secondary">View Gallery</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Contact Form */}
            <ContactForm />
        </div>
    );
};
