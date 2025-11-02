const CareerTrajectorySection = () => {
  const experiences = [
    {
      period: "Jun 2023 – Present",
      title: "Principal, AI & MarTech Transformation",
      company: "Karn Consulting",
      website: "https://karnconsulting.co",
      achievement: "Architecting AI-driven MarTech ecosystems integrating CRM, automation, and analytics for unified growth intelligence. Built predictive lead-scoring and segmentation models on AWS / Vertex AI; automated campaign reporting with LLM agents cutting analysis time 70%. Designed multi-source marketing data pipelines improving ROAS visibility 42% and enabling data-to-decision execution."
    },
    {
      period: "Aug 2021 – Jun 2023",
      title: "Client Account Manager",
      company: "Standout Authority",
      website: "https://standoutauthority.com/",
      achievement: "Led LinkedIn branding programs for Fortune 500 executives; merged content analytics, AI automation, and event activation. Built virality-prediction models (+30% reach) and automated content workflows (45% manual effort)."
    },
    {
      period: "Dec 2019 – Jun 2021",
      title: "Google Ads Analyst",
      company: "WNS Global Services",
      website: "https://www.wns.com/",
      achievement: "Managed >$1M ad spend; implemented predictive budget allocation (+25% ROI). Automated BigQuery dashboards and attribution across Search, Display & YouTube."
    },
    {
      period: "May 2017 – Dec 2019",
      title: "Founder",
      company: "Enterpriser Initiative",
      achievement: "Built India's first college entrepreneurship network linking 10,000+ students with 40+ global mentors via live video. Ran digital + on-ground campaigns and managed 30+ campus ambassadors."
    },
    {
      period: "Oct 2015 – Apr 2017",
      title: "Project Manager",
      company: "Kartrocket (now Shiprocket)",
      website: "https://www.shiprocket.in/",
      achievement: "Delivered end-to-end e-commerce builds with integrated analytics (GA, FB Pixel, GTM), SEO & ad systems aligned to ROI objectives."
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Career Trajectory
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
            
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
                          exp.website ? (
                            <a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-accent font-medium hover:underline"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            <p className="text-accent font-medium">
                              {exp.company}
                            </p>
                          )
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