export type DiagnosisInput = {
  plantGroup: string;
  stage: string;
  symptoms: string[];
  area: string;
  medium: string;
  moisture: string;
  drainage: string;
  ph: string;
  temperature: string;
  humidity: string;
  light: string;
  recentChange: string;
  pestEvidence: string;
  rootEvidence: string;
};

export type CareResult = {
  id: string;
  title: string;
  category: string;
  urgency: "Monitor" | "Act soon" | "Isolate";
  strength: "Strong pattern" | "Useful pattern" | "Possible pattern";
  overview: string;
  reasons: string[];
  checks: string[];
  actions: string[];
  avoid: string;
};

export const plantGroupOptions = [
  ["indoor-foliage", "Indoor foliage plant"],
  ["succulent", "Succulent or cactus"],
  ["edible", "Vegetable or culinary herb"],
  ["flowering", "Flowering or fruiting plant"],
  ["woody", "Tree, shrub, or woody perennial"],
  ["seedling", "Seedling or propagation"],
] as const;

export const stageOptions = [
  ["establishing", "Establishing or recently rooted"],
  ["active", "Active leafy growth"],
  ["flowering", "Flowering or fruiting"],
  ["mature", "Mature or maintenance growth"],
] as const;

export const symptomOptions = [
  ["yellowing", "Yellow leaves"],
  ["interveinal", "Green veins, pale tissue"],
  ["brown-spots", "Brown or rust-colored spots"],
  ["crispy-edges", "Crispy tips or edges"],
  ["curling-up", "Edges curling upward"],
  ["clawing-down", "Dark leaves clawing down"],
  ["drooping", "Drooping or wilting"],
  ["pale-new", "Pale new growth"],
  ["purple-red", "Purple or red color"],
  ["slow-growth", "Slow or stalled growth"],
  ["leaf-holes", "Holes or chewed edges"],
  ["stippling", "Fine pale stippling"],
  ["sticky", "Sticky residue"],
  ["white-powder", "White powder on leaves"],
  ["gray-fuzz", "Gray or fuzzy growth"],
  ["dark-soft", "Dark, soft, or collapsing tissue"],
  ["webbing", "Fine webbing"],
  ["tiny-fliers", "Tiny flying insects"],
  ["distorted-new", "Twisted or distorted new growth"],
  ["bleached", "Bleached or washed-out patches"],
] as const;

export const areaOptions = [
  ["lower", "Lower or older leaves"],
  ["upper", "Upper or newest growth"],
  ["whole", "Whole plant"],
  ["roots", "Stem base, crown, or roots"],
  ["flowers", "Flowers, buds, or fruit"],
  ["patches", "Scattered patches"],
] as const;

export const conditionOptions = {
  medium: [
    ["potting-soil", "Potting soil"],
    ["ground-soil", "Garden soil"],
    ["coco", "Coco or soilless mix"],
    ["hydro", "Hydroponic system"],
    ["bark", "Bark or orchid mix"],
    ["unknown", "Unsure"],
  ],
  moisture: [
    ["stays-wet", "Stays wet for a long time"],
    ["even", "Evenly moist with some dryback"],
    ["dry-fast", "Dries very quickly"],
    ["bone-dry", "Frequently becomes very dry"],
    ["unknown", "Unsure"],
  ],
  drainage: [
    ["fast", "Water exits freely"],
    ["slow", "Water drains slowly"],
    ["none", "Container has no drainage"],
    ["unknown", "Unsure"],
  ],
  ph: [
    ["low", "Below the target range"],
    ["target", "Within the target range"],
    ["high", "Above the target range"],
    ["unknown", "Not measured"],
  ],
  temperature: [
    ["cold", "Cool or cold stress likely"],
    ["comfortable", "Generally comfortable"],
    ["hot", "Hot or heat spikes"],
    ["unknown", "Unsure"],
  ],
  humidity: [
    ["dry", "Very dry air"],
    ["balanced", "Moderate and stable"],
    ["humid", "Humid or condensation present"],
    ["unknown", "Unsure"],
  ],
  light: [
    ["low", "Dim or shaded"],
    ["balanced", "Appropriate and stable"],
    ["intense", "Very bright or close to a lamp"],
    ["unknown", "Unsure"],
  ],
  recentChange: [
    ["transplant", "Repotted or transplanted"],
    ["more-feed", "Feed strength increased"],
    ["more-light", "Light intensity increased"],
    ["moved", "Moved to a new location"],
    ["weather", "Sharp weather or temperature swing"],
    ["none", "No major change"],
    ["unknown", "Unsure"],
  ],
  pestEvidence: [
    ["webbing", "Webbing or tiny moving dots"],
    ["black-specks", "Black specks or silvery scars"],
    ["sticky", "Sticky residue or clustered insects"],
    ["fliers", "Small dark flies near the medium"],
    ["bumps", "Fixed bumps on stems or leaves"],
    ["none", "No pest evidence seen"],
    ["unknown", "Unsure"],
  ],
  rootEvidence: [
    ["healthy", "Firm, light-colored roots"],
    ["soft", "Brown or soft roots"],
    ["odor", "Sour or swampy odor"],
    ["crowded", "Roots circle the pot or fill it tightly"],
    ["not-seen", "Roots were not inspected"],
  ],
} as const;

type Signal = {
  field: keyof DiagnosisInput;
  values: string[];
  weight: number;
  reason: string;
};

type CareProfile = {
  id: string;
  title: string;
  category: string;
  urgency: CareResult["urgency"];
  overview: string;
  signals: Signal[];
  conflicts?: Signal[];
  checks: string[];
  actions: string[];
  avoid: string;
};

const signal = (
  field: keyof DiagnosisInput,
  values: string[],
  weight: number,
  reason: string,
): Signal => ({ field, values, weight, reason });

