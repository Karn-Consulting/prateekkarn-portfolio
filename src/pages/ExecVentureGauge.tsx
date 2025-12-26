import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { ArrowRight, Target, TrendingUp, Shield, DollarSign, Users, Briefcase, LineChart, CheckCircle } from 'lucide-react';

const ExecVentureGauge = () => {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#faf9f7]/95 backdrop-blur-sm border-b border-[#e8e6e1]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="font-heading text-xl text-[#1a1a1a] hover:text-[#8b7355] transition-colors"
          >
            Prateek Karn
          </Link>
          <Link 
            to="/mywork"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#8b7355] border border-[#8b7355] rounded-sm hover:bg-[#8b7355] hover:text-white transition-all duration-200"
          >
            - Back to My Work
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#f5f4f2] to-[#faf9f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#8b8578] mb-4 block">
                Investment Decision Support
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6 leading-tight">
                Exec Venture Gauge
              </h1>
              
              {/* Mobile Hero Image */}
              <div className="lg:hidden relative mb-6">
                <img 
                  src="/work-exec-venture-gauge.png" 
                  alt="Exec Venture Gauge" 
                  className="w-full h-auto rounded-sm shadow-lg"
                />
              </div>
              
              <p className="text-lg md:text-xl text-[#5a5a5a] mb-4 font-medium">
                Executive Signals for AI Investment Decisions
              </p>
              <p className="text-[#5a5a5a] text-base md:text-lg leading-relaxed mb-8">
                Exec Venture Gauge is an independently developed decision-support tool designed to help senior leaders evaluate whether an AI or digital initiative is likely to deliver measurable business value under real operating conditions.
              </p>
              <p className="text-[#5a5a5a] text-base leading-relaxed mb-8">
                The tool translates strategic assumptions into risk-adjusted financial outcomes, time-to-value insights, and clear funding guidance - supporting informed decision-making before capital is committed.
              </p>
              
              {/* CTA */}
              <div className="flex">
                <Link 
                  to="/mywork/exec-venture-gauge/app"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#8b7355] text-white font-medium rounded-sm hover:bg-[#6d5a43] transition-colors text-lg"
                >
                  Launch the Gauge
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right: Hero Image - Desktop only */}
            <div className="relative hidden lg:block">
              <img 
                src="/work-exec-venture-gauge.png" 
                alt="Exec Venture Gauge" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Built Section */}
      <section className="py-16 bg-white border-y border-[#e8e6e1]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-[#1a1a1a] mb-6">
            Why Exec Venture Gauge Was Built
          </h2>
          <p className="text-[#5a5a5a] text-lg leading-relaxed mb-6">
            Across enterprises, many AI initiatives demonstrate technical success but fail to translate into sustained business impact.
          </p>
          <p className="text-[#5a5a5a] text-lg leading-relaxed mb-8">
            The challenge is rarely the model or the technology. It is the gap between intent, execution, adoption, and scale.
          </p>
          <div className="bg-[#f5f4f2] p-6 rounded-sm border border-[#e8e6e1]">
            <p className="text-[#1a1a1a] text-lg font-medium italic">
              "Does this initiative justify enterprise-level investment under realistic conditions?"
            </p>
          </div>
        </div>
      </section>

      {/* Intended Audience */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl text-[#1a1a1a] mb-4 text-center">
            Intended Audience
          </h2>
          <p className="text-[#5a5a5a] text-center mb-12 max-w-2xl mx-auto">
            Designed for senior leaders who need to make informed decisions about AI investments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-sm border border-[#e8e6e1]">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#f5f4f2] rounded-full">
                <Briefcase className="w-6 h-6 text-[#8b7355]" />
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">CEOs & Business Heads</h3>
              <p className="text-sm text-[#5a5a5a]">For prioritizing initiatives aligned with strategy and capital discipline</p>
            </div>
            <div className="p-6 bg-white rounded-sm border border-[#e8e6e1]">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#f5f4f2] rounded-full">
                <DollarSign className="w-6 h-6 text-[#8b7355]" />
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">CFOs & Finance Leaders</h3>
              <p className="text-sm text-[#5a5a5a]">For evaluating return potential, payback expectations, and downside exposure</p>
            </div>
            <div className="p-6 bg-white rounded-sm border border-[#e8e6e1]">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#f5f4f2] rounded-full">
                <LineChart className="w-6 h-6 text-[#8b7355]" />
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">Technology & Data Leaders</h3>
              <p className="text-sm text-[#5a5a5a]">For assessing readiness, feasibility, and scale implications</p>
            </div>
            <div className="p-6 bg-white rounded-sm border border-[#e8e6e1]">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#f5f4f2] rounded-full">
                <Users className="w-6 h-6 text-[#8b7355]" />
              </div>
              <h3 className="font-medium text-[#1a1a1a] mb-2">Strategy & Transformation Teams</h3>
              <p className="text-sm text-[#5a5a5a]">For strengthening investment cases beyond pilot outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* What the Tool Assesses */}
      <section className="py-16 bg-white border-y border-[#e8e6e1]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl text-[#1a1a1a] mb-4 text-center">
            What the Tool Assesses
          </h2>
          <p className="text-[#5a5a5a] text-center mb-12 max-w-2xl mx-auto">
            Exec Venture Gauge evaluates initiatives across four practical dimensions:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#8b7355] text-white rounded-full font-heading text-lg">
                1
              </div>
              <div>
                <h3 className="font-medium text-[#1a1a1a] text-lg mb-2">Value Potential</h3>
                <p className="text-[#5a5a5a]">Estimates the economic impact an initiative could create based on its primary business objective.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#8b7355] text-white rounded-full font-heading text-lg">
                2
              </div>
              <div>
                <h3 className="font-medium text-[#1a1a1a] text-lg mb-2">Value Realization</h3>
                <p className="text-[#5a5a5a]">Incorporates adoption levels, coverage, and ramp-up timelines that influence how much value is actually captured.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#8b7355] text-white rounded-full font-heading text-lg">
                3
              </div>
              <div>
                <h3 className="font-medium text-[#1a1a1a] text-lg mb-2">Execution Reality</h3>
                <p className="text-[#5a5a5a]">Accounts for organizational, data, and operating constraints that materially affect outcomes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#8b7355] text-white rounded-full font-heading text-lg">
                4
              </div>
              <div>
                <h3 className="font-medium text-[#1a1a1a] text-lg mb-2">Investment Discipline</h3>
                <p className="text-[#5a5a5a]">Applies capital thresholds such as return expectations, payback horizons, and downside tolerance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outputs Generated */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl text-[#1a1a1a] mb-4 text-center">
            Outputs Generated
          </h2>
          <p className="text-[#5a5a5a] text-center mb-12 max-w-2xl mx-auto">
            The tool produces executive-ready outputs designed to support senior-level discussion and review.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Estimated annual economic value',
              'Net realizable value after adoption and execution factors',
              'Multi-year NPV',
              'IRR and payback period',
              'Downside risk exposure',
              'Confidence indicator reflecting robustness of assumptions',
              'Clear investment signal with rationale'
            ].map((output, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-sm border border-[#e8e6e1]">
                <CheckCircle className="w-5 h-5 text-[#8b7355] flex-shrink-0 mt-0.5" />
                <span className="text-[#5a5a5a]">{output}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Signals */}
      <section className="py-16 bg-white border-y border-[#e8e6e1]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl text-[#1a1a1a] mb-4 text-center">
            Decision Signals
          </h2>
          <p className="text-[#5a5a5a] text-center mb-12 max-w-2xl mx-auto">
            At completion, Exec Venture Gauge provides one of three clear outcomes:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-[#f0f7f0] rounded-sm border border-[#c8e6c9] text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#4caf50] rounded-full">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-[#2e7d32] text-lg mb-2">Proceed</h3>
              <p className="text-sm text-[#5a5a5a]">Conditions support scaling</p>
            </div>
            <div className="p-6 bg-[#fff8e1] rounded-sm border border-[#ffe082] text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#ffc107] rounded-full">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-[#f57c00] text-lg mb-2">Pilot with Gates</h3>
              <p className="text-sm text-[#5a5a5a]">Value exists, but further validation is required</p>
            </div>
            <div className="p-6 bg-[#ffebee] rounded-sm border border-[#ef9a9a] text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#f44336] rounded-full">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-[#c62828] text-lg mb-2">Defer</h3>
              <p className="text-sm text-[#5a5a5a]">Risks outweigh expected returns at this stage</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="font-medium text-[#1a1a1a] mb-4">Along with:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#8b7355] flex-shrink-0 mt-0.5" />
                <span className="text-[#5a5a5a]">Key conditions required for scale</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#8b7355] flex-shrink-0 mt-0.5" />
                <span className="text-[#5a5a5a]">What must be proven in the next phase</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#8b7355] flex-shrink-0 mt-0.5" />
                <span className="text-[#5a5a5a]">Where value erosion is most likely if constraints are not addressed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Typical Applications */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl text-[#1a1a1a] mb-4 text-center">
            Typical Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Evaluating AI investments prior to scale',
              'Stress-testing business cases before leadership approval',
              'Comparing multiple initiatives on a consistent decision lens',
              'Aligning finance, technology, and business perspectives'
            ].map((application, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-sm border border-[#e8e6e1]">
                <TrendingUp className="w-5 h-5 text-[#8b7355] flex-shrink-0" />
                <span className="text-[#5a5a5a]">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 bg-white border-y border-[#e8e6e1]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl text-[#1a1a1a] mb-8 text-center">
            Design Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Conservative and assumption-transparent',
              'Focused on enterprise outcomes, not demos',
              'Built for clarity at senior leadership level',
              'Suitable for inclusion in investment notes or review decks'
            ].map((principle, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#8b7355] rounded-full flex-shrink-0" />
                <span className="text-[#5a5a5a]">{principle}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[#8b8578] mt-8 italic">
            Exec Venture Gauge is a decision-support tool, not a forecasting guarantee.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-[#1a1a1a] mb-6">
            Ready to Evaluate Your AI Investment?
          </h2>
          <p className="text-[#5a5a5a] mb-8 max-w-2xl mx-auto">
            Use Exec Venture Gauge to translate strategic assumptions into risk-adjusted financial outcomes and clear funding guidance.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/mywork/exec-venture-gauge/app"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#8b7355] text-white font-medium rounded-sm hover:bg-[#6d5a43] transition-colors"
            >
              Launch the Gauge
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-[#f5f4f2] border-t border-[#e8e6e1]">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="font-medium text-[#1a1a1a] mb-4 text-center">
            Independence & Intellectual Property Disclaimer
          </h3>
          <p className="text-sm text-[#8b8578] text-center leading-relaxed">
            This project is presented as part of Prateek Karn's independent professional portfolio. 
            Exec Venture Gauge is an original work developed independently. It does not reference, reproduce, 
            or disclose any proprietary methodologies, client materials, data, or intellectual property 
            belonging to any current or former employer, client, or organization. Any resemblance to frameworks 
            or tools used elsewhere is conceptual and non-exclusive, reflecting general industry practices 
            rather than protected or confidential material. This project is shared solely to demonstrate 
            independent thinking, design capability, and decision-modeling approach.
          </p>
        </div>
      </section>

      {/* Footer Line */}
      <div className="py-6 text-center border-t border-[#e8e6e1]">
        <p className="text-sm text-[#8b8578] italic">
          Exec Venture Gauge - an independent exploration of how leaders evaluate AI investment decisions.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default ExecVentureGauge;
