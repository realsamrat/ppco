import React from 'react';
import { BUSINESS_INFO, SITE_CONFIG } from '../seo.config';

const JsonLdScript = ({ schema }: { schema: object }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);

// Local Business Schema for Photography Studio
export const LocalBusinessJsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS_INFO.url}/#business`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: BUSINESS_INFO.image,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    priceRange: BUSINESS_INFO.priceRange,
    areaServed: BUSINESS_INFO.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    sameAs: BUSINESS_INFO.sameAs,
  };

  return <JsonLdScript schema={schema} />;
};

// Photography Business Schema (more specific)
export const PhotographyBusinessJsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BUSINESS_INFO.url}/#photography-service`,
    name: BUSINESS_INFO.name,
    description:
      'Professional photography studio offering wedding, portrait, family, branding, headshot, and senior photography services in Portland, Oregon and the Pacific Northwest.',
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: BUSINESS_INFO.image,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Photography Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Photography', description: 'Full-day wedding photography coverage with a documentary approach.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Engagement Photography', description: '90-minute engagement photo sessions at beautiful Portland locations.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Family Photography', description: 'Natural, candid family portrait sessions in outdoor Portland locations.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding & Corporate Photography', description: 'Professional branding photography including headshots, team photos, and lifestyle imagery.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Professional Headshots', description: 'Natural light headshot photography for professionals, executives, and actors.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Senior Portrait Photography', description: 'Authentic high school senior portraits with multiple locations and outfit changes.' } },
      ],
    },
    areaServed: BUSINESS_INFO.areaServed.map((area) => ({ '@type': 'City', name: area })),
    sameAs: BUSINESS_INFO.sameAs,
  };

  return <JsonLdScript schema={schema} />;
};

// Organization Schema
export const OrganizationJsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS_INFO.url}/#organization`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.url,
    logo: { '@type': 'ImageObject', url: BUSINESS_INFO.logo },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_INFO.telephone,
      contactType: 'customer service',
      email: BUSINESS_INFO.email,
      areaServed: 'US',
      availableLanguage: 'English',
    },
    sameAs: BUSINESS_INFO.sameAs,
  };

  return <JsonLdScript schema={schema} />;
};

// Website Schema with SearchAction
export const WebsiteJsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.siteUrl}/#website`,
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.siteUrl,
    description: SITE_CONFIG.defaultDescription,
    publisher: { '@id': `${BUSINESS_INFO.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.siteUrl}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return <JsonLdScript schema={schema} />;
};

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbJsonLd: React.FC<BreadcrumbJsonLdProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.siteUrl}${item.url}`,
    })),
  };

  return <JsonLdScript schema={schema} />;
};

// Blog Post / Article Schema
interface BlogPostJsonLdProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}

export const BlogPostJsonLd: React.FC<BlogPostJsonLdProps> = ({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = SITE_CONFIG.siteName,
  url,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: image.startsWith('http') ? image : `${SITE_CONFIG.siteUrl}${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@type': 'Organization', name: author, url: SITE_CONFIG.siteUrl },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.siteName,
      logo: { '@type': 'ImageObject', url: BUSINESS_INFO.logo },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_CONFIG.siteUrl}${url}` },
  };

  return <JsonLdScript schema={schema} />;
};

// Service Page Schema
interface ServiceJsonLdProps {
  name: string;
  description: string;
  image?: string;
  url: string;
}

export const ServiceJsonLd: React.FC<ServiceJsonLdProps> = ({ name, description, image, url }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@type': 'LocalBusiness', name: BUSINESS_INFO.name, url: BUSINESS_INFO.url },
    areaServed: { '@type': 'City', name: 'Portland, Oregon' },
    ...(image && { image: image.startsWith('http') ? image : `${SITE_CONFIG.siteUrl}${image}` }),
    url: `${SITE_CONFIG.siteUrl}${url}`,
  };

  return <JsonLdScript schema={schema} />;
};

// Image Gallery Schema
interface ImageGalleryJsonLdProps {
  name: string;
  description: string;
  images: string[];
  url: string;
}

export const ImageGalleryJsonLd: React.FC<ImageGalleryJsonLdProps> = ({
  name,
  description,
  images,
  url,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name,
    description,
    url: `${SITE_CONFIG.siteUrl}${url}`,
    image: images.slice(0, 10).map((img) => ({
      '@type': 'ImageObject',
      url: img.startsWith('http') ? img : `${SITE_CONFIG.siteUrl}${img}`,
    })),
    creator: { '@type': 'Organization', name: BUSINESS_INFO.name },
  };

  return <JsonLdScript schema={schema} />;
};

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQJsonLdProps {
  faqs: FAQItem[];
}

export const FAQJsonLd: React.FC<FAQJsonLdProps> = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return <JsonLdScript schema={schema} />;
};

// Contact Page Schema
export const ContactPageJsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Portland Picture Co.',
    description: 'Get in touch with Portland Picture Co. to book your photography session.',
    url: `${SITE_CONFIG.siteUrl}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.telephone,
      email: BUSINESS_INFO.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.streetAddress,
        addressLocality: BUSINESS_INFO.address.addressLocality,
        addressRegion: BUSINESS_INFO.address.addressRegion,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: BUSINESS_INFO.address.addressCountry,
      },
    },
  };

  return <JsonLdScript schema={schema} />;
};
