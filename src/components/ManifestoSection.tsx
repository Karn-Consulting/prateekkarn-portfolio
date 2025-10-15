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
      title: "Intelligent Architecture",
      description: "Designing unified MarTech systems that integrate CRM, automation, analytics, and AI models for adaptive, data-driven decision-making across your enterprise.",
      animation: "animate-spin-slow"
    },
    {
      icon: Settings,
      title: "AI-Powered Automation", 
      description: "Engineering predictive segmentation models and closed-loop workflows that accelerate lead nurturing, reduce CAC, and enable real-time optimization.",
      animation: "animate-spin"
    },
    {
      icon: TrendingUp,
      title: "Measurable Outcomes",
      description: "Building automated data pipelines and ROI dashboards that provide C-suite visibility into performance metrics, ensuring every decision is backed by intelligence.",
      animation: "animate-bounce"
    }
  ];

  return (
    <section id="manifesto-section" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building Intelligent Systems for Modern Enterprises
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