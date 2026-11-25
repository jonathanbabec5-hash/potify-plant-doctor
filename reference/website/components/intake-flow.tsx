import { useState } from "react";
import { usePlantDoctorCases } from "@/hooks/use-plant-doctor-cases";
import { IntakeForm } from "./intake-form";
import { DiagnosisResult } from "./diagnosis-result";
import { PlantDoctorResponse, PlantDoctorServiceHealth, PlantDoctorRequest } from "@workspace/api-client-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function IntakeFlow({ health }: { health?: PlantDoctorServiceHealth }) {
  const [result, setResult] = useState<PlantDoctorResponse | null>(null);
  const [request, setRequest] = useState<PlantDoctorRequest | null>(null);
  const { saveCase } = usePlantDoctorCases();
  const { toast } = useToast();
  const [caseSavedId, setCaseSavedId] = useState<string | null>(null);

  const handleDiagnosed = (res: PlantDoctorResponse, req: PlantDoctorRequest) => {
    setResult(res);
    setRequest(req);
    setCaseSavedId(null);
  };

  const handleReset = () => {
    setResult(null);
    setRequest(null);
    setCaseSavedId(null);
  };

  const handleSave = () => {
    if (!result || !request) return;
    const summary = `${request.intake.species} - ${request.intake.symptomLocation}`;
    try {
      const id = saveCase({
        species: request.intake.species,
        summary,
        result,
        intake: request.intake,
      });
      setCaseSavedId(id);
      toast({ title: "Case saved", description: "Available in Cases on this device." });
    } catch {
      toast({ title: "Could not save case", description: "Device storage is unavailable or full.", variant: "destructive" });
    }
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!result || !request ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="print:hidden"
          >
            <IntakeForm health={health} onDiagnosed={handleDiagnosed} initialData={request} />
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="mb-6 flex justify-between items-center print:hidden">
              <Button variant="ghost" onClick={handleReset} className="text-muted-foreground hover:text-foreground group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                New Diagnosis
              </Button>
            </div>
            
            <DiagnosisResult 
              result={result} 
              request={request}
              onSave={handleSave}
              isSaved={!!caseSavedId}
              onFollowUp={(answers) => {
                // Return to form with appended notes to resubmit
                if (request) {
                  const updatedReq: PlantDoctorRequest = {
                    ...request,
                    intake: {
                      ...request.intake,
                      additionalNotes: request.intake.additionalNotes 
                        ? `${request.intake.additionalNotes}\n\nFollow up response: ${answers}`
                        : `Follow up response: ${answers}`
                    },
                    followUpContext: `Questions: ${result.followUpQuestions.join("; ")}. Answers: ${answers}`
                  };
                  setRequest(updatedReq);
                  setResult(null); // Back to form
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
