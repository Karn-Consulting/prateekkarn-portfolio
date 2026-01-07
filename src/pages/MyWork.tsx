import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TabNavigation } from '@/components/TabNavigation';
import { HeroCard } from '@/components/HeroCard';
import { GridCard } from '@/components/GridCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, Clock, ArrowUpRight } from 'lucide-react';

// 3-PILLAR STRUCTURE - Only 4 live case studies + 2 coming soon
const TABS = [
  {
    id: 'intelligent-systems',
    label: 'Intelligent Systems',
    description: 'AI-powered decision engines and diagnostic frameworks that prevent costly mistakes and accelerate strategic clarity.'
  },
  {
    id: 'data-architecture',
    label: 'Data Architecture',
    description: 'From raw data to actionable insights — unified pipelines, attribution systems, and executive dashboards.'
  },
  {
    id: 'growth-engineering',
    label: 'Growth Engineering',
    description: 'Scaling with precision — performance marketing systems and conversion optimization at scale.'
  }
];

// CONTENT - 4 LIVE case studies + 2 COMING SOON
const CONTENT = {
  'intelligent-systems': {
    hero: {
      title: 'Enterprise AI Preparedness Check',
      context: 'Strategic Diagnostic Tool',
      description: 'A multi-dimensional scoring model evaluating data governance, talent density, and technical debt. Organizations often rush into AI pilots without assessing infrastructure maturity, leading to 80% failure rates.',
      impact: 'Prevented premature $200k investment for a mid-market firm by identifying critical data gaps first.',
      techStack: ['Python', 'Survey Logic', 'Scoring Models', 'Visualization'],
      ctaText: 'Try the Assessment',
      link: '/mywork/enterprise-ai-preparedness',
      logoImage: '/work-ai-preparedness.png',
      problem: 'Organizations often rush into AI pilots without assessing infrastructure maturity, leading to 80% failure rates.',
      system: 'A multi-dimensional scoring model evaluating data governance, talent density, and technical debt.',
      outcome: 'Prevented premature $200k investment for a mid-market firm by identifying critical data gaps first.'
    },
    grid: [
      {
        title: 'Exec Venture Gauge',
        context: 'Investment Decision Support',
        description: 'Risk-adjusted financial modeling tool helping senior leaders evaluate whether AI initiatives will deliver measurable business value. Translates strategic assumptions into NPV, IRR, payback period, and clear funding signals.',
        outcome: 'Enabled executive teams to make informed go/no-go decisions on AI investments with quantified risk exposure.',
        techStack: ['React', 'TypeScript', 'Financial Modeling', 'Decision Theory'],
        problem: 'Senior leaders struggle to evaluate AI investments beyond pilot success, lacking risk-adjusted financial frameworks.',
        system: 'Decision-support tool producing executive-ready outputs including NPV, IRR, payback period, and confidence indicators.',
        image: '/work-exec-venture-gauge.png',
        link: '/mywork/exec-venture-gauge'
      },
      {
        title: 'AI Agentic Workflow for Real Estate',
        context: 'Coming Soon',
        description: 'Autonomous AI agents orchestrating property research, lead qualification, and market analysis. Reducing manual research time while improving deal flow quality.',
        outcome: 'Case study in development — launching Q1 2026.',
        techStack: ['LangChain', 'OpenAI', 'Automation', 'Real Estate'],
        isComingSoon: true,
        image: '/images/real-estate-ai-v2.webp'
      }
    ]
  },
  'data-architecture': {
    hero: {
      title: 'End-to-End Marketing Attribution System',
      context: 'Data Infrastructure',
      description: 'Unified data pipeline ingesting API data into BigQuery, normalized for cross-channel comparison. Fragmented ad data across Meta, Google, and LinkedIn made true ROAS calculation impossible.',
      impact: 'Revealed true customer acquisition cost, shifting 30% of budget to under-credited high-performing channels.',
      techStack: ['Python', 'SQL', 'BigQuery', 'Looker'],
      ctaText: 'View Case Study',
      link: '/mywork/end-to-end-attribution',
      logoImage: '/work-attribution.png',
      problem: 'Fragmented ad data across Meta, Google, and LinkedIn made true ROAS calculation impossible.',
      system: 'Unified data pipeline ingesting API data into BigQuery, normalized for cross-channel comparison.',
      outcome: 'Revealed true customer acquisition cost, shifting 30% of budget to under-credited high-performing channels.'
    },
    grid: [
      {
        title: 'Executive Marketing Command Dashboard',
        context: 'C-Suite Reporting',
        description: 'Centralized Looker Studio dashboard aggregating spend, leads, and revenue in real-time. CEO needed a single view of growth health without logging into 5 different platforms.',
        outcome: 'Became the default Monday morning meeting screen for the leadership team.',
        techStack: ['Looker', 'BigQuery', 'SQL'],
        problem: 'CEO needed a single view of growth health without logging into 5 different platforms.',
        system: 'Centralized Looker Studio dashboard aggregating spend, leads, and revenue in real-time.',
        image: '/work-executive-dashboard-home.png',
        link: '/mywork/executive-dashboard'
      },
      {
        title: 'BOFU Intent Intelligence System — 80% Peak Open Rate',
        context: 'Revenue Architecture',
        description: 'AI-driven BOFU intent intelligence system that transformed email engagement into prioritized sales outreach for ET 500 and publicly traded Indian enterprises. Email functioned as a decision sensor, while sales acted as the conversion actuator at the moment of peak intent.',
        outcome: '80% peak open rate | 2 inbound high-value B2B leads from ET 500 companies | 12 sales conversations initiated via intent-triggered outreach',
        techStack: ['Intent Signals', 'Email Automation', 'Sales Enablement', 'Revenue Intelligence'],
        problem: 'BOFU prospects were engaging passively but not initiating conversations. Sales lacked visibility into who was genuinely ready to engage.',
        system: 'Revenue intelligence loop combining behavioral email signals, timing-based prioritization, and intent-triggered sales outreach.',
        image: '/images/predictive-email-v3.webp',
        link: '/mywork/bofu-intent-intelligence'
      }
    ]
  },
  'growth-engineering': {
    hero: {
      title: 'Meta Ads Performance Case Study — $40K/mo Turnaround',
      context: 'Profitable Turnaround',
      description: 'Re-architected a $40K/month account struggling below break-even. Implemented proper CBO structure, separated prospecting from retargeting, and applied cost cap optimization.',
      impact: 'Achieved 2.37 ROAS within 2 weeks, turning an unprofitable account into a growth engine.',
      techStack: ['Meta Ads', 'GA4', 'Google Sheets', 'Looker'],
      ctaText: 'View Case Study',
      link: '/mywork/meta-ads-performance',
      problem: 'Inherited a $40K/mo account with ROAS below 1.75 break-even threshold due to poor CBO setup.',
      system: 'Re-architected campaign structure with ASC+ cost caps, clean prospecting, and multi-layer retargeting.',
      outcome: 'Achieved 2.37 ROAS within 2 weeks, with top campaigns hitting 3.59 ROAS.',
      logoImage: '/images/meta-ads-new.jpg'
    },
    grid: [
      {
        title: 'Gulmohar Heights — ₹30 Cr/Month Revenue Engine',
        context: '360° Real Estate Marketing',
        description: 'Comprehensive omnichannel marketing strategy for luxury real estate in Jaipur, combining digital precision with offline brand building and AI-driven lead nurturing.',
        outcome: '₹30 Cr monthly revenue target with ~97x projected ROI at ~1% marketing load.',
        techStack: ['Meta Ads', 'Google Ads', 'AI Automation', 'Omnichannel'],
        problem: 'Design a 360° marketing strategy capable of generating ₹30 Cr in monthly sales through optimized digital + offline mix.',
        system: 'Multi-channel architecture with AI-powered voice calls, WhatsApp nurturing, and integrated offline media.',
        image: '/case-studies/gulmohar-heights/chordia-logo.png',
        link: '/mywork/gulmohar-heights'
      }
    ]
  }
};

// Coming Soon Card Component - matches GridCard exactly with Coming Soon badge
const ComingSoonCard = ({ item }: { item: any }) => (
  <div className="group relative bg-white rounded-sm overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 hover:-translate-y-1 border border-[#e8e6e1] h-full flex flex-col">
    {/* Image Section - matching GridCard aspect ratio */}
    <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] bg-[#f0ede8] overflow-hidden flex-shrink-0">
      {item.image ? (
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#e8e4dc] to-[#d4cfc7] flex items-center justify-center">
          <span className="text-[#a09a90] text-[10px] sm:text-xs font-medium">Image Placeholder</span>
        </div>
      )}
      {/* Coming Soon Badge - positioned on image */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-md border border-[#e8e6e1]">
        <Clock className="w-3.5 h-3.5 text-[#8b7355]" />
        <span className="text-[10px] sm:text-xs font-semibold text-[#8b7355] uppercase tracking-wider">Coming Soon</span>
      </div>
    </div>

    {/* Content Section - matching GridCard exactly */}
    <div className="p-4 sm:p-5 flex flex-col flex-grow">
      {/* Category with Arrow - matching GridCard */}
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.12em] sm:tracking-[0.15em] uppercase text-[#8b8578]">
          {item.context}
        </span>
        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#8b8578] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
      </div>

      {/* Title - matching GridCard */}
      <h4 className="font-heading text-base sm:text-lg text-[#1a1a1a] mb-2 sm:mb-3 leading-snug group-hover:text-[#4a4a4a] transition-colors">
        {item.title}
      </h4>

      {/* Description - matching GridCard */}
      <p className="font-body text-[#6a6a6a] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
        {item.description}
      </p>

      {/* Outcome - matching GridCard with label */}
      <div className="mb-3 sm:mb-4">
        <span className="text-[10px] sm:text-xs font-medium text-[#1a1a1a]">Outcome: </span>
        <span className="text-[10px] sm:text-xs text-[#6a6a6a] line-clamp-2">{item.outcome}</span>
      </div>

      {/* Tech Stack Tags - matching GridCard exactly */}
      <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-3 border-t border-[#e8e6e1] mt-auto">
        {item.techStack.slice(0, 3).map((tech: string, index: number) => (
          <span 
            key={index}
            className="inline-flex items-center px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] font-medium uppercase tracking-wider bg-[#f5f4f1] text-[#6a6a6a] rounded-sm"
          >
            {tech}
          </span>
        ))}
        {item.techStack.length > 3 && (
          <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] font-medium text-[#8b8578]">
            +{item.techStack.length - 3}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default function MyWork() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCase, setSelectedCase] = useState<any>(null);

  // Get tab from URL hash or default to 'intelligent-systems'
  const getTabFromHash = () => {
    const hash = location.hash.replace('#', '');
    const validTabs = TABS.map(t => t.id);
    return validTabs.includes(hash) ? hash : 'intelligent-systems';
  };

  const [activeTab, setActiveTab] = useState(getTabFromHash);

  // Sync URL hash with active tab
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const validTabs = TABS.map(t => t.id);
    if (validTabs.includes(hash) && hash !== activeTab) {
      setActiveTab(hash);
    }
  }, [location.hash]);

  // Update URL when tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    navigate(`/mywork#${tabId}`, { replace: true });
  };

  const currentContent = CONTENT[activeTab as keyof typeof CONTENT];

  return (
    <>
      <Helmet>
        <title>My Work | Prateek Karn - AI Business Architect</title>
        <meta name="description" content="A curated body of AI decision frameworks, data systems, and growth architectures — organized by strategic impact. Case studies from Prateek Karn." />
        <link rel="canonical" href="https://prateekkarn.com/mywork" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prateekkarn.com/mywork" />
        <meta property="og:title" content="My Work | Prateek Karn - AI Business Architect" />
        <meta property="og:description" content="A curated body of AI decision frameworks, data systems, and growth architectures — organized by strategic impact." />
        <meta property="og:image" content="https://prateekkarn.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Work | Prateek Karn" />
        <meta name="twitter:description" content="AI decision frameworks, data systems, and growth architectures." />
      </Helmet>
      <div className="min-h-screen bg-[#f5f5f0]">
        <Header />
      
      {/* Hero Section */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#1a1a1a] mb-4 sm:mb-5 md:mb-6">
            My Work
          </h1>
          <p className="font-body text-[#5a5a5a] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
            A curated body of AI decision frameworks, data systems, and growth architectures — organized by strategic impact.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <TabNavigation 
        tabs={TABS} 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div className="space-y-6 sm:space-y-8 md:space-y-12 animate-in fade-in duration-500">
          
          {/* Hero Card - Featured Item */}
          {currentContent?.hero && (
            <HeroCard
              title={currentContent.hero.title}
              context={currentContent.hero.context}
              description={currentContent.hero.description}
              impact={currentContent.hero.impact}
              ctaText={currentContent.hero.ctaText}
              link={currentContent.hero.link}
              logoImage={currentContent.hero.logoImage}
              imagePlaceholder={currentContent.hero.image}
              onClick={currentContent.hero.link ? undefined : () => setSelectedCase(currentContent.hero)}
            />
          )}

          {/* Grid Cards */}
          {currentContent?.grid && currentContent.grid.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {currentContent.grid.map((item, index) => {
                // Render Coming Soon card
                if (item.isComingSoon) {
                  return <ComingSoonCard key={index} item={item} />;
                }

                const cardContent = (
                  <GridCard
                    key={index}
                    title={item.title}
                    context={item.context}
                    description={item.description}
                    outcome={item.outcome}
                    techStack={item.techStack}
                    image={item.image}
                    onClick={item.link ? undefined : () => setSelectedCase(item)}
                  />
                );

                // If item has a link, wrap in anchor
                if (item.link) {
                  return (
                    <a 
                      key={index} 
                      href={item.link}
                      className="block"
                    >
                      {cardContent}
                    </a>
                  );
                }

                return cardContent;
              })}
            </div>
          )}
        </div>
      </main>

      {/* Case Study Modal */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-2xl bg-white border-[#e5e5dc]">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[#8b7355] uppercase tracking-wider">
                {selectedCase?.context}
              </span>
              <button 
                onClick={() => setSelectedCase(null)}
                className="p-1 hover:bg-[#f5f5f0] rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-[#5a5a5a]" />
              </button>
            </div>
            <DialogTitle className="font-heading text-2xl text-[#1a1a1a] pr-8">
              {selectedCase?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 pt-4">
            {/* Problem */}
            <div>
              <h4 className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-2">The Problem</h4>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">{selectedCase?.problem}</p>
            </div>
            
            {/* System */}
            <div>
              <h4 className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-2">The System</h4>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">{selectedCase?.system}</p>
            </div>
            
            {/* Outcome */}
            <div>
              <h4 className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-2">The Outcome</h4>
              <p className="text-[#2a2a2a] text-sm leading-relaxed font-medium">{selectedCase?.outcome}</p>
            </div>
            
            {/* Tech Stack */}
            {selectedCase?.techStack && (
              <div className="pt-4 border-t border-[#e5e5dc]">
                <div className="flex flex-wrap gap-2">
                  {selectedCase.techStack.map((tech: string, index: number) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 text-xs bg-[#f5f5f0] text-[#5a5a5a] rounded-full border border-[#e5e5dc]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
      </div>
    </>
  );
}
