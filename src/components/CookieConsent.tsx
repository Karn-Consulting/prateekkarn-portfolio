import { useState, useEffect } from 'react';

declare global {
  interface Window {
    performBannerAction?: (action: string) => void;
  }
}

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
        // Format: consentid:xxx,consent:no,action:,necessary:yes,...
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
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto">
        <div 
          className="bg-[#1a1a1a] rounded-2xl shadow-2xl border border-[#333] overflow-hidden"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8b7355] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-heading text-xl sm:text-2xl font-semibold mb-2">
                  Your Privacy Matters
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies as described in our{' '}
                  <a href="/privacy-policy" className="text-[#d4af37] hover:text-[#e5c158] underline transition-colors">
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
              <button
                onClick={handleReject}
                className="px-6 py-3 rounded-xl border border-[#444] text-gray-300 hover:text-white hover:border-[#666] transition-all duration-300 text-sm sm:text-base font-medium"
              >
                Decline
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8963c] text-[#1a1a1a] font-semibold hover:from-[#e5c158] hover:to-[#c9a74d] transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                Accept All Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
