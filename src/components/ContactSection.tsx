import { Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <footer className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Main Heading */}
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Architect Your Advantage
        </h2>
        
        {/* Subtitle */}
        <div className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed px-4">
          <p>Transform your marketing with AI-powered automation and data systems built for one purpose: Measurable Results.</p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8">
          <a 
            href="mailto:prateek.karn@prateekkarn.com"
            className="flex items-center gap-2 sm:gap-3 text-primary-foreground hover:text-accent transition-colors duration-200 text-sm sm:text-base"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="font-medium break-all sm:break-normal">prateek.karn@prateekkarn.com</span>
          </a>
          
          <div className="w-px h-4 sm:h-6 bg-primary-foreground/30 hidden sm:block"></div>
          
          <a 
            href="https://linkedin.com/in/prateekkarn" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 text-primary-foreground hover:text-accent transition-colors duration-200 text-sm sm:text-base"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>

        {/* Footer Links */}
        <div className="pt-8 sm:pt-10 md:pt-12 border-t border-primary-foreground/20 space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <a 
              href="/privacy-policy" 
              className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-200"
            >
              Privacy Policy
            </a>
            <span className="opacity-50 hidden sm:inline">·</span>
            <a 
              href="/terms-and-conditions" 
              className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-200"
            >
              Terms & Conditions
            </a>
          </div>
          <p className="text-xs sm:text-sm opacity-70">
            © 2025 Prateek Karn. AI Business Architect.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
