const TrustedBySection = () => {
  const clients = [
    { name: "Credit Suisse", logo: "/logos/credit-suisse.jpg" },
    { name: "Morgan Stanley", logo: "/logos/morgan-stanley.jpg" },
    { name: "Microsoft", logo: "/logos/microsoft.jpg" },
    { name: "Deloitte", logo: "/logos/deloitte.jpg" },
    { name: "Ernst & Young", logo: "/logos/ey.jpg" },
    { name: "Mastercard", logo: "/logos/mastercard.jpg" },
    { name: "PwC", logo: "/logos/pwc.jpg" }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Experience with C-Level Executives at Leading Global Firms
          </h2>
          <p className="text-lg text-muted-foreground">
            Through previous agency roles, I gained direct experience managing personal branding and digital presence for C-level executives from Fortune 500 companies and globally recognized brands, including:
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left space-x-16 hover:pause">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain scale-90"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain scale-90"
                />
              </div>
            ))}
            {/* Third set for extra smooth loop */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-2-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain scale-90"
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
