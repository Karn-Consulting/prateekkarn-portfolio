const ProofOfImpactSection = () => {
  const metrics = [
    {
      value: "$XM+",
      description: "Multi-Million Dollar Ad Budgets Managed"
    },
    {
      value: "25%",
      description: "Average Client ROI Increase"
    },
    {
      value: "F500",
      description: "C-Suite Executives Advised"
    },
    {
      value: "10K+",
      description: "Students Mentored via Founder Program"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Quantifiable Impact
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="font-heading text-4xl lg:text-6xl font-bold text-accent">
                {metric.value}
              </div>
              <p className="text-sm lg:text-base text-muted-foreground leading-tight">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofOfImpactSection;