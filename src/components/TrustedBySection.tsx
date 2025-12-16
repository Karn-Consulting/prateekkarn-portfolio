const TrustedBySection = () => {
  const clients = [
    { name: "Credit Suisse", logo: "/logos/credit-suisse.svg" },
    { name: "Morgan Stanley", logo: "/logos/morgan-stanley.svg" },
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
    { name: "Deloitte", logo: "/logos/deloitte.svg" },
    { name: "Ernst & Young", logo: "/logos/ey.svg" },
    { name: "Mastercard", logo: "/logos/mastercard.svg" },
    { name: "PwC", logo: "/logos/pwc.svg" }
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
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-full object-contain"
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
