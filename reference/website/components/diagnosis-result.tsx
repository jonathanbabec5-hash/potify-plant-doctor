import { useState } from "react";
import { PlantDoctorResponse, PlantDoctorRequest } from "@workspace/api-client-react";
import { AlertTriangle, CheckCircle2, Info, XCircle, Beaker, ShieldAlert, ArrowRight, Printer, Save, Copy, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function DiagnosisResult({ 
  result, 
  request,
  onSave,
  isSaved,
  onFollowUp
}: { 
  result: PlantDoctorResponse, 
  request: PlantDoctorRequest,
  onSave: () => void,
  isSaved: boolean,
  onFollowUp?: (answers: string) => void
}) {
  const { toast } = useToast();
  const [followUpAnswer, setFollowUpAnswer] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const carePaths = result.diagnoses.map((diagnosis, index) => `CARE PATH ${index + 1}: ${diagnosis.conditionName} (${diagnosis.confidenceLow}-${diagnosis.confidenceHigh}%)
Why it surfaced:
${diagnosis.evidenceFor.map((item) => `- ${item}`).join("\n")}
Verify next:
${diagnosis.lookalikesRuledOut.slice(0, 2).map((item) => `- ${item}`).join("\n")}
First actions:
${diagnosis.immediateActions.map((item) => `- ${item}`).join("\n")}
Avoid:
${diagnosis.avoid.map((item) => `- ${item}`).join("\n")}`).join("\n\n");
    const text = `POTIFY Plant Doctor Care Plan
Species: ${request.intake.species}
Assessment: ${result.evidenceSummary}
${result.insufficientEvidence ? `Observation first: ${result.insufficientEvidenceReason ?? "Check for change before treating."}
Next checks:
${result.followUpQuestions.map(q => `- ${q}`).join("\n")}
` : ""}
${carePaths || "No ranked care path is available yet. Gather the requested follow-up observations and try again."}
`;
    if (!navigator.clipboard?.writeText) {
      toast({ title: "Copy failed", description: "Clipboard access is unavailable. Try Print instead.", variant: "destructive" });
      return;
    }
    navigator.clipboard.writeText(text)
      .then(() => toast({ title: "Care plan copied", description: result.insufficientEvidence ? "The observation checks were copied for sharing." : "The ranked care paths were copied for sharing." }))
      .catch(() => toast({ title: "Copy failed", description: "Clipboard access is unavailable. Try Print instead.", variant: "destructive" }));
  };

  const primaryDiagnosis = result.diagnoses[0];
  const secondaryDiagnoses = result.diagnoses.slice(1);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* ACTIONS ROW (HIDDEN ON PRINT) */}
      <div className="flex flex-wrap gap-3 justify-end print:hidden">
        <Button variant="outline" size="sm" onClick={handlePrint} className="border-border text-foreground hover:bg-border/30">
          <Printer className="w-4 h-4 mr-2" />
          Print
        </Button>
        <Button variant="outline" size="sm" onClick={handleCopy} className="border-border text-foreground hover:bg-border/30">
          <Copy className="w-4 h-4 mr-2" />
          Copy Care Plan
        </Button>
        <Button size="sm" onClick={onSave} disabled={isSaved} className={isSaved ? "bg-primary/20 text-primary border border-primary/30" : ""}>
          {isSaved ? <CheckCircle2 className="w-4 h-4 mr-2" /> : <Save className="w-4 h-4 mr-2" />}
          {isSaved ? "Saved to Cases" : "Save Case"}
        </Button>
      </div>

      {/* ALERTS */}
      <div className="space-y-3">
        <div className="text-sm text-muted-foreground border-l-2 border-primary/50 pl-4">
          <strong className="text-foreground">Assessment: </strong>{result.evidenceSummary}
          {request.imageBase64 && !result.imageAnalysisIncluded && <p className="mt-1">The photo was not used in this assessment.</p>}
        </div>
        {!result.aiGrounded && (
          <div className="bg-muted/50 border border-muted-foreground/30 p-4 rounded-md flex gap-3 text-muted-foreground text-sm">
            <Info className="w-5 h-5 shrink-0" />
            <div>
              <strong className="font-mono uppercase tracking-wider block mb-1">Library Matching Mode</strong>
              AI analysis was unavailable. This assessment is based on the reported observations and library matching only; any photo was not analyzed.
            </div>
          </div>
        )}

        {result.safetyNotice && (
          <div className="bg-destructive/10 border border-destructive/50 p-4 rounded-md flex gap-3 text-destructive-foreground text-sm">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <div>
              <strong className="font-mono uppercase tracking-wider block mb-1">Safety Notice</strong>
              {result.safetyNotice}
            </div>
          </div>
        )}

        {(result.isolationRequired || result.labTestingRequired || result.professionalConsultRequired) && (
          <div className="flex flex-wrap gap-2">
            {result.isolationRequired && <Badge variant="destructive" className="uppercase tracking-widest font-mono text-[10px]">Quarantine Required</Badge>}
            {result.labTestingRequired && <Badge variant="secondary" className="uppercase tracking-widest font-mono text-[10px] bg-solana/20 text-solana border-solana/30">Lab Test Advised</Badge>}
            {result.professionalConsultRequired && <Badge variant="outline" className="uppercase tracking-widest font-mono text-[10px] text-accent border-accent/50">Pro Consult Advised</Badge>}
          </div>
        )}
      </div>

      {/* INSUFFICIENT EVIDENCE FLOW */}
      {result.insufficientEvidence ? (
        <div className="premium-card p-6 md:p-10 rounded-xl border border-primary/30">
          <div className="flex items-start gap-4 mb-6">
            <Info className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div>
              <h2 className="font-serif text-2xl text-primary tracking-widest uppercase mb-2">Observe First</h2>
              <p className="text-muted-foreground">{result.insufficientEvidenceReason || "We need more information to provide a safe and accurate diagnosis."}</p>
            </div>
          </div>

          {result.followUpQuestions.length > 0 && (
            <div className="mt-8 border-t border-border/50 pt-8 print:hidden">
              <h3 className="font-mono text-sm text-primary uppercase tracking-widest mb-4">Please clarify the following:</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-foreground font-medium">
                {result.followUpQuestions.map((q, i) => <li key={i}>{q}</li>)}
              </ul>
              
                {onFollowUp && <Textarea
                placeholder="Provide details here..." 
                className="min-h-[120px] bg-background/50 mb-4"
                value={followUpAnswer}
                onChange={e => setFollowUpAnswer(e.target.value)}
              />}
              {onFollowUp && <Button onClick={() => onFollowUp(followUpAnswer)} disabled={!followUpAnswer.trim()}>
                Update Intake & Resubmit
              </Button>}
            </div>
          )}
        </div>
      ) : (
        <>
          {/* PRIMARY DIAGNOSIS */}
          {primaryDiagnosis && (
            <div className="premium-card rounded-xl overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(74,158,90,0.05)]">
              <div className="p-6 md:p-8 border-b border-border/50 bg-background/40">
                <div className="flex justify-between items-start gap-4 flex-wrap mb-4">
                  <div>
                    <Badge variant="outline" className="uppercase font-mono text-[10px] tracking-widest text-primary border-primary/50 mb-3">
                      Primary Diagnosis
                    </Badge>
                    <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide">{primaryDiagnosis.conditionName}</h2>
                    <p className="text-muted-foreground font-mono text-sm mt-2">{primaryDiagnosis.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-light text-primary">{primaryDiagnosis.confidenceLow}% - {primaryDiagnosis.confidenceHigh}%</div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Confidence Match</div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-mono text-xs text-foreground uppercase tracking-widest border-b border-border/50 pb-2 mb-4 flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-2 text-primary" /> Evidence For
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {primaryDiagnosis.evidenceFor.map((e, i) => <li key={i} className="flex items-start gap-2"><span className="text-primary mt-1 block w-1 h-1 rounded-full shrink-0"/> {e}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-xs text-foreground uppercase tracking-widest border-b border-border/50 pb-2 mb-4 flex items-center">
                    <XCircle className="w-3 h-3 mr-2 text-destructive" /> Evidence Against
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {primaryDiagnosis.evidenceAgainst.length > 0 ? 
                      primaryDiagnosis.evidenceAgainst.map((e, i) => <li key={i} className="flex items-start gap-2"><span className="text-destructive mt-1 block w-1 h-1 rounded-full shrink-0"/> {e}</li>) :
                      <li className="italic opacity-50">None significant.</li>
                    }
                  </ul>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-background/60 border-t border-border/50">
                <h3 className="font-serif text-2xl text-primary tracking-widest uppercase mb-6">Action Plan</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-mono text-xs text-foreground uppercase tracking-widest mb-3">Immediate Interventions (Next 24h)</h4>
                    <div className="grid gap-3">
                      {primaryDiagnosis.immediateActions.map((a, i) => (
                        <div key={i} className="p-4 rounded border border-border bg-card text-sm flex gap-3 items-start">
                          <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-mono text-xs text-foreground uppercase tracking-widest mb-3">7-Day Protocol</h4>
                      <ul className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground marker:text-primary">
                        {primaryDiagnosis.sevenDayPlan.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs text-foreground uppercase tracking-widest mb-3">Escalation Triggers</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {primaryDiagnosis.escalationCriteria.map((c, i) => <li key={i} className="flex items-start gap-2"><AlertTriangle className="w-3 h-3 mt-1 text-accent shrink-0"/> {c}</li>)}
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Expected recovery: {primaryDiagnosis.recoveryTimeline}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-mono text-xs text-foreground uppercase tracking-widest mb-3">Verification Checks</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {primaryDiagnosis.lookalikesRuledOut.slice(0, 3).map((check, i) => <li key={i} className="flex items-start gap-2"><Beaker className="w-3 h-3 mt-1 text-primary shrink-0" />{check}</li>)}
                        {primaryDiagnosis.monitoringThresholds.slice(0, 2).map((check, i) => <li key={`monitor-${i}`} className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 mt-1 text-primary shrink-0" />{check}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs text-destructive uppercase tracking-widest mb-3">What to Avoid</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {primaryDiagnosis.avoid.map((item, i) => <li key={i} className="flex items-start gap-2"><XCircle className="w-3 h-3 mt-1 text-destructive shrink-0" />{item}</li>)}
                      </ul>
                    </div>
                  </div>

                  {primaryDiagnosis.lookalikesRuledOut.length > 0 && (
                    <div>
                        <h4 className="font-mono text-xs text-foreground uppercase tracking-widest mb-3 pt-4 border-t border-border/30">Look-alikes to check</h4>
                      <div className="flex flex-wrap gap-2">
                        {primaryDiagnosis.lookalikesRuledOut.map((l, i) => (
                          <Badge key={i} variant="outline" className="text-muted-foreground border-border bg-background/50">{l}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* SECONDARY DIAGNOSES */}
          {secondaryDiagnoses.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl tracking-widest uppercase text-muted-foreground px-2">Ranked Care Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {secondaryDiagnoses.map((diag, idx) => (
                  <div key={idx} className="p-5 rounded-lg border border-border bg-card/30">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-primary/70">Care Path {idx + 2}</span>
                        <h4 className="font-medium text-foreground mt-1">{diag.conditionName}</h4>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">{diag.confidenceLow}-{diag.confidenceHigh}%</span>
                    </div>
                    <div className="space-y-3 text-xs text-muted-foreground">
                      <div>
                        <p className="font-mono uppercase tracking-widest text-[9px] text-primary/70 mb-1">Why it surfaced</p>
                        <ul className="space-y-1">{diag.evidenceFor.slice(0, 2).map((e, i) => <li key={i}>• {e}</li>)}</ul>
                      </div>
                      <div>
                        <p className="font-mono uppercase tracking-widest text-[9px] text-foreground/70 mb-1">Verify next</p>
                        <p>{diag.lookalikesRuledOut[0] || diag.monitoringThresholds[0] || "Compare the symptom pattern before treating."}</p>
                      </div>
                      <div className="border-t border-border/50 pt-3">
                        <p className="font-mono uppercase tracking-widest text-[9px] text-primary/70 mb-1">First action</p>
                        <p>{diag.immediateActions[0] || "Monitor and document daily."}</p>
                      </div>
                      <div>
                        <p className="font-mono uppercase tracking-widest text-[9px] text-destructive/80 mb-1">Avoid</p>
                        <p>{diag.avoid[0] || "Avoid stacking multiple treatments before verifying the cause."}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FOLLOW UP SHARPENING */}
          {onFollowUp && result.followUpQuestions.length > 0 && !result.insufficientEvidence && (
            <div className="premium-card p-6 rounded-xl border border-border/50 mt-12 print:hidden">
              <div className="flex items-start gap-3 mb-4">
                <Beaker className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <h3 className="font-mono text-sm text-foreground uppercase tracking-widest">Sharpen this diagnosis</h3>
                  <p className="text-xs text-muted-foreground mt-1">Answer these questions to narrow the confidence interval.</p>
                </div>
              </div>
              <ul className="list-disc pl-5 mb-4 space-y-1 text-sm text-foreground/80">
                {result.followUpQuestions.map((q, i) => <li key={i}>{q}</li>)}
              </ul>
              <Textarea 
                placeholder="Your answers..." 
                className="min-h-[80px] bg-background/50 mb-4 text-sm"
                value={followUpAnswer}
                onChange={e => setFollowUpAnswer(e.target.value)}
              />
              <Button variant="secondary" size="sm" onClick={() => onFollowUp(followUpAnswer)} disabled={!followUpAnswer.trim()}>
                Refine Analysis
              </Button>
            </div>
          )}
        </>
      )}

    </div>
  );
}
