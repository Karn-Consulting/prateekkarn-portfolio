import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPrateekSection = () => {
  return (
    <section className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Matching other sections like "My Select Works", "Career Trajectory" */}
        <div className="mb-10 sm:mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            About Prateek
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
            The story behind the systems.
          </p>
        </div>

        {/* Content Card - Premium styling matching other cards */}
        <div className="p-6 sm:p-8 md:p-10 bg-card/50 border border-border/50 rounded-lg hover:border-accent/20 transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
            {/* Photo - Colored, matching premium aesthetic */}
            <div className="flex-shrink-0">
              <div className="w-36 h-44 sm:w-40 sm:h-48 bg-secondary overflow-hidden rounded-sm shadow-md ring-1 ring-border/30">
                <img 
                  src="/prateek-karn-about.jpg" 
                  alt="Prateek Karn - AI Business Architect"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="flex flex-col justify-center text-center md:text-left flex-1">
              {/* Primary Bio Text */}
              <p className="text-foreground/90 text-base sm:text-lg leading-[1.8] mb-5">
                Most consultants specialize. Prateek integrates. With roots in performance marketing and a trajectory through data engineering and AI, he architects systems where strategy and execution are inseparable.
              </p>
              
              {/* Secondary Bio Text */}
              <p className="text-muted-foreground text-sm sm:text-base leading-[1.75] mb-8">
                From scaling ad campaigns to building enterprise-grade AI systems, his journey spans every layer of the modern growth stack — giving him a rare perspective that bridges technical depth with strategic vision.
              </p>

              {/* CTA Button - Matching site style */}
              <div>
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 text-xs tracking-wider uppercase font-medium group"
                >
                  Read the Full Story
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPrateekSection;
