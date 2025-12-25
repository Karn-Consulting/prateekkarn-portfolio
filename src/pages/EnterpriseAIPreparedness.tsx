import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import Footer from '@/components/Footer';

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

// Speedometer Gauge Component
const SpeedometerGauge = ({ score, maxScore = 5 }: { score: number; maxScore?: number }) => {
  // Calculate the needle rotation angle
  // Score 0% = -90deg (left), Score 100% = +90deg (right)
  // For score 1-5 scale: map to percentage first, then to rotation
  const normalizedScore = Math.max(1, Math.min(maxScore, score));
  const percentage = ((normalizedScore - 1) / (maxScore - 1)) * 100;
  // Map 0-100% to -90° to +90° range
  const rotation = (percentage / 100) * 180 - 90;
  
  return (
    <div className="relative mx-auto" style={{ width: '280px' }}>
      {/* Gauge Background Image */}
      <img 
        src="/gauge-bg.png" 
        alt="Score Gauge" 
        style={{ 
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          display: 'block'
        }}
      />
      {/* Needle Image - rotates based on score */}
      <div 
        className="absolute transition-transform duration-1000 ease-out"
        style={{ 
          width: '120px',
          height: '120px',
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: `translateX(-50%) rotate(${rotation}deg)`,
          transformOrigin: 'center 75%',
          zIndex: 2
        }}
      >
        <img 
          src="/gauge-needle.png" 
          alt="Needle" 
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }} 
        />
      </div>
    </div>
  );
};

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

    // Prepare radar chart data
    const radarData = Object.entries(dimensionScores).map(([name, score]) => ({
      dimension: name.split(' ')[0], // Use first word for shorter labels
      fullName: name,
      score: score,
      fullMark: 5
    }));

    return {
      overallScore,
      confidenceScore,
      dimensionScores,
      sortedDimensions,
      radarData,
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
      <div className="min-h-screen bg-[#F9F8F6] flex flex-col">
        {/* Header */}
        <header className="border-b border-[#E8E5DF] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/mywork" className="px-4 py-2 text-[#8b7355] font-semibold rounded-sm hover:bg-[#8b7355] hover:text-white transition-all duration-200 text-sm inline-block border border-transparent hover:border-[#8b7355]">
              ← Back to My Work
            </Link>
          </div>
        </header>

        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
              <h3 className="font-heading text-xl font-semibold text-[#1a1a1a] mb-6">Sample Executive Summary</h3>
              
              {/* Speedometer Gauge for Sample */}
              <div className="mb-8">
                <p className="text-sm text-[#5a5a5a] text-center mb-2">Overall Score</p>
                <SpeedometerGauge score={4.6} />
                <p className="text-2xl font-bold text-[#1a1a1a] text-center mt-2">4.6 <span className="text-lg font-normal text-[#5a5a5a]">/ 5</span></p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F9F8F6] p-4 rounded">
                  <p className="text-sm text-[#5a5a5a]">Overall Preparedness</p>
                  <p className="text-lg font-semibold text-[#1a1a1a]">Scaled</p>
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
                    <li>• Data quality governance</li>
                    <li>• Workflow integration depth</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Why This Check Exists */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl font-semibold text-[#1a1a1a] mb-6">Why this check exists</h2>
            <p className="text-[#5a5a5a] leading-relaxed mb-4">
              Across many organizations, AI investments move quickly into pilots but struggle to scale.
            </p>
            <p className="text-[#5a5a5a] leading-relaxed mb-4">Common reasons include:</p>
            <ul className="space-y-2 text-[#5a5a5a]">
              <li className="flex items-start gap-2">
                <span className="text-[#8b7355]">•</span>
                Leadership intent is unclear or inconsistent
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b7355]">•</span>
                Data is available, but not trusted
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b7355]">•</span>
                AI insights exist, but do not change daily decisions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8b7355]">•</span>
                Risk, privacy, and explainability are addressed too late
              </li>
            </ul>
            <p className="text-[#5a5a5a] leading-relaxed mt-4">
              This check is designed to surface where the real constraint is — early and clearly.
            </p>
          </div>

          {/* What It Is / What It Is Not */}
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="font-heading text-lg font-semibold text-[#1a1a1a] mb-4">What it is</h3>
              <ul className="space-y-2 text-[#5a5a5a]">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">✓</span>
                  A high-level, executive-friendly diagnostic
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">✓</span>
                  A way to identify readiness gaps before scaling AI
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">✓</span>
                  A structured snapshot of organizational preparedness
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-[#1a1a1a] mb-4">What it is not</h3>
              <ul className="space-y-2 text-[#5a5a5a]">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  A technical audit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  A vendor or tool comparison
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  A compliance or certification exercise
                </li>
              </ul>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl font-semibold text-[#1a1a1a] mb-6">How it works</h2>
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { step: 1, text: 'Answer 8 short statements on a 1–5 scale' },
                { step: 2, text: 'Responses are grouped into 4 critical areas' },
                { step: 3, text: 'Receive a simple executive summary' },
                { step: 4, text: 'Get clear next-step actions' }
              ].map(({ step, text }) => (
                <div key={step} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-[#8b7355] text-white flex items-center justify-center mx-auto mb-3 font-semibold">
                    {step}
                  </div>
                  <p className="text-sm text-[#5a5a5a]">{text}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#8b7355] text-center mt-6">No technical background is required.</p>
          </div>

          {/* What We Assess */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl font-semibold text-[#1a1a1a] mb-6">What we assess</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {Object.entries(DIMENSIONS).map(([name, data], index) => (
                <div key={name} className="bg-white border border-[#E8E5DF] rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-[#8b7355] font-semibold">{index + 1}.</span>
                    <div>
                      <h3 className="font-heading font-semibold text-[#1a1a1a] mb-2">{name}</h3>
                      <p className="text-sm text-[#5a5a5a]">{data.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="font-heading text-xl font-semibold text-[#1a1a1a] mb-4">Common AI use cases teams evaluate</h2>
            <div className="flex flex-wrap gap-2">
              {USE_CASES.map(useCase => (
                <span key={useCase} className="px-4 py-2 bg-white border border-[#E8E5DF] rounded-full text-sm text-[#5a5a5a]">
                  {useCase}
                </span>
              ))}
            </div>
            <p className="text-sm text-[#8b7355] mt-4">This assessment is use-case agnostic.</p>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-white border border-[#E8E5DF] rounded-lg p-8 mb-16">
            <h2 className="font-heading text-2xl font-semibold text-[#1a1a1a] mb-4">Ready to get a clear signal?</h2>
            <p className="text-[#5a5a5a] mb-6 max-w-lg mx-auto">
              Run the Enterprise AI Preparedness Check to get a concise, structured view of where your organization stands — and where to focus next.
            </p>
            <button
              onClick={() => setViewMode('assessment')}
              className="px-8 py-4 bg-[#8b7355] text-white font-semibold rounded-sm hover:bg-[#6d5a43] transition-colors"
            >
              Start Assessment
            </button>
          </div>

          {/* Context & Disclosure */}
          <div className="text-center">
            <h3 className="font-heading text-lg font-semibold text-[#1a1a1a] mb-3">Context</h3>
            <p className="text-sm text-[#5a5a5a] max-w-2xl mx-auto mb-4">
              This diagnostic reflects recurring execution and governance patterns observed while designing AI-led systems for enterprise and B2B environments. It is intended as a high-level signal, not a substitute for deep, organization-specific work.
            </p>
            <p className="text-xs text-[#8b7355] max-w-2xl mx-auto">
              <strong>Disclosure:</strong> This is a reconstructed demonstration created for portfolio purposes. All questions and outputs are illustrative and use dummy data. No proprietary employer, client, or confidential materials are included.
            </p>
            <p className="text-xs text-[#5a5a5a] mt-4">
              Designed as an architectural diagnostic, not a sales tool.
            </p>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    );
  }

  // Assessment Page
  if (viewMode === 'assessment') {
    const currentQuestion = allQuestions[currentQuestionIndex];
    const isComplete = Object.keys(answers).length === totalQuestions;

    return (
      <div className="min-h-screen bg-[#F9F8F6] flex flex-col">
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

        <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-[#5a5a5a] mb-2">
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

          {/* Question Card */}
          {!isComplete ? (
            <div className="bg-white border border-[#E8E5DF] rounded-lg p-8">
              {/* Dimension Label */}
              <span className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider">
                {currentQuestion.dimension}
              </span>

              {/* Question */}
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#1a1a1a] mt-3 mb-8">
                {currentQuestion.text}
              </h2>

              {/* Answer Options */}
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((score) => (
                  <button
                    key={score}
                    onClick={() => handleAnswer(currentQuestion.id, score)}
                    className={`w-full p-4 text-left border rounded-lg transition-all ${
                      answers[currentQuestion.id] === score
                        ? 'border-[#8b7355] bg-[#8b7355]/5'
                        : 'border-[#E8E5DF] hover:border-[#8b7355]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        answers[currentQuestion.id] === score
                          ? 'bg-[#8b7355] text-white'
                          : 'bg-[#F9F8F6] text-[#5a5a5a]'
                      }`}>
                        {score}
                      </span>
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
      <div className="min-h-screen bg-[#F9F8F6] flex flex-col">
        {/* Main Header with Prateek Karn */}
        <header className="border-b border-[#E8E5DF] bg-white print:hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/" className="font-heading text-xl font-semibold text-[#1a1a1a] hover:text-[#8b7355] transition-colors">
              Prateek Karn
            </Link>
          </div>
        </header>

        {/* Sub Header with Logo, Executive Summary, and Actions */}
        <div className="border-b border-[#E8E5DF] bg-white print:hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src="/ai-preparedness-logo.png" alt="" className="h-8 w-8 object-contain" />
              <span className="font-heading font-semibold text-[#1a1a1a]">Executive Summary</span>
            </div>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 text-sm bg-[#8b7355] text-white rounded hover:bg-[#6d5a43] transition-colors"
              >
                Download PDF Report
              </button>
              <button
                onClick={resetAssessment}
                className="px-4 py-2 text-sm text-[#8b7355] hover:text-[#6d5a43] transition-colors"
              >
                Start New Assessment
              </button>
            </div>
          </div>
        </div>

        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 print:py-0">
          <div className="bg-white border border-[#E8E5DF] rounded-lg overflow-hidden print:border-none print:shadow-none">
            {/* Report Header */}
            <div className="p-8 border-b border-[#E8E5DF] flex items-center justify-between">
              <div>
                <h1 className="font-heading text-2xl font-bold text-[#1a1a1a]">Enterprise AI Preparedness Check</h1>
                <p className="text-sm text-[#5a5a5a] mt-1">Executive Summary Report</p>
              </div>
              <img src="/ai-preparedness-logo.png" alt="" className="h-16 w-16 object-contain" />
            </div>

            {/* Overall Snapshot with Speedometer */}
            <div className="p-8 border-b border-[#E8E5DF]">
              <h2 className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-6">Overall Snapshot</h2>
              
              {/* Speedometer Gauge */}
              <div className="mb-8">
                <p className="text-sm text-[#5a5a5a] text-center mb-2">Overall Score</p>
                <SpeedometerGauge score={results.overallScore} />
                <p className="text-3xl font-bold text-[#1a1a1a] text-center mt-2">{results.overallScore.toFixed(1)} <span className="text-lg font-normal text-[#5a5a5a]">/ 5</span></p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-[#F9F8F6] rounded-lg">
                  <p className="text-sm text-[#5a5a5a] mb-2">Preparedness Level</p>
                  <span className={`inline-block px-4 py-2 rounded-full text-lg font-semibold border ${getStageColor(results.stage)}`}>
                    {results.stage}
                  </span>
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

            {/* Preparedness Overview - Radar Chart */}
            <div className="p-8 border-b border-[#E8E5DF]">
              <h2 className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-6">Preparedness Overview</h2>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Radar Chart */}
                <div className="w-full lg:w-1/2 h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={results.radarData}>
                      <PolarGrid stroke="#E8E5DF" />
                      <PolarAngleAxis 
                        dataKey="dimension" 
                        tick={{ 
                          fontSize: 11, 
                          fill: '#5a5a5a',
                          fontWeight: 500
                        }} 
                      />
                      <PolarRadiusAxis 
                        angle={90} 
                        domain={[0, 5]} 
                        tick={{ fontSize: 10, fill: '#999' }}
                        axisLine={{ stroke: '#E8E5DF' }}
                        tickCount={6}
                      />
                      <Radar
                        name="Score"
                        dataKey="score"
                        stroke="#8b7355"
                        fill="#8b7355"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Legend */}
                <div className="w-full lg:w-1/2 space-y-3">
                  {results.radarData.map((item, index) => {
                    const status = getDimensionStatus(item.score);
                    return (
                      <div key={index} className="flex items-center justify-between p-3 bg-[#F9F8F6] rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-[#8b7355]" />
                          <span className="text-sm font-medium text-[#1a1a1a]">{item.fullName}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold">{item.score.toFixed(1)}</span>
                          <span className={`text-xs font-medium ${status.color}`}>{status.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
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

          {/* Back to My Work */}
          <div className="mt-8 text-center print:hidden">
            <Link 
              to="/mywork"
              className="px-4 py-2 text-[#8b7355] font-semibold rounded-sm hover:bg-[#8b7355] hover:text-white transition-all duration-200 text-sm inline-block border border-transparent hover:border-[#8b7355]"
            >
              ← Back to My Work
            </Link>
          </div>
        </main>

        {/* Footer */}
        <div className="print:hidden">
          <Footer />
        </div>
      </div>
    );
  }

  return null;
};

export default EnterpriseAIPreparedness;
