import { useState } from 'react';
import { Lock, Eye, EyeOff, Sparkles, Image, Download, X } from 'lucide-react';

interface GalleryImage {
  src: string;
  label: string;
  cta: string;
}

interface ThemeSection {
  name: string;
  color: string;
  tagline: string;
  images: GalleryImage[];
}

interface PasswordProtectedGalleryProps {
  password: string;
  title?: string;
  caption?: string;
  themes: ThemeSection[];
}

export default function PasswordProtectedGallery({ 
  password,
  title = "Meta Ads Creative Library",
  caption = "15 Ad Creatives across 3 Color Themes",
  themes
}: PasswordProtectedGalleryProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const downloadImage = (src: string, filename: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isUnlocked) {
    return (
      <div className="bg-white rounded-sm border border-[#e5e5e0] overflow-hidden shadow-sm">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#f8f7f5] border-b border-[#e5e5e0]">
          <h3 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-2">{title}</h3>
          <p className="text-sm text-[#6a6a6a]">{caption}</p>
        </div>
        
        {/* Gallery Content */}
        <div className="p-6 sm:p-8 space-y-12">
          {themes.map((theme, themeIndex) => (
            <div key={themeIndex}>
              {/* Theme Header */}
              <div className="mb-6">
                <div 
                  className="inline-block px-4 py-2 rounded-sm mb-3"
                  style={{ backgroundColor: theme.color }}
                >
                  <span className="text-white font-medium text-sm">{theme.name}</span>
                </div>
                <p className="text-[#6a6a6a] text-sm italic">{theme.tagline}</p>
              </div>
              
              {/* Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {theme.images.map((image, imageIndex) => (
                  <div 
                    key={imageIndex}
                    className="group relative bg-[#f8f7f5] rounded-sm overflow-hidden border border-[#e5e5e0] hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.label}
                        className="w-full h-full object-cover cursor-pointer transition-transform group-hover:scale-105"
                        onClick={() => setLightboxImage(image.src)}
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <button
                          onClick={() => setLightboxImage(image.src)}
                          className="p-3 bg-white rounded-full hover:bg-[#8b7355] hover:text-white transition-colors"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => downloadImage(image.src, `gulmohar-heights-${theme.name.toLowerCase().replace(/\s+/g, '-')}-${imageIndex + 1}.png`)}
                          className="p-3 bg-white rounded-full hover:bg-[#8b7355] hover:text-white transition-colors"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="font-medium text-[#1a1a1a] text-sm mb-1">{image.label}</p>
                      <p className="text-xs text-[#8b7355]">CTA: {image.cta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 text-white hover:text-[#8b7355] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={lightboxImage} 
              alt="Full size preview"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-sm border border-[#e5e5e0] overflow-hidden shadow-sm">
      {/* Locked Overlay */}
      <div className="h-[400px] sm:h-[500px] bg-gradient-to-br from-[#1a3a6e] to-[#0a3d2e] relative flex items-center justify-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-md">
          <div className="w-20 h-20 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Image className="w-10 h-10 text-[#d4af37]" />
          </div>
          <h3 className="text-2xl font-heading text-white mb-3">Meta Ads Creative Library</h3>
          <p className="text-sm text-[#a0a0a0] mb-8 leading-relaxed">
            15 premium ad creatives across 3 color themes. Enter the access code to view and download the complete creative library.
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
                className="w-full px-4 py-3.5 pr-12 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all text-center tracking-widest font-medium"
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
              className="w-full bg-[#d4af37] hover:bg-[#c4a030] text-[#1a1a1a] py-3.5 px-6 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Unlock Creative Library
            </button>
          </form>
        </div>
      </div>
      
      {/* Footer Notice */}
      <div className="p-4 bg-[#f8f7f5] border-t border-[#e5e5e0]">
        <div className="flex items-center justify-center gap-2 text-sm">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span className="text-[#6a6a6a]">Exclusive creative assets — authorized access only</span>
        </div>
      </div>
    </div>
  );
}
