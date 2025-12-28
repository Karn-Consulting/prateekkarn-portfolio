import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Target, Zap, RefreshCw, Users, Layers, ShieldCheck, BarChart3 } from 'lucide-react';
import Footer from '@/components/Footer';
import { useConsultationModal } from '@/contexts/ConsultationModalContext';

export default function MetaAdsPerformance() {
  const { openModal } = useConsultationModal();

  return (
    <div className="min-h-screen bg-[#f8f7f5]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-[#d9d4cc]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-heading text-lg sm:text-xl text-[#1a1a1a] hover:text-[#8b7355] transition-colors">
            Prateek Karn
          </Link>
          <Link 
            to="/mywork#paid-media" 
            className="inline-flex items-center gap-2 text-sm text-[#8b7355] hover:text-[#6b5a45] transition-colors border border-[#8b7355] px-4 py-2 rounded-sm"
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
              Paid Media Turnaround
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2d2a26] mb-6 leading-tight">
              Meta Ads Turnaround: From Inefficient Spend to 2.37 ROAS in 10 Days
            </h1>
            <p className="text-lg sm:text-xl text-[#5a5550] leading-relaxed mb-8">
              Re-architecting a $40K/month account for profitability and scale by implementing an intelligent, multi-layered advertising system.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#8b7355] text-white px-5 py-3 rounded-md text-sm font-medium shadow-md">
              <TrendingUp className="w-4 h-4" />
              <span>→ 2.37 ROAS achieved in 10 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-6">The Challenge</h2>
              <div className="space-y-4 text-[#4a4a4a]">
                <p>
                  We took over a Meta Ads account with a significant monthly spend of approximately $40,000. Despite the high investment, the account was struggling to achieve profitability, with ROAS consistently below the break-even point of 1.75.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Improperly configured Campaign Budget Optimization (CBO)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>No strategic segmentation between prospecting and retargeting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Inefficient spend allocation causing audience overlap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>High cost per acquisition eroding profitability</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-6">The Solution</h2>
              <div className="space-y-4 text-[#4a4a4a]">
                <p>
                  Re-architected the entire account structure from the ground up, implementing an intelligent framework that separated and optimized each stage of the customer journey.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <Zap className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">ASC+ for Scale</p>
                    <p className="text-xs text-[#6a6a6a]">Cost cap optimization</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <ShieldCheck className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Clean Prospecting</p>
                    <p className="text-xs text-[#6a6a6a]">Net-new customer focus</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <RefreshCw className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Multi-Layer Retargeting</p>
                    <p className="text-xs text-[#6a6a6a]">Funnel-based segmentation</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <BarChart3 className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Frequency Control</p>
                    <p className="text-xs text-[#6a6a6a]">Optimal ad exposure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Campaign Architecture</h2>
          
          <div className="bg-white rounded-sm border border-[#e5e5e0] p-6 sm:p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* ASC+ Campaign */}
              <div className="text-center">
                <div className="bg-[#f8f7f5] border border-[#e5e5e0] rounded-sm p-6">
                  <Zap className="w-8 h-8 text-[#8b7355] mx-auto mb-3" />
                  <p className="text-sm font-medium text-[#1a1a1a] mb-1">ASC+ Scale Campaign</p>
                  <p className="text-xs text-[#6a6a6a] mb-3">Advantage+ with Cost Caps</p>
                  <div className="text-left text-xs text-[#6a6a6a] space-y-1">
                    <p>• Meta AI-driven optimization</p>
                    <p>• Cost cap for profitability</p>
                    <p>• Broad audience signals</p>
                  </div>
                </div>
              </div>
              
              {/* Prospecting Campaign */}
              <div className="text-center">
                <div className="bg-[#f8f7f5] border border-[#e5e5e0] rounded-sm p-6">
                  <Users className="w-8 h-8 text-[#8b7355] mx-auto mb-3" />
                  <p className="text-sm font-medium text-[#1a1a1a] mb-1">Q3 Prospecting</p>
                  <p className="text-xs text-[#6a6a6a] mb-3">Net-New Customer Acquisition</p>
                  <div className="text-left text-xs text-[#6a6a6a] space-y-1">
                    <p>• Strict audience exclusions</p>
                    <p>• Clean creative testing</p>
                    <p>• Target frequency: ~1.2</p>
                  </div>
                </div>
              </div>
              
              {/* Retargeting Campaign */}
              <div className="text-center">
                <div className="bg-[#f8f7f5] border border-[#e5e5e0] rounded-sm p-6">
                  <RefreshCw className="w-8 h-8 text-[#8b7355] mx-auto mb-3" />
                  <p className="text-sm font-medium text-[#1a1a1a] mb-1">Q3 Retargeting</p>
                  <p className="text-xs text-[#6a6a6a] mb-3">Multi-Touch Engagement</p>
                  <div className="text-left text-xs text-[#6a6a6a] space-y-1">
                    <p>• Funnel-stage segmentation</p>
                    <p>• Product-view targeting</p>
                    <p>• Target frequency: ~3.2</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technical Notes */}
            <div className="mt-8 pt-6 border-t border-[#e5e5e0]">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-[#6a6a6a]">
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Blocked engaged users from prospecting for clean acquisition data</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Sequential messaging based on funnel position and engagement level</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Cost caps prevent overspend while maintaining delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Results & Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <p className="font-heading text-4xl sm:text-5xl text-[#8b7355] mb-2">2.37</p>
              <p className="text-sm text-[#6a6a6a]">Purchase ROAS Achieved</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl sm:text-5xl text-[#8b7355] mb-2">+30%</p>
              <p className="text-sm text-[#6a6a6a]">Increase in Purchases</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl sm:text-5xl text-[#8b7355] mb-2">10</p>
              <p className="text-sm text-[#6a6a6a]">Days to Profitability</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl sm:text-5xl text-[#8b7355] mb-2">3.59</p>
              <p className="text-sm text-[#6a6a6a]">Top Campaign ROAS</p>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="bg-[#f8f7f5] rounded-sm border border-[#e5e5e0] p-6 sm:p-8">
            <h3 className="font-heading text-xl text-[#1a1a1a] mb-6 text-center">Performance Comparison</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-medium text-[#8b7355] uppercase tracking-wide mb-4">Before (Inherited)</h4>
                <ul className="space-y-3 text-sm text-[#4a4a4a]">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#c9c4bc] rounded-full mt-2 flex-shrink-0"></span>
                    <span>ROAS consistently below 1.75 threshold</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#c9c4bc] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Inconsistent and unprofitable campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#c9c4bc] rounded-full mt-2 flex-shrink-0"></span>
                    <span>High, uncontrolled ad frequency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#c9c4bc] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Elevated cost per purchase</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#8b7355] uppercase tracking-wide mb-4">After (10 Days)</h4>
                <ul className="space-y-3 text-sm text-[#4a4a4a]">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Purchase ROAS at 2.37 (35% above threshold)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Top campaigns at 3.59, 1.85, 1.62 ROAS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Prospecting frequency at ~1.2 (optimal)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Lowest cost per purchase since May</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Meta Ads Manager', 'Advantage+ Shopping', 'Cost Cap Bidding', 'Custom Audiences', 'GA4', 'Looker Studio'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white border border-[#e5e5e0] rounded-sm text-sm text-[#4a4a4a]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Key Learnings</h2>
          
          <div className="bg-[#f8f7f5] rounded-sm border border-[#e5e5e0] p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8b7355] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">1</span>
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a] mb-1">Architecture Over Tactics</p>
                  <p className="text-sm text-[#6a6a6a]">A sound campaign structure outperforms individual optimizations every time.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8b7355] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">2</span>
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a] mb-1">Clean Prospecting Data</p>
                  <p className="text-sm text-[#6a6a6a]">Excluding engaged users from prospecting reveals true acquisition costs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8b7355] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">3</span>
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a] mb-1">Frequency as a KPI</p>
                  <p className="text-sm text-[#6a6a6a]">Monitoring frequency prevents ad fatigue and maintains efficiency.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8b7355] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">4</span>
                </div>
                <div>
                  <p className="font-medium text-[#1a1a1a] mb-1">Cost Caps Enable Scale</p>
                  <p className="text-sm text-[#6a6a6a]">Cost caps let Meta's AI optimize while protecting profitability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-4">
            Ready to Architect Your Growth?
          </h2>
          <p className="text-[#6a6a6a] mb-8">
            If your paid media is hitting a performance ceiling, let's discuss how a more intelligent architecture can unlock new levels of profitability and scale.
          </p>
          <button 
            onClick={openModal}
            className="inline-flex items-center gap-2 bg-[#8b7355] text-white px-8 py-4 rounded-sm hover:bg-[#6b5a45] transition-colors"
          >
            Start a Conversation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
