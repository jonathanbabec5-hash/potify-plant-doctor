import type { PlantProblemProfile } from "../schema";

export const environmentalProfiles: PlantProblemProfile[] = [
  // ===================== environmental-stress (~12) =====================
  {
    id: "wind-desiccation-general",
    name: "Wind Desiccation (Windburn)",
    category: "environmental-stress",
    affectedPlants: ["trees-shrubs", "ornamentals", "houseplants", "vegetable-garden"],
    specificHosts: ["Japanese maple", "boxwood", "arborvitae", "hydrangea", "tomato transplant"],
    growthStages: ["vegetative", "mature", "seed-seedling"],
    symptomLocations: ["windward-facing leaves", "leaf margins", "new growth", "exposed foliage"],
    symptomProgression:
      "Damage begins as marginal browning on the windward side and progresses inward until whole leaves scorch, curl, and drop if drying wind persists.",
    observableSigns: [
      "Leaf edges and tips turn tan to brown and become brittle, especially on the side facing prevailing wind.",
      "Foliage on the sheltered side of the same plant remains green and healthy, revealing a directional pattern.",
      "Young transplants may flag, wilt, and tatter along exposed edges within a day of strong dry wind.",
    ],
    favorableConditions: [
      "Sustained dry winds combined with low humidity and rapid transpiration overwhelm root water uptake.",
      "Newly planted or freshly transplanted specimens with limited root systems are most vulnerable.",
    ],
    lookalikes: [
      {
        condition: "Fertilizer salt burn",
        differentiator:
          "Salt burn scorches margins uniformly on all sides of the plant, while windburn is concentrated on the windward face.",
      },
      {
        condition: "Fungal leaf blight",
        differentiator:
          "Blight shows spreading spots with defined margins and sometimes fungal growth, whereas windburn is a dry directional scorch without lesions.",
      },
    ],
    immediateActions: [
      "Water deeply at the root zone today to restore turgor and support recovery of stressed foliage.",
      "Erect a temporary windbreak such as burlap screening on the windward side to reduce further drying.",
    ],
    treatments: [
      {
        situation: "Newly planted specimens",
        treatment:
          "Install staked burlap or shade-cloth barriers and mulch the root zone to conserve soil moisture during establishment.",
      },
      {
        situation: "Established shrubs and hedges",
        treatment:
          "Prune out dead scorched tips after new growth resumes and maintain consistent irrigation through windy periods.",
      },
    ],
    avoid: [
      "Do not fertilize scorched plants heavily, as excess salts increase drought stress on already damaged tissue.",
    ],
    recoveryTimeline:
      "Minor windburn masks with new growth in two to four weeks, while heavily defoliated woody plants may need a full season to refoliate.",
    prevention: [
      "Site wind-sensitive species in sheltered locations or behind established windbreaks and hedges.",
      "Harden off transplants gradually and keep soil evenly moist during the establishment period.",
    ],
    monitoringThresholds: [
      "Re-evaluate if more than one third of the canopy scorches or if new growth also browns despite adequate watering.",
    ],
    escalationCriteria: [
      "Consult an arborist if a mature tree shows extensive dieback into woody branches rather than just leaf-margin scorch.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/planting-and-growing-guides" },
      { label: "RHS", url: "https://www.rhs.org.uk/problems/wind-scorch" },
    ],
  },
  {
    id: "salt-spray-coastal-damage",
    name: "Coastal Salt Spray Damage",
    category: "environmental-stress",
    affectedPlants: ["trees-shrubs", "ornamentals", "vegetable-garden"],
    specificHosts: ["eastern white pine", "rose", "juniper", "hydrangea", "maple"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["seaward-facing foliage", "leaf tips", "needle tips", "windward branches"],
    symptomProgression:
      "Salt-laden aerosol deposits on foliage, drawing moisture out so tips brown and progress to a sculpted one-sided canopy over the season.",
    observableSigns: [
      "Needle or leaf tips brown from the tip inward on the side facing open water or roadways.",
      "Plants develop a lopsided flagged appearance with living growth only on the leeward side.",
      "A faint white salt residue may be visible on leaf surfaces after dry weather.",
    ],
    favorableConditions: [
      "Onshore storms and steady sea breezes carry salt aerosols onto exposed plantings.",
      "Sensitive non-native species planted within the salt-spray zone suffer the most injury.",
    ],
    lookalikes: [
      {
        condition: "Winter desiccation of evergreens",
        differentiator:
          "Winter burn appears after cold windy weather across the whole exposed canopy, while salt spray injury tracks proximity to the salt source.",
      },
    ],
    immediateActions: [
      "Rinse foliage thoroughly with fresh water after salt-laden storms to wash deposits off leaves.",
      "Irrigate the root zone with fresh water to help leach any accumulated salts from the soil.",
    ],
    treatments: [
      {
        situation: "Ongoing exposure",
        treatment:
          "Replace salt-sensitive plants with salt-tolerant species such as bayberry, beach plum, or rugosa rose in the front line.",
      },
      {
        situation: "Valued specimens",
        treatment:
          "Install temporary burlap or living windbreak barriers on the seaward side to intercept salt spray during storm season.",
      },
    ],
    avoid: [
      "Do not plant known salt-intolerant species in the direct spray zone expecting them to adapt.",
    ],
    recoveryTimeline:
      "Foliage damage does not green back, but plants push healthy new growth the following spring if roots remain undamaged.",
    prevention: [
      "Choose documented salt-tolerant species for exposed coastal sites and buffer zones.",
      "Establish layered windbreaks so front-line tolerant plants protect more sensitive interior plantings.",
    ],
    monitoringThresholds: [
      "Reassess plant selection if a species repeatedly browns each storm season despite freshwater rinsing.",
    ],
    escalationCriteria: [
      "Seek extension guidance for site-appropriate species lists when repeated replacements fail on a coastal property.",
    ],
    sources: [
      { label: "UMass Extension", url: "https://ag.umass.edu/landscape" },
      { label: "USDA Plants Database", url: "https://plants.usda.gov" },
    ],
  },
  {
    id: "de-icing-salt-damage-roadside",
    name: "De-Icing Salt Damage (Roadside)",
    category: "environmental-stress",
    affectedPlants: ["trees-shrubs", "ornamentals", "lawns-turf"],
    specificHosts: ["sugar maple", "white pine", "Norway spruce", "boxwood", "turfgrass"],
    growthStages: ["dormant", "vegetative", "mature"],
    symptomLocations: ["roadside branches", "lower foliage", "turf along walkways", "needle tips"],
    symptomProgression:
      "Salt from winter plowing splashes onto plants and soaks into soil, causing spring bud death and marginal scorch that worsens as growth resumes.",
    observableSigns: [
      "Buds and twigs on the road-facing side fail to leaf out or die back in early spring.",
      "Turfgrass along salted walkways turns brown and thins in a band paralleling the pavement.",
      "Broadleaf evergreens show marginal browning heaviest on the plow-splash side.",
    ],
    favorableConditions: [
      "Heavy winter road salting followed by splash or runoff onto plant crowns and root zones.",
      "Poorly drained soils that hold salts rather than allowing them to leach away in spring rains.",
    ],
    lookalikes: [
      {
        condition: "Winter cold injury",
        differentiator:
          "Cold injury is distributed by exposure and hardiness, while salt damage concentrates precisely along the salted pavement edge.",
      },
    ],
    immediateActions: [
      "Leach the root zone with heavy fresh-water irrigation in early spring to flush accumulated sodium and chloride.",
      "Apply gypsum to affected soil to help displace sodium and improve structure where salt has accumulated.",
    ],
    treatments: [
      {
        situation: "Turf strips along walks",
        treatment:
          "Rake out dead turf, top-dress, and reseed with salt-tolerant grasses after flushing the soil with fresh water.",
      },
      {
        situation: "Roadside woody plants",
        treatment:
          "Erect burlap barriers along the pavement in winter and switch to sand or calcium magnesium acetate near valued plantings.",
      },
    ],
    avoid: [
      "Do not pile salted snow onto planting beds or lawn areas where meltwater will soak into the root zone.",
    ],
    recoveryTimeline:
      "Turf recovers within a season after reseeding, but salt-injured trees may show dieback for one to two years while roots recover.",
    prevention: [
      "Plant salt-tolerant species along roads and driveways subject to winter treatment.",
      "Use non-sodium de-icers and physical barriers near sensitive landscape plantings.",
    ],
    monitoringThresholds: [
      "Test soil electrical conductivity in spring and re-evaluate if levels remain elevated after leaching.",
    ],
    escalationCriteria: [
      "Have a soil lab test conducted and consult an arborist when mature trees show progressive branch dieback each year.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/protecting-trees-and-shrubs/preventing-salt-damage" },
      { label: "Purdue Extension", url: "https://www.purdue.edu/fnr/extension/" },
    ],
  },
  {
    id: "ozone-air-pollution-injury",
    name: "Ozone / Air Pollution Injury",
    category: "environmental-stress",
    affectedPlants: ["vegetable-garden", "ornamentals", "trees-shrubs", "specialty-cultivation"],
    specificHosts: ["snap bean", "potato", "grape", "milkweed", "white pine"],
    growthStages: ["vegetative", "flowering", "mature"],
    symptomLocations: ["upper leaf surface", "older leaves", "sun-exposed foliage", "interveinal areas"],
    symptomProgression:
      "Fine stipple appears on the upper surface of exposed leaves and coalesces into bronzing or bleaching, with older leaves yellowing and dropping prematurely.",
    observableSigns: [
      "Tiny dark or bleached stipple flecks dot the upper leaf surface between the veins.",
      "Damage is worst on leaves fully exposed to sun and air, sparing shaded interior foliage.",
      "Sensitive indicator plants like milkweed and snap bean show injury before nearby tolerant species.",
    ],
    favorableConditions: [
      "Hot sunny days with stagnant air and elevated ground-level ozone drive foliar uptake through open stomata.",
      "Urban and downwind rural sites during summer smog episodes accumulate the most exposure.",
    ],
    lookalikes: [
      {
        condition: "Spider mite stippling",
        differentiator:
          "Mite feeding produces fine chlorotic stipple with webbing and live mites on the underside, while ozone stipple is dark and pest-free.",
      },
      {
        condition: "Nutrient deficiency chlorosis",
        differentiator:
          "Deficiency chlorosis follows vein patterns uniformly, whereas ozone injury is a random surface stipple concentrated on exposed leaves.",
      },
    ],
    immediateActions: [
      "Confirm the diagnosis by checking whether only sun-exposed upper surfaces are stippled without pests present.",
      "Maintain steady soil moisture so plants are not additionally drought-stressed during smog episodes.",
    ],
    treatments: [
      {
        situation: "Vegetable gardens",
        treatment:
          "Select ozone-tolerant cultivars and keep plants vigorous with balanced fertility and consistent watering.",
      },
      {
        situation: "Sensitive ornamentals",
        treatment:
          "Relocate potted sensitive species to less exposed areas during predicted high-ozone days when feasible.",
      },
    ],
    avoid: [
      "Do not apply fungicides or pesticides for this problem, as ozone injury is abiotic and will not respond.",
    ],
    recoveryTimeline:
      "Existing stippled leaves will not recover, but plants outgrow mild injury with new foliage once air quality improves.",
    prevention: [
      "Grow tolerant cultivars in regions with frequent summer ozone episodes.",
      "Keep plants well watered and healthy so they better withstand pollution stress.",
    ],
    monitoringThresholds: [
      "Re-evaluate management if injury recurs severely each summer and reduces yield or ornamental value.",
    ],
    escalationCriteria: [
      "Contact a university plant clinic to confirm ozone versus mite or disease when the cause remains uncertain.",
    ],
    sources: [
      { label: "US EPA Ecosystem Effects of Ozone", url: "https://www.epa.gov/ozone-pollution-and-your-patients-health" },
      { label: "Penn State Extension", url: "https://extension.psu.edu/plant-problems" },
    ],
  },
  {
    id: "herbicide-drift-2-4-d",
    name: "Growth-Regulator Herbicide Drift (2,4-D)",
    category: "environmental-stress",
    affectedPlants: ["vegetable-garden", "ornamentals", "fruit-trees", "trees-shrubs"],
    specificHosts: ["tomato", "grape", "redbud", "rose", "pepper"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["new growth", "leaf tips", "shoot tips", "stems"],
    symptomProgression:
      "New leaves emerge cupped, twisted, and strap-like with parallel veins, and stems may bend or fasciate as the growth regulator disrupts normal development.",
    observableSigns: [
      "Newest leaves are narrow, elongated, and puckered with parallel rather than netted veins.",
      "Shoot tips curl or twist into a fiddlehead or corkscrew shape without any pest or lesion.",
      "Multiple unrelated broadleaf plants across the area show the same distortion after a spray event nearby.",
    ],
    favorableConditions: [
      "Spraying phenoxy herbicides on breezy or hot days causes vapor drift or particle drift onto sensitive plants.",
      "Volatile ester formulations can move as vapor for days after application in warm weather.",
    ],
    lookalikes: [
      {
        condition: "Aster yellows or virus distortion",
        differentiator:
          "Viral and phytoplasma diseases spread plant to plant over time, while herbicide drift affects many species simultaneously right after a spray event.",
      },
      {
        condition: "Broad mite damage",
        differentiator:
          "Broad mites cause bronzed twisted tips that respond to miticides, whereas herbicide distortion shows strap-like parallel-veined leaves and no mites.",
      },
    ],
    immediateActions: [
      "Stop any further use of growth-regulator herbicides near the affected plants immediately.",
      "Water and lightly fertilize affected plants to support them as they attempt to grow out the injury.",
    ],
    treatments: [
      {
        situation: "Mild edible-crop exposure",
        treatment:
          "Wait for new unaffected growth and avoid harvesting distorted tissue, keeping plants vigorous through the recovery period.",
      },
      {
        situation: "Severe exposure",
        treatment:
          "Remove and dispose of heavily distorted plants that fail to produce normal new growth over several weeks.",
      },
    ],
    avoid: [
      "Do not use lawn weed-and-feed products or sprayers previously used for phenoxy herbicides near vegetable gardens.",
    ],
    recoveryTimeline:
      "Lightly affected plants outgrow distortion in three to six weeks, while severely hit plants may never resume normal growth.",
    prevention: [
      "Never spray growth-regulator herbicides on windy or hot days near sensitive gardens.",
      "Dedicate separate sprayers to herbicides and never reuse them for foliar plant applications.",
    ],
    monitoringThresholds: [
      "Re-evaluate whether new growth emerges normal; persistent distortion after several flushes indicates lasting injury.",
    ],
    escalationCriteria: [
      "Report suspected off-target drift to your state department of agriculture if a neighbor's application damaged your crops.",
    ],
    sources: [
      { label: "University of Missouri Extension", url: "https://extension.missouri.edu/publications/ipm1030" },
      { label: "Purdue Extension", url: "https://www.purdue.edu/fnr/extension/" },
    ],
  },
  {
    id: "herbicide-drift-glyphosate",
    name: "Glyphosate Drift Injury",
    category: "environmental-stress",
    affectedPlants: ["ornamentals", "vegetable-garden", "fruit-trees", "trees-shrubs"],
    specificHosts: ["hosta", "rose", "apple", "tomato", "maple"],
    growthStages: ["vegetative", "dormant"],
    symptomLocations: ["new growth", "growing points", "leaf tissue", "shoot tips"],
    symptomProgression:
      "Injury appears days to weeks after exposure as yellowing and whitening of newly emerging leaves, followed by stunted witches-broom growth or shoot dieback.",
    observableSigns: [
      "New shoots emerge yellow, white, or narrow and stunted rather than distorted and cupped.",
      "Symptoms often appear on growth that emerges well after the spray event, delayed by translocation.",
      "Perennials and trees may show a delayed flush of small chlorotic multiple shoots the following season.",
    ],
    favorableConditions: [
      "Drift from spraying near desirable plants, or root uptake where product contacted green suckers or bark.",
      "Application on windy days or misdirected spray onto green stems and foliage of non-target plants.",
    ],
    lookalikes: [
      {
        condition: "Nutrient deficiency",
        differentiator:
          "Deficiency develops gradually across the plant, while glyphosate injury appears abruptly on new growth following a spray event.",
      },
      {
        condition: "Phenoxy herbicide drift",
        differentiator:
          "Phenoxy drift twists and cups leaves, whereas glyphosate bleaches and stunts new growth without the strap-leaf distortion.",
      },
    ],
    immediateActions: [
      "Discontinue glyphosate use near desirable plants and note the location of the exposure.",
      "Keep the plant watered and avoid additional stress while observing whether new growth recovers.",
    ],
    treatments: [
      {
        situation: "Perennials and ornamentals",
        treatment:
          "Cut back damaged shoots and provide good care, allowing the plant to attempt regrowth from unaffected buds.",
      },
      {
        situation: "Trees with basal contact",
        treatment:
          "Protect trunks from future contact and monitor for delayed dieback that may require removal of affected limbs.",
      },
    ],
    avoid: [
      "Do not spray glyphosate over exposed roots, green bark, or suckers of trees you wish to keep.",
    ],
    recoveryTimeline:
      "Mild cases recover over one growing season, while severe systemic uptake can kill perennials or cause lingering deformity.",
    prevention: [
      "Use shielded application and only treat on calm days away from desirable plants.",
      "Apply glyphosate as a directed spray and protect the green tissue of nearby plants.",
    ],
    monitoringThresholds: [
      "Re-evaluate after each new flush; repeated stunted or bleached growth signals persistent systemic injury.",
    ],
    escalationCriteria: [
      "Consult an extension diagnostic clinic if valuable trees show progressive decline after suspected exposure.",
    ],
    sources: [
      { label: "Oregon State University Extension", url: "https://extension.oregonstate.edu/gardening" },
      { label: "University of Missouri Extension", url: "https://extension.missouri.edu/publications/ipm1030" },
    ],
  },
  {
    id: "soil-compaction-stress",
    name: "Soil Compaction Stress",
    category: "environmental-stress",
    affectedPlants: ["trees-shrubs", "lawns-turf", "ornamentals", "vegetable-garden"],
    specificHosts: ["oak", "maple", "turfgrass", "rhododendron", "boxwood"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["root zone", "whole canopy", "turf areas", "lower leaves"],
    symptomProgression:
      "Restricted root growth from compacted soil leads to gradual thinning, off-color foliage, small leaves, and slow dieback as the root system fails to expand.",
    observableSigns: [
      "Turf thins and stays wet on the surface while struggling to root deeply in high-traffic areas.",
      "Trees show sparse small leaves, early fall color, and tip dieback despite no visible pest.",
      "Water ponds or runs off the surface rather than infiltrating into the dense soil.",
    ],
    favorableConditions: [
      "Foot or vehicle traffic, construction, and heavy clay soils worked when wet cause severe compaction.",
      "Fine-textured soils under lawns and paths lose pore space and become dense over time.",
    ],
    lookalikes: [
      {
        condition: "Chronic overwatering root rot",
        differentiator:
          "Root rot shows dark mushy roots from pathogens, while compaction leaves roots physically confined and shallow but not rotted.",
      },
      {
        condition: "Nutrient deficiency",
        differentiator:
          "Deficiency responds to fertilization, whereas compaction stress persists until soil structure and aeration are improved.",
      },
    ],
    immediateActions: [
      "Restrict traffic over the root zone immediately and mulch to protect and buffer the soil surface.",
      "Water slowly and deeply so moisture can infiltrate the dense soil without running off.",
    ],
    treatments: [
      {
        situation: "Turf areas",
        treatment:
          "Core-aerate compacted lawns and top-dress with compost to gradually restore pore space and rooting depth.",
      },
      {
        situation: "Around trees",
        treatment:
          "Apply radial trenching or vertical mulching with compost in the root zone and expand a wide mulch ring.",
      },
    ],
    avoid: [
      "Do not till or work heavy soils when wet, and do not add fill soil over existing tree roots.",
    ],
    recoveryTimeline:
      "Turf improves within one to two seasons of aeration, while compacted tree root zones may take several years to recover.",
    prevention: [
      "Route traffic onto designated paths and protect root zones with fencing during construction.",
      "Add organic matter regularly and avoid working soils when saturated.",
    ],
    monitoringThresholds: [
      "Test infiltration and re-evaluate if water still ponds or plants remain off-color after aeration.",
    ],
    escalationCriteria: [
      "Hire a certified arborist for air-spade root-zone remediation when a mature tree declines from severe compaction.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/soil-and-water" },
      { label: "Colorado State University Extension", url: "https://extension.colostate.edu/topic-areas/yard-garden/" },
    ],
  },
  {
    id: "girdling-roots-stress",
    name: "Girdling Roots (Stem-Girdling Roots)",
    category: "environmental-stress",
    affectedPlants: ["trees-shrubs", "ornamentals"],
    specificHosts: ["Norway maple", "red maple", "linden", "pine", "magnolia"],
    growthStages: ["mature", "vegetative"],
    symptomLocations: ["trunk base", "root flare", "upper canopy", "one side of crown"],
    symptomProgression:
      "A root wrapping the trunk slowly compresses the vascular tissue, causing gradual thinning, dieback, and early fall color on the affected side over years.",
    observableSigns: [
      "The trunk enters the ground straight like a telephone pole with no visible flaring root buttress.",
      "One side of the canopy thins, shows small leaves, and colors early while the opposite side stays healthy.",
      "Excavation at the base reveals a woody root pressing against or fused to the trunk.",
    ],
    favorableConditions: [
      "Trees grown too long in nursery containers develop circling roots that persist after planting.",
      "Planting too deep or leaving twine and burlap encourages roots to encircle the trunk.",
    ],
    lookalikes: [
      {
        condition: "Verticillium wilt",
        differentiator:
          "Verticillium causes sudden wilting with vascular streaking in the wood, while girdling roots cause slow one-sided decline with a visible constricting root.",
      },
      {
        condition: "Trunk canker",
        differentiator:
          "A canker is a sunken diseased area on the bark, whereas a girdling root is a physical constriction at the buried root flare.",
      },
    ],
    immediateActions: [
      "Excavate soil away from the trunk base to expose the root flare and confirm a girdling root.",
      "Do not add more soil or mulch against the trunk while assessing the problem.",
    ],
    treatments: [
      {
        situation: "Early detection",
        treatment:
          "Sever and remove the girdling root cleanly with a chisel or saw before it fuses to and strangles the trunk.",
      },
      {
        situation: "Advanced girdling on large trees",
        treatment:
          "Have a certified arborist evaluate whether removing the root is feasible or the tree should be replaced.",
      },
    ],
    avoid: [
      "Do not plant trees with circling container roots without teasing them out or shaving the root ball first.",
    ],
    recoveryTimeline:
      "Trees corrected early recover vigor over two to four seasons, while long-strangled trees often decline irreversibly.",
    prevention: [
      "Inspect and correct circling roots and plant at the proper depth with the flare exposed.",
      "Avoid volcano mulching and remove all wire, twine, and burlap at planting.",
    ],
    monitoringThresholds: [
      "Re-inspect the flare every few years and re-evaluate if canopy dieback continues after root removal.",
    ],
    escalationCriteria: [
      "Engage an arborist for a hazard assessment if a large declining tree develops structural instability.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/planting-and-growing-guides/stem-girdling-roots" },
      { label: "Morton Arboretum", url: "https://mortonarb.org/plant-and-protect/tree-plant-care/plant-care-resources/" },
    ],
  },
  {
    id: "mulch-volcano-damage",
    name: "Mulch Volcano Damage",
    category: "environmental-stress",
    affectedPlants: ["trees-shrubs", "ornamentals"],
    specificHosts: ["red maple", "crabapple", "cherry", "dogwood", "arborvitae"],
    growthStages: ["mature", "vegetative"],
    symptomLocations: ["trunk base", "root collar", "lower bark", "root flare"],
    symptomProgression:
      "Deep mulch piled against the trunk keeps bark constantly moist, leading to bark decay, adventitious rooting, rodent injury, and slow overall decline.",
    observableSigns: [
      "Mulch is mounded high against the trunk like a volcano rather than spread in a flat ring.",
      "Bark at the buried base is soft, discolored, or peeling, and fine roots grow up into the mulch.",
      "The canopy thins gradually and the tree becomes more prone to pests and rodent gnawing.",
    ],
    favorableConditions: [
      "Repeated over-mulching without exposing the root flare traps moisture against the bark.",
      "Warm moist mulch against bark invites decay fungi and provides cover for bark-chewing rodents.",
    ],
    lookalikes: [
      {
        condition: "Girdling roots",
        differentiator:
          "Girdling roots are woody roots constricting the trunk, while mulch volcano damage is bark decay and adventitious roots from buried, over-mulched tissue.",
      },
      {
        condition: "Trunk rot canker",
        differentiator:
          "A distinct canker has a defined margin, whereas mulch-volcano decay is diffuse softening of bark that was kept buried and wet.",
      },
    ],
    immediateActions: [
      "Pull mulch back from the trunk today to expose the root flare and let the bark dry.",
      "Inspect the exposed bark for decay and rodent gnawing that occurred under the mulch.",
    ],
    treatments: [
      {
        situation: "Recently over-mulched",
        treatment:
          "Reduce mulch to a two-to-three-inch flat layer kept several inches away from the trunk in a wide ring.",
      },
      {
        situation: "Bark already decayed",
        treatment:
          "Remove excess mulch, keep the collar dry, and have an arborist assess how much conductive tissue survives.",
      },
    ],
    avoid: [
      "Do not pile mulch against trunks or exceed a few inches of depth over the root zone.",
    ],
    recoveryTimeline:
      "Trees corrected before serious decay recover over a season or two, while extensive bark rot can be permanently damaging.",
    prevention: [
      "Apply mulch in a wide flat doughnut with the trunk and root flare kept clear.",
      "Refresh rather than continually add mulch, keeping total depth modest.",
    ],
    monitoringThresholds: [
      "Re-evaluate annually and check the flare stays exposed and bark stays firm and dry.",
    ],
    escalationCriteria: [
      "Have an arborist assess structural safety if extensive basal decay has developed under long-standing mulch mounds.",
    ],
    sources: [
      { label: "University of Maryland Extension", url: "https://extension.umd.edu/resource/mulching-trees-and-shrubs/" },
      { label: "Purdue Extension", url: "https://www.purdue.edu/fnr/extension/" },
    ],
  },
  {
    id: "black-walnut-allelopathy-juglone",
    name: "Black Walnut Allelopathy (Juglone Toxicity)",
    category: "environmental-stress",
    affectedPlants: ["vegetable-garden", "ornamentals", "trees-shrubs"],
    specificHosts: ["tomato", "pepper", "rhododendron", "blueberry", "peony"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["whole plant", "lower leaves", "root zone within dripline", "foliage"],
    symptomProgression:
      "Sensitive plants growing within the walnut root zone wilt, yellow, and collapse over days to weeks even when watered adequately.",
    observableSigns: [
      "Susceptible plants wilt and yellow specifically within the root zone of a black walnut tree.",
      "Plants outside the walnut dripline of the same species grow normally by comparison.",
      "Affected tomatoes and other sensitive species may wilt suddenly and die back from the base.",
    ],
    favorableConditions: [
      "Proximity to black walnut or butternut roots, which release the allelochemical juglone into the soil.",
      "Poorly drained soils where juglone concentrates and persists in decaying roots and hulls.",
    ],
    lookalikes: [
      {
        condition: "Verticillium or fusarium wilt",
        differentiator:
          "Vascular wilts show internal stem streaking and occur regardless of walnut proximity, while juglone toxicity strictly follows the walnut root zone.",
      },
      {
        condition: "Drought or root damage",
        differentiator:
          "Drought wilt recovers with watering, whereas juglone-affected sensitive plants decline even with adequate moisture.",
      },
    ],
    immediateActions: [
      "Identify whether a black walnut is within about sixty feet, whose roots may extend well beyond the canopy.",
      "Relocate valued sensitive container plants away from the walnut root zone immediately.",
    ],
    treatments: [
      {
        situation: "Existing gardens near walnuts",
        treatment:
          "Grow sensitive crops in raised beds with a root barrier or move them outside the walnut root zone.",
      },
      {
        situation: "Ornamental plantings",
        treatment:
          "Replace sensitive species with juglone-tolerant plants such as daylily, hosta, and most grasses.",
      },
    ],
    avoid: [
      "Do not compost fresh walnut leaves, hulls, or sawdust into beds intended for sensitive crops.",
    ],
    recoveryTimeline:
      "There is no recovery for wilted sensitive plants; the site remains toxic to them as long as live walnut roots are present.",
    prevention: [
      "Plant only juglone-tolerant species within the walnut root zone.",
      "Use raised beds lined to exclude walnut roots when growing sensitive vegetables.",
    ],
    monitoringThresholds: [
      "Re-evaluate plant selection if sensitive species repeatedly fail within the walnut root zone.",
    ],
    escalationCriteria: [
      "Consult extension resources for tolerant-plant lists when redesigning plantings near an established walnut.",
    ],
    sources: [
      { label: "University of Wisconsin Horticulture Extension", url: "https://hort.extension.wisc.edu/articles/black-walnut-toxicity/" },
      { label: "Ohio State University Extension", url: "https://ohioline.osu.edu/factsheet/plpath-tree-02" },
    ],
  },
  {
    id: "waterlogging-flooding-stress",
    name: "Waterlogging / Flooding Stress",
    category: "environmental-stress",
    affectedPlants: ["trees-shrubs", "vegetable-garden", "ornamentals", "fruit-trees"],
    specificHosts: ["tomato", "boxwood", "apple", "rhododendron", "yew"],
    growthStages: ["vegetative", "flowering", "fruiting", "mature"],
    symptomLocations: ["lower leaves", "whole canopy", "root zone", "stems"],
    symptomProgression:
      "Saturated soil starves roots of oxygen, causing yellowing, wilting despite wet soil, leaf drop, and eventual root death and decline.",
    observableSigns: [
      "Plants wilt and yellow even though the soil is clearly saturated and standing water may be present.",
      "Lower leaves drop, stems soften, and adventitious roots or water blisters may form on stems.",
      "Roots become dark, soft, and foul-smelling as they suffocate and begin to decay.",
    ],
    favorableConditions: [
      "Prolonged rain, poor drainage, compacted or heavy clay soils, and low spots that pond water.",
      "Overwatering combined with containers or beds lacking adequate drainage.",
    ],
    lookalikes: [
      {
        condition: "Drought wilt",
        differentiator:
          "Drought wilt occurs in dry soil and recovers with water, while flooding wilt occurs in saturated soil and worsens with more water.",
      },
      {
        condition: "Root rot disease",
        differentiator:
          "Pathogenic root rot may follow flooding but is driven by specific fungi, whereas simple waterlogging is oxygen starvation from saturation.",
      },
    ],
    immediateActions: [
      "Improve drainage immediately by clearing outlets, breaking up ponding, and stopping supplemental irrigation.",
      "For containers, empty saucers and move pots to a spot where water can drain freely.",
    ],
    treatments: [
      {
        situation: "Garden beds",
        treatment:
          "Aerate and add organic matter, and consider raised beds or French drains to move water away from roots.",
      },
      {
        situation: "Trees in low spots",
        treatment:
          "Regrade to shed water, avoid piling soil over roots, and select flood-tolerant species for wet sites.",
      },
    ],
    avoid: [
      "Do not keep watering wilted plants in saturated soil, as this deepens oxygen starvation.",
    ],
    recoveryTimeline:
      "Plants that dry out before roots rot rebound in a few weeks, while extensively rotted root systems often decline permanently.",
    prevention: [
      "Improve site drainage and choose species matched to the soil moisture conditions.",
      "Water based on actual soil moisture and ensure containers drain freely.",
    ],
    monitoringThresholds: [
      "Re-evaluate if soil stays saturated for days or plants continue declining after drainage improves.",
    ],
    escalationCriteria: [
      "Consult a landscape professional for grading or drainage engineering when flooding recurs across a property.",
    ],
    sources: [
      { label: "University of Maryland Extension", url: "https://extension.umd.edu/resource/wet-weather-plant-problems/" },
      { label: "Clemson Cooperative Extension", url: "https://hgic.clemson.edu/" },
    ],
  },
  {
    id: "drought-stress-general",
    name: "Drought Stress",
    category: "environmental-stress",
    affectedPlants: ["trees-shrubs", "lawns-turf", "vegetable-garden", "ornamentals"],
    specificHosts: ["birch", "dogwood", "turfgrass", "hydrangea", "tomato"],
    growthStages: ["vegetative", "flowering", "fruiting", "mature"],
    symptomLocations: ["whole canopy", "leaf margins", "lower leaves", "turf areas"],
    symptomProgression:
      "Plants wilt during heat, then leaf margins scorch and older leaves drop, with prolonged drought causing branch dieback and turf browning.",
    observableSigns: [
      "Foliage wilts in the afternoon and leaf margins turn brown and crispy in dry soil.",
      "Turfgrass shows footprinting, a blue-gray cast, and dormant tan patches during dry spells.",
      "Older interior leaves yellow and shed first as the plant conserves water for newer growth.",
    ],
    favorableConditions: [
      "Extended dry periods, high heat, sandy fast-draining soils, and inadequate irrigation.",
      "Recently planted or shallow-rooted plants that cannot reach deeper moisture.",
    ],
    lookalikes: [
      {
        condition: "Root rot from overwatering",
        differentiator:
          "Overwatered plants wilt in wet soil with dark roots, while drought-stressed plants wilt in dry soil and recover when watered.",
      },
      {
        condition: "Fertilizer salt burn",
        differentiator:
          "Salt burn scorches margins right after fertilizing, whereas drought scorch tracks soil dryness and heat.",
      },
    ],
    immediateActions: [
      "Water deeply and slowly to fully rewet the root zone rather than giving a shallow sprinkle.",
      "Apply mulch to conserve soil moisture and moderate root-zone temperature.",
    ],
    treatments: [
      {
        situation: "Lawns",
        treatment:
          "Water deeply and infrequently to encourage deep roots, or allow cool-season turf to go dormant and revive with rain.",
      },
      {
        situation: "Trees and shrubs",
        treatment:
          "Provide slow deep soaking within the dripline weekly during drought and maintain a wide mulch ring.",
      },
    ],
    avoid: [
      "Do not fertilize heavily during drought, as salts and forced growth worsen water stress.",
    ],
    recoveryTimeline:
      "Turf and herbaceous plants rebound within one to three weeks of watering, while drought-damaged woody dieback persists longer.",
    prevention: [
      "Match plant selection to site water availability and mulch to retain soil moisture.",
      "Water deeply and infrequently to build deep, drought-resilient root systems.",
    ],
    monitoringThresholds: [
      "Check soil moisture at root depth and re-evaluate if plants keep wilting after deep watering.",
    ],
    escalationCriteria: [
      "Consult an arborist if a valued tree shows extensive branch dieback rather than only leaf scorch.",
    ],
    sources: [
      { label: "Colorado State University Extension", url: "https://extension.colostate.edu/topic-areas/yard-garden/" },
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/how/watering-newly-planted-trees-and-shrubs" },
    ],
  },

  // ===================== lighting-damage (~8) =====================
  {
    id: "sunscald-houseplant-foliage",
    name: "Leaf Sunscald (Houseplants Moved Outdoors)",
    category: "lighting-damage",
    affectedPlants: ["houseplants", "succulents-cacti", "ornamentals"],
    specificHosts: ["pothos", "peace lily", "jade plant", "monstera", "snake plant"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["upper leaf surface", "sun-exposed leaves", "leaf centers", "top of plant"],
    symptomProgression:
      "Bleached patches appear on sun-facing leaves within a day or two, then turn tan or brown, dry out, and remain as permanent scarring.",
    observableSigns: [
      "Sudden pale bleached or tan patches form on the upper surface of the most sun-exposed leaves.",
      "Damage appears only on leaves facing the sun, sparing shaded and interior foliage.",
      "Affected patches feel dry and papery and do not spread further like a disease would.",
    ],
    favorableConditions: [
      "Moving a shade-acclimated plant abruptly into direct sun without gradual hardening off.",
      "Intense midday sun on tender foliage grown under lower indoor light.",
    ],
    lookalikes: [
      {
        condition: "Fungal leaf spot",
        differentiator:
          "Fungal spots have defined margins and may spread and multiply, while sunscald is fixed bleached patches on sun-exposed leaves only.",
      },
      {
        condition: "Overfertilization burn",
        differentiator:
          "Fertilizer burn scorches leaf margins and tips broadly, whereas sunscald bleaches the sun-facing leaf surface.",
      },
    ],
    immediateActions: [
      "Move the plant into bright shade or filtered light immediately to stop further scald.",
      "Keep the plant well watered but do not overwater as it recovers from the stress.",
    ],
    treatments: [
      {
        situation: "Light scald",
        treatment:
          "Leave lightly scalded leaves in place to keep photosynthesizing and remove only fully browned foliage.",
      },
      {
        situation: "Planned outdoor move",
        treatment:
          "Reintroduce sun gradually over one to two weeks, starting with morning sun or dappled shade.",
      },
    ],
    avoid: [
      "Do not place shade-grown houseplants into full midday sun without acclimation.",
    ],
    recoveryTimeline:
      "Scalded leaves do not heal but the plant produces new sun-tolerant foliage over several weeks once acclimated.",
    prevention: [
      "Harden off indoor plants gradually before moving them into brighter outdoor light.",
      "Provide filtered or morning sun for shade-loving species rather than harsh afternoon exposure.",
    ],
    monitoringThresholds: [
      "Re-evaluate light placement if new leaves also scald despite gradual acclimation.",
    ],
    escalationCriteria: [
      "Seek guidance if a prized specimen loses most of its foliage and fails to push new growth.",
    ],
    sources: [
      { label: "University of Maryland Extension", url: "https://extension.umd.edu/resource/houseplant-care/" },
      { label: "RHS", url: "https://www.rhs.org.uk/houseplants" },
    ],
  },
  {
    id: "sunscald-fruit-general",
    name: "Fruit Sunscald",
    category: "lighting-damage",
    affectedPlants: ["vegetable-garden", "fruit-trees", "berries"],
    specificHosts: ["tomato", "pepper", "apple", "grape", "melon"],
    growthStages: ["fruiting"],
    symptomLocations: ["fruit surface", "sun-exposed side of fruit", "shoulders of fruit"],
    symptomProgression:
      "A pale sunken area develops on the sun-facing side of exposed fruit, then dries to a papery white or tan patch that may later rot.",
    observableSigns: [
      "A whitish, yellow, or leathery sunken patch forms on the side of fruit facing direct sun.",
      "Damage is only on exposed fruit surfaces, often after foliage loss opened the canopy.",
      "Scalded spots may later be colonized by secondary molds and soften.",
    ],
    favorableConditions: [
      "Intense sun on fruit suddenly exposed by defoliation from disease, pruning, or pest damage.",
      "Hot dry weather with high light hitting previously shaded fruit.",
    ],
    lookalikes: [
      {
        condition: "Blossom-end rot",
        differentiator:
          "Blossom-end rot forms a dark sunken lesion at the blossom end from calcium issues, while sunscald is on the sun-exposed side.",
      },
      {
        condition: "Anthracnose fruit rot",
        differentiator:
          "Anthracnose produces expanding water-soaked lesions with fungal fruiting bodies, whereas sunscald is a dry bleached patch tied to sun exposure.",
      },
    ],
    immediateActions: [
      "Provide shade over exposed fruit clusters using shade cloth during heat waves.",
      "Preserve leaf canopy by managing the underlying cause of defoliation.",
    ],
    treatments: [
      {
        situation: "Vegetable crops",
        treatment:
          "Maintain healthy foliage cover, use light shade cloth, and avoid excessive pruning that exposes fruit.",
      },
      {
        situation: "Tree fruit",
        treatment:
          "Apply approved kaolin clay particle film or protective sunburn coatings to at-risk fruit in hot climates.",
      },
    ],
    avoid: [
      "Do not aggressively strip foliage that shades developing fruit during hot sunny weather.",
    ],
    recoveryTimeline:
      "Scalded fruit does not recover, but preventing further exposure protects the remaining crop through the season.",
    prevention: [
      "Maintain adequate leaf cover and control foliar diseases and pests that cause defoliation.",
      "Use shade cloth or particle films during heat waves in high-light regions.",
    ],
    monitoringThresholds: [
      "Re-evaluate canopy management if scald appears on more than a few exposed fruit per plant.",
    ],
    escalationCriteria: [
      "Consult extension if defoliation from disease is driving widespread fruit exposure and loss.",
    ],
    sources: [
      { label: "UC IPM", url: "https://ipm.ucanr.edu/home-and-landscape/" },
      { label: "Clemson Cooperative Extension", url: "https://hgic.clemson.edu/" },
    ],
  },
  {
    id: "winter-sunscald-tree-trunk",
    name: "Winter Sunscald (Southwest Trunk Injury)",
    category: "lighting-damage",
    affectedPlants: ["fruit-trees", "trees-shrubs", "ornamentals"],
    specificHosts: ["young maple", "apple", "linden", "honeylocust", "cherry"],
    growthStages: ["dormant", "mature"],
    symptomLocations: ["southwest side of trunk", "lower bark", "trunk", "large limbs"],
    symptomProgression:
      "Winter sun warms the southwest bark, which then freezes rapidly after sunset, killing tissue that later cracks, sinks, and peels in a vertical band.",
    observableSigns: [
      "An elongated sunken or cracked patch of dead bark forms on the southwest side of the trunk.",
      "The bark may split vertically and later loosen or peel away, exposing dead wood.",
      "Injury is on young thin-barked trees and faces the winter afternoon sun.",
    ],
    favorableConditions: [
      "Thin-barked young trees exposed to bright winter sun followed by sharp overnight freezes.",
      "Recently transplanted or pruned-up trees lacking low shading branches.",
    ],
    lookalikes: [
      {
        condition: "Frost crack",
        differentiator:
          "Frost cracks are deep radial splits from cold contraction, while sunscald is dead sunken bark specifically on the sun-warmed southwest face.",
      },
      {
        condition: "Canker disease",
        differentiator:
          "A canker is a diseased sunken area that can be on any side, whereas sunscald consistently faces the winter afternoon sun.",
      },
    ],
    immediateActions: [
      "Wrap the trunk of young trees with light-colored tree wrap or paint with diluted white latex to reflect winter sun.",
      "Avoid disturbing loose bark and let the tree begin compartmentalizing the wound.",
    ],
    treatments: [
      {
        situation: "Existing wounds",
        treatment:
          "Trace off loose dead bark to a clean edge and keep the tree vigorous so it can wall off the injury.",
      },
      {
        situation: "Young thin-barked trees",
        treatment:
          "Apply white latex trunk paint or install a reflective trunk guard each fall until the bark thickens.",
      },
    ],
    avoid: [
      "Do not use dark trunk wraps, and do not leave black plastic that absorbs heat against the bark.",
    ],
    recoveryTimeline:
      "Small wounds callus over one to three seasons, while large sunscald wounds may remain a long-term decay entry point.",
    prevention: [
      "Protect young thin-barked trunks with white paint or light wraps through winter.",
      "Retain lower branches on young trees to shade the trunk until the bark matures.",
    ],
    monitoringThresholds: [
      "Inspect wounds annually and re-evaluate if decay or borers colonize the dead bark.",
    ],
    escalationCriteria: [
      "Have an arborist assess structural risk if a large trunk wound develops advancing decay.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/protecting-trees-and-shrubs/preventing-tree-and-shrub-damage" },
      { label: "Colorado State University Extension", url: "https://extension.colostate.edu/topic-areas/yard-garden/" },
    ],
  },
  {
    id: "etiolation-insufficient-light-houseplant",
    name: "Etiolation from Insufficient Light (Houseplants)",
    category: "lighting-damage",
    affectedPlants: ["houseplants", "ornamentals", "herbs"],
    specificHosts: ["pothos", "coleus", "basil", "ivy", "fittonia"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["stems", "new growth", "whole plant", "internodes"],
    symptomProgression:
      "Stems stretch with long spaces between leaves, growth leans toward the light source, and leaves become smaller and paler as light stays inadequate.",
    observableSigns: [
      "Stems elongate with unusually long gaps between leaves as the plant reaches for light.",
      "New leaves are smaller, thinner, and paler than normal, and growth leans toward the window.",
      "Variegated plants lose their coloration and revert toward all-green in low light.",
    ],
    favorableConditions: [
      "Placement far from windows or in north-facing rooms with insufficient light intensity.",
      "Short winter days reducing available light for plants kept indoors.",
    ],
    lookalikes: [
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen deficiency yellows older leaves without stem stretching, while etiolation stretches internodes and leans toward light.",
      },
      {
        condition: "Heat stress stretching",
        differentiator:
          "Excess heat can stretch seedlings even in good light, whereas etiolation occurs specifically when light is inadequate.",
      },
    ],
    immediateActions: [
      "Move the plant to a brighter location or add a grow light to increase light intensity.",
      "Rotate the plant regularly so it grows evenly rather than leaning one direction.",
    ],
    treatments: [
      {
        situation: "Leggy houseplants",
        treatment:
          "Prune back stretched stems to encourage compact branching and provide brighter light going forward.",
      },
      {
        situation: "Low-light rooms",
        treatment:
          "Install a full-spectrum LED grow light on a timer to supplement natural light through the darker months.",
      },
    ],
    avoid: [
      "Do not correct low light by overfeeding, which only produces more weak stretched growth.",
    ],
    recoveryTimeline:
      "Stretched growth stays leggy, but improved light yields compact healthy new growth within a few weeks.",
    prevention: [
      "Match each plant to appropriate light levels and place it near a suitable window.",
      "Supplement with grow lights during short low-light winter days.",
    ],
    monitoringThresholds: [
      "Re-evaluate placement if new growth continues to stretch after moving to brighter light.",
    ],
    escalationCriteria: [
      "Consult resources on grow-light setups if plants cannot thrive in available natural light.",
    ],
    sources: [
      { label: "University of Maryland Extension", url: "https://extension.umd.edu/resource/light-indoor-plants/" },
      { label: "RHS", url: "https://www.rhs.org.uk/houseplants" },
    ],
  },
  {
    id: "etiolation-succulent-stretch",
    name: "Etiolation in Succulents (Stretching)",
    category: "lighting-damage",
    affectedPlants: ["succulents-cacti", "houseplants"],
    specificHosts: ["echeveria", "sedum", "aloe", "haworthia", "graptopetalum"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["stems", "rosette center", "new growth", "internodes"],
    symptomProgression:
      "A compact rosette elongates into a stretched stem with spread-out, downward-angled leaves and loses its tight symmetrical form as light stays too low.",
    observableSigns: [
      "The tight rosette elongates and leaves spread apart and point downward as the stem stretches.",
      "New growth is pale green and lacks the sun-stress colors and compactness of well-lit succulents.",
      "The whole plant leans strongly toward the brightest available light source.",
    ],
    favorableConditions: [
      "Insufficient light indoors or on shaded windowsills for sun-loving succulents.",
      "Winter months with weak short-day light and no supplemental lighting.",
    ],
    lookalikes: [
      {
        condition: "Natural caulescent growth",
        differentiator:
          "Some species naturally form stems, but etiolation shows pale spread leaves and leaning that reverse with brighter light.",
      },
      {
        condition: "Overwatering soft growth",
        differentiator:
          "Overwatering causes mushy translucent tissue, whereas etiolation produces firm but stretched pale growth.",
      },
    ],
    immediateActions: [
      "Move the succulent to the brightest window available or add a dedicated grow light.",
      "Reduce watering slightly since stretched low-light plants use less water.",
    ],
    treatments: [
      {
        situation: "Stretched rosettes",
        treatment:
          "Behead the stretched rosette, callus the cutting, and replant it, then grow the plant in strong light.",
      },
      {
        situation: "Indoor collections",
        treatment:
          "Provide a high-output full-spectrum grow light kept close to the plants for compact colorful growth.",
      },
    ],
    avoid: [
      "Do not suddenly move an etiolated succulent into intense full sun, which will scald the tender growth.",
    ],
    recoveryTimeline:
      "The stretched portion stays elongated, but propagated or newly grown rosettes stay compact under strong light within weeks.",
    prevention: [
      "Provide bright direct or supplemental light suited to sun-loving succulents.",
      "Increase light before and during winter to prevent seasonal stretching.",
    ],
    monitoringThresholds: [
      "Re-evaluate lighting if new growth continues stretching or losing color under current conditions.",
    ],
    escalationCriteria: [
      "Seek grow-light guidance if a valued collection cannot maintain form with available light.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/houseplants/cacti-and-succulents" },
      { label: "RHS", url: "https://www.rhs.org.uk/plants/types/cacti-succulents" },
    ],
  },
  {
    id: "grow-light-burn-photobleaching",
    name: "Grow-Light Burn (Light Bleaching)",
    category: "lighting-damage",
    affectedPlants: ["houseplants", "herbs", "vegetable-garden", "specialty-cultivation"],
    specificHosts: ["basil", "lettuce seedling", "tomato seedling", "cannabis", "pepper seedling"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["top of plant", "upper leaves nearest light", "canopy tips", "new growth"],
    symptomProgression:
      "Leaves closest to an intense light bleach white or yellow at the top, then crisp and curl while lower shaded leaves remain green.",
    observableSigns: [
      "The uppermost leaves nearest the lamp bleach to white or pale yellow while lower leaves stay green.",
      "Affected upper leaves may cup upward or taco and develop dry crispy tips.",
      "A clear gradient of damage decreases with distance from the light fixture.",
    ],
    favorableConditions: [
      "High-intensity LED or HID fixtures placed too close to the canopy for too long.",
      "Running lights at maximum output without acclimating young plants to the intensity.",
    ],
    lookalikes: [
      {
        condition: "Nutrient deficiency chlorosis",
        differentiator:
          "Deficiency chlorosis follows plant physiology and vein patterns, while light burn bleaches the leaves closest to the lamp in a distance gradient.",
      },
      {
        condition: "Heat stress from lamp",
        differentiator:
          "Radiant heat causes edge curling and wilting, whereas photobleaching whitens the leaf surface directly under intense light.",
      },
    ],
    immediateActions: [
      "Raise the light fixture or dim its output to reduce intensity at the canopy today.",
      "Increase air circulation to lower canopy temperature under the lamp.",
    ],
    treatments: [
      {
        situation: "Seedlings and clones",
        treatment:
          "Position lights farther away and ramp intensity up gradually as plants establish and acclimate.",
      },
      {
        situation: "Established plants",
        treatment:
          "Set the lamp to the manufacturer-recommended hanging height and light level for the growth stage.",
      },
    ],
    avoid: [
      "Do not run new fixtures at full power close to the canopy without checking recommended distances.",
    ],
    recoveryTimeline:
      "Bleached leaves will not re-green, but corrected light intensity allows healthy new growth within one to two weeks.",
    prevention: [
      "Follow manufacturer hanging-height and intensity guidelines for each growth stage.",
      "Acclimate plants gradually to strong artificial light and monitor canopy distance.",
    ],
    monitoringThresholds: [
      "Measure canopy light intensity and re-evaluate if new top growth continues to bleach.",
    ],
    escalationCriteria: [
      "Consult horticultural lighting references if bleaching persists despite adjusting height and output.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/planting-and-growing-guides/light-indoor-houseplants" },
      { label: "Michigan State University Extension", url: "https://www.canr.msu.edu/floriculture/" },
    ],
  },
  {
    id: "photoperiod-flowering-failure",
    name: "Photoperiod Flowering Failure",
    category: "lighting-damage",
    affectedPlants: ["houseplants", "ornamentals", "specialty-cultivation"],
    specificHosts: ["poinsettia", "Christmas cactus", "chrysanthemum", "kalanchoe"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["whole plant", "shoot tips", "flower buds"],
    symptomProgression:
      "A photoperiod-sensitive plant grows vegetatively but never sets buds, or drops forming buds, when night length is disrupted by artificial light.",
    observableSigns: [
      "A plant known to bloom seasonally stays leafy and fails to initiate flower buds on schedule.",
      "Buds that do form may abort or fail to color up when nights are interrupted by light.",
      "Plants near lamps, streetlights, or TVs skip flowering while identical plants in true darkness bloom.",
    ],
    favorableConditions: [
      "Short-day plants exposed to any light during the dark period disrupting flower initiation.",
      "Household or outdoor lighting that shortens the effective uninterrupted night length.",
    ],
    lookalikes: [
      {
        condition: "Excess nitrogen preventing bloom",
        differentiator:
          "Excess nitrogen drives lush leafy growth regardless of daylength, while photoperiod failure is corrected by giving proper dark periods.",
      },
      {
        condition: "Immature plant not yet blooming",
        differentiator:
          "A juvenile plant is simply too young, whereas a mature photoperiod plant fails to bloom due to interrupted night length.",
      },
    ],
    immediateActions: [
      "Move the plant to a location with completely uninterrupted darkness at night.",
      "Cover the plant nightly or turn off nearby lights to provide the required long nights.",
    ],
    treatments: [
      {
        situation: "Poinsettia and Christmas cactus",
        treatment:
          "Provide fourteen or more hours of total uninterrupted darkness nightly for several weeks to trigger bud set.",
      },
      {
        situation: "Outdoor short-day mums",
        treatment:
          "Site plants away from night lighting so their natural dark period is not interrupted.",
      },
    ],
    avoid: [
      "Do not expose short-day plants to any light during their dark period, even briefly.",
    ],
    recoveryTimeline:
      "Once proper dark periods are provided, buds typically initiate within a few weeks and bloom over the following weeks.",
    prevention: [
      "Understand each species photoperiod needs and provide the correct dark period.",
      "Keep photoperiod-sensitive plants away from artificial night lighting.",
    ],
    monitoringThresholds: [
      "Re-evaluate the dark treatment if no buds form after several weeks of proper long nights.",
    ],
    escalationCriteria: [
      "Consult specialty growing guides if a plant repeatedly fails to bloom despite correct daylength management.",
    ],
    sources: [
      { label: "University of Illinois Extension", url: "https://extension.illinois.edu/houseplants" },
      { label: "Clemson Cooperative Extension", url: "https://hgic.clemson.edu/" },
    ],
  },
  {
    id: "variegation-reversion-low-light",
    name: "Variegation Loss / Reversion (Low Light)",
    category: "lighting-damage",
    affectedPlants: ["houseplants", "ornamentals", "trees-shrubs"],
    specificHosts: ["variegated pothos", "variegated monstera", "croton", "variegated ginger", "hosta"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["new growth", "whole plant", "shoots"],
    symptomProgression:
      "New leaves emerge with progressively less white or colored variegation and revert toward solid green as the plant seeks more chlorophyll in low light.",
    observableSigns: [
      "Newly emerging leaves show much less variegation and trend toward solid green.",
      "All-green shoots grow more vigorously than the variegated portions of the plant.",
      "Color intensity of variegated or colored cultivars fades noticeably in dim conditions.",
    ],
    favorableConditions: [
      "Insufficient light causing the plant to favor efficient all-green chlorophyll-rich tissue.",
      "Placement too far from a window for high-light variegated cultivars.",
    ],
    lookalikes: [
      {
        condition: "Nutrient deficiency fading",
        differentiator:
          "Deficiency causes uniform yellowing, while reversion produces solid-green rather than pale leaves and outgrows vigorous green shoots.",
      },
      {
        condition: "Grow-light bleaching",
        differentiator:
          "Excess light bleaches leaves white near a lamp, whereas low-light reversion loses white and turns leaves solid green.",
      },
    ],
    immediateActions: [
      "Move the plant to brighter indirect light to encourage variegated new growth.",
      "Prune out vigorous all-green shoots that threaten to dominate the variegated plant.",
    ],
    treatments: [
      {
        situation: "Reverting shoots",
        treatment:
          "Cut all-green reverted stems back to variegated tissue to preserve the pattern.",
      },
      {
        situation: "Low-light placement",
        treatment:
          "Relocate to a brighter spot or add supplemental light to maintain strong variegation.",
      },
    ],
    avoid: [
      "Do not leave all-green shoots to grow out, as they will outcompete and overtake the variegation.",
    ],
    recoveryTimeline:
      "Existing solid-green leaves stay green, but brighter light and pruning restore variegated new growth over weeks.",
    prevention: [
      "Provide bright indirect light appropriate for variegated cultivars.",
      "Promptly remove reverted all-green shoots as they appear.",
    ],
    monitoringThresholds: [
      "Re-evaluate light if new leaves keep emerging with reduced variegation.",
    ],
    escalationCriteria: [
      "Seek cultivar-specific care advice if a prized variegated plant continues reverting despite good light.",
    ],
    sources: [
      { label: "RHS", url: "https://www.rhs.org.uk/plants/variegation" },
      { label: "University of Maryland Extension", url: "https://extension.umd.edu/resource/houseplant-care/" },
    ],
  },

  // ===================== temperature-humidity (~10) =====================
  {
    id: "frost-damage-tender-annuals",
    name: "Frost Damage (Tender Annuals & Vegetables)",
    category: "temperature-humidity",
    affectedPlants: ["vegetable-garden", "ornamentals", "herbs"],
    specificHosts: ["tomato", "basil", "impatiens", "pepper", "squash"],
    growthStages: ["seed-seedling", "vegetative", "flowering", "fruiting"],
    symptomLocations: ["whole plant", "new growth", "leaves", "shoot tips"],
    symptomProgression:
      "Frozen tissue looks water-soaked and wilted the morning after frost, then turns black and mushy and collapses as it thaws over the next day.",
    observableSigns: [
      "Foliage appears water-soaked, limp, and darkened the morning after a frost event.",
      "Damaged leaves and stems turn black or brown and become mushy within a day of thawing.",
      "Tender annuals may collapse entirely while nearby hardy plants remain unharmed.",
    ],
    favorableConditions: [
      "Temperatures at or below freezing overtaking frost-tender warm-season plants.",
      "Clear calm radiational-cooling nights in spring or fall around planting-out time.",
    ],
    lookalikes: [
      {
        condition: "Bacterial soft rot",
        differentiator:
          "Soft rot spreads over days with foul odor from bacteria, while frost damage appears all at once after a freezing night.",
      },
      {
        condition: "Herbicide injury",
        differentiator:
          "Herbicide injury distorts new growth over time, whereas frost blackens existing foliage uniformly after a cold night.",
      },
    ],
    immediateActions: [
      "Wait to assess damage after full thaw rather than pruning frozen tissue immediately.",
      "For future frosts, cover tender plants with frost cloth before nightfall and remove it in the morning.",
    ],
    treatments: [
      {
        situation: "Lightly frosted plants",
        treatment:
          "Trim off dead blackened tissue after warmth returns and let plants regrow from surviving lower buds.",
      },
      {
        situation: "Severely frozen annuals",
        treatment:
          "Replace killed tender annuals and delay replanting warm-season crops until frost danger has passed.",
      },
    ],
    avoid: [
      "Do not plant frost-tender crops outdoors before your local last-frost date without protection.",
    ],
    recoveryTimeline:
      "Lightly frosted plants push new growth in one to three weeks, while fully frozen tender plants will not recover.",
    prevention: [
      "Track frost dates and cover or bring in tender plants during freeze warnings.",
      "Harden off and plant warm-season crops only after the danger of frost passes.",
    ],
    monitoringThresholds: [
      "Re-evaluate after thaw to distinguish surviving green tissue from killed blackened tissue.",
    ],
    escalationCriteria: [
      "Consult planting-date guidance if repeated early plantings are lost to late frosts.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/planting-and-growing-guides/protecting-plants-frost" },
      { label: "RHS", url: "https://www.rhs.org.uk/problems/frost-damage" },
    ],
  },
  {
    id: "cold-shock-tropical-houseplant",
    name: "Cold Shock in Tropical Houseplants",
    category: "temperature-humidity",
    affectedPlants: ["houseplants"],
    specificHosts: ["ficus", "philodendron", "calathea", "dieffenbachia", "aglaonema"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["whole plant", "leaves", "leaf margins", "new growth"],
    symptomProgression:
      "Exposure to cold drafts or a chilly transit causes sudden leaf drop, blackened patches, or limp foliage within a day or two of the chill.",
    observableSigns: [
      "Leaves suddenly droop, blacken, or develop translucent water-soaked patches after a cold spell.",
      "Sudden dramatic leaf drop follows a cold draft, an open window, or a chilly shipment.",
      "Damage often appears on the side of the plant nearest a cold window or door.",
    ],
    favorableConditions: [
      "Temperatures below roughly fifty degrees, cold drafts, or transport in freezing weather.",
      "Plants placed against cold windowpanes or near frequently opened exterior doors.",
    ],
    lookalikes: [
      {
        condition: "Overwatering leaf drop",
        differentiator:
          "Overwatering yellows and drops leaves with soggy roots over time, while cold shock drops leaves abruptly after a chill event.",
      },
      {
        condition: "Underwatering wilt",
        differentiator:
          "Drought wilt occurs in dry soil and recovers with water, whereas cold shock follows an identifiable cold exposure.",
      },
    ],
    immediateActions: [
      "Move the plant to a warm draft-free location away from cold windows and doors immediately.",
      "Hold off on watering and fertilizing while the plant recovers from the cold stress.",
    ],
    treatments: [
      {
        situation: "Recently chilled plants",
        treatment:
          "Keep the plant warm and stable, remove clearly dead leaves, and wait for new growth before resuming feeding.",
      },
      {
        situation: "Winter shipping",
        treatment:
          "Unbox cold-shipped plants promptly, keep them warm, and expect some leaf drop as they acclimate.",
      },
    ],
    avoid: [
      "Do not place tropical houseplants against cold windows or near drafty exterior doors in winter.",
    ],
    recoveryTimeline:
      "Plants that keep firm stems recover with new growth over several weeks, while collapsed stems indicate permanent loss.",
    prevention: [
      "Keep tropical houseplants above their minimum temperatures and away from cold drafts.",
      "Protect plants during winter transport and acclimate them gradually indoors.",
    ],
    monitoringThresholds: [
      "Re-evaluate if stems soften and blacken, indicating cold injury has progressed beyond the leaves.",
    ],
    escalationCriteria: [
      "Consider the plant unrecoverable and replace it if the main stem turns mushy and collapses.",
    ],
    sources: [
      { label: "University of Maryland Extension", url: "https://extension.umd.edu/resource/houseplant-care/" },
      { label: "RHS", url: "https://www.rhs.org.uk/houseplants" },
    ],
  },
  {
    id: "heat-stress-general",
    name: "Heat Stress",
    category: "temperature-humidity",
    affectedPlants: ["vegetable-garden", "ornamentals", "lawns-turf", "houseplants"],
    specificHosts: ["lettuce", "hydrangea", "cool-season turf", "impatiens", "pepper"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["whole plant", "leaf margins", "flowers", "new growth"],
    symptomProgression:
      "Plants wilt during peak heat, leaf edges scorch, flowers and fruit set drop, and growth stalls as temperatures stay elevated.",
    observableSigns: [
      "Plants wilt in the afternoon heat even when soil moisture is adequate and recover somewhat at night.",
      "Leaf margins scorch and flowers or newly set fruit drop during hot spells.",
      "Cool-season crops bolt or become bitter and turf develops heat-stressed tan patches.",
    ],
    favorableConditions: [
      "Prolonged high temperatures, intense sun, and hot drying winds beyond a plant's tolerance.",
      "Cool-season species grown into summer heat, and container plants overheating in sun.",
    ],
    lookalikes: [
      {
        condition: "Drought stress",
        differentiator:
          "Drought wilt occurs from dry soil and recovers with water, while heat stress wilts even with moist soil during peak temperatures.",
      },
      {
        condition: "Root rot",
        differentiator:
          "Root rot wilts with soggy soil and dark roots, whereas heat stress wilts during hot afternoons and rebounds when it cools.",
      },
    ],
    immediateActions: [
      "Provide temporary shade cloth over sensitive plants during the hottest part of the day.",
      "Water early in the morning to ensure plants enter the heat fully hydrated.",
    ],
    treatments: [
      {
        situation: "Vegetable gardens",
        treatment:
          "Use shade cloth, mulch heavily, and grow heat-tolerant cultivars during summer heat.",
      },
      {
        situation: "Container plants",
        treatment:
          "Move pots into afternoon shade and increase watering frequency during heat waves.",
      },
    ],
    avoid: [
      "Do not fertilize or transplant during extreme heat, which adds stress to struggling plants.",
    ],
    recoveryTimeline:
      "Most plants rebound within days once heat eases, though dropped flowers and scorched leaves are not recovered.",
    prevention: [
      "Select heat-adapted cultivars and provide mulch and consistent moisture.",
      "Site heat-sensitive plants in afternoon shade and use shade cloth during heat waves.",
    ],
    monitoringThresholds: [
      "Re-evaluate placement and watering if plants remain wilted into the cooler morning hours.",
    ],
    escalationCriteria: [
      "Reconsider species selection if plants repeatedly fail to tolerate summer heat at the site.",
    ],
    sources: [
      { label: "Clemson Cooperative Extension", url: "https://hgic.clemson.edu/" },
      { label: "Texas A&M AgriLife Extension", url: "https://agrilifeextension.tamu.edu/" },
    ],
  },
  {
    id: "low-humidity-leaf-crisping",
    name: "Low Humidity Leaf Crisping (Houseplants)",
    category: "temperature-humidity",
    affectedPlants: ["houseplants", "herbs"],
    specificHosts: ["calathea", "maranta", "fern", "peace lily", "nerve plant"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["leaf tips", "leaf margins", "new growth", "leaf edges"],
    symptomProgression:
      "Leaf tips and edges dry to a thin brown crispy border that gradually enlarges inward as air stays dry, especially through heating season.",
    observableSigns: [
      "Leaf tips and margins turn brown, thin, and crispy with a sharp line against green tissue.",
      "Humidity-loving plants curl or crisp worst during winter when indoor heating dries the air.",
      "New leaves may fail to unfurl cleanly and emerge with damaged crispy edges.",
    ],
    favorableConditions: [
      "Dry indoor air below forty percent humidity, especially near heating vents and radiators.",
      "Tropical high-humidity species kept in typical dry household conditions.",
    ],
    lookalikes: [
      {
        condition: "Fertilizer salt burn",
        differentiator:
          "Salt burn scorches margins after feeding and improves with flushing, while low-humidity crisping tracks dry air and season.",
      },
      {
        condition: "Underwatering",
        differentiator:
          "Underwatering wilts the whole plant in dry soil, whereas low-humidity crisping affects tips and edges with adequate soil moisture.",
      },
    ],
    immediateActions: [
      "Group plants together and add a humidity tray or humidifier to raise local moisture.",
      "Move sensitive plants away from heating vents and dry drafts.",
    ],
    treatments: [
      {
        situation: "Sensitive tropicals",
        treatment:
          "Run a room humidifier or use an enclosed cabinet to maintain higher humidity for demanding species.",
      },
      {
        situation: "General houseplants",
        treatment:
          "Cluster plants, use pebble trays, and trim crispy edges to tidy appearance while conditions improve.",
      },
    ],
    avoid: [
      "Do not compensate by overwatering, which causes root problems without fixing dry air.",
    ],
    recoveryTimeline:
      "Existing crispy edges will not regreen, but higher humidity yields clean healthy new leaves over several weeks.",
    prevention: [
      "Provide adequate humidity for tropical species with humidifiers or grouping.",
      "Keep humidity-loving plants away from heat sources and dry drafts.",
    ],
    monitoringThresholds: [
      "Track humidity with a hygrometer and re-evaluate if new leaves continue crisping below target humidity.",
    ],
    escalationCriteria: [
      "Consider a dedicated enclosure if demanding species cannot thrive at achievable room humidity.",
    ],
    sources: [
      { label: "University of Illinois Extension", url: "https://extension.illinois.edu/houseplants" },
      { label: "RHS", url: "https://www.rhs.org.uk/houseplants" },
    ],
  },
  {
    id: "edema-high-humidity",
    name: "Edema (Oedema) from High Humidity",
    category: "temperature-humidity",
    affectedPlants: ["houseplants", "ornamentals", "vegetable-garden", "succulents-cacti"],
    specificHosts: ["ivy geranium", "peperomia", "begonia", "cabbage seedling", "succulent"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["underside of leaves", "leaf undersurface", "stems", "petioles"],
    symptomProgression:
      "Water-filled blisters form on leaf undersides when roots absorb more water than leaves can transpire, then rupture into corky tan raised spots.",
    observableSigns: [
      "Small water-soaked blisters or bumps form on the undersides of leaves and along petioles.",
      "The blisters later burst and turn into corky, tan, raised scab-like patches.",
      "Symptoms appear when soil is wet and the air is cool, humid, and still.",
    ],
    favorableConditions: [
      "High soil moisture combined with cool humid stagnant air that limits transpiration.",
      "Overwatering during dull damp weather or in poorly ventilated indoor spaces.",
    ],
    lookalikes: [
      {
        condition: "Rust or leaf-spot disease",
        differentiator:
          "Rust produces powdery spore pustules, while edema forms sterile corky water-blister bumps with no spores.",
      },
      {
        condition: "Spider mite or thrips stippling",
        differentiator:
          "Pest feeding leaves stipple and live pests, whereas edema is a physiological blistering tied to water balance.",
      },
    ],
    immediateActions: [
      "Reduce watering and let the soil dry appropriately to lower root water uptake.",
      "Improve air circulation and lower humidity around the affected plants.",
    ],
    treatments: [
      {
        situation: "Overwatered indoor plants",
        treatment:
          "Space plants out, increase ventilation, and water only when the plant actually needs it.",
      },
      {
        situation: "Greenhouse conditions",
        treatment:
          "Improve venting and heating to reduce humidity and avoid watering late in the day during dull weather.",
      },
    ],
    avoid: [
      "Do not treat edema with fungicides, as it is a physiological problem not a disease.",
    ],
    recoveryTimeline:
      "Affected leaves keep their corky marks, but balanced watering and airflow prevent new blisters within a week or two.",
    prevention: [
      "Water according to plant need and avoid overwatering in cool humid conditions.",
      "Maintain good air circulation and moderate humidity around susceptible plants.",
    ],
    monitoringThresholds: [
      "Re-evaluate watering and airflow if new blisters continue forming on emerging leaves.",
    ],
    escalationCriteria: [
      "Seek diagnostic confirmation if raised spots spread in a way suggesting disease rather than edema.",
    ],
    sources: [
      { label: "RHS", url: "https://www.rhs.org.uk/problems/oedema" },
      { label: "University of Massachusetts Extension", url: "https://ag.umass.edu/greenhouse-floriculture" },
    ],
  },
  {
    id: "bolting-cool-season-crops",
    name: "Bolting in Cool-Season Crops",
    category: "temperature-humidity",
    affectedPlants: ["vegetable-garden", "herbs"],
    specificHosts: ["lettuce", "spinach", "cilantro", "arugula", "broccoli"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["central stalk", "growing point", "whole plant"],
    symptomProgression:
      "The plant abruptly sends up a tall central flower stalk, leaves turn bitter, and the harvestable stage ends as it shifts to seed production.",
    observableSigns: [
      "A tall central flowering stalk shoots up rapidly from the center of the plant.",
      "Leaves turn bitter and tough and leafy growth slows as the plant redirects energy to flowering.",
      "The rosette elongates and loses its compact edible form.",
    ],
    favorableConditions: [
      "Lengthening days and rising temperatures triggering cool-season crops to flower.",
      "Heat stress, crowding, or transplant stress accelerating the switch to bolting.",
    ],
    lookalikes: [
      {
        condition: "Natural maturity",
        differentiator:
          "Bolting is a premature stress-driven flowering, while a crop like broccoli naturally forms an edible flower head at maturity.",
      },
      {
        condition: "Excess nitrogen leggy growth",
        differentiator:
          "Excess nitrogen produces lush leafy growth without a bolting flower stalk, whereas bolting sends up a distinct seed stalk.",
      },
    ],
    immediateActions: [
      "Harvest usable leaves promptly before they become too bitter once bolting begins.",
      "Provide shade and consistent moisture to slow bolting in remaining plants.",
    ],
    treatments: [
      {
        situation: "Spring plantings",
        treatment:
          "Succession-sow and harvest quickly, and choose slow-bolt or heat-tolerant cultivars.",
      },
      {
        situation: "Warm-season carryover",
        treatment:
          "Shift cool-season sowings to spring and fall windows to avoid summer heat that triggers bolting.",
      },
    ],
    avoid: [
      "Do not let cool-season crops linger through heat expecting quality leaves after bolting starts.",
    ],
    recoveryTimeline:
      "Bolted plants do not revert; plan replacements or let selected plants go to seed for saving.",
    prevention: [
      "Grow cool-season crops in cool windows and choose bolt-resistant cultivars.",
      "Provide even moisture, avoid transplant stress, and use shade during warm spells.",
    ],
    monitoringThresholds: [
      "Watch for stalk elongation as temperatures rise and re-evaluate harvest timing.",
    ],
    escalationCriteria: [
      "Adjust the planting calendar with local guidance if crops consistently bolt before harvest.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/vegetables" },
      { label: "Oregon State University Extension", url: "https://extension.oregonstate.edu/gardening/vegetables" },
    ],
  },
  {
    id: "winter-burn-evergreens",
    name: "Winter Burn on Broadleaf & Needled Evergreens",
    category: "temperature-humidity",
    affectedPlants: ["trees-shrubs", "ornamentals"],
    specificHosts: ["boxwood", "arborvitae", "rhododendron", "holly", "yew"],
    growthStages: ["dormant", "mature"],
    symptomLocations: ["exposed foliage", "windward side", "outer canopy", "needle tips"],
    symptomProgression:
      "Foliage stays green through winter, then browns from the tips and exposed side as spring reveals tissue that dried out while roots were frozen.",
    observableSigns: [
      "Evergreen foliage browns or bronzes, worst on the sunny windward and exposed sides.",
      "Damage becomes apparent in late winter and early spring after cold windy weather.",
      "Foliage protected by snow cover or the leeward side often stays green.",
    ],
    favorableConditions: [
      "Cold dry winter winds and sun causing transpiration while frozen soil prevents water uptake.",
      "Exposed sites, recent transplants, and species marginally hardy for the region.",
    ],
    lookalikes: [
      {
        condition: "Root or vascular disease",
        differentiator:
          "Disease browning is often scattered and progressive in the growing season, while winter burn is exposure-patterned and appears after winter.",
      },
      {
        condition: "Spider mite damage",
        differentiator:
          "Mite damage shows stippling and webbing in the growing season, whereas winter burn is uniform browning tied to winter exposure.",
      },
    ],
    immediateActions: [
      "Water evergreens well before the ground freezes in fall to reduce winter desiccation.",
      "Wait until spring growth resumes to judge which browned tissue is truly dead.",
    ],
    treatments: [
      {
        situation: "After winter injury",
        treatment:
          "Prune out dead brown tissue once new growth emerges and buds show what survived.",
      },
      {
        situation: "Exposed plantings",
        treatment:
          "Erect burlap windbreaks and apply anti-desiccant sprays to protect broadleaf evergreens over winter.",
      },
    ],
    avoid: [
      "Do not prune browned foliage in winter before you can tell live buds from dead tissue.",
    ],
    recoveryTimeline:
      "Plants often flush new growth in spring and recover over a season, though heavily burned branches may die back.",
    prevention: [
      "Water evergreens through fall and site them out of harsh winter wind and sun.",
      "Use windbreaks or anti-desiccants for exposed broadleaf evergreens.",
    ],
    monitoringThresholds: [
      "Re-evaluate in late spring whether burned branches produce new growth or remain dead.",
    ],
    escalationCriteria: [
      "Consult an arborist if a valued evergreen suffers extensive branch dieback beyond foliage browning.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/protecting-trees-and-shrubs/winter-injury-trees-and-shrubs" },
      { label: "University of Wisconsin Horticulture Extension", url: "https://hort.extension.wisc.edu/articles/winter-burn/" },
    ],
  },
  {
    id: "chilling-injury-tropical-produce",
    name: "Chilling Injury (Non-Freezing Cold)",
    category: "temperature-humidity",
    affectedPlants: ["vegetable-garden", "houseplants", "fruit-trees", "specialty-cultivation"],
    specificHosts: ["tomato", "cucumber", "basil", "banana", "citrus"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaves", "fruit surface", "whole plant", "new growth"],
    symptomProgression:
      "Cold but non-freezing temperatures cause leaf bronzing, pitting, or blotchy discoloration that develops slowly over days without ice damage.",
    observableSigns: [
      "Leaves develop dull bronzing, purpling, or sunken pitting after cold but above-freezing nights.",
      "Chilled fruit shows surface pitting and fails to ripen properly even after warming.",
      "Basil and other sensitive plants blacken in patches following refrigeration or cold storage.",
    ],
    favorableConditions: [
      "Tropical and subtropical species exposed to temperatures below about fifty degrees but above freezing.",
      "Cold storage or spring cold snaps chilling warm-loving crops and houseplants.",
    ],
    lookalikes: [
      {
        condition: "Frost damage",
        differentiator:
          "Frost causes water-soaked blackening from actual ice, while chilling injury develops slowly from cold that never reached freezing.",
      },
      {
        condition: "Nutrient deficiency purpling",
        differentiator:
          "Phosphorus purpling is nutritional and consistent, whereas chilling purpling follows an identifiable cold exposure.",
      },
    ],
    immediateActions: [
      "Move affected plants to warmer conditions above their chilling threshold immediately.",
      "Avoid refrigerating chill-sensitive produce like tomatoes and basil.",
    ],
    treatments: [
      {
        situation: "Garden crops",
        treatment:
          "Delay planting warm-season crops until nights are reliably warm and use row covers on cold nights.",
      },
      {
        situation: "Houseplants and produce",
        treatment:
          "Keep sensitive tropicals and harvested produce above their minimum temperature to prevent chilling.",
      },
    ],
    avoid: [
      "Do not store chill-sensitive fruits and herbs in the refrigerator where cold triggers injury.",
    ],
    recoveryTimeline:
      "Mildly chilled plants resume normal growth once warm, while badly chilled tissue and fruit remain damaged.",
    prevention: [
      "Keep warm-loving plants above their chilling threshold and time planting to warm weather.",
      "Store chill-sensitive produce at appropriate warmer temperatures.",
    ],
    monitoringThresholds: [
      "Re-evaluate placement if new growth continues to bronze or pit after warming.",
    ],
    escalationCriteria: [
      "Consult crop-storage guidance if chilling injury recurs during handling or storage.",
    ],
    sources: [
      { label: "UC Postharvest Technology Center", url: "https://postharvest.ucdavis.edu/" },
      { label: "University of Florida IFAS Extension", url: "https://edis.ifas.ufl.edu/" },
    ],
  },
  {
    id: "leaf-scorch-heat-wind-combined",
    name: "Environmental Leaf Scorch (Heat & Wind)",
    category: "temperature-humidity",
    affectedPlants: ["trees-shrubs", "ornamentals", "fruit-trees"],
    specificHosts: ["Japanese maple", "dogwood", "hydrangea", "horse chestnut", "beech"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["leaf margins", "between veins", "exposed foliage", "outer canopy"],
    symptomProgression:
      "Leaf edges and interveinal areas turn brown and dry during hot windy spells when water loss outpaces uptake, worst on exposed outer foliage.",
    observableSigns: [
      "Leaf margins and areas between veins turn brown and papery while veins may stay greenish.",
      "Scorch is heaviest on the outer sun-and-wind-exposed canopy rather than shaded interior leaves.",
      "Symptoms flare during hot dry windy weather and stabilize when conditions moderate.",
    ],
    favorableConditions: [
      "Hot windy weather with high transpiration demand and limited root water supply.",
      "Recently transplanted, root-restricted, or sun-and-wind-exposed sensitive species.",
    ],
    lookalikes: [
      {
        condition: "Bacterial leaf scorch disease",
        differentiator:
          "Bacterial leaf scorch progresses branch by branch over years and is confirmed by lab testing, while environmental scorch tracks weather and exposure.",
      },
      {
        condition: "Fertilizer or salt burn",
        differentiator:
          "Salt burn follows a feeding or salt event, whereas environmental scorch coincides with heat and wind stress.",
      },
    ],
    immediateActions: [
      "Water deeply at the root zone and apply mulch to reduce moisture stress during heat.",
      "Provide temporary shade or windbreak for sensitive specimens during severe spells.",
    ],
    treatments: [
      {
        situation: "Sensitive ornamentals",
        treatment:
          "Site species like Japanese maple in afternoon shade with wind protection and consistent moisture.",
      },
      {
        situation: "Newly planted trees",
        treatment:
          "Maintain deep regular watering and a wide mulch ring through the first establishment seasons.",
      },
    ],
    avoid: [
      "Do not fertilize scorched plants during heat, as it increases salt and water stress.",
    ],
    recoveryTimeline:
      "Scorched leaves stay damaged but plants usually recover with new growth next flush once conditions improve.",
    prevention: [
      "Match sensitive species to sheltered sites with afternoon shade and wind protection.",
      "Keep soil evenly moist and mulched to buffer heat and wind stress.",
    ],
    monitoringThresholds: [
      "Re-evaluate whether scorch progresses branch by branch, which would suggest disease rather than weather stress.",
    ],
    escalationCriteria: [
      "Request lab testing through extension if scorch advances systematically, suggesting bacterial leaf scorch.",
    ],
    sources: [
      { label: "University of Maryland Extension", url: "https://extension.umd.edu/resource/leaf-scorch-trees/" },
      { label: "Morton Arboretum", url: "https://mortonarb.org/plant-and-protect/tree-plant-care/plant-care-resources/" },
    ],
  },

  {
    id: "frost-heaving-perennials",
    name: "Frost Heaving of Perennials",
    category: "temperature-humidity",
    affectedPlants: ["ornamentals", "vegetable-garden", "herbs", "berries"],
    specificHosts: ["strawberry", "coral bells", "mums", "newly planted perennial", "garlic"],
    growthStages: ["dormant", "seed-seedling"],
    symptomLocations: ["crown", "root zone", "whole plant", "soil surface"],
    symptomProgression:
      "Repeated freeze-thaw cycles push shallow-rooted plants up out of the soil over winter, exposing crowns and roots that then desiccate and die.",
    observableSigns: [
      "Plant crowns and root balls are lifted partly out of the ground with exposed roots.",
      "The soil surface shows a heaved, cracked, or lumpy texture around affected plants.",
      "Exposed crowns dry out, and shallow-rooted or fall-planted perennials are most affected.",
    ],
    favorableConditions: [
      "Alternating freezing and thawing of bare wet soil during winter and early spring.",
      "Fall plantings and shallow-rooted species that have not fully anchored before winter.",
    ],
    lookalikes: [
      {
        condition: "Animal disturbance",
        differentiator:
          "Animals leave digging holes and disturbed soil, while frost heaving lifts plants uniformly with a heaved soil surface from freeze-thaw.",
      },
      {
        condition: "Poor planting depth",
        differentiator:
          "Shallow planting keeps crowns high from the start, whereas frost heaving progressively lifts properly set plants over winter.",
      },
    ],
    immediateActions: [
      "Gently press or replant heaved plants back to proper depth and firm the soil when it thaws.",
      "Apply a layer of mulch after the ground first freezes to stabilize soil temperature.",
    ],
    treatments: [
      {
        situation: "Heaved perennials",
        treatment:
          "Re-set lifted crowns to the correct depth, firm the soil, and mulch to prevent repeated heaving.",
      },
      {
        situation: "Fall plantings",
        treatment:
          "Mulch new plantings well after the ground freezes and delay fall planting to allow rooting before winter.",
      },
    ],
    avoid: [
      "Do not leave heaved crowns exposed to dry winter air, which quickly kills the roots.",
    ],
    recoveryTimeline:
      "Promptly reset and mulched plants usually recover in spring, while long-exposed dried crowns may be lost.",
    prevention: [
      "Mulch perennials after the ground freezes to buffer freeze-thaw cycles.",
      "Plant early enough in fall for roots to establish and avoid overly shallow planting.",
    ],
    monitoringThresholds: [
      "Check plantings after winter thaws and re-evaluate any crowns pushed above the soil.",
    ],
    escalationCriteria: [
      "Reassess site drainage and planting practices if the same beds heave severely each winter.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/protecting-trees-and-shrubs/winter-injury-trees-and-shrubs" },
      { label: "University of New Hampshire Extension", url: "https://extension.unh.edu/gardening" },
    ],
  },

  // ===================== physical-injury (~6) =====================
  {
    id: "string-trimmer-mechanical-damage",
    name: "String Trimmer / Mower Bark Damage",
    category: "physical-injury",
    affectedPlants: ["trees-shrubs", "ornamentals", "fruit-trees"],
    specificHosts: ["young maple", "crabapple", "birch", "dogwood", "apple"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["trunk base", "lower bark", "root flare", "one side of trunk"],
    symptomProgression:
      "Repeated string-trimmer or mower strikes wound the thin bark at the base, and if the girdling wounds encircle the trunk the tree declines and dies above.",
    observableSigns: [
      "Ragged shredded bark and exposed wood appear around the base of the trunk near lawn level.",
      "Wounds are on the accessible outer face where equipment passes and may nearly girdle young trees.",
      "The canopy thins or dies back over time when damage interrupts the vascular tissue.",
    ],
    favorableConditions: [
      "Turf grown right up to thin-barked young tree trunks with no protective mulch ring.",
      "Frequent mowing and trimming close to trunks without care around the base.",
    ],
    lookalikes: [
      {
        condition: "Rodent gnawing damage",
        differentiator:
          "Rodents leave fine tooth marks under snow line, while trimmer damage leaves shredded ragged bark at mower height.",
      },
      {
        condition: "Sunscald bark injury",
        differentiator:
          "Sunscald is a smooth sunken dead patch on the southwest face, whereas trimmer wounds are mechanically torn and often on the mower-access side.",
      },
    ],
    immediateActions: [
      "Stop trimming and mowing near the trunk and install a wide mulch ring today.",
      "Leave the wound open to air rather than applying wound dressings that trap moisture.",
    ],
    treatments: [
      {
        situation: "Partial wounds",
        treatment:
          "Keep the tree vigorous and let it compartmentalize the wound, protecting it from further strikes.",
      },
      {
        situation: "Nearly girdled young trees",
        treatment:
          "Assess the extent of girdling with an arborist, as trees girdled more than halfway often decline.",
      },
    ],
    avoid: [
      "Do not let turf grow against trunks or run equipment right up to the bark.",
    ],
    recoveryTimeline:
      "Small wounds callus over one to three seasons, while girdling wounds may cause irreversible decline.",
    prevention: [
      "Maintain a wide mulch ring around trunks to eliminate the need to trim close.",
      "Use trunk guards on young thin-barked trees in lawn areas.",
    ],
    monitoringThresholds: [
      "Inspect wounds annually and re-evaluate if canopy dieback follows near-girdling injury.",
    ],
    escalationCriteria: [
      "Have an arborist evaluate viability if wounds encircle most of the trunk circumference.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/planting-and-growing-guides/protecting-trees-and-shrubs" },
      { label: "Morton Arboretum", url: "https://mortonarb.org/plant-and-protect/tree-plant-care/plant-care-resources/" },
    ],
  },
  {
    id: "hail-damage-general",
    name: "Hail Damage",
    category: "physical-injury",
    affectedPlants: ["vegetable-garden", "ornamentals", "fruit-trees", "trees-shrubs"],
    specificHosts: ["tomato", "hosta", "apple", "pepper", "maple"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["upper leaf surface", "stems", "fruit surface", "top of plant"],
    symptomProgression:
      "Hail shreds and pits leaves, bruises stems, and dents fruit all at once, with wounds later browning and sometimes inviting secondary rot.",
    observableSigns: [
      "Leaves show tattered torn holes and the tops of plants are stripped or shredded suddenly.",
      "Stems have bruised or gouged white streaks on the upper and windward surfaces.",
      "Fruit shows pits, dents, and cuts on the exposed upper side after a storm.",
    ],
    favorableConditions: [
      "Severe thunderstorms producing hail during the growing season.",
      "Exposed gardens and orchards without overhead protection.",
    ],
    lookalikes: [
      {
        condition: "Insect chewing damage",
        differentiator:
          "Chewing pests leave irregular feeding over time with frass, while hail damage appears all at once with torn tissue and bruised stems.",
      },
      {
        condition: "Wind and storm tatter",
        differentiator:
          "Wind tears leaf edges, whereas hail punches holes across leaf surfaces and bruises stems and fruit simultaneously.",
      },
    ],
    immediateActions: [
      "Remove badly shredded foliage and broken stems to reduce entry points for disease.",
      "Apply a protective fungicide or bactericide if the crop is prone to infection through wounds.",
    ],
    treatments: [
      {
        situation: "Vegetable gardens",
        treatment:
          "Prune damaged tissue, keep plants watered and fed moderately, and expect many to regrow and recover.",
      },
      {
        situation: "Fruit crops",
        treatment:
          "Thin severely damaged fruit and protect wounds from rot with appropriate labeled sprays.",
      },
    ],
    avoid: [
      "Do not strip all foliage at once, as remaining healthy leaves aid recovery.",
    ],
    recoveryTimeline:
      "Vigorous plants regrow foliage in two to four weeks, though damaged fruit and woody wounds remain marked.",
    prevention: [
      "Use hail netting or row covers over valuable crops in hail-prone regions.",
      "Keep plants healthy so they recover faster after storm damage.",
    ],
    monitoringThresholds: [
      "Monitor wounds for secondary rot and re-evaluate if disease develops in damaged tissue.",
    ],
    escalationCriteria: [
      "Consult extension for salvage and disease-management advice after severe crop-wide hail events.",
    ],
    sources: [
      { label: "Colorado State University Extension", url: "https://extension.colostate.edu/topic-areas/yard-garden/" },
      { label: "University of Nebraska-Lincoln Extension", url: "https://extension.unl.edu/" },
    ],
  },
  {
    id: "deer-rabbit-vole-browsing",
    name: "Animal Browsing Damage (Deer, Rabbit, Vole)",
    category: "physical-injury",
    affectedPlants: ["trees-shrubs", "ornamentals", "vegetable-garden", "fruit-trees"],
    specificHosts: ["arborvitae", "hosta", "young fruit tree", "tulip", "yew"],
    growthStages: ["seed-seedling", "vegetative", "dormant"],
    symptomLocations: ["lower branches", "bark at base", "new shoots", "foliage"],
    symptomProgression:
      "Browsing removes foliage and shoots, or gnawing strips bark at the base, and repeated feeding can girdle young trees or defoliate plants overnight.",
    observableSigns: [
      "Deer leave ragged torn shoot tips because they lack upper incisors, browsing up to about six feet high.",
      "Rabbits make clean angled cuts on young stems near the ground, while voles gnaw bark at the soil line.",
      "Tracks, droppings, and browse lines help confirm which animal is feeding.",
    ],
    favorableConditions: [
      "Winter food scarcity and deep snow driving animals to browse landscape plants and gnaw bark.",
      "Unprotected tender plantings near cover that shelters rabbits and voles.",
    ],
    lookalikes: [
      {
        condition: "Insect defoliation",
        differentiator:
          "Insects chew leaf tissue leaving veins or frass, while browsing animals remove whole shoots and leave torn or clean-cut stems.",
      },
      {
        condition: "Storm breakage",
        differentiator:
          "Storm damage splinters wood randomly, whereas animal browsing shows characteristic bite cuts and browse height lines.",
      },
    ],
    immediateActions: [
      "Install fencing, trunk guards, or repellents around vulnerable plants immediately.",
      "Clear tall grass and mulch away from trunks to remove vole cover near the base.",
    ],
    treatments: [
      {
        situation: "Deer pressure",
        treatment:
          "Use tall fencing, deer-resistant plant selection, and rotating repellents to protect valued plantings.",
      },
      {
        situation: "Rabbit and vole damage",
        treatment:
          "Wrap trunks with hardware cloth guards extending below and above the snow line and keep mulch pulled back.",
      },
    ],
    avoid: [
      "Do not rely on a single repellent long term, as animals habituate; rotate and combine methods.",
    ],
    recoveryTimeline:
      "Browsed plants regrow over a season, but bark-girdled young trees often die and may need replacement.",
    prevention: [
      "Protect vulnerable plants with fencing and trunk guards before feeding season.",
      "Choose resistant species and remove cover near trunks to discourage rodents.",
    ],
    monitoringThresholds: [
      "Re-evaluate protection if browsing continues or bark gnawing approaches girdling on young trees.",
    ],
    escalationCriteria: [
      "Consult wildlife-management resources for persistent severe deer or rodent damage across a property.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/protecting-trees-and-shrubs/protecting-trees-and-shrubs-against-animal-damage" },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    id: "improper-pruning-wounds",
    name: "Improper Pruning Wounds",
    category: "physical-injury",
    affectedPlants: ["trees-shrubs", "fruit-trees", "ornamentals"],
    specificHosts: ["maple", "apple", "oak", "crapemyrtle", "linden"],
    growthStages: ["vegetative", "dormant", "mature"],
    symptomLocations: ["cut stubs", "branch collars", "trunk", "pruning wounds"],
    symptomProgression:
      "Flush cuts, stubs, and torn bark fail to seal properly, leading to decay entering the trunk and weak watersprout regrowth over time.",
    observableSigns: [
      "Cuts made flush to the trunk or leaving long stubs fail to callus over and begin to decay.",
      "Topping cuts trigger dense clusters of weakly attached watersprouts below the cut.",
      "Torn bark strips hang below improperly cut branches, exposing wood to rot.",
    ],
    favorableConditions: [
      "Cutting outside the branch collar, leaving stubs, or topping trees.",
      "Removing too much of the canopy at once or making tearing cuts without support.",
    ],
    lookalikes: [
      {
        condition: "Canker disease",
        differentiator:
          "A canker is a disease lesion that can form anywhere, while pruning-wound decay originates precisely at an improper cut.",
      },
      {
        condition: "Storm breakage",
        differentiator:
          "Storm breaks are jagged and random, whereas improper pruning wounds are clearly at deliberate but incorrectly placed cuts.",
      },
    ],
    immediateActions: [
      "Stop topping and flush-cutting and adopt proper cut placement just outside the branch collar.",
      "Cleanly recut ragged stubs back to the collar to promote proper sealing.",
    ],
    treatments: [
      {
        situation: "Existing bad cuts",
        treatment:
          "Recut stubs to the collar, thin excess watersprouts gradually, and keep the tree vigorous to wall off decay.",
      },
      {
        situation: "Future pruning",
        treatment:
          "Use the three-cut method on heavy limbs and prune at the correct time for the species.",
      },
    ],
    avoid: [
      "Do not top trees or make flush cuts, and do not apply wound paints that trap moisture.",
    ],
    recoveryTimeline:
      "Properly placed cuts seal over one to several seasons, while decay from bad cuts can progress for years.",
    prevention: [
      "Learn and use proper cut placement, timing, and the three-cut technique.",
      "Avoid topping and remove no more than a modest fraction of the canopy at once.",
    ],
    monitoringThresholds: [
      "Inspect wounds each year and re-evaluate if decay cavities or hazardous watersprouts develop.",
    ],
    escalationCriteria: [
      "Hire a certified arborist for large-limb removal, structural pruning, or when decay creates hazards.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/planting-and-growing-guides/pruning-trees-and-shrubs" },
      { label: "ISA Trees Are Good", url: "https://www.treesaregood.org/treeowner/pruningyourtrees" },
    ],
  },
  {
    id: "storm-branch-breakage",
    name: "Storm & Branch Breakage",
    category: "physical-injury",
    affectedPlants: ["trees-shrubs", "fruit-trees", "ornamentals"],
    specificHosts: ["silver maple", "Bradford pear", "willow", "pine", "birch"],
    growthStages: ["mature", "dormant"],
    symptomLocations: ["large branches", "trunk", "canopy", "branch unions"],
    symptomProgression:
      "Wind, ice, or snow loads split weak branch unions or snap limbs, leaving torn wood and hanging branches that pose hazards and decay entry points.",
    observableSigns: [
      "Large branches split or snap with jagged torn wood, often at narrow weak V-shaped unions.",
      "Hanging broken limbs and stripped bark remain in the canopy after a storm.",
      "Trees with included bark or codominant stems fail at the union under load.",
    ],
    favorableConditions: [
      "High winds, heavy wet snow, and ice accumulation loading brittle or poorly structured trees.",
      "Fast-growing weak-wooded species and trees with codominant stems or included bark.",
    ],
    lookalikes: [
      {
        condition: "Decay-related failure",
        differentiator:
          "Decay failure shows punky rotten wood at the break, while a fresh storm break exposes sound torn wood.",
      },
      {
        condition: "Lightning strike",
        differentiator:
          "Lightning leaves a long bark strip and splintered channel down the trunk, whereas storm breakage snaps branches at unions.",
      },
    ],
    immediateActions: [
      "Stay clear of downed and hanging limbs and power lines until the area is safe.",
      "Make clean cuts to remove broken and hanging branches back to sound wood or the collar.",
    ],
    treatments: [
      {
        situation: "Minor breakage",
        treatment:
          "Prune torn limbs cleanly to the branch collar so the wounds can seal properly.",
      },
      {
        situation: "Major structural failure",
        treatment:
          "Have a certified arborist assess and safely remove large broken limbs or hazardous trees.",
      },
    ],
    avoid: [
      "Do not attempt large or overhead limb removal or work near power lines yourself.",
    ],
    recoveryTimeline:
      "Trees with limited breakage recover over a few seasons, while major structural loss may warrant removal.",
    prevention: [
      "Establish good structure through young-tree pruning to reduce weak unions.",
      "Have hazardous or over-extended limbs professionally reduced before storm season.",
    ],
    monitoringThresholds: [
      "Inspect after storms and re-evaluate remaining unions and decay at break points.",
    ],
    escalationCriteria: [
      "Call a certified arborist immediately for large hanging limbs, split trunks, or trees near structures.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/planting-and-growing-guides/caring-storm-damaged-trees" },
      { label: "ISA Trees Are Good", url: "https://www.treesaregood.org/treeowner" },
    ],
  },
  {
    id: "construction-root-damage",
    name: "Construction Root Zone Damage",
    category: "physical-injury",
    affectedPlants: ["trees-shrubs", "ornamentals"],
    specificHosts: ["oak", "maple", "beech", "pine", "dogwood"],
    growthStages: ["mature", "vegetative"],
    symptomLocations: ["root zone", "whole canopy", "trunk base", "one side of crown"],
    symptomProgression:
      "Trenching, grade changes, and soil compaction from construction sever and suffocate roots, causing delayed canopy thinning, dieback, and decline over one to several years.",
    observableSigns: [
      "Canopy gradually thins with small leaves, early fall color, and tip dieback after nearby construction.",
      "Decline may be worst on the side where roots were trenched, cut, or buried under fill.",
      "Symptoms often appear a year or more after the disturbance rather than immediately.",
    ],
    favorableConditions: [
      "Excavation, grade changes, fill over roots, and heavy equipment compaction within the root zone.",
      "Digging within the critical root zone of established trees during building projects.",
    ],
    lookalikes: [
      {
        condition: "Drought decline",
        differentiator:
          "Drought symptoms track dry weather, while construction damage decline follows a disturbance and persists despite adequate watering.",
      },
      {
        condition: "Girdling roots",
        differentiator:
          "Girdling roots show a constricting root at the flare, whereas construction damage follows recent trenching, fill, or compaction.",
      },
    ],
    immediateActions: [
      "Stop further disturbance and fence off the remaining root zone from equipment and storage.",
      "Water and mulch the root zone to support the stressed tree during recovery.",
    ],
    treatments: [
      {
        situation: "After root loss",
        treatment:
          "Provide deep watering, a wide mulch ring, and light structural pruning while avoiding fertilizer stress.",
      },
      {
        situation: "Compaction and fill",
        treatment:
          "Have an arborist perform air-spade decompaction or fill removal to restore aeration over roots.",
      },
    ],
    avoid: [
      "Do not add soil fill over roots, pave the root zone, or park equipment under the canopy.",
    ],
    recoveryTimeline:
      "Trees with limited root loss stabilize over two to four years, while extensive root loss often leads to decline and removal.",
    prevention: [
      "Establish and fence a tree-protection zone before construction begins.",
      "Route trenching, storage, and traffic away from the critical root zone.",
    ],
    monitoringThresholds: [
      "Monitor canopy density yearly and re-evaluate if dieback progresses despite care.",
    ],
    escalationCriteria: [
      "Engage a certified arborist for a hazard and health assessment when a large tree declines after construction.",
    ],
    sources: [
      { label: "Purdue Extension", url: "https://www.purdue.edu/fnr/extension/" },
      { label: "ISA Trees Are Good", url: "https://www.treesaregood.org/treeowner/avoidingtreedamageduringconstruction" },
    ],
  },

  // ===================== transplant-shock (~5) =====================
  {
    id: "transplant-shock-seedlings",
    name: "Transplant Shock (Seedlings)",
    category: "transplant-shock",
    affectedPlants: ["vegetable-garden", "ornamentals", "herbs"],
    specificHosts: ["tomato seedling", "pepper seedling", "marigold", "lettuce", "basil"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["whole plant", "new growth", "lower leaves"],
    symptomProgression:
      "Freshly set-out seedlings wilt, stall, and may lose lower leaves for several days before roots reestablish and normal growth resumes.",
    observableSigns: [
      "Seedlings wilt and look limp for a few days after transplanting even in moist soil.",
      "Growth pauses and lower leaves may yellow while the plant reestablishes roots.",
      "Un-hardened seedlings may show sun and wind scorch on their tender leaves.",
    ],
    favorableConditions: [
      "Setting out seedlings without hardening off, during hot sun, or with disturbed roots.",
      "Root damage during handling and abrupt change from sheltered indoor conditions.",
    ],
    lookalikes: [
      {
        condition: "Damping-off disease",
        differentiator:
          "Damping-off collapses seedlings at the soil line from pathogens, while transplant shock is temporary wilting that recovers with care.",
      },
      {
        condition: "Nutrient deficiency",
        differentiator:
          "Deficiency develops gradually with characteristic patterns, whereas transplant shock appears right after moving and resolves in days.",
      },
    ],
    immediateActions: [
      "Water in transplants gently and shade them from harsh sun for the first few days.",
      "Protect new transplants from wind while roots reestablish.",
    ],
    treatments: [
      {
        situation: "Wilting transplants",
        treatment:
          "Keep soil evenly moist, provide temporary shade, and hold off on fertilizing until growth resumes.",
      },
      {
        situation: "Preventive handling",
        treatment:
          "Harden off seedlings over a week and transplant on a cloudy day or in the evening.",
      },
    ],
    avoid: [
      "Do not transplant tender un-hardened seedlings into full midday sun and wind.",
    ],
    recoveryTimeline:
      "Well-tended seedlings recover and resume growth within three to seven days after transplanting.",
    prevention: [
      "Harden off seedlings gradually and disturb roots as little as possible.",
      "Transplant in cool cloudy conditions and water in thoroughly.",
    ],
    monitoringThresholds: [
      "Re-evaluate if seedlings fail to perk up after a week or continue declining.",
    ],
    escalationCriteria: [
      "Investigate disease or root damage if seedlings collapse rather than gradually recovering.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/planting-and-growing-guides/starting-seeds-indoors" },
      { label: "Oregon State University Extension", url: "https://extension.oregonstate.edu/gardening/techniques" },
    ],
  },
  {
    id: "transplant-shock-trees-shrubs",
    name: "Transplant Shock (Trees & Shrubs)",
    category: "transplant-shock",
    affectedPlants: ["trees-shrubs", "ornamentals", "fruit-trees"],
    specificHosts: ["oak", "maple", "dogwood", "arborvitae", "apple"],
    growthStages: ["vegetative", "mature", "dormant"],
    symptomLocations: ["whole canopy", "leaf margins", "new growth", "outer foliage"],
    symptomProgression:
      "A newly planted tree leafs out weakly, scorches at leaf margins, drops leaves, and grows little for one to several seasons while the root system reestablishes.",
    observableSigns: [
      "The newly planted tree shows small leaves, marginal scorch, and sparse growth in the first seasons.",
      "Leaf wilting and scorch appear during heat because the reduced root system cannot supply the canopy.",
      "Little shoot extension occurs while the plant invests in root reestablishment.",
    ],
    favorableConditions: [
      "Root loss from digging balled-and-burlapped stock and planting into hot dry conditions.",
      "Improper planting depth, poor backfill, or inadequate watering after planting.",
    ],
    lookalikes: [
      {
        condition: "Girdling or circling roots",
        differentiator:
          "Girdling roots cause one-sided decline years later, while transplant shock is generalized weak establishment right after planting.",
      },
      {
        condition: "Drought scorch",
        differentiator:
          "Drought scorch tracks dry weather, whereas transplant shock persists across conditions until roots reestablish.",
      },
    ],
    immediateActions: [
      "Water deeply and regularly and apply a wide mulch ring to conserve moisture.",
      "Confirm the tree is planted at the correct depth with the root flare exposed.",
    ],
    treatments: [
      {
        situation: "First seasons after planting",
        treatment:
          "Provide consistent deep watering, mulch, and patience while avoiding heavy fertilization.",
      },
      {
        situation: "Poor planting",
        treatment:
          "Correct planting depth and remove wire, twine, and burlap to allow roots to grow out.",
      },
    ],
    avoid: [
      "Do not overfertilize or overprune a newly planted tree while it is reestablishing roots.",
    ],
    recoveryTimeline:
      "Establishment commonly takes one year per inch of trunk diameter before vigorous growth resumes.",
    prevention: [
      "Plant at the right depth and time, and water consistently through establishment.",
      "Choose appropriately sized stock and correct any circling roots at planting.",
    ],
    monitoringThresholds: [
      "Re-evaluate if the tree shows progressive dieback rather than gradual establishment over two to three seasons.",
    ],
    escalationCriteria: [
      "Consult an arborist if a newly planted tree continues declining despite proper planting and watering.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/planting-and-growing-guides/planting-trees-and-shrubs" },
      { label: "ISA Trees Are Good", url: "https://www.treesaregood.org/treeowner/plantingatree" },
    ],
  },
  {
    id: "repotting-shock-houseplants",
    name: "Repotting Shock (Houseplants)",
    category: "transplant-shock",
    affectedPlants: ["houseplants", "succulents-cacti"],
    specificHosts: ["peace lily", "pothos", "fiddle-leaf fig", "snake plant", "monstera"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["whole plant", "lower leaves", "new growth"],
    symptomProgression:
      "A freshly repotted houseplant droops, drops a few leaves, and pauses growth for a week or two before adjusting to its new pot and mix.",
    observableSigns: [
      "The plant droops and looks sulky for one to two weeks after repotting.",
      "A few lower or older leaves may yellow and drop as the plant adjusts.",
      "Growth stalls temporarily while roots settle into the new medium.",
    ],
    favorableConditions: [
      "Root disturbance, jumping to a much larger pot, or changing soil type abruptly.",
      "Repotting during dormancy or immediately exposing the plant to bright light or drafts.",
    ],
    lookalikes: [
      {
        condition: "Overwatering root rot",
        differentiator:
          "Overwatering in a too-large pot rots roots over time with mushy stems, while repotting shock is brief adjustment that recovers.",
      },
      {
        condition: "Cold shock",
        differentiator:
          "Cold shock follows a chill event with sudden leaf drop, whereas repotting shock follows the repotting and is milder.",
      },
    ],
    immediateActions: [
      "Keep the plant in stable moderate light and avoid drafts while it settles.",
      "Water appropriately for the new mix without overwatering the fresh soil.",
    ],
    treatments: [
      {
        situation: "Recently repotted plants",
        treatment:
          "Maintain consistent care, hold off on fertilizing for a few weeks, and let the plant recover naturally.",
      },
      {
        situation: "Preventive repotting",
        treatment:
          "Move up only one pot size, repot in the growing season, and disturb roots minimally.",
      },
    ],
    avoid: [
      "Do not fertilize immediately after repotting or overpot into a container far too large.",
    ],
    recoveryTimeline:
      "Most houseplants adjust and resume growth within one to three weeks after repotting.",
    prevention: [
      "Repot during active growth and increase pot size only modestly.",
      "Handle roots gently and keep conditions stable after repotting.",
    ],
    monitoringThresholds: [
      "Re-evaluate if decline continues beyond a few weeks or roots show rot in the new pot.",
    ],
    escalationCriteria: [
      "Inspect roots and address root rot if the plant keeps declining and the mix stays soggy.",
    ],
    sources: [
      { label: "University of Maryland Extension", url: "https://extension.umd.edu/resource/repotting-houseplants/" },
      { label: "RHS", url: "https://www.rhs.org.uk/houseplants" },
    ],
  },
  {
    id: "bare-root-establishment-shock",
    name: "Bare-Root Plant Establishment Shock",
    category: "transplant-shock",
    affectedPlants: ["fruit-trees", "trees-shrubs", "berries", "ornamentals"],
    specificHosts: ["bare-root apple", "raspberry cane", "rose", "asparagus crown", "strawberry"],
    growthStages: ["dormant", "seed-seedling", "vegetative"],
    symptomLocations: ["whole plant", "new shoots", "buds"],
    symptomProgression:
      "Bare-root stock planted while dormant may leaf out slowly, unevenly, or partially, and some canes fail to break bud as roots rehydrate and establish.",
    observableSigns: [
      "Bare-root plants leaf out later and more slowly than established plants nearby.",
      "Some buds or canes fail to break, and initial growth is weak while roots reestablish.",
      "Roots that dried out before planting show poor or one-sided leaf-out.",
    ],
    favorableConditions: [
      "Roots allowed to dry before planting, planting too late, or poor soil contact.",
      "Late delivery breaking dormancy in transit, or planting into dry unprepared soil.",
    ],
    lookalikes: [
      {
        condition: "Dead nursery stock",
        differentiator:
          "Dead stock has dry brittle wood and no green cambium, while shocked but living stock has green cambium and eventually pushes buds.",
      },
      {
        condition: "Graft failure",
        differentiator:
          "Graft failure shows growth only from the rootstock below the union, whereas establishment shock delays growth from the intended scion.",
      },
    ],
    immediateActions: [
      "Soak bare-root plants before planting and keep roots moist until they are in the ground.",
      "Water in thoroughly and keep soil evenly moist as the plant establishes.",
    ],
    treatments: [
      {
        situation: "Slow-establishing stock",
        treatment:
          "Keep soil moist, be patient through the first season, and check the cambium for green living tissue.",
      },
      {
        situation: "Preventive planting",
        treatment:
          "Plant promptly while dormant, soak roots first, and firm soil around them to eliminate air pockets.",
      },
    ],
    avoid: [
      "Do not let bare roots dry out or plant them into dry unprepared soil.",
    ],
    recoveryTimeline:
      "Living bare-root plants usually leaf out within a few weeks to two months and grow more strongly the next season.",
    prevention: [
      "Soak and plant bare-root stock promptly while fully dormant.",
      "Keep roots moist and ensure good soil contact and consistent watering.",
    ],
    monitoringThresholds: [
      "Check cambium color and re-evaluate if no buds break within a couple of months of planting.",
    ],
    escalationCriteria: [
      "Contact the nursery about replacement if stock shows no green cambium and fails to establish.",
    ],
    sources: [
      { label: "Oregon State University Extension", url: "https://extension.oregonstate.edu/gardening/techniques" },
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/planting-and-growing-guides/planting-trees-and-shrubs" },
    ],
  },
  {
    id: "division-shock-perennials",
    name: "Division Shock (Perennials)",
    category: "transplant-shock",
    affectedPlants: ["ornamentals", "herbs", "houseplants"],
    specificHosts: ["hosta", "daylily", "ornamental grass", "iris", "chives"],
    growthStages: ["vegetative", "dormant"],
    symptomLocations: ["whole plant", "foliage", "new growth"],
    symptomProgression:
      "Freshly divided perennials wilt, show reduced flowering, and grow modestly the first season as the reduced root system supports the reestablishing division.",
    observableSigns: [
      "Divisions wilt and look sparse for a week or more after being split and replanted.",
      "Flowering is reduced or skipped the first season while the plant rebuilds roots.",
      "Some outer foliage may brown as the division balances its top growth with fewer roots.",
    ],
    favorableConditions: [
      "Dividing during hot weather, poor watering after division, or making very small divisions.",
      "Excess top growth relative to remaining roots after splitting.",
    ],
    lookalikes: [
      {
        condition: "Crown rot",
        differentiator:
          "Crown rot mushes the base with foul rot, while division shock is temporary wilting that recovers with care.",
      },
      {
        condition: "Drought stress",
        differentiator:
          "Drought wilt tracks dry soil, whereas division shock follows the recent splitting and resolves as roots reestablish.",
      },
    ],
    immediateActions: [
      "Water divisions in well and keep the soil evenly moist as they reestablish.",
      "Trim back excess foliage to balance the top with the reduced root system.",
    ],
    treatments: [
      {
        situation: "Recently divided perennials",
        treatment:
          "Provide shade in heat, keep soil moist, and delay heavy feeding until new growth resumes.",
      },
      {
        situation: "Preventive division",
        treatment:
          "Divide in cool spring or fall, keep generous root portions, and replant promptly.",
      },
    ],
    avoid: [
      "Do not divide during hot dry weather or leave divisions with roots exposed to air.",
    ],
    recoveryTimeline:
      "Divisions typically reestablish within a few weeks and grow vigorously by the next season.",
    prevention: [
      "Divide during cool weather and keep generously sized divisions.",
      "Replant promptly and water consistently through establishment.",
    ],
    monitoringThresholds: [
      "Re-evaluate if divisions continue to decline beyond a few weeks or the crown softens.",
    ],
    escalationCriteria: [
      "Inspect for crown or root rot if divisions collapse rather than gradually recovering.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/planting-and-growing-guides/dividing-perennials" },
      { label: "Missouri Botanical Garden", url: "https://www.missouribotanicalgarden.org/gardens-gardening/your-garden/help-for-the-home-gardener" },
    ],
  },

  // ===================== flowering-pollination (~9) =====================
  {
    id: "blossom-drop-tomato-heat",
    name: "Blossom Drop (Tomato & Pepper Heat Stress)",
    category: "flowering-pollination",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["tomato", "pepper", "eggplant", "snap bean"],
    growthStages: ["flowering", "fruiting"],
    symptomLocations: ["flowers", "flower clusters", "pedicels"],
    symptomProgression:
      "Flowers open normally but the pedicel develops an abscission layer and the blossoms yellow and drop without setting fruit during temperature extremes.",
    observableSigns: [
      "Open flowers yellow and drop from the plant without setting any fruit.",
      "Blossom drop coincides with daytime temperatures above the low nineties or hot nights above the mid-seventies.",
      "The plant looks otherwise healthy and vigorous but simply fails to set fruit.",
    ],
    favorableConditions: [
      "Daytime heat above roughly ninety-two degrees or night temperatures staying above the mid-seventies.",
      "Very high or very low humidity, drought stress, or excessive nitrogen at flowering.",
    ],
    lookalikes: [
      {
        condition: "Poor pollination from low activity",
        differentiator:
          "Low pollinator activity leaves flowers unfertilized in cool weather, while heat-driven blossom drop occurs specifically during temperature extremes.",
      },
      {
        condition: "Excess nitrogen delaying fruit",
        differentiator:
          "Excess nitrogen produces lush foliage with few flowers, whereas heat blossom drop sheds otherwise normal open flowers.",
      },
    ],
    immediateActions: [
      "Keep plants evenly watered and mulched to reduce compounding drought stress during heat.",
      "Provide afternoon shade cloth over plants during extreme heat waves.",
    ],
    treatments: [
      {
        situation: "Hot climates",
        treatment:
          "Grow heat-set tolerant cultivars bred to set fruit under high temperatures.",
      },
      {
        situation: "During heat waves",
        treatment:
          "Use shade cloth, maintain steady moisture, and avoid excess nitrogen while waiting for cooler weather to resume set.",
      },
    ],
    avoid: [
      "Do not overfeed nitrogen at flowering, which favors foliage over fruit set.",
    ],
    recoveryTimeline:
      "Fruit set resumes within one to two weeks once temperatures moderate into the tolerable range.",
    prevention: [
      "Choose heat-tolerant cultivars and time plantings so flowering avoids peak heat.",
      "Maintain even moisture, mulch, and balanced fertility through the flowering period.",
    ],
    monitoringThresholds: [
      "Track temperatures and re-evaluate cultivar choice if blossom drop recurs every summer.",
    ],
    escalationCriteria: [
      "Consult extension variety guidance if a garden consistently fails to set fruit in local summer heat.",
    ],
    sources: [
      { label: "Texas A&M AgriLife Extension", url: "https://agrilifeextension.tamu.edu/" },
      { label: "University of Florida IFAS Extension", url: "https://edis.ifas.ufl.edu/" },
    ],
  },
  {
    id: "poor-pollination-cucurbits",
    name: "Poor Pollination in Cucurbits",
    category: "flowering-pollination",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["zucchini", "cucumber", "winter squash", "pumpkin", "melon"],
    growthStages: ["flowering", "fruiting"],
    symptomLocations: ["young fruit", "female flowers", "fruit tips"],
    symptomProgression:
      "Female flowers open but the small fruit behind them yellows, shrivels, and rots at the tip instead of enlarging when pollination is incomplete.",
    observableSigns: [
      "Young fruits start to form then turn yellow, shrivel, and rot from the blossom end.",
      "Plants produce many flowers but few fruit fully develop and set.",
      "Male flowers may bloom first, and few bees are seen visiting the flowers.",
    ],
    favorableConditions: [
      "Low bee activity from cool wet weather, insecticide use, or lack of nearby pollinators.",
      "Excessive heat, or early-season imbalance of male and female flowers.",
    ],
    lookalikes: [
      {
        condition: "Blossom-end rot",
        differentiator:
          "Blossom-end rot is a calcium-related dark leathery lesion on otherwise growing fruit, while poor pollination causes small fruit to yellow and abort entirely.",
      },
      {
        condition: "Choanephora fruit rot",
        differentiator:
          "Choanephora shows fuzzy gray fungal growth on the aborting flower, whereas simple poor pollination shrivels fruit without heavy fungal growth.",
      },
    ],
    immediateActions: [
      "Hand-pollinate by transferring pollen from male to female flowers in the morning.",
      "Reduce or avoid insecticide use during bloom to protect pollinators.",
    ],
    treatments: [
      {
        situation: "Low pollinator activity",
        treatment:
          "Plant pollinator-attracting flowers nearby and hand-pollinate to ensure fruit set.",
      },
      {
        situation: "Row-covered plantings",
        treatment:
          "Remove row covers at flowering so bees can access the flowers, or hand-pollinate under cover.",
      },
    ],
    avoid: [
      "Do not spray insecticides on open flowers, which harms the pollinators you need.",
    ],
    recoveryTimeline:
      "Successful pollination sets fruit that enlarges within days, and set improves quickly with better pollinator access.",
    prevention: [
      "Encourage pollinators with diverse flowering plants and minimal pesticide use.",
      "Remove row covers during bloom and hand-pollinate when bee activity is low.",
    ],
    monitoringThresholds: [
      "Re-evaluate pollination if most young fruit continues aborting despite hand-pollination.",
    ],
    escalationCriteria: [
      "Investigate disease or environmental causes if fruit keeps aborting even with confirmed pollination.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/vegetables/growing-squash-and-pumpkins" },
      { label: "Cornell Cooperative Extension", url: "https://gardening.cals.cornell.edu/" },
    ],
  },
  {
    id: "no-blooms-excess-nitrogen",
    name: "Few or No Blooms from Excess Nitrogen",
    category: "flowering-pollination",
    affectedPlants: ["ornamentals", "vegetable-garden", "fruit-trees", "berries"],
    specificHosts: ["tomato", "rose", "wisteria", "hydrangea", "pepper"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["whole plant", "shoots", "foliage"],
    symptomProgression:
      "The plant produces abundant lush green leafy growth at the expense of flowers, delaying or preventing bloom while nitrogen remains high.",
    observableSigns: [
      "The plant is lush, leafy, and dark green but produces very few or no flowers.",
      "Vigorous vegetative shoots dominate while flower buds are scarce.",
      "The problem often follows heavy feeding with high-nitrogen or lawn fertilizer.",
    ],
    favorableConditions: [
      "Over-application of nitrogen fertilizer or runoff from adjacent high-nitrogen lawn feeding.",
      "Using lawn or high-nitrogen products on flowering plants that need balanced nutrition.",
    ],
    lookalikes: [
      {
        condition: "Photoperiod or immaturity",
        differentiator:
          "A too-young or wrong-daylength plant simply is not ready to bloom, while excess nitrogen drives lush foliage and suppresses buds despite maturity.",
      },
      {
        condition: "Insufficient light",
        differentiator:
          "Low light limits blooming with weaker growth, whereas excess nitrogen produces vigorous dark leafy growth without flowers.",
      },
    ],
    immediateActions: [
      "Stop applying nitrogen fertilizer to the affected plants immediately.",
      "Switch to a balanced or bloom-oriented fertilizer with lower nitrogen going forward.",
    ],
    treatments: [
      {
        situation: "Overfed ornamentals",
        treatment:
          "Withhold nitrogen and use a phosphorus-adequate balanced feed to encourage a return to flowering.",
      },
      {
        situation: "Vegetables",
        treatment:
          "Reduce nitrogen and maintain balanced fertility so plants shift energy from leaves to fruit set.",
      },
    ],
    avoid: [
      "Do not feed flowering plants with lawn or high-nitrogen fertilizers.",
    ],
    recoveryTimeline:
      "Plants typically resume flowering later the same season or the next once nitrogen levels drop.",
    prevention: [
      "Fertilize flowering plants with balanced formulas at appropriate rates.",
      "Keep lawn fertilizer off garden and ornamental beds.",
    ],
    monitoringThresholds: [
      "Re-evaluate fertility if lush growth continues without bud formation after cutting nitrogen.",
    ],
    escalationCriteria: [
      "Consider a soil test if excess nutrients persist and blooming does not recover.",
    ],
    sources: [
      { label: "RHS", url: "https://www.rhs.org.uk/plants/features/why-plants-dont-flower" },
      { label: "Clemson Cooperative Extension", url: "https://hgic.clemson.edu/" },
    ],
  },
  {
    id: "biennial-bearing-fruit-trees",
    name: "Biennial Bearing (Alternate Bearing) in Fruit Trees",
    category: "flowering-pollination",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["apple", "pear", "plum", "citrus", "olive"],
    growthStages: ["flowering", "fruiting", "mature"],
    symptomLocations: ["whole tree", "flower buds", "fruiting spurs"],
    symptomProgression:
      "A heavy crop one year suppresses flower-bud formation for the next, so the tree alternates between a heavy on year and a light or bloomless off year.",
    observableSigns: [
      "The tree bears a very heavy crop one year and little to none the following year.",
      "Flower-bud numbers are sparse in the year following a heavy fruit load.",
      "The alternating pattern repeats over successive seasons once established.",
    ],
    favorableConditions: [
      "Heavy fruit set that diverts resources away from forming next year's flower buds.",
      "Failure to thin fruit and certain cultivars naturally prone to alternation.",
    ],
    lookalikes: [
      {
        condition: "Frost damage to blossoms",
        differentiator:
          "Spring frost kills blossoms in a single year with visible damage, while biennial bearing is a repeating pattern tied to the prior crop load.",
      },
      {
        condition: "Poor pollination or lack of pollinizer",
        differentiator:
          "Missing a compatible pollinizer causes consistent poor set every year, whereas biennial bearing alternates with crop load.",
      },
    ],
    immediateActions: [
      "Thin fruit early in the on year to reduce the excessive load that suppresses next year's buds.",
      "Ensure the tree is well watered and fed to support both crop and bud formation.",
    ],
    treatments: [
      {
        situation: "On years",
        treatment:
          "Thin fruit heavily and early so the tree can also set flower buds for the following year.",
      },
      {
        situation: "Chronic alternation",
        treatment:
          "Combine consistent thinning, proper pruning, and good nutrition over several years to even out cropping.",
      },
    ],
    avoid: [
      "Do not leave a heavy crop unthinned, which locks the tree into the alternate-bearing cycle.",
    ],
    recoveryTimeline:
      "Consistent early thinning can gradually moderate the cycle over two to three seasons.",
    prevention: [
      "Thin fruit early and consistently every season and prune to maintain balance.",
      "Choose less alternation-prone cultivars where possible.",
    ],
    monitoringThresholds: [
      "Assess fruit set at thinning time each year and adjust thinning to balance the load.",
    ],
    escalationCriteria: [
      "Consult extension orchard resources if alternation remains severe despite thinning and good culture.",
    ],
    sources: [
      { label: "Washington State University Tree Fruit", url: "https://treefruit.wsu.edu/" },
      { label: "RHS", url: "https://www.rhs.org.uk/fruit/apples/biennial-bearing" },
    ],
  },
  {
    id: "bud-blast-orchid-peony",
    name: "Bud Blast (Orchids & Peonies)",
    category: "flowering-pollination",
    affectedPlants: ["houseplants", "ornamentals"],
    specificHosts: ["phalaenopsis orchid", "peony", "gardenia", "camellia"],
    growthStages: ["flowering"],
    symptomLocations: ["flower buds", "bud tips", "spikes"],
    symptomProgression:
      "Developing flower buds yellow, brown, and dry up or drop before opening rather than progressing to full bloom.",
    observableSigns: [
      "Flower buds that had begun developing suddenly yellow, shrivel, and drop before opening.",
      "The plant otherwise looks healthy but simply fails to open its buds.",
      "Bud blast often follows a change in environment, watering, or temperature.",
    ],
    favorableConditions: [
      "Sudden environmental changes, temperature swings, drafts, low humidity, or inconsistent watering during budding.",
      "Moving plants, ethylene from ripening fruit, or over- or underwatering while buds develop.",
    ],
    lookalikes: [
      {
        condition: "Botrytis bud rot",
        differentiator:
          "Botrytis shows fuzzy gray mold and water-soaked rot on buds, while bud blast is a dry drop without heavy fungal growth.",
      },
      {
        condition: "Poor light preventing bloom",
        differentiator:
          "Insufficient light prevents buds from forming at all, whereas bud blast aborts buds that had already formed.",
      },
    ],
    immediateActions: [
      "Stabilize the plant's environment by keeping temperature, light, and watering consistent.",
      "Move the plant away from drafts, heat sources, and ripening fruit that emits ethylene.",
    ],
    treatments: [
      {
        situation: "Orchids in bud",
        treatment:
          "Keep the plant in stable conditions, avoid moving it, and maintain even moisture and humidity while spikes develop.",
      },
      {
        situation: "Peonies and shrubs",
        treatment:
          "Provide consistent watering and site plants where temperature and moisture stay steady during budding.",
      },
    ],
    avoid: [
      "Do not move budding plants around or expose them to drafts and temperature swings.",
    ],
    recoveryTimeline:
      "Blasted buds are lost, but stable care allows the next round of buds to open normally.",
    prevention: [
      "Maintain stable temperature, humidity, and watering while buds develop.",
      "Keep budding plants away from drafts, heat, and ethylene sources.",
    ],
    monitoringThresholds: [
      "Re-evaluate the environment if buds keep blasting on successive bloom cycles.",
    ],
    escalationCriteria: [
      "Investigate botrytis or pests if buds rot with fungal growth rather than dry-dropping.",
    ],
    sources: [
      { label: "American Orchid Society", url: "https://www.aos.org/orchids/orchid-care.aspx" },
      { label: "University of Illinois Extension", url: "https://extension.illinois.edu/flowers" },
    ],
  },
  {
    id: "failure-to-fruit-young-trees",
    name: "Failure to Fruit (Immature or Overvigorous Trees)",
    category: "flowering-pollination",
    affectedPlants: ["fruit-trees", "berries"],
    specificHosts: ["apple", "pear", "cherry", "blueberry", "citrus"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["whole tree", "shoots", "fruiting wood"],
    symptomProgression:
      "A young or overly vigorous tree grows strongly but delays flowering and fruiting for years until it reaches bearing age and vegetative vigor calms.",
    observableSigns: [
      "A young tree grows vigorously with lush shoots but produces few or no flowers.",
      "Excessive watersprout and vegetative growth dominate over fruiting spur development.",
      "The tree has simply not yet reached its typical age of first bearing.",
    ],
    favorableConditions: [
      "Youthful vigor, heavy nitrogen, or heavy pruning that pushes vegetative growth over fruiting.",
      "Vigorous rootstocks and overpruning stimulating leafy growth.",
    ],
    lookalikes: [
      {
        condition: "Frost-killed blossoms",
        differentiator:
          "Frost damage kills flowers that did form in a given year, while failure to fruit is a lack of flowering due to immaturity or vigor.",
      },
      {
        condition: "Lack of a pollinizer",
        differentiator:
          "Missing a compatible pollinizer prevents set on flowers that do open, whereas overvigorous trees produce few flowers to begin with.",
      },
    ],
    immediateActions: [
      "Reduce nitrogen feeding and avoid heavy dormant pruning that stimulates vegetative growth.",
      "Confirm the tree has reached the expected bearing age for its type and rootstock.",
    ],
    treatments: [
      {
        situation: "Overvigorous trees",
        treatment:
          "Use summer pruning, limb spreading, or bending to slow vigor and encourage flower-bud formation.",
      },
      {
        situation: "Young trees",
        treatment:
          "Be patient and maintain balanced culture until the tree reaches its natural bearing age.",
      },
    ],
    avoid: [
      "Do not overfeed nitrogen or heavily head-prune, which delays fruiting further.",
    ],
    recoveryTimeline:
      "Trees begin bearing once mature, often several years for tree fruit, sooner as vigor is moderated.",
    prevention: [
      "Manage nitrogen and pruning to balance growth and fruiting.",
      "Choose appropriate rootstocks and use limb spreading to encourage early bearing.",
    ],
    monitoringThresholds: [
      "Re-evaluate culture if a tree well past bearing age still produces no flowers.",
    ],
    escalationCriteria: [
      "Consult orchard extension if a mature tree continues to fail to flower despite balanced management.",
    ],
    sources: [
      { label: "Washington State University Tree Fruit", url: "https://treefruit.wsu.edu/" },
      { label: "University of Maine Cooperative Extension", url: "https://extension.umaine.edu/gardening/" },
    ],
  },
  {
    id: "premature-fruit-drop",
    name: "Premature Fruit Drop",
    category: "flowering-pollination",
    affectedPlants: ["fruit-trees", "vegetable-garden", "berries"],
    specificHosts: ["apple", "citrus", "peach", "tomato", "plum"],
    growthStages: ["fruiting"],
    symptomLocations: ["young fruit", "fruit stems", "whole tree"],
    symptomProgression:
      "Small immature fruit yellows and abscises and drops from the plant weeks before maturity, sometimes as a natural June drop or from stress.",
    observableSigns: [
      "Numerous small immature fruits drop to the ground well before ripening.",
      "Fruit stems form an abscission layer and release, often after a natural set surge.",
      "Drop may spike during heat, drought, or after a heavy set as the plant self-thins.",
    ],
    favorableConditions: [
      "Natural self-thinning like apple June drop, plus drought, heat, nutrient stress, or poor pollination.",
      "Erratic watering, extreme temperatures, or a very heavy initial fruit set.",
    ],
    lookalikes: [
      {
        condition: "Codling moth or pest-caused drop",
        differentiator:
          "Pest-caused drop shows entry holes or larvae inside the fruit, while stress or natural drop shows clean fruit without pest damage.",
      },
      {
        condition: "Poor pollination abortion",
        differentiator:
          "Unpollinated fruit drops very small right after bloom, whereas premature drop sheds somewhat larger developing fruit later.",
      },
    ],
    immediateActions: [
      "Maintain even soil moisture with deep watering and mulch to reduce stress-related drop.",
      "Check dropped fruit for pest entry holes to rule out insect causes.",
    ],
    treatments: [
      {
        situation: "Stress-related drop",
        treatment:
          "Provide consistent watering and balanced nutrition and protect from extreme heat swings.",
      },
      {
        situation: "Natural heavy set",
        treatment:
          "Accept some natural drop as self-thinning and hand-thin remaining fruit for size and quality.",
      },
    ],
    avoid: [
      "Do not let plants swing between drought and saturation, which aggravates fruit drop.",
    ],
    recoveryTimeline:
      "Drop from a given stress subsides within a week or two once conditions stabilize, and remaining fruit matures.",
    prevention: [
      "Keep soil moisture even and nutrition balanced through fruit development.",
      "Manage pollination and pests and expect some natural self-thinning.",
    ],
    monitoringThresholds: [
      "Re-evaluate irrigation and pests if drop remains heavy beyond the natural self-thinning window.",
    ],
    escalationCriteria: [
      "Investigate pests or disease with extension help if excessive drop continues despite good culture.",
    ],
    sources: [
      { label: "UC IPM", url: "https://ipm.ucanr.edu/home-and-landscape/" },
      { label: "RHS", url: "https://www.rhs.org.uk/problems/fruit-and-vegetable-problems" },
    ],
  },
  {
    id: "poor-pollination-cool-weather",
    name: "Poor Fruit Set from Cool-Weather Pollination Failure",
    category: "flowering-pollination",
    affectedPlants: ["fruit-trees", "berries", "vegetable-garden"],
    specificHosts: ["apple", "blueberry", "strawberry", "cherry", "tomato"],
    growthStages: ["flowering"],
    symptomLocations: ["flowers", "young fruit", "flower clusters"],
    symptomProgression:
      "Flowers bloom during cold wet weather when pollinators are inactive, so many go unpollinated and fail to set, producing few or misshapen fruit.",
    observableSigns: [
      "Abundant bloom is followed by little fruit set during a cold or rainy flowering period.",
      "Few bees are active because temperatures are too cool for foraging during bloom.",
      "Fruit that does set may be small or misshapen from incomplete pollination.",
    ],
    favorableConditions: [
      "Cold, wet, or windy weather during bloom that suppresses bee flight and pollen transfer.",
      "Lack of compatible pollinizers or few pollinators near the plants.",
    ],
    lookalikes: [
      {
        condition: "Frost-killed blossoms",
        differentiator:
          "Frost blackens and kills the flowers outright, while cool-weather pollination failure leaves flowers intact but unpollinated.",
      },
      {
        condition: "Heat-driven blossom drop",
        differentiator:
          "Heat blossom drop occurs during high temperatures, whereas this failure occurs specifically during cold wet bloom weather.",
      },
    ],
    immediateActions: [
      "Hand-pollinate open flowers with a small brush during cool spells to improve set.",
      "Protect early bloomers from cold and wind to extend the effective pollination window.",
    ],
    treatments: [
      {
        situation: "Home orchards",
        treatment:
          "Plant compatible pollinizer varieties nearby and encourage pollinators with diverse flowering plants.",
      },
      {
        situation: "Cool bloom seasons",
        treatment:
          "Hand-pollinate and use row covers strategically, removing them so pollinators can access flowers when warm.",
      },
    ],
    avoid: [
      "Do not apply insecticides during bloom, which further reduces already limited pollinator activity.",
    ],
    recoveryTimeline:
      "Set improves quickly when warmer weather returns during the remaining bloom, but a short bloom may yield a light crop that year.",
    prevention: [
      "Provide compatible pollinizers and support healthy pollinator populations.",
      "Select bloom-timing and site to reduce exposure to cold wet weather at flowering.",
    ],
    monitoringThresholds: [
      "Re-evaluate pollinizer and pollinator support if poor set recurs across seasons.",
    ],
    escalationCriteria: [
      "Consult extension on pollinizer compatibility if a mature tree consistently sets poorly.",
    ],
    sources: [
      { label: "Michigan State University Extension", url: "https://www.canr.msu.edu/fruit/" },
      { label: "Oregon State University Extension", url: "https://extension.oregonstate.edu/gardening/fruit" },
    ],
  },
  {
    id: "catfacing-poor-pollination-tomato",
    name: "Catfacing & Misshapen Fruit (Cold at Flowering)",
    category: "flowering-pollination",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["tomato", "pepper", "strawberry"],
    growthStages: ["flowering", "fruiting"],
    symptomLocations: ["blossom end of fruit", "fruit surface", "young fruit"],
    symptomProgression:
      "Cold or disruptive conditions during flower formation distort the developing fruit, producing scarring, puckering, and cavities at the blossom end as it matures.",
    observableSigns: [
      "Fruit develops deep puckers, scars, holes, and lobed distortion at the blossom end.",
      "Distortion traces back to cool temperatures or stress during flower development.",
      "Otherwise healthy plants produce a mix of normal and severely misshapen fruit.",
    ],
    favorableConditions: [
      "Cool temperatures below roughly fifty-five degrees during flower formation, disrupting normal development.",
      "Large-fruited heirloom types and stresses like herbicide exposure at flowering.",
    ],
    lookalikes: [
      {
        condition: "Blossom-end rot",
        differentiator:
          "Blossom-end rot is a dark sunken leathery lesion from calcium issues, while catfacing is physical scarring and puckering of the fruit shape.",
      },
      {
        condition: "Herbicide-distorted fruit",
        differentiator:
          "Herbicide injury also distorts new leaves with strap-like growth, whereas cold catfacing distorts only fruit set during a cold period.",
      },
    ],
    immediateActions: [
      "Protect early flowers from cold with row covers to prevent distortion of the set.",
      "Delay setting out warm-season plants until nights are reliably warm.",
    ],
    treatments: [
      {
        situation: "Cool spring plantings",
        treatment:
          "Use protection during cool nights and grow smoother modern cultivars less prone to catfacing.",
      },
      {
        situation: "Ongoing distortion",
        treatment:
          "Ensure the cause is cold rather than herbicide by checking whether new foliage is also distorted.",
      },
    ],
    avoid: [
      "Do not expose flowering plants to cold nights that disrupt normal fruit formation.",
    ],
    recoveryTimeline:
      "Fruit that forms in warmer conditions develops normally, so later harvests improve as temperatures rise.",
    prevention: [
      "Plant after nights warm and protect early flowers from cold snaps.",
      "Choose cultivars less susceptible to catfacing.",
    ],
    monitoringThresholds: [
      "Re-evaluate if distortion continues on fruit set during warm weather, suggesting another cause.",
    ],
    escalationCriteria: [
      "Investigate herbicide exposure if new leaves are also distorted alongside the fruit.",
    ],
    sources: [
      { label: "University of Minnesota Extension", url: "https://extension.umn.edu/diseases/tomato-fruit-problems" },
      { label: "Missouri Botanical Garden", url: "https://www.missouribotanicalgarden.org/gardens-gardening/your-garden/help-for-the-home-gardener" },
    ],
  },
];
