import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  PlantDoctorIntakeDataSetting, 
  PlantDoctorRequestImageMimeType,
  usePlantDoctorDiagnose,
  PlantDoctorResponse,
  PlantDoctorRequest,
  PlantDoctorServiceHealth
} from "@workspace/api-client-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Upload, X, Sparkles, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  species: z.string().trim().min(2, "Enter a plant name (at least 2 characters)"),
  plantGroup: z.string().min(1, "Plant group is required"),
  growthStage: z.string().min(1, "Growth stage is required"),
  symptoms: z.array(z.string()).min(1, "Choose at least one visible symptom"),
  symptomLocation: z.string().trim().min(3, "Symptom location is required"),
  symptomOnset: z.string().trim().min(2, "Symptom onset is required"),
  setting: z.enum([PlantDoctorIntakeDataSetting.indoor, PlantDoctorIntakeDataSetting.outdoor, PlantDoctorIntakeDataSetting.greenhouse, "none"]).optional().or(z.literal("")),
  growingMedium: z.string().optional(),
  wateringFrequency: z.string().optional(),
  rootZoneMoisture: z.string().optional(),
  drainageQuality: z.string().optional(),
  ph: z.string().optional(),
  nutrients: z.string().optional(),
  temperature: z.string().optional(),
  humidity: z.string().optional(),
  lightSource: z.string().optional(),
  lightHours: z.string().optional(),
  recentChanges: z.string().optional(),
  pestEvidence: z.string().optional(),
  rootEvidence: z.string().optional(),
  additionalNotes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SYMPTOM_OPTIONS = [
  "Yellowing or pale leaves",
  "Brown tips or scorched edges",
  "Wilting or drooping",
  "Spots, lesions, or blotches",
  "Curling, cupping, or twisting",
  "Stunted growth",
  "Holes, chewing, or missing tissue",
  "Sticky residue, webbing, or insects",
  "Mold, powder, or fuzzy growth",
  "Soft stem, rot, or foul odor",
  "No obvious damage / checking normal variation",
];

