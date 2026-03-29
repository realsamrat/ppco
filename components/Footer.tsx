import React from 'react'
import Link from 'next/link'
import { CopyEmailTooltip } from './CopyEmailTooltip'

const FOOTER_LINKS = {
  Services: [
    { label: 'Weddings', href: '/services/weddings' },
    { label: 'Engagements', href: '/services/engagements' },
    { label: 'Families', href: '/services/families' },
    { label: 'Headshots', href: '/services/headshots' },
    { label: 'Branding', href: '/services/branding' },
    { label: 'Seniors', href: '/services/seniors' },
  ],
  Company: [
    { label: 'About', href: '/#about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Connect: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'Email Us', href: 'mailto:hello@portlandpictureco.com' },
  ],
}

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-driftwood">
      <div className="max-w-[1344px] mx-auto px-6 md:px-12 py-14">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <img src="/ppco_logo.svg" alt="Portland Picture Co." className="w-28 h-auto mb-6" />
            </Link>
            <p className="text-[13px] leading-[1.5] text-sage max-w-[200px] mb-4">
              Capturing authentic moments across the Pacific Northwest.
            </p>
            <CopyEmailTooltip />
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[13px] font-medium text-forest tracking-[-0.01em] leading-[1.5] mb-6">
                {title}
              </h4>
              <ul className="flex flex-col gap-[2px]">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-sage leading-[1.5] min-h-[28px] flex items-center hover:text-forest transition-colors duration-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal row */}
        <div className="mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex gap-5">
            <Link href="#" className="text-[13px] text-driftwood hover:text-sage transition-colors duration-100">Privacy</Link>
            <Link href="#" className="text-[13px] text-driftwood hover:text-sage transition-colors duration-100">Terms</Link>
          </div>
          <p className="text-[13px] text-driftwood">
            © {new Date().getFullYear()} Portland Picture Co.
          </p>
        </div>
      </div>
    </footer>
  )
}
