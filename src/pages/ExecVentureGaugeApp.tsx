import { useEffect, useMemo, useState } from "react";
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Tooltip as RechartsTooltip,
} from "recharts";

const industries = [
  "Financial Services",
  "Manufacturing",
  "Retail & E‑commerce",
  "Healthcare",
  "Technology & SaaS",
  "Energy & Utilities",
  "Public Sector",
  "Other",
];

const revenueBands = [
  "<$100M",
  "$100M – $500M",
  "$500M – $1B",
  "$1B – $5B",
  ">$5B",
];

type PrimaryValueDriver = "Cost" | "Revenue" | "Risk";

type InitiativeType = "Cost Reduction" | "Revenue Uplift" | "Risk & Loss Avoidance";

type DecisionType = "Assistive" | "Augmentative" | "Autonomous";

interface CostReductionInputs {
  costPoolName: string;
  annualCostBase: number; // denominator for % cost reduction
  costReductionPct: number; // % of that cost base
  coveragePct: number; // % of the cost pool in scope
  adoptionPct: number; // % of in-scope work that actually uses AI
  rampSpeed: "Slow" | "Medium" | "Fast";
  budgetOutSharePct: number; // how much of savings are budget-out vs capacity-freed
}

interface RevenueUpliftInputs {
  revenueLine: string;
  revenueBase: number; // denominator for % uplift
  upliftPct: number;
  grossMarginPct: number;
  coveragePct: number;
  adoptionPct: number;
  cannibalization: "Low" | "Medium" | "High";
}

interface RiskAvoidanceInputs {
  riskType: "Fraud" | "Compliance" | "Downtime" | "Credit" | "Other";
  historicalAnnualLoss: number;
  lossReductionPct: number;
  confidence: "Low" | "Medium" | "High";
  regulatorySeverity: "Low" | "Medium" | "High";
}

interface ExecutionRisks {
  dataReadiness: number;
  changeMaturity: number;
  leadershipSponsorship: number;
  modelTrust: number;
  regulatoryRisk: number;
}

const formatCurrency = (value: number): string => {
  if (!Number.isFinite(value)) return "-";
  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";
  if (abs >= 1_000_000_000) {
    return `${sign}$${(abs / 1_000_000_000).toFixed(1)}B`;
  }
  if (abs >= 1_000_000) {
    return `${sign}$${(abs / 1_000_000).toFixed(1)}M`;
  }
  if (abs >= 1_000) {
    return `${sign}$${(abs / 1_000).toFixed(1)}K`;
  }
  return `${sign}$${abs.toFixed(0)}`;
};

const formatPercent = (v: number): string => `${v.toFixed(0)}%`;

interface RoiOutputs {
  annualTheoreticalValue: number;
  annualAfterCoverage: number;
  annualAfterAdoption: number;
  annualNetValue: number;
  npv3y: number;
  irr: number | null;
  paybackYears: number | null;
  penaltyMultiplier: number;
  valueAtRisk3y: number;
  adoptionCurve: { month: number; adoption: number }[];
}

const computeIrr = (cashFlows: number[]): number | null => {
  // Simple brute-force IRR between -90% and 100%
  let bestRate: number | null = null;
  let bestNpvDiff = Number.POSITIVE_INFINITY;

  for (let rate = -0.9; rate <= 1.0; rate += 0.005) {
    let npv = 0;
    for (let t = 0; t < cashFlows.length; t += 1) {
      npv += cashFlows[t] / Math.pow(1 + rate, t);
    }
    const diff = Math.abs(npv);
    if (diff < bestNpvDiff) {
      bestNpvDiff = diff;
      bestRate = rate;
    }
  }

  if (bestRate === null || !Number.isFinite(bestRate)) return null;
  return bestRate * 100;
};

const mapReadinessToMultiplier = (score: number): number => {
  if (score < 40) return 0.75; // low readiness → −25%
  if (score < 70) return 0.9; // medium → −10%
  return 1.0; // high → no haircut
};

const computePenaltyMultiplier = (risks: ExecutionRisks): number => {
  const factors = [
    mapReadinessToMultiplier(risks.dataReadiness),
    mapReadinessToMultiplier(risks.changeMaturity),
    mapReadinessToMultiplier(risks.leadershipSponsorship),
    mapReadinessToMultiplier(risks.modelTrust),
    mapReadinessToMultiplier(100 - risks.regulatoryRisk), // higher regulatory risk → stronger haircut
  ];
  // Multiply to reflect compounding execution friction
  return factors.reduce((acc, v) => acc * v, 1);
};

const computeAdoptionCurve = (targetAdoptionPct: number, rampSpeed: "Slow" | "Medium" | "Fast"): {
  month: number;
  adoption: number;
}[] => {
  const months = rampSpeed === "Fast" ? 12 : rampSpeed === "Medium" ? 18 : 24;
  const curve: { month: number; adoption: number }[] = [];
  for (let m = 0; m <= months; m += 3) {
    const progressive = Math.min(targetAdoptionPct, (targetAdoptionPct * m) / (months / 2));
    curve.push({ month: m, adoption: progressive });
  }
  return curve;
};

