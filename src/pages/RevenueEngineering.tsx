import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Zap, Target, TrendingUp, Eye, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import { useConsultationModal } from '@/contexts/ConsultationModalContext';

export default function RevenueEngineering() {
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
            to="/mywork#creative" 
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
              Conversion Psychology
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6">
              Revenue Engineering & Psychological Architecture
            </h1>
            <p className="text-lg sm:text-xl text-[#4a4a4a] leading-relaxed mb-8">
              Leveraging behavioral economics and pattern interrupts to engineer retention loops. Traditional "creative" copy fails to address the subconscious friction points that kill conversion at scale.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-4 py-2 rounded-sm text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>Reduced CPA by 30% through psychological hooks</span>
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
                  Traditional "creative" copy fails to address the subconscious friction points that kill conversion at scale. Most marketing focuses on features and benefits while ignoring the psychological barriers that prevent action.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Feature-focused copy ignores emotional decision drivers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Generic CTAs fail to create urgency or reduce friction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>No systematic framework for testing psychological triggers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Copy written for "everyone" resonates with no one</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-6">The Approach</h2>
              <div className="space-y-4 text-[#4a4a4a]">
                <p>
                  Applied behavioral economics principles and structured narrative testing to engineer copy that addresses subconscious objections and creates psychological momentum toward conversion.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <Brain className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Behavioral Economics</p>
                    <p className="text-xs text-[#6a6a6a]">Cialdini's principles applied</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <Zap className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Pattern Interrupts</p>
                    <p className="text-xs text-[#6a6a6a]">Break scroll behavior</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <Target className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Friction Mapping</p>
                    <p className="text-xs text-[#6a6a6a]">Identify objection points</p>
                  </div>
                  <div className="bg-[#f8f7f5] p-4 rounded-sm">
                    <MessageSquare className="w-5 h-5 text-[#8b7355] mb-2" />
                    <p className="text-sm font-medium text-[#1a1a1a]">Narrative Testing</p>
                    <p className="text-xs text-[#6a6a6a]">Systematic story iteration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psychological Principles Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Psychological Principles Applied</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Principle 1 */}
            <div className="bg-white rounded-sm border border-[#e5e5e0] p-6">
              <div className="w-10 h-10 bg-[#f8f7f5] rounded-sm flex items-center justify-center mb-4">
                <span className="text-lg font-heading text-[#8b7355]">1</span>
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">Loss Aversion</h3>
              <p className="text-sm text-[#6a6a6a] mb-4">
                People feel losses 2x more intensely than equivalent gains. Frame messaging around what they'll miss, not just what they'll gain.
              </p>
              <div className="bg-[#f8f7f5] p-3 rounded-sm">
                <p className="text-xs text-[#6a6a6a] mb-1">Before:</p>
                <p className="text-sm text-[#4a4a4a] italic">"Get 20% more leads"</p>
                <p className="text-xs text-[#6a6a6a] mt-2 mb-1">After:</p>
                <p className="text-sm text-[#1a1a1a] italic">"Stop losing 20% of your leads to competitors"</p>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="bg-white rounded-sm border border-[#e5e5e0] p-6">
              <div className="w-10 h-10 bg-[#f8f7f5] rounded-sm flex items-center justify-center mb-4">
                <span className="text-lg font-heading text-[#8b7355]">2</span>
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">Social Proof Specificity</h3>
              <p className="text-sm text-[#6a6a6a] mb-4">
                Generic testimonials are ignored. Specific, relatable proof with concrete numbers creates believability.
              </p>
              <div className="bg-[#f8f7f5] p-3 rounded-sm">
                <p className="text-xs text-[#6a6a6a] mb-1">Before:</p>
                <p className="text-sm text-[#4a4a4a] italic">"Trusted by thousands"</p>
                <p className="text-xs text-[#6a6a6a] mt-2 mb-1">After:</p>
                <p className="text-sm text-[#1a1a1a] italic">"1,247 B2B SaaS companies reduced CAC by 23% in Q3"</p>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="bg-white rounded-sm border border-[#e5e5e0] p-6">
              <div className="w-10 h-10 bg-[#f8f7f5] rounded-sm flex items-center justify-center mb-4">
                <span className="text-lg font-heading text-[#8b7355]">3</span>
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">Cognitive Ease</h3>
              <p className="text-sm text-[#6a6a6a] mb-4">
                The brain prefers information that's easy to process. Reduce cognitive load with clear structure and familiar patterns.
              </p>
              <div className="bg-[#f8f7f5] p-3 rounded-sm">
                <p className="text-xs text-[#6a6a6a] mb-1">Before:</p>
                <p className="text-sm text-[#4a4a4a] italic">"Our comprehensive solution..."</p>
                <p className="text-xs text-[#6a6a6a] mt-2 mb-1">After:</p>
                <p className="text-sm text-[#1a1a1a] italic">"3 steps. 15 minutes. Done."</p>
              </div>
            </div>

            {/* Principle 4 */}
            <div className="bg-white rounded-sm border border-[#e5e5e0] p-6">
              <div className="w-10 h-10 bg-[#f8f7f5] rounded-sm flex items-center justify-center mb-4">
                <span className="text-lg font-heading text-[#8b7355]">4</span>
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">Future Pacing</h3>
              <p className="text-sm text-[#6a6a6a] mb-4">
                Help prospects visualize themselves after the transformation. Make the future state feel real and achievable.
              </p>
              <div className="bg-[#f8f7f5] p-3 rounded-sm">
                <p className="text-xs text-[#6a6a6a] mb-1">Before:</p>
                <p className="text-sm text-[#4a4a4a] italic">"Improve your marketing"</p>
                <p className="text-xs text-[#6a6a6a] mt-2 mb-1">After:</p>
                <p className="text-sm text-[#1a1a1a] italic">"Imagine opening your dashboard Monday and seeing..."</p>
              </div>
            </div>

            {/* Principle 5 */}
            <div className="bg-white rounded-sm border border-[#e5e5e0] p-6">
              <div className="w-10 h-10 bg-[#f8f7f5] rounded-sm flex items-center justify-center mb-4">
                <span className="text-lg font-heading text-[#8b7355]">5</span>
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">Objection Preemption</h3>
              <p className="text-sm text-[#6a6a6a] mb-4">
                Address objections before they form. Acknowledge concerns proactively to build trust and remove barriers.
              </p>
              <div className="bg-[#f8f7f5] p-3 rounded-sm">
                <p className="text-xs text-[#6a6a6a] mb-1">Before:</p>
                <p className="text-sm text-[#4a4a4a] italic">"Sign up now"</p>
                <p className="text-xs text-[#6a6a6a] mt-2 mb-1">After:</p>
                <p className="text-sm text-[#1a1a1a] italic">"No credit card. No sales call. Just answers in 5 minutes."</p>
              </div>
            </div>

            {/* Principle 6 */}
            <div className="bg-white rounded-sm border border-[#e5e5e0] p-6">
              <div className="w-10 h-10 bg-[#f8f7f5] rounded-sm flex items-center justify-center mb-4">
                <span className="text-lg font-heading text-[#8b7355]">6</span>
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">Pattern Interrupt</h3>
              <p className="text-sm text-[#6a6a6a] mb-4">
                Break expected patterns to capture attention. The brain notices what's different, not what's familiar.
              </p>
              <div className="bg-[#f8f7f5] p-3 rounded-sm">
                <p className="text-xs text-[#6a6a6a] mb-1">Before:</p>
                <p className="text-sm text-[#4a4a4a] italic">"The best marketing solution"</p>
                <p className="text-xs text-[#6a6a6a] mt-2 mb-1">After:</p>
                <p className="text-sm text-[#1a1a1a] italic">"This isn't another marketing tool. It's the last one you'll need."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">The AIDA-P Framework</h2>
          <p className="text-center text-[#6a6a6a] mb-8 max-w-2xl mx-auto">
            An enhanced version of the classic AIDA framework, adding Psychological triggers at each stage.
          </p>
          
          <div className="bg-[#f8f7f5] rounded-sm p-6 sm:p-8">
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8b7355] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-medium">A</div>
                <h3 className="font-medium text-[#1a1a1a] mb-1">Attention</h3>
                <p className="text-xs text-[#6a6a6a]">Pattern interrupt + curiosity gap</p>
                <ArrowRight className="w-4 h-4 text-[#8b7355] mx-auto mt-3 hidden md:block" />
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8b7355] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-medium">I</div>
                <h3 className="font-medium text-[#1a1a1a] mb-1">Interest</h3>
                <p className="text-xs text-[#6a6a6a]">Problem agitation + loss framing</p>
                <ArrowRight className="w-4 h-4 text-[#8b7355] mx-auto mt-3 hidden md:block" />
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8b7355] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-medium">D</div>
                <h3 className="font-medium text-[#1a1a1a] mb-1">Desire</h3>
                <p className="text-xs text-[#6a6a6a]">Future pacing + social proof</p>
                <ArrowRight className="w-4 h-4 text-[#8b7355] mx-auto mt-3 hidden md:block" />
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#8b7355] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-medium">A</div>
                <h3 className="font-medium text-[#1a1a1a] mb-1">Action</h3>
                <p className="text-xs text-[#6a6a6a]">Objection preemption + urgency</p>
                <ArrowRight className="w-4 h-4 text-[#8b7355] mx-auto mt-3 hidden md:block" />
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-medium">P</div>
                <h3 className="font-medium text-[#1a1a1a] mb-1">Post-Action</h3>
                <p className="text-xs text-[#6a6a6a]">Commitment + consistency loop</p>
              </div>
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
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">-30%</p>
              <p className="text-sm text-[#6a6a6a]">CPA reduction</p>
            </div>
            <div className="bg-white border border-[#e5e5e0] rounded-sm p-6 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">+45%</p>
              <p className="text-sm text-[#6a6a6a]">Click-through rate</p>
            </div>
            <div className="bg-white border border-[#e5e5e0] rounded-sm p-6 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">+22%</p>
              <p className="text-sm text-[#6a6a6a]">Landing page conversion</p>
            </div>
            <div className="bg-white border border-[#e5e5e0] rounded-sm p-6 text-center">
              <p className="text-4xl sm:text-5xl font-heading text-[#8b7355] mb-2">2.1x</p>
              <p className="text-sm text-[#6a6a6a]">Email open rate improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Framework */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-8 text-center">Structured Narrative Testing</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f8f7f5] rounded-sm p-6">
              <h3 className="font-medium text-[#1a1a1a] mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                What We Test
              </h3>
              <ul className="space-y-2 text-sm text-[#4a4a4a]">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Hook variations (curiosity vs. pain vs. benefit)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Loss framing vs. gain framing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Social proof placement and specificity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>CTA friction reducers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Urgency mechanisms (scarcity vs. deadline)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#f8f7f5] rounded-sm p-6">
              <h3 className="font-medium text-[#1a1a1a] mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#8b7355]" />
                How We Measure
              </h3>
              <ul className="space-y-2 text-sm text-[#4a4a4a]">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Scroll depth and time on page</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Click-through rate by section</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Form abandonment points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Micro-conversion rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Downstream conversion quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-sm p-6 sm:p-8">
            <h3 className="font-heading text-xl text-white mb-4">Key Learnings</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>Specificity beats cleverness — concrete numbers outperform vague claims every time</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>Loss framing works, but use sparingly — overuse creates skepticism</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>The best CTAs reduce friction, not just create urgency</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1 h-1 bg-[#8b7355] rounded-full mt-2 flex-shrink-0"></span>
                <span>Test one psychological principle at a time for clear learnings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] mb-4">
            Ready to Engineer Your Conversion Psychology?
          </h2>
          <p className="text-[#6a6a6a] mb-8 max-w-xl mx-auto">
            Whether you're optimizing landing pages or building a systematic testing framework, I'd welcome the conversation.
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
