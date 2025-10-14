import { Compass, Settings, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const ManifestoSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('manifesto-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const principles = [
    {
      icon: Compass,
      title: "Strategy",
      description: "Handling LinkedIn accounts of C-level executives from Fortune 500 companies, delivering measurable results.",
      animation: "animate-spin-slow"
    },
    {
      icon: Settings,
      title: "AI & Automation", 
      description: "Architecting custom AI agents and workflows to increase operational efficiency and nurture leads.",
      animation: "animate-spin"
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Optimizing for key commercial metrics including ROAS, LTV/CAC, and campaign ROI.",
      animation: "animate-bounce"
    }
  ];

  return (
    <section id="manifesto-section" className="py-24 px-6 lg:px-8">
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
                    <IconComponent 
                      className={`w-8 h-8 text-accent ${inView ? principle.animation : ''}`} 
                      strokeWidth={1.5} 
                    />
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