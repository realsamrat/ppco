import type { Metadata } from 'next'
import { ServicesPage } from '../../components/ServicesPage'
import { PAGE_SEO } from '../../seo.config'

export const metadata: Metadata = {
  title: PAGE_SEO.services.title,
  description: PAGE_SEO.services.description,
  keywords: PAGE_SEO.services.keywords,
}

export default function Services() {
  return <ServicesPage />
}
