import React, { useState } from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { TabNavigation } from '@/components/TabNavigation';
import { HeroCard } from '@/components/HeroCard';
import { GridCard } from '@/components/GridCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// Tab Data
const TABS = [
  {
    id: 'ai-frameworks',
    label: 'AI & Decision Frameworks',
    description: 'Executive diagnostics used to assess AI readiness, quantify ROI, and prevent pilot-to-scale failure before capital or credibility is lost.'
  },
  {
    id: 'marketing-data',
    label: 'Marketing Data Science & AI Systems',
    description: 'Applied data engineering, analytics, and AI systems that convert fragmented marketing signals into decision-grade intelligence.'
  },
  {
    id: 'paid-media',
    label: 'Paid Media Case Studies',
    description: 'Execution-level case studies showing how strategy, constraints, and unit economics interact at scale.'
  },
  {
    id: 'dashboards',
    label: 'Dashboards & BI',
    description: 'Executive dashboards designed to compress complexity and accelerate leadership decision-making.'
  },
  {
    id: 'creative',
    label: 'Foundational Creative Work',
    description: 'Early-career hands-on creative execution that informs how I design realistic, execution-aware systems today.'
  }
];

// Content Data with hero items marked
const CONTENT = {
  'ai-frameworks': {
    hero: {
      title: 'AI Readiness Compass',
      context: 'Strategic Diagnostic Tool',
      description: 'A multi-dimensional scoring model evaluating data governance, talent density, and technical debt. Organizations often rush into AI pilots without assessing infrastructure maturity, leading to 80% failure rates.',
      impact: 'Prevented premature $200k investment for a mid-market firm by identifying critical data gaps first.',
      techStack: ['Python', 'Survey Logic', 'Scoring Models', 'Visualization'],
      ctaText: 'View Case Study',
      problem: 'Organizations often rush into AI pilots without assessing infrastructure maturity, leading to 80% failure rates.',
      system: 'A multi-dimensional scoring model evaluating data governance, talent density, and technical debt.',
      outcome: 'Prevented premature $200k investment for a mid-market firm by identifying critical data gaps first.'
    },
    grid: [
      {
        title: 'AI ROI Calculator',
        context: 'Financial Modeling',
        description: 'Parametric model inputting labor costs, task frequency, and automation potential to forecast net savings. C-suite leaders struggle to justify AI spend due to vague "efficiency" promises without hard numbers.',
        outcome: 'Validated a $1.2M projected annual saving for a logistics client, securing board approval.',
        techStack: ['Excel/Sheets', 'Python', 'Financial Modeling'],
        problem: 'C-suite leaders struggle to justify AI spend due to vague "efficiency" promises without hard numbers.',
        system: 'Parametric model inputting labor costs, task frequency, and automation potential to forecast net savings.'
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
  'marketing-data': {
    hero: {
      title: 'End-to-End Marketing Attribution System',
      context: 'Data Infrastructure',
      description: 'Unified data pipeline ingesting API data into BigQuery, normalized for cross-channel comparison. Fragmented ad data across Meta, Google, and LinkedIn made true ROAS calculation impossible.',
      impact: 'Revealed true customer acquisition cost, shifting 30% of budget to under-credited high-performing channels.',
      techStack: ['Python', 'SQL', 'BigQuery', 'Looker'],
      ctaText: 'View Case Study',
      problem: 'Fragmented ad data across Meta, Google, and LinkedIn made true ROAS calculation impossible.',
      system: 'Unified data pipeline ingesting API data into BigQuery, normalized for cross-channel comparison.',
      outcome: 'Revealed true customer acquisition cost, shifting 30% of budget to under-credited high-performing channels.'
    },
    grid: [
      {
        title: 'Predictive Lead & Spend Forecasting Model',
        context: 'Financial Planning',
        description: 'Time-series forecasting model (Prophet) predicting future CPA based on historical spend and seasonality. Marketing finance teams relied on trailing 30-day averages, missing seasonal trends and saturation points.',
        outcome: 'Improved quarterly budget accuracy by 18%, reducing wasted end-of-quarter spend.',
        techStack: ['Python', 'Prophet', 'Pandas'],
        problem: 'Marketing finance teams relied on trailing 30-day averages, missing seasonal trends and saturation points.',
        system: 'Time-series forecasting model (Prophet) predicting future CPA based on historical spend and seasonality.'
      },
      {
        title: 'Marketing Mix Modeling (Lite)',
        context: 'Advanced Analytics',
        description: 'Ridge regression model isolating the incremental impact of media spend on revenue baseline. Privacy changes (iOS14) blinded pixel-based tracking, requiring a statistical approach to measurement.',
        outcome: 'Restored visibility into offline and brand awareness channel performance.',
        techStack: ['R', 'Statistical Modeling', 'Tableau'],
        problem: 'Privacy changes (iOS14) blinded pixel-based tracking, requiring a statistical approach to measurement.',
        system: 'Ridge regression model isolating the incremental impact of media spend on revenue baseline.'
      },
      {
        title: 'Email Marketing Analytics DB',
        context: 'Data Engineering',
        description: 'ETL pipeline extracting Elastic Email logs into SQL for join-analysis with CRM purchase data. ESP reporting was limited to open rates, disconnected from downstream revenue events.',
        outcome: 'Identified that "dormant" subscribers had 2x higher LTV when reactivated than new leads.',
        techStack: ['Elastic Email', 'SQL', 'Data Engineering'],
        problem: 'ESP reporting was limited to open rates, disconnected from downstream revenue events.',
        system: 'ETL pipeline extracting Elastic Email logs into SQL for join-analysis with CRM purchase data.'
      },
      {
        title: 'LLM-Powered Campaign Performance Analyst',
        context: 'AI Application',
        description: 'Agentic workflow fetching API data, summarizing trends, and generating draft executive briefs. Weekly reporting took 10 hours of manual data pasting and commentary writing.',
        outcome: 'Reduced reporting time to 15 minutes per week, freeing up strategic thinking time.',
        techStack: ['OpenAI API', 'Python', 'LangChain'],
        problem: 'Weekly reporting took 10 hours of manual data pasting and commentary writing.',
        system: 'Agentic workflow fetching API data, summarizing trends, and generating draft executive briefs.'
      },
      {
        title: 'Anomaly Detection System',
        context: 'Automated Monitoring',
        description: 'Statistical alert system triggering Slack notifications when metrics deviate >2 standard deviations. Ad spend spikes or tracking failures often went unnoticed for days, wasting budget.',
        outcome: 'Caught a broken checkout pixel within 2 hours, saving an estimated $5k in lost tracking.',
        techStack: ['Python', 'Statistical Process Control', 'Slack Webhooks'],
        problem: 'Ad spend spikes or tracking failures often went unnoticed for days, wasting budget.',
        system: 'Statistical alert system triggering Slack notifications when metrics deviate >2 standard deviations.'
      }
    ]
  },
  'paid-media': {
    hero: {
      title: 'Meta Ads Performance Case Study — $40K USD Spend',
      context: 'Scale & Efficiency',
      description: 'Structured creative testing framework + broad targeting with CBO to manage creative fatigue. Scaling spend beyond $10k/mo caused CPA to skyrocket due to audience saturation.',
      impact: 'Scaled to $40k/mo while maintaining stable ROAS, unlocking new growth tier.',
      techStack: ['Meta Ads', 'GA4', 'Google Sheets', 'Looker'],
      ctaText: 'View Case Study',
      problem: 'Scaling spend beyond $10k/mo caused CPA to skyrocket due to audience saturation.',
      system: 'Structured creative testing framework + broad targeting with CBO to manage creative fatigue.',
      outcome: 'Scaled to $40k/mo while maintaining stable ROAS, unlocking new growth tier.'
    },
    grid: [
      {
        title: 'Google Ads Budget Optimization Simulator',
        context: 'Scenario Planning',
        description: 'Simulation tool modeling the diminishing returns curve of each campaign to optimize allocation. Client unsure how budget cuts would impact total conversion volume across campaigns.',
        outcome: 'Identified optimal split that maintained 90% of conversions with 75% of the budget.',
        techStack: ['Google Ads Scripts', 'JavaScript', 'Data Studio'],
        problem: 'Client unsure how budget cuts would impact total conversion volume across campaigns.',
        system: 'Simulation tool modeling the diminishing returns curve of each campaign to optimize allocation.'
      },
      {
        title: 'ROAS Stabilization Framework',
        context: 'Performance Recovery',
        description: 'Protocol defining "normal volatility" vs "structural decline" to govern optimization decisions. Volatile performance caused panic-pausing of campaigns, resetting learning phases.',
        outcome: 'Reduced manual interventions by 60%, allowing algorithms to stabilize and improve.',
        techStack: ['Statistical Analysis', 'Media Buying Strategy'],
        problem: 'Volatile performance caused panic-pausing of campaigns, resetting learning phases.',
        system: 'Protocol defining "normal volatility" vs "structural decline" to govern optimization decisions.'
      }
    ]
  },
  'dashboards': {
    hero: {
      title: 'Executive Marketing Command Dashboard',
      context: 'C-Suite Reporting',
      description: 'Centralized Looker Studio dashboard aggregating spend, leads, and revenue in real-time. CEO needed a single view of growth health without logging into 5 different platforms.',
      impact: 'Became the default Monday morning meeting screen for the leadership team.',
      techStack: ['Looker Studio', 'BigQuery', 'Supermetrics'],
      ctaText: 'View Case Study',
      problem: 'CEO needed a single view of growth health without logging into 5 different platforms.',
      system: 'Centralized Looker Studio dashboard aggregating spend, leads, and revenue in real-time.',
      outcome: 'Became the default Monday morning meeting screen for the leadership team.'
    },
    grid: [
      {
        title: 'CAC–LTV Cohort Analysis',
        context: 'Unit Economics',
        description: 'Cohort-based visualization tracking payback period and LTV evolution over time. Blended CAC hid the fact that recent cohorts were unprofitable.',
        outcome: 'Shifted focus from "cheap leads" to "high-LTV channels" like organic search.',
        techStack: ['SQL', 'Tableau', 'dbt'],
        problem: 'Blended CAC hid the fact that recent cohorts were unprofitable.',
        system: 'Cohort-based visualization tracking payback period and LTV evolution over time.'
      },
      {
        title: 'Funnel Drop-Off Diagnostics',
        context: 'CRO Analytics',
        description: 'Granular step-by-step funnel visualization identifying friction points. High traffic but low conversion; unclear where users were leaking.',
        outcome: 'Pinpointed a form validation error causing 15% drop-off on mobile.',
        techStack: ['GA4', 'Mixpanel', 'Hotjar'],
        problem: 'High traffic but low conversion; unclear where users were leaking.',
        system: 'Granular step-by-step funnel visualization identifying friction points.'
      },
      {
        title: 'Board-Level KPI Summary',
        context: 'Investor Relations',
        description: 'Automated slide-ready data tables updating automatically from the warehouse. Board deck preparation was a manual, error-prone monthly fire drill.',
        outcome: 'Eliminated data discrepancies and reduced prep time by 90%.',
        techStack: ['Google Sheets', 'BigQuery', 'Slides API'],
        problem: 'Board deck preparation was a manual, error-prone monthly fire drill.',
        system: 'Automated slide-ready data tables updating automatically from the warehouse.'
      }
    ]
  },
  'creative': {
    hero: {
      title: 'Revenue Engineering & Psychological Architecture',
      context: 'Conversion Psychology',
      description: 'Leveraging behavioral economics and pattern interrupts to engineer retention loops. Traditional "creative" copy fails to address the subconscious friction points that kill conversion at scale.',
      impact: 'Reduced CPA by 30% through psychological hooks and structured narrative testing.',
      techStack: ['Behavioral Economics', 'A/B Testing', 'Copy Frameworks'],
      ctaText: 'View Case Study',
      problem: 'Traditional "creative" copy fails to address the subconscious friction points that kill conversion at scale.',
      system: 'Leveraging behavioral economics and pattern interrupts to engineer retention loops.',
      outcome: 'Reduced CPA by 30% through psychological hooks and structured narrative testing.'
    },
    grid: [
      {
        title: 'High-Velocity Web Infrastructure',
        context: 'Systems Architecture',
        description: 'Conversion-first development prioritizing Core Web Vitals and sub-second load times. Replaced aesthetic-driven bloat with lean, scalable code architectures.',
        outcome: 'Deployed high-speed assets in 5 days vs 4 weeks, achieving 99/100 performance scores.',
        techStack: ['React', 'Next.js', 'Tailwind'],
        problem: 'Aesthetic-driven bloat created slow, conversion-killing web experiences.',
        system: 'Conversion-first development prioritizing Core Web Vitals and sub-second load times.'
      },
      {
        title: 'Graphic Design Portfolio',
        context: 'Visual Communication',
        description: 'Clean, isometric diagramming style to visualize system architectures. Complex technical concepts were hard to explain in text.',
        outcome: 'Standardized the visual language for all technical documentation.',
        techStack: ['Illustrator', 'Photoshop', 'Figma'],
        problem: 'Complex technical concepts were hard to explain in text.',
        system: 'Clean, isometric diagramming style to visualize system architectures.'
      },
      {
        title: 'Motion & Ad Creatives',
        context: 'Performance Creative',
        description: 'Motion graphic templates allowing rapid iteration of hooks and CTAs. Static ads suffered from banner blindness.',
        outcome: 'Increased click-through rates by 45% on cold audiences.',
        techStack: ['After Effects', 'Lottie', 'Media Encoder'],
        problem: 'Static ads suffered from banner blindness.',
        system: 'Motion graphic templates allowing rapid iteration of hooks and CTAs.'
      }
    ]
  }
};

export default function MyWork() {
  const [activeTab, setActiveTab] = useState('ai-frameworks');
  const [selectedCase, setSelectedCase] = useState<any>(null);

  const currentContent = CONTENT[activeTab as keyof typeof CONTENT];

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 pb-8 px-6">
        <div className="container max-w-6xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] mb-6">
            My Work
          </h1>
          <p className="font-body text-[#5a5a5a] text-lg md:text-xl max-w-2xl leading-relaxed">
            A curated body of AI decision frameworks, data systems, and growth architectures — organized by impact and maturity.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <TabNavigation 
        tabs={TABS} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-12 animate-in fade-in duration-500">
          
          {/* Hero Card - Featured Item */}
          {currentContent?.hero && (
            <HeroCard
              title={currentContent.hero.title}
              context={currentContent.hero.context}
              description={currentContent.hero.description}
              impact={currentContent.hero.impact}
              ctaText={currentContent.hero.ctaText}
              onClick={() => setSelectedCase(currentContent.hero)}
            />
          )}

          {/* Grid Cards - Secondary Items */}
          {currentContent?.grid && currentContent.grid.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentContent.grid.map((item, index) => (
                <GridCard
                  key={index}
                  title={item.title}
                  context={item.context}
                  description={item.description}
                  outcome={item.outcome}
                  techStack={item.techStack}
                  onClick={() => setSelectedCase(item)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <ContactSection />

      {/* Case Detail Modal */}
      <Dialog open={!!selectedCase} onOpenChange={(open) => !open && setSelectedCase(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-[#fafaf8] border-[#e8e6e1]">
          <DialogHeader>
            <DialogTitle className="font-heading text-3xl text-[#1a1a1a] mb-2">
              {selectedCase?.title}
            </DialogTitle>
            <DialogDescription className="font-body text-[#8b8578] text-sm uppercase tracking-wider">
              {selectedCase?.context}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-8 py-6">
            <div className="space-y-3">
              <h4 className="font-heading text-xl text-[#1a1a1a] border-b border-[#e8e6e1] pb-2">Problem Framing</h4>
              <p className="font-body text-[#5a5a5a] leading-relaxed">
                {selectedCase?.problem}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading text-xl text-[#1a1a1a] border-b border-[#e8e6e1] pb-2">System / Architecture</h4>
              <p className="font-body text-[#5a5a5a] leading-relaxed">
                {selectedCase?.system}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading text-xl text-[#1a1a1a] border-b border-[#e8e6e1] pb-2">Decision Impact</h4>
              <p className="font-body text-[#5a5a5a] leading-relaxed">
                {selectedCase?.outcome || selectedCase?.impact}
              </p>
            </div>

            {selectedCase?.techStack && (
              <div className="bg-[#f0ede8] p-4 rounded-sm">
                <h4 className="font-heading text-sm text-[#1a1a1a] mb-3 uppercase tracking-wider">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.techStack.map((tech: string, i: number) => (
                    <span key={i} className="text-xs font-medium uppercase tracking-wider text-[#6a6a6a] bg-white px-3 py-1 rounded-sm border border-[#e8e6e1]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
