import React, { useState } from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { TabNavigation } from '@/components/TabNavigation';
import { PortfolioCard } from '@/components/PortfolioCard';
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

// Content Data
const CONTENT = {
  'ai-frameworks': [
    {
      title: 'AI Readiness Compass',
      context: 'Strategic Diagnostic Tool',
      problem: 'Organizations often rush into AI pilots without assessing infrastructure maturity, leading to 80% failure rates.',
      system: 'A multi-dimensional scoring model evaluating data governance, talent density, and technical debt.',
      outcome: 'Prevented premature $200k investment for a mid-market firm by identifying critical data gaps first.',
      techStack: ['Python', 'Survey Logic', 'Scoring Models', 'Visualization'],
      ctaText: 'View Framework',
      isHero: true
    },
    {
      title: 'AI ROI Calculator',
      context: 'Financial Modeling',
      problem: 'C-suite leaders struggle to justify AI spend due to vague "efficiency" promises without hard numbers.',
      system: 'Parametric model inputting labor costs, task frequency, and automation potential to forecast net savings.',
      outcome: 'Validated a $1.2M projected annual saving for a logistics client, securing board approval.',
      techStack: ['Excel/Sheets', 'Python', 'Financial Modeling', 'Streamlit'],
      ctaText: 'View Framework'
    },
    {
      title: 'AI vs Automation Decision Matrix',
      context: 'Operational Strategy',
      problem: 'Teams confuse deterministic automation with probabilistic AI, applying the wrong tool to the wrong problem.',
      system: 'A 2x2 decision framework categorizing tasks by complexity and variability to select the optimal tech stack.',
      outcome: 'Redirected engineering efforts from LLMs to simple scripts for 40% of use cases, saving 3 months of dev time.',
      techStack: ['Decision Theory', 'Process Mapping', 'LucidChart'],
      ctaText: 'View Framework'
    },
    {
      title: 'Pilot-to-Scale Gate Framework',
      context: 'Implementation Governance',
      problem: 'Successful pilots often fail at scale due to ignored unit economics and latency constraints.',
      system: 'A stage-gate process requiring specific KPI thresholds (accuracy, cost, speed) before full deployment.',
      outcome: 'Standardized deployment protocol adopted by a 50-person engineering team.',
      techStack: ['Governance', 'Jira', 'Agile Methodology'],
      ctaText: 'View Framework'
    }
  ],
  'marketing-data': [
    {
      title: 'End-to-End Marketing Attribution System',
      context: 'Data Infrastructure',
      problem: 'Fragmented ad data across Meta, Google, and LinkedIn made true ROAS calculation impossible.',
      system: 'Unified data pipeline ingesting API data into BigQuery, normalized for cross-channel comparison.',
      outcome: 'Revealed true customer acquisition cost, shifting 30% of budget to under-credited high-performing channels.',
      techStack: ['Python', 'SQL', 'BigQuery', 'Looker'],
      ctaText: 'Explore System',
      isHero: true
    },
    {
      title: 'Predictive Lead & Spend Forecasting Model',
      context: 'Financial Planning',
      problem: 'Marketing finance teams relied on trailing 30-day averages, missing seasonal trends and saturation points.',
      system: 'Time-series forecasting model (Prophet) predicting future CPA based on historical spend and seasonality.',
      outcome: 'Improved quarterly budget accuracy by 18%, reducing wasted end-of-quarter spend.',
      techStack: ['Python', 'Prophet', 'Pandas', 'AWS'],
      ctaText: 'Explore System'
    },
    {
      title: 'Marketing Mix Modeling (Lite)',
      context: 'Advanced Analytics',
      problem: 'Privacy changes (iOS14) blinded pixel-based tracking, requiring a statistical approach to measurement.',
      system: 'Ridge regression model isolating the incremental impact of media spend on revenue baseline.',
      outcome: 'Restored visibility into offline and brand awareness channel performance.',
      techStack: ['R', 'Statistical Modeling', 'Tableau'],
      ctaText: 'Explore System'
    },
    {
      title: 'Email Marketing Analytics DB',
      context: 'Data Engineering',
      problem: 'ESP reporting was limited to open rates, disconnected from downstream revenue events.',
      system: 'ETL pipeline extracting Elastic Email logs into SQL for join-analysis with CRM purchase data.',
      outcome: 'Identified that "dormant" subscribers had 2x higher LTV when reactivated than new leads.',
      techStack: ['Elastic Email', 'SQL', 'Data Engineering', 'Metabase'],
      ctaText: 'Explore System'
    },
    {
      title: 'LLM-Powered Campaign Performance Analyst',
      context: 'AI Application',
      problem: 'Weekly reporting took 10 hours of manual data pasting and commentary writing.',
      system: 'Agentic workflow fetching API data, summarizing trends, and generating draft executive briefs.',
      outcome: 'Reduced reporting time to 15 minutes per week, freeing up strategic thinking time.',
      techStack: ['OpenAI API', 'Python', 'LangChain', 'Slack API'],
      ctaText: 'Explore System'
    },
    {
      title: 'Anomaly Detection System',
      context: 'Automated Monitoring',
      problem: 'Ad spend spikes or tracking failures often went unnoticed for days, wasting budget.',
      system: 'Statistical alert system triggering Slack notifications when metrics deviate >2 standard deviations.',
      outcome: 'Caught a broken checkout pixel within 2 hours, saving an estimated $5k in lost tracking.',
      techStack: ['Python', 'Statistical Process Control', 'Slack Webhooks'],
      ctaText: 'Explore System'
    }
  ],
  'paid-media': [
    {
      title: 'Meta Ads Performance Case Study — $40K USD Spend',
      context: 'Scale & Efficiency',
      problem: 'Scaling spend beyond $10k/mo caused CPA to skyrocket due to audience saturation.',
      system: 'Structured creative testing framework + broad targeting with CBO to manage creative fatigue.',
      outcome: 'Scaled to $40k/mo while maintaining stable ROAS, unlocking new growth tier.',
      techStack: ['Meta Ads', 'GA4', 'Google Sheets', 'Looker'],
      ctaText: 'View Case',
      isHero: true
    },
    {
      title: 'Google Ads Budget Optimization Simulator',
      context: 'Scenario Planning',
      problem: 'Client unsure how budget cuts would impact total conversion volume across campaigns.',
      system: 'Simulation tool modeling the diminishing returns curve of each campaign to optimize allocation.',
      outcome: 'Identified optimal split that maintained 90% of conversions with 75% of the budget.',
      techStack: ['Google Ads Scripts', 'JavaScript', 'Data Studio'],
      ctaText: 'View Case'
    },
    {
      title: 'ROAS Stabilization Framework',
      context: 'Performance Recovery',
      problem: 'Volatile performance caused panic-pausing of campaigns, resetting learning phases.',
      system: 'Protocol defining "normal volatility" vs "structural decline" to govern optimization decisions.',
      outcome: 'Reduced manual interventions by 60%, allowing algorithms to stabilize and improve.',
      techStack: ['Statistical Analysis', 'Media Buying Strategy'],
      ctaText: 'View Case'
    }
  ],
  'dashboards': [
    {
      title: 'Executive Marketing Command Dashboard',
      context: 'C-Suite Reporting',
      problem: 'CEO needed a single view of growth health without logging into 5 different platforms.',
      system: 'Centralized Looker Studio dashboard aggregating spend, leads, and revenue in real-time.',
      outcome: 'Became the default Monday morning meeting screen for the leadership team.',
      techStack: ['Looker Studio', 'BigQuery', 'Supermetrics'],
      ctaText: 'View Dashboard'
    },
    {
      title: 'CAC–LTV Cohort Analysis',
      context: 'Unit Economics',
      problem: 'Blended CAC hid the fact that recent cohorts were unprofitable.',
      system: 'Cohort-based visualization tracking payback period and LTV evolution over time.',
      outcome: 'Shifted focus from "cheap leads" to "high-LTV channels" like organic search.',
      techStack: ['SQL', 'Tableau', 'dbt'],
      ctaText: 'View Dashboard'
    },
    {
      title: 'Funnel Drop-Off Diagnostics',
      context: 'CRO Analytics',
      problem: 'High traffic but low conversion; unclear where users were leaking.',
      system: 'Granular step-by-step funnel visualization identifying friction points.',
      outcome: 'Pinpointed a form validation error causing 15% drop-off on mobile.',
      techStack: ['GA4', 'Mixpanel', 'Hotjar'],
      ctaText: 'View Dashboard'
    },
    {
      title: 'Board-Level KPI Summary',
      context: 'Investor Relations',
      problem: 'Board deck preparation was a manual, error-prone monthly fire drill.',
      system: 'Automated slide-ready data tables updating automatically from the warehouse.',
      outcome: 'Eliminated data discrepancies and reduced prep time by 90%.',
      techStack: ['Google Sheets', 'BigQuery', 'Slides API'],
      ctaText: 'View Dashboard'
    }
  ],
  'creative': [
    {
      title: 'Video Editing Portfolio',
      context: 'Content Production',
      problem: 'Need for high-retention video assets for paid social.',
      system: 'Fast-paced, narrative-driven editing style optimized for social attention spans.',
      outcome: 'Produced assets that drove 30% lower CPA than static images.',
      techStack: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
      ctaText: 'View Portfolio'
    },
    {
      title: 'Graphic Design Portfolio',
      context: 'Visual Communication',
      problem: 'Complex technical concepts were hard to explain in text.',
      system: 'Clean, isometric diagramming style to visualize system architectures.',
      outcome: 'Standardized the visual language for all technical documentation.',
      techStack: ['Illustrator', 'Photoshop', 'Figma'],
      ctaText: 'View Portfolio'
    },
    {
      title: 'Motion & Ad Creatives',
      context: 'Performance Creative',
      problem: 'Static ads suffered from banner blindness.',
      system: 'Motion graphic templates allowing rapid iteration of hooks and CTAs.',
      outcome: 'Increased click-through rates by 45% on cold audiences.',
      techStack: ['After Effects', 'Lottie', 'Media Encoder'],
      ctaText: 'View Portfolio'
    }
  ]
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('ai-frameworks');
  const [selectedCase, setSelectedCase] = useState<any>(null);

  const currentContent = CONTENT[activeTab as keyof typeof CONTENT] || [];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <Header />
      
      <TabNavigation 
        tabs={TABS} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />

      <main className="container max-w-5xl mx-auto py-12 pb-32">
        {/* Tab Content */}
        <div className="space-y-0 animate-in fade-in duration-500 slide-in-from-bottom-4">
          {activeTab === 'creative' && (
            <div className="mb-12 p-6 bg-secondary/30 rounded-sm border-l-2 border-accent">
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                <span className="font-medium text-primary">Note:</span> Earlier in my career, I worked hands-on with creative production. This foundation ensures the systems I design remain grounded in real execution constraints.
              </p>
            </div>
          )}

          {currentContent.map((item, index) => (
            <PortfolioCard
              key={index}
              {...item}
              onClick={() => setSelectedCase(item)}
            />
          ))}
        </div>
      </main>

      <ContactSection />

      {/* Case Detail Modal */}
      <Dialog open={!!selectedCase} onOpenChange={(open) => !open && setSelectedCase(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background border-border">
          <DialogHeader>
            <DialogTitle className="font-heading text-3xl text-primary mb-2">
              {selectedCase?.title}
            </DialogTitle>
            <DialogDescription className="font-body text-muted-foreground text-lg">
              {selectedCase?.context}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-8 py-6">
            <div className="space-y-3">
              <h4 className="font-heading text-xl text-primary border-b border-border/50 pb-2">Problem Framing</h4>
              <p className="font-body text-muted-foreground leading-relaxed">
                {selectedCase?.problem}
                <br/><br/>
                Detailed analysis of the initial state revealed significant inefficiencies in the existing workflow, creating a bottleneck for growth.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading text-xl text-primary border-b border-border/50 pb-2">System / Architecture</h4>
              <p className="font-body text-muted-foreground leading-relaxed">
                {selectedCase?.system}
                <br/><br/>
                The solution architecture prioritized modularity and scalability, ensuring that the system could evolve with changing business needs without requiring a complete rebuild.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading text-xl text-primary border-b border-border/50 pb-2">Decision Impact</h4>
              <p className="font-body text-muted-foreground leading-relaxed">
                {selectedCase?.outcome}
                <br/><br/>
                Beyond the immediate metrics, this initiative established a new standard for data-driven decision making within the organization.
              </p>
            </div>

            <div className="bg-secondary/20 p-4 rounded-sm">
              <h4 className="font-heading text-sm text-primary mb-2 uppercase tracking-wider">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCase?.techStack.map((tech: string, i: number) => (
                  <span key={i} className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
