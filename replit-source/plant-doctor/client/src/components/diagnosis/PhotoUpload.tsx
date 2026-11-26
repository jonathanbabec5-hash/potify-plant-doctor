import { useEffect, useMemo, useRef } from "react";
import { UploadCloud, X, Plus } from "lucide-react";

const MAX_PHOTOS = 3;

interface PhotoUploadProps {
  photos: File[];
  onChange: (photos: File[]) => void;
  disabled?: boolean;
}

export function PhotoUpload({ photos, onChange, disabled }: PhotoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const previews = useMemo(() => photos.map((f) => URL.createObjectURL(f)), [photos]);
  useEffect(() => () => previews.forEach((u) => URL.revokeObjectURL(u)), [previews]);

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const incoming = Array.from(list).filter((f) => f.type.startsWith("image/") || f.type === "");
    const next = [...photos, ...incoming].slice(0, MAX_PHOTOS);
    onChange(next);
    if (inputRef.current) inputRef.current.value = "";
  };

  const removeAt = (idx: number) => {
    onChange(photos.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        disabled={disabled}
        onChange={(e) => addFiles(e.target.files)}
        className="hidden"
        data-testid="input-plant-photo"
      />

      {photos.length === 0 ? (
        <button
          type="button"
          disabled={disabled}
          onClick={() => inputRef.current?.click()}
          className="w-full border-2 border-dashed rounded-xl p-8 text-center transition-colors border-white/10 hover:border-primary/30 hover:bg-white/5 disabled:opacity-50"
          data-testid="button-open-photo-picker"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <UploadCloud className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium">Add 1–3 photos</p>
              <p className="text-sm text-muted-foreground mt-1">
                Whole plant + close-up of the damage. Natural light beats grow-light purple.
              </p>
            </div>
          </div>
        </button>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {previews.map((src, i) => (
            <div key={src} className="relative aspect-square rounded-lg overflow-hidden border border-white/10 group">
              <img
                src={src}
                alt={`Plant photo ${i + 1}`}
                className="w-full h-full object-cover"
                data-testid={`img-photo-preview-${i}`}
              />
              <button
                type="button"
                onClick={() => removeAt(i)}
                disabled={disabled}
                className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-destructive transition-colors"
                aria-label={`Remove photo ${i + 1}`}
                data-testid={`button-remove-photo-${i}`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
          {photos.length < MAX_PHOTOS && (
            <button
              type="button"
              disabled={disabled}
              onClick={() => inputRef.current?.click()}
              className="aspect-square rounded-lg border-2 border-dashed border-white/10 hover:border-primary/30 hover:bg-white/5 flex flex-col items-center justify-center gap-1 text-muted-foreground transition-colors disabled:opacity-50"
              data-testid="button-add-photo"
            >
              <Plus className="w-5 h-5" />
              <span className="text-xs">Add photo</span>
            </button>
          )}
        </div>
      )}

      {photos.length > 0 && (
        <p className="text-xs text-muted-foreground mt-2">
          {photos.length}/{MAX_PHOTOS} photos · more angles = better diagnosis
        </p>
      )}
    </div>
  );
}
