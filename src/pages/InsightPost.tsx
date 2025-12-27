import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Linkedin, Link2, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPostBySlug, getRelatedPosts, type BlogPost } from '@/data/blogPosts';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Precision Node Icon (matching homepage)
const PrecisionNodeIcon = () => (
  <svg 
    width="8" 
    height="8" 
    viewBox="0 0 8 8" 
    className="mr-[6px] flex-shrink-0 opacity-60"
  >
    <circle 
      cx="4" 
      cy="4" 
      r="3.2" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.6" 
      className="text-[#9a9590]"
    />
    <circle 
      cx="4" 
      cy="4" 
      r="1.3" 
      fill="currentColor" 
      className="text-[#8b7355]"
    />
  </svg>
);

// Abstract Graphic for related posts
const AbstractGraphic = ({ variant = 0 }: { variant?: number }) => {
  const patterns = [
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <circle cx="100" cy="60" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <circle cx="100" cy="60" r="8" fill="currentColor" fillOpacity="0.3" className="text-accent" />
      <circle cx="100" cy="60" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" className="text-accent/40" />
      <path d="M 100 42 L 100 20 L 140 15" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 100 42 L 100 20 L 60 15" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 118 60 L 160 60 L 180 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <circle cx="140" cy="15" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="60" cy="15" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="180" cy="40" r="4" fill="currentColor" className="text-accent/60" />
    </svg>,
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <path d="M 20 30 Q 50 30 60 50" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent/60" strokeDasharray="8 4" />
      <path d="M 20 60 Q 50 55 70 60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent/70" strokeDasharray="6 3" />
      <circle cx="100" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
      <circle cx="100" cy="60" r="6" fill="currentColor" className="text-accent/40" />
      <path d="M 115 60 L 180 60" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
      <polygon points="180,55 190,60 180,65" fill="currentColor" className="text-accent" />
    </svg>,
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect x="25" y="20" width="70" height="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/40" />
      <rect x="105" y="20" width="70" height="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/40" />
      <line x1="35" y1="50" x2="45" y2="35" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <line x1="45" y1="35" x2="55" y2="42" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <rect x="115" y="45" width="8" height="10" fill="currentColor" className="text-accent/60" />
      <rect x="128" y="38" width="8" height="17" fill="currentColor" className="text-accent/70" />
      <rect x="141" y="32" width="8" height="23" fill="currentColor" className="text-accent/80" />
    </svg>
  ];

  return (
    <div className="w-full h-full flex items-center justify-center text-accent/60">
      {patterns[variant % patterns.length]}
    </div>
  );
};

// Breadcrumb Component
const Breadcrumb = ({ post }: { post: BlogPost }) => (
  <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 sm:mb-8 flex-wrap">
    <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
    <ChevronRight className="w-4 h-4" />
    <Link to="/insights" className="hover:text-foreground transition-colors">Insights</Link>
    <ChevronRight className="w-4 h-4" />
    <span className="text-accent">{post.category}</span>
  </nav>
);

// Share Buttons Component
const ShareButtons = ({ post }: { post: BlogPost }) => {
  const [copied, setCopied] = useState(false);
  const postUrl = `https://prateekkarn.com/insights/${post.slug}`;
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link');
    }
  };

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600');
  };

  return (
    <div className="flex items-center gap-4 py-6 border-t border-b border-border">
      <span className="text-sm text-muted-foreground">Share this article:</span>
      <div className="flex items-center gap-3">
        <button
          onClick={handleLinkedInShare}
          className="p-2 text-muted-foreground hover:text-[#0077b5] hover:bg-[#0077b5]/10 rounded-md transition-all duration-300"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </button>
        <button
          onClick={handleCopyLink}
          className={`p-2 rounded-md transition-all duration-300 ${
            copied 
              ? 'text-green-600 bg-green-50' 
              : 'text-muted-foreground hover:text-[#8b7355] hover:bg-[#8b7355]/10'
          }`}
          aria-label="Copy link"
        >
          <Link2 className="w-5 h-5" />
        </button>
        {copied && <span className="text-xs text-green-600">Copied!</span>}
      </div>
    </div>
  );
};

