import React from 'react';
import { NAV_ITEMS } from '../constants';
import { IconInstagram } from './Icons';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest text-cream pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1290px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">

          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start mb-2">
              <Logo variant="light" className="w-56 h-auto mb-4" />
            </div>
            <p className="text-sage leading-relaxed max-w-xs">
              Capturing authentic moments for weddings, families, brands, and life's milestones across the Pacific Northwest.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col items-center justify-start pt-4">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {NAV_ITEMS.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium uppercase tracking-widest text-driftwood hover:text-terracotta transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact / Social */}
          <div className="flex flex-col items-center lg:items-end lg:text-right pt-4">
            <h4 className="text-sm font-medium uppercase tracking-widest text-mint mb-6">Get In Touch</h4>
            <a href="mailto:hello@portlandpictureco.com" className="text-xl text-warmWhite hover:text-terracotta transition-colors mb-6 decoration-transparent border-b border-transparent hover:border-terracotta pb-1">
              hello@portlandpictureco.com
            </a>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-sage flex items-center justify-center text-cream hover:bg-terracotta hover:border-terracotta transition-all">
                <IconInstagram />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-12 text-center">
          <p className="text-xs text-sage tracking-wider">
            © {new Date().getFullYear()} Portland Picture Co. | Designed with ❤️ in Oregon
          </p>
        </div>
      </div>
    </footer>
  );
};