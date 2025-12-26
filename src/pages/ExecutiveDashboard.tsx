import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, BarChart3, TrendingUp, Clock, Users, Target, Zap, Eye, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';

export default function ExecutiveDashboard() {
  return (
    <div className="min-h-screen bg-[#f8f7f5]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f8f7f5]/95 backdrop-blur-sm border-b border-[#e5e5e0]">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-heading text-lg sm:text-xl text-[#1a1a1a] hover:text-[#8b7355] transition-colors">
            Prateek Karn
          </Link>
          <Link 
            to="/mywork#dashboards" 
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
              C-Suite Reporting
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6">
              Executive Marketing Command Dashboard
            </h1>
            <p className="text-lg sm:text-xl text-[#4a4a4a] leading-relaxed mb-8">
              Centralized Looker Studio dashboard aggregating spend, leads, and revenue in real-time. CEO needed a single view of growth health without logging into 5 different platforms.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-4 py-2 rounded-sm text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Became the default Monday morning meeting screen</span>
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
                  The CEO needed a single view of growth health without logging into 5 different platforms. Leadership meetings were delayed by manual data gathering, and metrics were often stale or inconsistent.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>5 different platforms required for complete picture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Manual data compilation took hours each week</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Metrics were often stale by the time they reached leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>No anomaly detection or proactive alerting</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-6">Design Philosophy</h2>
              <div className="space-y-4 text-[#4a4a4a]">
                <p>
                  Built for consumption, not exploration. CEOs have 30 seconds, not 30 minutes. The dashboard prioritizes glanceable metrics, status-first design, and details on demand.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <Eye className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Glanceable</p>
                    <p className="text-xs text-[#6a6a6a]">30-second comprehension</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <Zap className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Real-Time</p>
                    <p className="text-xs text-[#6a6a6a]">15-minute refresh</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <Target className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Status-First</p>
                    <p className="text-xs text-[#6a6a6a]">Traffic light indicators</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <TrendingUp className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Trend Context</p>
                    <p className="text-xs text-[#6a6a6a]">Sparklines & comparisons</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Dashboard Structure</h2>
          
          {/* KPI Cards Preview */}
          <div className="bg-white rounded-sm border border-[#e5e5e0] p-6 sm:p-8 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-medium text-[#6a6a6a] uppercase tracking-wide">Top-Level KPIs</h3>
              <span className="text-xs text-[#8b7355] flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Live • Updated 2 min ago
              </span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-[#f8f7f5] p-4 rounded-sm">
                <p className="text-xs text-[#6a6a6a] mb-1">Total Spend</p>
                <p className="text-2xl font-heading text-[#1a1a1a]">$127K</p>
                <p className="text-xs text-green-600">94% of budget</p>
              </div>
              <div className="bg-[#f8f7f5] p-4 rounded-sm">
                <p className="text-xs text-[#6a6a6a] mb-1">Total Leads</p>
                <p className="text-2xl font-heading text-[#1a1a1a]">1,247</p>
                <p className="text-xs text-green-600">↑ 12% vs last week</p>
              </div>
              <div className="bg-[#f8f7f5] p-4 rounded-sm">
                <p className="text-xs text-[#6a6a6a] mb-1">Pipeline</p>
                <p className="text-2xl font-heading text-[#1a1a1a]">$892K</p>
                <p className="text-xs text-green-600">On track</p>
              </div>
              <div className="bg-[#f8f7f5] p-4 rounded-sm">
                <p className="text-xs text-[#6a6a6a] mb-1">Blended CAC</p>
                <p className="text-2xl font-heading text-[#1a1a1a]">$423</p>
                <p className="text-xs text-green-600">Target: $450 ✓</p>
              </div>
              <div className="bg-[#f8f7f5] p-4 rounded-sm">
                <p className="text-xs text-[#6a6a6a] mb-1">Blended ROAS</p>
                <p className="text-2xl font-heading text-[#1a1a1a]">3.2x</p>
                <p className="text-xs text-green-600">↑ 0.3x vs target</p>
              </div>
            </div>
          </div>

          {/* Channel Health Grid */}
          <div className="bg-white rounded-sm border border-[#e5e5e0] p-6 sm:p-8 mb-6">
            <h3 className="text-sm font-medium text-[#6a6a6a] uppercase tracking-wide mb-6">Channel Health</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e5e5e0]">
                    <th className="text-left py-3 px-2 text-[#6a6a6a] font-medium">Channel</th>
                    <th className="text-right py-3 px-2 text-[#6a6a6a] font-medium">Spend</th>
                    <th className="text-right py-3 px-2 text-[#6a6a6a] font-medium">Leads</th>
                    <th className="text-right py-3 px-2 text-[#6a6a6a] font-medium">CPL</th>
                    <th className="text-center py-3 px-2 text-[#6a6a6a] font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f0f0eb]">
                    <td className="py-3 px-2 text-[#1a1a1a]">Meta Ads</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">$52K</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">487</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">$107</td>
                    <td className="py-3 px-2 text-center"><span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span></td>
                  </tr>
                  <tr className="border-b border-[#f0f0eb]">
                    <td className="py-3 px-2 text-[#1a1a1a]">Google Search</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">$38K</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">312</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">$122</td>
                    <td className="py-3 px-2 text-center"><span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span></td>
                  </tr>
                  <tr className="border-b border-[#f0f0eb]">
                    <td className="py-3 px-2 text-[#1a1a1a]">Google Display</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">$12K</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">89</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">$135</td>
                    <td className="py-3 px-2 text-center"><span className="w-3 h-3 bg-amber-500 rounded-full inline-block"></span></td>
                  </tr>
                  <tr className="border-b border-[#f0f0eb]">
                    <td className="py-3 px-2 text-[#1a1a1a]">LinkedIn</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">$18K</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">156</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">$115</td>
                    <td className="py-3 px-2 text-center"><span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 text-[#1a1a1a]">YouTube</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">$7K</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">43</td>
                    <td className="py-3 px-2 text-right text-[#4a4a4a]">$163</td>
                    <td className="py-3 px-2 text-center"><span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 pt-4 border-t border-[#e5e5e0] flex items-center gap-6 text-xs text-[#6a6a6a]">
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> On Track</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-amber-500 rounded-full"></span> Watch</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-red-500 rounded-full"></span> Action Needed</span>
            </div>
          </div>

          {/* Anomaly Alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-sm p-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-amber-600 text-lg">⚠️</span>
              <div>
                <p className="text-sm text-amber-800 font-medium">YouTube CPL spiked 23% vs. 7-day average</p>
                <p className="text-xs text-amber-600 mt-1">Creative fatigue likely — consider refreshing ad creatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Placeholder */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-4 text-center">Interactive Demo</h2>
          <p className="text-center text-[#6a6a6a] mb-8 max-w-2xl mx-auto">
            Experience the dashboard with synthetic data to see how executives consume marketing intelligence.
          </p>
          
          {/* Embed Placeholder */}
          <div className="bg-[#f8f7f5] border-2 border-dashed border-[#d5d5d0] rounded-sm p-12 text-center">
            <div className="max-w-md mx-auto">
              <BarChart3 className="w-12 h-12 text-[#8b7355] mx-auto mb-4" />
              <h3 className="font-heading text-xl text-[#1a1a1a] mb-2">Interactive Demo Coming Soon</h3>
              <p className="text-sm text-[#6a6a6a] mb-6">
                A fully interactive executive dashboard will be embedded here, demonstrating real-time KPIs, anomaly detection, and drill-down capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Results & Impact</h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white border border-[#e5e5e0] rounded-sm p-6 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">70%</p>
              <p className="text-sm text-[#6a6a6a]">Reduction in reporting overhead</p>
            </div>
            <div className="bg-white border border-[#e5e5e0] rounded-sm p-6 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">5→1</p>
              <p className="text-sm text-[#6a6a6a]">Platforms consolidated into single view</p>
            </div>
            <div className="bg-white border border-[#e5e5e0] rounded-sm p-6 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">Weekly</p>
              <p className="text-sm text-[#6a6a6a]">Default Monday meeting screen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Technology Stack</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Looker Studio', 'BigQuery', 'Supermetrics', 'Google Sheets', 'Meta Ads API', 'Google Ads API', 'HubSpot API', 'Stripe API'].map((tech) => (
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

      {/* Design Principles */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-sm p-6 sm:p-8">
            <h3 className="font-heading text-xl text-white mb-4">Executive Dashboard Design Principles</h3>
            <p className="text-gray-400 text-sm mb-4">
              Dashboards for executives are fundamentally different from analyst dashboards. Here's what guided this build:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>Glanceable, not analytical — 30 seconds, not 30 minutes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>Status-first, details on demand — traffic lights before tables</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>Anomaly detection built-in — proactive, not reactive</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>Meeting-ready outputs — copy/paste summaries for Slack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-4">
            Need Executive-Grade Reporting?
          </h2>
          <p className="text-[#6a6a6a] mb-8 max-w-xl mx-auto">
            Whether you're building your first executive dashboard or consolidating fragmented reporting, I'd welcome the conversation.
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
