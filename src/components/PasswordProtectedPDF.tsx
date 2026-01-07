import { useState } from 'react';
import { Lock, Eye, EyeOff, Check, Sparkles, Download, Maximize2, FileText } from 'lucide-react';

interface PasswordProtectedPDFProps {
  pdfSrc: string;
  password: string;
  title?: string;
  caption?: string;
  allowDownload?: boolean;
}

export default function PasswordProtectedPDF({ 
  pdfSrc, 
  password,
  title = "360° Marketing Plan",
  caption = "View the full presentation",
  allowDownload = true
}: PasswordProtectedPDFProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const openFullscreen = () => {
    window.open(pdfSrc, '_blank');
  };

  if (isUnlocked) {
    return (
      <div className="bg-white rounded-sm border border-[#e5e5e0] overflow-hidden shadow-sm">
        {/* Header with controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 bg-[#f8f7f5] border-b border-[#e5e5e0] gap-4">
          <div>
            <h3 className="font-heading text-xl sm:text-2xl text-[#1a1a1a] mb-1">{title}</h3>
            <p className="text-sm text-[#6a6a6a]">{caption}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={openFullscreen}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#8b7355] border border-[#8b7355] px-4 py-2 rounded-sm hover:bg-[#8b7355] hover:text-white transition-all duration-200"
            >
              <Maximize2 className="w-4 h-4" />
              View Fullscreen
            </button>
            {allowDownload && (
              <a
                href={pdfSrc}
                download
                className="inline-flex items-center gap-2 text-sm font-medium bg-[#1a1a1a] text-white px-4 py-2 rounded-sm hover:bg-[#333] transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            )}
          </div>
        </div>
        
        {/* PDF Embed */}
        <div className="bg-[#1a1a1a]">
          <iframe
            src={pdfSrc}
            className="w-full h-[600px] sm:h-[700px]"
            title={title}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-sm border border-[#e5e5e0] overflow-hidden shadow-sm">
      {/* Locked PDF Overlay */}
      <div className="h-[500px] sm:h-[600px] bg-gradient-to-br from-[#2d2a26] to-[#1a1a1a] relative flex items-center justify-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-md">
          <div className="w-20 h-20 bg-[#8b7355]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-[#8b7355]" />
          </div>
          <h3 className="text-2xl font-heading text-white mb-3">Protected Content</h3>
          <p className="text-sm text-[#a0a0a0] mb-8 leading-relaxed">
            This comprehensive marketing strategy document is confidential. Enter the access code shared with you to view the full presentation.
          </p>
          
          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={inputPassword}
                onChange={(e) => {
                  setInputPassword(e.target.value);
                  setError('');
                }}
                placeholder="Enter access code"
                className="w-full px-4 py-3.5 pr-12 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-[#8b7355] focus:ring-1 focus:ring-[#8b7355] transition-all text-center tracking-widest font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            
            <button
              type="submit"
              className="w-full bg-[#8b7355] hover:bg-[#7a6548] text-white py-3.5 px-6 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Unlock Presentation
            </button>
          </form>
        </div>
      </div>
      
      {/* Exclusive Access Notice */}
      <div className="p-4 bg-[#f8f7f5] border-t border-[#e5e5e0]">
        <div className="flex items-center justify-center gap-2 text-sm">
          <Sparkles className="w-4 h-4 text-[#8b7355]" />
          <span className="text-[#6a6a6a]">Confidential document — authorized access only</span>
        </div>
      </div>
    </div>
  );
}
