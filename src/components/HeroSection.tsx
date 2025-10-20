import { Button } from "@/components/ui/button";
import heroImage from "@/assets/prateek-hero.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Prateek Karn
              </h1>
              <p className="font-heading text-xl lg:text-2xl text-muted-foreground font-medium">
                AI Business Architect | Building Intelligent MarTech Systems
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I design AI-powered business systems that integrate marketing, data, and automation into intelligent growth engines. Transforming complex data architectures into measurable enterprise outcomes.
              </p>
            </div>
            
            <Button 
              variant="cta" 
              size="lg"
              className="font-medium text-base px-8 py-6 h-auto"
            >
              Schedule a Consultation
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative lg:justify-self-end">
            <div className="relative w-full max-w-sm mx-auto lg:max-w-md group">
              <img
                src={heroImage}
                alt="Prateek Karan - AI Business Architect"
                className="w-full h-auto object-cover rounded-lg shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-700 ease-in-out pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;