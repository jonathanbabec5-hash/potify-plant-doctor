import type { PlantProblemProfile } from "../schema";

export const bacterialViralProfiles: PlantProblemProfile[] = [
  // ==========================================================================
  // BACTERIAL DISEASES (20)
  // ==========================================================================
  {
    id: "fire-blight-pome-fruit",
    name: "Fire Blight (Apple & Pear)",
    category: "bacterial-disease",
    affectedPlants: ["fruit-trees", "ornamentals", "trees-shrubs"],
    specificHosts: ["Apple", "Pear", "Crabapple", "Quince", "Pyracantha", "Hawthorn"],
    growthStages: ["flowering", "vegetative", "fruiting"],
    symptomLocations: ["blossoms", "new growth", "shoot tips", "branches", "trunk cankers"],
    symptomProgression:
      "Infection begins in open blossoms during warm wet weather, then advances rapidly down shoots and into scaffold branches within days to weeks, forming sunken cankers that can girdle limbs.",
    observableSigns: [
      "Blossoms and young shoots suddenly wilt, turn brown to black, and bend into a characteristic shepherd's-crook shape at the tip.",
      "Sunken, dark, slightly cracked cankers form on branches and the trunk, sometimes oozing amber to milky bacterial droplets in humid conditions.",
      "Blackened dead leaves cling to the tree rather than dropping, giving the branch a scorched, burnt appearance.",
    ],
    favorableConditions: [
      "Warm temperatures between 65 and 85 degrees Fahrenheit combined with rain, hail, or high humidity during bloom greatly increase infection risk.",
      "Vigorous succulent growth from heavy nitrogen fertilization or hard pruning provides highly susceptible tissue.",
    ],
    lookalikes: [
      {
        condition: "Frost or cold injury to blossoms",
        differentiator:
          "Frost damage appears uniformly across the tree the morning after a cold night without cankers or bacterial ooze, whereas fire blight spreads progressively and produces shepherd's-crook shoot tips.",
      },
      {
        condition: "Pseudomonas blossom blast",
        differentiator:
          "Blossom blast is tied to freezing events at bloom and does not advance into branches forming sunken oozing cankers the way fire blight does.",
      },
    ],
    immediateActions: [
      "Prune out infected shoots and branches at least 8 to 12 inches below the visible edge of the canker while the wood is dry.",
      "Disinfect pruning tools between every cut with 70 percent alcohol or a 10 percent bleach solution to avoid spreading bacteria.",
    ],
    treatments: [
      {
        situation: "Bloom-period protection in a high-risk orchard",
        treatment:
          "Apply streptomycin or a copper-based bactericide during bloom according to a validated infection model such as CougarBlight or MaryBlyt to reduce blossom infection.",
      },
      {
        situation: "Organic or backyard option",
        treatment:
          "Use registered biological products such as Bacillus subtilis or Aureobasidium pullulans during bloom and rely heavily on sanitation pruning of strikes.",
      },
    ],
    avoid: [
      "Do not prune actively oozing cankers during warm wet weather because cuts and tools spread bacteria to fresh wounds.",
      "Avoid heavy nitrogen fertilization and aggressive dormant pruning that push the soft succulent growth fire blight favors.",
    ],
    recoveryTimeline:
      "Removing strikes promptly can save a tree the same season, but severely infected trees may take several years to recover structure and yield, and trunk cankers can be fatal.",
    prevention: [
      "Plant resistant cultivars such as Liberty apple or Harrow Sweet pear where fire blight pressure is high.",
      "Do dormant-season canker removal and maintain moderate growth with balanced fertility to limit susceptible tissue.",
    ],
    monitoringThresholds: [
      "Scout blossoms and shoot tips daily during warm wet bloom periods and re-evaluate whenever a validated infection model predicts high risk.",
    ],
    escalationCriteria: [
      "Consult an extension specialist or remove the tree if cankers girdle the trunk or main scaffolds, since systemic infection cannot be cured by pruning alone.",
    ],
    sources: [
      { label: "UC IPM Fire Blight", url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7414.html" },
      { label: "PSU Extension Fire Blight", url: "https://extension.psu.edu/fire-blight-on-tree-fruit" },
    ],
  },
  {
    id: "bacterial-spot-tomato-pepper",
    name: "Bacterial Leaf Spot (Tomato & Pepper)",
    category: "bacterial-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Tomato", "Pepper", "Sweet pepper", "Chili pepper"],
    growthStages: ["seed-seedling", "vegetative", "flowering", "fruiting"],
    symptomLocations: ["lower/older leaves", "stems", "fruit surface", "leaf margins"],
    symptomProgression:
      "Small water-soaked spots appear first on lower leaves, enlarge into dark brown angular lesions with yellow halos, coalesce to cause defoliation, and eventually scab the fruit.",
    observableSigns: [
      "Numerous small dark brown to black spots with faint yellow halos scatter across leaves, often concentrated near the margins.",
      "Raised, scabby, rough spots develop on fruit surfaces, making them unmarketable even when the flesh is unaffected.",
      "Heavily infected leaves yellow and drop, exposing fruit to sunscald as defoliation advances.",
    ],
    favorableConditions: [
      "Warm temperatures around 75 to 86 degrees Fahrenheit with frequent rain, overhead irrigation, or extended leaf wetness drive rapid spread.",
      "Splashing water and handling of wet plants move bacteria between neighboring plants quickly.",
    ],
    lookalikes: [
      {
        condition: "Bacterial speck of tomato",
        differentiator:
          "Bacterial speck produces smaller black specks favored by cooler weather below 75 degrees, while bacterial spot lesions are larger, brown, and thrive in hotter conditions.",
      },
      {
        condition: "Early blight (Alternaria)",
        differentiator:
          "Early blight forms larger target-like lesions with concentric rings on older leaves, whereas bacterial spot lesions are small, angular, and water-soaked at first.",
      },
    ],
    immediateActions: [
      "Stop all overhead watering immediately and switch to drip or soaker hoses to keep foliage dry.",
      "Remove and bag the most heavily spotted leaves and avoid working among plants while the foliage is wet.",
    ],
    treatments: [
      {
        situation: "Preventive spray program",
        treatment:
          "Apply fixed copper bactericide, often tank-mixed with mancozeb to improve efficacy, on a regular schedule beginning when symptoms first appear.",
      },
      {
        situation: "Organic option",
        treatment:
          "Use copper products approved for organic production together with strict sanitation and resistant varieties, understanding that copper only slows spread.",
      },
    ],
    avoid: [
      "Do not save seed from infected plants or reuse contaminated stakes and cages without disinfection.",
      "Avoid handling, pruning, or harvesting when plants are wet because this efficiently spreads the bacteria.",
    ],
    recoveryTimeline:
      "Existing lesions never heal, but new growth can stay clean within one to two weeks if weather dries and copper sprays plus sanitation are maintained.",
    prevention: [
      "Buy certified disease-free transplants or hot-water-treat seed before sowing to eliminate seedborne bacteria.",
      "Rotate away from tomato and pepper for two to three years and space plants for good airflow.",
    ],
    monitoringThresholds: [
      "Scout twice weekly during warm rainy spells and begin copper applications as soon as the first water-soaked spots are found.",
    ],
    escalationCriteria: [
      "Contact your extension plant diagnostic lab to confirm the specific bacterium if lesions persist despite copper, since resistant strains may require program changes.",
    ],
    sources: [
      { label: "UMN Extension Bacterial Spot", url: "https://extension.umn.edu/diseases/bacterial-spot-tomato-and-pepper" },
      { label: "NC State Bacterial Spot", url: "https://content.ces.ncsu.edu/bacterial-spot-of-pepper-and-tomato" },
    ],
  },
  {
    id: "bacterial-speck-tomato",
    name: "Bacterial Speck (Tomato)",
    category: "bacterial-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Tomato", "Cherry tomato"],
    growthStages: ["seed-seedling", "vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaves", "stems", "fruit surface", "flower parts"],
    symptomProgression:
      "Tiny dark specks form on leaves and stems in cool wet conditions, expand slightly with yellow halos, and produce characteristic small raised black flecks on green fruit.",
    observableSigns: [
      "Very small dark brown to black specks, often no larger than a pinhead, appear on leaves and are surrounded by yellow halos.",
      "Green and ripening fruit develop numerous tiny raised black flecks that remain superficial in the skin.",
      "Leaf specks may merge along the margins during severe outbreaks, giving leaves a scorched edge.",
    ],
    favorableConditions: [
      "Cool moist weather between 63 and 75 degrees Fahrenheit with rain or overhead irrigation strongly favors this disease.",
      "Wet, dense canopies early in the season provide the leaf moisture the bacterium needs to infect.",
    ],
    lookalikes: [
      {
        condition: "Bacterial spot of tomato",
        differentiator:
          "Bacterial spot lesions are larger and brown, favor hot weather, and scab the fruit more coarsely, whereas speck stays tiny, black, and cool-weather driven.",
      },
      {
        condition: "Early blight",
        differentiator:
          "Early blight forms large concentric-ring target spots, while bacterial speck produces only pinhead-sized specks with halos.",
      },
    ],
    immediateActions: [
      "Switch to ground-level watering and improve canopy airflow to reduce the leaf wetness the pathogen needs.",
      "Remove the most heavily specked lower leaves and avoid brushing against wet plants.",
    ],
    treatments: [
      {
        situation: "Cool wet early season",
        treatment:
          "Apply fixed copper sprays, sometimes combined with mancozeb, starting at first symptoms while cool humid weather persists.",
      },
      {
        situation: "Organic option",
        treatment:
          "Use OMRI-listed copper products with strict sanitation, resistant varieties carrying the Pto gene, and hot-water-treated seed.",
      },
    ],
    avoid: [
      "Do not transplant into cold wet soil under overhead irrigation, which creates ideal infection conditions.",
      "Avoid saving seed from affected plants because the bacterium is seedborne.",
    ],
    recoveryTimeline:
      "Disease pressure typically drops once warm dry weather arrives, and new foliage stays clean within one to two weeks under copper and sanitation.",
    prevention: [
      "Plant Pto-gene resistant cultivars and use certified or hot-water-treated seed.",
      "Rotate crops and irrigate at the base rather than over the top of the canopy.",
    ],
    monitoringThresholds: [
      "Inspect seedlings and young plants twice weekly in cool wet spring weather and begin copper at the first specks.",
    ],
    escalationCriteria: [
      "Submit a sample to a diagnostic lab if you cannot distinguish speck from spot, since management timing and copper resistance differ.",
    ],
    sources: [
      { label: "Cornell Vegetable Bacterial Speck", url: "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/" },
      { label: "UMN Extension Tomato Diseases", url: "https://extension.umn.edu/diseases/bacterial-spot-tomato-and-pepper" },
    ],
  },
  {
    id: "bacterial-wilt-cucurbits",
    name: "Bacterial Wilt (Cucurbits)",
    category: "bacterial-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Cucumber", "Muskmelon", "Cantaloupe", "Squash", "Pumpkin"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["individual leaves", "runners/vines", "whole plant", "stems"],
    symptomProgression:
      "A single leaf wilts and recovers at night at first, then whole runners collapse as the bacteria multiply and plug the water-conducting vessels, killing the entire plant.",
    observableSigns: [
      "Individual leaves suddenly flag and wilt, spreading to entire vines that fail to recover even in cool evening conditions.",
      "Cutting a wilted stem and slowly pulling the two halves apart draws out a sticky white bacterial ooze that strings between the pieces.",
      "Cucumber beetles are usually present feeding on foliage, flowers, and fruit near affected plants.",
    ],
    favorableConditions: [
      "High populations of striped and spotted cucumber beetles that carry and transmit the bacterium overwinter in the vector.",
      "Warm growing conditions with lush foliage that supports beetle feeding accelerate transmission.",
    ],
    lookalikes: [
      {
        condition: "Fusarium or Verticillium wilt",
        differentiator:
          "Fungal wilts show internal vascular discoloration and no sticky bacterial ooze from cut stems, unlike the stringing white slime of bacterial wilt.",
      },
      {
        condition: "Squash vine borer damage",
        differentiator:
          "Vine borer leaves sawdust-like frass and holes at the stem base, while bacterial wilt shows no boring damage but produces the characteristic ooze test.",
      },
    ],
    immediateActions: [
      "Perform the ooze string test on a wilted stem to confirm bacterial wilt versus other causes today.",
      "Remove and destroy confirmed wilting plants promptly to reduce the reservoir for beetle acquisition.",
    ],
    treatments: [
      {
        situation: "Vector control is the only management",
        treatment:
          "Manage cucumber beetles aggressively with row covers until flowering and targeted insecticides, because no chemical cures the bacterial infection itself.",
      },
      {
        situation: "Organic option",
        treatment:
          "Use floating row covers, kaolin clay, and OMRI-listed insecticides such as pyrethrins to suppress cucumber beetles and limit spread.",
      },
    ],
    avoid: [
      "Do not ignore cucumber beetles early in the season, since even light feeding can transmit a fatal infection.",
      "Avoid replanting susceptible cucurbits into the same untreated beetle-heavy area without vector management.",
    ],
    recoveryTimeline:
      "There is no recovery once a plant wilts systemically, so success is measured by protecting healthy plants for the rest of the season through beetle control.",
    prevention: [
      "Grow resistant or tolerant varieties such as certain butternut and cucumber cultivars where available.",
      "Use row covers over young plants and control cucumber beetles before populations build.",
    ],
    monitoringThresholds: [
      "Scout for cucumber beetles at least twice weekly and act when counts reach about one beetle per plant on seedlings.",
    ],
    escalationCriteria: [
      "If wilt continues despite beetle control, submit a sample to confirm the diagnosis and rule out fungal vascular wilts.",
    ],
    sources: [
      { label: "UMN Extension Bacterial Wilt", url: "https://extension.umn.edu/disease-management/bacterial-wilt-cucurbits" },
      { label: "UC IPM Cucurbits", url: "https://ipm.ucanr.edu/agriculture/cucurbits/" },
    ],
  },
  {
    id: "bacterial-canker-stone-fruit",
    name: "Bacterial Canker (Stone Fruit)",
    category: "bacterial-disease",
    affectedPlants: ["fruit-trees", "trees-shrubs"],
    specificHosts: ["Cherry", "Plum", "Peach", "Apricot", "Nectarine"],
    growthStages: ["dormant", "flowering", "vegetative"],
    symptomLocations: ["branches", "trunk cankers", "buds", "leaves", "blossoms"],
    symptomProgression:
      "Cankers form on limbs and trunks during cool wet weather, ooze gum, kill buds and blossoms, and can girdle branches to cause dieback, while leaves develop shot-hole spots.",
    observableSigns: [
      "Sunken elongated cankers on branches and trunks exude amber gum, especially noticeable in spring and after rain.",
      "Dormant buds fail to open and blossoms blast and die back, giving a ragged spring flush.",
      "Leaves show small angular brown spots that drop out to create a shot-hole appearance.",
    ],
    favorableConditions: [
      "Cool wet spring weather combined with frost injury and pruning wounds opens the door for infection.",
      "Trees stressed by poor drainage, nematodes, or ring nematode-infested sandy soils are far more susceptible.",
    ],
    lookalikes: [
      {
        condition: "Cytospora canker (fungal)",
        differentiator:
          "Cytospora cankers show pimple-like fungal fruiting bodies and stringy orange spore tendrils, whereas bacterial canker oozes gum and lacks fungal structures.",
      },
      {
        condition: "Peach leaf curl",
        differentiator:
          "Leaf curl distorts and reddens whole leaves without branch cankers, while bacterial canker's leaf symptom is discrete shot-hole spotting.",
      },
    ],
    immediateActions: [
      "Prune out cankered wood well below the margin during dry summer weather when infection risk is lowest.",
      "Disinfect saws and shears between cuts and remove the debris from the orchard.",
    ],
    treatments: [
      {
        situation: "Dormant and delayed-dormant protection",
        treatment:
          "Apply copper bactericide in fall at leaf drop and again in late winter to reduce bacterial populations on the tree surface.",
      },
      {
        situation: "Long-term site management",
        treatment:
          "Correct drainage, manage ring nematodes with preplant fumigation or resistant rootstocks, and avoid frost pockets to reduce predisposing stress.",
      },
    ],
    avoid: [
      "Do not prune stone fruit in the dormant wet season when the pathogen is most active and wounds do not heal.",
      "Avoid planting in poorly drained frost-prone sites or in ground with high ring nematode populations.",
    ],
    recoveryTimeline:
      "Young trees may recover if cankers are removed and stress corrected over a season or two, but trunk girdling is often fatal and requires replacement.",
    prevention: [
      "Plant on well-drained sites with vigorous rootstocks and manage nematodes before planting.",
      "Prune only in dry summer weather and apply fall and late-winter copper sprays.",
    ],
    monitoringThresholds: [
      "Inspect trunks and scaffolds each spring for new gumming cankers and re-evaluate the pruning and copper program annually.",
    ],
    escalationCriteria: [
      "Remove and replace trees with trunk-girdling cankers and consult an extension pomologist about rootstock and site fixes.",
    ],
    sources: [
      { label: "UC IPM Bacterial Canker", url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn74100.html" },
      { label: "WSU Tree Fruit Bacterial Canker", url: "https://treefruit.wsu.edu/crop-protection/disease-management/bacterial-canker/" },
    ],
  },
  {
    id: "crown-gall-general",
    name: "Crown Gall",
    category: "bacterial-disease",
    affectedPlants: ["fruit-trees", "berries", "ornamentals", "trees-shrubs"],
    specificHosts: ["Rose", "Grape", "Apple", "Raspberry", "Euonymus", "Willow"],
    growthStages: ["all-stages"],
    symptomLocations: ["roots", "crown/soil line", "stems", "graft union"],
    symptomProgression:
      "Bacteria enter through wounds and insert genes that cause rough tumor-like galls at the crown and roots, which enlarge over seasons and can restrict water and nutrient flow.",
    observableSigns: [
      "Rounded, rough, corky galls form at the soil line, on roots, or near graft unions and can range from pea-sized to fist-sized.",
      "Young galls are soft, light-colored, and fleshy, later turning dark, hard, and woody as they age.",
      "Affected plants often show reduced vigor, stunting, and poor establishment, especially in nursery stock.",
    ],
    favorableConditions: [
      "Wounds from transplanting, grafting, cultivation, freeze cracks, or insect and nematode feeding provide entry points.",
      "Poorly drained soils and previous crops with crown gall build long-lived bacterial populations in the ground.",
    ],
    lookalikes: [
      {
        condition: "Callus tissue at graft union",
        differentiator:
          "Normal graft callus is smooth, even, and located precisely at the union, whereas crown gall is rough, irregular, and often occurs on roots and crown away from the graft.",
      },
      {
        condition: "Root-knot nematode galls",
        differentiator:
          "Nematode galls are small swellings integral to fine roots, while crown gall forms large distinct woody tumors at the crown and larger roots.",
      },
    ],
    immediateActions: [
      "Isolate and remove severely galled nursery or transplant stock before planting into clean ground.",
      "Avoid wounding the crown during cultivation and improve drainage around affected plants today.",
    ],
    treatments: [
      {
        situation: "Preventive biological dip at planting",
        treatment:
          "Dip roots or cuttings of susceptible species in the biocontrol Agrobacterium radiobacter strain K84 before planting where that strain is effective.",
      },
      {
        situation: "Established infected plant",
        treatment:
          "There is no cure for infected plants, so remove and destroy severely affected specimens and do not replant susceptible species in the same spot.",
      },
    ],
    avoid: [
      "Do not replant susceptible hosts in known crown gall ground for at least two years without sanitation.",
      "Avoid injuring the crown and roots with string trimmers, hoes, or careless transplanting.",
    ],
    recoveryTimeline:
      "Lightly affected established trees may live for years, but there is no true recovery, and nursery or young plants with crown galls should be discarded.",
    prevention: [
      "Buy certified gall-free stock and inspect roots and crowns before planting.",
      "Use the K84 biocontrol dip on susceptible crops and rotate away from infested ground.",
    ],
    monitoringThresholds: [
      "Inspect roots and crowns of new stock at planting and re-check declining plants at the soil line for galls.",
    ],
    escalationCriteria: [
      "Submit galls to a diagnostic lab to confirm Agrobacterium and consult extension before replanting susceptible perennials in infested soil.",
    ],
    sources: [
      { label: "UC IPM Crown Gall", url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7404.html" },
      { label: "Wisconsin Hort Crown Gall", url: "https://hort.extension.wisc.edu/articles/crown-gall/" },
    ],
  },
  {
    id: "bacterial-soft-rot-vegetables",
    name: "Bacterial Soft Rot (Vegetables & Storage)",
    category: "bacterial-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Potato", "Carrot", "Onion", "Cabbage", "Pepper", "Cucumber"],
    growthStages: ["fruiting", "mature"],
    symptomLocations: ["fruit surface", "tubers/roots", "bulbs", "stems", "storage tissue"],
    symptomProgression:
      "Bacteria enter through wounds and multiply in fleshy tissue, breaking down cell walls to produce a soft mushy watery rot that spreads rapidly and develops a foul odor in storage.",
    observableSigns: [
      "Affected tissue becomes soft, wet, and mushy, often collapsing into a slimy mass when pressed.",
      "A distinctly foul, putrid odor develops from bacterial breakdown of the tissue, especially in warm storage.",
      "The rot advances quickly through fleshy roots, tubers, bulbs, or fruit and can liquefy an entire item within days.",
    ],
    favorableConditions: [
      "Warm temperatures with high humidity and free moisture on wounded, bruised, or over-mature tissue drive explosive rotting.",
      "Poor storage ventilation and wet harvest conditions promote spread among stored produce.",
    ],
    lookalikes: [
      {
        condition: "Fungal storage rots (e.g. Fusarium dry rot)",
        differentiator:
          "Fungal dry rots are firm, dry, and often show mold, whereas bacterial soft rot is wet, mushy, foul-smelling, and lacks visible fungal growth.",
      },
      {
        condition: "Blossom-end rot of tomato/pepper",
        differentiator:
          "Blossom-end rot is a dry sunken calcium-related lesion at the fruit tip, while bacterial soft rot is a spreading slimy decay from wounds.",
      },
    ],
    immediateActions: [
      "Remove and discard rotting produce immediately to keep the slimy decay from spreading to healthy items.",
      "Improve ventilation and lower storage temperature and humidity right away.",
    ],
    treatments: [
      {
        situation: "Field and storage sanitation",
        treatment:
          "Harvest in dry conditions, cure produce properly, avoid bruising, and store cool and dry, because no spray cures established soft rot.",
      },
      {
        situation: "Organic option",
        treatment:
          "Focus on gentle handling, rapid drying, sanitation of tools and bins, and prompt culling since chemical control is ineffective on soft rot.",
      },
    ],
    avoid: [
      "Do not wash and store wet produce or pile bruised items together in warm humid conditions.",
      "Avoid harvesting fleshy crops during wet weather or from waterlogged soils.",
    ],
    recoveryTimeline:
      "Rotted tissue cannot be saved, but sanitation and proper storage conditions can stop spread within a day or two and protect the remaining crop.",
    prevention: [
      "Handle produce gently to avoid wounds and cure or dry crops before storage.",
      "Sanitize storage areas and bins and maintain cool, dry, well-ventilated conditions.",
    ],
    monitoringThresholds: [
      "Inspect stored produce weekly and cull any softening items immediately when odor or wet spots appear.",
    ],
    escalationCriteria: [
      "If soft rot recurs in the field, submit samples to identify Pectobacterium or Dickeya and review irrigation and drainage with extension.",
    ],
    sources: [
      { label: "Wisconsin Hort Bacterial Soft Rot", url: "https://hort.extension.wisc.edu/articles/bacterial-soft-rot/" },
      { label: "Cornell Vegetable Soft Rot", url: "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/" },
    ],
  },
  {
    id: "angular-leaf-spot-cucumber",
    name: "Angular Leaf Spot (Cucurbits)",
    category: "bacterial-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Cucumber", "Zucchini", "Squash", "Melon"],
    growthStages: ["seed-seedling", "vegetative", "fruiting"],
    symptomLocations: ["leaves", "leaf veins", "fruit surface", "stems"],
    symptomProgression:
      "Small water-soaked spots on leaves become angular as they are bounded by veins, dry out and tear away leaving ragged holes, and can cause small water-soaked spots on fruit.",
    observableSigns: [
      "Angular, vein-limited spots appear water-soaked in the morning and often exude milky bacterial droplets on the underside in humid conditions.",
      "Dead spot centers dry, crack, and fall out, leaving irregular tattered holes in the leaves.",
      "Fruit may develop small round water-soaked spots with white crusty residue and superficial cracks.",
    ],
    favorableConditions: [
      "Warm humid weather with overhead irrigation, rain splash, and dew that keeps leaves wet favors infection.",
      "Working among wet plants and dense canopies moves the bacterium efficiently between leaves.",
    ],
    lookalikes: [
      {
        condition: "Downy mildew of cucurbits",
        differentiator:
          "Downy mildew forms angular yellow lesions with gray fuzzy sporulation on the underside, whereas angular leaf spot lesions ooze bacterial milk and tear out cleanly.",
      },
      {
        condition: "Anthracnose",
        differentiator:
          "Anthracnose spots are more rounded, tan with darker borders, and often show salmon-colored spore masses, unlike the vein-bounded angular tearing of this disease.",
      },
    ],
    immediateActions: [
      "Switch off overhead irrigation and water at the soil line to reduce leaf wetness immediately.",
      "Avoid entering the planting while foliage is wet and remove severely spotted leaves.",
    ],
    treatments: [
      {
        situation: "Preventive copper program",
        treatment:
          "Apply fixed copper sprays at the first sign of disease and repeat on a regular interval during favorable weather.",
      },
      {
        situation: "Organic option",
        treatment:
          "Use OMRI-listed copper with resistant varieties, clean seed, and crop rotation to limit spread since copper only suppresses the bacterium.",
      },
    ],
    avoid: [
      "Do not use overhead irrigation or handle plants when wet during humid weather.",
      "Avoid saving seed from infected fruit because the bacterium is seedborne.",
    ],
    recoveryTimeline:
      "Existing lesions remain, but new foliage stays clean within one to two weeks once conditions dry and copper plus sanitation are applied.",
    prevention: [
      "Plant resistant cucumber varieties and use certified disease-free seed.",
      "Rotate away from cucurbits for two years and provide good spacing and airflow.",
    ],
    monitoringThresholds: [
      "Scout twice weekly in humid weather and begin copper at the first angular water-soaked spots.",
    ],
    escalationCriteria: [
      "Submit samples to a diagnostic lab if you cannot distinguish angular leaf spot from downy mildew, since treatments differ.",
    ],
    sources: [
      { label: "Wisconsin Hort Angular Leaf Spot", url: "https://hort.extension.wisc.edu/articles/angular-leaf-spot-cucurbits/" },
      { label: "Cornell Vegetable Factsheets", url: "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/" },
    ],
  },
  {
    id: "bacterial-blight-beans",
    name: "Common & Halo Blight (Beans)",
    category: "bacterial-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Snap bean", "Dry bean", "Lima bean", "Kidney bean"],
    growthStages: ["seed-seedling", "vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaves", "leaf margins", "pods", "stems"],
    symptomProgression:
      "Water-soaked spots appear on leaves and enlarge into brown dead patches with yellow margins, spread to pods as sunken water-soaked lesions, and can blight seedlings from infected seed.",
    observableSigns: [
      "Large irregular brown dead areas with a bright yellow border develop on leaves, sometimes with a narrow greasy zone at the edge.",
      "Pods show sunken, water-soaked, greasy spots that may ooze and later dry with a crusty bacterial residue.",
      "Halo blight produces small spots surrounded by wide greenish-yellow halos in cooler conditions.",
    ],
    favorableConditions: [
      "Warm humid weather with rain, wind-driven splash, and overhead irrigation spreads common blight, while halo blight favors cooler temperatures.",
      "Infected seed and working in wet fields move the bacteria to new plants.",
    ],
    lookalikes: [
      {
        condition: "Bean rust",
        differentiator:
          "Rust forms raised reddish-brown pustules that release powdery spores, whereas bacterial blight makes flat water-soaked lesions with yellow margins and no pustules.",
      },
      {
        condition: "Anthracnose of beans",
        differentiator:
          "Anthracnose produces dark sunken lesions with reddish borders on veins and pods with salmon spore masses, unlike the greasy water-soaked bacterial lesions.",
      },
    ],
    immediateActions: [
      "Stop overhead irrigation and stay out of the bean rows while foliage is wet to limit spread today.",
      "Remove and destroy the most heavily blighted plants and debris.",
    ],
    treatments: [
      {
        situation: "Preventive copper program",
        treatment:
          "Apply fixed copper bactericide at the first symptoms and repeat during warm humid weather to suppress spread.",
      },
      {
        situation: "Organic option",
        treatment:
          "Rely on certified pathogen-free seed, resistant varieties, rotation, and OMRI-listed copper since no product cures infected plants.",
      },
    ],
    avoid: [
      "Do not plant saved seed from infected fields because both blights are strongly seedborne.",
      "Avoid cultivating or harvesting beans while the plants are wet.",
    ],
    recoveryTimeline:
      "Damaged tissue does not recover, but healthy new growth can remain clean within one to two weeks under dry conditions and copper protection.",
    prevention: [
      "Use certified western-grown pathogen-free seed and plant resistant cultivars.",
      "Rotate away from beans for two to three years and avoid overhead watering.",
    ],
    monitoringThresholds: [
      "Scout weekly from emergence and start copper at the first water-soaked leaf spots during warm humid weather.",
    ],
    escalationCriteria: [
      "Send samples to a diagnostic lab to distinguish common blight, halo blight, and brown spot, which differ in seed sourcing management.",
    ],
    sources: [
      { label: "UMN Extension Bean Blights", url: "https://extension.umn.edu/disease-management/bacterial-diseases-beans" },
      { label: "Michigan State Bean Blight", url: "https://www.canr.msu.edu/dry_beans/" },
    ],
  },
  {
    id: "citrus-canker",
    name: "Citrus Canker",
    category: "bacterial-disease",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Grapefruit", "Orange", "Lemon", "Lime", "Mandarin"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaves", "fruit surface", "twigs", "stems"],
    symptomProgression:
      "Raised corky lesions with yellow halos form on leaves, twigs, and fruit, enlarge and become crater-like, and severe infection causes defoliation, dieback, and premature fruit drop.",
    observableSigns: [
      "Raised, rough, tan to brown corky lesions surrounded by a yellow halo and a water-soaked margin appear on both leaf surfaces.",
      "Fruit develops similar raised scabby craters that blemish the rind and reduce marketability.",
      "Severe infections cause leaf drop, twig dieback, and early fruit drop.",
    ],
    favorableConditions: [
      "Warm wet weather and wind-driven rain, especially during storms, spread the bacterium rapidly.",
      "Feeding wounds from citrus leafminer and young flushing growth greatly increase susceptibility.",
    ],
    lookalikes: [
      {
        condition: "Citrus scab",
        differentiator:
          "Citrus scab causes warty raised growths without the water-soaked yellow halo, whereas canker lesions are corky, crater-like, and haloed on both leaf surfaces.",
      },
      {
        condition: "Citrus leafminer damage",
        differentiator:
          "Leafminer creates silvery serpentine tunnels and leaf curling but no corky haloed lesions, though its wounds predispose leaves to canker.",
      },
    ],
    immediateActions: [
      "Report suspected citrus canker to your state agriculture department because it is a regulated quarantine disease in many regions.",
      "Avoid moving plant material and disinfect tools and hands after handling suspect trees.",
    ],
    treatments: [
      {
        situation: "Commercial protection program",
        treatment:
          "Apply copper bactericides on a protective schedule during flushes and use windbreaks, and manage citrus leafminer to reduce entry wounds.",
      },
      {
        situation: "Regulated eradication or dooryard trees",
        treatment:
          "Follow official quarantine guidance, which may require removal or copper protection, since the disease cannot be cured once established.",
      },
    ],
    avoid: [
      "Do not move citrus plants, fruit, or clippings out of quarantine areas.",
      "Avoid overhead irrigation and pruning during wet windy weather that spreads bacteria.",
    ],
    recoveryTimeline:
      "Individual lesions do not heal, and management aims to protect new flushes each season rather than cure existing infection.",
    prevention: [
      "Plant certified disease-free nursery stock and choose less susceptible varieties where possible.",
      "Use windbreaks, copper protection during flush, and leafminer control to reduce spread.",
    ],
    monitoringThresholds: [
      "Inspect each new flush and after storms, and increase copper coverage when leafminer activity rises.",
    ],
    escalationCriteria: [
      "Contact your state department of agriculture immediately for confirmation and regulatory instructions if canker is suspected.",
    ],
    sources: [
      { label: "UF IFAS Citrus Canker", url: "https://edis.ifas.ufl.edu/publication/CH348" },
      { label: "USDA APHIS Citrus Canker", url: "https://www.aphis.usda.gov/plant-pests-diseases/citrus/citrus-canker" },
    ],
  },
  {
    id: "stewarts-wilt-corn",
    name: "Stewart's Wilt (Sweet Corn)",
    category: "bacterial-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Sweet corn", "Field corn", "Maize"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["leaves", "leaf veins", "whole plant", "vascular tissue"],
    symptomProgression:
      "Flea beetles introduce the bacterium as they feed, causing pale water-soaked streaks along leaf veins that dry into long tan lesions, and seedling infection can wilt and kill young plants systemically.",
    observableSigns: [
      "Long, pale green to yellow water-soaked streaks with irregular wavy margins run parallel to the veins along the leaf blades.",
      "Streaks dry to tan and can extend the full length of the leaf, with flea beetle feeding scars often visible.",
      "Seedlings infected early may wilt, stunt severely, and die, showing yellow bacterial ooze when the stem is cut.",
    ],
    favorableConditions: [
      "Mild winters that allow corn flea beetles to survive lead to high vector populations and disease pressure.",
      "Susceptible sweet corn hybrids planted early alongside abundant flea beetles favor infection.",
    ],
    lookalikes: [
      {
        condition: "Goss's bacterial wilt and blight",
        differentiator:
          "Goss's wilt shows dark freckles within long lesions and a glossy bacterial exudate, whereas Stewart's wilt streaks follow flea beetle feeding and lack the freckling.",
      },
      {
        condition: "Northern corn leaf blight (fungal)",
        differentiator:
          "Northern leaf blight forms large cigar-shaped gray-green lesions unrelated to veins, unlike the vein-parallel water-soaked streaks of Stewart's wilt.",
      },
    ],
    immediateActions: [
      "Scout for corn flea beetles at emergence and confirm their feeding scars near the streaks today.",
      "Note hybrid susceptibility and remove severely wilted seedlings.",
    ],
    treatments: [
      {
        situation: "Vector management",
        treatment:
          "Use insecticidal seed treatments and foliar insecticides against corn flea beetles because the bacterial infection itself cannot be cured.",
      },
      {
        situation: "Variety selection",
        treatment:
          "Plant resistant or tolerant sweet corn hybrids, which is the most reliable way to avoid systemic seedling wilt.",
      },
    ],
    avoid: [
      "Do not plant highly susceptible early sweet corn where flea beetle populations are known to be high without seed treatment.",
      "Avoid ignoring flea beetle counts, since seedling-stage transmission causes the most damaging systemic wilt.",
    ],
    recoveryTimeline:
      "Systemically wilted seedlings do not recover, but plants infected later usually survive with only leaf streaking and minor yield loss.",
    prevention: [
      "Choose resistant hybrids and use insecticidal seed treatments in high-risk areas.",
      "Delay planting past the peak of overwintered flea beetle activity when feasible.",
    ],
    monitoringThresholds: [
      "Track flea beetle counts at emergence and treat when beetles reach damaging thresholds on susceptible hybrids.",
    ],
    escalationCriteria: [
      "Submit samples to confirm Stewart's wilt versus Goss's wilt if systemic wilting spreads despite vector control.",
    ],
    sources: [
      { label: "Purdue Stewart's Wilt", url: "https://extension.entm.purdue.edu/publications/E-99/E-99.html" },
      { label: "Iowa State Stewart's Disease", url: "https://crops.extension.iastate.edu/encyclopedia/stewarts-disease-corn" },
    ],
  },
  {
    id: "erwinia-soft-rot-houseplants",
    name: "Erwinia Soft Rot (Houseplants)",
    category: "bacterial-disease",
    affectedPlants: ["houseplants"],
    specificHosts: ["Dieffenbachia", "Aglaonema", "Philodendron", "Pothos", "Syngonium"],
    growthStages: ["all-stages"],
    symptomLocations: ["stems", "crown/soil line", "leaves", "cuttings"],
    symptomProgression:
      "A mushy dark rot begins at the base or a wound, spreads up the stem and into the crown as tissue collapses into slime, and can topple the whole plant within days in warm wet conditions.",
    observableSigns: [
      "Stems and crowns turn soft, dark, and water-soaked, collapsing into a mushy mass when squeezed.",
      "A foul, sour odor accompanies the decay as bacteria break down the fleshy tissue.",
      "Leaves suddenly wilt and yellow as the rotting base can no longer support the plant.",
    ],
    favorableConditions: [
      "Overwatering, poor drainage, and soggy warm potting mix create ideal conditions for soft rot bacteria.",
      "Wounds from propagation, division, or careless handling combined with high humidity allow rapid entry and spread.",
    ],
    lookalikes: [
      {
        condition: "Root rot from Pythium or Phytophthora",
        differentiator:
          "Water-mold root rots produce mushy dark roots but usually lack the strong foul bacterial odor and rapid slimy stem collapse of Erwinia soft rot.",
      },
      {
        condition: "Overwatering edema or leaf yellowing",
        differentiator:
          "Simple overwatering yellows leaves gradually without the slimy, foul-smelling stem and crown collapse characteristic of soft rot.",
      },
    ],
    immediateActions: [
      "Unpot the plant, cut well above any soft rotting tissue into firm clean stem, and discard the mushy portions today.",
      "Let cuttings callus and repot healthy sections into fresh sterile mix in a clean pot.",
    ],
    treatments: [
      {
        situation: "Salvaging an infected plant",
        treatment:
          "Take clean cuttings from firm unaffected tissue, dust cuts with cinnamon or sulfur, and root in fresh sterile mix since chemical control is not reliable.",
      },
      {
        situation: "Cultural correction",
        treatment:
          "Reduce watering frequency, improve drainage and airflow, and keep foliage and crowns dry to stop bacterial spread.",
      },
    ],
    avoid: [
      "Do not keep the plant in soggy soil or crowd it in stagnant humid air, which accelerates the rot.",
      "Avoid reusing the same pot or mix without disinfecting, because bacteria persist in contaminated media.",
    ],
    recoveryTimeline:
      "Rotted tissue is lost, but clean cuttings from firm sections can root and re-establish within three to six weeks under drier conditions.",
    prevention: [
      "Water only when the mix is appropriately dry and use well-draining media and clean pots.",
      "Sanitize tools between plants and avoid wounding stems during handling and propagation.",
    ],
    monitoringThresholds: [
      "Check crowns and stem bases weekly for softening and act immediately at the first mushy, foul-smelling tissue.",
    ],
    escalationCriteria: [
      "Discard the entire plant and media if the rot reaches the crown and roots, since it cannot be reversed once systemic.",
    ],
    sources: [
      { label: "PSU Bacterial Soft Rot", url: "https://extension.psu.edu/bacterial-soft-rot" },
      { label: "UMass Greenhouse Bacterial Diseases", url: "https://ag.umass.edu/greenhouse-floriculture/fact-sheets" },
    ],
  },
  {
    id: "bacterial-leaf-scorch-shade-trees",
    name: "Bacterial Leaf Scorch (Shade Trees)",
    category: "bacterial-disease",
    affectedPlants: ["trees-shrubs", "ornamentals"],
    specificHosts: ["Oak", "Elm", "Sycamore", "Sweetgum", "Red maple"],
    growthStages: ["mature", "vegetative"],
    symptomLocations: ["leaves", "leaf margins", "branches", "whole canopy"],
    symptomProgression:
      "Leaf margins scorch brown with a yellow or reddish band in mid to late summer, symptoms recur and worsen each year, and affected branches decline as the xylem-limited bacterium spreads through the tree.",
    observableSigns: [
      "Leaf margins turn brown and dead in mid to late summer, separated from green inner tissue by a distinct yellow or reddish halo band.",
      "Symptoms recur on the same branches and expand to more of the canopy year after year rather than resolving.",
      "Affected trees show progressive branch dieback and thinning over several seasons.",
    ],
    favorableConditions: [
      "Hot dry late-summer weather intensifies scorch symptoms in infected trees.",
      "Xylem-feeding leafhoppers and spittlebugs spread the bacterium Xylella fastidiosa between trees.",
    ],
    lookalikes: [
      {
        condition: "Environmental leaf scorch from drought",
        differentiator:
          "Drought scorch appears suddenly across many trees after heat or root stress and does not recur progressively year after year the way bacterial leaf scorch does.",
      },
      {
        condition: "Oak wilt",
        differentiator:
          "Oak wilt causes rapid whole-canopy browning and death within weeks and shows vascular streaking, while bacterial leaf scorch declines slowly with marginal scorch and yellow banding.",
      },
    ],
    immediateActions: [
      "Water the tree deeply during drought to reduce stress and slow symptom expression.",
      "Prune out clearly dead branches and have the tree assessed by a certified arborist.",
    ],
    treatments: [
      {
        situation: "Symptom suppression on valued trees",
        treatment:
          "Professional trunk injection of oxytetracycline can temporarily suppress symptoms for a season but does not cure the infection.",
      },
      {
        situation: "Long-term management",
        treatment:
          "Maintain tree vigor with proper watering, mulching, and pruning, and remove trees in severe irreversible decline.",
      },
    ],
    avoid: [
      "Do not expect fertilizer or fungicides to help, since this is an incurable xylem-limited bacterial disease.",
      "Avoid planting highly susceptible species in tight rows where the disease is already established.",
    ],
    recoveryTimeline:
      "There is no cure, and infected trees typically decline over five to ten years, with antibiotic injections only masking symptoms temporarily.",
    prevention: [
      "Plant a diversity of resistant or tolerant species and keep trees vigorous.",
      "Reduce stress with mulch and deep watering and remove severely declining trees to lower inoculum.",
    ],
    monitoringThresholds: [
      "Assess canopy scorch and dieback annually in late summer and re-evaluate hazard as branches decline.",
    ],
    escalationCriteria: [
      "Hire a certified arborist for hazard assessment and removal when structural branches die back over the tree.",
    ],
    sources: [
      { label: "PSU Bacterial Leaf Scorch", url: "https://extension.psu.edu/bacterial-leaf-scorch-in-shade-trees" },
      { label: "US Forest Service Leaf Scorch", url: "https://www.fs.usda.gov/naspf/publications" },
    ],
  },
  {
    id: "bacterial-blight-lilac",
    name: "Bacterial Blight (Lilac)",
    category: "bacterial-disease",
    affectedPlants: ["ornamentals", "trees-shrubs"],
    specificHosts: ["Common lilac", "Syringa"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["new growth", "shoot tips", "leaves", "blossoms"],
    symptomProgression:
      "Brown water-soaked spots on young leaves and shoots enlarge rapidly in cool wet spring weather, blacken and kill new shoots and flower clusters, and cause a shepherd's-crook bending of soft tips.",
    observableSigns: [
      "Angular brown to black water-soaked spots with yellow margins form on young leaves, especially after cool rainy weather.",
      "New shoots and flower buds blacken, wilt, and die, and soft shoot tips may bend into a hook.",
      "Young vigorous growth is affected most severely, giving a scorched blighted appearance to new flushes.",
    ],
    favorableConditions: [
      "Cool wet spring weather with succulent new growth strongly favors this Pseudomonas blight.",
      "Frost injury, wounds, and heavy nitrogen that pushes soft growth increase susceptibility.",
    ],
    lookalikes: [
      {
        condition: "Frost injury to new lilac growth",
        differentiator:
          "Frost blackens tissue uniformly after a cold night without spreading water-soaked spotting, whereas bacterial blight advances progressively with haloed leaf spots.",
      },
      {
        condition: "Powdery mildew on lilac",
        differentiator:
          "Powdery mildew leaves a white surface coating late in summer without killing shoots, unlike the spring shoot blackening of bacterial blight.",
      },
    ],
    immediateActions: [
      "Prune out blighted shoots several inches into healthy wood and disinfect shears between cuts today.",
      "Improve air circulation by thinning the shrub and remove fallen infected debris.",
    ],
    treatments: [
      {
        situation: "Cool wet spring protection",
        treatment:
          "Apply copper bactericide as new growth emerges in cool wet weather and repeat as label directs.",
      },
      {
        situation: "Cultural management",
        treatment:
          "Prune for airflow, avoid excess nitrogen, and remove infected shoots to reduce the bacterial reservoir.",
      },
    ],
    avoid: [
      "Do not fertilize heavily with nitrogen, which produces the soft succulent growth the blight prefers.",
      "Avoid overhead watering and pruning during wet weather.",
    ],
    recoveryTimeline:
      "Pruned shrubs usually flush healthy new growth the same season once weather warms and dries, with copper as backup.",
    prevention: [
      "Plant in well-drained sunny sites with good airflow and choose less susceptible lilac cultivars.",
      "Prune to open the canopy and avoid wounding and heavy nitrogen fertilization.",
    ],
    monitoringThresholds: [
      "Inspect new growth during cool wet spring weather and prune or spray copper at the first water-soaked spots.",
    ],
    escalationCriteria: [
      "Consult extension if blight recurs severely each spring despite pruning and copper, to review site and cultivar choices.",
    ],
    sources: [
      { label: "UMN Extension Lilac Bacterial Blight", url: "https://extension.umn.edu/plant-diseases/bacterial-blight-lilac" },
      { label: "Wisconsin Hort Lilac Blight", url: "https://hort.extension.wisc.edu/articles/bacterial-blight/" },
    ],
  },
  {
    id: "bacterial-wetwood-slime-flux",
    name: "Bacterial Wetwood (Slime Flux)",
    category: "bacterial-disease",
    affectedPlants: ["trees-shrubs", "ornamentals"],
    specificHosts: ["Elm", "Poplar", "Willow", "Mulberry", "Oak", "Maple"],
    growthStages: ["mature"],
    symptomLocations: ["trunk cankers", "branches", "wounds", "bark"],
    symptomProgression:
      "Bacteria colonize the inner wood and generate gas pressure that forces fermented sap out through wounds and branch crotches, staining the bark with dark wet streaks that persist for years.",
    observableSigns: [
      "Dark, wet, foul-smelling liquid oozes from trunk wounds, cracks, or branch unions and streaks down the bark.",
      "The oozing sap dries into gray to white crusty deposits and can kill grass or groundcover where it drips.",
      "Wetwood generally causes little structural harm but leaves persistent unsightly staining on the trunk.",
    ],
    favorableConditions: [
      "Older trees with wounds, cracks, or pruning cuts allow bacteria to establish in the water-soaked inner wood.",
      "Warm weather increases bacterial fermentation and internal gas pressure that drives the ooze.",
    ],
    lookalikes: [
      {
        condition: "Alcoholic flux (foamy flux)",
        differentiator:
          "Alcoholic flux is a white frothy foam that smells like fermenting beer and is short-lived, whereas bacterial wetwood ooze is dark, persistent, and foul-smelling.",
      },
      {
        condition: "Phytophthora bleeding canker",
        differentiator:
          "Bleeding canker ooze comes from a defined dying bark lesion and threatens the tree, while wetwood flux comes from internal wood and is mostly cosmetic.",
      },
    ],
    immediateActions: [
      "Keep the tree well-watered and vigorous and simply let the flux drain rather than sealing it.",
      "Avoid wounding the trunk and clean up the oozing residue from sensitive plantings below.",
    ],
    treatments: [
      {
        situation: "General management of a cosmetic condition",
        treatment:
          "Maintain overall tree health with proper watering, mulching, and pruning, since wetwood usually needs no direct treatment.",
      },
      {
        situation: "Reducing wounds",
        treatment:
          "Prune correctly and avoid injuries and drain-tube insertion, which is now discouraged as it can worsen decay.",
      },
    ],
    avoid: [
      "Do not bore drain holes or insert tubes into the trunk, an outdated practice that opens new decay pathways.",
      "Avoid applying wound dressings, which do not stop the flux and can trap moisture.",
    ],
    recoveryTimeline:
      "Wetwood is chronic and generally not curable, but healthy trees live for decades with it as a mostly cosmetic issue.",
    prevention: [
      "Prevent trunk and root injuries and prune with proper technique to reduce entry wounds.",
      "Keep trees vigorous with adequate water and mulch to limit stress.",
    ],
    monitoringThresholds: [
      "Monitor the tree's overall vigor and re-evaluate if branch dieback or structural decline develops beyond the cosmetic ooze.",
    ],
    escalationCriteria: [
      "Have a certified arborist assess the tree if wetwood is accompanied by significant decay, cavities, or structural weakness.",
    ],
    sources: [
      { label: "Wisconsin Hort Wetwood Slime Flux", url: "https://hort.extension.wisc.edu/articles/bacterial-wetwood-slime-flux/" },
      { label: "Missouri Botanical Garden Slime Flux", url: "https://www.missouribotanicalgarden.org/gardens-gardening/your-garden/help-for-the-home-gardener/advice-tips-resources/pests-and-problems" },
    ],
  },
  {
    id: "bacterial-leaf-spot-ornamentals",
    name: "Bacterial Leaf Spot (Ornamentals & Bedding Plants)",
    category: "bacterial-disease",
    affectedPlants: ["ornamentals", "houseplants"],
    specificHosts: ["Geranium", "Begonia", "Zinnia", "Ivy", "English ivy"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["leaves", "leaf veins", "leaf margins", "stems"],
    symptomProgression:
      "Small water-soaked spots on leaves enlarge into angular brown to black lesions bounded by veins, often with yellow halos, and can lead to leaf drop or systemic wilt in geranium.",
    observableSigns: [
      "Angular, vein-limited brown to black spots with yellow halos develop on the leaves, sometimes appearing greasy or water-soaked underneath.",
      "In geranium, a systemic Xanthomonas infection causes wedge-shaped wilting and leaf yellowing progressing from the margins.",
      "Lower and inner leaves are usually affected first, followed by defoliation in humid conditions.",
    ],
    favorableConditions: [
      "Warm humid greenhouse conditions with overhead watering and crowded plants promote rapid spread.",
      "Splashing water, handling wet foliage, and contaminated cuttings move the bacteria efficiently.",
    ],
    lookalikes: [
      {
        condition: "Fungal leaf spots (e.g. Alternaria)",
        differentiator:
          "Fungal spots are often round with concentric rings or visible mold, whereas bacterial spots are angular, vein-limited, water-soaked, and haloed.",
      },
      {
        condition: "Edema (oedema) blisters",
        differentiator:
          "Edema forms corky raised bumps on leaf undersides from overwatering without haloed necrotic spots, unlike bacterial leaf spot lesions.",
      },
    ],
    immediateActions: [
      "Stop overhead watering and increase spacing and airflow between plants today.",
      "Remove and bag spotted leaves and discard any systemically wilting geraniums.",
    ],
    treatments: [
      {
        situation: "Greenhouse and indoor management",
        treatment:
          "Space plants, water at the base, and apply copper bactericide labeled for ornamentals to suppress spread since infected tissue cannot be healed.",
      },
      {
        situation: "Culture-indexed geraniums",
        treatment:
          "Start from culture-indexed pathogen-free geranium stock and discard symptomatic plants because Xanthomonas can become systemic.",
      },
    ],
    avoid: [
      "Do not take cuttings from symptomatic stock plants because the bacteria spread through propagation.",
      "Avoid overhead misting and crowding that keep foliage wet.",
    ],
    recoveryTimeline:
      "Spotted leaves will not recover, but new foliage stays clean within one to two weeks under dry, well-spaced conditions and copper protection.",
    prevention: [
      "Buy culture-indexed or certified clean stock and water at the soil line.",
      "Sanitize benches and tools and maintain good spacing and ventilation.",
    ],
    monitoringThresholds: [
      "Scout crops twice weekly and rogue symptomatic plants at the first angular water-soaked spots.",
    ],
    escalationCriteria: [
      "Send samples to a diagnostic lab to identify the specific bacterium, especially for systemic Xanthomonas in geranium.",
    ],
    sources: [
      { label: "UMass Bacterial Diseases Greenhouse", url: "https://ag.umass.edu/greenhouse-floriculture/fact-sheets" },
      { label: "PSU Bacterial Leaf Spot Ornamentals", url: "https://extension.psu.edu/bacterial-leaf-spot-of-ornamentals" },
    ],
  },
  {
    id: "olive-oleander-knot",
    name: "Bacterial Knot (Olive & Oleander)",
    category: "bacterial-disease",
    affectedPlants: ["trees-shrubs", "ornamentals", "fruit-trees"],
    specificHosts: ["Olive", "Oleander", "Ash", "Privet"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["stems", "branches", "twigs", "trunk cankers"],
    symptomProgression:
      "Bacteria enter through wounds and leaf scars and stimulate rough tumor-like galls or knots on twigs and branches, which enlarge over time, disrupt flow, and cause dieback of affected limbs.",
    observableSigns: [
      "Rough, corky, tumor-like galls or knots develop on twigs, branches, and sometimes the trunk.",
      "Young knots are soft and greenish, later becoming hard, dark, and woody with a warty surface.",
      "Twigs and branches beyond the knots may show reduced vigor, distortion, and dieback.",
    ],
    favorableConditions: [
      "Rain, frost cracks, pruning cuts, and leaf-scar wounds during wet weather allow the bacterium to enter.",
      "Cool wet conditions in fall through spring favor infection at fresh wounds.",
    ],
    lookalikes: [
      {
        condition: "Crown gall on woody plants",
        differentiator:
          "Crown gall forms mainly at the crown and roots at the soil line, whereas bacterial knot develops on aerial twigs and branches following wounds and leaf scars.",
      },
      {
        condition: "Insect galls",
        differentiator:
          "Insect galls are smooth or uniform swellings often with exit holes or larvae inside, unlike the rough irregular corky knots of the bacterial disease.",
      },
    ],
    immediateActions: [
      "Prune out knotted branches well below the galls during dry weather and disinfect tools between cuts.",
      "Remove and destroy the pruned galled wood away from the planting.",
    ],
    treatments: [
      {
        situation: "Wound protection program",
        treatment:
          "Apply copper bactericide before fall rains and after pruning or frost events to protect fresh wounds from infection.",
      },
      {
        situation: "Sanitation pruning",
        treatment:
          "Cut out and destroy knots in dry weather and time pruning to avoid wet conditions since infected tissue cannot be cured.",
      },
    ],
    avoid: [
      "Do not prune during wet weather or fail to disinfect tools, which spreads the bacterium to fresh cuts.",
      "Avoid leaving pruned galled wood in the orchard as a source of inoculum.",
    ],
    recoveryTimeline:
      "Removing knots and protecting wounds can keep a tree productive, but heavily galled scaffolds decline and may need removal over several seasons.",
    prevention: [
      "Time pruning for dry weather and apply copper before rains and after wounding.",
      "Use clean planting stock and disinfect pruning tools between trees.",
    ],
    monitoringThresholds: [
      "Inspect branches after wet seasons for new knots and re-evaluate the copper and pruning schedule each year.",
    ],
    escalationCriteria: [
      "Consult an extension farm advisor if knots spread widely despite sanitation, to reassess timing and copper resistance.",
    ],
    sources: [
      { label: "UC IPM Olive Knot", url: "https://ipm.ucanr.edu/agriculture/olive/olive-knot/" },
      { label: "UC IPM Oleander Knot", url: "https://ipm.ucanr.edu/PMG/GARDEN/PLANTS/DISEASES/oleanderknot.html" },
    ],
  },
  {
    id: "walnut-blight",
    name: "Walnut Blight",
    category: "bacterial-disease",
    affectedPlants: ["fruit-trees", "trees-shrubs"],
    specificHosts: ["English walnut", "Persian walnut", "Walnut"],
    growthStages: ["flowering", "fruiting", "vegetative"],
    symptomLocations: ["nuts/fruit", "catkins", "new growth", "leaves"],
    symptomProgression:
      "Black water-soaked lesions form on young nuts, leaves, and shoots during wet spring weather, and nut infections penetrate the shell to blacken and destroy the kernel, causing drop and yield loss.",
    observableSigns: [
      "Small black slightly sunken lesions appear on developing nuts, often at the blossom end, and can rot the entire nut.",
      "Angular black spots develop on leaves and shoots, sometimes with a water-soaked margin.",
      "Infected young nuts drop prematurely, and later infections leave black blemishes and damaged kernels.",
    ],
    favorableConditions: [
      "Frequent spring rains during bloom and early nut development create ideal wet conditions for infection.",
      "Susceptible early-leafing cultivars and prolonged pistillate bloom increase the window for disease.",
    ],
    lookalikes: [
      {
        condition: "Codling moth or husk fly damage",
        differentiator:
          "Insect damage shows entry holes, frass, or larvae in the husk, whereas walnut blight produces black sunken bacterial lesions without boring insects.",
      },
      {
        condition: "Anthracnose leaf spot",
        differentiator:
          "Anthracnose forms brown irregular leaf blotches later in summer, unlike the black water-soaked spring lesions of walnut blight that also attack nuts.",
      },
    ],
    immediateActions: [
      "Assess bloom-stage weather and prepare a copper spray program if wet conditions coincide with pistillate bloom.",
      "Remove and destroy heavily blighted fallen nuts to reduce inoculum.",
    ],
    treatments: [
      {
        situation: "Bloom-period protection",
        treatment:
          "Apply copper bactericide, often with mancozeb to manage copper resistance, beginning at early bloom and repeating during wet weather.",
      },
      {
        situation: "Cultivar and forecasting",
        treatment:
          "Use later-leafing resistant cultivars and disease-forecasting models to time sprays only when infection risk is high.",
      },
    ],
    avoid: [
      "Do not rely on copper alone in orchards with copper-resistant strains, and do not delay the first bloom spray in wet years.",
      "Avoid planting the most susceptible early-leafing cultivars in high-rainfall areas.",
    ],
    recoveryTimeline:
      "Blighted nuts are lost for the season, but a timely copper program protects the remaining crop, and management is renewed annually.",
    prevention: [
      "Plant later-leafing resistant cultivars and use forecasting to time protective sprays.",
      "Sanitize fallen infected nuts and rotate copper with other materials to limit resistance.",
    ],
    monitoringThresholds: [
      "Track rainfall and bloom stage each spring and initiate sprays when wet weather coincides with pistillate flowering.",
    ],
    escalationCriteria: [
      "Consult an extension nut crop advisor if losses continue despite copper, to test for copper-resistant bacterial strains.",
    ],
    sources: [
      { label: "UC IPM Walnut Blight", url: "https://ipm.ucanr.edu/agriculture/walnut/walnut-blight/" },
      { label: "OSU Walnut Blight", url: "https://extension.oregonstate.edu/crop-production/nut-tree-crops" },
    ],
  },
  {
    id: "bacterial-canker-tomato",
    name: "Bacterial Canker (Tomato)",
    category: "bacterial-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Tomato"],
    growthStages: ["seed-seedling", "vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaf margins", "stems", "fruit surface", "vascular tissue"],
    symptomProgression:
      "Marginal leaf scorch and one-sided wilting appear as the vascular bacterium moves systemically, stems develop light streaks and cankers, and fruit shows bird's-eye spots with white halos.",
    observableSigns: [
      "Leaflets scorch along one side or margin and wilt, often on only part of the plant, reflecting systemic vascular infection.",
      "Cutting the stem reveals yellow to brown discoloration of the vascular ring and sometimes open cankers.",
      "Fruit develops small raised bird's-eye spots with a dark center and a white halo.",
    ],
    favorableConditions: [
      "Warm humid weather with overhead irrigation and handling of wet plants spreads the bacterium.",
      "Infected seed and transplants introduce the disease, and pruning or staking wounds aid systemic entry.",
    ],
    lookalikes: [
      {
        condition: "Bacterial spot of tomato",
        differentiator:
          "Bacterial spot causes many small leaf spots and scabby fruit but is not systemic, whereas bacterial canker causes one-sided wilt, vascular browning, and bird's-eye fruit spots.",
      },
      {
        condition: "Fusarium wilt",
        differentiator:
          "Fusarium wilt yellows and wilts foliage from the base upward with brown vascular streaks but does not produce bird's-eye fruit spots or marginal leaf scorch bands.",
      },
    ],
    immediateActions: [
      "Remove and destroy plants showing one-sided wilt and vascular browning to limit systemic spread today.",
      "Stop overhead watering and avoid pruning or handling wet plants.",
    ],
    treatments: [
      {
        situation: "Sanitation-based management",
        treatment:
          "Rogue infected plants, disinfect stakes and tools, and use copper to slow secondary leaf and fruit spotting, since systemic infection is not curable.",
      },
      {
        situation: "Seed and transplant hygiene",
        treatment:
          "Start from certified clean seed or hot-water-treated seed and clean transplants because the pathogen is strongly seedborne.",
      },
    ],
    avoid: [
      "Do not save seed from infected plants or reuse contaminated stakes and cages without disinfection.",
      "Avoid overhead irrigation and working among wet plants that spread the bacterium.",
    ],
    recoveryTimeline:
      "Systemically infected plants do not recover and should be removed, while sanitation protects the rest of the planting for the season.",
    prevention: [
      "Use certified or hot-water-treated seed and rotate away from tomato and related crops.",
      "Disinfect tools, stakes, and greenhouse surfaces and avoid overhead watering.",
    ],
    monitoringThresholds: [
      "Scout weekly for one-sided wilting and marginal scorch and rogue suspect plants immediately.",
    ],
    escalationCriteria: [
      "Submit samples to a diagnostic lab to confirm Clavibacter and review seed sourcing if canker recurs.",
    ],
    sources: [
      { label: "UMN Extension Bacterial Canker", url: "https://extension.umn.edu/diseases/bacterial-canker-tomato" },
      { label: "Cornell Vegetable Bacterial Canker", url: "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/" },
    ],
  },
  {
    id: "black-rot-crucifers",
    name: "Black Rot (Cole Crops)",
    category: "bacterial-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Cabbage", "Broccoli", "Cauliflower", "Kale", "Brussels sprouts"],
    growthStages: ["seed-seedling", "vegetative", "mature"],
    symptomLocations: ["leaf margins", "leaf veins", "vascular tissue", "whole plant"],
    symptomProgression:
      "V-shaped yellow lesions form at leaf margins and advance inward toward the midrib, the veins in the wedge blacken as the vascular system is invaded, and severe infection stunts or kills the plant.",
    observableSigns: [
      "Characteristic V-shaped yellow to brown lesions point inward from the leaf margin toward the midrib.",
      "Veins within and beyond the lesions turn black as the bacterium spreads through the vascular tissue.",
      "Cut stems and petioles show blackened vascular rings, and heads may develop internal blackening and soft rot.",
    ],
    favorableConditions: [
      "Warm wet weather with rain splash and overhead irrigation drives rapid spread through leaf pores and margins.",
      "Infected seed and transplants, plus working among wet plants, introduce and spread the disease.",
    ],
    lookalikes: [
      {
        condition: "Fusarium yellows of cabbage",
        differentiator:
          "Fusarium yellows causes overall yellowing and curling from lower leaves with brown vascular tissue but lacks the sharp V-shaped marginal lesions with blackened veins of black rot.",
      },
      {
        condition: "Nitrogen deficiency yellowing",
        differentiator:
          "Nitrogen deficiency yellows older leaves uniformly without V-shaped marginal lesions or blackened veins.",
      },
    ],
    immediateActions: [
      "Remove and destroy plants with blackened veins and V-shaped lesions to limit spread today.",
      "Stop overhead watering and avoid working among wet plants.",
    ],
    treatments: [
      {
        situation: "Sanitation and rotation program",
        treatment:
          "Rogue infected plants, rotate crops, and use copper to slow spread since infected plants cannot be cured of the vascular disease.",
      },
      {
        situation: "Seed and transplant hygiene",
        treatment:
          "Use hot-water-treated or certified clean seed and inspect transplants because black rot is seedborne.",
      },
    ],
    avoid: [
      "Do not overhead irrigate or cultivate crucifers while they are wet.",
      "Avoid planting untreated saved seed or reusing infested transplant trays.",
    ],
    recoveryTimeline:
      "Systemically infected plants will not recover, but sanitation and dry conditions protect the remaining crop for the rest of the season.",
    prevention: [
      "Use hot-water-treated seed, resistant varieties, and a three-year rotation away from crucifers.",
      "Water at the base and control cruciferous weeds that harbor the bacterium.",
    ],
    monitoringThresholds: [
      "Scout weekly and rogue plants at the first V-shaped marginal lesions with blackening veins.",
    ],
    escalationCriteria: [
      "Submit samples to confirm Xanthomonas and review seed sources if black rot recurs across the planting.",
    ],
    sources: [
      { label: "Cornell Vegetable Black Rot", url: "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/" },
      { label: "UMN Extension Black Rot", url: "https://extension.umn.edu/disease-management/black-rot-crucifers" },
    ],
  },

  // ==========================================================================
  // VIRAL DISEASES (20)
  // ==========================================================================
  {
    id: "tobacco-mosaic-virus",
    name: "Tobacco Mosaic Virus (TMV)",
    category: "viral-disease",
    affectedPlants: ["vegetable-garden", "ornamentals"],
    specificHosts: ["Tomato", "Pepper", "Tobacco", "Petunia", "Eggplant"],
    growthStages: ["seed-seedling", "vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaves", "new growth", "fruit surface", "whole plant"],
    symptomProgression:
      "A light and dark green mosaic appears on young leaves, foliage becomes mottled and distorted, growth is stunted, and fruit may ripen unevenly with internal browning as the stable virus spreads by contact.",
    observableSigns: [
      "Leaves show a mottled light and dark green mosaic pattern, often with puckering, curling, or fernlike narrowing of leaflets.",
      "Plants are stunted with reduced vigor and uneven distorted growth compared with healthy neighbors.",
      "Fruit may be mottled, malformed, or show internal brown streaking, reducing quality.",
    ],
    favorableConditions: [
      "Handling plants after using tobacco products or touching infected plants spreads this extremely stable contact virus.",
      "Repeated handling, pruning, and mechanical work in dense plantings move the virus efficiently.",
    ],
    lookalikes: [
      {
        condition: "Herbicide drift injury",
        differentiator:
          "Growth-regulator herbicide injury causes uniform leaf strapping and cupping across many plants downwind, whereas TMV mosaic is patchy, mottled, and spreads by contact from plant to plant.",
      },
      {
        condition: "Nutrient deficiency mottling",
        differentiator:
          "Nutrient interveinal chlorosis follows a consistent pattern tied to leaf age and corrects with fertility, unlike the persistent random green mosaic of TMV.",
      },
    ],
    immediateActions: [
      "Remove and destroy plants with clear mosaic and distortion and wash hands and tools thoroughly before touching healthy plants.",
      "Do not use tobacco products while handling plants and disinfect tools with a strong cleaner today.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure for viral infection, so rogue and destroy symptomatic plants promptly to protect the rest of the planting.",
      },
      {
        situation: "Sanitation to stop spread",
        treatment:
          "Wash hands, disinfect tools with trisodium phosphate or a milk solution, and avoid tobacco because the virus survives on surfaces for a long time.",
      },
    ],
    avoid: [
      "Do not handle plants after using tobacco or touching infected plants without washing hands and tools.",
      "Avoid saving seed or propagating from symptomatic plants.",
    ],
    recoveryTimeline:
      "Infected plants never recover from the virus, so success is measured by preventing spread and by replacing plants with resistant varieties.",
    prevention: [
      "Plant resistant tomato and pepper varieties carrying the Tm or L resistance genes.",
      "Practice strict hand and tool sanitation and avoid tobacco use around plants.",
    ],
    monitoringThresholds: [
      "Scout weekly for mosaic and distortion and rogue symptomatic plants immediately to limit mechanical spread.",
    ],
    escalationCriteria: [
      "Use a lab test or immunostrip to confirm the virus if symptoms are ambiguous before removing valuable plants.",
    ],
    sources: [
      { label: "Wisconsin Hort Tobacco Mosaic", url: "https://hort.extension.wisc.edu/articles/tobacco-mosaic/" },
      { label: "PSU Tobacco Mosaic Virus", url: "https://extension.psu.edu/tobacco-mosaic-virus" },
    ],
  },
  {
    id: "cucumber-mosaic-virus",
    name: "Cucumber Mosaic Virus (CMV)",
    category: "viral-disease",
    affectedPlants: ["vegetable-garden", "ornamentals"],
    specificHosts: ["Cucumber", "Squash", "Pepper", "Tomato", "Lily"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaves", "new growth", "fruit surface", "whole plant"],
    symptomProgression:
      "Aphids transmit the virus, causing yellow-green mosaic and downward leaf curling, severe stunting and shortened internodes, and misshapen mottled fruit as the huge host range makes management difficult.",
    observableSigns: [
      "Leaves develop a yellow-green mosaic with downward curling, puckering, and sometimes a narrowed shoestring appearance.",
      "Plants are severely stunted with shortened internodes and bushy stunted growth.",
      "Fruit becomes mottled, warty, and misshapen, and cucumbers may turn pale and bitter.",
    ],
    favorableConditions: [
      "Large populations of many aphid species that transmit the virus non-persistently drive rapid spread.",
      "Abundant weed and perennial reservoirs near gardens supply a continuous source of virus.",
    ],
    lookalikes: [
      {
        condition: "Herbicide injury",
        differentiator:
          "Herbicide injury shows uniform strapping and cupping across drift-exposed plants, whereas CMV produces mosaic and stunting spreading plant to plant with aphids.",
      },
      {
        condition: "Zucchini yellow mosaic virus",
        differentiator:
          "Distinguishing among cucurbit mosaic viruses reliably requires a lab test, though CMV has an especially broad host range including many ornamentals and weeds.",
      },
    ],
    immediateActions: [
      "Remove and destroy severely symptomatic plants and control aphids and nearby weed reservoirs today.",
      "Avoid handling healthy plants after touching infected ones and wash hands and tools.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure, so rogue symptomatic plants promptly and focus on limiting spread since aphids transmit the virus quickly.",
      },
      {
        situation: "Vector and reservoir management",
        treatment:
          "Use reflective mulches to repel aphids, control nearby weeds, and plant resistant varieties, understanding insecticides poorly stop non-persistent transmission.",
      },
    ],
    avoid: [
      "Do not rely on insecticides alone, because aphids transmit CMV in seconds before dying.",
      "Avoid leaving virus-reservoir weeds and volunteers around the garden.",
    ],
    recoveryTimeline:
      "Infected plants do not recover, so early roguing, weed control, and resistant varieties are the path forward for the season.",
    prevention: [
      "Plant resistant or tolerant varieties and use reflective mulch to deter aphids.",
      "Control perennial weeds that serve as reservoirs and manage aphid colonies early.",
    ],
    monitoringThresholds: [
      "Scout weekly for mosaic and monitor aphid activity, roguing symptomatic plants as soon as found.",
    ],
    escalationCriteria: [
      "Use a lab test or immunostrip to confirm CMV versus other mosaic viruses before major control decisions.",
    ],
    sources: [
      { label: "Wisconsin Hort Cucumber Mosaic", url: "https://hort.extension.wisc.edu/articles/cucumber-mosaic/" },
      { label: "Cornell Vegetable Virus Factsheets", url: "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/" },
    ],
  },
  {
    id: "tomato-spotted-wilt-virus",
    name: "Tomato Spotted Wilt Virus (TSWV)",
    category: "viral-disease",
    affectedPlants: ["vegetable-garden", "ornamentals"],
    specificHosts: ["Tomato", "Pepper", "Lettuce", "Dahlia", "Chrysanthemum"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["new growth", "leaves", "fruit surface", "stems"],
    symptomProgression:
      "Thrips transmit the virus, producing bronzing and dark ring spots on young leaves, one-sided stunting and stem streaking, and distinctive concentric ring patterns on fruit as symptoms vary widely by host.",
    observableSigns: [
      "Young leaves show bronzing, dark necrotic flecks, and concentric ringspots, often with a purplish cast.",
      "Plants may be stunted and one-sided, with brown to black streaks on stems and petioles.",
      "Fruit develops distinctive chlorotic and necrotic concentric rings and blotches that ruin marketability.",
    ],
    favorableConditions: [
      "Populations of western flower thrips and other thrips species that acquire the virus as larvae spread it as adults.",
      "Nearby infected ornamentals and weeds provide reservoirs that feed continuous thrips transmission.",
    ],
    lookalikes: [
      {
        condition: "Impatiens necrotic spot virus (INSV)",
        differentiator:
          "INSV is a closely related thrips-transmitted tospovirus, and reliable separation from TSWV requires a lab test since symptoms overlap strongly.",
      },
      {
        condition: "Early blight or fungal ringspot",
        differentiator:
          "Fungal target spots enlarge with fungal growth and favor lower leaves, whereas TSWV produces bronzing and concentric rings on new growth and fruit with thrips present.",
      },
    ],
    immediateActions: [
      "Rogue and bag symptomatic plants immediately to remove virus reservoirs feeding thrips.",
      "Scout for thrips and manage nearby infected weeds and ornamentals today.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure, so promptly remove symptomatic plants and focus on thrips and reservoir management to protect healthy plants.",
      },
      {
        situation: "Vector management",
        treatment:
          "Use resistant varieties, reflective mulch, thrips monitoring with sticky cards, and targeted insecticides or biologicals to suppress thrips populations.",
      },
    ],
    avoid: [
      "Do not keep flowering weeds and infected ornamentals near susceptible crops, since they harbor virus and thrips.",
      "Avoid relying solely on insecticides, which cannot fully stop thrips transmission.",
    ],
    recoveryTimeline:
      "Infected plants never recover, so managing thrips and roguing early are the only ways to protect the planting through the season.",
    prevention: [
      "Plant TSWV-resistant tomato and pepper varieties and start with clean transplants.",
      "Monitor thrips with sticky cards, use reflective mulch, and eliminate weed reservoirs.",
    ],
    monitoringThresholds: [
      "Track thrips on sticky cards and scout weekly, roguing symptomatic plants immediately when found.",
    ],
    escalationCriteria: [
      "Use a lab test or immunostrip to confirm TSWV versus INSV before major roguing or program changes.",
    ],
    sources: [
      { label: "UC IPM Tomato Spotted Wilt", url: "https://ipm.ucanr.edu/agriculture/tomato/tomato-spotted-wilt/" },
      { label: "NC State Tomato Spotted Wilt", url: "https://content.ces.ncsu.edu/tomato-spotted-wilt" },
    ],
  },
  {
    id: "impatiens-necrotic-spot-virus",
    name: "Impatiens Necrotic Spot Virus (INSV)",
    category: "viral-disease",
    affectedPlants: ["ornamentals", "houseplants"],
    specificHosts: ["Impatiens", "Begonia", "Cyclamen", "Gloxinia", "New Guinea impatiens"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["new growth", "leaves", "stems", "shoot tips"],
    symptomProgression:
      "Thrips transmit the virus in greenhouses, causing ringspots, black or brown necrotic flecks and blotches, stem streaking, and sudden tip death, with symptoms varying dramatically by host species.",
    observableSigns: [
      "Leaves develop necrotic ringspots, brown or black flecks, and irregular dead blotches, often concentrated on new growth.",
      "Black or brown streaks appear on stems and petioles, and growing tips may suddenly collapse and die.",
      "Symptoms are highly variable between species, ranging from mild spotting to severe necrosis and stunting.",
    ],
    favorableConditions: [
      "Western flower thrips populations in greenhouses that acquire the virus as larvae drive spread.",
      "Crowded benches with mixed ornamental crops and infected stock plants sustain the virus and vector.",
    ],
    lookalikes: [
      {
        condition: "Tomato spotted wilt virus (TSWV)",
        differentiator:
          "TSWV is the closely related tospovirus of vegetables and cannot be reliably separated from INSV by eye, so a lab test is needed to distinguish them.",
      },
      {
        condition: "Fungal or bacterial leaf spot",
        differentiator:
          "Leaf-spot pathogens produce expanding lesions sometimes with mold or ooze, whereas INSV causes ringspots and necrotic flecks with thrips present and no fungal structures.",
      },
    ],
    immediateActions: [
      "Rogue and bag symptomatic plants immediately and isolate the crop to stop thrips-mediated spread.",
      "Place sticky cards to assess thrips populations and remove flowering weeds today.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure for INSV, so destroy symptomatic and indicator plants promptly and manage thrips aggressively.",
      },
      {
        situation: "Greenhouse thrips program",
        treatment:
          "Use sticky-card monitoring, biological controls such as predatory mites, and rotated insecticides to suppress western flower thrips.",
      },
    ],
    avoid: [
      "Do not hold infected stock plants or symptomatic indicator plants that seed the whole greenhouse with virus.",
      "Avoid ignoring low thrips numbers, since even a few can transmit INSV between crops.",
    ],
    recoveryTimeline:
      "Infected plants cannot be cured, so the goal is roguing and thrips control to keep the remaining crop clean through production.",
    prevention: [
      "Start with virus-tested clean plugs and cuttings and keep sticky-card thrips monitoring in place.",
      "Eliminate weeds under benches and use indicator plants such as petunia to detect virus early.",
    ],
    monitoringThresholds: [
      "Monitor thrips continuously on sticky cards and rogue symptomatic plants the moment they are detected.",
    ],
    escalationCriteria: [
      "Use immunostrips or a diagnostic lab to confirm INSV before large-scale roguing in a mixed greenhouse.",
    ],
    sources: [
      { label: "UMass INSV and TSWV", url: "https://ag.umass.edu/greenhouse-floriculture/fact-sheets" },
      { label: "PSU Impatiens Necrotic Spot Virus", url: "https://extension.psu.edu/impatiens-necrotic-spot-virus" },
    ],
  },
  {
    id: "tomato-yellow-leaf-curl-virus",
    name: "Tomato Yellow Leaf Curl Virus (TYLCV)",
    category: "viral-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Tomato"],
    growthStages: ["seed-seedling", "vegetative", "flowering", "fruiting"],
    symptomLocations: ["new growth", "leaves", "leaf margins", "whole plant"],
    symptomProgression:
      "Whiteflies transmit the virus, causing upward cupping and yellowing of new leaflets, severe stunting with a bushy appearance, and heavy flower drop that drastically reduces fruit set the earlier plants are infected.",
    observableSigns: [
      "New leaflets curl upward and inward, turn yellow along the margins, and become small and crumpled.",
      "Plants are severely stunted and bushy with shortened internodes, especially when infected young.",
      "Flowers abort and fruit set is drastically reduced, causing major yield loss.",
    ],
    favorableConditions: [
      "High populations of the silverleaf whitefly that transmits the virus persistently drive rapid spread.",
      "Warm climates with continuous tomato cropping and nearby infected hosts sustain the virus and vector.",
    ],
    lookalikes: [
      {
        condition: "Physiological leaf roll",
        differentiator:
          "Physiological leaf roll curls older leaves upward from heat or heavy pruning without yellowing, stunting, or whiteflies, whereas TYLCV cups and yellows new growth and stunts the plant.",
      },
      {
        condition: "Broad mite damage",
        differentiator:
          "Broad mite twists and bronzes new growth but mites are present and there is no whitefly-driven yellow upward cupping and stunting typical of TYLCV.",
      },
    ],
    immediateActions: [
      "Remove and bag stunted upward-cupping plants immediately and manage whiteflies today.",
      "Cover young transplants with insect netting and eliminate nearby infected hosts.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure, so rogue symptomatic plants promptly, especially early in the crop, to reduce the virus reservoir.",
      },
      {
        situation: "Whitefly management",
        treatment:
          "Use TYLCV-resistant varieties, insect exclusion netting on young plants, reflective mulch, and insecticides targeting whiteflies.",
      },
    ],
    avoid: [
      "Do not leave old infected tomato plants or volunteer hosts near new plantings.",
      "Avoid transplanting into fields with high whitefly pressure without resistant varieties and protection.",
    ],
    recoveryTimeline:
      "Infected plants do not recover and early infection is most damaging, so resistant varieties and whitefly control protect yield going forward.",
    prevention: [
      "Plant TYLCV-resistant tomato varieties and protect young plants with exclusion netting.",
      "Control whiteflies and remove crop residue and volunteer tomatoes between crops.",
    ],
    monitoringThresholds: [
      "Monitor whiteflies with sticky cards and scout young plants weekly, roguing symptomatic ones immediately.",
    ],
    escalationCriteria: [
      "Use a lab test to confirm TYLCV before switching varieties or intensifying regional whitefly management.",
    ],
    sources: [
      { label: "UF IFAS Tomato Yellow Leaf Curl", url: "https://edis.ifas.ufl.edu/publication/IN1064" },
      { label: "UC IPM Tomato Yellow Leaf Curl", url: "https://ipm.ucanr.edu/agriculture/tomato/tomato-yellow-leaf-curl/" },
    ],
  },
  {
    id: "rose-mosaic-virus",
    name: "Rose Mosaic Virus Complex",
    category: "viral-disease",
    affectedPlants: ["ornamentals", "trees-shrubs"],
    specificHosts: ["Rose", "Hybrid tea rose", "Climbing rose"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["leaves", "new growth", "whole plant"],
    symptomProgression:
      "Yellow mosaic, ring, and oak-leaf line patterns appear on the foliage, spring symptoms are most visible and may fade in summer heat, and infected plants show reduced vigor, bloom, and winter hardiness over years.",
    observableSigns: [
      "Leaves show bright yellow mosaic, wavy line patterns, ringspots, or oak-leaf shaped yellow bands, most striking in spring.",
      "Symptoms often fade as summer temperatures rise, then reappear the following spring.",
      "Infected bushes are less vigorous, flower less, and are more prone to winter injury over time.",
    ],
    favorableConditions: [
      "The virus complex is spread almost entirely through grafting and propagation from infected mother plants.",
      "Cool spring temperatures make the mosaic and line patterns most visible.",
    ],
    lookalikes: [
      {
        condition: "Herbicide injury",
        differentiator:
          "Herbicide injury distorts and straps new growth uniformly across exposed plants, whereas rose mosaic shows stable yellow mosaic and line patterns tied to graft-transmitted infection.",
      },
      {
        condition: "Nutrient deficiency chlorosis",
        differentiator:
          "Nutrient chlorosis follows leaf-age and vein patterns and corrects with fertility, unlike the persistent random mosaic, rings, and oak-leaf lines of rose mosaic.",
      },
    ],
    immediateActions: [
      "Confirm the pattern is a virus mosaic rather than nutrient or spray injury and mark the affected bush.",
      "Decide whether to keep the plant for its bloom or remove it to prevent propagating infected wood.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure, so either tolerate a lightly symptomatic plant or remove and replace severely affected bushes with virus-tested stock.",
      },
      {
        situation: "Preventing spread",
        treatment:
          "Never propagate, graft, or bud from infected plants, since the complex spreads through infected rootstock and scion wood.",
      },
    ],
    avoid: [
      "Do not take cuttings or buds from symptomatic plants for propagation.",
      "Avoid buying bargain roses of unknown virus status from unverified sources.",
    ],
    recoveryTimeline:
      "Infected roses never recover, but many live for years with mild symptoms, while severely affected plants should be replaced with clean stock.",
    prevention: [
      "Buy roses produced from virus-indexed, heat-treated clean foundation stock.",
      "Use only healthy mother plants for any grafting or budding.",
    ],
    monitoringThresholds: [
      "Inspect new spring growth for mosaic and line patterns and re-evaluate vigor and bloom each season.",
    ],
    escalationCriteria: [
      "Have a lab confirm the specific viruses if you plan to propagate or before removing a valued specimen.",
    ],
    sources: [
      { label: "UC IPM Rose Mosaic", url: "https://ipm.ucanr.edu/PMG/GARDEN/PLANTS/DISEASES/rosemosaic.html" },
      { label: "Missouri Botanical Garden Rose Mosaic", url: "https://www.missouribotanicalgarden.org/gardens-gardening/your-garden/help-for-the-home-gardener/advice-tips-resources/pests-and-problems" },
    ],
  },
  {
    id: "bean-common-mosaic-virus",
    name: "Bean Common Mosaic Virus (BCMV)",
    category: "viral-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Snap bean", "Dry bean", "Cowpea"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["leaves", "new growth", "whole plant", "pods"],
    symptomProgression:
      "A light and dark green mosaic and leaf curling appear on foliage from seedborne infection and aphid spread, plants become stunted with puckered downward-cupping leaves, and susceptible cultivars can develop systemic black root necrosis.",
    observableSigns: [
      "Leaves display a light and dark green mosaic with puckering, downward cupping, and a narrowed distorted shape.",
      "Plants are stunted and bushy with reduced pod set compared with healthy neighbors.",
      "In certain resistant cultivars exposed to necrotic strains, a systemic blackening root and stem necrosis kills the plant.",
    ],
    favorableConditions: [
      "Infected seed introduces the virus at emergence, and many aphid species then spread it non-persistently.",
      "Susceptible cultivars grown near infected fields and weed hosts increase spread.",
    ],
    lookalikes: [
      {
        condition: "Herbicide injury",
        differentiator:
          "Herbicide injury straps and cups leaves uniformly across drift-exposed plants, whereas BCMV mosaic and stunting appear plant to plant from seedborne and aphid spread.",
      },
      {
        condition: "Cucumber mosaic virus on beans",
        differentiator:
          "CMV has a much broader host range and reliable separation requires a lab test, though BCMV is strongly seedborne in beans while CMV is not.",
      },
    ],
    immediateActions: [
      "Rogue and destroy clearly mosaic-symptomatic plants and control aphids and weed reservoirs today.",
      "Note the cultivar and avoid saving seed from affected plants.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure, so remove symptomatic plants and rely on clean seed and resistant cultivars going forward.",
      },
      {
        situation: "Vector and seed management",
        treatment:
          "Use certified virus-free seed, plant resistant cultivars with the I gene where necrotic strains are absent, and manage aphids and weeds.",
      },
    ],
    avoid: [
      "Do not save or plant seed from infected bean plants, since the virus is strongly seedborne.",
      "Avoid planting I-gene cultivars where necrotic BCMV strains occur, as they can trigger fatal black root.",
    ],
    recoveryTimeline:
      "Infected plants do not recover, so clean seed and resistant varieties are the practical solution for the following season.",
    prevention: [
      "Use certified virus-free seed and plant appropriate resistant cultivars for your region.",
      "Control aphids and remove weed and volunteer reservoirs around bean plantings.",
    ],
    monitoringThresholds: [
      "Scout emerging beans weekly for mosaic and rogue symptomatic plants, tracking aphid activity.",
    ],
    escalationCriteria: [
      "Use a lab test to identify the virus and strain before choosing resistant cultivars, given the risk of necrotic strains.",
    ],
    sources: [
      { label: "Michigan State Bean Virus", url: "https://www.canr.msu.edu/dry_beans/" },
      { label: "UMN Extension Bean Viruses", url: "https://extension.umn.edu/disease-management/bean-diseases" },
    ],
  },
  {
    id: "squash-mosaic-viruses",
    name: "Squash & Zucchini Yellow Mosaic Viruses",
    category: "viral-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Zucchini", "Summer squash", "Winter squash", "Pumpkin", "Cucumber"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaves", "new growth", "fruit surface", "whole plant"],
    symptomProgression:
      "Aphids transmit these potyviruses, producing bright yellow mosaic and blistering on leaves, severe leaf distortion into a shoestring shape, and warty knobby misshapen fruit with poor color that is unmarketable.",
    observableSigns: [
      "Leaves show striking yellow-and-green mosaic with raised dark green blisters and puckering.",
      "New leaves become severely distorted, sometimes reduced to narrow shoestring-like strips.",
      "Fruit is bumpy, warty, knobby, and discolored with green and yellow mottling, ruining quality.",
    ],
    favorableConditions: [
      "Migrating aphids that transmit the viruses non-persistently spread them rapidly among cucurbits.",
      "Nearby infected cucurbits and weed reservoirs increase inoculum and spread.",
    ],
    lookalikes: [
      {
        condition: "Cucumber mosaic virus",
        differentiator:
          "CMV also causes cucurbit mosaic but has a much broader host range, and reliably separating the cucurbit potyviruses from CMV requires a lab test.",
      },
      {
        condition: "Herbicide or micronutrient injury",
        differentiator:
          "Herbicide and micronutrient issues appear uniform and pattern-based, whereas these viruses spread plant to plant with aphids and produce blistered mosaic and warty fruit.",
      },
    ],
    immediateActions: [
      "Rogue and destroy severely mosaic and distorted plants and control aphids and weed reservoirs today.",
      "Avoid handling healthy plants after touching infected ones.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure, so remove symptomatic plants promptly and rely on vector and reservoir management for the rest of the crop.",
      },
      {
        situation: "Vector management",
        treatment:
          "Use reflective mulch to deter aphids, plant resistant or tolerant varieties, and control nearby weeds and volunteer cucurbits.",
      },
    ],
    avoid: [
      "Do not depend on insecticides, since non-persistent aphid transmission happens before the aphids are killed.",
      "Avoid leaving infected cucurbits and weed hosts near the planting.",
    ],
    recoveryTimeline:
      "Infected plants do not recover, so early roguing, resistant varieties, and aphid deterrents protect the remaining crop for the season.",
    prevention: [
      "Plant resistant or tolerant cucurbit varieties and use reflective mulch to repel aphids.",
      "Control weeds and volunteers and rogue symptomatic plants early.",
    ],
    monitoringThresholds: [
      "Scout weekly for mosaic and monitor aphid flights, roguing symptomatic plants as soon as found.",
    ],
    escalationCriteria: [
      "Use a lab test to identify the specific cucurbit virus before major variety or management decisions.",
    ],
    sources: [
      { label: "Cornell Vegetable Cucurbit Viruses", url: "https://www.vegetables.cornell.edu/pest-management/disease-factsheets/" },
      { label: "UF IFAS Cucurbit Viruses", url: "https://edis.ifas.ufl.edu/entity/topic/cucurbit_diseases" },
    ],
  },
  {
    id: "papaya-ringspot-virus",
    name: "Papaya Ringspot Virus (PRSV)",
    category: "viral-disease",
    affectedPlants: ["fruit-trees", "vegetable-garden"],
    specificHosts: ["Papaya", "Squash", "Cucumber", "Watermelon"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaves", "new growth", "stems", "fruit surface"],
    symptomProgression:
      "Aphids transmit this potyvirus, causing vein clearing and mosaic on young papaya leaves, severe leaf distortion and shoestring symptoms, dark greasy streaks on petioles and stems, and concentric ringspots on fruit.",
    observableSigns: [
      "Young papaya leaves show vein clearing and yellow mosaic that progresses to severe leaf distortion and shoestring-like blades.",
      "Dark green oily or greasy streaks develop on petioles and the upper stem.",
      "Fruit develops characteristic concentric ring-shaped spots and may be reduced in size and sugar.",
    ],
    favorableConditions: [
      "Migrating aphids that transmit the virus non-persistently spread it rapidly through papaya and cucurbit plantings.",
      "Nearby infected papaya and cucurbits provide a continuous source of virus.",
    ],
    lookalikes: [
      {
        condition: "Boron or micronutrient deficiency in papaya",
        differentiator:
          "Micronutrient deficiencies cause consistent leaf and fruit distortion patterns tied to nutrition without vein clearing, oily stem streaks, or concentric fruit rings of PRSV.",
      },
      {
        condition: "Papaya mosaic (a different virus)",
        differentiator:
          "Reliable separation of papaya viruses requires a lab test, though PRSV characteristically produces oily petiole streaks and concentric fruit ringspots.",
      },
    ],
    immediateActions: [
      "Rogue and destroy symptomatic papaya plants promptly to remove the virus reservoir and slow aphid spread.",
      "Control weed and cucurbit reservoirs near the papaya planting today.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure, so remove symptomatic plants and, where available, grow transgenic PRSV-resistant papaya such as Rainbow in Hawaii.",
      },
      {
        situation: "Vector and reservoir management",
        treatment:
          "Isolate new plantings from old infected fields, use reflective mulch, and remove cucurbit and weed reservoirs to slow spread.",
      },
    ],
    avoid: [
      "Do not establish new papaya near old infected plantings that serve as virus reservoirs.",
      "Avoid depending on insecticides, which cannot stop non-persistent aphid transmission.",
    ],
    recoveryTimeline:
      "Infected plants do not recover, so roguing, isolation, and resistant papaya where available are the path forward for the planting.",
    prevention: [
      "Where available, plant transgenic PRSV-resistant papaya varieties and isolate new fields from old ones.",
      "Rogue infected plants early and control cucurbit and weed reservoirs.",
    ],
    monitoringThresholds: [
      "Scout young papaya weekly for vein clearing and mosaic and rogue symptomatic plants immediately.",
    ],
    escalationCriteria: [
      "Use a lab test to confirm PRSV and consult extension about resistant varieties and area-wide roguing.",
    ],
    sources: [
      { label: "UH Manoa Papaya Ringspot", url: "https://www.ctahr.hawaii.edu/site/PublicationsFreePubs.aspx" },
      { label: "UF IFAS Papaya Diseases", url: "https://edis.ifas.ufl.edu/entity/topic/papaya" },
    ],
  },
  {
    id: "plum-pox-virus-sharka",
    name: "Plum Pox Virus (Sharka)",
    category: "viral-disease",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Plum", "Peach", "Apricot", "Nectarine", "Almond"],
    growthStages: ["flowering", "fruiting", "vegetative"],
    symptomLocations: ["leaves", "blossoms", "nuts/fruit", "fruit surface"],
    symptomProgression:
      "Aphids and infected propagation spread this quarantine potyvirus, producing pale rings and blotches on leaves, color-breaking on petals, and diagnostic ring or line patterns on fruit with flesh discoloration, causing severe drop and unmarketable stone fruit.",
    observableSigns: [
      "Leaves develop chlorotic rings, pale green bands, and blotches, sometimes with vein clearing.",
      "Fruit shows diagnostic pale rings, lines, and blotches on the skin and internal discoloration or gumming of the flesh.",
      "Affected fruit is deformed, may drop prematurely, and is rendered unmarketable.",
    ],
    favorableConditions: [
      "Movement of infected nursery stock and budwood spreads the virus over long distances.",
      "Local aphid activity transmits the virus non-persistently between neighboring stone-fruit trees.",
    ],
    lookalikes: [
      {
        condition: "Prunus necrotic ringspot virus",
        differentiator:
          "Other Prunus ringspot viruses cause leaf ring and shot-hole patterns, but plum pox characteristically also rings and discolors the fruit and is a regulated quarantine disease requiring lab confirmation.",
      },
      {
        condition: "Nutrient or spray injury",
        differentiator:
          "Nutritional and spray injuries follow uniform patterns without the graft-transmitted spread and diagnostic fruit ring patterns of plum pox.",
      },
    ],
    immediateActions: [
      "Report suspected plum pox to your state or national plant protection agency because it is a regulated quarantine disease.",
      "Do not move any budwood, nursery stock, or fruit from suspect trees.",
    ],
    treatments: [
      {
        situation: "Regulatory response",
        treatment:
          "Follow official eradication protocols, which typically require testing and removal of infected trees, since there is no cure.",
      },
      {
        situation: "Prevention in new plantings",
        treatment:
          "Plant only certified virus-tested stone-fruit stock and manage aphids, because infected trees cannot be treated.",
      },
    ],
    avoid: [
      "Do not propagate or graft with budwood from unknown or suspect stone-fruit trees.",
      "Avoid moving nursery stock or fruit out of any quarantined area.",
    ],
    recoveryTimeline:
      "There is no cure, and infected trees must be removed under regulatory programs, so prevention with certified stock is essential.",
    prevention: [
      "Use only certified virus-tested budwood and nursery trees for new stone-fruit plantings.",
      "Manage aphids and support area-wide surveys and roguing programs.",
    ],
    monitoringThresholds: [
      "Inspect leaves and fruit each season for ring patterns and report any suspect symptoms to authorities immediately.",
    ],
    escalationCriteria: [
      "Contact your state department of agriculture or national plant protection organization at once for confirmation if plum pox is suspected.",
    ],
    sources: [
      { label: "USDA APHIS Plum Pox", url: "https://www.aphis.usda.gov/plant-pests-diseases/plum-pox" },
      { label: "PSU Plum Pox Virus", url: "https://extension.psu.edu/plum-pox-virus" },
    ],
  },
  {
    id: "hosta-virus-x",
    name: "Hosta Virus X (HVX)",
    category: "viral-disease",
    affectedPlants: ["ornamentals"],
    specificHosts: ["Hosta"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["leaves", "leaf veins", "new growth"],
    symptomProgression:
      "The virus spreads through sap on tools and division, producing mottled ink-bleed patterns that follow the veins, lumpy or puckered tissue, and progressive twisting and collapse of leaves over several seasons.",
    observableSigns: [
      "Leaves show blue-green mottling and ink-bleed patterns where color appears to leak along and between the veins.",
      "Tissue becomes lumpy, puckered, or twisted, and some cultivars develop dead brown spots.",
      "Symptoms worsen year to year, with plants declining and leaves becoming increasingly distorted.",
    ],
    favorableConditions: [
      "Mechanical sap transmission on cutting tools, hands, and during division spreads the virus.",
      "Propagating and dividing infected plants without sanitizing tools moves the virus to healthy hostas.",
    ],
    lookalikes: [
      {
        condition: "Natural variegation or cultivar markings",
        differentiator:
          "Bred variegation is crisp, symmetrical, and stable, whereas HVX shows irregular ink-bleed mottling that follows veins, is asymmetric, and worsens over time.",
      },
      {
        condition: "Herbicide or foliar nematode injury",
        differentiator:
          "Foliar nematodes create vein-bounded brown wedges and herbicide causes strapping, unlike the characteristic bleeding blue-green mottle of HVX.",
      },
    ],
    immediateActions: [
      "Dig and destroy plants with clear ink-bleed mottling and lumpy tissue rather than composting them.",
      "Disinfect any tools that touched the plant before working on healthy hostas today.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure, so remove and destroy infected hostas and do not divide or propagate them.",
      },
      {
        situation: "Preventing sap spread",
        treatment:
          "Disinfect cutting tools with a strong cleaner between plants and avoid dividing plants of unknown status.",
      },
    ],
    avoid: [
      "Do not divide or take cuttings from symptomatic hostas, spreading virus-laden sap.",
      "Avoid buying suspiciously mottled bargain hostas, which may be infected.",
    ],
    recoveryTimeline:
      "Infected hostas never recover and decline over years, so removal and clean replacements are the only remedy.",
    prevention: [
      "Buy hostas from reputable sources and inspect for ink-bleed mottling before planting.",
      "Sanitize tools between plants and avoid dividing plants of unknown virus status.",
    ],
    monitoringThresholds: [
      "Inspect hostas each spring for ink-bleed mottling and remove symptomatic plants immediately.",
    ],
    escalationCriteria: [
      "Use an immunostrip or lab test to confirm HVX before removing valuable or unusual hostas.",
    ],
    sources: [
      { label: "UMN Extension Hosta Virus X", url: "https://extension.umn.edu/plant-diseases/hosta-virus-x" },
      { label: "Wisconsin Hort Hosta Virus X", url: "https://hort.extension.wisc.edu/articles/hosta-virus-x/" },
    ],
  },
  {
    id: "orchid-viruses-cymmv-orsv",
    name: "Orchid Viruses (CymMV & ORSV)",
    category: "viral-disease",
    affectedPlants: ["houseplants", "ornamentals"],
    specificHosts: ["Phalaenopsis", "Cattleya", "Cymbidium", "Dendrobium"],
    growthStages: ["vegetative", "flowering", "mature"],
    symptomLocations: ["leaves", "flowers", "new growth"],
    symptomProgression:
      "Cymbidium mosaic virus and Odontoglossum ringspot virus spread through sap on cutting tools, producing chlorotic and necrotic streaks and mosaic on leaves, sunken black necrotic patches, and color-break streaking or spotting on flowers over time.",
    observableSigns: [
      "Leaves develop chlorotic or necrotic streaks, mosaic mottling, and sunken black or brown pitted areas.",
      "Flowers show color breaking, streaking, and necrotic flecks that reduce their quality and value.",
      "Symptoms accumulate slowly, and some infected plants appear symptomless while still transmitting virus.",
    ],
    favorableConditions: [
      "Reusing cutting tools between plants without sterilization spreads the viruses through contaminated sap.",
      "Dividing and repotting many plants in succession with shared tools drives spread in collections.",
    ],
    lookalikes: [
      {
        condition: "Fungal or bacterial leaf spot on orchids",
        differentiator:
          "Leaf-spot pathogens make expanding lesions sometimes with ooze or spores, whereas orchid viruses cause streaked mosaic, sunken necrotic pits, and flower color break with no fungal structures.",
      },
      {
        condition: "Sunburn or cold injury",
        differentiator:
          "Physical injury produces localized bleached or blackened patches tied to an exposure event, unlike the systemic streaking and flower color-break of the viruses.",
      },
    ],
    immediateActions: [
      "Isolate any orchid with streaked mosaic leaves or color-broken flowers away from the collection today.",
      "Sterilize all cutting tools with flame or fresh razor blades between every plant.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure, so isolate or discard infected orchids and never propagate divisions from them.",
      },
      {
        situation: "Preventing spread in a collection",
        treatment:
          "Use single-use blades or flame-sterilized tools per plant, sanitize hands and pots, and test suspect plants with immunostrips.",
      },
    ],
    avoid: [
      "Do not reuse the same cutting tool between orchids without sterilizing it.",
      "Avoid propagating divisions from any plant with virus symptoms.",
    ],
    recoveryTimeline:
      "Infected orchids never recover, so isolation, strict tool hygiene, and testing protect the rest of the collection long term.",
    prevention: [
      "Use single-use or flame-sterilized cutting tools and sanitize between every plant.",
      "Quarantine and immunostrip-test new acquisitions before adding them to the collection.",
    ],
    monitoringThresholds: [
      "Inspect leaves and flowers regularly for streaking and color break and immunostrip-test any suspicious plants.",
    ],
    escalationCriteria: [
      "Use immunostrips or a diagnostic lab to confirm CymMV or ORSV before culling valuable orchids or breeding stock.",
    ],
    sources: [
      { label: "UH Manoa Orchid Viruses", url: "https://www.ctahr.hawaii.edu/site/PublicationsFreePubs.aspx" },
      { label: "AOS Orchid Virus Information", url: "https://www.aos.org/orchids/orchid-pests-diseases.aspx" },
    ],
  },
  {
    id: "tulip-breaking-virus",
    name: "Tulip Breaking Virus",
    category: "viral-disease",
    affectedPlants: ["ornamentals"],
    specificHosts: ["Tulip", "Lily"],
    growthStages: ["flowering", "vegetative"],
    symptomLocations: ["flowers", "petals", "leaves"],
    symptomProgression:
      "Aphids transmit the virus between tulips and lilies, causing color breaking that produces feathered or flamed streaks in the petals, faint mottling and streaking on leaves, and gradual weakening and decline of the bulbs over years.",
    observableSigns: [
      "Flower petals develop irregular feathered, flamed, or striped color-break patterns where the base color is broken by lighter or darker streaks.",
      "Leaves may show faint light and dark green mottling or streaking.",
      "Over successive seasons bulbs weaken, flowers become smaller, and vigor declines.",
    ],
    favorableConditions: [
      "Aphid activity that transmits the virus non-persistently spreads it between tulips and nearby lilies.",
      "Growing prized tulips near infected tulips or lilies increases the chance of spread.",
    ],
    lookalikes: [
      {
        condition: "Bred bicolor or flamed cultivars",
        differentiator:
          "Modern flamed tulip cultivars are bred for stable symmetrical patterns, whereas virus color-break is irregular, feathered, and accompanies declining vigor over years.",
      },
      {
        condition: "Cold or environmental petal streaking",
        differentiator:
          "Weather-related streaking is inconsistent from year to year without leaf mottling or progressive bulb decline, unlike the persistent virus infection.",
      },
    ],
    immediateActions: [
      "Rogue and destroy tulips showing color-break streaks to protect nearby healthy tulips and lilies.",
      "Manage aphids and keep prized tulips away from infected tulips and lilies today.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure, so dig and destroy infected bulbs rather than replanting them.",
      },
      {
        situation: "Vector and isolation management",
        treatment:
          "Control aphids, isolate valuable collections from lilies and old tulips, and buy virus-free bulbs.",
      },
    ],
    avoid: [
      "Do not save or replant bulbs from color-broken tulips.",
      "Avoid planting prized tulips next to lilies that can serve as a virus reservoir.",
    ],
    recoveryTimeline:
      "Infected bulbs never recover and slowly decline, so removal and clean replacement bulbs are the remedy.",
    prevention: [
      "Buy certified virus-free bulbs and isolate valuable tulips from lilies and old plantings.",
      "Control aphids and rogue any bulbs showing color break.",
    ],
    monitoringThresholds: [
      "Inspect flowers each spring for color-break streaking and remove symptomatic bulbs promptly.",
    ],
    escalationCriteria: [
      "Use a lab test to confirm the virus before removing rare heirloom bulbs of uncertain status.",
    ],
    sources: [
      { label: "RHS Tulip Viruses", url: "https://www.rhs.org.uk/disease/tulip-viruses" },
      { label: "Wisconsin Hort Tulip Problems", url: "https://hort.extension.wisc.edu/articles/tulip-tulipa/" },
    ],
  },
  {
    id: "beet-curly-top-virus",
    name: "Beet Curly Top Virus",
    category: "viral-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Tomato", "Pepper", "Bean", "Beet", "Melon"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["new growth", "leaves", "leaf veins", "whole plant"],
    symptomProgression:
      "The beet leafhopper transmits the virus from desert weeds into gardens, causing sudden yellowing and upward curling of leaves, thickened crispy foliage with purpling veins, severe stunting, and often rapid plant death in tomato.",
    observableSigns: [
      "Leaves turn yellow and curl upward, becoming thick, stiff, and crispy with a leathery texture.",
      "Veins on leaf undersides often turn purple, and stems become stiff and stunted.",
      "Affected tomato plants stop growing, set little fruit, and frequently die within a few weeks.",
    ],
    favorableConditions: [
      "Beet leafhoppers migrating from drying rangeland and desert weeds in spring and summer bring the virus into gardens.",
      "Hot dry regions adjacent to weedy rangeland experience the highest incidence.",
    ],
    lookalikes: [
      {
        condition: "Herbicide injury",
        differentiator:
          "Herbicide injury straps and cups leaves uniformly across drift-exposed plants, whereas curly top causes scattered plants to abruptly yellow, thicken, and curl with purple veins after leafhopper visits.",
      },
      {
        condition: "Tomato yellow leaf curl virus",
        differentiator:
          "TYLCV is whitefly-transmitted and causes persistent bushy stunting, while curly top is leafhopper-transmitted and often kills tomato quickly with stiff crispy purple-veined foliage.",
      },
    ],
    immediateActions: [
      "Remove affected plants that will not recover and shade or protect remaining plants from leafhoppers today.",
      "Reduce nearby weedy reservoirs where beet leafhoppers feed.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure, so remove dying plants and focus on protecting healthy plants since leafhoppers move on quickly.",
      },
      {
        situation: "Cultural protection",
        treatment:
          "Use shade cloth, denser plantings, and row covers to make plants less attractive to migrating beet leafhoppers, as insecticides rarely help.",
      },
    ],
    avoid: [
      "Do not rely on insecticides, because leafhoppers transmit the virus during brief probing visits.",
      "Avoid open exposed plantings next to weedy rangeland in high-risk regions.",
    ],
    recoveryTimeline:
      "Infected plants usually do not recover, especially tomato, so protecting remaining plants and replanting are the practical responses.",
    prevention: [
      "Use shade cloth or row covers and denser plantings to deter beet leafhoppers.",
      "Control host weeds around the garden and plant partially tolerant varieties where available.",
    ],
    monitoringThresholds: [
      "Watch for leafhopper migrations in late spring and scout for sudden curling and purpling, removing affected plants promptly.",
    ],
    escalationCriteria: [
      "Use a lab test to confirm curly top versus other viruses if the diagnosis affects future planting strategy.",
    ],
    sources: [
      { label: "UC IPM Curly Top", url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7439.html" },
      { label: "Utah State Curly Top Virus", url: "https://extension.usu.edu/planthealth/ipm/notes_ag/veg-curly-top-virus" },
    ],
  },
  {
    id: "maize-dwarf-mosaic-virus",
    name: "Maize Dwarf Mosaic Virus",
    category: "viral-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Sweet corn", "Field corn", "Maize"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["leaves", "new growth", "whole plant"],
    symptomProgression:
      "Aphids transmit the virus from johnsongrass and other reservoirs, causing an early mosaic and mottle on young leaves, stunting and reddening in some hybrids, and reduced ear size and yield when plants are infected young.",
    observableSigns: [
      "Young leaves show a light and dark green mosaic and mottling, often most visible on the youngest growth.",
      "Infected plants may be stunted, and some hybrids develop reddish to purple leaf discoloration.",
      "Ears may be small and poorly filled when infection occurs early in development.",
    ],
    favorableConditions: [
      "Perennial johnsongrass reservoirs that overwinter the virus and support aphid buildup drive early infection.",
      "Migrating aphids that transmit the virus non-persistently spread it into corn from grass hosts.",
    ],
    lookalikes: [
      {
        condition: "Nutrient deficiency mottling",
        differentiator:
          "Nutrient deficiencies follow consistent leaf-age and interveinal patterns and respond to fertility, unlike the random green mosaic of maize dwarf mosaic linked to johnsongrass and aphids.",
      },
      {
        condition: "Sugarcane mosaic virus",
        differentiator:
          "The closely related sugarcane mosaic virus produces similar corn symptoms, and reliable separation requires a lab test.",
      },
    ],
    immediateActions: [
      "Identify and reduce johnsongrass and other perennial grass reservoirs near the corn today.",
      "Note hybrid susceptibility and monitor aphid activity on young plants.",
    ],
    treatments: [
      {
        situation: "Confirmed infected crop",
        treatment:
          "There is no cure, so rely on resistant hybrids and johnsongrass control since roguing individual field corn plants is impractical.",
      },
      {
        situation: "Reservoir and variety management",
        treatment:
          "Control johnsongrass around fields and plant resistant or tolerant hybrids to reduce impact.",
      },
    ],
    avoid: [
      "Do not allow johnsongrass to persist near corn, since it is the key overwintering reservoir.",
      "Avoid depending on insecticides against the non-persistent aphid vectors.",
    ],
    recoveryTimeline:
      "Infected plants do not recover, so resistant hybrids and reservoir control are the practical solutions for future crops.",
    prevention: [
      "Plant resistant or tolerant corn hybrids in areas with a history of the disease.",
      "Control johnsongrass and other grass reservoirs around and within fields.",
    ],
    monitoringThresholds: [
      "Scout young corn for mosaic and track johnsongrass and aphid activity, prioritizing resistant hybrids when pressure is high.",
    ],
    escalationCriteria: [
      "Use a lab test to distinguish maize dwarf mosaic from sugarcane mosaic virus before selecting resistant hybrids.",
    ],
    sources: [
      { label: "Purdue Corn Virus Diseases", url: "https://extension.entm.purdue.edu/publications/" },
      { label: "Iowa State Corn Diseases", url: "https://crops.extension.iastate.edu/encyclopedia" },
    ],
  },
  {
    id: "raspberry-mosaic-complex",
    name: "Raspberry Mosaic Virus Complex",
    category: "viral-disease",
    affectedPlants: ["berries"],
    specificHosts: ["Red raspberry", "Black raspberry", "Blackberry"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["leaves", "new growth", "whole plant", "fruit surface"],
    symptomProgression:
      "The large raspberry aphid transmits this virus complex, causing mottling and green blistering of leaves, puckering and downcurling, progressive cane stunting, and crumbly poorly filled fruit that declines in yield over years.",
    observableSigns: [
      "Leaves show a yellow-green mottle with dark green blisters and puckering, sometimes curling downward.",
      "Canes become progressively stunted and less vigorous over successive seasons.",
      "Fruit becomes small, crumbly, and poorly filled, reducing yield and quality.",
    ],
    favorableConditions: [
      "Large raspberry aphid populations that transmit the viruses spread them through the planting.",
      "Older plantings and wild Rubus nearby serve as reservoirs that feed continual spread.",
    ],
    lookalikes: [
      {
        condition: "Nutrient deficiency or herbicide injury",
        differentiator:
          "Nutrient and herbicide problems follow uniform patterns and can be corrected, whereas the mosaic complex produces persistent mottling with blisters, progressive cane decline, and crumbly fruit.",
      },
      {
        condition: "Raspberry bushy dwarf virus",
        differentiator:
          "Bushy dwarf virus is pollen-transmitted and causes yellowing and crumbly fruit without the aphid-driven blistered mosaic, so lab testing separates them.",
      },
    ],
    immediateActions: [
      "Remove and destroy severely mosaic, stunted, crumbly-fruited plants and control raspberry aphids today.",
      "Remove nearby wild Rubus that serve as reservoirs.",
    ],
    treatments: [
      {
        situation: "Confirmed infected planting",
        treatment:
          "There is no cure, so rogue symptomatic plants and replant with certified virus-tested stock in a new isolated site.",
      },
      {
        situation: "Vector and sanitation management",
        treatment:
          "Control the large raspberry aphid, remove wild Rubus reservoirs, and choose aphid-resistant cultivars where available.",
      },
    ],
    avoid: [
      "Do not propagate new plants from infected canes or tips.",
      "Avoid planting new raspberries next to old infected plantings or wild brambles.",
    ],
    recoveryTimeline:
      "Infected plants do not recover, so removing declining plants and starting fresh with certified stock is the long-term fix.",
    prevention: [
      "Plant certified virus-tested stock and isolate new plantings from old ones and wild Rubus.",
      "Control raspberry aphids and choose aphid-resistant cultivars where possible.",
    ],
    monitoringThresholds: [
      "Scout for mosaic and cane decline each season and monitor aphids, roguing symptomatic plants as found.",
    ],
    escalationCriteria: [
      "Use a lab test to identify which viruses are present before deciding to remove and replant an aging patch.",
    ],
    sources: [
      { label: "OSU Raspberry Viruses", url: "https://extension.oregonstate.edu/crop-production/berries" },
      { label: "WSU Raspberry Virus Diseases", url: "https://s3.wp.wsu.edu/uploads/sites/2073/2014/03/raspberry-viruses.pdf" },
    ],
  },
  {
    id: "cucumber-green-mottle-mosaic",
    name: "Cucumber Green Mottle Mosaic Virus (CGMMV)",
    category: "viral-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Cucumber", "Watermelon", "Melon", "Squash"],
    growthStages: ["seed-seedling", "vegetative", "fruiting"],
    symptomLocations: ["leaves", "new growth", "fruit surface", "whole plant"],
    symptomProgression:
      "This extremely stable seed and contact-transmitted virus causes green mottling and blistering on young leaves, mild to severe leaf distortion, and internal fruit discoloration and flesh breakdown that can make watermelon flesh reddish and mealy.",
    observableSigns: [
      "Young leaves show green mottling with darker green raised blisters and slight distortion.",
      "Fruit may show mottling on the surface and, importantly, internal flesh discoloration, cavities, or breakdown.",
      "Watermelon flesh can turn reddish, fibrous, or mealy inside seemingly normal fruit.",
    ],
    favorableConditions: [
      "The virus is highly stable and spreads through infected seed, contaminated tools, hands, and plant debris.",
      "Repeated handling, grafting, and reuse of contaminated equipment move it efficiently.",
    ],
    lookalikes: [
      {
        condition: "Cucumber mosaic virus",
        differentiator:
          "CMV is aphid-transmitted with a broad host range, whereas CGMMV is seed and contact transmitted, extremely stable, and notably causes internal fruit flesh breakdown, so lab testing is definitive.",
      },
      {
        condition: "Blossom-end or physiological fruit disorders",
        differentiator:
          "Physiological disorders are tied to calcium or water stress and lack the leaf mottling and contact spread of CGMMV.",
      },
    ],
    immediateActions: [
      "Rogue and bag symptomatic plants and stop handling healthy plants after touching suspect ones today.",
      "Disinfect tools, hands, and greenhouse surfaces thoroughly because the virus is extremely persistent.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure, so remove symptomatic plants and implement rigorous sanitation to stop mechanical spread.",
      },
      {
        situation: "Sanitation program",
        treatment:
          "Use virus-tested seed, disinfect tools and surfaces with effective virucidal cleaners, and remove all crop debris since the virus survives long term.",
      },
    ],
    avoid: [
      "Do not reuse untested seed or contaminated tools, media, and debris that carry the virus.",
      "Avoid handling healthy plants after touching infected ones without thorough disinfection.",
    ],
    recoveryTimeline:
      "Infected plants do not recover, so roguing plus thorough sanitation between crops is required to clean up a contaminated operation.",
    prevention: [
      "Use virus-tested seed and disinfect all tools, hands, benches, and structures between crops.",
      "Remove crop debris completely and avoid moving material between houses.",
    ],
    monitoringThresholds: [
      "Scout for leaf mottling and check fruit interiors, roguing symptomatic plants and testing suspect ones promptly.",
    ],
    escalationCriteria: [
      "Send samples to a diagnostic lab to confirm CGMMV, since its persistence demands stringent sanitation and possibly regulatory reporting.",
    ],
    sources: [
      { label: "UF IFAS CGMMV", url: "https://edis.ifas.ufl.edu/publication/PP351" },
      { label: "USDA APHIS Cucurbit Viruses", url: "https://www.aphis.usda.gov/plant-pests-diseases" },
    ],
  },
  {
    id: "citrus-tristeza-virus",
    name: "Citrus Tristeza Virus (CTV)",
    category: "viral-disease",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Orange", "Grapefruit", "Mandarin", "Lime", "Lemon"],
    growthStages: ["mature", "vegetative"],
    symptomLocations: ["whole plant", "leaves", "stems", "roots"],
    symptomProgression:
      "Aphids transmit the virus, and on trees grafted to sour orange rootstock it causes quick decline as the graft union fails, while stem-pitting strains cause honeycombed pitting of the wood, stunting, and reduced yield.",
    observableSigns: [
      "Trees on susceptible sour orange rootstock decline with leaf yellowing, twig dieback, and reduced fruit size, sometimes collapsing quickly.",
      "A distinctive honeycomb pitting of the wood under the bark appears with stem-pitting strains.",
      "Overall canopy thinning, small pale leaves, and poor yield develop as decline progresses.",
    ],
    favorableConditions: [
      "The brown citrus aphid and other aphid vectors that transmit CTV efficiently drive rapid spread.",
      "Widespread use of susceptible sour orange rootstock greatly increases decline risk.",
    ],
    lookalikes: [
      {
        condition: "Huanglongbing (citrus greening)",
        differentiator:
          "Greening causes blotchy asymmetric leaf mottle and lopsided bitter fruit and is psyllid-transmitted, whereas CTV causes graft-union decline and honeycomb stem pitting, so lab testing distinguishes them.",
      },
      {
        condition: "Phytophthora root or foot rot",
        differentiator:
          "Phytophthora causes bark lesions and gumming at the base with root rot, unlike the aphid-transmitted graft-union failure and wood pitting of CTV.",
      },
    ],
    immediateActions: [
      "Have declining trees tested for CTV and note the rootstock, since sour orange is highly susceptible.",
      "Manage aphids and avoid propagating from suspect trees today.",
    ],
    treatments: [
      {
        situation: "Confirmed infected tree",
        treatment:
          "There is no cure, so remove severely declining trees and replant on CTV-tolerant rootstocks with certified clean budwood.",
      },
      {
        situation: "Long-term management",
        treatment:
          "Use tolerant rootstocks such as trifoliate hybrids, plant certified virus-tested trees, and in some regions use mild strain cross protection under official programs.",
      },
    ],
    avoid: [
      "Do not plant susceptible sour orange rootstock in CTV areas or propagate from uncertified budwood.",
      "Avoid moving budwood and nursery stock that may carry severe strains.",
    ],
    recoveryTimeline:
      "Infected trees do not recover, and quick-decline trees can die within a season, so replanting on tolerant rootstock is the remedy.",
    prevention: [
      "Plant certified virus-tested trees on CTV-tolerant rootstocks.",
      "Manage aphid vectors and follow regional budwood certification and cross-protection programs.",
    ],
    monitoringThresholds: [
      "Inspect trees for decline and stem pitting and test suspect trees, tracking aphid vector activity.",
    ],
    escalationCriteria: [
      "Contact extension or the state citrus program to confirm CTV and rule out huanglongbing before removal and replanting.",
    ],
    sources: [
      { label: "UC IPM Citrus Tristeza", url: "https://ipm.ucanr.edu/agriculture/citrus/citrus-tristeza-virus/" },
      { label: "UF IFAS Citrus Tristeza Virus", url: "https://edis.ifas.ufl.edu/publication/CH370" },
    ],
  },
  {
    id: "potato-virus-y",
    name: "Potato Virus Y (PVY)",
    category: "viral-disease",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Potato", "Pepper", "Tomato", "Tobacco"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaves", "new growth", "whole plant", "tubers/roots"],
    symptomProgression:
      "Aphids transmit the virus and it also carries in seed tubers, causing mosaic and mottling, leaf drop and vein necrosis in some strains, stunting, and in necrotic strains rings and internal necrosis in potato tubers.",
    observableSigns: [
      "Leaves show mosaic mottling, crinkling, and sometimes a rugose puckered surface, with lower-leaf drop in some strains.",
      "Necrotic strains cause vein and leaf necrosis and characteristic necrotic rings and internal browning in tubers.",
      "Plants are stunted with reduced vigor, and yield and tuber quality decline.",
    ],
    favorableConditions: [
      "Many aphid species transmit the virus non-persistently, and infected seed tubers introduce it into new fields.",
      "Nearby infected potato, pepper, and weed hosts provide reservoirs for spread.",
    ],
    lookalikes: [
      {
        condition: "Herbicide injury",
        differentiator:
          "Herbicide injury straps and cups leaves uniformly across drift-exposed plants, whereas PVY mosaic and necrosis spread plant to plant from aphids and seed tubers.",
      },
      {
        condition: "Early blight or physiological mottling",
        differentiator:
          "Early blight forms target-spot lesions and physiological mottling is uniform, unlike the systemic mosaic, vein necrosis, and tuber rings of PVY.",
      },
    ],
    immediateActions: [
      "Rogue symptomatic plants and remove nearby weed and volunteer potato reservoirs today.",
      "Note whether seed tubers were certified and manage aphids.",
    ],
    treatments: [
      {
        situation: "Confirmed infected plant",
        treatment:
          "There is no cure, so rogue symptomatic plants and rely on certified seed and reservoir control for future crops.",
      },
      {
        situation: "Seed and vector management",
        treatment:
          "Plant certified virus-tested seed potatoes, use mineral oil sprays and reflective mulch to reduce aphid transmission, and control volunteers and weeds.",
      },
    ],
    avoid: [
      "Do not save and replant seed tubers from infected or uncertified potatoes.",
      "Avoid depending on insecticides alone against the non-persistent aphid vectors.",
    ],
    recoveryTimeline:
      "Infected plants do not recover, so certified seed and vector management protect the following season's crop rather than the current infected plants.",
    prevention: [
      "Plant certified virus-tested seed potatoes and control volunteers and weed reservoirs.",
      "Use mineral oil sprays, reflective mulch, and resistant varieties to reduce aphid transmission.",
    ],
    monitoringThresholds: [
      "Scout for mosaic and necrosis and monitor aphid flights, roguing symptomatic plants and testing suspect seed lots.",
    ],
    escalationCriteria: [
      "Use a lab test to identify PVY strains before selecting seed sources, since necrotic strains cause serious tuber damage.",
    ],
    sources: [
      { label: "UMN Extension Potato Virus Y", url: "https://extension.umn.edu/disease-management/potato-virus-y" },
      { label: "UIdaho Potato Virus Y", url: "https://www.uidaho.edu/extension/publications" },
    ],
  },
  {
    id: "barley-yellow-dwarf-virus",
    name: "Barley Yellow Dwarf Virus",
    category: "viral-disease",
    affectedPlants: ["vegetable-garden", "lawns-turf"],
    specificHosts: ["Wheat", "Barley", "Oats", "Ryegrass", "Corn"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["leaves", "leaf tips", "leaf margins", "whole plant"],
    symptomProgression:
      "Cereal aphids transmit the virus persistently, causing yellowing or reddening that begins at leaf tips and margins, stunting with reduced tillering, and patchy discolored areas in fields and turf where early infection reduces yield most.",
    observableSigns: [
      "Leaf tips and margins turn bright yellow, or red to purple in oats and some wheats, while the leaf base stays greener.",
      "Infected plants are noticeably stunted with reduced tillering and upright stiff leaves.",
      "Discoloration often appears in patches or streaks across a field or turf area rather than uniformly.",
    ],
    favorableConditions: [
      "Bird cherry-oat aphids and greenbugs that acquire and transmit the virus persistently drive spread.",
      "Warm fall weather that supports aphid flights into young autumn-sown cereals increases early infection.",
    ],
    lookalikes: [
      {
        condition: "Nitrogen or nutrient deficiency",
        differentiator:
          "Nutrient deficiency yellows whole older leaves uniformly and corrects with fertility, whereas barley yellow dwarf yellows or reddens leaf tips and margins in aphid-linked patches with stunting.",
      },
      {
        condition: "Waterlogging or cold injury",
        differentiator:
          "Waterlogging and cold cause general yellowing tied to site conditions, unlike the tip-and-margin discoloration and dwarfing associated with aphid transmission of this virus.",
      },
    ],
    immediateActions: [
      "Scout for cereal aphids and note the patchy tip-yellowing pattern to distinguish it from nutrient issues today.",
      "Where feasible, control aphids on young autumn-sown cereals to limit further transmission.",
    ],
    treatments: [
      {
        situation: "Confirmed infected crop",
        treatment:
          "There is no cure, so rely on tolerant varieties and aphid management since roguing individual cereal plants is impractical.",
      },
      {
        situation: "Vector and timing management",
        treatment:
          "Delay autumn planting past peak aphid flights, use seed treatments or foliar insecticides against aphids, and grow tolerant cultivars.",
      },
    ],
    avoid: [
      "Do not sow cereals very early into warm conditions with heavy aphid flights without protection.",
      "Avoid assuming the yellowing is only a nutrient problem, which delays proper vector-based management.",
    ],
    recoveryTimeline:
      "Infected plants do not recover, and early-infected plants lose the most yield, so tolerant varieties and aphid control protect future crops rather than existing infections.",
    prevention: [
      "Plant tolerant cereal varieties and time autumn sowing to avoid peak aphid activity.",
      "Use insecticidal seed treatments where aphid pressure is high and control volunteer cereals and grass reservoirs.",
    ],
    monitoringThresholds: [
      "Monitor cereal aphid flights and scout young crops for tip yellowing, treating aphids when thresholds are reached in high-risk periods.",
    ],
    escalationCriteria: [
      "Use a lab test to confirm barley yellow dwarf versus nutrient or environmental causes before changing planting dates or variety choices.",
    ],
    sources: [
      { label: "KSU Barley Yellow Dwarf", url: "https://bookstore.ksre.ksu.edu/pubs/mf3110.pdf" },
      { label: "UMN Extension Cereal Aphids", url: "https://extension.umn.edu/insects-infest-crops/aphids-small-grains" },
    ],
  },
];
