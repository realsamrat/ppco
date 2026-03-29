import type { Metadata } from 'next'
import Link from 'next/link'
import { source } from '../../lib/source'
import { BreadcrumbJsonLd } from '../../components/JsonLd'
import { PAGE_SEO } from '../../seo.config'
import { BlogListClient } from '../../components/BlogListClient'

export const metadata: Metadata = {
  title: PAGE_SEO.blog.title,
  description: PAGE_SEO.blog.description,
  keywords: PAGE_SEO.blog.keywords,
}

export default function BlogPage() {
  const posts = source.getPages().sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  )

  const serializedPosts = posts.map((post) => ({
    slug: post.slugs[0],
    title: post.data.title,
    description: post.data.description,
    category: post.data.category,
    date: post.data.date,
    image: post.data.image ?? null,
    author: post.data.author,
  }))

  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.data.category)))]

  return (
    <div className="bg-cream">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
      />
      <BlogListClient posts={serializedPosts} categories={categories} />
    </div>
  )
}
