import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPrateekSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            About Prateek
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Photo Container with subtle styling */}
              <div className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[26rem] overflow-hidden rounded-sm ring-1 ring-accent/20 shadow-lg">
                <img 
                  src="/prateek-karn-about.jpg" 
                  alt="Prateek Karn - AI Business Architect"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Subtle decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/10 rounded-sm -z-10" />
            </div>
          </div>

          {/* Right Column - Bio Text */}
          <div className="flex flex-col justify-center">
            {/* Bio Text */}
            <p className="text-foreground/90 text-base sm:text-lg leading-[1.9] mb-8">
              Most consultants specialize. Prateek integrates. With roots in performance marketing and a trajectory through data engineering and AI, he architects systems where strategy and execution are inseparable.
            </p>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-[1.8] mb-10">
              From scaling ad campaigns to building enterprise-grade AI systems, his journey spans every layer of the modern growth stack — giving him a rare perspective that bridges technical depth with strategic vision.
            </p>

            {/* CTA Button */}
            <div>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 text-sm tracking-wider uppercase font-medium group"
              >
                Read the Full Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPrateekSection;
