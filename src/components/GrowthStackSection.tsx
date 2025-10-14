const GrowthStackSection = () => {
  const stackCategories = [
    {
      category: "AI & ML Frameworks",
      tools: ["OpenAI SDK", "Vertex AI", "AWS SageMaker", "LangChain", "LlamaIndex"]
    },
    {
      category: "Automation & Orchestration", 
      tools: ["n8n", "Zapier", "CRM Integrations", "Low-Code Workflow Platforms"]
    },
    {
      category: "Analytics & BI",
      tools: ["BigQuery", "GA4", "Looker Studio", "Tableau"]
    },
    {
      category: "CRM & CDP",
      tools: ["HubSpot", "Salesforce", "Customer Data Platforms"]
    },
    {
      category: "Acquisition & Media",
      tools: ["Google Ads", "LinkedIn Campaign Manager", "Meta Ads"]
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Growth Stack
          </h2>
        </div>

        <div className="space-y-10">
          {stackCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-heading text-xl font-semibold text-accent">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.tools.map((tool, toolIndex) => (
                  <span 
                    key={toolIndex}
                    className="inline-block px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground hover:border-accent hover:bg-accent/5 transition-all duration-250 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthStackSection;