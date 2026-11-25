import type { PlantProblemProfile } from "../schema";

export const miteNematodeProfiles: PlantProblemProfile[] = [
  {
    id: "twospotted-spider-mite-houseplants",
    name: "Twospotted Spider Mite (Houseplants)",
    category: "mite-pest",
    affectedPlants: ["houseplants", "ornamentals"],
    specificHosts: ["Ficus", "Dracaena", "Calathea", "English ivy", "Palm"],
    growthStages: ["vegetative", "mature", "all-stages"],
    symptomLocations: ["leaf undersides", "new growth", "leaf tips and margins"],
    symptomProgression:
      "Fine stippling appears first on lower leaves, then leaves turn bronze or gray, curl, and drop as populations explode in the dry warmth of heated rooms.",
    observableSigns: [
      "Tiny yellow-white speckles (stippling) cover the upper leaf surface where mites feed from below.",
      "Fine silken webbing spans leaf undersides and stem junctions when infestations are heavy.",
      "Shaking a leaf over white paper reveals slow-moving specks that smear green when crushed.",
    ],
    favorableConditions: [
      "Hot, dry indoor air below about forty percent humidity accelerates mite reproduction dramatically.",
      "Dusty, water-stressed plants near heat vents are especially prone to rapid outbreaks.",
    ],
    lookalikes: [
      {
        condition: "Thrips damage",
        differentiator:
          "Thrips leave silvery patches flecked with black fecal spots rather than uniform pinpoint stippling and never produce webbing.",
      },
      {
        condition: "Nutrient deficiency chlorosis",
        differentiator:
          "Deficiency yellowing follows leaf veins in a smooth pattern, while mite stippling is a random pattern of tiny discrete dots.",
      },
    ],
    immediateActions: [
      "Isolate the infested plant immediately so mites do not walk to neighboring houseplants.",
      "Rinse the whole plant, especially leaf undersides, in a sink or shower with a firm stream of lukewarm water.",
    ],
    treatments: [
      {
        situation: "Light infestation, organic option",
        treatment:
          "Spray leaf undersides thoroughly with insecticidal soap or narrow-range horticultural oil every five to seven days for three cycles.",
      },
      {
        situation: "Persistent or heavy infestation",
        treatment:
          "Rotate a labeled miticide with a different mode of action and continue weekly wipes to break the rapid breeding cycle.",
      },
    ],
    avoid: [
      "Do not treat with a broad-spectrum insecticide, which kills predatory mites and often triggers a worse rebound.",
      "Avoid letting the plant stay bone dry, since drought stress makes stippling and mite buildup much worse.",
    ],
    recoveryTimeline:
      "Populations usually crash within two to four weeks of repeated treatment, but stippled leaves stay scarred and only new growth looks clean.",
    prevention: [
      "Raise humidity and rinse foliage periodically to keep leaves clean and inhospitable to mites.",
      "Quarantine and inspect every new plant for two weeks before placing it among established houseplants.",
    ],
    monitoringThresholds: [
      "Re-inspect leaf undersides with a hand lens weekly; renew treatment whenever fresh stippling or webbing appears.",
    ],
    escalationCriteria: [
      "Discard a heavily webbed, defoliating plant if three treatment cycles fail and mites keep spreading to other plants.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Spider mites",
        url: "https://extension.umn.edu/yard-and-garden-insects/spider-mites",
      },
    ],
  },
  {
    id: "twospotted-spider-mite-vegetables",
    name: "Twospotted Spider Mite (Vegetable Garden)",
    category: "mite-pest",
    affectedPlants: ["vegetable-garden", "herbs"],
    specificHosts: ["Tomato", "Bean", "Cucumber", "Eggplant", "Melon"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaf undersides", "lower canopy", "along leaf veins"],
    symptomProgression:
      "Feeding starts on lower shaded leaves as light stippling, then spreads upward until leaves bronze, dry, and drop during hot dry spells, cutting yields.",
    observableSigns: [
      "Leaves show a sandy, stippled look and later a bronzed or scorched cast on the whole plant.",
      "Delicate webbing accumulates on undersides and growing tips of dusty, dry-stressed plants.",
      "A hand lens reveals oval mites and round translucent eggs clustered along the midrib underside.",
    ],
    favorableConditions: [
      "Hot, dry, dusty weather above about ninety degrees Fahrenheit drives explosive summer outbreaks.",
      "Plants along dusty field edges and drought-stressed rows build the largest populations first.",
    ],
    lookalikes: [
      {
        condition: "Ozone or air-pollution injury",
        differentiator:
          "Ozone stipple is upper-surface bronzing without any mites, eggs, or webbing found on the undersides.",
      },
      {
        condition: "Early blight",
        differentiator:
          "Early blight forms concentric-ring brown spots with yellow halos rather than a fine even stipple.",
      },
    ],
    immediateActions: [
      "Hose the underside of foliage with a strong water jet to knock down mites and washing away dust.",
      "Deep water the bed to relieve drought stress that fuels rapid mite reproduction.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply insecticidal soap or horticultural oil to leaf undersides in the cool of the day, repeating every five days.",
      },
      {
        situation: "Established hot-weather outbreak",
        treatment:
          "Release commercially reared predatory mites such as Phytoseiulus persimilis into the crop before populations peak.",
      },
    ],
    avoid: [
      "Do not spray carbaryl or pyrethroids, which flare spider mites by wiping out their natural predators.",
      "Avoid overhead watering during midday heat, which stresses plants and spreads dust that favors mites.",
    ],
    recoveryTimeline:
      "With treatment and cooler weather, new foliage recovers in two to three weeks, but bronzed leaves will not regreen.",
    prevention: [
      "Keep plants well watered and mulched to reduce dust and drought stress that trigger outbreaks.",
      "Conserve predatory mites and lady beetles by choosing selective, mite-friendly products for other pests.",
    ],
    monitoringThresholds: [
      "Scout leaf undersides twice weekly in hot weather and treat when several mites per leaflet appear before webbing forms.",
    ],
    escalationCriteria: [
      "Consult an extension agent when miticide rotations fail, as regional resistance may require a professional program.",
    ],
    sources: [
      {
        label: "UC IPM — Spider mites",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7405.html",
      },
    ],
  },
  {
    id: "spruce-spider-mite-conifers",
    name: "Spruce Spider Mite (Conifers)",
    category: "mite-pest",
    affectedPlants: ["trees-shrubs", "ornamentals"],
    specificHosts: ["Spruce", "Juniper", "Arborvitae", "Hemlock", "Fir"],
    growthStages: ["mature", "all-stages"],
    symptomLocations: ["inner and lower needles", "older growth", "needle surfaces"],
    symptomProgression:
      "Cool-season feeding first bronzes older interior needles, then damage moves outward and needles drop, leaving thin, off-color, and dieback-prone branches.",
    observableSigns: [
      "Older needles turn dull bronze or rusty and take on a stippled, faded appearance from the inside out.",
      "Fine webbing and tiny dark mites show up when a branch is tapped over a sheet of white paper.",
      "Round overwintering eggs are visible at needle bases and twig crotches with a hand lens.",
    ],
    favorableConditions: [
      "Cool spring and fall temperatures between about sixty and eighty degrees favor this cool-season mite.",
      "Dusty roadside plantings and drought-stressed conifers develop heavier infestations.",
    ],
    lookalikes: [
      {
        condition: "Winter desiccation or salt injury",
        differentiator:
          "Winter burn browns outer exposed needles uniformly, while spruce mite bronzing begins on interior older needles with mites present.",
      },
      {
        condition: "Rhizosphaera needle cast",
        differentiator:
          "Needle cast shows rows of tiny black fruiting bodies in the stomata rather than stippling and webbing.",
      },
    ],
    immediateActions: [
      "Perform the tap test over white paper on several branches to confirm live mites before treating.",
      "Hose down accessible foliage forcefully to dislodge mites and remove dust in early infestations.",
    ],
    treatments: [
      {
        situation: "Cool-season active mites",
        treatment:
          "Apply horticultural oil or a labeled miticide in spring or fall when mites are active, not in summer heat.",
      },
      {
        situation: "Dormant-season egg suppression",
        treatment:
          "Use a dormant-rate horticultural oil in late winter to smother overwintering eggs before they hatch.",
      },
    ],
    avoid: [
      "Do not treat only in mid-summer, because this cool-season mite is inactive and eggs are quiescent then.",
      "Avoid broad-spectrum insecticides that destroy predatory mites and worsen conifer infestations.",
    ],
    recoveryTimeline:
      "Mite control halts new bronzing within weeks, but discolored needles remain and are replaced only slowly over a season or two.",
    prevention: [
      "Irrigate conifers during drought and keep foliage free of road dust to reduce mite buildup.",
      "Monitor susceptible spruce and juniper each spring and fall so treatment is timed to active mites.",
    ],
    monitoringThresholds: [
      "Tap test weekly in spring and fall; treat when ten or more mites drop per branch sample onto the paper.",
    ],
    escalationCriteria: [
      "Call a certified arborist when large landscape conifers show extensive dieback or need high-canopy spraying.",
    ],
    sources: [
      {
        label: "Penn State Extension — Spruce spider mite",
        url: "https://extension.psu.edu/spruce-spider-mite",
      },
    ],
  },
  {
    id: "broad-mite-general",
    name: "Broad Mite (General)",
    category: "mite-pest",
    affectedPlants: ["vegetable-garden", "ornamentals", "specialty-cultivation"],
    specificHosts: ["Pepper", "African violet", "Begonia", "Citrus", "Gerbera"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["new growth", "growing tips", "flower buds"],
    symptomProgression:
      "Toxic saliva distorts emerging leaves and buds first, causing downward curling and bronzing at the tips that intensifies until growing points are stunted or killed.",
    observableSigns: [
      "New leaves are hardened, downcurled, and take on a coppery or blistered lower-surface sheen.",
      "Growing tips and flower buds abort or emerge twisted and scarred even after mites are gone.",
      "Damage looks like a growth-regulator injury but concentrates entirely on the youngest tissue.",
    ],
    favorableConditions: [
      "Warm, humid conditions in greenhouses and indoor grows favor rapid broad mite reproduction.",
      "Densely spaced, actively growing plants let the tiny mites move quickly between growing points.",
    ],
    lookalikes: [
      {
        condition: "Herbicide drift injury",
        differentiator:
          "Herbicide injury usually affects many nearby species uniformly, while broad mite damage is patchy and moves plant to plant.",
      },
      {
        condition: "Tomato spotted wilt virus",
        differentiator:
          "The virus produces ring spots and systemic mottling, whereas broad mites cause only twisted, bronzed new growth without ringspots.",
      },
    ],
    immediateActions: [
      "Prune off and bag severely distorted growing tips where mites concentrate before treating.",
      "Isolate affected plants because these microscopic mites hitchhike easily on hands and tools.",
    ],
    treatments: [
      {
        situation: "Confirmed infestation",
        treatment:
          "Apply sulfur or a labeled miticide effective on tarsonemid mites, thoroughly wetting all new growth twice a week.",
      },
      {
        situation: "Greenhouse biological control",
        treatment:
          "Introduce predatory mites such as Amblyseius species early, before distortion becomes severe.",
      },
    ],
    avoid: [
      "Do not assume the problem is a nutrient issue and keep fertilizing, which only feeds the mites more soft growth.",
      "Avoid moving hands or tools from infested to clean plants without washing, since spread is easy.",
    ],
    recoveryTimeline:
      "Distortion stops once mites are controlled, and clean new growth typically resumes within two to four weeks.",
    prevention: [
      "Inspect incoming plugs and transplants under magnification for curled tips before introducing them.",
      "Maintain routine predatory mite releases in greenhouses that have a history of broad mite problems.",
    ],
    monitoringThresholds: [
      "Examine growing tips with a strong hand lens twice weekly and treat at the first sign of tip curling.",
    ],
    escalationCriteria: [
      "Send symptomatic tips to a diagnostic lab when distortion persists despite treatment to confirm mite species.",
    ],
    sources: [
      {
        label: "University of Florida IFAS — Broad mite",
        url: "https://edis.ifas.ufl.edu/publication/IN1252",
      },
    ],
  },
  {
    id: "cyclamen-mite-ornamentals",
    name: "Cyclamen Mite (Ornamentals)",
    category: "mite-pest",
    affectedPlants: ["ornamentals", "houseplants", "berries"],
    specificHosts: ["Cyclamen", "African violet", "Strawberry", "Gloxinia", "Snapdragon"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["crown and new growth", "flower buds", "young leaves"],
    symptomProgression:
      "Hidden in the crown, mites stunt and blacken emerging leaves and buds, which become brittle, curled, and streaked, and flowers fail to open or are deformed.",
    observableSigns: [
      "New leaves are dwarfed, cupped, and darker green with a wrinkled, brittle texture.",
      "Flower buds discolor, twist, and either abort or open into distorted, streaked blooms.",
      "Damage stays tightly clustered at the crown and growing point rather than on older leaves.",
    ],
    favorableConditions: [
      "Cool, humid conditions favored by these mites match the culture of cyclamen and African violets.",
      "Crowded plantings and shared water splash let mites spread among neighboring plants.",
    ],
    lookalikes: [
      {
        condition: "Broad mite injury",
        differentiator:
          "Broad mite damage often bronzes leaf undersides and appears faster, while cyclamen mite favors cool conditions and darkens cupped crown leaves.",
      },
      {
        condition: "Cold or draft damage",
        differentiator:
          "Cold injury affects exposed leaves generally, but cyclamen mite distortion is confined to the crown and unfolding buds.",
      },
    ],
    immediateActions: [
      "Isolate the plant since cyclamen mites transfer easily on hands, tools, and touching leaves.",
      "Remove and bag the most distorted crown leaves and aborted buds to lower the mite load.",
    ],
    treatments: [
      {
        situation: "Home and hobby growers",
        treatment:
          "Discard badly infested African violets and cyclamen because eradication is difficult and reinfestation is common.",
      },
      {
        situation: "Valuable or commercial stock",
        treatment:
          "Apply a labeled miticide active against tarsonemid mites, thoroughly drenching the crown, and repeat per label.",
      },
    ],
    avoid: [
      "Do not touch healthy plants after handling infested ones without washing hands thoroughly.",
      "Avoid keeping heavily distorted plants that serve as a reservoir spreading mites to your collection.",
    ],
    recoveryTimeline:
      "Even after control, existing distorted growth never recovers, and clean new leaves take several weeks to emerge.",
    prevention: [
      "Inspect and quarantine new African violets and cyclamen for several weeks before adding them to a collection.",
      "Space plants so leaves do not touch and avoid splashing water between pots.",
    ],
    monitoringThresholds: [
      "Check the crown of susceptible plants monthly and act at the first sign of darkened, cupped new leaves.",
    ],
    escalationCriteria: [
      "Have a lab confirm cyclamen mite before investing in miticides on high-value nursery or greenhouse stock.",
    ],
    sources: [
      {
        label: "UC IPM — Cyclamen mite",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7405.html",
      },
    ],
  },
  {
    id: "tomato-russet-mite-vegetables",
    name: "Tomato Russet Mite (Vegetable Garden)",
    category: "mite-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Tomato", "Potato", "Eggplant", "Pepper", "Petunia"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["lower stem", "lower leaves moving upward", "fruit surface"],
    symptomProgression:
      "Damage begins as a bronzing of the lower stem and leaves that climbs the plant, wilting foliage, curling leaves upward, and russeting the fruit while the plant declines rapidly.",
    observableSigns: [
      "The lower stem and leaf petioles turn a greasy bronze or rusty brown that advances up the plant.",
      "Lower leaves curl, dry, and drop while the growing tip may still look green until late.",
      "Fruit skin develops a fine russeting and cracking under heavy mite feeding.",
    ],
    favorableConditions: [
      "Hot, dry weather greatly accelerates these microscopic eriophyid mites on solanaceous crops.",
      "Dense plantings and infested volunteer weeds provide a steady source of new mites.",
    ],
    lookalikes: [
      {
        condition: "Fusarium or verticillium wilt",
        differentiator:
          "Wilt diseases show internal vascular browning in cut stems, while russet mite bronzes the outer stem surface with mites present.",
      },
      {
        condition: "Twospotted spider mite",
        differentiator:
          "Spider mites stipple and web on leaf undersides, but russet mites are far smaller, need magnification, and bronze the stem first.",
      },
    ],
    immediateActions: [
      "Confirm with a strong hand lens or microscope since russet mites are invisible to the naked eye.",
      "Remove and destroy the most bronzed lower foliage and nearby solanaceous weeds.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply wettable sulfur to stems and foliage early, before bronzing reaches the upper canopy.",
      },
      {
        situation: "Advanced infestation",
        treatment:
          "Use a labeled miticide effective on eriophyid mites and treat the whole plant including lower stems.",
      },
    ],
    avoid: [
      "Do not wait until the plant is heavily bronzed, because russet mites move fast and treatment then rarely saves it.",
      "Avoid leaving infested tomato and nightshade volunteers that carry mites into the new crop.",
    ],
    recoveryTimeline:
      "Early sulfur treatment can save the upper plant within a week or two, but severely bronzed plants usually collapse.",
    prevention: [
      "Rotate away from solanaceous crops and remove volunteer nightshades that host russet mites.",
      "Scout stems and lower leaves under magnification weekly during hot dry stretches.",
    ],
    monitoringThresholds: [
      "Inspect lower stems with a hand lens weekly and treat at the first sign of bronzing or visible mites.",
    ],
    escalationCriteria: [
      "Send tissue to a diagnostic lab if bronzing spreads despite sulfur, to rule out wilt disease and confirm mites.",
    ],
    sources: [
      {
        label: "UC IPM — Tomato russet mite",
        url: "https://ipm.ucanr.edu/agriculture/tomato/tomato-russet-mite/",
      },
    ],
  },
  {
    id: "citrus-rust-mite-fruit-trees",
    name: "Citrus Rust Mite (Fruit Trees)",
    category: "mite-pest",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Orange", "Grapefruit", "Lemon", "Lime", "Tangerine"],
    growthStages: ["fruiting", "mature"],
    symptomLocations: ["fruit surface", "leaf surfaces", "outer canopy"],
    symptomProgression:
      "Feeding on the fruit rind causes a smooth russeting that darkens to bronze on oranges and a silvery sheen on lemons, spreading over the fruit surface and downgrading its appearance.",
    observableSigns: [
      "Fruit rind develops a rusty brown blemish on oranges or a silvery, leathery finish on lemons.",
      "Affected fruit is smaller with thickened, rough rind that reduces market and eating quality.",
      "A hand lens shows tiny wedge-shaped yellow eriophyid mites densely on the fruit surface.",
    ],
    favorableConditions: [
      "Warm, humid summer weather in citrus regions drives rapid rust mite population growth.",
      "Dense, unpruned canopies with shaded, humid interiors hold the highest mite numbers.",
    ],
    lookalikes: [
      {
        condition: "Wind scar or thrips scarring",
        differentiator:
          "Wind and thrips scars are localized streaks or rings near the stem end, while rust mite russeting covers broad smooth areas of the rind.",
      },
      {
        condition: "Citrus scab",
        differentiator:
          "Scab forms raised, corky, wart-like lesions rather than the smooth flat russet caused by rust mite feeding.",
      },
    ],
    immediateActions: [
      "Scout outer-canopy fruit with a hand lens to confirm live mites before deciding to treat.",
      "Open dense canopies with light pruning to reduce the humid interior that favors mites.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply horticultural oil or wettable sulfur when mite counts rise during early fruit development.",
      },
      {
        situation: "Commercial groves",
        treatment:
          "Apply a labeled miticide at the recommended threshold to protect fresh-market fruit finish.",
      },
    ],
    avoid: [
      "Do not spray sulfur during very hot weather or close to an oil application, which can cause phytotoxic burn.",
      "Avoid broad-spectrum sprays that eliminate predatory mites and fungi that naturally suppress rust mite.",
    ],
    recoveryTimeline:
      "Treatment stops new russeting within days, but existing blemished rind stays scarred through harvest.",
    prevention: [
      "Preserve natural enemies including predatory mites and the fungus Hirsutella that regulate rust mite.",
      "Monitor fruit finish from petal fall onward so treatment protects the developing rind.",
    ],
    monitoringThresholds: [
      "Sample fruit weekly with a lens and treat fresh-market fruit when mites exceed a few per square centimeter of rind.",
    ],
    escalationCriteria: [
      "Consult a farm advisor for grove-scale miticide timing and resistance management decisions.",
    ],
    sources: [
      {
        label: "UC IPM — Citrus rust mites",
        url: "https://ipm.ucanr.edu/agriculture/citrus/citrus-rust-mite/",
      },
    ],
  },
  {
    id: "hemp-russet-mite-specialty",
    name: "Hemp Russet Mite (Specialty Cultivation)",
    category: "mite-pest",
    affectedPlants: ["specialty-cultivation"],
    specificHosts: ["Cannabis", "Hemp", "Hop"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["upper canopy", "growing tips", "flower bracts"],
    symptomProgression:
      "Microscopic mites feed at the growing tips, causing leaves to curl and take on a brittle, waxy look, then upward-curled margins and stunted, resin-degraded flowers as the infestation intensifies.",
    observableSigns: [
      "Leaf margins curl upward and edges become brittle, glossy, and slightly yellow at the tips.",
      "Growing points stall and stems can develop a shiny, greasy appearance under high populations.",
      "Only a microscope or strong loupe reveals the tiny elongated eriophyid mites on tissue.",
    ],
    favorableConditions: [
      "Warm indoor grow-room temperatures and dense canopies let populations build unseen and fast.",
      "Moving infested clones and workers between rooms spreads these hitchhiking mites readily.",
    ],
    lookalikes: [
      {
        condition: "Broad mite injury",
        differentiator:
          "Broad mites often bronze leaf undersides and blister tissue, while hemp russet mite curls margins upward and needs a microscope to confirm the elongated body.",
      },
      {
        condition: "Nutrient or light stress",
        differentiator:
          "Stress symptoms are usually symmetric across the plant, but russet mite damage clusters at active growing tips with mites present.",
      },
    ],
    immediateActions: [
      "Quarantine suspect plants immediately and inspect tips under a microscope to confirm eriophyid mites.",
      "Bag and remove the most affected tips and dispose of them away from the grow space.",
    ],
    treatments: [
      {
        situation: "Vegetative-stage plants",
        treatment:
          "Apply wettable sulfur or a labeled miticide to all growing tips and repeat on a tight schedule per label.",
      },
      {
        situation: "Heavily infested mother stock",
        treatment:
          "Destroy severely infested plants and start clean stock, since eradication from flowering plants is very difficult.",
      },
    ],
    avoid: [
      "Do not rely on the naked eye, since assuming it is nutrient burn lets the population explode.",
      "Avoid carrying tools, gloves, or clones between rooms without sanitizing, which spreads mites fast.",
    ],
    recoveryTimeline:
      "New growth can come in clean two to three weeks after control, but flowers already damaged do not recover quality.",
    prevention: [
      "Inspect and quarantine all incoming clones under magnification before entering production rooms.",
      "Maintain strict sanitation and dedicated tools per room to stop hitchhiking mites.",
    ],
    monitoringThresholds: [
      "Scope growing tips of scout plants weekly and treat at the first confirmed mite regardless of visible damage.",
    ],
    escalationCriteria: [
      "Send tissue to a diagnostic lab to confirm species when curling persists despite repeated miticide use.",
    ],
    sources: [
      {
        label: "Colorado State University Extension — Hemp russet mite",
        url: "https://extension.colostate.edu/topic-areas/agriculture/hemp/",
      },
    ],
  },
  {
    id: "eriophyid-gall-mite-trees",
    name: "Eriophyid Gall Mite (Trees and Shrubs)",
    category: "mite-pest",
    affectedPlants: ["trees-shrubs", "ornamentals", "fruit-trees"],
    specificHosts: ["Maple", "Linden", "Elm", "Cherry", "Willow"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["upper leaf surface", "leaf veins", "new leaves"],
    symptomProgression:
      "Mite feeding early in leaf expansion induces the leaf to form galls or velvety patches that enlarge and turn from green to red or black as the season progresses, though the tree is rarely harmed.",
    observableSigns: [
      "Numerous small pouch, spindle, or bead galls stud the upper surface of expanding leaves.",
      "Some hosts show velvety felt-like erineum patches, often reddish, on leaf surfaces.",
      "Galls are keyed to a specific host, and the mites inside are microscopic and worm-like.",
    ],
    favorableConditions: [
      "Cool spring weather during bud break lets mites feed as leaves unfold and trigger galls.",
      "Mites overwinter under bark and bud scales and colonize each flush of new leaves.",
    ],
    lookalikes: [
      {
        condition: "Insect galls from wasps or midges",
        differentiator:
          "Insect galls typically contain a single larva and are larger, while eriophyid galls are tiny, numerous, and host-specific with mites inside.",
      },
      {
        condition: "Fungal leaf spot",
        differentiator:
          "Leaf spots are flat lesions with defined margins, whereas eriophyid damage is a raised gall or velvety erineum outgrowth.",
      },
    ],
    immediateActions: [
      "Identify the gall type and host, since most eriophyid galls are cosmetic and need no action.",
      "Rake and remove heavily galled fallen leaves to reduce overwintering mite numbers if desired.",
    ],
    treatments: [
      {
        situation: "Cosmetic tolerance",
        treatment:
          "Tolerate the galls on healthy trees because they cause no measurable harm to tree health.",
      },
      {
        situation: "High-value young tree with heavy galling",
        treatment:
          "Apply a dormant horticultural oil at bud swell to suppress mites emerging to colonize new leaves.",
      },
    ],
    avoid: [
      "Do not spray fungicides, which do nothing against mites and waste effort and money.",
      "Avoid mid-summer miticide sprays, since galls are already formed and mites are protected inside them.",
    ],
    recoveryTimeline:
      "Existing galls remain all season but cause no lasting damage, and next year's flush is clean if mites are suppressed.",
    prevention: [
      "Apply timed dormant oil only where galling is severe and the tree is young or high value.",
      "Maintain overall tree vigor so cosmetic galling has no impact on growth.",
    ],
    monitoringThresholds: [
      "Note gall density each spring and consider dormant oil only if galling becomes heavy and repetitive.",
    ],
    escalationCriteria: [
      "Consult an arborist if a specimen tree shows heavy annual galling combined with genuine dieback.",
    ],
    sources: [
      {
        label: "University of Wisconsin Horticulture — Eriophyid mites",
        url: "https://hort.extension.wisc.edu/articles/eriophyid-mites/",
      },
    ],
  },
  {
    id: "clover-mite-general",
    name: "Clover Mite (Households and Lawns)",
    category: "mite-pest",
    affectedPlants: ["lawns-turf", "ornamentals"],
    specificHosts: ["Turfgrass", "Clover", "Ivy", "Shrub foliage"],
    growthStages: ["all-stages"],
    symptomLocations: ["lawn near foundations", "window sills", "sunny walls"],
    symptomProgression:
      "Populations build in lush lawns during cool spring and fall, then tiny red mites migrate onto sunny walls and indoors, becoming a nuisance while causing minor silvering of turf near foundations.",
    observableSigns: [
      "Tiny bright reddish mites with long front legs crawl on foundations, walls, and window frames.",
      "Crushed mites leave a red or rusty stain on light surfaces such as curtains and sills.",
      "Turf near well-fertilized foundation borders may show slight silvering from feeding.",
    ],
    favorableConditions: [
      "Cool moist spring and fall weather over heavily fertilized lawns favors big populations.",
      "Warm sunny walls draw migrating mites indoors, especially on the south side of buildings.",
    ],
    lookalikes: [
      {
        condition: "Chigger or spider mite",
        differentiator:
          "Clover mites have distinctive very long front legs and do not bite people, unlike biting chiggers or plant-damaging spider mites.",
      },
      {
        condition: "Concrete dye or paint speckling",
        differentiator:
          "Clover mites move and smear red when crushed, while stains from dyes or paint are fixed and inert.",
      },
    ],
    immediateActions: [
      "Vacuum up indoor mites gently rather than crushing them to avoid leaving red stains.",
      "Seal gaps around windows and doors to stop mites from wandering indoors.",
    ],
    treatments: [
      {
        situation: "Nuisance indoor migration",
        treatment:
          "Create a plant-free gravel or mulch band about eighteen inches wide against the foundation to block migration.",
      },
      {
        situation: "Persistent perimeter invasion",
        treatment:
          "Apply a labeled perimeter miticide or insecticide to the outside foundation and adjacent turf per directions.",
      },
    ],
    avoid: [
      "Do not smear crawling mites on light fabrics or paint, since they leave stubborn red stains.",
      "Avoid over-fertilizing foundation lawns, which produces the lush growth that fuels big populations.",
    ],
    recoveryTimeline:
      "Migrations are seasonal and subside within a few weeks as weather warms or cools past the mites' preferred range.",
    prevention: [
      "Keep a bare or gravel buffer strip and avoid lush turf right against the foundation.",
      "Caulk cracks and improve door and window seals before the spring and fall migration periods.",
    ],
    monitoringThresholds: [
      "Watch sunny walls in spring and fall and act on the perimeter when mites first appear on the foundation.",
    ],
    escalationCriteria: [
      "Call a pest control professional if indoor invasions recur heavily despite sealing and perimeter treatment.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Clover mites",
        url: "https://extension.umn.edu/nuisance-insects/clover-mites",
      },
    ],
  },
  {
    id: "citrus-bud-mite-fruit-trees",
    name: "Citrus Bud Mite (Fruit Trees)",
    category: "mite-pest",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Lemon", "Orange", "Grapefruit", "Lime"],
    growthStages: ["flowering", "fruiting", "mature"],
    symptomLocations: ["buds", "growing tips", "developing fruit"],
    symptomProgression:
      "Feeding inside buds kills or distorts them, leading to bushy witches-broom growth, malformed flowers, and misshapen rosette or fingered fruit as the season advances, most notably on coastal lemons.",
    observableSigns: [
      "Terminal buds are killed or produce clustered, distorted witches-broom shoots.",
      "Flowers and young fruit become badly deformed, sometimes with finger-like or split shapes.",
      "Damage is concentrated at buds and growing points rather than on leaf surfaces.",
    ],
    favorableConditions: [
      "Cool, humid coastal climates favor citrus bud mite, especially on lemons.",
      "Dense, unpruned canopies protect the mites in buds and slow their detection.",
    ],
    lookalikes: [
      {
        condition: "Frost damage to buds",
        differentiator:
          "Frost kills buds uniformly after a cold event, while bud mite injury produces ongoing witches-broom and deformed fruit with mites present.",
      },
      {
        condition: "Boron or micronutrient disorder",
        differentiator:
          "Nutrient disorders show foliar patterns across the tree, whereas bud mite damage is confined to buds and fruit form.",
      },
    ],
    immediateActions: [
      "Prune out and dispose of witches-broom growth that harbors and spreads the mites.",
      "Confirm mites in buds with magnification before treating cosmetic distortion.",
    ],
    treatments: [
      {
        situation: "Confirmed economic damage on lemons",
        treatment:
          "Apply horticultural oil or a labeled miticide timed to post-bloom when mites are exposed on new growth.",
      },
      {
        situation: "Dooryard trees",
        treatment:
          "Tolerate minor distortion and prune broomed shoots, since dooryard trees rarely need chemical control.",
      },
    ],
    avoid: [
      "Do not apply oil during high heat, which risks phytotoxic damage to citrus foliage and fruit.",
      "Avoid leaving broomed, infested shoots that act as a reservoir feeding new bud infestations.",
    ],
    recoveryTimeline:
      "Suppressing mites restores normal buds in the next flush, but the current season's deformed fruit will not correct.",
    prevention: [
      "Open the canopy with pruning to reduce the cool, humid microclimate the mites prefer.",
      "Monitor buds on coastal lemons through spring so treatment targets exposed mites.",
    ],
    monitoringThresholds: [
      "Examine buds with a hand lens through spring and treat lemons when a high proportion of buds show mites.",
    ],
    escalationCriteria: [
      "Consult a farm advisor for grove-level treatment thresholds and oil timing on commercial lemons.",
    ],
    sources: [
      {
        label: "UC IPM — Citrus bud mite",
        url: "https://ipm.ucanr.edu/agriculture/citrus/citrus-bud-mite/",
      },
    ],
  },
  {
    id: "false-spider-mite-orchids",
    name: "False Spider Mite (Orchids)",
    category: "mite-pest",
    affectedPlants: ["houseplants", "ornamentals", "specialty-cultivation"],
    specificHosts: ["Phalaenopsis", "Cattleya", "Cymbidium", "Dendrobium", "Oncidium"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["upper leaf surface", "leaf undersides", "older leaves"],
    symptomProgression:
      "Flat mites feed in colonies that produce sunken, silvery to pitted patches on leaves, which coalesce and turn brown and sunken, weakening older foliage while no webbing is ever produced.",
    observableSigns: [
      "Leaves develop sunken silvery flecking that turns into brown, pitted, sunken areas over time.",
      "Tiny flat reddish or greenish mites and bright red eggs sit in the pits, visible with a lens.",
      "There is no webbing, which distinguishes false spider mites from twospotted spider mites.",
    ],
    favorableConditions: [
      "Warm greenhouse and windowsill conditions with crowded plants favor Brevipalpus flat mites.",
      "Low airflow and dense collections let colonies build slowly on shaded older leaves.",
    ],
    lookalikes: [
      {
        condition: "Twospotted spider mite",
        differentiator:
          "Spider mites spin webbing and cause fine even stippling, while flat mites make sunken pitted patches with no webbing.",
      },
      {
        condition: "Sunburn or edema on orchid leaves",
        differentiator:
          "Sunburn is a localized bleached patch and edema forms corky blisters, neither of which harbors the flat mites and red eggs seen with a lens.",
      },
    ],
    immediateActions: [
      "Isolate the orchid and inspect leaf surfaces under a hand lens for flat mites and red eggs.",
      "Wipe both leaf surfaces with a damp cloth to physically remove mites and eggs from smooth foliage.",
    ],
    treatments: [
      {
        situation: "Home collection",
        treatment:
          "Apply insecticidal soap or horticultural oil to all leaf surfaces every seven days for several cycles.",
      },
      {
        situation: "Persistent greenhouse infestation",
        treatment:
          "Rotate a labeled miticide effective on Brevipalpus mites and improve spacing and airflow.",
      },
    ],
    avoid: [
      "Do not mistake the pitting for disease and apply fungicide, which will not touch the mites.",
      "Avoid crowding orchids together, which lets flat mites spread slowly through the collection.",
    ],
    recoveryTimeline:
      "Mite control stops new pitting within a few weeks, but damaged leaves stay scarred until they are naturally shed.",
    prevention: [
      "Quarantine new orchids and inspect leaf surfaces with a lens before adding them to a collection.",
      "Provide good airflow and adequate spacing to make conditions less favorable for flat mites.",
    ],
    monitoringThresholds: [
      "Inspect leaf surfaces monthly with a hand lens and treat at the first sign of pitting or red eggs.",
    ],
    escalationCriteria: [
      "Seek diagnostic confirmation if pitting spreads despite treatment, since Brevipalpus can vector orchid viruses.",
    ],
    sources: [
      {
        label: "University of Florida IFAS — Brevipalpus mites",
        url: "https://edis.ifas.ufl.edu/publication/IN1146",
      },
    ],
  },
  {
    id: "tomato-spider-mite-greenhouse",
    name: "Twospotted Spider Mite (Greenhouse Crops)",
    category: "mite-pest",
    affectedPlants: ["specialty-cultivation", "ornamentals"],
    specificHosts: ["Rose", "Chrysanthemum", "Cucumber", "Poinsettia", "Impatiens"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["leaf undersides", "growing tips", "flower petals"],
    symptomProgression:
      "In the stable warmth of greenhouses mites reproduce continuously, spreading from hotspots to whole benches with stippling, webbing, and defoliation that ruins crop quality if unchecked.",
    observableSigns: [
      "Discrete hotspots of stippled, webbed plants appear on benches and expand outward.",
      "Fine webbing bridges growing tips and can trap petals and reduce flower marketability.",
      "Mites and eggs crowd leaf undersides, easily seen by tapping foliage over white paper.",
    ],
    favorableConditions: [
      "Constant greenhouse warmth and low humidity allow overlapping generations year round.",
      "Dense benching and dry, dusty conditions let mites spread quickly between plants.",
    ],
    lookalikes: [
      {
        condition: "Broad mite injury",
        differentiator:
          "Broad mites distort only new growth without webbing, while twospotted mites stipple and web across older and new leaves.",
      },
      {
        condition: "Nutrient stippling from magnesium deficiency",
        differentiator:
          "Magnesium deficiency yellows interveinal tissue smoothly with no mites or webbing on the undersides.",
      },
    ],
    immediateActions: [
      "Flag and isolate hotspot plants and consider removing the worst to slow bench-wide spread.",
      "Tap-test suspect plants over white paper to gauge mite pressure before treating.",
    ],
    treatments: [
      {
        situation: "Integrated pest management program",
        treatment:
          "Release predatory mites such as Phytoseiulus persimilis onto hotspots early and support them with selective products.",
      },
      {
        situation: "Chemical rotation for outbreaks",
        treatment:
          "Rotate labeled miticides across different mode-of-action groups to manage resistance in continuous crops.",
      },
    ],
    avoid: [
      "Do not repeat a single miticide class, which quickly selects for resistant mite populations.",
      "Avoid pyrethroid sprays that destroy predatory mites and cause explosive spider mite flare-ups.",
    ],
    recoveryTimeline:
      "Biological or chemical control reduces populations within one to three weeks, though damaged foliage remains scarred.",
    prevention: [
      "Maintain preventive predatory mite releases and adequate humidity in mite-prone crops.",
      "Scout weekly and remove weeds and crop debris that harbor overwintering mites.",
    ],
    monitoringThresholds: [
      "Scout benches weekly and intensify control when hotspots exceed a few mites per leaf or webbing appears.",
    ],
    escalationCriteria: [
      "Bring in an IPM consultant if resistance suspected and rotations fail to hold populations down.",
    ],
    sources: [
      {
        label: "University of Massachusetts Extension — Twospotted spider mite",
        url: "https://ag.umass.edu/greenhouse-floriculture/fact-sheets/twospotted-spider-mite",
      },
    ],
  },
  {
    id: "southern-red-mite-shrubs",
    name: "Southern Red Mite (Broadleaf Shrubs)",
    category: "mite-pest",
    affectedPlants: ["trees-shrubs", "ornamentals"],
    specificHosts: ["Azalea", "Camellia", "Holly", "Rhododendron", "Japanese pieris"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["leaf undersides", "older leaves", "lower canopy"],
    symptomProgression:
      "This cool-season mite feeds mostly on leaf undersides in spring and fall, bronzing and stippling foliage that fades to gray-green, then dropping leaves and thinning the shrub if uncontrolled.",
    observableSigns: [
      "Leaves take on a dull bronze or gray-green cast with fine stippling from below.",
      "Leaf undersides carry mites, cast skins, and specks of frass visible with a hand lens.",
      "Damage worsens in spring and fall and slows in the heat of midsummer.",
    ],
    favorableConditions: [
      "Cool spring and fall temperatures drive this cool-season mite on broadleaf evergreens.",
      "Shaded, sheltered plantings of azalea and holly build heavier populations.",
    ],
    lookalikes: [
      {
        condition: "Lace bug injury",
        differentiator:
          "Lace bugs leave dark, varnish-like fecal spots on leaf undersides, while southern red mite leaves fine stippling and no shiny frass spots.",
      },
      {
        condition: "Iron chlorosis on azalea",
        differentiator:
          "Iron chlorosis yellows between green veins on new leaves, whereas mite bronzing is a fine even stipple on older leaves with mites present.",
      },
    ],
    immediateActions: [
      "Tap foliage over white paper in spring or fall to confirm active mites before treating.",
      "Hose off accessible undersides to knock down mites in light early infestations.",
    ],
    treatments: [
      {
        situation: "Cool-season active mites",
        treatment:
          "Apply horticultural oil or a labeled miticide in spring or fall when mites are active, not in summer.",
      },
      {
        situation: "Egg suppression",
        treatment:
          "Use a dormant-rate oil to smother overwintering eggs on heavily infested shrubs.",
      },
    ],
    avoid: [
      "Do not spray only in summer, since this cool-season mite is largely inactive in the heat.",
      "Avoid broad-spectrum insecticides that kill the predatory mites keeping populations down.",
    ],
    recoveryTimeline:
      "Control halts new stippling within a couple of weeks, but bronzed evergreen leaves stay discolored until replaced.",
    prevention: [
      "Monitor susceptible evergreens in spring and fall so treatment targets active mites.",
      "Keep shrubs healthy and avoid dusty, drought-stressed sites that intensify feeding damage.",
    ],
    monitoringThresholds: [
      "Tap test weekly during cool seasons and treat when many mites drop onto the paper.",
    ],
    escalationCriteria: [
      "Consult an arborist or extension office for large hedge plantings with progressive thinning and dieback.",
    ],
    sources: [
      {
        label: "NC State Extension — Southern red mite",
        url: "https://content.ces.ncsu.edu/southern-red-mite",
      },
    ],
  },
  {
    id: "boxwood-mite-shrubs",
    name: "Boxwood Spider Mite (Shrubs)",
    category: "mite-pest",
    affectedPlants: ["trees-shrubs", "ornamentals"],
    specificHosts: ["Boxwood", "Common box", "Littleleaf boxwood"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["upper and lower leaf surfaces", "older leaves", "shaded interior"],
    symptomProgression:
      "Feeding produces fine white to yellow scratch-like stippling on boxwood leaves in late spring, which becomes a pinstriped, dingy look and, under heavy pressure, leaf bronzing and drop.",
    observableSigns: [
      "Leaves show fine linear white or yellow flecking that resembles tiny scratch marks.",
      "Foliage develops a dull, dingy, stippled appearance across older interior leaves.",
      "Small mites and eggs are found on both leaf surfaces with a hand lens in spring.",
    ],
    favorableConditions: [
      "Warm late-spring weather triggers the main generations of this boxwood-specific mite.",
      "Stressed, dusty, or crowded boxwood hedges develop the heaviest stippling.",
    ],
    lookalikes: [
      {
        condition: "Boxwood leafminer damage",
        differentiator:
          "Leafminer causes raised blotchy blisters with larvae inside, while mite injury is a fine surface stippling with no blisters.",
      },
      {
        condition: "Winter bronzing of boxwood",
        differentiator:
          "Winter bronzing is a uniform seasonal color change that greens up in spring, unlike the persistent scratch-like mite stipple.",
      },
    ],
    immediateActions: [
      "Inspect both leaf surfaces with a lens in late spring to confirm mites before spraying.",
      "Wash foliage with a strong water jet to remove dust and knock down light mite numbers.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply horticultural oil or insecticidal soap to both leaf surfaces when mites are active in spring.",
      },
      {
        situation: "Heavy stippling",
        treatment:
          "Apply a labeled miticide and repeat per label to catch overlapping spring generations.",
      },
    ],
    avoid: [
      "Do not spray in the heat of summer, since boxwood mite activity peaks in warm late spring.",
      "Avoid broad-spectrum insecticides that remove natural enemies and can worsen the problem.",
    ],
    recoveryTimeline:
      "Control stops new stippling quickly, but the fine scratch marks persist on affected leaves until they drop.",
    prevention: [
      "Keep boxwood vigorous, mulched, and free of dust, and avoid overcrowded plantings.",
      "Scout hedges each spring so treatment coincides with the active mite generations.",
    ],
    monitoringThresholds: [
      "Check foliage weekly in late spring and treat when live mites and fresh stippling are widespread.",
    ],
    escalationCriteria: [
      "Consult extension services if a formal boxwood hedge shows severe recurring stippling and thinning.",
    ],
    sources: [
      {
        label: "University of Maryland Extension — Boxwood spider mite",
        url: "https://extension.umd.edu/resource/spider-mites-trees-and-shrubs/",
      },
    ],
  },
  {
    id: "european-red-mite-fruit-trees",
    name: "European Red Mite (Fruit Trees)",
    category: "mite-pest",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Apple", "Pear", "Plum", "Cherry", "Peach"],
    growthStages: ["vegetative", "fruiting", "mature"],
    symptomLocations: ["upper leaf surface", "whole canopy", "leaf veins"],
    symptomProgression:
      "Feeding bronzes leaves progressively from summer heat, reducing photosynthesis so fruit size, color, and next year's bud set decline as populations peak in hot, dry midsummer weather.",
    observableSigns: [
      "Leaves lose their glossy green and turn a dull bronze across the whole canopy.",
      "Reddish mites and bright red spherical overwintering eggs cluster on twigs and bud bases.",
      "Bronzing reduces fruit sizing and finish when populations are high during fruit development.",
    ],
    favorableConditions: [
      "Hot, dry midsummer weather drives rapid buildup of European red mite in orchards.",
      "Overuse of broad-spectrum insecticides that kill predatory mites triggers severe outbreaks.",
    ],
    lookalikes: [
      {
        condition: "Twospotted spider mite",
        differentiator:
          "Twospotted mites are greenish with dark spots and spin webbing, while European red mite is brick red and produces little webbing.",
      },
      {
        condition: "Potassium deficiency scorch",
        differentiator:
          "Potassium deficiency scorches leaf margins on older leaves, unlike the whole-leaf bronzing and red eggs of red mite.",
      },
    ],
    immediateActions: [
      "Check overwintering red egg density on twigs at the delayed-dormant stage to plan control.",
      "Sample leaves in season and count mites to compare against orchard treatment thresholds.",
    ],
    treatments: [
      {
        situation: "Delayed-dormant timing",
        treatment:
          "Apply horticultural oil at the delayed-dormant stage to smother overwintering red eggs.",
      },
      {
        situation: "In-season threshold reached",
        treatment:
          "Apply a labeled selective miticide when mite counts per leaf exceed the orchard threshold.",
      },
    ],
    avoid: [
      "Do not spray broad-spectrum insecticides that destroy predatory mites and flare red mite populations.",
      "Avoid repeating one miticide class season after season, which selects for resistance.",
    ],
    recoveryTimeline:
      "Miticide treatment lowers populations within days to a week, but bronzed leaves stay discolored through the season.",
    prevention: [
      "Preserve predatory mites like Typhlodromus with selective insecticide choices.",
      "Use delayed-dormant oil in blocks with a history of high overwintering egg counts.",
    ],
    monitoringThresholds: [
      "Count mites on leaf samples weekly in summer and treat when counts reach the published per-leaf threshold.",
    ],
    escalationCriteria: [
      "Consult a pomology or IPM advisor for area-wide resistance management in commercial orchards.",
    ],
    sources: [
      {
        label: "Penn State Extension — European red mite",
        url: "https://extension.psu.edu/european-red-mite-in-tree-fruit",
      },
    ],
  },
  {
    id: "tomato-broad-mite-peppers",
    name: "Broad Mite (Peppers)",
    category: "mite-pest",
    affectedPlants: ["vegetable-garden", "specialty-cultivation"],
    specificHosts: ["Bell pepper", "Chili pepper", "Hot pepper"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["new growth", "growing tips", "fruit surface"],
    symptomProgression:
      "Broad mites inject toxic saliva into pepper growing points, curling and hardening young leaves downward, corking the fruit surface, and stunting the terminal until yields collapse if untreated.",
    observableSigns: [
      "Young pepper leaves curl downward, thicken, and take on a dull bronze or purplish sheen.",
      "Fruit develops a russeted, corky, or bronzed skin that downgrades quality.",
      "Growing tips stall and become brittle, with damage focused on the newest tissue.",
    ],
    favorableConditions: [
      "Warm, humid greenhouse and field conditions speed broad mite reproduction on peppers.",
      "Dense pepper plantings let the microscopic mites move quickly to new growing points.",
    ],
    lookalikes: [
      {
        condition: "2,4-D or herbicide drift",
        differentiator:
          "Herbicide drift twists many plant species uniformly across an area, while broad mite damage is patchy and spreads plant to plant.",
      },
      {
        condition: "Calcium-related leaf distortion",
        differentiator:
          "Calcium disorders cause tip burn and blossom-end rot, not the downcurled bronzed tips and corky fruit of broad mite.",
      },
    ],
    immediateActions: [
      "Prune and bag distorted growing tips where mites are concentrated to lower the population.",
      "Isolate affected plants and wash hands and tools to prevent carrying mites to healthy peppers.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply wettable sulfur to new growth thoroughly and repeat every few days per label directions.",
      },
      {
        situation: "Greenhouse biocontrol",
        treatment:
          "Release predatory mites such as Amblyseius swirskii early to suppress broad mite on peppers.",
      },
    ],
    avoid: [
      "Do not keep feeding nitrogen to force soft growth, which the mites exploit and multiply on.",
      "Avoid moving between rows without sanitizing, since broad mites spread easily by contact.",
    ],
    recoveryTimeline:
      "Clean new growth resumes within two to four weeks of control, but corked fruit and twisted leaves do not recover.",
    prevention: [
      "Inspect transplants under magnification for tip curling before setting them out.",
      "Use predatory mites preventively in greenhouses with a broad mite history.",
    ],
    monitoringThresholds: [
      "Scout growing tips twice weekly with a lens and treat at the first sign of tip curling.",
    ],
    escalationCriteria: [
      "Submit distorted tips to a diagnostic lab if damage persists despite sulfur, to confirm the mite.",
    ],
    sources: [
      {
        label: "University of Florida IFAS — Broad mite",
        url: "https://edis.ifas.ufl.edu/publication/IN1252",
      },
    ],
  },
  {
    id: "spider-mite-succulents",
    name: "Spider Mite Damage (Succulents and Cacti)",
    category: "mite-pest",
    affectedPlants: ["succulents-cacti", "houseplants"],
    specificHosts: ["Cactus", "Echeveria", "Aloe", "Sedum", "Haworthia"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["growing tips", "stem apex", "new pads or leaves"],
    symptomProgression:
      "Mites feed on the tender epidermis at growing tips, causing a rusty, tan, or corky scarring that hardens permanently and spreads over the apex, disfiguring the plant while rarely killing it.",
    observableSigns: [
      "Growing tips and new pads develop a tan, rusty, or corky scarred patch that hardens.",
      "Fine webbing may appear over the apex of cacti under heavier infestations.",
      "Tiny mites are visible with a lens on the tender apical tissue where feeding concentrates.",
    ],
    favorableConditions: [
      "Hot, dry, dusty indoor and greenhouse conditions favor mites on succulents.",
      "Crowded collections let mites move to the soft growing tips of neighboring plants.",
    ],
    lookalikes: [
      {
        condition: "Sunburn or scorch on succulents",
        differentiator:
          "Sunburn bleaches or browns the sun-facing surface, while mite scarring is a rusty corky patch at the growing tip with mites present.",
      },
      {
        condition: "Edema or corky scab",
        differentiator:
          "Edema forms raised corky blisters from overwatering with no mites, unlike the flat rusty scarring and webbing of mite feeding.",
      },
    ],
    immediateActions: [
      "Inspect apical tissue with a hand lens to confirm mites, since damage looks like a physical injury.",
      "Isolate the plant and rinse or brush the tip gently to knock down mites and dust.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply insecticidal soap or a light horticultural oil carefully, testing first for sensitivity on succulents.",
      },
      {
        situation: "Persistent infestation",
        treatment:
          "Use a labeled miticide and improve airflow and spacing to prevent reinfestation.",
      },
    ],
    avoid: [
      "Do not drench a heavy oil over dense rosettes, which can pool and rot the crown.",
      "Avoid keeping plants dusty and crowded, which encourages mites on the growing tips.",
    ],
    recoveryTimeline:
      "Mite control stops new scarring, but the corky tip damage is permanent and only new clean growth looks normal.",
    prevention: [
      "Keep succulents spaced with good airflow and periodically clean dust from surfaces.",
      "Quarantine new plants and inspect growing tips before adding them to a collection.",
    ],
    monitoringThresholds: [
      "Check growing tips monthly with a lens and treat at the first sign of fresh rusty scarring.",
    ],
    escalationCriteria: [
      "Discard a specimen if scarring keeps spreading through the crown despite repeated treatment.",
    ],
    sources: [
      {
        label: "UC IPM — Spider mites",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7405.html",
      },
    ],
  },
  {
    id: "root-knot-nematode-vegetables",
    name: "Root-Knot Nematode (Vegetable Garden)",
    category: "nematode-pest",
    affectedPlants: ["vegetable-garden", "herbs"],
    specificHosts: ["Tomato", "Cucumber", "Carrot", "Okra", "Bean"],
    growthStages: ["seed-seedling", "vegetative", "fruiting"],
    symptomLocations: ["roots", "root galls", "whole plant aboveground"],
    symptomProgression:
      "Larvae invade roots and induce galls that block water and nutrient flow, so plants show patchy stunting, midday wilting, and yellowing that worsens through the season while root galling enlarges.",
    observableSigns: [
      "Roots bear characteristic swollen galls that cannot be rubbed off, unlike beneficial rhizobia nodules.",
      "Aboveground plants are stunted, wilt in midday heat, and yellow despite adequate water.",
      "Damage appears in patches or spreading circles across a bed rather than uniformly.",
    ],
    favorableConditions: [
      "Warm, sandy soils and continuous host cropping build high root-knot nematode populations.",
      "Long, warm growing seasons allow several nematode generations per year.",
    ],
    lookalikes: [
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen deficiency yellows uniformly and roots look normal, while root-knot causes swollen root galls with patchy stunting.",
      },
      {
        condition: "Rhizobium nodules on legumes",
        differentiator:
          "Beneficial nodules attach loosely and rub off easily, whereas root-knot galls are swellings of the root itself that cannot be removed.",
      },
    ],
    immediateActions: [
      "Dig a few declining plants and inspect roots for galls to confirm nematodes as the cause.",
      "Remove and destroy severely galled roots rather than leaving them to seed the soil.",
    ],
    treatments: [
      {
        situation: "Home garden cultural control",
        treatment:
          "Rotate to non-host crops, plant resistant tomato varieties marked with the letter N, and add organic matter.",
      },
      {
        situation: "Off-season soil suppression",
        treatment:
          "Solarize infested beds with clear plastic during the hottest weeks or grow a suppressive cover crop.",
      },
    ],
    avoid: [
      "Do not replant the same susceptible crop into a galled bed, which multiplies the population.",
      "Avoid moving soil or tools from infested to clean beds without cleaning them first.",
    ],
    recoveryTimeline:
      "Rotation, resistant varieties, and solarization lower populations over one to two seasons rather than immediately.",
    prevention: [
      "Rotate with non-host or resistant crops and avoid back-to-back susceptible vegetables.",
      "Build soil organic matter and maintain good moisture to help plants tolerate nematodes.",
    ],
    monitoringThresholds: [
      "Submit a soil sample for a nematode assay when patchy stunting recurs, to measure population levels.",
    ],
    escalationCriteria: [
      "Send soil and roots to a diagnostic lab when patchy decline persists to identify species and thresholds.",
    ],
    sources: [
      {
        label: "Clemson Cooperative Extension — Root-knot nematodes",
        url: "https://hgic.clemson.edu/factsheet/nematodes-in-the-vegetable-garden/",
      },
    ],
  },
  {
    id: "root-knot-nematode-ornamentals",
    name: "Root-Knot Nematode (Ornamentals)",
    category: "nematode-pest",
    affectedPlants: ["ornamentals", "trees-shrubs"],
    specificHosts: ["Rose", "Boxwood", "Hibiscus", "Gardenia", "Begonia"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["roots", "root galls", "whole plant aboveground"],
    symptomProgression:
      "Galling of feeder roots gradually reduces uptake, producing slow decline, poor vigor, off-color foliage, and dieback in landscape ornamentals that fails to respond to fertilizer or water.",
    observableSigns: [
      "Feeder roots carry beaded galls, and the root system is reduced and unproductive.",
      "Plants lack vigor, show off-color or undersized leaves, and decline slowly despite good care.",
      "Symptoms often center on warm, sandy areas of a bed or planting.",
    ],
    favorableConditions: [
      "Warm sandy soils and long growing seasons favor root-knot nematode on ornamentals.",
      "Repeated planting of susceptible species in the same soil raises populations.",
    ],
    lookalikes: [
      {
        condition: "Root rot from poor drainage",
        differentiator:
          "Root rot produces dark, mushy, foul roots, while root-knot leaves firm roots covered in discrete swollen galls.",
      },
      {
        condition: "Micronutrient deficiency",
        differentiator:
          "Nutrient deficiencies show characteristic foliar patterns with normal roots, unlike the galled roots of nematode injury.",
      },
    ],
    immediateActions: [
      "Lift a declining plant and examine roots for galls before assuming a nutrient or watering issue.",
      "Improve soil organic matter and irrigation to help affected plants tolerate the damage.",
    ],
    treatments: [
      {
        situation: "Landscape renovation",
        treatment:
          "Replace heavily infested susceptible plants with nematode-resistant or tolerant species in amended soil.",
      },
      {
        situation: "Soil population reduction",
        treatment:
          "Solarize the bed in summer or incorporate suppressive organic amendments before replanting.",
      },
    ],
    avoid: [
      "Do not replant the same susceptible ornamental into infested soil expecting better results.",
      "Avoid spreading galled root balls or contaminated soil to new landscape areas.",
    ],
    recoveryTimeline:
      "Tolerant plantings and soil management improve landscape performance over one or more seasons, not overnight.",
    prevention: [
      "Choose resistant or tolerant ornamentals for sites with a nematode history.",
      "Add organic matter and rotate planting locations to keep populations low.",
    ],
    monitoringThresholds: [
      "Have a nematode soil assay run when replacement plants also decline, to measure the population.",
    ],
    escalationCriteria: [
      "Consult an extension diagnostic lab to confirm nematode species before major landscape renovation.",
    ],
    sources: [
      {
        label: "UC IPM — Nematodes",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7489.html",
      },
    ],
  },
  {
    id: "soybean-cyst-nematode",
    name: "Soybean Cyst Nematode",
    category: "nematode-pest",
    affectedPlants: ["specialty-cultivation", "vegetable-garden"],
    specificHosts: ["Soybean", "Edible bean", "Vetch"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["roots", "root surface cysts", "field patches"],
    symptomProgression:
      "Females feed on roots and swell into cysts, robbing the plant so fields show elongated patches of stunting and yellowing that expand along cultivation direction, often with yield loss before symptoms are obvious.",
    observableSigns: [
      "Tiny lemon-shaped white to yellow cysts, smaller than nitrogen nodules, stud the roots when carefully dug.",
      "Plants are stunted and chlorotic in oval or elongated field patches that follow tillage.",
      "Root systems are reduced with fewer beneficial nodules under heavy infestation.",
    ],
    favorableConditions: [
      "Continuous soybean cropping and sandy or high-pH soils build soybean cyst nematode populations.",
      "Warm soils and long seasons let multiple generations develop each year.",
    ],
    lookalikes: [
      {
        condition: "Iron deficiency chlorosis",
        differentiator:
          "Iron chlorosis yellows new leaves interveinally with no cysts on roots, while cyst nematode causes patchy stunting with cysts present.",
      },
      {
        condition: "Rhizobium nodules",
        differentiator:
          "Nitrogen nodules are larger, pinkish inside, and attach loosely, whereas cysts are tiny, lemon-shaped, and embedded on the root surface.",
      },
    ],
    immediateActions: [
      "Dig roots carefully during the season and inspect for tiny white or yellow cysts to confirm.",
      "Collect a soil sample from affected patches for a laboratory cyst count.",
    ],
    treatments: [
      {
        situation: "Rotation and resistance",
        treatment:
          "Rotate to non-host crops such as corn and plant resistant soybean varieties with differing resistance sources.",
      },
      {
        situation: "Seed protection",
        treatment:
          "Use a labeled nematode-protectant seed treatment as part of an integrated program in infested fields.",
      },
    ],
    avoid: [
      "Do not grow continuous soybean, which drives populations and yield loss steadily upward.",
      "Avoid moving soil on equipment between fields without cleaning, which spreads cysts.",
    ],
    recoveryTimeline:
      "Populations decline gradually over multiple rotation years and never disappear entirely once established.",
    prevention: [
      "Rotate with non-hosts and alternate resistance sources to slow nematode adaptation.",
      "Clean equipment between fields and manage weed hosts to limit spread.",
    ],
    monitoringThresholds: [
      "Sample soil for cyst egg counts every few years and adjust rotation when counts climb.",
    ],
    escalationCriteria: [
      "Send samples to a diagnostic lab when resistant varieties still show damage, indicating shifting nematode populations.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Soybean cyst nematode",
        url: "https://extension.umn.edu/pest-management/soybean-cyst-nematode",
      },
    ],
  },
  {
    id: "potato-cyst-nematode",
    name: "Potato Cyst Nematode",
    category: "nematode-pest",
    affectedPlants: ["vegetable-garden", "specialty-cultivation"],
    specificHosts: ["Potato", "Tomato", "Eggplant"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["roots", "root cysts", "field patches"],
    symptomProgression:
      "Cyst-forming females on potato roots cause patchy poor growth, premature yellowing, and small tubers, with damage expanding in the field over successive potato crops and reducing yield markedly.",
    observableSigns: [
      "Round white, yellow, or brown cysts about pinhead size attach to potato roots when dug.",
      "Plants in affected patches are stunted, yellow early, and set undersized tubers.",
      "Poor patches enlarge with each susceptible potato crop grown in the field.",
    ],
    favorableConditions: [
      "Repeated potato cropping in cool-temperate soils favors potato cyst nematode buildup.",
      "Movement of infested soil, tubers, and equipment spreads the nematode to new ground.",
    ],
    lookalikes: [
      {
        condition: "Root-knot nematode",
        differentiator:
          "Root-knot swells the root into galls, while potato cyst nematode forms detachable round cysts on the root surface.",
      },
      {
        condition: "Verticillium wilt (early die)",
        differentiator:
          "Verticillium causes internal vascular browning and wilting, whereas cyst nematode leaves visible surface cysts and patchy stunting.",
      },
    ],
    immediateActions: [
      "Report suspected potato cyst nematode to authorities, since it is a regulated quarantine pest in many regions.",
      "Do not move soil, tubers, or equipment from a suspect field until it is assessed.",
    ],
    treatments: [
      {
        situation: "Regulated management",
        treatment:
          "Follow official quarantine and regulatory programs, using resistant varieties and long rotations as directed.",
      },
      {
        situation: "Population reduction",
        treatment:
          "Use extended rotations away from host crops and certified clean seed potatoes in a managed program.",
      },
    ],
    avoid: [
      "Do not ignore quarantine rules, since spreading this regulated pest carries serious consequences.",
      "Avoid saving and replanting seed potatoes from infested ground.",
    ],
    recoveryTimeline:
      "Managed rotation lowers viable cysts only slowly over many years because eggs survive long in the soil.",
    prevention: [
      "Plant only certified clean seed potatoes and follow strict sanitation of soil and equipment.",
      "Use resistant varieties and long rotations under an official management plan.",
    ],
    monitoringThresholds: [
      "Sample fields per regulatory protocol and act on any detection of viable cysts.",
    ],
    escalationCriteria: [
      "Immediately contact your state or national plant protection agency if potato cyst nematode is suspected.",
    ],
    sources: [
      {
        label: "USDA APHIS — Potato cyst nematode",
        url: "https://www.aphis.usda.gov/plant-pests-diseases/pcn",
      },
    ],
  },
  {
    id: "root-lesion-nematode",
    name: "Root-Lesion Nematode",
    category: "nematode-pest",
    affectedPlants: ["fruit-trees", "vegetable-garden", "specialty-cultivation"],
    specificHosts: ["Apple", "Cherry", "Corn", "Strawberry", "Potato"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["roots", "root cortex", "feeder roots"],
    symptomProgression:
      "Migratory nematodes tunnel through the root cortex, leaving dark lesions that girdle and kill feeder roots, so plants slowly lose vigor, show patchy stunting, and become more prone to root-rot fungi over time.",
    observableSigns: [
      "Feeder roots show dark brown to black elongated lesions and reduced, pruned root systems.",
      "Plants are stunted in patches with poor vigor that does not respond to fertilizer.",
      "Lesioned roots are often invaded secondarily by fungi, compounding the decline.",
    ],
    favorableConditions: [
      "A wide host range and continuous cropping build root-lesion nematode populations.",
      "Cool to moderate soils with susceptible perennials and cover crops sustain the pest.",
    ],
    lookalikes: [
      {
        condition: "Fungal root rot",
        differentiator:
          "Root rot alone causes soft decaying roots, while lesion nematode produces discrete dark cortical lesions that a lab assay confirms.",
      },
      {
        condition: "Root-knot nematode",
        differentiator:
          "Root-knot swells roots into galls, whereas lesion nematode leaves sunken dark lesions without galling.",
      },
    ],
    immediateActions: [
      "Collect roots and soil from declining plants for a laboratory nematode assay.",
      "Remove and destroy heavily lesioned roots and avoid spreading the soil.",
    ],
    treatments: [
      {
        situation: "Perennial and orchard sites",
        treatment:
          "Use nematode-tested planting stock, rotation, and preplant fallow or cover cropping to lower populations before replanting.",
      },
      {
        situation: "Annual crop rotation",
        treatment:
          "Rotate to poor-host crops and incorporate suppressive cover crops to reduce lesion nematode numbers.",
      },
    ],
    avoid: [
      "Do not replant susceptible perennials into infested soil without lowering the population first.",
      "Avoid moving contaminated soil and unwashed equipment to clean ground.",
    ],
    recoveryTimeline:
      "Population reduction through rotation and fallow takes one or more seasons and rarely eradicates the nematode.",
    prevention: [
      "Plant nematode-tested stock and rotate with poor-host or cover crops before establishing perennials.",
      "Maintain soil organic matter and vigor to help plants tolerate root damage.",
    ],
    monitoringThresholds: [
      "Run a nematode soil assay before replanting and when patchy decline recurs.",
    ],
    escalationCriteria: [
      "Send samples to a diagnostic lab to confirm species and thresholds before orchard replanting.",
    ],
    sources: [
      {
        label: "UC IPM — Nematodes",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7489.html",
      },
    ],
  },
  {
    id: "foliar-nematode-hosta",
    name: "Foliar Nematode (Hosta and Ferns)",
    category: "nematode-pest",
    affectedPlants: ["ornamentals", "houseplants"],
    specificHosts: ["Hosta", "Fern", "Anemone", "Chrysanthemum", "Begonia"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["leaves between veins", "leaf blades", "lower to upper leaves"],
    symptomProgression:
      "Nematodes swim in surface water films into leaves and feed between the veins, producing angular yellow then brown wedge-shaped bands that are sharply bounded by the leaf veins and expand upward through the plant.",
    observableSigns: [
      "Angular brown interveinal bands stop abruptly at the leaf veins, giving a striped appearance.",
      "On hosta the wedges run parallel between parallel veins, an unmistakable diagnostic pattern.",
      "Chopped symptomatic leaf pieces placed in water release swimming nematodes visible under magnification.",
    ],
    favorableConditions: [
      "Wet foliage from overhead watering or rain lets foliar nematodes swim and enter leaves.",
      "Crowded shady plantings that stay damp promote leaf-to-leaf spread.",
    ],
    lookalikes: [
      {
        condition: "Fungal or bacterial leaf spot",
        differentiator:
          "Leaf spots are rounded with defined margins, while foliar nematode bands are angular and sharply bounded by the leaf veins.",
      },
      {
        condition: "Sunscald or drought scorch",
        differentiator:
          "Scorch browns leaf margins and tips generally, unlike the vein-bounded interveinal wedges of foliar nematode.",
      },
    ],
    immediateActions: [
      "Remove and bag symptomatic leaves and avoid composting them near host plants.",
      "Switch to ground-level watering to keep foliage dry and stop nematode movement.",
    ],
    treatments: [
      {
        situation: "Valuable specimen plants",
        treatment:
          "Rogue heavily infested plants and destroy them, since foliar nematodes are very difficult to eradicate.",
      },
      {
        situation: "Cultural suppression",
        treatment:
          "Keep foliage dry, space plants, and remove infested debris to slow spread through a planting.",
      },
    ],
    avoid: [
      "Do not water overhead, which spreads foliar nematodes rapidly across and between plants.",
      "Avoid propagating or sharing divisions from infested stock, which transmits the nematode.",
    ],
    recoveryTimeline:
      "Damaged leaves never recover, and reducing spread through sanitation and dry foliage takes the rest of the season.",
    prevention: [
      "Buy clean stock, water at the base, and space plants for airflow to keep leaves dry.",
      "Remove and destroy infested foliage and debris rather than leaving it in the bed.",
    ],
    monitoringThresholds: [
      "Inspect lower leaves for angular banding through the season and act at the first striped leaves.",
    ],
    escalationCriteria: [
      "Confirm with a diagnostic lab by the water-soak test before discarding valuable specimens.",
    ],
    sources: [
      {
        label: "University of Wisconsin Horticulture — Foliar nematode",
        url: "https://hort.extension.wisc.edu/articles/foliar-nematode/",
      },
    ],
  },
  {
    id: "pinewood-nematode",
    name: "Pinewood Nematode (Pine Wilt)",
    category: "nematode-pest",
    affectedPlants: ["trees-shrubs"],
    specificHosts: ["Scots pine", "Austrian pine", "Japanese black pine", "Mugo pine"],
    growthStages: ["mature"],
    symptomLocations: ["whole tree crown", "needles", "wood and vascular tissue"],
    symptomProgression:
      "Nematodes carried by pine sawyer beetles multiply in the wood, blocking resin canals and water flow so a susceptible pine fades from green to gray-green to brown and dies rapidly, often within a single season.",
    observableSigns: [
      "Entire tree browns quickly, frequently over a few weeks in late summer, with needles remaining attached.",
      "Reduced or absent resin flow occurs when the trunk is wounded, unlike healthy pines.",
      "Wood chips soaked in water release many small nematodes seen under a microscope.",
    ],
    favorableConditions: [
      "Hot summers and drought stress accelerate pine wilt in susceptible exotic pines.",
      "Populations of pine sawyer beetle vectors move nematodes between trees.",
    ],
    lookalikes: [
      {
        condition: "Diplodia tip blight",
        differentiator:
          "Diplodia kills shoot tips and candles progressively with fungal fruiting bodies, while pine wilt browns the whole tree rapidly with abundant wood nematodes.",
      },
      {
        condition: "Drought or root damage decline",
        differentiator:
          "Drought decline is usually gradual and partial, whereas pine wilt causes fast whole-tree death with nematodes confirmed in the wood.",
      },
    ],
    immediateActions: [
      "Have a rapidly wilting exotic pine sampled and lab-tested for pinewood nematode.",
      "Plan prompt removal of confirmed infected trees to reduce beetle vector breeding sites.",
    ],
    treatments: [
      {
        situation: "Confirmed infected tree",
        treatment:
          "Remove and destroy the tree by chipping or burning before beetles emerge to carry nematodes onward.",
      },
      {
        situation: "High-value uninfected specimens",
        treatment:
          "Consider preventive trunk-injected nematicide by a certified arborist on valuable susceptible pines.",
      },
    ],
    avoid: [
      "Do not stockpile infected pine wood, which shelters vector beetles that spread the nematode.",
      "Avoid planting highly susceptible exotic pines on hot, droughty sites in wilt-prone regions.",
    ],
    recoveryTimeline:
      "An infected susceptible pine does not recover and typically dies within a season, so management is prevention and removal.",
    prevention: [
      "Plant resistant native pines or non-pine conifers on high-risk sites.",
      "Promptly remove and destroy dead and dying pines to limit vector beetle populations.",
    ],
    monitoringThresholds: [
      "Watch susceptible pines in late summer and sample any tree showing rapid whole-crown browning.",
    ],
    escalationCriteria: [
      "Engage a certified arborist and diagnostic lab immediately for any suspected pine wilt case.",
    ],
    sources: [
      {
        label: "University of Nebraska–Lincoln Extension — Pine wilt",
        url: "https://extension.unl.edu/statewide/dodge/PineWilt.pdf",
      },
    ],
  },
  {
    id: "stem-and-bulb-nematode",
    name: "Stem and Bulb Nematode",
    category: "nematode-pest",
    affectedPlants: ["vegetable-garden", "ornamentals"],
    specificHosts: ["Onion", "Garlic", "Daffodil", "Tulip", "Phlox"],
    growthStages: ["seed-seedling", "vegetative", "dormant"],
    symptomLocations: ["stems", "bulbs", "leaf bases"],
    symptomProgression:
      "Nematodes invade stems and bulbs, causing swollen, twisted, and stunted growth called spikkels, then soft spongy rings within cut bulbs that rot in storage while stands thin in the field.",
    observableSigns: [
      "Leaves and stems are swollen, twisted, and stunted with a characteristic bloated deformity.",
      "Cut bulbs show brown, soft, spongy concentric rings when sliced across.",
      "Infested onion and garlic stands are patchy with distorted, collapsing plants.",
    ],
    favorableConditions: [
      "Cool, moist soils favor stem and bulb nematode on alliums and flower bulbs.",
      "Planting infested bulbs, sets, or seed spreads the nematode to clean ground.",
    ],
    lookalikes: [
      {
        condition: "Bulb rot from Fusarium",
        differentiator:
          "Fusarium basal rot decays from the base plate upward, while stem and bulb nematode causes bloated distorted tops and soft spongy internal rings.",
      },
      {
        condition: "Herbicide or growth-regulator injury",
        differentiator:
          "Herbicide injury affects an area broadly, whereas nematode distortion appears in patches and comes with infested bulbs and seed.",
      },
    ],
    immediateActions: [
      "Rogue and destroy distorted plants and any soft, ringed bulbs to reduce spread.",
      "Send suspect bulbs and stems to a diagnostic lab to confirm the nematode.",
    ],
    treatments: [
      {
        situation: "Planting stock sanitation",
        treatment:
          "Plant only certified nematode-free bulbs, sets, and seed and discard infested lots.",
      },
      {
        situation: "Field population reduction",
        treatment:
          "Rotate away from allium and bulb hosts for several years and control host weeds.",
      },
    ],
    avoid: [
      "Do not save and replant bulbs or garlic cloves from infested stock.",
      "Avoid moving infested soil, bulbs, or debris to clean planting areas.",
    ],
    recoveryTimeline:
      "Clean stock and multi-year rotation restore healthy stands over several seasons because the nematode persists in soil and debris.",
    prevention: [
      "Source certified clean planting material and rotate crops away from susceptible hosts.",
      "Practice strict field sanitation and manage weed hosts that harbor the nematode.",
    ],
    monitoringThresholds: [
      "Inspect a sample of bulbs at planting and harvest and act on any distortion or spongy rings.",
    ],
    escalationCriteria: [
      "Consult a diagnostic lab and extension office to confirm the race and plan rotation before replanting.",
    ],
    sources: [
      {
        label: "Cornell Vegetable Program — Stem and bulb nematode",
        url: "https://rvpadmin.cce.cornell.edu/uploads/doc_764.pdf",
      },
    ],
  },
  {
    id: "dagger-nematode-virus-vector",
    name: "Dagger Nematode (Virus Vector)",
    category: "nematode-pest",
    affectedPlants: ["berries", "fruit-trees", "specialty-cultivation"],
    specificHosts: ["Grape", "Raspberry", "Strawberry", "Peach"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["root tips", "roots", "whole plant aboveground"],
    symptomProgression:
      "Large ectoparasitic nematodes feed at root tips, stunting roots directly, but their major harm is transmitting nepoviruses such as fanleaf that cause progressive decline, distorted growth, and yield loss over years.",
    observableSigns: [
      "Root tips are stunted and swollen where the long dagger nematodes feed from outside.",
      "Vines and canes decline slowly with distorted, mottled, or fan-shaped leaves from vectored virus.",
      "Patches of poor growth expand where nematode and associated virus are established.",
    ],
    favorableConditions: [
      "Sandy soils and perennial hosts like grape and raspberry sustain dagger nematode populations.",
      "Long-lived plantings allow the nematode to acquire and spread nepoviruses over time.",
    ],
    lookalikes: [
      {
        condition: "Nutrient deficiency mottling",
        differentiator:
          "Deficiency mottling follows a foliar pattern with normal roots, while dagger-vectored virus shows distortion plus stunted feeding at root tips.",
      },
      {
        condition: "Root-knot nematode",
        differentiator:
          "Root-knot forms internal galls, whereas dagger nematode feeds externally at root tips and chiefly matters as a virus vector.",
      },
    ],
    immediateActions: [
      "Sample soil and roots for a nematode assay and test declining plants for nepoviruses.",
      "Avoid replanting susceptible perennials into a site with confirmed dagger nematode and virus.",
    ],
    treatments: [
      {
        situation: "Site preparation before replanting",
        treatment:
          "Use extended fallow, non-host cover crops, and virus-free certified stock before establishing perennials.",
      },
      {
        situation: "Population reduction",
        treatment:
          "Rotate to poor hosts and remove volunteer and weed hosts to lower dagger nematode numbers.",
      },
    ],
    avoid: [
      "Do not replant grapes or brambles into infested ground without a fallow and clean stock.",
      "Avoid using virus-tested stock and then planting it into unmanaged infested soil.",
    ],
    recoveryTimeline:
      "Reducing nematode and virus risk before replanting takes one or more fallow seasons, and established virus is not curable.",
    prevention: [
      "Plant certified virus-tested stock into sites managed with fallow and non-host cover crops.",
      "Sample soil for dagger nematode before establishing new perennial plantings.",
    ],
    monitoringThresholds: [
      "Run a nematode assay and virus test before replanting and when decline patches expand.",
    ],
    escalationCriteria: [
      "Consult a diagnostic lab to confirm nematode species and associated virus before replanting perennials.",
    ],
    sources: [
      {
        label: "UC IPM — Dagger nematode in grape",
        url: "https://ipm.ucanr.edu/agriculture/grape/dagger-nematode/",
      },
    ],
  },
  {
    id: "lawn-sting-nematode",
    name: "Sting Nematode (Lawns and Turf)",
    category: "nematode-pest",
    affectedPlants: ["lawns-turf"],
    specificHosts: ["Bermudagrass", "St. Augustinegrass", "Zoysiagrass", "Centipedegrass"],
    growthStages: ["all-stages"],
    symptomLocations: ["roots", "root tips", "turf patches"],
    symptomProgression:
      "Sting nematodes prune turf roots severely, so lawns show irregular thinning yellow patches that wilt fast, respond poorly to water and fertilizer, and expand during summer heat and drought stress.",
    observableSigns: [
      "Irregular thin, yellow, wilting patches appear and enlarge, resembling drought stress.",
      "Turf roots are short, dark, stubby, and abbreviated with a shallow, sparse system.",
      "Affected turf does not green up normally despite adequate water and fertilizer.",
    ],
    favorableConditions: [
      "Sandy soils in warm climates strongly favor sting nematode on turfgrasses.",
      "Heat, drought, and traffic stress make nematode damage far more visible.",
    ],
    lookalikes: [
      {
        condition: "Drought stress or dry spots",
        differentiator:
          "Dry spots recover with irrigation, while sting nematode patches stay thin and wilt-prone because roots are pruned, confirmed by a soil assay.",
      },
      {
        condition: "Chinch bug damage",
        differentiator:
          "Chinch bugs are found at the soil surface in expanding sunny patches, whereas sting nematode damage is a root problem shown by an assay.",
      },
    ],
    immediateActions: [
      "Pull a soil and root sample from the edge of a declining patch for a turf nematode assay.",
      "Raise mowing height and irrigate deeply to help stressed turf tolerate the root damage.",
    ],
    treatments: [
      {
        situation: "Cultural management",
        treatment:
          "Improve rooting with proper mowing height, deep infrequent irrigation, and balanced fertility to build tolerance.",
      },
      {
        situation: "High-value turf with high counts",
        treatment:
          "Apply a labeled turf nematicide following an assay that confirms damaging population levels.",
      },
    ],
    avoid: [
      "Do not simply add more nitrogen, which pushes top growth the pruned roots cannot support.",
      "Avoid low mowing and shallow watering, which worsen stress on nematode-damaged turf.",
    ],
    recoveryTimeline:
      "Cultural care improves turf tolerance within a season, but nematode numbers persist and patches can recur under stress.",
    prevention: [
      "Maintain deep roots with correct mowing, irrigation, and fertility on sandy sites.",
      "Avoid moving nematode-infested soil and equipment onto clean turf areas.",
    ],
    monitoringThresholds: [
      "Submit a turf nematode assay from problem patches and re-sample when decline recurs to guide treatment.",
    ],
    escalationCriteria: [
      "Consult a turf nematode diagnostic lab before applying nematicides, since counts drive the decision.",
    ],
    sources: [
      {
        label: "University of Florida IFAS — Turf nematodes",
        url: "https://edis.ifas.ufl.edu/publication/IN124",
      },
    ],
  },
  {
    id: "burrowing-nematode-tropicals",
    name: "Burrowing Nematode (Tropical Hosts)",
    category: "nematode-pest",
    affectedPlants: ["fruit-trees", "houseplants", "ornamentals"],
    specificHosts: ["Banana", "Citrus", "Anthurium", "Ornamental palm"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["roots", "root cortex", "whole plant aboveground"],
    symptomProgression:
      "Migratory burrowing nematodes tunnel through root cortex causing reddish-brown lesions and rot that destroy the root system, leading to toppling of bananas and slow decline of citrus known as spreading decline.",
    observableSigns: [
      "Roots have reddish-brown to black lesions and extensive cortical rot with a reduced system.",
      "Bananas topple readily and citrus trees decline slowly in expanding orchard patches.",
      "Aboveground plants are stunted, off-color, and prone to wilting under stress.",
    ],
    favorableConditions: [
      "Warm, moist tropical and subtropical soils favor burrowing nematode activity.",
      "Movement of infested planting material and soil spreads this regulated pest.",
    ],
    lookalikes: [
      {
        condition: "Phytophthora root rot",
        differentiator:
          "Phytophthora causes crown and root rot with characteristic lesions, while burrowing nematode leaves cortical tunneling confirmed by a nematode assay.",
      },
      {
        condition: "Root-lesion nematode",
        differentiator:
          "Both cause dark root lesions, but burrowing nematode is a regulated tropical species distinguished by laboratory identification.",
      },
    ],
    immediateActions: [
      "Report suspected burrowing nematode, since it is a regulated quarantine pest in citrus regions.",
      "Submit roots and soil to a diagnostic lab for species identification before acting.",
    ],
    treatments: [
      {
        situation: "Regulated citrus management",
        treatment:
          "Follow official quarantine programs using certified clean nursery stock and buffer requirements.",
      },
      {
        situation: "Clean planting establishment",
        treatment:
          "Plant only nematode-tested tissue-cultured or certified stock into non-infested ground.",
      },
    ],
    avoid: [
      "Do not move soil, suckers, or nursery plants from infested sites, which spreads the pest.",
      "Avoid replanting susceptible tropicals into infested ground without regulatory guidance.",
    ],
    recoveryTimeline:
      "Once established the nematode is very difficult to eradicate, so management relies on clean stock and regulation rather than cure.",
    prevention: [
      "Use certified nematode-free tissue-cultured or budded stock for new plantings.",
      "Follow strict sanitation and quarantine rules to prevent introduction and spread.",
    ],
    monitoringThresholds: [
      "Sample roots and soil per regulatory protocol and act on any confirmed detection.",
    ],
    escalationCriteria: [
      "Immediately contact plant protection authorities if burrowing nematode is suspected in citrus.",
    ],
    sources: [
      {
        label: "University of Florida IFAS — Burrowing nematode",
        url: "https://edis.ifas.ufl.edu/publication/IN139",
      },
    ],
  },
  {
    id: "reniform-nematode-vegetables",
    name: "Reniform Nematode (Vegetables and Field Crops)",
    category: "nematode-pest",
    affectedPlants: ["vegetable-garden", "specialty-cultivation"],
    specificHosts: ["Cotton", "Sweet potato", "Soybean", "Tomato", "Pineapple"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["roots", "root surface", "field patches"],
    symptomProgression:
      "Kidney-shaped females attach to roots and feed, gradually reducing root function so plants show patchy stunting, chlorosis, and drought sensitivity that worsens over the season and cuts yields.",
    observableSigns: [
      "Soil and debris cling to feeder roots in a characteristic sticky sheath around feeding females.",
      "Plants are stunted and chlorotic in field patches with reduced, poorly branched root systems.",
      "A soil assay reveals high numbers of the small kidney-shaped reniform nematode.",
    ],
    favorableConditions: [
      "Warm silty and clay-loam soils and continuous susceptible cropping build reniform populations.",
      "Long warm seasons allow many generations and steady population increase.",
    ],
    lookalikes: [
      {
        condition: "Root-knot nematode",
        differentiator:
          "Root-knot swells roots into distinct galls, while reniform nematode leaves roots un-galled with a sticky soil sheath and requires a lab assay to confirm.",
      },
      {
        condition: "Potassium or nitrogen deficiency",
        differentiator:
          "Nutrient deficiency shows uniform foliar patterns with normal roots, unlike the patchy stunting and high assay counts of reniform nematode.",
      },
    ],
    immediateActions: [
      "Collect a soil sample from declining patches for a laboratory reniform nematode assay.",
      "Note the field pattern and avoid spreading infested soil on equipment to clean ground.",
    ],
    treatments: [
      {
        situation: "Rotation program",
        treatment:
          "Rotate to poor-host or non-host crops such as corn or grain sorghum to lower reniform populations.",
      },
      {
        situation: "High counts on susceptible crops",
        treatment:
          "Use resistant or tolerant varieties and a labeled nematicide seed treatment where counts exceed thresholds.",
      },
    ],
    avoid: [
      "Do not grow continuous cotton or other favored hosts, which builds populations rapidly.",
      "Avoid carrying infested soil between fields on equipment without cleaning first.",
    ],
    recoveryTimeline:
      "Rotation and resistance lower populations gradually over one or more seasons rather than eliminating the nematode.",
    prevention: [
      "Rotate with non-host crops and use resistant varieties in fields with a reniform history.",
      "Clean equipment between fields and control host weeds to slow population buildup.",
    ],
    monitoringThresholds: [
      "Sample soil for reniform counts before planting and re-sample when patchy decline recurs.",
    ],
    escalationCriteria: [
      "Send soil to a diagnostic lab to confirm species and thresholds before selecting a nematicide program.",
    ],
    sources: [
      {
        label: "University of Georgia Extension — Reniform nematode",
        url: "https://extension.uga.edu/publications/detail.html?number=B1218",
      },
    ],
  },
];
