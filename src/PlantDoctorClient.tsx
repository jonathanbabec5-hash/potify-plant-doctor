"use client";

import { useMemo, useState } from "react";
import {
  CARE_PROFILE_COUNT,
  areaOptions,
  conditionOptions,
  diagnosePlant,
  plantGroupOptions,
  stageOptions,
  symptomOptions,
  type CareResult,
  type DiagnosisInput,
} from "./diagnosis";

const initialInput: DiagnosisInput = {
  plantGroup: "",
  stage: "",
  symptoms: [],
  area: "",
  medium: "unknown",
  moisture: "unknown",
  drainage: "unknown",
  ph: "unknown",
  temperature: "unknown",
  humidity: "unknown",
  light: "unknown",
  recentChange: "unknown",
  pestEvidence: "unknown",
  rootEvidence: "not-seen",
};

type Step = 1 | 2 | 3;
type SelectOptions = ReadonlyArray<readonly [string, string]>;

function SelectField({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: SelectOptions;
  onChange: (value: string) => void;
}) {
  return (
    <label className="doctor-field" htmlFor={id}>
      <span>{label}</span>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>{optionLabel}</option>
        ))}
      </select>
    </label>
  );
}

function ResultCard({ result, rank }: { result: CareResult; rank: number }) {
  return (
    <article className={`doctor-result ${rank === 1 ? "top-result" : ""}`}>
      <div className="result-heading">
        <span className="result-rank">{String(rank).padStart(2, "0")}</span>
        <div>
          <p>{result.category}</p>
          <h3>{result.title}</h3>
        </div>
        <div className="result-tags">
          <span>{result.strength}</span>
          <strong className={`urgency-${result.urgency.toLowerCase().replace(" ", "-")}`}>{result.urgency}</strong>
        </div>
      </div>
      <p className="result-overview">{result.overview}</p>
      <div className="result-columns">
        <section>
          <h4>Why it surfaced</h4>
          <ul>{result.reasons.map((reason) => <li key={reason}>{reason}</li>)}</ul>
        </section>
        <section>
          <h4>Verify next</h4>
          <ol>{result.checks.map((check) => <li key={check}>{check}</li>)}</ol>
        </section>
        <section className="care-actions">
          <h4>Care plan</h4>
          <ol>{result.actions.map((action) => <li key={action}>{action}</li>)}</ol>
        </section>
      </div>
      <p className="avoid-note"><strong>Avoid:</strong> {result.avoid}</p>
    </article>
  );
}

