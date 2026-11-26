import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  GROWTH_STAGES,
  MEDIUMS,
  ENVIRONMENTS,
  STAGE_LABELS,
  MEDIUM_LABELS,
  type Intake,
} from "@shared/diagnosis";

export type IntakeDraft = Partial<Intake>;

interface IntakeFormProps {
  value: IntakeDraft;
  onChange: (patch: IntakeDraft) => void;
  disabled?: boolean;
}

const ENV_LABELS: Record<(typeof ENVIRONMENTS)[number], string> = {
  indoor: "Indoor",
  outdoor: "Outdoor",
  greenhouse: "Greenhouse",
};

function TextField({
  id,
  label,
  placeholder,
  value,
  onChange,
  disabled,
  testid,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string | undefined;
  onChange: (v: string) => void;
  disabled?: boolean;
  testid: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs text-muted-foreground">
        {label}
      </Label>
      <Input
        id={id}
        value={value ?? ""}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="bg-black/20 border-white/10 h-9 text-sm"
        data-testid={testid}
      />
    </div>
  );
}

export function IntakeForm({ value, onChange, disabled }: IntakeFormProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">
            Growth stage <span className="text-primary">*</span>
          </Label>
          <Select
            value={value.stage}
            onValueChange={(v) => onChange({ stage: v as Intake["stage"] })}
            disabled={disabled}
          >
            <SelectTrigger className="bg-black/20 border-white/10 h-9 text-sm" data-testid="select-stage">
              <SelectValue placeholder="Select stage" />
            </SelectTrigger>
            <SelectContent>
              {GROWTH_STAGES.map((s) => (
                <SelectItem key={s} value={s}>
                  {STAGE_LABELS[s]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs text-muted-foreground">
            Grow medium <span className="text-primary">*</span>
          </Label>
          <Select
            value={value.medium}
            onValueChange={(v) => onChange({ medium: v as Intake["medium"] })}
            disabled={disabled}
          >
            <SelectTrigger className="bg-black/20 border-white/10 h-9 text-sm" data-testid="select-medium">
              <SelectValue placeholder="Select medium" />
            </SelectTrigger>
            <SelectContent>
              {MEDIUMS.map((m) => (
                <SelectItem key={m} value={m}>
                  {MEDIUM_LABELS[m]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label className="text-xs text-muted-foreground">Environment</Label>
        <Select
          value={value.environment}
          onValueChange={(v) => onChange({ environment: v as Intake["environment"] })}
          disabled={disabled}
        >
          <SelectTrigger className="bg-black/20 border-white/10 h-9 text-sm" data-testid="select-environment">
            <SelectValue placeholder="Indoor / outdoor / greenhouse" />
          </SelectTrigger>
          <SelectContent>
            {ENVIRONMENTS.map((e) => (
              <SelectItem key={e} value={e}>
                {ENV_LABELS[e]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Collapsible>
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 transition-colors [&[data-state=open]>svg]:rotate-180" data-testid="button-toggle-details">
          <span>
            More details <span className="text-primary/80">— each one sharpens the diagnosis</span>
          </span>
          <ChevronDown className="w-4 h-4 transition-transform" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3">
          <div className="grid grid-cols-2 gap-3">
            <TextField id="ph-in" label="Input pH" placeholder="e.g. 6.2" value={value.phIn} onChange={(v) => onChange({ phIn: v })} disabled={disabled} testid="input-ph-in" />
            <TextField id="ph-runoff" label="Runoff pH" placeholder="e.g. 6.8" value={value.phRunoff} onChange={(v) => onChange({ phRunoff: v })} disabled={disabled} testid="input-ph-runoff" />
            <TextField id="ec" label="Feed EC / PPM" placeholder="e.g. 1.6 EC / 800 ppm" value={value.ecPpm} onChange={(v) => onChange({ ecPpm: v })} disabled={disabled} testid="input-ec" />
            <TextField id="feed-strength" label="Feed strength" placeholder="e.g. half label dose" value={value.feedStrength} onChange={(v) => onChange({ feedStrength: v })} disabled={disabled} testid="input-feed-strength" />
            <TextField id="nutrient-line" label="Nutrients used" placeholder="e.g. Fox Farm trio" value={value.nutrientLine} onChange={(v) => onChange({ nutrientLine: v })} disabled={disabled} testid="input-nutrient-line" />
            <TextField id="watering" label="Watering routine" placeholder="e.g. 1L every 3 days" value={value.wateringFrequency} onChange={(v) => onChange({ wateringFrequency: v })} disabled={disabled} testid="input-watering" />
            <TextField id="light-type" label="Light" placeholder="e.g. 240W LED" value={value.lightType} onChange={(v) => onChange({ lightType: v })} disabled={disabled} testid="input-light-type" />
            <TextField id="light-distance" label="Light distance" placeholder="e.g. 45 cm" value={value.lightDistance} onChange={(v) => onChange({ lightDistance: v })} disabled={disabled} testid="input-light-distance" />
            <TextField id="temperature" label="Temps (day/night)" placeholder="e.g. 26/19°C" value={value.temperature} onChange={(v) => onChange({ temperature: v })} disabled={disabled} testid="input-temperature" />
            <TextField id="humidity" label="Humidity" placeholder="e.g. 55%" value={value.humidity} onChange={(v) => onChange({ humidity: v })} disabled={disabled} testid="input-humidity" />
            <TextField id="onset-when" label="First noticed" placeholder="e.g. 5 days ago" value={value.onsetWhen} onChange={(v) => onChange({ onsetWhen: v })} disabled={disabled} testid="input-onset-when" />
            <TextField id="onset-where" label="Where it started" placeholder="e.g. lower leaves" value={value.onsetWhere} onChange={(v) => onChange({ onsetWhere: v })} disabled={disabled} testid="input-onset-where" />
            <TextField id="spread" label="Spreading how fast?" placeholder="e.g. slowly upward" value={value.spreadSpeed} onChange={(v) => onChange({ spreadSpeed: v })} disabled={disabled} testid="input-spread-speed" />
            <TextField id="recent-changes" label="Recent changes" placeholder="e.g. new booster last week" value={value.recentChanges} onChange={(v) => onChange({ recentChanges: v })} disabled={disabled} testid="input-recent-changes" />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
