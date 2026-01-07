import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Target, Zap, Users, Building2, Radio, Newspaper, MapPin, Phone, Mail, Bot, MessageSquare, BarChart3, DollarSign, Megaphone, Download, Maximize2, FileText } from 'lucide-react';
import Footer from '@/components/Footer';
import { useConsultationModal } from '@/contexts/ConsultationModalContext';
import { useState } from 'react';

export default function LuxuryRealEstate() {
  const { openModal } = useConsultationModal();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => {
    window.open('/case-studies/luxury-real-estate/Gulmohar_Heights_360_Marketing_Plan.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f8f7f5]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-[#d9d4cc]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-heading text-lg sm:text-xl text-[#1a1a1a] hover:text-[#8b7355] transition-colors">
            Prateek Karn
          </Link>
          <Link 
            to="/mywork#growth-engineering" 
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8b7355] border border-[#8b7355] px-4 py-2 rounded-sm hover:bg-[#8b7355] hover:text-white transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to My Work
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 bg-gradient-to-b from-[#f5f0e8] to-[#f8f7f5]">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8b7355] mb-4 font-medium">
              360° Real Estate Marketing
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#2d2a26] mb-6 leading-tight">
              Luxury Real Estate: ₹30 Cr/Month Revenue Engine
            </h1>
            <p className="text-lg sm:text-xl text-[#5a5550] leading-relaxed mb-8">
              A comprehensive omnichannel marketing strategy for a premium real estate project in Jaipur, combining digital precision with offline brand building and AI-driven lead nurturing.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-[#8b7355] text-white px-5 py-3 rounded-md text-sm font-medium shadow-md">
                <TrendingUp className="w-4 h-4" />
                <span>₹30 Cr Monthly Revenue Target</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-5 py-3 rounded-md text-sm font-medium shadow-md">
                <BarChart3 className="w-4 h-4" />
                <span>~92x Projected ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Presentation Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-2">Complete Marketing Strategy</h2>
              <p className="text-[#6a6a6a]">View the full 360° marketing plan presentation</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={openFullscreen}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#8b7355] border border-[#8b7355] px-4 py-2 rounded-sm hover:bg-[#8b7355] hover:text-white transition-all duration-200"
              >
                <Maximize2 className="w-4 h-4" />
                View Fullscreen
              </button>
              <a
                href="/case-studies/luxury-real-estate/Gulmohar_Heights_360_Marketing_Plan.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-medium bg-[#1a1a1a] text-white px-4 py-2 rounded-sm hover:bg-[#333] transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
          
          {/* PDF Embed */}
          <div className="bg-[#f8f7f5] rounded-sm border border-[#e5e5e0] overflow-hidden">
            <iframe
              src="/case-studies/luxury-real-estate/Gulmohar_Heights_360_Marketing_Plan.pdf"
              className="w-full h-[600px] sm:h-[700px]"
              title="360° Marketing Plan"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-6">The Project</h2>
              <div className="space-y-4 text-[#4a4a4a]">
                <p>
                  A premium residential project by a leading real estate developer in Jaipur featuring luxury 3 & 4 BHK apartments and independent villas, priced at approximately ₹1 Cr per unit.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#8b7355] mt-0.5 flex-shrink-0" />
                    <span><strong>Property Type:</strong> 3 & 4 BHK Apartments + Villas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#8b7355] mt-0.5 flex-shrink-0" />
                    <span><strong>Location:</strong> Jaipur, Rajasthan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-[#8b7355] mt-0.5 flex-shrink-0" />
                    <span><strong>Price Point:</strong> ~₹1 Cr per unit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#8b7355] mt-0.5 flex-shrink-0" />
                    <span><strong>Target Audience:</strong> HNI families, NRIs, Business owners</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-6">The Challenge</h2>
              <div className="space-y-4 text-[#4a4a4a]">
                <p>
                  Design a 360° marketing strategy capable of generating ₹30 Cr in monthly sales (30 units) through an optimized mix of digital performance marketing, traditional media, and AI-powered lead nurturing.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-sm border border-[#e5e5e0]">
                    <Target className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Revenue Target</p>
                    <p className="text-xs text-[#6a6a6a]">₹30 Cr/month at capacity</p>
                  </div>
                  <div className="bg-white p-4 rounded-sm border border-[#e5e5e0]">
                    <Zap className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Budget Efficiency</p>
                    <p className="text-xs text-[#6a6a6a]">~1% marketing load</p>
                  </div>
                  <div className="bg-white p-4 rounded-sm border border-[#e5e5e0]">
                    <Users className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Lead Volume</p>
                    <p className="text-xs text-[#6a6a6a]">2,400+ leads/month</p>
                  </div>
                  <div className="bg-white p-4 rounded-sm border border-[#e5e5e0]">
                    <Bot className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">AI Automation</p>
                    <p className="text-xs text-[#6a6a6a]">Voice + WhatsApp + Email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Budget Breakdown */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Monthly Budget Architecture</h2>
          <p className="text-center text-[#6a6a6a] mb-4 max-w-2xl mx-auto">
            ₹29.55 Lakhs/month base investment (including 20% contingency) to drive ₹30 Cr in monthly revenue
          </p>
          <p className="text-center text-[#2E7D32] text-sm mb-8 max-w-2xl mx-auto bg-[#E8F5E9] py-2 px-4 rounded-sm">
            🏠 <strong>In-House Execution:</strong> Digital marketing managed by Marketing Manager. Only offline media (Newspaper, Hoardings, Radio, PR) requires external vendors.
          </p>
          
          <div className="bg-[#f8f7f5] rounded-sm border border-[#e5e5e0] p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Digital Channels */}
              <div>
                <h3 className="font-heading text-xl text-[#1a1a1a] mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#8b7355]" />
                  Digital Performance
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-[#e5e5e0]">
                    <div>
                      <p className="font-medium text-[#1a1a1a]">Meta Ads (FB + Instagram)</p>
                      <p className="text-xs text-[#6a6a6a]">CPL: ₹250-300 | ~2,000 leads/mo</p>
                    </div>
                    <span className="font-heading text-lg text-[#8b7355]">₹6,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#e5e5e0]">
                    <div>
                      <p className="font-medium text-[#1a1a1a]">Google Ads</p>
                      <p className="text-xs text-[#6a6a6a]">CPL: ₹1,000-1,500 | ~200 leads/mo</p>
                    </div>
                    <span className="font-heading text-lg text-[#8b7355]">₹2,50,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#e5e5e0] bg-[#FFF9F0] -mx-2 px-2">
                    <div>
                      <p className="font-medium text-[#1a1a1a]">MagicBricks</p>
                      <p className="text-xs text-[#8b7355] font-medium">3-month package: ₹90K upfront</p>
                    </div>
                    <span className="font-heading text-lg text-[#8b7355]">₹30,000/mo*</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#e5e5e0] bg-[#FFF9F0] -mx-2 px-2">
                    <div>
                      <p className="font-medium text-[#1a1a1a]">99 Acres</p>
                      <p className="text-xs text-[#8b7355] font-medium">3-month package: ₹90K upfront</p>
                    </div>
                    <span className="font-heading text-lg text-[#8b7355]">₹30,000/mo*</span>
                  </div>
                </div>
              </div>

              {/* Offline Channels */}
              <div>
                <h3 className="font-heading text-xl text-[#1a1a1a] mb-6 flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-[#8b7355]" />
                  Offline & Brand Building
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-[#e5e5e0]">
                    <div>
                      <p className="font-medium text-[#1a1a1a]">Hoardings</p>
                      <p className="text-xs text-[#6a6a6a]">22 strategic locations</p>
                    </div>
                    <span className="font-heading text-lg text-[#8b7355]">₹4,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#e5e5e0]">
                    <div>
                      <p className="font-medium text-[#1a1a1a]">Newspaper Ads</p>
                      <p className="text-xs text-[#6a6a6a]">Dainik Bhaskar + Patrika (4 ads/mo)</p>
                    </div>
                    <span className="font-heading text-lg text-[#8b7355]">₹4,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#e5e5e0]">
                    <div>
                      <p className="font-medium text-[#1a1a1a]">Radio Jingles</p>
                      <p className="text-xs text-[#6a6a6a]">My FM + Big FM (100+ spots/mo)</p>
                    </div>
                    <span className="font-heading text-lg text-[#8b7355]">₹4,50,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#e5e5e0]">
                    <div>
                      <p className="font-medium text-[#1a1a1a]">PR & Brand Awareness</p>
                      <p className="text-xs text-[#6a6a6a]">ET Realty advertorials</p>
                    </div>
                    <span className="font-heading text-lg text-[#8b7355]">₹2,50,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI & Tools Section */}
            <div className="mt-8 pt-6 border-t border-[#e5e5e0]">
              <h3 className="font-heading text-xl text-[#1a1a1a] mb-6 flex items-center gap-2">
                <Bot className="w-5 h-5 text-[#8b7355]" />
                AI-Driven Marketing & Tools
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-sm border border-[#e5e5e0]">
                  <p className="font-medium text-[#1a1a1a] mb-1">WhatsApp Marketing</p>
                  <p className="text-xs text-[#6a6a6a] mb-2">Automated nurture sequences</p>
                  <span className="font-heading text-[#8b7355]">₹15,000</span>
                </div>
                <div className="bg-white p-4 rounded-sm border border-[#e5e5e0]">
                  <p className="font-medium text-[#1a1a1a] mb-1">Email Marketing</p>
                  <p className="text-xs text-[#6a6a6a] mb-2">Drip campaigns & automation</p>
                  <span className="font-heading text-[#8b7355]">₹17,500</span>
                </div>
                <div className="bg-white p-4 rounded-sm border border-[#e5e5e0]">
                  <p className="font-medium text-[#1a1a1a] mb-1">Database Purchase</p>
                  <p className="text-xs text-[#6a6a6a] mb-2">HNI contact acquisition</p>
                  <span className="font-heading text-[#8b7355]">₹20,000</span>
                </div>
              </div>
            </div>

            {/* Quarterly Note */}
            <div className="mt-6 p-4 bg-[#FFF9F0] border border-[#C4956A] rounded-sm">
              <p className="text-sm text-[#5a5550]">
                <strong className="text-[#8b7355]">📦 Quarterly Portal Payments:</strong> MagicBricks + 99 Acres are 3-month packages (₹90K each). 
                <br/>Month 1 & 4 cash outflow = ₹30.75L (includes ₹1.2L portal upfront). Regular months = ₹29.55L.
              </p>
            </div>

            {/* Total */}
            <div className="mt-6 pt-6 border-t-2 border-[#8b7355]">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-heading text-xl text-[#1a1a1a]">Total Monthly Investment</p>
                  <p className="text-sm text-[#6a6a6a]">Including 20% contingency fund (₹4.93L)</p>
                </div>
                <span className="font-heading text-3xl text-[#8b7355]">₹29,55,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Driven Lead Nurturing */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-4 text-center">AI-Driven Lead Nurturing System</h2>
          <p className="text-center text-[#6a6a6a] mb-8 max-w-2xl mx-auto">
            Automated multi-channel engagement to convert leads into site visits and bookings
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Voice Calls */}
            <div className="bg-white rounded-sm border border-[#e5e5e0] p-6">
              <div className="w-12 h-12 bg-[#f8f7f5] rounded-sm flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#8b7355]" />
              </div>
              <h3 className="font-heading text-lg text-[#1a1a1a] mb-2">Automated Voice Calls</h3>
              <p className="text-sm text-[#6a6a6a] mb-4">
                AI-powered voice calls for instant lead engagement within 5 minutes of inquiry.
              </p>
              <ul className="space-y-2 text-sm text-[#4a4a4a]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Instant callback on lead capture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Qualification questions automated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Warm transfer to sales team</span>
                </li>
              </ul>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-sm border border-[#e5e5e0] p-6">
              <div className="w-12 h-12 bg-[#f8f7f5] rounded-sm flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-[#8b7355]" />
              </div>
              <h3 className="font-heading text-lg text-[#1a1a1a] mb-2">WhatsApp Nurture Sequences</h3>
              <p className="text-sm text-[#6a6a6a] mb-4">
                Personalized drip campaigns with property updates, virtual tours, and exclusive offers.
              </p>
              <ul className="space-y-2 text-sm text-[#4a4a4a]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>7-day automated sequence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Rich media: brochures, videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Site visit scheduling integration</span>
                </li>
              </ul>
            </div>

            {/* Email */}
            <div className="bg-white rounded-sm border border-[#e5e5e0] p-6">
              <div className="w-12 h-12 bg-[#f8f7f5] rounded-sm flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#8b7355]" />
              </div>
              <h3 className="font-heading text-lg text-[#1a1a1a] mb-2">Email Marketing Campaigns</h3>
              <p className="text-sm text-[#6a6a6a] mb-4">
                Sophisticated email sequences for long-term nurturing and re-engagement.
              </p>
              <ul className="space-y-2 text-sm text-[#4a4a4a]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Behavior-triggered emails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Monthly newsletter updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Re-engagement for cold leads</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Funnel */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Lead-to-Booking Funnel</h2>
          
          <div className="bg-[#f8f7f5] rounded-sm border border-[#e5e5e0] p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div className="p-4">
                <p className="font-heading text-3xl sm:text-4xl text-[#8b7355] mb-2">2,400+</p>
                <p className="text-sm text-[#6a6a6a]">Total Leads/Month</p>
                <p className="text-xs text-[#8b7355] mt-1">100%</p>
              </div>
              <div className="p-4">
                <p className="font-heading text-3xl sm:text-4xl text-[#8b7355] mb-2">480</p>
                <p className="text-sm text-[#6a6a6a]">Qualified Leads</p>
                <p className="text-xs text-[#8b7355] mt-1">20% qualification</p>
              </div>
              <div className="p-4">
                <p className="font-heading text-3xl sm:text-4xl text-[#8b7355] mb-2">144</p>
                <p className="text-sm text-[#6a6a6a]">Site Visits</p>
                <p className="text-xs text-[#8b7355] mt-1">30% visit rate</p>
              </div>
              <div className="p-4">
                <p className="font-heading text-3xl sm:text-4xl text-[#8b7355] mb-2">72</p>
                <p className="text-sm text-[#6a6a6a]">Negotiations</p>
                <p className="text-xs text-[#8b7355] mt-1">50% interest</p>
              </div>
              <div className="p-4">
                <p className="font-heading text-3xl sm:text-4xl text-[#8b7355] mb-2">30</p>
                <p className="text-sm text-[#6a6a6a]">Bookings</p>
                <p className="text-xs text-[#8b7355] mt-1">42% close rate</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#e5e5e0] text-center">
              <p className="text-sm text-[#6a6a6a]">
                <strong className="text-[#1a1a1a]">Effective CPA:</strong> ~₹1,03,300 per booking | 
                <strong className="text-[#1a1a1a] ml-4">Revenue per Booking:</strong> ₹1 Cr | 
                <strong className="text-[#1a1a1a] ml-4">Marketing Load:</strong> ~1%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Projection */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Progressive Revenue Model</h2>
          
          <div className="bg-white rounded-sm border border-[#e5e5e0] p-6 sm:p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#8b7355]">
                    <th className="text-left py-3 px-4 font-heading text-[#1a1a1a]">Month</th>
                    <th className="text-right py-3 px-4 font-heading text-[#1a1a1a]">Revenue Target</th>
                    <th className="text-right py-3 px-4 font-heading text-[#1a1a1a]">Units</th>
                    <th className="text-right py-3 px-4 font-heading text-[#1a1a1a]">Cash Outflow</th>
                    <th className="text-right py-3 px-4 font-heading text-[#1a1a1a]">ROI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e5e5e0] bg-[#FFF9F0]">
                    <td className="py-3 px-4 text-[#4a4a4a]">Month 1 <span className="text-xs text-[#8b7355]">(Launch + Q1 Portal)</span></td>
                    <td className="py-3 px-4 text-right font-medium text-[#8b7355]">₹15 Cr</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">15</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]"><strong>₹34.6 L*</strong></td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">43x</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e0]">
                    <td className="py-3 px-4 text-[#4a4a4a]">Month 2 <span className="text-xs text-[#8b7355]">(Optimize)</span></td>
                    <td className="py-3 px-4 text-right font-medium text-[#8b7355]">₹22.5 Cr</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">23</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">₹31 L</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">73x</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e0]">
                    <td className="py-3 px-4 text-[#4a4a4a]">Month 3 <span className="text-xs text-[#8b7355]">(Full Capacity)</span></td>
                    <td className="py-3 px-4 text-right font-medium text-[#8b7355]">₹30 Cr</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">30</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">₹31 L</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">97x</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e0] bg-[#FFF9F0]">
                    <td className="py-3 px-4 text-[#4a4a4a]">Month 4 <span className="text-xs text-[#27ae60]">(+10%)</span> <span className="text-xs text-[#8b7355]">(Q2 Portal)</span></td>
                    <td className="py-3 px-4 text-right font-medium text-[#8b7355]">₹33 Cr</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">33</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]"><strong>₹34.6 L*</strong></td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">95x</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e0]">
                    <td className="py-3 px-4 text-[#4a4a4a]">Month 5 <span className="text-xs text-[#27ae60]">(+10%)</span></td>
                    <td className="py-3 px-4 text-right font-medium text-[#8b7355]">₹36.3 Cr</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">36</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">₹31 L</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">117x</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e0]">
                    <td className="py-3 px-4 text-[#4a4a4a]">Month 6 <span className="text-xs text-[#27ae60]">(+10%)</span></td>
                    <td className="py-3 px-4 text-right font-medium text-[#8b7355]">₹39.9 Cr</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">40</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">₹31 L</td>
                    <td className="py-3 px-4 text-right text-[#4a4a4a]">129x</td>
                  </tr>
                  <tr className="bg-[#1a1a1a] text-white">
                    <td className="py-4 px-4 font-heading">6-Month Total</td>
                    <td className="py-4 px-4 text-right font-heading text-[#C4956A]">₹176.7 Cr</td>
                    <td className="py-4 px-4 text-right">177</td>
                    <td className="py-4 px-4 text-right">₹1.93 Cr</td>
                    <td className="py-4 px-4 text-right font-heading text-[#C4956A]">~92x</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-xs text-[#888] text-center mt-6 italic">
              * Includes ₹5.4L quarterly portal payment (MagicBricks + 99 Acres). Numbers may vary based on market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Key Performance Metrics</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#f8f7f5] rounded-sm border border-[#e5e5e0] p-6 text-center">
              <p className="font-heading text-4xl sm:text-5xl text-[#8b7355] mb-2">₹250-300</p>
              <p className="text-sm text-[#6a6a6a]">Meta CPL</p>
            </div>
            <div className="bg-[#f8f7f5] rounded-sm border border-[#e5e5e0] p-6 text-center">
              <p className="font-heading text-4xl sm:text-5xl text-[#8b7355] mb-2">₹1,000-1,500</p>
              <p className="text-sm text-[#6a6a6a]">Google CPL</p>
            </div>
            <div className="bg-[#f8f7f5] rounded-sm border border-[#e5e5e0] p-6 text-center">
              <p className="font-heading text-4xl sm:text-5xl text-[#8b7355] mb-2">~92x</p>
              <p className="text-sm text-[#6a6a6a]">Projected ROI</p>
            </div>
            <div className="bg-[#f8f7f5] rounded-sm border border-[#e5e5e0] p-6 text-center">
              <p className="font-heading text-4xl sm:text-5xl text-[#8b7355] mb-2">~1%</p>
              <p className="text-sm text-[#6a6a6a]">Marketing Load</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#1a1a1a]">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-white mb-4">
            Need a 360° Marketing Strategy for Your Real Estate Project?
          </h2>
          <p className="text-[#a0a0a0] mb-8 max-w-2xl mx-auto">
            From luxury residential to commercial developments, I architect data-driven marketing systems that deliver measurable ROI.
          </p>
          <button 
            onClick={() => openModal()}
            className="inline-flex items-center gap-2 bg-[#8b7355] text-white px-8 py-4 rounded-sm text-sm font-medium hover:bg-[#7a6548] transition-colors"
          >
            <span>Schedule a Consultation</span>
            <TrendingUp className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
