import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { BLOG_POSTS } from "@/data/blogPosts";

// Get first 3 posts for homepage display
const HOMEPAGE_POSTS = BLOG_POSTS.slice(0, 3);

// Abstract architectural graphic placeholder
const AbstractGraphic = ({ variant = 0 }: { variant?: number }) => {
  const patterns = [
    // Digital Nervous System pattern for Kinetic Enterprise
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {/* Central brain/core node */}
      <circle cx="100" cy="60" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <circle cx="100" cy="60" r="8" fill="currentColor" fillOpacity="0.3" className="text-accent" />
      {/* Pulsing rings */}
      <circle cx="100" cy="60" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 2" className="text-accent/40" />
      <circle cx="100" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 4" className="text-accent/30" />
      {/* Neural pathways */}
      <path d="M 100 42 L 100 20 L 140 15" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 100 42 L 100 20 L 60 15" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 118 60 L 160 60 L 180 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 118 60 L 160 60 L 180 80" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 82 60 L 40 60 L 20 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 82 60 L 40 60 L 20 80" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 100 78 L 100 100 L 140 105" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      <path d="M 100 78 L 100 100 L 60 105" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/70" />
      {/* Sensor nodes */}
      <circle cx="140" cy="15" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="60" cy="15" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="180" cy="40" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="180" cy="80" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="20" cy="40" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="20" cy="80" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="140" cy="105" r="4" fill="currentColor" className="text-accent/60" />
      <circle cx="60" cy="105" r="4" fill="currentColor" className="text-accent/60" />
    </svg>,
    // Attribution Flow pattern - broken paths converging
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {/* Multiple broken/fragmented paths */}
      <path d="M 20 30 Q 50 30 60 50" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent/60" strokeDasharray="8 4" />
      <path d="M 20 60 Q 50 55 70 60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent/70" strokeDasharray="6 3" />
      <path d="M 20 90 Q 50 85 65 70" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent/50" strokeDasharray="10 5" />
      {/* Central convergence point */}
      <circle cx="100" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
      <circle cx="100" cy="60" r="6" fill="currentColor" className="text-accent/40" />
      {/* Converging solid paths */}
      <path d="M 70 50 L 85 55" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <path d="M 75 60 L 85 60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <path d="M 70 70 L 85 65" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      {/* Output path */}
      <path d="M 115 60 L 180 60" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
      <polygon points="180,55 190,60 180,65" fill="currentColor" className="text-accent" />
      {/* Question marks representing uncertainty */}
      <text x="35" y="45" className="text-accent/40" fontSize="12" fontFamily="serif">?</text>
      <text x="40" y="75" className="text-accent/40" fontSize="12" fontFamily="serif">?</text>
    </svg>,
    // Dashboard/Grid pattern with data points
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {/* Grid structure */}
      <rect x="25" y="20" width="70" height="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/40" />
      <rect x="105" y="20" width="70" height="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/40" />
      <rect x="25" y="70" width="70" height="35" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/40" />
      <rect x="105" y="70" width="70" height="35" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/40" />
      {/* Data visualization elements */}
      <line x1="35" y1="50" x2="45" y2="35" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <line x1="45" y1="35" x2="55" y2="42" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <line x1="55" y1="42" x2="65" y2="30" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <line x1="65" y1="30" x2="75" y2="38" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <line x1="75" y1="38" x2="85" y2="28" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      {/* Bar chart */}
      <rect x="115" y="45" width="8" height="10" fill="currentColor" className="text-accent/60" />
      <rect x="128" y="38" width="8" height="17" fill="currentColor" className="text-accent/70" />
      <rect x="141" y="32" width="8" height="23" fill="currentColor" className="text-accent/80" />
      <rect x="154" y="28" width="8" height="27" fill="currentColor" className="text-accent" />
      {/* Dots representing data points */}
      <circle cx="45" cy="85" r="4" fill="currentColor" className="text-accent/50" />
      <circle cx="60" cy="90" r="6" fill="currentColor" className="text-accent/70" />
      <circle cx="78" cy="82" r="5" fill="currentColor" className="text-accent/60" />
      {/* Connecting lines in bottom right */}
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

// Precision Node Icon - Technical "System Origin Point" indicator
// Designed to blend seamlessly with typography while maintaining the technical aesthetic
const PrecisionNodeIcon = () => (
  <svg 
    width="8" 
    height="8" 
    viewBox="0 0 8 8" 
    className="mr-[6px] flex-shrink-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
    style={{ marginTop: '0px' }}
  >
    {/* Outer Circle - ultra-thin stroke matching muted text color */}
    <circle 
      cx="4" 
      cy="4" 
      r="3.2" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.6" 
      className="text-[#9a9590] transition-all duration-300 group-hover:stroke-[0.8]"
    />
    {/* Inner Circle - subtle fill matching the accent/brand tone */}
    <circle 
      cx="4" 
      cy="4" 
      r="1.3" 
      fill="currentColor" 
      className="text-[#8b7355] transition-transform duration-300 origin-center group-hover:scale-[1.15]"
    />
  </svg>
);

const ArticleCard = ({ post, index }: { post: typeof HOMEPAGE_POSTS[0], index: number }) => (
  <article className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500 flex flex-col">
    {/* Abstract Graphic */}
    <div className="aspect-[16/10] bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 p-8">
        <AbstractGraphic variant={index} />
      </div>
    </div>
    
    {/* Content */}
    <div className="p-4 sm:p-6 flex flex-col flex-grow">
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
      
      {/* Title with min-height for consistent alignment */}
      <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3 leading-snug min-h-[3.5rem] line-clamp-2">
        {post.title}
      </h3>
      
      {/* Excerpt - limited to 2 lines */}
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4 flex-grow">
        {post.excerpt}
      </p>
      
      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
        <span className="text-xs text-muted-foreground">
          {post.date}
        </span>
        {/* READ button links directly to individual blog post */}
        <Link 
          to={`/insights/${post.slug}`}
          className="
            group/btn
            inline-flex items-center
            px-4 py-2
            text-[#8b7355] 
            text-xs font-semibold tracking-wide uppercase
            border border-[#8b7355]
            rounded-sm
            transition-all duration-300
            hover:bg-[#8b7355]
            hover:text-white
          "
          style={{
            letterSpacing: '0.15em'
          }}
        >
          <span className="tracking-[0.15em] transition-all duration-300">
            READ
          </span>
          <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  </article>
);

// Noise texture overlay component
const NoiseOverlay = () => (
  <div 
    className="absolute inset-0 pointer-events-none opacity-[0.02]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
    }}
  />
);

const KarnInsightsSection = () => {
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
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
    } catch (error) {
      setStatus('error');
      setMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12 md:mb-16">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-4">
              Karn Insights
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
              Frameworks, strategies, and lessons learned from building AI and MarTech systems.
            </p>
          </div>
          {/* View All Insights - Links to master insights page */}
          <Link 
            to="/insights"
            className="
              hidden sm:inline-flex
              group
              items-center
              px-6 sm:px-8 py-3 sm:py-4
              text-[#8b7355] 
              text-sm font-semibold tracking-wide uppercase
              border border-[#8b7355]
              rounded-sm
              cursor-pointer
              transition-all duration-300
              hover:bg-[#8b7355]
              hover:text-white
            "
          >
            <span className="tracking-[0.15em]">View All Insights</span>
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* 3-Column Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {HOMEPAGE_POSTS.map((post, index) => (
            <ArticleCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* View All Insights - Mobile only, shown below cards */}
        <div className="flex justify-center mt-8 sm:hidden">
          <Link 
            to="/insights"
            className="
              group
              inline-flex items-center
              px-6 py-3
              text-[#8b7355] 
              text-sm font-semibold tracking-wide uppercase
              border border-[#8b7355]
              rounded-sm
              cursor-pointer
              transition-all duration-300
              hover:bg-[#8b7355]
              hover:text-white
            "
          >
            <span className="tracking-[0.15em]">View All Insights</span>
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Consolidated Footer - Premium Quiet Luxury Design */}
        <footer className="mt-16 sm:mt-20 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
          {/* Noise texture overlay */}
          <NoiseOverlay />
          
          <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
            {/* Two Column Layout */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Column - Contact Info */}
                <div className="text-center lg:text-left">
                  {/* PK Logo */}
                  <div className="mb-4">
                    <svg 
                      width="64" 
                      height="64" 
                      viewBox="0 0 100 100" 
                      className="mx-auto lg:mx-0"
                      aria-label="Prateek Karn Logo"
                    >
                      {/* P letter */}
                      <path 
                        d="M20 15 L20 85 M20 15 L45 15 C60 15 65 25 65 35 C65 45 60 55 45 55 L20 55" 
                        fill="none" 
                        stroke="#c9b896" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      {/* K letter */}
                      <path 
                        d="M45 15 L45 85 M75 15 L45 50 M45 50 L80 85" 
                        fill="none" 
                        stroke="#c9b896" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#f5f5dc] mb-6 leading-relaxed tracking-wide">
                    Architect Your Advantage
                  </h3>
                  
                  {/* Contact Links */}
                  <div className="flex flex-col gap-4">
                    <a 
                      href="mailto:prateek.karn@prateekkarn.com"
                      className="inline-flex items-center gap-3 text-[#c9b896] hover:text-[#c9b896] hover:brightness-125 transition-all duration-300 text-sm sm:text-base justify-center lg:justify-start"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="font-medium">prateek.karn@prateekkarn.com</span>
                    </a>
                    
                    <a 
                      href="https://linkedin.com/in/prateekkarn" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-[#c9b896] hover:text-[#c9b896] hover:brightness-125 transition-all duration-300 text-sm sm:text-base justify-center lg:justify-start"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Right Column - Newsletter */}
                <div className="text-center lg:text-left">
                  <h4 className="font-heading text-xl sm:text-2xl font-normal text-[#f5f5dc] mb-4 leading-relaxed tracking-wide">
                    Strategic Intelligence Newsletter
                  </h4>
                  
                  <p className="text-white/50 text-sm leading-[1.8] mb-6 max-w-md mx-auto lg:mx-0">
                    Curated frameworks and lessons learned from building AI and MarTech systems.
                  </p>
                  
                  {/* Input & CTA */}
                  <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="relative w-full sm:w-64">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your corporate email"
                          disabled={status === 'loading'}
                          className="w-full bg-[#2a2a2a] border border-[#444] text-white/90 placeholder-white/40 focus:outline-none focus:border-[#c9b896] transition-colors py-3 px-4 text-center sm:text-left font-heading text-sm tracking-wide rounded disabled:opacity-50"
                        />
                      </div>
                      
                      <button 
                        type="submit"
                        disabled={status === 'loading'}
                        className="group px-5 py-3 bg-transparent border border-[#c9b896] hover:bg-[#c9b896] text-[#c9b896] hover:text-[#1a1a1a] transition-all duration-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="text-xs font-medium tracking-[0.2em] uppercase">
                          {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                        </span>
                      </button>
                    </div>
                    
                    {/* Status Message */}
                    {message && (
                      <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {message}
                      </p>
                    )}
                  </form>
                </div>
              </div>

              {/* Divider Line */}
              <div className="border-t border-[#333] mt-12 pt-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Copyright */}
                  <p className="text-white/50 text-xs sm:text-sm">
                    © 2025 Prateek Karn. All rights reserved.
                  </p>
                  
                  {/* Legal Links */}
                  <div className="flex items-center gap-4 text-xs sm:text-sm">
                    <Link 
                      to="/privacy-policy" 
                      className="text-white/50 hover:text-[#c9b896] transition-colors duration-300"
                    >
                      Privacy Policy
                    </Link>
                    <span className="text-white/30">|</span>
                    <Link 
                      to="/terms-and-conditions" 
                      className="text-white/50 hover:text-[#c9b896] transition-colors duration-300"
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default KarnInsightsSection;
