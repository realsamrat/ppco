import React from 'react';

const COMPANIES = [
    { name: 'Columbia', logo: '/company_logos/Columbia-logo.png' },
    { name: 'eBay', logo: '/company_logos/EBay_logo.svg', scale: 'scale-[0.85]' },
    { name: 'Bayer', logo: '/company_logos/bayer_logo.png' },
    { name: 'HealthStream', logo: '/company_logos/healthstream_logo.svg' },
    { name: 'Intel', logo: '/company_logos/intel-logo-new.png', scale: 'scale-[0.8]' },
    { name: 'Kittelson & Associates', logo: '/company_logos/kittelson_logo.webp' },
    { name: 'Mercer', logo: '/company_logos/mercer_logo.png', scale: 'scale-[1.2]' },
    { name: 'The North Face', logo: '/company_logos/northface_logo.png', scale: 'scale-[1.25]' }
];

export const CompanyLogos: React.FC = () => {
    return (
        <section className="py-16 bg-cream border-y border-driftwood">
            <div className="container mx-auto px-6 max-w-[1290px]">
                <div className="text-center mb-10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-sage">
                        Trusted By Portland's Best
                    </h4>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-x-12 gap-y-16 items-center justify-items-center">
                    {COMPANIES.map((company) => (
                        <div
                            key={company.name}
                            className="flex items-center justify-center w-full max-w-[100px] md:max-w-[140px] h-10 md:h-14 opacity-40 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0"
                        >
                            <img
                                src={company.logo}
                                alt={company.name}
                                className={`max-h-full max-w-full object-contain ${company.scale || ''}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
