import type { PlantProblemProfile } from "../schema";

export const nutrientDeficiencyProfiles: PlantProblemProfile[] = [
  // ---------------------------------------------------------------------------
  // NITROGEN (N) — mobile nutrient; deficiency shows first on old/lower leaves
  // ---------------------------------------------------------------------------
  {
    id: "nitrogen-deficiency-leafy-vegetables",
    name: "Nitrogen Deficiency (Leafy Vegetables)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Lettuce", "Spinach", "Kale", "Swiss chard", "Cabbage"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["lower/older leaves", "whole plant", "overall canopy"],
    symptomProgression:
      "A uniform pale-green cast begins on the oldest leaves and spreads upward as nitrogen is remobilized to new growth, with plants becoming stunted and slow to fill in over two to three weeks.",
    observableSigns: [
      "Older, lower leaves turn a uniform pale green to yellow while veins and blade fade together rather than in a mottled pattern.",
      "Overall growth is stunted with thin stems, small leaves, and a spindly, upright habit lacking the lush density expected of greens.",
      "Severely affected lower leaves may develop firing where the entire leaf yellows then browns and drops prematurely.",
    ],
    favorableConditions: [
      "Sandy, low-organic-matter soils and heavy rainfall or overwatering that leaches nitrate below the root zone promote deficiency.",
      "Cold soils early in the season slow microbial mineralization so available nitrogen stays low even when total soil nitrogen is adequate.",
    ],
    lookalikes: [
      {
        condition: "Sulfur deficiency",
        differentiator:
          "Sulfur yellowing appears first on the youngest leaves because sulfur is immobile, whereas nitrogen yellowing starts on the oldest lower leaves.",
      },
      {
        condition: "Natural senescence",
        differentiator:
          "Senescence affects only a few of the very oldest leaves while the plant otherwise grows vigorously, unlike the whole-plant pallor of nitrogen shortage.",
      },
    ],
    immediateActions: [
      "Side-dress with a fast-acting nitrogen source such as blood meal or a soluble balanced fertilizer and water it in thoroughly today.",
      "Check that soil is not waterlogged, since saturated roots cannot take up nitrogen even when it is present.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply blood meal, feather meal, or a fish emulsion drench and repeat every two to three weeks during active leafy growth.",
      },
      {
        situation: "Fast conventional correction",
        treatment:
          "Apply calcium nitrate or a soluble 20-20-20 at label rate as a foliar feed and soil drench for greening within a week.",
      },
    ],
    avoid: [
      "Do not dump a large single dose of high-nitrogen fertilizer, as it can burn roots and cause nitrate accumulation in edible leaves.",
    ],
    recoveryTimeline:
      "New leaves green up within seven to fourteen days of feeding, though the already-yellowed old leaves will not fully recover their color.",
    prevention: [
      "Build soil organic matter with compost each season so mineralization steadily supplies nitrogen to hungry leafy crops.",
      "Split nitrogen applications into small, frequent feedings rather than one heavy dose to match the fast uptake of greens.",
    ],
    monitoringThresholds: [
      "Re-evaluate if lower-leaf greening does not begin within ten days of feeding, and consider a soil test if the whole bed is pale.",
    ],
    escalationCriteria: [
      "Send a soil and leaf-tissue sample to a lab if pallor persists after correct feeding, since the cause may be pH lockout or root disease.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Nitrogen for vegetables",
        url: "https://extension.umn.edu/nutrient-management/nitrogen",
      },
    ],
  },
  {
    id: "nitrogen-deficiency-lawns-turf",
    name: "Nitrogen Deficiency (Lawns & Turf)",
    category: "nutrient-deficiency",
    affectedPlants: ["lawns-turf"],
    specificHosts: ["Kentucky bluegrass", "Tall fescue", "Perennial ryegrass", "Bermudagrass"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["lower/older leaf blades", "whole lawn", "overall turf canopy"],
    symptomProgression:
      "The turf loses its deep green color and takes on a pale, yellow-green tone over one to two weeks, growth slows so mowing frequency drops, and thin spots let weeds move in.",
    observableSigns: [
      "The whole lawn fades to a uniform pale yellow-green with the oldest blades yellowing from the tip inward first.",
      "Vertical growth slows noticeably so the lawn needs mowing far less often than during a well-fed period.",
      "Turf density declines and low-nitrogen-tolerant weeds such as clover and speedwell increase in thinning areas.",
    ],
    favorableConditions: [
      "Frequent rainfall or irrigation on sandy soils leaches nitrate quickly and leaves turf hungry between feedings.",
      "Removing clippings at every mowing exports nitrogen from the system and accelerates decline on unfertilized lawns.",
    ],
    lookalikes: [
      {
        condition: "Iron deficiency in turf",
        differentiator:
          "Iron deficiency causes bright interveinal yellowing on the newest blades, while nitrogen shortage yellows the oldest blades uniformly.",
      },
      {
        condition: "Drought stress",
        differentiator:
          "Drought turf shows a blue-gray wilt and footprints that stay pressed down, unlike the plain yellow-green of nitrogen shortage.",
      },
    ],
    immediateActions: [
      "Apply a quick-release nitrogen fertilizer at the recommended rate for your grass type and water it in lightly today.",
      "Begin returning clippings by mulch-mowing to recycle nitrogen back into the soil immediately.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Top-dress with a thin layer of screened compost or apply a slow-release organic turf fertilizer during the active growing season.",
      },
      {
        situation: "Cool-season grasses",
        treatment:
          "Feed with a slow-release nitrogen product in early fall to build density and color heading into the strongest growth period.",
      },
    ],
    avoid: [
      "Do not apply high rates of soluble nitrogen during summer heat or drought, which can scorch the turf and cause disease flushes.",
    ],
    recoveryTimeline:
      "Color rebounds within one to two weeks and density improves over four to six weeks of continued proper feeding and mowing.",
    prevention: [
      "Follow a season-long fertility program that splits nitrogen into several light applications matched to your grass species.",
      "Mulch-mow and leave clippings in place so recycled nitrogen reduces total fertilizer needs each year.",
    ],
    monitoringThresholds: [
      "Reassess color two weeks after feeding, and soil test every three years to keep nitrogen and pH in the target range.",
    ],
    escalationCriteria: [
      "If yellowing is patchy rather than uniform or grass pulls up easily, investigate grub damage or disease before adding more fertilizer.",
    ],
    sources: [
      {
        label: "Penn State Extension — Lawn fertilization",
        url: "https://extension.psu.edu/lawn-and-turfgrass",
      },
    ],
  },
  {
    id: "nitrogen-deficiency-houseplants",
    name: "Nitrogen Deficiency (Houseplants)",
    category: "nutrient-deficiency",
    affectedPlants: ["houseplants"],
    specificHosts: ["Pothos", "Philodendron", "Peace lily", "Dracaena", "Ficus"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["lower/older leaves", "overall foliage"],
    symptomProgression:
      "The oldest leaves at the base fade to pale green then yellow while new leaves emerge small and pale, and the plant produces slow, weak growth over several weeks of depleted potting mix.",
    observableSigns: [
      "Lower and oldest leaves yellow uniformly and may drop, leaving the plant leggy and bare toward the base.",
      "New leaves emerge smaller and paler than normal and the overall plant looks tired with little new extension.",
      "The potting mix is old and compacted, often unfertilized for many months, which points to simple depletion.",
    ],
    favorableConditions: [
      "Long periods in the same pot without repotting exhaust the limited nitrogen held in a small volume of mix.",
      "Frequent watering flushes soluble nitrogen out the drainage holes faster than an unfed plant can replace it.",
    ],
    lookalikes: [
      {
        condition: "Overwatering root stress",
        differentiator:
          "Overwatering yellows leaves but the mix stays soggy and roots turn mushy and dark, unlike the dry, depleted mix of nitrogen shortage.",
      },
      {
        condition: "Low light etiolation",
        differentiator:
          "Low light causes stretched pale stems reaching toward a window rather than the bottom-up yellowing of nitrogen deficiency.",
      },
    ],
    immediateActions: [
      "Apply a diluted balanced liquid houseplant fertilizer at half the label strength during a normal watering today.",
      "Confirm the plant is getting adequate light, since a plant in deep shade cannot use extra nitrogen effectively.",
    ],
    treatments: [
      {
        situation: "Ongoing feeding",
        treatment:
          "Feed with a balanced water-soluble fertilizer at quarter to half strength every two to four weeks during active growth.",
      },
      {
        situation: "Long-neglected plant",
        treatment:
          "Repot into fresh potting mix with a slow-release fertilizer incorporated to reset the nutrient supply for months.",
      },
    ],
    avoid: [
      "Do not fertilize a bone-dry root ball or apply full-strength feed indoors, both of which risk salt burn on tender roots.",
    ],
    recoveryTimeline:
      "New growth greens within two to three weeks of feeding, but the yellowed older leaves usually will not recover and can be trimmed.",
    prevention: [
      "Feed lightly and regularly during the growing season and reduce feeding in low light winter months.",
      "Repot houseplants with fresh mix every one to two years to renew the nutrient reserve in the container.",
    ],
    monitoringThresholds: [
      "If greening does not begin within two to three weeks of correct feeding and light, check for root rot or salt buildup.",
    ],
    escalationCriteria: [
      "Unpot and inspect roots, or repot entirely, if yellowing continues despite feeding, since the true cause may be root rot.",
    ],
    sources: [
      {
        label: "University of Maryland Extension — Fertilizing houseplants",
        url: "https://extension.umd.edu/resource/houseplants",
      },
    ],
  },
  {
    id: "nitrogen-deficiency-fruit-trees",
    name: "Nitrogen Deficiency (Fruit Trees)",
    category: "nutrient-deficiency",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Apple", "Peach", "Pear", "Cherry", "Plum"],
    growthStages: ["vegetative", "fruiting", "mature"],
    symptomLocations: ["older leaves on inner canopy", "shoots", "whole tree"],
    symptomProgression:
      "Leaves turn pale green then develop reddish or purplish tints on older foliage, annual shoot extension shortens, and fruit set and size decline across the season as reserves stay low.",
    observableSigns: [
      "Older leaves are small, pale green, and may show red or purple pigmentation before dropping early in the season.",
      "Terminal shoot growth is short and thin with weak twigs and sparse foliage compared with a well-fed tree.",
      "Fruit are undersized and the crop is light, and leaves color and drop earlier than normal in autumn.",
    ],
    favorableConditions: [
      "Heavy grass or weed competition in the tree row draws nitrogen away from feeder roots near the surface.",
      "Sandy soils and high rainfall leach nitrate below the root zone before the tree can capture it.",
    ],
    lookalikes: [
      {
        condition: "Phosphorus deficiency",
        differentiator:
          "Phosphorus shortage also darkens or purples leaves but foliage stays dark green rather than pale, and it is rare in most orchard soils.",
      },
      {
        condition: "Girdling or root injury",
        differentiator:
          "Mechanical girdling causes decline confined to affected limbs and shows a trunk wound, unlike whole-tree pallor from nitrogen shortage.",
      },
    ],
    immediateActions: [
      "Apply a measured band of nitrogen fertilizer under the drip line in early spring and water it in.",
      "Remove or mow sod competition out to the drip line to reduce competition for available nitrogen.",
    ],
    treatments: [
      {
        situation: "Bearing trees",
        treatment:
          "Apply calibrated nitrogen based on trunk diameter or shoot-growth targets in early spring before bloom for best fruiting response.",
      },
      {
        situation: "Organic orchard",
        treatment:
          "Apply composted manure or feather meal under the canopy and maintain a mulched, weed-free zone around the trunk.",
      },
    ],
    avoid: [
      "Do not over-apply nitrogen late in the season, which pushes soft growth prone to winter injury and reduces fruit quality.",
    ],
    recoveryTimeline:
      "Leaf color and shoot vigor improve over the current season, but full crop recovery usually takes the following growing year.",
    prevention: [
      "Maintain a vegetation-free mulched zone under young trees and follow shoot-growth targets to guide nitrogen rates.",
      "Use annual leaf-tissue analysis in midsummer to fine-tune orchard nitrogen year to year.",
    ],
    monitoringThresholds: [
      "Measure annual terminal shoot growth and take midsummer leaf samples; act if shoot extension falls below species targets.",
    ],
    escalationCriteria: [
      "If tissue tests are adequate but decline continues, have roots and trunk examined for crown rot, borers, or girdling.",
    ],
    sources: [
      {
        label: "Washington State University — Tree fruit nutrition",
        url: "https://treefruit.wsu.edu/",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // PHOSPHORUS (P) — mobile; deficiency shows on older leaves, purpling
  // ---------------------------------------------------------------------------
  {
    id: "phosphorus-deficiency-vegetable-garden",
    name: "Phosphorus Deficiency (Vegetable Garden)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Tomato", "Corn", "Pepper", "Broccoli", "Bean"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["older/lower leaves", "leaf undersides", "stems"],
    symptomProgression:
      "Young plants grow slowly and stay stunted, with older leaves and stems developing a dull dark green then reddish-purple cast that intensifies in cold soil early in the season.",
    observableSigns: [
      "Older leaves and stems take on a distinctive reddish-purple to bronze color, often strongest on leaf undersides.",
      "Plants are noticeably stunted with delayed maturity, sparse flowering, and reduced fruit or grain set.",
      "Foliage may look abnormally dark green before the purpling appears, unlike the pale green of nitrogen shortage.",
    ],
    favorableConditions: [
      "Cold, wet spring soils limit root uptake of phosphorus even when soil test levels are adequate.",
      "High-pH calcareous soils and very acidic soils both chemically bind phosphorus and reduce availability.",
    ],
    lookalikes: [
      {
        condition: "Cold-temperature purpling",
        differentiator:
          "Purpling purely from cold fades as soils warm and vigor returns, while true phosphorus shortage persists after warm-up.",
      },
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen shortage yellows old leaves uniformly, whereas phosphorus shortage keeps leaves dark green or purple, not pale.",
      },
    ],
    immediateActions: [
      "Apply a starter fertilizer high in phosphorus banded near the roots and water it in for young transplants today.",
      "Avoid planting or transplanting into cold soil and wait for warmer conditions to improve uptake.",
    ],
    treatments: [
      {
        situation: "Confirmed low soil test",
        treatment:
          "Incorporate a phosphorus source such as bone meal or triple superphosphate into the root zone based on soil-test recommendations.",
      },
      {
        situation: "Cold-soil transplants",
        treatment:
          "Use a water-soluble high-phosphorus starter solution at transplant to boost early root establishment until soils warm.",
      },
    ],
    avoid: [
      "Do not broadcast large amounts of phosphorus without a soil test, since excess ties up zinc and iron and pollutes runoff.",
    ],
    recoveryTimeline:
      "New growth normalizes within one to three weeks as soils warm and phosphorus becomes available, with the crop catching up over the season.",
    prevention: [
      "Soil test before planting and correct pH into the six-to-seven range where phosphorus is most available.",
      "Warm soils with clear plastic or delayed planting and band starter phosphorus for cold-sensitive crops.",
    ],
    monitoringThresholds: [
      "Re-check plants once soil temperatures exceed the low sixties Fahrenheit, and act if purpling persists in warm soil.",
    ],
    escalationCriteria: [
      "Submit a soil test and adjust pH if symptoms persist after warm-up, since lockout not shortage may be the real cause.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Phosphorus",
        url: "https://extension.umn.edu/phosphorus-and-potassium/understanding-phosphorus-fertilizers",
      },
    ],
  },
  {
    id: "phosphorus-deficiency-corn",
    name: "Phosphorus Deficiency (Corn)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden", "specialty-cultivation"],
    specificHosts: ["Sweet corn", "Field corn", "Popcorn"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["older/lower leaf margins", "leaf tips", "whole seedling"],
    symptomProgression:
      "Young corn seedlings turn dark green then develop reddish-purple leaf margins and tips on the oldest leaves during cold early growth, and stunted plants tassel late with poor ear fill if uncorrected.",
    observableSigns: [
      "Lower leaf margins and tips of young corn turn a striking reddish-purple while the rest of the leaf stays dark green.",
      "Seedlings are short and slow with narrow leaves and delayed development compared with healthy neighboring plants.",
      "If uncorrected, plants mature late, ears are small, and kerneling at the ear tip is poor.",
    ],
    favorableConditions: [
      "Cold, wet soils in early spring restrict corn root growth and severely limit phosphorus uptake at the seedling stage.",
      "Compacted or low-phosphorus soils and restricted rooting from crusting worsen early-season symptoms.",
    ],
    lookalikes: [
      {
        condition: "Purple corn hybrid genetics",
        differentiator:
          "Some hybrids and cool nights produce harmless purpling that fades with warmth, unlike shortage that limits growth and yield.",
      },
      {
        condition: "Root restriction from compaction",
        differentiator:
          "Compaction stunts plants with poor roots but responds to tillage and warmth, while true shortage responds to banded phosphorus.",
      },
    ],
    immediateActions: [
      "Ensure a starter phosphorus band was placed near the seed row and side-dress if the band was missed.",
      "Wait for soils to warm and avoid working wet ground that worsens compaction and crusting.",
    ],
    treatments: [
      {
        situation: "Confirmed deficiency",
        treatment:
          "Band a phosphorus starter fertilizer two inches beside and below the seed at planting to feed early roots directly.",
      },
      {
        situation: "Soil-test low fields",
        treatment:
          "Build soil phosphorus with a broadcast application based on soil test and maintain adequate soil pH for availability.",
      },
    ],
    avoid: [
      "Do not place high rates of fertilizer in direct seed contact, which causes salt injury and poor emergence.",
    ],
    recoveryTimeline:
      "Purpling fades and growth accelerates within one to two weeks as soils warm, provided starter phosphorus is available.",
    prevention: [
      "Place a starter phosphorus band at planting on cold soils and low-testing fields to secure early vigor.",
      "Manage soil pH and drainage so warm, well-aerated roots can access phosphorus in spring.",
    ],
    monitoringThresholds: [
      "Reassess a week after soils reach the mid-sixties Fahrenheit and act if purpling and stunting persist.",
    ],
    escalationCriteria: [
      "Pull a soil test and evaluate compaction if symptoms do not clear with warmth, since the cause may be rooting not fertility.",
    ],
    sources: [
      {
        label: "Iowa State University Extension — Corn nutrient deficiencies",
        url: "https://crops.extension.iastate.edu/encyclopedia/phosphorus-deficiency-corn",
      },
    ],
  },
  {
    id: "phosphorus-deficiency-ornamentals",
    name: "Phosphorus Deficiency (Flowering Ornamentals)",
    category: "nutrient-deficiency",
    affectedPlants: ["ornamentals", "houseplants"],
    specificHosts: ["Petunia", "Geranium", "Marigold", "Impatiens"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["older/lower leaves", "whole plant", "flower buds"],
    symptomProgression:
      "Container ornamentals grow slowly with dull dark green to purple older foliage, then flowering is delayed and sparse as low root-zone phosphorus and cool media limit uptake.",
    observableSigns: [
      "Older leaves turn dull dark green and develop purple or reddish tints, most visible on the undersides.",
      "Plants stay compact and stunted with weak stems and markedly reduced or delayed flowering.",
      "Bedding plants in cool spring containers show the worst symptoms early in the production cycle.",
    ],
    favorableConditions: [
      "Cool, wet growing media at low root-zone temperature reduce phosphorus uptake in spring bedding production.",
      "Soilless mixes with a high pH bind phosphorus and can trigger deficiency even with normal fertilizer.",
    ],
    lookalikes: [
      {
        condition: "Low-temperature purpling",
        differentiator:
          "Cold-induced purpling clears once media warm, while true phosphorus shortage persists and keeps plants stunted.",
      },
      {
        condition: "High-EC salt stress",
        differentiator:
          "Salt stress burns leaf margins and stunts roots with high runoff EC, unlike the purple cast of phosphorus shortage.",
      },
    ],
    immediateActions: [
      "Apply a water-soluble fertilizer that includes phosphorus at label rate and check the media pH today.",
      "Raise root-zone temperature by moving plants off cold floors to improve uptake.",
    ],
    treatments: [
      {
        situation: "Container production",
        treatment:
          "Switch to a complete water-soluble fertilizer with adequate phosphorus and correct media pH into the target range.",
      },
      {
        situation: "Cool-season bedding",
        treatment:
          "Warm the root zone and apply a starter feed with phosphorus to restore flowering vigor as light increases.",
      },
    ],
    avoid: [
      "Do not over-fertilize with phosphorus, which promotes lush stretch, blocks micronutrients, and pollutes leachate.",
    ],
    recoveryTimeline:
      "New foliage and buds respond within one to two weeks once phosphorus and warmth are restored, and flowering resumes.",
    prevention: [
      "Maintain media pH in the recommended range and use a balanced feed program tailored to each crop.",
      "Keep root-zone temperatures warm in spring so cold does not mimic or trigger phosphorus shortage.",
    ],
    monitoringThresholds: [
      "Check media pH and EC with a routine test, and reassess growth one to two weeks after correction.",
    ],
    escalationCriteria: [
      "If pH and EC are correct but symptoms persist, run a full media and tissue test to rule out other nutrient issues.",
    ],
    sources: [
      {
        label: "University of Massachusetts — Greenhouse nutrient management",
        url: "https://ag.umass.edu/greenhouse-floriculture",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // POTASSIUM (K) — mobile; deficiency shows on older leaf margins (scorch)
  // ---------------------------------------------------------------------------
  {
    id: "potassium-deficiency-tomatoes",
    name: "Potassium Deficiency (Tomatoes)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Tomato", "Cherry tomato", "Heirloom tomato"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["older/lower leaf margins", "leaf tips", "fruit"],
    symptomProgression:
      "Older leaves develop yellowing then brown scorching along the margins that spreads inward, and during fruiting the plant produces blotchy, unevenly ripening fruit with hard yellow-green shoulders.",
    observableSigns: [
      "Margins of older leaves yellow then scorch to brown and curl while the leaf center stays greener.",
      "Fruit ripen unevenly with yellow or green blotchy shoulders and internal white hard tissue called yellow-shoulder disorder.",
      "Stems may be thin and the plant sets fruit that are smaller and less flavorful than expected.",
    ],
    favorableConditions: [
      "Sandy soils, high fruit load, and heavy leaching from rain or irrigation drain potassium during peak demand.",
      "High magnesium or calcium levels can antagonize potassium uptake and worsen symptoms during fruiting.",
    ],
    lookalikes: [
      {
        condition: "Magnesium deficiency",
        differentiator:
          "Magnesium shortage yellows between the veins of old leaves while margins stay green, opposite the marginal scorch of potassium.",
      },
      {
        condition: "Salt or fertilizer burn",
        differentiator:
          "Salt burn scorches margins on many leaves at once with high soil EC, while potassium scorch progresses on the oldest leaves first.",
      },
    ],
    immediateActions: [
      "Apply a potassium-containing fertilizer such as potassium sulfate at label rate and water it in near the roots today.",
      "Even out watering to avoid the moisture swings that intensify fruit ripening disorders.",
    ],
    treatments: [
      {
        situation: "Heavy fruit load",
        treatment:
          "Feed with a high-potassium tomato fertilizer through the fruiting period to keep pace with strong crop demand.",
      },
      {
        situation: "Organic garden",
        treatment:
          "Incorporate sulfate of potash-magnesia or wood-ash-amended compost based on a soil test to raise potassium.",
      },
    ],
    avoid: [
      "Do not overload with magnesium salts such as Epsom salt, which can antagonize potassium uptake and worsen the deficiency.",
    ],
    recoveryTimeline:
      "New leaves and later fruit trusses improve within two to three weeks of feeding, but already scorched leaves will not green again.",
    prevention: [
      "Soil test and pre-plant amend potassium for high-demand fruiting crops, especially on sandy ground.",
      "Maintain steady soil moisture and split potassium feeding through fruiting to match peak uptake.",
    ],
    monitoringThresholds: [
      "Watch newly forming trusses; if scorch keeps advancing after feeding, take a soil test to check potassium and pH.",
    ],
    escalationCriteria: [
      "Run soil and tissue tests if symptoms persist despite feeding, since a base-cation imbalance may require balanced correction.",
    ],
    sources: [
      {
        label: "UC IPM — Tomato nutrient disorders",
        url: "https://ipm.ucanr.edu/agriculture/tomato/",
      },
    ],
  },
  {
    id: "potassium-deficiency-fruit-trees",
    name: "Potassium Deficiency (Fruit Trees)",
    category: "nutrient-deficiency",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Apple", "Grape", "Peach", "Citrus"],
    growthStages: ["vegetative", "fruiting", "mature"],
    symptomLocations: ["older leaf margins", "mid-shoot leaves", "fruit"],
    symptomProgression:
      "Marginal yellowing and browning scorch develops on older leaves in mid to late season, leaves may curl and cup, and fruit are undersized with poor color and lower sugar as reserves are drawn down.",
    observableSigns: [
      "Older and mid-shoot leaves show marginal chlorosis then brown scorch with upward cupping or curling.",
      "Fruit are smaller, poorly colored, and lower in sugar, and yield declines under heavy crop load.",
      "In grapevines the marginal scorch on basal leaves is especially pronounced during ripening.",
    ],
    favorableConditions: [
      "Sandy, leached, or acidic soils and heavy crop loads deplete potassium during the fruit-filling period.",
      "High soil magnesium or excessive liming can antagonize potassium uptake in orchard and vineyard soils.",
    ],
    lookalikes: [
      {
        condition: "Drought marginal scorch",
        differentiator:
          "Drought scorch appears quickly across many leaves during heat, while potassium scorch develops gradually on older leaves.",
      },
      {
        condition: "Salt or chloride toxicity",
        differentiator:
          "Salt toxicity scorches margins with a link to high-salt water or soil, unlike potassium shortage tied to crop load and leaching.",
      },
    ],
    immediateActions: [
      "Apply a potassium fertilizer such as sulfate of potash under the canopy based on a recent soil test today.",
      "Ensure consistent irrigation so moisture stress does not compound the marginal scorch.",
    ],
    treatments: [
      {
        situation: "Bearing orchard or vineyard",
        treatment:
          "Broadcast or fertigate sulfate of potash to the root zone before and during fruit fill to meet crop demand.",
      },
      {
        situation: "Acidic sandy soils",
        treatment:
          "Correct soil pH and apply potassium in split doses so leaching losses do not undo the correction.",
      },
    ],
    avoid: [
      "Do not over-lime with high-magnesium dolomite, which can suppress potassium uptake and deepen the deficiency.",
    ],
    recoveryTimeline:
      "Leaf symptoms stabilize during the current season and fruit quality typically improves the following year after correction.",
    prevention: [
      "Use annual leaf-tissue analysis in midsummer to guide potassium rates for the crop load.",
      "Apply potassium in split applications on sandy soils to offset leaching over the season.",
    ],
    monitoringThresholds: [
      "Take midsummer leaf samples and act when tissue potassium falls below the crop-specific sufficiency range.",
    ],
    escalationCriteria: [
      "If tissue potassium is adequate but scorch continues, investigate salt injury, drought, or root disease with lab help.",
    ],
    sources: [
      {
        label: "Oregon State University Extension — Tree fruit nutrition",
        url: "https://extension.oregonstate.edu/crop-production/fruit-trees",
      },
    ],
  },
  {
    id: "potassium-deficiency-cannabis",
    name: "Potassium Deficiency (Specialty Cultivation)",
    category: "nutrient-deficiency",
    affectedPlants: ["specialty-cultivation"],
    specificHosts: ["Cannabis", "Hops", "Hydroponic tomato"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["older/lower leaf margins", "leaf tips", "whole older leaf"],
    symptomProgression:
      "In fast-growing indoor crops the older fan leaves show tip and margin yellowing that turns rusty brown and crispy, spreading inward, while flowering can lag under high demand if not corrected quickly.",
    observableSigns: [
      "Lower fan leaves show yellow then rusty-brown scorched tips and margins that become brittle and curl.",
      "Symptoms concentrate on older leaves first because potassium moves to feed new growth and flowers.",
      "Stems may weaken and flowering or fruiting slows under the crop's high potassium demand.",
    ],
    favorableConditions: [
      "High-light, fast-growth indoor conditions create heavy potassium demand that outpaces a weak feed program.",
      "Nutrient-solution imbalances with excess nitrogen, calcium, or sodium can lock out potassium in hydroponics.",
    ],
    lookalikes: [
      {
        condition: "Nutrient burn tip scorch",
        differentiator:
          "Nutrient burn scorches leaf tips with high solution EC across the canopy, while potassium shortage scorches whole margins of older leaves.",
      },
      {
        condition: "Light or heat stress bleaching",
        differentiator:
          "Light stress bleaches upper leaves nearest the lamp, opposite the lower-leaf scorch of potassium shortage.",
      },
    ],
    immediateActions: [
      "Check and adjust the nutrient solution to include adequate potassium and confirm the reservoir pH is in range today.",
      "Flush an over-salted medium with plain pH-adjusted water before re-feeding to clear antagonizing salts.",
    ],
    treatments: [
      {
        situation: "Hydroponic systems",
        treatment:
          "Rebalance the nutrient solution to the crop's potassium target and maintain pH in the optimal uptake window.",
      },
      {
        situation: "Soil or coco media",
        treatment:
          "Feed a bloom formula with higher potassium and, if salts are high, flush then resume a balanced schedule.",
      },
    ],
    avoid: [
      "Do not raise nitrogen or calcium aggressively while potassium is low, since these antagonize potassium uptake.",
    ],
    recoveryTimeline:
      "New growth stabilizes within one to two weeks of correcting the solution, though scorched older leaves will not recover.",
    prevention: [
      "Follow a stage-specific feed schedule that raises potassium during flowering and fruiting demand.",
      "Monitor reservoir pH and EC daily so the solution stays in the uptake window and salts do not accumulate.",
    ],
    monitoringThresholds: [
      "Log reservoir pH and EC each day and reassess leaves within a week; act if lower-leaf scorch keeps advancing.",
    ],
    escalationCriteria: [
      "If corrected feeding and pH do not stop the spread, run a full solution analysis to find the antagonizing element.",
    ],
    sources: [
      {
        label: "Oregon State University — Hemp and specialty crop production",
        url: "https://extension.oregonstate.edu/crop-production/hemp",
      },
    ],
  },
  {
    id: "potassium-deficiency-lawns-turf",
    name: "Potassium Deficiency (Lawns & Turf)",
    category: "nutrient-deficiency",
    affectedPlants: ["lawns-turf"],
    specificHosts: ["Bermudagrass", "Zoysiagrass", "Tall fescue", "Kentucky bluegrass"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["older leaf tips and margins", "whole turf stand"],
    symptomProgression:
      "Older blades scorch and yellow along tips and margins, the turf becomes less tolerant of drought, cold, and traffic, and disease and thinning increase over weeks as potassium reserves fall.",
    observableSigns: [
      "Older leaf tips and margins yellow then brown while newer blades stay greener, giving a scorched look under stress.",
      "Turf shows reduced tolerance to drought, heat, cold, and wear, wilting and browning faster than a well-fed lawn.",
      "Disease pressure and thinning increase, especially on sandy soils that leach potassium readily.",
    ],
    favorableConditions: [
      "Sandy soils, heavy irrigation, and clipping removal export and leach potassium quickly from turf.",
      "High nitrogen feeding without matching potassium unbalances the turf and worsens stress tolerance.",
    ],
    lookalikes: [
      {
        condition: "Drought stress",
        differentiator:
          "Drought browning follows dry spells and recovers with water, while potassium scorch persists on older tips even when moist.",
      },
      {
        condition: "Dollar spot disease",
        differentiator:
          "Dollar spot makes small sunken bleached patches with lesions on blades, unlike the uniform tip scorch of potassium shortage.",
      },
    ],
    immediateActions: [
      "Apply a potassium source such as sulfate of potash at the recommended turf rate and water it in today.",
      "Return clippings by mulch-mowing to recycle potassium back to the soil immediately.",
    ],
    treatments: [
      {
        situation: "Sandy or leached soils",
        treatment:
          "Split potassium into light applications through the season so leaching does not undo the correction on sand.",
      },
      {
        situation: "Stress conditioning",
        treatment:
          "Apply potassium in late summer and fall to improve cold, drought, and wear tolerance heading into stress periods.",
      },
    ],
    avoid: [
      "Do not push heavy nitrogen without balancing potassium, which leaves turf lush but weak and disease-prone.",
    ],
    recoveryTimeline:
      "Stress tolerance and color improve over two to four weeks of balanced feeding, with density rebuilding across the season.",
    prevention: [
      "Balance nitrogen and potassium in the fertility program to match soil-test needs for the grass type.",
      "Mulch-mow and irrigate deeply but infrequently to conserve soil potassium and reduce leaching.",
    ],
    monitoringThresholds: [
      "Soil test every two to three years and reassess stress tolerance; act when soil potassium tests low.",
    ],
    escalationCriteria: [
      "If tip scorch and thinning persist despite balanced feeding, sample for disease and check soil compaction professionally.",
    ],
    sources: [
      {
        label: "Clemson Cooperative Extension — Lawn fertility",
        url: "https://hgic.clemson.edu/factsheet/fertilizing-lawns/",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // CALCIUM (Ca) — immobile; disorders in developing tissue (BER, tipburn)
  // ---------------------------------------------------------------------------
  {
    id: "calcium-deficiency-blossom-end-rot-tomatoes-peppers",
    name: "Calcium Deficiency — Blossom End Rot (Tomatoes & Peppers)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Tomato", "Pepper", "Eggplant"],
    growthStages: ["flowering", "fruiting"],
    symptomLocations: ["fruit blossom end", "developing fruit"],
    symptomProgression:
      "A small water-soaked spot appears at the blossom end of developing fruit, then enlarges into a sunken, leathery, dark brown or black lesion, often affecting the first fruit set most severely during moisture swings.",
    observableSigns: [
      "The blossom end of the fruit shows a sunken, dry, leathery brown-black patch while the shoulders look normal.",
      "The disorder strikes developing fruit, not leaves, and typically hits the earliest fruit and the largest first.",
      "Foliage usually looks healthy, distinguishing this local calcium disorder from a whole-plant nutrient problem.",
    ],
    favorableConditions: [
      "Irregular watering with wet-dry swings disrupts calcium delivery to the fast-growing fruit tip.",
      "Rapid fruit growth, high heat, high salinity, or excess nitrogen and potassium reduce calcium reaching the fruit.",
    ],
    lookalikes: [
      {
        condition: "Fruit anthracnose or fungal rot",
        differentiator:
          "Fungal rots produce concentric spore rings and can appear anywhere on the fruit, unlike the dry sunken blossom-end lesion.",
      },
      {
        condition: "Sunscald",
        differentiator:
          "Sunscald forms a bleached, papery patch on the sun-exposed shoulder, not the shaded blossom end where rot forms.",
      },
    ],
    immediateActions: [
      "Mulch and water evenly to hold steady soil moisture and stop the wet-dry cycling that triggers the disorder today.",
      "Remove affected fruit so the plant redirects energy and calcium to healthy developing fruit.",
    ],
    treatments: [
      {
        situation: "Primary correction",
        treatment:
          "Stabilize soil moisture with mulch and consistent irrigation, since even watering resolves most cases without added calcium.",
      },
      {
        situation: "Confirmed low-calcium soil",
        treatment:
          "Amend with gypsum or lime based on a soil test and correct pH so root calcium uptake improves next planting.",
      },
    ],
    avoid: [
      "Do not over-apply nitrogen or potassium, which pushes fast growth that competes with fruit for limited calcium.",
    ],
    recoveryTimeline:
      "Fruit already affected will not heal, but new fruit set after moisture is stabilized typically develop normally within one to two weeks.",
    prevention: [
      "Mulch beds and water consistently so calcium moves steadily into rapidly expanding fruit.",
      "Maintain proper soil pH and calcium levels by soil test and avoid excess nitrogen and potassium.",
    ],
    monitoringThresholds: [
      "Check each new fruit truss; if new fruit still rot after moisture is even, take a soil test for calcium and pH.",
    ],
    escalationCriteria: [
      "If steady watering and correct pH do not stop new lesions, run a soil test and consider high salinity or root damage.",
    ],
    sources: [
      {
        label: "University of Missouri Extension — Blossom-end rot",
        url: "https://extension.missouri.edu/publications/g6461",
      },
    ],
  },
  {
    id: "calcium-deficiency-tipburn-lettuce",
    name: "Calcium Deficiency — Tipburn (Lettuce & Greens)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Lettuce", "Cabbage", "Endive", "Napa cabbage"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["inner young leaf margins", "head interior"],
    symptomProgression:
      "Margins of the young inner leaves turn brown and necrotic during rapid growth, damage stays hidden inside heads until harvest, and affected tissue often becomes an entry point for soft-rot bacteria.",
    observableSigns: [
      "Inner, youngest leaf margins turn brown and die back while the outer wrapper leaves look healthy.",
      "The browning is hidden inside the head or rosette and is often discovered only when heads are cut.",
      "Damaged margins frequently become slimy as secondary bacterial soft rot colonizes the dead tissue.",
    ],
    favorableConditions: [
      "Fast growth under high nitrogen, warm temperatures, and fluctuating humidity outpaces calcium delivery to inner leaves.",
      "Low transpiration in the dense head interior limits calcium movement to the youngest expanding tissue.",
    ],
    lookalikes: [
      {
        condition: "Bacterial soft rot",
        differentiator:
          "Primary soft rot produces foul-smelling slimy decay from the outside, while tipburn starts as dry brown inner-margin necrosis.",
      },
      {
        condition: "Fertilizer or salt burn",
        differentiator:
          "Salt burn scorches outer leaf margins exposed to fertilizer, opposite the hidden inner-leaf browning of tipburn.",
      },
    ],
    immediateActions: [
      "Steady the irrigation and avoid pushing rapid succulent growth with excess nitrogen right now.",
      "Increase air movement to keep humidity from spiking, which improves calcium transport to inner leaves.",
    ],
    treatments: [
      {
        situation: "Cultural management",
        treatment:
          "Grow adapted cultivars, moderate nitrogen, and maintain steady moisture, since tipburn is mainly a growth-and-transpiration disorder.",
      },
      {
        situation: "High-value greenhouse crops",
        treatment:
          "Use fans and calcium foliar sprays directed into the head and manage humidity to reduce inner-leaf necrosis.",
      },
    ],
    avoid: [
      "Do not chase maximum growth rate with heavy nitrogen and frequent water, which reliably increases tipburn severity.",
    ],
    recoveryTimeline:
      "Existing tipburn does not heal, but new leaves formed after conditions are moderated grow clean within one to two weeks.",
    prevention: [
      "Select tipburn-tolerant cultivars and moderate nitrogen and growth rate during warm rapid-growth periods.",
      "Maintain steady soil moisture and good airflow to keep calcium moving into the youngest leaves.",
    ],
    monitoringThresholds: [
      "Scout inner leaves of sample heads before harvest and adjust nitrogen and moisture if inner necrosis appears.",
    ],
    escalationCriteria: [
      "If tipburn is severe across cultivars despite good culture, seek extension guidance on variety selection and climate control.",
    ],
    sources: [
      {
        label: "Cornell University — Lettuce tipburn",
        url: "https://www.vegetables.cornell.edu/",
      },
    ],
  },
  {
    id: "calcium-deficiency-bitter-pit-apples",
    name: "Calcium Deficiency — Bitter Pit (Apples)",
    category: "nutrient-deficiency",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Apple", "Honeycrisp apple", "Pear"],
    growthStages: ["fruiting", "mature"],
    symptomLocations: ["fruit surface", "fruit flesh below skin", "calyx end"],
    symptomProgression:
      "Small sunken dark pits develop on the skin and in the flesh, often near the calyx end, appearing late in the season and worsening in storage as calcium-poor cells break down.",
    observableSigns: [
      "The fruit shows small, sunken, dark green to brown pits on the skin, most numerous toward the calyx end.",
      "Cutting the fruit reveals brown, dry, corky spots of dead tissue in the flesh just beneath the pits.",
      "Symptoms often intensify weeks after harvest during cold storage rather than on the tree.",
    ],
    favorableConditions: [
      "Large fruit, low crop load, and vigorous shoot growth dilute and outcompete calcium reaching the fruit.",
      "Drought stress, excess nitrogen, potassium, or magnesium, and susceptible cultivars like Honeycrisp increase incidence.",
    ],
    lookalikes: [
      {
        condition: "Cork spot",
        differentiator:
          "Cork spot forms larger corky lesions deeper in the flesh earlier in the season, while bitter pit pits are smaller and subskin.",
      },
      {
        condition: "Insect stings or hail marks",
        differentiator:
          "Insect and hail injuries show entry wounds or scars on the skin, unlike the internal corky pits of calcium shortage.",
      },
    ],
    immediateActions: [
      "Maintain even irrigation and avoid moisture stress during the fruit-sizing period right now.",
      "Plan foliar calcium sprays on the developing fruit if the orchard has a history of bitter pit.",
    ],
    treatments: [
      {
        situation: "Susceptible cultivars",
        treatment:
          "Apply a series of calcium chloride foliar sprays from early fruit set through the season to raise fruit calcium.",
      },
      {
        situation: "Vigor management",
        treatment:
          "Moderate nitrogen and pruning vigor, manage crop load, and keep steady soil moisture to reduce calcium dilution.",
      },
    ],
    avoid: [
      "Do not over-fertilize with nitrogen, potassium, or magnesium, which antagonize calcium and increase pit incidence.",
    ],
    recoveryTimeline:
      "Affected fruit cannot be cured, but a full-season calcium spray and vigor program reduces incidence in the following harvest.",
    prevention: [
      "Follow a multi-spray foliar calcium program on susceptible cultivars from early fruit set onward.",
      "Balance tree vigor, crop load, and irrigation to keep calcium supply matched to fruit demand.",
    ],
    monitoringThresholds: [
      "Use a preharvest fruit-mineral analysis or passive infiltration test to predict risk and time additional sprays.",
    ],
    escalationCriteria: [
      "If bitter pit remains high despite a full spray and vigor program, consult a pomologist about cultivar and storage strategy.",
    ],
    sources: [
      {
        label: "Penn State Extension — Bitter pit of apple",
        url: "https://extension.psu.edu/tree-fruit-production",
      },
    ],
  },
  {
    id: "calcium-deficiency-hydroponics",
    name: "Calcium Deficiency (Hydroponic & Greenhouse Crops)",
    category: "nutrient-deficiency",
    affectedPlants: ["specialty-cultivation"],
    specificHosts: ["Hydroponic lettuce", "Cannabis", "Greenhouse tomato", "Strawberry"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["new growth", "young leaf tips and margins", "growing points"],
    symptomProgression:
      "New leaves emerge distorted with hooked or scorched tips and margins, growing points weaken and may die back, and root tips turn brown as the immobile calcium fails to reach fast-growing tissue.",
    observableSigns: [
      "The newest leaves are small, crinkled, or hook-shaped with brown scorched tips and margins.",
      "Growing points and shoot tips weaken, die back, or abort while older leaves remain green.",
      "Root tips may brown and stop extending in the nutrient solution, reflecting calcium's role in root growth.",
    ],
    favorableConditions: [
      "High humidity and low airflow reduce transpiration so calcium is not pulled into new leaves.",
      "Nutrient solutions high in potassium, ammonium, or sodium antagonize calcium uptake in soilless systems.",
    ],
    lookalikes: [
      {
        condition: "Boron deficiency",
        differentiator:
          "Boron shortage also kills growing points but causes brittle, corky stems and hollow tissue rather than scorched leaf margins.",
      },
      {
        condition: "Root-zone pH lockout",
        differentiator:
          "Low pH lockout blocks calcium even when present, so a pH check distinguishes it from a true low-calcium solution.",
      },
    ],
    immediateActions: [
      "Verify the nutrient solution supplies adequate calcium and adjust the reservoir pH into the uptake range today.",
      "Increase airflow and moderate humidity so transpiration can carry calcium into new growth.",
    ],
    treatments: [
      {
        situation: "Solution correction",
        treatment:
          "Rebalance the recipe to the crop's calcium target and reduce antagonizing potassium, ammonium, or sodium levels.",
      },
      {
        situation: "Environmental correction",
        treatment:
          "Run fans and manage vapor-pressure deficit to raise transpiration so calcium reaches the youngest leaves.",
      },
    ],
    avoid: [
      "Do not mix calcium with sulfate or phosphate stock in a concentrated form, which precipitates and removes available calcium.",
    ],
    recoveryTimeline:
      "New growth emerges normal within one to two weeks after calcium and transpiration are corrected, though distorted leaves stay damaged.",
    prevention: [
      "Maintain the correct calcium level and pH in the reservoir and keep antagonist ions in balance.",
      "Manage greenhouse humidity and airflow so plants transpire enough to distribute calcium.",
    ],
    monitoringThresholds: [
      "Log reservoir pH, EC, and humidity daily and reassess new leaves within a week of any correction.",
    ],
    escalationCriteria: [
      "If new-growth damage continues after solution and climate correction, run a full water and tissue analysis for antagonists.",
    ],
    sources: [
      {
        label: "University of Arizona — Controlled environment agriculture",
        url: "https://ceac.arizona.edu/",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // MAGNESIUM (Mg) — mobile; interveinal chlorosis of older leaves
  // ---------------------------------------------------------------------------
  {
    id: "magnesium-deficiency-tomatoes-peppers",
    name: "Magnesium Deficiency (Tomatoes & Peppers)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Tomato", "Pepper", "Eggplant", "Potato"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["older/lower leaves", "interveinal areas", "leaf between veins"],
    symptomProgression:
      "Older lower leaves develop yellowing between the veins while the veins stay green, the interveinal areas may turn brown and brittle, and symptoms climb upward as magnesium is remobilized during fruiting.",
    observableSigns: [
      "Lower leaves show yellowing between the veins in a herringbone pattern while the veins and midrib stay green.",
      "Advanced interveinal tissue turns tan or brown and brittle while the leaf outline still holds green veins.",
      "The pattern begins on the oldest leaves and progresses upward, worsening under heavy fruit load.",
    ],
    favorableConditions: [
      "Sandy, acidic, or heavily leached soils and high potassium fertilization suppress magnesium uptake.",
      "Rapid growth and heavy fruiting create demand that pulls magnesium out of older leaves first.",
    ],
    lookalikes: [
      {
        condition: "Potassium deficiency",
        differentiator:
          "Potassium shortage scorches the leaf margins of old leaves, while magnesium yellows between the veins with green margins early on.",
      },
      {
        condition: "Iron deficiency",
        differentiator:
          "Iron interveinal chlorosis strikes the newest leaves first, whereas magnesium chlorosis begins on the oldest lower leaves.",
      },
    ],
    immediateActions: [
      "Apply a dilute Epsom salt foliar spray for a quick response and side-dress magnesium at the roots today.",
      "Check whether recent heavy potassium feeding is antagonizing magnesium and ease off if so.",
    ],
    treatments: [
      {
        situation: "Quick foliar fix",
        treatment:
          "Spray a dilute magnesium sulfate solution on the foliage for rapid greening while soil correction takes effect.",
      },
      {
        situation: "Acidic soils",
        treatment:
          "Apply dolomitic lime based on a soil test to raise both magnesium and pH in acid soils over the longer term.",
      },
    ],
    avoid: [
      "Do not keep applying high-potassium fertilizer during a magnesium shortage, since it deepens the imbalance.",
    ],
    recoveryTimeline:
      "Foliar sprays green up leaves within days and soil correction stabilizes new growth over two to three weeks.",
    prevention: [
      "Soil test and use dolomitic lime on acidic sandy soils to keep magnesium and pH balanced.",
      "Balance potassium and magnesium in the fertility program so one does not suppress the other.",
    ],
    monitoringThresholds: [
      "Watch lower leaves after correction; if interveinal chlorosis keeps climbing, soil test for the potassium-to-magnesium ratio.",
    ],
    escalationCriteria: [
      "If symptoms persist after foliar and soil correction, run soil and tissue tests to check base-cation balance and pH.",
    ],
    sources: [
      {
        label: "UC IPM — Vegetable nutrient deficiencies",
        url: "https://ipm.ucanr.edu/agriculture/",
      },
    ],
  },
  {
    id: "magnesium-deficiency-roses-ornamentals",
    name: "Magnesium Deficiency (Roses & Ornamentals)",
    category: "nutrient-deficiency",
    affectedPlants: ["ornamentals", "trees-shrubs"],
    specificHosts: ["Rose", "Hydrangea", "Camellia", "Azalea"],
    growthStages: ["vegetative", "flowering", "mature"],
    symptomLocations: ["older/lower leaves", "interveinal areas", "leaf center"],
    symptomProgression:
      "Older leaves yellow between the veins from the center outward while veins remain green, sometimes with reddish tints, and heavily affected leaves drop early, thinning the lower canopy over the season.",
    observableSigns: [
      "Lower and older leaves show interveinal yellowing while a narrow band along the veins stays green.",
      "Some species develop reddish or purplish interveinal tints alongside the yellowing before leaves drop.",
      "Premature leaf drop from the base upward thins the lower canopy while new growth stays greener.",
    ],
    favorableConditions: [
      "Acidic, sandy, leached soils common to azaleas and camellias are naturally low in available magnesium.",
      "Heavy potassium-rich rose fertilizers can antagonize magnesium and trigger the deficiency.",
    ],
    lookalikes: [
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen shortage yellows old leaves uniformly, while magnesium yellows between the veins leaving the veins distinctly green.",
      },
      {
        condition: "Manganese deficiency",
        differentiator:
          "Manganese chlorosis hits new leaves with a finer green vein network, whereas magnesium chlorosis is on old leaves.",
      },
    ],
    immediateActions: [
      "Apply a dilute Epsom salt drench or foliar spray around affected shrubs for a fast response today.",
      "Reduce use of high-potassium bloom fertilizers that may be suppressing magnesium uptake.",
    ],
    treatments: [
      {
        situation: "Quick correction",
        treatment:
          "Drench with magnesium sulfate dissolved in water around the root zone to relieve symptoms quickly.",
      },
      {
        situation: "Acid-loving shrubs",
        treatment:
          "Correct with dolomitic lime only where pH is too low, or use magnesium sulfate to avoid raising pH on ericaceous plants.",
      },
    ],
    avoid: [
      "Do not lime acid-loving shrubs like azaleas and camellias to add magnesium, since raised pH causes iron chlorosis.",
    ],
    recoveryTimeline:
      "New foliage emerges green within one to three weeks of correction, though already yellowed old leaves usually fall.",
    prevention: [
      "Soil test and maintain balanced potassium and magnesium in the shrub fertility program.",
      "Use magnesium sulfate rather than lime on acid-loving shrubs to supply magnesium without shifting pH.",
    ],
    monitoringThresholds: [
      "Reassess lower foliage after correction; if interveinal chlorosis continues, soil test for pH and cation balance.",
    ],
    escalationCriteria: [
      "If shrubs decline despite correction, submit soil and tissue tests and check for root disease or waterlogging.",
    ],
    sources: [
      {
        label: "Royal Horticultural Society — Magnesium deficiency",
        url: "https://www.rhs.org.uk/disorders/magnesium-deficiency",
      },
    ],
  },
  {
    id: "magnesium-deficiency-citrus",
    name: "Magnesium Deficiency (Citrus)",
    category: "nutrient-deficiency",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Orange", "Lemon", "Grapefruit", "Mandarin"],
    growthStages: ["vegetative", "fruiting", "mature"],
    symptomLocations: ["older leaves", "leaf base and midrib", "interveinal areas"],
    symptomProgression:
      "Older citrus leaves develop a characteristic green wedge or inverted V at the leaf base while the tip and margins yellow, symptoms worsen near heavily cropping fruit, and severely affected leaves drop.",
    observableSigns: [
      "Older leaves show a green inverted-V or wedge at the base with yellowing spreading toward the tip and margins.",
      "Yellowing is most severe on leaves near fruit, since developing fruit draw magnesium from adjacent foliage.",
      "Heavily affected leaves drop early, and repeated deficiency reduces yield and fruit quality over time.",
    ],
    favorableConditions: [
      "Sandy, acidic Florida-type soils and high potassium fertilization suppress magnesium availability to citrus.",
      "Heavy fruit loads and leaching rains draw down magnesium during the fruiting period.",
    ],
    lookalikes: [
      {
        condition: "Iron deficiency in citrus",
        differentiator:
          "Iron chlorosis appears on the newest leaves with a fine green vein net, while magnesium shows the basal green wedge on old leaves.",
      },
      {
        condition: "Zinc deficiency in citrus",
        differentiator:
          "Zinc causes small mottled new leaves and rosetting, unlike the large-leaf basal green wedge of magnesium shortage.",
      },
    ],
    immediateActions: [
      "Apply a magnesium sulfate foliar spray to citrus foliage for a rapid response and plan a soil correction today.",
      "Ease back on high-potassium feeding that may be suppressing magnesium uptake.",
    ],
    treatments: [
      {
        situation: "Foliar rescue",
        treatment:
          "Spray magnesium sulfate or magnesium nitrate on the canopy for a quick recovery of leaf color.",
      },
      {
        situation: "Soil correction",
        treatment:
          "Apply dolomitic lime on acidic soils or soil magnesium sulfate elsewhere based on a leaf-tissue analysis.",
      },
    ],
    avoid: [
      "Do not over-apply potassium during fruiting, which antagonizes magnesium and worsens the basal wedge pattern.",
    ],
    recoveryTimeline:
      "Foliar sprays green new flushes within a couple of weeks, while soil correction stabilizes the tree over the season.",
    prevention: [
      "Use annual leaf-tissue analysis to balance magnesium against potassium in the citrus fertility program.",
      "Maintain proper soil pH and apply dolomitic lime where acidic soils limit magnesium.",
    ],
    monitoringThresholds: [
      "Sample spring-flush leaves for tissue analysis and act when magnesium falls below the citrus sufficiency range.",
    ],
    escalationCriteria: [
      "If leaf tissue is adequate but chlorosis persists, have the grove evaluated for root disease or pH lockout.",
    ],
    sources: [
      {
        label: "UF/IFAS Extension — Citrus nutrition",
        url: "https://edis.ifas.ufl.edu/",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // SULFUR (S) — immobile; general chlorosis of NEW leaves
  // ---------------------------------------------------------------------------
  {
    id: "sulfur-deficiency-vegetable-garden",
    name: "Sulfur Deficiency (Vegetable Garden)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Broccoli", "Cabbage", "Onion", "Bean", "Corn"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["new/upper leaves", "whole young shoot", "overall plant"],
    symptomProgression:
      "The youngest leaves turn a uniform pale yellow-green while older leaves stay greener, growth is spindly and stunted, and the whole plant may pale if the shortage is severe and prolonged.",
    observableSigns: [
      "The newest, upper leaves yellow uniformly while lower older leaves keep more of their green color.",
      "Growth is stunted and spindly with thin stems, resembling nitrogen deficiency but on the top of the plant.",
      "Crucifers and legumes, which have high sulfur demand, show the symptoms most readily.",
    ],
    favorableConditions: [
      "Sandy, low-organic-matter soils and reduced atmospheric sulfur deposition leave little available sulfate.",
      "Cold, wet spring soils slow the mineralization of organic sulfur to plant-available sulfate.",
    ],
    lookalikes: [
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen yellowing starts on old lower leaves because it is mobile, while sulfur yellowing starts on new upper leaves.",
      },
      {
        condition: "Iron deficiency",
        differentiator:
          "Iron shortage yellows new leaves between the veins with green veins, whereas sulfur yellows new leaves uniformly.",
      },
    ],
    immediateActions: [
      "Apply a sulfate-containing fertilizer such as ammonium sulfate or gypsum near the roots and water it in today.",
      "Confirm soils are not cold and waterlogged, which slows sulfur release from organic matter.",
    ],
    treatments: [
      {
        situation: "Quick correction",
        treatment:
          "Apply a soluble sulfate source like ammonium sulfate or potassium sulfate to supply plant-available sulfur promptly.",
      },
      {
        situation: "Organic system",
        treatment:
          "Incorporate gypsum or elemental sulfur with compost, recognizing elemental sulfur needs warm soil to convert.",
      },
    ],
    avoid: [
      "Do not rely on elemental sulfur in cold soil for a fast fix, since microbes must first oxidize it to sulfate.",
    ],
    recoveryTimeline:
      "New leaves green up within one to two weeks of applying a soluble sulfate source and warm soils.",
    prevention: [
      "Build organic matter and use sulfate-containing fertilizers on sandy, low-sulfur soils.",
      "Soil test for sulfur on high-demand crops like crucifers and onions and amend before planting.",
    ],
    monitoringThresholds: [
      "Reassess new-leaf color one to two weeks after feeding, and soil test if the whole crop stays pale.",
    ],
    escalationCriteria: [
      "If new-leaf pallor persists after sulfate feeding, submit soil and tissue tests to rule out nitrogen or pH problems.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Sulfur",
        url: "https://extension.umn.edu/micro-and-secondary-macronutrients/sulfur",
      },
    ],
  },
  {
    id: "sulfur-deficiency-canola-cover-crops",
    name: "Sulfur Deficiency (Brassica Field & Cover Crops)",
    category: "nutrient-deficiency",
    affectedPlants: ["specialty-cultivation", "vegetable-garden"],
    specificHosts: ["Canola", "Mustard", "Forage rape", "Turnip"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["upper new leaves", "flowers", "whole plant"],
    symptomProgression:
      "Upper leaves pale and cup, plants stunt, and at flowering the blooms are pale and delayed with poor pod and seed set as the high sulfur demand of brassicas goes unmet on sandy or low-sulfur soils.",
    observableSigns: [
      "Upper younger leaves turn pale yellow-green and may cup upward while lower leaves remain greener.",
      "Flowering is delayed and blooms appear pale, with poor pod and seed set reducing yield.",
      "Plants are noticeably stunted and thin across low-sulfur patches of the field.",
    ],
    favorableConditions: [
      "Sandy, low-organic-matter soils and declining atmospheric sulfur deposition leave brassicas short of sulfate.",
      "Cold, wet springs limit sulfate mineralization exactly when fast-growing brassicas demand sulfur.",
    ],
    lookalikes: [
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen yellowing hits older leaves first, while the sulfur pallor of brassicas starts on the newest upper leaves.",
      },
      {
        condition: "Herbicide injury",
        differentiator:
          "Herbicide injury shows distortion or spotting tied to a spray pass, unlike the uniform upper-leaf pallor of sulfur shortage.",
      },
    ],
    immediateActions: [
      "Top-dress a soluble sulfate fertilizer such as ammonium sulfate over affected areas and time it before rain today.",
      "Note the field pattern to distinguish low-sulfur soil zones from sprayer or drainage issues.",
    ],
    treatments: [
      {
        situation: "In-season rescue",
        treatment:
          "Apply a readily available sulfate source topdressed at early growth so fast-growing brassicas can respond.",
      },
      {
        situation: "Program correction",
        treatment:
          "Include sulfate sulfur in the base fertilizer plan for brassica crops on sandy low-sulfur soils each season.",
      },
    ],
    avoid: [
      "Do not count on elemental sulfur alone in a cold, short season, since it converts to sulfate too slowly for a rescue.",
    ],
    recoveryTimeline:
      "Plants regreen and resume growth within one to two weeks of an available sulfate application in warm conditions.",
    prevention: [
      "Build sulfate sulfur into the fertility program for sulfur-hungry brassica crops on light soils.",
      "Soil and tissue test to identify low-sulfur fields before planting high-demand crops.",
    ],
    monitoringThresholds: [
      "Take tissue tests at early vegetative growth and act if the nitrogen-to-sulfur ratio signals sulfur shortage.",
    ],
    escalationCriteria: [
      "If sulfate topdressing does not green the crop, work with an agronomist to check drainage, pH, and other nutrients.",
    ],
    sources: [
      {
        label: "North Dakota State University Extension — Sulfur in crops",
        url: "https://www.ndsu.edu/agriculture/extension",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // IRON (Fe) — immobile; interveinal chlorosis of NEW leaves, high-pH driven
  // ---------------------------------------------------------------------------
  {
    id: "iron-chlorosis-trees-shrubs",
    name: "Iron Chlorosis (Trees & Shrubs)",
    category: "nutrient-deficiency",
    affectedPlants: ["trees-shrubs", "ornamentals"],
    specificHosts: ["Pin oak", "River birch", "Maple", "Rhododendron", "Blueberry"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["new/terminal leaves", "interveinal areas", "branch tips"],
    symptomProgression:
      "Newest leaves at the branch tips turn pale yellow between fine green veins, in severe cases whole leaves bleach to ivory with scorched brown margins, and repeated seasons cause dieback of twigs and branches.",
    observableSigns: [
      "The youngest terminal leaves show yellowing between a network of fine green veins that stay distinct.",
      "In severe cases leaves turn nearly white with brown scorched margins and reduced size.",
      "Symptoms are worst on new growth at the branch tips and can lead to twig and branch dieback over years.",
    ],
    favorableConditions: [
      "High-pH, calcareous, or over-limed soils chemically lock up iron so roots cannot absorb it.",
      "Waterlogged, compacted, or cold soils restrict root function and reduce iron uptake even at moderate pH.",
    ],
    lookalikes: [
      {
        condition: "Manganese deficiency",
        differentiator:
          "Manganese chlorosis is also on new leaves but shows a broader green band along veins and a more mottled pattern than iron.",
      },
      {
        condition: "Girdling roots or trunk injury",
        differentiator:
          "Girdling causes decline on specific limbs with a visible root or trunk constriction, unlike whole-canopy iron chlorosis.",
      },
    ],
    immediateActions: [
      "Apply a chelated iron soil drench or foliar spray suited to the soil pH for a short-term response today.",
      "Check soil pH and drainage, since high pH or waterlogging usually drives the chlorosis.",
    ],
    treatments: [
      {
        situation: "High-pH soils",
        treatment:
          "Use an EDDHA-form iron chelate that stays available above pH seven and address soil pH over the long term.",
      },
      {
        situation: "Large landscape trees",
        treatment:
          "Consider professional trunk injection of iron for large trees where soil applications are impractical.",
      },
    ],
    avoid: [
      "Do not simply add more iron fertilizer without lowering pH, since high-pH soil re-locks the iron each time.",
    ],
    recoveryTimeline:
      "Chelate applications green new growth within two to four weeks, but durable correction of soil pH takes one or more seasons.",
    prevention: [
      "Select species matched to the soil pH and avoid planting acid-loving species in alkaline ground.",
      "Acidify soils gradually with elemental sulfur where appropriate and improve drainage and aeration.",
    ],
    monitoringThresholds: [
      "Test soil pH and reassess new growth after treatment; act again if the next flush emerges chlorotic.",
    ],
    escalationCriteria: [
      "If chlorosis and dieback continue despite chelates and pH work, have an arborist assess roots and consider injection.",
    ],
    sources: [
      {
        label: "University of Wisconsin Horticulture — Iron chlorosis",
        url: "https://hort.extension.wisc.edu/articles/iron-chlorosis/",
      },
    ],
  },
  {
    id: "iron-deficiency-blueberries",
    name: "Iron Deficiency (Blueberries & Acid-Loving Plants)",
    category: "nutrient-deficiency",
    affectedPlants: ["berries", "ornamentals"],
    specificHosts: ["Blueberry", "Rhododendron", "Azalea", "Cranberry"],
    growthStages: ["vegetative", "flowering", "mature"],
    symptomLocations: ["new/terminal leaves", "interveinal areas"],
    symptomProgression:
      "New leaves yellow between the veins while veins stay green, the whole shrub can turn pale and stunted, and berry yield and vigor decline as high soil pH keeps iron locked from these acid-loving plants.",
    observableSigns: [
      "New leaves show sharp interveinal yellowing with a narrow green vein network on acid-loving shrubs.",
      "Plants are stunted with reduced growth and poor berry set when the shortage is prolonged.",
      "The whole plant may pale in severe cases, and leaf margins can scorch when very deficient.",
    ],
    favorableConditions: [
      "Soil pH above the acid range these plants require locks up iron even when soil iron is plentiful.",
      "Over-liming, alkaline irrigation water, or planting into non-acidic soil rapidly triggers chlorosis.",
    ],
    lookalikes: [
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen yellows old leaves uniformly, whereas iron yellows new leaves between the veins with green veins.",
      },
      {
        condition: "Root rot from wet soil",
        differentiator:
          "Root rot yellows and wilts plants with dark mushy roots in soggy soil, unlike the crisp interveinal pattern of iron shortage.",
      },
    ],
    immediateActions: [
      "Apply a chelated iron foliar spray for a fast green-up and test the soil pH today.",
      "Switch to rainwater or acidified water if the irrigation source is alkaline.",
    ],
    treatments: [
      {
        situation: "pH correction",
        treatment:
          "Lower soil pH into the acid range with elemental sulfur and use acidifying fertilizers formulated for acid-loving plants.",
      },
      {
        situation: "Container plants",
        treatment:
          "Repot into an acidic peat-based mix and use an EDDHA iron chelate to keep iron available in the root zone.",
      },
    ],
    avoid: [
      "Do not add lime or hard alkaline water to blueberries and azaleas, which raises pH and worsens iron lockout.",
    ],
    recoveryTimeline:
      "Foliar iron greens new leaves within a couple of weeks, while soil acidification for lasting correction takes months.",
    prevention: [
      "Plant acid-loving species only in acidified beds and irrigate with soft or acidified water.",
      "Monitor and maintain soil pH in the target acid range with elemental sulfur as needed.",
    ],
    monitoringThresholds: [
      "Test soil pH at least yearly for acid-loving plantings and act whenever pH drifts above the target range.",
    ],
    escalationCriteria: [
      "If chlorosis persists after acidifying and iron treatment, test water quality and check roots for waterlogging damage.",
    ],
    sources: [
      {
        label: "Michigan State University Extension — Blueberry nutrition",
        url: "https://www.canr.msu.edu/blueberries/",
      },
    ],
  },
  {
    id: "iron-deficiency-houseplants",
    name: "Iron Deficiency (Houseplants)",
    category: "nutrient-deficiency",
    affectedPlants: ["houseplants"],
    specificHosts: ["Gardenia", "Citrus indoors", "Calathea", "Hibiscus"],
    growthStages: ["vegetative", "flowering", "mature"],
    symptomLocations: ["new/upper leaves", "interveinal areas", "growing tips"],
    symptomProgression:
      "The newest leaves emerge pale yellow between green veins, the growing tips look bleached while old leaves stay green, and severe cases show ivory new leaves with brown edges as high-pH mix or tap water locks iron away.",
    observableSigns: [
      "Newest leaves and tips show clear interveinal yellowing while veins remain green and older leaves stay dark.",
      "The pattern concentrates on the freshest growth, so the top of the plant looks pale while the base is fine.",
      "Severely affected new leaves may turn nearly white with scorched margins on sensitive plants like gardenia.",
    ],
    favorableConditions: [
      "Alkaline potting mixes, hard tap water, or over-liming raise root-zone pH and lock up iron indoors.",
      "Cold, soggy, or poorly drained mix reduces root function and limits iron uptake even at moderate pH.",
    ],
    lookalikes: [
      {
        condition: "Manganese deficiency",
        differentiator:
          "Manganese chlorosis on new leaves keeps a wider green vein band and looks more mottled than the fine-vein iron pattern.",
      },
      {
        condition: "Overwatering stress",
        differentiator:
          "Overwatering yellows leaves broadly with soggy mix and mushy roots, unlike the crisp new-leaf interveinal iron pattern.",
      },
    ],
    immediateActions: [
      "Apply a chelated iron product as a soil drench or foliar spray for indoor plants and check the water source today.",
      "Switch to rainwater or filtered water if your tap water is hard and alkaline.",
    ],
    treatments: [
      {
        situation: "Acid-loving indoor plants",
        treatment:
          "Use an acidifying fertilizer with chelated iron and repot into a fresh peat-based mix to lower root-zone pH.",
      },
      {
        situation: "Ongoing maintenance",
        treatment:
          "Feed periodically with a micronutrient fertilizer that includes chelated iron and water with soft water.",
      },
    ],
    avoid: [
      "Do not water acid-loving houseplants with hard alkaline water or add lime, which locks iron out again.",
    ],
    recoveryTimeline:
      "New leaves emerge green within two to three weeks of chelate treatment and improved water, while old leaves stay unchanged.",
    prevention: [
      "Use appropriate potting mixes and soft water and feed periodically with a chelated micronutrient product.",
      "Repot every year or two into fresh mix so the root-zone pH does not drift upward from hard water.",
    ],
    monitoringThresholds: [
      "Watch each new flush of leaves and re-treat if new growth emerges chlorotic despite corrected water.",
    ],
    escalationCriteria: [
      "If new growth stays chlorotic after correcting water and iron, unpot to inspect roots for rot from overwatering.",
    ],
    sources: [
      {
        label: "Clemson Cooperative Extension — Indoor plant nutrition",
        url: "https://hgic.clemson.edu/factsheet/indoor-plants-cleaning-fertilizing-containers-and-light-requirements/",
      },
    ],
  },
  {
    id: "iron-deficiency-lawns-turf",
    name: "Iron Deficiency (Lawns & Turf)",
    category: "nutrient-deficiency",
    affectedPlants: ["lawns-turf"],
    specificHosts: ["Centipedegrass", "St. Augustinegrass", "Bermudagrass", "Zoysiagrass"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["new leaf blades", "interveinal blade tissue", "patches of turf"],
    symptomProgression:
      "Turf develops a bright yellow-green cast on the newest blades, often in patches over alkaline or over-limed soil, that appears quickly and, unlike nitrogen shortage, does not respond to added nitrogen.",
    observableSigns: [
      "The newest blades turn bright yellow-green to nearly yellow while growth continues, giving a striped or patchy look.",
      "The yellowing appears on high-pH areas and does not green up when nitrogen fertilizer is applied.",
      "A quick response to iron products confirms the diagnosis, greening the turf within a day or two.",
    ],
    favorableConditions: [
      "High-pH, calcareous, or over-limed soils lock up iron so warm-season grasses cannot absorb it.",
      "Cool, wet soils and heavy phosphorus applications reduce iron availability to turf roots.",
    ],
    lookalikes: [
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen shortage yellows the whole lawn including old blades and greens up with nitrogen, unlike iron which does not.",
      },
      {
        condition: "Fungal disease patch",
        differentiator:
          "Disease patches show lesions or mycelium and defined margins, unlike the uniform interveinal yellowing of iron shortage.",
      },
    ],
    immediateActions: [
      "Apply a chelated or ferrous-sulfate iron product to the turf for a rapid green-up and test the soil pH today.",
      "Avoid adding more nitrogen, since it will not correct an iron-driven yellowing.",
    ],
    treatments: [
      {
        situation: "Quick color",
        treatment:
          "Spray a foliar iron product such as chelated iron or ferrous sulfate for fast, temporary greening of the turf.",
      },
      {
        situation: "High-pH soils",
        treatment:
          "Acidify soil gradually with elemental sulfur where feasible to improve long-term iron availability.",
      },
    ],
    avoid: [
      "Do not apply iron products on hardscapes or overapply ferrous sulfate, which stains concrete and can darken turf unevenly.",
    ],
    recoveryTimeline:
      "Iron sprays green turf within one to two days but the effect is temporary, so repeat or address soil pH for lasting color.",
    prevention: [
      "Select turf species suited to the soil pH and avoid unnecessary liming that raises pH.",
      "Use iron in the maintenance program on alkaline soils and manage phosphorus to keep iron available.",
    ],
    monitoringThresholds: [
      "Reassess color a couple of days after iron application and soil test if yellowing recurs frequently.",
    ],
    escalationCriteria: [
      "If yellowing recurs despite iron and pH management, sample for disease and evaluate soil and drainage professionally.",
    ],
    sources: [
      {
        label: "University of Georgia Extension — Turfgrass nutrition",
        url: "https://extension.uga.edu/topic-areas/lawn-garden-and-landscapes.html",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // MANGANESE (Mn) — immobile; interveinal chlorosis of new leaves, finer
  // ---------------------------------------------------------------------------
  {
    id: "manganese-deficiency-soybean-vegetables",
    name: "Manganese Deficiency (Soybean & Vegetables)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden", "specialty-cultivation"],
    specificHosts: ["Soybean", "Bean", "Pea", "Spinach", "Beet"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["new/upper leaves", "interveinal areas", "leaf between fine veins"],
    symptomProgression:
      "Younger upper leaves develop interveinal yellowing with a broad green band along the main and secondary veins, and in severe cases small necrotic brown flecks appear between the veins as growth slows.",
    observableSigns: [
      "Upper younger leaves yellow between the veins while a wide green band stays around both major and minor veins.",
      "The pattern is coarser than iron chlorosis, with more green retained along the vein network.",
      "Severe cases develop small brown interveinal necrotic spots and a general loss of vigor.",
    ],
    favorableConditions: [
      "High-pH, over-limed, sandy, or high-organic-matter soils reduce manganese availability to roots.",
      "Wet, poorly aerated soils and high phosphorus or iron levels can further limit uptake.",
    ],
    lookalikes: [
      {
        condition: "Iron deficiency",
        differentiator:
          "Iron chlorosis shows a finer green vein net and paler leaves, while manganese keeps broader green bands along the veins.",
      },
      {
        condition: "Magnesium deficiency",
        differentiator:
          "Magnesium chlorosis is on older lower leaves, whereas manganese chlorosis appears on the newest upper leaves.",
      },
    ],
    immediateActions: [
      "Apply a manganese sulfate foliar spray to affected leaves for a quick response and check soil pH today.",
      "Improve drainage on soggy areas that reduce manganese uptake.",
    ],
    treatments: [
      {
        situation: "Quick foliar correction",
        treatment:
          "Spray manganese sulfate on the foliage, repeating as needed, since foliar uptake bypasses soil pH lockout.",
      },
      {
        situation: "High-pH soils",
        treatment:
          "Avoid over-liming and, where practical, lower pH so soil manganese becomes available to roots over time.",
      },
    ],
    avoid: [
      "Do not over-lime these soils chasing calcium, which raises pH and drives manganese out of reach.",
    ],
    recoveryTimeline:
      "Foliar manganese greens new growth within one to two weeks, though repeat sprays may be needed on high-pH soils.",
    prevention: [
      "Manage soil pH toward the crop optimum and avoid unnecessary liming on manganese-prone soils.",
      "Use banded or foliar manganese on high-pH fields with a history of deficiency.",
    ],
    monitoringThresholds: [
      "Take tissue tests at early growth stages and act when manganese falls below the crop sufficiency range.",
    ],
    escalationCriteria: [
      "If foliar manganese and pH management fail, work with an agronomist to check drainage and antagonist nutrient levels.",
    ],
    sources: [
      {
        label: "Purdue University Extension — Manganese deficiency",
        url: "https://www.extension.purdue.edu/",
      },
    ],
  },
  {
    id: "manganese-deficiency-palms",
    name: "Manganese Deficiency — Frizzletop (Palms)",
    category: "nutrient-deficiency",
    affectedPlants: ["trees-shrubs", "ornamentals"],
    specificHosts: ["Queen palm", "Royal palm", "Pygmy date palm", "Canary Island date palm"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["newest emerging fronds", "leaflet tips", "spear leaf"],
    symptomProgression:
      "New fronds emerge weak, yellow-streaked, and with withered, frizzled leaflet tips, successive fronds become smaller and more deformed, and if uncorrected the growing point dies and the palm can be lost.",
    observableSigns: [
      "The newest fronds show interveinal yellowing with necrotic streaks and curled, withered leaflet tips called frizzletop.",
      "Each successive new frond is smaller and more distorted, indicating an actively worsening deficiency.",
      "In advanced cases the emerging spear leaf is stunted and the terminal bud can collapse.",
    ],
    favorableConditions: [
      "High-pH or over-limed soils, cold soils, and waterlogging reduce manganese availability to palm roots.",
      "Sandy soils and heavy leaching drain manganese, and cool weather slows uptake by tropical palms.",
    ],
    lookalikes: [
      {
        condition: "Potassium deficiency in palms",
        differentiator:
          "Potassium deficiency affects the oldest fronds with translucent yellow-orange spotting, opposite the new-frond frizzletop of manganese.",
      },
      {
        condition: "Boron deficiency in palms",
        differentiator:
          "Boron deficiency causes sharply bent or hook-shaped new fronds without the fine interveinal streaking of manganese.",
      },
    ],
    immediateActions: [
      "Apply manganese sulfate to the soil around the palm and consider a foliar spray on new fronds today.",
      "Check and correct soil pH and drainage, which usually drive palm manganese lockout.",
    ],
    treatments: [
      {
        situation: "Landscape palms",
        treatment:
          "Broadcast manganese sulfate over the root zone and repeat based on response, since palms recover slowly frond by frond.",
      },
      {
        situation: "High-pH or cold soils",
        treatment:
          "Address soil pH and drainage and warm-season timing so manganese becomes available to the growing point.",
      },
    ],
    avoid: [
      "Do not remove the frizzled new fronds prematurely, since they still support the recovering growing point.",
    ],
    recoveryTimeline:
      "Recovery is slow, with normal fronds returning only over several months as new growth emerges after correction.",
    prevention: [
      "Use a palm-specific fertilizer containing manganese and maintain proper soil pH and drainage.",
      "Avoid over-liming near palms and plant in warm, well-drained sites suited to the species.",
    ],
    monitoringThresholds: [
      "Track each new frond for improvement and reapply manganese if new fronds still emerge deformed.",
    ],
    escalationCriteria: [
      "If the spear leaf collapses or new fronds keep deforming, have an arborist assess the bud before the palm is lost.",
    ],
    sources: [
      {
        label: "UF/IFAS Extension — Palm nutrition",
        url: "https://edis.ifas.ufl.edu/",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // ZINC (Zn) — immobile; small leaves, rosetting, interveinal mottle
  // ---------------------------------------------------------------------------
  {
    id: "zinc-deficiency-fruit-trees",
    name: "Zinc Deficiency — Little Leaf & Rosette (Fruit & Nut Trees)",
    category: "nutrient-deficiency",
    affectedPlants: ["fruit-trees", "trees-shrubs"],
    specificHosts: ["Peach", "Apple", "Pecan", "Citrus"],
    growthStages: ["vegetative", "fruiting", "mature"],
    symptomLocations: ["shoot tips", "new leaves", "terminal rosettes"],
    symptomProgression:
      "Shoot tips produce small, narrow, distorted leaves crowded into rosettes at the ends of branches, internodes shorten, and interveinal mottling develops, reducing shoot vigor, fruit set, and nut fill over the season.",
    observableSigns: [
      "New leaves at shoot tips are abnormally small and narrow with wavy margins and interveinal mottling.",
      "Short internodes bunch the small leaves into a rosette at branch ends, the classic little-leaf symptom.",
      "Shoot vigor, fruit set, and nut fill decline, and terminal dieback can follow in severe cases.",
    ],
    favorableConditions: [
      "High-pH, calcareous, sandy, or heavily leached soils and high phosphorus reduce zinc availability.",
      "Cold, wet soils and low organic matter further limit root uptake of zinc in spring.",
    ],
    lookalikes: [
      {
        condition: "Herbicide injury",
        differentiator:
          "Herbicide injury distorts leaves in relation to a spray event and lacks the interveinal mottling and rosetting of zinc shortage.",
      },
      {
        condition: "Manganese deficiency",
        differentiator:
          "Manganese chlorosis keeps normal leaf size with interveinal yellowing, unlike the small crowded leaves of zinc shortage.",
      },
    ],
    immediateActions: [
      "Apply a zinc foliar spray timed to the species, such as a dormant or post-harvest spray, and test the soil today.",
      "Avoid heavy phosphorus applications that can antagonize zinc uptake.",
    ],
    treatments: [
      {
        situation: "Deciduous fruit and nut trees",
        treatment:
          "Apply zinc sulfate as a dormant or foliar spray at the timing recommended for the species to restore normal leaves.",
      },
      {
        situation: "High-pH soils",
        treatment:
          "Use chelated zinc soil applications and manage pH, since soil zinc is quickly locked up in alkaline ground.",
      },
    ],
    avoid: [
      "Do not over-apply phosphorus fertilizer, which suppresses zinc uptake and worsens little-leaf symptoms.",
    ],
    recoveryTimeline:
      "New flushes produce normal-sized leaves within a few weeks of correction, and full vigor returns over the following season.",
    prevention: [
      "Use routine zinc sprays on orchards with a history of little leaf and avoid excess phosphorus.",
      "Soil and tissue test to guide zinc rates and correct soil pH where it locks up zinc.",
    ],
    monitoringThresholds: [
      "Sample leaves at the recommended stage for tissue analysis and act when zinc is below the sufficiency range.",
    ],
    escalationCriteria: [
      "If rosetting and dieback persist despite zinc sprays, have the orchard evaluated for viruses or root problems.",
    ],
    sources: [
      {
        label: "UC IPM — Zinc deficiency in fruit trees",
        url: "https://ipm.ucanr.edu/agriculture/",
      },
    ],
  },
  {
    id: "zinc-deficiency-corn-field-crops",
    name: "Zinc Deficiency (Corn & Field Crops)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden", "specialty-cultivation"],
    specificHosts: ["Corn", "Sweet corn", "Sorghum", "Bean"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["new/upper leaves", "leaf base and midrib", "whole young plant"],
    symptomProgression:
      "Young corn develops broad pale to white interveinal bands on the lower half of new leaves near the midrib, plants stunt with shortened internodes, and severe early deficiency delays maturity and lowers yield.",
    observableSigns: [
      "New leaves show broad bleached yellow-white bands between the midrib and margin, strongest toward the leaf base.",
      "Plants are stunted with shortened internodes and a bunched appearance in affected patches.",
      "Symptoms appear early in the season and are worst on eroded knolls or exposed subsoil.",
    ],
    favorableConditions: [
      "High-pH, calcareous, sandy, or exposed-subsoil soils and cold wet springs limit zinc availability to seedlings.",
      "High phosphorus fertilization and low organic matter further suppress zinc uptake.",
    ],
    lookalikes: [
      {
        condition: "Sulfur deficiency",
        differentiator:
          "Sulfur causes uniform pale new leaves without the distinct bleached interveinal bands of zinc near the midrib.",
      },
      {
        condition: "Herbicide bleaching",
        differentiator:
          "Bleaching herbicides whiten new tissue tied to a spray pass, unlike the banded midrib pattern of zinc shortage.",
      },
    ],
    immediateActions: [
      "Apply a foliar zinc sulfate or chelated zinc spray to seedlings for a quick response and pull a soil test today.",
      "Avoid banding high phosphorus rates that antagonize zinc near the seedling roots.",
    ],
    treatments: [
      {
        situation: "In-season rescue",
        treatment:
          "Spray foliar zinc on young plants to correct the current crop while soil zinc is built for the future.",
      },
      {
        situation: "Low-testing fields",
        treatment:
          "Apply banded or broadcast zinc based on soil test to prevent deficiency, especially on high-pH sandy soils.",
      },
    ],
    avoid: [
      "Do not over-apply phosphorus starter on low-zinc soils, since it worsens zinc shortage in seedlings.",
    ],
    recoveryTimeline:
      "New leaves emerge with normal color within one to two weeks of foliar zinc if applied while plants are young.",
    prevention: [
      "Soil test and build zinc on high-pH, sandy, or eroded fields before planting responsive crops.",
      "Balance phosphorus rates and add zinc to the starter on fields with a deficiency history.",
    ],
    monitoringThresholds: [
      "Scout early growth stages and tissue test; act when banded chlorosis and stunting appear on responsive soils.",
    ],
    escalationCriteria: [
      "If banded symptoms persist after foliar zinc, review soil test and phosphorus balance with an agronomist.",
    ],
    sources: [
      {
        label: "Kansas State University Extension — Zinc in crops",
        url: "https://www.agronomy.k-state.edu/extension/",
      },
    ],
  },
  {
    id: "zinc-deficiency-pecans",
    name: "Zinc Deficiency — Rosette (Pecans)",
    category: "nutrient-deficiency",
    affectedPlants: ["fruit-trees", "trees-shrubs"],
    specificHosts: ["Pecan", "Hickory", "Walnut"],
    growthStages: ["vegetative", "fruiting", "mature"],
    symptomLocations: ["shoot tips", "new leaves", "terminal growth"],
    symptomProgression:
      "New leaflets are small, crinkled, and wavy with interveinal mottling, internodes shorten to crowd leaves into a rosette at shoot tips, and severe deficiency causes terminal dieback and sharply reduced nut yield.",
    observableSigns: [
      "New leaflets are undersized, wavy, and crinkled with yellow interveinal mottling on the newest growth.",
      "Shortened internodes bunch small leaves into rosettes at the ends of shoots in the characteristic pecan pattern.",
      "Severe cases show shoot-tip dieback, sparse foliage, and greatly reduced nut set and fill.",
    ],
    favorableConditions: [
      "High-pH, calcareous, sandy soils typical of pecan regions bind zinc and make deficiency common.",
      "Heavy phosphorus fertilization and low organic matter reduce zinc uptake by pecan roots.",
    ],
    lookalikes: [
      {
        condition: "Mouse-ear from nickel deficiency",
        differentiator:
          "Nickel-related mouse-ear gives blunt rounded leaflet tips, whereas zinc rosette gives small wavy crinkled leaflets.",
      },
      {
        condition: "Herbicide drift injury",
        differentiator:
          "Herbicide drift distorts leaves near a spray event and lacks the persistent rosetting and mottling of zinc shortage.",
      },
    ],
    immediateActions: [
      "Begin the season's foliar zinc spray program on new growth and pull soil and tissue samples today.",
      "Avoid heavy phosphorus applications that antagonize zinc in the orchard.",
    ],
    treatments: [
      {
        situation: "Commercial and yard pecans",
        treatment:
          "Apply repeated foliar zinc sulfate or zinc chelate sprays through the flush period, as pecans rely on foliar zinc.",
      },
      {
        situation: "High-pH soils",
        treatment:
          "Use chelated zinc and manage phosphorus, since soil-applied zinc is quickly locked up in alkaline pecan soils.",
      },
    ],
    avoid: [
      "Do not depend on soil-applied zinc alone on high-pH orchard soils, since it is rapidly tied up and unavailable.",
    ],
    recoveryTimeline:
      "New flushes produce normal leaflets within a few weeks of foliar zinc, with tree vigor rebuilding over the season.",
    prevention: [
      "Follow a routine multi-spray foliar zinc program during the growing flush for pecans.",
      "Soil and tissue test and manage phosphorus to keep zinc available in the orchard.",
    ],
    monitoringThresholds: [
      "Sample midseason leaves for tissue zinc and adjust the spray program when levels fall below the sufficiency range.",
    ],
    escalationCriteria: [
      "If rosette and dieback persist despite a full spray program, consult a pecan specialist about site and root issues.",
    ],
    sources: [
      {
        label: "Texas A&M AgriLife Extension — Pecan zinc",
        url: "https://agrilifeextension.tamu.edu/",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // BORON (B) — immobile; growing points, hollow/corky tissue, cracking
  // ---------------------------------------------------------------------------
  {
    id: "boron-deficiency-root-crops",
    name: "Boron Deficiency (Root & Cole Crops)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Beet", "Turnip", "Rutabaga", "Cauliflower", "Radish"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["storage root interior", "growing points", "root surface"],
    symptomProgression:
      "Growing points and root interiors develop brown corky lesions, roots crack and hollow, and cole crops show hollow or discolored stems and browning curds as the immobile boron fails to supply new tissue.",
    observableSigns: [
      "Cutting the storage root reveals brown, corky, water-soaked internal lesions or hollow centers.",
      "Root surfaces crack and become rough, and cauliflower shows browning curds and hollow stems.",
      "Growing points may die back and new leaves are distorted and brittle on affected plants.",
    ],
    favorableConditions: [
      "Sandy, low-organic-matter, high-pH, or heavily limed soils and drought reduce boron availability.",
      "Leaching rains on light soils quickly drain the small pool of available boron.",
    ],
    lookalikes: [
      {
        condition: "Calcium deficiency",
        differentiator:
          "Calcium disorders scorch new leaf margins and fruit ends, while boron shortage causes internal corky root lesions and cracking.",
      },
      {
        condition: "Root maggot damage",
        differentiator:
          "Root maggots leave tunnels with larvae and frass, unlike the clean brown corky internal breakdown of boron shortage.",
      },
    ],
    immediateActions: [
      "Apply a carefully measured low rate of borax or a boron fertilizer and water it in evenly today.",
      "Maintain steady soil moisture, since drought worsens boron uptake in root crops.",
    ],
    treatments: [
      {
        situation: "Confirmed low soil test",
        treatment:
          "Apply a soil-test-based low rate of boron before planting, mixing it thoroughly to avoid concentrated hot spots.",
      },
      {
        situation: "Sensitive rotations",
        treatment:
          "Foliar-feed a dilute boron solution to responsive crops and avoid boron ahead of boron-sensitive crops like beans.",
      },
    ],
    avoid: [
      "Do not over-apply boron, because the gap between deficiency and toxicity is very narrow and excess kills plants.",
    ],
    recoveryTimeline:
      "New growth improves within one to two weeks of correction, but roots already showing internal breakdown will not recover.",
    prevention: [
      "Soil test for boron on sandy high-pH soils and apply low measured rates only when needed.",
      "Maintain organic matter and steady moisture to keep the small boron pool available to roots.",
    ],
    monitoringThresholds: [
      "Cut sample roots to check for internal corking and soil test boron before growing responsive crops.",
    ],
    escalationCriteria: [
      "If corky root breakdown recurs despite careful boron use, have soil and tissue tested to confirm rate and pH.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Boron",
        url: "https://extension.umn.edu/micro-and-secondary-macronutrients/boron",
      },
    ],
  },
  {
    id: "boron-deficiency-fruit-trees",
    name: "Boron Deficiency (Fruit Trees)",
    category: "nutrient-deficiency",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Apple", "Pear", "Cherry", "Almond"],
    growthStages: ["flowering", "fruiting", "mature"],
    symptomLocations: ["shoot tips", "fruit flesh and surface", "flowers"],
    symptomProgression:
      "Poor fruit set follows weak flowering, shoot tips die back, and fruit develop internal corky brown spots and external cracking or dimpling, with the immobile boron shortage worsening on light or alkaline soils.",
    observableSigns: [
      "Fruit show internal brown corky spots and external dimpling, cracking, or misshapen development.",
      "Shoot tips die back and new growth is distorted, with rosette-like clustering in severe cases.",
      "Flowering and fruit set are poor, reducing yield even when bloom appears adequate.",
    ],
    favorableConditions: [
      "Sandy, low-organic-matter, high-pH, or over-limed soils and drought reduce boron availability to trees.",
      "Heavy leaching on light soils drains boron during the critical bloom and fruit-set period.",
    ],
    lookalikes: [
      {
        condition: "Bitter pit from calcium shortage",
        differentiator:
          "Bitter pit pits are subskin and near the calyx, while boron corking is deeper in the flesh with external dimpling and cracking.",
      },
      {
        condition: "Frost injury to fruit",
        differentiator:
          "Frost causes russeting and misshaping tied to a cold event at bloom, unlike the internal corking of boron shortage.",
      },
    ],
    immediateActions: [
      "Apply a low-rate boron foliar spray around bloom for responsive orchards and check the soil today.",
      "Maintain irrigation to keep boron available through the fruit-set period.",
    ],
    treatments: [
      {
        situation: "Bloom-time correction",
        treatment:
          "Apply a dilute boron foliar spray at pink or bloom to improve pollination and fruit set on deficient trees.",
      },
      {
        situation: "Soil correction",
        treatment:
          "Apply a low soil rate of boron based on tissue analysis, keeping well below toxicity thresholds.",
      },
    ],
    avoid: [
      "Do not exceed recommended boron rates, since fruit trees are easily injured by boron excess.",
    ],
    recoveryTimeline:
      "Fruit set and shoot growth improve the same season after bloom sprays, with full correction taking a full season.",
    prevention: [
      "Use midsummer leaf-tissue analysis to guide small, precise boron applications each year.",
      "Maintain organic matter, pH, and steady moisture so the limited boron pool stays available.",
    ],
    monitoringThresholds: [
      "Sample leaves in midsummer and act when tissue boron is at the low end of the sufficiency range.",
    ],
    escalationCriteria: [
      "If corking and poor set persist despite correct boron, submit tissue and soil tests to rule out toxicity or other causes.",
    ],
    sources: [
      {
        label: "Oregon State University Extension — Boron in tree fruit",
        url: "https://extension.oregonstate.edu/crop-production/fruit-trees",
      },
    ],
  },
  {
    id: "boron-deficiency-brassica-heart-rot",
    name: "Boron Deficiency — Brown Heart & Hollow Stem (Brassicas)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden", "specialty-cultivation"],
    specificHosts: ["Cauliflower", "Broccoli", "Cabbage", "Canola"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["stem interior", "curd and head", "growing point"],
    symptomProgression:
      "Stems become hollow and brown internally, cauliflower curds discolor and taste bitter, growing points distort, and canola shows poor flowering and pod set as immobile boron fails to reach developing tissue.",
    observableSigns: [
      "Splitting the stem reveals hollow, water-soaked, brown discolored pith in the center of the stalk.",
      "Cauliflower curds show brown discoloration and a bitter taste, and heads may be small and distorted.",
      "Growing points and new leaves are brittle and distorted, and canola shows poor flowering and pod fill.",
    ],
    favorableConditions: [
      "Sandy, high-pH, over-limed, low-organic-matter soils and drought reduce boron for high-demand brassicas.",
      "Rapid growth and heavy leaching draw down the small available boron pool during head formation.",
    ],
    lookalikes: [
      {
        condition: "Hollow stem from rapid growth",
        differentiator:
          "Growth-related hollow stem lacks the brown water-soaked discoloration and bitterness that mark boron shortage.",
      },
      {
        condition: "Clubroot disease",
        differentiator:
          "Clubroot swells and galls the roots with wilting, unlike the internal stem browning and corky tissue of boron shortage.",
      },
    ],
    immediateActions: [
      "Apply a carefully measured low rate of boron to the soil or as a dilute foliar spray and water evenly today.",
      "Keep soil moisture steady to improve boron uptake during head formation.",
    ],
    treatments: [
      {
        situation: "Confirmed low boron",
        treatment:
          "Apply a soil-test-based low boron rate before planting brassicas, mixing thoroughly to avoid hot spots.",
      },
      {
        situation: "In-crop correction",
        treatment:
          "Foliar-feed a dilute boron solution to the crop during rapid growth to supply the immobile nutrient.",
      },
    ],
    avoid: [
      "Do not exceed the recommended boron rate, since brassicas are injured by even slightly excessive boron.",
    ],
    recoveryTimeline:
      "New leaves and heads formed after correction develop normally within one to two weeks, but damaged stems will not heal.",
    prevention: [
      "Soil test for boron and apply small measured rates for high-demand brassica crops on light soils.",
      "Maintain organic matter and steady moisture and avoid over-liming that locks up boron.",
    ],
    monitoringThresholds: [
      "Cut sample stems and curds to check for browning and soil test boron before planting brassicas.",
    ],
    escalationCriteria: [
      "If brown heart recurs despite careful boron use, submit soil and tissue tests to verify rate, pH, and moisture.",
    ],
    sources: [
      {
        label: "University of Massachusetts Extension — Boron in vegetables",
        url: "https://ag.umass.edu/vegetable",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // COPPER (Cu) — immobile; wilting/dieback of new growth, on organic soils
  // ---------------------------------------------------------------------------
  {
    id: "copper-deficiency-vegetables-grains",
    name: "Copper Deficiency (Vegetables & Small Grains)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden", "specialty-cultivation"],
    specificHosts: ["Wheat", "Onion", "Lettuce", "Carrot", "Oat"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["new/young leaves", "leaf tips", "growing points"],
    symptomProgression:
      "Young leaves become pale, twisted, and limp with dieback of the tips, onions form thin pale bulb scales, and small grains show white twisted flag leaves and poor grain set on peat or sandy soils.",
    observableSigns: [
      "New leaves are pale, narrow, twisted, and wilted with tip dieback while older leaves stay greener.",
      "Onion bulbs develop thin, pale, soft outer scales instead of firm colored wrappers.",
      "Small grains show white-tipped twisted flag leaves, limp heads, and poor seed set in deficient patches.",
    ],
    favorableConditions: [
      "High-organic-matter peat and muck soils bind copper tightly and are the classic deficiency sites.",
      "Sandy, leached, or high-pH soils and heavy nitrogen also reduce copper availability.",
    ],
    lookalikes: [
      {
        condition: "Drought wilting",
        differentiator:
          "Drought wilt recovers with water and affects the whole plant, while copper shortage twists and kills new growth even when moist.",
      },
      {
        condition: "Herbicide injury",
        differentiator:
          "Herbicide injury ties distortion to a spray pass and often affects all leaves, unlike copper's new-growth twisting on muck soils.",
      },
    ],
    immediateActions: [
      "Apply a foliar copper spray such as copper sulfate or a chelate to affected plants and soil test today.",
      "Ease back on heavy nitrogen, which can worsen copper shortage on organic soils.",
    ],
    treatments: [
      {
        situation: "Peat and muck soils",
        treatment:
          "Apply soil copper sulfate at a soil-test-based rate on organic soils where copper is chronically deficient.",
      },
      {
        situation: "Quick in-crop fix",
        treatment:
          "Use a foliar copper spray to correct the current crop while building soil copper for the future.",
      },
    ],
    avoid: [
      "Do not over-apply copper, since it accumulates and becomes toxic and long-lasting in the soil.",
    ],
    recoveryTimeline:
      "New leaves emerge normal within one to two weeks of foliar copper, and soil copper on muck soils lasts several years.",
    prevention: [
      "Soil test and correct copper on organic peat and muck soils before growing responsive crops.",
      "Balance nitrogen rates so heavy feeding does not induce copper shortage on light or organic soils.",
    ],
    monitoringThresholds: [
      "Tissue test responsive crops and act when copper is below the sufficiency range, especially on organic soils.",
    ],
    escalationCriteria: [
      "If twisting and dieback persist after foliar copper, submit soil and tissue tests to confirm the diagnosis.",
    ],
    sources: [
      {
        label: "University of Wisconsin Extension — Copper in crops",
        url: "https://extension.wisc.edu/agriculture/",
      },
    ],
  },
  {
    id: "copper-deficiency-citrus-dieback",
    name: "Copper Deficiency — Dieback (Citrus & Fruit Trees)",
    category: "nutrient-deficiency",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Orange", "Grapefruit", "Lemon", "Peach"],
    growthStages: ["vegetative", "fruiting", "mature"],
    symptomLocations: ["shoot tips", "new growth", "fruit surface"],
    symptomProgression:
      "New shoots grow long, soft, and S-shaped then die back from the tip, gum pockets form under the bark, and fruit develop brown gummy surface excrescences as immobile copper fails to strengthen new tissue.",
    observableSigns: [
      "New shoots are unusually long, weak, and bent in an S-shape before the tips wilt and die back.",
      "Reddish-brown gum pockets form under the bark of twigs and blister the surface in a condition called ammoniation.",
      "Fruit surfaces develop brown gummy excrescences and may split, and multiple weak shoots sprout below dieback.",
    ],
    favorableConditions: [
      "Sandy, high-pH, over-limed, or high-organic-matter soils reduce copper availability to citrus.",
      "Heavy nitrogen fertilization and rapid growth increase copper demand and worsen dieback.",
    ],
    lookalikes: [
      {
        condition: "Citrus blast or twig dieback disease",
        differentiator:
          "Bacterial twig dieback shows lesions and follows wet weather, unlike the S-shaped shoots and gum pockets of copper shortage.",
      },
      {
        condition: "Boron deficiency",
        differentiator:
          "Boron shortage causes internal fruit corking and brittle growth, while copper causes S-shaped shoots, gumming, and dieback.",
      },
    ],
    immediateActions: [
      "Apply a copper foliar spray or copper-containing product to affected trees and check soil pH today.",
      "Reduce excessive nitrogen that is pushing weak copper-deficient growth.",
    ],
    treatments: [
      {
        situation: "Grove-scale correction",
        treatment:
          "Apply soil or foliar copper based on tissue analysis, taking care not to build copper to toxic levels.",
      },
      {
        situation: "Nitrogen management",
        treatment:
          "Balance nitrogen rates so vigorous growth does not outstrip copper supply and trigger dieback.",
      },
    ],
    avoid: [
      "Do not repeatedly over-apply copper sprays, since copper accumulates in soil and becomes toxic to roots.",
    ],
    recoveryTimeline:
      "New shoots grow normally within a few weeks of correction, but shoots already killed back must be pruned out.",
    prevention: [
      "Use tissue analysis to guide modest copper applications and manage nitrogen rates in the grove.",
      "Maintain proper soil pH and organic-matter balance so copper stays available without over-applying.",
    ],
    monitoringThresholds: [
      "Sample leaves for tissue copper and act when levels fall below the citrus sufficiency range.",
    ],
    escalationCriteria: [
      "If dieback and gumming persist despite copper correction, have the grove evaluated for disease and copper toxicity.",
    ],
    sources: [
      {
        label: "UF/IFAS Extension — Citrus copper nutrition",
        url: "https://edis.ifas.ufl.edu/",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // MOLYBDENUM (Mo) — needed for N metabolism; acid-soil driven
  // ---------------------------------------------------------------------------
  {
    id: "molybdenum-deficiency-cauliflower-whiptail",
    name: "Molybdenum Deficiency — Whiptail (Cauliflower & Brassicas)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Cauliflower", "Broccoli", "Cabbage", "Kale"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["new leaf blades", "leaf margins", "growing point"],
    symptomProgression:
      "Leaf blades fail to expand so leaves become narrow, strap-like whiptails with cupped scorched margins, the growing point can be deformed or killed, and cauliflower fails to form a proper curd on acidic soils.",
    observableSigns: [
      "New leaves have greatly reduced blade tissue, leaving narrow strap-like or whiptail leaves with only the midrib.",
      "Older leaves may show marginal chlorosis and cupping, and margins scorch and curl inward.",
      "The growing point can be distorted or blind so cauliflower fails to develop a normal curd.",
    ],
    favorableConditions: [
      "Acidic soils below the mid-fives in pH sharply reduce molybdenum availability to brassicas.",
      "Sandy, leached soils and cool wet conditions further limit the small molybdenum supply.",
    ],
    lookalikes: [
      {
        condition: "Herbicide injury",
        differentiator:
          "Herbicide injury distorts leaves tied to a spray event, unlike the strap-like whiptail from acid-soil molybdenum shortage.",
      },
      {
        condition: "Boron deficiency",
        differentiator:
          "Boron shortage causes brown internal stem and curd corking, while molybdenum causes strap-like whiptail leaf blades.",
      },
    ],
    immediateActions: [
      "Apply a dilute sodium molybdate foliar spray to seedlings and raise soil pH with lime as needed today.",
      "Test soil pH, since molybdenum shortage is usually an acid-soil problem corrected by liming.",
    ],
    treatments: [
      {
        situation: "Acid soils",
        treatment:
          "Lime to raise pH into the recommended range, which restores molybdenum availability and often fully corrects the problem.",
      },
      {
        situation: "Quick seedling fix",
        treatment:
          "Apply a very dilute sodium molybdate foliar spray or transplant drench to correct young plants promptly.",
      },
    ],
    avoid: [
      "Do not over-apply molybdenum, since only a tiny amount is needed and excess can accumulate in edible tissue.",
    ],
    recoveryTimeline:
      "New leaves expand normally within one to two weeks after liming and molybdenum, though whiptail leaves stay deformed.",
    prevention: [
      "Lime acidic soils to the recommended pH before planting brassicas to keep molybdenum available.",
      "Soil test for pH and use a molybdenum seed treatment where the deficiency has occurred before.",
    ],
    monitoringThresholds: [
      "Test soil pH and scout seedlings; act when pH is low or new leaves begin to narrow into straps.",
    ],
    escalationCriteria: [
      "If whiptail recurs after correct liming, submit soil and tissue tests to confirm molybdenum and pH status.",
    ],
    sources: [
      {
        label: "University of Massachusetts Extension — Molybdenum in vegetables",
        url: "https://ag.umass.edu/vegetable",
      },
    ],
  },
  {
    id: "molybdenum-deficiency-legumes",
    name: "Molybdenum Deficiency (Legumes)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden", "specialty-cultivation"],
    specificHosts: ["Soybean", "Bean", "Clover", "Alfalfa", "Pea"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["whole plant", "older leaves", "root nodules"],
    symptomProgression:
      "Legumes show a nitrogen-deficiency-like pale, stunted appearance because poor nodulation limits nitrogen fixation, with pale yellow-green foliage and weak growth that persists on acidic soils where molybdenum is locked up.",
    observableSigns: [
      "Plants look nitrogen-starved with pale yellow-green leaves and stunted growth despite adequate soil nitrogen.",
      "Root nodules are few, small, or ineffective, so nitrogen fixation is impaired in the legume.",
      "Symptoms are worst on acidic soils and improve where lime has raised the pH.",
    ],
    favorableConditions: [
      "Acidic soils below the mid-fives lock up molybdenum and impair rhizobial nitrogen fixation in legumes.",
      "Sandy, leached, low-molybdenum soils further reduce the small available supply.",
    ],
    lookalikes: [
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "True nitrogen shortage greens up with nitrogen fertilizer, while molybdenum shortage responds to liming and molybdenum, not extra nitrogen.",
      },
      {
        condition: "Poor rhizobial inoculation",
        differentiator:
          "Missing inoculant gives poor nodulation on any pH, whereas molybdenum shortage impairs nodules mainly on acidic soils.",
      },
    ],
    immediateActions: [
      "Test soil pH and lime acidic soils, and apply a molybdenum seed treatment or dilute foliar spray today.",
      "Confirm the legume was properly inoculated so nodulation is not the real limitation.",
    ],
    treatments: [
      {
        situation: "Acid soils",
        treatment:
          "Lime to the recommended pH to release molybdenum and restore effective nodulation and nitrogen fixation.",
      },
      {
        situation: "Seed treatment",
        treatment:
          "Treat seed with a small measured dose of sodium molybdate before planting on molybdenum-deficient fields.",
      },
    ],
    avoid: [
      "Do not simply add nitrogen fertilizer, which masks the problem without fixing the underlying molybdenum and nodulation issue.",
    ],
    recoveryTimeline:
      "Nodulation and color improve over two to four weeks after liming and molybdenum, restoring nitrogen fixation.",
    prevention: [
      "Lime acidic soils to the target pH and use molybdenum seed treatment where deficiency has occurred.",
      "Inoculate legume seed properly so effective nodulation supports nitrogen fixation.",
    ],
    monitoringThresholds: [
      "Test soil pH and dig plants to check nodulation; act when pH is low or nodules are sparse and pale.",
    ],
    escalationCriteria: [
      "If pale stunted growth persists after liming and inoculation, submit soil and tissue tests for confirmation.",
    ],
    sources: [
      {
        label: "USDA Natural Resources Conservation Service — Soil nutrients",
        url: "https://www.nrcs.usda.gov/",
      },
    ],
  },
  // ---------------------------------------------------------------------------
  // Additional distinct host contexts to complete breadth (45 total)
  // ---------------------------------------------------------------------------
  {
    id: "nitrogen-deficiency-succulents-cacti",
    name: "Nitrogen Deficiency (Succulents & Cacti)",
    category: "nutrient-deficiency",
    affectedPlants: ["succulents-cacti"],
    specificHosts: ["Echeveria", "Aloe", "Jade plant", "Haworthia"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["older/lower leaves", "overall plant color"],
    symptomProgression:
      "Older lower leaves fade to pale green and the whole plant loses its rich color and slows growth over months, since these low-demand plants deplete a small pot of unfertilized mix only gradually.",
    observableSigns: [
      "Older, lower leaves pale to a washed-out green while new growth is small and slow to appear.",
      "The overall plant looks faded and unthrifty, lacking the firm color of a well-fed succulent.",
      "Growth all but stops during the season even under good light, pointing to depleted mix rather than dormancy.",
    ],
    favorableConditions: [
      "Long periods in the same small pot of gritty mix without any feeding slowly exhaust available nitrogen.",
      "Frequent watering of free-draining succulent mix flushes what little nitrogen is present.",
    ],
    lookalikes: [
      {
        condition: "Etiolation from low light",
        differentiator:
          "Low light stretches pale succulents with widened spacing between leaves, unlike the bottom-up fade of nitrogen shortage.",
      },
      {
        condition: "Overwatering root rot",
        differentiator:
          "Root rot yellows and softens leaves with mushy stems in wet mix, unlike the slow dry fade of nitrogen depletion.",
      },
    ],
    immediateActions: [
      "Feed with a dilute balanced fertilizer at quarter strength during a watering in the active growing season today.",
      "Confirm the plant has bright light so it can actually use the added nitrogen.",
    ],
    treatments: [
      {
        situation: "Light feeding",
        treatment:
          "Apply a diluted balanced fertilizer sparingly once or twice during the growing season for slow-feeding succulents.",
      },
      {
        situation: "Old depleted mix",
        treatment:
          "Repot into fresh gritty succulent mix to renew the small nutrient supply without overloading the roots.",
      },
    ],
    avoid: [
      "Do not fertilize heavily or during dormancy, since succulents need little nitrogen and excess causes weak etiolated growth.",
    ],
    recoveryTimeline:
      "New growth greens and firms over three to six weeks of light feeding and good light, while old faded leaves stay pale.",
    prevention: [
      "Feed lightly only during active growth and repot into fresh mix every few years.",
      "Provide bright light and restrained watering so nitrogen is used efficiently and not leached away.",
    ],
    monitoringThresholds: [
      "Reassess color and growth after a month of light feeding, and check light levels if it does not improve.",
    ],
    escalationCriteria: [
      "If leaves keep yellowing and softening despite light feeding, unpot to check for root rot from overwatering.",
    ],
    sources: [
      {
        label: "University of Arizona Cooperative Extension — Cacti and succulents",
        url: "https://extension.arizona.edu/",
      },
    ],
  },
  {
    id: "potassium-deficiency-potatoes",
    name: "Potassium Deficiency (Potatoes)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Potato"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["older/lower leaves", "leaf margins", "tubers"],
    symptomProgression:
      "Older leaves darken then develop bronzing and marginal scorch with downward cupping, plants look dull and drawn, and tubers are smaller with internal blackspot as potassium is drawn to meet tuber-bulking demand.",
    observableSigns: [
      "Older leaves turn a dull dark bronze-green then scorch along the margins with a downward-cupped, crinkled look.",
      "The canopy appears dull and drawn rather than lush, with reduced interveinal luster on lower leaves.",
      "Tubers are undersized and prone to internal blackspot bruising, reducing quality at harvest.",
    ],
    favorableConditions: [
      "Sandy, leached, or acidic soils and the heavy potassium demand of tuber bulking drain available potassium.",
      "High magnesium or excessive liming can antagonize potassium uptake in potato ground.",
    ],
    lookalikes: [
      {
        condition: "Early blight",
        differentiator:
          "Early blight makes concentric-ringed brown lesions on leaves, unlike the bronzing and marginal scorch of potassium shortage.",
      },
      {
        condition: "Magnesium deficiency",
        differentiator:
          "Magnesium yellows between the veins of old leaves, while potassium bronzes and scorches the margins with cupping.",
      },
    ],
    immediateActions: [
      "Apply a potassium fertilizer such as sulfate of potash based on soil test near the rows and water in today.",
      "Maintain even soil moisture through tuber bulking to reduce stress that intensifies symptoms.",
    ],
    treatments: [
      {
        situation: "Tuber bulking demand",
        treatment:
          "Supply adequate potassium before and during bulking, favoring sulfate of potash to avoid chloride effects on quality.",
      },
      {
        situation: "Sandy soils",
        treatment:
          "Split potassium applications on light soils so leaching does not undercut the crop during the season.",
      },
    ],
    avoid: [
      "Do not rely on high-chloride muriate of potash for quality potatoes, and avoid over-liming that suppresses potassium.",
    ],
    recoveryTimeline:
      "New foliage improves within two to three weeks of feeding, and tuber size and quality benefit through the rest of bulking.",
    prevention: [
      "Soil test and pre-plant amend potassium to match the crop's high bulking demand.",
      "Use sulfate of potash on quality crops and keep soil moisture steady during bulking.",
    ],
    monitoringThresholds: [
      "Take petiole or leaf samples during bulking and act when potassium falls below the sufficiency range.",
    ],
    escalationCriteria: [
      "If bronzing and scorch persist despite feeding, run soil and tissue tests and rule out early blight and drought.",
    ],
    sources: [
      {
        label: "University of Idaho Extension — Potato nutrient management",
        url: "https://www.uidaho.edu/extension",
      },
    ],
  },
  {
    id: "iron-deficiency-roses-ornamentals",
    name: "Iron Deficiency (Roses & Ornamental Shrubs)",
    category: "nutrient-deficiency",
    affectedPlants: ["ornamentals", "trees-shrubs"],
    specificHosts: ["Rose", "Gardenia", "Pieris", "Holly"],
    growthStages: ["vegetative", "flowering", "mature"],
    symptomLocations: ["new/terminal leaves", "interveinal areas"],
    symptomProgression:
      "The newest leaves at the shoot tips yellow between fine green veins while older leaves stay green, and in severe cases new leaves bleach nearly white with scorched margins as high-pH soil locks up iron.",
    observableSigns: [
      "New terminal leaves show fine interveinal yellowing with a distinct green vein network while older leaves stay dark.",
      "The pallor concentrates on fresh growth, so shoot tips look pale against green lower foliage.",
      "Severe cases bleach new leaves to ivory with brown scorched margins and reduced flowering.",
    ],
    favorableConditions: [
      "High-pH, calcareous, or over-limed soils lock up iron so shrub roots cannot absorb it.",
      "Waterlogged, compacted, or cold soils restrict roots and reduce iron uptake even at moderate pH.",
    ],
    lookalikes: [
      {
        condition: "Manganese deficiency",
        differentiator:
          "Manganese chlorosis on new leaves keeps broader green vein bands and looks more mottled than the fine iron pattern.",
      },
      {
        condition: "Rose rosette disease",
        differentiator:
          "Rose rosette causes red witches-broom growth and thickened canes, unlike the interveinal yellowing of iron shortage.",
      },
    ],
    immediateActions: [
      "Apply a chelated iron foliar spray or soil drench suited to the soil pH and test the soil today.",
      "Check drainage, since waterlogged roots limit iron uptake and mimic the chlorosis.",
    ],
    treatments: [
      {
        situation: "High-pH soils",
        treatment:
          "Use an EDDHA iron chelate that stays available in alkaline soil and gradually acidify the soil where feasible.",
      },
      {
        situation: "Acid-loving shrubs",
        treatment:
          "Acidify beds with elemental sulfur and use acidifying fertilizer for gardenias, pieris, and holly.",
      },
    ],
    avoid: [
      "Do not add lime near acid-loving shrubs, which raises pH and worsens iron lockout.",
    ],
    recoveryTimeline:
      "New growth greens within two to four weeks of chelate treatment, while durable pH correction takes a season or more.",
    prevention: [
      "Match shrub species to soil pH and improve drainage and aeration in heavy soils.",
      "Acidify soils gradually with elemental sulfur where the pH is too high for the species.",
    ],
    monitoringThresholds: [
      "Test soil pH and reassess new growth after treatment, acting again if the next flush emerges chlorotic.",
    ],
    escalationCriteria: [
      "If chlorosis and dieback continue despite chelates and pH work, have the roots and site evaluated professionally.",
    ],
    sources: [
      {
        label: "Royal Horticultural Society — Iron and manganese deficiency",
        url: "https://www.rhs.org.uk/disorders/iron-deficiency",
      },
    ],
  },
  {
    id: "magnesium-deficiency-houseplants",
    name: "Magnesium Deficiency (Houseplants)",
    category: "nutrient-deficiency",
    affectedPlants: ["houseplants"],
    specificHosts: ["Croton", "Ficus", "Palm indoors", "Schefflera"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["older/lower leaves", "interveinal areas", "leaf margins"],
    symptomProgression:
      "Older lower leaves develop yellowing between the veins from the margins inward while the veins stay green, the pattern climbs upward over weeks, and heavily affected leaves may drop as magnesium is remobilized.",
    observableSigns: [
      "Lower older leaves show interveinal yellowing starting near the margins while the veins keep a green band.",
      "The yellowing progresses upward over time and can leave a green herringbone of veins on a yellow blade.",
      "Heavily affected old leaves eventually brown and drop while newer top leaves remain greener.",
    ],
    favorableConditions: [
      "Long periods without feeding in a small pot deplete magnesium held in the limited mix.",
      "Heavy use of high-potassium bloom fertilizers indoors can antagonize magnesium uptake.",
    ],
    lookalikes: [
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen yellows old leaves uniformly, while magnesium leaves a green vein network on the yellowing old leaf.",
      },
      {
        condition: "Iron deficiency",
        differentiator:
          "Iron interveinal chlorosis strikes the newest top leaves, whereas magnesium starts on the oldest lower leaves.",
      },
    ],
    immediateActions: [
      "Apply a dilute Epsom salt solution as a soil drench during watering and resume regular balanced feeding today.",
      "Cut back on any high-potassium fertilizer that may be suppressing magnesium.",
    ],
    treatments: [
      {
        situation: "Quick correction",
        treatment:
          "Drench with a dilute magnesium sulfate solution for a fast response on affected houseplants.",
      },
      {
        situation: "Ongoing care",
        treatment:
          "Feed a balanced fertilizer that includes magnesium and repot into fresh mix if the current mix is old.",
      },
    ],
    avoid: [
      "Do not overuse Epsom salt as a cure-all, since excess magnesium can itself unbalance the root zone.",
    ],
    recoveryTimeline:
      "New leaves emerge green within two to three weeks of correction, though yellowed old leaves will not recover.",
    prevention: [
      "Feed a complete fertilizer that includes magnesium and repot with fresh mix every year or two.",
      "Balance potassium and magnesium and avoid overusing bloom-boosting high-potassium products indoors.",
    ],
    monitoringThresholds: [
      "Reassess lower leaves after correction and repot if the mix is exhausted and chlorosis keeps returning.",
    ],
    escalationCriteria: [
      "If chlorosis persists despite feeding and repotting, check for root rot or salt buildup by inspecting the roots.",
    ],
    sources: [
      {
        label: "University of Maryland Extension — Houseplant problems",
        url: "https://extension.umd.edu/resource/houseplants",
      },
    ],
  },
  {
    id: "manganese-deficiency-berries",
    name: "Manganese Deficiency (Berries)",
    category: "nutrient-deficiency",
    affectedPlants: ["berries"],
    specificHosts: ["Raspberry", "Blackberry", "Strawberry", "Blueberry"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["new/upper leaves", "interveinal areas"],
    symptomProgression:
      "Younger leaves develop interveinal yellowing with a broad green band along the veins, symptoms concentrate on new growth, and severe cases show brown interveinal flecks that reduce cane vigor and fruit quality.",
    observableSigns: [
      "Upper younger leaves yellow between the veins while wide green bands stay along the main and minor veins.",
      "The pattern is coarser than iron chlorosis, with more green retained across the vein network.",
      "Severe cases develop small brown interveinal spots and reduced growth on new canes.",
    ],
    favorableConditions: [
      "High-pH or over-limed soils reduce manganese availability to berry roots even when soil manganese is present.",
      "Wet, poorly aerated soils and cold conditions further limit uptake on affected sites.",
    ],
    lookalikes: [
      {
        condition: "Iron deficiency",
        differentiator:
          "Iron chlorosis shows a finer green vein net and paler leaves, while manganese keeps broader green vein bands.",
      },
      {
        condition: "Magnesium deficiency",
        differentiator:
          "Magnesium chlorosis appears on older lower leaves, whereas manganese chlorosis is on the newest upper leaves.",
      },
    ],
    immediateActions: [
      "Apply a manganese sulfate foliar spray to affected leaves and test the soil pH today.",
      "Improve drainage on soggy areas that reduce manganese uptake in the planting.",
    ],
    treatments: [
      {
        situation: "Quick foliar correction",
        treatment:
          "Spray manganese sulfate on the foliage, since foliar uptake bypasses high-pH soil lockout for a fast response.",
      },
      {
        situation: "High-pH soils",
        treatment:
          "Avoid over-liming and, for acid-loving blueberries, acidify the soil so manganese becomes available.",
      },
    ],
    avoid: [
      "Do not over-lime berry plantings, especially blueberries, which raises pH and locks up manganese and iron.",
    ],
    recoveryTimeline:
      "New growth greens within one to two weeks of foliar manganese, though repeat sprays may be needed on high-pH sites.",
    prevention: [
      "Maintain the correct soil pH for the berry species and avoid unnecessary liming.",
      "Use foliar or soil manganese on sites with a history of deficiency and improve drainage.",
    ],
    monitoringThresholds: [
      "Sample new leaves for tissue analysis and act when manganese falls below the sufficiency range.",
    ],
    escalationCriteria: [
      "If chlorosis persists after manganese and pH correction, submit soil and tissue tests to rule out other causes.",
    ],
    sources: [
      {
        label: "Oregon State University Extension — Berry nutrient management",
        url: "https://extension.oregonstate.edu/crop-production/berries",
      },
    ],
  },
  {
    id: "zinc-deficiency-citrus-mottle-leaf",
    name: "Zinc Deficiency — Mottle Leaf (Citrus)",
    category: "nutrient-deficiency",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Orange", "Lemon", "Grapefruit", "Mandarin"],
    growthStages: ["vegetative", "fruiting", "mature"],
    symptomLocations: ["new leaves", "shoot tips", "interveinal areas"],
    symptomProgression:
      "New leaves show a fine yellow interveinal mottle with green veins, leaves become small and narrow with shortened internodes, and severe deficiency gives twig dieback and small, pale, poorly flavored fruit.",
    observableSigns: [
      "New leaves display an irregular yellow interveinal mottle while the midrib and larger veins stay green.",
      "Affected leaves are abnormally small and narrow with pointed tips and short internodes, giving a bunched look.",
      "Severe cases show twig dieback and small, thin-skinned, poorly colored fruit with reduced juice.",
    ],
    favorableConditions: [
      "High-pH, calcareous, sandy citrus soils and heavy phosphorus reduce zinc availability to roots.",
      "Cold, wet soils and low organic matter further limit zinc uptake by citrus.",
    ],
    lookalikes: [
      {
        condition: "Manganese deficiency in citrus",
        differentiator:
          "Manganese gives a duller interveinal mottle on normal-sized leaves, while zinc produces small narrow leaves with a sharp mottle.",
      },
      {
        condition: "Citrus greening disease",
        differentiator:
          "Greening causes an asymmetric blotchy mottle that crosses veins with off-flavored lopsided fruit, unlike the symmetric zinc mottle.",
      },
    ],
    immediateActions: [
      "Apply a zinc foliar spray to new flush growth and test soil pH and tissue zinc today.",
      "Ease back on heavy phosphorus that can antagonize zinc uptake in the grove.",
    ],
    treatments: [
      {
        situation: "Foliar correction",
        treatment:
          "Spray zinc sulfate or zinc chelate on new flushes, since citrus takes up foliar zinc far better than soil zinc on high-pH soil.",
      },
      {
        situation: "Soil management",
        treatment:
          "Use chelated zinc soil applications and manage pH and phosphorus where repeated foliar sprays are impractical.",
      },
    ],
    avoid: [
      "Do not rely only on soil zinc on high-pH citrus soils, since it is rapidly locked up and unavailable.",
    ],
    recoveryTimeline:
      "New flushes emerge with normal size and color within a few weeks of foliar zinc, with vigor rebuilding over the season.",
    prevention: [
      "Include routine foliar zinc in the citrus spray program and manage phosphorus rates.",
      "Use tissue analysis to guide zinc timing and maintain proper soil pH.",
    ],
    monitoringThresholds: [
      "Sample spring-flush leaves for tissue zinc and act when levels fall below the citrus sufficiency range.",
    ],
    escalationCriteria: [
      "If mottling is asymmetric with off-flavored fruit, test for citrus greening disease rather than assuming zinc shortage.",
    ],
    sources: [
      {
        label: "UF/IFAS Extension — Citrus zinc nutrition",
        url: "https://edis.ifas.ufl.edu/",
      },
    ],
  },
  {
    id: "sulfur-deficiency-citrus-ornamentals",
    name: "Sulfur Deficiency (Citrus & Woody Ornamentals)",
    category: "nutrient-deficiency",
    affectedPlants: ["fruit-trees", "trees-shrubs"],
    specificHosts: ["Orange", "Lemon", "Camellia", "Boxwood"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["new/upper leaves", "shoot tips", "overall new growth"],
    symptomProgression:
      "New leaves and shoot tips turn a uniform pale yellow-green while older leaves stay greener, growth slows, and the whole new flush can pale under prolonged shortage on sandy or low-sulfur soils.",
    observableSigns: [
      "The newest leaves and shoot tips are uniformly pale yellow-green while older lower leaves stay darker.",
      "Growth is slow and the new flush looks thin and pale, resembling nitrogen shortage but on new growth.",
      "The uniform pallor, without an interveinal pattern, distinguishes it from iron or manganese chlorosis.",
    ],
    favorableConditions: [
      "Sandy, low-organic-matter, leached soils and reduced atmospheric sulfur deposition leave little sulfate.",
      "Cold, wet soils slow mineralization of organic sulfur into plant-available sulfate.",
    ],
    lookalikes: [
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen pallor starts on old leaves because nitrogen is mobile, while sulfur pallor starts on the new growth.",
      },
      {
        condition: "Iron deficiency",
        differentiator:
          "Iron shortage yellows new leaves between the veins, whereas sulfur yellows new leaves uniformly without a vein pattern.",
      },
    ],
    immediateActions: [
      "Apply a sulfate-containing fertilizer such as ammonium sulfate around the root zone and water it in today.",
      "Confirm soils are warm and well drained so sulfate can be mineralized and taken up.",
    ],
    treatments: [
      {
        situation: "Quick correction",
        treatment:
          "Apply a soluble sulfate source like potassium sulfate or ammonium sulfate for prompt plant-available sulfur.",
      },
      {
        situation: "Longer-term supply",
        treatment:
          "Build organic matter and use sulfate-containing fertilizers on sandy soils to maintain supply over seasons.",
      },
    ],
    avoid: [
      "Do not rely on elemental sulfur in cold soil for a quick fix, since it must be oxidized to sulfate first.",
    ],
    recoveryTimeline:
      "New flushes green within one to two weeks of a soluble sulfate application under warm conditions.",
    prevention: [
      "Use sulfate-containing fertilizers and build organic matter on sandy, low-sulfur soils.",
      "Soil and tissue test woody plants on light soils to track sulfur along with nitrogen.",
    ],
    monitoringThresholds: [
      "Reassess new-flush color one to two weeks after feeding, and soil test if the whole plant stays pale.",
    ],
    escalationCriteria: [
      "If new-growth pallor persists after sulfate feeding, submit soil and tissue tests to rule out nitrogen or pH issues.",
    ],
    sources: [
      {
        label: "UC IPM — Nutrient deficiencies in woody plants",
        url: "https://ipm.ucanr.edu/home-and-landscape/",
      },
    ],
  },
  {
    id: "phosphorus-deficiency-fruit-trees",
    name: "Phosphorus Deficiency (Fruit Trees)",
    category: "nutrient-deficiency",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Apple", "Cherry", "Plum", "Apricot"],
    growthStages: ["vegetative", "fruiting", "mature"],
    symptomLocations: ["older leaves", "leaf undersides", "shoots"],
    symptomProgression:
      "Older leaves darken to a dull bronze-green then develop purple or reddish tints, shoot growth is short and thin, and bloom, fruit set, and maturity are delayed, though true phosphorus shortage is uncommon in most orchard soils.",
    observableSigns: [
      "Older leaves are dull dark green with purple or bronze tints, most visible on the undersides.",
      "Terminal shoot growth is short and thin with small leaves and a sparse, weak canopy.",
      "Bloom and fruit set are reduced and maturity is delayed, with early fall leaf drop in severe cases.",
    ],
    favorableConditions: [
      "Cold, wet spring soils limit root phosphorus uptake even when soil levels are adequate.",
      "Very acidic or very alkaline soils chemically bind phosphorus and reduce availability to tree roots.",
    ],
    lookalikes: [
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen shortage pales old leaves, whereas phosphorus shortage keeps leaves dark green or purple, not pale.",
      },
      {
        condition: "Cold-temperature purpling",
        differentiator:
          "Purpling from cold soils fades as the ground warms and vigor returns, unlike persistent true phosphorus shortage.",
      },
    ],
    immediateActions: [
      "Take a soil test before adding phosphorus and correct soil pH toward the optimal range today.",
      "Avoid working or planting into cold wet soil that limits uptake and mimics deficiency.",
    ],
    treatments: [
      {
        situation: "Confirmed low soil test",
        treatment:
          "Incorporate a phosphorus source into the root zone at planting based on soil test, since surface phosphorus moves slowly.",
      },
      {
        situation: "pH correction",
        treatment:
          "Adjust soil pH into the near-neutral range so existing soil phosphorus becomes available to tree roots.",
      },
    ],
    avoid: [
      "Do not broadcast heavy phosphorus without a soil test, since excess ties up zinc and iron and pollutes runoff.",
    ],
    recoveryTimeline:
      "Leaf color and vigor improve over the current season as soils warm, with full response the following year.",
    prevention: [
      "Soil test and incorporate phosphorus before planting, correcting pH into the optimal range.",
      "Use midsummer leaf-tissue analysis to confirm phosphorus status before applying more.",
    ],
    monitoringThresholds: [
      "Recheck trees after soils warm and take midsummer tissue tests; act if purpling persists in warm soil.",
    ],
    escalationCriteria: [
      "If tissue phosphorus is adequate but symptoms persist, investigate pH lockout, cold soils, or root problems with lab help.",
    ],
    sources: [
      {
        label: "Michigan State University Extension — Tree fruit nutrition",
        url: "https://www.canr.msu.edu/fruit/",
      },
    ],
  },
  {
    id: "calcium-deficiency-cavity-spot-carrots",
    name: "Calcium Deficiency — Cracking & Cavity Disorders (Carrots)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Carrot", "Parsnip"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["root surface", "root interior", "growing tip"],
    symptomProgression:
      "Rapidly growing roots develop longitudinal cracking and, with erratic moisture, surface and internal breakdown, since the immobile calcium cannot keep pace with expanding storage-root tissue under swings in water supply.",
    observableSigns: [
      "Storage roots show longitudinal splitting and cracking, especially after moisture swings during rapid growth.",
      "Root surfaces may show sunken lesions and internal tissue can break down under uneven moisture and low calcium.",
      "New foliage and root tips can be distorted when the calcium shortage is severe.",
    ],
    favorableConditions: [
      "Irregular watering with wet-dry cycles disrupts calcium delivery to fast-expanding storage roots.",
      "Sandy, acidic, or low-calcium soils and excess nitrogen or potassium reduce calcium reaching the root.",
    ],
    lookalikes: [
      {
        condition: "Cavity spot from Pythium",
        differentiator:
          "Pythium cavity spot makes distinct sunken elliptical lesions with a fungal cause, unlike the general cracking of calcium and moisture stress.",
      },
      {
        condition: "Growth cracking from rain after drought",
        differentiator:
          "Pure growth cracking follows a heavy rain after drought with adequate calcium, while calcium shortage cracks even under steady low-calcium conditions.",
      },
    ],
    immediateActions: [
      "Mulch and water evenly to hold steady soil moisture and stop the wet-dry cycling right now.",
      "Take a soil test for calcium and pH so any true shortage can be corrected before the next crop.",
    ],
    treatments: [
      {
        situation: "Primary correction",
        treatment:
          "Stabilize soil moisture with mulch and even irrigation, which resolves most cracking without added calcium.",
      },
      {
        situation: "Confirmed low-calcium acidic soil",
        treatment:
          "Amend with gypsum or lime based on soil test and correct pH to improve calcium supply for the next crop.",
      },
    ],
    avoid: [
      "Do not over-apply nitrogen or potassium, which drives fast growth that outpaces limited calcium delivery.",
    ],
    recoveryTimeline:
      "Existing cracked roots will not heal, but roots grown after moisture is stabilized develop normally through the season.",
    prevention: [
      "Mulch beds and irrigate consistently so calcium moves steadily into expanding roots.",
      "Maintain proper soil pH and calcium by soil test and avoid excess nitrogen and potassium.",
    ],
    monitoringThresholds: [
      "Dig sample roots to check for cracking and cavities, and soil test calcium and pH before replanting.",
    ],
    escalationCriteria: [
      "If sunken lesions persist despite steady moisture, submit samples to test for Pythium cavity spot disease.",
    ],
    sources: [
      {
        label: "UC IPM — Carrot disorders",
        url: "https://ipm.ucanr.edu/agriculture/",
      },
    ],
  },
  {
    id: "nitrogen-deficiency-herbs",
    name: "Nitrogen Deficiency (Culinary Herbs)",
    category: "nutrient-deficiency",
    affectedPlants: ["herbs"],
    specificHosts: ["Basil", "Parsley", "Cilantro", "Chives", "Mint"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["lower/older leaves", "overall plant"],
    symptomProgression:
      "Older leaves pale to yellow-green, growth slows and stems thin, and leafy herbs like basil become sparse and less aromatic as nitrogen is drawn from old leaves to support new growth in a depleted container or bed.",
    observableSigns: [
      "Older, lower leaves pale to yellow-green uniformly while the plant grows slowly and stays small.",
      "Leafy herbs produce fewer, smaller, paler leaves and become leggy with thin weak stems.",
      "Frequent harvesting without feeding leaves the plant thin and unthrifty, pointing to depletion.",
    ],
    favorableConditions: [
      "Small containers and repeated cutting export nitrogen and exhaust the limited supply quickly.",
      "Frequent watering of container herbs leaches soluble nitrogen out the drainage holes.",
    ],
    lookalikes: [
      {
        condition: "Overwatering root stress",
        differentiator:
          "Overwatering yellows leaves with soggy mix and mushy roots, unlike the dry depleted mix of nitrogen shortage.",
      },
      {
        condition: "Natural bolting decline",
        differentiator:
          "Bolting herbs stretch and flower with a shift in leaf shape, unlike the simple bottom-up pallor of nitrogen shortage.",
      },
    ],
    immediateActions: [
      "Feed with a dilute balanced or fish-emulsion fertilizer during a watering today and harvest a bit less.",
      "Make sure herbs get enough light so they can actually use the added nitrogen.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply a diluted fish emulsion or compost tea every two to three weeks during active leafy growth of herbs.",
      },
      {
        situation: "Container herbs",
        treatment:
          "Feed a diluted balanced fertilizer regularly and refresh potting mix if it is old and compacted.",
      },
    ],
    avoid: [
      "Do not over-fertilize aromatic herbs, since excess nitrogen produces lush leaves with reduced essential-oil flavor.",
    ],
    recoveryTimeline:
      "New leaves green up and growth resumes within one to two weeks of light regular feeding and good light.",
    prevention: [
      "Feed herbs lightly and regularly during the growing season and refresh container mix each year.",
      "Harvest moderately and keep herbs in bright light so feeding is used efficiently.",
    ],
    monitoringThresholds: [
      "Reassess color and vigor one to two weeks after feeding, and refresh mix if pallor keeps returning.",
    ],
    escalationCriteria: [
      "If yellowing persists despite feeding, check for overwatering root rot or salt buildup in the container.",
    ],
    sources: [
      {
        label: "University of Maryland Extension — Growing herbs",
        url: "https://extension.umd.edu/resource/herbs",
      },
    ],
  },
  {
    id: "potassium-deficiency-roses-ornamentals",
    name: "Potassium Deficiency (Roses & Flowering Ornamentals)",
    category: "nutrient-deficiency",
    affectedPlants: ["ornamentals", "trees-shrubs"],
    specificHosts: ["Rose", "Dahlia", "Chrysanthemum", "Peony"],
    growthStages: ["vegetative", "flowering", "mature"],
    symptomLocations: ["older leaf margins", "leaf tips", "flower buds"],
    symptomProgression:
      "Older leaf margins and tips yellow then scorch brown while the leaf center stays greener, flower buds are weak and small, and stems soften as potassium is drawn to support blooming under high demand.",
    observableSigns: [
      "Margins and tips of older leaves yellow then turn brown and brittle while the center stays greener.",
      "Flower buds are fewer, smaller, and weaker, and blooms are less vivid than on a well-fed plant.",
      "Stems may be thin and soft with reduced resistance to wind, cold, and disease.",
    ],
    favorableConditions: [
      "Sandy, leached, or acidic soils and the high demand of heavy flowering draw down potassium.",
      "Excess magnesium or heavy liming can antagonize potassium uptake in ornamental beds.",
    ],
    lookalikes: [
      {
        condition: "Magnesium deficiency",
        differentiator:
          "Magnesium yellows between the veins of old leaves with green margins, opposite the marginal scorch of potassium shortage.",
      },
      {
        condition: "Drought or salt scorch",
        differentiator:
          "Drought and salt scorch margins across many leaves quickly, while potassium scorch advances gradually on the oldest leaves.",
      },
    ],
    immediateActions: [
      "Apply a potassium-containing fertilizer such as sulfate of potash based on soil test near the roots today.",
      "Water evenly to reduce moisture stress that intensifies the marginal scorch.",
    ],
    treatments: [
      {
        situation: "Heavy-flowering beds",
        treatment:
          "Feed a balanced fertilizer with adequate potassium through the flowering period to meet bloom demand.",
      },
      {
        situation: "Sandy or acidic soils",
        treatment:
          "Split potassium applications and correct pH so leaching does not undo the correction on light soils.",
      },
    ],
    avoid: [
      "Do not over-lime with high-magnesium dolomite in ornamental beds, which can suppress potassium uptake.",
    ],
    recoveryTimeline:
      "New foliage and later blooms improve within two to three weeks of feeding, though scorched old leaves will not recover.",
    prevention: [
      "Soil test and balance potassium with nitrogen and magnesium in the ornamental fertility program.",
      "Maintain steady moisture and split potassium feeding on light soils to match flowering demand.",
    ],
    monitoringThresholds: [
      "Watch new growth and blooms after feeding, and soil test if marginal scorch keeps advancing on old leaves.",
    ],
    escalationCriteria: [
      "If scorch persists despite feeding, run soil and tissue tests to check the base-cation balance and pH.",
    ],
    sources: [
      {
        label: "Royal Horticultural Society — Potassium deficiency",
        url: "https://www.rhs.org.uk/disorders/potassium-deficiency",
      },
    ],
  },
  {
    id: "iron-deficiency-vegetable-garden",
    name: "Iron Deficiency (Vegetable Garden)",
    category: "nutrient-deficiency",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Bean", "Tomato", "Squash", "Pepper", "Spinach"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["new/upper leaves", "interveinal areas", "growing tips"],
    symptomProgression:
      "The youngest leaves yellow between fine green veins while lower leaves stay green, the growing tips look bleached, and in severe cases new leaves turn nearly white with scorched margins on high-pH garden soil.",
    observableSigns: [
      "The newest upper leaves show sharp interveinal yellowing with a fine network of green veins.",
      "The chlorosis concentrates on new growth so the top of the plant looks pale while the base stays green.",
      "Severe cases bleach new leaves to ivory with brown scorched margins and reduced growth.",
    ],
    favorableConditions: [
      "High-pH, calcareous, or over-limed garden soils lock up iron so roots cannot absorb it.",
      "Cold, waterlogged, or compacted soils restrict roots and reduce iron uptake even at moderate pH.",
    ],
    lookalikes: [
      {
        condition: "Manganese deficiency",
        differentiator:
          "Manganese chlorosis on new leaves keeps broader green vein bands and looks more mottled than the fine iron pattern.",
      },
      {
        condition: "Sulfur deficiency",
        differentiator:
          "Sulfur yellows new leaves uniformly without a vein pattern, unlike the interveinal chlorosis of iron shortage.",
      },
    ],
    immediateActions: [
      "Apply a chelated iron foliar spray for a fast response and test the garden soil pH today.",
      "Improve drainage on soggy beds, since waterlogged roots limit iron uptake.",
    ],
    treatments: [
      {
        situation: "High-pH garden soils",
        treatment:
          "Use an EDDHA iron chelate that stays available in alkaline soil and lower pH gradually with elemental sulfur.",
      },
      {
        situation: "Quick foliar fix",
        treatment:
          "Spray chelated iron on the foliage for rapid greening while working on the underlying soil pH.",
      },
    ],
    avoid: [
      "Do not add lime to already high-pH beds, which raises pH further and worsens iron lockout.",
    ],
    recoveryTimeline:
      "New growth greens within one to three weeks of chelate treatment, while lasting pH correction takes a season.",
    prevention: [
      "Soil test and keep garden pH in the six-to-seven range where iron stays available.",
      "Improve drainage and aeration and avoid unnecessary liming of vegetable beds.",
    ],
    monitoringThresholds: [
      "Test soil pH and reassess new growth after treatment, acting again if the next flush emerges chlorotic.",
    ],
    escalationCriteria: [
      "If chlorosis persists despite chelates and pH work, submit a soil test and check for root disease or waterlogging.",
    ],
    sources: [
      {
        label: "Utah State University Extension — Iron chlorosis",
        url: "https://extension.usu.edu/yardandgarden/",
      },
    ],
  },
  {
    id: "boron-deficiency-strawberries",
    name: "Boron Deficiency (Strawberries)",
    category: "nutrient-deficiency",
    affectedPlants: ["berries"],
    specificHosts: ["Strawberry"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["new leaves", "flowers", "fruit"],
    symptomProgression:
      "New leaves become small, puckered, and misshapen with scorched tips, flowers set poorly, and fruit are small, seedy, and misshapen or catfaced as immobile boron fails to reach growing points and developing berries.",
    observableSigns: [
      "New leaves are small, crinkled, and asymmetric with scorched or upturned tips and short petioles.",
      "Flowers set poorly and fruit are small, lumpy, seedy, and misshapen with a catfaced appearance.",
      "Growing points and runner tips may die back, and the plant looks stunted and distorted.",
    ],
    favorableConditions: [
      "Sandy, low-organic-matter, high-pH, or over-limed soils and drought reduce boron for strawberries.",
      "Heavy leaching on light soils drains the small boron pool during flowering and fruiting.",
    ],
    lookalikes: [
      {
        condition: "Poor pollination catfacing",
        differentiator:
          "Cold or low-bee pollination causes misshapen fruit without the new-leaf distortion and tip scorch of boron shortage.",
      },
      {
        condition: "Calcium deficiency tipburn",
        differentiator:
          "Calcium tipburn scorches new leaf margins without the puckering, poor set, and seedy misshapen fruit of boron shortage.",
      },
    ],
    immediateActions: [
      "Apply a carefully measured low-rate boron foliar spray or soil application and keep moisture steady today.",
      "Take a soil test for boron and pH so rates can be set precisely before the next crop.",
    ],
    treatments: [
      {
        situation: "Confirmed low boron",
        treatment:
          "Apply a soil-test-based low boron rate mixed thoroughly, since strawberries are sensitive to boron excess.",
      },
      {
        situation: "In-crop correction",
        treatment:
          "Use a dilute boron foliar spray during flowering to supply the immobile nutrient to developing tissue.",
      },
    ],
    avoid: [
      "Do not exceed recommended boron rates, since strawberries are easily injured by even slight boron excess.",
    ],
    recoveryTimeline:
      "New leaves and later fruit develop normally within one to two weeks of correction, but distorted tissue will not recover.",
    prevention: [
      "Soil test for boron on sandy high-pH soils and apply small measured rates only when needed.",
      "Maintain organic matter and steady moisture so the limited boron pool stays available.",
    ],
    monitoringThresholds: [
      "Scout new leaves and fruit shape and soil test boron before replanting strawberries on light soils.",
    ],
    escalationCriteria: [
      "If distortion recurs despite careful boron use, submit soil and tissue tests and evaluate pollination and moisture.",
    ],
    sources: [
      {
        label: "North Carolina State Extension — Strawberry nutrition",
        url: "https://content.ces.ncsu.edu/",
      },
    ],
  },
  {
    id: "manganese-deficiency-citrus",
    name: "Manganese Deficiency (Citrus)",
    category: "nutrient-deficiency",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Orange", "Lemon", "Grapefruit", "Tangerine"],
    growthStages: ["vegetative", "fruiting", "mature"],
    symptomLocations: ["new leaves", "interveinal areas"],
    symptomProgression:
      "New leaves develop a dull green interveinal pattern with darker green bands along the veins, the leaves stay normal size unlike zinc, and prolonged shortage dulls the canopy and reduces vigor on high-pH soils.",
    observableSigns: [
      "New leaves show a soft interveinal chlorosis with darker green bands remaining along the main and lateral veins.",
      "Affected leaves stay normal size and shape, which distinguishes the pattern from small zinc-deficient leaves.",
      "The whole new flush looks dull and slightly pale with reduced luster under prolonged shortage.",
    ],
    favorableConditions: [
      "High-pH, calcareous, sandy citrus soils and over-liming reduce manganese availability to roots.",
      "Cold, wet, poorly aerated soils and high iron or phosphorus further limit uptake.",
    ],
    lookalikes: [
      {
        condition: "Zinc deficiency in citrus",
        differentiator:
          "Zinc gives small narrow leaves with a sharp mottle, while manganese keeps normal-sized leaves with a duller interveinal pattern.",
      },
      {
        condition: "Iron deficiency in citrus",
        differentiator:
          "Iron chlorosis is paler with a finer green vein net, whereas manganese keeps broader dark-green vein bands.",
      },
    ],
    immediateActions: [
      "Apply a manganese sulfate foliar spray to new flush growth and test soil pH and tissue today.",
      "Ease back on heavy phosphorus that can antagonize manganese uptake in the grove.",
    ],
    treatments: [
      {
        situation: "Foliar correction",
        treatment:
          "Spray manganese sulfate on new flushes, since foliar uptake bypasses high-pH soil lockout in citrus.",
      },
      {
        situation: "Soil management",
        treatment:
          "Avoid over-liming and manage pH and phosphorus so soil manganese becomes more available over time.",
      },
    ],
    avoid: [
      "Do not over-lime citrus soils, which raises pH and locks up both manganese and iron.",
    ],
    recoveryTimeline:
      "New flushes green within one to two weeks of foliar manganese, though repeat sprays may be needed on high-pH soils.",
    prevention: [
      "Include foliar manganese in the citrus micronutrient program on high-pH soils.",
      "Use tissue analysis to time manganese and maintain proper soil pH and drainage.",
    ],
    monitoringThresholds: [
      "Sample spring-flush leaves for tissue manganese and act when levels fall below the citrus sufficiency range.",
    ],
    escalationCriteria: [
      "If dull chlorosis persists after manganese and pH management, have the grove evaluated for root and drainage problems.",
    ],
    sources: [
      {
        label: "UF/IFAS Extension — Citrus manganese nutrition",
        url: "https://edis.ifas.ufl.edu/",
      },
    ],
  },
  {
    id: "copper-deficiency-lawns-turf",
    name: "Copper Deficiency (Lawns & Turf)",
    category: "nutrient-deficiency",
    affectedPlants: ["lawns-turf"],
    specificHosts: ["Bentgrass", "Bermudagrass", "Ryegrass"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["new leaf tips", "young blades", "patches of turf"],
    symptomProgression:
      "New leaf tips of turf on organic or sandy soils become pale, twisted, and wither, growth is thin and weak in affected patches, and the deficiency is rare and confined mostly to peat, muck, or heavily leached sands.",
    observableSigns: [
      "New leaf tips are pale, limp, and twisted with tip dieback while older blades stay greener.",
      "Turf is thin and weak in affected patches, often on peat, muck, or leached sandy soils.",
      "A quick response to a copper application helps confirm the uncommon diagnosis.",
    ],
    favorableConditions: [
      "High-organic-matter peat and muck soils bind copper tightly, the classic turf deficiency setting.",
      "Sandy, heavily leached, or high-pH soils and heavy nitrogen further reduce copper availability.",
    ],
    lookalikes: [
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen shortage pales the whole lawn uniformly and greens with nitrogen, unlike copper's twisted tip dieback on organic soils.",
      },
      {
        condition: "Drought stress",
        differentiator:
          "Drought browns and wilts turf that recovers with water, while copper shortage twists and kills new tips even when moist.",
      },
    ],
    immediateActions: [
      "Apply a low rate of a copper source such as copper sulfate to affected turf and soil test today.",
      "Ease back on heavy nitrogen that can worsen copper shortage on organic soils.",
    ],
    treatments: [
      {
        situation: "Peat and muck soils",
        treatment:
          "Apply a soil-test-based low rate of copper on organic soils where copper is chronically deficient.",
      },
      {
        situation: "Confirmation",
        treatment:
          "Use a small foliar copper application to test response before committing to a larger soil program.",
      },
    ],
    avoid: [
      "Do not over-apply copper to turf, since copper accumulates in soil and becomes toxic and persistent.",
    ],
    recoveryTimeline:
      "New growth improves within one to two weeks of a copper application, and soil copper on organic soils lasts years.",
    prevention: [
      "Soil test and correct copper on organic peat and muck soils before establishing turf.",
      "Balance nitrogen so heavy feeding does not induce copper shortage on light or organic soils.",
    ],
    monitoringThresholds: [
      "Soil test copper on suspect organic soils and reassess turf a week or two after any copper application.",
    ],
    escalationCriteria: [
      "If twisted tip dieback persists after copper, submit soil and tissue tests and rule out disease and nematodes.",
    ],
    sources: [
      {
        label: "University of Florida IFAS — Turfgrass micronutrients",
        url: "https://edis.ifas.ufl.edu/",
      },
    ],
  },
  {
    id: "zinc-deficiency-houseplants",
    name: "Zinc Deficiency (Houseplants)",
    category: "nutrient-deficiency",
    affectedPlants: ["houseplants"],
    specificHosts: ["Citrus indoors", "Hibiscus", "Ficus", "Avocado seedling"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["new leaves", "shoot tips", "interveinal areas"],
    symptomProgression:
      "New leaves emerge small and narrow with interveinal mottling and shortened internodes that crowd them into a rosette at the shoot tip, since immobile zinc fails to reach new growth in an old high-pH mix.",
    observableSigns: [
      "New leaves are abnormally small and narrow with yellow interveinal mottling while older leaves stay green.",
      "Shortened internodes bunch the small new leaves into a rosette at the shoot tip.",
      "Overall shoot vigor declines and new growth looks distorted compared with healthy older foliage.",
    ],
    favorableConditions: [
      "Old, high-pH, or over-limed potting mix and hard alkaline tap water lock up zinc indoors.",
      "Heavy phosphorus feeding antagonizes zinc uptake in container plants.",
    ],
    lookalikes: [
      {
        condition: "Iron deficiency",
        differentiator:
          "Iron chlorosis keeps normal leaf size with a fine green vein net, unlike the small crowded leaves of zinc shortage.",
      },
      {
        condition: "Herbicide or drift injury",
        differentiator:
          "Chemical injury distorts leaves after exposure and lacks the persistent rosetting and mottling of zinc shortage.",
      },
    ],
    immediateActions: [
      "Apply a chelated micronutrient product with zinc as a foliar spray or drench and check the water source today.",
      "Ease off high-phosphorus fertilizers that antagonize zinc in the pot.",
    ],
    treatments: [
      {
        situation: "Quick correction",
        treatment:
          "Use a chelated zinc or complete micronutrient product to green and normalize new growth on affected houseplants.",
      },
      {
        situation: "Old high-pH mix",
        treatment:
          "Repot into fresh appropriate mix and water with soft water to keep zinc available in the root zone.",
      },
    ],
    avoid: [
      "Do not overuse high-phosphorus bloom fertilizer indoors, which suppresses zinc and worsens little-leaf symptoms.",
    ],
    recoveryTimeline:
      "New leaves emerge normal-sized within a few weeks of correction, while the small distorted leaves stay unchanged.",
    prevention: [
      "Use fresh appropriate mix, soft water, and a complete micronutrient fertilizer for zinc-sensitive plants.",
      "Repot every year or two and avoid excess phosphorus that locks up zinc.",
    ],
    monitoringThresholds: [
      "Watch each new flush and re-treat if new leaves still emerge small and mottled after correction.",
    ],
    escalationCriteria: [
      "If little-leaf persists after zinc and repotting, unpot to inspect roots and rule out root damage or disease.",
    ],
    sources: [
      {
        label: "Clemson Cooperative Extension — Indoor plant nutrition",
        url: "https://hgic.clemson.edu/factsheet/indoor-plants-cleaning-fertilizing-containers-and-light-requirements/",
      },
    ],
  },
  {
    id: "calcium-deficiency-succulents-cacti",
    name: "Calcium Deficiency (Succulents & Cacti)",
    category: "nutrient-deficiency",
    affectedPlants: ["succulents-cacti"],
    specificHosts: ["Echeveria", "Aloe", "Kalanchoe", "Sempervivum"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["new growth", "growing point", "young leaf margins"],
    symptomProgression:
      "New growth emerges deformed with hooked or scorched tips and the growing point can weaken or die back, since immobile calcium fails to reach the fast-forming rosette center in a low-calcium or high-EC mix.",
    observableSigns: [
      "The newest leaves in the rosette center are small, distorted, or hooked with brown scorched tips.",
      "The growing point weakens or dies while older leaves stay firm and green.",
      "Root tips may brown and stop extending, reflecting calcium's role in new root growth.",
    ],
    favorableConditions: [
      "Low-calcium or acidic mixes and high salt buildup from fertilizer reduce calcium reaching new growth.",
      "Erratic watering and low transpiration in cool conditions limit calcium movement to the rosette center.",
    ],
    lookalikes: [
      {
        condition: "Overwatering rot",
        differentiator:
          "Rot softens and blackens the plant base in wet mix, unlike the dry distorted new-growth scorch of calcium shortage.",
      },
      {
        condition: "Sunburn scorch",
        differentiator:
          "Sunburn bleaches sun-exposed leaf faces, while calcium shortage distorts and scorches the newest central growth.",
      },
    ],
    immediateActions: [
      "Flush an over-salted mix with plain water, then resume light feeding with a balanced fertilizer today.",
      "Steady the watering and improve airflow so calcium can move into new growth.",
    ],
    treatments: [
      {
        situation: "Low-calcium mix",
        treatment:
          "Incorporate a small amount of gypsum or a calcium-containing feed into the gritty mix to supply calcium.",
      },
      {
        situation: "High-salt mix",
        treatment:
          "Leach the pot with plain water to remove excess salts, then feed lightly with a balanced fertilizer.",
      },
    ],
    avoid: [
      "Do not overfertilize succulents, which raises salt levels and further blocks calcium uptake into new growth.",
    ],
    recoveryTimeline:
      "New growth emerges normal within a few weeks of correction, though already distorted leaves will not recover.",
    prevention: [
      "Use a well-balanced gritty mix and feed lightly to avoid salt buildup that blocks calcium.",
      "Water steadily and give bright airy conditions so calcium moves into the growing point.",
    ],
    monitoringThresholds: [
      "Watch the rosette center after correction and re-check if new growth still emerges distorted.",
    ],
    escalationCriteria: [
      "If the growing point rots or keeps dying back, unpot to inspect roots for rot before assuming a nutrient cause.",
    ],
    sources: [
      {
        label: "University of Arizona Cooperative Extension — Succulent care",
        url: "https://extension.arizona.edu/",
      },
    ],
  },
  {
    id: "nitrogen-deficiency-ornamentals",
    name: "Nitrogen Deficiency (Bedding & Container Ornamentals)",
    category: "nutrient-deficiency",
    affectedPlants: ["ornamentals"],
    specificHosts: ["Petunia", "Geranium", "Coleus", "Begonia", "Vinca"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["lower/older leaves", "overall plant", "flowers"],
    symptomProgression:
      "Older lower leaves pale to yellow-green and drop, plants stay small and pale with sparse bloom, and container ornamentals fade over a few weeks as the limited mix runs short of nitrogen during heavy flowering.",
    observableSigns: [
      "Lower older leaves pale uniformly to yellow-green and may drop, thinning the base of the plant.",
      "Plants are stunted and pale overall with fewer and smaller flowers than expected.",
      "Container displays fade and lose vigor by midseason when feeding has lapsed.",
    ],
    favorableConditions: [
      "Small containers and frequent watering leach nitrogen faster than an unfed display can replace it.",
      "Long production or display periods without feeding exhaust the limited nitrogen in soilless mix.",
    ],
    lookalikes: [
      {
        condition: "Overwatering stress",
        differentiator:
          "Overwatering yellows leaves with soggy mix and root decline, unlike the dry depleted mix of nitrogen shortage.",
      },
      {
        condition: "Iron chlorosis",
        differentiator:
          "Iron chlorosis yellows new top leaves between the veins, whereas nitrogen pales the old lower leaves uniformly.",
      },
    ],
    immediateActions: [
      "Feed with a balanced water-soluble fertilizer at label rate during a watering today and check drainage.",
      "Confirm the display gets adequate light so it can use the added nitrogen.",
    ],
    treatments: [
      {
        situation: "Container displays",
        treatment:
          "Feed a balanced water-soluble fertilizer regularly through the season to keep heavy-blooming annuals fed.",
      },
      {
        situation: "Long-term supply",
        treatment:
          "Incorporate a slow-release fertilizer at planting so containers stay fed through the display period.",
      },
    ],
    avoid: [
      "Do not apply a heavy single dose of soluble nitrogen, which can burn roots and cause soft floppy growth.",
    ],
    recoveryTimeline:
      "New growth greens and bloom improves within one to two weeks of regular feeding and good light.",
    prevention: [
      "Incorporate slow-release fertilizer at planting and supplement with regular liquid feeding.",
      "Use appropriately sized containers and consistent watering to reduce nitrogen leaching.",
    ],
    monitoringThresholds: [
      "Reassess color and bloom one to two weeks after feeding, and check EC if plants stay pale or stunted.",
    ],
    escalationCriteria: [
      "If pallor persists despite feeding, check for root rot, salt buildup, or pH lockout by testing the mix.",
    ],
    sources: [
      {
        label: "University of Massachusetts — Greenhouse nutrient management",
        url: "https://ag.umass.edu/greenhouse-floriculture",
      },
    ],
  },
  {
    id: "boron-deficiency-ornamentals",
    name: "Boron Deficiency (Ornamentals & Bedding Plants)",
    category: "nutrient-deficiency",
    affectedPlants: ["ornamentals"],
    specificHosts: ["Geranium", "Pansy", "Snapdragon", "Marigold"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["growing points", "new leaves", "flower buds"],
    symptomProgression:
      "Shoot tips and buds die back, new leaves are thick, brittle, and distorted, and flowering is reduced with aborted or deformed buds as immobile boron fails to reach the growing points in soilless mix.",
    observableSigns: [
      "Growing tips and flower buds blacken and die back while side shoots proliferate below the dead tip.",
      "New leaves are thick, brittle, and distorted with corky or cracked tissue on stems and petioles.",
      "Flowering is reduced with aborted, deformed, or discolored buds on affected bedding plants.",
    ],
    favorableConditions: [
      "Soilless mixes at high pH, over-liming, and heavy leaching of the small boron pool trigger deficiency.",
      "Rapid growth and low boron in the fertilizer program worsen symptoms on high-demand crops.",
    ],
    lookalikes: [
      {
        condition: "Calcium deficiency",
        differentiator:
          "Calcium shortage scorches new leaf margins without the corky brittle stems and dead buds of boron shortage.",
      },
      {
        condition: "Thrips feeding on buds",
        differentiator:
          "Thrips scar and deform buds with visible insects and silvering, unlike the corky dieback of boron shortage.",
      },
    ],
    immediateActions: [
      "Check media pH and apply a very dilute boron feed at a carefully measured low rate today.",
      "Correct high media pH that locks up boron in soilless mixes.",
    ],
    treatments: [
      {
        situation: "Greenhouse production",
        treatment:
          "Include a low, precise boron rate in the constant-feed program and keep media pH in the target range.",
      },
      {
        situation: "Confirmed shortage",
        treatment:
          "Apply a dilute boron foliar or drench correction, taking great care not to exceed the narrow safe range.",
      },
    ],
    avoid: [
      "Do not exceed the recommended boron rate, since bedding plants are readily injured by boron excess.",
    ],
    recoveryTimeline:
      "New growth and buds develop normally within one to two weeks of correction, but dead tips and buds will not recover.",
    prevention: [
      "Maintain media pH in range and include a low boron rate in the feed program for high-demand crops.",
      "Monitor media pH and EC routinely so boron stays available without over-applying.",
    ],
    monitoringThresholds: [
      "Test media pH and EC regularly and scout growing tips, acting when tips or buds begin to die back.",
    ],
    escalationCriteria: [
      "If dieback persists after pH and boron correction, run a full media and tissue test and scout for thrips.",
    ],
    sources: [
      {
        label: "University of Massachusetts — Greenhouse crop nutrition",
        url: "https://ag.umass.edu/greenhouse-floriculture",
      },
    ],
  },
  {
    id: "magnesium-deficiency-lawns-turf",
    name: "Magnesium Deficiency (Lawns & Turf)",
    category: "nutrient-deficiency",
    affectedPlants: ["lawns-turf"],
    specificHosts: ["Bentgrass", "Bermudagrass", "Tall fescue", "Centipedegrass"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["older leaf blades", "blade margins", "patches of turf"],
    symptomProgression:
      "Older blades develop interveinal yellowing and can show reddish tints, the turf looks patchy and off-color on sandy acidic soils, and thinning follows if the shortage persists through the season.",
    observableSigns: [
      "Older lower blades yellow between the veins, sometimes with reddish or purple tints, on sandy acidic soils.",
      "The turf takes on a patchy, off-color look while the newest blades stay greener.",
      "Density declines over time on light, leached soils where potassium is high relative to magnesium.",
    ],
    favorableConditions: [
      "Sandy, acidic, heavily leached soils and high potassium fertilization suppress magnesium in turf.",
      "Heavy rainfall or irrigation on light soils drains magnesium during the season.",
    ],
    lookalikes: [
      {
        condition: "Iron deficiency in turf",
        differentiator:
          "Iron chlorosis yellows the newest blades, while magnesium chlorosis appears on the older lower blades first.",
      },
      {
        condition: "Drought stress",
        differentiator:
          "Drought browns and wilts turf that recovers with water, unlike the interveinal yellowing of magnesium shortage.",
      },
    ],
    immediateActions: [
      "Apply a magnesium source such as Epsom salt solution or sulfate of potash-magnesia and water it in today.",
      "Ease back on high-potassium feeding that may be suppressing magnesium.",
    ],
    treatments: [
      {
        situation: "Acidic sandy soils",
        treatment:
          "Apply dolomitic lime based on soil test to raise both magnesium and pH on acidic turf soils.",
      },
      {
        situation: "Quick correction",
        treatment:
          "Use a soluble magnesium source such as magnesium sulfate for a faster response where pH is already adequate.",
      },
    ],
    avoid: [
      "Do not keep applying high-potassium fertilizer during a magnesium shortage, which deepens the imbalance.",
    ],
    recoveryTimeline:
      "Color improves within two to three weeks of correction, and density rebuilds over the rest of the season.",
    prevention: [
      "Soil test and balance potassium and magnesium, using dolomitic lime on acidic sandy soils.",
      "Split fertility applications and irrigate deeply but infrequently to reduce magnesium leaching.",
    ],
    monitoringThresholds: [
      "Soil test every two to three years for the potassium-to-magnesium balance and reassess color after correction.",
    ],
    escalationCriteria: [
      "If interveinal yellowing and thinning persist despite correction, sample for disease and check soil compaction.",
    ],
    sources: [
      {
        label: "North Carolina State Extension — Turfgrass nutrition",
        url: "https://content.ces.ncsu.edu/",
      },
    ],
  },
  {
    id: "iron-deficiency-specialty-hydroponics",
    name: "Iron Deficiency (Hydroponic & Specialty Crops)",
    category: "nutrient-deficiency",
    affectedPlants: ["specialty-cultivation"],
    specificHosts: ["Hydroponic lettuce", "Cannabis", "Basil", "Greenhouse tomato"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["new/upper leaves", "growing tips", "interveinal areas"],
    symptomProgression:
      "The newest leaves and growing tips yellow between green veins while older leaves stay green, and in fast-growing hydroponic crops the tops can bleach quickly when solution pH drifts high and iron precipitates.",
    observableSigns: [
      "The newest leaves and shoot tips show sharp interveinal yellowing with a fine green vein network.",
      "The chlorosis is concentrated on new growth so the canopy top pales while lower leaves stay green.",
      "Under high solution pH the yellowing can advance quickly, and severe tips bleach nearly white.",
    ],
    favorableConditions: [
      "Nutrient-solution pH drifting above the mid-sixes precipitates iron and cuts availability to roots.",
      "Cold root zones, low oxygen, and high phosphate or bicarbonate in the water reduce iron uptake.",
    ],
    lookalikes: [
      {
        condition: "Manganese deficiency",
        differentiator:
          "Manganese chlorosis on new leaves keeps broader green vein bands and looks more mottled than the fine iron pattern.",
      },
      {
        condition: "Root-zone pH lockout",
        differentiator:
          "Even with iron in solution, high pH locks it out, so a pH check distinguishes lockout from a truly low iron recipe.",
      },
    ],
    immediateActions: [
      "Check and correct the reservoir pH into the uptake range and confirm a chelated iron form is in the mix today.",
      "Warm and aerate the root zone so roots can take up iron effectively.",
    ],
    treatments: [
      {
        situation: "Solution correction",
        treatment:
          "Adjust pH into the optimal window and use an iron chelate stable at your pH, such as DTPA or EDDHA forms.",
      },
      {
        situation: "Water-quality issues",
        treatment:
          "Treat high-bicarbonate source water with acid and rebalance the recipe so iron stays available.",
      },
    ],
    avoid: [
      "Do not simply add more iron while pH stays high, since the iron precipitates and the chlorosis continues.",
    ],
    recoveryTimeline:
      "New growth greens within one to two weeks of correcting pH and iron chelate, while damaged tips stay bleached.",
    prevention: [
      "Hold reservoir pH in the optimal window and use a pH-appropriate iron chelate in the recipe.",
      "Manage source-water bicarbonates and root-zone temperature and oxygen for reliable iron uptake.",
    ],
    monitoringThresholds: [
      "Log reservoir pH daily and reassess new leaves within a week; act whenever pH drifts above the target window.",
    ],
    escalationCriteria: [
      "If chlorosis persists after pH and chelate correction, run a full solution and water analysis for antagonists.",
    ],
    sources: [
      {
        label: "University of Arizona — Controlled environment agriculture",
        url: "https://ceac.arizona.edu/",
      },
    ],
  },
  {
    id: "potassium-deficiency-berries",
    name: "Potassium Deficiency (Berries)",
    category: "nutrient-deficiency",
    affectedPlants: ["berries"],
    specificHosts: ["Grape", "Raspberry", "Blackberry", "Currant"],
    growthStages: ["vegetative", "fruiting", "mature"],
    symptomLocations: ["older/basal leaf margins", "leaf tips", "fruit"],
    symptomProgression:
      "Older basal leaves show marginal yellowing then brown scorch that curls the leaf, symptoms concentrate near heavy fruit clusters, and berries are smaller and less sweet as potassium is drawn to filling fruit.",
    observableSigns: [
      "Older, basal leaves show marginal chlorosis then brown scorch with cupping or curling of the blade.",
      "Symptoms concentrate on leaves near heavy fruit clusters during ripening, especially in grapes.",
      "Berries are smaller, poorly colored, and lower in sugar under heavy crop load.",
    ],
    favorableConditions: [
      "Sandy, leached, or acidic soils and heavy crop loads deplete potassium during fruit filling.",
      "High soil magnesium or over-liming can antagonize potassium uptake in the planting.",
    ],
    lookalikes: [
      {
        condition: "Magnesium deficiency",
        differentiator:
          "Magnesium yellows between the veins of old leaves with green margins, opposite the marginal scorch of potassium shortage.",
      },
      {
        condition: "Drought marginal scorch",
        differentiator:
          "Drought scorch appears fast across many leaves in heat, while potassium scorch develops gradually on older basal leaves.",
      },
    ],
    immediateActions: [
      "Apply sulfate of potash based on soil test around the root zone and keep irrigation steady today.",
      "Ease back on any excess magnesium or liming that could suppress potassium.",
    ],
    treatments: [
      {
        situation: "Bearing plantings",
        treatment:
          "Supply potassium before and during fruit fill to meet crop demand, favoring sulfate of potash for quality.",
      },
      {
        situation: "Sandy acidic soils",
        treatment:
          "Split potassium and correct pH so leaching does not undercut the correction on light soils.",
      },
    ],
    avoid: [
      "Do not over-lime with high-magnesium dolomite, which suppresses potassium uptake and deepens the deficiency.",
    ],
    recoveryTimeline:
      "New foliage improves within two to three weeks and fruit quality benefits the following season after correction.",
    prevention: [
      "Use leaf-tissue analysis to guide potassium rates against crop load in berries.",
      "Split potassium on sandy soils and maintain steady moisture through fruit fill.",
    ],
    monitoringThresholds: [
      "Take leaf-tissue samples at the recommended stage and act when potassium falls below the sufficiency range.",
    ],
    escalationCriteria: [
      "If scorch persists despite feeding, run soil and tissue tests and rule out salt injury and drought.",
    ],
    sources: [
      {
        label: "Cornell University — Grape and berry nutrition",
        url: "https://grapesandwine.cals.cornell.edu/",
      },
    ],
  },
];
