import { useEffect, useState } from "react";

const CareerTrajectorySection = () => {
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

    const element = document.getElementById('career-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: "2024-Present",
      title: "AI Business Architect & Consultant",
      company: "",
      achievement: "Architecting intelligent MarTech systems and AI-driven operating models for enterprise growth teams."
    },
    {
      period: "2023-2024",
      title: "Marketing Systems Lead",
      company: "Enterprise Real Estate",
      achievement: "Built data-driven marketing infrastructure; directed cross-functional team executing integrated campaigns."
    },
    {
      period: "2021-2023",
      title: "Executive Growth Advisor",
      company: "Agency Practice",
      achievement: "Strategic advisor to C-suite leaders at global enterprises; designed LinkedIn content and brand positioning."
    },
    {
      period: "2019-2021",
      title: "Performance Marketing Specialist",
      company: "Professional Services",
      achievement: "Managed performance campaigns across paid search and display; optimized LTV/CAC and acquisition efficiency."
    }
  ];

  return (
    <section id="career-section" className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Career Trajectory
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line with stroke animation */}
            <svg className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 h-full" xmlns="http://www.w3.org/2000/svg">
              <line 
                x1="1" 
                y1="0" 
                x2="1" 
                y2="100%" 
                stroke="hsl(var(--accent))" 
                strokeWidth="2" 
                opacity="0.3"
                className={inView ? 'animate-draw-line' : ''}
              />
            </svg>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-8 lg:space-x-12">
                  {/* Timeline dot */}
                  <div className="w-8 h-8 bg-accent rounded-full flex-shrink-0 flex items-center justify-center border-4 border-background shadow-lg">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h3 className="font-heading text-xl lg:text-2xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.company && (
                          <p className="text-accent font-medium">
                            {exp.company}
                          </p>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground font-medium bg-secondary px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic">
                      {exp.achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTrajectorySection;