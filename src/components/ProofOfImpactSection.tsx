import { useEffect, useState } from "react";

const ProofOfImpactSection = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [inView, setInView] = useState(false);

  const metrics = [
    {
      value: "10+",
      target: 10,
      description: "Years Building AI & MarTech Systems"
    },
    {
      value: "40%",
      target: 40,
      description: "Increase in Qualified Lead Generation"
    },
    {
      value: "25%",
      target: 25,
      description: "Average Client ROI Improvement"
    },
    {
      value: "10K+",
      target: 10000,
      description: "Students Mentored in Entrepreneurship"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
          
          // Animate counters
          metrics.forEach((_, index) => {
            const target = metrics[index].target;
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = target / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('proof-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [inView]);

  const formatValue = (counter: number, index: number) => {
    switch (index) {
      case 0: return counter >= 10 ? "10+" : `${counter}+`;
      case 1: return `${counter}%`;
      case 2: return `${counter}%`;
      case 3: return counter >= 10000 ? "10K+" : `${Math.floor(counter/1000)}K+`;
      default: return counter.toString();
    }
  };

  return (
    <section id="proof-section" className="py-24 px-6 lg:px-8 bg-secondary/30">
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
                {formatValue(counters[index], index)}
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