import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BLOG_POSTS, CATEGORIES, type Category } from '@/data/blogPosts';

// Abstract architectural graphic placeholder (matching homepage)
const AbstractGraphic = ({ variant = 0 }: { variant?: number }) => {
  const patterns = [
    // Digital Nervous System pattern for Kinetic Enterprise
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <circle cx="100" cy="60" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <circle cx="100" cy="60" r="8" fill="currentColor" fillOpacity="0.3" className="text-accent" />
      <circle cx="100" cy="60" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" className="text-accent/40" />
      <circle cx="100" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 4" className="text-accent/30" />
      <path d="M 100 42 L 100 20 L 140 15" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 100 42 L 100 20 L 60 15" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 118 60 L 160 60 L 180 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 118 60 L 160 60 L 180 80" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 82 60 L 40 60 L 20 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 82 60 L 40 60 L 20 80" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 100 78 L 100 100 L 140 105" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 100 78 L 100 100 L 60 105" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <circle cx="140" cy="15" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="60" cy="15" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="180" cy="40" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="180" cy="80" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="20" cy="40" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="20" cy="80" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="140" cy="105" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="60" cy="105" r="4" fill="currentColor" className="text-accent/60" />
    </svg>,
    // Attribution Flow pattern
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <path d="M 20 30 Q 50 30 60 50" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent/60" strokeDasharray="8 4" />
      <path d="M 20 60 Q 50 55 70 60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent/70" strokeDasharray="6 3" />
      <path d="M 20 90 Q 50 85 65 70" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent/50" strokeDasharray="10 5" />
      <circle cx="100" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
      <circle cx="100" cy="60" r="6" fill="currentColor" className="text-accent/40" />
      <path d="M 70 50 L 85 55" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <path d="M 75 60 L 85 60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <path d="M 70 70 L 85 65" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <path d="M 115 60 L 180 60" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
      <polygon points="180,55 190,60 180,65" fill="currentColor" className="text-accent" />
      <text x="35" y="45" className="text-accent/40" fontSize="12" fontFamily="serif">?</text>
      <text x="40" y="75" className="text-accent/40" fontSize="12" fontFamily="serif">?</text>
    </svg>,
    // Dashboard/Grid pattern
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect x="25" y="20" width="70" height="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/40" />
      <rect x="105" y="20" width="70" height="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/40" />
      <rect x="25" y="70" width="70" height="35" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/40" />
      <rect x="105" y="70" width="70" height="35" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/40" />
      <line x1="35" y1="50" x2="45" y2="35" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <line x1="45" y1="35" x2="55" y2="42" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <line x1="55" y1="42" x2="65" y2="30" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <line x1="65" y1="30" x2="75" y2="38" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <line x1="75" y1="38" x2="85" y2="28" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <rect x="115" y="45" width="8" height="10" fill="currentColor" className="text-accent/60" />
      <rect x="128" y="38" width="8" height="17" fill="currentColor" className="text-accent/70" />
      <rect x="141" y="32" width="8" height="23" fill="currentColor" className="text-accent/80" />
      <rect x="154" y="28" width="8" height="27" fill="currentColor" className="text-accent" />
      <circle cx="45" cy="85" r="4" fill="currentColor" className="text-accent/50" />
      <circle cx="60" cy="90" r="6" fill="currentColor" className="text-accent/70" />
      <circle cx="78" cy="82" r="5" fill="currentColor" className="text-accent/60" />
      <circle cx="125" cy="87" r="5" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
      <circle cx="145" cy="87" r="5" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
      <circle cx="165" cy="87" r="5" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
      <line x1="130" y1="87" x2="140" y2="87" stroke="currentColor" strokeWidth="1" className="text-accent/60" />
      <line x1="150" y1="87" x2="160" y2="87" stroke="currentColor" strokeWidth="1" className="text-accent/60" />
    </svg>
  ];

  return (
    <div className="w-full h-full flex items-center justify-center text-accent/60">
      {patterns[variant % patterns.length]}
    </div>
  );
};

// Precision Node Icon
const PrecisionNodeIcon = () => (
  <svg 
    width="8" 
    height="8" 
    viewBox="0 0 8 8" 
    className="mr-[6px] flex-shrink-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
  >
    <circle 
      cx="4" 
      cy="4" 
      r="3.2" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.6" 
      className="text-[#9a9590] transition-all duration-300 group-hover:stroke-[0.8]"
    />
    <circle 
      cx="4" 
      cy="4" 
      r="1.3" 
      fill="currentColor" 
      className="text-[#8b7355] transition-transform duration-300 origin-center group-hover:scale-[1.15]"
    />
  </svg>
);

// Blog Card Component with bubble hover effect
const BlogCard = ({ post, index }: { post: typeof BLOG_POSTS[0], index: number }) => (
  <Link 
    to={`/insights/${post.slug}`} 
    className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 flex flex-col cursor-pointer hover:-translate-y-1"
  >
    {/* Subtle bubbling effect on hover - matching TestimonialsSection */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10">
      <div className="absolute -bottom-2 left-1/4 w-3 h-3 bg-accent/10 rounded-full animate-[bubble_2s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
      <div className="absolute -bottom-2 left-1/2 w-2 h-2 bg-accent/15 rounded-full animate-[bubble_2.5s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }} />
      <div className="absolute -bottom-2 left-3/4 w-2.5 h-2.5 bg-accent/10 rounded-full animate-[bubble_2.2s_ease-in-out_infinite]" style={{ animationDelay: '0.6s' }} />
      <div className="absolute -bottom-2 left-1/3 w-1.5 h-1.5 bg-accent/20 rounded-full animate-[bubble_3s_ease-in-out_infinite]" style={{ animationDelay: '0.9s' }} />
      <div className="absolute -bottom-2 left-2/3 w-2 h-2 bg-accent/10 rounded-full animate-[bubble_2.8s_ease-in-out_infinite]" style={{ animationDelay: '1.2s' }} />
    </div>
    
    {/* Featured Image or Abstract Graphic */}
    <div className="aspect-[16/10] bg-muted/30 relative overflow-hidden">
      {post.featuredImage ? (
        <img 
          src={post.featuredImage} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 p-8">
          <AbstractGraphic variant={index} />
        </div>
      )}
    </div>
    
    {/* Content */}
    <div className="p-4 sm:p-6 flex flex-col flex-grow relative z-10">
      {/* Category & Read Time */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent">
          {post.category}
        </span>
        <span className="text-xs text-muted-foreground inline-flex items-center">
          <PrecisionNodeIcon />
          {post.readTime}
        </span>
      </div>
      
      {/* Title */}
      <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3 leading-snug min-h-[3.5rem] line-clamp-2">
        {post.title}
      </h3>
      
      {/* Excerpt */}
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4 flex-grow">
        {post.excerpt}
      </p>
      
      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
        <span className="text-xs text-muted-foreground">
          {post.date}
        </span>
        <span 
          className="
            group/btn
            inline-flex items-center
            px-4 py-2
            text-[#8b7355] 
            text-xs font-semibold tracking-wide uppercase
            border border-[#8b7355]
            rounded-sm
            transition-all duration-300
            group-hover:bg-[#8b7355]
            group-hover:text-white
          "
        >
          <span className="tracking-[0.15em]">READ</span>
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </div>
  </Link>
);

const POSTS_PER_PAGE = 9;

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and sort posts by date (latest first)
  const filteredPosts = useMemo(() => {
    const posts = activeCategory === 'All' 
      ? [...BLOG_POSTS] 
      : BLOG_POSTS.filter(post => post.category === activeCategory);
    return posts.sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
  }, [activeCategory]);

  // Paginate posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      <Helmet>
        <title>Karn Insights | Prateek Karn</title>
        <meta name="description" content="Frameworks, strategies, and lessons learned from building AI and MarTech systems." />
        <link rel="canonical" href="https://prateekkarn.com/insights" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-10 sm:mb-12 md:mb-16">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                Karn Insights
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
                Frameworks, strategies, and lessons learned from building AI and MarTech systems.
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
              <div className="flex gap-2 sm:gap-3 min-w-max sm:min-w-0 sm:flex-wrap">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`
                      px-4 sm:px-5 py-2 sm:py-2.5
                      text-xs sm:text-sm font-medium tracking-wide
                      rounded-sm
                      transition-all duration-300
                      whitespace-nowrap
                      ${activeCategory === category
                        ? 'bg-[#8b7355] text-white border border-[#8b7355]'
                        : 'bg-transparent text-[#8b7355] border border-[#8b7355]/40 hover:border-[#8b7355] hover:bg-[#8b7355]/5'
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Cards Grid */}
            {paginatedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {paginatedPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No posts found in this category.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12 sm:mt-16">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-sm transition-all duration-300
                    ${currentPage === 1
                      ? 'text-muted-foreground/50 cursor-not-allowed'
                      : 'text-[#8b7355] hover:bg-[#8b7355]/10'
                    }
                  `}
                >
                  ← Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`
                      w-10 h-10 text-sm font-medium rounded-sm transition-all duration-300
                      ${currentPage === page
                        ? 'bg-[#8b7355] text-white'
                        : 'text-[#8b7355] hover:bg-[#8b7355]/10'
                      }
                    `}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-sm transition-all duration-300
                    ${currentPage === totalPages
                      ? 'text-muted-foreground/50 cursor-not-allowed'
                      : 'text-[#8b7355] hover:bg-[#8b7355]/10'
                    }
                  `}
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Insights;