export function IntakeForm({ 
  health, 
  onDiagnosed, 
  initialData 
}: { 
  health?: PlantDoctorServiceHealth, 
  onDiagnosed: (res: PlantDoctorResponse, req: PlantDoctorRequest) => void,
  initialData?: PlantDoctorRequest | null
}) {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const imageReadVersion = useRef(0);
  const [imageError, setImageError] = useState("");
  const [imageValidating, setImageValidating] = useState(false);
  const [imageFile, setImageFile] = useState<{ base64: string, mime: PlantDoctorRequestImageMimeType, preview: string } | null>(
    initialData?.imageBase64 ? {
      base64: initialData.imageBase64,
      mime: initialData.imageMimeType || PlantDoctorRequestImageMimeType["image/jpeg"],
      preview: `data:${initialData.imageMimeType};base64,${initialData.imageBase64}`
    } : null
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      species: initialData?.intake.species || "",
      plantGroup: initialData?.intake.plantGroup || "",
      growthStage: initialData?.intake.growthStage || "",
      symptoms: initialData?.intake.symptoms || [],
      symptomLocation: initialData?.intake.symptomLocation || "",
      symptomOnset: initialData?.intake.symptomOnset || "",
      setting: initialData?.intake.setting || "",
      growingMedium: initialData?.intake.growingMedium || "",
      wateringFrequency: initialData?.intake.wateringFrequency || "",
      rootZoneMoisture: initialData?.intake.rootZoneMoisture || "",
      drainageQuality: initialData?.intake.drainageQuality || "",
      ph: initialData?.intake.ph || "",
      nutrients: initialData?.intake.nutrients || "",
      temperature: initialData?.intake.temperature || "",
      humidity: initialData?.intake.humidity || "",
      lightSource: initialData?.intake.lightSource || "",
      lightHours: initialData?.intake.lightHours || "",
      recentChanges: initialData?.intake.recentChanges || "",
      pestEvidence: initialData?.intake.pestEvidence || "",
      rootEvidence: initialData?.intake.rootEvidence || "",
      additionalNotes: initialData?.intake.additionalNotes || "",
    }
  });

  const diagnoseMutation = usePlantDoctorDiagnose();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const input = e.currentTarget;
    const version = ++imageReadVersion.current;
    setImageError("");
    setImageFile(null);
    setImageValidating(false);

    if (file.size === 0) {
      e.target.value = "";
      setImageError("This photo is empty. Choose a non-empty JPEG, PNG, or WebP photo.");
      return;
    }

    if (/\.hei[cf]$/i.test(file.name) || /image\/hei[cf]/i.test(file.type)) {
      e.target.value = "";
      setImageError("HEIC/HEIF photos are not supported. Export or convert the photo to JPEG, PNG, or WebP and try again.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      e.target.value = "";
      setImageError("Photo exceeds 5MB. Choose a smaller image.");
      toast({ title: "File too large", description: "Maximum file size is 5MB.", variant: "destructive" });
      return;
    }

    const mime = file.type;
    if (mime !== "image/jpeg" && mime !== "image/png" && mime !== "image/webp") {
      e.target.value = "";
      setImageError("Unsupported photo format. Choose a JPEG, PNG, or WebP photo (max 5MB).");
      return;
    }

    setImageValidating(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (version !== imageReadVersion.current) return;
      const dataUrl = event.target?.result;
      if (typeof dataUrl !== "string" || !dataUrl.startsWith(`data:${mime};base64,`)) {
        setImageValidating(false);
        input.value = "";
        setImageError("Could not read the photo. Please try another image.");
        return;
      }
      const base64 = dataUrl.split(",")[1];
      if (!base64) {
        setImageValidating(false);
        input.value = "";
        setImageError("This photo has no readable image data. Choose another JPEG, PNG, or WebP photo.");
        return;
      }
      // File.type and the data URL are not proof that the bytes decode as an image.
      // Hold the upload out of request state until the browser decodes it.
      const probe = new Image();
      probe.onload = () => {
        if (version !== imageReadVersion.current) return;
        if (probe.naturalWidth === 0 || probe.naturalHeight === 0) {
          setImageValidating(false);
          input.value = "";
          setImageError("This photo could not be decoded. Choose a valid JPEG, PNG, or WebP image.");
          return;
        }
        setImageFile({
          base64,
          mime: mime as PlantDoctorRequestImageMimeType,
          preview: dataUrl
        });
        setImageValidating(false);
      };
      probe.onerror = () => {
        if (version !== imageReadVersion.current) return;
        setImageValidating(false);
        input.value = "";
        setImageError("This photo could not be decoded. Choose a valid JPEG, PNG, or WebP image.");
      };
      probe.src = dataUrl;
    };
    reader.onerror = () => {
      if (version !== imageReadVersion.current) return;
      setImageValidating(false);
      input.value = "";
      setImageError("Could not read the photo. Please try another image.");
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    imageReadVersion.current++;
    setImageValidating(false);
    setImageFile(null);
    setImageError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (cameraInputRef.current) cameraInputRef.current.value = "";
  };

  const onSubmit = (values: FormValues) => {
    const intake = {
      ...values,
      setting: (values.setting && values.setting !== "none") ? (values.setting as PlantDoctorIntakeDataSetting) : undefined,
    };

    const request: PlantDoctorRequest = {
      intake,
      imageBase64: imageFile?.base64,
      imageMimeType: imageFile?.mime,
      followUpContext: initialData?.followUpContext
    };

    diagnoseMutation.mutate({ data: request }, {
      onSuccess: (res) => {
        onDiagnosed(res, request);
      },
      onError: (err: any) => {
        toast({
          title: "Diagnosis failed",
          description: `${err.message || "The request failed."} Your intake is still here; try Compare Care Paths again.`,
          variant: "destructive"
        });
      }
    });
  };

  const showMoreFields = form.watch("species") !== "" && form.watch("symptomLocation") !== "";

  if (diagnoseMutation.isPending) {
    return (
      <div className="premium-card p-12 rounded-xl flex flex-col items-center justify-center min-h-[400px] border-primary/20">
        <Sparkles className="w-8 h-8 text-primary mb-6 animate-pulse" />
        <h3 className="font-serif text-2xl text-primary tracking-widest mb-2 text-center">ANALYZING PATIENT</h3>
        <p className="mt-6 text-center text-sm text-muted-foreground max-w-sm">
          Waiting for the provider. A transient timeout may be retried once; if AI remains unavailable,
          the result will be labeled library-only and your photo will not be analyzed.
        </p>
      </div>
    );
  }

  return (
    <div className="premium-card rounded-xl p-6 md:p-10 border border-border/50">
      <div className="mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-primary tracking-widest uppercase mb-2">Patient Intake</h2>
        <p className="text-muted-foreground font-mono text-sm tracking-wide">Provide clinical details for precision diagnostics.</p>
      </div>

      {health?.available === false && (
        <div className="mb-8 p-4 bg-destructive/10 border border-destructive/30 rounded-md flex gap-3 text-sm text-destructive-foreground">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <p>The enhanced service is unavailable. Results will use transparent library matching against documented horticultural profiles.</p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          
          {/* REQUIRED FIELDS */}
          <section className="space-y-6">
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest border-b border-border/50 pb-2">I. Primary Indicators (Required)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="plantGroup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Plant Group</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background/50"><SelectValue placeholder="Select plant group" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Houseplant">Houseplant</SelectItem>
                        <SelectItem value="Vegetable or herb">Vegetable or herb</SelectItem>
                        <SelectItem value="Flowering ornamental">Flowering ornamental</SelectItem>
                        <SelectItem value="Fruit or berry">Fruit or berry</SelectItem>
                        <SelectItem value="Tree or shrub">Tree or shrub</SelectItem>
                        <SelectItem value="Succulent or cactus">Succulent or cactus</SelectItem>
                        <SelectItem value="Specialty cultivation">Specialty cultivation</SelectItem>
                        <SelectItem value="Other or unknown">Other or unknown</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="species"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Species / Cultivar</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Monstera Deliciosa, Cannabis Sativa" className="bg-background/50 focus-visible:ring-primary/50" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="growthStage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Growth Stage</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background/50"><SelectValue placeholder="Select stage" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Seedling or newly rooted">Seedling or newly rooted</SelectItem>
                        <SelectItem value="Vegetative growth">Vegetative growth</SelectItem>
                        <SelectItem value="Flowering">Flowering</SelectItem>
                        <SelectItem value="Fruiting">Fruiting</SelectItem>
                        <SelectItem value="Mature or established">Mature or established</SelectItem>
                        <SelectItem value="Dormant">Dormant</SelectItem>
                        <SelectItem value="Unknown">Unknown / not observed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="symptomLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Symptom Location</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Leaves (Upper/New Growth)">Leaves (Upper/New Growth)</SelectItem>
                        <SelectItem value="Leaves (Lower/Old Growth)">Leaves (Lower/Old Growth)</SelectItem>
                        <SelectItem value="Stems/Branches">Stems / Branches</SelectItem>
                        <SelectItem value="Roots/Base">Roots / Base</SelectItem>
                        <SelectItem value="Flowers/Fruit">Flowers / Fruit</SelectItem>
                        <SelectItem value="Whole Plant">Whole Plant</SelectItem>
                        <SelectItem value="Not sure / checking leaf color">Not sure / checking leaf color</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="symptomOnset"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Onset Timeline</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="How quickly did this appear?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Sudden (Overnight)">Sudden (Overnight)</SelectItem>
                        <SelectItem value="Days (1-3 days)">Days (1-3 days)</SelectItem>
                        <SelectItem value="Weeks (1-3 weeks)">Weeks (1-3 weeks)</SelectItem>
                        <SelectItem value="Gradual (Months)">Gradual (Months)</SelectItem>
                        <SelectItem value="Unknown">Unknown / history unavailable</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="symptoms"
              render={({ field }) => {
                const selected = field.value || [];
                return (
                  <FormItem>
                    <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Visible Symptoms — Choose All That Apply</FormLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SYMPTOM_OPTIONS.map((symptom) => {
                        const active = selected.includes(symptom);
                        return (
                          <button
                            key={symptom}
                            type="button"
                            aria-pressed={active}
                            onClick={() => field.onChange(active
                              ? selected.filter((item) => item !== symptom)
                              : symptom.startsWith("No obvious damage")
                                ? [symptom]
                                : [...selected.filter((item) => !item.startsWith("No obvious damage")), symptom])}
                            className={`min-h-11 rounded border px-3 text-left text-sm transition-colors ${active ? "border-primary/60 bg-primary/10 text-foreground" : "border-border/50 bg-background/30 text-muted-foreground hover:border-primary/35"}`}
                          >
                            <span className="mr-2 text-primary">{active ? "✓" : "○"}</span>{symptom}
                          </button>
                        );
                      })}
                    </div>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </section>

          {/* PROGRESSIVE DISCLOSURE */}
          {showMoreFields && (
            <section className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
              <h3 className="font-mono text-xs text-primary uppercase tracking-widest border-b border-border/50 pb-2">II. Clinical Context (Optional but Recommended)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="setting"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Environment</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select environment" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="indoor">Indoor (Tent/Room)</SelectItem>
                          <SelectItem value="outdoor">Outdoor</SelectItem>
                          <SelectItem value="greenhouse">Greenhouse</SelectItem>
                          <SelectItem value="none">Clear Selection</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="growingMedium"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Substrate</FormLabel>
                      <Input placeholder="e.g. Soil, Coco Coir, DWC" className="bg-background/50" {...field} />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="wateringFrequency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Watering Routine</FormLabel>
                      <Input placeholder="e.g. Every 3 days, when dry" className="bg-background/50" {...field} />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="recentChanges"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Recent Changes</FormLabel>
                      <Input placeholder="New nutrients, repotting, temp swing?" className="bg-background/50" {...field} />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 border border-border/30 bg-background/20 rounded-md">
                <FormField
                  control={form.control}
                  name="rootZoneMoisture"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Root-Zone Moisture</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl><SelectTrigger className="bg-background/50"><SelectValue placeholder="Select moisture" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="Bone dry">Bone dry</SelectItem>
                          <SelectItem value="Dry below surface">Dry below surface</SelectItem>
                          <SelectItem value="Evenly moist">Evenly moist</SelectItem>
                          <SelectItem value="Wet or heavy">Wet or heavy</SelectItem>
                          <SelectItem value="Soggy or standing water">Soggy or standing water</SelectItem>
                          <SelectItem value="Unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="drainageQuality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Drainage</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl><SelectTrigger className="bg-background/50"><SelectValue placeholder="Select drainage" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="Fast draining">Fast draining</SelectItem>
                          <SelectItem value="Moderate drainage">Moderate drainage</SelectItem>
                          <SelectItem value="Slow draining">Slow draining</SelectItem>
                          <SelectItem value="No drainage holes or runoff">No drainage holes or runoff</SelectItem>
                          <SelectItem value="Unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ph"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">pH (If Known)</FormLabel>
                      <Input placeholder="e.g. 6.2 or 'not tested'" className="bg-background/50" {...field} />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nutrients"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Fertilizer or Nutrients</FormLabel>
                      <Input placeholder="e.g. balanced feed, last applied 4 days ago" className="bg-background/50" {...field} />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="temperature"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Temperature</FormLabel>
                      <Input placeholder="e.g. 72°F day / 60°F night" className="bg-background/50" {...field} />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="humidity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Humidity</FormLabel>
                      <Input placeholder="e.g. 55% RH or unknown" className="bg-background/50" {...field} />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lightSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Light</FormLabel>
                      <Input placeholder="e.g. bright window, LED, shade" className="bg-background/50" {...field} />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lightHours"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Light Duration</FormLabel>
                      <Input placeholder="e.g. 12 hours or seasonal daylight" className="bg-background/50" {...field} />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pestEvidence"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Pest Evidence</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl><SelectTrigger className="bg-background/50"><SelectValue placeholder="Select pest evidence" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="None seen after inspection">None seen after inspection</SelectItem>
                          <SelectItem value="Insects or eggs seen">Insects or eggs seen</SelectItem>
                          <SelectItem value="Webbing or sticky residue">Webbing or sticky residue</SelectItem>
                          <SelectItem value="Chewing or mines">Chewing or mines</SelectItem>
                          <SelectItem value="Not inspected">Not inspected</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rootEvidence"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Root Evidence</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl><SelectTrigger className="bg-background/50"><SelectValue placeholder="Select root evidence" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="Firm, pale roots">Firm, pale roots</SelectItem>
                          <SelectItem value="Brown, soft, or sour-smelling roots">Brown, soft, or sour-smelling roots</SelectItem>
                          <SelectItem value="Dry, brittle, or circling roots">Dry, brittle, or circling roots</SelectItem>
                          <SelectItem value="Root galls or swelling">Root galls or swelling</SelectItem>
                          <SelectItem value="Not inspected">Not inspected</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="additionalNotes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-xs tracking-wider uppercase text-muted-foreground">Detailed Observations</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the progression, spots, discoloration, pests seen..." className="min-h-[100px] bg-background/50" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </section>
          )}

          {/* PHOTO UPLOAD */}
          <section className="space-y-4">
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest border-b border-border/50 pb-2">III. Visual Evidence (Optional)</h3>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {!imageFile ? (
                <button type="button"
                  className="w-full md:w-64 h-48 border-2 border-dashed border-border/50 rounded-lg flex flex-col items-center justify-center bg-background/20 hover:bg-background/40 hover:border-primary/50 transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-8 h-8 text-muted-foreground mb-3" />
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Upload Photo</span>
                  <span className="text-[10px] text-muted-foreground/60 mt-1">JPEG, PNG, WEBP (Max 5MB)</span>
                </button>
              ) : (
                <div className="relative group w-full md:w-64 h-48 rounded-lg overflow-hidden border border-border">
                  <img src={imageFile.preview} alt="Plant evidence" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-background/80 opacity-100 md:opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="destructive" size="sm" type="button" onClick={removeImage}>
                      <X className="w-4 h-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                </div>
              )}
              <input type="file" ref={fileInputRef} className="hidden" accept="image/jpeg,image/png,image/webp" onChange={handleFileChange} />
              <input type="file" ref={cameraInputRef} className="hidden" accept="image/jpeg,image/png,image/webp" capture="environment" onChange={handleFileChange} />
              <Button type="button" variant="outline" className="min-h-11" onClick={() => cameraInputRef.current?.click()}>
                <Camera className="w-4 h-4 mr-2" /> Take Photo
              </Button>
              
              <div className="flex-1 text-sm text-muted-foreground space-y-2">
                <p>A clear plant photo may help when AI analysis is available. Library-only results do not analyze photos.</p>
                <ul className="list-disc pl-5 font-mono text-xs opacity-70 space-y-1">
                  <li>Ensure the affected area is in focus</li>
                  <li>Use natural or white light if possible</li>
                  <li>Blurry or heavily blurple-lit photos may reduce accuracy</li>
                  <li>Photos are sent for analysis but are not saved in your cases</li>
                </ul>
              </div>
            </div>
            {imageError && <p role="alert" className="text-sm text-destructive">{imageError}</p>}
            {imageValidating && <p role="status" className="text-sm text-muted-foreground">Checking that this photo is readable…</p>}
          </section>

          <div className="flex flex-col-reverse sm:flex-row gap-3">
            <Button type="button" variant="outline" className="min-h-12 sm:w-40 font-mono uppercase tracking-widest text-xs" onClick={() => { form.reset(); removeImage(); }}>
              Reset Intake
            </Button>
            <Button type="submit" className="w-full min-h-14 font-mono uppercase tracking-widest text-sm" disabled={diagnoseMutation.isPending || imageValidating}>
              {diagnoseMutation.isPending ? "Comparing Profiles..." : imageValidating ? "Checking Photo..." : "Compare Care Paths"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
