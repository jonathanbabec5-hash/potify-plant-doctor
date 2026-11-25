import { useState, useEffect } from "react";
import type { PlantDoctorResponse, PlantDoctorRequest } from "@workspace/api-client-react";

export interface SavedCase {
  id: string;
  date: string;
  species: string;
  summary: string;
  result: PlantDoctorResponse;
  intake?: PlantDoctorRequest["intake"];
}

const STORAGE_KEY = "potify-plant-doctor-cases";
const CASES_CHANGED = "potify-plant-doctor-cases-changed";

function readCases(): SavedCase[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  const parsed: unknown = JSON.parse(stored);
  if (!Array.isArray(parsed)) throw new Error("Saved cases are not in a valid format.");
  return parsed as SavedCase[];
}

export function usePlantDoctorCases() {
  const [cases, setCases] = useState<SavedCase[]>([]);

  useEffect(() => {
    const refresh = () => {
      try { setCases(readCases()); }
      catch (e) { console.error("Failed to load saved cases", e); }
    };
    refresh();
    window.addEventListener(CASES_CHANGED, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(CASES_CHANGED, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const saveCase = (newCase: Omit<SavedCase, "id" | "date">) => {
    const caseItem: SavedCase = {
      ...newCase,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    };
    const updated = [caseItem, ...readCases()];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event(CASES_CHANGED));
    return caseItem.id;
  };

  const deleteCase = (id: string) => {
    const updated = readCases().filter(c => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event(CASES_CHANGED));
  };

  return { cases, saveCase, deleteCase };
}
