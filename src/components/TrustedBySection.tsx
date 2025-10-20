const TrustedBySection = () => {
  const clients = [
    { name: "Credit Suisse", logo: "https://logo.clearbit.com/credit-suisse.com" },
    { name: "Morgan Stanley", logo: "https://logo.clearbit.com/morganstanley.com" },
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" }
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
          <div className="flex animate-slide-left space-x-16">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain"
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