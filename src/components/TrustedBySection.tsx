const TrustedBySection = () => {
  const sectors = ["Enterprise SaaS", "Professional Services", "E-commerce", "Emerging Tech"];

  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Leaders Across Sectors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advised founders, executives, and growth teams across technology, services, and e-commerce.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left space-x-8 hover:animation-pause">
            {/* First set */}
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground whitespace-nowrap"
              >
                {sector}
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {sectors.map((sector, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground whitespace-nowrap"
              >
                {sector}
              </div>
            ))}
            {/* Triple for extra smoothness */}
            {sectors.map((sector, index) => (
              <div
                key={`triple-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground whitespace-nowrap"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;