import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { source, getPageOgImage } from '../../../lib/source'
import { getMDXComponents } from '../../../mdx-components'
import { BlogPostJsonLd, BreadcrumbJsonLd } from '../../../components/JsonLd'
import { BlogHero } from '../../../components/BlogHero'

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
  const allPages = source.getPages()
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
    <div className="bg-white">

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

      {/* Hero — fixed, never affects document flow */}
      <BlogHero
        image={page.data.image}
        category={page.data.category}
        title={page.data.title}
        formattedDate={new Date(page.data.date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
        author={page.data.author}
      />


      {/* MDX Content */}
      <article className="pt-12 pb-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <MDX components={getMDXComponents()} />

        </div>
      </article>

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
                  <span className="font-nav text-xs font-bold uppercase tracking-widest text-terracotta mb-3 block">
                    {related.data.category}
                  </span>
                  <h3 className="font-heading text-2xl text-forest mb-3 group-hover:text-terracotta transition-colors">
                    {related.data.title}
                  </h3>
                  <p className="font-body text-forest-light text-sm leading-relaxed mb-4 flex-grow">
                    {related.data.description}
                  </p>
                  <span className="font-nav text-xs text-sage">
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
