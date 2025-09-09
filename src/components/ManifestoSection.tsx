import { Compass, Settings, TrendingUp } from "lucide-react";

const ManifestoSection = () => {
  const principles = [
    {
      icon: Compass,
      title: "Strategy",
      description: "Owning the end-to-end B2B sales funnel, from lead generation to C-suite advisory."
    },
    {
      icon: Settings,
      title: "AI & Automation",
      description: "Architecting custom AI agents and workflows to increase operational efficiency and nurture leads."
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Optimizing for key commercial metrics including ROAS, LTV/CAC, and campaign ROI."
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Data-First Philosophy
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <div key={index} className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;