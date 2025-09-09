import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Prateek Karan
              </h1>
              <p className="font-heading text-xl lg:text-2xl text-muted-foreground font-medium">
                Architecting Digital Growth for Market Leaders.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                A strategic advisor with a decade of experience building data-driven marketing engines for B2B leaders in the US and UK. I translate complex data into profitable business outcomes.
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
            <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
              <img
                src="/lovable-uploads/5908bbc8-440b-47b9-8d4c-dea7ea423015.png"
                alt="Prateek Karan - Digital Marketing Strategist"
                className="w-full h-auto rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;