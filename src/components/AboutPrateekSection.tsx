import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPrateekSection = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Matching other sections */}
        <div className="mb-8 sm:mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
            About Prateek
          </h2>
          <p className="text-muted-foreground text-sm max-w-md">
            The story behind the systems.
          </p>
        </div>

        {/* Content Card - Premium styling matching testimonials */}
        <div className="p-5 sm:p-6 md:p-8 bg-card/50 border border-border/50 rounded-lg hover:border-accent/20 transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
            {/* Photo - Smaller, grayscale, matching testimonial photos */}
            <div className="flex-shrink-0">
              <div className="w-28 h-36 sm:w-32 sm:h-40 bg-secondary overflow-hidden ring-1 ring-accent/20">
                <img 
                  src="/prateek-karn-about.jpg" 
                  alt="Prateek Karn - AI Business Architect"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="flex flex-col justify-center text-center md:text-left">
              {/* Primary Bio Text */}
              <p className="text-foreground/90 text-sm sm:text-base leading-[1.8] mb-4">
                Most consultants specialize. Prateek integrates. With roots in performance marketing and a trajectory through data engineering and AI, he architects systems where strategy and execution are inseparable.
              </p>
              
              {/* Secondary Bio Text */}
              <p className="text-muted-foreground text-xs sm:text-sm leading-[1.75] mb-6">
                From scaling ad campaigns to building enterprise-grade AI systems, his journey spans every layer of the modern growth stack — giving him a rare perspective that bridges technical depth with strategic vision.
              </p>

              {/* CTA Button - Matching site style */}
              <div>
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 text-xs tracking-wider uppercase font-medium group"
                >
                  Read the Full Story
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
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
