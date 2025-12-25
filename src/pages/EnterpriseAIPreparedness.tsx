import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Assessment Questions - 4 dimensions, 8 questions total
const DIMENSIONS = {
  'Direction & Sponsorship': {
    description: 'Are leaders clearly aligned on why AI matters and actively removing blockers?',
    questions: [
      { id: 1, text: 'Leaders clearly explain why AI matters for the business and where it should be used.' },
      { id: 2, text: 'There is visible ownership and support to move AI ideas into real work, not just pilots.' },
    ]
  },
  'Data & Foundations': {
    description: 'Is the data needed for AI usable, reliable, and trusted?',
    questions: [
      { id: 3, text: 'For important AI use cases, the required data is available and usable.' },
      { id: 4, text: 'Teams generally trust the quality and source of data used in AI-driven outputs.', isConfidence: true },
    ]
  },
  'Execution & Ways of Working': {
    description: 'Is AI actually embedded in day-to-day workflows, not just pilots?',
    questions: [
      { id: 5, text: 'AI outputs are used in day-to-day decisions or workflows, not only for analysis.' },
      { id: 6, text: 'Teams know how to monitor, refine, and improve AI once it is deployed.' },
    ]
  },
  'Risk & Oversight': {
    description: 'Are privacy, security, and explainability handled with clarity and discipline?',
    questions: [
      { id: 7, text: 'Clear rules exist for privacy, security, and access when using AI.' },
      { id: 8, text: 'AI-driven decisions can be reviewed and explained when required.', isConfidence: true },
    ]
  }
};

const SCALE_LABELS = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];

// Scoring logic
const getStageLabel = (score: number): string => {
  if (score < 2.5) return 'Early';
  if (score < 3.3) return 'Developing';
  if (score < 4.2) return 'Operational';
  return 'Scaled';
};

