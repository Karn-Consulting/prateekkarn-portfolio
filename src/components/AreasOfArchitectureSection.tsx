import { useState } from "react";

const AreasOfArchitectureSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      name: "AI Systems & MarTech Architecture",
      description: "Design end-to-end intelligent systems that integrate CRM, marketing automation, and AI decision engines for enterprise-scale operations."
    },
    {
      name: "Intelligent Automation & Orchestration",
      description: "Build workflow orchestrations that automate complex decision trees, lead nurturing sequences, and cross-channel campaign execution."
    },
    {
      name: "Predictive Growth & ROI Modeling",
      description: "Deploy predictive models for customer lifetime value, acquisition cost optimization, and revenue forecasting with real-time dashboards."
    },
    {
      name: "CRM/CDP Integration & Data Design",
      description: "Architect unified customer data platforms that consolidate touchpoints, enabling personalized experiences and accurate attribution."
    },
    {
      name: "Decision Intelligence Dashboards",
      description: "Create executive-ready BI dashboards that surface KPIs, trends, and actionable insights for data-driven strategic decisions."
    },
    {
      name: "Executive Advisory (Operating Model & Scale)",
      description: "Guide leadership teams on operating model transformation, technology stack optimization, and scaling growth infrastructure."
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 relative">
      {/* Subtle SVG wiring background */}
      <svg className="absolute inset-0 w-full h-full -z-10 opacity-5" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 50 Q 200 100 400 50 T 800 50" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" />
        <path d="M 100 200 Q 300 250 500 200 T 900 200" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" />
        <path d="M 50 400 Q 250 450 450 400 T 850 400" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" />
      </svg>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Areas of Architecture
          </h2>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">
          {/* Left Column - Category Tabs */}
          <div className="space-y-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-accent text-accent-foreground font-semibold'
                    : 'bg-secondary/30 text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                }`}
              >
                <span className="text-sm lg:text-base leading-tight block">
                  {category.name}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column - Content with Crossfade */}
          <div className="relative min-h-[300px]">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-400 ${
                  activeTab === index
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4 pointer-events-none'
                }`}
              >
                <div className="bg-card border border-border rounded-lg p-8 lg:p-12 shadow-sm">
                  <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                    {category.name}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasOfArchitectureSection;