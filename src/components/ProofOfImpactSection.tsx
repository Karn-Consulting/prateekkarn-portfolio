import { useEffect, useState } from "react";

const ProofOfImpactSection = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [inView, setInView] = useState(false);

  const metrics = [
    {
      value: "30-50%",
      target: 50,
      description: "Decision Lead-Time Reduction",
      sparkline: "M0,20 L10,15 L20,18 L30,10 L40,5"
    },
    {
      value: "+25%",
      target: 25,
      description: "ROI via Predictive Targeting",
      sparkline: "M0,25 L10,22 L20,20 L30,15 L40,10"
    },
    {
      value: "100%",
      target: 100,
      description: "Executive-Ready Intelligence Dashboards",
      sparkline: "M0,30 L10,25 L20,15 L30,10 L40,5"
    },
    {
      value: "AI",
      target: 100,
      description: "AI-Enabled Operating Models",
      sparkline: "M0,20 L10,18 L20,12 L30,8 L40,3"
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
      case 0: return counter >= 50 ? "↓30-50%" : `↓${counter}%`;
      case 1: return `+${counter}%`;
      case 2: return counter >= 100 ? "100%" : `${counter}%`;
      case 3: return "AI";
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
              {/* Tiny sparkline SVG */}
              <svg className="w-16 h-8 mx-auto opacity-50" viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d={metric.sparkline} 
                  stroke="hsl(var(--accent))" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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