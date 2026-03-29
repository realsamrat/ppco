'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'motion/react'
import MediaPlayer from './MediaPlayer'

interface BlogHeroProps {
  image?: string
  video?: string
  category: string
  title: string
}

export function BlogHero({ image, video, category, title }: BlogHeroProps) {
  const router = useRouter()

  return (
    <div className="bg-cream" style={{ paddingTop: '100px' }}>
      <div className="max-w-[1024px] mx-auto px-6">
        {/* Back + Breadcrumb */}
        <div className="flex items-center md:justify-center gap-4 mb-4">
          <motion.button
            onClick={() => router.back()}
            aria-label="Go back"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-linen border border-driftwood text-forest hover:bg-stone transition-colors"
            whileTap={{ scale: 0.95 }}
            transition={{ ease: 'easeOut', duration: 0.15 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width={16} height={16}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.707 4.293a1 1 0 010 1.414L9.414 12l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
                fill="currentColor"
              />
            </svg>
          </motion.button>
          <nav className="flex items-center gap-2 text-[14px] text-sage tracking-[-0.013em]">
            <Link href="/blog" className="hover:text-forest transition-colors">Blog</Link>
            <span className="text-driftwood">/</span>
            <span className="text-terracotta font-medium">{category}</span>
          </nav>
        </div>

        {/* Title */}
        <h1 className="font-heading text-[32px] sm:text-[40px] md:text-[48px] leading-[1.125] sm:leading-[1.1] md:leading-[1] tracking-[-0.022em] text-forest max-w-[900px] md:mx-auto md:text-center text-balance mb-8 md:mb-14">
          {title}
        </h1>

        {/* Hero Media */}
        {video ? (
          <div className="rounded-xl md:rounded-lg overflow-hidden border border-black/[0.08]">
            <MediaPlayer src={video} poster={image} width={1920} height={1280} />
          </div>
        ) : image ? (
          <div className="rounded-xl md:rounded-lg overflow-hidden border border-black/[0.08]" style={{ aspectRatio: '3 / 2' }}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}
