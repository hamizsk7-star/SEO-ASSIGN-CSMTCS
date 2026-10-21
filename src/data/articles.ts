import { Article } from '../types/blog';

export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'the-geometry-of-ambergris',
    title: 'The Geometry of Ambergris: Marine Crystallography and Myth in Modern Formulations',
    deck: 'Decades adrift on pelagic tides convert a cetacean byproduct into the most complex, radiant fixative known to the olfactory arts.',
    category: 'Raw Materials',
    publishedDate: 'October 14, 2026',
    readTime: '7 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Senior Botanical Chemist & Archival Perfumer',
      initials: 'ER',
      bio: 'Elena specializes in marine resins and the GC-MS reconstitution of historical perfumery tinctures at the European Institute of Olfaction.',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    visualType: 'ambergris',
    imageUrl: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1600&q=85',
    photoCredit: 'Photo by Laura Chouette / Archival Glass Flacon & Maritime Light',
    palette: {
      bg: '#FAF7F0',
      accent: '#9A6B3A',
      subtle: '#E8E1D3'
    },
    notes: {
      top: ['Sea Salt Spray', 'Wind-Dried Kelp'],
      heart: ['Sun-Warmed Tobacco', 'Aged Labdanum'],
      base: ['Ambrein Crystals', 'Mineral Musk', 'Maritime Ozone'],
      character: 'Saline, velvety, luminous animalic, solar-cured driftwood'
    },
    excerpt: 'Ambergris does not perform like any other botanical or animalic raw material. In the beaker, it yields barely a quiet murmur; on warm pulse points, it acts as an acoustic chamber for every accompanying molecule.',
    tags: ['Ambergris', 'Tinctures', 'Marine Chemistry', 'Fixatives'],
    initialClaps: 342,
    content: [
      {
        type: 'paragraph',
        text: 'Among all materials in the perfumer’s organ, ambergris alone carries the paradox of beginning as a violent digestive rejection and ending as an emblem of timeless serenity. Egested into the vast expanse of the open sea by the sperm whale (Physeter macrocephalus), fresh ambergris is dark, viscous, and possesses an unbearable feculent odor. Yet, what follows is an alchemical odyssey spanning twenty to fifty years.'
      },
      {
        type: 'paragraph',
        text: 'Drifting across thousands of nautical miles, continuously battered by oceanic salt water, bleached by relentless ultraviolet solar radiation, and oxidatively cured by atmospheric oxygen, the substance hardens. It shifts from pitch-black sludge to a pale, chalky ash-grey stone, porous as pumice and brittle as dried bone. During this prolonged metamorphosis, its primary triterpene alcohol—ambrein—slowly degrades into a symphony of volatile aromatics: ambrinol, dihydro-gamma-ionone, and above all, (-)-ambrox.'
      },
      {
        type: 'pullquote',
        quote: 'To smell aged ambergris is not to smell an odor, but to experience an atmospheric tension—a warm, salted radiance that seems to emanate from within the observer’s own skin.',
        attribution: 'Elena Rostova, "The Pelagic Organ"'
      },
      {
        type: 'heading2',
        text: 'The Mechanism of Olfactory Fixation'
      },
      {
        type: 'paragraph',
        text: 'In high perfumery formulations, ambergris rarely acts as a loud protagonist. Instead, its supreme virtue lies in molecular fixation. Because ambrein oxidation fragments have massive steric bulk and low vapor pressures, they physically entangle more ephemeral, volatile top notes like Calabrian bergamot and neroli.'
      },
      {
        type: 'paragraph',
        text: 'Where a standard citrus accord might vanish into thin air within fifteen minutes, a 3% tincture of vintage silver ambergris suspends the citrus monoterpenes in a microscopic film upon the epidermis, releasing their brightness in slow, measured increments over six hours. It provides what French noses refer to as the "halo effect"—an invisible, shimmering envelope of scent that moves with the wearer like a second shadow.'
      },
      {
        type: 'aside',
        title: 'Analytical Insight: GC-MS Speciation',
        text: 'Gas chromatography–mass spectrometry reveals that genuine ocean-cured ambergris contains upwards of eighty distinct chemical constituents, including trace gamma-coronal and bicyclohomofarnesal, which cannot be wholly replicated by commercial synthetic ambroxan alone.'
      },
      {
        type: 'heading2',
        text: 'Ethics, CITES, and the Synthetic Horizon'
      },
      {
        type: 'paragraph',
        text: 'Because ambergris is naturally expelled flotsam collected along beaches in New Zealand, Madagascar, and the Irish coastline, its harvest inflicts no harm on living cetaceans. Nonetheless, strict wildlife protections and astronomical prices—often exceeding $30,000 per kilogram—have led most contemporary houses to rely on biotechnology.'
      },
      {
        type: 'paragraph',
        text: 'Using genetically engineered yeasts to ferment sugar into sclareol and subsequently into enantiomerically pure Ambrox Super, modern laboratories have democratized the molecule. Yet, for artisanal distillers who still prepare traditional ethanolic tinctures, shaking carboys in dark cellars for twelve months, nothing replaces the irreducible oceanic breath of the wild stone.'
      }
    ]
  },
  {
    id: 'art-02',
    slug: 'petrichor-decoded-geosmin-and-rain',
    title: 'Petrichor Decoded: Geosmin, Actinobacteria, and the Chemistry of Rain-Soaked Earth',
    deck: 'Why the human olfactory bulb detects the scent of wet stone and dry clay at five parts per trillion—far more acutely than a shark detects blood in ocean water.',
    category: 'Science & Sensation',
    publishedDate: 'October 08, 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Julian Vane',
      role: 'Sensory Neurobiologist & Chemical Ecologist',
      initials: 'JV',
      bio: 'Julian conducts research on mammalian chemoreception at Cambridge, investigating the evolutionary drivers of human scent perception.',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    visualType: 'petrichor',
    imageUrl: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1600&q=85',
    photoCredit: 'Photo by Max Bender / Raindrops on Cool Mineral Earth',
    palette: {
      bg: '#F4F7F5',
      accent: '#2D5A46',
      subtle: '#D7E3DC'
    },
    notes: {
      top: ['Atmospheric Ozone', 'Crushed Wet Slate'],
      heart: ['Geosmin Isolate', 'Damp Forest Peat'],
      base: ['Roots of Indian Vetiver', 'Fossilized Amber'],
      character: 'Mineral, humic, electric, ancestral, rain-cooled loam'
    },
    excerpt: 'Before a single raindrop touches dry summer topsoil, an aerosolized mist of volatile oils and bacterial metabolites leaps into the air. In 1964, two Australian mineral chemists gave this scent an enduring name: Petrichor.',
    tags: ['Petrichor', 'Geosmin', 'Neurobiology', 'Mitti Attar'],
    initialClaps: 512,
    content: [
      {
        type: 'paragraph',
        text: 'Consider the following evolutionary riddle: a great white shark can detect one part of blood in ten million parts of sea water. Yet the average human nose, often dismissed as an evolutionarily degraded sensory vestige, can detect geosmin—the signature molecule of damp earth—at a staggering concentration of five parts per trillion.'
      },
      {
        type: 'paragraph',
        text: 'To put this into perspective, five parts per trillion is equivalent to a single teaspoon of pure geosmin dissolved across two hundred Olympic-sized swimming pools. Why has our central nervous system maintained this superhuman sensitivity across hundreds of thousands of generations?'
      },
      {
        type: 'heading2',
        text: 'The Microscopic Architecture of a Raindrop'
      },
      {
        type: 'paragraph',
        text: 'In 2015, high-speed microphotography at MIT captured the exact physical mechanics of petrichor generation. When a raindrop falls onto porous soil or dry terracotta, tiny air bubbles become trapped between the droplet and the soil surface. Buoyant within the liquid, these microscopic bubbles rise rapidly to the top of the droplet and burst violently into the surrounding atmosphere.'
      },
      {
        type: 'paragraph',
        text: 'As they burst, they shoot thousands of ultrafine aerosols into the ambient wind. These aerosolized micro-droplets carry two principal olfactory payloads: volatile plant oils synthesized during dry droughts to retard seed germination, and geosmin synthesized by soil-dwelling filamentous bacteria called Streptomyces.'
      },
      {
        type: 'pullquote',
        quote: 'We do not smell petrichor merely as an aesthetic pleasure; we smell it as an ancient biological beacon signaling water, fertile pastures, and survival.',
        attribution: 'Dr. Julian Vane, "The Hydrological Nose"'
      },
      {
        type: 'heading2',
        text: 'Mitti Attar: Kannauj’s Distillation of Baked Soil'
      },
      {
        type: 'paragraph',
        text: 'Long before Western organic chemists isolated geosmin, the perfumers of Kannauj in Uttar Pradesh, India, had already mastered its harvest. For over four centuries, Kannauj artisans have produced Mitti Attar—the scent of rain-baked clay distilled into pure sandalwood oil.'
      },
      {
        type: 'paragraph',
        text: 'Using traditional clay deg-bhapka copper stills sealed with wet mud, unglazed terracotta discs mined from dried riverbeds are subjected to slow firewood hydrodistillation. The vapor carrying the baked mineral essence passes through bamboo pipes into an oil receiver submerged in cool water tanks. The resulting perfume is quiet, grounding, and intimately connected to the primordial earth.'
      }
    ]
  },
  {
    id: 'art-03',
    slug: 'the-lost-distillations-of-grasse',
    title: 'The Lost Distillations of Grasse: May Rose, Centifolia Petals, and the Vanishing Copper Stills',
    deck: 'Inside the dawn harvest of Provence, where four metric tons of Centifolia petals are gently pressed to yield a single liter of rose absolute.',
    category: 'Heritage & Terroir',
    publishedDate: 'September 28, 2026',
    readTime: '8 min read',
    author: {
      name: 'Camille de Montparnasse',
      role: 'Fragrance Historian & Terroir Journalist',
      initials: 'CM',
      bio: 'Camille is the author of "L’Alchimie Provençale" and chronicles the agricultural heritage of aromatic crops in the south of France.',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    visualType: 'rose',
    imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1600&q=85',
    photoCredit: 'Photo by Roman Kraft / Fresh Centifolia Rose Petals in Morning Light',
    palette: {
      bg: '#FAF4F5',
      accent: '#9E3C56',
      subtle: '#ECD5DC'
    },
    notes: {
      top: ['Green Sap', 'Dew-Wet Morning Air'],
      heart: ['Centifolia Rose Petals', 'Honeyed Damascenone'],
      base: ['Beeswax Absolute', 'Orris Root', 'Terracotta Dust'],
      character: 'Velvety, peppery, deeply floral, sweet honeyed wax'
    },
    excerpt: 'At 5:30 in the morning, before the Provençal sun burns away the sea mist from the Mediterranean bay of Cannes, the fields of Grasse release a scent that no artificial laboratory synthesizer has ever matched.',
    tags: ['Grasse', 'Rosa Centifolia', 'Distillation', 'French Heritage'],
    initialClaps: 429,
    content: [
      {
        type: 'paragraph',
        text: 'The town of Grasse perches on the limestone foothills of the Alpes-Maritimes like an ancient amphitheatric balcony overlooking the French Riviera. Here, a unique geological confluence of sheltered valley breezes, alkaline soil, and mild maritime air created what Edmond Roudnitska once called "the only sanctuary where flowers speak without an accent."'
      },
      {
        type: 'paragraph',
        text: 'Every May, for a narrow window of barely three weeks, the Rosa centifolia—the rose of a hundred petals—comes into bloom. Unlike the Bulgarian Damask rose (Rosa damascena), which is upright, spicy, and sharp, the Centifolia is globular, heavy, and voluptuous, carrying an intoxicating honeyed core with peppery green facets.'
      },
      {
        type: 'heading2',
        text: 'The Precision of the Dawn Harvest'
      },
      {
        type: 'paragraph',
        text: 'Timing is everything. Harvesters move down the rows with experienced hands, snapping the rose calyxes cleanly between thumb and index finger without tearing the stems. The flower must be gathered between dawn and 10:00 AM; if the midday sun strikes the petals, the volatile aromatic esters—phenyl ethyl alcohol, geraniol, and beta-damascenone—evaporate into the atmosphere.'
      },
      {
        type: 'paragraph',
        text: 'Burlap sacks filled with pink blossoms are rushed immediately to the extraction plants before thermal fermentation can set in. Four to five tons of freshly plucked petals are required to yield just one single kilogram of rose absolute.'
      },
      {
        type: 'pullquote',
        quote: 'When you open a drum of pure May Rose absolute, you do not just smell a flower; you smell the entire month of May in Provence—the soil, the limestone, the morning dampness, and the patient hands that harvested it.',
        attribution: 'Jacques Cavallier Belletrud, Master Perfumer'
      },
      {
        type: 'heading2',
        text: 'The Disappearing Terroir of the Riviera'
      },
      {
        type: 'paragraph',
        text: 'In the 1930s, Grasse was home to over two thousand hectares of flower fields. The pressures of Côte d’Azur real estate speculation, suburban villa development, and cheaper synthetic aroma-chemicals caused cultivation to plunge by ninety percent over the late twentieth century.'
      },
      {
        type: 'paragraph',
        text: 'Today, an ambitious renaissance spearheaded by young artisan growers and long-term patron contracts from legendary perfume houses has reversed the decline. UNESCO recognized the perfume heritage of Grasse as Intangible Cultural Heritage of Humanity in 2018, securing the survival of these sacred copper stills for future generations.'
      }
    ]
  },
  {
    id: 'art-04',
    slug: 'oud-mold-and-time-aquilaria-heartwood',
    title: 'Oud, Mold, and Time: Why Aquilaria Heartwood Remains Perfumery’s Darkest Obsession',
    deck: 'An infected tree fighting for its life inside Southeast Asian rain forests produces a resinous elixir worth more than raw platinum.',
    category: 'Rare Botanicals',
    publishedDate: 'September 15, 2026',
    readTime: '9 min read',
    author: {
      name: 'Tariq Al-Mansoor',
      role: 'Master Distiller & Arabian Scent Scholar',
      initials: 'TA',
      bio: 'Tariq runs an artisanal distillation atelier in Muscat, Oman, traveling across Assam, Cambodia, and Borneo to source sustainable wild-fallen agarwood.',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    visualType: 'oud',
    imageUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=1600&q=85',
    photoCredit: 'Photo by Denis Volkov / Resinous Dark Agarwood and Sacred Smoke',
    palette: {
      bg: '#F9F6F0',
      accent: '#6E4720',
      subtle: '#E2D5C3'
    },
    notes: {
      top: ['Charred Saffron', 'Wild Cardamom'],
      heart: ['Dark Balsamic Smoke', 'Fermented Plum'],
      base: ['Aquilaria Resin', 'Castoreum Leather', 'Earth Peat'],
      character: 'Smoky, deep animalic, leathery, spiritual resin'
    },
    excerpt: 'Healthy Aquilaria trees are pale, soft, and odorless. It is only when the tree suffers an aggressive fungal infection that it mounts an alchemical defense, saturating its heartwood with dark aromatic oleoresin.',
    tags: ['Oud', 'Agarwood', 'Aquilaria', 'Artisanal Distillation'],
    initialClaps: 684,
    content: [
      {
        type: 'paragraph',
        text: 'In the dense, tropical canopies of Assam, Cambodia, and Kalimantan, there grows a fast-growing evergreen tree known to botanists as Aquilaria agallocha. In its healthy state, its timber is remarkably ordinary: lightweight, whitish-yellow, and completely devoid of scent.'
      },
      {
        type: 'paragraph',
        text: 'However, when a boring insect bores into the trunk or a monsoon branch snaps, exposing the interior wood to spores of the Phialophora parasitica fungus, the tree mounts a desperate immunological response. To wall off the infection, it generates a dense, sticky, dark brown protective resin saturated with sesquiterpenes.'
      },
      {
        type: 'heading2',
        text: 'The Sinking Quality: Kyara and Kinam'
      },
      {
        type: 'paragraph',
        text: 'Over decades—sometimes centuries—the tree’s heartwood becomes so thoroughly engorged with resin that its specific gravity surpasses that of water. In traditional Asian classification systems, this grade is termed "sinking wood" (kinam in Chinese, kyara in Japanese Koh-do incense ceremonies).'
      },
      {
        type: 'paragraph',
        text: 'A tiny chip of genuine wild kyara, when placed upon a mica plate over a heated charcoal burner, does not merely burn; it bubbles with glistening dark oil, filling the chamber with balsamic notes of dried cherries, antique leather, incense smoke, and an unearthly honeyed sweetness.'
      },
      {
        type: 'pullquote',
        quote: 'Western perfumery treats oud as a blunt battering ram of synthetic barnyard skank. Real aged wild oud is not brutal; it is a serene Buddhist temple in the twilight rain.',
        attribution: 'Tariq Al-Mansoor, Notes from the Muscat Still'
      },
      {
        type: 'heading2',
        text: 'Distillation Terroir: Assam vs. Trat vs. Merauke'
      },
      {
        type: 'paragraph',
        text: 'Just as Pinot Noir reflects Burgundian limestone, oud oil mirrors its local distillation microclimate. Indian Assam oud undergoes a traditional water-soaking fermentation phase before boiling, producing the prized pungent, barnyard, cheesy facets beloved in the Gulf.'
      },
      {
        type: 'paragraph',
        text: 'Conversely, Trat oud from Thailand is celebrated for apricot jam and red berry nuances, while Papuan Merauke oud smells of petrichor, dark green jungle canopy, and wet swamp moss. Each bottle is a liquid fingerprint of microbial conflict frozen in time.'
      }
    ]
  },
  {
    id: 'art-05',
    slug: 'dismantling-the-19th-century-olfactory-pyramid',
    title: 'Top, Heart, and Base: Dismantling the 19th-Century Olfactory Pyramid for Non-Linear Scent Architecture',
    deck: 'Why the rigid three-tiered pyramid is an outdated commercial marketing fiction, and how modern masters construct spherical, kaleidoscopic compositions.',
    category: 'Craft & Formulation',
    publishedDate: 'August 30, 2026',
    readTime: '7 min read',
    author: {
      name: 'Severine Laurent',
      role: 'Formulation Architect & Scent Critic',
      initials: 'SL',
      bio: 'Former senior evaluator at Givaudan, Severine writes critical treatises on modern fragrance architecture and synthetic molecules.',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    visualType: 'pyramid',
    imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1600&q=85',
    photoCredit: 'Photo by Fulvio Ciccolo / Modern Formulation Glassware and Pipettes',
    palette: {
      bg: '#F8F6F4',
      accent: '#3E4968',
      subtle: '#D8DCE6'
    },
    notes: {
      top: ['Non-Linear Hedione', 'Vaporized Calone'],
      heart: ['Iso E Super Resonance', 'Concrete Rose'],
      base: ['Macrocyclic Musk', 'Ethereal Cedar'],
      character: 'Holographic, luminous, radiant, spherical diffusion'
    },
    excerpt: 'Open any perfume marketing brochure and you will find it: a tidy pyramid showing sparkling citrus at the peak, romantic florals in the center, and heavy resins at the foundation. But inside the formulation lab, scent does not operate in neat vertical layers.',
    tags: ['Formulation', 'Perfumery Architecture', 'Iso E Super', 'Molecular Design'],
    initialClaps: 395,
    content: [
      {
        type: 'paragraph',
        text: 'Every perfume enthusiast is familiar with the canonical pyramid: Top Notes (0–15 minutes), Heart Notes (15–60 minutes), and Base Notes (2–12 hours). Invented in late nineteenth-century France to explain vapor pressures to retail counter clerks, this diagrammatic model has outlived its scientific and aesthetic utility.'
      },
      {
        type: 'paragraph',
        text: 'The physical reality of fragrance evaporation is not a clean baton pass from one distinct group of molecules to the next. Olfactory perception is a continuous, dynamic chemical equilibrium influenced by vapor pressure, azeotropic co-distillation, thermodynamic activity coefficients, and skin-lipid absorption.'
      },
      {
        type: 'heading2',
        text: 'The Advent of the Spherical Accord'
      },
      {
        type: 'paragraph',
        text: 'In 1990, perfumer Sophia Grojsman revolutionized the art with Lancôme’s Trésor, creating what is known as the "Grojsman Accord" (composed of equal parts Iso E Super, Hedione, Galaxolide, and methyl ionone). Instead of a pyramid that gradually burns down like a candle, Grojsman created a massive, radiant heart that exploded simultaneously from the very first second.'
      },
      {
        type: 'paragraph',
        text: 'The perfume did not "develop" in the traditional sense; rather, it functioned like an omnidirectional sphere of light. The top notes were not a separate opening act; they were merely highlighting glints upon the surface of the central sculpture.'
      },
      {
        type: 'pullquote',
        quote: 'A great modern perfume should not be an unfolding drama in three distinct acts; it should be a holographic presence that is complete, harmonious, and identifiable from the instant it touches the skin.',
        attribution: 'Severine Laurent, "Beyond the Pyramid"'
      },
      {
        type: 'heading2',
        text: 'Monolithic and Kinetic Structures'
      },
      {
        type: 'paragraph',
        text: 'Today’s avant-garde perfumers design with alternative architectural models. We see "kaleidoscopic scents," where two opposing accords oscillate back and forth like a magnetic pendulum, or "monolithic scents," where heavy base molecules are chemically propelled upward by massive overdoses of modern radiant aldehydes.'
      },
      {
        type: 'paragraph',
        text: 'By abandoning the nineteenth-century pyramid, contemporary perfumers have freed scent to mirror contemporary architecture: airy, asymmetrical, cantilevered, and full of deliberate negative space.'
      }
    ]
  },
  {
    id: 'art-06',
    slug: 'the-resinous-soul-of-somali-frankincense',
    title: 'The Resinous Soul of Somali Frankincense: Boswellia Carterii in the Valleys of Puntland',
    deck: 'Trekking into the sun-blanched limestone cliffs of the Horn of Africa, where ancient resin harvesters sustain a 5,000-year trade route.',
    category: 'Expeditions & Sourcing',
    publishedDate: 'August 18, 2026',
    readTime: '8 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Senior Botanical Chemist & Archival Perfumer',
      initials: 'ER',
      bio: 'Elena specializes in marine resins and the GC-MS reconstitution of historical perfumery tinctures at the European Institute of Olfaction.',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    visualType: 'frankincense',
    imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1600&q=85',
    photoCredit: 'Photo by Kelly Sikkema / Cured Golden Boswellia Resins and Incense Tears',
    palette: {
      bg: '#FAF8F2',
      accent: '#8C5E28',
      subtle: '#EAE1CE'
    },
    notes: {
      top: ['Sparkling Lemon Terpene', 'Pink Peppercorn'],
      heart: ['Boswellic Tears', 'Desert Pine Needle'],
      base: ['Smoked Myrrh', 'Limestone Mineral', 'Dry Cistus'],
      character: 'Luminous, ecclesiastical, citrus-coniferous, sacred resin'
    },
    excerpt: 'Clinging directly to vertical limestone cliffs with roots that resemble molten candle wax, the Boswellia tree thrives where almost no other vegetation can draw life. Its tears have scented Egyptian funerary rites, Roman triumphs, and Orthodox cathedrals for millennia.',
    tags: ['Frankincense', 'Somalia', 'Boswellia', 'Resin Harvesting'],
    initialClaps: 461,
    content: [
      {
        type: 'paragraph',
        text: 'To reach the wild stands of Boswellia carterii in Puntland, northeastern Somalia, one must cross terrain that seems forged out of pure sunlight and pulverized limestone. Here, where summer temperatures regularly exceed 45 degrees Celsius and annual rainfall is measured in minutes, the frankincense tree performs a daily miracle of botanical endurance.'
      },
      {
        type: 'paragraph',
        text: 'The tree does not grow in rich soil; it anchors itself directly into fissure cracks of limestone precipices overlooking the Gulf of Aden. Its thick, swollen trunk acts as a water storage reservoir, and its peeling papery bark protects the vascular cambium from thermal desiccation.'
      },
      {
        type: 'heading2',
        text: 'The Mingaf and the Tears of Puntland'
      },
      {
        type: 'paragraph',
        text: 'Resin collection is an hereditary craft passed down across Somali clans through strict customary laws known as xeer. Using a specialized circular scraping chisel called a mingaf, harvesters make shallow, surgical incisions into the bark, scraping away thin outer layers without piercing the heartwood.'
      },
      {
        type: 'paragraph',
        text: 'In response, the tree secretes a milky latex to cauterize the wound. Exposed to desert dry winds, the liquid coagulates over two to three weeks into translucent golden and milky droplets known as "tears" (luban). Harvesters return in cycles, grading the tears by size, clarity, and citrus-terpene content.'
      },
      {
        type: 'pullquote',
        quote: 'Unlike dark, leathery labdanum, frankincense is a resin made of light. Its high alpha-pinene and limonene content grants it a radiant lemon-pepper sparkle that lifts compositions straight toward the heavens.',
        attribution: 'Elena Rostova, Expedition Logbook'
      },
      {
        type: 'heading2',
        text: 'Sustainability and Global Demand'
      },
      {
        type: 'paragraph',
        text: 'Surging worldwide demand for essential oils and wellness aromatherapy has placed unprecedented strain on wild Boswellia populations. When trees are tapped twelve times a year instead of the traditional sustainable five, their seeds lose germination viability and mortality skyrockets.'
      },
      {
        type: 'paragraph',
        text: 'Forward-thinking independent perfumeries now partner directly with local harvesting cooperatives, establishing GPS-tracked sustainable forest preserves and paying fair living wages to ensure that the sacred resin route will endure for another five millennia.'
      }
    ]
  },
  {
    id: 'art-07',
    slug: 'skin-chemistry-and-sillage-molecular-physics',
    title: 'Skin Chemistry & Sillage: The Molecular Physics of Diffusion, Heat, and Sebaceous Fixation',
    deck: 'Why the identical formulation projects with radiant grandeur on one person and vanishes into thin air on another.',
    category: 'The Living Canvas',
    publishedDate: 'August 02, 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Julian Vane',
      role: 'Sensory Neurobiologist & Chemical Ecologist',
      initials: 'JV',
      bio: 'Julian conducts research on mammalian chemoreception at Cambridge, investigating the evolutionary drivers of human scent perception.',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    visualType: 'skin',
    imageUrl: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1600&q=85',
    photoCredit: 'Photo by Karly Jones / Aerosolized Sillage and Epidermal Layering',
    palette: {
      bg: '#FBF7F4',
      accent: '#8B4E38',
      subtle: '#E8D9D2'
    },
    notes: {
      top: ['Subtle Aldehydic Sheen', 'Warm Bergamot'],
      heart: ['Clean Skin Musks', 'Iris Concrete'],
      base: ['Warm Sebum Lipid Accord', 'Sandalwood', 'Cashmeran'],
      character: 'Intimate, warm, epidermal, radiating velvety warmth'
    },
    excerpt: 'A bottle of perfume is only half of the equation; the human skin is an active chemical reactor. From epidermal surface pH to lipid composition and dermal micro-flora, your body fundamentally rewrites every fragrance you apply.',
    tags: ['Skin Chemistry', 'Diffusion', 'Sillage', 'Sensory Physics'],
    initialClaps: 578,
    content: [
      {
        type: 'paragraph',
        text: 'Every perfume enthusiast has experienced the disillusionment: a scent smells intoxicating on a testing blotter or on a friend, yet when sprayed onto one’s own wrist, it shifts drastically—either screeching with sharp sourness or collapsing into flat neutrality within minutes.'
      },
      {
        type: 'paragraph',
        text: 'The common explanation—"it’s just body chemistry"—is frequently dismissed as sales-counter myth. However, modern biophysics confirms that human skin is an extraordinarily complex, heterogeneous chemical reactor that dramatically modulates molecular diffusion.'
      },
      {
        type: 'heading2',
        text: 'The Lipid Reservoir and Henry’s Law'
      },
      {
        type: 'paragraph',
        text: 'The stratum corneum is covered by a natural emulsion of sebum and sweat containing squalene, wax esters, triglycerides, and free fatty acids. Perfume aroma-chemicals are lipophilic (fat-soluble) to varying degrees.'
      },
      {
        type: 'paragraph',
        text: 'On individuals with lipid-rich skin, hydrophobic base notes like Ambroxan, Galaxolide, and patchoulol dissolve readily into the epidermal sebum mantle. This acts as a slow-release chemical reservoir, dampening immediate vapor pressure but extending persistence by 200–300%.'
      },
      {
        type: 'pullquote',
        quote: 'Dry skin is an evaporative launchpad: volatile top notes erupt all at once and burn out like flash paper. Hydrated, lipid-balanced skin is a warm sponge that nurtures the scent over hours.',
        attribution: 'Dr. Julian Vane, "The Epidermal Reactor"'
      },
      {
        type: 'heading2',
        text: 'Surface Temperature and Boundary Layers'
      },
      {
        type: 'paragraph',
        text: 'Human skin is enveloped in a microscopic boundary layer of air heated by dermal capillaries. This micro-plume creates convective updrafts that carry vapor molecules upward toward the nose. Higher pulse-point temperatures increase molecular kinetic energy, boosting throw (projection) at the expense of longevity.'
      },
      {
        type: 'paragraph',
        text: 'Understanding these physical principles allows perfume wearers to optimize application: layering over an unscented ceramide moisturizer anchors top notes, while spraying onto clothing fibers (which lack warm lipids) preserves delicate floral structures in their purest acoustic fidelity.'
      }
    ]
  },
  {
    id: 'art-08',
    slug: 'iris-pallida-and-the-five-year-patience',
    title: 'Iris Pallida and the Five-Year Patience: Why Orris Butter Outvalues Gold',
    deck: 'No flower blooms can yield it. To capture the cool, powdery elegance of true orris, Tuscan farmers bury rhizomes for three years and cure them for two more.',
    category: 'Raw Materials',
    publishedDate: 'July 21, 2026',
    readTime: '7 min read',
    author: {
      name: 'Camille de Montparnasse',
      role: 'Fragrance Historian & Terroir Journalist',
      initials: 'CM',
      bio: 'Camille is the author of "L’Alchimie Provençale" and chronicles the agricultural heritage of aromatic crops in the south of France.',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    visualType: 'orris',
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1600&q=85',
    photoCredit: 'Photo by Evie S. / Botanical Florentine Iris Pallida in Tuscan Light',
    palette: {
      bg: '#F7F5FA',
      accent: '#5E4C7A',
      subtle: '#DDD7E8'
    },
    notes: {
      top: ['Cool Carrot Seed', 'Crisp Violet Leaf'],
      heart: ['Tuscan Iris Pallida Rhizome', 'Heliotrope Sheen'],
      base: ['Alpha-Irone Crystals', 'White Suede', 'Cedar Pith'],
      character: 'Powdery, aristocratic, cool violet, suede, earthy starlight'
    },
    excerpt: 'Orris butter is the aristocrat of raw materials. Costing upwards of €70,000 per kilogram, it smells neither sweet nor loud; its signature is an aloof, cool violet powder with earthy suede undertones.',
    tags: ['Orris Butter', 'Iris Pallida', 'Tuscany', 'Slow Perfumery'],
    initialClaps: 493,
    content: [
      {
        type: 'paragraph',
        text: 'Walk through the hillside terraces of San Polo in Chianti outside Florence in May, and you will see hillsides bathed in the pale violet-blue blossoms of Iris pallida. But a perfumer does not care about the flowers. The blossoms are discarded. The prize lies underground, in the knotty, gnarled rhizomes buried deep in rocky Tuscan soil.'
      },
      {
        type: 'paragraph',
        text: 'The fresh rhizome is completely odorless. If you slice it open upon harvest, it smells like raw turnip or damp starch. The elusive scent molecules that make orris famous—alpha- and beta-irones—do not exist inside the living plant.'
      },
      {
        type: 'heading2',
        text: 'The Alchemical Curing Process'
      },
      {
        type: 'paragraph',
        text: 'The production of orris is an exercise in extreme patience that borders on madness. First, the plant must grow undisturbed in Tuscan limestone soil for three full years. In July of the third year, the rhizomes are hand-dug with double-tined forks, peeled by hand, washed, and dried in the summer sun.'
      },
      {
        type: 'paragraph',
        text: 'Then begins the curing. The peeled roots are stored in burlap sacks in dark, temperature-controlled Tuscan barns for an additional two to three years. During this prolonged desiccation, natural enzymes slowly oxidize fatty triterpenes into irones.'
      },
      {
        type: 'pullquote',
        quote: 'Orris is not grown; it is aged like a Premier Cru Bordeaux. It demands half a decade of human labor before it yields a single gram of perfume.',
        attribution: 'Camille de Montparnasse, "The Roots of Florence"'
      },
      {
        type: 'heading2',
        text: 'Distillation of the Waxy Butter'
      },
      {
        type: 'paragraph',
        text: 'After five years, the rock-hard dried roots are pulverized into fine flour and hydro-distilled for several days. Because of high myristic acid content, the distillate solidifies at room temperature into a pale, creamy wax known as orris butter (beurre d’iris).'
      },
      {
        type: 'paragraph',
        text: 'To smell pure orris butter is to encounter an emotion rather than a simple note. It possesses the cool aloofness of vintage parchment, polished marble, pale kidskin gloves, and violet petals dusted with talc. It has anchored every monumental fragrance from Chanel No. 19 to Dior Homme.'
      }
    ]
  },
  {
    id: 'art-09',
    slug: 'the-minimalist-nose-jean-claude-ellena',
    title: 'The Minimalist Nose: Jean-Claude Ellena, Haiku Aesthetics, and the Art of Subtraction',
    deck: 'How a rebellious French master abandoned dense 200-ingredient formulas to write olfactory poetry using twenty luminous strokes.',
    category: 'Profiles & Noses',
    publishedDate: 'July 05, 2026',
    readTime: '7 min read',
    author: {
      name: 'Severine Laurent',
      role: 'Formulation Architect & Scent Critic',
      initials: 'SL',
      bio: 'Former senior evaluator at Givaudan, Severine writes critical treatises on modern fragrance architecture and synthetic molecules.',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    visualType: 'minimalist',
    imageUrl: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1600&q=85',
    photoCredit: 'Photo by Joanna Kosinska / Minimalist Geometry and Glass Transparency',
    palette: {
      bg: '#F9F8F5',
      accent: '#476355',
      subtle: '#D6E0DA'
    },
    notes: {
      top: ['Green Mango Skin', 'Bitter Orange Bigarade'],
      heart: ['Lotus Water Accord', 'Calamus Grass'],
      base: ['Sycamore Mineral', 'Cedar Shavings', 'Quiet Incense'],
      character: 'Translucent, watercolor, haiku-like, serene subtraction'
    },
    excerpt: 'In the 1980s, perfumery was dominated by baroque, heavy dynastic creations loaded with hundreds of competing materials. Jean-Claude Ellena looked at this cacophony and decided to do the opposite: remove everything until only the light remained.',
    tags: ['Jean-Claude Ellena', 'Hermès', 'Minimalism', 'Olfactory Philosophy'],
    initialClaps: 614,
    content: [
      {
        type: 'paragraph',
        text: 'Working in his secluded glass-and-wood studio tucked among pine trees in Cabris above Grasse, Jean-Claude Ellena formulated masterpieces with an organ of barely two hundred raw materials—less than a fifth of the palette used by conventional perfumers.'
      },
      {
        type: 'paragraph',
        text: 'For Ellena, perfumery was never about copying nature with literal realism. It was an intellectual discipline of illusion and suggestion, akin to Japanese haiku poetry or Chinese brush painting, where the empty white silk is as vital as the ink.'
      },
      {
        type: 'heading2',
        text: 'The Illusion of the Green Mango'
      },
      {
        type: 'paragraph',
        text: 'When tasked with composing Un Jardin sur le Nil for Hermès, Ellena traveled along the riverbanks of Aswan in Egypt. Walking through a garden on the island of Elephantine, he snapped an unripened green mango from a branch and smelled it.'
      },
      {
        type: 'paragraph',
        text: 'There is no such thing as an essential oil of green mango. Instead of trying to reconstruct every molecular fraction, Ellena captured its poetic soul using an astonishingly sparse formulation: a bitter grapefruit note juxtaposed against green calamus, carrot seed, and lotus blossoms over an airy mineral base.'
      },
      {
        type: 'pullquote',
        quote: 'Perfumery is the art of creating illusions. When I write a scent, I do not want to fill the room with noise; I want to create a quiet conversation between the skin and the wind.',
        attribution: 'Jean-Claude Ellena, "Journal d’un Parfumeur"'
      },
      {
        type: 'heading2',
        text: 'The Rigor of the Eraser'
      },
      {
        type: 'paragraph',
        text: 'Ellena’s enduring legacy is the elevation of restraint. In an industry perpetually seduced by louder projection and suffocating sillage, his works demonstrate that true luxury lives in transparency.'
      },
      {
        type: 'paragraph',
        text: 'His formulas resemble clean architectural sketches: each molecule has a clear, audible voice, and nothing is added merely to pad the weight of the bottle.'
      }
    ]
  },
  {
    id: 'art-10',
    slug: 'synesthesia-and-the-midnight-bloom-tuberose',
    title: 'Synesthesia and the Midnight Bloom: Tuberose, Indoles, and the Dangerous Allure of Night Flowers',
    deck: 'Why Victorian parents forbade young maidens from walking past tuberose gardens after dusk: the dark biology of nocturnal floral attraction.',
    category: 'Botanical Philosophy',
    publishedDate: 'June 19, 2026',
    readTime: '8 min read',
    author: {
      name: 'Tariq Al-Mansoor',
      role: 'Master Distiller & Arabian Scent Scholar',
      initials: 'TA',
      bio: 'Tariq runs an artisanal distillation atelier in Muscat, Oman, traveling across Assam, Cambodia, and Borneo to source sustainable wild-fallen agarwood.',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    visualType: 'tuberose',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
    photoCredit: 'Photo by Annie Spratt / Nocturnal White Blossoms in Twilight Shadows',
    palette: {
      bg: '#F8F6F8',
      accent: '#6B3A5A',
      subtle: '#E2D1DC'
    },
    notes: {
      top: ['Bitter Green Stems', 'Eucalyptus Chill'],
      heart: ['Night-Blooming Tuberose', 'Indolic Jasmine Absolute'],
      base: ['Warm Coconut Milk', 'White Musks', 'Animalic Leather'],
      character: 'Narcotic, creamy, carnal, nocturnal, dangerously seductive'
    },
    excerpt: 'Tuberose does not seek the bees of daylight. It waits for twilight, deploying heavy indoles, methyl anthranilate, and lactones to summon nocturnal hawk-moths from miles away across moonlit meadows.',
    tags: ['Tuberose', 'Indoles', 'Nocturnal Botanicals', 'Carnal Fragrance'],
    initialClaps: 531,
    content: [
      {
        type: 'paragraph',
        text: 'In the etiquette manuals of nineteenth-century Victorian England and Bourbon-era Italy, young unmarried women were explicitly warned against lingering in gardens where Polianthes tuberosa grew after sunset. The fear was neither superstition nor metaphor: moralists believed the intoxicating, narcotic perfume of the night flower could provoke uncontrollable carnal impulses.'
      },
      {
        type: 'paragraph',
        text: 'While Victorian moral anxiety has faded, the biochemical power of tuberose remains undisputed. It is perfumery’s most theatrical diva: simultaneously creamy, camphoraceous, tropical, and unsettlingly flesh-like.'
      },
      {
        type: 'heading2',
        text: 'The Nocturnal Strategy of White Flowers'
      },
      {
        type: 'paragraph',
        text: 'Daylight flowers rely on brilliant chromatic petals—vibrant reds, ultraviolet yellows, vivid blues—to guide diurnal pollinating insects like bees and butterflies. But night-blooming species like tuberose, night jasmine (Cestrum nocturnum), and gardenia cannot rely on visual color in the dark.'
      },
      {
        type: 'paragraph',
        text: 'Consequently, they invest their evolutionary energy into pure olfactory chemistry. Their petals are ghostly white to reflect whatever faint starlight or moonlight pierces the canopy, but their real weapon is volatile aromatic emission timed precisely to circadian rhythms.'
      },
      {
        type: 'pullquote',
        quote: 'Tuberose is the dark siren of botany. It opens with the freezing medical shock of menthol and camphor, blooms into unctuous tropical cream, and ends in the animal warmth of human breath.',
        attribution: 'Tariq Al-Mansoor, "The Midnight Organ"'
      },
      {
        type: 'heading2',
        text: 'The Indolic Shadow'
      },
      {
        type: 'paragraph',
        text: 'What distinguishes tuberose from innocent florals is its high concentration of indole. In synthetic isolation, indole carries a heavy, mothball, animalic note reminiscent of decay. Yet when balanced against natural benzyl salicylate and coconut lactones, it creates an electric, breathing pulse.'
      },
      {
        type: 'paragraph',
        text: 'It is this exact biological shadow that prevents tuberose from becoming saccharine. Like a Caravaggio painting, its radiant white highlights require pitch-black shadows to achieve their intoxicating, immortal depth.'
      }
    ]
  }
];

export const CATEGORIES = [
  'All Essays',
  'Raw Materials',
  'Science & Sensation',
  'Rare Botanicals',
  'Heritage & Terroir',
  'Craft & Formulation',
  'Profiles & Noses',
  'Botanical Philosophy',
  'The Living Canvas',
  'Expeditions & Sourcing'
] as const;