const careProfiles: CareProfile[] = [
  {
    id: "overwatering",
    title: "Root-zone oxygen stress",
    category: "Water and roots",
    urgency: "Act soon",
    overview: "A saturated root zone can look like thirst because oxygen-starved roots stop moving water efficiently.",
    signals: [signal("symptoms", ["drooping", "yellowing", "slow-growth"], 4, "Droop, yellowing, or stalled growth fits oxygen stress"), signal("moisture", ["stays-wet"], 5, "The medium stays wet for an extended period"), signal("drainage", ["slow", "none"], 4, "Drainage is restricted"), signal("area", ["lower", "whole"], 2, "The pattern affects older leaves or the whole plant")],
    checks: ["Lift the container and compare its weight with a known dry container.", "Check whether the top layer is dry while the lower root zone remains wet.", "Confirm every drainage opening is clear and the pot never sits in runoff."],
    actions: ["Pause watering until the root zone reaches an appropriate dryback for this plant type.", "Increase gentle air exchange around the container and empty standing runoff.", "If the mix remains saturated for days, move to a clean, airier medium while disturbing healthy roots as little as possible."],
    avoid: "Do not add fertilizer to a saturated root zone or water again simply because leaves are drooping.",
  },
  {
    id: "underwatering",
    title: "Water deficit",
    category: "Water and roots",
    urgency: "Act soon",
    overview: "A dry root ball loses pressure quickly, producing limp leaves, crisp margins, and slowed growth.",
    signals: [signal("symptoms", ["drooping", "crispy-edges", "slow-growth"], 4, "Wilt, crisp tissue, or slow growth fits water deficit"), signal("moisture", ["bone-dry", "dry-fast"], 5, "The medium becomes very dry"), signal("drainage", ["fast"], 2, "Water passes through quickly"), signal("plantGroup", ["seedling"], 2, "Young roots have little moisture reserve")],
    checks: ["Probe below the surface; dry peat can repel water while appearing wet on top.", "Look for a gap between the root ball and container wall.", "Compare morning and evening posture to see whether heat accelerates wilting."],
    actions: ["Rehydrate slowly in two or three passes so the full root ball absorbs water.", "Let excess water drain, then use container weight and root-zone feel to set the next watering.", "Add a light mulch outdoors or reduce excessive airflow around very small containers."],
    avoid: "Avoid leaving the pot standing in water after rehydration or switching to a rigid calendar schedule.",
  },
  {
    id: "root-rot",
    title: "Root rot or severe root decline",
    category: "Water and roots",
    urgency: "Isolate",
    overview: "Soft, dark, foul-smelling roots point to advanced root damage and microbial decay rather than a simple watering miss.",
    signals: [signal("rootEvidence", ["soft", "odor"], 8, "Soft roots or a sour odor is a high-value root-rot signal"), signal("symptoms", ["drooping", "yellowing", "dark-soft", "slow-growth"], 3, "The canopy symptoms fit declining roots"), signal("moisture", ["stays-wet"], 4, "Persistent saturation favors root decline"), signal("area", ["roots", "whole"], 3, "The issue centers on the crown, roots, or whole plant")],
    checks: ["Inspect several roots, not only one stained section; healthy roots are usually firm for their species.", "Smell the medium near the crown and check for a soft stem base.", "Review water temperature and aeration in hydro systems."],
    actions: ["Separate the plant and sanitize tools before using them elsewhere.", "Remove clearly dead root material with clean tools and move viable tissue into fresh, well-aerated medium.", "Correct standing water, blocked drainage, excessive reservoir warmth, or weak hydro aeration before replanting."],
    avoid: "Do not reuse the old medium or return contaminated tools to healthy plants without cleaning them.",
  },
  {
    id: "compaction",
    title: "Compacted or poorly aerated medium",
    category: "Water and roots",
    urgency: "Act soon",
    overview: "Dense medium can stay wet in the center, shed water at the edges, and limit fine-root growth at the same time.",
    signals: [signal("drainage", ["slow", "none"], 5, "Water movement through the root zone is restricted"), signal("symptoms", ["slow-growth", "yellowing", "drooping"], 3, "The canopy shows reduced root performance"), signal("rootEvidence", ["not-seen"], 1, "Root condition still needs inspection"), signal("medium", ["potting-soil", "ground-soil"], 2, "Soil structure can compact over time")],
    checks: ["Time how long irrigation takes to enter and leave the root zone.", "Push a clean skewer through several areas and feel for dense layers.", "Check whether roots occupy only the outside of a heavy, wet core."],
    actions: ["Open blocked drainage and remove standing runoff immediately.", "At the next appropriate repot, use a structure suited to the species with durable air space.", "For garden soil, improve structure gradually and avoid working it while waterlogged."],
    avoid: "Avoid repeatedly poking or tearing through a living root ball as a substitute for a proper medium correction.",
  },
  {
    id: "rootbound",
    title: "Root-bound container",
    category: "Water and roots",
    urgency: "Act soon",
    overview: "A tightly occupied container can dry too fast, resist even watering, and limit new growth.",
    signals: [signal("rootEvidence", ["crowded"], 8, "Circling or densely packed roots directly support this pattern"), signal("moisture", ["dry-fast", "bone-dry"], 4, "The root zone loses water quickly"), signal("symptoms", ["slow-growth", "drooping", "yellowing"], 3, "Growth and hydration symptoms fit a crowded root zone"), signal("medium", ["potting-soil", "coco", "bark"], 2, "The plant is in a container medium")],
    checks: ["Slide the root ball out carefully and check whether roots form a dense wall.", "Look for water channeling directly down the pot edge.", "Compare canopy size with container volume and species habit."],
    actions: ["Move one practical pot size larger using compatible fresh medium.", "Gently free only the outer circling roots when the species tolerates it.", "Water the newly potted root ball evenly and shelter it from extreme conditions during recovery."],
    avoid: "Avoid jumping to an oversized container that will remain wet far longer than the active roots can use.",
  },
  {
    id: "transplant-shock",
    title: "Transplant or relocation shock",
    category: "Environmental change",
    urgency: "Monitor",
    overview: "A recent move can briefly reduce water uptake while roots and leaves adjust to a new environment.",
    signals: [signal("recentChange", ["transplant", "moved"], 6, "Symptoms followed a transplant or move"), signal("symptoms", ["drooping", "yellowing", "slow-growth"], 3, "The response fits an adjustment period"), signal("stage", ["establishing"], 3, "The plant is still establishing"), signal("rootEvidence", ["healthy"], 2, "Visible roots appear healthy")],
    checks: ["Confirm the root ball is moist but aerated.", "Compare the old and new light, temperature, wind, and humidity.", "Watch whether new growth remains firm even if a few older leaves decline."],
    actions: ["Keep conditions steady and protect the plant from harsh midday light or wind for several days.", "Water according to the actual root ball, not the larger volume of new medium.", "Remove only tissue that is fully dead; keep functioning leaves during recovery."],
    avoid: "Avoid stacking extra fertilizer, pruning, and another move onto the same recovery period.",
  },
  {
    id: "nitrogen-deficiency",
    title: "Nitrogen shortage",
    category: "Nutrition",
    urgency: "Act soon",
    overview: "Nitrogen is mobile in plants, so a true shortage usually begins as an even paling of older leaves.",
    signals: [signal("symptoms", ["yellowing", "pale-new", "slow-growth"], 4, "Paling and slow growth can reflect low nitrogen"), signal("area", ["lower"], 5, "Older leaves are affected first"), signal("recentChange", ["none"], 1, "There was no abrupt environmental change"), signal("stage", ["active"], 2, "Active growth raises nitrogen demand")],
    checks: ["Confirm the yellowing is even rather than between green veins.", "Check root health and pH before assuming the nutrient is absent.", "Review feed concentration, irrigation frequency, and the age of the medium."],
    actions: ["Correct root-zone pH and watering first if either is outside the plant's range.", "Use a complete, species-appropriate fertilizer at the label's gentle end, then watch new growth.", "Judge recovery by healthier new leaves; badly yellowed leaves may not become green again."],
    avoid: "Avoid a large one-time nitrogen dose, especially during late flowering or on a stressed root system.",
  },
  {
    id: "nitrogen-toxicity",
    title: "Excess nitrogen",
    category: "Nutrition",
    urgency: "Act soon",
    overview: "Very dark foliage, glossy leaves, and downward clawing often follow a feed that supplies more nitrogen than the plant can use.",
    signals: [signal("symptoms", ["clawing-down", "slow-growth", "crispy-edges"], 5, "Downward clawing is a classic excess-feed pattern"), signal("recentChange", ["more-feed"], 5, "Feed strength recently increased"), signal("stage", ["flowering"], 2, "Excess nitrogen is especially disruptive in reproductive growth"), signal("moisture", ["even"], 1, "Water balance appears less likely as the main cause")],
    checks: ["Compare leaf color and gloss with healthy growth from the same plant type.", "Review every source of fertilizer, including amended soil and supplements.", "Measure runoff or reservoir strength only as a trend, using a calibrated meter."],
    actions: ["Stop adding high-nitrogen products and return to a balanced, label-compliant program.", "In hydro or coco, replace or dilute an overly strong solution with correctly balanced feed.", "In soil, allow normal irrigation and plant uptake to reduce excess rather than repeatedly flooding the pot."],
    avoid: "Avoid aggressive flushing in dense soil; it can replace one stress with oxygen loss.",
  },
  {
    id: "salt-stress",
    title: "Nutrient burn or salt buildup",
    category: "Nutrition",
    urgency: "Act soon",
    overview: "Concentrated fertilizer salts draw water from roots and commonly show first as burned tips and margins.",
    signals: [signal("symptoms", ["crispy-edges", "brown-spots", "curling-up"], 4, "Burned tips and edges fit salt stress"), signal("recentChange", ["more-feed"], 6, "Symptoms followed stronger feeding"), signal("medium", ["coco", "hydro", "potting-soil"], 2, "Container culture can accumulate salts"), signal("moisture", ["dry-fast", "bone-dry"], 2, "Dryback concentrates dissolved salts")],
    checks: ["Inspect whether damage begins at leaf tips and progresses inward.", "Verify meter calibration, concentrate mixing order, and total product dose.", "Check for a white crust on the medium or container."],
    actions: ["Reduce feed strength and restore a balanced root-zone solution appropriate to the medium.", "Remove accumulated runoff and make sure irrigation wets the root zone evenly.", "Resume feeding gradually only after new growth looks stable."],
    avoid: "Do not chase damaged leaves with additional supplements; burnt tissue will not repair itself.",
  },
  {
    id: "ph-lockout",
    title: "Root-zone pH imbalance",
    category: "Nutrition",
    urgency: "Act soon",
    overview: "Several deficiencies appearing together often mean nutrients are present but chemically less available at the roots.",
    signals: [signal("ph", ["low", "high"], 7, "Measured pH is outside the target range"), signal("symptoms", ["interveinal", "brown-spots", "pale-new", "purple-red", "slow-growth"], 3, "Mixed nutrient-like symptoms fit availability problems"), signal("area", ["whole", "patches"], 2, "Multiple areas are affected"), signal("rootEvidence", ["healthy"], 2, "Roots look viable despite canopy symptoms")],
    checks: ["Calibrate the pH meter with fresh standards before trusting a reading.", "Measure the solution going in and a representative root-zone sample.", "Check alkalinity and fertilizer mixing order if pH drifts repeatedly."],
    actions: ["Adjust gradually toward the range appropriate for the plant and medium.", "Stabilize irrigation and recheck after the root zone has equilibrated.", "Use a complete base nutrient before layering single-element additives."],
    avoid: "Avoid large back-and-forth pH corrections or combining concentrated adjusters directly with fertilizer.",
  },
  {
    id: "magnesium",
    title: "Magnesium shortage",
    category: "Nutrition",
    urgency: "Act soon",
    overview: "Magnesium shortage typically creates interveinal yellowing on older leaves while veins stay greener.",
    signals: [signal("symptoms", ["interveinal", "yellowing", "brown-spots"], 5, "Interveinal paling supports magnesium stress"), signal("area", ["lower"], 5, "Magnesium symptoms usually begin on older leaves"), signal("medium", ["coco", "hydro"], 2, "Soilless systems need a balanced magnesium supply"), signal("ph", ["low", "high"], 2, "pH can reduce magnesium availability")],
    checks: ["Compare older and newer leaves; the older set should lead the pattern.", "Check pH and total feed before adding a magnesium-only product.", "Review source water and whether calcium-heavy inputs are unbalancing the solution."],
    actions: ["Correct pH and use a complete fertilizer formulated for the medium.", "If the base feed truly lacks magnesium, add a labeled magnesium source at the low end of its rate.", "Track new growth over several days instead of expecting old mottling to disappear."],
    avoid: "Avoid repeated magnesium dosing without confirming the pattern; excess can interfere with other nutrients.",
  },
  {
    id: "calcium",
    title: "Calcium delivery problem",
    category: "Nutrition",
    urgency: "Act soon",
    overview: "Calcium problems show on developing tissue as irregular spots, weak edges, or distorted new growth and are often tied to roots or transpiration.",
    signals: [signal("symptoms", ["brown-spots", "distorted-new", "pale-new"], 5, "Damage is concentrated in developing tissue"), signal("area", ["upper"], 5, "Newest leaves are affected first"), signal("humidity", ["humid"], 2, "Very humid air can slow calcium movement"), signal("medium", ["coco", "hydro"], 2, "Soilless media require deliberate calcium balance")],
    checks: ["Inspect the newest leaves and growing tip closely.", "Confirm roots are active and the root zone is neither saturated nor extremely dry.", "Review pH, source water, and the complete nutrient label before supplementing."],
    actions: ["Stabilize root moisture and gentle air movement around new growth.", "Correct pH and use a balanced feed designed for the medium.", "Add calcium only when the water and base fertilizer analysis show a real gap."],
    avoid: "Avoid heavy calcium additions; they can create new potassium or magnesium imbalances.",
  },
  {
    id: "potassium",
    title: "Potassium shortage",
    category: "Nutrition",
    urgency: "Act soon",
    overview: "A potassium shortage commonly progresses from marginal yellowing to scorched edges on older leaves.",
    signals: [signal("symptoms", ["crispy-edges", "brown-spots", "yellowing"], 5, "Marginal scorch supports potassium stress"), signal("area", ["lower"], 4, "Older leaves tend to show first"), signal("stage", ["flowering"], 2, "Demand can rise during flowering and fruiting"), signal("ph", ["low", "high"], 2, "pH may be restricting uptake")],
    checks: ["Confirm damage starts at margins rather than as random lesions.", "Check root health and pH before raising potassium.", "Review whether a high level of another nutrient could be competing for uptake."],
    actions: ["Restore the correct pH and a complete flowering or fruiting feed for the species.", "Increase potassium only within the product label and in small steps.", "Keep irrigation even so concentration swings do not worsen margin burn."],
    avoid: "Avoid high-dose bloom boosters; an excess can resemble or create other deficiencies.",
  },
  {
    id: "phosphorus",
    title: "Phosphorus stress",
    category: "Nutrition",
    urgency: "Act soon",
    overview: "Slow growth, dull foliage, and red-purple coloration can reflect phosphorus stress, but temperature and genetics must be ruled out.",
    signals: [signal("symptoms", ["purple-red", "slow-growth", "brown-spots"], 4, "Color and slowed growth can fit phosphorus stress"), signal("temperature", ["cold"], 3, "Cold roots can sharply reduce phosphorus uptake"), signal("area", ["lower", "whole"], 2, "The pattern is widespread or begins low"), signal("stage", ["flowering"], 2, "Reproductive growth raises phosphorus demand")],
    checks: ["Compare the color with the plant's normal genetics and healthy stems.", "Measure root-zone temperature, not only room temperature.", "Confirm pH and overall feed balance."],
    actions: ["Warm the root zone gradually into the species-appropriate range.", "Correct pH and use a complete feed rather than a single heavy phosphorus dose.", "Monitor new growth and flowering performance for improvement."],
    avoid: "Avoid treating every purple stem as a deficiency; light, cold, and genetics can produce the same color.",
  },
  {
    id: "iron-manganese",
    title: "Iron or manganese availability problem",
    category: "Nutrition",
    urgency: "Act soon",
    overview: "Pale tissue between greener veins on the newest leaves often points to an immobile micronutrient availability issue.",
    signals: [signal("symptoms", ["pale-new", "interveinal", "distorted-new"], 5, "Newest tissue shows interveinal or pale growth"), signal("area", ["upper"], 5, "The growing tip is affected first"), signal("ph", ["high"], 4, "High pH commonly reduces iron and manganese availability"), signal("rootEvidence", ["healthy"], 1, "Roots appear capable of recovery")],
    checks: ["Confirm older leaves are greener than the newest set.", "Verify pH with a calibrated meter and review water alkalinity.", "Check whether roots are cold, damaged, or saturated."],
    actions: ["Bring root-zone pH gradually into the medium's target range.", "Use a complete micronutrient package suited to the medium if the base feed lacks one.", "Evaluate the color of new leaves; old bleached tissue may remain pale."],
    avoid: "Avoid spraying concentrated iron solutions or adding multiple micronutrient products at once.",
  },
  {
    id: "sulfur-zinc",
    title: "Sulfur or zinc shortage",
    category: "Nutrition",
    urgency: "Monitor",
    overview: "Uniform pale new growth or small, distorted leaves can come from less common sulfur or zinc problems, often secondary to pH.",
    signals: [signal("symptoms", ["pale-new", "distorted-new", "slow-growth"], 4, "Pale, small, or distorted new growth fits a micronutrient issue"), signal("area", ["upper"], 4, "The newest tissue is most affected"), signal("ph", ["high"], 3, "High pH can limit zinc availability"), signal("recentChange", ["none"], 1, "There is no obvious acute event")],
    checks: ["Rule out iron-related interveinal chlorosis and calcium-related spots first.", "Review the complete fertilizer label for sulfur and trace elements.", "Confirm pH and inspect the root system."],
    actions: ["Correct the root environment before adding an isolated element.", "Use a complete trace-element product only if the base program has a documented gap.", "Photograph the newest node and compare its development after one week."],
    avoid: "Avoid guessing between trace elements from color alone; symptoms overlap heavily.",
  },
  {
    id: "light-burn",
    title: "Excess light or lamp stress",
    category: "Light and climate",
    urgency: "Act soon",
    overview: "Intense light can bleach upper leaves, curl margins upward, and create dry patches closest to the source.",
    signals: [signal("symptoms", ["bleached", "curling-up", "crispy-edges", "brown-spots"], 5, "Bleaching and upward curl fit excess light"), signal("area", ["upper"], 5, "Damage is strongest near the light"), signal("light", ["intense"], 5, "Light intensity is high"), signal("recentChange", ["more-light", "moved"], 4, "Symptoms followed a light change")],
    checks: ["Compare exposed leaves with shaded leaves on the same plant.", "Check leaf-surface temperature at the brightest point.", "Confirm the lamp distance and dimmer setting against the manufacturer's guidance."],
    actions: ["Reduce intensity or increase distance in a small step.", "Acclimate the plant over several days before raising light again.", "Keep water and airflow steady while healthy new tissue develops."],
    avoid: "Avoid making a large light reduction and a major feeding change on the same day.",
  },
  {
    id: "low-light",
    title: "Insufficient light",
    category: "Light and climate",
    urgency: "Monitor",
    overview: "Too little usable light leads to weak, stretched growth, slow water use, and gradual yellowing.",
    signals: [signal("light", ["low"], 6, "The plant receives limited light"), signal("symptoms", ["slow-growth", "yellowing", "pale-new"], 4, "Slow, pale growth fits low energy input"), signal("moisture", ["stays-wet"], 2, "Low light slows water use"), signal("area", ["whole", "lower"], 2, "The decline is broad or begins with older leaves")],
    checks: ["Observe whether stems lean or stretch toward the light.", "Compare actual hours of useful light with the species' needs.", "Check whether watering frequency stayed high as seasonal light declined."],
    actions: ["Move the plant toward brighter indirect light or add a suitable grow light gradually.", "Reduce watering frequency as light and water use decline.", "Rotate the container regularly once growth stabilizes."],
    avoid: "Avoid moving a shade-adapted plant directly into harsh sun without acclimation.",
  },
  {
    id: "heat-stress",
    title: "Heat stress",
    category: "Light and climate",
    urgency: "Act soon",
    overview: "High leaf temperature increases water demand and commonly causes upward curl, wilt, and crisp edges.",
    signals: [signal("temperature", ["hot"], 6, "Heat spikes are present"), signal("symptoms", ["curling-up", "drooping", "crispy-edges"], 4, "Curling and wilt fit excess heat"), signal("moisture", ["dry-fast", "bone-dry"], 3, "The root zone dries rapidly"), signal("recentChange", ["weather", "moved"], 2, "Conditions changed recently")],
    checks: ["Measure temperature at leaf height during the hottest part of the cycle.", "Check direct sun, radiant heat, and lamp heat separately.", "Confirm roots remain moist enough without becoming waterlogged."],
    actions: ["Reduce peak heat with shade, greater lamp distance, or improved room ventilation.", "Water thoroughly at an appropriate time, then let excess drain.", "Increase gentle air mixing without aiming a strong fan directly at damaged leaves."],
    avoid: "Avoid ice water or abrupt temperature shocks.",
  },
  {
    id: "cold-stress",
    title: "Cold root zone or chilling injury",
    category: "Light and climate",
    urgency: "Act soon",
    overview: "Cold slows roots and nutrient movement, producing wilt, dark patches, purple color, and stalled growth.",
    signals: [signal("temperature", ["cold"], 6, "The plant experiences cold conditions"), signal("symptoms", ["purple-red", "drooping", "slow-growth", "dark-soft"], 4, "The symptom pattern fits chilling"), signal("recentChange", ["weather", "moved"], 3, "A location or weather shift occurred"), signal("area", ["whole", "upper"], 2, "Exposure affects broad or tender tissue")],
    checks: ["Measure the root-zone low overnight.", "Look for damage closest to glass, vents, or outdoor exposure.", "Distinguish firm dark pigmentation from soft frost-damaged tissue."],
    actions: ["Move the plant away from drafts and warm it gradually.", "Let cold, wet medium dry toward the plant's normal range before watering again.", "Wait for the extent of tissue damage to declare itself before pruning."],
    avoid: "Avoid placing chilled tissue next to a heater or applying fertilizer before roots resume activity.",
  },
  {
    id: "low-humidity",
    title: "Dry-air stress",
    category: "Light and climate",
    urgency: "Monitor",
    overview: "Very dry air can outpace root water delivery and produce crisp margins, curl, and tender-tip damage.",
    signals: [signal("humidity", ["dry"], 6, "Air is very dry"), signal("symptoms", ["crispy-edges", "curling-up", "drooping"], 4, "Margins and posture fit dry-air stress"), signal("area", ["upper", "whole"], 2, "Tender or broad tissue is involved"), signal("plantGroup", ["indoor-foliage", "seedling"], 2, "This plant group is often sensitive to dry air")],
    checks: ["Measure humidity near the leaves rather than across the room.", "Check for hot vents or strong fans that create a localized dry zone.", "Confirm the root ball is hydrating evenly."],
    actions: ["Move the plant away from heating vents and direct fan streams.", "Group compatible plants or use a controlled humidifier with regular cleaning.", "Keep humidity stable; target ranges vary by species and growth stage."],
    avoid: "Avoid constant leaf misting as the only fix, especially where leaves stay wet overnight.",
  },
  {
    id: "edema",
    title: "Edema from water imbalance",
    category: "Light and climate",
    urgency: "Monitor",
    overview: "When roots absorb water faster than leaves release it, cells can rupture and leave corky spots or bumps.",
    signals: [signal("humidity", ["humid"], 4, "Humid air slows transpiration"), signal("moisture", ["stays-wet"], 4, "Roots have a steady surplus of water"), signal("symptoms", ["brown-spots", "curling-up", "dark-soft"], 3, "Spotting or blister-like damage can fit edema"), signal("temperature", ["cold"], 2, "Cool conditions further slow water use")],
    checks: ["Look for raised, corky areas, often on the undersides of leaves.", "Compare nighttime humidity and root moisture.", "Rule out insects and spreading leaf-spot lesions."],
    actions: ["Allow a more appropriate dryback and improve gentle air exchange.", "Water earlier in the active light period rather than before a cool, humid night.", "Keep foliage dry and stabilize temperature."],
    avoid: "Avoid treating corky edema as an infectious disease unless lesions are actively spreading.",
  },
  {
    id: "wind-burn",
    title: "Wind or fan burn",
    category: "Light and climate",
    urgency: "Monitor",
    overview: "Continuous strong airflow dehydrates the exposed side of a plant and can twist or crisp leaf edges.",
    signals: [signal("symptoms", ["curling-up", "crispy-edges", "distorted-new"], 4, "Curling and edge damage fit mechanical drying"), signal("area", ["patches", "upper"], 3, "Damage is localized to exposed tissue"), signal("humidity", ["dry"], 2, "Dry air magnifies fan stress"), signal("recentChange", ["moved"], 2, "Air exposure may have changed with location")],
    checks: ["Look for damage mainly on the side facing a vent or fan.", "Observe whether leaves are constantly whipping rather than gently moving.", "Check whether the fan cycle continues during the driest period."],
    actions: ["Redirect or diffuse airflow so leaves move gently.", "Move the plant outside the direct stream while keeping room air exchanged.", "Trim only fully dead edges once the source is corrected."],
    avoid: "Avoid turning off all circulation in a humid growing area.",
  },
  {
    id: "spider-mites",
    title: "Spider mites",
    category: "Pests",
    urgency: "Isolate",
    overview: "Fine stippling, moving dots under leaves, and delicate webbing form a strong spider-mite pattern.",
    signals: [signal("pestEvidence", ["webbing"], 9, "Webbing or moving dots is a high-value mite signal"), signal("symptoms", ["webbing", "stippling"], 6, "The reported webbing or stippling fits feeding damage"), signal("area", ["lower", "patches", "whole"], 2, "Mites often spread from localized leaf undersides")],
    checks: ["Use a hand lens on leaf undersides and tap a leaf over white paper.", "Inspect nearby plants, stakes, and container rims.", "Mark several leaves to see whether stippling expands."],
    actions: ["Isolate the plant and remove the most heavily infested leaves in a sealed bag.", "Rinse leaf undersides where the plant tolerates it, then use a product labeled for the plant and pest.", "Repeat inspection and label-directed treatment because eggs may survive a single pass."],
    avoid: "Avoid spraying oils or soaps under intense light, on heat-stressed plants, or directly onto flowers meant for consumption.",
  },
  {
    id: "thrips",
    title: "Thrips",
    category: "Pests",
    urgency: "Isolate",
    overview: "Silvery scars, black waste specks, and distorted young leaves commonly indicate thrips feeding.",
    signals: [signal("pestEvidence", ["black-specks"], 9, "Black specks or silvery scars strongly support thrips"), signal("symptoms", ["distorted-new", "stippling", "brown-spots"], 5, "Tender growth shows scraping damage"), signal("area", ["upper", "patches"], 3, "New growth or scattered leaves are affected")],
    checks: ["Open folded new leaves and inspect with a hand lens.", "Tap flowers or leaves over white paper and watch for slender moving insects.", "Use blue or yellow sticky cards to monitor adults, not as the sole treatment."],
    actions: ["Isolate the plant and remove badly damaged tissue.", "Use a label-approved integrated pest treatment that covers both leaves and the relevant life stage in the medium.", "Reinspect new growth frequently and treat on the product's labeled interval."],
    avoid: "Avoid using unregistered pesticide mixtures or applying products to edible tissue unless the label explicitly permits it.",
  },
  {
    id: "aphids-scale",
    title: "Aphids, whiteflies, or scale insects",
    category: "Pests",
    urgency: "Isolate",
    overview: "Sticky honeydew, clustered soft insects, white flying adults, or fixed bumps point to sap-feeding pests.",
    signals: [signal("pestEvidence", ["sticky", "bumps"], 9, "Honeydew, clusters, or fixed bumps strongly support sap feeders"), signal("symptoms", ["sticky", "yellowing", "distorted-new"], 5, "Sticky residue and distorted growth fit sap feeding"), signal("area", ["upper", "lower", "patches"], 2, "Colonies can occupy tips or leaf undersides")],
    checks: ["Inspect stems, growing tips, and leaf undersides with a hand lens.", "Check whether fixed bumps lift away with gentle pressure.", "Look for ants, which often protect honeydew-producing pests."],
    actions: ["Isolate the plant and physically remove manageable colonies.", "Use a species-appropriate, label-approved soap, oil, or biological control.", "Clean sticky residue and keep monitoring nearby plants for crawlers or adults."],
    avoid: "Avoid assuming every stem bump is scale; compare with normal nodes and bark before treatment.",
  },
  {
    id: "fungus-gnats",
    title: "Fungus gnats and chronically damp medium",
    category: "Pests",
    urgency: "Act soon",
    overview: "Small dark flies around wet medium often signal fungus gnats and, more importantly, a root zone staying moist too long.",
    signals: [signal("pestEvidence", ["fliers"], 9, "Small flies near the medium strongly support fungus gnats"), signal("symptoms", ["tiny-fliers", "slow-growth", "yellowing"], 4, "Flying insects plus weak growth fit gnat pressure"), signal("moisture", ["stays-wet"], 4, "Larvae thrive in consistently damp organic medium"), signal("plantGroup", ["seedling"], 2, "Young roots are more vulnerable to larval feeding")],
    checks: ["Confirm adults are weak fliers emerging from the medium rather than whiteflies leaving foliage.", "Place a potato slice on the medium briefly to inspect for translucent larvae.", "Check drainage and how long the lower pot remains wet."],
    actions: ["Let the surface dry appropriately and improve drainage without dehydrating the plant.", "Use sticky cards to monitor adults and a labeled biological larvicide where permitted.", "Remove decaying surface debris and correct the watering pattern that supports the population."],
    avoid: "Avoid relying on adult traps alone; the larval habitat in the medium is the main control point.",
  },
  {
    id: "broad-russet-mites",
    title: "Broad or russet mite pattern",
    category: "Pests",
    urgency: "Isolate",
    overview: "Severely twisted, hardened, or blistered new growth without visible webbing can come from microscopic mites.",
    signals: [signal("symptoms", ["distorted-new", "pale-new", "brown-spots", "slow-growth"], 5, "Severe distortion is concentrated in tender growth"), signal("area", ["upper"], 5, "The growing tip is the center of damage"), signal("pestEvidence", ["none", "unknown"], 2, "No obvious larger insect explains the injury"), signal("humidity", ["humid"], 1, "Some microscopic mites thrive in sheltered tender tissue")],
    checks: ["Use strong magnification or a local diagnostic service; these mites can be too small for a basic hand lens.", "Rule out herbicide drift, calcium stress, and heat injury.", "Inspect nearby plants for a matching distortion pattern."],
    actions: ["Isolate the plant and stop moving cuttings or tools between plants.", "Seek species-specific identification before choosing a miticide or biological control.", "Remove severely damaged material only after containment and tool sanitation are arranged."],
    avoid: "Avoid broad pesticide use based only on twisted leaves; several non-pest causes look similar.",
  },
  {
    id: "powdery-mildew",
    title: "Powdery mildew",
    category: "Disease",
    urgency: "Isolate",
    overview: "Expanding white, talc-like patches on leaf surfaces are consistent with powdery mildew.",
    signals: [signal("symptoms", ["white-powder"], 10, "White powder is the defining visible pattern"), signal("humidity", ["humid"], 3, "Humid, stagnant conditions support disease pressure"), signal("area", ["patches", "upper", "whole"], 2, "Patches can spread through the canopy")],
    checks: ["Wipe a small area with a damp swab and inspect the margin for new powder.", "Check shaded interior leaves and nearby plants.", "Measure humidity swings and air movement through the canopy."],
    actions: ["Isolate the plant and bag heavily affected leaves before removal.", "Improve spacing, airflow, and humidity control while keeping foliage dry.", "Use a product labeled for the exact plant and disease, following harvest restrictions for edible crops."],
    avoid: "Avoid consuming affected plant material or spraying household mixtures whose crop safety is unknown.",
  },
  {
    id: "botrytis",
    title: "Botrytis or flower rot",
    category: "Disease",
    urgency: "Isolate",
    overview: "Gray fuzz, soft brown flower tissue, and a collapse that begins inside dense growth demand immediate containment.",
    signals: [signal("symptoms", ["gray-fuzz", "dark-soft"], 9, "Gray growth or soft collapse is a high-value rot signal"), signal("area", ["flowers"], 7, "Flowers, buds, or fruit are affected"), signal("humidity", ["humid"], 4, "High humidity favors Botrytis"), signal("temperature", ["cold"], 1, "Cool damp periods increase risk")],
    checks: ["With gloves, inspect the interior of dense flowers or fruit for brown tissue.", "Check nearby sites for sudden wilted leaves emerging from the affected cluster.", "Review nighttime humidity and condensation."],
    actions: ["Isolate the plant, stop fans before handling, and bag affected material at the site of removal.", "Sanitize tools and restore safe spacing, airflow, and humidity control.", "Discard affected consumable tissue; retain only material that is clearly healthy and permitted by local guidance."],
    avoid: "Do not inhale, consume, compost indoors, or shake visibly moldy material through the growing area.",
  },
  {
    id: "leaf-spot",
    title: "Fungal or bacterial leaf spot",
    category: "Disease",
    urgency: "Act soon",
    overview: "Discrete lesions that expand, develop halos, or spread by splash fit a leaf-spot disease more than a uniform nutrient pattern.",
    signals: [signal("symptoms", ["brown-spots", "dark-soft", "yellowing"], 5, "Expanding spots and halos support a leaf disease"), signal("area", ["patches", "lower"], 4, "Scattered or lower-leaf lesions fit splash spread"), signal("humidity", ["humid"], 3, "Long leaf-wetness periods raise disease risk"), signal("medium", ["ground-soil"], 1, "Soil splash can move inoculum onto lower leaves")],
    checks: ["Mark lesion edges and see whether they expand over 48 hours.", "Look for concentric rings, yellow halos, or water-soaked margins.", "Inspect irrigation patterns and how long foliage stays wet."],
    actions: ["Separate affected plants and remove heavily spotted leaves with clean tools.", "Water at the root zone and improve spacing so leaves dry promptly.", "Use a crop-labeled disease product only after narrowing the pathogen class."],
    avoid: "Avoid overhead watering and handling wet plants, which can spread several leaf-spot organisms.",
  },
  {
    id: "damping-off",
    title: "Damping-off or seedling stem collapse",
    category: "Disease",
    urgency: "Isolate",
    overview: "A pinched, dark, soft stem at the medium line in a seedling is a classic damping-off emergency.",
    signals: [signal("plantGroup", ["seedling"], 5, "The plant is in the vulnerable seedling stage"), signal("area", ["roots"], 5, "Damage centers at the stem base or crown"), signal("symptoms", ["dark-soft", "drooping"], 6, "Soft collapse at the base fits damping-off"), signal("moisture", ["stays-wet"], 4, "Persistent moisture favors seedling pathogens")],
    checks: ["Inspect the stem exactly at the medium line for narrowing or dark softness.", "Compare affected and healthy seedlings in the same tray.", "Check tray sanitation, airflow, density, and water temperature."],
    actions: ["Remove collapsed seedlings and nearby contaminated medium.", "Increase gentle airflow, reduce surface saturation, and use clean trays and propagation media.", "Protect unaffected seedlings with species-appropriate sanitation and a labeled biological control if available."],
    avoid: "Avoid reusing contaminated propagation medium or trying to stand up a seedling whose stem has fully collapsed.",
  },
  {
    id: "chewing-pests",
    title: "Chewing insect or slug damage",
    category: "Pests",
    urgency: "Act soon",
    overview: "Missing tissue, ragged edges, or clean holes point to a chewing pest rather than nutrition.",
    signals: [signal("symptoms", ["leaf-holes"], 9, "Missing leaf tissue directly supports a chewing pest"), signal("area", ["patches", "lower", "upper"], 2, "Feeding may be localized"), signal("medium", ["ground-soil", "potting-soil"], 1, "Soil and containers can shelter night-feeding pests")],
    checks: ["Inspect after dark and under leaf folds for caterpillars, beetles, slugs, or droppings.", "Look for slime trails, pellets, webbed leaves, or eggs.", "Confirm the holes appeared after leaves opened; torn emerging leaves can mimic chewing."],
    actions: ["Hand-remove identified pests where practical and exclude them with barriers or netting.", "Use a product or biological control labeled for the identified pest and plant.", "Recheck at the time of day when feeding occurs."],
    avoid: "Avoid applying a broad insecticide before identifying whether the pest is an insect, mite, or slug.",
  },
  {
    id: "sunscald",
    title: "Sunscald or abrupt exposure injury",
    category: "Light and climate",
    urgency: "Monitor",
    overview: "Bleached, papery patches on the most exposed side often follow a sudden move into direct sun.",
    signals: [signal("symptoms", ["bleached", "brown-spots", "crispy-edges"], 5, "Bleached, papery tissue fits sunscald"), signal("recentChange", ["moved", "more-light"], 6, "Exposure increased recently"), signal("area", ["upper", "patches"], 4, "Only exposed surfaces are damaged"), signal("light", ["intense"], 3, "Current light is intense")],
    checks: ["Compare the sun-facing side with protected tissue.", "Check whether damage appeared within one or two bright days after the move.", "Rule out spray droplets or oil applied before strong sun."],
    actions: ["Return the plant to partial protection and acclimate it in stages.", "Keep watering steady while undamaged leaves carry recovery.", "Use shade cloth during peak exposure if the plant must remain outdoors."],
    avoid: "Avoid removing every marked leaf immediately; intact green areas still support the plant.",
  },
  {
    id: "chemical-injury",
    title: "Spray, herbicide, or chemical injury",
    category: "Environmental change",
    urgency: "Act soon",
    overview: "Sudden distortion, spotting, or bleaching after a spray or nearby treatment can be chemical injury.",
    signals: [signal("symptoms", ["distorted-new", "bleached", "brown-spots", "curling-up"], 4, "The injury pattern can follow chemical exposure"), signal("area", ["patches", "upper"], 3, "Exposed patches are affected"), signal("recentChange", ["moved", "weather"], 1, "A recent change may have altered exposure"), signal("pestEvidence", ["none"], 1, "No pest evidence was found")],
    checks: ["Review every foliar spray, cleaner, pesticide, and nearby herbicide used in the prior week.", "Look for a one-sided drift pattern or droplet-shaped spots.", "Ask whether a product was applied in strong light or above its labeled temperature."],
    actions: ["Stop the suspected product and move the plant away from continued drift.", "Rinse foliage promptly only when the product label and plant tolerance support it.", "Document the exposure and watch undamaged new growth before adding another treatment."],
    avoid: "Avoid combining remedies; additional sprays can make the injury harder to identify and more severe.",
  },
  {
    id: "natural-senescence",
    title: "Normal leaf aging or seasonal change",
    category: "Normal development",
    urgency: "Monitor",
    overview: "A small number of oldest leaves can yellow and shed as a healthy plant reallocates resources or responds to seasonal change.",
    signals: [signal("symptoms", ["yellowing", "purple-red"], 3, "Color change can occur during normal aging"), signal("area", ["lower"], 4, "Only the oldest leaves are involved"), signal("stage", ["mature", "flowering"], 2, "Mature or reproductive plants commonly retire older leaves"), signal("rootEvidence", ["healthy"], 2, "Roots appear healthy"), signal("moisture", ["even"], 1, "Moisture appears stable")],
    checks: ["Confirm that new growth remains healthy and the pattern is limited to a few oldest leaves.", "Compare the rate of leaf loss with the plant's normal seasonal habit.", "Recheck roots and growing tips for any sign the pattern is spreading."],
    actions: ["Remove leaves only when they release easily or are fully spent.", "Keep normal care steady and track the number of affected leaves.", "Escalate the diagnosis if yellowing moves rapidly upward or new growth changes."],
    avoid: "Avoid adding fertilizer solely to keep every oldest leaf green.",
  },
  {
    id: "general-root-review",
    title: "Root-zone and environment review",
    category: "Baseline triage",
    urgency: "Monitor",
    overview: "The current observations overlap several causes, so the safest next move is to verify root moisture, light, and climate before treating.",
    signals: [signal("symptoms", ["yellowing", "brown-spots", "crispy-edges", "drooping", "slow-growth", "pale-new", "distorted-new"], 2, "The symptom is real but shared by several conditions"), signal("rootEvidence", ["not-seen"], 2, "Root condition has not been inspected"), signal("ph", ["unknown"], 1, "Root-zone pH has not been measured"), signal("temperature", ["unknown"], 1, "Temperature needs a direct reading")],
    checks: ["Record root-zone moisture, leaf-level temperature, humidity, and recent care changes.", "Inspect leaf tops, undersides, stems, and the medium with bright light.", "Take clear photos now so progression can be compared in 48 hours."],
    actions: ["Keep care stable while gathering the missing observations.", "Correct only a clearly measured issue, starting with water, drainage, temperature, or light.", "Return to the questionnaire with the new evidence for a narrower result."],
    avoid: "Avoid applying fertilizer and pesticide together when the cause is still broad.",
  },
];

