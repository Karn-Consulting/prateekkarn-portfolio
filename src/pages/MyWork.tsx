import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TabNavigation } from '@/components/TabNavigation';
import { HeroCard } from '@/components/HeroCard';
import { GridCard } from '@/components/GridCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X } from 'lucide-react';

// NEW 3-PILLAR STRUCTURE
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

// CONSOLIDATED CONTENT - Only high-value case studies
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
        title: 'AI vs Automation Decision Matrix',
        context: 'Operational Strategy',
        description: 'A 2x2 decision framework categorizing tasks by complexity and variability to select the optimal tech stack. Teams confuse deterministic automation with probabilistic AI, applying the wrong tool to the wrong problem.',
        outcome: 'Redirected engineering efforts from LLMs to simple scripts for 40% of use cases, saving 3 months of dev time.',
        techStack: ['Decision Theory', 'Process Mapping', 'LucidChart'],
        problem: 'Teams confuse deterministic automation with probabilistic AI, applying the wrong tool to the wrong problem.',
        system: 'A 2x2 decision framework categorizing tasks by complexity and variability to select the optimal tech stack.'
      },
      {
        title: 'Pilot-to-Scale Gate Framework',
        context: 'Implementation Governance',
        description: 'A stage-gate process requiring specific KPI thresholds (accuracy, cost, speed) before full deployment. Successful pilots often fail at scale due to ignored unit economics and latency constraints.',
        outcome: 'Standardized deployment protocol adopted by a 50-person engineering team.',
        techStack: ['Governance', 'Jira', 'Agile Methodology'],
        problem: 'Successful pilots often fail at scale due to ignored unit economics and latency constraints.',
        system: 'A stage-gate process requiring specific KPI thresholds (accuracy, cost, speed) before full deployment.'
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
        title: 'Predictive Lead & Spend Forecasting Model',
        context: 'Financial Planning',
        description: 'Time-series forecasting model (Prophet) predicting future CPA based on historical spend and seasonality. Marketing finance teams relied on trailing 30-day averages, missing seasonal trends and saturation points.',
        outcome: 'Improved quarterly budget accuracy by 18%, reducing wasted end-of-quarter spend.',
        techStack: ['Python', 'Prophet', 'Pandas'],
        problem: 'Marketing finance teams relied on trailing 30-day averages, missing seasonal trends and saturation points.',
        system: 'Time-series forecasting model (Prophet) predicting future CPA based on historical spend and seasonality.',
        image: '/work-forecasting.png'
      },
      {
        title: 'LLM-Powered Campaign Performance Analyst',
        context: 'AI Application',
        description: 'Agentic workflow fetching API data, summarizing trends, and generating draft executive briefs. Weekly reporting took 10 hours of manual data pasting and commentary writing.',
        outcome: 'Reduced reporting time to 15 minutes per week, freeing up strategic thinking time.',
        techStack: ['OpenAI API', 'Python', 'LangChain'],
        problem: 'Weekly reporting took 10 hours of manual data pasting and commentary writing.',
        system: 'Agentic workflow fetching API data, summarizing trends, and generating draft executive briefs.',
        image: '/work-llm-analyst.png'
      },
      {
        title: 'CAC–LTV Cohort Analysis',
        context: 'Unit Economics',
        description: 'Cohort-based visualization tracking payback period and LTV evolution over time. Blended CAC hid the fact that recent cohorts were unprofitable.',
        outcome: 'Shifted focus from "cheap leads" to "high-LTV channels" like organic search.',
        techStack: ['SQL', 'Tableau', 'dbt'],
        problem: 'Blended CAC hid the fact that recent cohorts were unprofitable.',
        system: 'Cohort-based visualization tracking payback period and LTV evolution over time.'
      }
    ]
  },
  'growth-engineering': {
    hero: {
      title: 'Meta Ads Performance Case Study — $50K/mo Scaling',
      context: 'Scale & Efficiency',
      description: 'Structured creative testing framework + broad targeting with CBO to manage creative fatigue. Scaling spend beyond $10k/mo caused CPA to skyrocket due to audience saturation.',
      impact: 'Scaled to $50k/mo while maintaining stable ROAS, unlocking new growth tier.',
      techStack: ['Meta Ads', 'GA4', 'Google Sheets', 'Looker'],
      ctaText: 'View Case Study',
      link: '/mywork/meta-ads-performance',
      problem: 'Scaling spend beyond $10k/mo caused CPA to skyrocket due to audience saturation.',
      system: 'Structured creative testing framework + broad targeting with CBO to manage creative fatigue.',
      outcome: 'Scaled to $50k/mo while maintaining stable ROAS, unlocking new growth tier.',
      logoImage: '/work-meta-ads-hero.png'
    },
    grid: [
      {
        title: 'Revenue Engineering & Psychological Architecture',
        context: 'Conversion Psychology',
        description: 'Leveraging behavioral economics and pattern interrupts to engineer retention loops. Traditional "creative" copy fails to address the subconscious friction points that kill conversion at scale.',
        outcome: 'Reduced CPA by 30% through psychological hooks and structured narrative testing.',
        techStack: ['Behavioral Economics', 'A/B Testing', 'Copy Frameworks'],
        problem: 'Traditional "creative" copy fails to address the subconscious friction points that kill conversion at scale.',
        system: 'Leveraging behavioral economics and pattern interrupts to engineer retention loops.',
        link: '/mywork/revenue-engineering'
      },
      {
        title: 'Google Ads Budget Optimization Simulator',
        context: 'Scenario Planning',
        description: 'Simulation tool modeling the diminishing returns curve of each campaign to optimize allocation. Client unsure how budget cuts would impact total conversion volume across campaigns.',
        outcome: 'Identified optimal split that maintained 90% of conversions with 75% of the budget.',
        techStack: ['Google Ads Scripts', 'JavaScript', 'Data Studio'],
        problem: 'Client unsure how budget cuts would impact total conversion volume across campaigns.',
        system: 'Simulation tool modeling the diminishing returns curve of each campaign to optimize allocation.',
        image: '/work-google-ads-simulator.png'
      },
      {
        title: 'ROAS Stabilization Framework',
        context: 'Performance Recovery',
        description: 'Protocol defining "normal volatility" vs "structural decline" to govern optimization decisions. Volatile performance caused panic-pausing of campaigns, resetting learning phases.',
        outcome: 'Reduced manual interventions by 60%, allowing algorithms to stabilize and improve.',
        techStack: ['Statistical Analysis', 'Media Buying Strategy'],
        problem: 'Volatile performance caused panic-pausing of campaigns, resetting learning phases.',
        system: 'Protocol defining "normal volatility" vs "structural decline" to govern optimization decisions.',
        image: '/work-roas-stabilization.png'
      }
    ]
  }
};

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
      
      {/* Hero Section - Responsive padding and typography */}
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

      {/* Main Content - Responsive grid and spacing */}
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

          {/* Grid Cards - Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          {currentContent?.grid && currentContent.grid.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {currentContent.grid.map((item, index) => {
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

                // If item has a link, wrap in appropriate element
                if (item.link) {
                  if (item.isExternal) {
                    return (
                      <a 
                        key={index} 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {cardContent}
                      </a>
                    );
                  }
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
