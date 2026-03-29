'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

interface Post {
  slug: string
  title: string
  description: string
  category: string
  date: string
  image: string | null
  author: string
}

interface BlogListClientProps {
  posts: Post[]
  categories: string[]
}

export function BlogListClient({ posts, categories }: BlogListClientProps) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let result = posts
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }
    return result
  }, [posts, activeCategory, search])

  const largePosts = filtered.slice(0, 2)
  const smallPosts = filtered.slice(2)

  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="max-w-[1024px] mx-auto px-6">
        {/* Title */}
        <h1 className="font-heading text-[32px] leading-[1.125] tracking-[-0.022em] text-forest mb-6">
          The Journal
        </h1>

        {/* Filters + Search row */}
        <div className="flex items-center justify-between gap-6 mb-12">
          {/* Category filters */}
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap text-[15px] leading-[1.6] tracking-[-0.011em] transition-colors duration-100 ${
                  activeCategory === cat
                    ? 'text-forest font-medium'
                    : 'text-sage hover:text-forest'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center relative">
            <svg
              className="absolute left-3 w-4 h-4 text-sage pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[232px] h-10 pl-9 pr-4 rounded-full bg-linen border border-driftwood text-[14px] text-forest placeholder:text-sage focus:outline-none focus:border-forest transition-colors"
            />
          </div>
        </div>

        {/* Large cards — top 2 posts */}
        {largePosts.length > 0 && (
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 mb-16">
            {largePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                {post.image && (
                  <div className="aspect-[16/9] overflow-hidden rounded-md mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                <div className="flex items-center gap-1 text-[13px] text-sage tracking-[-0.01em] mb-2">
                  <span>{post.author}</span>
                  <span className="mx-1">&middot;</span>
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h3 className="font-heading text-[24px] leading-[1.33] tracking-[-0.012em] text-forest group-hover:text-terracotta transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-[14px] leading-[1.5] tracking-[-0.013em] text-sage line-clamp-3 max-w-[500px]">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        )}

        {/* Divider between large and small */}
        {largePosts.length > 0 && smallPosts.length > 0 && (
          <div className="border-t border-black/5 mb-16" />
        )}

        {/* Small cards — remaining posts */}
        {smallPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 pb-24">
            {smallPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                {post.image && (
                  <div className="aspect-[16/9] overflow-hidden rounded-md mb-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                <div className="flex items-center gap-1 text-[13px] text-sage tracking-[-0.01em] mb-1">
                  <span>{post.author}</span>
                  <span className="mx-1">&middot;</span>
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h4 className="font-heading text-[20px] leading-[1.35] tracking-[-0.012em] text-forest group-hover:text-terracotta transition-colors line-clamp-2">
                  {post.title}
                </h4>
              </Link>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-sage text-[15px]">No posts found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
