import { Link } from 'react-router-dom';
import { Linkedin, Mail } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Kinetic Enterprise",
    excerpt: "Building the Self-Healing Business through a High-Resolution Digital Nervous System.",
    category: "AI Strategy",
    readTime: "14 min read",
    date: "Dec 18, 2024"
  },
  {
    id: 2,
    title: "The Death of Last-Click Attribution: What Comes Next",
    excerpt: "iOS 14.5 didn't just change privacy—it exposed how fragile our measurement foundations were. Here's how to build attribution systems that survive.",
    category: "Marketing Analytics",
    readTime: "6 min read",
    date: "Dec 12, 2024"
  },
  {
    id: 3,
    title: "Building Executive Dashboards That Actually Get Used",
    excerpt: "Most BI projects fail not because of bad data, but because of bad design. The difference between dust and decisions comes down to these principles.",
    category: "Data Visualization",
    readTime: "5 min read",
    date: "Dec 5, 2024"
  }
];

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
      {/* Endpoint nodes */}
      <circle cx="140" cy="15" r="4" fill="currentColor" className="text-accent" />
      <circle cx="60" cy="15" r="4" fill="currentColor" className="text-accent" />
      <circle cx="180" cy="40" r="4" fill="currentColor" className="text-accent" />
      <circle cx="180" cy="80" r="4" fill="currentColor" className="text-accent" />
      <circle cx="20" cy="40" r="4" fill="currentColor" className="text-accent" />
      <circle cx="20" cy="80" r="4" fill="currentColor" className="text-accent" />
      <circle cx="140" cy="105" r="4" fill="currentColor" className="text-accent" />
      <circle cx="60" cy="105" r="4" fill="currentColor" className="text-accent" />
    </svg>,
    // Wave pattern
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <path d="M 0 60 Q 50 30 100 60 T 200 60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <path d="M 0 75 Q 50 45 100 75 T 200 75" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/50" />
      <path d="M 0 45 Q 50 15 100 45 T 200 45" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/50" />
      <circle cx="50" cy="45" r="4" fill="currentColor" className="text-accent" />
      <circle cx="150" cy="75" r="4" fill="currentColor" className="text-accent" />
    </svg>,
    // Nodes pattern
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
      <circle cx="100" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
      <circle cx="160" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
      <circle cx="60" cy="90" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
      <circle cx="140" cy="90" r="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" className="text-accent" />
      <line x1="48" y1="40" x2="92" y2="32" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
      <line x1="108" y1="32" x2="152" y2="48" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
      <line x1="44" y1="48" x2="56" y2="82" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
      <line x1="68" y1="88" x2="132" y2="88" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
      <line x1="156" y1="58" x2="144" y2="82" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
    </svg>
  ];
  
  return (
    <div className="w-full h-full bg-secondary/50 flex items-center justify-center p-4">
      {patterns[variant % patterns.length]}
    </div>
  );
};

const ArticleCard = ({ post, index }: { post: typeof BLOG_POSTS[0]; index: number }) => (
  <article className="group flex flex-col h-full bg-card border border-border rounded-none overflow-hidden transition-all duration-300 hover:shadow-elevation hover:border-accent/30">
    {/* Image Placeholder - Rectangular */}
    <div className="relative h-40 sm:h-48 overflow-hidden">
      <AbstractGraphic variant={index} />
    </div>
    
    {/* Content */}
    <div className="p-5 sm:p-6 flex flex-col flex-grow">
      {/* Category & Read Time */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-[0.15em] text-accent font-medium">
          {post.category}
        </span>
        <span className="text-xs text-muted-foreground">
          {post.readTime}
        </span>
      </div>
      
      {/* Headline */}
      <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2 min-h-[3.5rem]">
        {post.title}
      </h3>
      
      {/* Summary - 2 lines */}
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
        {post.excerpt}
      </p>
      
      {/* Date & Read Button with Sophisticated Hover */}
      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
        <span className="text-xs text-muted-foreground">{post.date}</span>
        
        {/* Read Link - Matches View My Work button hover behavior */}
        <span 
          className="
            relative inline-flex items-center
            text-[#9C8B6B]
            text-xs font-medium tracking-[0.12em] uppercase
            px-3 py-1.5
            border border-[#9C8B6B]
            rounded-sm
            cursor-pointer
            transition-all duration-300
            group-hover:opacity-80
            group-hover:text-white
            group-hover:translate-x-[2px]
          "
          style={{
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <span className="tracking-[0.15em] transition-all duration-300">
            READ
          </span>
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
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
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
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
          <Link 
            to="/insights"
            className="
              group
              inline-flex items-center
              px-6 sm:px-8 py-3 sm:py-4
              text-[#9C8B6B] 
              text-sm font-semibold tracking-wide uppercase
              border border-[#9C8B6B]
              rounded-sm
              cursor-pointer
              transition-all duration-300
              hover:opacity-80
              hover:text-white
            "
          >
            <span className="tracking-[0.15em]">View All Insights</span>
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* 3-Column Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-10">
          {BLOG_POSTS.map((post, index) => (
            <ArticleCard key={post.id} post={post} index={index} />
          ))}
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
                  <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#f5f5dc] mb-6 leading-relaxed tracking-wide">
                    Ready for Intelligent Growth?
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
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="relative w-full sm:w-64">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-[#2a2a2a] border border-[#444] text-white/90 placeholder-white/40 focus:outline-none focus:border-[#c9b896] transition-colors py-3 px-4 text-center sm:text-left font-heading text-sm tracking-wide rounded"
                      />
                    </div>
                    
                    <button className="group px-5 py-3 bg-transparent border border-[#c9b896] hover:bg-[#c9b896] text-[#c9b896] hover:text-[#1a1a1a] transition-all duration-300 rounded">
                      <span className="text-xs font-medium tracking-[0.2em] uppercase">
                        SUBSCRIBE
                      </span>
                    </button>
                  </div>
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
                  <div className="flex items-center gap-10 text-xs sm:text-sm">
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
