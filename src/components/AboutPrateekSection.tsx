import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPrateekSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Matching TestimonialsSection exactly */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            About Prateek
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            The story behind the systems.
          </p>
        </div>

        {/* Content Card - Premium styling with pop/lift hover effect */}
        <div className="group relative p-6 sm:p-8 md:p-10 bg-card/50 border border-border/50 rounded-lg hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-28 h-36 sm:w-36 sm:h-44 md:w-40 md:h-48 bg-secondary overflow-hidden rounded-sm shadow-md ring-1 ring-accent/20">
                <img 
                  src="/prateek-karn-about.jpg" 
                  alt="Prateek Karn - AI Business Architect"
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
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

              {/* CTA Button */}
              <div>
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#8b7355] text-white hover:bg-[#7a6548] transition-all duration-300 text-xs tracking-wider uppercase font-medium group/btn"
                >
                  Read the Full Story
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