export const CARE_PROFILE_COUNT = careProfiles.length;

function signalMatches(input: DiagnosisInput, item: Signal) {
  const value = input[item.field];
  return Array.isArray(value)
    ? value.some((entry) => item.values.includes(entry))
    : item.values.includes(value);
}

function contextualActions(input: DiagnosisInput, profile: CareProfile) {
  const actions = [...profile.actions];
  if (
    ["Nutrition", "Water and roots"].includes(profile.category) &&
    input.ph === "unknown"
  ) {
    actions.push(
      input.medium === "hydro" || input.medium === "coco"
        ? "Measure pH with a calibrated meter; many soilless systems begin assessment around 5.7–6.2, then follow the crop and nutrient maker's range."
        : "Measure the root zone before changing nutrients; many soil-grown plants begin assessment around pH 6.2–6.8, then follow the species' range.",
    );
  }
  if (input.plantGroup === "seedling") {
    actions.push("Use the gentlest correction first; young roots and tender leaves react strongly to concentrated inputs.");
  }
  if (input.plantGroup === "edible" && ["Pests", "Disease"].includes(profile.category)) {
    actions.push("For edible plants, use only products whose label names the crop and observe every harvest interval.");
  }
  return actions.slice(0, 5);
}

export function diagnosePlant(input: DiagnosisInput): CareResult[] {
  return careProfiles
    .map((profile, index) => {
      let score = 0;
      const reasons: string[] = [];
      for (const item of profile.signals) {
        if (signalMatches(input, item)) {
          score += item.weight;
          if (!reasons.includes(item.reason)) reasons.push(item.reason);
        }
      }
      for (const item of profile.conflicts ?? []) {
        if (signalMatches(input, item)) score -= item.weight;
      }
      const symptomMatch = profile.signals.some(
        (item) => item.field === "symptoms" && signalMatches(input, item),
      );
      if (!symptomMatch) score *= 0.55;
      return { profile, score, index, reasons };
    })
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 3)
    .map(({ profile, score, reasons }) => ({
      id: profile.id,
      title: profile.title,
      category: profile.category,
      urgency: profile.urgency,
      strength: score >= 16 ? "Strong pattern" : score >= 9 ? "Useful pattern" : "Possible pattern",
      overview: profile.overview,
      reasons: reasons.length ? reasons.slice(0, 4) : ["This remains a broad possibility while more observations are gathered"],
      checks: profile.checks,
      actions: contextualActions(input, profile),
      avoid: profile.avoid,
    }));
}