export default function PlantDoctorClient() {
  const [step, setStep] = useState<Step>(1);
  const [input, setInput] = useState<DiagnosisInput>(initialInput);
  const [results, setResults] = useState<CareResult[]>([]);
  const [error, setError] = useState("");
  const [copyState, setCopyState] = useState("Copy care plan");

  const selectedSymptomLabels = useMemo(
    () => symptomOptions.filter(([value]) => input.symptoms.includes(value)).map(([, label]) => label),
    [input.symptoms],
  );

  function setField(field: keyof DiagnosisInput, value: string) {
    setInput((current) => ({ ...current, [field]: value }));
  }

  function toggleSymptom(value: string) {
    setInput((current) => ({
      ...current,
      symptoms: current.symptoms.includes(value)
        ? current.symptoms.filter((symptom) => symptom !== value)
        : [...current.symptoms, value],
    }));
  }

  function continueToConditions() {
    if (!input.plantGroup || !input.stage || !input.area || input.symptoms.length === 0) {
      setError("Choose a plant group, growth stage, affected area, and at least one symptom.");
      return;
    }
    setError("");
    setStep(2);
    document.getElementById("doctor-workbench")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function runDiagnosis() {
    setResults(diagnosePlant(input));
    setStep(3);
    setCopyState("Copy care plan");
    window.setTimeout(() => {
      document.getElementById("doctor-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  async function copyPlan() {
    const copy = [
      "POTIFY Plant Doctor — care plan",
      `Observed: ${selectedSymptomLabels.join(", ")}`,
      "",
      ...results.flatMap((result, index) => [
        `${index + 1}. ${result.title} — ${result.strength} · ${result.urgency}`,
        result.overview,
        "Verify:",
        ...result.checks.map((check) => `- ${check}`),
        "Care plan:",
        ...result.actions.map((action) => `- ${action}`),
        `Avoid: ${result.avoid}`,
        "",
      ]),
      "Decision support only. Confirm serious disease, contamination, or chemical exposure with a qualified local horticultural professional or diagnostic lab.",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(copy);
      setCopyState("Care plan copied");
      window.setTimeout(() => setCopyState("Copy care plan"), 1800);
    } catch {
      setCopyState("Select and copy manually");
    }
  }

  function resetDoctor() {
    setInput(initialInput);
    setResults([]);
    setError("");
    setStep(1);
    document.getElementById("doctor-workbench")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <section className="doctor-hero">
        <div className="doctor-hero-grid" aria-hidden="true" />
        <div className="doctor-hero-copy">
          <p className="eyebrow">POTIFY utility · working diagnostic guide</p>
          <h1>Your plant has clues.<br /><em>Read them in order.</em></h1>
          <p className="doctor-lead">Plant Doctor compares visible symptoms with root-zone, light, climate, feeding, and pest evidence. It ranks likely causes, shows why each one surfaced, and builds a situation-specific care plan.</p>
          <div className="doctor-hero-actions">
            <a className="button primary" href="#doctor-workbench">Start a diagnosis<span>↓</span></a>
            <a className="button secondary" href="#doctor-method">How it works<span>→</span></a>
          </div>
        </div>
        <aside className="doctor-coverage" aria-label="Plant Doctor coverage">
          <div><span>CARE LIBRARY</span><strong>{CARE_PROFILE_COUNT}</strong><small>cause profiles</small></div>
          <div><span>INPUT LAYERS</span><strong>13</strong><small>evidence fields</small></div>
          <div><span>OUTPUT</span><strong>3</strong><small>ranked care paths</small></div>
          <p>Hundreds of distinct condition combinations are handled by one transparent scoring engine.</p>
        </aside>
      </section>

      <section className="doctor-method" id="doctor-method">
        <article><span>01</span><h2>Observe</h2><p>Name what changed and where it began. Location matters as much as color.</p></article>
        <article><span>02</span><h2>Cross-check</h2><p>Compare the canopy with moisture, drainage, roots, climate, pH, and pest evidence.</p></article>
        <article><span>03</span><h2>Correct gently</h2><p>Verify the strongest pattern, change one root cause, and judge recovery by new growth.</p></article>
      </section>

      <section className="doctor-section" id="doctor-workbench">
        <div className="doctor-section-heading">
          <div><p className="eyebrow">Interactive workbench</p><h2>Build the evidence trail.</h2></div>
          <p>The engine does not identify a plant from a single color. Complete both observation layers for a more useful result.</p>
        </div>

        <div className="doctor-shell">
          <div className="doctor-progress" aria-label={`Step ${step} of 3`}>
            {[1, 2, 3].map((number) => (
              <button
                key={number}
                type="button"
                className={step === number ? "active" : step > number ? "complete" : ""}
                onClick={() => {
                  if (number < step || (number === 2 && input.symptoms.length)) setStep(number as Step);
                }}
                aria-current={step === number ? "step" : undefined}
              >
                <i>{step > number ? "✓" : `0${number}`}</i>
                <span>{number === 1 ? "Observe" : number === 2 ? "Conditions" : "Care plan"}</span>
              </button>
            ))}
          </div>

          {step === 1 && (
            <div className="doctor-panel">
              <div className="panel-intro"><span>STEP 01</span><h3>What do you see?</h3><p>Choose every symptom that is clearly present. A pattern is more useful than a single damaged leaf.</p></div>

              <div className="doctor-core-fields">
                <SelectField id="plant-group" label="Plant group" value={input.plantGroup} options={[["", "Choose a plant group"], ...plantGroupOptions]} onChange={(value) => setField("plantGroup", value)} />
                <SelectField id="growth-stage" label="Growth stage" value={input.stage} options={[["", "Choose a growth stage"], ...stageOptions]} onChange={(value) => setField("stage", value)} />
                <SelectField id="affected-area" label="Where did it begin?" value={input.area} options={[["", "Choose the affected area"], ...areaOptions]} onChange={(value) => setField("area", value)} />
              </div>

              <fieldset className="symptom-picker">
                <legend>Visible symptoms <span>Select all that apply</span></legend>
                <div>
                  {symptomOptions.map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      className={input.symptoms.includes(value) ? "selected" : ""}
                      onClick={() => toggleSymptom(value)}
                      aria-pressed={input.symptoms.includes(value)}
                    >
                      <i aria-hidden="true">{input.symptoms.includes(value) ? "✓" : "+"}</i>{label}
                    </button>
                  ))}
                </div>
              </fieldset>

              {error && <p className="doctor-error" role="alert">{error}</p>}
              <div className="doctor-panel-actions"><span>{input.symptoms.length} symptom{input.symptoms.length === 1 ? "" : "s"} selected</span><button type="button" className="button primary" onClick={continueToConditions}>Continue to conditions <b>→</b></button></div>
            </div>
          )}

          {step === 2 && (
            <div className="doctor-panel">
              <div className="panel-intro"><span>STEP 02</span><h3>What surrounds the symptom?</h3><p>Choose “unsure” where needed. Measured evidence improves ranking, but the guide remains usable without specialized equipment.</p></div>
              <div className="condition-grid">
                <SelectField id="medium" label="Growing medium" value={input.medium} options={conditionOptions.medium} onChange={(value) => setField("medium", value)} />
                <SelectField id="moisture" label="Root-zone moisture" value={input.moisture} options={conditionOptions.moisture} onChange={(value) => setField("moisture", value)} />
                <SelectField id="drainage" label="Drainage" value={input.drainage} options={conditionOptions.drainage} onChange={(value) => setField("drainage", value)} />
                <SelectField id="ph" label="Root-zone pH" value={input.ph} options={conditionOptions.ph} onChange={(value) => setField("ph", value)} />
                <SelectField id="temperature" label="Temperature" value={input.temperature} options={conditionOptions.temperature} onChange={(value) => setField("temperature", value)} />
                <SelectField id="humidity" label="Humidity" value={input.humidity} options={conditionOptions.humidity} onChange={(value) => setField("humidity", value)} />
                <SelectField id="light" label="Light level" value={input.light} options={conditionOptions.light} onChange={(value) => setField("light", value)} />
                <SelectField id="recent-change" label="Recent change" value={input.recentChange} options={conditionOptions.recentChange} onChange={(value) => setField("recentChange", value)} />
                <SelectField id="pest-evidence" label="Pest evidence" value={input.pestEvidence} options={conditionOptions.pestEvidence} onChange={(value) => setField("pestEvidence", value)} />
                <SelectField id="root-evidence" label="Root evidence" value={input.rootEvidence} options={conditionOptions.rootEvidence} onChange={(value) => setField("rootEvidence", value)} />
              </div>
              <div className="observation-summary"><span>Observed pattern</span><p>{selectedSymptomLabels.join(" · ")}</p></div>
              <div className="doctor-panel-actions"><button type="button" className="button secondary" onClick={() => setStep(1)}>← Back to symptoms</button><button type="button" className="button primary" onClick={runDiagnosis}>Build my care plan <b>→</b></button></div>
            </div>
          )}

          {step === 3 && (
            <div className="doctor-panel result-panel" id="doctor-results" aria-live="polite">
              <div className="results-intro">
                <div><span>STEP 03</span><h3>Your ranked care paths</h3><p>Start by verifying result one. If its checks fail, move to the next pattern rather than treating every possibility.</p></div>
                <div><button type="button" className="button secondary" onClick={copyPlan}>{copyState}</button><button type="button" className="button secondary" onClick={resetDoctor}>Start over</button></div>
              </div>
              <div className="doctor-results-list">
                {results.map((result, index) => <ResultCard key={result.id} result={result} rank={index + 1} />)}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="doctor-safety" id="doctor-safety">
        <div><p className="eyebrow">Use the result responsibly</p><h2>Evidence first. One change at a time.</h2></div>
        <div>
          <p>This tool is horticultural decision support, not a lab test. Symptoms overlap across plant species, and local water, climate, disease pressure, and product rules matter.</p>
          <ul>
            <li>Isolate visible pests, mold, or soft rot before handling healthy plants.</li>
            <li>Never consume visibly moldy or chemically contaminated plant material.</li>
            <li>Use pesticides and fertilizers only as labeled for the plant and location.</li>
            <li>For rapid collapse, repeated crop loss, or uncertain exposure, contact a local extension service, licensed horticulturist, or plant diagnostic lab.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
