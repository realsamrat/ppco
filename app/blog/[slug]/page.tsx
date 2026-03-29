import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { source, getPageOgImage } from '../../../lib/source'
import { getMDXComponents } from '../../../mdx-components'
import { BlogPostJsonLd, BreadcrumbJsonLd } from '../../../components/JsonLd'
import { BlogHero } from '../../../components/BlogHero'
import { ProgressiveBlur } from '../../../components/ProgressiveBlur'

export function generateStaticParams() {
  return source.getPages().map((page) => ({ slug: page.slugs[0] }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = source.getPage([slug])
  if (!page) return {}

  const siteUrl = 'https://portlandpictureco.com'
  const canonicalUrl = `${siteUrl}/blog/${slug}`
  const ogImage = getPageOgImage(page)

  const baseKeywords = [
    'portland photographer',
    'portland photography',
    'pacific northwest photographer',
    'oregon photographer',
    page.data.category.toLowerCase(),
    'photography tips',
  ]
  const postKeywords = page.data.keywords ?? []
  const allKeywords = [...new Set([...postKeywords, ...baseKeywords])]

  return {
    title: `${page.data.title} | Portland Picture Co. Blog`,
    description: page.data.description,
    keywords: allKeywords,
    authors: [{ name: page.data.author, url: siteUrl }],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'article',
      title: page.data.title,
      description: page.data.description,
      url: canonicalUrl,
      siteName: 'Portland Picture Co.',
      locale: 'en_US',
      publishedTime: new Date(page.data.date).toISOString(),
      modifiedTime: new Date(page.data.date).toISOString(),
      section: page.data.category,
      authors: [page.data.author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: page.data.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.title,
      description: page.data.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = source.getPage([slug])
  if (!page) notFound()

  const MDX = page.data.body
  const allPages = source
    .getPages()
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())

  const currentIndex = allPages.findIndex((p) => p.slugs[0] === slug)
  const prevPost = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPages[currentIndex - 1] : null

  const relatedPages = allPages
    .filter((p) => p.slugs[0] !== slug && p.data.category === page.data.category)
    .slice(0, 3)

  if (relatedPages.length < 3) {
    const others = allPages
      .filter((p) => p.slugs[0] !== slug && !relatedPages.includes(p))
      .slice(0, 3 - relatedPages.length)
    relatedPages.push(...others)
  }

  return (
    <div className="bg-cream">

      {/* Fixed fade at screen bottom */}
      <div
        className="fixed bottom-0 left-0 right-0 pointer-events-none"
        style={{
          zIndex: 40,
          height: '200px',
          background: 'linear-gradient(to bottom, transparent 0%, #FAF9F7 100%)',
        }}
      />

      <BlogPostJsonLd
        title={page.data.title}
        description={page.data.description}
        image={page.data.image ?? ''}
        datePublished={new Date(page.data.date).toISOString()}
        url={`/blog/${slug}`}
        author={page.data.author}
        keywords={page.data.keywords}
        articleSection={page.data.category}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: page.data.title, url: `/blog/${slug}` },
        ]}
      />

      {/* Hero (breadcrumb, title, media) */}
      <BlogHero
        image={page.data.image}
        video={page.data.video}
        category={page.data.category}
        title={page.data.title}
      />

      {/* Spacer — 32px mobile, 44px desktop */}
      <div className="h-8 md:h-11 bg-cream" />

      {/* Single shared container: meta + content + prev/next */}
      <div className="bg-cream pb-24">
        <div className="max-w-[624px] mx-auto px-6">

          {/* Meta section */}
          <div className="border-t border-driftwood" />
          <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:justify-between pt-7 pb-4 md:py-7">
            <div>
              <p className="text-[13px] font-medium text-forest tracking-wide uppercase mb-1">Author</p>
              <p className="text-[15px] text-forest-light">{page.data.author}</p>
            </div>
            <div>
              <p className="text-[13px] font-medium text-forest tracking-wide uppercase mb-1">Published</p>
              <p className="text-[15px] text-forest-light">
                {new Date(page.data.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>
            <div>
              <p className="text-[13px] font-medium text-forest tracking-wide uppercase mb-1">Category</p>
              <p className="text-[15px] text-forest-light">{page.data.category}</p>
            </div>
          </div>
          <div className="hidden md:block border-t border-driftwood" />

          {/* MDX Content */}
          <article className="pt-4 md:pt-5 blog-article">
            <MDX components={getMDXComponents()} />
          </article>

          {/* Prev / Next Navigation */}
          {(prevPost || nextPost) && (
            <div className="border-t border-driftwood pt-8 mt-16">
              <div className="flex gap-8">
                {/* Previous */}
                <div className="flex-1 min-w-0">
                  {prevPost ? (
                    <Link
                      href={`/blog/${prevPost.slugs[0]}`}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-linen border border-driftwood flex items-center justify-center flex-shrink-0">
                        <span className="font-heading text-2xl text-forest leading-none translate-y-[1px]">
                          {prevPost.data.title.charAt(0)}
                        </span>
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <p className="text-[13px] text-sage mb-1">Previous</p>
                        <p className="text-[15px] font-medium text-forest group-hover:text-terracotta transition-colors truncate">
                          {prevPost.data.title.length > 20 ? prevPost.data.title.slice(0, 20) + '…' : prevPost.data.title}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>

                {/* Next */}
                <div className="flex-1 min-w-0">
                  {nextPost ? (
                    <Link
                      href={`/blog/${nextPost.slugs[0]}`}
                      className="flex items-center gap-4 group justify-end"
                    >
                      <div className="text-right flex-1 min-w-0">
                        <p className="text-[13px] text-sage mb-1">Next</p>
                        <p className="text-[15px] font-medium text-forest group-hover:text-terracotta transition-colors truncate">
                          {nextPost.data.title.length > 20 ? nextPost.data.title.slice(0, 20) + '…' : nextPost.data.title}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-linen border border-driftwood flex items-center justify-center flex-shrink-0">
                        <span className="font-heading text-2xl text-forest leading-none translate-y-[1px]">
                          {nextPost.data.title.charAt(0)}
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Related Posts */}
      {relatedPages.length > 0 && (
        <section className="py-24 bg-linen">
          <div className="container mx-auto px-6 max-w-[1290px]">
            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-12 text-center">
              Related Posts
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPages.map((related) => (
                <Link
                  key={related.slugs[0]}
                  href={`/blog/${related.slugs[0]}`}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <div className="aspect-[3/2] overflow-hidden mb-6 bg-stone rounded-[12px]">
                    {related.data.image && (
                      <img
                        src={related.data.image}
                        alt={related.data.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-terracotta mb-3 block">
                    {related.data.category}
                  </span>
                  <h3 className="font-heading text-2xl text-forest mb-3 group-hover:text-terracotta transition-colors">
                    {related.data.title}
                  </h3>
                  <p className="text-forest-light text-sm leading-relaxed mb-4 flex-grow">
                    {related.data.description}
                  </p>
                  <span className="text-xs text-sage">
                    {new Date(related.data.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
