import { Link } from 'react-router-dom';

// Case study data for the carousel
const CASE_STUDIES = [
  {
    id: 1,
    title: 'AI Readiness Compass',
    category: 'AI & Decision Frameworks',
    description: 'Multi-dimensional scoring model evaluating data governance, talent density, and technical debt.',
    outcome: 'Prevented premature $200k investment',
    techStack: ['Python', 'Scoring Models']
  },
  {
    id: 2,
    title: 'End-to-End Marketing Attribution',
    category: 'Marketing Data Science',
    description: 'Unified data pipeline ingesting API data into BigQuery for cross-channel comparison.',
    outcome: 'Shifted 30% budget to high-performing channels',
    techStack: ['BigQuery', 'Looker', 'Python']
  },
  {
    id: 3,
    title: 'Meta Ads — $40K USD Spend',
    category: 'Paid Media',
    description: 'Structured creative testing framework + broad targeting with CBO to manage creative fatigue.',
    outcome: 'Scaled to $40k/mo with stable ROAS',
    techStack: ['Meta Ads', 'GA4', 'Looker']
  },
  {
    id: 4,
    title: 'Executive Marketing Dashboard',
    category: 'Dashboards & BI',
    description: 'Real-time KPI dashboard consolidating spend, leads, and pipeline metrics.',
    outcome: 'Reduced reporting overhead by 70%',
    techStack: ['Looker', 'BigQuery', 'SQL']
  },
  {
    id: 5,
    title: 'LLM-Powered Campaign Analyst',
    category: 'AI Systems',
    description: 'Agentic workflow fetching API data, summarizing trends, and generating executive briefs.',
    outcome: 'Reduced reporting time to 15 minutes/week',
    techStack: ['OpenAI API', 'LangChain', 'Python']
  },
  {
    id: 6,
    title: 'Predictive Lead Forecasting',
    category: 'Data Science',
    description: 'Time-series forecasting model predicting future CPA based on historical spend and seasonality.',
    outcome: 'Improved budget accuracy by 18%',
    techStack: ['Prophet', 'Python', 'Pandas']
  },
  {
    id: 7,
    title: 'Google Ads — $1M Annual Spend',
    category: 'Paid Media',
    description: 'Predictive budget-allocation model across Search, Display, and YouTube campaigns.',
    outcome: 'Improved client ROI by +25%',
    techStack: ['Google Ads', 'BigQuery', 'Data Studio']
  },
  {
    id: 8,
    title: 'Anomaly Detection System',
    category: 'Automated Monitoring',
    description: 'Statistical alert system triggering Slack notifications when metrics deviate significantly.',
    outcome: 'Saved $5k in lost tracking within 2 hours',
    techStack: ['Python', 'Slack Webhooks']
  }
];

const CaseStudyCard = ({ study }: { study: typeof CASE_STUDIES[0] }) => {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[360px] bg-white rounded-xl border border-[#e5e5dc] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Image Placeholder */}
      <div className="h-40 bg-gradient-to-br from-[#f5f5f0] to-[#e8e8e0] flex items-center justify-center border-b border-[#e5e5dc]">
        <div className="text-[#8b7355]/40 text-sm font-medium">
          Image Placeholder
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="text-xs font-medium text-[#8b7355] uppercase tracking-wider">
          {study.category}
        </span>
        
        {/* Title */}
        <h3 className="font-heading text-lg font-semibold text-[#1a1a1a] mt-2 mb-2 group-hover:text-[#8b7355] transition-colors line-clamp-2">
          {study.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-[#5a5a5a] leading-relaxed mb-3 line-clamp-2">
          {study.description}
        </p>
        
        {/* Outcome */}
        <div className="text-sm font-medium text-[#2a2a2a] mb-3">
          <span className="text-[#8b7355]">→</span> {study.outcome}
        </div>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {study.techStack.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-0.5 text-xs bg-[#f5f5f0] text-[#5a5a5a] rounded-full border border-[#e5e5dc]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const MyWorkSection = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedStudies = [...CASE_STUDIES, ...CASE_STUDIES];

  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              My Work
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
              A selection of AI systems, data pipelines, and marketing architectures built for enterprise clients.
            </p>
          </div>
          <Link 
            to="/mywork"
            className="inline-flex items-center text-[#8b7355] hover:text-[#6b5a45] font-medium transition-colors group"
          >
            View All Work
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* Scrolling Carousel */}
      <div className="relative">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Track */}
        <div className="flex gap-5 sm:gap-6 animate-scroll-left hover:pause-animation">
          {duplicatedStudies.map((study, index) => (
            <CaseStudyCard key={`${study.id}-${index}`} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorkSection;
