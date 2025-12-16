const TrustedBySection = () => {
  const clients = [
    { name: "Credit Suisse", domain: "credit-suisse.com" },
    { name: "Morgan Stanley", domain: "morganstanley.com" },
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Deloitte", domain: "deloitte.com" },
    { name: "Ernst & Young", domain: "ey.com" },
    { name: "Mastercard", domain: "mastercard.com" },
    { name: "PwC", domain: "pwc.com" }
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
                  src={`https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`}
                  alt={`${client.name} logo`}
                  className="w-16 h-16 object-contain"
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
