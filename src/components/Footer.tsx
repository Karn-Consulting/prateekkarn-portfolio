import { Link } from 'react-router-dom';
import { Linkedin, Mail } from "lucide-react";
import { useState } from "react";

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

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error);
      }
    } catch (error) {
      setStatus('error');
      setMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Noise texture overlay */}
      <NoiseOverlay />
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Two Column Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-2xl sm:text-3xl font-normal text-[#f5f5dc] mb-6 leading-relaxed tracking-wide">
                Architect Your Advantage
              </h3>
              
              {/* Contact Links */}
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:prateek.karn@prateekkarn.com"
                  className="inline-flex items-center gap-3 text-[#c9b896] hover:text-[#c9b896] hover:brightness-125 transition-all duration-300 text-sm sm:text-base justify-center lg:justify-start"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-medium">prateek.karn@prateekkarn.com</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/prateekkarn" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#c9b896] hover:text-[#c9b896] hover:brightness-125 transition-all duration-300 text-sm sm:text-base justify-center lg:justify-start"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Column - Newsletter */}
            <div className="text-center lg:text-left">
              <h4 className="font-heading text-xl sm:text-2xl font-normal text-[#f5f5dc] mb-4 leading-relaxed tracking-wide">
                Strategic Intelligence Newsletter
              </h4>
              
              <p className="text-white/50 text-sm leading-[1.8] mb-6 max-w-md mx-auto lg:mx-0">
                Curated frameworks and lessons learned from building AI and MarTech systems.
              </p>
              
              {/* Input & CTA */}
              <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative w-full sm:w-64">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your corporate email"
                      disabled={status === 'loading'}
                      className="w-full bg-[#2a2a2a] border border-[#444] text-white/90 placeholder-white/40 focus:outline-none focus:border-[#c9b896] transition-colors py-3 px-4 text-center sm:text-left font-heading text-sm tracking-wide rounded disabled:opacity-50"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="group px-5 py-3 bg-transparent border border-[#c9b896] hover:bg-[#c9b896] text-[#c9b896] hover:text-[#1a1a1a] transition-all duration-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="text-xs font-medium tracking-[0.2em] uppercase">
                      {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                    </span>
                  </button>
                </div>
                
                {/* Status Message */}
                {message && (
                  <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-[#333] mt-12 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-white/50 text-xs sm:text-sm">
                © 2025 Prateek Karn. All rights reserved.
              </p>
              
              {/* Legal Links */}
              <div className="flex items-center gap-4 text-xs sm:text-sm">
                <Link 
                  to="/privacy-policy" 
                  className="text-white/50 hover:text-[#c9b896] transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <span className="text-white/30">|</span>
                <Link 
                  to="/terms-and-conditions" 
                  className="text-white/50 hover:text-[#c9b896] transition-colors duration-300"
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
