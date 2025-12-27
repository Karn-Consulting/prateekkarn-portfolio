import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Database, GitBranch, BarChart3, Target, TrendingUp, Layers } from 'lucide-react';
import Footer from '@/components/Footer';

export default function EndToEndAttribution() {
  return (
    <div className="min-h-screen bg-[#f8f7f5]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-[#d9d4cc]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-heading text-lg sm:text-xl text-[#1a1a1a] hover:text-[#8b7355] transition-colors">
            Prateek Karn
          </Link>
          <Link 
            to="/mywork#marketing-data" 
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
              Data Infrastructure
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2d2a26] mb-6 leading-tight">
              End-to-End Marketing Attribution System
            </h1>
            <p className="text-lg sm:text-xl text-[#5a5550] leading-relaxed mb-8">
              Unified data pipeline ingesting API data into BigQuery for cross-channel comparison and budget optimization.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#8b7355] text-white px-5 py-3 rounded-md text-sm font-medium shadow-md">
              <Target className="w-4 h-4" />
              <span>→ Shifted 30% budget to high-performing channels</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-6">The Problem</h2>
              <div className="space-y-4 text-[#4a4a4a]">
                <p>
                  Fragmented ad data across Meta, Google, and LinkedIn made true ROAS calculation impossible. Each platform claimed credit for the same conversions, creating a distorted view of marketing performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Platform-reported ROAS was fragmented and biased toward last-click</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Brand search and retargeting were systematically over-credited</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Upper-funnel prospecting channels were consistently undervalued</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Decision-makers lacked marginal ROI visibility for budget allocation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-6">The Solution</h2>
              <div className="space-y-4 text-[#4a4a4a]">
                <p>
                  Built a unified data pipeline that ingests API data from all ad platforms into BigQuery, normalizes schemas, and applies multiple attribution models for decision-grade insights.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <Database className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Unified Schema</p>
                    <p className="text-xs text-[#6a6a6a]">Cross-platform normalization</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <GitBranch className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Multi-Touch</p>
                    <p className="text-xs text-[#6a6a6a]">Beyond last-click attribution</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <BarChart3 className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Real-Time</p>
                    <p className="text-xs text-[#6a6a6a]">Daily refresh cadence</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <TrendingUp className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Decision-Grade</p>
                    <p className="text-xs text-[#6a6a6a]">Executive-ready outputs</p>
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
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">System Architecture</h2>
          
          {/* Architecture Flow */}
          <div className="bg-white rounded-sm border border-[#e5e5e0] p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Data Sources */}
              <div className="text-center">
                <div className="bg-[#f8f7f5] border border-[#e5e5e0] rounded-sm p-4 mb-2">
                  <Layers className="w-6 h-6 text-[#8b7355] mx-auto mb-2" />
                  <p className="text-xs font-medium text-[#1a1a1a]">Ad Platform APIs</p>
                  <p className="text-[10px] text-[#6a6a6a]">Meta / Google / LinkedIn</p>
                </div>
                <span className="text-[#8b7355]">→</span>
              </div>
              
              {/* Ingestion */}
              <div className="text-center">
                <div className="bg-[#f8f7f5] border border-[#e5e5e0] rounded-sm p-4 mb-2">
                  <Database className="w-6 h-6 text-[#8b7355] mx-auto mb-2" />
                  <p className="text-xs font-medium text-[#1a1a1a]">Raw Ingestion</p>
                  <p className="text-[10px] text-[#6a6a6a]">Batch & streaming loads</p>
                </div>
                <span className="text-[#8b7355]">→</span>
              </div>
              
              {/* Warehouse */}
              <div className="text-center">
                <div className="bg-[#f8f7f5] border border-[#e5e5e0] rounded-sm p-4 mb-2">
                  <Database className="w-6 h-6 text-[#8b7355] mx-auto mb-2" />
                  <p className="text-xs font-medium text-[#1a1a1a]">Normalized Warehouse</p>
                  <p className="text-[10px] text-[#6a6a6a]">Unified schemas & currencies</p>
                </div>
                <span className="text-[#8b7355]">→</span>
              </div>
              
              {/* Identity */}
              <div className="text-center">
                <div className="bg-[#f8f7f5] border border-[#e5e5e0] rounded-sm p-4 mb-2">
                  <GitBranch className="w-6 h-6 text-[#8b7355] mx-auto mb-2" />
                  <p className="text-xs font-medium text-[#1a1a1a]">Identity & Lag</p>
                  <p className="text-[10px] text-[#6a6a6a]">User stitching & time alignment</p>
                </div>
                <span className="text-[#8b7355]">→</span>
              </div>
              
              {/* Attribution */}
              <div className="text-center">
                <div className="bg-[#f8f7f5] border border-[#e5e5e0] rounded-sm p-4 mb-2">
                  <BarChart3 className="w-6 h-6 text-[#8b7355] mx-auto mb-2" />
                  <p className="text-xs font-medium text-[#1a1a1a]">Attribution & MMM</p>
                  <p className="text-[10px] text-[#6a6a6a]">Rule-based + probabilistic</p>
                </div>
                <span className="text-[#8b7355]">→</span>
              </div>
              
              {/* Outputs */}
              <div className="text-center">
                <div className="bg-[#1a1a1a] border border-[#1a1a1a] rounded-sm p-4 mb-2">
                  <Target className="w-6 h-6 text-white mx-auto mb-2" />
                  <p className="text-xs font-medium text-white">Executive Outputs</p>
                  <p className="text-[10px] text-gray-400">ROAS, CAC, marginal ROI</p>
                </div>
              </div>
            </div>
            
            {/* Technical Notes */}
            <div className="mt-8 pt-6 border-t border-[#e5e5e0]">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#6a6a6a]">
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Schema drift management across platforms and campaign structures</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Currency and time zone normalization for consistent reporting</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Time lag alignment between impression, click, and conversion</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span>Explicit separation between attribution and causal inference</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Attribution Simulator */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-7xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-4 text-center">Attribution Simulator</h2>
          <p className="text-center text-[#6a6a6a] mb-8 max-w-2xl mx-auto">
            Explore how different attribution models reshape budget decisions with this interactive simulator.
          </p>
          
          {/* Embedded Attribution Simulator */}
          <div className="bg-[#f8f7f5] rounded-sm overflow-hidden border border-[#e5e5e0]">
            <iframe 
              src="https://attribution.prateekkarn.com/"
              className="w-full border-0"
              style={{ height: '800px', minHeight: '600px' }}
              title="End-to-End Marketing Attribution Simulator"
              loading="lazy"
              allow="clipboard-write"
            />
          </div>
          
          {/* Open in new tab option */}
          <div className="mt-6 text-center">
            <a 
              href="https://attribution.prateekkarn.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#8b7355] text-white font-medium text-base rounded-sm hover:bg-[#6b5a45] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Open Simulator in New Tab for Full Experience</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Results & Impact</h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white border border-[#e5e5e0] rounded-sm p-6 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">30%</p>
              <p className="text-sm text-[#6a6a6a]">Budget shifted to high-performing channels</p>
            </div>
            <div className="bg-white border border-[#e5e5e0] rounded-sm p-6 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">42%</p>
              <p className="text-sm text-[#6a6a6a]">Improved ROAS visibility</p>
            </div>
            <div className="bg-white border border-[#e5e5e0] rounded-sm p-6 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">70%</p>
              <p className="text-sm text-[#6a6a6a]">Reduction in data analysis time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Technology Stack</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'SQL', 'BigQuery', 'Looker', 'dbt', 'Airflow', 'Meta Ads API', 'Google Ads API', 'LinkedIn Ads API'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-[#f8f7f5] border border-[#e5e5e0] rounded-sm text-sm text-[#4a4a4a]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Disclaimer */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-sm p-6 sm:p-8">
            <h3 className="font-heading text-xl text-white mb-4">What This System Does NOT Claim</h3>
            <p className="text-gray-400 text-sm mb-4">
              The goal is decision support, not absolute truth. A credible attribution system is explicit about where it is approximate, biased, or structurally constrained.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>Attribution models estimate contribution, they do not prove causality</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>MMM struggles with short time windows and sparse data</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>Platform-optimized campaigns introduce feedback bias</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>Results should guide human judgment, not replace it</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-4">
            Want to Build Decision-Grade Attribution?
          </h2>
          <p className="text-[#6a6a6a] mb-8 max-w-xl mx-auto">
            Whether you're reimagining your data infrastructure or exploring unified attribution, I'd welcome the conversation.
          </p>
          <Link 
            to="/about#contact"
            className="inline-flex items-center gap-2 bg-[#8b7355] text-white px-8 py-4 rounded-sm hover:bg-[#6b5a45] transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
