import { useState } from "react";
import { usePlantDoctorCases } from "@/hooks/use-plant-doctor-cases";
import { Clock, Trash2, FolderOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

export function SavedCases({ onViewCase }: { onViewCase: (id: string) => void }) {
  const { cases, deleteCase } = usePlantDoctorCases();
  
  if (cases.length === 0) {
    return (
      <div className="text-center py-24 border border-dashed border-border rounded-xl bg-card/10">
        <FolderOpen className="w-10 h-10 text-muted-foreground mx-auto mb-4 opacity-50" />
        <h3 className="font-serif text-xl text-foreground mb-2 tracking-wide">No Saved Cases</h3>
        <p className="text-muted-foreground font-mono text-xs">Diagnostic records saved to this device will appear here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="font-serif text-2xl text-primary tracking-widest uppercase mb-2">Device Records</h2>
        <p className="text-muted-foreground font-mono text-xs tracking-wide">Cases are stored securely on this device's local storage.</p>
      </div>

      <div className="grid gap-4">
        {cases.map((c) => (
          <div key={c.id} className="premium-card p-5 rounded-xl border border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-colors hover:border-primary/40">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="outline" className="font-mono text-[9px] uppercase tracking-widest border-border text-muted-foreground">
                  {c.species}
                </Badge>
                <span className="text-[10px] font-mono text-muted-foreground flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {formatDistanceToNow(new Date(c.date), { addSuffix: true })}
                </span>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-1">{c.summary}</h3>
              <p className="text-sm text-primary font-medium">
                Dx: {c.result.diagnoses[0]?.conditionName || "Inconclusive"} 
                <span className="text-muted-foreground font-normal ml-2 font-mono text-xs">
                  ({c.result.diagnoses[0]?.confidenceLow}-{c.result.diagnoses[0]?.confidenceHigh}%)
                </span>
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                onClick={(e) => {
                  e.stopPropagation();
                  if (confirm("Delete this case?")) deleteCase(c.id);
                }}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
              <Button 
                variant="secondary"
                className="font-mono text-xs uppercase tracking-widest group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                onClick={() => onViewCase(c.id)}
              >
                Open Case <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
