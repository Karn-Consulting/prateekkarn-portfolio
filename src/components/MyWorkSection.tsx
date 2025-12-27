import { Link } from 'react-router-dom';

// Curated 4 high-impact projects for the 2x2 grid
const SELECT_WORKS = [
  {
    id: 1,
    title: 'Enterprise AI Preparedness Check',
    category: 'Decision Frameworks',
    description: 'Multi-dimensional scoring model evaluating data governance, talent density, and technical debt across the enterprise.',
    outcome: 'Prevented premature $200k investment',
    techStack: ['Python', 'Scoring Models', 'Data Analysis'],
    link: '/mywork/enterprise-ai-preparedness',
    image: '/work-ai-preparedness.png'
  },
  {
    id: 2,
    title: 'End-to-End Marketing Attribution',
    category: 'Data Science',
    description: 'Unified data pipeline ingesting API data into BigQuery for cross-channel comparison and budget optimization.',
    outcome: 'Shifted 30% budget to high-performing channels',
    techStack: ['BigQuery', 'Looker', 'Python'],
    link: null,
    image: '/work-attribution.png'
  },
  {
    id: 3,
    title: 'Meta Ads — $50K/mo Scaling',
    category: 'Paid Media',
    description: 'Structured creative testing framework with broad targeting and CBO to manage creative fatigue at scale.',
    outcome: 'Scaled to $50k/mo with stable ROAS',
    techStack: ['Meta Ads', 'GA4', 'Looker'],
    link: null,
    image: '/work-meta-ads.png'
  },
  {
    id: 4,
    title: 'Executive Marketing Dashboard',
    category: 'Dashboards & BI',
    description: 'Real-time KPI dashboard consolidating spend, leads, and pipeline metrics for C-suite visibility.',
    outcome: 'Reduced reporting overhead by 70%',
    techStack: ['Looker', 'BigQuery', 'SQL'],
    link: null,
    image: '/work-dashboard.png'
  }
];

const SelectWorkCard = ({ work }: { work: typeof SELECT_WORKS[0] }) => {
  const CardContent = () => (
    <>
      {/* Image Area */}
      <div className="h-44 sm:h-48 bg-gradient-to-br from-[#f5f5f0] to-[#e8e8e0] flex items-center justify-center border-b border-[#e5e5dc] overflow-hidden">
        <img 
          src={work.image} 
          alt={work.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <span className="text-xs font-medium text-[#8b7355] uppercase tracking-wider">
          {work.category}
        </span>
        
        {/* Title */}
        <h3 className="font-heading text-xl font-semibold text-[#1a1a1a] mt-2 mb-3 group-hover:text-[#8b7355] transition-colors">
          {work.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-[#5a5a5a] leading-relaxed mb-4 line-clamp-2">
          {work.description}
        </p>
        
        {/* Outcome */}
        <div className="text-sm font-medium text-[#2a2a2a] mb-4">
          <span className="text-[#8b7355]">→</span> {work.outcome}
        </div>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {work.techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-2.5 py-1 text-xs bg-[#f5f5f0] text-[#5a5a5a] rounded-full border border-[#e5e5dc]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (work.link) {
    return (
      <Link 
        to={work.link}
        className="bg-white rounded-lg border border-[#e5e5dc] shadow-sm hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden group block"
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-[#e5e5dc] shadow-sm hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden group cursor-pointer">
      <CardContent />
    </div>
  );
};

const MyWorkSection = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My Select Works
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            A curated collection of high-impact AI systems, data pipelines, and marketing architectures built for enterprise clients.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SELECT_WORKS.map((work) => (
            <SelectWorkCard key={work.id} work={work} />
          ))}
        </div>

        {/* View All Work Button - Minimalist with generous padding */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <Link 
            to="/mywork"
            className="
              group
              inline-flex items-center
              px-8 py-4
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
            <span className="tracking-[0.15em]">View All Work</span>
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyWorkSection;
