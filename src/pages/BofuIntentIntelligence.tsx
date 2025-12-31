import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Mail, Users, TrendingUp, Target, Zap, BarChart3, MessageSquare, Calendar, ChevronLeft, ChevronRight, DollarSign, Inbox } from 'lucide-react';
import Footer from '@/components/Footer';
import { useConsultationModal } from '@/contexts/ConsultationModalContext';

export default function BofuIntentIntelligence() {
  const { openModal } = useConsultationModal();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Case study carousel data - Reordered: Nov first, then Dec
  const caseStudySlides = [
    {
      id: 1,
      title: "Nov Campaign Performance",
      subtitle: "1 Inbox Used | ET 500 Targeting",
      image: "/case-studies/leadgen-2.png",
      description: "November campaign metrics showing exceptional open rates up to 81% and click rates up to 69% on high-intent segments",
      category: "Nov Campaign"
    },
    {
      id: 2,
      title: "Dec Campaign Performance",
      subtitle: "1 Inbox Used | ET 500 Targeting",
      image: "/case-studies/leadgen-1.png",
      description: "December campaign metrics showing open rates ranging from 14% to 57% across targeted C-suite segments",
      category: "Dec Campaign"
    },
    {
      id: 3,
      title: "Outreach Email 1",
      subtitle: "Subject: What top CEOs are doing differently",
      image: "/case-studies/email-reply-1-1.png",
      description: "Original outreach email targeting C-suite executives on digital transformation and leadership alignment",
      category: "Outreach Email 1"
    },
    {
      id: 4,
      title: "Lead Reply 1",
      subtitle: "EA to CMD & CEO Response",
      image: "/case-studies/email-reply-1-2.png",
      description: "Response within 24 hours from Executive Assistant, CMD Office expressing interest in learning more",
      category: "Lead Reply 1"
    },
    {
      id: 5,
      title: "Outreach Email 2",
      subtitle: "Subject: Big AI vision, slow movement?",
      image: "/case-studies/email-reply-2-1.png",
      description: "Second outreach email targeting C-suite executives on AI transformation challenges",
      category: "Outreach Email 2"
    },
    {
      id: 6,
      title: "Lead Reply 2",
      subtitle: "Senior Vice President Response",
      image: "/case-studies/email-reply-2-2.png",
      description: "SVP response requesting a call to understand the proposition",
      category: "Lead Reply 2"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudySlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudySlides.length) % caseStudySlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f5]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f8f7f5]/95 backdrop-blur-sm border-b border-[#e5e5e0]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-heading text-lg sm:text-xl text-[#1a1a1a] hover:text-[#8b7355] transition-colors">
            Prateek Karn
          </Link>
          <Link 
            to="/mywork#data-architecture" 
            className="inline-flex items-center gap-2 text-sm text-[#8b7355] hover:text-[#6b5a45] transition-colors border border-[#8b7355] px-4 py-2 rounded-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to My Work
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8b7355] mb-4">
              Revenue Architecture
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6">
              BOFU Intent Intelligence System for B2B Revenue Conversion
            </h1>
            <p className="text-lg sm:text-xl text-[#4a4a4a] leading-relaxed mb-8">
              AI-driven system that transformed email engagement into prioritized sales outreach for ET 500 and publicly traded Indian enterprises. Email functioned as a decision sensor, while sales acted as the conversion actuator at the moment of peak intent.
            </p>
            
            {/* Key Metrics */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-4 py-2 rounded-sm text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>80% Peak Open Rate</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#8b7355] text-white px-4 py-2 rounded-sm text-sm">
                <Users className="w-4 h-4" />
                <span>12 Sales Conversations Initiated</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white border border-[#e5e5e0] text-[#1a1a1a] px-4 py-2 rounded-sm text-sm">
                <Target className="w-4 h-4" />
                <span>ET 500 & Public Companies</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-sm text-sm">
                <DollarSign className="w-4 h-4" />
                <span>$3 Million Annual Deal Value</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Carousel Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl text-white mb-4">Case Study: Live Campaign Results</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="inline-flex items-center gap-2 bg-[#8b7355] text-white px-4 py-2 rounded-sm text-sm">
                <Inbox className="w-4 h-4" />
                <span>Outreach for Nov-Dec | 1 Inbox Used</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-sm text-sm">
                <DollarSign className="w-4 h-4" />
                <span>$3 Million Annual Deal Value</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-sm text-sm">
                <Mail className="w-4 h-4" />
                <span>2 ET 500 Company Replies</span>
              </div>
            </div>
            <p className="text-white/70 text-sm">Navigate with arrows or dots to view campaign data and actual email replies from ET 500 company representatives</p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Carousel */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
              {/* Slide Header */}
              <div className="bg-[#f8f7f5] px-6 py-4 border-b border-[#e5e5e0]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-lg text-[#1a1a1a]">{caseStudySlides[currentSlide].title}</h3>
                    <p className="text-sm text-[#8b7355]">{caseStudySlides[currentSlide].subtitle}</p>
                  </div>
                  <div className="text-sm text-[#6a6a6a]">
                    {currentSlide + 1} / {caseStudySlides.length}
                  </div>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative aspect-[16/10] bg-[#fafafa] flex items-center justify-center overflow-hidden">
                <img
                  src={caseStudySlides[currentSlide].image}
                  alt={caseStudySlides[currentSlide].title}
                  className="max-w-full max-h-full object-contain p-4"
                />
              </div>

              {/* Slide Description */}
              <div className="px-6 py-4 bg-white border-t border-[#e5e5e0]">
                <p className="text-sm text-[#4a4a4a]">{caseStudySlides[currentSlide].description}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#f8f7f5] transition-colors z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-[#1a1a1a]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#f8f7f5] transition-colors z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-[#1a1a1a]" />
            </button>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {caseStudySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-[#8b7355] w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Labels */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {caseStudySlides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`px-3 py-1 text-xs rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-[#8b7355] text-white' 
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {slide.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-6">Context</h2>
              <div className="space-y-4 text-[#4a4a4a]">
                <p>
                  In high-value B2B environments, late-stage (BOFU) prospects often remain invisible to sales teams despite repeated marketing touches. Traditional email campaigns measure activity (opens, clicks) but fail to convert engagement into actionable revenue signals.
                </p>
                <p>
                  This case study documents the design and execution of an AI-driven BOFU intent intelligence system that transformed email engagement into prioritized sales outreach and measurable pipeline movement.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-6">The Problem</h2>
              <div className="space-y-4 text-[#4a4a4a]">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>BOFU prospects were engaging passively but not initiating conversations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Sales lacked visibility into who was genuinely ready to engage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Batch-and-blast email approaches produced noise, not decision signals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>No systematic bridge existed between marketing engagement and sales action</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Architecture & Approach</h2>
          <p className="text-center text-[#4a4a4a] max-w-3xl mx-auto mb-12">
            The system was designed as a <strong>revenue intelligence loop</strong>, not a campaign. Email functioned as a decision sensor, while sales acted as the conversion actuator.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-sm border border-[#e5e5e0]">
              <Target className="w-8 h-8 text-[#8b7355] mb-4" />
              <h3 className="font-heading text-lg text-[#1a1a1a] mb-2">Intent Sensing</h3>
              <p className="text-sm text-[#6a6a6a]">Intent sensing over vanity metrics — tracking behavioral signals that indicate genuine buying readiness</p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-[#e5e5e0]">
              <Zap className="w-8 h-8 text-[#8b7355] mb-4" />
              <h3 className="font-heading text-lg text-[#1a1a1a] mb-2">Signal Amplification</h3>
              <p className="text-sm text-[#6a6a6a]">Signal amplification instead of frequency escalation — quality over quantity in outreach</p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-[#e5e5e0]">
              <Users className="w-8 h-8 text-[#8b7355] mb-4" />
              <h3 className="font-heading text-lg text-[#1a1a1a] mb-2">Human-in-the-Loop</h3>
              <p className="text-sm text-[#6a6a6a]">Human-in-the-loop conversion at the moment of peak intent — sales triggered by signals, not schedules</p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-[#e5e5e0]">
              <MessageSquare className="w-8 h-8 text-[#8b7355] mb-4" />
              <h3 className="font-heading text-lg text-[#1a1a1a] mb-2">Message Continuity</h3>
              <p className="text-sm text-[#6a6a6a]">Message continuity across BOFU touchpoints — coherent narrative from email to sales call</p>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8">Execution</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8b7355] text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">1</div>
                <div>
                  <h3 className="font-medium text-[#1a1a1a] mb-1">Multi-touch BOFU Sequences</h3>
                  <p className="text-sm text-[#6a6a6a]">Deployed in a high-noise December window, targeting C-suite executives at ET 500 and publicly traded Indian companies</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8b7355] text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">2</div>
                <div>
                  <h3 className="font-medium text-[#1a1a1a] mb-1">Real-time Intent Identification</h3>
                  <p className="text-sm text-[#6a6a6a]">Engagement data used to identify high-intent readers in real time based on open patterns, click behavior, and timing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8b7355] text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">3</div>
                <div>
                  <h3 className="font-medium text-[#1a1a1a] mb-1">Selective Sales Outreach</h3>
                  <p className="text-sm text-[#6a6a6a]">Sales outreach triggered selectively based on intent thresholds — not blanket follow-ups</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8b7355] text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">4</div>
                <div>
                  <h3 className="font-medium text-[#1a1a1a] mb-1">Attribution Clarity</h3>
                  <p className="text-sm text-[#6a6a6a]">Clear separation between email-originated leads and email-influenced conversions</p>
                </div>
              </div>
            </div>
            
            {/* Campaign Performance Preview */}
            <div className="bg-[#f8f7f5] p-6 rounded-sm">
              <h3 className="text-sm font-medium text-[#6a6a6a] uppercase tracking-wide mb-4">Campaign Performance Snapshot</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-[#e5e5e0]">
                  <span className="text-sm text-[#4a4a4a]">High-Intent Cohort</span>
                  <span className="text-sm font-medium text-[#1a1a1a]">81% Open Rate</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#e5e5e0]">
                  <span className="text-sm text-[#4a4a4a]">CHRO Segment</span>
                  <span className="text-sm font-medium text-[#1a1a1a]">57% Open Rate</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#e5e5e0]">
                  <span className="text-sm text-[#4a4a4a]">CEO/CMD Segment</span>
                  <span className="text-sm font-medium text-[#1a1a1a]">54% Open Rate</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#e5e5e0]">
                  <span className="text-sm text-[#4a4a4a]">Follow-up Sequences</span>
                  <span className="text-sm font-medium text-[#1a1a1a]">36-40% Open Rate</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-[#4a4a4a]">Cold Outreach Baseline</span>
                  <span className="text-sm font-medium text-[#1a1a1a]">15-24% Open Rate</span>
                </div>
              </div>
              <p className="text-xs text-[#8b7355] mt-4">* Industry benchmark for B2B cold email: 15-25%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#1a1a1a]">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-white mb-8 text-center">Outcomes</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm text-center">
              <p className="text-4xl font-heading text-white mb-2">80%</p>
              <p className="text-sm text-white/70">Peak Open Rate on High-Intent Cohorts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm text-center">
              <p className="text-4xl font-heading text-white mb-2">2</p>
              <p className="text-sm text-white/70">Inbound High-Value B2B Leads (ET 500 Companies)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm text-center">
              <p className="text-4xl font-heading text-white mb-2">10+</p>
              <p className="text-sm text-white/70">Meetings Booked via Intent-Triggered Outreach</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm text-center">
              <p className="text-4xl font-heading text-white mb-2">12</p>
              <p className="text-sm text-white/70">Total Sales Conversations Initiated</p>
            </div>
            <div className="bg-green-600/20 backdrop-blur-sm p-6 rounded-sm text-center border border-green-500/30">
              <p className="text-4xl font-heading text-green-400 mb-2">$3M</p>
              <p className="text-sm text-white/70">Annual Deal Value per Lead Generated</p>
            </div>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-white/80 text-lg leading-relaxed">
              Validated a repeatable <strong className="text-white">email → intent → outreach → meeting</strong> conversion loop for enterprise B2B sales.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Examples Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8">Sample Lead Conversions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f8f7f5] p-6 rounded-sm border border-[#e5e5e0]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#8b7355] rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1a1a1a]">ET 500 Chemical Company</p>
                  <p className="text-xs text-[#6a6a6a]">Publicly Traded • Manufacturing</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#4a4a4a]">EA to CMD & CEO responded within 24 hours</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#4a4a4a]">Requested corporate presentation and case studies</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#4a4a4a]">Active pipeline progression</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#f8f7f5] p-6 rounded-sm border border-[#e5e5e0]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#8b7355] rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1a1a1a]">Major FMCG Conglomerate</p>
                  <p className="text-xs text-[#6a6a6a]">Publicly Traded • Consumer Goods</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#4a4a4a]">Senior VP & CIO responded directly</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#4a4a4a]">"Would like to understand the proposition"</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#4a4a4a]">Call scheduled for following week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Insight Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-6">Business Insight</h2>
            <blockquote className="text-xl sm:text-2xl text-[#4a4a4a] leading-relaxed italic mb-6">
              "At BOFU, conversion is rarely a single-channel event. The real leverage comes from turning engagement into prioritized human action at the moment of maximum intent."
            </blockquote>
            <p className="text-[#6a6a6a]">
              This system reframed email from a communication channel into a <strong className="text-[#1a1a1a]">revenue intelligence layer</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Attribution Note */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#f5f3ef]">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-xl sm:text-2xl text-[#1a1a1a] mb-6">Attribution Note</h2>
          <p className="text-[#4a4a4a] mb-4">Results reflect a combination of:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#8b7355] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-[#1a1a1a]">Direct Email-Led Conversions</p>
                <p className="text-sm text-[#6a6a6a]">2 inbound leads that responded directly to email sequences</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#8b7355] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-[#1a1a1a]">Assisted Conversions</p>
                <p className="text-sm text-[#6a6a6a]">10+ meetings booked via sales outreach triggered by email intent signals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-xl sm:text-2xl text-[#1a1a1a] mb-6 text-center">Technology & Approach</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Intent Signals', 'Email Automation', 'Sales Enablement', 'Revenue Intelligence', 'Behavioral Analytics', 'BOFU Strategy'].map((tag) => (
              <span 
                key={tag}
                className="inline-flex items-center px-4 py-2 text-sm font-medium bg-[#f8f7f5] text-[#4a4a4a] rounded-sm border border-[#e5e5e0]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#1a1a1a]">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white mb-6">
            Ready to Build Your Revenue Intelligence System?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Enterprise engagements typically operate in the multi-million-dollar annual range. Let's discuss how intent intelligence can transform your B2B pipeline.
          </p>
          <button 
            onClick={openModal}
            className="inline-flex items-center gap-2 bg-[#8b7355] hover:bg-[#6b5a45] text-white px-8 py-4 rounded-sm text-lg font-medium transition-colors"
          >
            Request a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
