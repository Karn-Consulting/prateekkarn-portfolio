import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Zap, RefreshCw, DollarSign, Users, Layers, ShieldCheck, Activity, Award } from 'lucide-react';
import Footer from '@/components/Footer';
import { useConsultationModal } from '@/contexts/ConsultationModalContext';

export default function MetaAdsPerformance() {
  const { openModal } = useConsultationModal();

  return (
    <div className="min-h-screen bg-[#f8f7f5]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f8f7f5]/95 backdrop-blur-sm border-b border-[#e5e5e0]">
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
      <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8b7355] mb-4">
              PROFITABLE TURNAROUND
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6">
              Meta Ads Turnaround: From Inefficient Spend to 2.37 ROAS in 10 Days
            </h1>
            <p className="text-lg sm:text-xl text-[#4a4a4a] leading-relaxed mb-8">
              Re-architecting a $40K/month account for profitability and scale by implementing an intelligent, multi-layered advertising system.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-4 py-2 rounded-sm text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>2.37 ROAS achieved in 10 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
            {/* Placeholder for the video embed */}
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">[Your Video Case Study Will Be Embedded Here]</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-6">The Challenge: A $40K/Month Account Leaking Profitability</h2>
              <div className="space-y-4 text-[#4a4a4a]">
                <p>
                  We recently took over a Meta Ads account with a significant monthly spend of approximately $40,000. Despite the high investment, the account was struggling to achieve profitability, with a Return on Ad Spend (ROAS) consistently below the break-even point of 1.75. The core issue was not a lack of budget, but a flawed underlying structure. The previous setup suffered from an improperly configured Campaign Budget Optimization (CBO) and a lack of strategic segmentation between prospecting for new customers and retargeting existing audiences. This resulted in inefficient spend allocation, audience overlap, and ultimately, diminished returns.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-red-200 rounded-sm p-4">
                <DollarSign className="w-5 h-5 text-red-600 mb-2" />
                <p className="text-sm font-medium text-[#1a1a1a]">Below-Profit ROAS</p>
                <p className="text-xs text-[#6a6a6a]">Stuck under 1.75</p>
              </div>
              <div className="bg-white border border-red-200 rounded-sm p-4">
                <Layers className="w-5 h-5 text-red-600 mb-2" />
                <p className="text-sm font-medium text-[#1a1a1a]">Flawed CBO</p>
                <p className="text-xs text-[#6a6a6a]">Inefficient budget use</p>
              </div>
              <div className="bg-white border border-red-200 rounded-sm p-4">
                <Users className="w-5 h-5 text-red-600 mb-2" />
                <p className="text-sm font-medium text-[#1a1a1a]">No Segmentation</p>
                <p className="text-xs text-[#6a6a6a]">Prospecting/retargeting mix</p>
              </div>
              <div className="bg-white border border-red-200 rounded-sm p-4">
                <Activity className="w-5 h-5 text-red-600 mb-2" />
                <p className="text-sm font-medium text-[#1a1a1a]">High CPA</p>
                <p className="text-xs text-[#6a6a6a]">Acquisition costs too high</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">The Solution: Re-Architecting for Intelligence and Precision</h2>
          <p className="text-center text-[#4a4a4a] max-w-3xl mx-auto mb-12">
            Our approach was not to simply tweak the existing campaigns, but to re-architect the entire account structure from the ground up. This involved implementing an intelligent framework that separated and optimized each stage of the customer journey. The new architecture was built on three key pillars:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f8f7f5] rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-sm flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-medium text-[#1a1a1a]">ASC+ for Scale</h3>
              </div>
              <p className="text-sm text-[#6a6a6a]">Leveraged Advantage+ Shopping Campaigns with cost caps to empower Meta's AI to find the most profitable customer segments at scale.</p>
            </div>
            <div className="bg-[#f8f7f5] rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-sm flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-medium text-[#1a1a1a]">Strategic Prospecting</h3>
              </div>
              <p className="text-sm text-[#6a6a6a]">Created a dedicated prospecting campaign to focus exclusively on acquiring net-new customers, with strict audience exclusions for a clean testing environment.</p>
            </div>
            <div className="bg-[#f8f7f5] rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-sm flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-medium text-[#1a1a1a]">Multi-layered Retargeting</h3>
              </div>
              <p className="text-sm text-[#6a6a6a]">Rebuilt the retargeting strategy to be more granular, segmenting audiences by funnel position, product views, and engagement for highly relevant messaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Results Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">The Results: A Dramatic Turnaround in Under Two Weeks</h2>
          <div className="bg-white border border-[#e5e5e0] rounded-lg p-6 sm:p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#e5e5e0]">
                    <th className="p-4 font-medium text-[#1a1a1a]">Metric</th>
                    <th className="p-4 font-medium text-red-600">Previous Performance</th>
                    <th className="p-4 font-medium text-green-600">After 10 Days</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e5e5e0]">
                    <td className="p-4 font-medium text-[#4a4a4a]">Purchase ROAS</td>
                    <td className="p-4 text-[#4a4a4a]">Below 1.75</td>
                    <td className="p-4 text-[#4a4a4a] font-bold">2.37</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e0]">
                    <td className="p-4 font-medium text-[#4a4a4a]">Top Campaign ROAS</td>
                    <td className="p-4 text-[#4a4a4a]">Inconsistent & Unprofitable</td>
                    <td className="p-4 text-[#4a4a4a] font-bold">3.59, 1.85, 1.62</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e0]">
                    <td className="p-4 font-medium text-[#4a4a4a]">Purchases</td>
                    <td className="p-4 text-[#4a4a4a]">Baseline</td>
                    <td className="p-4 text-[#4a4a4a] font-bold">+30% Increase</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e0]">
                    <td className="p-4 font-medium text-[#4a4a4a]">Cost Per Purchase</td>
                    <td className="p-4 text-[#4a4a4a]">High</td>
                    <td className="p-4 text-[#4a4a4a] font-bold">Lowest Since May</td>
                  </tr>
                  <tr className="border-b border-[#e5e5e0]">
                    <td className="p-4 font-medium text-[#4a4a4a]">Prospecting Frequency</td>
                    <td className="p-4 text-[#4a4a4a]">High (Inefficient)</td>
                    <td className="p-4 text-[#4a4a4a] font-bold">~1.2 (Optimal)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#4a4a4a]">Retargeting Frequency</td>
                    <td className="p-4 text-[#4a4a4a]">Uncontrolled</td>
                    <td className="p-4 text-[#4a4a4a] font-bold">~3.24 (Strategic)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <Award className="w-12 h-12 text-[#8b7355] mx-auto mb-4" />
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-4">Architectural Excellence Drives Performance</h2>
          <p className="text-[#4a4a4a] leading-relaxed">
            This case study demonstrates the critical importance of a sound architectural foundation in paid media. By moving beyond basic campaign setup to an intelligent, segmented, and AI-driven system, we were able to unlock significant profitability and create a scalable foundation for future growth. It underscores a core philosophy: strategy and structure are the bedrock of sustainable performance.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-4">
            Ready to Architect Your Growth?
          </h2>
          <p className="text-[#6a6a6a] mb-8 max-w-xl mx-auto">
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