// Related Post Card (smaller version)
const RelatedPostCard = ({ post, index }: { post: BlogPost, index: number }) => (
  <Link 
    to={`/insights/${post.slug}`}
    className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
  >
    <div className="aspect-[16/9] bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 p-6">
        <AbstractGraphic variant={index} />
      </div>
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium tracking-[0.1em] uppercase text-accent">
          {post.category}
        </span>
        <span className="text-xs text-muted-foreground inline-flex items-center">
          <PrecisionNodeIcon />
          {post.readTime}
        </span>
      </div>
      <h4 className="font-heading text-base font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
        {post.title}
      </h4>
      <p className="text-xs text-muted-foreground line-clamp-2 flex-grow">
        {post.excerpt}
      </p>
    </div>
  </Link>
);

// Author Box Component
const AuthorBox = ({ author }: { author: BlogPost['author'] }) => (
  <div className="flex items-center gap-4 p-6 bg-secondary/30 rounded-lg mt-12">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center flex-shrink-0">
      <span className="text-xl font-heading font-light text-muted-foreground/60">
        {author.name.split(' ').map(n => n[0]).join('')}
      </span>
    </div>
    <div>
      <p className="font-heading font-semibold text-foreground">{author.name}</p>
      <p className="text-sm text-muted-foreground">{author.title}</p>
    </div>
  </div>
);

// CTA Section Component
const CTASection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error);
      }
    } catch {
      setStatus('error');
      setMessage('An unexpected error occurred.');
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-secondary/50 mt-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Get Strategic Intelligence
        </h3>
        <p className="text-muted-foreground mb-8">
          Curated frameworks and lessons learned from building AI and MarTech systems.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your corporate email"
            disabled={status === 'loading'}
            className="px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-accent transition-colors w-full sm:w-64"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-[#8b7355] text-white text-sm font-medium tracking-wide uppercase rounded-sm hover:bg-[#7a6548] transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {message && (
          <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

// Main Component
const InsightPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 3) : [];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20 px-4 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link 
            to="/insights"
            className="inline-flex items-center gap-2 text-[#8b7355] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Karn Insights</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://prateekkarn.com/insights/${post.slug}`} />
        <meta property="og:title" content={`${post.title} | Karn Insights`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://prateekkarn.com/insights/${post.slug}`} />
        <meta property="article:published_time" content={post.dateISO} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <article className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <Breadcrumb post={post} />

            {/* Post Header */}
            <header className="mb-8 sm:mb-12">
              {/* Category & Read Time */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground inline-flex items-center">
                  <PrecisionNodeIcon />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt/Subtitle */}
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Date & Author */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <time dateTime={post.dateISO}>{post.date}</time>
                <span>•</span>
                <span>By {post.author.name}</span>
              </div>
            </header>

            {/* Blog Content */}
            {post.content ? (
              <div className="prose prose-lg max-w-none mb-12 
                prose-headings:font-heading prose-headings:text-foreground 
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-foreground/85 prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-accent hover:prose-a:text-accent/80 prose-a:no-underline hover:prose-a:underline
                prose-li:text-foreground/85 prose-li:mb-2
                prose-ul:my-4 prose-ol:my-4
                prose-table:text-sm prose-table:w-full prose-table:border-collapse
                prose-th:text-foreground prose-th:font-semibold prose-th:text-left prose-th:p-3 prose-th:border prose-th:border-border prose-th:bg-secondary/30
                prose-td:text-foreground/80 prose-td:p-3 prose-td:border prose-td:border-border
                prose-blockquote:border-l-accent prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
                prose-code:text-accent prose-code:bg-secondary/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="prose prose-lg max-w-none mb-12">
                <div className="bg-secondary/30 rounded-lg p-8 sm:p-12 text-center">
                  <p className="text-muted-foreground italic">
                    Content coming soon...
                  </p>
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <ShareButtons post={post} />

            {/* Author Box */}
            <AuthorBox author={post.author} />
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="max-w-5xl mx-auto mt-16 sm:mt-20">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Continue Reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <RelatedPostCard key={relatedPost.id} post={relatedPost} index={index} />
                ))}
              </div>
            </section>
          )}
        </main>

        {/* CTA Section */}
        <CTASection />

        <Footer />
      </div>
    </>
  );
};

export default InsightPost;
