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
    <div className="flex flex-col">
      {/* B&W Photo - Larger Square/Vertical Rectangle (1.5x-2x size) */}
      <div className="relative w-36 h-44 sm:w-44 sm:h-52 lg:w-48 lg:h-56 mb-8">
        <div className="w-full h-full bg-secondary overflow-hidden">
          {testimonial.image ? (
            <img 
              src={testimonial.image} 
              alt={testimonial.author}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-heading font-light text-muted-foreground/60">
                {testimonial.initials}
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Quote - Reduced font size by 20-30%, increased line height to 1.6 */}
      <blockquote className="text-foreground text-sm leading-[1.6] mb-6 text-left max-w-[280px]">
        <span className="text-accent text-lg leading-none mr-0.5">"</span>
        {testimonial.quote}
        <span className="text-accent text-lg leading-none ml-0.5">"</span>
      </blockquote>
      
      {/* Author Info - 2 sizes smaller than quote, light weight */}
      <div className="text-left">
        <div className="font-heading text-xs font-medium text-foreground tracking-wide">
          {testimonial.author}
        </div>
        <div className="text-[11px] text-muted-foreground font-light tracking-wide mt-1">
          {testimonial.title}, {testimonial.company}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
