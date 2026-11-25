import { useState } from "react";
import { 
  usePlantDoctorListConditions, 
  getPlantDoctorListConditionsQueryKey,
  usePlantDoctorGetCondition,
  getPlantDoctorGetConditionQueryKey,
  PlantConditionSummary
} from "@workspace/api-client-react";
import { Search, BookOpen, AlertCircle, ArrowLeft, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function ConditionLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Always use queryKey with useQuery hook wrappers from Orval
  const { data: listData, isLoading: isListLoading } = usePlantDoctorListConditions(
    { query, category },
    { query: { queryKey: getPlantDoctorListConditionsQueryKey({ query, category }) } }
  );

  if (selectedId) {
    return <ConditionDetail id={selectedId} onBack={() => setSelectedId(null)} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="font-serif text-2xl text-primary tracking-widest uppercase">Condition Library</h2>
          <p className="text-muted-foreground font-mono text-xs mt-1">
            Browse {listData?.total || 0} documented profiles.
          </p>
        </div>
        
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
          <Input 
            placeholder="Search conditions..." 
            className="pl-9 bg-background/50 border-border/50"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {listData?.categories && listData.categories.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-8">
          <Badge 
            variant={category === "" ? "default" : "outline"}
            className="cursor-pointer font-mono text-[10px] uppercase tracking-wider"
            onClick={() => setCategory("")}
          >
            All
          </Badge>
          {listData.categories.map(c => (
            <Badge 
              key={c}
              variant={category === c ? "default" : "outline"}
              className="cursor-pointer font-mono text-[10px] uppercase tracking-wider"
              onClick={() => setCategory(c)}
            >
              {c}
            </Badge>
          ))}
        </div>
      )}

      {isListLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map(i => <Skeleton key={i} className="h-32 rounded-xl bg-card" />)}
        </div>
      ) : listData?.conditions && listData.conditions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {listData.conditions.map(c => (
            <div 
              key={c.id} 
              className="p-5 rounded-xl border border-border/50 bg-card/40 hover:bg-card hover:border-primary/50 transition-all cursor-pointer group flex flex-col justify-between"
              onClick={() => setSelectedId(c.id)}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground border-border">
                    {c.category}
                  </Badge>
                </div>
                <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">{c.name}</h3>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-2 font-mono opacity-80">
                  First sign: {c.firstSign}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border/30 text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
                {c.symptomLocations.slice(0, 2).join(", ")}{c.symptomLocations.length > 2 ? "..." : ""}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-border rounded-xl">
          <BookOpen className="w-8 h-8 text-muted-foreground mx-auto mb-4 opacity-50" />
          <p className="text-muted-foreground font-mono text-sm">No conditions match your search.</p>
        </div>
      )}
    </div>
  );
}

function ConditionDetail({ id, onBack }: { id: string, onBack: () => void }) {
  const { data, isLoading } = usePlantDoctorGetCondition(id, {
    query: { queryKey: getPlantDoctorGetConditionQueryKey(id) }
  });

  if (isLoading) return <div className="py-20 flex justify-center"><Skeleton className="w-full max-w-3xl h-[600px] rounded-xl" /></div>;
  if (!data) return <div className="py-20 text-center text-destructive">Failed to load profile.</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Button variant="ghost" size="sm" onClick={onBack} className="text-muted-foreground hover:text-foreground -ml-3">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Library
      </Button>

      <div className="space-y-4">
        <Badge className="font-mono uppercase tracking-widest">{data.category}</Badge>
        <h1 className="font-serif text-4xl text-foreground tracking-wide">{data.name}</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-card rounded-xl border border-border/50">
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Affected Parts</span>
          <div className="text-sm">{data.symptomLocations.join(", ")}</div>
        </div>
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Risk Stages</span>
          <div className="text-sm">{data.growthStages.join(", ")}</div>
        </div>
        <div className="col-span-2">
          <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Favorable Conditions</span>
          <div className="text-sm">{data.favorableConditions.join(", ")}</div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="font-serif text-xl text-primary tracking-widest uppercase border-b border-border/50 pb-2">Clinical Presentation</h3>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{data.symptomProgression}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background/50 p-5 rounded border border-border/30">
            <h4 className="font-mono text-xs uppercase tracking-widest mb-3 text-foreground">Observable Signs</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              {data.observableSigns.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div className="bg-background/50 p-5 rounded border border-border/30">
            <h4 className="font-mono text-xs uppercase tracking-widest mb-3 text-foreground">Lookalikes</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {data.lookalikes.map((l, i) => (
                <li key={i}>
                  <strong className="text-foreground font-medium block">{l.condition}</strong>
                  <span className="opacity-80 text-xs">{l.differentiator}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6 pt-6 border-t border-border/50">
        <h3 className="font-serif text-xl text-primary tracking-widest uppercase border-b border-border/50 pb-2">Protocol</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-3 text-foreground">Immediate Actions</h4>
            <div className="flex flex-wrap gap-2">
              {data.immediateActions.map((a, i) => <Badge key={i} variant="secondary" className="font-normal">{a}</Badge>)}
            </div>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-3 text-foreground">Specific Treatments</h4>
            <div className="space-y-3">
              {data.treatments.map((t, i) => (
                <div key={i} className="flex gap-4 p-3 border border-border/30 rounded bg-card/20 text-sm">
                  <div className="w-1/3 text-muted-foreground font-medium border-r border-border/50 pr-4">{t.situation}</div>
                  <div className="w-2/3">{t.treatment}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-4 border-l-2 border-destructive bg-destructive/5 rounded-r">
               <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-destructive flex items-center">
                 <AlertCircle className="w-3 h-3 mr-2" /> Strictly Avoid
               </h4>
               <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                 {data.avoid.map((a, i) => <li key={i}>{a}</li>)}
               </ul>
             </div>
             <div>
               <h4 className="font-mono text-xs uppercase tracking-widest mb-2 text-foreground">Recovery Timeline</h4>
               <p className="text-sm text-muted-foreground">{data.recoveryTimeline}</p>
             </div>
          </div>
        </div>
      </div>

      {data.sources && data.sources.length > 0 && (
        <div className="pt-8 border-t border-border/30">
          <h4 className="font-mono text-[10px] uppercase tracking-widest mb-3 text-muted-foreground">External Sources</h4>
          <div className="flex flex-wrap gap-4">
            {data.sources.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline flex items-center">
                {s.label} <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
