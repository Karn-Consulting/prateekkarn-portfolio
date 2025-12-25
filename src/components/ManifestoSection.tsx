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
    <section id="manifesto-section" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Building Intelligent Systems for Modern Enterprises
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-10 md:gap-12 lg:gap-16">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <div key={index} className="text-center space-y-4 sm:space-y-6">
                <div className="flex justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <IconComponent 
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent" 
                      strokeWidth={1.5} 
                    />
                  </div>
                </div>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
