import React, { useState, useEffect, useRef } from 'react';
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-tab="${activeTab}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  return (
    <div className={cn(
      "w-full z-40 transition-all duration-300",
      isSticky 
        ? "sticky top-0 bg-[#f5f5f0]/98 backdrop-blur-sm shadow-sm py-3 sm:py-4" 
        : "relative bg-transparent py-4 sm:py-6"
    )}>
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Tab Buttons - horizontal scroll on mobile */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 sm:gap-6 md:gap-8 pb-3 sm:pb-4 border-b border-[#d4d0c8] -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-tab={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative flex-shrink-0 pb-3 sm:pb-4 text-sm sm:text-base font-heading transition-all duration-300 whitespace-nowrap",
                activeTab === tab.id
                  ? "text-[#1a1a1a]"
                  : "text-[#8b8578] hover:text-[#5a5a5a]"
              )}
            >
              {tab.label}
              {/* Active Indicator */}
              <span 
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-[#8b7355] transition-all duration-300",
                  activeTab === tab.id ? "opacity-100" : "opacity-0"
                )}
              />
            </button>
          ))}
        </div>

        {/* Active Tab Description */}
        <div className={cn(
          "transition-all duration-500 overflow-hidden",
          isSticky ? "max-h-0 opacity-0 pt-0" : "max-h-24 opacity-100 pt-4 sm:pt-6"
        )}>
          <p className="font-body text-[#6a6a6a] text-xs sm:text-sm max-w-2xl leading-relaxed">
            {tabs.find(t => t.id === activeTab)?.description}
          </p>
        </div>
      </div>
    </div>
  );
};
