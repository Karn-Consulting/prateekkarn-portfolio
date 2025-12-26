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
        {/* Hero Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Back to Home Link */}
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 text-sm mb-12"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Home
            </Link>

            {/* Page Title */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About Prateek
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mb-16">
              The story behind the systems.
            </p>

            {/* Two Column Layout - Photo and Intro */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Photo Column */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] overflow-hidden rounded-sm ring-1 ring-accent/20 shadow-xl">
                    <img 
                      src="/prateek-karn-about.jpg" 
                      alt="Prateek Karn - AI Business Architect"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/10 rounded-sm -z-10" />
                </div>
              </div>

              {/* Intro Column */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>Amritsar, Punjab, India</span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                  AI Business Architect
                </h2>

                <p className="text-foreground/90 text-base sm:text-lg leading-[1.9] mb-6">
                  I help organizations evolve from traditional marketing to intelligent business systems — architectures where data, automation, and AI work together to drive measurable growth.
                </p>

                <p className="text-muted-foreground text-sm sm:text-base leading-[1.8] mb-8">
                  As an AI Business Architect, I design Intelligent MarTech ecosystems that connect sensing, prediction, and action — giving enterprises real-time insight, faster decision-making, and higher marketing ROI.
                </p>

                {/* LinkedIn CTA */}
                <a 
                  href="https://linkedin.com/in/prateekkarn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300 text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Journey Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Journey
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mb-12">
              From performance marketing to enterprise AI architecture.
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/90 text-base sm:text-lg leading-[1.9] mb-8">
                My path wasn't linear. It started in the trenches of digital marketing — managing ad campaigns, optimizing funnels, and learning what actually moves the needle in customer acquisition. That hands-on experience with performance marketing gave me something invaluable: an obsession with measurable results.
              </p>

              <p className="text-foreground/90 text-base sm:text-lg leading-[1.9] mb-8">
                From there, I moved into data engineering and analytics, building the infrastructure that turns raw data into actionable intelligence. I learned that the best marketing isn't about creativity alone — it's about systems that learn, adapt, and improve.
              </p>

              <p className="text-foreground/90 text-base sm:text-lg leading-[1.9] mb-8">
                Today, I architect intelligent business systems that integrate AI, automation, and data at every layer. My focus is on building adaptive, intelligence-driven operating systems that continuously learn and improve — enabling modern enterprises to scale with precision, speed, and strategic clarity.
              </p>
            </div>
          </div>
        </section>

        {/* Career Timeline Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="w-6 h-6 text-accent" />
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Career Trajectory
              </h2>
            </div>

            <div className="space-y-8">
              {/* Catallyst */}
              <div className="border-l-2 border-accent/30 pl-6 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground">Growth Marketer</h3>
                  <span className="text-accent text-sm font-medium">Catallyst</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">August 2025 - Present</p>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                  Leading Performance Marketing Department, driving growth through data-driven strategies and AI-powered optimization.
                </p>
              </div>

              {/* StandOut Authority */}
              <div className="border-l-2 border-accent/30 pl-6 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground">Account Manager</h3>
                  <span className="text-accent text-sm font-medium">StandOut Authority</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">August 2021 - October 2022 · 1 year 3 months</p>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                  Handled LinkedIn branding programs for Fortune 500 leaders, merging analytics, events, and AI automation. Built AI content pipelines reducing production time and boosting post reach.
                </p>
              </div>

              {/* WNS */}
              <div className="border-l-2 border-accent/30 pl-6 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground">Google Ads Specialist</h3>
                  <span className="text-accent text-sm font-medium">WNS Global Services</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">December 2019 - June 2021 · 1 year 7 months</p>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                  Managed a portfolio of B2B/B2C client accounts, designing and executing Google Ads strategies that increased client ROI by an average of 25%. Handled the full sales cycle from outbound prospecting to high-value contract closure.
                </p>
              </div>

              {/* Enterpriser */}
              <div className="border-l-2 border-accent/30 pl-6 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground">Founder</h3>
                  <span className="text-accent text-sm font-medium">Enterpriser</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">April 2017 - October 2019 · 2 years 7 months</p>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                  Founded and scaled a college-level entrepreneurship program connecting over 10,000 students with industry leaders for mentorship. Recruited and managed a team of 30 campus representatives across multiple universities.
                </p>
              </div>

              {/* Shiprocket */}
              <div className="border-l-2 border-accent/30 pl-6 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground">Project Manager</h3>
                  <span className="text-accent text-sm font-medium">Shiprocket (Kartrocket)</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">October 2015 - April 2017 · 1 year 7 months</p>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                  Led end-to-end project management for enterprise SaaS e-commerce deployments. Directed a design team to develop user-friendly interfaces and implemented foundational SEO procedures for new clients.
                </p>
              </div>

              {/* Akosha */}
              <div className="border-l-2 border-accent/30 pl-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground">Brand Expert</h3>
                  <span className="text-accent text-sm font-medium">Akosha India</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">February 2015 - October 2015 · 9 months</p>
                <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                  Provided real-time solutions to customer issues via a chat support platform, improving brand-consumer relations for multiple national brands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Education
              </h2>
            </div>

            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-2">
                Bachelor's Degree in Electrical and Electronics Engineering
              </h3>
              <p className="text-accent text-sm font-medium mb-2">Panjab University</p>
              <p className="text-muted-foreground text-sm">2010 - 2014</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Build Something Intelligent
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-10 max-w-2xl mx-auto">
              Whether you're reimagining your data infrastructure or exploring AI-driven growth, I'd welcome the conversation.
            </p>
            <a 
              href="mailto:prateek.karn@prateekkarn.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background hover:bg-accent/90 transition-all duration-300 text-sm tracking-wider uppercase font-medium group"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default About;
