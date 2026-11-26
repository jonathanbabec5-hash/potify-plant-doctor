import { useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Leaf, ArrowRight, Sparkles, PlugZap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { PhotoUpload } from "@/components/diagnosis/PhotoUpload";
import { IntakeForm, type IntakeDraft } from "@/components/diagnosis/IntakeForm";
import { ResultsPanel } from "@/components/diagnosis/ResultsPanel";
import { requestDiagnosis, requestRefinement } from "@/lib/diagnosis-api";
import { intakeSchema, type DiagnosisResult, type Intake, type RefineAnswer } from "@shared/diagnosis";
import heroBg from "@/assets/images/hero-bg.png";

interface ProviderStatusResponse {
  configured: boolean;
  provider: string | null;
  knowledgeBase?: { causes: number; interactions: number };
}

export default function Home() {
  const [photos, setPhotos] = useState<File[]>([]);
  const [intakeDraft, setIntakeDraft] = useState<IntakeDraft>({});
  const [description, setDescription] = useState("");
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const { data: providerInfo } = useQuery<ProviderStatusResponse>({
    queryKey: ["/api/diagnose/status"],
  });

  const kbCauses = providerInfo?.knowledgeBase?.causes ?? 46;

  const buildIntake = (): Intake | null => {
    if (!intakeDraft.stage || !intakeDraft.medium) return null;
    const candidate: Record<string, unknown> = {};
    for (const [k, v] of Object.entries({ ...intakeDraft, symptomsText: description })) {
      if (typeof v === "string" && v.trim() === "") continue;
      candidate[k] = v;
    }
    const parsed = intakeSchema.safeParse(candidate);
    return parsed.success ? parsed.data : null;
  };

  const onSuccess = (r: DiagnosisResult) => {
    setResult(r);
    setError(null);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };
  const onError = (e: Error) => {
    setError(e.message);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const analyzeMutation = useMutation({ mutationFn: requestDiagnosis, onSuccess, onError });
  const refineMutation = useMutation({ mutationFn: requestRefinement, onSuccess, onError });

  const isBusy = analyzeMutation.isPending || refineMutation.isPending;

  const handleAnalyze = () => {
    const intake = buildIntake();
    if (!intake || photos.length === 0) return;
    setResult(null);
    setError(null);
    analyzeMutation.mutate({ photos, intake });
  };

  const handleRefine = (answers: RefineAnswer[]) => {
    const intake = buildIntake();
    if (!intake || photos.length === 0 || !result) return;
    refineMutation.mutate({ photos, intake, previousResult: result, answers });
  };

  const missingRequirements: string[] = [];
  if (photos.length === 0) missingRequirements.push("at least one photo");
  if (!intakeDraft.stage) missingRequirements.push("growth stage");
  if (!intakeDraft.medium) missingRequirements.push("grow medium");

  return (
    <div className="min-h-screen bg-background text-foreground dark selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Botanical tech background"
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <Sparkles className="w-4 h-4" />
            <span>Vision AI · {kbCauses}-cause knowledge base</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-150">
            Understand Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
              Cannabis Plants
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300">
            A vision model examines your photos against {kbCauses} documented problems —
            deficiencies, pests, mold, pH, environment — and how they combine. You get a ranked
            diagnosis with the evidence for and against each cause, not a canned answer.
          </p>
        </div>
      </section>

      {/* Main Application Area */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        {providerInfo && !providerInfo.configured && (
          <div className="mb-8 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4" data-testid="banner-no-provider">
            <PlugZap className="w-5 h-5 text-amber-300 mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-amber-200">AI provider not connected yet</p>
              <p className="text-sm text-amber-200/70">
                The diagnosis engine is built and waiting — it just needs an AI provider key
                (xAI, OpenAI, or Gemini) to start analyzing photos. Nothing will be faked in the
                meantime.
              </p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column: Input */}
          <div className="space-y-6">
            <Card className="glass-panel border-white/5 overflow-hidden">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs">1</span>
                    Photos
                  </h3>
                  <PhotoUpload photos={photos} onChange={setPhotos} disabled={isBusy} />
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs">2</span>
                    Your grow
                  </h3>
                  <IntakeForm value={intakeDraft} onChange={(patch) => setIntakeDraft((d) => ({ ...d, ...patch }))} disabled={isBusy} />
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs">3</span>
                    What are you seeing?
                  </h3>
                  <Textarea
                    placeholder="E.g., lower leaves turning yellow between the veins, started about a week ago after I added a bloom booster…"
                    className="min-h-[100px] bg-black/20 border-white/10 focus:border-primary/50 resize-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={isBusy}
                    data-testid="input-symptoms-description"
                  />
                </div>

                <div>
                  <Button
                    className="w-full py-6 text-lg group relative overflow-hidden"
                    size="lg"
                    disabled={missingRequirements.length > 0 || isBusy}
                    onClick={handleAnalyze}
                    data-testid="button-analyze"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 flex items-center gap-2">
                      {analyzeMutation.isPending ? (
                        <>Analyzing photos…</>
                      ) : (
                        <>
                          Analyze Plant Health
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </Button>
                  {missingRequirements.length > 0 && !isBusy && (
                    <p className="text-xs text-muted-foreground text-center mt-2" data-testid="text-missing-requirements">
                      Needed: {missingRequirements.join(", ")}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Results */}
          <div className="space-y-6" ref={resultsRef}>
            <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3 mb-6">
              <Leaf className="w-6 h-6 text-primary" />
              Diagnostics Report
            </h3>
            <ResultsPanel
              result={result}
              error={error}
              isAnalyzing={analyzeMutation.isPending}
              isRefining={refineMutation.isPending}
              onRefine={handleRefine}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
