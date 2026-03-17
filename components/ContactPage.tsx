import React from 'react';
import { ContactForm } from './ContactForm';
import { SEO } from './SEO';
import { ContactPageJsonLd, BreadcrumbJsonLd } from './JsonLd';
import { PAGE_SEO } from '../seo.config';

export const ContactPage: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title={PAGE_SEO.contact.title}
                description={PAGE_SEO.contact.description}
                keywords={PAGE_SEO.contact.keywords}
                url="/contact"
            />
            <ContactPageJsonLd />
            <BreadcrumbJsonLd
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Contact', url: '/contact' }
                ]}
            />

            {/* Hero */}
            <section className="pt-48 pb-32 bg-linen text-center px-6">
                <h1 className="font-heading text-5xl md:text-6xl text-forest mb-6">Get in Touch</h1>
                <p className="font-body text-lg text-forest-light max-w-2xl mx-auto leading-relaxed">
                    Ready to create something beautiful together? We'd love to hear about your vision and answer any questions you have.
                </p>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-[1290px]">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-8">Let's Connect</h2>
                            <p className="font-body text-lg text-forest-light leading-relaxed mb-12">
                                Whether you're planning a wedding, need updated headshots, or want to capture your family's story,
                                we're here to help. Fill out the form or reach out directly—we typically respond within 24 hours.
                            </p>

                            <div className="space-y-8">
                                {/* Email */}
                                <div>
                                    <h3 className="font-nav text-sm font-bold uppercase tracking-widest text-terracotta mb-2">Email</h3>
                                    <a href="mailto:hello@portlandpictureco.com" className="font-body text-lg text-forest hover:text-terracotta transition-colors">
                                        hello@portlandpictureco.com
                                    </a>
                                </div>

                                {/* Phone */}
                                <div>
                                    <h3 className="font-nav text-sm font-bold uppercase tracking-widest text-terracotta mb-2">Phone</h3>
                                    <a href="tel:+15035551234" className="font-body text-lg text-forest hover:text-terracotta transition-colors">
                                        (503) 555-1234
                                    </a>
                                </div>

                                {/* Location */}
                                <div>
                                    <h3 className="font-nav text-sm font-bold uppercase tracking-widest text-terracotta mb-2">Location</h3>
                                    <p className="font-body text-lg text-forest-light">
                                        Portland, Oregon<br />
                                        Serving the Pacific Northwest
                                    </p>
                                </div>

                                {/* Hours */}
                                <div>
                                    <h3 className="font-nav text-sm font-bold uppercase tracking-widest text-terracotta mb-2">Hours</h3>
                                    <p className="font-body text-lg text-forest-light">
                                        Monday - Friday: 9am - 6pm<br />
                                        Saturday: By Appointment<br />
                                        Sunday: Closed
                                    </p>
                                </div>

                                {/* Social Media */}
                                <div>
                                    <h3 className="font-nav text-sm font-bold uppercase tracking-widest text-terracotta mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-terracotta transition-colors">
                                            <span className="font-body text-lg">Instagram</span>
                                        </a>
                                        <span className="text-driftwood">•</span>
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-terracotta transition-colors">
                                            <span className="font-body text-lg">Facebook</span>
                                        </a>
                                        <span className="text-driftwood">•</span>
                                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-terracotta transition-colors">
                                            <span className="font-body text-lg">Pinterest</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
