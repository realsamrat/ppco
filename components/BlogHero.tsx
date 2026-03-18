'use client'

import { useRouter } from 'next/navigation'

interface BlogHeroProps {
  image?: string
  category: string
  title: string
  formattedDate: string
  author: string
}

export function BlogHero({ image, category, title, formattedDate, author }: BlogHeroProps) {
  const router = useRouter()

  return (
    <div className="bg-white" style={{ paddingTop: '100px' }}>
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="relative rounded-[16px] overflow-hidden" style={{ height: '380px' }}>
          {image && (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 94%), linear-gradient(90deg, rgba(250,247,242,0.2) 0%, rgba(250,247,242,0.2) 100%)',
            }}
          />

          {/* Back button — top-left inside card */}
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="absolute top-0 left-0 m-5 flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200"
            style={{ background: 'rgba(255,255,255,1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.35)' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              width={18}
              height={18}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.70711 2.29289C8.09763 2.68342 8.09763 3.31658 7.70711 3.70711L6.41421 5H13.5C17.6421 5 21 8.35786 21 12.5C21 16.6421 17.6421 20 13.5 20H6C5.44772 20 5 19.5523 5 19C5 18.4477 5.44772 18 6 18H13.5C16.5376 18 19 15.5376 19 12.5C19 9.46243 16.5376 7 13.5 7H6.41421L7.70711 8.29289C8.09763 8.68342 8.09763 9.31658 7.70711 9.70711C7.31658 10.0976 6.68342 10.0976 6.29289 9.70711L3.29289 6.70711C2.90237 6.31658 2.90237 5.68342 3.29289 5.29289L6.29289 2.29289C6.68342 1.90237 7.31658 1.90237 7.70711 2.29289Z"
                fill="#161613"
              />
            </svg>
          </button>

          <div className="absolute bottom-0 left-0 right-0 flex flex-col" style={{ padding: '48px', gap: '12px' }}>
            <span className="font-nav text-sm font-semibold uppercase tracking-widest text-terracotta overflow-hidden">
              {category}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl leading-tight" style={{ color: '#ffffff' }}>
              {title}
            </h1>
            <p className="font-nav text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgb(178,178,178)' }}>
              {formattedDate} &middot; By {author}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
