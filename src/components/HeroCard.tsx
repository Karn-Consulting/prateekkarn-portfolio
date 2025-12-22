import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export interface HeroCardProps {
  title: string;
  context: string;
  description: string;
  impact: string;
  ctaText: string;
  imagePlaceholder?: string;
  onClick?: () => void;
}

export const HeroCard = ({
  title,
  context,
  description,
  impact,
  ctaText,
  imagePlaceholder,
  onClick
}: HeroCardProps) => {
  return (
    <div 
      className="group relative bg-[#f8f7f4] rounded-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Image Section */}
        <div className="relative bg-[#e8e6e1] overflow-hidden">
          {imagePlaceholder ? (
            <img 
              src={imagePlaceholder} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full min-h-[300px] lg:min-h-full bg-gradient-to-br from-[#d4cfc7] to-[#e8e4dc] flex items-center justify-center">
              <span className="text-[#a09a90] text-sm font-medium">Image Placeholder</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center p-8 lg:p-12">
          {/* Category Label */}
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#8b8578] mb-4">
            {context}
          </span>

          {/* Title */}
          <h3 className="font-heading text-2xl lg:text-3xl xl:text-4xl text-[#1a1a1a] mb-6 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="font-body text-[#5a5a5a] text-base leading-relaxed mb-6">
            {description}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-[#d4d0c8] mb-6"></div>

          {/* Impact */}
          <div className="mb-8">
            <span className="text-sm font-medium text-[#1a1a1a]">Impact: </span>
            <span className="text-sm text-[#5a5a5a]">{impact}</span>
          </div>

          {/* CTA Link */}
          <a 
            href="#" 
            className="inline-flex items-center text-sm font-medium text-[#8b7355] hover:text-[#6d5a43] transition-colors group/cta"
            onClick={(e) => {
              e.preventDefault();
              onClick?.();
            }}
          >
            {ctaText}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};
