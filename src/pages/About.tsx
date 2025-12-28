import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, GraduationCap, MapPin, Award, Heart, Film, Shield, Leaf } from 'lucide-react';
import Footer from '@/components/Footer';
import { useConsultationModal } from '@/contexts/ConsultationModalContext';
import chaaliDinPoster from '@/assets/chaali-din-poster.jpg';

const About = () => {
  const { openModal } = useConsultationModal();

  return (
    <>
      <Helmet>
        <title>About Prateek Karn | AI Business Architect</title>
        <meta name="description" content="From Suratgarh to AI architecture — discover Prateek Karn's journey from entrepreneur to building intelligent systems for enterprise growth." />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Header Navigation - Matching other pages */}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Name */}
              <Link 
                to="/"
                className="font-heading text-lg font-semibold text-foreground hover:text-accent transition-colors duration-300"
              >
                Prateek Karn
              </Link>

              {/* Back to Home Button - Matching "Back to My Work" style with brown border */}
              <Link 
                to="/"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#8b7355] border border-[#8b7355] rounded-sm hover:bg-[#8b7355] hover:text-white transition-all duration-200"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section - Refined spacing */}
        <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Page Title */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Architect's Journey
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-12">
              From humble roots to AI-driven systems.
            </p>

            {/* Two Column Layout - Photo and Intro */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Photo Column - Smaller, more refined */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-40 h-48 sm:w-56 sm:h-64 md:w-64 md:h-72 overflow-hidden rounded-sm shadow-md">
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
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-4">
                  AI Business Architect
                </h2>

                <p className="text-foreground/85 text-sm sm:text-base leading-[1.8] mb-4">
                  Prateek Karn's story is one of relentless evolution — a journey that winds from the quiet town of Suratgarh, Rajasthan, to the bustling tech hubs of India, with deep roots in the cultural heart of Madhubani, Bihar.
                </p>

                <p className="text-muted-foreground text-sm leading-[1.75] mb-6">
                  His life has been a tapestry of highs and lows, but a constant thread runs through it: an unwavering pursuit of excellence and a deep-seated drive to build things that matter.
                </p>

                {/* Location and LinkedIn moved below description */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
                    <MapPin className="w-3 h-3" />
                    <span>Amritsar, Punjab, India</span>
                  </div>
                  <span className="text-border">|</span>
                  <a 
                    href="https://linkedin.com/in/prateekkarn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300 text-xs font-medium uppercase tracking-wider"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Story Section - Narrative driven */}
        <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
              The Story
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm max-w-xl mb-8 uppercase tracking-wider">
              From diligent student to sought-after strategist.
            </p>

            <div className="space-y-5">
              <p className="text-foreground/85 text-sm sm:text-base leading-[1.8]">
                His path began not in a boardroom, but with the diligent focus of a student at Panjab University, where he earned a B.Tech in Electrical and Electronics Engineering. This technical foundation instilled a systems-thinking mindset that would become the bedrock of his career. During his time in Punjab, he immersed himself in local community events, where the principles of service and humility — deeply influenced by Sikhism and other local cultures — shaped his worldview.
              </p>

              <div className="my-8 p-6 border-l-4 border-accent bg-card/30 rounded-r-lg">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">The Entrepreneur's Crucible</h3>
                <p className="text-foreground/85 text-sm sm:text-base leading-[1.8]">
                  Before he built systems for enterprises, Prateek tried to build entrepreneurs. His first venture, <span className="font-semibold text-accent">Enterpriser</span>, was born from a desire to empower college students. With limited capital but boundless energy, he created programs that impacted over <span className="font-semibold">10,000 students across India</span>, teaching them the fundamentals of building a business.
                </p>
                <p className="text-muted-foreground text-sm leading-[1.75] mt-3">
                  Though the venture ultimately failed to achieve commercial scale, it was a profound success in forging Prateek's character. It taught him resilience, the value of scrappy execution, and that failure is merely data for the next iteration.
                </p>
              </div>

              <p className="text-foreground/85 text-sm sm:text-base leading-[1.8]">
                He never looked back. Prateek dove into the marketing trenches, managing large-scale campaigns and leading teams of over 40 people. It was here, amidst the chaos of massive datasets and complex funnels, that he identified a critical gap. The sheer volume of campaign data was overwhelming traditional marketing approaches. It needed a more scientific, structured methodology to extract real value.
              </p>

              <p className="text-foreground/85 text-sm sm:text-base leading-[1.8]">
                This realization was the catalyst for his next evolution. Drawn to the elegance and power of data science, he upskilled himself, mastering the tools to clean, analyze, and interpret large-scale information. He was no longer just a marketer; he was becoming a <span className="font-semibold">MarTech professional</span> — a bridge between the art of communication and the science of data.
              </p>

              <div className="my-8 p-6 border-l-4 border-accent bg-card/30 rounded-r-lg">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">The Synthesis: An AI Business Architect</h3>
                <p className="text-foreground/85 text-sm sm:text-base leading-[1.8]">
                  With the rise of AI, all the pieces of Prateek's journey clicked into place. His engineering background provided the architectural thinking, his marketing experience supplied the real-world context, and his data science expertise offered the analytical rigor. He began to weave these threads together, creating a new kind of system where AI, data, and marketing worked in concert.
                </p>
                <p className="text-muted-foreground text-sm leading-[1.75] mt-3">
                  Today, he doesn't just build campaigns; he designs intelligent ecosystems that drive measurable growth. He is a rare professional who has seen all faces of the business lifecycle — from the hopeful student to the determined entrepreneur, the hands-on employee, and now, the sought-after strategist.
                </p>
              </div>

              <p className="text-foreground/85 text-sm sm:text-base leading-[1.8]">
                An avid reader and a quiet suburban dweller, Prateek remains grounded, his focus squarely on his work and the impact it creates. His journey is a testament to the power of continuous learning, adaptation, and the relentless pursuit of turning complex problems into elegant, intelligent solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Civic Contribution Section */}
        <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Shield className="w-5 h-5 text-accent" />
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Civic Contribution
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-md">
                  <img 
                    src="/prateek-formal.jpg" 
                    alt="Prateek Karn - Professional"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:col-span-8">
                <p className="text-foreground/85 text-sm sm:text-base leading-[1.8] mb-4">
                  Beyond his professional work, Prateek has been involved in supporting government initiatives aimed at strengthening regulatory compliance and fiscal integrity. His analytical expertise has contributed to identifying revenue evasion patterns and non-compliant entities, helping recover rightful revenue for the Indian Government.
                </p>
                <p className="text-muted-foreground text-sm leading-[1.75]">
                  This work reflects his commitment to ethical practice and his belief that business intelligence should serve not just commercial interests, but also the broader public good. His approach combines technical rigor with a strong moral compass — ensuring that data-driven insights are used responsibly and for legitimate purposes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <Award className="w-5 h-5 text-accent" />
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Recognition
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Award 1 */}
              <div className="p-4 bg-card/50 border border-border/50 rounded-lg hover:border-accent/20 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4">
                  <img 
                    src="/prateek-award-1.jpg" 
                    alt="Prateek Karn receiving recognition award"
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  />
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Recognized for contributions to digital innovation and entrepreneurship development.
                </p>
              </div>

              {/* Award 2 */}
              <div className="p-4 bg-card/50 border border-border/50 rounded-lg hover:border-accent/20 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4">
                  <img 
                    src="/prateek-award-2.jpg" 
                    alt="Prateek Karn at industry recognition event"
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  />
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Industry recognition for leadership in building scalable digital ecosystems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond Work Section - Personal Section */}
        <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
              Beyond Work
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm max-w-xl mb-8 uppercase tracking-wider">
              The person behind the professional.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Film & Creative */}
              <div className="p-6 bg-card/50 border border-border/50 rounded-lg hover:border-accent/20 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <Film className="w-4 h-4 text-accent" />
                  <h3 className="font-heading text-base font-semibold text-foreground">Creative Pursuits</h3>
                </div>
                {/* Original photo */}
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                  <img 
                    src="/prateek-movie.jpg" 
                    alt="Prateek Karn on set of Chaali Din"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-foreground/85 text-sm leading-[1.75] mb-4">
                  Prateek makes a special appearance in the upcoming Punjabi film <span className="font-medium text-accent">"Chaali Din"</span>, adapted from the bestselling novel by Gurpreet S. Dhugga. Directed by Tarnvir Singh Jagpal, the film releases <span className="font-medium">April 3, 2026</span>.
                </p>
                {/* Movie poster */}
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                  <img 
                    src={chaaliDinPoster}
                    alt="Chaali Din Movie Poster - Punjabi Film releasing April 2026"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-foreground/85 text-sm leading-[1.75] mb-3">
                  In a heartwarming twist, his beloved dog <span className="font-medium text-accent">Nobo</span> plays the character of <span className="font-medium">Keesha</span> from the novel — making this a truly personal creative venture for Prateek.
                </p>
                <p className="text-muted-foreground text-xs leading-[1.75] mb-4">
                  Starring Gurpreet Ghuggi, Debi Makhsoospuri & more. Music by Beat Minister.
                </p>
                
                {/* Foundational Creative Skills */}
                <div className="pt-4 border-t border-border/30">
                  <p className="text-foreground/85 text-sm leading-[1.75] mb-3">
                    Beyond film, Prateek has hands-on experience in <span className="font-medium text-accent">graphic design</span>, <span className="font-medium text-accent">motion graphics & video editing</span>, and <span className="font-medium text-accent">web development</span> — foundational skills that inform how he architects execution-aware systems today.
                  </p>
                  <p className="text-muted-foreground text-xs leading-[1.75] italic">
                    "Understanding the craft of execution makes me a better architect of systems that actually get built."
                  </p>
                </div>
              </div>

              {/* Values & Lifestyle */}
              <div className="space-y-6">
                {/* Animal Lover */}
                <div className="p-6 bg-card/50 border border-border/50 rounded-lg hover:border-accent/20 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-4 h-4 text-accent" />
                    <h3 className="font-heading text-base font-semibold text-foreground">Animal Lover</h3>
                  </div>
                  <div className="aspect-video overflow-hidden rounded-sm mb-4">
                    <img 
                      src="/prateek-pet.jpg" 
                      alt="Prateek's pet"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm leading-[1.75]">
                    An avid animal lover, Prateek believes in compassion extending beyond human relationships. His connection with animals reflects his gentle nature and respect for all living beings.
                  </p>
                </div>

                {/* Sustainable Living */}
                <div className="p-6 bg-card/50 border border-border/50 rounded-lg hover:border-accent/20 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <Leaf className="w-4 h-4 text-accent" />
                    <h3 className="font-heading text-base font-semibold text-foreground">Sustainability Advocate</h3>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-sm mb-4">
                    <img 
                      src="/prateek-sustainability.jpg" 
                      alt="Prateek Karn - Sustainability Advocate in nature"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm leading-[1.75]">
                    A sustainable living advocate, Prateek believes in living a simple life centered on constant learning and staying rooted. Despite his professional achievements, he maintains a grounded perspective — valuing meaningful connections, continuous growth, and making a positive impact over material accumulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section - Compact */}
        <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
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
              <p className="text-accent text-xs font-medium mb-1">Panjab University, Chandigarh</p>
              <p className="text-muted-foreground text-xs mb-3">2010 - 2014</p>
              <p className="text-foreground/75 text-sm leading-relaxed">
                The engineering curriculum cultivated a systematic approach to problem-solving and analytical thinking — skills that now form the foundation of his work in designing intelligent business systems and data architectures.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section - Refined */}
        <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
              Let's Build Something Intelligent
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Whether you're reimagining your data infrastructure or exploring AI-driven growth, I'd welcome the conversation.
            </p>
            <button 
              onClick={openModal}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background hover:bg-accent/90 transition-all duration-300 text-xs tracking-wider uppercase font-medium group"
            >
              Start a Conversation
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default About;
