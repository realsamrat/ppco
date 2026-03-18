import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { source } from '../../../lib/source'
import { getMDXComponents } from '../../../mdx-components'
import { Button } from '../../../components/Button'
import { BlogPostJsonLd, BreadcrumbJsonLd } from '../../../components/JsonLd'

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

  return {
    title: `${page.data.title} | Portland Picture Co. Blog`,
    description: page.data.description,
    keywords: `${page.data.category.toLowerCase()}, photography tips, portland photographer`,
    openGraph: {
      type: 'article',
      publishedTime: new Date(page.data.date).toISOString(),
      section: page.data.category,
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
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: page.data.title, url: `/blog/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {page.data.image && (
            <img src={page.data.image} alt={page.data.title} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="font-nav text-xs font-bold uppercase tracking-widest text-terracotta mb-4 block">
            {page.data.category}
          </span>
          <h1 className="font-heading text-4xl md:text-6xl text-warmWhite mb-4 drop-shadow-lg">
            {page.data.title}
          </h1>
          <p className="font-nav text-sm text-warmWhite/90 drop-shadow-md">
            {new Date(page.data.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* MDX Content */}
      <article className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <MDX components={getMDXComponents()} />

          <div className="mt-16 pt-8 border-t border-driftwood">
            <Link href="/blog">
              <Button variant="secondary">← Back to All Posts</Button>
            </Link>
          </div>
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
                  <div className="aspect-[3/2] overflow-hidden mb-6 bg-stone">
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
