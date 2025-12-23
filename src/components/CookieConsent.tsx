import { useState, useEffect } from 'react';

declare global {
  interface Window {
    performBannerAction?: (action: string) => void;
  }
}

/**
 * Cookie Consent Banner with Antique Bronze Design System
 * Primary: #9C7C38 background, white text
 * Ghost: Transparent bg, #9C7C38 border
 * Hover: Brighten to #B59045
 */

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent action was already taken by looking for CookieYes cookie
    const checkConsent = () => {
      const cookies = document.cookie.split(';');
      const consentCookie = cookies.find(cookie => 
        cookie.trim().startsWith('cookieyes-consent=')
      );
      
      if (consentCookie) {
        // Parse the consent cookie to check if action was taken
        const consentValue = consentCookie.split('=')[1];
        // If action field is empty, user hasn't interacted with banner yet
        const hasAction = consentValue.includes('action:yes') || 
                          consentValue.includes('action:no') ||
                          consentValue.includes(',action:accept') ||
                          consentValue.includes(',action:reject');
        
        // Also check if consent is explicitly set to yes (user accepted)
        const hasAccepted = consentValue.includes('consent:yes');
        
        // Show banner if no action taken yet
        if (!hasAction && !hasAccepted) {
          setIsVisible(true);
        }
      } else {
        // No cookie at all, show banner
        setIsVisible(true);
      }
    };

    // Wait for CookieYes to initialize
    const timer = setTimeout(checkConsent, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    if (window.performBannerAction) {
      window.performBannerAction('accept_all');
    }
    setIsVisible(false);
  };

  const handleReject = () => {
    if (window.performBannerAction) {
      window.performBannerAction('reject');
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] max-w-sm sm:max-w-md animate-in slide-in-from-right duration-500">
      <div 
        className="bg-[#f5f5f0] rounded-2xl shadow-xl border border-[#e5e5dc] overflow-hidden"
      >
        <div className="p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#9C7C38]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-[#9C7C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-[#1a1a1a] font-heading text-lg sm:text-xl font-semibold mb-1">
                Your Privacy Matters
              </h3>
            </div>
            {/* Close button */}
            <button 
              onClick={handleReject}
              className="text-[#9C7C38]/60 hover:text-[#B59045] transition-colors p-1"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <p className="text-[#5a5a5a] text-sm leading-relaxed mb-4">
            We use cookies to enhance your experience and analyze our traffic. 
            By clicking "Accept", you consent to our use of cookies.{' '}
            <a href="/privacy-policy" className="text-[#9C7C38] hover:text-[#B59045] underline transition-colors">
              Learn more
            </a>
          </p>

          {/* Buttons - Ghost style for Decline, Primary for Accept */}
          <div className="flex gap-3">
            {/* Ghost/Secondary Button - Decline */}
            <button
              onClick={handleReject}
              className="flex-1 px-4 py-2.5 rounded-xl border border-[#9C7C38] bg-transparent text-[#9C7C38] font-semibold tracking-[0.5px] hover:bg-[#9C7C38]/10 hover:text-[#B59045] hover:border-[#B59045] transition-all duration-300 text-sm"
            >
              Decline
            </button>
            {/* Primary Button - Accept */}
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#9C7C38] text-white font-semibold tracking-[0.5px] hover:bg-[#B59045] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 text-sm"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
