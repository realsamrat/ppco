import type { Metadata } from 'next'
import { ContactPage } from '../../components/ContactPage'
import { PAGE_SEO } from '../../seo.config'

export const metadata: Metadata = {
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  keywords: PAGE_SEO.contact.keywords,
}

export default function Contact() {
  return <ContactPage />
}
