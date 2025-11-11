import { Button } from "@/components/ui/button";

const MidPageCTASection = () => {
  const scrollToGrowthStack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('growth-stack');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
          Ready to achieve similar impact?
        </h2>
        
        <p className="text-lg lg:text-xl text-muted-foreground">
          Let's map your AI-powered growth system in a 20-minute consultation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a 
            href="https://calendly.com/prateekkarn5/free-consultationhighlevel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="cta" 
              size="lg"
              className="font-medium text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto group"
            >
              Schedule a Consultation
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Button>
          </a>
          
          <a 
            href="#growth-stack"
            onClick={scrollToGrowthStack}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
          >
            Explore the Growth Stack
          </a>
        </div>
      </div>
    </section>
  );
};

export default MidPageCTASection;
