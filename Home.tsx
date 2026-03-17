import React from 'react';
import { Hero } from './components/Hero';
import { CompanyLogos } from './components/CompanyLogos';
import { GoogleReviews } from './components/GoogleReviews';
import { Services } from './components/Services';
import { CarouselCTA } from './components/CarouselCTA';
import { ContactForm } from './components/ContactForm';
import { Button } from './components/Button';
import { Accordion } from './components/Accordion';
import { IconMountain, IconCheck } from './components/Icons';
import { PHOTOGRAPHERS, PROCESS_STEPS, BLOG_POSTS, FAQS } from './constants';
import { SEO } from './components/SEO';
import {
    LocalBusinessJsonLd,
    PhotographyBusinessJsonLd,
    WebsiteJsonLd,
    OrganizationJsonLd,
    FAQJsonLd
} from './components/JsonLd';
import { PAGE_SEO } from './seo.config';

export const Home: React.FC = () => {
    return (
        <>
            <SEO
                title={PAGE_SEO.home.title}
                description={PAGE_SEO.home.description}
                keywords={PAGE_SEO.home.keywords}
                url="/"
            />
            <LocalBusinessJsonLd />
            <PhotographyBusinessJsonLd />
            <WebsiteJsonLd />
            <OrganizationJsonLd />
            <FAQJsonLd faqs={FAQS} />
            {/* HERO SECTION */}
            <Hero />

            {/* INTRO SECTION */}
            <section className="py-24 md:py-32 px-6 bg-cream text-center">
                <div className="max-w-2xl mx-auto">
                    <div className="w-16 h-[2px] bg-terracotta mx-auto mb-8"></div>
                    <h2 className="font-heading text-3xl md:text-4xl text-forest mb-8 leading-snug">
                        Portland's premiere photography studio for individuals, companies, and celebrations.
                    </h2>
                    <p className="font-body text-lg text-forest-light leading-relaxed mb-8">
                        From corporate headshots to wedding moments, family portraits to brand imagery—we craft visual stories that resonate. Our approach blends artistry with authenticity, creating timeless photographs that capture who you are and what you do.
                    </p>
                    <div className="mb-12">
                        <Button variant="primary">Get Free Quote</Button>
                    </div>
                    <IconMountain className="w-12 h-12 text-mint mx-auto opacity-50" />
                </div>
            </section>

            {/* COMPANY LOGOS */}
            <CompanyLogos />

            {/* GOOGLE REVIEWS */}
            <GoogleReviews />

            {/* MEET THE TEAM */}
            <section id="about" className="py-24 md:py-32 bg-cream">
                <div className="container mx-auto px-6 max-w-[1290px]">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-4xl text-forest">Meet The Team</h2>
                    </div>

                    <div className="w-full overflow-x-auto scrollbar-hide">
                        <div className="flex gap-6 w-max pb-4">
                            {PHOTOGRAPHERS.map((person, idx) => (
                                <div key={idx} className="relative w-[85vw] md:w-[45vw] lg:w-[22vw] flex-shrink-0 group">
                                    {/* Vertical Photo */}
                                    <div className="aspect-[3/4] overflow-hidden mb-6">
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className="font-heading text-2xl text-forest mb-1">{person.name}</h3>
                                        <span className="font-nav text-xs font-bold uppercase tracking-widest text-sage mb-4 block">{person.role}</span>
                                        <p className="font-body text-sm text-forest-light mb-6 leading-relaxed">{person.bio}</p>

                                        <ul className="space-y-2 mb-6">
                                            {person.credentials.map((cred, i) => (
                                                <li key={i} className="flex items-center justify-center gap-2">
                                                    <IconCheck className="w-4 h-4 text-terracotta flex-shrink-0" />
                                                    <span className="font-nav text-xs text-forest-light">{cred}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button variant="secondary" className="w-full">Say Hi to {person.name.split(' ')[0]}</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-24 md:py-32 bg-warmWhite">
                <div className="container mx-auto px-6 max-w-[1290px]">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="aspect-[4/5] overflow-hidden bg-stone relative z-10">
                                <img src="https://picsum.photos/seed/process/800/1000" alt="Process" className="w-full h-full object-cover" />
                            </div>
                            {/* Decorative Offset Border */}
                            <div className="absolute top-8 left-8 w-full h-full border-2 border-driftwood z-0 hidden md:block"></div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h4 className="font-nav text-sm font-bold uppercase tracking-widest text-sage mb-4">Our Process</h4>
                            <h2 className="font-heading text-4xl md:text-5xl text-forest mb-8">Get Started With Us</h2>
                            <Accordion items={PROCESS_STEPS} />
                            <div className="mt-8">
                                <Button variant="primary">Get Free Quote</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <Services />

            {/* CTA SECTION */}
            <CarouselCTA />

            {/* PORTLAND CTA */}
            <section id="portfolio" className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/pdx-skyline.webp"
                        alt="Portland Skyline"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/40 to-forest/60"></div>
                </div>
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <h2 className="font-heading text-5xl md:text-7xl text-warmWhite mb-6 drop-shadow-lg">Portland's Best Portrait Studio</h2>
                    <p className="font-body text-lg md:text-xl text-warmWhite/90 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                        From professional headshots to family milestones, we capture the authentic moments that tell your unique story.
                    </p>
                    <Button variant="light" className="hover:bg-terracotta hover:text-white border-none">Contact Us</Button>
                </div>
            </section>

            {/* BLOG GRID */}
            <section id="blog" className="py-24 md:py-32 bg-cream">
                <div className="container mx-auto px-6 max-w-[1290px]">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h4 className="font-nav text-sm font-bold uppercase tracking-widest text-sage mb-2">The Journal</h4>
                            <h2 className="font-heading text-4xl text-forest">Recent Stories</h2>
                        </div>
                        <a href="#" className="hidden md:block font-nav text-sm font-bold uppercase tracking-widest text-terracotta hover:text-forest transition-colors border-b border-terracotta pb-1">View All Posts</a>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post, i) => (
                            <article key={i} className="group cursor-pointer flex flex-col h-full">
                                <div className="aspect-[3/2] overflow-hidden mb-6 bg-stone">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <span className="font-nav text-xs font-bold uppercase tracking-widest text-terracotta mb-3 block">{post.category}</span>
                                <h3 className="font-heading text-2xl text-forest mb-3 group-hover:text-terracotta transition-colors">{post.title}</h3>
                                <p className="font-body text-forest-light text-sm leading-relaxed mb-4 flex-grow">{post.excerpt}</p>
                                <span className="font-nav text-xs text-sage">{post.date}</span>
                            </article>
                        ))}
                    </div>
                    <div className="mt-12 text-center md:hidden">
                        <Button variant="ghost">View All Posts</Button>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 md:py-32 bg-warmWhite">
                <div className="container mx-auto px-6 max-w-[1290px]">
                    <div className="grid lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-5">
                            <div className="sticky top-32">
                                <h2 className="font-heading text-4xl text-forest mb-6">Common Questions</h2>
                                <p className="font-body text-forest-light mb-8">
                                    Planning a session can feel overwhelming, but we are here to guide you every step of the way.
                                </p>
                                <div className="aspect-square bg-linen overflow-hidden hidden lg:block">
                                    <img src="https://picsum.photos/seed/faq/800/800" alt="Detail shot" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <Accordion items={FAQS.map(faq => ({ title: faq.question, content: faq.answer }))} />
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA / CONTACT */}
            <ContactForm />
        </>
    );
};
