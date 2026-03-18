import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '../../../constants'
import { BlogPostContent } from '../../../components/BlogPost'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  const dateISO = new Date(post.date).toISOString()
  return {
    title: `${post.title} | Portland Picture Co. Blog`,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()}, photography tips, portland photographer, ${post.title.toLowerCase()}`,
    openGraph: {
      type: 'article',
      publishedTime: dateISO,
      section: post.category,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()
  return <BlogPostContent post={post} />
}
