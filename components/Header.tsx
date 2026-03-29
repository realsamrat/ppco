'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { NAV_ITEMS } from '../constants'
import { IconMenu, IconClose } from './Icons'
import { Button } from './Button'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Disable body scroll when mobile menu is open (no layout shift)
  useEffect(() => {
    if (mobileOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black/10 ${
          isScrolled ? 'py-2 bg-cream/85 backdrop-blur-xl' : 'py-1 lg:py-2 bg-cream/85 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img src="/ppco_logo.svg" alt="Portland Picture Co." className="w-32 md:w-36 h-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[14px] font-medium text-forest hover:text-terracotta transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" className="ml-4 !py-2.5 !px-5 !text-[13px] !tracking-normal !normal-case">
              Book Now
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <motion.button
            className="lg:hidden text-forest p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.95 }}
            transition={{ ease: 'easeOut', duration: 0.15 }}
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40" style={{ backgroundColor: 'rgba(250, 249, 247, 0.55)', WebkitBackdropFilter: 'blur(24px)', backdropFilter: 'blur(24px)' }}>
          <nav className="flex flex-col px-8 pt-24">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[28px] font-medium text-forest hover:text-terracotta transition-colors py-3"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-10">
              <Button variant="primary" className="!tracking-normal !normal-case" onClick={() => setMobileOpen(false)}>
                Book Your Session
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