const computeRoi = (
  driver: PrimaryValueDriver,
  costInputs: CostReductionInputs,
  revenueInputs: RevenueUpliftInputs,
  riskInputs: RiskAvoidanceInputs,
  hurdleRatePct: number,
  investment: number,
  annualOpex: number,
  risks: ExecutionRisks,
): RoiOutputs => {
  let annualTheoreticalValue = 0;
  let annualAfterCoverage = 0;
  let annualAfterAdoption = 0;
  let adoptionTargetPct = 0;
  let rampSpeed: "Slow" | "Medium" | "Fast" = "Medium";

  if (driver === "Cost") {
    const reduction = (costInputs.annualCostBase * costInputs.costReductionPct) / 100;
    const coverage = costInputs.coveragePct / 100;
    const adoption = costInputs.adoptionPct / 100;
    annualTheoreticalValue = reduction;
    annualAfterCoverage = annualTheoreticalValue * coverage;
    annualAfterAdoption = annualAfterCoverage * adoption;
    adoptionTargetPct = costInputs.adoptionPct;
    rampSpeed = costInputs.rampSpeed;
  } else if (driver === "Revenue") {
    const uplift = (revenueInputs.revenueBase * revenueInputs.upliftPct) / 100;
    const margin = revenueInputs.grossMarginPct / 100;
    const coverage = revenueInputs.coveragePct / 100;
    const adoption = revenueInputs.adoptionPct / 100;
    const cannibalizationFactor =
      revenueInputs.cannibalization === "Low" ? 0.95 : revenueInputs.cannibalization === "Medium" ? 0.8 : 0.6;
    const incrementalGrossProfit = uplift * margin;
    annualTheoreticalValue = incrementalGrossProfit;
    annualAfterCoverage = annualTheoreticalValue * coverage;
    annualAfterAdoption = annualAfterCoverage * adoption * cannibalizationFactor;
    adoptionTargetPct = revenueInputs.adoptionPct;
    rampSpeed = "Medium";
  } else {
    const lossReduction = (riskInputs.historicalAnnualLoss * riskInputs.lossReductionPct) / 100;
    const confidenceFactor = riskInputs.confidence === "High" ? 0.9 : riskInputs.confidence === "Medium" ? 0.75 : 0.5;
    const severityFactor = riskInputs.regulatorySeverity === "High" ? 1 : riskInputs.regulatorySeverity === "Medium" ? 0.85 : 0.7;
    annualTheoreticalValue = lossReduction;
    annualAfterCoverage = annualTheoreticalValue; // coverage not explicitly modelled; risk is already scoped
    annualAfterAdoption = annualAfterCoverage * confidenceFactor * severityFactor;
    adoptionTargetPct = 100;
    rampSpeed = "Slow";
  }

  const penaltyMultiplier = computePenaltyMultiplier(risks);
  const annualNetValue = annualAfterAdoption * penaltyMultiplier;

  const r = hurdleRatePct / 100;

  // Map ramp speed to year-1 ramp assumption
  const year1Ramp = rampSpeed === "Fast" ? 0.9 : rampSpeed === "Medium" ? 0.7 : 0.5;

  const year1Value = annualNetValue * year1Ramp;
  const year2Value = annualNetValue;
  const year3Value = annualNetValue;

  const cashFlows = [
    -investment,
    year1Value - annualOpex,
    year2Value - annualOpex,
    year3Value - annualOpex,
  ];

  let npv3y = 0;
  for (let t = 0; t < cashFlows.length; t += 1) {
    npv3y += cashFlows[t] / Math.pow(1 + r, t);
  }

  let cumulative = 0;
  let paybackYears: number | null = null;
  for (let t = 0; t < cashFlows.length; t += 1) {
    const prev = cumulative;
    cumulative += cashFlows[t];
    if (prev < 0 && cumulative >= 0) {
      const fraction = -prev / cashFlows[t];
      paybackYears = t - 1 + fraction;
      break;
    }
  }

  const irr = computeIrr(cashFlows);

  const adoptionCurve = computeAdoptionCurve(adoptionTargetPct, rampSpeed);

  const totalTheoretical3y = annualTheoreticalValue * 3;
  const totalNet3y = annualNetValue * 3;
  const valueAtRisk3y = Math.max(0, totalTheoretical3y - totalNet3y);

  return {
    annualTheoreticalValue,
    annualAfterCoverage,
    annualAfterAdoption,
    annualNetValue,
    npv3y,
    irr,
    paybackYears,
    penaltyMultiplier,
    valueAtRisk3y,
    adoptionCurve,
  };
};

