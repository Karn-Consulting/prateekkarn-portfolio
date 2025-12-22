const TrustedBySection = () => {
  const clients = [
    { name: "Credit Suisse", logo: "/logos/credit-suisse.svg" },
    { name: "Morgan Stanley", logo: "/logos/morgan-stanley.png" },
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
    { name: "Deloitte", logo: "/logos/deloitte.svg" },
    { name: "Ernst & Young", logo: "/logos/ey.png" },
    { name: "Mastercard", logo: "/logos/mastercard.svg" },
    { name: "PwC", logo: "/logos/pwc.png" }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Experience with C-Level Executives at Leading Global Firms
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Through previous agency roles, I gained direct experience managing personal branding and digital presence for C-level executives from Fortune 500 companies and globally recognized brands, including:
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left space-x-12 sm:space-x-16 md:space-x-20 hover:pause items-center">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: '120px', height: '48px' }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="object-contain"
                  style={{ 
                    maxWidth: '120px', 
                    maxHeight: '40px',
                    width: 'auto',
                    height: 'auto'
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
