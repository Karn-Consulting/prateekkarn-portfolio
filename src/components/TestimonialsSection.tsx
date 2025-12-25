const TESTIMONIALS = [
  {
    id: 1,
    quote: "It was fantastic to work together with Prateek, who is an exceptional founder. His exceptional workflow, skills, imagination and knowledge of working with people made the project a dream. I would recommend him for any project that requires the very best in marketing, sales execution and public speaking. He is a credible individual and I will always hold him in the highest esteem.",
    author: "Dr. Loren Michaels Harris",
    title: "Chief Executive Officer",
    company: "Trajectory TV Network",
    initials: "LH",
    image: "/dr-loren-harris.jpg"
  },
  {
    id: 2,
    quote: "I have worked with Prateek and highly recommend him to any leader who values precision and high-level integrity. His work ethic is exceptional; he approaches business with a disciplined, owner-mindset that is rare to find.",
    author: "Tolga Tarak",
    title: "CEO",
    company: "Emilia Motors Inc.",
    initials: "TT",
    image: "/tolga-tarak.png"
  },
  {
    id: 3,
    quote: "Prateek is a rare talent who understands the intersection of high-level strategy and technical execution. His work ethic and commitment to excellence are evident in everything he touches. I highly recommend him to any leader looking to build a digital presence that is as intelligent as it is impactful.",
    author: "Michelle Raymond",
    title: "Founder",
    company: "The People's Partner",
    initials: "MR",
    image: "/michelle-raymond.png"
  }
];

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
  initials: string;
  image: string | null;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex flex-col p-6 sm:p-8 bg-card/50 border border-border/50 rounded-none hover:border-accent/20 transition-all duration-300">
      {/* B&W Photo with subtle gold border */}
      <div className="relative w-28 h-36 sm:w-32 sm:h-40 lg:w-36 lg:h-44 mb-8 mx-auto">
        <div className="w-full h-full bg-secondary overflow-hidden ring-1 ring-accent/20">
          {testimonial.image ? (
            <img 
              src={testimonial.image} 
              alt={testimonial.author}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light text-muted-foreground/60">
                {testimonial.initials}
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Large Decorative Quote Mark */}
      <div className="text-center mb-4">
        <span className="text-accent text-4xl sm:text-5xl font-serif leading-none">"</span>
      </div>
      
      {/* Quote - Body size, italic, charcoal color */}
      <blockquote className="text-foreground/90 text-sm sm:text-base leading-[1.8] mb-8 text-center italic max-w-sm mx-auto">
        {testimonial.quote}
      </blockquote>
      
      {/* Author Info - Premium Hierarchy: Name > Title > Company */}
      <div className="text-center mt-auto pt-6 border-t border-border/50">
        {/* Name - Large, Bold, Uppercase */}
        <div className="font-heading text-base sm:text-lg font-semibold text-foreground tracking-[0.1em] uppercase mb-2">
          {testimonial.author}
        </div>
        {/* Title - Medium size, regular weight */}
        <div className="text-sm text-foreground/80 font-normal mb-1">
          {testimonial.title}
        </div>
        {/* Company - Smaller, gold/accent color */}
        <div className="text-xs sm:text-sm text-accent font-normal tracking-wide">
          {testimonial.company}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header - Left aligned for architectural consistency */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            The Network Perspective
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            On Leadership, Integrity, and Architectural Precision.
          </p>
        </div>

        {/* Horizontal Three-Column Layout with increased gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-10">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
