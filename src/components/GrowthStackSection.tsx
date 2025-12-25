const GrowthStackSection = () => {
  const stackCategories = [
    {
      category: "Growth Systems & Automation Systems",
      tools: [
        "Meta Ads",
        "Google Ads",
        "LinkedIn Ads",
        "Search & Generative Optimization",
        "Workflow Automation"
      ]
    },
    {
      category: "AI & Machine Learning",
      tools: [
        "Agentic AI & LLM Orchestration",
        "RAG Systems & Memory Context Platforms",
        "Python & SQL",
        "Data Engineering & Pipelines",
        "MLOps"
      ]
    },
    {
      category: "CRM and MarTech",
      tools: [
        "Lead Scoring & Enrichment",
        "Customer Journey Orchestration",
        "Personalization & Segmentation",
        "Attribution & Lifecycle Analytics",
        "Marketing & CRM Automation"
      ]
    },
    {
      category: "Analytics & BI",
      tools: [
        "Data Warehousing & Modeling",
        "Business Intelligence & Visualization",
        "Web & Engagement Analytics",
        "Experimentation & A/B Testing",
        "Financial & ROI Analytics"
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            The Growth Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-10 lg:gap-12">
          {stackCategories.map((category, index) => (
            <div key={index} className="space-y-4 sm:space-y-6">
              <h3 className="font-heading text-base sm:text-lg md:text-xl font-semibold text-accent border-b border-accent/20 pb-2 sm:pb-3">
                {category.category}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <li 
                    key={toolIndex}
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthStackSection;
