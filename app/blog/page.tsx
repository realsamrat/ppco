import type { Metadata } from 'next'
import { BlogPage } from '../../components/BlogPage'
import { PAGE_SEO } from '../../seo.config'

export const metadata: Metadata = {
  title: PAGE_SEO.blog.title,
  description: PAGE_SEO.blog.description,
  keywords: PAGE_SEO.blog.keywords,
}

export default function Blog() {
  return <BlogPage />
}
