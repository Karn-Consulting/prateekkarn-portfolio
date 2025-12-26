import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Target, Zap, RefreshCw, BarChart3, DollarSign, Users, Layers } from 'lucide-react';
import Footer from '@/components/Footer';

export default function MetaAdsPerformance() {
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
              Scale & Efficiency
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6">
              Meta Ads Performance Case Study — $40K USD Spend
            </h1>
            <p className="text-lg sm:text-xl text-[#4a4a4a] leading-relaxed mb-8">
              Structured creative testing framework + broad targeting with CBO to manage creative fatigue and scale spend profitably.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-4 py-2 rounded-sm text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>Scaled to $40K/mo while maintaining stable ROAS</span>
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
                  Scaling spend beyond $10K/mo caused CPA to skyrocket due to audience saturation. The account was stuck in a "scaling ceiling" where every attempt to increase budget led to diminishing returns.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>CPA increased 40%+ when scaling past $10K/mo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Creative fatigue hitting within 2-3 weeks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Narrow audience targeting limiting scale potential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>No systematic creative testing framework</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-6">The Solution</h2>
              <div className="space-y-4 text-[#4a4a4a]">
                <p>
                  Implemented a structured creative testing framework with broad targeting and Campaign Budget Optimization (CBO) to let the algorithm find efficient pockets at scale.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <Layers className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Creative Testing</p>
                    <p className="text-xs text-[#6a6a6a]">Systematic hook/CTA iteration</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <Users className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Broad Targeting</p>
                    <p className="text-xs text-[#6a6a6a]">Let algorithm optimize</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <DollarSign className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">CBO Structure</p>
                    <p className="text-xs text-[#6a6a6a]">Budget fluidity across ads</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <RefreshCw className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Fatigue Management</p>
                    <p className="text-xs text-[#6a6a6a]">Proactive creative refresh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Creative Testing Framework</h2>
          
          <div className="bg-white rounded-sm border border-[#e5e5e0] p-6 sm:p-8">
            {/* Framework Steps */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8b7355] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-heading">1</div>
                <h3 className="font-medium text-[#1a1a1a] mb-2">Hook Testing</h3>
                <p className="text-sm text-[#6a6a6a]">Test 5-10 different hooks with same body/CTA to find winning attention-grabbers</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8b7355] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-heading">2</div>
                <h3 className="font-medium text-[#1a1a1a] mb-2">Body Variation</h3>
                <p className="text-sm text-[#6a6a6a]">Take winning hooks and test different value propositions and proof points</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8b7355] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-heading">3</div>
                <h3 className="font-medium text-[#1a1a1a] mb-2">CTA Optimization</h3>
                <p className="text-sm text-[#6a6a6a]">Test urgency, benefit-focused, and direct CTAs on winning combinations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8b7355] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-heading">4</div>
                <h3 className="font-medium text-[#1a1a1a] mb-2">Scale Winners</h3>
                <p className="text-sm text-[#6a6a6a]">Graduate proven creatives to scaling campaigns with increased budget</p>
              </div>
            </div>

            {/* Key Principles */}
            <div className="mt-8 pt-6 border-t border-[#e5e5e0]">
              <h4 className="text-sm font-medium text-[#6a6a6a] uppercase tracking-wide mb-4">Key Principles</h4>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span className="text-[#4a4a4a]"><strong>Isolate variables:</strong> Test one element at a time for clear learnings</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span className="text-[#4a4a4a]"><strong>Statistical significance:</strong> Wait for 50+ conversions before declaring winners</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-1.5 flex-shrink-0"></span>
                  <span className="text-[#4a4a4a]"><strong>Continuous pipeline:</strong> Always have new creatives in testing queue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Structure */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Account Structure</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f8f7f5] rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-sm flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-medium text-[#1a1a1a]">Testing Campaign</h3>
              </div>
              <p className="text-sm text-[#6a6a6a] mb-4">$5K/mo budget for new creative testing</p>
              <ul className="text-xs text-[#6a6a6a] space-y-1">
                <li>• 3-5 ad sets per test batch</li>
                <li>• Broad targeting (age/gender only)</li>
                <li>• CBO with minimum spend floors</li>
                <li>• 7-day attribution window</li>
              </ul>
            </div>
            
            <div className="bg-[#f8f7f5] rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-sm flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-medium text-[#1a1a1a]">Scaling Campaign</h3>
              </div>
              <p className="text-sm text-[#6a6a6a] mb-4">$25K/mo for proven winners</p>
              <ul className="text-xs text-[#6a6a6a] space-y-1">
                <li>• Only graduates from testing</li>
                <li>• Broad + Lookalike audiences</li>
                <li>• CBO with higher budgets</li>
                <li>• 20% budget increases max</li>
              </ul>
            </div>
            
            <div className="bg-[#f8f7f5] rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-sm flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-medium text-[#1a1a1a]">Retargeting Campaign</h3>
              </div>
              <p className="text-sm text-[#6a6a6a] mb-4">$10K/mo for warm audiences</p>
              <ul className="text-xs text-[#6a6a6a] space-y-1">
                <li>• Website visitors (7/30/90 day)</li>
                <li>• Video viewers (50%+)</li>
                <li>• Engaged with ads</li>
                <li>• Separate creative strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Results & Impact</h2>
          
          <div className="grid sm:grid-cols-4 gap-6">
            <div className="bg-white border border-[#e5e5e0] rounded-sm p-6 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">4x</p>
              <p className="text-sm text-[#6a6a6a]">Spend scaled ($10K → $40K)</p>
            </div>
            <div className="bg-white border border-[#e5e5e0] rounded-sm p-6 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">Stable</p>
              <p className="text-sm text-[#6a6a6a]">ROAS maintained at scale</p>
            </div>
            <div className="bg-white border border-[#e5e5e0] rounded-sm p-6 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">6 wks</p>
              <p className="text-sm text-[#6a6a6a]">Creative lifespan extended</p>
            </div>
            <div className="bg-white border border-[#e5e5e0] rounded-sm p-6 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">-22%</p>
              <p className="text-sm text-[#6a6a6a]">CPA reduction vs. baseline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling Curve Visualization */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Scaling Journey</h2>
          
          <div className="bg-[#f8f7f5] rounded-sm p-6 sm:p-8">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-xs text-[#6a6a6a] mb-2">Month 1</p>
                <p className="text-2xl font-heading text-[#1a1a1a]">$10K</p>
                <p className="text-xs text-[#8b7355]">Baseline</p>
              </div>
              <div>
                <p className="text-xs text-[#6a6a6a] mb-2">Month 2</p>
                <p className="text-2xl font-heading text-[#1a1a1a]">$18K</p>
                <p className="text-xs text-green-600">+80%</p>
              </div>
              <div>
                <p className="text-xs text-[#6a6a6a] mb-2">Month 3</p>
                <p className="text-2xl font-heading text-[#1a1a1a]">$28K</p>
                <p className="text-xs text-green-600">+56%</p>
              </div>
              <div>
                <p className="text-xs text-[#6a6a6a] mb-2">Month 4</p>
                <p className="text-2xl font-heading text-[#1a1a1a]">$40K</p>
                <p className="text-xs text-green-600">+43%</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6 h-2 bg-[#e5e5e0] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#8b7355] to-[#6b5a45] rounded-full" style={{ width: '100%' }}></div>
            </div>
            
            <p className="text-center text-xs text-[#6a6a6a] mt-4">
              Gradual scaling with 20% weekly budget increases, pausing when CPA exceeded threshold
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Technology Stack</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Meta Ads Manager', 'GA4', 'Google Sheets', 'Looker Studio', 'Triple Whale', 'Canva', 'CapCut'].map((tech) => (
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
          <div className="bg-[#1a1a1a] rounded-sm p-6 sm:p-8">
            <h3 className="font-heading text-xl text-white mb-4">Key Learnings</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>Broad targeting outperforms narrow at scale — let the algorithm find efficient pockets</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>Creative is the new targeting — invest in systematic testing over audience hacks</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>CBO requires patience — give campaigns 3-5 days before making changes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>Scaling is a process, not an event — 20% weekly increases prevent algorithm shock</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-4">
            Ready to Scale Your Paid Media?
          </h2>
          <p className="text-[#6a6a6a] mb-8 max-w-xl mx-auto">
            Whether you're hitting a scaling ceiling or looking to build systematic creative testing, I'd welcome the conversation.
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
