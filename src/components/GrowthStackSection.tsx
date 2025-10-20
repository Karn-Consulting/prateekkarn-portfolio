const GrowthStackSection = () => {
  const stackCategories = [
    {
      category: "Automation & Growth Systems",
      tools: [
        "Meta Ads",
        "Google Ads",
        "LinkedIn Ads",
        "SEO & GEO (Generative Engine Optimization)",
        "Automation & Integrations (Zapier / Make / n8n)"
      ]
    },
    {
      category: "AI & Machine Learning",
      tools: [
        "Agentic AI & LLM Orchestration (LangChain / LangGraph / CrewAI / AutoGen)",
        "RAG & MCP (context systems & tools)",
        "Python & SQL",
        "Data Engineering & Pipelines (dbt / Airflow / Prefect / ETL)",
        "Infrastructure & Deployment Ops (Docker / K8s / CI-CD / Observability)"
      ]
    },
    {
      category: "MarTech & CRM",
      tools: [
        "CRM & Marketing Automation (Salesforce / HubSpot / GoHighLevel / ActiveCampaign)",
        "Lead Scoring & Enrichment (Apollo / Clearbit)",
        "Customer Journey Automation & Drip Flows",
        "Personalization & Segmentation",
        "Attribution & Lifecycle Analytics"
      ]
    },
    {
      category: "Analytics & BI",
      tools: [
        "Data Warehousing & Modeling (BigQuery / Snowflake / dbt)",
        "Visualization & BI (Looker Studio / Tableau)",
        "Web & Engagement Analytics (GA4 / Mixpanel)",
        "Experimentation & A/B Testing",
        "Value & ROI Analytics (Cost / Usage / FinOps)"
      ]
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