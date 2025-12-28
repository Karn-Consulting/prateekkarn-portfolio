import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TabNavigation } from '@/components/TabNavigation';
import { HeroCard } from '@/components/HeroCard';
import { GridCard } from '@/components/GridCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, Clock } from 'lucide-react';

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
        outcome: 'Case study in development — launching Q1 2025.',
        techStack: ['LangChain', 'OpenAI', 'Automation', 'Real Estate'],
        isComingSoon: true,
        image: '/images/real-estate-ai-new.jpg'
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
        image: '/work-executive-dashboard-new.png',
        link: '/mywork/executive-dashboard'
      },
      {
        title: 'Predictive Email Marketing — 50% Open Rate',
        context: 'Coming Soon',
        description: 'Machine learning model predicting optimal send times, subject lines, and audience segments. Transforming email from batch-and-blast to precision-targeted communication.',
        outcome: 'Case study in development — achieved 50% open rates in pilot.',
        techStack: ['Python', 'ML Models', 'Email Automation', 'Predictive Analytics'],
        isComingSoon: true,
        image: '/images/predictive-email-new.jpg'
      }
    ]
  },
  'growth-engineering': {
    hero: {
      title: 'Meta Ads Performance Case Study — $40K/mo Scaling',
      context: 'Scale & Efficiency',
      description: 'Structured creative testing framework + broad targeting with CBO to manage creative fatigue. Scaling spend beyond $10k/mo caused CPA to skyrocket due to audience saturation.',
      impact: 'Scaled to $40k/mo while maintaining stable ROAS, unlocking new growth tier.',
      techStack: ['Meta Ads', 'GA4', 'Google Sheets', 'Looker'],
      ctaText: 'View Case Study',
      link: '/mywork/meta-ads-performance',
      problem: 'Scaling spend beyond $10k/mo caused CPA to skyrocket due to audience saturation.',
      system: 'Structured creative testing framework + broad targeting with CBO to manage creative fatigue.',
      outcome: 'Scaled to $40k/mo while maintaining stable ROAS, unlocking new growth tier.',
      logoImage: '/images/meta-ads-new.jpg'
    },
    grid: []
  }
};

// Coming Soon Card Component
const ComingSoonCard = ({ item }: { item: any }) => (
  <div className="bg-white/60 rounded-lg border border-dashed border-[#8b7355]/40 relative overflow-hidden">
    {/* Image */}
    {item.image && (
      <div className="w-full aspect-video overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover opacity-70"
        />
      </div>
    )}
    
    <div className="p-6">
      {/* Coming Soon Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-white/90 rounded-full shadow-sm">
        <Clock className="w-3.5 h-3.5 text-[#8b7355]" />
        <span className="text-xs font-medium text-[#8b7355] uppercase tracking-wider">Coming Soon</span>
      </div>
      
      {/* Context */}
      <span className="text-xs font-medium text-[#8b7355]/60 uppercase tracking-wider">
        {item.context}
      </span>
      
      {/* Title */}
      <h3 className="font-heading text-lg font-semibold text-[#1a1a1a]/70 mt-2 mb-3">
        {item.title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-[#5a5a5a]/70 leading-relaxed mb-4">
        {item.description}
      </p>
      
      {/* Outcome */}
      <div className="text-sm text-[#5a5a5a]/60 italic mb-4">
        {item.outcome}
      </div>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {item.techStack.map((tech: string, index: number) => (
          <span 
            key={index}
            className="px-2.5 py-1 text-xs bg-[#f5f5f0]/80 text-[#5a5a5a]/60 rounded-full border border-[#e5e5dc]/60"
          >
            {tech}
          </span>
        ))}
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
  );
}
