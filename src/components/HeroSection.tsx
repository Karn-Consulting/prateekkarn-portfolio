import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5 animate-gradient-mesh"></div>
      </div>

      {/* Abstract SVG Illustration */}
      <svg className="absolute inset-0 w-full h-full -z-5 opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Network nodes */}
        <circle cx="10%" cy="20%" r="4" fill="hsl(var(--accent))" opacity="0.4" />
        <circle cx="85%" cy="15%" r="3" fill="hsl(var(--accent))" opacity="0.3" />
        <circle cx="90%" cy="75%" r="5" fill="hsl(var(--accent))" opacity="0.4" />
        <circle cx="15%" cy="85%" r="3" fill="hsl(var(--accent))" opacity="0.3" />
        {/* Connecting lines */}
        <path d="M 10 20 Q 400 100 850 150" stroke="url(#lineGradient)" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M 150 850 Q 600 600 900 750" stroke="url(#lineGradient)" strokeWidth="1" fill="none" opacity="0.3" />
        {/* KPI tiles suggestion */}
        <rect x="75%" y="25%" width="60" height="40" rx="4" fill="hsl(var(--accent))" opacity="0.1" stroke="hsl(var(--accent))" strokeWidth="1" />
        <rect x="70%" y="60%" width="50" height="35" rx="4" fill="hsl(var(--accent))" opacity="0.1" stroke="hsl(var(--accent))" strokeWidth="1" />
      </svg>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Prateek Karn
              </h1>
              <p className="font-heading text-xl lg:text-2xl text-accent font-medium">
                AI Business Architect
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I design intelligent MarTech & AI systems that connect data, automation, and decision intelligence — giving enterprises real-time insight, faster decisions, and measurable growth.
              </p>
            </div>
            
            <Button 
              variant="cta" 
              size="lg"
              className="font-medium text-base px-8 py-6 h-auto"
            >
              Book a Strategy Call
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-sm">
                <span className="font-semibold text-foreground">10+ yrs</span>
                <span className="text-muted-foreground ml-1">experience</span>
              </div>
              <div className="w-px h-5 bg-border"></div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">Enterprise systems</span>
                <span className="text-muted-foreground ml-1">architecture</span>
              </div>
              <div className="w-px h-5 bg-border"></div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">Global remit</span>
                <span className="text-muted-foreground ml-1">& impact</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:justify-self-end">
            <div className="relative w-full max-w-md mx-auto lg:max-w-lg group">
              <img
                src="/lovable-uploads/5908bbc8-440b-47b9-8d4c-dea7ea423015.png"
                alt="Prateek Karn - AI Business Architect"
                className="w-full h-auto rounded-lg shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
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