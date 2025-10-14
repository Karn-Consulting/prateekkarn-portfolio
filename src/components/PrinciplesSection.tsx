import { Compass, Workflow, Gauge } from "lucide-react";
import { useEffect, useState } from "react";

const PrinciplesSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('principles-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const principles = [
    {
      icon: Compass,
      title: "Strategy",
      description: "Operate as a system, not a set of tools. Every channel, touchpoint, and decision point must connect to deliver cohesive outcomes.",
    },
    {
      icon: Workflow,
      title: "Intelligent Automation", 
      description: "Automate decisions, not just tasks. Build workflows that learn, adapt, and optimize without human intervention.",
    },
    {
      icon: Gauge,
      title: "Decision Intelligence",
      description: "Measure what matters: revenue velocity, LTV/CAC ratios, and decision lead-time. Real-time intelligence drives real growth.",
    }
  ];

  return (
    <section id="principles-section" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Principles
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <div 
                key={index} 
                className={`text-center space-y-6 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-accent/30 flex items-center justify-center">
                    <IconComponent 
                      className="w-8 h-8 text-accent" 
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

export default PrinciplesSection;
