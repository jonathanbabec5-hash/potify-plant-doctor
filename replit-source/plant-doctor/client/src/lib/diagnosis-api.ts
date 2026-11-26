import {
  diagnosisResultSchema,
  type DiagnosisResult,
  type Intake,
  type RefineAnswer,
} from "@shared/diagnosis";
import { prepareImageForUpload } from "./image-compress";

async function postDiagnosisForm(url: string, form: FormData): Promise<DiagnosisResult> {
  const res = await fetch(url, { method: "POST", body: form, credentials: "include" });

  let payload: unknown = null;
  try {
    payload = await res.json();
  } catch {
    // non-JSON response body
  }

  if (!res.ok) {
    const message =
      payload && typeof payload === "object" && "error" in payload && typeof (payload as any).error === "string"
        ? (payload as any).error
        : `Analysis failed (${res.status})`;
    throw new Error(message);
  }

  const parsed = diagnosisResultSchema.safeParse(payload);
  if (!parsed.success) {
    throw new Error("The server returned an unexpected response format.");
  }
  return parsed.data;
}

async function buildForm(photos: File[], intake: Intake): Promise<FormData> {
  const form = new FormData();
  const prepared = await Promise.all(photos.map(prepareImageForUpload));
  for (const file of prepared) form.append("photos", file, file.name);
  form.append("intake", JSON.stringify(intake));
  return form;
}

export async function requestDiagnosis(args: { photos: File[]; intake: Intake }): Promise<DiagnosisResult> {
  const form = await buildForm(args.photos, args.intake);
  return postDiagnosisForm("/api/diagnose", form);
}

export async function requestRefinement(args: {
  photos: File[];
  intake: Intake;
  previousResult: DiagnosisResult;
  answers: RefineAnswer[];
}): Promise<DiagnosisResult> {
  const form = await buildForm(args.photos, args.intake);
  form.append("previousResult", JSON.stringify(args.previousResult));
  form.append("answers", JSON.stringify(args.answers));
  return postDiagnosisForm("/api/diagnose/refine", form);
}
