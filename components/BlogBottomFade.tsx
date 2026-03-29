'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export function PageProgressiveBlur() {
  const pathname = usePathname()
  const [opacity, setOpacity] = useState(1)
  const isBlogDetail = pathname.startsWith('/blog/') && pathname !== '/blog'

  useEffect(() => {
    if (!isBlogDetail) return

    const onScroll = () => {
      const el = document.documentElement
      const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight
      const fadeRange = 300

      if (distanceFromBottom >= fadeRange) {
        setOpacity(1)
      } else {
        setOpacity(distanceFromBottom / fadeRange)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isBlogDetail])

  if (!isBlogDetail) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none"
      style={{ opacity, transition: 'opacity 0.15s ease-out' }}
    >
      <div className="relative w-full" style={{ height: '200px' }}>
        <ProgressiveBlur position="bottom" height="200px" />
      </div>
    </div>
  )
}
