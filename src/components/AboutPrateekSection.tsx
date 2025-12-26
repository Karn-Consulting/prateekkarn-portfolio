import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPrateekSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Matching other sections */}
        <div className="mb-10 sm:mb-12 md:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            About Prateek
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            The story behind the systems.
          </p>
        </div>

        {/* Content Card - Premium styling like testimonials */}
        <div className="p-6 sm:p-8 md:p-10 bg-card/50 border border-border/50 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column - Photo (smaller, refined) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-40 h-48 sm:w-44 sm:h-52 lg:w-48 lg:h-56">
                <div className="w-full h-full bg-secondary overflow-hidden ring-1 ring-accent/20">
                  <img 
                    src="/prateek-karn-about.jpg" 
                    alt="Prateek Karn - AI Business Architect"
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Bio Text */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              {/* Primary Bio Text */}
              <p className="text-foreground/90 text-sm sm:text-base leading-[1.85] mb-5">
                Most consultants specialize. Prateek integrates. With roots in performance marketing and a trajectory through data engineering and AI, he architects systems where strategy and execution are inseparable.
              </p>
              
              {/* Secondary Bio Text */}
              <p className="text-muted-foreground text-xs sm:text-sm leading-[1.8] mb-8">
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
