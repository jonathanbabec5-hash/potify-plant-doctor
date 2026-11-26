import { useState } from "react";
import {
  Leaf,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Eye,
  Link2,
  HelpCircle,
  Sparkles,
  ShieldAlert,
  Camera,
  Search,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { DiagnosisResult, RefineAnswer, Candidate } from "@shared/diagnosis";

interface ResultsPanelProps {
  result: DiagnosisResult | null;
  error: string | null;
  isAnalyzing: boolean;
  isRefining: boolean;
  onRefine: (answers: RefineAnswer[]) => void;
}

const URGENCY_STYLES: Record<DiagnosisResult["urgency"], string> = {
  low: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  medium: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  high: "bg-red-500/10 text-red-300 border-red-500/30",
};

const CATEGORY_LABELS: Record<string, string> = {
  mobile_deficiency: "Nutrient deficiency",
  immobile_deficiency: "Nutrient deficiency",
  toxicity_feed: "Feeding problem",
  ph: "pH problem",
  water_roots: "Water / roots",
  pest: "Pest",
  disease: "Mold / disease",
  environment: "Environment",
  normal: "Normal — not a problem",
};

function LoadingState({ refining }: { refining: boolean }) {
  return (
    <div className="min-h-[400px] border border-primary/20 rounded-xl flex flex-col items-center justify-center text-center p-8 bg-primary/5">
      <div className="w-16 h-16 relative mb-6">
        <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin" />
        <div className="absolute inset-2 rounded-full border-r-2 border-emerald-400 animate-spin" />
        <Leaf className="absolute inset-0 m-auto w-6 h-6 text-primary animate-pulse" />
      </div>
      <h4 className="text-xl font-medium mb-2">
        {refining ? "Re-weighing the evidence" : "Examining your photos"}
      </h4>
      <p className="text-muted-foreground max-w-sm">
        {refining
          ? "The model is updating its diagnosis with your answers."
          : "The vision model is checking your plant against 46 documented causes and their combinations."}
      </p>
      <p className="text-xs text-muted-foreground mt-4">Usually takes 15–60 seconds</p>
    </div>
  );
}

function CandidateCard({ candidate, rank }: { candidate: Candidate; rank: number }) {
  const [open, setOpen] = useState(rank === 0);
  return (
    <div
      className="rounded-lg bg-black/20 border border-white/5 overflow-hidden"
      data-testid={`card-candidate-${rank}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full p-4 text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xs text-muted-foreground shrink-0">#{rank + 1}</span>
            <span className="font-medium truncate">{candidate.name}</span>
          </div>
          <span className="text-sm font-semibold text-primary shrink-0">
            {Math.round(candidate.likelihoodPct)}%
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-1.5 flex-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400"
              style={{ width: `${Math.min(100, Math.max(2, candidate.likelihoodPct))}%` }}
            />
          </div>
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground shrink-0">
            {CATEGORY_LABELS[candidate.category] ?? candidate.category}
          </span>
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-3 text-sm">
          {candidate.evidenceFor.length > 0 && (
            <div>
              <p className="text-xs font-medium text-emerald-300 mb-1.5">Evidence for</p>
              <ul className="space-y-1">
                {candidate.evidenceFor.map((e, i) => (
                  <li key={i} className="flex gap-2 text-white/85">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {candidate.evidenceAgainst.length > 0 && (
            <div>
              <p className="text-xs font-medium text-red-300 mb-1.5">Evidence against</p>
              <ul className="space-y-1">
                {candidate.evidenceAgainst.map((e, i) => (
                  <li key={i} className="flex gap-2 text-white/70">
                    <XCircle className="w-3.5 h-3.5 text-red-400/80 mt-0.5 shrink-0" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {candidate.confirmSteps.length > 0 && (
            <div>
              <p className="text-xs font-medium text-sky-300 mb-1.5">How to confirm</p>
              <ul className="space-y-1">
                {candidate.confirmSteps.map((s, i) => (
                  <li key={i} className="flex gap-2 text-white/70">
                    <Search className="w-3.5 h-3.5 text-sky-400/80 mt-0.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {candidate.lookalikes.length > 0 && (
            <p className="text-xs text-muted-foreground">
              Don't confuse with: {candidate.lookalikes.join(" · ")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function FollowUpSection({
  questions,
  onRefine,
  isRefining,
}: {
  questions: DiagnosisResult["followUpQuestions"];
  onRefine: (answers: RefineAnswer[]) => void;
  isRefining: boolean;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const filled = questions.filter((q) => (answers[q.id] ?? "").trim().length > 0);

  return (
    <Card className="glass-panel border-white/5">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-primary" />
          Answer these to sharpen the diagnosis
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          These are the unknowns that would most change the ranking. Answer any of them.
        </p>
        <div className="space-y-4">
          {questions.map((q, i) => (
            <div key={q.id}>
              <p className="text-sm text-white/90 mb-0.5">{q.question}</p>
              {q.why && <p className="text-xs text-muted-foreground mb-1.5">Why: {q.why}</p>}
              <Input
                value={answers[q.id] ?? ""}
                onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                placeholder="Your answer…"
                disabled={isRefining}
                className="bg-black/20 border-white/10 h-9 text-sm"
                data-testid={`input-followup-${i}`}
              />
            </div>
          ))}
        </div>
        <Button
          className="w-full mt-4"
          disabled={filled.length === 0 || isRefining}
          onClick={() =>
            onRefine(
              filled.map((q) => ({ questionId: q.id, answer: answers[q.id].trim() })),
            )
          }
          data-testid="button-refine"
        >
          {isRefining ? "Refining…" : `Refine diagnosis with ${filled.length || "your"} answer${filled.length === 1 ? "" : "s"}`}
        </Button>
      </CardContent>
    </Card>
  );
}

function CarePlanSection({ plan }: { plan: DiagnosisResult["carePlan"] }) {
  const groups: Array<[string, string[], string]> = [
    ["Fix now", plan.fixNow, "text-red-300"],
    ["This week", plan.thisWeek, "text-amber-300"],
    ["Keep monitoring", plan.monitor, "text-sky-300"],
    ["Prevent next time", plan.prevent, "text-emerald-300"],
  ];
  const nonEmpty = groups.filter(([, items]) => items.length > 0);
  if (nonEmpty.length === 0) return null;

  return (
    <Card className="glass-panel border-white/5" data-testid="text-care-plan">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          Care Plan
        </h3>
        <div className="space-y-5">
          {nonEmpty.map(([title, items, color]) => (
            <div key={title}>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${color}`}>{title}</p>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex gap-3 p-3 rounded-lg bg-black/20 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm leading-relaxed text-white/90">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function ResultsPanel({ result, error, isAnalyzing, isRefining, onRefine }: ResultsPanelProps) {
  if (isAnalyzing || isRefining) return <LoadingState refining={isRefining} />;

  if (error) {
    return (
      <div className="min-h-[200px] border border-destructive/30 rounded-xl flex flex-col items-center justify-center text-center p-8 bg-destructive/5">
        <ShieldAlert className="w-10 h-10 text-destructive mb-4" />
        <h4 className="text-lg font-medium mb-2">Analysis failed</h4>
        <p className="text-sm text-muted-foreground max-w-sm" data-testid="text-error">
          {error}
        </p>
        <p className="text-xs text-muted-foreground mt-3">
          No made-up results here — when the analysis can't run, you see the real reason.
        </p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-[400px] border border-white/5 rounded-xl flex flex-col items-center justify-center text-center p-8 bg-black/20">
        <AlertTriangle className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
        <p className="text-muted-foreground max-w-sm">
          Add photos and plant details, then run the analysis to get a ranked diagnosis with
          evidence — not a canned answer.
        </p>
      </div>
    );
  }

  if (result.status === "not_plant") {
    return (
      <div className="min-h-[300px] border border-white/10 rounded-xl flex flex-col items-center justify-center text-center p-8 bg-black/20">
        <Camera className="w-10 h-10 text-muted-foreground mb-4" />
        <h4 className="text-lg font-medium mb-2" data-testid="text-diagnosis">
          That doesn't look like a cannabis plant
        </h4>
        <p className="text-sm text-muted-foreground max-w-sm">
          {result.photoQualityFeedback || "Try again with clear photos of the plant in question."}
        </p>
      </div>
    );
  }

  const isHealthy = result.status === "healthy";
  const isInsufficient = result.status === "insufficient";

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
      {/* Primary verdict */}
      <Card className={`glass-panel overflow-hidden relative ${isHealthy ? "border-emerald-500/30" : "border-primary/30"}`}>
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <p className="text-sm font-medium text-muted-foreground">
              {isHealthy ? "Verdict" : isInsufficient ? "Verdict" : "Most likely cause"}
            </p>
            <div className="flex gap-2 shrink-0">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20" data-testid="text-confidence">
                {Math.round(result.confidencePct)}% confidence
              </Badge>
              {!isHealthy && !isInsufficient && (
                <Badge variant="outline" className={URGENCY_STYLES[result.urgency]} data-testid="badge-urgency">
                  {result.urgency} urgency
                </Badge>
              )}
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" data-testid="text-diagnosis">
            {isHealthy
              ? "Plant looks healthy"
              : isInsufficient
                ? "Not enough to diagnose yet"
                : result.primaryDiagnosis ?? "See candidates below"}
          </h2>
          {result.confidenceRationale && (
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-confidence-rationale">
              {result.confidenceRationale}
            </p>
          )}
          {result.photoQualityFeedback && (
            <p className="text-xs text-muted-foreground mt-3 flex gap-1.5">
              <Camera className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              {result.photoQualityFeedback}
            </p>
          )}
        </CardContent>
      </Card>

      {/* What the model saw */}
      {result.observations.length > 0 && (
        <Card className="glass-panel border-white/5">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" />
              What the AI saw in your photos
            </h3>
            <ul className="space-y-2" data-testid="list-observations">
              {result.observations.map((o, i) => (
                <li key={i} className="flex gap-2 text-sm text-white/85">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Ranked differential */}
      {result.candidates.length > 0 && (
        <Card className="glass-panel border-white/5">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-1">Ranked causes</h3>
            <p className="text-xs text-muted-foreground mb-4">
              Every candidate the evidence supports — tap one to see the case for and against it.
            </p>
            <div className="space-y-3">
              {result.candidates.map((c, i) => (
                <CandidateCard key={`${c.id}-${i}`} candidate={c} rank={i} />
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Combined causes */}
      {result.interactions.length > 0 && (
        <Card className="glass-panel border-amber-500/20">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Link2 className="w-5 h-5 text-amber-300" />
              How these problems connect
            </h3>
            <div className="space-y-3" data-testid="list-interactions">
              {result.interactions.map((ix, i) => (
                <div key={i} className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                  <p className="text-xs font-medium text-amber-300 mb-1">{ix.causes.join(" + ")}</p>
                  <p className="text-sm text-white/85">{ix.explanation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Follow-up refine loop */}
      {result.followUpQuestions.length > 0 && (
        <FollowUpSection questions={result.followUpQuestions} onRefine={onRefine} isRefining={isRefining} />
      )}

      <CarePlanSection plan={result.carePlan} />

      <p className="text-xs text-muted-foreground text-center px-4">
        AI analysis of photos has limits — it can't see roots, pH, or EC. Use the "how to confirm"
        steps before making big changes.
      </p>
    </div>
  );
}
