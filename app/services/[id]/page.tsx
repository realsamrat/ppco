import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GALLERY_DATA } from '../../../constants'
import { SERVICES_SEO } from '../../../seo.config'
import { ServiceGallery } from '../../../components/ServiceGallery'

const SERVICE_IDS = ['weddings', 'engagements', 'families', 'branding', 'headshots', 'seniors'] as const
type ServiceId = typeof SERVICE_IDS[number]

export function generateStaticParams() {
  return SERVICE_IDS.map((id) => ({ id }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params
  const seo = SERVICES_SEO[id as ServiceId]
  if (!seo) return {}
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const data = GALLERY_DATA[id as ServiceId]
  if (!data) notFound()
  return <ServiceGallery {...data} />
}
