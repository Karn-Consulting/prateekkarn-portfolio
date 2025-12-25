import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { ArrowRight, ExternalLink, Zap, Globe, Code, Gauge } from 'lucide-react';

// Website data
const WEBSITES = [
  {
    id: 'karnconsulting',
    name: 'Karn Consulting',
    url: 'https://www.karnconsulting.co',
    image: '/website-karnconsulting.webp',
    description: 'AI & ML Solutions consulting firm website. Features a modern dark theme with animated hero section, case studies carousel, and technology stack showcase.',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    highlights: ['99/100 Performance Score', 'Sub-second Load Time', 'Mobile-First Design'],
    category: 'Corporate / Consulting'
  },
  {
    id: 'karncorporation',
    name: 'Karn Corporation',
    url: 'https://www.karncorporation.com',
    image: '/website-karncorporation.webp',
    description: 'Luxury corporate holding company website. Elegant dark design with gold accents, minimalist typography, and premium brand positioning.',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    highlights: ['99/100 Performance Score', 'Premium Brand Aesthetic', 'Optimized Core Web Vitals'],
    category: 'Corporate / Holdings'
  },
  {
    id: 'xulr21',
    name: 'B2B Strategy Executive',
    url: 'https://www.xulr21.rest',
    image: '/website-xulr21.webp',
    description: 'Executive personal brand website for a Managing Director of a global B2B consulting firm. Features strategic frameworks, government advisory mandates, and Fortune 500 case studies with a premium dark theme.',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Shadcn/UI'],
    highlights: ['99/100 Performance Score', 'Interactive Framework Tabs', 'Premium Executive Aesthetic'],
    category: 'Personal Brand / Executive'
  },
  {
    id: 'prateekkarn',
    name: 'Prateek Karn',
    url: 'https://www.prateekkarn.com',
    image: '/website-prateekkarn.webp',
    description: 'AI Business Architect portfolio website. Showcases MarTech systems, career trajectory, testimonials, and thought leadership content.',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    highlights: ['99/100 Performance Score', 'Dynamic Work Showcase', 'Integrated Blog System'],
    category: 'Personal Brand / Portfolio'
  }
];

const WebInfrastructure = () => {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#faf9f7]/95 backdrop-blur-sm border-b border-[#e8e6e1]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="font-heading text-xl text-[#1a1a1a] hover:text-[#8b7355] transition-colors"
          >
            Prateek Karn
          </Link>
          <Link 
            to="/mywork"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#8b7355] border border-[#8b7355] rounded-sm hover:bg-[#8b7355] hover:text-white transition-all duration-200"
          >
            ← Back to My Work
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#f5f4f2] to-[#faf9f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#8b8578] mb-4 block">
                Systems Architecture
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6 leading-tight">
                High-Velocity Web Infrastructure
              </h1>
              <p className="text-[#5a5a5a] text-base md:text-lg leading-relaxed mb-8">
                Conversion-first development prioritizing Core Web Vitals and sub-second load times. 
                These websites replace aesthetic-driven bloat with lean, performance-optimized architectures 
                that deliver measurable business outcomes.
              </p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-sm border border-[#e8e6e1]">
                  <div className="text-2xl md:text-3xl font-heading text-[#8b7355]">99/100</div>
                  <div className="text-xs text-[#8b8578] mt-1">Performance Score</div>
                </div>
                <div className="text-center p-4 bg-white rounded-sm border border-[#e8e6e1]">
                  <div className="text-2xl md:text-3xl font-heading text-[#8b7355]">&lt;1s</div>
                  <div className="text-xs text-[#8b8578] mt-1">Load Time</div>
                </div>
                <div className="text-center p-4 bg-white rounded-sm border border-[#e8e6e1]">
                  <div className="text-2xl md:text-3xl font-heading text-[#8b7355]">4</div>
                  <div className="text-xs text-[#8b8578] mt-1">Sites Deployed</div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vite', 'Vercel'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-[#5a5a5a] bg-[#f0eeeb] rounded-sm border border-[#e8e6e1]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <img 
                src="/work-web-infrastructure.png" 
                alt="Web Infrastructure" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white border-y border-[#e8e6e1]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl text-[#1a1a1a] mb-8 text-center">
            The Development Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#f5f4f2] rounded-full">
                <Zap className="w-6 h-6 text-[#8b7355]" />
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">Performance First</h3>
              <p className="text-sm text-[#5a5a5a]">Every decision optimizes for Core Web Vitals and real-world speed.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#f5f4f2] rounded-full">
                <Globe className="w-6 h-6 text-[#8b7355]" />
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">Global Edge</h3>
              <p className="text-sm text-[#5a5a5a]">Deployed on edge networks for sub-second response worldwide.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#f5f4f2] rounded-full">
                <Code className="w-6 h-6 text-[#8b7355]" />
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">Clean Architecture</h3>
              <p className="text-sm text-[#5a5a5a]">Type-safe, component-driven code that scales with business needs.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#f5f4f2] rounded-full">
                <Gauge className="w-6 h-6 text-[#8b7355]" />
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">Conversion Optimized</h3>
              <p className="text-sm text-[#5a5a5a]">Design decisions driven by user behavior and conversion data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Websites Showcase */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl text-[#1a1a1a] mb-4 text-center">
            Websites Built
          </h2>
          <p className="text-[#5a5a5a] text-center mb-12 max-w-2xl mx-auto">
            Each website is crafted with the same principles: blazing-fast performance, 
            clean aesthetics, and conversion-focused architecture.
          </p>

          <div className="space-y-16">
            {WEBSITES.map((website, index) => (
              <div 
                key={website.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Screenshot */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <a 
                    href={website.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="relative overflow-hidden rounded-sm shadow-lg border border-[#e8e6e1]">
                      <img 
                        src={website.image} 
                        alt={website.name}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-sm text-sm font-medium text-[#1a1a1a] flex items-center gap-2">
                          Visit Website <ExternalLink className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#8b8578] mb-2 block">
                    {website.category}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl text-[#1a1a1a] mb-4">
                    {website.name}
                  </h3>
                  <p className="text-[#5a5a5a] leading-relaxed mb-6">
                    {website.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-[#1a1a1a] mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {website.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#5a5a5a]">
                          <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-[#1a1a1a] mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {website.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs font-medium text-[#5a5a5a] bg-[#f0eeeb] rounded-sm border border-[#e8e6e1]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a 
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-[#8b7355] hover:text-[#6d5a43] transition-colors"
                  >
                    Visit {website.name} <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">
            Need a High-Performance Website?
          </h2>
          <p className="text-[#a0a0a0] mb-8 max-w-2xl mx-auto">
            Whether it's a corporate site, personal brand, or product landing page, 
            I build websites that load fast, convert better, and scale with your business.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-[#8b7355] text-white font-medium rounded-sm hover:bg-[#6d5a43] transition-colors"
          >
            Request a Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebInfrastructure;
