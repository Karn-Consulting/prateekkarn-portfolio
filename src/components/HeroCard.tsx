import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export interface HeroCardProps {
  title: string;
  context: string;
  description: string;
  impact: string;
  ctaText: string;
  imagePlaceholder?: string;
  logoImage?: string;
  link?: string;
  onClick?: () => void;
}

export const HeroCard = ({
  title,
  context,
  description,
  impact,
  ctaText,
  imagePlaceholder,
  logoImage,
  link,
  onClick
}: HeroCardProps) => {
  const CardContent = () => (
    <>
      {/* Responsive grid: stack on mobile, side-by-side on larger screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Section */}
        <div className="relative bg-[#e8e6e1] overflow-hidden min-h-[250px] sm:min-h-[300px] lg:min-h-[450px] xl:min-h-[500px]">
          {logoImage ? (
            <div className="w-full h-full bg-gradient-to-br from-[#f5f5f0] to-[#e8e8e0]">
              <img 
                src={logoImage} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : imagePlaceholder ? (
            <img 
              src={imagePlaceholder} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#d4cfc7] to-[#e8e4dc] flex items-center justify-center">
              <span className="text-[#a09a90] text-xs sm:text-sm font-medium">Image Placeholder</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          {/* Category Label */}
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#8b8578] mb-3 sm:mb-4">
            {context}
          </span>

          {/* Title */}
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-[#1a1a1a] mb-4 sm:mb-5 lg:mb-6 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="font-body text-[#5a5a5a] text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 lg:mb-6">
            {description}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-[#d4d0c8] mb-4 sm:mb-5 lg:mb-6"></div>

          {/* Impact */}
          <div className="mb-5 sm:mb-6 lg:mb-8">
            <span className="text-xs sm:text-sm font-medium text-[#1a1a1a]">Impact: </span>
            <span className="text-xs sm:text-sm text-[#5a5a5a]">{impact}</span>
          </div>

          {/* CTA Link */}
          <span className="inline-flex items-center text-xs sm:text-sm font-medium text-[#8b7355] group-hover:text-[#6d5a43] transition-colors">
            {ctaText}
            <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </>
  );

  if (link) {
    return (
      <Link 
        to={link}
        className="group relative bg-[#f8f7f4] rounded-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg block"
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <div 
      className="group relative bg-[#f8f7f4] rounded-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
      onClick={onClick}
    >
      <CardContent />
    </div>
  );
};