const getStageColor = (stage: string): string => {
  switch (stage) {
    case 'Early': return 'bg-red-100 text-red-800 border-red-200';
    case 'Developing': return 'bg-amber-100 text-amber-800 border-amber-200';
    case 'Operational': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Scaled': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getConfidenceLabel = (score: number): string => {
  if (score < 2.5) return 'Low';
  if (score < 3.5) return 'Medium';
  return 'High';
};

const getDimensionStatus = (score: number): { label: string; color: string } => {
  if (score < 2.5) return { label: 'Needs Attention', color: 'text-red-600' };
  if (score < 3.5) return { label: 'Moderate', color: 'text-amber-600' };
  return { label: 'Strong', color: 'text-emerald-600' };
};

const USE_CASES = [
  'Customer support assistance',
  'Internal knowledge search',
  'Reporting and summarization',
  'Forecasting and planning',
  'Document review and extraction'
];

type ViewMode = 'landing' | 'assessment' | 'report';

const EnterpriseAIPreparedness = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showSampleOutput, setShowSampleOutput] = useState(false);

  // Get all questions in flat array
  const allQuestions = Object.entries(DIMENSIONS).flatMap(([dimension, data]) =>
    data.questions.map(q => ({ ...q, dimension }))
  );

  const totalQuestions = allQuestions.length;
  const progress = (Object.keys(answers).length / totalQuestions) * 100;

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }));
    if (currentQuestionIndex < totalQuestions - 1) {
      setTimeout(() => setCurrentQuestionIndex(prev => prev + 1), 300);
    }
  };

  const calculateResults = () => {
    const dimensionScores: Record<string, number> = {};
    let confidenceSum = 0;
    let confidenceCount = 0;

    Object.entries(DIMENSIONS).forEach(([dimension, data]) => {
      const scores = data.questions.map(q => answers[q.id] || 0);
      dimensionScores[dimension] = scores.reduce((a, b) => a + b, 0) / scores.length;
      
      data.questions.forEach(q => {
        if (q.isConfidence) {
          confidenceSum += answers[q.id] || 0;
          confidenceCount++;
        }
      });
    });

    const overallScore = Object.values(dimensionScores).reduce((a, b) => a + b, 0) / Object.keys(dimensionScores).length;
    const confidenceScore = confidenceCount > 0 ? confidenceSum / confidenceCount : 0;

    const sortedDimensions = Object.entries(dimensionScores)
      .map(([name, score]) => ({ name, score }))
      .sort((a, b) => b.score - a.score);

    return {
      overallScore,
      confidenceScore,
      dimensionScores,
      sortedDimensions,
      stage: getStageLabel(overallScore),
      confidenceLevel: getConfidenceLabel(confidenceScore),
      strengths: sortedDimensions.slice(0, 2),
      attentionAreas: sortedDimensions.slice(-2).reverse()
    };
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === totalQuestions) {
      setViewMode('report');
    }
  };

  const resetAssessment = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setViewMode('landing');
  };

  const getSuggestedActions = (lowestDimension: string): string[] => {
    const actions: Record<string, string[]> = {
      'Direction & Sponsorship': [
        'Clarify priority AI use cases with leadership alignment',
        'Assign a single accountable owner per AI initiative',
        'Schedule monthly AI progress reviews with sponsors'
      ],
      'Data & Foundations': [
        'Audit data quality for top 3 AI use cases',
        'Assign clear ownership for data quality',
        'Document data sources and lineage for AI inputs'
      ],
      'Execution & Ways of Working': [
        'Select one workflow where AI must be used consistently',
        'Define what "successful adoption" means in practice',
        'Create feedback loops for AI output improvement'
      ],
      'Risk & Oversight': [
        'Define simple governance rules for AI decisions',
        'Document explainability requirements per use case',
        'Establish review cadence for AI-driven outputs'
      ]
    };
    return actions[lowestDimension] || actions['Direction & Sponsorship'];
  };

  // Landing Page
  if (viewMode === 'landing') {
    return (
      <div className="min-h-screen bg-[#F9F8F6]">
        {/* Header */}
        <header className="border-b border-[#E8E5DF] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/" className="text-[#8b7355] hover:text-[#6d5a43] transition-colors text-sm font-medium">
              ← Back to Portfolio
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <img 
                src="/ai-preparedness-logo.png" 
                alt="Enterprise AI Preparedness Check" 
                className="h-24 w-24 object-contain"
              />
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
              Enterprise AI Preparedness Check
            </h1>
            <p className="text-lg sm:text-xl text-[#5a5a5a] max-w-2xl mx-auto leading-relaxed">
              A short diagnostic to understand how ready your organization is to adopt and scale AI in real work.
            </p>
            <p className="text-sm text-[#8b7355] mt-4">
              This 2–3 minute assessment helps leaders see where AI execution typically slows down — not in models or tools, but in leadership alignment, data foundations, operating habits, and governance.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setViewMode('assessment')}
              className="px-8 py-4 bg-[#8b7355] text-white font-semibold rounded-sm hover:bg-[#6d5a43] transition-colors"
            >
              Start Assessment
            </button>
            <button
              onClick={() => setShowSampleOutput(!showSampleOutput)}
              className="px-8 py-4 border border-[#8b7355] text-[#8b7355] font-semibold rounded-sm hover:bg-[#8b7355] hover:text-white transition-colors"
            >
              {showSampleOutput ? 'Hide Sample Output' : 'View Sample Output'}
            </button>
          </div>

          {/* Sample Output */}
          {showSampleOutput && (
            <div className="bg-white border border-[#E8E5DF] rounded-lg p-8 mb-16">
              <h3 className="font-heading text-xl font-semibold text-[#1a1a1a] mb-4">Sample Executive Summary</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F9F8F6] p-4 rounded">
                  <p className="text-sm text-[#5a5a5a]">Overall Preparedness</p>
                  <p className="text-lg font-semibold text-[#1a1a1a]">Operational</p>
                </div>
                <div className="bg-[#F9F8F6] p-4 rounded">
                  <p className="text-sm text-[#5a5a5a]">Confidence Signal</p>
                  <p className="text-lg font-semibold text-[#1a1a1a]">High</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-2">Strengths</h4>
                  <ul className="text-sm text-[#5a5a5a] space-y-1">
                    <li>• Clear executive support</li>
                    <li>• High confidence in AI outputs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-2">Attention Areas</h4>
                  <ul className="text-sm text-[#5a5a5a] space-y-1">
                    <li>• AI adoption in daily workflows</li>
                    <li>• Clear ownership for data quality</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-2">Suggested Focus (Next 30 Days)</h4>
                  <ul className="text-sm text-[#5a5a5a] space-y-1">
                    <li>• Select one workflow where AI must be used consistently</li>
                    <li>• Define what "successful adoption" means in practice</li>
                    <li>• Assign a single accountable owner per AI use case</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Why This Check Exists */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-semibold text-[#1a1a1a] mb-6">Why this check exists</h2>
            <p className="text-[#5a5a5a] mb-4">
              Across many organizations, AI investments move quickly into pilots but struggle to scale.
            </p>
            <p className="text-[#5a5a5a] mb-4">Common reasons include:</p>
            <ul className="space-y-2 text-[#5a5a5a]">
              <li className="flex items-start gap-2">
                <span className="text-[#8b7355] mt-1">•</span>
                Leadership intent is unclear or inconsistent
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b7355] mt-1">•</span>
                Data is available, but not trusted
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b7355] mt-1">•</span>
                AI insights exist, but do not change daily decisions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b7355] mt-1">•</span>
                Risk, privacy, and explainability are addressed too late
              </li>
            </ul>
            <p className="text-[#5a5a5a] mt-4">
              This check is designed to surface where the real constraint is — early and clearly.
            </p>
          </section>

          {/* What This Is */}
          <section className="mb-16 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-[#1a1a1a] mb-4">What it is</h3>
              <ul className="space-y-2 text-[#5a5a5a]">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  A high-level, executive-friendly diagnostic
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  A way to identify readiness gaps before scaling AI
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  A structured snapshot of organizational preparedness
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-[#1a1a1a] mb-4">What it is not</h3>
              <ul className="space-y-2 text-[#5a5a5a]">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  A technical audit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  A vendor or tool comparison
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  A compliance or certification exercise
                </li>
              </ul>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-semibold text-[#1a1a1a] mb-6">How it works</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-[#E8E5DF] rounded-lg p-6">
                <div className="text-3xl font-bold text-[#8b7355] mb-2">1</div>
                <p className="text-[#5a5a5a]">Answer 8 short statements on a 1–5 scale</p>
              </div>
              <div className="bg-white border border-[#E8E5DF] rounded-lg p-6">
                <div className="text-3xl font-bold text-[#8b7355] mb-2">2</div>
                <p className="text-[#5a5a5a]">Responses are grouped into 4 critical areas</p>
              </div>
              <div className="bg-white border border-[#E8E5DF] rounded-lg p-6">
                <div className="text-3xl font-bold text-[#8b7355] mb-2">3</div>
                <p className="text-[#5a5a5a]">Receive a simple executive summary</p>
              </div>
              <div className="bg-white border border-[#E8E5DF] rounded-lg p-6">
                <div className="text-3xl font-bold text-[#8b7355] mb-2">4</div>
                <p className="text-[#5a5a5a]">Get clear next-step actions</p>
              </div>
            </div>
            <p className="text-sm text-[#8b7355] mt-4 text-center">No technical background is required.</p>
          </section>

          {/* What We Assess */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-semibold text-[#1a1a1a] mb-6">What we assess</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {Object.entries(DIMENSIONS).map(([dimension, data], index) => (
                <div key={dimension} className="bg-white border border-[#E8E5DF] rounded-lg p-6">
                  <div className="text-sm text-[#8b7355] font-medium mb-2">{index + 1}.</div>
                  <h3 className="font-heading text-lg font-semibold text-[#1a1a1a] mb-2">{dimension}</h3>
                  <p className="text-sm text-[#5a5a5a]">{data.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Common Use Cases */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-semibold text-[#1a1a1a] mb-6">Common AI use cases teams evaluate</h2>
            <div className="flex flex-wrap gap-3">
              {USE_CASES.map(useCase => (
                <span key={useCase} className="px-4 py-2 bg-white border border-[#E8E5DF] rounded-full text-sm text-[#5a5a5a]">
                  {useCase}
                </span>
              ))}
            </div>
            <p className="text-sm text-[#8b7355] mt-4">This assessment is use-case agnostic.</p>
          </section>

          {/* CTA */}
          <section className="text-center mb-16">
            <h2 className="font-heading text-2xl font-semibold text-[#1a1a1a] mb-4">Ready to get a clear signal?</h2>
            <p className="text-[#5a5a5a] mb-6">
              Run the Enterprise AI Preparedness Check to get a concise, structured view of where your organization stands — and where to focus next.
            </p>
            <button
              onClick={() => setViewMode('assessment')}
              className="px-8 py-4 bg-[#8b7355] text-white font-semibold rounded-sm hover:bg-[#6d5a43] transition-colors"
            >
              Start Assessment
            </button>
          </section>

          {/* Context */}
          <section className="mb-16 bg-white border border-[#E8E5DF] rounded-lg p-6">
            <h3 className="font-heading text-lg font-semibold text-[#1a1a1a] mb-3">Context</h3>
            <p className="text-sm text-[#5a5a5a]">
              This diagnostic reflects recurring execution and governance patterns observed while designing AI-led systems for enterprise and B2B environments. It is intended as a high-level signal, not a substitute for deep, organization-specific work.
            </p>
          </section>

          {/* Disclosure */}
          <section className="border-t border-[#E8E5DF] pt-8">
            <p className="text-xs text-[#8b7355] text-center">
              <strong>Disclosure:</strong> This is a reconstructed demonstration created for portfolio purposes. All questions and outputs are illustrative and use dummy data. No proprietary employer, client, or confidential materials are included.
            </p>
            <p className="text-xs text-[#999] text-center mt-2">
              Designed as an architectural diagnostic, not a sales tool.
            </p>
          </section>
        </main>
      </div>
    );
  }

  // Assessment Page
  if (viewMode === 'assessment') {
    const currentQuestion = allQuestions[currentQuestionIndex];
    const isComplete = Object.keys(answers).length === totalQuestions;

    return (
      <div className="min-h-screen bg-[#F9F8F6]">
        {/* Header */}
        <header className="border-b border-[#E8E5DF] bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src="/ai-preparedness-logo.png" alt="" className="h-8 w-8 object-contain" />
              <span className="font-heading font-semibold text-[#1a1a1a]">Enterprise AI Preparedness Check</span>
            </div>
            <button
              onClick={resetAssessment}
              className="text-sm text-[#8b7355] hover:text-[#6d5a43] transition-colors"
            >
              Reset
            </button>
          </div>
        </header>

        {/* Progress Bar */}
        <div className="bg-white border-b border-[#E8E5DF]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between text-sm text-[#5a5a5a] mb-2">
              <span>Progress</span>
              <span>{Object.keys(answers).length} of {totalQuestions} questions</span>
            </div>
            <div className="h-2 bg-[#E8E5DF] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#8b7355] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {!isComplete ? (
            <div className="bg-white border border-[#E8E5DF] rounded-lg p-8">
              {/* Dimension Badge */}
              <div className="text-xs font-medium text-[#8b7355] uppercase tracking-wider mb-4">
                {currentQuestion.dimension}
              </div>

              {/* Question */}
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#1a1a1a] mb-8">
                {currentQuestion.text}
              </h2>

              {/* Scale */}
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map(score => (
                  <button
                    key={score}
                    onClick={() => handleAnswer(currentQuestion.id, score)}
                    className={`w-full p-4 text-left border rounded-lg transition-all ${
                      answers[currentQuestion.id] === score
                        ? 'border-[#8b7355] bg-[#8b7355]/5'
                        : 'border-[#E8E5DF] hover:border-[#8b7355]/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                        answers[currentQuestion.id] === score
                          ? 'border-[#8b7355] bg-[#8b7355] text-white'
                          : 'border-[#E8E5DF] text-[#5a5a5a]'
                      }`}>
                        {score}
                      </div>
                      <span className="text-[#5a5a5a]">{SCALE_LABELS[score - 1]}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 text-sm text-[#8b7355] disabled:text-[#ccc] disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
                  disabled={currentQuestionIndex === totalQuestions - 1}
                  className="px-4 py-2 text-sm text-[#8b7355] disabled:text-[#ccc] disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-[#E8E5DF] rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h2 className="font-heading text-2xl font-semibold text-[#1a1a1a] mb-4">
                Assessment Complete
              </h2>
              <p className="text-[#5a5a5a] mb-8">
                You've answered all {totalQuestions} questions. Ready to see your results?
              </p>
              <button
                onClick={handleSubmit}
                className="px-8 py-4 bg-[#8b7355] text-white font-semibold rounded-sm hover:bg-[#6d5a43] transition-colors"
              >
                View Executive Summary
              </button>
            </div>
          )}

          {/* Question Navigator */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {allQuestions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => setCurrentQuestionIndex(index)}
                className={`w-8 h-8 rounded-full text-xs font-medium transition-all ${
                  answers[q.id]
                    ? 'bg-[#8b7355] text-white'
                    : index === currentQuestionIndex
                    ? 'border-2 border-[#8b7355] text-[#8b7355]'
                    : 'border border-[#E8E5DF] text-[#5a5a5a]'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // Report Page
  if (viewMode === 'report') {
    const results = calculateResults();

    return (
      <div className="min-h-screen bg-[#F9F8F6]">
        {/* Header */}
        <header className="border-b border-[#E8E5DF] bg-white print:hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src="/ai-preparedness-logo.png" alt="" className="h-8 w-8 object-contain" />
              <span className="font-heading font-semibold text-[#1a1a1a]">Executive Summary</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 text-sm border border-[#E8E5DF] rounded hover:bg-[#F9F8F6] transition-colors"
              >
                Print / Save PDF
              </button>
              <button
                onClick={resetAssessment}
                className="px-4 py-2 text-sm text-[#8b7355] hover:text-[#6d5a43] transition-colors"
              >
                Start New Assessment
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 print:py-0">
          <div className="bg-white border border-[#E8E5DF] rounded-lg overflow-hidden print:border-none print:shadow-none">
            {/* Report Header */}
            <div className="p-8 border-b border-[#E8E5DF] flex items-center justify-between">
              <div>
                <h1 className="font-heading text-2xl font-bold text-[#1a1a1a]">Enterprise AI Preparedness Check</h1>
                <p className="text-sm text-[#5a5a5a] mt-1">Executive Summary Report</p>
              </div>
              <img src="/ai-preparedness-logo.png" alt="" className="h-16 w-16 object-contain" />
            </div>

            {/* Overall Snapshot */}
            <div className="p-8 border-b border-[#E8E5DF]">
              <h2 className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-6">Overall Snapshot</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-[#F9F8F6] rounded-lg">
                  <p className="text-sm text-[#5a5a5a] mb-2">Preparedness Level</p>
                  <span className={`inline-block px-4 py-2 rounded-full text-lg font-semibold border ${getStageColor(results.stage)}`}>
                    {results.stage}
                  </span>
                </div>
                <div className="text-center p-6 bg-[#F9F8F6] rounded-lg">
                  <p className="text-sm text-[#5a5a5a] mb-2">Overall Score</p>
                  <p className="text-3xl font-bold text-[#1a1a1a]">{results.overallScore.toFixed(1)} <span className="text-lg font-normal text-[#5a5a5a]">/ 5</span></p>
                </div>
                <div className="text-center p-6 bg-[#F9F8F6] rounded-lg">
                  <p className="text-sm text-[#5a5a5a] mb-2">Confidence Signal</p>
                  <p className="text-2xl font-semibold text-[#1a1a1a]">{results.confidenceLevel}</p>
                </div>
              </div>
              <p className="text-sm text-[#5a5a5a] mt-6 text-center italic">
                {results.stage === 'Early' && 'Foundation building phase — focus on leadership alignment and data basics before scaling.'}
                {results.stage === 'Developing' && 'Progress is visible — address key gaps to move from pilots to production.'}
                {results.stage === 'Operational' && 'Strong foundation in place — optimize execution and governance for scale.'}
                {results.stage === 'Scaled' && 'Mature AI operations — focus on continuous improvement and innovation.'}
              </p>
            </div>

            {/* Dimension Breakdown */}
            <div className="p-8 border-b border-[#E8E5DF]">
              <h2 className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-6">Dimension Breakdown</h2>
              <div className="space-y-4">
                {results.sortedDimensions.map(({ name, score }) => {
                  const status = getDimensionStatus(score);
                  return (
                    <div key={name} className="flex items-center gap-4">
                      <div className="w-48 text-sm font-medium text-[#1a1a1a]">{name}</div>
                      <div className="flex-1 h-4 bg-[#E8E5DF] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#8b7355] transition-all duration-500"
                          style={{ width: `${(score / 5) * 100}%` }}
                        />
                      </div>
                      <div className="w-16 text-sm font-semibold text-right">{score.toFixed(1)}</div>
                      <div className={`w-28 text-sm font-medium ${status.color}`}>{status.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Strengths & Attention Areas */}
            <div className="p-8 border-b border-[#E8E5DF] grid sm:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-4">Key Strengths</h2>
                <ul className="space-y-3">
                  {results.strengths.map(({ name, score }) => (
                    <li key={name} className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5">✓</span>
                      <div>
                        <p className="font-medium text-[#1a1a1a]">{name}</p>
                        <p className="text-sm text-[#5a5a5a]">Score: {score.toFixed(1)} / 5</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-4">Attention Areas</h2>
                <ul className="space-y-3">
                  {results.attentionAreas.map(({ name, score }) => (
                    <li key={name} className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">!</span>
                      <div>
                        <p className="font-medium text-[#1a1a1a]">{name}</p>
                        <p className="text-sm text-[#5a5a5a]">Score: {score.toFixed(1)} / 5</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Suggested Focus */}
            <div className="p-8 border-b border-[#E8E5DF]">
              <h2 className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-4">Suggested Focus — Next 30 Days</h2>
              <ul className="space-y-3">
                {getSuggestedActions(results.attentionAreas[0]?.name || 'Direction & Sponsorship').map((action, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#8b7355] text-white text-xs flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-[#5a5a5a]">{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Case Context */}
            <div className="p-8 border-b border-[#E8E5DF]">
              <h2 className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-4">Common Use Cases to Consider</h2>
              <div className="flex flex-wrap gap-2">
                {USE_CASES.map(useCase => (
                  <span key={useCase} className="px-3 py-1 bg-[#F9F8F6] border border-[#E8E5DF] rounded-full text-sm text-[#5a5a5a]">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>

            {/* Disclosure */}
            <div className="p-8 bg-[#F9F8F6]">
              <p className="text-xs text-[#8b7355] text-center">
                <strong>Disclosure:</strong> This is a reconstructed demonstration created for portfolio purposes. All questions and outputs are illustrative and use dummy data. No proprietary employer, client, or confidential materials are included.
              </p>
            </div>
          </div>

          {/* Back to Portfolio */}
          <div className="mt-8 text-center print:hidden">
            <Link 
              to="/mywork"
              className="text-[#8b7355] hover:text-[#6d5a43] transition-colors text-sm font-medium"
            >
              ← Back to My Work
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return null;
};

export default EnterpriseAIPreparedness;
