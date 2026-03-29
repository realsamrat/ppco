'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export const ScrollToTop: React.FC = () => {
  const pathname = usePathname()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    // Only scroll to top when navigating to a different page, not on refresh
    if (prevPathname.current !== pathname) {
      window.scrollTo(0, 0)
      prevPathname.current = pathname
    }
  }, [pathname])

  return null
}
