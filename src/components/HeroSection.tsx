import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/prateek-hero-new.jpg";
import { useConsultationModal } from "@/contexts/ConsultationModalContext";

const HeroSection = () => {
  const { openModal } = useConsultationModal();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Name - Order 1 on mobile */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight order-1 lg:order-none">
              Prateek Karn
            </h1>
            
            {/* Photo - Order 2 on mobile, hidden on desktop (shows in right column) */}
            <Link to="/about" className="relative w-full max-w-sm mx-auto lg:hidden order-2 block cursor-pointer">
              <div className="relative w-full group">
                <img
                  src={heroImage}
                  alt="Prateek Karn - AI Business Architect"
                  className="w-full h-auto rounded-lg shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-700 ease-in-out pointer-events-none"></div>
              </div>
            </Link>

            {/* Rest of content - Order 3 on mobile */}
            <div className="space-y-4 lg:space-y-6 order-3 lg:order-none">
              <p className="font-heading text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium">
                AI Business Architect | Building Intelligent MarTech Systems
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                I design AI-powered business systems that integrate marketing, data, and automation into intelligent growth engines. Transforming complex data architectures into measurable enterprise outcomes.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start order-4 lg:order-none">
              {/* Primary CTA - Request a Consultation */}
              <Button 
                variant="cta" 
                size="lg"
                onClick={openModal}
                className="font-semibold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto group bg-[#8b7355] text-white hover:bg-[#7a6548]"
              >
                Request a Consultation
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
              
              {/* Secondary CTA - View My Work */}
              <Link to="/mywork">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="font-semibold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto group border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white transition-all duration-300"
                >
                  View My Work
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image - Desktop only, clickable to About page */}
          <Link to="/about" className="hidden lg:block relative lg:justify-self-end w-full cursor-pointer">
            <div className="relative w-full max-w-lg group">
              <img
                src={heroImage}
                alt="Prateek Karn - AI Business Architect"
                className="w-full h-auto rounded-lg shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-700 ease-in-out pointer-events-none"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
