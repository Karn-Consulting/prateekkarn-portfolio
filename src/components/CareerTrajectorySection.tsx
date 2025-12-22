const CareerTrajectorySection = () => {
  const experiences = [
    {
      period: "Jun 2023 – Present",
      title: "Principal, AI & MarTech Transformation",
      company: "Karn Consulting",
      website: "https://karnconsulting.co",
      achievements: [
        "Architected unified AI and MarTech ecosystems (CRM, Analytics, AI) to deliver C-suite-level \"growth intelligence\".",
        "Engineered predictive lead-scoring models on AWS and Vertex AI and deployed LLM agents to automate campaign reporting, cutting data analysis time by 70%.",
        "Designed multi-source marketing data pipelines that improved ROAS visibility by 42% and enabled true data-to-decision execution for leadership."
      ]
    },
    {
      period: "Aug 2021 – Jun 2023",
      title: "Client Account Manager",
      company: "Standout Authority",
      website: "https://standoutauthority.com/",
      achievements: [
        "Designed and implemented personal branding and digital strategy for Fortune 500 C-level executives, integrating content analytics, AI-driven automation, and event activation.",
        "Built virality-prediction models that successfully increased executive content reach by +30%.",
        "Automated complex content-to-social workflows, reducing manual publishing and analytics effort by 45%."
      ]
    },
    {
      period: "Dec 2019 – Jun 2021",
      title: "Google Ads Specialist",
      company: "WNS Global Services",
      website: "https://www.wns.com/",
      achievements: [
        "Managed >$1M in annual ad spend, implementing a predictive budget-allocation model that improved client ROI by +25%.",
        "Automated enterprise-scale attribution modeling and performance dashboards using BigQuery, covering Search, Display, and YouTube."
      ]
    },
    {
      period: "May 2017 – Dec 2019",
      title: "Founder",
      company: "Enterpriser",
      achievements: [
        "Pioneered India's first college-focused digital ecosystem, securing video-conference lectures from Fortune 500 entrepreneurs, billionaires, and media producers.",
        "Scaled the platform from scratch to activate a 10,000+ member network nationwide.",
        "Managed all digital marketing operations and a leadership team of 30+ campus ambassadors to drive network growth."
      ]
    },
    {
      period: "Oct 2015 – Apr 2017",
      title: "Project Manager",
      company: "Kartrocket (now Shiprocket)",
      website: "https://www.shiprocket.in/",
      achievements: [
        "Managed the end-to-end delivery of B2C e-commerce platforms on the company's proprietary website builder, ensuring alignment with client ROI objectives.",
        "Integrated foundational growth stacks, including Analytics (GA, GTM), Ad Systems (FB Pixel), and SEO for new builds."
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Career Trajectory
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 sm:left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
            
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12">
                  {/* Timeline dot */}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-accent rounded-full flex-shrink-0 flex items-center justify-center border-2 sm:border-4 border-background shadow-lg">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-foreground rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-2 sm:space-y-3 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 sm:gap-2">
                      <div className="min-w-0">
                        <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.company && (
                          exp.website ? (
                            <a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-accent font-medium hover:underline text-sm sm:text-base"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            <p className="text-accent font-medium text-sm sm:text-base">
                              {exp.company}
                            </p>
                          )
                        )}
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground font-medium bg-secondary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full w-fit mt-1 lg:mt-0 flex-shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2 sm:space-y-2.5 mt-2 sm:mt-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3">
                          <span className="text-accent mt-1 sm:mt-1.5 flex-shrink-0 text-sm sm:text-base">•</span>
                          <span className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
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
