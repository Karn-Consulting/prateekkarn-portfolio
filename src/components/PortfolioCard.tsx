import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export interface PortfolioCardProps {
  title: string;
  context: string;
  problem: string;
  system: string;
  outcome: string;
  techStack: string[];
  ctaText: string;
  isHero?: boolean;
  onClick?: () => void;
}

export const PortfolioCard = ({
  title,
  context,
  problem,
  system,
  outcome,
  techStack,
  ctaText,
  isHero = false,
  onClick
}: PortfolioCardProps) => {
  return (
    <div 
      className={cn(
        "group relative flex flex-col transition-all duration-300 ease-out",
        "border-t border-border/40 py-12 first:border-t-0",
        "hover:bg-white/40 -mx-6 px-6 rounded-sm cursor-pointer"
      )}
      onClick={onClick}
    >
      {/* Header Section */}
      <div className="mb-8">
        <h3 className={cn(
          "font-heading text-primary mb-2 tracking-tight group-hover:text-primary/80 transition-colors",
          isHero ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
        )}>
          {title}
        </h3>
        <p className="font-body text-muted-foreground text-sm uppercase tracking-wider">
          {context}
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div className="space-y-2">
          <h4 className="font-heading text-lg text-primary/80">Problem</h4>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">
            {problem}
          </p>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-heading text-lg text-primary/80">System / Architecture</h4>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">
            {system}
          </p>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-heading text-lg text-primary/80">Outcome</h4>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">
            {outcome}
          </p>
        </div>
      </div>

      {/* Footer Section: Tech Stack & CTA */}
      <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between gap-10">
        {/* Tech Stack Row - CRITICAL REQUIREMENT */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-transparent"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Text CTA (No Buttons) */}
        <div className="flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
          {ctaText}
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </div>
  );
};
