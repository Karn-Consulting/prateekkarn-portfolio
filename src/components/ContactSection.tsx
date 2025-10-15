import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <footer className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
          Let's Build Your Intelligent Growth System
        </h2>
        
        <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
          Ready to transform your marketing infrastructure with AI-powered automation and intelligent data systems? Let's discuss how we can architect measurable growth for your enterprise.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <a 
            href="mailto:prateekkarn5@gmail.com"
            className="flex items-center gap-3 text-primary-foreground hover:text-accent transition-colors duration-200"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">imperialkarn[at]gmail[dot]com</span>
          </a>
          
          <div className="w-px h-6 bg-primary-foreground/30 hidden sm:block"></div>
          
          <a 
            href="tel:+917576956682"
            className="flex items-center gap-3 text-primary-foreground hover:text-accent transition-colors duration-200"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">+91-7576956682</span>
          </a>
          
          <div className="w-px h-6 bg-primary-foreground/30 hidden sm:block"></div>
          
          <a 
            href="#" 
            className="flex items-center gap-3 text-primary-foreground hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>

        <div className="pt-12 border-t border-primary-foreground/20">
          <p className="text-sm opacity-70">
            © 2025 Prateek Karn. AI Business Architect.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;