const Index = () => {
  const [industry, setIndustry] = useState<string>("Financial Services");
  const [revenueBand, setRevenueBand] = useState<string>("$500M – $1B");
  const [geography, setGeography] = useState<string>("");
  const [hurdleRate, setHurdleRate] = useState<number>(12); // cost of capital

  const [primaryDriver, setPrimaryDriver] = useState<PrimaryValueDriver>("Cost");

  const [investment, setInvestment] = useState<number>(5_000_000);
  const [annualOpex, setAnnualOpex] = useState<number>(2_000_000);
  const [timelineMonths, setTimelineMonths] = useState<number>(12);
  const [readiness, setReadiness] = useState<number>(40); // internal capability readiness

  const [costInputs, setCostInputs] = useState<CostReductionInputs>({
    costPoolName: "Operations & support",
    annualCostBase: 50_000_000,
    costReductionPct: 8,
    coveragePct: 50,
    adoptionPct: 60,
    rampSpeed: "Medium",
    budgetOutSharePct: 40,
  });

  const [revenueInputs, setRevenueInputs] = useState<RevenueUpliftInputs>({
    revenueLine: "Cross-sell in existing customers",
    revenueBase: 200_000_000,
    upliftPct: 3,
    grossMarginPct: 55,
    coveragePct: 35,
    adoptionPct: 45,
    cannibalization: "Medium",
  });

  const [riskInputs, setRiskInputs] = useState<RiskAvoidanceInputs>({
    riskType: "Fraud",
    historicalAnnualLoss: 20_000_000,
    lossReductionPct: 20,
    confidence: "Medium",
    regulatorySeverity: "High",
  });

  const [risks, setRisks] = useState<ExecutionRisks>({
    dataReadiness: 45,
    changeMaturity: 40,
    leadershipSponsorship: 55,
    modelTrust: 35,
    regulatoryRisk: 40,
  });

  // Governance rules – CEO-level absolutes
  const [minIrrPct, setMinIrrPct] = useState<number>(18);
  const [maxPaybackMonths, setMaxPaybackMonths] = useState<number>(36);
  const [maxDownsidePct, setMaxDownsidePct] = useState<number>(40);

  useEffect(() => {
    document.title = "Exec Venture Gauge | Prateek Karn";
  }, []);

  const outputs = useMemo(
    () =>
      computeRoi(
        primaryDriver,
        costInputs,
        revenueInputs,
        riskInputs,
        hurdleRate,
        investment,
        annualOpex,
        risks,
      ),
    [primaryDriver, costInputs, revenueInputs, riskInputs, hurdleRate, investment, annualOpex, risks],
  );

  const riskScore =
    (risks.dataReadiness +
      risks.changeMaturity +
      risks.leadershipSponsorship +
      risks.modelTrust +
      risks.regulatoryRisk) /
    5;

  const roiConfidence = Math.max(0, Math.min(100, 100 * outputs.penaltyMultiplier - (100 - readiness) * 0.3));

  const valueAtRiskPct = outputs.annualTheoreticalValue
    ? Math.min(100, (outputs.valueAtRisk3y / (outputs.annualTheoreticalValue * 3)) * 100)
    : 0;

  type Recommendation = "ProceedToScale" | "PilotWithGates" | "DoNotFund";

  let recommendation: Recommendation = "PilotWithGates";
  let rationale = "ROI is sensitive to adoption, execution, and risk assumptions.";

  const meetsNpv = outputs.npv3y > 0;
  const meetsIrr = outputs.irr != null && outputs.irr >= minIrrPct;
  const meetsPayback = outputs.paybackYears != null && outputs.paybackYears * 12 <= maxPaybackMonths;
  const meetsDownside = valueAtRiskPct <= maxDownsidePct;

  if (meetsNpv && meetsIrr && meetsPayback && meetsDownside && roiConfidence >= 65) {
    recommendation = "ProceedToScale";
    rationale = "Economic case clears all governance gates with adequate execution confidence.";
  } else if (meetsNpv && roiConfidence >= 45 && meetsDownside) {
    recommendation = "PilotWithGates";
    rationale = "Positive economics but contingent on disciplined, gated pilot proving adoption and ramp speed.";
  } else {
    recommendation = "DoNotFund";
    rationale = "One or more CEO-level governance rules are violated; do not optimise assumptions to force approval.";
  }

  const qualitativeSummary = (() => {
    const unrealizedShare = outputs.annualTheoreticalValue
      ? 1 - outputs.annualNetValue / outputs.annualTheoreticalValue
      : 0;
    const unrealizedPct = Math.round(Math.max(0, unrealizedShare) * 100);

    if (recommendation === "ProceedToScale") {
      return `Model shows positive NPV with ${formatPercent(roiConfidence)} confidence. Around ${unrealizedPct}% of theoretical value is still exposed to data, adoption, and change constraints — governance and ownership must be explicit before scale.`;
    }

    if (recommendation === "PilotWithGates") {
      return `Gross potential is attractive, but approximately ${unrealizedPct}% of value is at risk of dying in coverage, adoption, or execution. Treat this as a governed pilot with explicit stop/go gates, not as committed transformation.`;
    }

    return `Under current assumptions the initiative fails one or more capital discipline rules (NPV, IRR, payback, or downside). Address data foundations, ownership, and change readiness before committing meaningful capital.`;
  })();

  const boardGuidance = {
    investmentRecommendation:
      recommendation === "ProceedToScale"
        ? "Proceed to scale with staged deployment, releasing capital in tranches tied to value and adoption milestones."
        : recommendation === "PilotWithGates"
          ? "Limit capital to a tightly bounded pilot with explicit 100-day proof points and hard stop criteria."
          : "Do not fund at this stage; focus leadership time on fixing preconditions (data, process, controls).",
    capitalAtRisk: formatCurrency(outputs.valueAtRisk3y),
    first100Days: "Prove real behaviour change: target adoption, coverage in live processes, and early value signals.",
    proofPoints:
      "Evidence that users adopt the AI in core journeys, measurable impact on cost/revenue/loss, and no control failures.",
    kpis:
      "Adoption %, coverage %, realised savings or uplift vs baseline, time-to-value, and stability of models in production.",
  };

  const valueCreatedTotal3y = outputs.annualTheoreticalValue * 3;
  const valueCapturedTotal3y = outputs.annualNetValue * 3;

  const gaugeSegments = [
    { label: "Low", max: 40 },
    { label: "Moderate", max: 70 },
    { label: "High", max: 100 },
  ];

  return (
    <TooltipProvider>
      <main className="min-h-screen bg-background text-foreground">
        {/* Sticky Header */}
        <nav className="sticky top-0 z-50 bg-[#faf9f7]/95 backdrop-blur-sm border-b border-[#e8e5df]">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link to="/" className="font-serif text-xl text-[#1a1a1a] hover:text-[#8b7355] transition-colors">
              Prateek Karn
            </Link>
            <Link 
              to="/mywork/exec-venture-gauge" 
              className="text-sm text-[#8b7355] hover:bg-[#8b7355] hover:text-white px-4 py-2 rounded transition-all duration-200"
            >
              ← Back to Overview
            </Link>
          </div>
        </nav>
        
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-10">
          {/* Hero */}
          <header className="space-y-4 border-b border-border pb-8">
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Exec Venture Gauge
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                A board-level decision tool to evaluate whether AI investments will deliver measurable business value —
                before capital is committed.
              </p>
              <p className="text-xs text-muted-foreground">
                Decision-support tool. Assumptions are explicit and editable.
              </p>
            </div>
          </header>

          <section className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-8">
              {/* Company Context */}
              <Card>
                <CardHeader className="space-y-2">
                  <CardTitle className="font-display text-2xl font-semibold">Company &amp; Capital Context</CardTitle>
                  <CardDescription>Anchor ROI in your economic reality and capital cost.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Industry</label>
                      <Select value={industry} onValueChange={setIndustry}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((ind) => (
                            <SelectItem key={ind} value={ind}>
                              {ind}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Annual revenue band</label>
                      <Select value={revenueBand} onValueChange={setRevenueBand}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select band" />
                        </SelectTrigger>
                        <SelectContent>
                          {revenueBands.map((band) => (
                            <SelectItem key={band} value={band}>
                              {band}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Geography (optional)</label>
                      <Input
                        value={geography}
                        onChange={(e) => setGeography(e.target.value)}
                        placeholder="e.g. North America, Global"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium">Cost of capital / hurdle rate</span>
                          <Tooltip>
                            <TooltipTrigger className="cursor-help text-xs text-muted-foreground">?</TooltipTrigger>
                            <TooltipContent className="max-w-xs text-xs">
                              Used for NPV and capital efficiency evaluation. Align with your WACC or board-approved
                              hurdle rate.
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        <span className="text-xs text-muted-foreground">{hurdleRate.toFixed(0)}%</span>
                      </div>
                      <Slider
                        value={[hurdleRate]}
                        min={5}
                        max={25}
                        step={0.5}
                        onValueChange={([v]) => setHurdleRate(v)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Primary value driver */}
              <Card>
                <CardHeader className="space-y-2">
                  <CardTitle className="font-display text-2xl font-semibold">Primary Value Driver</CardTitle>
                  <CardDescription>
                    One initiative 9 one dominant economic logic. Choose the lens that truly drives the case.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">What is the primary source of value?</label>
                    <div className="grid gap-3 md:grid-cols-3">
                      {[{ label: "Cost reduction", value: "Cost" as PrimaryValueDriver }, { label: "Revenue uplift", value: "Revenue" as PrimaryValueDriver }, { label: "Risk / loss avoidance", value: "Risk" as PrimaryValueDriver }].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setPrimaryDriver(opt.value)}
                          className={`rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                            primaryDriver === opt.value
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-card text-foreground hover:bg-secondary"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    CEO rule: one initiative = one dominant value logic. All maths flow from this choice.
                  </p>
                </CardContent>
              </Card>

              {/* Value creation modules */}
              <Card>
                <CardHeader className="space-y-2">
                  <CardTitle className="font-display text-2xl font-semibold">Value Creation Modules</CardTitle>
                  <CardDescription>
                    Every % has a denominator. All value passes through coverage, adoption, and execution reality.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {primaryDriver === "Cost" && (
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium">Cost pool name</label>
                          <Input
                            value={costInputs.costPoolName}
                            onChange={(e) => setCostInputs((prev) => ({ ...prev, costPoolName: e.target.value }))}
                            placeholder="e.g. Contact centre, back-office ops"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Annual cost base</span>
                            <span className="text-xs text-muted-foreground">{formatCurrency(costInputs.annualCostBase)}</span>
                          </div>
                          <Input
                            type="number"
                            value={costInputs.annualCostBase}
                            onChange={(e) =>
                              setCostInputs((prev) => ({ ...prev, annualCostBase: Number(e.target.value) || 0 }))
                            }
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">% cost reduction on that base</span>
                            <span className="text-xs text-muted-foreground">{formatPercent(costInputs.costReductionPct)}</span>
                          </div>
                          <Slider
                            value={[costInputs.costReductionPct]}
                            min={0}
                            max={25}
                            step={1}
                            onValueChange={([v]) => setCostInputs((prev) => ({ ...prev, costReductionPct: v }))}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Process coverage in scope</span>
                            <span className="text-xs text-muted-foreground">{formatPercent(costInputs.coveragePct)}</span>
                          </div>
                          <Slider
                            value={[costInputs.coveragePct]}
                            min={10}
                            max={100}
                            step={1}
                            onValueChange={([v]) => setCostInputs((prev) => ({ ...prev, coveragePct: v }))}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Adoption rate at 12 months</span>
                            <span className="text-xs text-muted-foreground">{formatPercent(costInputs.adoptionPct)}</span>
                          </div>
                          <Slider
                            value={[costInputs.adoptionPct]}
                            min={10}
                            max={100}
                            step={1}
                            onValueChange={([v]) => setCostInputs((prev) => ({ ...prev, adoptionPct: v }))}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium">Ramp speed</label>
                          <Select
                            value={costInputs.rampSpeed}
                            onValueChange={(val) => setCostInputs((prev) => ({ ...prev, rampSpeed: val as CostReductionInputs["rampSpeed"] }))}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Slow">Slow (18+ months)</SelectItem>
                              <SelectItem value="Medium">Medium (12 months)</SelectItem>
                              <SelectItem value="Fast">Fast (6 months)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Budget-out vs capacity-freed</span>
                            <span className="text-xs text-muted-foreground">{formatPercent(costInputs.budgetOutSharePct)}</span>
                          </div>
                          <Slider
                            value={[costInputs.budgetOutSharePct]}
                            min={0}
                            max={100}
                            step={5}
                            onValueChange={([v]) => setCostInputs((prev) => ({ ...prev, budgetOutSharePct: v }))}
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 rounded-md border border-border bg-secondary/40 px-3 py-3 text-sm md:grid-cols-3">
                        <div>
                          <div className="text-xs text-muted-foreground">Gross savings (theoretical)</div>
                          <div className="text-base font-medium">
                            {formatCurrency((costInputs.annualCostBase * costInputs.costReductionPct) / 100)}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Net realised savings (before execution)</div>
                          <div className="text-base font-medium">
                            {formatCurrency(
                              ((costInputs.annualCostBase * costInputs.costReductionPct) / 100) *
                                (costInputs.coveragePct / 100) *
                                (costInputs.adoptionPct / 100),
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Budget-out vs capacity-freed</div>
                          <div className="text-xs">
                            {(() => {
                              const net =
                                ((costInputs.annualCostBase * costInputs.costReductionPct) / 100) *
                                (costInputs.coveragePct / 100) *
                                (costInputs.adoptionPct / 100);
                              const budgetOut = (net * costInputs.budgetOutSharePct) / 100;
                              const capacity = net - budgetOut;
                              return `${formatCurrency(budgetOut)} budget-out / ${formatCurrency(capacity)} capacity-freed`;
                            })()}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {primaryDriver === "Revenue" && (
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium">Revenue line affected</label>
                          <Input
                            value={revenueInputs.revenueLine}
                            onChange={(e) => setRevenueInputs((prev) => ({ ...prev, revenueLine: e.target.value }))}
                            placeholder="e.g. New logo acquisition, cross-sell"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Revenue base</span>
                            <span className="text-xs text-muted-foreground">{formatCurrency(revenueInputs.revenueBase)}</span>
                          </div>
                          <Input
                            type="number"
                            value={revenueInputs.revenueBase}
                            onChange={(e) =>
                              setRevenueInputs((prev) => ({ ...prev, revenueBase: Number(e.target.value) || 0 }))
                            }
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">% revenue uplift on that base</span>
                            <span className="text-xs text-muted-foreground">{formatPercent(revenueInputs.upliftPct)}</span>
                          </div>
                          <Slider
                            value={[revenueInputs.upliftPct]}
                            min={0}
                            max={20}
                            step={1}
                            onValueChange={([v]) => setRevenueInputs((prev) => ({ ...prev, upliftPct: v }))}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Gross margin %</span>
                            <span className="text-xs text-muted-foreground">{formatPercent(revenueInputs.grossMarginPct)}</span>
                          </div>
                          <Slider
                            value={[revenueInputs.grossMarginPct]}
                            min={10}
                            max={90}
                            step={1}
                            onValueChange={([v]) => setRevenueInputs((prev) => ({ ...prev, grossMarginPct: v }))}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Coverage in target journeys</span>
                            <span className="text-xs text-muted-foreground">{formatPercent(revenueInputs.coveragePct)}</span>
                          </div>
                          <Slider
                            value={[revenueInputs.coveragePct]}
                            min={10}
                            max={100}
                            step={1}
                            onValueChange={([v]) => setRevenueInputs((prev) => ({ ...prev, coveragePct: v }))}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Adoption rate</span>
                            <span className="text-xs text-muted-foreground">{formatPercent(revenueInputs.adoptionPct)}</span>
                          </div>
                          <Slider
                            value={[revenueInputs.adoptionPct]}
                            min={10}
                            max={100}
                            step={1}
                            onValueChange={([v]) => setRevenueInputs((prev) => ({ ...prev, adoptionPct: v }))}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium">Cannibalisation risk</label>
                          <Select
                            value={revenueInputs.cannibalization}
                            onValueChange={(val) =>
                              setRevenueInputs((prev) => ({ ...prev, cannibalization: val as RevenueUpliftInputs["cannibalization"] }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Low">Low</SelectItem>
                              <SelectItem value="Medium">Medium</SelectItem>
                              <SelectItem value="High">High</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid gap-4 rounded-md border border-border bg-secondary/40 px-3 py-3 text-sm md:grid-cols-3">
                        <div>
                          <div className="text-xs text-muted-foreground">Gross revenue uplift (theoretical)</div>
                          <div className="text-base font-medium">
                            {formatCurrency((revenueInputs.revenueBase * revenueInputs.upliftPct) / 100)}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Incremental gross profit</div>
                          <div className="text-base font-medium">
                            {formatCurrency(
                              ((revenueInputs.revenueBase * revenueInputs.upliftPct) / 100) *
                                (revenueInputs.grossMarginPct / 100),
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Risk-adjusted net value (before execution)</div>
                          <div className="text-base font-medium">
                            {formatCurrency(
                              ((revenueInputs.revenueBase * revenueInputs.upliftPct) / 100) *
                                (revenueInputs.grossMarginPct / 100) *
                                (revenueInputs.coveragePct / 100) *
                                (revenueInputs.adoptionPct / 100) *
                                (revenueInputs.cannibalization === "Low"
                                  ? 0.95
                                  : revenueInputs.cannibalization === "Medium"
                                    ? 0.8
                                    : 0.6),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {primaryDriver === "Risk" && (
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium">Risk type</label>
                          <Select
                            value={riskInputs.riskType}
                            onValueChange={(val) => setRiskInputs((prev) => ({ ...prev, riskType: val as RiskAvoidanceInputs["riskType"] }))}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Fraud">Fraud</SelectItem>
                              <SelectItem value="Compliance">Compliance</SelectItem>
                              <SelectItem value="Downtime">Downtime</SelectItem>
                              <SelectItem value="Credit">Credit</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Historical annual loss</span>
                            <span className="text-xs text-muted-foreground">
                              {formatCurrency(riskInputs.historicalAnnualLoss)}
                            </span>
                          </div>
                          <Input
                            type="number"
                            value={riskInputs.historicalAnnualLoss}
                            onChange={(e) =>
                              setRiskInputs((prev) => ({ ...prev, historicalAnnualLoss: Number(e.target.value) || 0 }))
                            }
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Loss reduction %</span>
                            <span className="text-xs text-muted-foreground">{formatPercent(riskInputs.lossReductionPct)}</span>
                          </div>
                          <Slider
                            value={[riskInputs.lossReductionPct]}
                            min={0}
                            max={80}
                            step={1}
                            onValueChange={([v]) => setRiskInputs((prev) => ({ ...prev, lossReductionPct: v }))}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium">Confidence level</label>
                          <Select
                            value={riskInputs.confidence}
                            onValueChange={(val) => setRiskInputs((prev) => ({ ...prev, confidence: val as RiskAvoidanceInputs["confidence"] }))}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Low">Low</SelectItem>
                              <SelectItem value="Medium">Medium</SelectItem>
                              <SelectItem value="High">High</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-sm font-medium">Regulatory severity</label>
                          <Select
                            value={riskInputs.regulatorySeverity}
                            onValueChange={(val) =>
                              setRiskInputs((prev) => ({ ...prev, regulatorySeverity: val as RiskAvoidanceInputs["regulatorySeverity"] }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Low">Low</SelectItem>
                              <SelectItem value="Medium">Medium</SelectItem>
                              <SelectItem value="High">High</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid gap-4 rounded-md border border-border bg-secondary/40 px-3 py-3 text-sm md:grid-cols-2">
                        <div>
                          <div className="text-xs text-muted-foreground">Expected loss avoided (theoretical)</div>
                          <div className="text-base font-medium">
                            {formatCurrency((riskInputs.historicalAnnualLoss * riskInputs.lossReductionPct) / 100)}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Confidence-adjusted value (before execution)</div>
                          <div className="text-base font-medium">
                            {formatCurrency(
                              ((riskInputs.historicalAnnualLoss * riskInputs.lossReductionPct) / 100) *
                                (riskInputs.confidence === "High" ? 0.9 : riskInputs.confidence === "Medium" ? 0.75 : 0.5) *
                                (riskInputs.regulatorySeverity === "High"
                                  ? 1
                                  : riskInputs.regulatorySeverity === "Medium"
                                    ? 0.85
                                    : 0.7),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Execution Reality Modifiers */}
              <Card>
                <CardHeader className="space-y-2">
                  <CardTitle className="font-display text-2xl font-semibold">Execution Reality Modifiers</CardTitle>
                  <CardDescription>
                    Mandatory haircuts for data, change, leadership, trust, and regulation. No optimistic overrides.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {[{
                      key: "dataReadiness" as const,
                      label: "Data readiness",
                    },
                    {
                      key: "changeMaturity" as const,
                      label: "Change readiness",
                    },
                    {
                      key: "leadershipSponsorship" as const,
                      label: "Leadership ownership",
                    },
                    {
                      key: "modelTrust" as const,
                      label: "Model trust / explainability",
                    },
                    {
                      key: "regulatoryRisk" as const,
                      label: "Regulatory complexity (higher = more risk)",
                    }].map((item) => (
                      <div key={item.key} className="space-y-1.5">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{item.label}</span>
                          <span className="text-xs text-muted-foreground">
                            {(risks[item.key] ?? 0).toFixed(0)} / 100
                          </span>
                        </div>
                        <Slider
                          value={[risks[item.key]]}
                          min={0}
                          max={100}
                          step={5}
                          onValueChange={([v]) =>
                            setRisks((prev) => ({
                              ...prev,
                              [item.key]: v,
                            }))
                          }
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right column: Results & narrative */}
            <div className="space-y-8">
              {/* Executive Summary */}
              <Card>
                <CardHeader className="space-y-3">
                  <CardTitle className="font-display text-2xl font-semibold">Executive Summary</CardTitle>
                  <CardDescription>
                    High-level recommendation based on modeled economics and execution risk.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">Status</div>
                      <div
                        className={`text-2xl font-semibold ${
                          recommendation === "ProceedToScale"
                            ? "text-primary"
                            : recommendation === "PilotWithGates"
                              ? "text-accent-foreground"
                              : "text-destructive"
                        }`}
                      >
                        {recommendation === "ProceedToScale"
                          ? "Proceed to Scale"
                          : recommendation === "PilotWithGates"
                            ? "Pilot with Explicit Gates"
                            : "Do Not Fund"}
                      </div>
                    </div>
                    <div className="space-y-1 text-right text-xs text-muted-foreground">
                      <div>Modeled 3-year NPV: {formatCurrency(outputs.npv3y)}</div>
                      <div>
                        IRR vs minimum: {outputs.irr ? `${outputs.irr.toFixed(1)}%` : "n/a"} vs {minIrrPct.toFixed(0)}%
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{rationale}</p>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-border pt-3 text-xs text-muted-foreground">
                    <span>
                      Risk-adjusted value capture multiplier: {(outputs.penaltyMultiplier * 100).toFixed(0)}%
                    </span>
                    <span>Execution risk score: {riskScore.toFixed(0)} / 100</span>
                    <span>Value at risk (downside): {valueAtRiskPct.toFixed(0)}% of theoretical 3-year value</span>
                  </div>
                </CardContent>
              </Card>

              {/* Financial outputs */}
              <Card>
                <CardHeader className="space-y-2">
                  <CardTitle className="font-display text-2xl font-semibold">Financial Outputs</CardTitle>
                  <CardDescription>All values are annualised and risk-adjusted where stated.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-0.5">
                      <div className="text-xs text-muted-foreground">Annual gross value (theoretical)</div>
                      <div className="text-base font-medium">{formatCurrency(outputs.annualTheoreticalValue)}</div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs text-muted-foreground">Annual value after coverage</div>
                      <div className="text-base font-medium">{formatCurrency(outputs.annualAfterCoverage)}</div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs text-muted-foreground">Annual value after adoption</div>
                      <div className="text-base font-medium">{formatCurrency(outputs.annualAfterAdoption)}</div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs text-muted-foreground">Annual net realisable value (after execution)</div>
                      <div className="text-base font-medium">{formatCurrency(outputs.annualNetValue)}</div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs text-muted-foreground">3-year NPV</div>
                      <div className="text-base font-medium">{formatCurrency(outputs.npv3y)}</div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs text-muted-foreground">IRR</div>
                      <div className="text-base font-medium">
                        {outputs.irr ? `${outputs.irr.toFixed(1)}%` : "Not meaningful"}
                      </div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs text-muted-foreground">Payback period</div>
                      <div className="text-base font-medium">
                        {outputs.paybackYears ? `${outputs.paybackYears.toFixed(1)} years` : "Beyond 3 years"}
                      </div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs text-muted-foreground">Value at risk (3-year downside)</div>
                      <div className="text-base font-medium">{formatCurrency(outputs.valueAtRisk3y)}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Visuals: value funnel & adoption */}
              <Card>
                <CardHeader className="space-y-2">
                  <CardTitle className="font-display text-2xl font-semibold">Value &amp; Risk Visuals</CardTitle>
                  <CardDescription>Visualise where value dies: coverage, adoption, and execution friction.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  {/* 1. Value funnel */}
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>Value funnel (annual, 3-year view scales linearly)</span>
                    </div>
                    <div className="h-40 rounded-md border border-border bg-card/60 px-3 py-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { stage: "Theoretical", value: outputs.annualTheoreticalValue },
                            { stage: "After coverage", value: outputs.annualAfterCoverage },
                            { stage: "After adoption", value: outputs.annualAfterAdoption },
                            { stage: "After execution", value: outputs.annualNetValue },
                          ]}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis dataKey="stage" tickLine={false} axisLine={false} />
                          <YAxis tickFormatter={formatCurrency} tickLine={false} axisLine={false} />
                          <RechartsTooltip formatter={(val: number) => formatCurrency(val)} />
                          <Bar dataKey="value" fill="hsl(var(--accent))" radius={4} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* 2. Adoption vs time */}
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>Adoption vs time</span>
                    </div>
                    <div className="h-40 rounded-md border border-border bg-card/60 px-3 py-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={outputs.adoptionCurve}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis dataKey="month" tickLine={false} axisLine={false} />
                          <YAxis tickFormatter={(v: number) => `${v}%`} tickLine={false} axisLine={false} />
                          <RechartsTooltip formatter={(val: number) => `${val.toFixed(0)}%`} />
                          <Line
                            type="monotone"
                            dataKey="adoption"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2}
                            dot={{ r: 2 }}
                            activeDot={{ r: 3 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* 3. ROI confidence gauge */}
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>ROI confidence score</span>
                      <span>{roiConfidence.toFixed(0)} / 100</span>
                    </div>
                    <div className="h-10 rounded-md border border-border bg-card/60 px-3 py-2">
                      <div className="flex h-full items-center gap-2 text-[10px]">
                        <div className="relative flex-1 overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-accent"
                            style={{ width: `${Math.max(0, Math.min(100, roiConfidence))}%` }}
                          />
                        </div>
                        <div className="flex gap-1 text-muted-foreground">
                          {gaugeSegments.map((segment) => (
                            <span key={segment.label}>{segment.label}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Strategic interpretation */}
              <Card>
                <CardHeader className="space-y-2">
                  <CardTitle className="font-display text-2xl font-semibold">Strategic Interpretation</CardTitle>
                  <CardDescription>Consulting-style narrative for executive discussion.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>{qualitativeSummary}</p>
                </CardContent>
              </Card>

              {/* Board-level guidance */}
              <Card>
                <CardHeader className="space-y-2">
                  <CardTitle className="font-display text-2xl font-semibold">Board-Level Guidance</CardTitle>
                  <CardDescription>Translate the model into governance and next steps.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">Investment verdict</h3>
                    <p>{boardGuidance.investmentRecommendation}</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">Capital at risk</h3>
                    <p>{boardGuidance.capitalAtRisk}</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">First 100 days – what must be proven</h3>
                    <p>{boardGuidance.first100Days}</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">Conditions to release next tranche</h3>
                    <p>{boardGuidance.proofPoints}</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">KPIs leadership must own</h3>
                    <p>{boardGuidance.kpis}</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-dashed border-border pt-3 text-xs text-muted-foreground">
                    <span>ROI is contingent on adoption and behavioural change.</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        window.print();
                      }}
                    >
                      Export board pack (PDF)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </TooltipProvider>
  );
};

export default ExecVentureGaugeApp;
