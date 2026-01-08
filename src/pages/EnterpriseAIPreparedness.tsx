import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import Footer from '@/components/Footer';
import PasswordProtectedPage from '@/components/PasswordProtectedPage';

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

  const renderContent = () => {
    // Landing Page
    if (viewMode === 'landing') {
      return (
        <div className="min-h-screen bg-[#F9F8F6] flex flex-col">
          {/* Header - Consistent with WebInfrastructure */}
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
                Designed for leaders who need to move beyond AI pilots to operational scale.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid sm:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-[#8b7355] font-heading text-2xl mb-2">4</div>
                <p className="text-sm text-[#5a5a5a] font-medium">Critical Dimensions</p>
              </div>
              <div className="text-center">
                <div className="text-[#8b7355] font-heading text-2xl mb-2">8</div>
                <p className="text-sm text-[#5a5a5a] font-medium">Strategic Questions</p>
              </div>
              <div className="text-center">
                <div className="text-[#8b7355] font-heading text-2xl mb-2">30</div>
                <p className="text-sm text-[#5a5a5a] font-medium">Day Action Plan</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-6">
              <button
                onClick={() => setViewMode('assessment')}
                className="px-10 py-4 bg-[#1a1a1a] text-white font-semibold rounded-sm hover:bg-[#8b7355] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Diagnostic
              </button>
              <button
                onClick={() => setShowSampleOutput(!showSampleOutput)}
                className="text-[#8b7355] text-sm font-medium hover:underline"
              >
                {showSampleOutput ? 'Hide Sample Output' : 'View Sample Output Format'}
              </button>
            </div>

            {/* Sample Output Preview */}
            {showSampleOutput && (
              <div className="mt-12 p-6 bg-white border border-[#E8E5DF] rounded-sm shadow-sm animate-in fade-in slide-in-from-bottom-4">
                <h3 className="font-heading text-lg mb-4 text-[#1a1a1a]">What you'll receive:</h3>
                <ul className="space-y-3 text-sm text-[#5a5a5a]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#8b7355]">●</span>
                    Overall AI Preparedness Stage (Early to Scaled)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#8b7355]">●</span>
                    Dimension-level breakdown (Direction, Data, Execution, Risk)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#8b7355]">●</span>
                    Confidence indicator based on data trust and explainability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#8b7355]">●</span>
                    Prioritized focus areas for the next 30 days
                  </li>
                </ul>
              </div>
            )}
          </main>

          <Footer />
        </div>
      );
    }

    // Assessment Mode
    if (viewMode === 'assessment') {
      const currentQuestion = allQuestions[currentQuestionIndex];
      
      return (
        <div className="min-h-screen bg-[#F9F8F6] flex flex-col">
          <header className="bg-white border-b border-[#E8E5DF] py-4">
            <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
              <button 
                onClick={resetAssessment}
                className="text-sm text-[#5a5a5a] hover:text-[#1a1a1a]"
              >
                Cancel
              </button>
              <div className="text-sm font-medium text-[#8b7355]">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </div>
            </div>
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-[#8b7355] transition-all duration-500" style={{ width: `${progress}%` }} />
          </header>

          <main className="flex-1 flex items-center justify-center p-6">
            <div className="max-w-2xl w-full">
              <div className="mb-12">
                <span className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-2 block">
                  {currentQuestion.dimension}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl text-[#1a1a1a] leading-tight">
                  {currentQuestion.text}
                </h2>
              </div>

              <div className="space-y-3">
                {SCALE_LABELS.map((label, index) => {
                  const score = index + 1;
                  const isSelected = answers[currentQuestion.id] === score;
                  
                  return (
                    <button
                      key={label}
                      onClick={() => handleAnswer(currentQuestion.id, score)}
                      className={`w-full p-4 text-left rounded-sm border transition-all duration-200 flex items-center justify-between group
                        ${isSelected 
                          ? 'bg-[#1a1a1a] border-[#1a1a1a] text-white' 
                          : 'bg-white border-[#E8E5DF] text-[#5a5a5a] hover:border-[#8b7355] hover:bg-[#F9F8F6]'
                        }`}
                    >
                      <span className="font-medium">{label}</span>
                      <span className={`text-xs ${isSelected ? 'text-white/60' : 'text-[#8b7355] opacity-0 group-hover:opacity-100'}`}>
                        Score: {score}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-12 flex justify-between items-center">
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="text-sm font-medium text-[#5a5a5a] disabled:opacity-30"
                >
                  Previous
                </button>
                
                {currentQuestionIndex === totalQuestions - 1 && Object.keys(answers).length === totalQuestions && (
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-3 bg-[#8b7355] text-white font-semibold rounded-sm hover:bg-[#1a1a1a] transition-all"
                  >
                    View Results
                  </button>
                )}
              </div>
            </div>
          </main>
        </div>
      );
    }

    // Report Mode
    if (viewMode === 'report') {
      const results = calculateResults();
      
      return (
        <div className="min-h-screen bg-[#F9F8F6] flex flex-col">
          <header className="bg-white border-b border-[#E8E5DF] py-4 sticky top-0 z-50 print:hidden">
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
              <Link to="/" className="font-heading text-xl text-[#1a1a1a]">Prateek Karn</Link>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => window.print()}
                  className="text-sm font-medium text-[#5a5a5a] hover:text-[#1a1a1a]"
                >
                  Save as PDF
                </button>
                <button 
                  onClick={resetAssessment}
                  className="px-4 py-2 bg-[#1a1a1a] text-white text-sm font-medium rounded-sm hover:bg-[#8b7355] transition-all"
                >
                  Retake Diagnostic
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
            <div className="bg-white border border-[#E8E5DF] shadow-sm rounded-sm overflow-hidden">
              {/* Report Header */}
              <div className="p-8 sm:p-12 border-b border-[#E8E5DF] bg-[#faf9f7]">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                  <div>
                    <h1 className="font-heading text-3xl text-[#1a1a1a] mb-2">AI Preparedness Report</h1>
                    <p className="text-[#5a5a5a]">Diagnostic assessment for enterprise AI scaling readiness.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-1">Overall Stage</div>
                    <div className={`px-4 py-1 rounded-full text-sm font-bold border ${getStageColor(results.stage)}`}>
                      {results.stage}
                    </div>
                  </div>
                </div>
              </div>

              {/* Score Overview */}
              <div className="p-8 sm:p-12 border-b border-[#E8E5DF] grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center">
                  <h2 className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-8">Readiness Score</h2>
                  <SpeedometerGauge score={results.overallScore} />
                  <div className="mt-4">
                    <div className="text-4xl font-heading text-[#1a1a1a]">{results.overallScore.toFixed(1)}</div>
                    <div className="text-sm text-[#5a5a5a]">out of 5.0</div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-4">Confidence Indicator</h2>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-2 bg-[#E8E5DF] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#1a1a1a] transition-all duration-1000" 
                          style={{ width: `${(results.confidenceScore / 5) * 100}%` }} 
                        />
                      </div>
                      <span className="font-bold text-[#1a1a1a]">{results.confidenceLevel}</span>
                    </div>
                    <p className="text-xs text-[#5a5a5a] mt-2">Based on data trust, quality, and decision explainability.</p>
                  </div>

                  <div className="p-4 bg-[#F9F8F6] border border-[#E8E5DF] rounded-sm">
                    <h3 className="text-xs font-semibold text-[#1a1a1a] uppercase mb-2">Executive Summary</h3>
                    <p className="text-sm text-[#5a5a5a] leading-relaxed">
                      Your organization is in the <span className="font-bold text-[#1a1a1a]">{results.stage}</span> stage of AI preparedness. 
                      While you have established foundations in <span className="font-medium text-[#1a1a1a]">{results.strengths[0].name.toLowerCase()}</span>, 
                      scaling will require focused attention on <span className="font-medium text-[#1a1a1a]">{results.attentionAreas[0].name.toLowerCase()}</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dimension Breakdown */}
              <div className="p-8 sm:p-12 border-b border-[#E8E5DF]">
                <h2 className="text-xs font-semibold text-[#8b7355] uppercase tracking-wider mb-8">Dimension Breakdown</h2>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Radar Chart */}
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={results.radarData}>
                        <PolarGrid stroke="#E8E5DF" />
                        <PolarAngleAxis dataKey="dimension" tick={{ fill: '#5a5a5a', fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 5]} tick={false} axisLine={false} />
                        <Radar
                          name="Score"
                          dataKey="score"
                          stroke="#8b7355"
                          fill="#8b7355"
                          fillOpacity={0.3}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* List Breakdown */}
                  <div className="space-y-6">
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

  return (
    <PasswordProtectedPage 
      password="CSUITE12"
      title="Exclusive Case Study"
      description="This detailed case study walkthrough is available exclusively to those with access. Enter the password shared with you to view."
    >
      {renderContent()}
    </PasswordProtectedPage>
  );
};

export default EnterpriseAIPreparedness;
