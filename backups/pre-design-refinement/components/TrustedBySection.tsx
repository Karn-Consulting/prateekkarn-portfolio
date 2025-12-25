const TrustedBySection = () => {
  // Optical sizing - each logo has custom dimensions to appear visually equal
  // Desktop sizes for larger screens, scaled down proportionally for mobile
  const clients = [
    { name: "Credit Suisse", logo: "/logos/credit-suisse.svg", width: 130, height: 36, mobileWidth: 90, mobileHeight: 25 },
    { name: "Morgan Stanley", logo: "/logos/morgan-stanley.png", width: 180, height: 48, mobileWidth: 130, mobileHeight: 34 },
    { name: "Microsoft", logo: "/logos/microsoft.svg", width: 120, height: 26, mobileWidth: 85, mobileHeight: 18 },
    { name: "Deloitte", logo: "/logos/deloitte.svg", width: 110, height: 24, mobileWidth: 80, mobileHeight: 18 },
    { name: "Ernst & Young", logo: "/logos/ey.png", width: 65, height: 26, mobileWidth: 45, mobileHeight: 18 },
    { name: "Mastercard", logo: "/logos/mastercard.png", width: 80, height: 48, mobileWidth: 55, mobileHeight: 33 },
    { name: "PwC", logo: "/logos/pwc.png", width: 75, height: 32, mobileWidth: 52, mobileHeight: 22 }
  ];

  // Triple the logos for seamless infinite scroll
  const allLogos = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Experience with C-Level Executives at Leading Global Firms
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Through previous agency roles, I gained direct experience managing personal branding and digital presence for C-level executives from Fortune 500 companies and globally recognized brands, including:
          </p>
        </div>

        {/* Logo Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient fade on edges for premium feel */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling track - needs enough width to contain all logos */}
          <div 
            className="flex animate-slide-left items-center"
            style={{ 
              width: 'max-content'
            }}
          >
            {allLogos.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 mx-3 sm:mx-6 md:mx-8 lg:mx-10"
                style={{ 
                  height: '48px',
                }}
              >
                {/* Mobile logo (hidden on sm+) */}
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-500 sm:hidden"
                  style={{ 
                    width: `${client.mobileWidth}px`,
                    height: `${client.mobileHeight}px`,
                  }}
                />
                {/* Desktop logo (hidden on mobile) */}
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-500 hidden sm:block"
                  style={{ 
                    width: `${client.width}px`,
                    height: `${client.height}px`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
