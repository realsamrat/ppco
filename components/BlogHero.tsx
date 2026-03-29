import Link from 'next/link'
import MediaPlayer from './MediaPlayer'

interface BlogHeroProps {
  image?: string
  video?: string
  category: string
  title: string
}

export function BlogHero({ image, video, category, title }: BlogHeroProps) {
  return (
    <div className="bg-cream" style={{ paddingTop: '100px' }}>
      <div className="max-w-[1024px] mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center md:justify-center gap-2 text-[14px] text-sage tracking-[-0.013em] mb-4">
          <Link href="/blog" className="hover:text-forest transition-colors">Blog</Link>
          <span className="text-driftwood">/</span>
          <Link href={`/blog?category=${encodeURIComponent(category)}`} className="text-terracotta font-medium hover:text-terracotta-dark transition-colors">
            {category}
          </Link>
        </nav>

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
