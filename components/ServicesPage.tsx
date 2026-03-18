import React from 'react';
import { Link } from 'react-router-dom';
import { ContactForm } from './ContactForm';
import { Button } from './Button';
import { IconCheck } from './Icons';
import { ServiceCarousel } from './ServiceCarousel';
import { SEO } from './SEO';
import { BreadcrumbJsonLd } from './JsonLd';
import { PAGE_SEO } from '../seo.config';

const SERVICES_LIST = [
    {
        id: 'weddings',
        title: 'Weddings',
        description: 'Your wedding day is a collection of fleeting moments and grand emotions. We capture it all—from the quiet anticipation to the wild celebration. Our documentary approach ensures your gallery feels authentic, timeless, and uniquely yours.',
        features: ['Full Day Coverage', 'Second Photographer', 'Engagement Session Included', 'Online Gallery & Print Rights'],
        images: [
            'https://www.shootproof.com/blog/wp-content/uploads/2023/02/courthouse-wedding-photography-tips-1.jpg',
            'https://www.shootproof.com/blog/wp-content/uploads/2023/02/courthouse-wedding-photography-tips-2.jpg',
            'https://www.shootproof.com/blog/wp-content/uploads/2023/02/courthouse-wedding-photography-tips-3.jpg',
            'https://www.shootproof.com/blog/wp-content/uploads/2023/02/courthouse-wedding-photography-tips-4.jpg',
            'https://www.shootproof.com/blog/wp-content/uploads/2023/02/courthouse-wedding-photography-tips-5.jpg'
        ]
    },
    {
        id: 'engagements',
        title: 'Engagements',
        description: 'Celebrate your love story with a session that feels like a date. Whether it\'s an adventure in the Gorge or a cozy coffee shop hang, we create a relaxed environment where you can just be yourselves.',
        features: ['90 Minute Session', '2 Locations', 'Outfit Changes', 'Styling Guide'],
        images: [
            'https://junebugweddings.com/wedding-blog/wp-content/uploads/2021/12/epic-engagement-photo-locations-sedona-arizona-maya-lora-photo.jpg',
            'https://junebugweddings.com/wedding-blog/wp-content/uploads/2021/12/epic-engagement-photo-locations-big-sur-california-riss-steven-photography.jpg',
            'https://junebugweddings.com/wedding-blog/wp-content/uploads/2021/12/epic-engagement-photo-locations-rocky-mountain-national-park-colorado-lauren-casino-photography.jpg',
            'https://junebugweddings.com/wedding-blog/wp-content/uploads/2021/12/epic-engagement-photo-locations-central-park-new-york-lola-mango-photo-film.jpg',
            'https://junebugweddings.com/wedding-blog/wp-content/uploads/2021/12/epic-engagement-photo-locations-bonneville-salt-flats-utah-cat-cunningham-photography.jpg'
        ]
    },
    {
        id: 'families',
        title: 'Families',
        description: 'Forget the stiff poses. We want to capture the chaos, the laughter, and the love that makes your family who they are. We play games, run around, and let the kids lead the way.',
        features: ['60 Minute Session', 'Outdoor Location', 'Online Gallery', 'Print Store Access'],
        images: [
            'https://www.laceywhitmer.com/wp-content/uploads/2023/05/Mullins-97-ff.jpg',
            'https://www.laceywhitmer.com/wp-content/uploads/2023/05/Morgan-71-ff.jpg',
            'https://www.laceywhitmer.com/wp-content/uploads/2023/05/Moreland-Laing-35.jpg',
            'https://www.laceywhitmer.com/wp-content/uploads/2023/05/Ghorbani-67-ff.jpg',
            'https://www.laceywhitmer.com/wp-content/uploads/2023/05/Lauren-Bryson-55.jpg'
        ]
    },
    {
        id: 'branding',
        title: 'Branding',
        description: 'Elevate your business with imagery that connects. We work with entrepreneurs and small businesses to create a visual library that tells your brand story and attracts your dream clients.',
        features: ['Strategy Call', 'Headshots & Lifestyle', 'Product Detail Shots', 'Social Media Content'],
        images: [
            'https://images.squarespace-cdn.com/content/v1/596b97028419c2e383e8660e/1675714444444-X0X0X0X0X0X0X0X0X0X0/Personal-Branding-Photoshoot-Denver-Keri-1.jpg',
            'https://images.squarespace-cdn.com/content/v1/596b97028419c2e383e8660e/1714000000000-Y1Y1Y1Y1Y1Y1Y1Y1Y1Y1/Personal-Branding-Photoshoot-Sarah-Golden-1.jpg',
            'https://images.squarespace-cdn.com/content/v1/596b97028419c2e383e8660e/1718150000000-Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2/Personal-Branding-Photoshoot-Lexi-Valentine-1.jpg'
        ]
    },
    {
        id: 'headshots',
        title: 'Headshots',
        description: 'Modern, approachable headshots that show the real you. Perfect for LinkedIn, your website, or speaking engagements. We ditch the stiff backdrops for natural light and genuine expressions.',
        features: ['30 Minute Session', '2 Looks', 'Retouching Included', 'Fast Turnaround'],
        images: [
            'https://www.headshotportland.com/confident-businessman.png',
            'https://www.headshotportland.com/confident-asian-professional.png',
            'https://www.headshotportland.com/confident-blonde-professional.png',
            'https://www.headshotportland.com/confident-latina-professional.png',
            'https://www.headshotportland.com/confident-professional.png'
        ]
    },
    {
        id: 'seniors',
        title: 'High School Seniors',
        description: 'Celebrate this major milestone with a session that showcases your personality. Bring your guitar, your dog, or your varsity jacket—we want these photos to feel 100% like you.',
        features: ['2 Hour Experience', 'Multiple Locations', 'Unlimited Outfits', 'Yearbook Submission'],
        images: [
            'https://www.maureenrussellphotography.com/wp-content/uploads/2025/02/Maureen-Russell-Photography-Senior-35.jpg',
            'https://www.maureenrussellphotography.com/wp-content/uploads/2025/02/Maureen-Russell-Photography-Senior-32.jpg',
            'https://www.maureenrussellphotography.com/wp-content/uploads/2025/02/Maureen-Russell-Photography-Senior-83.jpg',
            'https://www.maureenrussellphotography.com/wp-content/uploads/2025/02/Maureen-Russell-Photography-Senior-10.jpg',
            'https://www.maureenrussellphotography.com/wp-content/uploads/2025/02/Maureen-Russell-Photography-Senior-12.jpg'
        ]
    }
];

export const ServicesPage: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title={PAGE_SEO.services.title}
                description={PAGE_SEO.services.description}
                keywords={PAGE_SEO.services.keywords}
                url="/services"
            />
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
                                        <Link to={`/services/${service.id}`}>
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
