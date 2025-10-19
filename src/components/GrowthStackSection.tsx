const GrowthStackSection = () => {
  const stackCategories = [
    {
      category: "Automation & Paid Media",
      tools: ["Meta Ads", "Google Ads", "LinkedIn Ads", "SEO & GEO", "No-Code Automation"]
    },
    {
      category: "AI & Machine Learning",
      tools: ["Agentic AI", "RAG", "MCP", "Python & SQL", "LangChain"]
    },
    {
      category: "MarTech & CRM",
      tools: ["HubSpot", "GoHighLevel", "Salesforce", "ActiveCampaign"]
    },
    {
      category: "Analytics & BI", 
      tools: ["Looker Studio", "BigQuery", "Google Analytics 4", "Tableau"]
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Growth Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stackCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="font-heading text-xl font-semibold text-accent border-b border-accent/20 pb-3">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <li 
                    key={toolIndex}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
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