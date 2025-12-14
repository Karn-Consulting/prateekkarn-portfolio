import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  description: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const TabNavigation = ({ tabs, activeTab, onTabChange }: TabNavigationProps) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
      "w-full z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm",
      isSticky ? "sticky top-0 py-2" : "relative py-4"
    )}>
      <div className="container max-w-5xl mx-auto">
        <div className="flex overflow-x-auto scrollbar-hide space-x-8 pb-1 relative">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "group flex flex-col items-start min-w-max pb-3 border-b-2 transition-all duration-300",
                activeTab === tab.id
                  ? "border-accent text-primary"
                  : "border-transparent text-muted-foreground hover:text-primary/70"
              )}
            >
              <span className={cn(
                "font-heading text-lg tracking-tight mb-1",
                activeTab === tab.id ? "font-medium" : "font-normal"
              )}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
        


        {/* Active Tab Description - Only visible when not sticky to save space */}
        <div className={cn(
          "transition-all duration-500 overflow-hidden",
          isSticky ? "max-h-0 opacity-0" : "max-h-24 opacity-100"
        )}>
          <p className="font-body text-muted-foreground text-sm max-w-2xl leading-relaxed">
            {tabs.find(t => t.id === activeTab)?.description}
          </p>
        </div>
      </div>
    </div>
  );
};
