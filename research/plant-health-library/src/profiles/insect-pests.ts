import type { PlantProblemProfile } from "../schema";

export const insectPestProfiles: PlantProblemProfile[] = [
  {
    id: "aphids-vegetable-garden",
    name: "Aphids (Vegetable Garden)",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden", "herbs"],
    specificHosts: ["Lettuce", "Kale", "Pepper", "Bean", "Cabbage"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["new growth", "undersides of leaves", "flower buds", "stems"],
    symptomProgression:
      "Small colonies on tender tips expand within days into dense clusters that curl leaves, stunt shoots, and coat foliage in sticky honeydew followed by black sooty mold.",
    observableSigns: [
      "Soft-bodied green, black, or gray insects cluster on the undersides of new leaves and along tender stems.",
      "Leaves become curled, puckered, and yellowed while a shiny sticky honeydew film coats surfaces below.",
    ],
    favorableConditions: [
      "Warm spring weather with lush, nitrogen-rich succulent growth strongly favors rapid aphid population buildup.",
    ],
    lookalikes: [
      {
        condition: "Spider mites",
        differentiator:
          "Mites cause fine stippling and webbing rather than the pear-shaped bodies and honeydew that identify aphid colonies.",
      },
      {
        condition: "Nutrient deficiency leaf curl",
        differentiator:
          "Nutrient curl lacks the clustered insects and sticky honeydew always present in an active aphid infestation.",
      },
    ],
    immediateActions: [
      "Blast colonies off plants today with a firm spray of water directed at leaf undersides and growing tips.",
      "Pinch off and dispose of the most heavily curled and infested shoot tips to remove the densest clusters.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Spray insecticidal soap or neem oil on both leaf surfaces every five to seven days until colonies collapse.",
      },
      {
        situation: "Persistent infestation",
        treatment:
          "Release or encourage lady beetles and lacewings, and apply pyrethrin only as a spot treatment for heavy outbreaks.",
      },
    ],
    avoid: [
      "Avoid heavy nitrogen fertilization, which produces the soft flush of growth that aphids reproduce on fastest.",
    ],
    recoveryTimeline:
      "With water sprays and soap treatment plus natural enemies, populations usually crash within one to two weeks and plants recover new growth.",
    prevention: [
      "Inspect new growth twice weekly and rinse or hand-crush the first small colonies before they multiply.",
      "Plant flowering companions like alyssum and dill to sustain the predatory insects that keep aphids in check.",
    ],
    monitoringThresholds: [
      "Treat when colonies cover more than a few inches of stem or when honeydew and curling appear on multiple plants.",
    ],
    escalationCriteria: [
      "Seek diagnostic help if aphids persist despite repeated treatment or if plants show mottling suggesting aphid-vectored virus.",
    ],
    sources: [
      {
        label: "UC IPM Aphids",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7404.html",
      },
    ],
  },
  {
    id: "aphids-ornamentals-roses",
    name: "Aphids (Roses and Ornamentals)",
    category: "insect-pest",
    affectedPlants: ["ornamentals"],
    specificHosts: ["Rose", "Hibiscus", "Chrysanthemum", "Milkweed", "Dahlia"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["flower buds", "new growth", "undersides of leaves"],
    symptomProgression:
      "Aphids first mass on unopened rose buds and tender shoots, then distort opening blooms and drop honeydew that blackens leaves below.",
    observableSigns: [
      "Dense clusters of green or pink soft-bodied aphids coat rose buds and the youngest expanding stems.",
      "Deformed flowers, sticky glossy foliage, and sooty black mold develop beneath infested shoots.",
    ],
    favorableConditions: [
      "Flushes of tender new growth in cool spring weather create ideal feeding sites for explosive aphid reproduction.",
    ],
    lookalikes: [
      {
        condition: "Thrips flower damage",
        differentiator:
          "Thrips cause silvery streaking and browning inside petals without the visible clustered insects and honeydew of aphids.",
      },
      {
        condition: "Rose midge",
        differentiator:
          "Midge blackens and kills growing tips entirely, whereas aphids leave living distorted buds coated with insects.",
      },
    ],
    immediateActions: [
      "Hose aphids off buds and shoots with a strong jet of water early on a sunny morning today.",
      "Prune out and bag the most heavily encrusted bud clusters to reduce the breeding population immediately.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply insecticidal soap directly onto colonies every week, ensuring thorough coverage of buds and leaf undersides.",
      },
      {
        situation: "Ornamental beds with pollinators",
        treatment:
          "Favor lady beetle releases and horticultural oil over systemic insecticides that harm bees visiting the blooms.",
      },
    ],
    avoid: [
      "Avoid spraying broad-spectrum insecticides that kill the lady beetles and lacewings naturally suppressing aphids.",
    ],
    recoveryTimeline:
      "Buds resume normal opening within a week or two once colonies are knocked down and natural predators arrive.",
    prevention: [
      "Scout rose buds and shoot tips at least twice weekly during the spring growth flush and remove early colonies.",
      "Interplant flowering insectary plants to keep resident populations of aphid predators established in the bed.",
    ],
    monitoringThresholds: [
      "Intervene when clusters reach the size of a fingertip on several buds or honeydew begins coating lower foliage.",
    ],
    escalationCriteria: [
      "Consult a rosarian or extension office if distorted growth continues after treatment or virus-like mottling appears.",
    ],
    sources: [
      {
        label: "UC IPM Aphids",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7404.html",
      },
    ],
  },
  {
    id: "aphids-fruit-trees",
    name: "Aphids (Fruit Trees)",
    category: "insect-pest",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Apple", "Plum", "Cherry", "Peach", "Pear"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["new growth", "undersides of leaves", "shoot tips"],
    symptomProgression:
      "Colonies build on expanding spring shoots, tightly curling and reddening leaves, then honeydew fosters sooty mold that dirties leaves and developing fruit.",
    observableSigns: [
      "Leaves at branch tips curl tightly and may show red or yellow blistered discoloration where aphids feed.",
      "Ants stream up the trunk tending clustered aphids, and honeydew leaves foliage and fruit sticky and blackened.",
    ],
    favorableConditions: [
      "Vigorous soft spring shoot growth combined with ant tending that protects colonies favors heavy fruit-tree aphid buildup.",
    ],
    lookalikes: [
      {
        condition: "Leaf curl fungus",
        differentiator:
          "Peach leaf curl thickens and reddens whole leaves without any insects, while aphid curl always harbors clustered pests.",
      },
      {
        condition: "Woolly apple aphid",
        differentiator:
          "Woolly apple aphid forms white cottony masses on woody galls rather than the smooth green colonies on tender shoots.",
      },
    ],
    immediateActions: [
      "Wrap a sticky barrier band around the trunk today to interrupt the ants that shield and spread aphid colonies.",
      "Prune off and dispose of the most tightly curled shoot tips holding the densest aphid clusters.",
    ],
    treatments: [
      {
        situation: "Dormant season",
        treatment:
          "Apply horticultural oil at delayed-dormant stage to smother overwintering aphid eggs on twigs and bark.",
      },
      {
        situation: "Growing season",
        treatment:
          "Spot-treat active colonies with insecticidal soap or neem while conserving lady beetles and parasitic wasps.",
      },
    ],
    avoid: [
      "Avoid excessive nitrogen and heavy pruning that trigger the succulent watersprouts aphids colonize most heavily.",
    ],
    recoveryTimeline:
      "Curled leaves stay deformed, but new uninfested growth appears within two to three weeks after control and ant exclusion.",
    prevention: [
      "Maintain sticky trunk bands and control ants to let parasitic wasps and lady beetles suppress colonies naturally.",
      "Apply dormant oil each late winter to reduce overwintering eggs before the spring shoot flush begins.",
    ],
    monitoringThresholds: [
      "Treat when a quarter or more of new shoots show curling colonies or ants are actively tending aphids on the trunk.",
    ],
    escalationCriteria: [
      "Contact extension if colonies resist control for weeks or trees show stunting and reduced fruit set year over year.",
    ],
    sources: [
      {
        label: "UC IPM Aphids",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7404.html",
      },
    ],
  },
  {
    id: "aphids-houseplants",
    name: "Aphids (Houseplants)",
    category: "insect-pest",
    affectedPlants: ["houseplants"],
    specificHosts: ["Hibiscus", "Ivy", "Pepper", "Croton", "Oleander"],
    growthStages: ["vegetative", "flowering", "all-stages"],
    symptomLocations: ["new growth", "undersides of leaves", "flower buds"],
    symptomProgression:
      "A few aphids brought in on new plants reproduce continuously indoors, spreading from tender tips across the canopy and coating leaves and nearby surfaces with sticky honeydew.",
    observableSigns: [
      "Tiny soft-bodied insects gather on new leaves and buds, and shed white skins accumulate on leaves below.",
      "Sticky honeydew coats foliage, windowsills, and floor near the plant, sometimes darkening with sooty mold.",
    ],
    favorableConditions: [
      "Warm stable indoor temperatures with no natural predators let aphids reproduce year-round on houseplants.",
    ],
    lookalikes: [
      {
        condition: "Mealybugs",
        differentiator:
          "Mealybugs are slower white cottony insects clustered in leaf axils rather than the mobile green aphids on new growth.",
      },
      {
        condition: "Whiteflies",
        differentiator:
          "Whiteflies flutter up in a cloud when disturbed, while aphids stay clustered and immobile on the shoots.",
      },
    ],
    immediateActions: [
      "Isolate the affected plant away from other houseplants today to prevent aphids from spreading across the collection.",
      "Rinse the plant in the sink or shower with lukewarm water to physically dislodge most of the colony.",
    ],
    treatments: [
      {
        situation: "Indoor plants",
        treatment:
          "Wipe or spray leaves with insecticidal soap weekly, treating undersides and new growth until no aphids remain.",
      },
      {
        situation: "Heavy or repeated infestation",
        treatment:
          "Apply neem oil thoroughly or use a labeled systemic houseplant granule for plants that keep reinfesting.",
      },
    ],
    avoid: [
      "Avoid returning the plant near others before you confirm the infestation is fully cleared over several weeks.",
    ],
    recoveryTimeline:
      "Indoor colonies are usually eliminated within two to four weeks of consistent weekly treatment and isolation.",
    prevention: [
      "Quarantine and inspect every new houseplant for two weeks before placing it among your existing collection.",
      "Wipe leaves periodically and check new growth so early aphids are caught before colonies establish.",
    ],
    monitoringThresholds: [
      "Repeat treatment whenever any live aphids or fresh honeydew reappear on new growth after the previous application.",
    ],
    escalationCriteria: [
      "Discard a plant that remains chronically infested and threatens to seed aphids across your whole collection.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Aphids on Houseplants",
        url: "https://extension.umn.edu/product-and-houseplant-pests/aphids",
      },
    ],
  },
  {
    id: "whiteflies-greenhouse-vegetable",
    name: "Whiteflies (Greenhouse and Vegetable)",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden", "specialty-cultivation", "houseplants"],
    specificHosts: ["Tomato", "Poinsettia", "Cucumber", "Hibiscus", "Eggplant"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["undersides of leaves", "new growth", "whole canopy"],
    symptomProgression:
      "Tiny white adults and scale-like nymphs feed on leaf undersides, and as numbers grow leaves yellow, honeydew and sooty mold spread, and plants weaken and drop leaves.",
    observableSigns: [
      "Clouds of tiny white moth-like insects fly up from the canopy when the plant is shaken or brushed.",
      "Leaf undersides carry flat oval translucent nymphs, and upper leaves turn yellow, sticky, and sooty.",
    ],
    favorableConditions: [
      "Warm, protected greenhouse or indoor conditions with continuous host foliage allow whiteflies to breed year-round.",
    ],
    lookalikes: [
      {
        condition: "Aphids",
        differentiator:
          "Aphids stay clustered and do not fly, whereas disturbed whiteflies rise in an unmistakable white cloud.",
      },
      {
        condition: "Powdery mildew",
        differentiator:
          "Mildew is a dry white fungal coating that wipes off, unlike the living winged whiteflies and sticky honeydew.",
      },
    ],
    immediateActions: [
      "Hang yellow sticky traps just above the canopy today to capture flying adults and gauge population size.",
      "Vacuum adults gently from leaf undersides in the cool morning when whiteflies are sluggish and easy to remove.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Spray insecticidal soap or horticultural oil on leaf undersides every five days to kill nymphs and adults.",
      },
      {
        situation: "Greenhouse production",
        treatment:
          "Introduce Encarsia formosa parasitic wasps or apply insect growth regulators labeled for whitefly control.",
      },
    ],
    avoid: [
      "Avoid repeated use of a single broad insecticide because whiteflies rapidly develop resistance to overused products.",
    ],
    recoveryTimeline:
      "Populations decline over three to five weeks with persistent treatment because overlapping life stages require repeated applications.",
    prevention: [
      "Inspect and quarantine incoming transplants and ornamentals, especially poinsettia, before adding them to a growing area.",
      "Keep yellow sticky traps in place continuously to detect and suppress adults before infestations explode.",
    ],
    monitoringThresholds: [
      "Escalate control when trap counts climb sharply or several adults fly from most plants when the canopy is disturbed.",
    ],
    escalationCriteria: [
      "Seek professional guidance if leaves show virus symptoms, since some whiteflies transmit serious plant viruses.",
    ],
    sources: [
      {
        label: "UC IPM Whiteflies",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7401.html",
      },
    ],
  },
  {
    id: "thrips-flower-greenhouse",
    name: "Western Flower Thrips (Greenhouse and Flowers)",
    category: "insect-pest",
    affectedPlants: ["ornamentals", "vegetable-garden", "specialty-cultivation"],
    specificHosts: ["Rose", "Gerbera", "Pepper", "Chrysanthemum", "Impatiens"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["flower petals", "new growth", "undersides of leaves"],
    symptomProgression:
      "Thrips rasp cells inside buds and on young leaves, causing silvery streaks and flecks that expand into distorted deformed flowers and scarred, curled leaves as populations climb.",
    observableSigns: [
      "Flowers show streaked discoloration, brown edges, and fail to open properly with slender insects hiding inside petals.",
      "Leaves display silvery stippling with tiny black fecal specks and a distorted, scarred appearance on new growth.",
    ],
    favorableConditions: [
      "Warm dry conditions with abundant flowering growth accelerate thrips reproduction in gardens and greenhouses.",
    ],
    lookalikes: [
      {
        condition: "Spider mite stippling",
        differentiator:
          "Mite damage comes with fine webbing and lacks the black fecal specks and slender insects typical of thrips.",
      },
      {
        condition: "Nutrient or spray leaf scorch",
        differentiator:
          "Scorch has no black frass or insects and follows fertilizer or chemical events rather than progressive stippling.",
      },
    ],
    immediateActions: [
      "Set out blue or yellow sticky traps among flowers today to detect and reduce the adult thrips population.",
      "Shake suspect blooms over white paper to confirm the fast-moving slender thrips before choosing a treatment.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply spinosad or insecticidal soap targeting buds and new growth, repeating every five to seven days.",
      },
      {
        situation: "Greenhouse production",
        treatment:
          "Release predatory mites such as Amblyseius species and rotate insecticide modes of action to slow resistance.",
      },
    ],
    avoid: [
      "Avoid relying on one insecticide class repeatedly because thrips quickly build resistance to overused chemistry.",
    ],
    recoveryTimeline:
      "Existing damaged flowers will not recover, but clean new blooms and foliage emerge within two to four weeks of sustained control.",
    prevention: [
      "Remove and destroy spent flowers and weeds that harbor thrips populations near valued plantings.",
      "Monitor with colored sticky cards year-round so rising thrips numbers trigger action before flowers are ruined.",
    ],
    monitoringThresholds: [
      "Treat when trap counts rise steadily or several flowers per plant show fresh streaking and deformation.",
    ],
    escalationCriteria: [
      "Consult a diagnostician if plants show tomato spotted wilt or impatiens necrotic spot symptoms thrips can transmit.",
    ],
    sources: [
      {
        label: "UC IPM Thrips",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7429.html",
      },
    ],
  },
  {
    id: "armored-scale-trees-shrubs",
    name: "Armored Scale (Trees and Shrubs)",
    category: "insect-pest",
    affectedPlants: ["trees-shrubs", "fruit-trees", "ornamentals"],
    specificHosts: ["Euonymus", "Holly", "Camellia", "Citrus", "Magnolia"],
    growthStages: ["mature", "dormant", "all-stages"],
    symptomLocations: ["stems", "branches", "undersides of leaves", "bark"],
    symptomProgression:
      "Immobile armored scales settle on bark and leaves, and as encrustations thicken over seasons they cause yellow spotting, branch dieback, and thinning canopies on stressed plants.",
    observableSigns: [
      "Hard circular or oyster-shell shaped bumps firmly attached to bark and leaves do not rub off easily.",
      "Yellow spots appear on leaves above heavy feeding, and twigs and branches slowly decline and die back.",
    ],
    favorableConditions: [
      "Dusty, drought-stressed plants and warm sheltered sites favor armored scale buildup and reduce natural enemy activity.",
    ],
    lookalikes: [
      {
        condition: "Soft scale",
        differentiator:
          "Soft scales produce abundant sticky honeydew and sooty mold, while armored scales feed without any honeydew.",
      },
      {
        condition: "Lenticels or bark texture",
        differentiator:
          "Natural bark bumps are part of the wood, whereas armored scale covers lift off to reveal a soft insect beneath.",
      },
    ],
    immediateActions: [
      "Scrape or prune out the most heavily encrusted twigs today and dispose of them away from healthy plants.",
      "Check for the tiny mobile crawler stage with a hand lens to time an effective treatment window.",
    ],
    treatments: [
      {
        situation: "Dormant season",
        treatment:
          "Apply horticultural oil during dormancy to smother overwintering armored scales beneath their protective covers.",
      },
      {
        situation: "Crawler emergence",
        treatment:
          "Spray horticultural oil or a labeled insecticide when unprotected crawlers are active in late spring or summer.",
      },
    ],
    avoid: [
      "Avoid spraying only adult covers at random times because the armor blocks contact insecticides from reaching the insect.",
    ],
    recoveryTimeline:
      "Dead scale covers persist for months, so judge success by fresh crawler absence and new healthy growth over one to two seasons.",
    prevention: [
      "Keep plants well watered and unstressed so vigorous growth and natural enemies limit armored scale buildup.",
      "Prune to open the canopy and reduce dust, which improves spray coverage and favors beneficial parasitic wasps.",
    ],
    monitoringThresholds: [
      "Treat when live scales are found on many twigs or crawlers appear on sticky tape wrapped around infested branches.",
    ],
    escalationCriteria: [
      "Consult an arborist when branch dieback becomes extensive or the whole plant is heavily encrusted and declining.",
    ],
    sources: [
      {
        label: "UC IPM Scales",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7408.html",
      },
    ],
  },
  {
    id: "soft-scale-honeydew",
    name: "Soft Scale (Honeydew Producing)",
    category: "insect-pest",
    affectedPlants: ["trees-shrubs", "houseplants", "ornamentals", "fruit-trees"],
    specificHosts: ["Citrus", "Ficus", "Magnolia", "Gardenia", "Tulip tree"],
    growthStages: ["mature", "all-stages"],
    symptomLocations: ["stems", "undersides of leaves", "leaf midribs", "twigs"],
    symptomProgression:
      "Soft scales cluster along stems and leaf veins sucking sap, and as they multiply they exude copious honeydew that coats foliage and surfaces below with sticky black sooty mold.",
    observableSigns: [
      "Smooth, dome-shaped or flattened brown scales line stems and leaf midribs and can be flicked loose with a fingernail.",
      "Everything beneath the plant becomes sticky with honeydew and darkens with a sooty mold film over time.",
    ],
    favorableConditions: [
      "Ant tending that protects scales and warm sheltered plantings allow soft scale colonies to expand unchecked.",
    ],
    lookalikes: [
      {
        condition: "Armored scale",
        differentiator:
          "Armored scale produces no honeydew, so the sticky sooty coating reliably points to soft scale instead.",
      },
      {
        condition: "Aphids",
        differentiator:
          "Aphids are soft mobile insects on new growth, while soft scales are immobile domed bumps fixed to stems.",
      },
    ],
    immediateActions: [
      "Wipe or scrape soft scales off stems and leaves with a soapy cloth or cotton swab today where accessible.",
      "Band trunks with a sticky barrier to exclude the ants that protect scales from natural predators.",
    ],
    treatments: [
      {
        situation: "Indoor plants",
        treatment:
          "Dab individual scales with alcohol-moistened swabs and follow with horticultural oil sprays until clear.",
      },
      {
        situation: "Landscape plants",
        treatment:
          "Apply horticultural oil during crawler emergence and control ants to let parasitic wasps suppress colonies.",
      },
    ],
    avoid: [
      "Avoid letting ants remain, because they defend scales from the natural enemies that would otherwise control them.",
    ],
    recoveryTimeline:
      "Honeydew and sooty mold fade over several weeks once scales are controlled, and washing rain or hose sprays clean foliage.",
    prevention: [
      "Control ants and inspect stems regularly so early soft scale colonies are removed before they multiply.",
      "Keep plants healthy and avoid stress that reduces the plant's ability to tolerate scale feeding.",
    ],
    monitoringThresholds: [
      "Treat when honeydew becomes noticeable or live scales are found colonizing new stems and leaf veins.",
    ],
    escalationCriteria: [
      "Seek professional help when large trees are heavily infested and honeydew fouls areas beneath the canopy persistently.",
    ],
    sources: [
      {
        label: "UC IPM Scales",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7408.html",
      },
    ],
  },
  {
    id: "scale-houseplants",
    name: "Scale Insects (Houseplants)",
    category: "insect-pest",
    affectedPlants: ["houseplants"],
    specificHosts: ["Ficus", "Jade plant", "Ferns", "Orchid", "Citrus"],
    growthStages: ["all-stages"],
    symptomLocations: ["stems", "undersides of leaves", "leaf midribs"],
    symptomProgression:
      "Scales spread slowly along stems and leaf veins, weakening the plant as numbers rise, causing yellowing, leaf drop, and in soft-scale species sticky honeydew on nearby surfaces.",
    observableSigns: [
      "Small brown or tan bumps cling to stems and leaf undersides and stay fixed when you brush the foliage.",
      "Leaves yellow and drop, and honeydew or a sticky residue may appear on the plant and surrounding furniture.",
    ],
    favorableConditions: [
      "Warm indoor conditions without predators and crowded plant collections let scale spread quietly between houseplants.",
    ],
    lookalikes: [
      {
        condition: "Mealybugs",
        differentiator:
          "Mealybugs look white and cottony and move slowly, whereas scale forms hard immobile bumps that stay put.",
      },
      {
        condition: "Normal leaf nodes or bumps",
        differentiator:
          "Genuine plant tissue cannot be scraped off, but a scale insect lifts away to reveal a soft body underneath.",
      },
    ],
    immediateActions: [
      "Isolate the infested plant away from your collection today to stop crawlers from spreading to healthy plants.",
      "Scrape off visible scales with a fingernail or dab each with an alcohol-moistened cotton swab.",
    ],
    treatments: [
      {
        situation: "Light infestation",
        treatment:
          "Wipe every stem and leaf with alcohol swabs weekly and remove all visible scales by hand.",
      },
      {
        situation: "Heavy infestation",
        treatment:
          "Spray the whole plant thoroughly with horticultural oil, repeating every one to two weeks until crawlers stop appearing.",
      },
    ],
    avoid: [
      "Avoid keeping the infested plant among others, because crawlers migrate and quietly seed new infestations.",
    ],
    recoveryTimeline:
      "Persistent weekly treatment usually clears houseplant scale within four to eight weeks as successive crawler generations are killed.",
    prevention: [
      "Quarantine and inspect new houseplants for several weeks before adding them to your indoor collection.",
      "Wipe leaves and check stems regularly so early scale is caught before it multiplies across the plant.",
    ],
    monitoringThresholds: [
      "Continue treatment as long as any new bumps or sticky honeydew appear after the previous application.",
    ],
    escalationCriteria: [
      "Discard a chronically infested plant that continually reinfests others despite thorough repeated treatment.",
    ],
    sources: [
      {
        label: "University of Maryland Extension Scale Insects",
        url: "https://extension.umd.edu/resource/scale-insects-trees-and-shrubs/",
      },
    ],
  },
  {
    id: "mealybugs-foliage",
    name: "Mealybugs (Foliage)",
    category: "insect-pest",
    affectedPlants: ["houseplants", "ornamentals", "specialty-cultivation"],
    specificHosts: ["Coleus", "Hoya", "Croton", "Orchid", "Cactus"],
    growthStages: ["vegetative", "flowering", "all-stages"],
    symptomLocations: ["leaf axils", "new growth", "undersides of leaves", "stems"],
    symptomProgression:
      "Mealybugs tuck into leaf axils and stem crotches, and as colonies grow they spread across foliage, weaken growth, and drop honeydew that leads to sooty mold and leaf yellowing.",
    observableSigns: [
      "White cottony, waxy masses collect in leaf axils, along stems, and on the undersides of leaves.",
      "Foliage becomes sticky with honeydew, new growth is stunted and distorted, and sooty mold may develop.",
    ],
    favorableConditions: [
      "Warm humid conditions, overcrowded plants, and excess nitrogen fertilization favor rapid mealybug reproduction.",
    ],
    lookalikes: [
      {
        condition: "Woolly aphids",
        differentiator:
          "Woolly aphids occur on woody outdoor hosts, whereas mealybugs infest indoor foliage in sheltered leaf axils.",
      },
      {
        condition: "Powdery mildew",
        differentiator:
          "Mildew is a flat dry fungal film, while mealybugs are raised cottony insect masses with sticky honeydew.",
      },
    ],
    immediateActions: [
      "Isolate the plant today and dab each mealybug cluster with a cotton swab dipped in rubbing alcohol.",
      "Rinse the plant with a firm water spray to dislodge crawlers hidden in leaf axils and stem joints.",
    ],
    treatments: [
      {
        situation: "Indoor plants",
        treatment:
          "Apply insecticidal soap or neem oil weekly and continue alcohol swabbing of axils until colonies disappear.",
      },
      {
        situation: "Persistent colonies",
        treatment:
          "Use a labeled systemic insecticide for houseplants or discard heavily infested specimens that keep reinfesting.",
      },
    ],
    avoid: [
      "Avoid overfertilizing with nitrogen, which fuels the tender growth that mealybug colonies expand on fastest.",
    ],
    recoveryTimeline:
      "Repeated weekly treatment typically clears foliage mealybugs within four to eight weeks as hidden crawlers are eliminated.",
    prevention: [
      "Quarantine new plants and inspect leaf axils closely before adding them to your collection.",
      "Avoid crowding plants and wipe foliage regularly so early mealybug clusters are found and removed.",
    ],
    monitoringThresholds: [
      "Keep treating as long as any cottony masses or fresh honeydew reappear in leaf axils and stem joints.",
    ],
    escalationCriteria: [
      "Discard a plant that stays chronically infested and threatens to spread mealybugs across your collection.",
    ],
    sources: [
      {
        label: "UC IPM Mealybugs",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn74174.html",
      },
    ],
  },
  {
    id: "mealybugs-root",
    name: "Root Mealybugs",
    category: "insect-pest",
    affectedPlants: ["houseplants", "succulents-cacti", "specialty-cultivation"],
    specificHosts: ["Cactus", "Succulents", "African violet", "Orchid", "Haworthia"],
    growthStages: ["all-stages"],
    symptomLocations: ["roots", "root crown", "inner pot walls"],
    symptomProgression:
      "Root mealybugs feed unseen on roots inside the pot, causing gradual decline, poor water uptake, wilting, and stunting until the plant is unpotted and the white infestation on roots is discovered.",
    observableSigns: [
      "White cottony patches and waxy residue coat the roots and inner walls of the pot when the plant is unpotted.",
      "The plant wilts, grows slowly, and declines despite proper watering because the root system is being fed upon.",
    ],
    favorableConditions: [
      "Chronically dry rootballs and long intervals between repotting favor undetected root mealybug colonies.",
    ],
    lookalikes: [
      {
        condition: "Root rot",
        differentiator:
          "Root rot leaves roots mushy and dark, whereas root mealybugs leave firm roots coated with white waxy insects.",
      },
      {
        condition: "Perlite or mineral deposits",
        differentiator:
          "Mineral crust is gritty and stationary, while root mealybug waxy masses harbor slow-moving pink-bodied insects.",
      },
    ],
    immediateActions: [
      "Unpot the plant today and rinse all soil from the roots to expose and wash away the mealybug colony.",
      "Discard the old potting mix and clean the pot thoroughly to remove any remaining crawlers and eggs.",
    ],
    treatments: [
      {
        situation: "Bare-root treatment",
        treatment:
          "Soak washed roots in insecticidal soap or a labeled solution, then repot into fresh sterile mix.",
      },
      {
        situation: "Valued or heavily infested plant",
        treatment:
          "Apply a labeled systemic soil drench and repeat root inspection at the next watering cycle to confirm control.",
      },
    ],
    avoid: [
      "Avoid reusing the contaminated potting mix or pot without cleaning, because eggs will restart the infestation.",
    ],
    recoveryTimeline:
      "The plant recovers vigor over several weeks to a couple of months once clean roots re-establish in fresh mix.",
    prevention: [
      "Inspect roots whenever repotting and quarantine new succulents until you confirm their roots are clean.",
      "Use fresh sterile potting mix and clean pots to avoid carrying root mealybugs between plants.",
    ],
    monitoringThresholds: [
      "Re-examine the roots at repotting or if the plant declines, and re-treat if any white waxy colonies remain.",
    ],
    escalationCriteria: [
      "Discard heavily infested plants that fail to recover after bare-root treatment to protect the rest of the collection.",
    ],
    sources: [
      {
        label: "University of Florida IFAS Mealybugs",
        url: "https://edis.ifas.ufl.edu/publication/IN1064",
      },
    ],
  },
  {
    id: "fungus-gnats-soil",
    name: "Fungus Gnats",
    category: "insect-pest",
    affectedPlants: ["houseplants", "vegetable-garden", "specialty-cultivation"],
    specificHosts: ["Seedlings", "Peace lily", "Ferns", "Herbs", "Cannabis"],
    growthStages: ["seed-seedling", "vegetative", "all-stages"],
    symptomLocations: ["soil surface", "roots", "around the pot"],
    symptomProgression:
      "Adults swarm around damp potting soil while larvae feed on organic matter and tender roots, and in seedlings and cuttings heavy larval feeding causes stunting, wilting, and poor establishment.",
    observableSigns: [
      "Small dark mosquito-like flies rise from the soil surface and hover around the plant when it is disturbed.",
      "Tiny clear larvae with black heads live in the top layer of consistently wet potting mix.",
    ],
    favorableConditions: [
      "Constantly moist potting soil rich in organic matter and overwatered pots strongly favor fungus gnat breeding.",
    ],
    lookalikes: [
      {
        condition: "Fruit flies",
        differentiator:
          "Fruit flies hover around ripe produce, while fungus gnats emerge specifically from the surface of damp potting soil.",
      },
      {
        condition: "Shore flies",
        differentiator:
          "Shore flies are stouter with short antennae and feed on algae, unlike the slender long-legged fungus gnats.",
      },
    ],
    immediateActions: [
      "Let the top inch or two of soil dry out completely today to make it inhospitable for larvae and adults.",
      "Place yellow sticky traps flat on the soil surface to capture and monitor the flying adults immediately.",
    ],
    treatments: [
      {
        situation: "Larval control",
        treatment:
          "Drench soil with Bacillus thuringiensis israelensis (Bti) or apply beneficial nematodes to kill larvae in the mix.",
      },
      {
        situation: "Adult reduction",
        treatment:
          "Maintain yellow sticky traps and a layer of dry sand or grit on the surface to trap and deter egg-laying adults.",
      },
    ],
    avoid: [
      "Avoid overwatering and leaving standing water in saucers, which sustain the moist conditions gnats require to breed.",
    ],
    recoveryTimeline:
      "Populations decline within two to three weeks once watering is reduced and Bti or nematode treatments interrupt the larval cycle.",
    prevention: [
      "Water only when the top layer of soil is dry and avoid overpotting into oversized containers that stay wet.",
      "Use well-draining sterile potting mix and let it dry between waterings to prevent larval breeding.",
    ],
    monitoringThresholds: [
      "Re-treat if adult catches on sticky traps rise again, indicating a new larval generation is emerging from the soil.",
    ],
    escalationCriteria: [
      "Investigate root health and consider repotting if seedlings or cuttings collapse despite adult and larval control.",
    ],
    sources: [
      {
        label: "UC IPM Fungus Gnats",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7448.html",
      },
    ],
  },
  {
    id: "leaf-miners-vegetable-ornamental",
    name: "Leafminers (Vegetables and Ornamentals)",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden", "ornamentals", "herbs"],
    specificHosts: ["Spinach", "Chard", "Tomato", "Columbine", "Chrysanthemum"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["inside leaves", "leaf blades"],
    symptomProgression:
      "Larvae tunnel between the leaf surfaces, creating winding pale trails or blotches that widen as the larvae grow, reducing photosynthesis and causing affected leaves to yellow and dry.",
    observableSigns: [
      "Winding, whitish serpentine tunnels or irregular blotches appear within the leaf between upper and lower surfaces.",
      "Tiny larvae or their dark frass trails can be seen inside the mines when a leaf is held up to the light.",
    ],
    favorableConditions: [
      "Warm weather and lush leafy growth with few natural parasitoids favor repeated leafminer generations.",
    ],
    lookalikes: [
      {
        condition: "Downy mildew",
        differentiator:
          "Downy mildew shows fuzzy growth on the leaf underside, unlike the hollow tunnels created inside by leafminers.",
      },
      {
        condition: "Herbicide damage",
        differentiator:
          "Herbicide injury distorts whole leaves uniformly rather than producing discrete winding mines with visible larvae.",
      },
    ],
    immediateActions: [
      "Pick off and destroy mined leaves today to remove larvae before they complete development inside the foliage.",
      "Crush larvae within their mines by pressing the tunnel between your fingers where removing leaves is not practical.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply spinosad to target young larvae and remove infested leaves, while conserving parasitic wasps that attack miners.",
      },
      {
        situation: "Ornamental plantings",
        treatment:
          "Use floating row covers early or a labeled systemic and rely on parasitoids for long-term suppression.",
      },
    ],
    avoid: [
      "Avoid broad-spectrum insecticides that kill the tiny parasitic wasps which normally keep leafminers in check.",
    ],
    recoveryTimeline:
      "New clean leaves replace damaged ones within a few weeks once infested foliage is removed and larvae are controlled.",
    prevention: [
      "Rotate leafy crops and cover susceptible plantings with row cover to block egg-laying adult flies.",
      "Remove and destroy infested leaves promptly and clear weed hosts that harbor leafminer populations nearby.",
    ],
    monitoringThresholds: [
      "Act when fresh mines appear on many leaves, since parasitoids usually keep light infestations tolerable.",
    ],
    escalationCriteria: [
      "Seek extension advice if mining is severe across a crop despite removal and repeated spinosad treatment.",
    ],
    sources: [
      {
        label: "UC IPM Leafminers",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7407.html",
      },
    ],
  },
  {
    id: "tomato-hornworm",
    name: "Tomato Hornworm",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Tomato", "Pepper", "Eggplant", "Potato", "Tobacco"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["new growth", "stems", "fruit", "upper foliage"],
    symptomProgression:
      "Large green caterpillars strip leaves rapidly from the top of tomato plants, defoliating stems overnight and gouging developing fruit as they grow to a substantial size.",
    observableSigns: [
      "Large fat green caterpillars with diagonal white stripes and a rear horn feed on upper stems and leaves.",
      "Dark green or black pellet-shaped droppings collect on leaves and soil below the defoliated stems.",
    ],
    favorableConditions: [
      "Warm summer weather and undisturbed soil where pupae overwinter favor recurring hornworm outbreaks in tomato beds.",
    ],
    lookalikes: [
      {
        condition: "Tobacco hornworm",
        differentiator:
          "Tobacco hornworm has a red horn and seven diagonal stripes, whereas tomato hornworm has a dark horn and V-shaped marks.",
      },
      {
        condition: "Deer or rabbit browsing",
        differentiator:
          "Animal browsing leaves ragged torn stems without the telltale caterpillar frass and stripped upper foliage.",
      },
    ],
    immediateActions: [
      "Handpick the caterpillars off plants today and drop them into soapy water to remove them immediately.",
      "Follow the trail of dark frass upward to locate the well-camouflaged hornworms feeding at the stem tips.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Spray Bacillus thuringiensis kurstaki on foliage to kill young caterpillars while sparing beneficial insects.",
      },
      {
        situation: "Biological control present",
        treatment:
          "Leave hornworms carrying white parasitic wasp cocoons on the plant so the wasps can complete their cycle.",
      },
    ],
    avoid: [
      "Avoid killing hornworms covered in white rice-like cocoons, since those wasps produce future generations of parasites.",
    ],
    recoveryTimeline:
      "Vigorous tomato plants regrow foliage within one to two weeks after hornworms are removed and feeding stops.",
    prevention: [
      "Till the soil in fall and spring to destroy overwintering pupae before adult moths emerge.",
      "Scout plants every few days for frass and stripped tips so hornworms are caught while still small.",
    ],
    monitoringThresholds: [
      "Handpick immediately whenever frass or feeding damage appears, since a single large hornworm can defoliate a plant.",
    ],
    escalationCriteria: [
      "Consider Bt sprays across the planting if hornworm numbers overwhelm handpicking during a heavy outbreak year.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Hornworms",
        url: "https://extension.umn.edu/yard-and-garden-insects/tomato-hornworms",
      },
    ],
  },
  {
    id: "imported-cabbageworm",
    name: "Cabbage Worms (Imported Cabbageworm)",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Cabbage", "Broccoli", "Kale", "Cauliflower", "Collards"],
    growthStages: ["seed-seedling", "vegetative", "mature"],
    symptomLocations: ["leaves", "leaf undersides", "developing heads"],
    symptomProgression:
      "Velvety green caterpillars chew ragged holes through cole crop leaves and bore into developing heads, contaminating them with frass as feeding intensifies through the season.",
    observableSigns: [
      "Velvety green caterpillars rest along leaf midribs and chew large irregular holes in cabbage-family foliage.",
      "White butterflies flutter over the plants, and green pellet frass accumulates in leaf crevices and heads.",
    ],
    favorableConditions: [
      "Warm season plantings of cole crops and continuous white butterfly egg-laying favor sustained cabbageworm pressure.",
    ],
    lookalikes: [
      {
        condition: "Cabbage looper",
        differentiator:
          "The looper moves with a distinct arching inchworm crawl, while the imported cabbageworm crawls smoothly and is velvety.",
      },
      {
        condition: "Diamondback moth larvae",
        differentiator:
          "Diamondback larvae are much smaller and wriggle and drop on a thread when disturbed, unlike the larger cabbageworm.",
      },
    ],
    immediateActions: [
      "Handpick caterpillars and squash egg clusters on leaf undersides today to reduce the feeding population.",
      "Inspect and shake plants over a tray to dislodge and remove the well-camouflaged green larvae.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Spray Bacillus thuringiensis kurstaki on all leaf surfaces every seven to ten days while caterpillars are feeding.",
      },
      {
        situation: "Season-long protection",
        treatment:
          "Cover cole crops with floating row covers from transplanting to exclude the egg-laying white butterflies.",
      },
    ],
    avoid: [
      "Avoid leaving crops uncovered near flowering weeds that attract the white butterflies laying eggs on your plants.",
    ],
    recoveryTimeline:
      "Feeding damage stops within days of effective Bt treatment, and new leaves develop cleanly if plants are still young.",
    prevention: [
      "Install floating row covers at planting and remove nearby mustard-family weeds that host the butterflies.",
      "Scout leaf undersides weekly for eggs and small larvae so treatment begins before heads are contaminated.",
    ],
    monitoringThresholds: [
      "Treat when feeding holes appear on multiple plants or several caterpillars per plant are found during scouting.",
    ],
    escalationCriteria: [
      "Seek extension guidance if multiple caterpillar species overwhelm Bt and row covers across the planting.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Cabbage Worms",
        url: "https://extension.umn.edu/yard-and-garden-insects/caterpillars-cole-crops",
      },
    ],
  },
  {
    id: "eastern-tent-caterpillar",
    name: "Eastern Tent Caterpillar",
    category: "insect-pest",
    affectedPlants: ["fruit-trees", "trees-shrubs", "ornamentals"],
    specificHosts: ["Cherry", "Apple", "Crabapple", "Plum", "Hawthorn"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["branch crotches", "leaves", "twigs"],
    symptomProgression:
      "Caterpillars build a silken tent in a branch fork in early spring and radiate out to defoliate branches, enlarging the tent and stripping foliage as they grow before dispersing to pupate.",
    observableSigns: [
      "Dense silken webbed tents form in the forks of branches and enlarge as the caterpillars grow.",
      "Hairy caterpillars with a white back stripe crawl out to feed, leaving branches defoliated near the tent.",
    ],
    favorableConditions: [
      "Warm early spring following a year with abundant egg masses on wild cherry favors heavy tent caterpillar outbreaks.",
    ],
    lookalikes: [
      {
        condition: "Fall webworm",
        differentiator:
          "Fall webworm webs enclose the leaves at branch ends in late summer, whereas tent caterpillar tents sit in branch forks in spring.",
      },
      {
        condition: "Gypsy moth (spongy moth)",
        differentiator:
          "Spongy moth caterpillars do not build silken tents and disperse individually rather than clustering in a nest.",
      },
    ],
    immediateActions: [
      "Prune out and destroy the silken tents with the caterpillars inside on a cool morning today when they are gathered.",
      "Wipe out small tents by hand with a gloved hand or stick, dropping caterpillars into soapy water.",
    ],
    treatments: [
      {
        situation: "Small trees",
        treatment:
          "Remove tents manually and spray Bacillus thuringiensis kurstaki on foliage while caterpillars are still young.",
      },
      {
        situation: "Larger infestations",
        treatment:
          "Apply a labeled insecticide to accessible foliage when caterpillars are small and conserve natural predators.",
      },
    ],
    avoid: [
      "Avoid burning tents in the tree, which damages bark and living wood far more than the caterpillars themselves.",
    ],
    recoveryTimeline:
      "Healthy trees releaf within a few weeks after defoliation, and a single spring outbreak rarely causes lasting harm.",
    prevention: [
      "Scout for shiny dark egg bands encircling twigs in winter and prune them off before spring hatch.",
      "Remove nearby wild cherry that serves as a reservoir and monitor branch forks each early spring.",
    ],
    monitoringThresholds: [
      "Remove tents as soon as they appear, especially on small or young trees that tolerate defoliation poorly.",
    ],
    escalationCriteria: [
      "Consult an arborist if repeated annual defoliation stresses a valuable tree already weakened by other problems.",
    ],
    sources: [
      {
        label: "University of Kentucky Entomology Eastern Tent Caterpillar",
        url: "https://entomology.ca.uky.edu/ef423",
      },
    ],
  },
  {
    id: "fall-webworm",
    name: "Fall Webworm",
    category: "insect-pest",
    affectedPlants: ["trees-shrubs", "fruit-trees", "ornamentals"],
    specificHosts: ["Walnut", "Pecan", "Cherry", "Mulberry", "Persimmon"],
    growthStages: ["mature"],
    symptomLocations: ["branch tips", "leaves", "enclosed webbing"],
    symptomProgression:
      "Caterpillars spin loose webs enclosing foliage at branch ends in late summer, expanding the nest to cover more leaves as they feed within the protective webbing until they mature.",
    observableSigns: [
      "Loose silken webs enclose leaves at the ends of branches and grow larger through late summer.",
      "Pale hairy caterpillars feed on leaves inside the web, leaving brown skeletonized foliage within the nest.",
    ],
    favorableConditions: [
      "Late summer warmth and untreated egg masses on preferred hardwoods favor conspicuous fall webworm nests.",
    ],
    lookalikes: [
      {
        condition: "Eastern tent caterpillar",
        differentiator:
          "Tent caterpillars nest in spring in branch forks, while fall webworms enclose branch tips in late summer.",
      },
      {
        condition: "Spider mite webbing",
        differentiator:
          "Mite webbing is fine and dusty across leaves, unlike the large leaf-enclosing nests full of hairy caterpillars.",
      },
    ],
    immediateActions: [
      "Prune out and destroy accessible webbed branch tips today to remove the enclosed caterpillars at once.",
      "Break open small nests with a pole so birds and predators can reach the exposed caterpillars.",
    ],
    treatments: [
      {
        situation: "Small ornamentals",
        treatment:
          "Remove webbed branches and apply Bacillus thuringiensis kurstaki to the exposed foliage while larvae are young.",
      },
      {
        situation: "Established shade trees",
        treatment:
          "Tolerate late-season nests on large healthy trees, since damage is mostly cosmetic and predators reduce numbers.",
      },
    ],
    avoid: [
      "Avoid burning nests in the tree, which injures the bark and cambium far more than the caterpillars do.",
    ],
    recoveryTimeline:
      "Because damage occurs late in the season, trees typically suffer no lasting harm and leaf out normally the next spring.",
    prevention: [
      "Monitor branch tips in mid to late summer and prune out the first small nests before they enlarge.",
      "Encourage birds and parasitic wasps that naturally reduce webworm numbers by avoiding broad insecticides.",
    ],
    monitoringThresholds: [
      "Remove nests when they are still small and reachable, especially on prized small trees and shrubs.",
    ],
    escalationCriteria: [
      "Consult an arborist only if a young or stressed tree faces repeated heavy defoliation over multiple years.",
    ],
    sources: [
      {
        label: "University of Kentucky Entomology Fall Webworm",
        url: "https://entomology.ca.uky.edu/ef425",
      },
    ],
  },
  {
    id: "bagworms-evergreens",
    name: "Bagworms (Evergreens)",
    category: "insect-pest",
    affectedPlants: ["trees-shrubs", "ornamentals"],
    specificHosts: ["Arborvitae", "Juniper", "Spruce", "Cedar", "Cypress"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["twigs", "foliage", "branches"],
    symptomProgression:
      "Larvae feed while dragging spindle-shaped bags made of plant debris, defoliating branches as they grow, and on evergreens the browning of stripped foliage can be permanent and even kill branches.",
    observableSigns: [
      "Spindle-shaped bags covered in bits of the host foliage hang from twigs and move as larvae feed.",
      "Branches turn brown and thin where larvae have stripped needles or leaves during their feeding season.",
    ],
    favorableConditions: [
      "Warm summers and untreated overwintering bags full of eggs favor damaging bagworm buildup on conifers.",
    ],
    lookalikes: [
      {
        condition: "Cones or plant debris",
        differentiator:
          "A bagworm bag is silk-bound and firmly attached to a twig with a living larva inside, unlike loose cones or debris.",
      },
      {
        condition: "Winter cold browning",
        differentiator:
          "Cold burn browns whole exposed sides uniformly, while bagworm browning follows the hanging bags along fed branches.",
      },
    ],
    immediateActions: [
      "Handpick and destroy the hanging bags today, especially over winter and early spring before eggs hatch.",
      "Cut off and bag heavily infested branch tips to remove many larvae or overwintering egg-filled bags at once.",
    ],
    treatments: [
      {
        situation: "Early season",
        treatment:
          "Spray Bacillus thuringiensis kurstaki when larvae are young and actively feeding in early summer for best results.",
      },
      {
        situation: "Established larvae",
        treatment:
          "Apply a labeled insecticide to larger larvae or continue thorough handpicking of bags on smaller plants.",
      },
    ],
    avoid: [
      "Avoid spraying after larvae mature and seal their bags, because the tightly closed bags block insecticide contact.",
    ],
    recoveryTimeline:
      "Evergreens recover slowly and may not refill dead branch areas, so early control before defoliation is essential.",
    prevention: [
      "Handpick and destroy overwintering bags each winter to eliminate the eggs before the next generation hatches.",
      "Inspect evergreens each early summer and treat young larvae before defoliation becomes severe.",
    ],
    monitoringThresholds: [
      "Treat when small larvae and new bags are found feeding, since evergreen defoliation may be permanent.",
    ],
    escalationCriteria: [
      "Consult an arborist for heavily infested valuable conifers, since severe defoliation can kill evergreen branches.",
    ],
    sources: [
      {
        label: "University of Maryland Extension Bagworms",
        url: "https://extension.umd.edu/resource/bagworms-trees-and-shrubs/",
      },
    ],
  },
  {
    id: "cutworms-seedlings",
    name: "Cutworms",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden", "lawns-turf"],
    specificHosts: ["Tomato", "Cabbage", "Corn", "Pepper", "Bean"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["stem base", "soil surface", "roots"],
    symptomProgression:
      "Night-feeding caterpillars sever young transplants and seedlings at or near the soil line, leaving cut stems lying beside the plant while later stages may climb to feed on foliage.",
    observableSigns: [
      "Young seedlings are clipped off at the soil surface overnight and lie toppled beside the intact roots.",
      "Fat gray or brown caterpillars curl into a tight C when unearthed just below the soil near cut plants.",
    ],
    favorableConditions: [
      "Beds with abundant weeds or recently turned sod and moist spring soil favor cutworm populations near seedlings.",
    ],
    lookalikes: [
      {
        condition: "Damping-off fungus",
        differentiator:
          "Damping-off collapses seedlings with pinched rotted stems rather than the clean cut severing that cutworms leave.",
      },
      {
        condition: "Rabbit or bird feeding",
        differentiator:
          "Animals nibble tops and leave chewed remnants, while cutworms sever stems at the base with plants left toppled.",
      },
    ],
    immediateActions: [
      "Dig around cut plants after dark or at dawn today to find and destroy the curled caterpillars in the soil.",
      "Place protective collars of cardboard or foil around remaining transplant stems to block cutworm access tonight.",
    ],
    treatments: [
      {
        situation: "Transplant protection",
        treatment:
          "Set collars around each stem pushed an inch into the soil and handpick cutworms during evening patrols.",
      },
      {
        situation: "Heavy pressure",
        treatment:
          "Apply Bacillus thuringiensis kurstaki bait or a labeled soil insecticide around the base of susceptible seedlings.",
      },
    ],
    avoid: [
      "Avoid planting into freshly turned sod or heavily weeded ground where cutworm larvae are already concentrated.",
    ],
    recoveryTimeline:
      "Once cutworms are controlled and collars are in place, surviving transplants resume growth within a week or so.",
    prevention: [
      "Clear weeds and till beds a couple of weeks before planting to expose and reduce resident cutworms.",
      "Install stem collars on transplants and keep the area weed-free to deny cutworms cover and food.",
    ],
    monitoringThresholds: [
      "Act at the first sign of clipped seedlings, since a few cutworms can destroy a whole row of transplants overnight.",
    ],
    escalationCriteria: [
      "Investigate soil pests further and consider baiting if losses continue despite collars and handpicking.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Cutworms",
        url: "https://extension.umn.edu/yard-and-garden-insects/cutworms",
      },
    ],
  },
  {
    id: "armyworms-turf-vegetable",
    name: "Armyworms",
    category: "insect-pest",
    affectedPlants: ["lawns-turf", "vegetable-garden"],
    specificHosts: ["Bermudagrass", "Fescue", "Corn", "Bean", "Lettuce"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["leaf blades", "turf surface", "whole plants"],
    symptomProgression:
      "Caterpillars feed in large numbers and advance across turf or crops like an army, chewing foliage and moving en masse so that damaged areas expand rapidly and can be stripped within days.",
    observableSigns: [
      "Large numbers of striped caterpillars feed together and move in a front across lawn or crop foliage.",
      "Grass or leaves are chewed down quickly in expanding patches, and birds gather to feed on the caterpillars.",
    ],
    favorableConditions: [
      "Warm weather and successive moth flights, especially fall armyworm migrations, favor sudden explosive outbreaks.",
    ],
    lookalikes: [
      {
        condition: "Sod webworm",
        differentiator:
          "Sod webworms make silk-lined burrows and feed at night individually, unlike armyworms that mass and advance across turf.",
      },
      {
        condition: "Drought stress in turf",
        differentiator:
          "Drought browning lacks chewed leaf edges and caterpillars, while armyworm damage shows notched, eaten blades.",
      },
    ],
    immediateActions: [
      "Scout the leading edge of damage today and confirm the striped caterpillars before the front advances further.",
      "Mow and remove clippings from infested turf and handpick where practical to reduce the feeding mass immediately.",
    ],
    treatments: [
      {
        situation: "Turf outbreak",
        treatment:
          "Apply a labeled turf insecticide or Bacillus thuringiensis to the infested area and its advancing margin promptly.",
      },
      {
        situation: "Vegetable crops",
        treatment:
          "Spray spinosad or Bt on foliage while larvae are small and treat the advancing edge to halt spread.",
      },
    ],
    avoid: [
      "Avoid delaying treatment, because armyworms mature quickly and a small colony can strip large areas within days.",
    ],
    recoveryTimeline:
      "Well-watered turf and vigorous crops usually regrow within one to two weeks after the caterpillars are controlled.",
    prevention: [
      "Monitor for moth flights and scout turf edges regularly during warm months to catch outbreaks early.",
      "Maintain healthy, properly watered turf and crops that recover quickly and tolerate light feeding better.",
    ],
    monitoringThresholds: [
      "Treat turf when several caterpillars per square foot are found, and crops when small larvae appear on many plants.",
    ],
    escalationCriteria: [
      "Contact extension during regional armyworm migrations when repeated waves threaten large plantings.",
    ],
    sources: [
      {
        label: "University of Georgia Extension Fall Armyworm",
        url: "https://extension.uga.edu/publications/detail.html?number=C1153",
      },
    ],
  },
  {
    id: "corn-earworm",
    name: "Corn Earworm",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Sweet corn", "Tomato", "Bean", "Pepper", "Okra"],
    growthStages: ["flowering", "fruiting"],
    symptomLocations: ["ear tips", "silks", "fruit", "pods"],
    symptomProgression:
      "Moths lay eggs on fresh silks and hatching larvae tunnel down into the ear tip, feeding on kernels and fouling them with frass, and on tomatoes larvae bore directly into developing fruit.",
    observableSigns: [
      "Caterpillars feed inside the tip of the corn ear, leaving chewed kernels and moist frass under the husk.",
      "On tomatoes and peppers, larvae bore round entry holes into fruit and hollow out the interior with frass.",
    ],
    favorableConditions: [
      "Warm summers and continuous moth flights during silking favor heavy corn earworm infestation of ears and fruit.",
    ],
    lookalikes: [
      {
        condition: "European corn borer",
        differentiator:
          "Corn borer tunnels into stalks and mid-ear with entry holes on the shank, unlike earworm feeding concentrated at the ear tip.",
      },
      {
        condition: "Sap beetle damage",
        differentiator:
          "Sap beetles invade previously damaged or overripe ears, whereas earworm larvae initiate the tunneling at the silk end.",
      },
    ],
    immediateActions: [
      "Apply a few drops of vegetable oil to the silk channel of each ear today to smother young larvae as they enter.",
      "Inspect and cut away damaged ear tips at harvest to salvage the undamaged kernels below.",
    ],
    treatments: [
      {
        situation: "Organic sweet corn",
        treatment:
          "Treat fresh silks with Bacillus thuringiensis or a vegetable oil and Bt mixture applied directly into the silk channel.",
      },
      {
        situation: "Tomato and pepper crops",
        treatment:
          "Spray Bt or spinosad on developing fruit clusters during moth flights and remove and destroy infested fruit.",
      },
    ],
    avoid: [
      "Avoid waiting until larvae are deep inside ears or fruit, since they are then protected from any spray.",
    ],
    recoveryTimeline:
      "Damaged ears and fruit cannot recover, but timely silk treatment protects later-maturing ears through the season.",
    prevention: [
      "Plant early to escape peak moth flights and choose sweet corn varieties with tight husk tip coverage.",
      "Monitor with pheromone traps and treat silks promptly when moth activity and egg-laying increase.",
    ],
    monitoringThresholds: [
      "Begin silk treatments as soon as moth flights are detected, reapplying every few days while silks remain fresh.",
    ],
    escalationCriteria: [
      "Seek extension guidance for large plantings where trap counts stay high despite repeated silk treatments.",
    ],
    sources: [
      {
        label: "UC IPM Corn Earworm",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7498.html",
      },
    ],
  },
  {
    id: "codling-moth-apple",
    name: "Codling Moth (Apple and Pear)",
    category: "insect-pest",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Apple", "Pear", "Quince", "Crabapple", "Walnut"],
    growthStages: ["fruiting"],
    symptomLocations: ["fruit", "fruit core", "calyx end"],
    symptomProgression:
      "Larvae hatch and tunnel through the fruit skin toward the core to feed on seeds, leaving frass-filled entry holes and creating the classic wormy apple that drops prematurely or rots.",
    observableSigns: [
      "Fruit shows entry holes plugged with reddish-brown crumbly frass, often at the calyx or where two fruits touch.",
      "Cutting the fruit reveals tunnels boring toward the core with a pinkish caterpillar feeding on the seeds.",
    ],
    favorableConditions: [
      "Warm springs and summers with multiple codling moth generations and nearby untended fruit trees favor heavy infestation.",
    ],
    lookalikes: [
      {
        condition: "Apple maggot",
        differentiator:
          "Apple maggot makes winding brown trails throughout the flesh, unlike codling moth's single frass-filled tunnel to the core.",
      },
      {
        condition: "Plum curculio",
        differentiator:
          "Plum curculio leaves crescent-shaped egg-laying scars on young fruit rather than the round frass-plugged entry of codling moth.",
      },
    ],
    immediateActions: [
      "Remove and destroy all dropped and infested fruit today to prevent larvae from completing development on the ground.",
      "Wrap trunks with cardboard bands to trap larvae seeking pupation sites and check them regularly.",
    ],
    treatments: [
      {
        situation: "Home orchard",
        treatment:
          "Bag individual fruit or apply kaolin clay and time sprays of spinosad using degree-day or trap-based guidance.",
      },
      {
        situation: "Population monitoring",
        treatment:
          "Hang pheromone traps to time treatments precisely and consider mating disruption in larger plantings.",
      },
    ],
    avoid: [
      "Avoid leaving fallen or infested fruit on the ground, since it lets larvae mature and sustain the next generation.",
    ],
    recoveryTimeline:
      "Damaged fruit cannot be salvaged, but sanitation and well-timed treatment steadily reduce damage over one to two seasons.",
    prevention: [
      "Practice strict sanitation by removing dropped fruit and using trunk bands and fruit bagging on backyard trees.",
      "Monitor with pheromone traps to time controls and remove abandoned host trees nearby that harbor the moth.",
    ],
    monitoringThresholds: [
      "Begin control when trap catches indicate egg-laying and reapply according to degree-day accumulation for each generation.",
    ],
    escalationCriteria: [
      "Consult extension for a spray schedule or mating disruption if damage stays high despite sanitation and bagging.",
    ],
    sources: [
      {
        label: "UC IPM Codling Moth",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7412.html",
      },
    ],
  },
  {
    id: "squash-vine-borer",
    name: "Squash Vine Borer",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Zucchini", "Pumpkin", "Winter squash", "Gourd", "Summer squash"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["stem base", "main vine", "crown"],
    symptomProgression:
      "A larva bores into the base of the vine and tunnels inside, and as it feeds the plant suddenly wilts, the stem oozes sawdust-like frass, and vines can collapse and die despite adequate soil moisture.",
    observableSigns: [
      "The plant wilts suddenly, often on a hot day, even though the soil is moist and other plants are fine.",
      "The stem base shows a hole exuding moist yellow-green sawdust-like frass where the larva is tunneling inside.",
    ],
    favorableConditions: [
      "Early summer when clear-winged adult moths lay eggs at the vine base of squash and pumpkins favors borer attack.",
    ],
    lookalikes: [
      {
        condition: "Bacterial wilt",
        differentiator:
          "Bacterial wilt yields a sticky ooze that strings out when a cut stem is pressed, without the frass hole of a borer.",
      },
      {
        condition: "Fusarium crown rot",
        differentiator:
          "Crown rot discolors and rots the stem tissue gradually rather than leaving the round frass-filled borer entry hole.",
      },
    ],
    immediateActions: [
      "Slit the stem lengthwise at the frass hole today, remove and kill the larva, then bury the stem to reroot.",
      "Mound moist soil over healthy vine nodes so the plant can form supplemental roots and survive the injury.",
    ],
    treatments: [
      {
        situation: "Preventive protection",
        treatment:
          "Wrap or cover the lower stem and apply Bacillus thuringiensis or spinosad to the crown during the egg-laying period.",
      },
      {
        situation: "Active borer",
        treatment:
          "Perform surgery to extract the larva and inject Bt into the stem, then mound soil to encourage new rooting.",
      },
    ],
    avoid: [
      "Avoid leaving old squash vines and debris in the garden, which shelter overwintering pupae for next year's borers.",
    ],
    recoveryTimeline:
      "Plants that reroot at buried nodes may recover over a few weeks, but heavily bored vines often cannot be saved.",
    prevention: [
      "Use row covers until flowering, wrap stem bases, and time plantings to avoid the peak moth flight period.",
      "Remove and destroy infested vines at season end and rotate cucurbits to disrupt the borer life cycle.",
    ],
    monitoringThresholds: [
      "Watch for the orange-and-black moths and frass at stem bases in early summer and act at the first sign of wilting.",
    ],
    escalationCriteria: [
      "Consider succession plantings or resistant butternut-type squash if borers repeatedly destroy your crop each year.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Squash Vine Borer",
        url: "https://extension.umn.edu/yard-and-garden-insects/squash-vine-borers",
      },
    ],
  },
  {
    id: "japanese-beetle",
    name: "Japanese Beetle",
    category: "insect-pest",
    affectedPlants: ["ornamentals", "fruit-trees", "vegetable-garden", "lawns-turf"],
    specificHosts: ["Rose", "Grape", "Linden", "Raspberry", "Zinnia"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaves", "flowers", "fruit"],
    symptomProgression:
      "Adults feed in groups and skeletonize leaves between the veins, chewing flowers and fruit, and their aggregation pheromone draws ever more beetles so damage escalates rapidly during their summer flight.",
    observableSigns: [
      "Metallic green and copper beetles cluster on foliage and flowers, feeding in the open during warm afternoons.",
      "Leaves are skeletonized to a lacy network of veins, and flowers and fruit are chewed and ragged.",
    ],
    favorableConditions: [
      "Warm summer weather, irrigated lawns where grubs develop, and preferred flowering hosts favor heavy beetle aggregations.",
    ],
    lookalikes: [
      {
        condition: "Rose chafer",
        differentiator:
          "Rose chafers are tan and long-legged and appear earlier, unlike the metallic green Japanese beetles of midsummer.",
      },
      {
        condition: "Grasshopper feeding",
        differentiator:
          "Grasshoppers chew ragged holes through the whole leaf rather than skeletonizing tissue between the veins.",
      },
    ],
    immediateActions: [
      "Handpick beetles into soapy water in the early morning when they are sluggish and easy to knock off plants.",
      "Cover prized plants with fine netting today to keep aggregating beetles from landing and feeding.",
    ],
    treatments: [
      {
        situation: "Small plantings",
        treatment:
          "Continue daily handpicking and apply neem oil as an antifeedant to reduce aggregation on valued plants.",
      },
      {
        situation: "Turf grub reduction",
        treatment:
          "Apply beneficial nematodes or milky spore to lawns and time a labeled grub control to lower local beetle emergence.",
      },
    ],
    avoid: [
      "Avoid hanging pheromone traps near your garden, because they attract far more beetles than they capture.",
    ],
    recoveryTimeline:
      "Feeding stops when the adult flight ends in late summer, and vigorous plants push out fresh growth afterward.",
    prevention: [
      "Handpick early and often to interrupt the aggregation pheromone that recruits additional beetles to the plant.",
      "Manage lawn grubs with nematodes or milky spore to reduce the local population emerging as adults each year.",
    ],
    monitoringThresholds: [
      "Begin handpicking at the first beetles, since early feeding releases pheromones that rapidly attract many more.",
    ],
    escalationCriteria: [
      "Consider professional grub management if lawns consistently produce heavy beetle emergence damaging the landscape.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Japanese Beetles",
        url: "https://extension.umn.edu/yard-and-garden-insects/japanese-beetles",
      },
    ],
  },
  {
    id: "flea-beetles",
    name: "Flea Beetles",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Eggplant", "Arugula", "Radish", "Potato", "Tomato"],
    growthStages: ["seed-seedling", "vegetative"],
    symptomLocations: ["leaves", "leaf surface", "seedling foliage"],
    symptomProgression:
      "Tiny beetles chew numerous small round holes in leaves giving a shot-hole appearance, and heavy early feeding on seedlings can stunt or kill young plants and slow establishment.",
    observableSigns: [
      "Leaves are peppered with many tiny round shot holes, especially on young seedlings and tender foliage.",
      "Small dark beetles jump like fleas off the leaves when the plant is approached or disturbed.",
    ],
    favorableConditions: [
      "Warm dry spring weather and nearby weedy or previously cropped ground favor early flea beetle pressure on seedlings.",
    ],
    lookalikes: [
      {
        condition: "Slug feeding",
        differentiator:
          "Slugs leave larger irregular holes and slime trails, unlike the tiny uniform shot holes and jumping flea beetles.",
      },
      {
        condition: "Downy mildew spotting",
        differentiator:
          "Mildew produces angular yellow lesions with fungal growth rather than clean chewed holes and mobile beetles.",
      },
    ],
    immediateActions: [
      "Cover seedlings with floating row cover today to physically exclude flea beetles during the vulnerable early stage.",
      "Dust plants with kaolin clay or knock beetles onto a sticky trap to reduce feeding immediately.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply kaolin clay or spinosad to protect foliage and use yellow sticky traps to capture the jumping adults.",
      },
      {
        situation: "Seedling protection",
        treatment:
          "Keep floating row covers in place from transplanting and remove crop-family weeds that host flea beetles nearby.",
      },
    ],
    avoid: [
      "Avoid transplanting into weedy beds near last year's crop residue, which harbors overwintering flea beetles.",
    ],
    recoveryTimeline:
      "Established plants outgrow shot-hole damage within a couple of weeks once beetles are excluded or controlled.",
    prevention: [
      "Use row covers on seedlings, delay planting past peak emergence, and clean up crop residue and weeds.",
      "Rotate susceptible crops away from previous locations to break the flea beetle overwintering cycle.",
    ],
    monitoringThresholds: [
      "Protect seedlings at the first shot holes, since young plants are far more vulnerable than established ones.",
    ],
    escalationCriteria: [
      "Seek extension advice if flea beetles repeatedly destroy seedlings despite row covers and rotation.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Flea Beetles",
        url: "https://extension.umn.edu/yard-and-garden-insects/flea-beetles",
      },
    ],
  },
  {
    id: "colorado-potato-beetle",
    name: "Colorado Potato Beetle",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Potato", "Eggplant", "Tomato", "Pepper", "Tomatillo"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["leaves", "leaf undersides", "growing tips"],
    symptomProgression:
      "Both adults and humpbacked red larvae feed voraciously on potato and eggplant foliage, defoliating plants from the top down and, if uncontrolled, stripping plants completely and reducing yields sharply.",
    observableSigns: [
      "Rounded yellow-and-black striped beetles and plump red larvae with black spots feed together on foliage.",
      "Clusters of bright orange-yellow eggs sit on leaf undersides, and plants are rapidly defoliated where larvae feed.",
    ],
    favorableConditions: [
      "Warm weather and continuous solanaceous crops in the same ground favor rapid multi-generation beetle buildup.",
    ],
    lookalikes: [
      {
        condition: "False potato beetle",
        differentiator:
          "The false potato beetle has alternating white and black stripes and does not seriously damage potato foliage.",
      },
      {
        condition: "Lady beetle larvae",
        differentiator:
          "Lady beetle larvae are alligator-shaped predators, unlike the plump humpbacked red potato beetle larvae that eat leaves.",
      },
    ],
    immediateActions: [
      "Handpick adults, larvae, and crush orange egg clusters on leaf undersides today to knock back the population.",
      "Shake beetles onto a tarp in the cool morning and drop them into soapy water for quick removal.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply spinosad or Bacillus thuringiensis tenebrionis to young larvae and continue handpicking adults and eggs.",
      },
      {
        situation: "Resistance management",
        treatment:
          "Rotate insecticide modes of action and rotate crops away from solanaceous ground to slow resistance and rebound.",
      },
    ],
    avoid: [
      "Avoid repeatedly using the same insecticide, because this beetle is notorious for developing rapid resistance.",
    ],
    recoveryTimeline:
      "Vigorous plants recover foliage within a couple of weeks if defoliation is halted before flowering and tuber set.",
    prevention: [
      "Rotate potatoes and eggplant to distant beds each year and use straw mulch to hinder overwintered adults.",
      "Scout leaf undersides for egg clusters and remove early adults before larvae hatch and defoliate plants.",
    ],
    monitoringThresholds: [
      "Treat when defoliation approaches a fifth of the canopy or egg masses and larvae appear on many plants.",
    ],
    escalationCriteria: [
      "Consult extension for a resistance-management program if beetles rebound quickly after each treatment.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Colorado Potato Beetle",
        url: "https://extension.umn.edu/yard-and-garden-insects/colorado-potato-beetles",
      },
    ],
  },
  {
    id: "cucumber-beetles",
    name: "Cucumber Beetles",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Cucumber", "Squash", "Melon", "Pumpkin", "Zucchini"],
    growthStages: ["seed-seedling", "vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaves", "flowers", "stems", "roots"],
    symptomProgression:
      "Striped or spotted beetles chew seedlings, foliage, and flowers while transmitting bacterial wilt, so plants may be defoliated early and later collapse from wilt spread by beetle feeding.",
    observableSigns: [
      "Yellow beetles with black stripes or spots feed on cucurbit leaves, flowers, and young stems.",
      "Seedlings are chewed and stunted, and vines may later wilt and die from bacterial wilt the beetles transmit.",
    ],
    favorableConditions: [
      "Warm weather at cucurbit emergence and nearby overwintering sites favor early beetle attack and wilt transmission.",
    ],
    lookalikes: [
      {
        condition: "Western corn rootworm beetle",
        differentiator:
          "The corn rootworm beetle is similar but prefers corn silks, while cucumber beetles concentrate on cucurbit foliage and flowers.",
      },
      {
        condition: "Squash bug feeding",
        differentiator:
          "Squash bugs are flat gray sap-suckers causing wilting speckles, unlike the chewing striped or spotted cucumber beetles.",
      },
    ],
    immediateActions: [
      "Cover seedlings with row cover today to exclude beetles during the most vulnerable early growth stage.",
      "Handpick and knock beetles into soapy water and remove badly chewed seedlings that are collapsing.",
    ],
    treatments: [
      {
        situation: "Seedling stage",
        treatment:
          "Keep floating row covers on until flowering, then remove for pollination, and apply kaolin clay as a deterrent.",
      },
      {
        situation: "Active feeding",
        treatment:
          "Spot-treat with spinosad or a labeled insecticide in the evening to avoid harming pollinators on the blooms.",
      },
    ],
    avoid: [
      "Avoid leaving row covers on during flowering, since bees must reach the blooms to pollinate cucurbit fruit.",
    ],
    recoveryTimeline:
      "Uninfected plants recover from feeding within a couple of weeks, but wilt-infected vines usually decline and cannot recover.",
    prevention: [
      "Use row covers early, choose wilt-tolerant varieties, and rotate cucurbits away from prior planting sites.",
      "Delay planting past peak beetle emergence and remove crop debris that shelters overwintering beetles.",
    ],
    monitoringThresholds: [
      "Protect seedlings at the first beetles, since even a few can transmit bacterial wilt to young cucurbits.",
    ],
    escalationCriteria: [
      "Consider wilt-resistant cultivars and stricter exclusion if bacterial wilt repeatedly destroys the crop.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Cucumber Beetles",
        url: "https://extension.umn.edu/yard-and-garden-insects/striped-cucumber-beetles",
      },
    ],
  },
  {
    id: "emerald-ash-borer",
    name: "Emerald Ash Borer",
    category: "insect-pest",
    affectedPlants: ["trees-shrubs"],
    specificHosts: ["Green ash", "White ash", "Black ash", "Blue ash", "Fringetree"],
    growthStages: ["mature"],
    symptomLocations: ["trunk", "branches", "canopy", "bark"],
    symptomProgression:
      "Larvae feed under the bark in serpentine galleries that girdle the tree, causing progressive canopy dieback from the top down, epicormic sprouting, and death of the ash within a few years of infestation.",
    observableSigns: [
      "Distinctive D-shaped exit holes appear in the bark and serpentine larval galleries score the wood beneath.",
      "The upper canopy thins and dies back, woodpeckers strip bark to reach larvae, and sprouts erupt on the trunk.",
    ],
    favorableConditions: [
      "Presence of ash trees within the known infested range and movement of infested firewood favor emerald ash borer spread.",
    ],
    lookalikes: [
      {
        condition: "Ash decline or drought",
        differentiator:
          "General decline lacks the D-shaped exit holes and S-shaped galleries that are diagnostic of emerald ash borer.",
      },
      {
        condition: "Native borers",
        differentiator:
          "Native borers leave round or oval exit holes, unlike the characteristic narrow D-shaped hole of the emerald ash borer.",
      },
    ],
    immediateActions: [
      "Confirm the tree is an ash and look for D-shaped exit holes and canopy dieback to assess infestation today.",
      "Do not move ash firewood off site, since this is a primary way the borer spreads to new areas.",
    ],
    treatments: [
      {
        situation: "High-value healthy tree",
        treatment:
          "Have a professional apply systemic emamectin benzoate trunk injections on a preventive multi-year schedule.",
      },
      {
        situation: "Heavily declined tree",
        treatment:
          "Remove and properly dispose of severely infested trees that are unsafe and beyond effective treatment.",
      },
    ],
    avoid: [
      "Avoid transporting ash firewood or nursery stock, which spreads the borer to previously uninfested regions.",
    ],
    recoveryTimeline:
      "Untreated infested ash typically die within two to four years, whereas early-treated healthy trees can be protected long term.",
    prevention: [
      "Begin preventive systemic treatment of valued ash before infestation when the borer is confirmed nearby.",
      "Buy and burn firewood locally and report suspected infestations to help slow regional spread.",
    ],
    monitoringThresholds: [
      "Inspect ash annually for canopy dieback and exit holes and begin treatment decisions once the borer is confirmed nearby.",
    ],
    escalationCriteria: [
      "Hire a certified arborist to evaluate treatment or removal as soon as emerald ash borer is confirmed on the tree.",
    ],
    sources: [
      {
        label: "USDA APHIS Emerald Ash Borer",
        url: "https://www.aphis.usda.gov/plant-pests-diseases/emerald-ash-borer",
      },
    ],
  },
  {
    id: "bark-beetles-conifers",
    name: "Bark Beetles (Conifers)",
    category: "insect-pest",
    affectedPlants: ["trees-shrubs"],
    specificHosts: ["Pine", "Spruce", "Fir", "Douglas-fir", "Cedar"],
    growthStages: ["mature"],
    symptomLocations: ["trunk", "bark", "canopy"],
    symptomProgression:
      "Beetles bore through the bark to lay eggs, and larval galleries plus introduced fungi disrupt the tree's vascular system, so the crown fades from green to yellow to red-brown and the tree dies.",
    observableSigns: [
      "Popcorn-like pitch tubes and reddish-brown boring dust collect on the bark and in bark crevices along the trunk.",
      "The crown fades progressively to yellow then red, and removing bark reveals winding engraved larval galleries.",
    ],
    favorableConditions: [
      "Drought-stressed, crowded, or injured conifers and warm dry seasons favor successful bark beetle mass attacks.",
    ],
    lookalikes: [
      {
        condition: "Root disease decline",
        differentiator:
          "Root disease causes gradual thinning without the pitch tubes, boring dust, and engraved galleries of bark beetles.",
      },
      {
        condition: "Lightning or drought scorch",
        differentiator:
          "Abiotic scorch lacks the entry holes, frass, and beetle galleries that confirm an active bark beetle attack.",
      },
    ],
    immediateActions: [
      "Water drought-stressed conifers deeply today to improve their resin defenses against attacking beetles.",
      "Remove and properly dispose of freshly infested trees promptly to prevent beetles from emerging and spreading.",
    ],
    treatments: [
      {
        situation: "High-value healthy tree",
        treatment:
          "Apply preventive labeled trunk sprays before the flight period and keep the tree vigorous and well watered.",
      },
      {
        situation: "Infested tree",
        treatment:
          "Fell and remove or debark infested trees before adult emergence, since attacked trees rarely recover.",
      },
    ],
    avoid: [
      "Avoid stacking fresh infested logs near living conifers, because emerging beetles readily attack neighboring trees.",
    ],
    recoveryTimeline:
      "Successfully mass-attacked conifers cannot be saved and die within months, so prevention on healthy trees is the priority.",
    prevention: [
      "Keep conifers vigorous with proper spacing and irrigation during drought to sustain resin defenses.",
      "Promptly remove dying trees and avoid wounding bark or stacking green wood near valued conifers.",
    ],
    monitoringThresholds: [
      "Inspect trunks for pitch tubes and boring dust during drought and warm months and act before beetles emerge.",
    ],
    escalationCriteria: [
      "Engage a forester or arborist when multiple conifers are attacked or a valued tree shows fresh pitch tubes.",
    ],
    sources: [
      {
        label: "UC IPM Bark Beetles",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7421.html",
      },
    ],
  },
  {
    id: "black-vine-weevil",
    name: "Black Vine Weevil",
    category: "insect-pest",
    affectedPlants: ["ornamentals", "trees-shrubs", "berries", "houseplants"],
    specificHosts: ["Rhododendron", "Yew", "Euonymus", "Strawberry", "Heuchera"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["leaf margins", "roots", "root crown"],
    symptomProgression:
      "Adults notch leaf margins at night while the far more damaging larvae feed on roots and girdle the crown, causing plants to wilt, decline, and sometimes collapse from severe root loss.",
    observableSigns: [
      "Leaf margins show characteristic C-shaped notches chewed by the night-feeding adult weevils.",
      "Plants wilt and decline as legless white grubs feed on the roots and girdle the crown below the soil line.",
    ],
    favorableConditions: [
      "Container plantings, mulched beds, and moist soils around broadleaf evergreens favor black vine weevil larvae.",
    ],
    lookalikes: [
      {
        condition: "Winter cold leaf damage",
        differentiator:
          "Cold injury browns leaf edges evenly, unlike the discrete C-shaped marginal notches left by feeding weevils.",
      },
      {
        condition: "Root rot",
        differentiator:
          "Root rot leaves dark mushy roots, whereas weevil larvae leave chewed roots and the crown girdled and gnawed.",
      },
    ],
    immediateActions: [
      "Inspect leaf margins for notching and check the root zone today for the white legless grubs to confirm the pest.",
      "Handpick adult weevils from foliage at night with a flashlight and shake them onto a cloth beneath the plant.",
    ],
    treatments: [
      {
        situation: "Larval control",
        treatment:
          "Apply beneficial nematodes to moist soil in late summer to target the destructive root-feeding larvae.",
      },
      {
        situation: "Adult control",
        treatment:
          "Treat foliage with a labeled insecticide in the evening during adult activity and continue nighttime handpicking.",
      },
    ],
    avoid: [
      "Avoid ignoring the root-feeding larvae, since adult leaf notching alone underestimates the real damage below ground.",
    ],
    recoveryTimeline:
      "Plants with moderate root damage recover over a season once larvae are controlled and roots regrow.",
    prevention: [
      "Apply beneficial nematodes preventively to susceptible plantings and inspect new nursery stock for larvae.",
      "Avoid overwatering containers and remove debris that shelters adult weevils around susceptible shrubs.",
    ],
    monitoringThresholds: [
      "Treat soil with nematodes when leaf notching appears, since notching signals larvae are likely feeding on roots.",
    ],
    escalationCriteria: [
      "Seek diagnosis if valued shrubs decline severely despite treatment, to rule out combined root pests and disease.",
    ],
    sources: [
      {
        label: "UC IPM Black Vine Weevil",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7412.html",
      },
    ],
  },
  {
    id: "rose-chafer",
    name: "Rose Chafer",
    category: "insect-pest",
    affectedPlants: ["ornamentals", "berries", "fruit-trees"],
    specificHosts: ["Rose", "Grape", "Peony", "Raspberry", "Apple"],
    growthStages: ["flowering", "fruiting"],
    symptomLocations: ["flowers", "leaves", "fruit"],
    symptomProgression:
      "Tan long-legged beetles emerge in early summer, especially near sandy soils, and feed in groups on blossoms and foliage, skeletonizing leaves and shredding flowers over their several-week adult period.",
    observableSigns: [
      "Slender tan beetles with long spiny legs cluster on flowers and leaves during early summer.",
      "Blossoms are chewed and ragged and leaves are skeletonized between the veins where beetles feed in groups.",
    ],
    favorableConditions: [
      "Sandy soils where larvae develop and warm early summer weather favor concentrated rose chafer emergence.",
    ],
    lookalikes: [
      {
        condition: "Japanese beetle",
        differentiator:
          "Japanese beetles are metallic green and appear later, unlike the earlier tan long-legged rose chafers.",
      },
      {
        condition: "Rose slug",
        differentiator:
          "Rose slug sawfly larvae windowpane the leaves without chewing flowers, unlike the beetles that shred blossoms.",
      },
    ],
    immediateActions: [
      "Handpick the beetles into soapy water in the cool morning while they are clustered and sluggish today.",
      "Cover prized roses and small fruit with netting to keep emerging beetles from reaching the blooms.",
    ],
    treatments: [
      {
        situation: "Small plantings",
        treatment:
          "Continue handpicking and use fine netting on valued plants, since the adult period lasts only a few weeks.",
      },
      {
        situation: "Heavy pressure",
        treatment:
          "Apply a labeled insecticide during peak emergence, taking care to protect pollinators on open blooms.",
      },
    ],
    avoid: [
      "Avoid spraying open flowers during the day when bees are foraging, to protect pollinators from insecticides.",
    ],
    recoveryTimeline:
      "Feeding ends when the short adult flight finishes in early summer, and plants recover with fresh growth afterward.",
    prevention: [
      "Use netting on valued plants during the brief emergence window and handpick beetles as they appear.",
      "Note that rose chafer numbers are tied to nearby sandy soils, so anticipate emergence in those settings.",
    ],
    monitoringThresholds: [
      "Begin handpicking or netting at first emergence, since beetles aggregate quickly on preferred blossoms.",
    ],
    escalationCriteria: [
      "Consider a labeled treatment only if handpicking and netting cannot keep pace during a very heavy emergence.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Rose Chafers",
        url: "https://extension.umn.edu/yard-and-garden-insects/rose-chafers",
      },
    ],
  },
  {
    id: "asparagus-beetle",
    name: "Asparagus Beetle",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Asparagus"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["spears", "ferns", "stems"],
    symptomProgression:
      "Adults and larvae feed on spears and ferns, chewing and scarring emerging spears in spring and defoliating the summer fern, which weakens the crown and reduces the following season's harvest.",
    observableSigns: [
      "Blue-black beetles with cream spots or red-and-black spotted beetles feed on spears and fern foliage.",
      "Dark eggs stand on end in rows glued to spears, and gray larvae strip the fern leaving bare stems.",
    ],
    favorableConditions: [
      "Warm spring weather at spear emergence and old fern debris that shelters overwintering adults favor beetle buildup.",
    ],
    lookalikes: [
      {
        condition: "Spotted cucumber beetle",
        differentiator:
          "The spotted cucumber beetle prefers cucurbits and corn, whereas asparagus beetles are found specifically on asparagus.",
      },
      {
        condition: "Frost injury to spears",
        differentiator:
          "Frost damage softens and browns spear tips without the chewing scars, eggs, and beetles of an infestation.",
      },
    ],
    immediateActions: [
      "Handpick beetles and rub off the dark upright eggs from spears today to reduce the breeding population.",
      "Harvest spears frequently and promptly, which removes eggs and reduces feeding sites during the season.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Handpick regularly, encourage lady beetles that eat the eggs, and apply spinosad if larvae become numerous.",
      },
      {
        situation: "Fern stage",
        treatment:
          "Spray a labeled insecticide on the summer fern if defoliation is heavy to protect crown vigor for next year.",
      },
    ],
    avoid: [
      "Avoid leaving old fern stalks standing over winter, since they shelter the overwintering adult beetles.",
    ],
    recoveryTimeline:
      "The fern regrows and the crown recovers vigor over the season once beetle feeding is controlled by summer.",
    prevention: [
      "Cut and remove old ferns in fall to eliminate overwintering shelter for the adult beetles.",
      "Harvest spears frequently in spring and encourage natural enemies that consume the eggs and larvae.",
    ],
    monitoringThresholds: [
      "Handpick when beetles or egg rows appear on spears, and treat the fern when larval defoliation grows heavy.",
    ],
    escalationCriteria: [
      "Seek extension guidance if beetle pressure persistently weakens the crown and reduces spear yield year after year.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Asparagus Beetle",
        url: "https://extension.umn.edu/yard-and-garden-insects/asparagus-beetles",
      },
    ],
  },
  {
    id: "squash-bug",
    name: "Squash Bug",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Squash", "Pumpkin", "Zucchini", "Gourd", "Melon"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaves", "leaf undersides", "stems", "crown"],
    symptomProgression:
      "Adults and gray nymphs suck sap from leaves and stems, causing yellow speckling that turns brown and wilted, and heavy feeding on young plants or vine bases can cause rapid wilting and plant death.",
    observableSigns: [
      "Flat brownish-gray shield-shaped bugs and clusters of gray soft-bodied nymphs gather on leaf undersides and stems.",
      "Bronze-brown egg clusters sit in the V of leaf veins, and leaves develop yellow speckling that browns and wilts.",
    ],
    favorableConditions: [
      "Warm summers, crop debris, and mulch that shelters overwintering adults favor persistent squash bug pressure.",
    ],
    lookalikes: [
      {
        condition: "Stink bug",
        differentiator:
          "Stink bugs are broader with a rounded shield and feed on fruit, while squash bugs are narrower and cluster on cucurbit stems.",
      },
      {
        condition: "Bacterial wilt",
        differentiator:
          "Bacterial wilt collapses whole vines with sticky sap, unlike the speckled yellowing tied to squash bug feeding clusters.",
      },
    ],
    immediateActions: [
      "Crush the bronze egg clusters on leaf undersides and handpick adults and nymphs into soapy water today.",
      "Lay a board near the plants overnight and destroy the bugs that gather beneath it each morning.",
    ],
    treatments: [
      {
        situation: "Egg and nymph stage",
        treatment:
          "Scrape off egg clusters and treat young nymphs with insecticidal soap or spinosad on leaf undersides.",
      },
      {
        situation: "Heavy infestation",
        treatment:
          "Apply a labeled insecticide in the evening targeting nymphs, since adults are far harder to kill with sprays.",
      },
    ],
    avoid: [
      "Avoid heavy loose mulch and crop debris near squash, since they provide prime shelter for overwintering adults.",
    ],
    recoveryTimeline:
      "Young vigorous plants recover once feeding is reduced, but severely wilted seedlings and vine crowns rarely rebound.",
    prevention: [
      "Remove crop debris in fall, use row covers until flowering, and scout leaf undersides for egg clusters weekly.",
      "Rotate cucurbits and choose more tolerant varieties to reduce squash bug establishment each year.",
    ],
    monitoringThresholds: [
      "Act at the first egg clusters, since nymphs are much easier to control than the tough adult stage.",
    ],
    escalationCriteria: [
      "Seek extension advice if squash bugs repeatedly cause plant collapse despite scouting, sanitation, and treatment.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Squash Bugs",
        url: "https://extension.umn.edu/yard-and-garden-insects/squash-bugs",
      },
    ],
  },
  {
    id: "brown-marmorated-stink-bug",
    name: "Brown Marmorated Stink Bug",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden", "fruit-trees", "ornamentals"],
    specificHosts: ["Tomato", "Apple", "Peach", "Pepper", "Bean"],
    growthStages: ["fruiting", "mature"],
    symptomLocations: ["fruit", "pods", "leaves"],
    symptomProgression:
      "Shield-shaped bugs pierce fruit and pods to feed, causing corky, dimpled, and cat-faced blemishes beneath the skin that worsen as fruit develops, downgrading quality and creating entry points for rot.",
    observableSigns: [
      "Mottled brown shield-shaped bugs with alternating light and dark banding on antennae and abdomen edges feed on fruit.",
      "Fruit shows sunken corky spots, dimpling, and cat-facing where the bugs have pierced and fed on the tissue.",
    ],
    favorableConditions: [
      "Warm seasons and nearby buildings and wooded edges that provide overwintering shelter favor stink bug influx into gardens.",
    ],
    lookalikes: [
      {
        condition: "Native brown stink bug",
        differentiator:
          "The invasive marmorated stink bug has distinctive white antennal bands the native brown species lacks.",
      },
      {
        condition: "Catfacing from cold or poor pollination",
        differentiator:
          "Weather-related catfacing occurs early on many fruit at once without the feeding punctures and bugs present.",
      },
    ],
    immediateActions: [
      "Handpick the bugs into soapy water and check fruit clusters and leaf undersides for feeding today.",
      "Seal cracks and screen openings on nearby buildings to reduce overwintering bugs that reinvade the garden.",
    ],
    treatments: [
      {
        situation: "Home garden",
        treatment:
          "Use handpicking, row covers on vulnerable crops, and spot treatment with a labeled insecticide when numbers rise.",
      },
      {
        situation: "Fruit protection",
        treatment:
          "Apply labeled insecticides during fruit development guided by monitoring, and remove and destroy damaged fruit.",
      },
    ],
    avoid: [
      "Avoid crushing large numbers indoors, since disturbed stink bugs release a strong lasting defensive odor.",
    ],
    recoveryTimeline:
      "Already-damaged fruit stays blemished, but protecting developing fruit preserves later-maturing crops through the season.",
    prevention: [
      "Exclude bugs from homes and use row covers on gardens, and monitor with traps where the pest is established.",
      "Remove weedy and wooded harborage near gardens and destroy overwintering aggregations where feasible.",
    ],
    monitoringThresholds: [
      "Increase control when bugs appear on many fruit clusters or trap counts rise sharply during fruit development.",
    ],
    escalationCriteria: [
      "Consult extension for regional management strategies where brown marmorated stink bug causes heavy fruit losses.",
    ],
    sources: [
      {
        label: "Penn State Extension Brown Marmorated Stink Bug",
        url: "https://extension.psu.edu/brown-marmorated-stink-bug",
      },
    ],
  },
  {
    id: "harlequin-bug",
    name: "Harlequin Bug",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Cabbage", "Kale", "Collards", "Radish", "Mustard"],
    growthStages: ["seed-seedling", "vegetative", "mature"],
    symptomLocations: ["leaves", "leaf undersides", "stems"],
    symptomProgression:
      "Brightly marked bugs suck sap from cole crops, producing yellow and white blotches that turn brown, and heavy feeding wilts and kills plants, especially young seedlings in warm regions.",
    observableSigns: [
      "Striking black-and-orange or black-and-red shield-shaped bugs feed on cabbage-family foliage and stems.",
      "Leaves develop bleached yellow-white blotches that brown and wilt, and barrel-shaped striped eggs sit on undersides.",
    ],
    favorableConditions: [
      "Warm southern climates and abundant mustard-family crops and weeds favor damaging harlequin bug populations.",
    ],
    lookalikes: [
      {
        condition: "Stink bug",
        differentiator:
          "Common stink bugs are dull brown or green, unlike the vivid black-and-orange harlequin bug on cole crops.",
      },
      {
        condition: "Flea beetle shot holes",
        differentiator:
          "Flea beetles chew round holes, while harlequin bug feeding bleaches the leaf into pale blotches without holes.",
      },
    ],
    immediateActions: [
      "Handpick the conspicuous adults and nymphs and crush the striped barrel-shaped eggs on leaf undersides today.",
      "Remove and destroy heavily infested seedlings that are wilting to stop the bugs from spreading.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Handpick regularly, use trap crops of mustard, and apply insecticidal soap or spinosad to young nymphs.",
      },
      {
        situation: "Heavy pressure",
        treatment:
          "Apply a labeled insecticide targeting nymphs and maintain strict removal of crop-family weeds and residue.",
      },
    ],
    avoid: [
      "Avoid leaving mustard-family weeds and old cole crop residue, which host and sustain harlequin bug populations.",
    ],
    recoveryTimeline:
      "Established plants recover once feeding is halted, but wilted seedlings usually cannot recover from heavy feeding.",
    prevention: [
      "Clean up crop residue and weeds, rotate cole crops, and use mustard trap crops to concentrate and destroy bugs.",
      "Scout leaf undersides for eggs and early nymphs so control begins before populations damage the crop.",
    ],
    monitoringThresholds: [
      "Handpick at the first adults and eggs, since seedlings can be killed quickly by even modest bug numbers.",
    ],
    escalationCriteria: [
      "Seek extension advice if harlequin bugs persistently destroy cole crops despite sanitation and trap cropping.",
    ],
    sources: [
      {
        label: "University of Florida IFAS Harlequin Bug",
        url: "https://edis.ifas.ufl.edu/publication/IN132",
      },
    ],
  },
  {
    id: "lace-bugs",
    name: "Lace Bugs",
    category: "insect-pest",
    affectedPlants: ["ornamentals", "trees-shrubs"],
    specificHosts: ["Azalea", "Rhododendron", "Sycamore", "Lantana", "Andromeda"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["upper leaf surface", "leaf undersides"],
    symptomProgression:
      "Lace bugs feed on the underside of leaves, and the removal of chlorophyll produces a fine silvery or yellow stippling on the upper surface that expands until leaves look bleached and bronzed by late summer.",
    observableSigns: [
      "The upper leaf surface shows fine yellow-white stippling that coalesces into a bleached bronzed appearance.",
      "Leaf undersides carry shiny dark tar-like fecal spots and tiny lacy-winged bugs with cast skins.",
    ],
    favorableConditions: [
      "Hot dry sites and plants growing in full sun, especially azaleas out of shade, favor damaging lace bug buildup.",
    ],
    lookalikes: [
      {
        condition: "Spider mites",
        differentiator:
          "Mite stippling comes with fine webbing and no dark fecal spots, unlike the varnished tar spots left by lace bugs.",
      },
      {
        condition: "Nutrient chlorosis",
        differentiator:
          "Chlorosis yellows uniformly along veins without the underside fecal spotting and lacy bugs of lace bug feeding.",
      },
    ],
    immediateActions: [
      "Turn leaves over today to confirm the dark fecal spots and lacy bugs before deciding on treatment.",
      "Spray leaf undersides with a strong jet of water to dislodge nymphs and reduce the feeding population.",
    ],
    treatments: [
      {
        situation: "Light infestation",
        treatment:
          "Apply insecticidal soap or horticultural oil thoroughly to leaf undersides when nymphs are present.",
      },
      {
        situation: "Heavy or recurring infestation",
        treatment:
          "Use a labeled systemic insecticide and improve siting by moving or shading sun-stressed azaleas.",
      },
    ],
    avoid: [
      "Avoid spraying only the upper leaf surface, since lace bugs feed and hide on the undersides where treatment must reach.",
    ],
    recoveryTimeline:
      "Stippled leaves stay damaged, but clean new foliage develops the following season once lace bugs are controlled.",
    prevention: [
      "Site azaleas and rhododendrons in appropriate shade and keep them well watered to reduce lace bug stress damage.",
      "Inspect leaf undersides in late spring and treat early generations before stippling becomes severe.",
    ],
    monitoringThresholds: [
      "Treat when fresh stippling and nymphs appear on undersides, ideally targeting the first generation of the season.",
    ],
    escalationCriteria: [
      "Consult extension if recurring severe infestations persist despite proper siting and repeated treatment.",
    ],
    sources: [
      {
        label: "UC IPM Lace Bugs",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7428.html",
      },
    ],
  },
  {
    id: "leafhoppers",
    name: "Leafhoppers",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden", "ornamentals", "fruit-trees"],
    specificHosts: ["Potato", "Bean", "Grape", "Rose", "Lettuce"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaf undersides", "leaf margins", "new growth"],
    symptomProgression:
      "Leafhoppers suck sap and inject saliva, causing stippling and leaf margin yellowing and browning known as hopperburn, and some species transmit plant pathogens that cause more serious systemic decline.",
    observableSigns: [
      "Small wedge-shaped insects run sideways and hop or fly when disturbed on the undersides of leaves.",
      "Leaf edges yellow, curl, and brown in a scorched hopperburn pattern, and fine stippling covers the foliage.",
    ],
    favorableConditions: [
      "Warm weather, migrating populations, and lush host foliage favor leafhopper buildup and hopperburn damage.",
    ],
    lookalikes: [
      {
        condition: "Nutrient deficiency scorch",
        differentiator:
          "Nutrient scorch develops without insects, whereas hopperburn is accompanied by mobile wedge-shaped leafhoppers.",
      },
      {
        condition: "Spider mite stippling",
        differentiator:
          "Mites leave webbing and stay put, unlike the fast sideways-running, jumping leafhoppers that scatter when disturbed.",
      },
    ],
    immediateActions: [
      "Spray leaf undersides with a strong jet of water today to dislodge nymphs and reduce the feeding population.",
      "Set out row cover on susceptible young crops to exclude migrating adult leafhoppers immediately.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply insecticidal soap or neem oil to leaf undersides while nymphs are present and repeat as needed.",
      },
      {
        situation: "Crop protection",
        treatment:
          "Use floating row covers on beans and potatoes early and reflective mulch to deter incoming leafhoppers.",
      },
    ],
    avoid: [
      "Avoid ignoring early hopperburn on beans and potatoes, since leafhopper injury can sharply reduce yields.",
    ],
    recoveryTimeline:
      "New growth emerges cleanly within a couple of weeks once leafhoppers are controlled and feeding pressure drops.",
    prevention: [
      "Use row covers and reflective mulches on susceptible crops and manage weeds that host leafhopper populations.",
      "Scout leaf undersides regularly and treat nymphs early before hopperburn becomes widespread.",
    ],
    monitoringThresholds: [
      "Treat when nymphs are numerous on undersides or early hopperburn appears on the margins of susceptible crops.",
    ],
    escalationCriteria: [
      "Seek diagnosis if plants show symptoms of aster yellows or other pathogens that leafhoppers can transmit.",
    ],
    sources: [
      {
        label: "UC IPM Leafhoppers",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7431.html",
      },
    ],
  },
  {
    id: "tarnished-plant-bug",
    name: "Tarnished Plant Bug",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden", "berries", "ornamentals"],
    specificHosts: ["Strawberry", "Bean", "Lettuce", "Dahlia", "Celery"],
    growthStages: ["flowering", "fruiting"],
    symptomLocations: ["flower buds", "new growth", "fruit"],
    symptomProgression:
      "Nymphs and adults feed on buds and developing fruit, injecting saliva that kills tissue, so flowers abort, shoot tips die back, and fruit such as strawberries become misshapen and catfaced.",
    observableSigns: [
      "Small mottled brown bugs with a pale yellow triangle on the back feed on buds and new growth.",
      "Flower buds blacken and drop, shoot tips die, and strawberries develop deformed seedy catfaced ends.",
    ],
    favorableConditions: [
      "Warm weather, flowering weeds, and lush succulent growth favor high tarnished plant bug populations.",
    ],
    lookalikes: [
      {
        condition: "Boron or calcium deficiency",
        differentiator:
          "Nutrient disorders distort fruit uniformly without the feeding punctures and visible plant bugs that cause catfacing.",
      },
      {
        condition: "Frost damage to buds",
        differentiator:
          "Frost kills buds broadly during a cold event, unlike the scattered bud death and bugs of plant bug feeding.",
      },
    ],
    immediateActions: [
      "Sweep foliage with a net or tap flowers over a tray today to detect the fast-moving bugs and gauge numbers.",
      "Mow or remove flowering weeds around the planting to eliminate the alternate hosts feeding the population.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply insecticidal soap or spinosad targeting nymphs and keep the area free of flowering weed hosts.",
      },
      {
        situation: "Fruit crop protection",
        treatment:
          "Use a labeled insecticide during bloom guided by sweep-net monitoring while protecting foraging pollinators.",
      },
    ],
    avoid: [
      "Avoid mowing weedy borders during fruiting without a plan, since disturbed bugs move straight into the crop.",
    ],
    recoveryTimeline:
      "Later flowers set normally once the bugs are controlled, though fruit already deformed by feeding will not recover.",
    prevention: [
      "Manage flowering weeds well before crops bloom and monitor with sweep nets to time control accurately.",
      "Keep field borders mowed early and scout buds so treatment targets nymphs before fruit deformation occurs.",
    ],
    monitoringThresholds: [
      "Treat when sweep-net or tap counts of nymphs exceed a few per plant during the flowering and fruiting period.",
    ],
    escalationCriteria: [
      "Consult extension for threshold-based programs if plant bug feeding repeatedly deforms a significant share of fruit.",
    ],
    sources: [
      {
        label: "University of Massachusetts Extension Tarnished Plant Bug",
        url: "https://ag.umass.edu/fruit/fact-sheets/tarnished-plant-bug",
      },
    ],
  },
  {
    id: "psyllids",
    name: "Psyllids",
    category: "insect-pest",
    affectedPlants: ["fruit-trees", "trees-shrubs", "vegetable-garden"],
    specificHosts: ["Pear", "Boxwood", "Tomato", "Potato", "Eucalyptus"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["new growth", "leaf undersides", "shoot tips"],
    symptomProgression:
      "Psyllid nymphs feed on new growth producing honeydew and sometimes waxy structures or galls, and toxins in their saliva can distort leaves, cause psyllid yellows, and blacken foliage with sooty mold.",
    observableSigns: [
      "Tiny cicada-like nymphs on new growth exude honeydew and waxy filaments, and adults jump when disturbed.",
      "New leaves cup, distort, or discolor, and honeydew fosters sooty mold or hard lerp coverings depending on species.",
    ],
    favorableConditions: [
      "Flushes of tender new growth and warm weather favor psyllid reproduction on their specific host plants.",
    ],
    lookalikes: [
      {
        condition: "Aphids",
        differentiator:
          "Aphids do not jump and lack the waxy lerps of some psyllids, while psyllid adults hop readily like tiny cicadas.",
      },
      {
        condition: "Boxwood leafminer",
        differentiator:
          "Leafminer causes blistered mines inside boxwood leaves, unlike the cupping and honeydew of boxwood psyllid feeding.",
      },
    ],
    immediateActions: [
      "Prune out the most distorted honeydew-coated shoot tips today to remove concentrated psyllid nymphs.",
      "Rinse new growth with a firm water spray to dislodge nymphs and wash off honeydew and sooty mold.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply horticultural oil or insecticidal soap to new growth to smother nymphs before waxy coverings form.",
      },
      {
        situation: "Persistent infestation",
        treatment:
          "Time a labeled insecticide to the young nymph stage and conserve natural enemies that attack psyllids.",
      },
    ],
    avoid: [
      "Avoid overfertilizing with nitrogen, which drives the tender flush of growth psyllids reproduce on fastest.",
    ],
    recoveryTimeline:
      "New undistorted growth appears within a few weeks once nymphs are controlled and honeydew is washed away.",
    prevention: [
      "Monitor new growth flushes and treat early nymphs before protective waxy lerps develop on the leaves.",
      "Avoid excess nitrogen and conserve predators and parasitoids that naturally suppress psyllid populations.",
    ],
    monitoringThresholds: [
      "Treat when nymphs and honeydew appear on many shoot tips during the vulnerable new growth flush.",
    ],
    escalationCriteria: [
      "Seek diagnosis if plants show disease-like decline, since some psyllids transmit serious plant pathogens.",
    ],
    sources: [
      {
        label: "UC IPM Psyllids",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn74158.html",
      },
    ],
  },
  {
    id: "rose-slug-sawfly",
    name: "Rose Slug (Sawfly)",
    category: "insect-pest",
    affectedPlants: ["ornamentals"],
    specificHosts: ["Rose"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["leaf undersides", "upper leaf surface", "leaves"],
    symptomProgression:
      "Sawfly larvae feed on rose leaves, first scraping the surface to leave translucent windowpane patches that later expand into skeletonized and holed leaves as the larvae grow through the season.",
    observableSigns: [
      "Leaves show translucent windowpane patches where green larvae have scraped away one leaf surface.",
      "Small pale green slug-like larvae rest on leaf undersides, and heavily fed leaves become skeletonized.",
    ],
    favorableConditions: [
      "Spring and early summer with tender rose foliage and successive sawfly generations favor rose slug damage.",
    ],
    lookalikes: [
      {
        condition: "Japanese beetle",
        differentiator:
          "Beetles chew large holes right through the leaf, unlike the surface windowpane scraping of young rose slugs.",
      },
      {
        condition: "Caterpillars",
        differentiator:
          "True caterpillars have distinct prolegs and often more legs, while rose slug sawfly larvae are smooth and slug-like.",
      },
    ],
    immediateActions: [
      "Turn leaves over and handpick or wipe off the green slug-like larvae today to stop the surface feeding.",
      "Spray leaf undersides with a strong jet of water to knock the soft larvae off the foliage.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply insecticidal soap or horticultural oil to leaf undersides where the larvae feed and rest.",
      },
      {
        situation: "Heavier infestation",
        treatment:
          "Use spinosad or a labeled insecticide on the larvae, noting that Bt is ineffective against sawflies.",
      },
    ],
    avoid: [
      "Avoid relying on Bacillus thuringiensis, since it does not control sawfly larvae the way it controls true caterpillars.",
    ],
    recoveryTimeline:
      "Roses push out clean new leaves within a few weeks once larvae are removed and feeding stops.",
    prevention: [
      "Inspect rose leaf undersides in spring and early summer and treat the first small larvae before skeletonizing.",
      "Encourage birds and predatory insects and keep roses vigorous so they tolerate light feeding.",
    ],
    monitoringThresholds: [
      "Treat when windowpane damage and larvae appear on multiple leaves, targeting the early feeding stage.",
    ],
    escalationCriteria: [
      "Consult extension only if repeated generations cause heavy defoliation despite handpicking and soap sprays.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Rose Sawflies",
        url: "https://extension.umn.edu/yard-and-garden-insects/sawflies",
      },
    ],
  },
  {
    id: "pear-slug-sawfly",
    name: "Pear Slug (Pear Sawfly)",
    category: "insect-pest",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Pear", "Cherry", "Plum", "Hawthorn", "Cotoneaster"],
    growthStages: ["vegetative", "fruiting"],
    symptomLocations: ["upper leaf surface", "leaves"],
    symptomProgression:
      "Shiny dark slug-like sawfly larvae skeletonize the upper surface of pear and cherry leaves, and as feeding accumulates leaves turn brown and scorched, with a second generation often causing heavier late-summer damage.",
    observableSigns: [
      "Slimy dark olive slug-like larvae feed on the upper leaf surface, leaving lacy skeletonized tissue.",
      "Damaged leaves take on a brown scorched appearance across the canopy where larvae have fed.",
    ],
    favorableConditions: [
      "Warm summers with two generations of pear sawfly and abundant host foliage favor conspicuous leaf skeletonizing.",
    ],
    lookalikes: [
      {
        condition: "Fire blight scorch",
        differentiator:
          "Fire blight blackens shoots and leaves from bacterial infection without the surface-feeding slug-like larvae.",
      },
      {
        condition: "Leaf scorch from drought",
        differentiator:
          "Drought scorch browns leaf margins without the skeletonized upper surface and slimy larvae of pear sawfly.",
      },
    ],
    immediateActions: [
      "Hose the slimy larvae off the leaves with a strong water spray today to dislodge them from the canopy.",
      "Handpick or wipe larvae from accessible foliage on small trees to reduce the feeding population.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply insecticidal soap or spinosad to the foliage while larvae are actively feeding on the leaf surface.",
      },
      {
        situation: "Second generation",
        treatment:
          "Monitor for the heavier late-summer generation and treat larvae promptly, since Bt does not affect sawflies.",
      },
    ],
    avoid: [
      "Avoid using Bacillus thuringiensis, which is ineffective against pear slug sawfly larvae.",
    ],
    recoveryTimeline:
      "Established trees tolerate the damage and produce clean growth the next season once larvae are controlled.",
    prevention: [
      "Monitor leaves in early summer and again in late summer to catch both sawfly generations early.",
      "Encourage natural enemies and hose or treat larvae before skeletonizing becomes widespread.",
    ],
    monitoringThresholds: [
      "Treat when larvae and skeletonizing appear on many leaves, especially watching for the larger second generation.",
    ],
    escalationCriteria: [
      "Consult extension only if repeated heavy skeletonizing threatens the vigor of a small or young tree.",
    ],
    sources: [
      {
        label: "UC IPM Pear Sawfly",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7412.html",
      },
    ],
  },
  {
    id: "peachtree-borer",
    name: "Peachtree Borer",
    category: "insect-pest",
    affectedPlants: ["fruit-trees"],
    specificHosts: ["Peach", "Cherry", "Plum", "Nectarine", "Apricot"],
    growthStages: ["mature"],
    symptomLocations: ["trunk base", "root crown", "lower trunk"],
    symptomProgression:
      "Larvae bore into the trunk near the soil line and tunnel in the inner bark of the crown, and their girdling feeding weakens and can kill young trees, with gummy frass-mixed ooze marking the entry points.",
    observableSigns: [
      "Masses of gummy sap mixed with reddish-brown frass ooze from the trunk base near the soil line.",
      "The lower trunk and crown show tunneling in the inner bark, and infested young trees decline and lose vigor.",
    ],
    favorableConditions: [
      "Sunscald, mechanical trunk wounds, and stressed stone fruit trees favor peachtree borer attack at the crown.",
    ],
    lookalikes: [
      {
        condition: "Gummosis from disease or stress",
        differentiator:
          "Stress gummosis lacks the reddish frass mixed in the sap that signals active borer tunneling in the crown.",
      },
      {
        condition: "Bacterial canker",
        differentiator:
          "Bacterial canker produces sunken cankers and amber gum without the frass-laden ooze and larval galleries of borers.",
      },
    ],
    immediateActions: [
      "Probe the gummy frass at the trunk base today with a wire to locate and kill larvae in their tunnels.",
      "Clear soil and mulch away from the crown to expose entry points and discourage further borer attack.",
    ],
    treatments: [
      {
        situation: "Preventive timing",
        treatment:
          "Apply a labeled trunk spray to the lower trunk and crown timed to the adult clearwing moth flight period.",
      },
      {
        situation: "Mating disruption",
        treatment:
          "Use pheromone mating disruption in orchards and worm out accessible larvae from the crown by hand.",
      },
    ],
    avoid: [
      "Avoid wounding the trunk with mowers and trimmers, since injuries attract egg-laying adult borers.",
    ],
    recoveryTimeline:
      "Young trees with limited girdling recover over a season, but severely girdled trunks often decline beyond saving.",
    prevention: [
      "Protect trunks from injury and sunscald, keep trees vigorous, and time trunk sprays to the moth flight.",
      "Monitor with pheromone traps to schedule treatment and inspect the crown each season for gummy frass.",
    ],
    monitoringThresholds: [
      "Treat trunks based on pheromone trap catches indicating adult flight, and probe any gummy frass found at the crown.",
    ],
    escalationCriteria: [
      "Consult extension for a spray and mating-disruption schedule if borers repeatedly girdle and kill young trees.",
    ],
    sources: [
      {
        label: "UC IPM Peach Tree Borer",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7412.html",
      },
    ],
  },
  {
    id: "iris-borer",
    name: "Iris Borer",
    category: "insect-pest",
    affectedPlants: ["ornamentals"],
    specificHosts: ["Bearded iris", "Siberian iris", "Iris"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["leaves", "rhizomes", "leaf base"],
    symptomProgression:
      "Larvae hatch on iris leaves and tunnel downward into the rhizome, hollowing it out and opening the way for bacterial soft rot, so leaves show water-soaked streaks and rhizomes become mushy and foul.",
    observableSigns: [
      "Iris leaves develop ragged notches and water-soaked or bleeding streaks where young larvae have tunneled.",
      "Rhizomes are hollowed and mushy with a foul smell as borers feed and bacterial soft rot follows.",
    ],
    favorableConditions: [
      "Old iris foliage and debris left standing over winter shelter borer eggs, favoring damaging spring infestations.",
    ],
    lookalikes: [
      {
        condition: "Bacterial soft rot alone",
        differentiator:
          "Soft rot without borers lacks the larval tunnels and leaf feeding streaks that reveal iris borer entry.",
      },
      {
        condition: "Iris leaf spot fungus",
        differentiator:
          "Leaf spot makes discrete brown-edged spots rather than the water-soaked chewed streaks caused by borer larvae.",
      },
    ],
    immediateActions: [
      "Squeeze suspect leaves to crush young larvae within the water-soaked streaks today before they reach the rhizome.",
      "Cut out and destroy heavily tunneled leaves to remove larvae migrating down toward the rhizome.",
    ],
    treatments: [
      {
        situation: "Early leaf stage",
        treatment:
          "Apply spinosad to the foliage when young larvae are feeding in the leaves before they enter the rhizome.",
      },
      {
        situation: "Infested rhizomes",
        treatment:
          "Dig and inspect rhizomes, cut away borer-damaged rotten tissue, and replant only firm healthy sections.",
      },
    ],
    avoid: [
      "Avoid leaving old iris foliage standing over winter, since it harbors the overwintering borer eggs.",
    ],
    recoveryTimeline:
      "Iris clumps recover over a season after infested foliage and rhizome tissue are removed and healthy divisions replanted.",
    prevention: [
      "Cut and remove old iris leaves and debris in late fall to destroy overwintering eggs.",
      "Inspect leaves each spring for water-soaked streaks and treat young larvae before they reach the rhizome.",
    ],
    monitoringThresholds: [
      "Act at the first water-soaked leaf streaks in spring, since control is only effective before larvae enter the rhizome.",
    ],
    escalationCriteria: [
      "Lift, divide, and discard badly rotted rhizomes if soft rot from borer damage spreads through the clump.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Iris Borer",
        url: "https://extension.umn.edu/yard-and-garden-insects/iris-borer",
      },
    ],
  },
  {
    id: "earwigs",
    name: "Earwigs",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden", "ornamentals", "herbs"],
    specificHosts: ["Seedlings", "Dahlia", "Basil", "Lettuce", "Marigold"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["leaves", "flowers", "seedlings"],
    symptomProgression:
      "Earwigs feed at night, chewing irregular holes and ragged edges in soft leaves, flowers, and seedlings, and while they also eat some pests, high numbers can seriously damage tender plants and blooms.",
    observableSigns: [
      "Leaves and flower petals show many small irregular holes and ragged chewed edges appearing overnight.",
      "Slender brown insects with pincers at the rear hide in tight dark moist spots and scatter when uncovered by day.",
    ],
    favorableConditions: [
      "Damp mulched conditions with abundant hiding places and warm nights favor high earwig populations near tender plants.",
    ],
    lookalikes: [
      {
        condition: "Slug damage",
        differentiator:
          "Slugs leave slime trails and smoother-edged holes, unlike the ragged chewing and pincered insects of earwigs.",
      },
      {
        condition: "Caterpillar feeding",
        differentiator:
          "Caterpillars leave green frass and are found on plants by day, whereas earwigs hide by day and feed at night.",
      },
    ],
    immediateActions: [
      "Set rolled damp newspaper or oil-and-soy-sauce traps near damaged plants tonight to capture feeding earwigs.",
      "Remove mulch, boards, and debris from around vulnerable plants today to eliminate daytime hiding spots.",
    ],
    treatments: [
      {
        situation: "Trapping",
        treatment:
          "Empty low-sided oil traps and rolled paper shelters each morning to steadily reduce the earwig population.",
      },
      {
        situation: "Heavy damage",
        treatment:
          "Apply a labeled spinosad bait around affected plantings in the evening when earwigs come out to feed.",
      },
    ],
    avoid: [
      "Avoid heavy moist mulch right against tender seedlings, since it provides ideal earwig shelter next to their food.",
    ],
    recoveryTimeline:
      "Plants recover within a couple of weeks once trapping reduces earwig numbers and new growth outpaces feeding.",
    prevention: [
      "Keep mulch pulled back from seedlings, reduce debris, and maintain traps to keep earwig numbers low.",
      "Encourage the plants to establish quickly so vigorous growth outpaces the nighttime feeding.",
    ],
    monitoringThresholds: [
      "Increase trapping when nightly holes multiply and many earwigs turn up in traps or under shelters.",
    ],
    escalationCriteria: [
      "Consider baiting if trapping and sanitation cannot keep earwig damage below tolerable levels on valued plants.",
    ],
    sources: [
      {
        label: "UC IPM Earwigs",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn74102.html",
      },
    ],
  },
  {
    id: "slugs-snails",
    name: "Slugs and Snails",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden", "ornamentals", "herbs", "houseplants"],
    specificHosts: ["Hosta", "Lettuce", "Basil", "Marigold", "Strawberry"],
    growthStages: ["seed-seedling", "vegetative", "flowering"],
    symptomLocations: ["leaves", "leaf margins", "seedlings", "fruit"],
    symptomProgression:
      "Slugs and snails rasp irregular holes in leaves and consume whole seedlings overnight, and their feeding expands in damp weather, leaving large plants tattered and low fruit and greens damaged.",
    observableSigns: [
      "Leaves have large irregular smooth-edged holes chewed between the veins, often starting at the leaf margins.",
      "Silvery dried slime trails glisten on leaves, soil, and pots, especially visible in the morning.",
    ],
    favorableConditions: [
      "Cool damp conditions, heavy mulch, dense plantings, and shady moist beds strongly favor slug and snail activity.",
    ],
    lookalikes: [
      {
        condition: "Caterpillar chewing",
        differentiator:
          "Caterpillars leave green frass and no slime, while slugs and snails leave telltale silvery slime trails.",
      },
      {
        condition: "Earwig damage",
        differentiator:
          "Earwig holes are smaller and raggeder without slime, whereas slug feeding leaves larger holes and shiny trails.",
      },
    ],
    immediateActions: [
      "Hand-collect slugs and snails after dark or early morning with a flashlight and dispose of them today.",
      "Set out shallow beer traps or boards as shelters and clear them of gathered slugs each morning.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply iron phosphate slug bait around plants and use copper barriers on pots and beds to repel them.",
      },
      {
        situation: "Cultural control",
        treatment:
          "Reduce mulch and evening watering, hand-collect nightly, and remove daytime hiding places to lower numbers.",
      },
    ],
    avoid: [
      "Avoid watering in the evening and piling damp mulch, which create the moist conditions slugs and snails thrive in.",
    ],
    recoveryTimeline:
      "Plants recover and push new leaves within a couple of weeks once populations are reduced and conditions dry.",
    prevention: [
      "Water in the morning, thin dense plantings, and remove debris to reduce the moisture and cover slugs need.",
      "Ring vulnerable plants with copper or iron phosphate bait and hand-collect regularly during damp spells.",
    ],
    monitoringThresholds: [
      "Increase baiting and collecting when fresh holes and slime trails appear on many plants during wet weather.",
    ],
    escalationCriteria: [
      "Investigate other pests if damage continues despite baiting, trapping, and reducing moisture and cover.",
    ],
    sources: [
      {
        label: "UC IPM Snails and Slugs",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7427.html",
      },
    ],
  },
  {
    id: "white-grubs-lawn",
    name: "White Grubs (Lawn)",
    category: "insect-pest",
    affectedPlants: ["lawns-turf"],
    specificHosts: ["Kentucky bluegrass", "Fescue", "Ryegrass", "Bermudagrass", "Zoysiagrass"],
    growthStages: ["mature"],
    symptomLocations: ["roots", "soil beneath turf", "turf crown"],
    symptomProgression:
      "Beetle larvae feed on grass roots in late summer and fall, so turf yellows and wilts in irregular patches that can be rolled back like carpet, and secondary digging by animals enlarges the damage.",
    observableSigns: [
      "Irregular patches of turf turn yellow and wilt and lift up easily like loose carpet because roots are severed.",
      "C-shaped white grubs with brown heads are found in the top few inches of soil beneath the damaged turf.",
    ],
    favorableConditions: [
      "Well-watered turf during summer beetle egg-laying and warm moist soil favor high white grub populations.",
    ],
    lookalikes: [
      {
        condition: "Drought dormancy",
        differentiator:
          "Drought-dormant turf stays rooted and greens up with water, unlike grub-damaged turf that peels away rootless.",
      },
      {
        condition: "Chinch bug damage",
        differentiator:
          "Chinch bugs damage sunny turf from above with intact roots, whereas grubs sever roots so turf lifts freely.",
      },
    ],
    immediateActions: [
      "Cut and lift a square foot of suspect turf today and count the grubs beneath to confirm the problem.",
      "Water the lawn to help stressed grass tolerate root loss while you decide on grub control.",
    ],
    treatments: [
      {
        situation: "Curative treatment",
        treatment:
          "Apply a labeled curative insecticide and water it in when young grubs are actively feeding near the surface.",
      },
      {
        situation: "Biological control",
        treatment:
          "Apply beneficial nematodes or milky spore to moist soil to suppress grub populations over time.",
      },
    ],
    avoid: [
      "Avoid treating without confirming grub counts, since applying insecticide when few grubs are present is wasteful.",
    ],
    recoveryTimeline:
      "Damaged turf regrows over several weeks with irrigation and reseeding once grubs are controlled below damaging levels.",
    prevention: [
      "Keep mowing high and water deeply but infrequently so turf tolerates some grub feeding.",
      "Monitor grub counts in late summer and apply preventive treatment only where populations regularly exceed thresholds.",
    ],
    monitoringThresholds: [
      "Treat when grub counts exceed roughly six to ten per square foot in areas showing wilting and thinning turf.",
    ],
    escalationCriteria: [
      "Consult a lawn professional if extensive turf loss and heavy animal digging recur despite management.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension White Grubs",
        url: "https://extension.umn.edu/lawn-insects/white-grubs",
      },
    ],
  },
  {
    id: "chinch-bugs-turf",
    name: "Chinch Bugs (Turf)",
    category: "insect-pest",
    affectedPlants: ["lawns-turf"],
    specificHosts: ["St. Augustinegrass", "Kentucky bluegrass", "Fescue", "Zoysiagrass", "Bermudagrass"],
    growthStages: ["mature"],
    symptomLocations: ["turf crown", "leaf blades", "thatch"],
    symptomProgression:
      "Chinch bugs suck sap and inject toxins into grass at the crown, causing expanding yellow then straw-brown patches in sunny areas during hot dry weather that grow as the bugs move outward feeding.",
    observableSigns: [
      "Sunny turf develops expanding irregular yellow to straw-brown patches during hot dry weather.",
      "Small black-and-white winged bugs and reddish nymphs are found in the thatch when the grass is parted.",
    ],
    favorableConditions: [
      "Hot dry summers, sunny slopes, and thatchy turf strongly favor chinch bug population explosions.",
    ],
    lookalikes: [
      {
        condition: "Drought stress",
        differentiator:
          "Drought browns turf broadly and greens with water, whereas chinch bug patches keep expanding despite watering.",
      },
      {
        condition: "White grub damage",
        differentiator:
          "Grub turf lifts up rootless, while chinch bug turf stays rooted and the bugs are visible in the thatch.",
      },
    ],
    immediateActions: [
      "Part the grass at the edge of a browning patch today and look for the small bugs and nymphs in the thatch.",
      "Use a coffee-can flotation test by flooding a bottomless can pushed into turf to float chinch bugs up for counting.",
    ],
    treatments: [
      {
        situation: "Confirmed infestation",
        treatment:
          "Apply a labeled turf insecticide to the affected area and its expanding margin, then water appropriately.",
      },
      {
        situation: "Cultural control",
        treatment:
          "Reduce thatch, avoid excess nitrogen, and irrigate adequately to help turf resist and recover from feeding.",
      },
    ],
    avoid: [
      "Avoid heavy nitrogen fertilization and thick thatch, which create the conditions chinch bugs thrive in.",
    ],
    recoveryTimeline:
      "Turf recovers over several weeks with proper watering and reseeding once chinch bug numbers are controlled.",
    prevention: [
      "Dethatch, mow high, and water deeply to build resilient turf that resists chinch bug damage.",
      "Monitor sunny areas in hot weather with flotation tests to detect chinch bugs before patches spread.",
    ],
    monitoringThresholds: [
      "Treat when flotation or thatch counts reveal high numbers in expanding straw-colored patches during summer.",
    ],
    escalationCriteria: [
      "Consult a turf professional if patches keep expanding despite watering and confirmed treatment.",
    ],
    sources: [
      {
        label: "University of Florida IFAS Chinch Bugs",
        url: "https://edis.ifas.ufl.edu/publication/IN1027",
      },
    ],
  },
  {
    id: "sod-webworms",
    name: "Sod Webworms",
    category: "insect-pest",
    affectedPlants: ["lawns-turf"],
    specificHosts: ["Kentucky bluegrass", "Fescue", "Ryegrass", "Bentgrass", "Zoysiagrass"],
    growthStages: ["mature"],
    symptomLocations: ["leaf blades", "turf crown", "thatch"],
    symptomProgression:
      "Larvae hide in silk-lined burrows in the thatch and feed on grass blades at night, creating small ragged brown patches that coalesce into larger thinned areas as feeding continues through summer.",
    observableSigns: [
      "Small irregular brown patches of chewed grass appear and enlarge, and birds probe the turf to feed on larvae.",
      "Slender larvae rest in silk-lined tunnels in the thatch, and tan lawn moths flush up and fly in a zigzag at dusk.",
    ],
    favorableConditions: [
      "Hot dry summers and sunny, drought-stressed turf favor sod webworm feeding and visible thinning.",
    ],
    lookalikes: [
      {
        condition: "Drought stress",
        differentiator:
          "Drought browns turf without chewed blades or silk-lined burrows, unlike the notched grass and tunnels of webworms.",
      },
      {
        condition: "Dollar spot fungus",
        differentiator:
          "Dollar spot leaves bleached lesions on individual blades rather than the chewed, notched blades of webworm feeding.",
      },
    ],
    immediateActions: [
      "Perform a soapy water flush today over a patch to drive larvae to the surface for counting and confirmation.",
      "Water and lightly fertilize stressed turf to help it outgrow and tolerate the webworm feeding.",
    ],
    treatments: [
      {
        situation: "Confirmed infestation",
        treatment:
          "Apply Bacillus thuringiensis or a labeled turf insecticide in the evening when larvae come up to feed.",
      },
      {
        situation: "Cultural control",
        treatment:
          "Reduce thatch, water deeply, and maintain vigorous turf so it recovers quickly from larval feeding.",
      },
    ],
    avoid: [
      "Avoid letting turf stay drought-stressed and thatchy, which favors webworm survival and slows recovery.",
    ],
    recoveryTimeline:
      "Healthy watered turf recovers within a few weeks once larvae are controlled and feeding stops.",
    prevention: [
      "Keep turf well watered and mowed high with limited thatch to reduce webworm establishment and damage.",
      "Watch for the tan lawn moths at dusk in summer and flush suspect areas to catch infestations early.",
    ],
    monitoringThresholds: [
      "Treat when soap-flush counts reveal several larvae per square foot in areas showing ragged brown thinning.",
    ],
    escalationCriteria: [
      "Consult a turf professional if repeated summer infestations thin the lawn despite watering and treatment.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Sod Webworms",
        url: "https://extension.umn.edu/lawn-insects/sod-webworms",
      },
    ],
  },
  {
    id: "billbugs-turf",
    name: "Billbugs (Turf)",
    category: "insect-pest",
    affectedPlants: ["lawns-turf"],
    specificHosts: ["Kentucky bluegrass", "Zoysiagrass", "Bermudagrass", "Ryegrass", "Fescue"],
    growthStages: ["mature"],
    symptomLocations: ["stems", "crown", "roots", "thatch"],
    symptomProgression:
      "Adult weevils chew grass stems while larvae tunnel in the crown and roots, so turf yellows and browns in patches that pull up easily and reveal fine sawdust-like frass, worsening in midsummer heat.",
    observableSigns: [
      "Turf shows yellowing then browning patches, and affected stems break off easily at the crown when tugged.",
      "Fine white sawdust-like frass appears in the crown and thatch where legless white larvae have tunneled.",
    ],
    favorableConditions: [
      "Warm dry summers and stressed turf favor billbug larval damage, which is often mistaken for drought.",
    ],
    lookalikes: [
      {
        condition: "White grub damage",
        differentiator:
          "White grubs are C-shaped with legs in the soil, whereas billbug larvae are legless and leave sawdust-like frass in the crown.",
      },
      {
        condition: "Drought or dormancy",
        differentiator:
          "Drought turf resists the tug test, while billbug-damaged stems break off cleanly with frass at the crown.",
      },
    ],
    immediateActions: [
      "Perform the tug test today by pulling on yellowing shoots and look for the sawdust-like frass at the broken crowns.",
      "Water stressed turf to reduce drought stress that compounds billbug injury while you confirm the pest.",
    ],
    treatments: [
      {
        situation: "Adult control",
        treatment:
          "Apply a labeled insecticide when adult weevils are active on the surface in spring before larvae hatch.",
      },
      {
        situation: "Larval and cultural control",
        treatment:
          "Use beneficial nematodes and maintain vigorous, properly watered turf to reduce larval damage and speed recovery.",
      },
    ],
    avoid: [
      "Avoid misdiagnosing billbug damage as drought and simply watering, which lets larvae keep destroying the crown.",
    ],
    recoveryTimeline:
      "Turf recovers over several weeks with irrigation and overseeding once larvae are controlled below damaging levels.",
    prevention: [
      "Choose endophyte-enhanced or resistant grass varieties and keep turf vigorous to withstand billbug feeding.",
      "Monitor for adult weevils in spring and treat before larvae move into the crown and roots.",
    ],
    monitoringThresholds: [
      "Treat when the tug test reveals many broken frass-filled stems or adult weevils are numerous on the surface.",
    ],
    escalationCriteria: [
      "Consult a turf professional if patches recur each summer despite resistant grasses and proper watering.",
    ],
    sources: [
      {
        label: "University of Nebraska Extension Billbugs",
        url: "https://extension.unl.edu/statewide/dodge/billbugs-in-turfgrass/",
      },
    ],
  },
  {
    id: "spittlebugs",
    name: "Spittlebugs",
    category: "insect-pest",
    affectedPlants: ["ornamentals", "berries", "herbs", "lawns-turf"],
    specificHosts: ["Strawberry", "Rosemary", "Pine", "Juniper", "Grasses"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["stems", "leaf axils", "new growth"],
    symptomProgression:
      "Nymphs feed hidden inside protective frothy spittle masses on stems and leaf axils, and while light feeding is mostly cosmetic, heavy populations can stunt new growth and distort tender shoots.",
    observableSigns: [
      "Frothy white spittle masses that look like spit cling to stems and leaf axils on the plant.",
      "A soft green nymph is found feeding inside each spittle mass when the froth is wiped away.",
    ],
    favorableConditions: [
      "Cool moist spring weather and lush tender growth favor spittlebug nymphs and their conspicuous froth masses.",
    ],
    lookalikes: [
      {
        condition: "Mealybug wax",
        differentiator:
          "Mealybug wax is dry and cottony, whereas spittlebug froth is wet, bubbly, and quickly reforms after wiping.",
      },
      {
        condition: "Fungal or physical residue",
        differentiator:
          "Random residue has no insect, but spittlebug froth reliably hides a soft green nymph feeding within it.",
      },
    ],
    immediateActions: [
      "Hose the frothy masses off the plant today with a strong water spray to dislodge the hidden nymphs.",
      "Wipe or pick off spittle masses by hand on small plantings to remove the nymphs directly.",
    ],
    treatments: [
      {
        situation: "Light infestation",
        treatment:
          "Rely on water sprays and handpicking, since light spittlebug feeding is largely cosmetic and self-limiting.",
      },
      {
        situation: "Heavy infestation",
        treatment:
          "Apply insecticidal soap targeting nymphs when froth masses become numerous and distort new growth.",
      },
    ],
    avoid: [
      "Avoid heavy insecticide use for a few spittle masses, since spittlebugs rarely cause significant plant harm.",
    ],
    recoveryTimeline:
      "Plants outgrow the mostly cosmetic damage within a few weeks once nymphs are washed off or mature.",
    prevention: [
      "Monitor for froth masses in spring and hose them off early to keep populations low.",
      "Maintain plant vigor so tender growth tolerates the limited feeding that spittlebugs cause.",
    ],
    monitoringThresholds: [
      "Take action only when froth masses become numerous and new growth begins to appear stunted or distorted.",
    ],
    escalationCriteria: [
      "Seek diagnosis where spittlebugs vector plant pathogens of concern in certain crops and regions.",
    ],
    sources: [
      {
        label: "University of Maryland Extension Spittlebugs",
        url: "https://extension.umd.edu/resource/spittlebugs/",
      },
    ],
  },
  {
    id: "gall-making-insects",
    name: "Gall-Making Insects",
    category: "insect-pest",
    affectedPlants: ["trees-shrubs", "ornamentals", "fruit-trees"],
    specificHosts: ["Oak", "Maple", "Hackberry", "Willow", "Rose"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["leaves", "stems", "twigs", "leaf undersides"],
    symptomProgression:
      "Egg-laying and feeding by gall wasps, midges, or aphids trigger the plant to form abnormal swellings that enclose the developing insects, and while most galls are harmless, heavy galling can distort growth.",
    observableSigns: [
      "Abnormal rounded, spiny, or fuzzy swellings form on leaves, twigs, or stems in characteristic shapes.",
      "Cutting a gall open reveals one or more small insect larvae developing in a chamber inside the growth.",
    ],
    favorableConditions: [
      "Presence of specific gall-forming species and susceptible host plants during the spring growth flush favors gall formation.",
    ],
    lookalikes: [
      {
        condition: "Fungal or bacterial galls",
        differentiator:
          "Pathogen galls like crown gall lack an insect chamber inside, whereas insect galls enclose developing larvae.",
      },
      {
        condition: "Bud or seed structures",
        differentiator:
          "Normal buds and fruit follow the plant's pattern, while insect galls are irregular growths harboring larvae inside.",
      },
    ],
    immediateActions: [
      "Cut open a representative gall today to confirm an insect larva inside and rule out a disease-caused gall.",
      "Prune out and dispose of galled twigs on small plants where galls are concentrated and unsightly.",
    ],
    treatments: [
      {
        situation: "Cosmetic leaf galls",
        treatment:
          "Tolerate most leaf galls, which do not harm tree health, and simply rake and remove galled leaves if desired.",
      },
      {
        situation: "Twig or stem galls",
        treatment:
          "Prune out and destroy woody galls where feasible, since sprays rarely reach insects protected inside galls.",
      },
    ],
    avoid: [
      "Avoid spraying insecticides on formed galls, since the enclosed insects are shielded from contact treatment.",
    ],
    recoveryTimeline:
      "Most galled plants remain healthy, and new unaffected growth develops normally in following seasons.",
    prevention: [
      "Keep host trees vigorous so they tolerate galling, and remove galled twigs to reduce local populations.",
      "Rake and dispose of galled leaves in fall where certain species overwinter in the fallen galls.",
    ],
    monitoringThresholds: [
      "Consider action only if galling becomes heavy enough to distort growth or repeatedly disfigure a valued plant.",
    ],
    escalationCriteria: [
      "Consult an arborist if woody stem galls are extensive and cause dieback on a valued tree or shrub.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension Galls",
        url: "https://extension.umn.edu/plant-diseases/galls-trees-and-shrubs",
      },
    ],
  },
  {
    id: "ants-honeydew-mutualism",
    name: "Ants (Honeydew Mutualism)",
    category: "insect-pest",
    affectedPlants: ["fruit-trees", "ornamentals", "trees-shrubs", "houseplants"],
    specificHosts: ["Citrus", "Rose", "Camellia", "Apple", "Ficus"],
    growthStages: ["vegetative", "flowering", "fruiting", "all-stages"],
    symptomLocations: ["stems", "trunk", "new growth", "branches"],
    symptomProgression:
      "Ants tend honeydew-producing aphids, scales, and mealybugs, protecting them from natural enemies, so those sap-sucking pests multiply unchecked and their honeydew and sooty mold worsen while ants stream up and down the plant.",
    observableSigns: [
      "Ants stream up and down the trunk and stems, actively tending clusters of aphids, scales, or mealybugs.",
      "Honeydew and black sooty mold accumulate on foliage as the ant-protected sap-suckers multiply.",
    ],
    favorableConditions: [
      "Established ant colonies near plants harboring honeydew-producing insects create a mutualism that sustains pest outbreaks.",
    ],
    lookalikes: [
      {
        condition: "Foraging ants without pests",
        differentiator:
          "Incidental ants disperse and tend nothing, whereas mutualistic ants cluster around and defend honeydew-producing insects.",
      },
      {
        condition: "Carpenter ants in wood",
        differentiator:
          "Carpenter ants excavate damaged wood and push out sawdust rather than tending sap-sucking insects on foliage.",
      },
    ],
    immediateActions: [
      "Wrap a sticky barrier band around the trunk today to block ants from reaching and protecting the honeydew pests.",
      "Place ant bait stations along foraging trails to reduce the colony that is guarding the sap-sucking insects.",
    ],
    treatments: [
      {
        situation: "Break the mutualism",
        treatment:
          "Exclude ants with trunk barriers and baits so natural enemies can suppress the aphids, scales, and mealybugs.",
      },
      {
        situation: "Combined control",
        treatment:
          "Treat the honeydew-producing pests with horticultural oil while controlling the ants that shield them.",
      },
    ],
    avoid: [
      "Avoid controlling only the sap-sucking pests while ignoring ants, since ants keep reintroducing and protecting them.",
    ],
    recoveryTimeline:
      "Once ants are excluded, natural enemies typically bring honeydew pests down over a few weeks and sooty mold weathers off.",
    prevention: [
      "Maintain sticky trunk barriers and baits to keep ants from tending honeydew-producing insects on valued plants.",
      "Prune branches touching structures or the ground that give ants alternate access around trunk barriers.",
    ],
    monitoringThresholds: [
      "Renew ant exclusion when ants reappear on the trunk tending pests or honeydew begins accumulating again.",
    ],
    escalationCriteria: [
      "Seek professional pest control if large or aggressive ant colonies cannot be excluded from valued plantings.",
    ],
    sources: [
      {
        label: "UC IPM Ants",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7411.html",
      },
    ],
  },
  {
    id: "boxwood-leafminer",
    name: "Boxwood Leafminer",
    category: "insect-pest",
    affectedPlants: ["ornamentals", "trees-shrubs"],
    specificHosts: ["Boxwood"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["inside leaves", "leaf undersides"],
    symptomProgression:
      "Larvae mine between the leaf surfaces, producing blister-like swellings on the underside that turn leaves yellow and blotchy, and heavy infestations cause premature leaf drop and thin, unhealthy boxwood.",
    observableSigns: [
      "Boxwood leaves show raised blister-like mines and yellow blotching, especially visible on the undersides.",
      "Tiny orange midge-like adults emerge in spring, and larvae are found inside the blistered mines.",
    ],
    favorableConditions: [
      "Susceptible boxwood cultivars and warm spring adult emergence favor damaging boxwood leafminer populations.",
    ],
    lookalikes: [
      {
        condition: "Boxwood psyllid",
        differentiator:
          "Boxwood psyllid cups the new leaves from outside feeding, unlike the internal blister mines of the leafminer.",
      },
      {
        condition: "Winter injury",
        differentiator:
          "Winter burn bronzes leaves uniformly without the raised blister mines and internal larvae of the leafminer.",
      },
    ],
    immediateActions: [
      "Prune out and destroy the most heavily mined and blistered foliage today to remove larvae from the shrub.",
      "Inspect leaf undersides for the blister mines to confirm the pest before choosing a treatment.",
    ],
    treatments: [
      {
        situation: "Adult emergence",
        treatment:
          "Apply a labeled insecticide when the orange adults emerge in spring, timed as new growth begins.",
      },
      {
        situation: "Systemic control",
        treatment:
          "Use a labeled systemic insecticide to reach larvae protected inside the mines during their feeding period.",
      },
    ],
    avoid: [
      "Avoid contact sprays after larvae are sealed inside the mines, since the leaf tissue shields them from treatment.",
    ],
    recoveryTimeline:
      "Boxwood pushes clean new growth over a season once larvae are controlled and mined leaves are pruned away.",
    prevention: [
      "Plant resistant boxwood cultivars and prune to remove overwintering larvae in mined leaves.",
      "Time treatments to spring adult emergence and keep shrubs vigorous to tolerate light mining.",
    ],
    monitoringThresholds: [
      "Treat when adults emerge in spring or mining is widespread on the previous year's foliage.",
    ],
    escalationCriteria: [
      "Consult a landscape professional if repeated heavy mining thins and disfigures valuable boxwood hedges.",
    ],
    sources: [
      {
        label: "University of Maryland Extension Boxwood Leafminer",
        url: "https://extension.umd.edu/resource/boxwood-leafminer/",
      },
    ],
  },
  {
    id: "leaf-footed-bug",
    name: "Leaf-Footed Bug",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden", "fruit-trees"],
    specificHosts: ["Tomato", "Pomegranate", "Citrus", "Pecan", "Bean"],
    growthStages: ["flowering", "fruiting"],
    symptomLocations: ["fruit", "seeds", "developing pods"],
    symptomProgression:
      "Leaf-footed bugs pierce developing fruit and seeds with their needle-like mouthparts, causing sunken discolored spots, hardened areas, and aborted or deformed fruit and nuts as feeding continues through fruiting.",
    observableSigns: [
      "Large brownish bugs with distinctive leaf-like flared hind legs cluster on fruit and seed heads.",
      "Fruit shows sunken pale or discolored feeding spots, and seeds and nuts become shriveled or deformed.",
    ],
    favorableConditions: [
      "Warm seasons, weedy field edges, and nearby overwintering shelter favor leaf-footed bug movement into gardens.",
    ],
    lookalikes: [
      {
        condition: "Squash bug",
        differentiator:
          "Squash bugs lack the flared leaf-like hind legs of leaf-footed bugs and feed mainly on cucurbit foliage rather than fruit.",
      },
      {
        condition: "Assassin bug (beneficial)",
        differentiator:
          "Assassin bugs are predators without leaf-shaped legs and should be spared, unlike the fruit-feeding leaf-footed bugs.",
      },
    ],
    immediateActions: [
      "Handpick the clustered bugs and their nymphs into soapy water in the cool morning today.",
      "Remove weedy hosts and overwintering debris around the garden to reduce the bugs moving into crops.",
    ],
    treatments: [
      {
        situation: "Home garden",
        treatment:
          "Use handpicking, row covers on vulnerable crops, and spot treatment with a labeled insecticide when numbers climb.",
      },
      {
        situation: "Nymph stage",
        treatment:
          "Target the clustered young nymphs with insecticidal soap or a labeled product, since they are easier to kill.",
      },
    ],
    avoid: [
      "Avoid killing similar-looking beneficial assassin bugs, so confirm the flared hind legs before treating.",
    ],
    recoveryTimeline:
      "Already-damaged fruit stays blemished, but protecting later fruit preserves the remaining crop through the season.",
    prevention: [
      "Remove weedy hosts and winter shelter near gardens and scout fruit clusters during fruiting.",
      "Use row covers on vulnerable crops until fruit set and handpick aggregations before they build.",
    ],
    monitoringThresholds: [
      "Increase control when bugs cluster on many fruit or nymph aggregations appear during fruit development.",
    ],
    escalationCriteria: [
      "Seek extension guidance where leaf-footed bugs cause repeated heavy losses in fruit and nut crops.",
    ],
    sources: [
      {
        label: "UC IPM Leaffooted Bug",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn74168.html",
      },
    ],
  },
  {
    id: "spongy-moth",
    name: "Spongy Moth (formerly Gypsy Moth)",
    category: "insect-pest",
    affectedPlants: ["trees-shrubs"],
    specificHosts: ["Oak", "Aspen", "Birch", "Willow", "Apple"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["leaves", "trunk", "branches"],
    symptomProgression:
      "Caterpillars hatch in spring and feed on hardwood leaves, and during outbreak years they can completely defoliate trees, with repeated defoliation weakening and killing oaks and other stressed hosts over time.",
    observableSigns: [
      "Hairy caterpillars with paired blue and red dots along the back feed on leaves and rest on the trunk by day.",
      "Tan felt-like egg masses coat trunks, branches, and outdoor surfaces, and heavy defoliation strips the canopy.",
    ],
    favorableConditions: [
      "Outbreak cycles in oak-dominated forests and warm springs favor explosive spongy moth defoliation.",
    ],
    lookalikes: [
      {
        condition: "Eastern tent caterpillar",
        differentiator:
          "Tent caterpillars build silken nests in branch forks, whereas spongy moth caterpillars disperse and build no tent.",
      },
      {
        condition: "Fall webworm",
        differentiator:
          "Fall webworm feeds inside late-summer webs, unlike the tent-free spring feeding of spongy moth caterpillars.",
      },
    ],
    immediateActions: [
      "Scrape tan egg masses off trunks and surfaces into soapy water in fall or winter today to reduce next year's hatch.",
      "Wrap burlap bands around trunks to trap caterpillars sheltering by day and destroy those collected.",
    ],
    treatments: [
      {
        situation: "Young caterpillars",
        treatment:
          "Apply Bacillus thuringiensis kurstaki to foliage while caterpillars are small for effective early control.",
      },
      {
        situation: "High-value trees",
        treatment:
          "Use burlap trunk banding, egg-mass removal, and professional treatment to protect valued specimen trees.",
      },
    ],
    avoid: [
      "Avoid moving firewood and outdoor items with egg masses attached, which spreads the moth to new areas.",
    ],
    recoveryTimeline:
      "Healthy hardwoods usually releaf after a single defoliation, but repeated years of defoliation can kill stressed trees.",
    prevention: [
      "Scout for and destroy egg masses in fall and winter and band trunks to intercept climbing caterpillars.",
      "Keep trees vigorous and report new infestations, and avoid transporting egg-laden materials.",
    ],
    monitoringThresholds: [
      "Treat when young caterpillars and numerous egg masses indicate an impending heavy defoliation of valued trees.",
    ],
    escalationCriteria: [
      "Engage an arborist or report to authorities when outbreaks threaten to repeatedly defoliate and kill trees.",
    ],
    sources: [
      {
        label: "USDA Forest Service Spongy Moth",
        url: "https://www.fs.usda.gov/foresthealth/technology/spongy_moth.shtml",
      },
    ],
  },
  {
    id: "european-corn-borer",
    name: "European Corn Borer",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Sweet corn", "Pepper", "Potato", "Bean", "Corn"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["stalks", "ear shank", "leaf whorl"],
    symptomProgression:
      "Larvae first feed in the leaf whorl leaving shot-hole feeding, then tunnel into stalks and ear shanks, weakening stalks so they break and allowing entry of rot into ears and pepper fruit.",
    observableSigns: [
      "Rows of small shot holes appear across leaves as they unfurl from the whorl where young larvae fed.",
      "Sawdust-like frass exudes from entry holes in stalks and ear shanks where larvae have tunneled inside.",
    ],
    favorableConditions: [
      "Warm seasons with multiple moth generations and continuous corn plantings favor European corn borer buildup.",
    ],
    lookalikes: [
      {
        condition: "Corn earworm",
        differentiator:
          "Corn earworm feeds at the ear tip from the silk end, while corn borer tunnels into stalks and the ear shank.",
      },
      {
        condition: "Stalk rot disease",
        differentiator:
          "Stalk rot softens and discolors tissue without the round frass-filled entry holes and larvae of borer tunneling.",
      },
    ],
    immediateActions: [
      "Scout whorls for shot-hole feeding and frass today to detect young larvae before they bore into the stalk.",
      "Cut and destroy heavily infested stalks and remove crop debris that shelters overwintering larvae.",
    ],
    treatments: [
      {
        situation: "Whorl stage",
        treatment:
          "Apply Bacillus thuringiensis or spinosad into the whorl while larvae are exposed before they enter the stalk.",
      },
      {
        situation: "Population monitoring",
        treatment:
          "Use pheromone traps to time treatments and remove and shred cornstalks after harvest to reduce overwintering larvae.",
      },
    ],
    avoid: [
      "Avoid spraying after larvae have bored into stalks, since the tunneling protects them from any contact treatment.",
    ],
    recoveryTimeline:
      "Feeding damage cannot be reversed, but timely whorl treatment protects ears and later growth through the season.",
    prevention: [
      "Shred and destroy cornstalks after harvest and rotate crops to reduce overwintering corn borer larvae.",
      "Monitor with pheromone traps and treat whorls at the vulnerable stage before larvae tunnel into stalks.",
    ],
    monitoringThresholds: [
      "Treat when whorl feeding appears on many plants during moth flights indicated by pheromone trap catches.",
    ],
    escalationCriteria: [
      "Consult extension for a management program if borers repeatedly damage stalks and ears despite scouting.",
    ],
    sources: [
      {
        label: "University of Minnesota Extension European Corn Borer",
        url: "https://extension.umn.edu/corn-pest-management/european-corn-borer",
      },
    ],
  },
  {
    id: "mexican-bean-beetle",
    name: "Mexican Bean Beetle",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Snap bean", "Lima bean", "Soybean", "Cowpea", "Bean"],
    growthStages: ["vegetative", "flowering", "fruiting"],
    symptomLocations: ["leaf undersides", "leaves", "pods"],
    symptomProgression:
      "Yellow spiny larvae and copper-colored beetles feed on the undersides of bean leaves, skeletonizing them into a lacy network, and heavy feeding reduces vigor and yield and can damage developing pods.",
    observableSigns: [
      "Copper-colored beetles with black spots and spiny yellow larvae feed on the undersides of bean leaves.",
      "Leaves are skeletonized into a lacy net of veins, and yellow egg clusters sit on the leaf undersides.",
    ],
    favorableConditions: [
      "Warm weather, successive bean plantings, and mild winters that boost overwintering adults favor bean beetle buildup.",
    ],
    lookalikes: [
      {
        condition: "Lady beetle (beneficial)",
        differentiator:
          "Beneficial lady beetles are shiny red and eat aphids, unlike the dull coppery, spotted, plant-feeding Mexican bean beetle.",
      },
      {
        condition: "Japanese beetle",
        differentiator:
          "Japanese beetles are metallic green and chew whole holes, while bean beetles skeletonize leaf undersides.",
      },
    ],
    immediateActions: [
      "Crush the yellow egg clusters and handpick larvae and beetles from leaf undersides today.",
      "Inspect and remove heavily skeletonized leaves to reduce feeding sites and larval populations.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Apply spinosad or insecticidal soap to leaf undersides targeting larvae and continue handpicking adults.",
      },
      {
        situation: "Biological control",
        treatment:
          "Release the parasitic wasp Pediobius foveolatus where available to suppress Mexican bean beetle larvae.",
      },
    ],
    avoid: [
      "Avoid leaving old bean plantings and debris that shelter overwintering adults into the next season.",
    ],
    recoveryTimeline:
      "Bean plants recover and set pods once feeding is controlled, though heavily skeletonized leaves will not regreen.",
    prevention: [
      "Plant beans early, remove crop debris promptly, and rotate away from prior bean locations.",
      "Scout leaf undersides for egg clusters and larvae so control begins before skeletonizing spreads.",
    ],
    monitoringThresholds: [
      "Treat when larvae and egg clusters appear on many plants or skeletonizing affects a fifth of the foliage.",
    ],
    escalationCriteria: [
      "Seek extension guidance for parasitoid releases or resistance concerns where beetles persistently damage crops.",
    ],
    sources: [
      {
        label: "University of Maryland Extension Mexican Bean Beetle",
        url: "https://extension.umd.edu/resource/mexican-bean-beetles-vegetables/",
      },
    ],
  },
  {
    id: "cabbage-looper",
    name: "Cabbage Looper",
    category: "insect-pest",
    affectedPlants: ["vegetable-garden"],
    specificHosts: ["Cabbage", "Lettuce", "Broccoli", "Spinach", "Tomato"],
    growthStages: ["vegetative", "mature"],
    symptomLocations: ["leaves", "leaf undersides", "heads"],
    symptomProgression:
      "Green looping caterpillars chew large ragged holes in leaves and bore into heads, contaminating them with frass, and their feeding accelerates as larvae grow through successive generations in warm weather.",
    observableSigns: [
      "Smooth green caterpillars that arch their bodies into a loop as they crawl feed on leaves and heads.",
      "Large irregular holes and green frass appear on foliage, and gray-brown moths fly over the crop at dusk.",
    ],
    favorableConditions: [
      "Warm season plantings and continuous moth flights favor overlapping cabbage looper generations on many crops.",
    ],
    lookalikes: [
      {
        condition: "Imported cabbageworm",
        differentiator:
          "The imported cabbageworm is velvety and crawls smoothly, while the smooth looper arches into a distinctive loop.",
      },
      {
        condition: "Diamondback moth larvae",
        differentiator:
          "Diamondback larvae are much smaller and wriggle off on a thread, unlike the larger looping cabbage looper.",
      },
    ],
    immediateActions: [
      "Handpick the looping caterpillars and check leaf undersides for eggs and larvae today.",
      "Inspect and shake plants to dislodge the green caterpillars and reduce the feeding population.",
    ],
    treatments: [
      {
        situation: "Organic option",
        treatment:
          "Spray Bacillus thuringiensis kurstaki on all leaf surfaces every seven to ten days while larvae are feeding.",
      },
      {
        situation: "Season-long protection",
        treatment:
          "Use floating row covers on susceptible crops and rotate to spinosad if Bt tolerance appears.",
      },
    ],
    avoid: [
      "Avoid leaving crops uncovered near flowering weeds that attract the egg-laying looper moths.",
    ],
    recoveryTimeline:
      "Feeding stops within days of effective Bt treatment, and young plants regrow clean foliage afterward.",
    prevention: [
      "Install row covers at planting and scout leaf undersides weekly for eggs and small loopers.",
      "Encourage parasitic wasps and avoid broad insecticides that disrupt the loopers' natural enemies.",
    ],
    monitoringThresholds: [
      "Treat when feeding holes appear on multiple plants or several loopers per plant are found during scouting.",
    ],
    escalationCriteria: [
      "Seek extension guidance if multiple caterpillar species overwhelm Bt and row covers across the planting.",
    ],
    sources: [
      {
        label: "UC IPM Cabbage Looper",
        url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7487.html",
      },
    ],
  },
  {
    id: "rose-midge",
    name: "Rose Midge",
    category: "insect-pest",
    affectedPlants: ["ornamentals"],
    specificHosts: ["Rose"],
    growthStages: ["vegetative", "flowering"],
    symptomLocations: ["shoot tips", "flower buds", "new growth"],
    symptomProgression:
      "Tiny midge larvae feed inside developing buds and shoot tips, killing them so the growing points blacken, curl, and abort, and repeated generations can stop a rose from producing any blooms all season.",
    observableSigns: [
      "New shoot tips and flower buds blacken, wither, and die back, halting bloom production on the plant.",
      "Tiny orange maggot-like larvae are found inside the dying buds and growing tips when they are opened.",
    ],
    favorableConditions: [
      "Warm weather and continuous flushes of tender rose growth favor rapid rose midge generations.",
    ],
    lookalikes: [
      {
        condition: "Aphid bud damage",
        differentiator:
          "Aphids leave living distorted buds coated with insects, whereas rose midge blackens and kills the buds entirely.",
      },
      {
        condition: "Thrips flower injury",
        differentiator:
          "Thrips streak and distort opening flowers, while rose midge destroys the buds before they can open at all.",
      },
    ],
    immediateActions: [
      "Prune out and destroy all blackened dead shoot tips and buds today to remove the larvae inside them.",
      "Rake and dispose of debris and mulch beneath affected roses where midge pupae develop in the soil.",
    ],
    treatments: [
      {
        situation: "Cultural control",
        treatment:
          "Repeatedly prune and destroy infested tips and refresh mulch to interrupt the midge's short life cycle.",
      },
      {
        situation: "Persistent infestation",
        treatment:
          "Apply a labeled systemic or soil insecticide targeting larvae and pupae when pruning alone is insufficient.",
      },
    ],
    avoid: [
      "Avoid composting the pruned blackened tips near roses, since larvae and pupae can complete development there.",
    ],
    recoveryTimeline:
      "Roses resume normal budding within a few weeks once infested tips are removed and the midge cycle is broken.",
    prevention: [
      "Scout shoot tips regularly and promptly remove blackened growth to prevent midge generations from building.",
      "Keep beds clean of debris and refresh mulch to reduce pupation sites in the soil beneath roses.",
    ],
    monitoringThresholds: [
      "Act immediately when shoot tips begin blackening, since untreated midge can eliminate blooms for the whole season.",
    ],
    escalationCriteria: [
      "Consult a rosarian or extension office if bud death continues despite repeated pruning and sanitation.",
    ],
    sources: [
      {
        label: "University of Illinois Extension Rose Midge",
        url: "https://extension.illinois.edu/blogs/garden-scoop/2021-08-13-rose-problems",
      },
    ],
  },
  {
    id: "woolly-adelgid-hemlock",
    name: "Hemlock Woolly Adelgid",
    category: "insect-pest",
    affectedPlants: ["trees-shrubs"],
    specificHosts: ["Eastern hemlock", "Carolina hemlock", "Hemlock"],
    growthStages: ["mature"],
    symptomLocations: ["needle bases", "twigs", "branches"],
    symptomProgression:
      "This sap-sucking insect feeds at the base of hemlock needles, and as it multiplies the tree loses needles, branches gray and die back, and untreated infested hemlocks decline and die over several years.",
    observableSigns: [
      "White woolly waxy masses like tiny cotton balls line the undersides of twigs at the base of the needles.",
      "Needles gray and drop, new growth is sparse, and branches thin and die back from the infestation.",
    ],
    favorableConditions: [
      "Presence of eastern or Carolina hemlock within the adelgid's range and mild winters favor its spread and buildup.",
    ],
    lookalikes: [
      {
        condition: "Elongate hemlock scale",
        differentiator:
          "Elongate hemlock scale forms flat brown-and-yellow scales on needles rather than the white woolly twig masses of the adelgid.",
      },
      {
        condition: "Spider mite decline",
        differentiator:
          "Mite injury stipples and bronzes needles without the diagnostic white woolly masses at the needle bases.",
      },
    ],
    immediateActions: [
      "Inspect twig undersides today for the white woolly masses to confirm hemlock woolly adelgid.",
      "Avoid moving infested hemlock material and report new infestations to help limit local spread.",
    ],
    treatments: [
      {
        situation: "High-value trees",
        treatment:
          "Apply a labeled systemic imidacloprid or dinotefuran soil or trunk treatment to protect valued hemlocks.",
      },
      {
        situation: "Accessible foliage",
        treatment:
          "Spray horticultural oil thoroughly on reachable infested foliage to smother the adelgids on smaller trees.",
      },
    ],
    avoid: [
      "Avoid transporting infested hemlock branches or nursery stock, which spreads the adelgid to new areas.",
    ],
    recoveryTimeline:
      "Treated trees can be protected and slowly recover over seasons, while untreated infested hemlocks decline over years.",
    prevention: [
      "Monitor hemlocks regularly for woolly masses and begin systemic protection where the adelgid is confirmed nearby.",
      "Keep trees vigorous and avoid stress and moving infested material to slow spread and decline.",
    ],
    monitoringThresholds: [
      "Begin treatment once woolly masses are found, since untreated infestations progressively kill hemlocks.",
    ],
    escalationCriteria: [
      "Engage an arborist for systemic treatment as soon as hemlock woolly adelgid is confirmed on valued trees.",
    ],
    sources: [
      {
        label: "USDA Forest Service Hemlock Woolly Adelgid",
        url: "https://www.fs.usda.gov/foresthealth/technology/hwa.shtml",
      },
    ],
  },
];
