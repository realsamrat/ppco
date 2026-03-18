import React from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { GALLERY_DATA } from '../constants';
import { BreadcrumbJsonLd } from './JsonLd';

const PORTFOLIO_SERVICES = [
  { id: 'weddings', ...GALLERY_DATA.weddings },
  { id: 'engagements', ...GALLERY_DATA.engagements },
  { id: 'families', ...GALLERY_DATA.families },
  { id: 'branding', ...GALLERY_DATA.branding },
  { id: 'headshots', ...GALLERY_DATA.headshots },
  { id: 'seniors', ...GALLERY_DATA.seniors },
];

export const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Portfolio', url: '/portfolio' },
        ]}
      />

      {/* Hero */}
      <section className="pt-48 pb-32 bg-linen text-center px-6">
        <h1 className="font-heading text-5xl md:text-6xl text-forest mb-6">Our Portfolio</h1>
        <p className="font-body text-lg text-forest-light max-w-2xl mx-auto leading-relaxed">
          Explore our work across all photography specialties. Each gallery showcases the authentic
          moments and visual stories we create.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1290px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_SERVICES.map((service) => (
              <div key={service.id} className="group relative overflow-hidden bg-stone">
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.serviceName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-heading text-3xl mb-4">{service.serviceName}</h3>
                  <Link href={`/services/${service.id}`}>
                    <Button variant="light" className="w-full">
                      View Portfolio
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
