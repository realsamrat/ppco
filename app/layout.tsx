import type { Metadata } from 'next'
import {
  Cormorant_Garamond,
  Inter,
  Montserrat,
  Source_Serif_4, Geist } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'
import { PageProgressiveBlur } from '../components/BlogBottomFade'
import { PageTransition } from '../components/PageTransition'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const copernicus = localFont({
  src: [
    { path: '../public/fonts/CopernicusNewCondTrial-070-BF6616044f8a3ab.otf', weight: '300', style: 'normal' },
    { path: '../public/fonts/CopernicusNewCondTrial-090-BF6616044f92f03.otf', weight: '400', style: 'normal' },
  ],
  variable: '--font-copernicus',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Portland Picture Co. | Professional Photography in Portland, Oregon',
    template: '%s | Portland Picture Co.',
  },
  description:
    'Portland Picture Co. is a full-service photography studio specializing in weddings, engagements, family portraits, branding, headshots, and senior portraits in Portland, Oregon and the Pacific Northwest.',
  keywords: [
    'portland photographer',
    'photography studio portland',
    'professional photographer oregon',
    'wedding photographer portland',
    'family photographer',
    'headshot photographer',
  ],
  authors: [{ name: 'Portland Picture Co.' }],
  metadataBase: new URL('https://portlandpictureco.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portlandpictureco.com/',
    siteName: 'Portland Picture Co.',
    title: 'Portland Picture Co. | Professional Photography in Portland, Oregon',
    description:
      'Portland Picture Co. is a full-service photography studio specializing in weddings, engagements, family portraits, branding, headshots, and senior portraits in Portland, Oregon.',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@portlandpictureco',
    creator: '@portlandpictureco',
    title: 'Portland Picture Co. | Professional Photography in Portland, Oregon',
    description:
      'Portland Picture Co. is a full-service photography studio in Portland, Oregon.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  other: {
    'geo.region': 'US-OR',
    'geo.placename': 'Portland',
    'geo.position': '45.5152;-122.6784',
    ICBM: '45.5152, -122.6784',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(copernicus.variable, montserrat.variable, sourceSerif4.variable, cormorantGaramond.variable, inter.variable, "font-sans", geist.variable)}
    >
      <body className={`bg-cream text-forest-light antialiased ${inter.className}`}>
        <div className="relative min-h-screen flex flex-col selection:bg-terracotta/20 selection:text-forest">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <PageProgressiveBlur />
        </div>
      </body>
    </html>
  )
}
