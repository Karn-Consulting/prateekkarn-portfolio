import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <footer className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* CTA Card with Glow */}
          <div className="p-10 lg:p-12 bg-card/5 border border-primary-foreground/20 rounded-lg hover:animate-glow-pulse transition-all duration-300">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Let's Architect Your Growth.
            </h2>
            
            <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-8">
              Ready to build intelligent systems that drive measurable outcomes? Let's discuss your growth architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:prateekkarn5@gmail.com"
                className="flex items-center gap-3 text-primary-foreground hover:text-accent transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">prateek[at]karn[dot]consulting</span>
              </a>
              
              <div className="w-px h-6 bg-primary-foreground/30 hidden sm:block"></div>
              
              <a 
                href="#" 
                className="flex items-center gap-3 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-250 font-medium"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm opacity-70">
              © 2025 Prateek Karn. AI Business Architect.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;