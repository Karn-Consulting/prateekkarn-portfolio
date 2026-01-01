import { useState } from 'react';
import { Lock, Eye, EyeOff, Check, Sparkles } from 'lucide-react';

interface PasswordProtectedVideoProps {
  videoSrc: string;
  password: string;
  caption?: string;
}

export default function PasswordProtectedVideo({ 
  videoSrc, 
  password,
  caption = "Watch the full walkthrough"
}: PasswordProtectedVideoProps) {
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

  if (isUnlocked) {
    return (
      <div className="bg-white rounded-sm border border-[#e5e5e0] overflow-hidden shadow-sm">
        <div className="aspect-video bg-[#1a1a1a] relative">
          <video 
            className="w-full h-full object-contain"
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            preload="metadata"
            autoPlay
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-4 bg-[#f8f7f5] border-t border-[#e5e5e0]">
          <p className="text-sm text-[#6a6a6a] text-center">{caption}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-sm border border-[#e5e5e0] overflow-hidden shadow-sm">
      {/* Locked Video Overlay */}
      <div className="aspect-video bg-gradient-to-br from-[#2d2a26] to-[#1a1a1a] relative flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/meta-ads-walkthrough-thumb.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-6 max-w-md">
          <div className="w-16 h-16 bg-[#8b7355]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-[#8b7355]" />
          </div>
          <h3 className="text-xl font-heading text-white mb-2">Exclusive Content</h3>
          <p className="text-sm text-[#a0a0a0] mb-6">
            This detailed case study walkthrough is available exclusively to those with access. Enter the password shared with you to view.
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
                placeholder="Enter password"
                className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-[#8b7355] focus:ring-1 focus:ring-[#8b7355] transition-all"
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
              className="w-full bg-[#8b7355] hover:bg-[#7a6548] text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              Unlock Video
            </button>
          </form>
        </div>
      </div>
      
      {/* Exclusive Access Notice */}
      <div className="p-4 bg-[#f8f7f5] border-t border-[#e5e5e0]">
        <div className="flex items-center justify-center gap-2 text-sm">
          <Sparkles className="w-4 h-4 text-[#8b7355]" />
          <span className="text-[#6a6a6a]">Password shared to view — exclusive access only</span>
        </div>
      </div>
    </div>
  );
}
