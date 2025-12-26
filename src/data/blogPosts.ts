export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  dateISO: string;
  author: {
    name: string;
    title: string;
    image?: string;
  };
  featuredImage?: string;
  content: string; // Will hold the actual blog content (empty for now)
}

export const CATEGORIES = [
  'All',
  'AI Strategy',
  'Marketing Analytics',
  'Data Visualization',
  'MarTech',
  'Growth Systems'
] as const;

export type Category = typeof CATEGORIES[number];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'the-kinetic-enterprise',
    title: 'The Kinetic Enterprise',
    excerpt: 'Building the Self-Healing Business through a High-Resolution Digital Nervous System.',
    category: 'AI Strategy',
    readTime: '14 min read',
    date: 'Dec 18, 2024',
    dateISO: '2024-12-18',
    author: {
      name: 'Prateek Karn',
      title: 'AI Business Architect'
    },
    content: '' // Content to be added later
  },
  {
    id: 2,
    slug: 'death-of-last-click-attribution',
    title: 'The Death of Last-Click Attribution: What Comes Next',
    excerpt: 'iOS 14.5 didn\'t just change privacy—it exposed how fragile our measurement foundations were. Here\'s how to build attribution systems that survive.',
    category: 'Marketing Analytics',
    readTime: '6 min read',
    date: 'Dec 12, 2024',
    dateISO: '2024-12-12',
    author: {
      name: 'Prateek Karn',
      title: 'AI Business Architect'
    },
    content: '' // Content to be added later
  },
  {
    id: 3,
    slug: 'building-executive-dashboards-that-actually-get-used',
    title: 'Building Executive Dashboards That Actually Get Used',
    excerpt: 'Most BI projects fail not because of bad data, but because of bad design. The difference between dust and decisions comes down to these principles.',
    category: 'Data Visualization',
    readTime: '5 min read',
    date: 'Dec 5, 2024',
    dateISO: '2024-12-05',
    author: {
      name: 'Prateek Karn',
      title: 'AI Business Architect'
    },
    content: '' // Content to be added later
  }
];

// Helper function to get post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.slug === slug);
};

// Helper function to get posts by category
export const getPostsByCategory = (category: Category): BlogPost[] => {
  if (category === 'All') return BLOG_POSTS;
  return BLOG_POSTS.filter(post => post.category === category);
};

// Helper function to get related posts (same category, excluding current)
export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return BLOG_POSTS.slice(0, limit);
  
  const sameCategoryPosts = BLOG_POSTS.filter(
    post => post.category === currentPost.category && post.slug !== currentSlug
  );
  
  if (sameCategoryPosts.length >= limit) {
    return sameCategoryPosts.slice(0, limit);
  }
  
  // Fill with other posts if not enough in same category
  const otherPosts = BLOG_POSTS.filter(
    post => post.category !== currentPost.category && post.slug !== currentSlug
  );
  
  return [...sameCategoryPosts, ...otherPosts].slice(0, limit);
};
