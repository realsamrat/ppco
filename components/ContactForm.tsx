import React from 'react';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-white border-t border-driftwood">
            <div className="container mx-auto px-6 max-w-[800px]">
                <div className="text-center mb-12">
                    <h4 className="font-nav text-sm font-bold uppercase tracking-widest text-sage mb-4">Get In Touch</h4>
                    <h2 className="font-heading text-4xl md:text-5xl text-forest mb-6">Let's Start a Conversation</h2>
                    <p className="font-body text-forest-light text-lg leading-relaxed max-w-2xl mx-auto">
                        Whether you have a question about our services or are ready to book your session, we'd love to hear from you.
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block font-nav text-xs font-bold uppercase tracking-widest text-forest">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-linen border-none p-4 text-forest placeholder-forest/40 focus:ring-1 focus:ring-terracotta transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block font-nav text-xs font-bold uppercase tracking-widest text-forest">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-linen border-none p-4 text-forest placeholder-forest/40 focus:ring-1 focus:ring-terracotta transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="block font-nav text-xs font-bold uppercase tracking-widest text-forest">Subject</label>
                        <select
                            id="subject"
                            className="w-full bg-linen border-none p-4 text-forest focus:ring-1 focus:ring-terracotta transition-all appearance-none"
                        >
                            <option value="">Select a topic...</option>
                            <option value="wedding">Wedding Photography</option>
                            <option value="portrait">Portrait Session</option>
                            <option value="branding">Branding & Corporate</option>
                            <option value="senior">High School Senior</option>
                            <option value="other">Other Inquiry</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="block font-nav text-xs font-bold uppercase tracking-widest text-forest">Message</label>
                        <textarea
                            id="message"
                            rows={6}
                            className="w-full bg-linen border-none p-4 text-forest placeholder-forest/40 focus:ring-1 focus:ring-terracotta transition-all resize-none"
                            placeholder="Tell us a bit about what you're looking for..."
                        ></textarea>
                    </div>

                    <div className="text-center pt-4">
                        <Button variant="primary" className="w-full md:w-auto px-12">Send Message</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};
