import { useState } from 'react';
import { Lock, Eye, EyeOff, Sparkles, Image, Download, ChevronLeft, ChevronRight, X } from 'lucide-react';

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
  const [activeTheme, setActiveTheme] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const currentTheme = themes[activeTheme];
  const totalSlides = currentTheme?.images.length || 0;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const changeTheme = (index: number) => {
    setActiveTheme(index);
    setCurrentSlide(0);
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
    const currentImage = currentTheme?.images[currentSlide];

    return (
      <div className="bg-white rounded-sm border border-[#e5e5e0] overflow-hidden shadow-sm">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#f8f7f5] border-b border-[#e5e5e0]">
          <h3 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-2">{title}</h3>
          <p className="text-sm text-[#6a6a6a]">{caption}</p>
        </div>

        {/* Theme Tabs */}
        <div className="flex flex-wrap gap-2 p-4 sm:p-6 bg-[#fafafa] border-b border-[#e5e5e0]">
          {themes.map((theme, index) => (
            <button
              key={index}
              onClick={() => changeTheme(index)}
              className={`px-4 py-2 rounded-sm text-sm font-medium transition-all ${
                activeTheme === index
                  ? 'text-white shadow-md'
                  : 'bg-white text-[#4a4a4a] border border-[#e5e5e0] hover:border-[#8b7355]'
              }`}
              style={activeTheme === index ? { backgroundColor: theme.color } : {}}
            >
              {theme.name}
            </button>
          ))}
        </div>

        {/* Slideshow Container */}
        <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2a26]">
          {/* Theme Info */}
          <div className="absolute top-4 left-4 z-10">
            <span 
              className="inline-block px-3 py-1.5 rounded-sm text-white text-xs font-medium"
              style={{ backgroundColor: currentTheme.color }}
            >
              {currentTheme.name}
            </span>
            <p className="text-white/60 text-xs mt-2 italic">{currentTheme.tagline}</p>
          </div>

          {/* Slide Counter */}
          <div className="absolute top-4 right-4 z-10 bg-black/50 px-3 py-1.5 rounded-sm">
            <span className="text-white text-sm font-medium">
              {currentSlide + 1} / {totalSlides}
            </span>
          </div>

          {/* Main Slide */}
          <div className="relative flex items-center justify-center py-8 px-16 min-h-[500px] sm:min-h-[600px]">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="max-w-md w-full">
              <img
                src={currentImage?.src}
                alt={currentImage?.label}
                className="w-full h-auto rounded-sm shadow-2xl cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => setLightboxOpen(true)}
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Image Info - Below the slide */}
          <div className="text-center py-4 bg-[#1a1a1a]">
            <p className="text-white font-medium text-lg">{currentImage?.label}</p>
            <p className="text-[#d4af37] text-sm">CTA: {currentImage?.cta} 9024200400</p>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 pb-6 px-4 overflow-x-auto">
            {currentTheme.images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border-2 transition-all ${
                  currentSlide === index
                    ? 'border-[#d4af37] shadow-lg scale-110'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.label}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 pb-6">
            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-sm text-sm font-medium transition-colors"
            >
              <Eye className="w-4 h-4" />
              View Full Size
            </button>
            <button
              onClick={() => downloadImage(
                currentImage?.src || '',
                `gulmohar-heights-${currentTheme.name.toLowerCase().replace(/\s+/g, '-')}-${currentSlide + 1}.png`
              )}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37] hover:bg-[#c4a030] text-[#1a1a1a] rounded-sm text-sm font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 py-4 bg-[#f8f7f5] border-t border-[#e5e5e0]">
          {currentTheme.images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentSlide === index
                  ? 'bg-[#8b7355] w-6'
                  : 'bg-[#d9d4cc] hover:bg-[#8b7355]/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && currentImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-[#d4af37] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <img 
              src={currentImage.src} 
              alt={currentImage.label}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-medium">{currentImage.label}</p>
              <p className="text-[#d4af37] text-sm">{currentSlide + 1} / {totalSlides}</p>
            </div>
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
            15 premium ad creatives across 3 color themes. Enter the access code to view the complete creative slideshow.
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
              Unlock Creative Slideshow
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
// Slideshow component v2 - Fri Jan  9 00:51:34 EST 2026
