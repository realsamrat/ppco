import React from 'react';

const COMPANIES = [
    { name: 'Columbia', logo: '/company_logos/Columbia-logo.png' },
    { name: 'eBay', logo: '/company_logos/EBay_logo.svg' },
    { name: 'Bayer', logo: '/company_logos/bayer_logo.png' },
    { name: 'HealthStream', logo: '/company_logos/healthstream_logo.svg' },
    { name: 'Intel', logo: '/company_logos/intel-logo-new.png' },
    { name: 'Kittelson & Associates', logo: '/company_logos/kittelson_logo.webp' },
    { name: 'Mercer', logo: '/company_logos/mercer_logo.png' },
    { name: 'The North Face', logo: '/company_logos/northface_logo.png' }
];

export const CompanyLogos: React.FC = () => {
    return (
        <section className="py-16 bg-cream border-y border-driftwood">
            <div className="container mx-auto px-6 max-w-[1290px]">
                <div className="text-center mb-10">
                    <h4 className="font-nav text-xs font-bold uppercase tracking-widest text-sage">
                        Trusted By Portland's Best
                    </h4>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12 items-center justify-items-center">
                    {COMPANIES.map((company) => (
                        <div
                            key={company.name}
                            className="flex items-center justify-center w-full h-16 opacity-50 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
                        >
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="max-h-12 max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
