const CareerTrajectorySection = () => {
  const experiences = [
    {
      period: "2024-Present",
      title: "Digital Marketing Consultant",
      company: "",
      achievement: "Advising B2B clients on data-driven growth and deploying custom AI agents."
    },
    {
      period: "2023-2024",
      title: "Digital Marketing Manager",
      company: "Ashapurna Buildcon Ltd.",
      achievement: "Directed a 6-person marketing team, owning content and SEO strategy."
    },
    {
      period: "2021-2023",
      title: "Account Manager",
      company: "Standout Authority",
      achievement: "Served as primary strategic advisor to C-suite executives from Fortune 500 corporations."
    },
    {
      period: "2019-2021",
      title: "Google Ads Specialist",
      company: "WNS",
      achievement: "Managed Google Ads strategies that increased client ROI by an average of 25%."
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