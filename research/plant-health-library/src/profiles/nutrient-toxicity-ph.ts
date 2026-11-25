import type { PlantProblemProfile } from "../schema";

export const nutrientToxicityPhProfiles: PlantProblemProfile[] = [
  // ===================== nutrient-toxicity (15) =====================
  {
    id: "nitrogen-toxicity-general",
    name: "Nitrogen Toxicity (Excess Nitrogen)",
    category: "nutrient-toxicity",
    affectedPlants: ["vegetable-garden", "ornamentals", "houseplants", "herbs"],
    specificHosts: ["Tomato", "Basil", "Rose", "Pothos"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["new growth", "whole plant", "leaf tips"],
    symptomProgression:
      "Foliage becomes lush and deep green early on, then growth turns weak and floppy, flowering and fruiting are delayed, and leaf tips may scorch as levels climb.",
    observableSigns: [
      "Excessively dark green, oversized leaves paired with weak, brittle stems that flop over.",
      "Delayed or reduced flowering and fruiting despite vigorous vegetative growth.",
      "Downward-cupping leaves and eventual leaf-tip burn on the most recent growth.",
    ],
    favorableConditions: [
      "Heavy or repeated applications of high-nitrogen fertilizer, especially fast-release synthetic forms.",
      "Frequent feeding without accounting for slow-release granules already present in the mix.",
    ],
    lookalikes: [
      {
        condition: "Overwatering",
        differentiator:
          "Overwatering yellows and softens lower leaves while nitrogen excess produces abnormally dark, oversized new growth with weak stems.",
      },
      {
        condition: "Herbicide drift",
        differentiator:
          "Herbicide injury causes twisted, strap-like distortion whereas nitrogen excess simply produces overly vigorous dark foliage.",
      },
    ],
    immediateActions: [
      "Stop all nitrogen feeding immediately and remove any visible slow-release granules from the soil surface.",
      "Leach container plants by flushing with several pot-volumes of plain water to move excess nitrates out of the root zone.",
    ],
    treatments: [
      {
        situation: "Container plants",
        treatment:
          "Flush the pot thoroughly with clean water until runoff clears, then withhold fertilizer for several weeks before resuming at half strength.",
      },
      {
        situation: "Garden beds",
        treatment:
          "Add carbon-rich mulch or unfertilized compost and water deeply to dilute and immobilize excess nitrogen while withholding further feeding.",
      },
    ],
    avoid: [
      "Do not try to correct floppy growth by adding more fertilizer, which worsens the imbalance.",
    ],
    recoveryTimeline:
      "New growth typically normalizes over two to four weeks once feeding stops and excess nitrogen is leached from the root zone.",
    prevention: [
      "Follow label rates and feed based on plant demand rather than a fixed calendar schedule.",
      "Use slow-release or balanced fertilizers and get a soil test before adding nitrogen to established beds.",
    ],
    monitoringThresholds: [
      "Re-evaluate if new leaves remain abnormally dark and stems stay weak after three to four weeks of withheld nitrogen.",
    ],
    escalationCriteria: [
      "Seek a soil or tissue lab test if symptoms persist across a whole bed or crop despite corrective leaching and feeding changes.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Fertilizing gardens",
        url: "https://extension.umn.edu/how-manage-soil-and-nutrients-home-gardens/fertilizing-gardens",
      },
    ],
  },
  {
    id: "fertilizer-burn-foliar",
    name: "Fertilizer Burn (Foliar Scorch)",
    category: "nutrient-toxicity",
    affectedPlants: ["houseplants", "ornamentals", "vegetable-garden", "lawns-turf"],
    specificHosts: ["Peace lily", "Petunia", "Lettuce", "Kentucky bluegrass"],
    growthStages: ["seed-seedling", "vegetative", "all-stages"],
    symptomLocations: ["leaf tips", "leaf margins", "whole leaf"],
    symptomProgression:
      "Damage appears within hours to a few days as tips and margins dry, then browning expands inward and affected leaves may crisp and drop.",
    observableSigns: [
      "Brown, dry, crispy leaf tips and margins with a yellow transition band toward healthy tissue.",
      "Scorching that appears suddenly after a fertilizer application rather than developing slowly.",
      "A crust of fertilizer salts sometimes visible on the soil surface or foliage.",
    ],
    favorableConditions: [
      "Applying concentrated fertilizer to dry soil or spraying nutrient solution on foliage in hot sun.",
      "Overdosing granular fertilizer or letting granules rest against leaves and stems.",
    ],
    lookalikes: [
      {
        condition: "Underwatering leaf scorch",
        differentiator:
          "Drought scorch develops gradually with general wilting whereas fertilizer burn appears abruptly right after feeding.",
      },
      {
        condition: "Potassium deficiency",
        differentiator:
          "Potassium deficiency starts on older leaves and progresses slowly, while fertilizer burn hits recently exposed foliage suddenly.",
      },
    ],
    immediateActions: [
      "Rinse foliage and flush the root zone with copious plain water to dilute and wash away excess salts.",
      "Move potted plants out of direct sun into shade to reduce further water loss while they recover.",
    ],
    treatments: [
      {
        situation: "Container plants",
        treatment:
          "Leach the pot with three to four pot-volumes of water and trim only the fully dead tissue once the plant stabilizes.",
      },
      {
        situation: "Lawns",
        treatment:
          "Water the burned area deeply and repeatedly for several days to dilute salts, then reseed bare patches if turf does not recover.",
      },
    ],
    avoid: [
      "Do not apply more fertilizer to compensate for the damaged appearance, which intensifies the burn.",
    ],
    recoveryTimeline:
      "Existing burned leaves will not green up, but healthy new growth usually appears within two to four weeks after flushing.",
    prevention: [
      "Water thoroughly before fertilizing and apply nutrients at or below the labeled rate.",
      "Keep granular fertilizer off foliage and avoid feeding stressed plants in hot, dry weather.",
    ],
    monitoringThresholds: [
      "Re-check within one to two weeks; if new growth also scorches, suspect ongoing salt buildup and leach again.",
    ],
    escalationCriteria: [
      "Test soil electrical conductivity if repeated flushing fails to prevent new foliage from burning.",
    ],
    sources: [
      {
        label: "PennState Extension — Fertilizers",
        url: "https://extension.psu.edu/soil-testing-and-fertilizers",
      },
    ],
  },
  {
    id: "soluble-salt-buildup-containers",
    name: "Soluble Salt Buildup (Container Salt Injury)",
    category: "nutrient-toxicity",
    affectedPlants: ["houseplants", "succulents-cacti", "ornamentals"],
    specificHosts: ["African violet", "Jade plant", "Christmas cactus", "Dracaena"],
    growthStages: ["all-stages"],
    symptomLocations: ["leaf tips", "leaf margins", "roots", "soil surface"],
    symptomProgression:
      "A white or yellow crust forms on the soil surface and pot rim, then leaf tips brown, lower leaves wilt, and root damage slows overall growth.",
    observableSigns: [
      "White, crusty salt deposits on the soil surface, drainage holes, and around the pot rim.",
      "Brown, dry leaf tips and margins combined with wilting even when the soil is moist.",
      "Stunted growth and darkened, damaged root tips visible when the plant is unpotted.",
    ],
    favorableConditions: [
      "Watering with small sips that never flush the pot, allowing dissolved salts to concentrate.",
      "Frequent fertilizing combined with hard water high in dissolved minerals.",
    ],
    lookalikes: [
      {
        condition: "Underwatering",
        differentiator:
          "Underwatered plants recover fully after a deep drink, while salt-injured plants stay damaged and show a surface crust.",
      },
      {
        condition: "Root rot",
        differentiator:
          "Root rot produces mushy, dark, foul-smelling roots whereas salt injury leaves roots dry-looking with burned tips.",
      },
    ],
    immediateActions: [
      "Leach the pot by running plain water slowly through it several times to dissolve and carry away accumulated salts.",
      "Scrape off and discard any visible salt crust from the soil surface and pot rim.",
    ],
    treatments: [
      {
        situation: "Routine correction",
        treatment:
          "Flush each pot with water equal to two to four times its volume every one to three months to keep salts from concentrating.",
      },
      {
        situation: "Severe crust and root damage",
        treatment:
          "Repot into fresh media, trim damaged roots, and switch to distilled or rainwater if tap water is highly mineralized.",
      },
    ],
    avoid: [
      "Do not water in frequent tiny amounts, since this concentrates salts instead of flushing them out.",
    ],
    recoveryTimeline:
      "Leaf-tip damage is permanent, but healthy new growth resumes within a few weeks after thorough leaching and reduced feeding.",
    prevention: [
      "Water thoroughly until at least ten to fifteen percent drains from the bottom each time.",
      "Fertilize at conservative rates and periodically flush pots, especially when using hard tap water.",
    ],
    monitoringThresholds: [
      "Re-evaluate monthly; a returning surface crust or continued tip burn indicates leaching frequency should increase.",
    ],
    escalationCriteria: [
      "Have irrigation water tested for salinity if salt crust reforms rapidly despite regular leaching.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Houseplant problems",
        url: "https://extension.umn.edu/how/houseplants",
      },
    ],
  },
  {
    id: "boron-toxicity-general",
    name: "Boron Toxicity",
    category: "nutrient-toxicity",
    affectedPlants: ["vegetable-garden", "fruit-trees", "ornamentals"],
    specificHosts: ["Tomato", "Bean", "Grape", "Apple"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaf tips", "leaf margins", "older leaves"],
    symptomProgression:
      "Yellowing begins at the tips and margins of older leaves, then advances to brown scorched bands and necrosis, with severe cases defoliating lower foliage.",
    observableSigns: [
      "Yellowing then browning that starts precisely at leaf tips and margins of older leaves.",
      "A distinct scorched band along leaf edges progressing inward toward the midrib.",
      "Early leaf drop of the oldest, most affected foliage while new growth looks better.",
    ],
    favorableConditions: [
      "Overapplication of boron-containing fertilizer or borax as a micronutrient supplement.",
      "Irrigation water naturally high in boron, common in some arid regions and reclaimed water.",
    ],
    lookalikes: [
      {
        condition: "Salt injury",
        differentiator:
          "Salt injury shows a soil crust and general tip burn, while boron toxicity produces a sharply defined marginal scorch on older leaves.",
      },
      {
        condition: "Potassium deficiency",
        differentiator:
          "A tissue test distinguishes the two, since boron toxicity shows elevated boron while potassium deficiency shows low potassium.",
      },
    ],
    immediateActions: [
      "Stop any boron or borax applications and identify whether irrigation water is the source.",
      "Leach the soil deeply with low-boron water to move excess boron below the root zone.",
    ],
    treatments: [
      {
        situation: "High-boron irrigation water",
        treatment:
          "Switch to a low-boron water source and apply extra leaching irrigation to flush accumulated boron from the profile.",
      },
      {
        situation: "Over-applied borax",
        treatment:
          "Cease supplementation entirely and leach heavily, since boron requirements are met by very small amounts and excess persists.",
      },
    ],
    avoid: [
      "Do not add any boron supplement without a confirmed deficiency, because the toxic range is very close to the sufficient range.",
    ],
    recoveryTimeline:
      "New foliage should emerge cleaner within several weeks of leaching, but existing scorched leaves will not recover.",
    prevention: [
      "Only apply boron when a soil or tissue test confirms deficiency, and always at very low rates.",
      "Test irrigation water for boron in arid regions before using it on sensitive crops.",
    ],
    monitoringThresholds: [
      "Re-test soil or tissue boron if marginal scorch continues to appear on newly matured leaves after leaching.",
    ],
    escalationCriteria: [
      "Consult an extension lab for water and soil boron analysis if an entire planting shows progressive marginal scorch.",
    ],
    sources: [
      {
        label: "UC IPM — Home and landscape",
        url: "https://ipm.ucanr.edu/home-and-landscape/",
      },
    ],
  },
  {
    id: "manganese-toxicity-acid-soil",
    name: "Manganese Toxicity (Acid-Soil Induced)",
    category: "nutrient-toxicity",
    affectedPlants: ["vegetable-garden", "ornamentals", "specialty-cultivation"],
    specificHosts: ["Soybean", "Bean", "Marigold", "Cannabis"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["older leaves", "leaf margins", "veins"],
    symptomProgression:
      "Interveinal chlorosis and dark speckling appear on older leaves, then brown necrotic spots and crinkled or cupped margins develop as acidity persists.",
    observableSigns: [
      "Small brown or black necrotic speckles scattered across older leaves, often along veins.",
      "Interveinal yellowing accompanied by leaf crinkling and downward cupping of margins.",
      "Symptoms worsen in strongly acidic soil below roughly pH 5.5.",
    ],
    favorableConditions: [
      "Strongly acidic, waterlogged soils that greatly increase manganese solubility and uptake.",
      "Heavy manganese fertilization or excessive use of acidifying amendments.",
    ],
    lookalikes: [
      {
        condition: "Magnesium deficiency",
        differentiator:
          "Magnesium deficiency shows clean interveinal yellowing without the dark necrotic speckling characteristic of manganese toxicity.",
      },
      {
        condition: "Spider mite damage",
        differentiator:
          "Mites cause fine stippling with webbing and live pests, while manganese toxicity produces necrotic specks with no webbing.",
      },
    ],
    immediateActions: [
      "Test soil pH and stop any manganese-containing or acidifying products immediately.",
      "Improve drainage on waterlogged sites to reduce manganese solubility in the root zone.",
    ],
    treatments: [
      {
        situation: "Acidic mineral soil",
        treatment:
          "Apply lime according to a soil test to raise pH toward the crop optimum, which sharply reduces manganese availability.",
      },
      {
        situation: "Waterlogged conditions",
        treatment:
          "Correct drainage and avoid saturating the soil, since flooding drives the reduced, more available form of manganese.",
      },
    ],
    avoid: [
      "Do not continue adding sulfur or acidifying fertilizers to already acidic soil showing these symptoms.",
    ],
    recoveryTimeline:
      "New growth improves over several weeks as pH rises and drainage improves, though liming takes months to fully act.",
    prevention: [
      "Maintain soil pH within the recommended range for each crop through regular soil testing.",
      "Ensure good drainage and avoid over-acidifying soils to keep manganese in less soluble forms.",
    ],
    monitoringThresholds: [
      "Recheck soil pH one to three months after liming and re-evaluate if new leaves still show speckling.",
    ],
    escalationCriteria: [
      "Submit tissue samples to a diagnostic lab if speckling persists across a field after pH correction.",
    ],
    sources: [
      {
        label: "NC State Extension — Soil acidity and liming",
        url: "https://content.ces.ncsu.edu/soil-acidity-and-liming-basic-information-for-farmers-and-gardeners",
      },
    ],
  },
  {
    id: "copper-toxicity-general",
    name: "Copper Toxicity",
    category: "nutrient-toxicity",
    affectedPlants: ["vegetable-garden", "specialty-cultivation", "ornamentals"],
    specificHosts: ["Tomato", "Lettuce", "Cannabis", "Chrysanthemum"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["roots", "new growth", "whole plant"],
    symptomProgression:
      "Root growth is stunted first, then plants show reduced vigor and iron-deficiency-like interveinal chlorosis on new leaves as copper interferes with iron uptake.",
    observableSigns: [
      "Short, stubby, poorly branched roots with brown, damaged tips seen when plants are lifted.",
      "Overall stunting and slow growth despite adequate water and other nutrients.",
      "Interveinal chlorosis on new growth resembling induced iron deficiency.",
    ],
    favorableConditions: [
      "Repeated copper fungicide use or copper-based algaecides accumulating in soil and media.",
      "Hydroponic systems dosed with excess copper micronutrient or copper piping contamination.",
    ],
    lookalikes: [
      {
        condition: "Iron deficiency",
        differentiator:
          "True iron deficiency lacks the stubby root stunting; copper toxicity restricts roots and only secondarily mimics iron chlorosis.",
      },
      {
        condition: "Root rot",
        differentiator:
          "Root rot roots are mushy and foul-smelling, while copper-damaged roots are short and stunted but not necessarily decayed.",
      },
    ],
    immediateActions: [
      "Stop all copper fungicides and copper-containing supplements immediately.",
      "For hydroponics, dump and replace the nutrient reservoir with fresh solution at correct micronutrient levels.",
    ],
    treatments: [
      {
        situation: "Hydroponic systems",
        treatment:
          "Flush the system with clean water, replace the reservoir, and check for copper plumbing or fittings contributing copper.",
      },
      {
        situation: "Soil accumulation",
        treatment:
          "Raise pH toward neutral where practical and add organic matter, which binds copper and reduces its availability to roots.",
      },
    ],
    avoid: [
      "Do not keep applying copper fungicide on a schedule where soil copper is already accumulating.",
    ],
    recoveryTimeline:
      "Root recovery and new healthy growth take several weeks once the copper source is removed and levels drop.",
    prevention: [
      "Rotate fungicide chemistries instead of relying repeatedly on copper products.",
      "Verify micronutrient dosing in hydroponics and avoid copper plumbing in nutrient loops.",
    ],
    monitoringThresholds: [
      "Re-check root health and new leaf color within two to three weeks and test media or solution copper if unclear.",
    ],
    escalationCriteria: [
      "Submit soil or solution samples for heavy-metal analysis if stunting continues after removing all copper inputs.",
    ],
    sources: [
      {
        label: "UC IPM — Home and landscape",
        url: "https://ipm.ucanr.edu/home-and-landscape/",
      },
    ],
  },
  {
    id: "chlorine-toxicity-houseplants",
    name: "Chlorine Toxicity (Tap Water Houseplants)",
    category: "nutrient-toxicity",
    affectedPlants: ["houseplants", "specialty-cultivation"],
    specificHosts: ["Spider plant", "Prayer plant", "Calathea", "Dracaena"],
    growthStages: ["all-stages"],
    symptomLocations: ["leaf tips", "leaf margins", "whole leaf"],
    symptomProgression:
      "Sensitive foliage develops browning at the very tips first, then browning creeps along margins and older leaves yellow with continued exposure.",
    observableSigns: [
      "Brown, dry leaf tips on chlorine-sensitive foliage such as spider plant and dracaena.",
      "Marginal browning that develops gradually with continued watering from chlorinated tap water.",
      "Symptoms concentrate on the most recently expanded and older sensitive leaves.",
    ],
    favorableConditions: [
      "Watering sensitive houseplants directly with heavily chlorinated municipal tap water.",
      "Low humidity that compounds tip burn by increasing transpiration of accumulated ions.",
    ],
    lookalikes: [
      {
        condition: "Soluble salt buildup",
        differentiator:
          "Salt buildup leaves a visible soil crust, while chlorine tip burn appears without a mineral crust on the surface.",
      },
      {
        condition: "Low humidity tip burn",
        differentiator:
          "Low-humidity burn improves with misting or a humidifier, whereas chlorine burn improves only after changing water source.",
      },
    ],
    immediateActions: [
      "Switch to letting tap water sit uncovered overnight so chlorine can dissipate before use.",
      "Trim badly browned tips for appearance while identifying the water source problem.",
    ],
    treatments: [
      {
        situation: "Chlorine sensitivity",
        treatment:
          "Water with rainwater, distilled water, or dechlorinated tap water left to stand, and flush the pot to remove accumulated ions.",
      },
      {
        situation: "Chloramine-treated municipal water",
        treatment:
          "Use filtered or distilled water because chloramine does not off-gas by standing and requires filtration or additives to remove.",
      },
    ],
    avoid: [
      "Do not assume standing water removes the problem if your utility uses chloramine instead of chlorine.",
    ],
    recoveryTimeline:
      "New leaves emerge cleaner within a few weeks after switching water, but existing browned tips remain.",
    prevention: [
      "Use rainwater or distilled water for chlorine-sensitive species whenever possible.",
      "Maintain adequate humidity to reduce the accumulation of ions at leaf tips.",
    ],
    monitoringThresholds: [
      "Re-evaluate over two to three new leaves; continued tip burn suggests chloramine or salts rather than chlorine alone.",
    ],
    escalationCriteria: [
      "Check your water utility report or test water quality if symptoms persist after switching sources.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Houseplants",
        url: "https://extension.umn.edu/how/houseplants",
      },
    ],
  },
  {
    id: "fluoride-toxicity-houseplants",
    name: "Fluoride Toxicity (Sensitive Houseplants)",
    category: "nutrient-toxicity",
    affectedPlants: ["houseplants"],
    specificHosts: ["Spider plant", "Dracaena", "Cordyline", "Peace lily"],
    growthStages: ["all-stages"],
    symptomLocations: ["leaf tips", "leaf margins"],
    symptomProgression:
      "Tips of narrow-leaved plants turn tan to brown first, then a thin dark band forms between dead and living tissue and margins scorch over time.",
    observableSigns: [
      "Tan to reddish-brown necrosis at the tips of long, strappy leaves like spider plant and dracaena.",
      "A narrow reddish-brown border separating dead tip tissue from healthy green tissue.",
      "Symptoms concentrated on species known to be fluoride sensitive rather than the whole collection.",
    ],
    favorableConditions: [
      "Fluoridated municipal water used regularly on sensitive monocots.",
      "Superphosphate fertilizer or perlite that can contribute fluoride, plus low soil pH increasing uptake.",
    ],
    lookalikes: [
      {
        condition: "Chlorine toxicity",
        differentiator:
          "Fluoride burn typically shows a reddish-brown boundary band on strappy leaves that chlorine burn usually lacks.",
      },
      {
        condition: "Fertilizer salt burn",
        differentiator:
          "Salt burn affects many species with a soil crust, while fluoride burn selectively strikes known fluoride-sensitive plants.",
      },
    ],
    immediateActions: [
      "Switch sensitive plants to distilled or rainwater to remove fluoride from the watering routine.",
      "Stop using superphosphate fertilizer and check whether the potting mix contains perlite as a fluoride source.",
    ],
    treatments: [
      {
        situation: "Fluoridated tap water",
        treatment:
          "Water exclusively with distilled or rainwater, since fluoride cannot be removed by letting water stand overnight.",
      },
      {
        situation: "Low soil pH increasing uptake",
        treatment:
          "Adjust media pH toward the neutral end of the plant range to reduce fluoride availability to roots.",
      },
    ],
    avoid: [
      "Do not use superphosphate or perlite-heavy mixes for fluoride-sensitive dracaenas and spider plants.",
    ],
    recoveryTimeline:
      "Newly formed leaves emerge undamaged within several weeks of switching water, but scorched tips stay.",
    prevention: [
      "Use distilled or rainwater for known fluoride-sensitive houseplants.",
      "Keep media pH slightly higher and avoid phosphate sources that carry fluoride contamination.",
    ],
    monitoringThresholds: [
      "Assess the next few new leaves; recurring tip burn after switching water suggests a fertilizer or media source.",
    ],
    escalationCriteria: [
      "Review your water report or test for fluoride if damage continues despite using distilled water.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Houseplants",
        url: "https://extension.umn.edu/how/houseplants",
      },
    ],
  },
  {
    id: "phosphorus-excess-lockout",
    name: "Phosphorus Excess (Micronutrient Lockout)",
    category: "nutrient-toxicity",
    affectedPlants: ["vegetable-garden", "ornamentals", "specialty-cultivation"],
    specificHosts: ["Tomato", "Rose", "Cannabis", "Petunia"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["new growth", "veins", "whole leaf"],
    symptomProgression:
      "Excess phosphorus induces zinc and iron deficiency, so new growth develops interveinal chlorosis and stunting even though phosphorus itself is abundant.",
    observableSigns: [
      "Interveinal yellowing on new leaves resembling iron or zinc deficiency despite heavy feeding.",
      "Stunted new growth and shortened internodes as micronutrient uptake is blocked.",
      "Symptoms appear after repeated use of high-phosphorus bloom fertilizers.",
    ],
    favorableConditions: [
      "Overuse of high-phosphorus bloom boosters or bone meal beyond crop needs.",
      "High soil phosphorus combined with high pH that further limits iron and zinc availability.",
    ],
    lookalikes: [
      {
        condition: "Iron deficiency",
        differentiator:
          "Simple iron deficiency responds to iron chelate, while phosphorus-induced lockout also requires cutting phosphorus inputs.",
      },
      {
        condition: "Zinc deficiency",
        differentiator:
          "A soil test showing very high phosphorus points to excess-induced lockout rather than a primary zinc shortage.",
      },
    ],
    immediateActions: [
      "Stop applying phosphorus fertilizers and bloom boosters right away.",
      "Apply chelated iron or zinc as a stopgap to green up new growth while correcting the root cause.",
    ],
    treatments: [
      {
        situation: "Container culture",
        treatment:
          "Leach pots and switch to a balanced fertilizer with lower phosphorus, supplementing chelated micronutrients as needed.",
      },
      {
        situation: "Garden soil",
        treatment:
          "Halt all phosphorus additions for the season and correct pH so residual phosphorus interferes less with micronutrient uptake.",
      },
    ],
    avoid: [
      "Do not keep adding bloom booster believing more phosphorus improves flowering, since excess causes the lockout.",
    ],
    recoveryTimeline:
      "New growth greens up within one to three weeks with micronutrient support, while soil phosphorus declines over a season.",
    prevention: [
      "Use balanced fertilizers and apply phosphorus only when a soil test confirms it is needed.",
      "Avoid routine bloom boosters and keep pH in range so micronutrients stay available.",
    ],
    monitoringThresholds: [
      "Re-evaluate new leaf color weekly and get a soil test if chlorosis persists after stopping phosphorus.",
    ],
    escalationCriteria: [
      "Order a full soil test if an entire bed shows lockout, since very high phosphorus can take years to draw down.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Fertilizing gardens",
        url: "https://extension.umn.edu/how-manage-soil-and-nutrients-home-gardens/fertilizing-gardens",
      },
    ],
  },
  {
    id: "micronutrient-overdose-hydroponic",
    name: "Micronutrient Overdose (Hydroponic)",
    category: "nutrient-toxicity",
    affectedPlants: ["specialty-cultivation", "vegetable-garden"],
    specificHosts: ["Lettuce", "Basil", "Cannabis", "Tomato"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["new growth", "leaf margins", "whole leaf"],
    symptomProgression:
      "Leaves show mottled discoloration, spotting, and margin burn that intensifies as concentrated micronutrients accumulate in the recirculating solution.",
    observableSigns: [
      "Irregular mottling, bronzing, or dark spotting rather than uniform deficiency yellowing.",
      "Marginal leaf burn combined with stunted, distorted new growth.",
      "Symptoms follow overdosing of a micronutrient additive or repeated top-offs without reservoir changes.",
    ],
    favorableConditions: [
      "Overdosing supplements or misreading concentrated micronutrient additives in hydroponic reservoirs.",
      "Topping off reservoirs with nutrients rather than plain water, concentrating trace elements over time.",
    ],
    lookalikes: [
      {
        condition: "Nutrient deficiency",
        differentiator:
          "Deficiency causes uniform patterns, while micronutrient overdose causes irregular mottling, spotting, and margin burn.",
      },
      {
        condition: "pH lockout",
        differentiator:
          "Checking reservoir EC reveals excess salts in overdose, while lockout shows normal EC but out-of-range pH.",
      },
    ],
    immediateActions: [
      "Drain and refill the reservoir with fresh solution mixed at the correct concentration.",
      "Verify EC and micronutrient dosing against the recipe before re-adding any supplements.",
    ],
    treatments: [
      {
        situation: "Recirculating systems",
        treatment:
          "Perform a full reservoir change, then top off only with plain water between changes to prevent trace-element accumulation.",
      },
      {
        situation: "Confirmed additive overdose",
        treatment:
          "Discontinue the offending supplement and run a lower-strength base nutrient until new growth normalizes.",
      },
    ],
    avoid: [
      "Do not top off a reservoir with full-strength nutrient solution, which concentrates micronutrients to toxic levels.",
    ],
    recoveryTimeline:
      "New leaves emerge normal within one to two weeks after a reservoir reset, while damaged leaves stay marked.",
    prevention: [
      "Measure and log EC at each top-off and change reservoirs on a regular schedule.",
      "Add supplements only per recipe and avoid stacking multiple additives with overlapping micronutrients.",
    ],
    monitoringThresholds: [
      "Re-check EC daily after a reset; rising EC without adding nutrients signals accumulation needing another change.",
    ],
    escalationCriteria: [
      "Send solution for lab analysis if symptoms persist across resets and EC readings seem inconsistent.",
    ],
    sources: [
      {
        label: "UC IPM — Home and landscape",
        url: "https://ipm.ucanr.edu/home-and-landscape/",
      },
    ],
  },
  {
    id: "de-icing-salt-injury",
    name: "De-Icing Salt Injury (Roadside Sodium)",
    category: "nutrient-toxicity",
    affectedPlants: ["trees-shrubs", "ornamentals", "lawns-turf"],
    specificHosts: ["Norway maple", "White pine", "Boxwood", "Turfgrass"],
    growthStages: ["dormant", "mature"],
    symptomLocations: ["leaf margins", "new growth", "twigs", "roots"],
    symptomProgression:
      "Evergreen needles brown from the tips and deciduous plants leaf out late with marginal scorch, worsening on the roadside-facing side over the season.",
    observableSigns: [
      "Needle browning from the tips inward on evergreens facing roads or salted walkways.",
      "Delayed or sparse spring leaf-out and marginal scorch on deciduous plants near salted surfaces.",
      "Damage concentrated on the side of the plant facing spray or runoff.",
    ],
    favorableConditions: [
      "Winter road and sidewalk salting that sprays or drains onto nearby plantings.",
      "Poorly drained soils where sodium accumulates instead of leaching away.",
    ],
    lookalikes: [
      {
        condition: "Winter desiccation",
        differentiator:
          "Desiccation affects all exposed sides evenly, while salt injury concentrates on the side facing the salt source.",
      },
      {
        condition: "Drought stress",
        differentiator:
          "A soil sodium test confirms salt injury, whereas drought scorch resolves with irrigation and shows no sodium buildup.",
      },
    ],
    immediateActions: [
      "Leach salt-affected soil with heavy spring irrigation once the ground thaws.",
      "Rinse salt spray off evergreen foliage after storms where practical.",
    ],
    treatments: [
      {
        situation: "Soil sodium buildup",
        treatment:
          "Apply gypsum to help displace sodium and irrigate deeply to leach it below the root zone in spring.",
      },
      {
        situation: "Repeated roadside exposure",
        treatment:
          "Install burlap barriers in winter and replant sensitive species with salt-tolerant selections over time.",
      },
    ],
    avoid: [
      "Do not pile salt-laden snow onto planting beds or lawns during winter cleanup.",
    ],
    recoveryTimeline:
      "Vigorous plants push new growth over one to two seasons after leaching, but heavily damaged branches may die back.",
    prevention: [
      "Use sand or calcium-magnesium acetate instead of sodium chloride near sensitive plants.",
      "Choose salt-tolerant species for roadside and walkway plantings.",
    ],
    monitoringThresholds: [
      "Re-evaluate leaf-out and needle color each spring; expanding dieback warrants a soil sodium test.",
    ],
    escalationCriteria: [
      "Consult an arborist if a valued tree shows progressive dieback over successive winters.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Protecting plants from de-icing salt",
        url: "https://extension.umn.edu/protecting-and-preserving-trees/preventing-salt-damage",
      },
    ],
  },
  {
    id: "herbicide-carryover-compost",
    name: "Herbicide Carryover (Contaminated Compost or Manure)",
    category: "nutrient-toxicity",
    affectedPlants: ["vegetable-garden", "ornamentals", "herbs"],
    specificHosts: ["Tomato", "Bean", "Pea", "Potato"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["new growth", "leaf tips", "whole plant"],
    symptomProgression:
      "New growth emerges cupped, fern-like, and twisted, with stems curling and plants failing to set fruit as persistent herbicide residues affect the crop.",
    observableSigns: [
      "Cupped, curled, and abnormally narrow fern-like new leaves on broadleaf crops.",
      "Twisted stems and stunted plants shortly after using suspect compost, manure, or straw mulch.",
      "Tomatoes and legumes are especially sensitive and distorted while grasses look normal.",
    ],
    favorableConditions: [
      "Compost, manure, or hay contaminated with persistent pyridine-type herbicides like aminopyralid or clopyralid.",
      "Using bedding, grass clippings, or straw from fields treated with residual herbicides.",
    ],
    lookalikes: [
      {
        condition: "Herbicide spray drift",
        differentiator:
          "Drift affects the exposed side and neighbors, while carryover affects plants uniformly in beds amended with the contaminated material.",
      },
      {
        condition: "Broad mite damage",
        differentiator:
          "Broad mites cause bronzed distorted tips with mites present, while herbicide carryover causes fern-like cupping with no pests.",
      },
    ],
    immediateActions: [
      "Stop using the suspect compost or manure and note its source for future avoidance.",
      "Do a bioassay by planting pea or bean seedlings in the material to confirm contamination.",
    ],
    treatments: [
      {
        situation: "Contaminated garden beds",
        treatment:
          "Keep the soil warm, moist, and aerated to speed microbial breakdown, and avoid planting sensitive crops until a bioassay passes.",
      },
      {
        situation: "Contaminated pots or media",
        treatment:
          "Discard the affected media rather than reusing it, since residues can persist for many months.",
      },
    ],
    avoid: [
      "Do not add more of the same manure or compost hoping to dilute the residue, which only spreads it.",
    ],
    recoveryTimeline:
      "Residues degrade over months to a year depending on the product, so replanting sensitive crops may need to wait a season.",
    prevention: [
      "Source compost and manure from suppliers who confirm no persistent herbicide use.",
      "Run a pea or bean bioassay before amending beds with unknown compost, manure, or hay.",
    ],
    monitoringThresholds: [
      "Re-run a bioassay before each planting until seedlings grow normally, indicating residues have degraded.",
    ],
    escalationCriteria: [
      "Report and send samples to an extension lab if commercial compost is suspected of contamination.",
    ],
    sources: [
      {
        label: "NC State Extension — Herbicide carryover",
        url: "https://content.ces.ncsu.edu/herbicide-carryover",
      },
    ],
  },
  {
    id: "ammonium-toxicity-cold-soils",
    name: "Ammonium Toxicity (Cold or Waterlogged Soils)",
    category: "nutrient-toxicity",
    affectedPlants: ["vegetable-garden", "specialty-cultivation", "ornamentals"],
    specificHosts: ["Tomato", "Cucumber", "Lettuce", "Cannabis"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["leaf margins", "roots", "new growth"],
    symptomProgression:
      "Leaves curl and margins scorch while roots turn brown and stunted, worsening in cold or saturated media where ammonium cannot convert to nitrate.",
    observableSigns: [
      "Downward leaf curl with chlorotic and scorched margins on young plants.",
      "Brown, poorly developed roots and general stunting despite feeding.",
      "Symptoms appear in cold or waterlogged media where nitrification is suppressed.",
    ],
    favorableConditions: [
      "High ammonium-based fertilizer applied to cold soils below the temperature that supports nitrification.",
      "Waterlogged or low-oxygen media where ammonium accumulates instead of converting to nitrate.",
    ],
    lookalikes: [
      {
        condition: "Root rot",
        differentiator:
          "Root rot roots are mushy and smelly, while ammonium injury roots are brown and stunted but firm without decay odor.",
      },
      {
        condition: "Salt injury",
        differentiator:
          "Salt injury shows uniform tip burn with a soil crust, while ammonium toxicity shows leaf curl and root browning in cold, wet media.",
      },
    ],
    immediateActions: [
      "Stop ammonium-heavy feeding and warm and dry the root zone to restore nitrification.",
      "Improve aeration by loosening compacted or saturated media around the roots.",
    ],
    treatments: [
      {
        situation: "Cold-season feeding",
        treatment:
          "Switch to a nitrate-dominant fertilizer until soil temperatures rise enough to support ammonium conversion.",
      },
      {
        situation: "Waterlogged media",
        treatment:
          "Improve drainage and aeration, then resume light feeding once roots recover and oxygen returns to the root zone.",
      },
    ],
    avoid: [
      "Do not apply high-ammonium fertilizer to cold, saturated soils early in the season.",
    ],
    recoveryTimeline:
      "Roots and new growth recover over two to four weeks once soil warms, drains, and ammonium is converted or leached.",
    prevention: [
      "Prefer nitrate-based nitrogen during cold weather and in poorly drained media.",
      "Ensure good drainage and wait for adequate soil warmth before heavy nitrogen feeding.",
    ],
    monitoringThresholds: [
      "Reassess as soil warms; persistent curl and root browning after warming warrants a soil nitrogen test.",
    ],
    escalationCriteria: [
      "Seek lab testing if an entire planting shows toxicity despite corrected temperature and drainage.",
    ],
    sources: [
      {
        label: "PennState Extension — Soil testing and fertilizers",
        url: "https://extension.psu.edu/soil-testing-and-fertilizers",
      },
    ],
  },
  {
    id: "over-liming-alkalinity-injury",
    name: "Over-Liming Injury (Excess Lime Alkalinity)",
    category: "nutrient-toxicity",
    affectedPlants: ["vegetable-garden", "ornamentals", "berries"],
    specificHosts: ["Blueberry", "Azalea", "Potato", "Tomato"],
    growthStages: ["vegetative", "all-stages"],
    symptomLocations: ["new growth", "veins", "whole plant"],
    symptomProgression:
      "Overliming pushes pH too high, so new growth yellows between the veins from induced iron and manganese deficiency and acid-loving plants decline sharply.",
    observableSigns: [
      "Interveinal chlorosis on new leaves as high pH locks up iron and manganese.",
      "Acid-loving plants like blueberry and azalea show severe yellowing and stunting.",
      "A soil test confirms pH well above the crop's recommended range.",
    ],
    favorableConditions: [
      "Applying lime without a soil test or greatly exceeding the recommended rate.",
      "Liming already near-neutral or alkaline soils, or planting acid-lovers in limed beds.",
    ],
    lookalikes: [
      {
        condition: "Primary iron deficiency",
        differentiator:
          "A soil pH test above range points to over-liming, whereas primary iron deficiency can occur at correct pH.",
      },
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen deficiency yellows older leaves uniformly, while over-liming chlorosis is interveinal on new growth.",
      },
    ],
    immediateActions: [
      "Stop adding lime and test soil pH to confirm it is above the target range.",
      "Apply chelated iron to green up affected foliage while planning pH correction.",
    ],
    treatments: [
      {
        situation: "Slightly high pH",
        treatment:
          "Incorporate elemental sulfur at the tested rate and add acidic organic matter to gradually lower pH.",
      },
      {
        situation: "Acid-loving plants in limed soil",
        treatment:
          "Relocate blueberries and azaleas to acidified beds or containers with acidic media rather than fighting alkaline ground.",
      },
    ],
    avoid: [
      "Do not apply more lime chasing a nutrient symptom without a soil test confirming actual pH.",
    ],
    recoveryTimeline:
      "Sulfur lowers pH over several months, so full recovery of new growth is gradual across a season.",
    prevention: [
      "Always soil test before liming and apply only the recommended amount.",
      "Match plant selection to the existing soil pH, using containers for acid-lovers where soils are alkaline.",
    ],
    monitoringThresholds: [
      "Re-test pH two to three months after sulfur application and reassess new leaf color.",
    ],
    escalationCriteria: [
      "Consult extension for a full soil analysis if pH remains far off target despite amendment.",
    ],
    sources: [
      {
        label: "NC State Extension — Soil acidity and liming",
        url: "https://content.ces.ncsu.edu/soil-acidity-and-liming-basic-information-for-farmers-and-gardeners",
      },
    ],
  },
  {
    id: "zinc-toxicity-galvanized",
    name: "Zinc Toxicity (Galvanized Contact or Overdose)",
    category: "nutrient-toxicity",
    affectedPlants: ["vegetable-garden", "specialty-cultivation", "ornamentals"],
    specificHosts: ["Spinach", "Lettuce", "Bean", "Pansy"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["new growth", "roots", "veins"],
    symptomProgression:
      "Growth stunts and new leaves show iron-deficiency-like interveinal chlorosis as excess zinc blocks iron uptake, with roots becoming short and sparse.",
    observableSigns: [
      "Interveinal chlorosis on new leaves resembling induced iron deficiency.",
      "Stunted plants with short, poorly branched roots and reduced vigor.",
      "History of galvanized containers, zinc-treated hardware, or zinc micronutrient overdose.",
    ],
    favorableConditions: [
      "Growing in galvanized containers or acidic soils that dissolve zinc from metal surfaces.",
      "Overdosing zinc micronutrient supplements or repeated zinc-heavy sludge amendments.",
    ],
    lookalikes: [
      {
        condition: "Iron deficiency",
        differentiator:
          "Iron deficiency resolves with iron chelate alone, while zinc toxicity also requires removing the zinc source.",
      },
      {
        condition: "Copper toxicity",
        differentiator:
          "A tissue test distinguishes them, since zinc toxicity shows elevated zinc while copper toxicity shows elevated copper.",
      },
    ],
    immediateActions: [
      "Line or replace galvanized planters and stop any zinc supplements immediately.",
      "Apply chelated iron to relieve induced chlorosis while correcting the zinc source.",
    ],
    treatments: [
      {
        situation: "Galvanized container use",
        treatment:
          "Line metal containers with plastic or replace them, and raise media pH toward neutral to reduce zinc solubility.",
      },
      {
        situation: "Soil zinc accumulation",
        treatment:
          "Add organic matter and lime acidic soils to bind zinc and reduce its availability to roots.",
      },
    ],
    avoid: [
      "Do not grow acid-loving or sensitive crops directly in bare galvanized containers.",
    ],
    recoveryTimeline:
      "New growth greens up within two to three weeks after removing the source, though soil zinc declines slowly.",
    prevention: [
      "Avoid bare galvanized planters and only add zinc when a soil test confirms deficiency.",
      "Keep soil pH near neutral to minimize zinc solubility and uptake.",
    ],
    monitoringThresholds: [
      "Re-check new leaf color and root health within a few weeks and test tissue zinc if chlorosis persists.",
    ],
    escalationCriteria: [
      "Submit soil for heavy-metal testing if stunting continues after removing suspected zinc sources.",
    ],
    sources: [
      {
        label: "UC IPM — Home and landscape",
        url: "https://ipm.ucanr.edu/home-and-landscape/",
      },
    ],
  },

  // ===================== ph-ec-lockout (12) =====================
  {
    id: "alkaline-iron-lockout",
    name: "Alkaline-Induced Iron Lockout (Lime-Induced Chlorosis)",
    category: "ph-ec-lockout",
    affectedPlants: ["ornamentals", "trees-shrubs", "fruit-trees", "berries"],
    specificHosts: ["Pin oak", "Azalea", "Blueberry", "Citrus"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["new growth", "veins"],
    symptomProgression:
      "Youngest leaves yellow between green veins first, then whole leaves pale and margins scorch, with severe cases showing twig dieback over seasons.",
    observableSigns: [
      "Bright interveinal chlorosis on the newest leaves while veins stay distinctly green.",
      "Older leaves remain greener than new growth because iron is immobile in the plant.",
      "Symptoms strongest on acid-loving species growing in alkaline or high-lime soils.",
    ],
    favorableConditions: [
      "Soil pH above about 7.0 that converts iron into unavailable forms.",
      "High soil lime, bicarbonate-rich irrigation water, or overwatering that raises effective pH.",
    ],
    lookalikes: [
      {
        condition: "Manganese deficiency",
        differentiator:
          "Manganese deficiency looks similar but a tissue test and pattern comparison, plus soil pH, help separate the two.",
      },
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen deficiency yellows old leaves first and uniformly, while iron lockout hits new leaves with green veins.",
      },
    ],
    immediateActions: [
      "Test soil pH to confirm alkalinity as the cause of the chlorosis.",
      "Apply chelated iron formulated for high-pH soils to green up foliage quickly.",
    ],
    treatments: [
      {
        situation: "Fast temporary relief",
        treatment:
          "Foliar spray or soil drench with an EDDHA iron chelate, which stays available even in alkaline soils.",
      },
      {
        situation: "Long-term correction",
        treatment:
          "Lower soil pH gradually with elemental sulfur and acidic organic matter, and avoid bicarbonate-rich irrigation.",
      },
    ],
    avoid: [
      "Do not add lime or bicarbonate-rich water, which worsens iron lockout on affected plants.",
    ],
    recoveryTimeline:
      "Chelated iron greens new growth within one to three weeks, while sulfur-based pH correction takes months.",
    prevention: [
      "Match acid-loving species to acidic soils or grow them in acidified beds and containers.",
      "Test soil pH regularly and use acidified irrigation where source water is high in bicarbonates.",
    ],
    monitoringThresholds: [
      "Recheck soil pH each season and reassess new leaf color a few weeks after treatment.",
    ],
    escalationCriteria: [
      "Consult an arborist if a mature tree shows repeated severe chlorosis and canopy dieback.",
    ],
    sources: [
      {
        label: "PennState Extension — Iron chlorosis",
        url: "https://extension.psu.edu/iron-chlorosis-in-woody-plants-symptoms-and-solutions",
      },
    ],
  },
  {
    id: "acid-soil-aluminum-toxicity",
    name: "Acid-Soil Aluminum Toxicity",
    category: "ph-ec-lockout",
    affectedPlants: ["vegetable-garden", "lawns-turf", "trees-shrubs"],
    specificHosts: ["Alfalfa", "Barley", "Turfgrass", "Bean"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["roots", "whole plant"],
    symptomProgression:
      "Root tips are damaged first, becoming short and stubby, then plants stunt, wilt easily in dry spells, and show phosphorus-deficiency-like purpling.",
    observableSigns: [
      "Short, thickened, poorly branched roots that cannot explore the soil profile.",
      "Overall stunting with plants prone to drought stress from limited rooting.",
      "Symptoms strongest in strongly acidic soils below roughly pH 5.5.",
    ],
    favorableConditions: [
      "Strongly acidic soils where aluminum becomes soluble and damages root tips.",
      "Subsoil acidity and low calcium that leave aluminum unbuffered.",
    ],
    lookalikes: [
      {
        condition: "Phosphorus deficiency",
        differentiator:
          "Aluminum toxicity restricts roots directly; the purpling it causes is secondary and a soil pH test confirms acidity.",
      },
      {
        condition: "Compacted soil",
        differentiator:
          "Compaction restricts roots physically across pH ranges, while aluminum toxicity appears specifically in strongly acidic soil.",
      },
    ],
    immediateActions: [
      "Test soil pH to confirm strong acidity as the driver of root injury.",
      "Plan lime application at the tested rate to neutralize soluble aluminum.",
    ],
    treatments: [
      {
        situation: "Surface soil acidity",
        treatment:
          "Apply agricultural lime according to a soil test to raise pH and precipitate aluminum into non-toxic forms.",
      },
      {
        situation: "Subsoil acidity",
        treatment:
          "Incorporate lime deeply where possible and add gypsum to supply calcium and reduce aluminum in the subsoil.",
      },
    ],
    avoid: [
      "Do not add acidifying fertilizers or sulfur to soils already showing aluminum toxicity.",
    ],
    recoveryTimeline:
      "Root health improves over months as lime reacts and raises pH, so recovery spans a full season.",
    prevention: [
      "Maintain soil pH in the recommended range through periodic soil testing and liming.",
      "Avoid over-acidifying and ensure adequate calcium to buffer aluminum.",
    ],
    monitoringThresholds: [
      "Re-test soil pH a few months after liming and reassess rooting and vigor the following season.",
    ],
    escalationCriteria: [
      "Seek agronomic advice if crops fail repeatedly despite liming, since subsoil acidity may need special management.",
    ],
    sources: [
      {
        label: "NC State Extension — Soil acidity and liming",
        url: "https://content.ces.ncsu.edu/soil-acidity-and-liming-basic-information-for-farmers-and-gardeners",
      },
    ],
  },
  {
    id: "high-ec-lockout-containers",
    name: "High-EC Nutrient Lockout (Container Salts)",
    category: "ph-ec-lockout",
    affectedPlants: ["specialty-cultivation", "houseplants", "vegetable-garden"],
    specificHosts: ["Cannabis", "Tomato", "Pepper", "Ficus"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["leaf tips", "leaf margins", "whole leaf"],
    symptomProgression:
      "Leaf tips burn and margins curl while multiple deficiency symptoms appear at once, because high salt concentration blocks water and nutrient uptake.",
    observableSigns: [
      "Simultaneous, confusing deficiency-like symptoms rather than one clear deficiency.",
      "Burned, clawed leaf tips and margins with plants wilting despite moist media.",
      "Elevated runoff EC measured well above the target for the crop and stage.",
    ],
    favorableConditions: [
      "Overfeeding heavy nutrient concentrations without periodic plain-water flushing.",
      "Small containers and infrequent full waterings that let salts concentrate.",
    ],
    lookalikes: [
      {
        condition: "pH drift lockout",
        differentiator:
          "pH lockout shows normal runoff EC with out-of-range pH, while high-EC lockout shows elevated runoff EC.",
      },
      {
        condition: "Overwatering",
        differentiator:
          "Overwatering droops leaves with soggy media, while high-EC lockout burns tips and shows high measured runoff salinity.",
      },
    ],
    immediateActions: [
      "Measure runoff EC and, if high, flush the media with plain pH-adjusted water to reduce salt concentration.",
      "Pause fertilizing until EC returns to the target range.",
    ],
    treatments: [
      {
        situation: "Container culture",
        treatment:
          "Flush with two to three container-volumes of pH-adjusted water, then resume feeding at reduced strength based on runoff EC.",
      },
      {
        situation: "Chronic overfeeding",
        treatment:
          "Lower the base nutrient strength and adopt regular monitoring so feed matches uptake rather than exceeding it.",
      },
    ],
    avoid: [
      "Do not add more nutrients to fix deficiency-looking symptoms when the real problem is excess salts.",
    ],
    recoveryTimeline:
      "New growth normalizes within one to two weeks after flushing and reducing feed strength.",
    prevention: [
      "Monitor runoff EC regularly and feed to the target for the crop and growth stage.",
      "Water to a modest runoff each time and flush periodically to prevent salt accumulation.",
    ],
    monitoringThresholds: [
      "Check runoff EC at each watering and reflush whenever it rises above the target range.",
    ],
    escalationCriteria: [
      "Send media for lab analysis if symptoms persist even after EC is brought back into range.",
    ],
    sources: [
      {
        label: "UC IPM — Home and landscape",
        url: "https://ipm.ucanr.edu/home-and-landscape/",
      },
    ],
  },
  {
    id: "hard-water-alkalinity-buildup",
    name: "Hard Water Alkalinity Buildup (Container pH Creep)",
    category: "ph-ec-lockout",
    affectedPlants: ["houseplants", "ornamentals", "specialty-cultivation"],
    specificHosts: ["Gardenia", "Fern", "Orchid", "African violet"],
    growthStages: ["all-stages"],
    symptomLocations: ["new growth", "soil surface", "veins"],
    symptomProgression:
      "Media pH creeps upward from bicarbonate-rich water, producing interveinal chlorosis on new growth and white mineral deposits on soil and pot surfaces.",
    observableSigns: [
      "Gradual interveinal yellowing of new leaves as rising media pH locks up iron.",
      "White limescale deposits on the soil surface, pot rim, and drainage tray.",
      "A media pH test reading higher than the mix started at.",
    ],
    favorableConditions: [
      "Watering with hard, bicarbonate-rich tap water over many weeks.",
      "Peat-based mixes whose acidity is neutralized over time by alkaline irrigation.",
    ],
    lookalikes: [
      {
        condition: "Primary iron deficiency",
        differentiator:
          "Hard water buildup shows rising media pH and limescale, while primary iron deficiency lacks the mineral deposits.",
      },
      {
        condition: "Soluble salt injury",
        differentiator:
          "Salt injury burns tips from high EC, while alkalinity buildup drives interveinal chlorosis from rising pH.",
      },
    ],
    immediateActions: [
      "Test media pH and switch to rainwater or acidified water to stop the upward pH creep.",
      "Apply chelated iron to relieve chlorosis while correcting water alkalinity.",
    ],
    treatments: [
      {
        situation: "Ongoing hard water use",
        treatment:
          "Use collected rainwater or acidify irrigation water to a slightly acidic pH so media stays in range.",
      },
      {
        situation: "Already elevated media pH",
        treatment:
          "Repot into fresh acidic mix or drench with an acidifying solution to bring media pH back to target.",
      },
    ],
    avoid: [
      "Do not keep watering acid-loving plants with untreated hard tap water long term.",
    ],
    recoveryTimeline:
      "New growth greens up within a couple of weeks with iron and corrected water, and fresh media resets pH immediately.",
    prevention: [
      "Use rainwater or acidified irrigation for sensitive plants where tap water is hard.",
      "Periodically test media pH and refresh mixes that have drifted alkaline.",
    ],
    monitoringThresholds: [
      "Re-check media pH every one to two months and whenever new leaves begin to yellow.",
    ],
    escalationCriteria: [
      "Test your tap water's alkalinity if pH keeps creeping up despite media changes.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Houseplants",
        url: "https://extension.umn.edu/how/houseplants",
      },
    ],
  },
  {
    id: "hydroponic-ph-drift-up",
    name: "Hydroponic pH Drift Upward",
    category: "ph-ec-lockout",
    affectedPlants: ["specialty-cultivation", "vegetable-garden", "herbs"],
    specificHosts: ["Lettuce", "Basil", "Cannabis", "Cucumber"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["new growth", "veins"],
    symptomProgression:
      "As reservoir pH rises above the optimal band, iron and other micronutrients precipitate, so new growth develops interveinal chlorosis despite adequate nutrients.",
    observableSigns: [
      "Interveinal chlorosis on new growth even though nutrients were dosed correctly.",
      "Reservoir pH measured drifting above the roughly 5.5 to 6.5 target for most crops.",
      "Symptoms improve when pH is brought back into range rather than by adding nutrients.",
    ],
    favorableConditions: [
      "Plants absorbing nutrients and releasing hydroxide as the reservoir depletes, raising pH.",
      "Alkaline top-off water and infrequent pH monitoring between changes.",
    ],
    lookalikes: [
      {
        condition: "Iron deficiency from underdosing",
        differentiator:
          "Checking reservoir pH reveals drift as the cause, while true underdosing shows correct pH with low EC.",
      },
      {
        condition: "High-EC lockout",
        differentiator:
          "High-EC lockout shows elevated EC, while pH drift shows normal EC with out-of-range pH.",
      },
    ],
    immediateActions: [
      "Measure reservoir pH and adjust it back into the optimal range with pH-down solution.",
      "Top off with pH-adjusted water rather than raw alkaline tap water.",
    ],
    treatments: [
      {
        situation: "Recirculating reservoir",
        treatment:
          "Adjust pH into range, then check and correct daily until it stabilizes, changing the reservoir if it drifts persistently.",
      },
      {
        situation: "Alkaline source water",
        treatment:
          "Pre-treat top-off water to a slightly acidic pH so additions do not push the reservoir upward.",
      },
    ],
    avoid: [
      "Do not add extra nutrients to counter chlorosis when the actual issue is out-of-range pH.",
    ],
    recoveryTimeline:
      "New growth greens within one to two weeks once pH is stabilized in the optimal band.",
    prevention: [
      "Check and log reservoir pH at least daily and correct promptly.",
      "Use pH-buffered nutrient recipes and pre-treat alkaline source water.",
    ],
    monitoringThresholds: [
      "Re-evaluate if pH drifts out of range within a day, indicating the reservoir needs a full change.",
    ],
    escalationCriteria: [
      "Test source water alkalinity if pH keeps climbing rapidly despite regular adjustment.",
    ],
    sources: [
      {
        label: "UC IPM — Home and landscape",
        url: "https://ipm.ucanr.edu/home-and-landscape/",
      },
    ],
  },
  {
    id: "hydroponic-ph-drift-down",
    name: "Hydroponic pH Drift Downward",
    category: "ph-ec-lockout",
    affectedPlants: ["specialty-cultivation", "vegetable-garden", "herbs"],
    specificHosts: ["Tomato", "Pepper", "Basil", "Cannabis"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["new growth", "leaf tips", "whole leaf"],
    symptomProgression:
      "When reservoir pH falls too low, calcium and magnesium availability drops, producing spotting, tip burn, and distorted new growth over several days.",
    observableSigns: [
      "Calcium and magnesium deficiency signs like spotting and margin necrosis at low pH.",
      "Reservoir pH measured below the optimal range, often trending down daily.",
      "Distorted or hooked new growth as low pH disrupts nutrient balance.",
    ],
    favorableConditions: [
      "Ammonium-heavy nutrients or root respiration acidifying the reservoir over time.",
      "Overshooting with pH-down additions and infrequent monitoring.",
    ],
    lookalikes: [
      {
        condition: "Calcium deficiency from underdosing",
        differentiator:
          "A low reservoir pH reading identifies drift, while genuine underdosing shows correct pH with insufficient calcium.",
      },
      {
        condition: "Overdosed pH-down",
        differentiator:
          "Reviewing the dosing log distinguishes gradual biological drift from an accidental heavy pH-down addition.",
      },
    ],
    immediateActions: [
      "Measure reservoir pH and raise it back into range with pH-up solution added slowly.",
      "Recheck after mixing to confirm the correction held before assuming it is stable.",
    ],
    treatments: [
      {
        situation: "Biological acidification",
        treatment:
          "Adjust pH upward and monitor daily, refreshing the reservoir if the buffer capacity is exhausted.",
      },
      {
        situation: "Ammonium-driven drift",
        treatment:
          "Shift toward a more nitrate-based nutrient recipe to reduce the tendency for pH to fall.",
      },
    ],
    avoid: [
      "Do not overcorrect with large pH-up additions that swing the reservoir out of range the other way.",
    ],
    recoveryTimeline:
      "New leaves normalize within one to two weeks after pH is stabilized within the optimal band.",
    prevention: [
      "Monitor and log reservoir pH daily and correct in small increments.",
      "Balance ammonium and nitrate in the recipe and change reservoirs on schedule.",
    ],
    monitoringThresholds: [
      "Re-evaluate if pH falls out of range within a day, signaling the reservoir should be changed.",
    ],
    escalationCriteria: [
      "Investigate root disease or dosing errors if pH crashes repeatedly despite corrections.",
    ],
    sources: [
      {
        label: "UC IPM — Home and landscape",
        url: "https://ipm.ucanr.edu/home-and-landscape/",
      },
    ],
  },
  {
    id: "phosphorus-lockout-low-ph",
    name: "Phosphorus Lockout at Low pH",
    category: "ph-ec-lockout",
    affectedPlants: ["vegetable-garden", "specialty-cultivation", "ornamentals"],
    specificHosts: ["Tomato", "Corn", "Cannabis", "Marigold"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["older leaves", "stems", "whole plant"],
    symptomProgression:
      "Older leaves and stems turn dull green then purple as low pH ties up phosphorus, with plants stunting and maturity delayed despite adequate feeding.",
    observableSigns: [
      "Purpling or reddening of older leaves and stems from phosphorus-deficiency induced by low pH.",
      "Stunted plants and delayed maturity despite phosphorus being present in the media.",
      "A media or soil pH test reading below the crop's optimal range.",
    ],
    favorableConditions: [
      "Overly acidic media or soil that binds phosphorus into unavailable forms.",
      "Cold conditions compounding limited phosphorus uptake at low pH.",
    ],
    lookalikes: [
      {
        condition: "Primary phosphorus deficiency",
        differentiator:
          "A low pH reading indicates lockout, while primary deficiency occurs at correct pH with low soil phosphorus.",
      },
      {
        condition: "Cold-induced purpling",
        differentiator:
          "Cold purpling fades as temperatures warm, while low-pH lockout persists until pH is corrected.",
      },
    ],
    immediateActions: [
      "Test pH and, if too low, correct it toward the crop optimum with lime or pH-up.",
      "Keep the root zone warm to improve phosphorus uptake while correcting pH.",
    ],
    treatments: [
      {
        situation: "Acidic soil",
        treatment:
          "Apply lime at the tested rate to raise pH into range, which frees bound phosphorus for uptake.",
      },
      {
        situation: "Acidic container media",
        treatment:
          "Adjust irrigation and feed pH upward and, if severe, repot into fresh mix at correct pH.",
      },
    ],
    avoid: [
      "Do not pile on phosphorus fertilizer while pH remains too low, since it will stay locked out.",
    ],
    recoveryTimeline:
      "New growth improves over one to three weeks in containers and across months in field soils as pH rises.",
    prevention: [
      "Maintain pH in the crop's optimal range through regular testing.",
      "Keep the root zone warm and avoid over-acidifying media and soils.",
    ],
    monitoringThresholds: [
      "Re-test pH after correction and reassess purpling on new growth within a few weeks.",
    ],
    escalationCriteria: [
      "Get a full soil test if purpling persists across a field despite pH correction.",
    ],
    sources: [
      {
        label: "PennState Extension — Soil testing and fertilizers",
        url: "https://extension.psu.edu/soil-testing-and-fertilizers",
      },
    ],
  },
  {
    id: "bicarbonate-irrigation-lockout",
    name: "Bicarbonate Irrigation Lockout",
    category: "ph-ec-lockout",
    affectedPlants: ["ornamentals", "specialty-cultivation", "vegetable-garden"],
    specificHosts: ["Geranium", "Petunia", "Tomato", "Cannabis"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["new growth", "veins", "soil surface"],
    symptomProgression:
      "High-bicarbonate irrigation steadily raises media pH, causing iron and manganese lockout so new leaves yellow between veins while scale forms on the surface.",
    observableSigns: [
      "Progressive interveinal chlorosis on new growth as bicarbonates push media pH up.",
      "Mineral scale accumulating on media surface, drip emitters, and pot rims.",
      "Media pH testing higher over successive irrigations from the same water source.",
    ],
    favorableConditions: [
      "Irrigation water with high bicarbonate alkalinity used without acid injection.",
      "Peat-lite mixes that lose their initial acidity to repeated alkaline watering.",
    ],
    lookalikes: [
      {
        condition: "Alkaline soil iron lockout",
        differentiator:
          "Bicarbonate lockout is driven by water alkalinity, confirmed by a water alkalinity test rather than native soil pH.",
      },
      {
        condition: "Overwatering chlorosis",
        differentiator:
          "Overwatering yellows leaves with soggy media, while bicarbonate lockout shows rising media pH and surface scale.",
      },
    ],
    immediateActions: [
      "Test irrigation water alkalinity and media pH to confirm bicarbonates as the cause.",
      "Inject or add acid to lower irrigation alkalinity into the target range.",
    ],
    treatments: [
      {
        situation: "Commercial or hobby irrigation",
        treatment:
          "Acidify irrigation water to neutralize excess bicarbonates and keep media pH in the target range.",
      },
      {
        situation: "Already elevated media pH",
        treatment:
          "Apply an acidifying drench and chelated iron to restore availability while correcting the water.",
      },
    ],
    avoid: [
      "Do not continue irrigating with untreated high-alkalinity water once chlorosis appears.",
    ],
    recoveryTimeline:
      "New growth greens within one to two weeks after acidifying water and adding iron.",
    prevention: [
      "Test water alkalinity and inject acid as needed to keep it in range.",
      "Choose fertilizers with appropriate acidity or basicity to balance the water source.",
    ],
    monitoringThresholds: [
      "Monitor media pH weekly and reassess whenever new leaves begin to yellow.",
    ],
    escalationCriteria: [
      "Have a full irrigation water analysis done if media pH keeps climbing despite acidification.",
    ],
    sources: [
      {
        label: "PennState Extension — Soil testing and fertilizers",
        url: "https://extension.psu.edu/soil-testing-and-fertilizers",
      },
    ],
  },
  {
    id: "sulfur-overdose-ph-crash",
    name: "Sulfur Overdose pH Crash",
    category: "ph-ec-lockout",
    affectedPlants: ["berries", "ornamentals", "vegetable-garden"],
    specificHosts: ["Blueberry", "Azalea", "Rhododendron", "Potato"],
    growthStages: ["vegetative", "all-stages"],
    symptomLocations: ["new growth", "roots", "whole plant"],
    symptomProgression:
      "Overapplied elemental sulfur drops soil pH too far, damaging roots and inducing manganese or aluminum toxicity so plants stunt and new growth distorts.",
    observableSigns: [
      "Stunting and root damage after a heavy sulfur application meant to acidify soil.",
      "Manganese-toxicity-like speckling or aluminum-toxicity root injury as pH falls too low.",
      "A soil pH test reading below the crop's target range after amendment.",
    ],
    favorableConditions: [
      "Applying elemental sulfur far above the recommended rate to lower pH quickly.",
      "Repeated acidifying applications without retesting soil pH between them.",
    ],
    lookalikes: [
      {
        condition: "Primary manganese toxicity",
        differentiator:
          "A recent heavy sulfur application plus a very low pH reading points to a sulfur-induced crash rather than native conditions.",
      },
      {
        condition: "Drought stress",
        differentiator:
          "Drought stress resolves with watering, while a sulfur pH crash persists until soil pH is raised.",
      },
    ],
    immediateActions: [
      "Stop further sulfur applications and test soil pH to gauge how far it has dropped.",
      "Plan a corrective lime application if pH has fallen below the crop's range.",
    ],
    treatments: [
      {
        situation: "Overshot soil pH",
        treatment:
          "Apply lime at a tested rate to raise pH back toward the target, then retest before any further amendment.",
      },
      {
        situation: "Container media",
        treatment:
          "Repot into balanced media or drench with a liming solution to reset pH, since small volumes swing quickly.",
      },
    ],
    avoid: [
      "Do not keep adding sulfur to reach a target pH faster, since it overshoots and crashes pH.",
    ],
    recoveryTimeline:
      "pH corrects over weeks to months depending on volume, with new growth improving as it stabilizes.",
    prevention: [
      "Apply sulfur in modest increments and retest pH before adding more.",
      "Follow soil-test recommendations for acidification rates rather than guessing.",
    ],
    monitoringThresholds: [
      "Re-test pH several weeks after any lime correction and reassess plant vigor.",
    ],
    escalationCriteria: [
      "Consult extension if pH remains far below target or if crops fail despite correction.",
    ],
    sources: [
      {
        label: "NC State Extension — Soil acidity and liming",
        url: "https://content.ces.ncsu.edu/soil-acidity-and-liming-basic-information-for-farmers-and-gardeners",
      },
    ],
  },
  {
    id: "calcium-lockout-high-potassium",
    name: "Calcium Lockout from Nutrient Antagonism",
    category: "ph-ec-lockout",
    affectedPlants: ["vegetable-garden", "specialty-cultivation"],
    specificHosts: ["Tomato", "Pepper", "Lettuce", "Cannabis"],
    growthStages: ["flowering", "fruiting"],
    symptomLocations: ["new growth", "fruit surface", "leaf margins"],
    symptomProgression:
      "Excess potassium or magnesium competes with calcium uptake, so growing points and fruit show calcium-deficiency symptoms like blossom-end rot despite calcium in the soil.",
    observableSigns: [
      "Blossom-end rot on fruit and necrotic new-leaf margins despite adequate soil calcium.",
      "Distorted or dying growing tips as calcium fails to reach expanding tissue.",
      "A nutrient analysis showing high potassium or magnesium relative to calcium.",
    ],
    favorableConditions: [
      "Overuse of potassium-rich bloom fertilizers or magnesium supplements that antagonize calcium.",
      "Irregular watering that further limits calcium transport to growing points and fruit.",
    ],
    lookalikes: [
      {
        condition: "Primary calcium deficiency",
        differentiator:
          "Antagonism shows high potassium or magnesium on a test, while primary deficiency shows genuinely low calcium.",
      },
      {
        condition: "Erratic watering blossom-end rot",
        differentiator:
          "Watering-driven rot resolves with steady moisture, while antagonism also requires rebalancing nutrient ratios.",
      },
    ],
    immediateActions: [
      "Stop heavy potassium and magnesium supplementation and maintain steady, even watering.",
      "Ensure the base feed supplies adequate calcium in a balanced ratio.",
    ],
    treatments: [
      {
        situation: "Container and hydroponic culture",
        treatment:
          "Rebalance the feed toward a proper calcium ratio and flush accumulated potassium or magnesium salts.",
      },
      {
        situation: "Garden soil",
        treatment:
          "Maintain even soil moisture, avoid excess potassium fertilizer, and add gypsum if a test shows a calcium shortfall.",
      },
    ],
    avoid: [
      "Do not keep adding potassium or Epsom salt believing more nutrients will help, since they worsen the antagonism.",
    ],
    recoveryTimeline:
      "Newly set fruit and leaves form normally within one to three weeks after rebalancing and steady watering.",
    prevention: [
      "Use balanced fertilizer ratios and avoid routine potassium or magnesium overdosing.",
      "Water consistently so calcium moves reliably to fruit and growing points.",
    ],
    monitoringThresholds: [
      "Re-evaluate new fruit and leaf development weekly and test nutrient ratios if symptoms continue.",
    ],
    escalationCriteria: [
      "Get a tissue and soil test if calcium symptoms persist despite balanced feeding and steady moisture.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Blossom-end rot",
        url: "https://extension.umn.edu/disease-management/blossom-end-rot",
      },
    ],
  },
  {
    id: "coco-coir-calmag-lockout",
    name: "Coco Coir Calcium-Magnesium Lockout",
    category: "ph-ec-lockout",
    affectedPlants: ["specialty-cultivation", "vegetable-garden", "herbs"],
    specificHosts: ["Cannabis", "Tomato", "Pepper", "Basil"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["new growth", "veins", "leaf margins"],
    symptomProgression:
      "Fresh coco holds potassium and sodium that displace calcium and magnesium, so early growth shows interveinal yellowing and rusty spotting until the medium is buffered.",
    observableSigns: [
      "Interveinal chlorosis and rusty brown spotting typical of calcium and magnesium shortage.",
      "Symptoms appear soon after planting in unbuffered or poorly rinsed coco coir.",
      "Improvement follows calcium-magnesium supplementation and proper coco buffering.",
    ],
    favorableConditions: [
      "Using cheap, unbuffered, or unrinsed coco coir high in sodium and potassium.",
      "Feeding without added calcium and magnesium in an inert coco medium.",
    ],
    lookalikes: [
      {
        condition: "Magnesium deficiency in soil",
        differentiator:
          "In coco the cause is the medium's cation exchange, resolved by buffering and cal-mag, not just adding Epsom salt.",
      },
      {
        condition: "pH drift lockout",
        differentiator:
          "Coco lockout persists at correct pH until the medium is buffered, while pH drift resolves by fixing pH.",
      },
    ],
    immediateActions: [
      "Add a calcium-magnesium supplement to the feed for plants growing in coco.",
      "Rinse and buffer new coco with a calcium-magnesium solution before planting future batches.",
    ],
    treatments: [
      {
        situation: "Active grow in unbuffered coco",
        treatment:
          "Include cal-mag at every feeding and maintain feed pH near the coco optimum until new growth greens.",
      },
      {
        situation: "Preparing fresh coco",
        treatment:
          "Pre-rinse to remove salts and soak in a calcium-magnesium solution to saturate exchange sites before use.",
      },
    ],
    avoid: [
      "Do not treat coco like soil and feed without calcium and magnesium supplementation.",
    ],
    recoveryTimeline:
      "New leaves emerge green within one to two weeks once cal-mag is supplied and the medium is buffered.",
    prevention: [
      "Buy pre-buffered coco or rinse and buffer it yourself before planting.",
      "Always include calcium and magnesium in feeds for coco-grown crops.",
    ],
    monitoringThresholds: [
      "Re-evaluate new growth weekly; recurring spotting means increasing cal-mag or rebuffering the medium.",
    ],
    escalationCriteria: [
      "Test runoff EC and pH if symptoms persist despite consistent cal-mag supplementation.",
    ],
    sources: [
      {
        label: "UC IPM — Home and landscape",
        url: "https://ipm.ucanr.edu/home-and-landscape/",
      },
    ],
  },
  {
    id: "ec-drift-underfeeding-lockout",
    name: "Low-EC Underfeeding vs Lockout Confusion",
    category: "ph-ec-lockout",
    affectedPlants: ["specialty-cultivation", "vegetable-garden", "herbs"],
    specificHosts: ["Lettuce", "Basil", "Cannabis", "Tomato"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["older leaves", "whole plant", "new growth"],
    symptomProgression:
      "As reservoir or media EC drifts too low, plants show generalized fading and slow growth that can be mistaken for lockout but responds to restoring feed strength.",
    observableSigns: [
      "Overall pale, slow growth with mobile-nutrient fading of older leaves.",
      "Measured EC well below the target for the crop and growth stage.",
      "Rapid green-up after feed strength is restored rather than after a flush.",
    ],
    favorableConditions: [
      "Diluting nutrients too much or letting plants draw down EC without topping nutrients.",
      "Frequent plain-water top-offs that steadily lower solution strength.",
    ],
    lookalikes: [
      {
        condition: "High-EC lockout",
        differentiator:
          "This condition shows low measured EC and improves with more feed, opposite to high-EC lockout which needs flushing.",
      },
      {
        condition: "pH drift lockout",
        differentiator:
          "pH lockout shows out-of-range pH with adequate EC, while underfeeding shows in-range pH with low EC.",
      },
    ],
    immediateActions: [
      "Measure EC and, if low, increase feed strength toward the crop's target range.",
      "Verify pH stays in range so restored nutrients remain available.",
    ],
    treatments: [
      {
        situation: "Recirculating hydroponics",
        treatment:
          "Raise reservoir EC into the target band and top off with nutrient solution rather than plain water alone.",
      },
      {
        situation: "Container feeding",
        treatment:
          "Increase feed concentration gradually while monitoring runoff EC to reach the target without overshooting.",
      },
    ],
    avoid: [
      "Do not flush repeatedly assuming lockout when the real problem is a solution that is too weak.",
    ],
    recoveryTimeline:
      "Growth speeds up and color improves within one to two weeks once EC is restored to target.",
    prevention: [
      "Monitor EC regularly and top off with nutrients to hold the target strength.",
      "Match feed concentration to crop and stage rather than diluting by habit.",
    ],
    monitoringThresholds: [
      "Check EC at each top-off and adjust whenever it drifts below the target range.",
    ],
    escalationCriteria: [
      "Investigate root health or dosing equipment if EC and vigor stay low despite correct feeding.",
    ],
    sources: [
      {
        label: "UC IPM — Home and landscape",
        url: "https://ipm.ucanr.edu/home-and-landscape/",
      },
    ],
  },

  // ===================== watering-root-zone (18) =====================
  {
    id: "overwatering-houseplants",
    name: "Overwatering (Houseplants)",
    category: "watering-root-zone",
    affectedPlants: ["houseplants"],
    specificHosts: ["Pothos", "Peace lily", "Snake plant", "Philodendron"],
    growthStages: ["all-stages"],
    symptomLocations: ["lower/older leaves", "whole plant", "roots", "soil surface"],
    symptomProgression:
      "Lower leaves yellow and soften while soil stays wet, then wilting appears despite moist media as roots suffocate and begin to rot.",
    observableSigns: [
      "Yellowing, soft lower leaves while the potting mix remains constantly wet.",
      "Wilting even though the soil is moist, because damaged roots cannot take up water.",
      "A sour or musty smell from the soil and sometimes mold on the surface.",
    ],
    favorableConditions: [
      "Watering on a fixed schedule regardless of whether the media has dried.",
      "Pots without drainage holes or saucers left full of standing water.",
    ],
    lookalikes: [
      {
        condition: "Underwatering",
        differentiator:
          "Underwatered mix is bone dry and crumbly, while overwatered plants wilt in soil that is clearly wet.",
      },
      {
        condition: "Nitrogen deficiency",
        differentiator:
          "Nitrogen deficiency yellows old leaves gradually in dry-to-normal soil, without the sour smell of soggy media.",
      },
    ],
    immediateActions: [
      "Stop watering and move the plant somewhere with good airflow and bright indirect light.",
      "Empty any saucer of standing water and check whether the pot drains freely.",
    ],
    treatments: [
      {
        situation: "Mild overwatering",
        treatment:
          "Let the media dry until the top inch is dry before watering again, and ensure the pot has functioning drainage.",
      },
      {
        situation: "Advanced root rot",
        treatment:
          "Unpot the plant, trim mushy dark roots, and repot into fresh well-draining mix in a pot with drainage holes.",
      },
    ],
    avoid: [
      "Do not keep watering to revive a wilted plant when the soil is already wet.",
    ],
    recoveryTimeline:
      "Mildly affected plants stabilize within one to two weeks, while root-rot recovery takes several weeks of careful watering.",
    prevention: [
      "Water only when the top of the mix dries and use pots with drainage holes.",
      "Choose well-draining media and empty saucers so roots never sit in water.",
    ],
    monitoringThresholds: [
      "Check moisture before every watering and reassess if new yellowing appears despite drier care.",
    ],
    escalationCriteria: [
      "Discard the plant if the entire root system is mushy and rotten beyond salvage.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Houseplants",
        url: "https://extension.umn.edu/how/houseplants",
      },
    ],
  },
  {
    id: "overwatering-succulents",
    name: "Overwatering (Succulents and Cacti)",
    category: "watering-root-zone",
    affectedPlants: ["succulents-cacti", "houseplants"],
    specificHosts: ["Echeveria", "Jade plant", "Aloe", "Barrel cactus"],
    growthStages: ["all-stages"],
    symptomLocations: ["lower/older leaves", "stems", "roots", "whole plant"],
    symptomProgression:
      "Leaves turn translucent, yellow, and mushy from the base upward, then stems soften and blacken as rot spreads through water-storing tissue.",
    observableSigns: [
      "Translucent, yellow, and mushy leaves that detach easily at the base.",
      "Soft, darkening, collapsing stems as rot moves into the crown.",
      "Wet, dense media that stays saturated far longer than a succulent tolerates.",
    ],
    favorableConditions: [
      "Frequent watering and dense, moisture-retentive potting mix for drought-adapted plants.",
      "Low light and cool conditions that slow drying and increase rot risk.",
    ],
    lookalikes: [
      {
        condition: "Underwatering",
        differentiator:
          "Underwatered succulents wrinkle and firm up after watering, while overwatered ones turn soft, mushy, and translucent.",
      },
      {
        condition: "Cold damage",
        differentiator:
          "Cold damage follows a chill event and affects exposed tissue, while overwatering rot starts at the roots and base.",
      },
    ],
    immediateActions: [
      "Stop watering immediately and move the plant to bright light with strong airflow.",
      "Remove any mushy leaves and check the base and roots for rot.",
    ],
    treatments: [
      {
        situation: "Early soft rot",
        treatment:
          "Unpot, let roots dry, and repot into gritty fast-draining mix, watering only once the media is fully dry.",
      },
      {
        situation: "Crown or stem rot",
        treatment:
          "Cut back to firm healthy tissue, let the cutting callus, and propagate since the rotted base will not recover.",
      },
    ],
    avoid: [
      "Do not use dense water-holding potting soil or water on a fixed schedule for succulents.",
    ],
    recoveryTimeline:
      "Salvaged cuttings root over several weeks, while rotted parent plants generally cannot be saved.",
    prevention: [
      "Use gritty fast-draining mix and pots with drainage holes.",
      "Water only when media is completely dry and provide bright light.",
    ],
    monitoringThresholds: [
      "Check firmness and media dryness before each watering and reassess if softness spreads.",
    ],
    escalationCriteria: [
      "Discard plants where rot has consumed the stem and roots beyond propagation.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Houseplants",
        url: "https://extension.umn.edu/how/houseplants",
      },
    ],
  },
  {
    id: "overwatering-container-vegetables",
    name: "Overwatering (Container Vegetables)",
    category: "watering-root-zone",
    affectedPlants: ["vegetable-garden", "herbs"],
    specificHosts: ["Tomato", "Pepper", "Basil", "Cucumber"],
    growthStages: ["seed-seedling", "vegetative", "fruiting"],
    symptomLocations: ["lower/older leaves", "roots", "whole plant"],
    symptomProgression:
      "Lower leaves yellow and drop while media stays soggy, growth slows, and roots decline until wilting persists even after watering is reduced.",
    observableSigns: [
      "Persistently soggy media with lower leaves yellowing and dropping.",
      "Slowed growth and wilting that does not resolve with more water.",
      "Roots that appear brown and unhealthy rather than firm and white.",
    ],
    favorableConditions: [
      "Oversized pots holding too much water for a small root system.",
      "Poor-draining mix, blocked drainage holes, or saucers holding standing water.",
    ],
    lookalikes: [
      {
        condition: "Nutrient leaching",
        differentiator:
          "Leaching yellows new growth from nutrients washing out, while overwatering yellows lower leaves in soggy media.",
      },
      {
        condition: "Fusarium wilt",
        differentiator:
          "Fusarium shows one-sided vascular browning in stems, while overwatering shows general yellowing tied to wet media.",
      },
    ],
    immediateActions: [
      "Stop watering and improve drainage by clearing holes and emptying saucers.",
      "Move containers to a sunnier, breezier spot to speed drying.",
    ],
    treatments: [
      {
        situation: "Poorly draining media",
        treatment:
          "Repot into a lighter, better-draining mix and right-size the container to the plant.",
      },
      {
        situation: "Ongoing soggy conditions",
        treatment:
          "Water only when the top inch dries, and raise pots on feet to ensure free drainage.",
      },
    ],
    avoid: [
      "Do not use a pot far larger than the root ball, which stays wet and invites rot.",
    ],
    recoveryTimeline:
      "Plants rebound over one to three weeks with corrected watering unless root rot is advanced.",
    prevention: [
      "Match pot size to the plant and use fast-draining mix with open drainage holes.",
      "Water based on media dryness rather than a fixed schedule.",
    ],
    monitoringThresholds: [
      "Check the top inch of media before watering and reassess if lower-leaf drop continues.",
    ],
    escalationCriteria: [
      "Replace the plant if roots are extensively rotted and new growth keeps failing.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Growing vegetables in containers",
        url: "https://extension.umn.edu/planting-and-growing-guides/growing-vegetables-containers",
      },
    ],
  },
  {
    id: "root-rot-waterlogged-garden",
    name: "Root Rot from Waterlogged Garden Soil",
    category: "watering-root-zone",
    affectedPlants: ["vegetable-garden", "ornamentals", "trees-shrubs"],
    specificHosts: ["Tomato", "Boxwood", "Rhododendron", "Squash"],
    growthStages: ["vegetative", "mature", "all-stages"],
    symptomLocations: ["roots", "lower/older leaves", "whole plant"],
    symptomProgression:
      "In saturated soil roots suffocate and are colonized by water-mold pathogens, so plants wilt, lower leaves yellow, and decline spreads to collapse over days to weeks.",
    observableSigns: [
      "Wilting and yellowing that worsens after heavy rain or irrigation in poorly drained ground.",
      "Dark, soft, sloughing roots and sometimes a rotten crown at the soil line.",
      "Plants in low, wet spots of the bed decline while those on higher ground stay healthy.",
    ],
    favorableConditions: [
      "Heavy clay or compacted soils that stay saturated after rain or irrigation.",
      "Low-lying beds, poor drainage, and warm wet conditions favoring water molds.",
    ],
    lookalikes: [
      {
        condition: "Drought wilt",
        differentiator:
          "Drought wilt occurs in dry soil and recovers with water, while waterlogged root rot wilts in saturated soil.",
      },
      {
        condition: "Vascular wilt disease",
        differentiator:
          "Vascular wilts show internal stem streaking, while waterlogging rot shows decayed roots tied to wet, low areas.",
      },
    ],
    immediateActions: [
      "Stop irrigating and improve surface drainage away from affected plants.",
      "Remove severely collapsed plants to limit pathogen spread in wet soil.",
    ],
    treatments: [
      {
        situation: "Chronic drainage problem",
        treatment:
          "Amend with organic matter, build raised beds, and regrade so water drains away from root zones.",
      },
      {
        situation: "Salvageable plants",
        treatment:
          "Let soil dry, avoid further overwatering, and replant survivors on mounded, better-drained ground.",
      },
    ],
    avoid: [
      "Do not keep irrigating waterlogged beds, which accelerates root suffocation and rot.",
    ],
    recoveryTimeline:
      "Lightly affected plants may recover over several weeks once soil dries, but collapsed plants rarely recover.",
    prevention: [
      "Improve drainage with raised beds, organic matter, and proper grading before planting.",
      "Match plant choices to site drainage and avoid overwatering heavy soils.",
    ],
    monitoringThresholds: [
      "Reassess after each heavy rain and check that beds drain within a day rather than staying flooded.",
    ],
    escalationCriteria: [
      "Send samples to a plant diagnostic clinic if a soilborne water mold is suspected across the bed.",
    ],
    sources: [
      {
        label: "PennState Extension — Phytophthora root rot",
        url: "https://extension.psu.edu/phytophthora-root-rot-in-the-garden",
      },
    ],
  },
  {
    id: "underwatering-houseplants",
    name: "Underwatering (Houseplants)",
    category: "watering-root-zone",
    affectedPlants: ["houseplants"],
    specificHosts: ["Fern", "Peace lily", "Calathea", "Fittonia"],
    growthStages: ["all-stages"],
    symptomLocations: ["whole plant", "leaf tips", "lower/older leaves"],
    symptomProgression:
      "Leaves wilt and droop, then tips and margins turn crispy brown and lower leaves dry and drop as the mix pulls away from the pot sides.",
    observableSigns: [
      "Drooping, limp leaves that perk up within hours of thorough watering.",
      "Crispy brown leaf tips and margins and a lightweight, dried-out pot.",
      "Mix shrunken away from the pot walls so water runs down the sides.",
    ],
    favorableConditions: [
      "Infrequent watering, especially for moisture-loving species in dry indoor air.",
      "Small pots and root-bound plants that dry out very quickly.",
    ],
    lookalikes: [
      {
        condition: "Overwatering",
        differentiator:
          "Underwatered plants have dry, light media and recover after watering, while overwatered ones sit in wet soil and stay limp.",
      },
      {
        condition: "Salt or fluoride tip burn",
        differentiator:
          "Salt burn accompanies a soil crust and moist soil, while underwatering tip burn accompanies bone-dry media.",
      },
    ],
    immediateActions: [
      "Water thoroughly, or bottom-water by soaking the pot until the media rehydrates evenly.",
      "Move sensitive plants out of hot, dry drafts while they recover.",
    ],
    treatments: [
      {
        situation: "Water repelling dry mix",
        treatment:
          "Submerge the pot in water for fifteen to thirty minutes so the mix rewets fully, then let it drain.",
      },
      {
        situation: "Root-bound plants",
        treatment:
          "Repot into a slightly larger container so the media holds enough moisture between waterings.",
      },
    ],
    avoid: [
      "Do not let moisture-loving species dry to the point the media becomes hydrophobic.",
    ],
    recoveryTimeline:
      "Wilted plants recover turgor within hours to a day, while crispy leaves stay damaged as new growth replaces them.",
    prevention: [
      "Water thoroughly whenever the top of the mix dries and adjust frequency to the season.",
      "Group humidity-lovers together or use a humidifier and right-size pots.",
    ],
    monitoringThresholds: [
      "Check media moisture every few days and reassess frequency if wilting recurs.",
    ],
    escalationCriteria: [
      "Repot and inspect roots if the plant wilts even when the media is moist, suggesting root damage.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Houseplants",
        url: "https://extension.umn.edu/how/houseplants",
      },
    ],
  },
  {
    id: "underwatering-garden-vegetables",
    name: "Underwatering (Garden Vegetables)",
    category: "watering-root-zone",
    affectedPlants: ["vegetable-garden", "herbs"],
    specificHosts: ["Tomato", "Squash", "Lettuce", "Bean"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["whole plant", "leaf margins", "fruit surface"],
    symptomProgression:
      "Plants wilt during the day and recover at night early on, then persistent wilting, leaf scorch, flower drop, and fruit disorders develop as drought continues.",
    observableSigns: [
      "Midday wilting that eases overnight, progressing to all-day wilting during drought.",
      "Scorched leaf margins, flower or fruit drop, and blossom-end rot on fruiting crops.",
      "Dry, cracked soil that pulls away from stems and sheds water when first irrigated.",
    ],
    favorableConditions: [
      "Hot, windy weather with infrequent or shallow irrigation.",
      "Sandy, fast-draining soils and shallow-rooted crops with high water demand.",
    ],
    lookalikes: [
      {
        condition: "Bacterial or fungal wilt",
        differentiator:
          "Pathogenic wilt persists after watering and shows stem symptoms, while drought wilt recovers when soil is moistened.",
      },
      {
        condition: "Root rot",
        differentiator:
          "Root rot wilts in wet soil with decayed roots, while underwatering wilts in dry soil with intact roots.",
      },
    ],
    immediateActions: [
      "Water deeply and slowly so moisture reaches the full root zone rather than just the surface.",
      "Apply mulch to conserve soil moisture and moderate temperature.",
    ],
    treatments: [
      {
        situation: "Dry, water-repellent soil",
        treatment:
          "Irrigate slowly in several passes or use drip lines so water soaks in instead of running off.",
      },
      {
        situation: "High-demand fruiting crops",
        treatment:
          "Establish a consistent deep-watering schedule and mulch to prevent drought stress and fruit disorders.",
      },
    ],
    avoid: [
      "Do not water lightly and frequently, which encourages shallow roots and worsens drought sensitivity.",
    ],
    recoveryTimeline:
      "Plants regain turgor within a day of deep watering, though scorched leaves and dropped fruit are not recovered.",
    prevention: [
      "Water deeply and less often to encourage deep rooting, and mulch to hold moisture.",
      "Add organic matter to improve water retention in sandy soils.",
    ],
    monitoringThresholds: [
      "Check soil moisture several inches down and re-evaluate if midday wilting becomes all-day wilting.",
    ],
    escalationCriteria: [
      "Investigate for disease or root pests if wilting continues despite adequate soil moisture.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Watering vegetable gardens",
        url: "https://extension.umn.edu/planting-and-growing-guides/watering-vegetable-gardens",
      },
    ],
  },
  {
    id: "hydrophobic-potting-mix",
    name: "Hydrophobic Potting Mix (Water Repellency)",
    category: "watering-root-zone",
    affectedPlants: ["houseplants", "ornamentals", "vegetable-garden"],
    specificHosts: ["Fern", "Geranium", "Tomato", "Basil"],
    growthStages: ["all-stages"],
    symptomLocations: ["soil surface", "roots", "whole plant"],
    symptomProgression:
      "Peat-based mix dries out and repels water, so irrigation runs down the pot sides and out the bottom, leaving the root ball dry and the plant wilting despite watering.",
    observableSigns: [
      "Water running quickly down the pot sides and out the drainage holes with little absorption.",
      "A dry, crusty, shrunken root ball that has pulled away from the pot walls.",
      "Wilting even though water was applied because the media never actually rewet.",
    ],
    favorableConditions: [
      "Peat-heavy mixes allowed to dry out completely between waterings.",
      "Warm, dry conditions and neglected watering that let the surface become water-repellent.",
    ],
    lookalikes: [
      {
        condition: "Underwatering",
        differentiator:
          "Ordinary underwatering rewets normally, while hydrophobic mix repels water so the core stays dry despite watering.",
      },
      {
        condition: "Root-bound drying",
        differentiator:
          "Root-bound pots are dense with roots, while hydrophobic mix repels water even when roots are not crowded.",
      },
    ],
    immediateActions: [
      "Bottom-water by soaking the pot in a basin until the media absorbs moisture throughout.",
      "Break up the crusted surface so water can penetrate rather than sheet off.",
    ],
    treatments: [
      {
        situation: "Occasional repellency",
        treatment:
          "Soak the pot from below and add a drop of mild surfactant or wetting agent to help water penetrate.",
      },
      {
        situation: "Chronically hydrophobic mix",
        treatment:
          "Repot into fresh mix containing moisture-retentive components and never let it fully dry out again.",
      },
    ],
    avoid: [
      "Do not top-water quickly and assume the root ball is wet when water only ran off the surface.",
    ],
    recoveryTimeline:
      "The plant rehydrates within a day of bottom-watering, and fresh media prevents recurrence immediately.",
    prevention: [
      "Avoid letting peat-based mixes dry out completely and water thoroughly each time.",
      "Use mixes with good rewetting properties or add a wetting agent for prone media.",
    ],
    monitoringThresholds: [
      "Check that water is absorbed rather than running off at each watering and reassess if runoff persists.",
    ],
    escalationCriteria: [
      "Repot if the mix repeatedly repels water despite bottom-watering and surfactant use.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Houseplants",
        url: "https://extension.umn.edu/how/houseplants",
      },
    ],
  },
  {
    id: "compacted-soil-root-restriction",
    name: "Compacted Soil Root Restriction",
    category: "watering-root-zone",
    affectedPlants: ["lawns-turf", "trees-shrubs", "vegetable-garden", "ornamentals"],
    specificHosts: ["Turfgrass", "Maple", "Boxwood", "Tomato"],
    growthStages: ["vegetative", "mature", "all-stages"],
    symptomLocations: ["roots", "whole plant"],
    symptomProgression:
      "Compaction limits oxygen, water infiltration, and rooting, so plants grow slowly, thin out, and show both drought and waterlogging stress depending on rainfall.",
    observableSigns: [
      "Poor, shallow rooting and slow growth in dense, hard-to-dig soil.",
      "Water pooling and runoff instead of infiltrating, followed by drought stress between rains.",
      "Thin, struggling turf or stunted plants in high-traffic or heavily driven areas.",
    ],
    favorableConditions: [
      "Foot or vehicle traffic and working or walking on wet soil.",
      "Heavy clay soils and construction that compress soil structure.",
    ],
    lookalikes: [
      {
        condition: "Drought stress",
        differentiator:
          "Compaction limits rooting year-round and impedes infiltration, while drought stress resolves fully once water is supplied.",
      },
      {
        condition: "Nutrient deficiency",
        differentiator:
          "Compaction shows physically dense soil and poor rooting, while deficiency shows characteristic leaf color patterns.",
      },
    ],
    immediateActions: [
      "Reduce traffic on the affected area and keep off it when the soil is wet.",
      "Aerate turf or loosen bed soil to restore pore space and infiltration.",
    ],
    treatments: [
      {
        situation: "Lawns",
        treatment:
          "Core-aerate and top-dress with compost to relieve compaction and rebuild soil structure over time.",
      },
      {
        situation: "Beds and around trees",
        treatment:
          "Incorporate organic matter, use mulch, and avoid tilling or driving on wet soil to rebuild structure.",
      },
    ],
    avoid: [
      "Do not work, walk, or drive on soil when it is wet, which greatly worsens compaction.",
    ],
    recoveryTimeline:
      "Aeration and organic matter improve conditions over one to several seasons as soil structure rebuilds.",
    prevention: [
      "Minimize traffic on beds and lawns and route paths to protect root zones.",
      "Maintain organic matter and mulch and avoid working soil when wet.",
    ],
    monitoringThresholds: [
      "Test infiltration after rain and re-evaluate rooting and vigor each season.",
    ],
    escalationCriteria: [
      "Consult an arborist for radial trenching or air-spading if a valued tree declines from compaction.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Soil compaction",
        url: "https://extension.umn.edu/soil-and-water/soil-management-and-health",
      },
    ],
  },
  {
    id: "poor-container-drainage",
    name: "Poor Container Drainage (Waterlogged Pots)",
    category: "watering-root-zone",
    affectedPlants: ["houseplants", "ornamentals", "vegetable-garden"],
    specificHosts: ["Pothos", "Geranium", "Tomato", "Basil"],
    growthStages: ["all-stages"],
    symptomLocations: ["roots", "lower/older leaves", "soil surface"],
    symptomProgression:
      "Without adequate drainage, water accumulates at the pot base, the lower root zone stays saturated, and roots rot upward while foliage yellows and wilts.",
    observableSigns: [
      "A soggy, oxygen-poor lower root zone even when the surface looks dry.",
      "Lower-leaf yellowing and wilting with a musty smell from the base of the pot.",
      "No drainage holes, blocked holes, or a decorative cachepot trapping water.",
    ],
    favorableConditions: [
      "Pots without drainage holes or with holes clogged by roots or debris.",
      "Decorative outer pots and saucers that hold water against the root ball.",
    ],
    lookalikes: [
      {
        condition: "Overwatering by habit",
        differentiator:
          "Overwatering stems from watering too often, while poor drainage keeps the pot wet even with normal watering frequency.",
      },
      {
        condition: "Root rot pathogen",
        differentiator:
          "Poor drainage is a physical cause; correcting drainage resolves it, while pathogenic rot may persist after drying.",
      },
    ],
    immediateActions: [
      "Empty any cachepot or saucer and confirm the inner pot drains freely.",
      "Add or clear drainage holes and let the media dry before watering again.",
    ],
    treatments: [
      {
        situation: "No drainage holes",
        treatment:
          "Repot into a container with open drainage holes and use well-draining media so excess water escapes.",
      },
      {
        situation: "Cachepot trapping water",
        treatment:
          "Remove the inner pot to drain after watering, or drill holes and add a spacer so roots never sit in water.",
      },
    ],
    avoid: [
      "Do not add a gravel layer instead of drainage holes, which raises the saturated zone into the roots.",
    ],
    recoveryTimeline:
      "Plants recover over one to three weeks once drainage is restored, unless roots have already rotted extensively.",
    prevention: [
      "Always use pots with functioning drainage holes and well-draining media.",
      "Empty saucers and cachepots so the root ball never stands in water.",
    ],
    monitoringThresholds: [
      "Check that water drains out after each watering and reassess if the base stays soggy.",
    ],
    escalationCriteria: [
      "Unpot and inspect roots if yellowing continues despite corrected drainage.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Houseplants",
        url: "https://extension.umn.edu/how/houseplants",
      },
    ],
  },
  {
    id: "drought-stress-established-trees",
    name: "Drought Stress (Established Trees)",
    category: "watering-root-zone",
    affectedPlants: ["trees-shrubs", "fruit-trees"],
    specificHosts: ["Maple", "Birch", "Dogwood", "Apple"],
    growthStages: ["mature", "dormant"],
    symptomLocations: ["leaf margins", "whole plant", "new growth"],
    symptomProgression:
      "Leaves scorch at the margins and wilt during prolonged drought, then early color and leaf drop occur, with dieback of branch tips appearing over subsequent seasons.",
    observableSigns: [
      "Marginal leaf scorch and wilting across the canopy during extended dry spells.",
      "Premature fall coloration and early leaf drop in mid to late summer drought.",
      "Branch tip dieback and thinning canopy in the season after severe drought.",
    ],
    favorableConditions: [
      "Extended hot, dry periods without supplemental irrigation.",
      "Restricted or compacted root zones and recently transplanted trees with limited roots.",
    ],
    lookalikes: [
      {
        condition: "Leaf scorch disease",
        differentiator:
          "Bacterial leaf scorch recurs and spreads systemically over years, while drought scorch tracks rainfall and improves with water.",
      },
      {
        condition: "Root rot",
        differentiator:
          "Root rot occurs in wet soils with decayed roots, while drought scorch occurs in dry soils with intact roots.",
      },
    ],
    immediateActions: [
      "Water deeply and slowly over the root zone out to the drip line during drought.",
      "Apply a wide mulch ring to conserve moisture and moderate soil temperature.",
    ],
    treatments: [
      {
        situation: "Ongoing drought",
        treatment:
          "Provide deep soaking irrigation every one to two weeks over the outer root zone until rains resume.",
      },
      {
        situation: "Recently planted trees",
        treatment:
          "Maintain a regular deep-watering schedule through the first few establishment seasons and mulch generously.",
      },
    ],
    avoid: [
      "Do not water lightly and frequently at the trunk, which fails to reach the outer feeder roots.",
    ],
    recoveryTimeline:
      "Trees respond over the current season, but canopy thinning and dieback may take a year or more to resolve.",
    prevention: [
      "Mulch root zones and water deeply during dry spells, especially for young trees.",
      "Protect root zones from compaction and avoid disturbing the rooting area.",
    ],
    monitoringThresholds: [
      "Check soil moisture in the root zone during dry spells and reassess if scorch or dieback expands.",
    ],
    escalationCriteria: [
      "Consult a certified arborist if branch dieback progresses across seasons despite adequate watering.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Watering trees and shrubs",
        url: "https://extension.umn.edu/planting-and-growing-guides/watering-newly-planted-trees-and-shrubs",
      },
    ],
  },
  {
    id: "drought-stress-lawns",
    name: "Drought Stress (Lawns and Turf)",
    category: "watering-root-zone",
    affectedPlants: ["lawns-turf"],
    specificHosts: ["Kentucky bluegrass", "Tall fescue", "Perennial ryegrass", "Fine fescue"],
    growthStages: ["vegetative", "mature", "dormant"],
    symptomLocations: ["whole plant", "leaf margins"],
    symptomProgression:
      "Turf first shows a blue-gray cast and footprints that linger, then blades fold and brown, and cool-season lawns go dormant, browning until moisture returns.",
    observableSigns: [
      "A dull blue-gray color and footprints that remain visible after walking across the lawn.",
      "Folded or rolled leaf blades and browning that starts in the driest, sunniest areas.",
      "Cool-season turf going straw-brown and dormant during summer drought.",
    ],
    favorableConditions: [
      "Hot, dry, windy weather with insufficient irrigation.",
      "Compacted soil, thatch, and shallow rooting that limit water uptake.",
    ],
    lookalikes: [
      {
        condition: "Grub damage",
        differentiator:
          "Grub-damaged turf lifts easily like a carpet due to severed roots, while drought turf stays anchored.",
      },
      {
        condition: "Dormancy versus death",
        differentiator:
          "Dormant turf greens up after watering, while dead turf and its crowns fail to recover with moisture.",
      },
    ],
    immediateActions: [
      "Water deeply and infrequently to wet the root zone rather than sprinkling lightly.",
      "Raise the mowing height and reduce traffic to lessen stress during drought.",
    ],
    treatments: [
      {
        situation: "Maintaining green turf",
        treatment:
          "Apply about an inch of water per week in one or two deep irrigations to sustain the lawn through drought.",
      },
      {
        situation: "Allowing dormancy",
        treatment:
          "Let cool-season turf go dormant and apply light water every couple of weeks to keep crowns alive until rain returns.",
      },
    ],
    avoid: [
      "Do not fertilize heavily or mow low during drought, which further stresses the turf.",
    ],
    recoveryTimeline:
      "Dormant turf greens up within one to two weeks of sustained rain or irrigation once temperatures moderate.",
    prevention: [
      "Water deeply and infrequently to encourage deep roots and reduce thatch and compaction.",
      "Choose drought-tolerant grasses and mow high to improve drought resilience.",
    ],
    monitoringThresholds: [
      "Watch for lingering footprints and blue-gray color as early cues to irrigate before browning.",
    ],
    escalationCriteria: [
      "Reseed or renovate if large areas fail to green up after rains return, indicating turf death.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Watering lawns",
        url: "https://extension.umn.edu/lawn-care/watering-lawns",
      },
    ],
  },
  {
    id: "edema-overwatering-oedema",
    name: "Edema (Oedema Water Blisters)",
    category: "watering-root-zone",
    affectedPlants: ["houseplants", "ornamentals", "vegetable-garden"],
    specificHosts: ["Geranium", "Ivy", "Pepper", "Succulent"],
    growthStages: ["vegetative", "all-stages"],
    symptomLocations: ["lower/older leaves", "whole leaf"],
    symptomProgression:
      "Water-soaked bumps form on leaf undersides when roots absorb more water than leaves transpire, then blisters turn corky and tan as cells rupture.",
    observableSigns: [
      "Raised water-soaked blisters or bumps on the undersides of leaves and petioles.",
      "Blisters aging to corky, rusty, or tan raised spots as they burst and heal.",
      "Damage on lower, older leaves during cool, cloudy, humid spells with wet soil.",
    ],
    favorableConditions: [
      "Overwatering combined with cool, cloudy, humid conditions that slow transpiration.",
      "Poor air circulation and consistently wet media limiting water release from leaves.",
    ],
    lookalikes: [
      {
        condition: "Spider mite or thrips damage",
        differentiator:
          "Pests leave stippling and pests on the leaf, while edema produces raised water blisters with no insects.",
      },
      {
        condition: "Rust disease",
        differentiator:
          "Rust forms powdery colored spore pustules, while edema forms smooth then corky non-sporulating bumps.",
      },
    ],
    immediateActions: [
      "Reduce watering and let the media dry more between irrigations.",
      "Improve air circulation and light to raise transpiration.",
    ],
    treatments: [
      {
        situation: "Indoor plants",
        treatment:
          "Water less frequently, increase light and airflow, and space plants to lower humidity around foliage.",
      },
      {
        situation: "Greenhouse conditions",
        treatment:
          "Ventilate and warm the space during cool cloudy weather so leaves can transpire the excess water.",
      },
    ],
    avoid: [
      "Do not keep soil constantly wet during cool, humid, low-light periods.",
    ],
    recoveryTimeline:
      "New growth is unaffected once watering and airflow improve, while existing corky blisters remain on old leaves.",
    prevention: [
      "Water conservatively in cool, humid weather and provide good airflow and light.",
      "Avoid overcrowding plants so humidity around foliage stays moderate.",
    ],
    monitoringThresholds: [
      "Re-evaluate as new leaves emerge; fresh blisters mean watering or humidity still needs adjusting.",
    ],
    escalationCriteria: [
      "Reassess for pests or disease if bumps sporulate or spread, which would rule out simple edema.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Houseplants",
        url: "https://extension.umn.edu/how/houseplants",
      },
    ],
  },
  {
    id: "inconsistent-watering-fruit-splitting",
    name: "Inconsistent Watering (Fruit Cracking and Splitting)",
    category: "watering-root-zone",
    affectedPlants: ["vegetable-garden", "fruit-trees"],
    specificHosts: ["Tomato", "Cherry", "Cabbage", "Melon"],
    growthStages: ["fruiting"],
    symptomLocations: ["fruit surface"],
    symptomProgression:
      "Fruit expands slowly during dry periods, then a sudden heavy watering or rain causes rapid uptake that splits the skin as inner tissue outgrows it.",
    observableSigns: [
      "Concentric or radial cracks on fruit appearing after heavy rain following a dry spell.",
      "Splitting concentrated on ripe or nearly ripe fruit that swelled rapidly.",
      "Cabbage heads and melons bursting after a sudden surge of soil moisture.",
    ],
    favorableConditions: [
      "Wide swings between dry soil and sudden heavy irrigation or rainfall.",
      "Rapid uptake of water into ripe fruit with less elastic skin.",
    ],
    lookalikes: [
      {
        condition: "Blossom-end rot",
        differentiator:
          "Blossom-end rot is a sunken dark lesion at the fruit bottom, while cracking is skin splitting from rapid expansion.",
      },
      {
        condition: "Fruit-feeding insect damage",
        differentiator:
          "Insect damage shows entry holes and feeding, while water cracking shows clean splits without pest activity.",
      },
    ],
    immediateActions: [
      "Even out soil moisture with mulch and steady irrigation to avoid sudden surges.",
      "Harvest ripe fruit promptly, especially before forecast heavy rain.",
    ],
    treatments: [
      {
        situation: "Garden crops",
        treatment:
          "Mulch and water consistently so soil moisture stays even, preventing the rapid uptake that splits fruit.",
      },
      {
        situation: "Crack-prone varieties",
        treatment:
          "Grow crack-resistant cultivars and harvest a touch early to reduce losses during wet spells.",
      },
    ],
    avoid: [
      "Do not let soil dry out and then apply a sudden heavy soak while fruit is ripening.",
    ],
    recoveryTimeline:
      "Already split fruit cannot heal, but consistent moisture prevents new fruit from cracking going forward.",
    prevention: [
      "Maintain even soil moisture with mulch and regular watering during fruiting.",
      "Select crack-resistant varieties and harvest ripe fruit before heavy rain.",
    ],
    monitoringThresholds: [
      "Watch soil moisture and weather during fruiting and harvest before forecast heavy rain.",
    ],
    escalationCriteria: [
      "Reassess variety choice and irrigation setup if cracking recurs badly each season.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Growing tomatoes",
        url: "https://extension.umn.edu/vegetables/growing-tomatoes",
      },
    ],
  },
  {
    id: "transplant-underwatering-shock",
    name: "Water Stress in New Transplants",
    category: "watering-root-zone",
    affectedPlants: ["vegetable-garden", "ornamentals", "trees-shrubs", "herbs"],
    specificHosts: ["Tomato", "Petunia", "Boxwood", "Basil"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["whole plant", "leaf margins", "roots"],
    symptomProgression:
      "Newly set transplants wilt because their small root balls dry faster than the surrounding soil, and repeated drying causes stunting and marginal scorch.",
    observableSigns: [
      "Rapid wilting of fresh transplants even when the surrounding bed soil seems moist.",
      "A root ball that dries out much faster than the native soil around it.",
      "Marginal leaf scorch and stalled establishment from repeated drying cycles.",
    ],
    favorableConditions: [
      "Small root balls unable to draw water from the surrounding soil until roots grow out.",
      "Hot, windy weather and infrequent watering right after transplanting.",
    ],
    lookalikes: [
      {
        condition: "Transplant shock from root disturbance",
        differentiator:
          "Water stress resolves with targeted watering of the root ball, while root-disturbance shock persists as roots regenerate.",
      },
      {
        condition: "Overwatering",
        differentiator:
          "Overwatering keeps the root ball soggy, while water stress leaves the small root ball dry despite moist surroundings.",
      },
    ],
    immediateActions: [
      "Water directly onto the root ball, not just the surrounding soil, right after planting.",
      "Provide temporary shade and wind protection during hot spells while roots establish.",
    ],
    treatments: [
      {
        situation: "Fresh transplants",
        treatment:
          "Water the root ball frequently and lightly at first, then transition to deeper, less frequent watering as roots spread.",
      },
      {
        situation: "Hot, windy establishment",
        treatment:
          "Mulch around the plant and use shade cloth or row cover to reduce water loss until established.",
      },
    ],
    avoid: [
      "Do not assume moist surrounding soil means the root ball is watered, since it can dry independently.",
    ],
    recoveryTimeline:
      "Transplants establish and stop wilting within one to three weeks as roots grow into surrounding soil.",
    prevention: [
      "Water root balls thoroughly at planting and monitor them daily in early establishment.",
      "Transplant in cooler weather and mulch to conserve moisture around new plants.",
    ],
    monitoringThresholds: [
      "Check root-ball moisture daily for the first weeks and reassess if wilting recurs.",
    ],
    escalationCriteria: [
      "Inspect roots if a transplant keeps declining despite proper root-ball watering.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Watering newly planted trees and shrubs",
        url: "https://extension.umn.edu/planting-and-growing-guides/watering-newly-planted-trees-and-shrubs",
      },
    ],
  },
  {
    id: "root-bound-water-stress",
    name: "Root-Bound Water Stress (Pot-Bound Plants)",
    category: "watering-root-zone",
    affectedPlants: ["houseplants", "ornamentals"],
    specificHosts: ["Snake plant", "Spider plant", "Ficus", "Peace lily"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["roots", "whole plant", "leaf tips"],
    symptomProgression:
      "As roots fill the pot they leave little media to hold water, so the plant dries out very fast, wilts between waterings, and growth slows despite regular care.",
    observableSigns: [
      "Roots circling the pot, growing out of drainage holes, or lifting the plant upward.",
      "Very fast drying so the plant wilts within a day or two of watering.",
      "Slowed growth and browning leaf tips despite consistent watering.",
    ],
    favorableConditions: [
      "Plants left in the same pot far past the point roots have filled the container.",
      "Vigorous species that quickly outgrow their pots between repottings.",
    ],
    lookalikes: [
      {
        condition: "Hydrophobic mix",
        differentiator:
          "Hydrophobic mix repels water, while root-bound plants absorb water but have too little media to hold it.",
      },
      {
        condition: "Underwatering by neglect",
        differentiator:
          "Root-bound plants dry out fast even with regular watering, while neglect stems from watering too seldom.",
      },
    ],
    immediateActions: [
      "Water thoroughly and plan to repot into a larger container soon.",
      "Bottom-water to fully hydrate the crowded root ball in the meantime.",
    ],
    treatments: [
      {
        situation: "Moderately root-bound",
        treatment:
          "Repot one size up into fresh media, loosening circling roots so they grow outward.",
      },
      {
        situation: "Severely root-bound",
        treatment:
          "Tease apart or trim matted roots and repot, or divide the plant into multiple containers.",
      },
    ],
    avoid: [
      "Do not jump to a vastly larger pot, which stays too wet and can cause rot.",
    ],
    recoveryTimeline:
      "Watering frequency normalizes immediately after repotting, and growth resumes over a few weeks.",
    prevention: [
      "Repot vigorous plants every one to two years before they become severely root-bound.",
      "Choose an appropriately sized pot and refresh media when roots fill the container.",
    ],
    monitoringThresholds: [
      "Check for roots at the drainage holes and rapid drying as cues that repotting is due.",
    ],
    escalationCriteria: [
      "Divide the plant if it becomes too large to repot or keeps drying out immediately.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Houseplants",
        url: "https://extension.umn.edu/how/houseplants",
      },
    ],
  },
  {
    id: "waterlogging-lawns-poor-drainage",
    name: "Waterlogging in Lawns (Poor Drainage)",
    category: "watering-root-zone",
    affectedPlants: ["lawns-turf"],
    specificHosts: ["Kentucky bluegrass", "Tall fescue", "Perennial ryegrass", "Fine fescue"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["whole plant", "roots", "soil surface"],
    symptomProgression:
      "Water pools in low areas after rain and irrigation, turf yellows and thins as roots suffocate, and moss, algae, or bare mud develop in chronically wet spots.",
    observableSigns: [
      "Standing water or a spongy, saturated feel in low areas long after rain.",
      "Yellowing, thinning turf and shallow roots in perpetually wet zones.",
      "Moss, algae, or bare muddy patches replacing grass in the wettest spots.",
    ],
    favorableConditions: [
      "Low-lying areas, heavy clay, and compacted soils that drain slowly.",
      "Overwatering and downspouts or runoff directed onto the lawn.",
    ],
    lookalikes: [
      {
        condition: "Drought thinning",
        differentiator:
          "Drought thins turf in dry, hard soil, while waterlogging thins turf in saturated, spongy soil.",
      },
      {
        condition: "Fungal disease patch",
        differentiator:
          "Disease patches often show distinct shapes and mycelium, while waterlogging tracks the wettest low areas.",
      },
    ],
    immediateActions: [
      "Stop irrigating wet areas and redirect downspouts and runoff away from the lawn.",
      "Core-aerate to improve infiltration in compacted, soggy zones.",
    ],
    treatments: [
      {
        situation: "Compacted wet soil",
        treatment:
          "Core-aerate and top-dress with compost to improve drainage and rebuild soil structure over time.",
      },
      {
        situation: "Chronic low spots",
        treatment:
          "Regrade to shed water, install drainage such as a French drain, or convert wet areas to a rain garden.",
      },
    ],
    avoid: [
      "Do not keep irrigating or route additional runoff onto already saturated turf.",
    ],
    recoveryTimeline:
      "Turf recovers over several weeks once drainage improves, while regrading and reseeding take a full season.",
    prevention: [
      "Grade lawns to drain and manage downspouts and runoff away from turf.",
      "Aerate compacted areas and avoid overwatering to keep soil from staying saturated.",
    ],
    monitoringThresholds: [
      "Check how quickly water clears after rain and re-evaluate if standing water persists over a day.",
    ],
    escalationCriteria: [
      "Consult a drainage professional if regrading and aeration fail to resolve chronic ponding.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Lawn care",
        url: "https://extension.umn.edu/lawn-care",
      },
    ],
  },
  {
    id: "seedling-damping-off-overwet",
    name: "Seedling Water Stress and Damping-Off (Overwet Media)",
    category: "watering-root-zone",
    affectedPlants: ["vegetable-garden", "herbs", "ornamentals"],
    specificHosts: ["Tomato", "Pepper", "Basil", "Marigold"],
    growthStages: ["seed-seedling"],
    symptomLocations: ["stems", "roots", "whole plant"],
    symptomProgression:
      "Overwet, poorly aerated media causes seedlings to develop water-soaked, pinched stems at the soil line, then topple and collapse as damping-off pathogens take hold.",
    observableSigns: [
      "Thin, water-soaked, pinched-in stems right at the soil line on young seedlings.",
      "Seedlings suddenly toppling over and collapsing despite looking healthy above.",
      "Constantly wet, poorly draining seed-starting media with little airflow.",
    ],
    favorableConditions: [
      "Overwatering seed trays and using dense, water-retentive media with poor drainage.",
      "Low light, cool temperatures, and stagnant air favoring damping-off fungi.",
    ],
    lookalikes: [
      {
        condition: "Underwatering wilt",
        differentiator:
          "Underwatered seedlings wilt in dry media and recover with water, while damping-off collapses stems in wet media.",
      },
      {
        condition: "Leggy stretch",
        differentiator:
          "Leggy seedlings stretch tall from low light but stand upright, while damping-off pinches and topples stems.",
      },
    ],
    immediateActions: [
      "Reduce watering and increase airflow and light around the seedling trays.",
      "Remove collapsed seedlings promptly to limit spread of the pathogen.",
    ],
    treatments: [
      {
        situation: "Preventive management",
        treatment:
          "Use sterile well-draining seed-starting mix, bottom-water sparingly, and provide a fan for air movement.",
      },
      {
        situation: "Active damping-off",
        treatment:
          "Let the surface dry between waterings, thin crowded seedlings, and discard affected cells and media.",
      },
    ],
    avoid: [
      "Do not keep seed-starting media saturated or reuse unsterilized trays and mix.",
    ],
    recoveryTimeline:
      "Collapsed seedlings do not recover, but surviving seedlings stabilize within days once conditions dry and improve.",
    prevention: [
      "Start seeds in sterile, well-draining media and avoid overwatering trays.",
      "Provide bright light, warmth, and good airflow to keep the surface from staying wet.",
    ],
    monitoringThresholds: [
      "Check media moisture and stem bases daily and reassess airflow if collapse appears.",
    ],
    escalationCriteria: [
      "Discard the entire tray and sterilize equipment if damping-off spreads rapidly across cells.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Starting seeds indoors",
        url: "https://extension.umn.edu/planting-and-growing-guides/starting-seeds-indoors",
      },
    ],
  },
  {
    id: "overwatering-orchids-root-suffocation",
    name: "Overwatering (Orchids)",
    category: "watering-root-zone",
    affectedPlants: ["houseplants"],
    specificHosts: ["Phalaenopsis orchid", "Cattleya", "Dendrobium", "Oncidium"],
    growthStages: ["all-stages"],
    symptomLocations: ["roots", "lower/older leaves", "whole plant"],
    symptomProgression:
      "Roots kept constantly wet turn brown, soft, and hollow, then leaves wrinkle and yellow as the damaged roots can no longer take up water despite the wet medium.",
    observableSigns: [
      "Brown, mushy, hollow roots instead of firm plump green or silvery roots.",
      "Wrinkled, limp, yellowing leaves even though the potting medium is wet.",
      "Constantly soggy bark or moss and sometimes a sour smell from the pot.",
    ],
    favorableConditions: [
      "Watering orchids on a fixed schedule before the medium approaches dryness.",
      "Dense or decomposed medium and pots without airflow that stay saturated.",
    ],
    lookalikes: [
      {
        condition: "Underwatering dehydration",
        differentiator:
          "Underwatered orchid roots look dry and shriveled, while overwatered roots are brown, mushy, and hollow.",
      },
      {
        condition: "Normal leaf senescence",
        differentiator:
          "Natural aging drops one old leaf occasionally, while overwatering yellows leaves alongside rotted roots.",
      },
    ],
    immediateActions: [
      "Stop watering and unpot the orchid to inspect the roots for rot.",
      "Trim away all mushy brown roots with sterilized scissors, keeping firm healthy ones.",
    ],
    treatments: [
      {
        situation: "Partial root loss",
        treatment:
          "Repot into fresh chunky bark in a well-aerated pot and water only when the medium nears dryness.",
      },
      {
        situation: "Severe root rot",
        treatment:
          "Remove all dead roots, keep humidity high to encourage new roots, and support the plant while it regrows a root system.",
      },
    ],
    avoid: [
      "Do not let orchid pots sit in trapped water or water again while the medium is still wet.",
    ],
    recoveryTimeline:
      "New roots emerge over several weeks to a few months with careful watering, while lost roots do not regenerate.",
    prevention: [
      "Water only when the medium approaches dryness and use open, well-draining orchid pots and bark.",
      "Refresh decomposed medium periodically and ensure good airflow around the roots.",
    ],
    monitoringThresholds: [
      "Check root color and medium dryness before each watering and reassess if leaves keep wrinkling.",
    ],
    escalationCriteria: [
      "Discard the plant if virtually all roots and the crown have rotted beyond recovery.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension — Orchids",
        url: "https://extension.umn.edu/houseplants/orchids",
      },
    ],
  },
];
