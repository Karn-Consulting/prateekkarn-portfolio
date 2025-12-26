import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, GraduationCap, Briefcase, MapPin } from 'lucide-react';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Prateek Karn | AI Business Architect</title>
        <meta name="description" content="From digital marketer to AI architect — learn about Prateek Karn's journey building intelligent systems for enterprise growth." />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section - Refined spacing */}
        <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Back to Home Link */}
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 text-sm mb-10"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Home
            </Link>

            {/* Page Title */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Prateek
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-12">
              The story behind the systems.
            </p>

            {/* Two Column Layout - Photo and Intro */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Photo Column - Smaller, more refined */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-56 h-64 sm:w-64 sm:h-72 overflow-hidden rounded-sm shadow-md">
                    <img 
                      src="/prateek-karn-about.jpg" 
                      alt="Prateek Karn - AI Business Architect"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* Intro Column */}
              <div className="lg:col-span-8 flex flex-col justify-start">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  <MapPin className="w-3 h-3" />
                  <span>Amritsar, Punjab, India</span>
                </div>

                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-4">
                  AI Business Architect
                </h2>

                <p className="text-foreground/85 text-sm sm:text-base leading-[1.8] mb-4">
                  I help organizations evolve from traditional marketing to intelligent business systems — architectures where data, automation, and AI work together to drive measurable growth.
                </p>

                <p className="text-muted-foreground text-sm leading-[1.75] mb-6">
                  As an AI Business Architect, I design Intelligent MarTech ecosystems that connect sensing, prediction, and action — giving enterprises real-time insight, faster decision-making, and higher marketing ROI.
                </p>

                {/* LinkedIn CTA */}
                <a 
                  href="https://linkedin.com/in/prateekkarn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300 text-xs font-medium uppercase tracking-wider"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Journey Section - Tighter */}
        <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
              The Journey
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm max-w-xl mb-8 uppercase tracking-wider">
              From performance marketing to enterprise AI architecture.
            </p>

            <div className="space-y-5">
              <p className="text-foreground/85 text-sm sm:text-base leading-[1.8]">
                My path wasn't linear. It started in the trenches of digital marketing — managing ad campaigns, optimizing funnels, and learning what actually moves the needle in customer acquisition. That hands-on experience with performance marketing gave me something invaluable: an obsession with measurable results.
              </p>

              <p className="text-foreground/85 text-sm sm:text-base leading-[1.8]">
                From there, I moved into data engineering and analytics, building the infrastructure that turns raw data into actionable intelligence. I learned that the best marketing isn't about creativity alone — it's about systems that learn, adapt, and improve.
              </p>

              <p className="text-foreground/85 text-sm sm:text-base leading-[1.8]">
                Today, I architect intelligent business systems that integrate AI, automation, and data at every layer. My focus is on building adaptive, intelligence-driven operating systems that continuously learn and improve — enabling modern enterprises to scale with precision, speed, and strategic clarity.
              </p>
            </div>
          </div>
        </section>

        {/* Career Timeline Section - More compact */}
        <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-5 h-5 text-accent" />
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Career Trajectory
              </h2>
            </div>

            <div className="space-y-6">
              {/* Catallyst */}
              <div className="border-l border-accent/40 pl-5 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">Growth Marketer</h3>
                  <span className="text-accent text-xs font-medium">Catallyst</span>
                </div>
                <p className="text-muted-foreground text-xs mb-2">August 2025 - Present</p>
                <p className="text-foreground/75 text-sm leading-relaxed">
                  Leading Performance Marketing Department, driving growth through data-driven strategies and AI-powered optimization.
                </p>
              </div>

              {/* StandOut Authority */}
              <div className="border-l border-accent/40 pl-5 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">Account Manager</h3>
                  <span className="text-accent text-xs font-medium">StandOut Authority</span>
                </div>
                <p className="text-muted-foreground text-xs mb-2">August 2021 - October 2022 · 1 year 3 months</p>
                <p className="text-foreground/75 text-sm leading-relaxed">
                  Handled LinkedIn branding programs for Fortune 500 leaders, merging analytics, events, and AI automation. Built AI content pipelines reducing production time and boosting post reach.
                </p>
              </div>

              {/* WNS */}
              <div className="border-l border-accent/40 pl-5 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">Google Ads Specialist</h3>
                  <span className="text-accent text-xs font-medium">WNS Global Services</span>
                </div>
                <p className="text-muted-foreground text-xs mb-2">December 2019 - June 2021 · 1 year 7 months</p>
                <p className="text-foreground/75 text-sm leading-relaxed">
                  Managed a portfolio of B2B/B2C client accounts, designing and executing Google Ads strategies that increased client ROI by an average of 25%. Handled the full sales cycle from outbound prospecting to high-value contract closure.
                </p>
              </div>

              {/* Enterpriser */}
              <div className="border-l border-accent/40 pl-5 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">Founder</h3>
                  <span className="text-accent text-xs font-medium">Enterpriser</span>
                </div>
                <p className="text-muted-foreground text-xs mb-2">April 2017 - October 2019 · 2 years 7 months</p>
                <p className="text-foreground/75 text-sm leading-relaxed">
                  Founded and scaled a college-level entrepreneurship program connecting over 10,000 students with industry leaders for mentorship. Recruited and managed a team of 30 campus representatives across multiple universities.
                </p>
              </div>

              {/* Shiprocket */}
              <div className="border-l border-accent/40 pl-5 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">Project Manager</h3>
                  <span className="text-accent text-xs font-medium">Shiprocket (Kartrocket)</span>
                </div>
                <p className="text-muted-foreground text-xs mb-2">October 2015 - April 2017 · 1 year 7 months</p>
                <p className="text-foreground/75 text-sm leading-relaxed">
                  Led end-to-end project management for enterprise SaaS e-commerce deployments. Directed a design team to develop user-friendly interfaces and implemented foundational SEO procedures for new clients.
                </p>
              </div>

              {/* Akosha */}
              <div className="border-l border-accent/40 pl-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground">Brand Expert</h3>
                  <span className="text-accent text-xs font-medium">Akosha India</span>
                </div>
                <p className="text-muted-foreground text-xs mb-2">February 2015 - October 2015 · 9 months</p>
                <p className="text-foreground/75 text-sm leading-relaxed">
                  Provided real-time solutions to customer issues via a chat support platform, improving brand-consumer relations for multiple national brands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section - Compact */}
        <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-5 h-5 text-accent" />
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Education
              </h2>
            </div>

            <div className="border-l border-accent/40 pl-5">
              <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-1">
                Bachelor's Degree in Electrical and Electronics Engineering
              </h3>
              <p className="text-accent text-xs font-medium mb-1">Panjab University</p>
              <p className="text-muted-foreground text-xs">2010 - 2014</p>
            </div>
          </div>
        </section>

        {/* CTA Section - Refined */}
        <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
              Let's Build Something Intelligent
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Whether you're reimagining your data infrastructure or exploring AI-driven growth, I'd welcome the conversation.
            </p>
            <a 
              href="mailto:prateek.karn@prateekkarn.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background hover:bg-accent/90 transition-all duration-300 text-xs tracking-wider uppercase font-medium group"
            >
              Start a Conversation
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default About;
