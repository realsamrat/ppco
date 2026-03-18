import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { IconMenu, IconClose } from './Icons';
import { Button } from './Button';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream/95 backdrop-blur-sm ${isScrolled ? 'py-2 shadow-md' : 'py-1 lg:py-2'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center group">
            <Logo className="w-40 md:w-56 h-auto text-forest group-hover:text-terracotta transition-colors" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="font-nav text-[13px] font-medium uppercase tracking-[2px] text-forest relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-terracotta hover:text-terracotta hover:after:w-full after:transition-all after:duration-300 py-2"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" className="ml-4 !py-3 !px-6 text-xs">Book Now</Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-forest p-2"
            onClick={() => setMobileOpen(true)}
          >
            <IconMenu />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-forest/50 transition-opacity duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-cream p-8 shadow-2xl overflow-y-auto transform transition-transform duration-500 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-end mb-12">
          <button onClick={() => setMobileOpen(false)} className="text-forest hover:text-terracotta">
            <IconClose />
          </button>
        </div>
        <nav className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="font-nav text-lg font-medium uppercase tracking-widest text-forest border-b border-driftwood pb-4 hover:text-terracotta transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="primary" className="mt-8 w-full">Book Your Session</Button>
        </nav>
      </div>
    </>
  );
};