import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export interface GridCardProps {
  title: string;
  context: string;
  description: string;
  outcome: string;
  techStack: string[];
  imagePlaceholder?: string;
  onClick?: () => void;
}

export const GridCard = ({
  title,
  context,
  description,
  outcome,
  techStack,
  imagePlaceholder,
  onClick
}: GridCardProps) => {
  return (
    <div 
      className="group relative bg-white rounded-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md border border-[#e8e6e1]"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] bg-[#f0ede8] overflow-hidden">
        {imagePlaceholder ? (
          <img 
            src={imagePlaceholder} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#e8e4dc] to-[#d4cfc7] flex items-center justify-center">
            <span className="text-[#a09a90] text-xs font-medium">Image Placeholder</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Category with Arrow */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#8b8578]">
            {context}
          </span>
          <ArrowUpRight className="w-4 h-4 text-[#8b8578] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Title */}
        <h4 className="font-heading text-lg text-[#1a1a1a] mb-3 leading-snug group-hover:text-[#4a4a4a] transition-colors">
          {title}
        </h4>

        {/* Description - truncated */}
        <p className="font-body text-[#6a6a6a] text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Outcome */}
        <div className="mb-4">
          <span className="text-xs font-medium text-[#1a1a1a]">Outcome: </span>
          <span className="text-xs text-[#6a6a6a] line-clamp-2">{outcome}</span>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#e8e6e1]">
          {techStack.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-[#f5f4f1] text-[#6a6a6a] rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
