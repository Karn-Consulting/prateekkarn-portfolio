import { Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <footer className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
          Ready for Intelligent Growth?
        </h2>
        
        <div className="text-lg lg:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
          <p>Transform your marketing with AI-powered automation and data systems built for one purpose: Measurable Results.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <a 
            href="mailto:prateek.karn@prateekkarn.com"
            className="flex items-center gap-3 text-primary-foreground hover:text-accent transition-colors duration-200"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">prateek.karn@prateekkarn.com</span>
          </a>
          
          <div className="w-px h-6 bg-primary-foreground/30 hidden sm:block"></div>
          
          <a 
            href="https://linkedin.com/in/prateekkarn" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-primary-foreground hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>

        <div className="pt-12 border-t border-primary-foreground/20 space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a 
              href="/privacy-policy" 
              className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-200"
            >
              Privacy Policy
            </a>
            <span className="opacity-50">·</span>
            <a 
              href="/terms-and-conditions" 
              className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-200"
            >
              Terms & Conditions
            </a>
          </div>
          <p className="text-sm opacity-70">
            © 2025 Prateek Karn - Entrepreneur | AI Business Architect.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;