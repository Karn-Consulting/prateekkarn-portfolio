const AreasOfArchitectureSection = () => {
  const leftServices = [
    "B2B Growth Strategy",
    "AI & Automation Architecture",
    "Performance Marketing & ROI Optimization"
  ];

  const rightServices = [
    "Executive Brand Advisory", 
    "Content & SEO Ecosystems",
    "Data & LTV/CAC Modeling"
  ];

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Areas of Architecture
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="space-y-8">
            {leftServices.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                  {service}
                </h3>
                <div className="w-12 h-0.5 bg-accent mt-3 group-hover:w-24 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightServices.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                  {service}
                </h3>
                <div className="w-12 h-0.5 bg-accent mt-3 group-hover:w-24 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasOfArchitectureSection;