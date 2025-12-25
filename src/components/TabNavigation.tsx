import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const activeTabData = tabs.find(t => t.id === activeTab);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll active tab into view on desktop
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-tab="${activeTab}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  const handleTabSelect = (tabId: string) => {
    onTabChange(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={cn(
      "w-full z-40 transition-all duration-300",
      isSticky 
        ? "sticky top-0 bg-[#f5f5f0]/98 backdrop-blur-sm shadow-sm py-3 sm:py-4" 
        : "relative bg-transparent py-4 sm:py-6"
    )}>
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Mobile Dropdown - shown on small screens */}
        <div className="md:hidden" ref={mobileMenuRef}>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "w-full flex items-center justify-between px-4 py-3 rounded-sm border transition-all duration-200",
              isMobileMenuOpen 
                ? "bg-white border-[#8b7355] shadow-sm" 
                : "bg-[#f8f7f5] border-[#e8e6e1] hover:border-[#d4d0c8]"
            )}
          >
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#8b8578]">
                Category
              </span>
              <span className="text-sm font-heading text-[#1a1a1a] mt-0.5">
                {activeTabData?.label}
              </span>
            </div>
            <ChevronDown 
              className={cn(
                "w-5 h-5 text-[#8b7355] transition-transform duration-200",
                isMobileMenuOpen && "rotate-180"
              )}
            />
          </button>

          {/* Dropdown Menu */}
          <div className={cn(
            "absolute left-4 right-4 mt-2 bg-white rounded-sm border border-[#e8e6e1] shadow-lg overflow-hidden transition-all duration-200 z-50",
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0 pointer-events-auto" 
              : "opacity-0 -translate-y-2 pointer-events-none"
          )}>
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabSelect(tab.id)}
                className={cn(
                  "w-full text-left px-4 py-3 transition-colors duration-150",
                  index !== tabs.length - 1 && "border-b border-[#f0eeeb]",
                  activeTab === tab.id
                    ? "bg-[#f8f7f5]"
                    : "bg-white hover:bg-[#fafaf8]"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "text-sm font-heading",
                    activeTab === tab.id ? "text-[#1a1a1a]" : "text-[#5a5a5a]"
                  )}>
                    {tab.label}
                  </span>
                  {activeTab === tab.id && (
                    <span className="w-2 h-2 rounded-full bg-[#8b7355]"></span>
                  )}
                </div>
                <p className="text-xs text-[#8b8578] mt-1 line-clamp-2">
                  {tab.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Tab Buttons - hidden on mobile */}
        <div 
          ref={scrollContainerRef}
          className="hidden md:flex overflow-x-auto scrollbar-hide gap-6 lg:gap-8 pb-4 border-b border-[#d4d0c8]"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-tab={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative flex-shrink-0 pb-4 text-base font-heading transition-all duration-300 whitespace-nowrap",
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

        {/* Active Tab Description - Desktop only */}
        <div className={cn(
          "hidden md:block transition-all duration-500 overflow-hidden",
          isSticky ? "max-h-0 opacity-0 pt-0" : "max-h-24 opacity-100 pt-6"
        )}>
          <p className="font-body text-[#6a6a6a] text-sm max-w-2xl leading-relaxed">
            {activeTabData?.description}
          </p>
        </div>

        {/* Mobile Description - shown below dropdown when not sticky */}
        <div className={cn(
          "md:hidden transition-all duration-500 overflow-hidden",
          isSticky || isMobileMenuOpen ? "max-h-0 opacity-0 pt-0" : "max-h-24 opacity-100 pt-4"
        )}>
          <p className="font-body text-[#6a6a6a] text-xs leading-relaxed">
            {activeTabData?.description}
          </p>
        </div>
      </div>
    </div>
  );
};
