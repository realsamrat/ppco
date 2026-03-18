import type { Metadata } from 'next'
import Link from 'next/link'
import { source } from '../../lib/source'
import { BreadcrumbJsonLd } from '../../components/JsonLd'
import { PAGE_SEO } from '../../seo.config'

export const metadata: Metadata = {
  title: PAGE_SEO.blog.title,
  description: PAGE_SEO.blog.description,
  keywords: PAGE_SEO.blog.keywords,
}

export default function BlogPage() {
  const posts = source.getPages().sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  )

  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
      />

      {/* Hero */}
      <section className="pt-48 pb-32 bg-linen text-center px-6">
        <h1 className="font-heading text-5xl md:text-6xl text-forest mb-6">The Journal</h1>
        <p className="font-body text-lg text-forest-light max-w-2xl mx-auto leading-relaxed">
          Stories, tips, and inspiration from our photography adventures. Explore our latest posts
          on everything from styling advice to featured sessions.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1290px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slugs[0]}
                href={`/blog/${post.slugs[0]}`}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="aspect-[3/2] overflow-hidden mb-6 bg-stone rounded-[12px]">
                  {post.data.image && (
                    <img
                      src={post.data.image}
                      alt={post.data.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <span className="font-nav text-xs font-bold uppercase tracking-widest text-terracotta mb-3 block">
                  {post.data.category}
                </span>
                <h3 className="font-heading text-2xl text-forest mb-3 group-hover:text-terracotta transition-colors">
                  {post.data.title}
                </h3>
                <p className="font-body text-forest-light text-sm leading-relaxed mb-4 flex-grow">
                  {post.data.description}
                </p>
                <span className="font-nav text-xs text-sage">
                  {new Date(post.data.date).toLocaleDateString('en-US', {
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
    </div>
  )
}
