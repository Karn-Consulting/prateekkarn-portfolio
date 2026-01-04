import { useState, ReactNode } from 'react';
import { Lock, Eye, EyeOff, Check, Sparkles } from 'lucide-react';

interface PasswordProtectedPageProps {
  password: string;
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function PasswordProtectedPage({ 
  password,
  children,
  title = "Exclusive Case Study",
  description = "This detailed case study is available exclusively to those with access. Enter the password shared with you to view."
}: PasswordProtectedPageProps) {
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
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d2a26] to-[#1a1a1a] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#8b7355]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-[#8b7355]" />
          </div>
          <h1 className="text-3xl font-heading text-white mb-3">{title}</h1>
          <p className="text-[#a0a0a0] text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
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
            Unlock Case Study
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Sparkles className="w-4 h-4 text-[#8b7355]" />
            <span className="text-[#a0a0a0]">Password shared to view — exclusive access only</span>
          </div>
        </div>
      </div>
    </div>
  );
}
