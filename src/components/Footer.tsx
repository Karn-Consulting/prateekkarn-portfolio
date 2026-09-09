import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// Noise texture overlay component
const NoiseOverlay = () => (
  <div 
    className="absolute inset-0 pointer-events-none opacity-[0.02]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
    }}
  />
);

// Clean PK Logo Component - Simple text-based design
const PKLogo = ({ onClick }: { onClick: () => void }) => (
  <Button
    type="button"
    variant="ghost"
    onClick={onClick}
    className="group h-auto p-0 text-accent hover:bg-transparent hover:text-accent focus-visible:ring-accent"
    aria-label="Scroll to top"
    title="Back to top"
  >
    <span className="font-heading text-4xl font-normal tracking-normal transition-opacity duration-300 group-hover:opacity-80 sm:text-5xl">
      PK
    </span>
  </Button>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Noise texture overlay */}
      <NoiseOverlay />
      
      <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="mb-6 flex justify-center lg:justify-start">
                <PKLogo onClick={scrollToTop} />
              </div>
              <h3 className="mb-4 font-heading text-3xl font-normal leading-tight tracking-normal sm:text-4xl lg:text-5xl">
                Architect Your Advantage
              </h3>
              <p className="mx-auto max-w-xl text-sm leading-7 text-primary-foreground/60 sm:text-base lg:mx-0">
                Transform your marketing with AI-powered automation and data systems built for one purpose: Measurable Results.
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:flex-col lg:items-end">
              <a
                href="mailto:prateekkarn5@gmail.com"
                className="group inline-flex min-h-12 items-center justify-between gap-5 border-b border-primary-foreground/20 py-3 text-sm text-primary-foreground transition-colors duration-300 hover:border-accent hover:text-accent sm:min-w-72 sm:text-base"
              >
                <span className="inline-flex items-center gap-3">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  prateekkarn5@gmail.com
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/prateekkarn"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-between gap-5 border-b border-primary-foreground/20 py-3 text-sm text-primary-foreground transition-colors duration-300 hover:border-accent hover:text-accent sm:min-w-72 sm:text-base"
                aria-label="Visit Prateek Karn on LinkedIn"
              >
                <span className="inline-flex items-center gap-3">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  Connect on LinkedIn
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-primary-foreground/15 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-primary-foreground/50 sm:text-sm">
                © 2025 Prateek Karn. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs sm:text-sm">
                <Link 
                  to="/privacy-policy" 
                  className="text-primary-foreground/50 transition-colors duration-300 hover:text-accent"
                >
                  Privacy Policy
                </Link>
                <span className="text-primary-foreground/20">|</span>
                <Link 
                  to="/terms-and-conditions" 
                  className="text-primary-foreground/50 transition-colors duration-300 hover:text-accent"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
