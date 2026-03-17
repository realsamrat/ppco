import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../seo.config';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  noindex?: boolean;
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  noindex = false,
  children,
}) => {
  const siteTitle = title || SITE_CONFIG.defaultTitle;
  const siteDescription = description || SITE_CONFIG.defaultDescription;
  const siteImage = image ? `${SITE_CONFIG.siteUrl}${image}` : `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultImage}`;
  const siteUrl = url ? `${SITE_CONFIG.siteUrl}${url}` : SITE_CONFIG.siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_CONFIG.siteName} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />

      {/* Article specific Open Graph */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      {SITE_CONFIG.twitterHandle && (
        <>
          <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
          <meta name="twitter:creator" content={SITE_CONFIG.twitterHandle} />
        </>
      )}

      {/* Additional meta tags */}
      <meta name="author" content={SITE_CONFIG.siteName} />
      <meta name="generator" content="React" />

      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="US-OR" />
      <meta name="geo.placename" content="Portland" />
      <meta name="geo.position" content="45.5152;-122.6784" />
      <meta name="ICBM" content="45.5152, -122.6784" />

      {/* Allow children for additional custom meta tags */}
      {children}
    </Helmet>
  );
};

export default SEO;
