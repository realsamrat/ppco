import type { Metadata } from 'next'
import { PortfolioPage } from '../../components/PortfolioPage'
import { PAGE_SEO } from '../../seo.config'

export const metadata: Metadata = {
  title: PAGE_SEO.portfolio.title,
  description: PAGE_SEO.portfolio.description,
  keywords: PAGE_SEO.portfolio.keywords,
}

export default function Portfolio() {
  return <PortfolioPage />
}
