import { Helmet } from 'react-helmet-async';

/**
 * JSON-LD Structured Data Component for Prateekkarn.com
 * Implements Person, Organization, WebSite, and ProfessionalService schemas
 * Updated to fix Google Rich Results validation errors
 */

// Person Schema - Prateek Karn
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://prateekkarn.in/#person",
  "name": "Prateek Karn",
  "givenName": "Prateek",
  "familyName": "Karn",
  "url": "https://prateekkarn.in",
  "image": {
    "@type": "ImageObject",
    "url": "https://prateekkarn.in/prateek-karn-about.jpg",
    "width": 400,
    "height": 400
  },
  "sameAs": [
    "https://www.linkedin.com/in/prateekkarn/"
  ],
  "jobTitle": "AI Business Architect",
  "description": "AI Business Architect who designs intelligent MarTech systems, AI-powered automation, and data pipelines for enterprise growth.",
  "email": "prateekkarn5@gmail.com",
  "knowsAbout": [
    "AI Business Architecture",
    "MarTech Systems",
    "Marketing Attribution",
    "AI Lead Scoring",
    "Data Pipeline Architecture",
    "Enterprise AI Transformation",
    "CRM Automation",
    "Growth Systems",
    "Agentic AI",
    "Marketing Analytics"
  ],
  "worksFor": {
    "@id": "https://prateekkarn.in/#organization"
  }
};

// Organization Schema - Karn Consulting (Fixed for Google validation)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://prateekkarn.in/#organization",
  "name": "Karn Consulting",
  "alternateName": "Prateek Karn Consulting",
  "url": "https://prateekkarn.in",
  "logo": {
    "@type": "ImageObject",
    "url": "https://prateekkarn.in/pk-logo.png",
    "width": 512,
    "height": 512
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://prateekkarn.in/og-image.png",
    "width": 1200,
    "height": 630
  },
  "description": "AI Business Architecture and MarTech consulting for enterprise transformation.",
  "email": "prateekkarn5@gmail.com",
  "founder": {
    "@id": "https://prateekkarn.in/#person"
  },
  "sameAs": [
    "https://www.linkedin.com/in/prateekkarn/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "prateekkarn5@gmail.com",
    "url": "https://prateekkarn.in",
    "availableLanguage": ["English", "Hindi"]
  }
};

// WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://prateekkarn.in/#website",
  "name": "Prateek Karn - AI Business Architect",
  "alternateName": "Prateekkarn.com",
  "url": "https://prateekkarn.in",
  "description": "AI Business Architecture and MarTech consulting for enterprise transformation.",
  "publisher": {
    "@id": "https://prateekkarn.in/#organization"
  },
  "inLanguage": "en-US"
};

// ProfessionalService Schema (LocalBusiness subtype for rich results)
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://prateekkarn.in/#service",
  "name": "AI Business Architecture Consulting",
  "description": "Expert consulting services for AI transformation, MarTech architecture, marketing attribution, and enterprise growth systems.",
  "url": "https://prateekkarn.in",
  "image": {
    "@type": "ImageObject",
    "url": "https://prateekkarn.in/og-image.png",
    "width": 1200,
    "height": 630
  },
  "priceRange": "$$$$",
  "email": "prateekkarn5@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Amritsar",
    "addressRegion": "Punjab",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.6340,
    "longitude": 74.8723
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    },
    {
      "@type": "Country",
      "name": "India"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Consulting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Business Architecture",
          "description": "Design and implementation of AI-powered business systems for enterprise growth."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MarTech Stack Optimization",
          "description": "Audit, rationalization, and optimization of marketing technology stacks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Marketing Attribution Systems",
          "description": "Implementation of advanced multi-touch attribution models beyond last-click."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Lead Scoring",
          "description": "Development of AI-powered lead scoring models for improved conversion."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Pipeline Architecture",
          "description": "Design and implementation of marketing data pipelines for unified analytics."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise AI Preparedness",
          "description": "Assessment and roadmap for enterprise AI transformation readiness."
        }
      }
    ]
  }
};

// Combined Graph for all schemas (using @graph to avoid duplicate @context issues)
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // Remove @context from individual schemas when in @graph
    { ...personSchema, "@context": undefined },
    { ...organizationSchema, "@context": undefined },
    { ...websiteSchema, "@context": undefined },
    { ...professionalServiceSchema, "@context": undefined }
  ]
};

/**
 * StructuredData Component
 * Add this component to your homepage (Index.tsx)
 */
export const StructuredData = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  );
};

/**
 * Article Schema Generator for Blog Posts
 * Use this in InsightPost.tsx for individual blog posts
 */
interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
}

export const generateArticleSchema = ({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
  keywords = []
}: ArticleSchemaProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": `https://prateekkarn.in/insights/${slug}`,
    "image": image || "https://prateekkarn.in/og-image.png",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "@id": "https://prateekkarn.in/#person",
      "name": "Prateek Karn"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://prateekkarn.in/#organization",
      "name": "Karn Consulting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prateekkarn.in/pk-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://prateekkarn.in/insights/${slug}`
    },
    "keywords": keywords.join(", "),
    "articleSection": "Insights",
    "inLanguage": "en-US"
  };
};

/**
 * BreadcrumbList Schema Generator
 * Use this for navigation breadcrumbs on any page
 */
interface BreadcrumbItem {
  name: string;
  url: string;
}

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * ArticleStructuredData Component for Blog Posts
 */
interface ArticleStructuredDataProps extends ArticleSchemaProps {
  breadcrumbs?: BreadcrumbItem[];
}

export const ArticleStructuredData = ({ 
  breadcrumbs,
  ...articleProps 
}: ArticleStructuredDataProps) => {
  const articleSchema = generateArticleSchema(articleProps);
  
  const defaultBreadcrumbs = [
    { name: "Home", url: "https://prateekkarn.in" },
    { name: "Insights", url: "https://prateekkarn.in/insights" },
    { name: articleProps.title, url: `https://prateekkarn.in/insights/${articleProps.slug}` }
  ];
  
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs || defaultBreadcrumbs);
  
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

export default StructuredData;
