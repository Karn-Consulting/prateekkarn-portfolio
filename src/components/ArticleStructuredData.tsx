import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://prateekkarn.com';

interface ArticleStructuredDataProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorTitle: string;
  category: string;
  featuredImage?: string;
  imageAlt?: string;
  readTime?: string;
}

/**
 * ArticleStructuredData Component
 * Implements JSON-LD Article schema for blog posts
 * Enables rich snippets in Google Search results
 */
const ArticleStructuredData = ({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  authorName,
  authorTitle,
  category,
  featuredImage,
  imageAlt,
  readTime,
}: ArticleStructuredDataProps) => {
  const articleUrl = `${BASE_URL}/insights/${slug}`;
  const imageUrl = featuredImage 
    ? (featuredImage.startsWith('http') ? featuredImage : `${BASE_URL}${featuredImage}`)
    : `${BASE_URL}/og-image.png`;

  // Parse read time to get word count estimate (assuming 200 words per minute)
  const wordCount = readTime 
    ? parseInt(readTime) * 200 
    : 1500;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    headline: title,
    description: description,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      caption: imageAlt || title,
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: authorName,
      jobTitle: authorTitle,
      url: BASE_URL,
      sameAs: [
        'https://www.linkedin.com/in/prateekkarn/',
      ],
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Prateek Karn',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon-32x32.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    url: articleUrl,
    articleSection: category,
    wordCount: wordCount,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    keywords: [category, 'AI', 'Business Strategy', 'MarTech', 'Data Analytics'].join(', '),
  };

  // BreadcrumbList schema for navigation
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Insights',
        item: `${BASE_URL}/insights`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category,
        item: `${BASE_URL}/insights?category=${encodeURIComponent(category)}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: title,
        item: articleUrl,
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default ArticleStructuredData;
