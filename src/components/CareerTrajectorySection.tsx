const CareerTrajectorySection = () => {
  const experiences = [
    {
      period: "2024-Present",
      title: "Principal, AI & MarTech Transformation",
      company: "Karn Consulting",
      achievement: "Designing intelligent MarTech architectures that unify CRM, automation, analytics, and AI models. Engineering AI-led lead scoring and predictive segmentation on AWS and Vertex AI."
    },
    {
      period: "Aug 2021 – Jun 2023",
      title: "Client Account Manager",
      company: "Standout Authority",
      achievement: "Led LinkedIn personal-branding programs for Fortune 500 executives/founders; combined content analytics, event activation, and AI automation. Ran LinkedIn Live & engagement campaigns; linked attendance/comment velocity to inbound lead spikes. Built AI content-automation pipelines reducing content development time 55%. Designed virality prediction models (embeddings/regression), lifting average reach 30%+."
    },
    {
      period: "Dec 2019 – Jun 2021",
      title: "Google Ads Analyst",
      company: "WNS Global Services",
      achievement: "Managed multi-region portfolios (>$1M/yr); predictive budget-allocation via Google Ads API improved ROI 25%. Automated keyword/bid tracking with BigQuery; dashboards for 30+ accounts. Performed multi-touch attribution to rebalance Search/Display/YouTube."
    },
    {
      period: "May 2017 – Dec 2019",
      title: "Founder",
      company: "Enterpriser Initiative",
      achievement: "Built a college entrepreneurship program across with 40+ global entrepreneurs as mentors via live video, touched over 100+ Colleges in India. Reached 10,000+ students; recruited & led 30+ campus ambassadors; ran FB/Google Ads & on-ground campaigns. Produced brochures/flyers & print campaigns; coordinated global mentorship sessions."
    },
    {
      period: "Oct 2015 – Apr 2017",
      title: "Project Manager",
      company: "Kartrocket (now Shiprocket)",
      achievement: "Managed end-to-end e-commerce site builds from requirements to launch (design, payments, product architecture). Implemented analytics & conversion tracking (GA, FB Pixel, GTM) with measurable KPIs at launch. Drove SEO (on-page/off-page) and set up Meta/Google Ads aligned to sales objectives; delivered post-launch training/support."
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