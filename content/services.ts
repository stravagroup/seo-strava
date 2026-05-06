export interface Service {
  slug: string
  image?: string
  name: string
  shortDescription: string
  description: string
  features: string[]
  icon: string
  seoTitle: string
  seoDescription: string
  faqs: Array<{ q: string; a: string }>
}

export const services: Service[] = [
  {
    slug: 'wall-framing',
    image: '/erected-wall-frame.webp',
    name: 'Wall Framing',
    seoTitle: 'Wall Framing Sydney | Structural Framing Carpenters | Strava Group',
    seoDescription:
      'Above-standard wall framing in Sydney. Every stud checked, every plate cut on a drop saw, enhanced fixings throughout. Licensed framing carpenters. Call 0450 605 080.',
    shortDescription:
      'Structural wall framing where every stud is checked, every plate is straight, and every fixing is done twice.',
    description:
      "Most wall frames look identical from the outside. The difference shows up later — in the wavy plaster, the joinery that won't sit flush, the junction that opens up over winter. Wall framing is where every error gets locked in permanently. We treat it that way.\n\nEvery stud is individually checked before installation. Bows are identified, oriented in the same direction, and marked. Plates are cut on a drop saw — not measured and snapped — to eliminate the cumulative error that builds across long wall runs. Each stud receives rear nailing and side fixing. End studs get structural screws as standard. Junctions are pre-locked before walls are married together, with a face-fixed screw at the top of each junction.\n\nThe result is a frame that holds its geometry through erection, through the trades that follow, and through the building's life.",
    features: [
      'Individual stud selection — bows identified, oriented in one direction, and marked',
      'Drop saw plate cutting across all wall runs — no snapping, no cumulative drift',
      'Rear nail and side fix on every stud as standard',
      'Structural screws at all end studs',
      'Junctions pre-locked and face-fixed — stays tight over time',
      'Bowed and twisted plates rejected before they reach the floor',
      'True diagonal set-out verification — not 3-4-5',
    ],
    icon: 'wall',
    faqs: [
      {
        q: 'How much does wall framing cost in Sydney?',
        a: 'Budget roughly $40–60 per lineal metre for straight timber stud framing on a slab, depending on wall height, complexity, and access. That\'s a rough guide — contact us for a proper quote based on your plans.',
      },
      {
        q: 'Do you need a licensed carpenter to frame walls in NSW?',
        a: 'For structural wall framing that forms part of a building structure, yes. In NSW that\'s licensed work under the contractor licensing scheme. Anyone doing structural framing without a licence is taking a risk you\'ll carry long after they\'re gone.',
      },
      {
        q: 'How long does wall framing take?',
        a: 'A typical residential floor — three to four bedrooms, one or two bathrooms — takes three to four days for a crew. Larger floors with complex layouts take longer. We\'ll give you a timeline before we start.',
      },
      {
        q: 'What timber do you use for wall framing?',
        a: 'MGP10 machine-graded pine for structural studs and plates. We reject twisted, checked, or severely bowed material before it reaches the floor — not after it\'s nailed up.',
      },
      {
        q: 'Can you frame walls directly on a concrete slab?',
        a: 'Yes. Most residential construction in Sydney is slab-on-ground. Bottom plates are anchored to the slab using chemical or mechanical fixings specified in the engineer\'s details. We follow the documentation.',
      },
    ],
  },
  {
    slug: 'subfloor-framing',
    image: '/bottom-plate-shot.webp',
    name: 'Subfloor Framing',
    seoTitle: 'Subfloor Framing Sydney | Squeak-Free Floors | Strava Group',
    seoDescription:
      'Subfloor framing and floor levelling in Sydney. Polyurethane adhesive, ring-shank nails, full screw fix-off. No liquid nails. No squeaking. Call 0450 605 080.',
    shortDescription:
      'Squeak-free subfloors built on a level datum — because squeaking floors are a construction failure, not a maintenance issue.',
    description:
      "Squeaking floors are not a maintenance issue. They are a construction failure that happened before the first sheet was ever laid. The adhesive bridged. The joist crowned. The substrate moved. None of it was caught.\n\nWe catch it.\n\nThe slab is walked at all wall locations before framing begins. The highest point becomes the datum for the entire structure. All packing goes directly on the slab — not disguised at top-plate level where no one can see it. Before any sheet is laid, every joist gets a straightedge check for crowning and localised high points. Anything that isn't flat gets planed flat.\n\nLiquid nails are not used. They go brittle. They don't flex. They debond under cyclic loading — which is exactly what a floor does every day. We use polyurethane adhesive exclusively, applied in a 30 mm bead for full coverage and cushioning between joist and sheet. Ring-shank nails go in first, then a full screw fix-off after installation. Every tongue-and-groove joint and every butt joint gets adhesive. Expansion joints are installed to manufacturer requirements.\n\nIf it squeaks, we missed something. We don't miss things.",
    features: [
      'Slab walked and datum established before any frame goes in',
      'All packing at slab level — never hidden at top-plate',
      'Every joist straightedge-checked and planed before sheeting',
      'Polyurethane adhesive only — liquid nails not on site',
      '30 mm adhesive bead for full cushioning and coverage',
      'Ring-shank nails followed by full structural screw fix-off',
      'Double beams under point loads laminated, glued, and bolted',
      'Tensioned X-brace to subfloor underside where applicable',
    ],
    icon: 'floor',
    faqs: [
      {
        q: 'Why do new floors squeak?',
        a: 'Almost always the adhesive. Liquid nails goes brittle over time and debonds under the cyclic loading a floor experiences every day. We use polyurethane adhesive exclusively and don\'t bring liquid nails to site. [Read our full breakdown of why subfloors squeak — and why it\'s always a construction failure.](/blog/why-subfloors-squeak/)',
      },
      {
        q: 'How do you deal with an uneven slab?',
        a: 'We walk the slab at all wall locations first, find the highest point, and establish that as the datum for the whole structure. All packing sits directly on the slab. Nothing gets corrected at top-plate level where it\'s invisible — that\'s how you end up with a floor that looks level but squeaks at the low spots.',
      },
      {
        q: 'How long does subfloor framing take?',
        a: 'Typically two to three days per floor for a standard residential footprint. Varies with slab complexity, beam layout, and how much levelling work is required.',
      },
      {
        q: 'What flooring sheet thickness do you use?',
        a: '19 mm tongue-and-groove particleboard as standard for residential. 22 mm where the load or specification requires it. We follow the structural documentation.',
      },
      {
        q: 'Can you fix an existing squeaky floor without pulling it up?',
        a: 'Depends on access. If there\'s a subfloor cavity we can get into, we can inject adhesive and add screw fix-off from below. In a slab-on-ground building with no access, options are very limited. We\'ll tell you upfront if it\'s not fixable without demolition.',
      },
    ],
  },
  {
    slug: 'roof-framing',
    image: '/cathedral-ceiling-roof-frame.webp',
    name: 'Roof Framing',
    seoTitle: 'Roof Framing Sydney | Roof Carpenter Sydney | Strava Group',
    seoDescription:
      'Roof framing and roof carpentry in Sydney. Pre-camber control, hand-finished bird\'s mouths, Pryda rafter screws. Straight roofs that stay straight. Call 0450 605 080.',
    shortDescription:
      'Roof structures framed straight, set with controlled pre-camber, and fixed so they stay that way under load.',
    description:
      "A roof doesn't decide to sag on its own. It follows whatever was wrong in the framing beneath it. A wall plate that isn't level. A set-out that drifted. A rafter cut half a centimetre too deep at the bird's mouth. Small things that add up to a roofline that looks wrong from forty metres away.\n\nBecause we correct level and straightness from slab to plate, our wall plates provide a true and consistent bearing line. Rafters seat without forcing or shimming. Roof planes close cleanly at ridges, valleys, and hips. When we install the strut system, we deliberately build in a controlled upward bow — up to 10 mm on longer spans. Timber compresses under load. A roof framed dead level will sag once the tiles or metal goes on. One framed with deliberate pre-camber settles back to level.\n\nBird's mouths and plumb cuts are hand-finished. Overcutting structural members at bearing points is not permitted regardless of the time it saves. All secondary members — struts, purlins, arms, blocking — are accurately cut, not overcut, and fixed with both nails and structural screws. All walls receive double top plates, including single-storey homes.",
    features: [
      'Double top plates on all walls — single-storey and two-storey',
      "Bird's mouths and plumb cuts hand-finished only — no overcutting",
      'Pryda rafter screws installed top plate into rafter — not nail-only',
      'Controlled pre-camber up to 10 mm on longer spans and heavy roofs',
      'String line and straightedge verification at every stage',
      'Collar ties included where practical to control rafter spread',
      'All secondary members fixed with nails and structural screws',
      'Hangers bolted where applicable',
    ],
    icon: 'roof',
    faqs: [
      {
        q: 'What is pre-camber and why does it matter in roof framing?',
        a: 'Pre-camber is an intentional upward bow built into the roof frame — up to 10 mm on longer spans. Timber compresses under load, so a roof framed dead flat will sag slightly once tiles or metal roofing goes on. Framing with deliberate pre-camber means the finished roof settles back to level rather than below it.',
      },
      {
        q: 'Do you do cut roofs or truss roofs?',
        a: 'Both. Cut roofs where the geometry is complex or trusses won\'t work cleanly — intersecting roof planes, dormers, attic conversions. Prefab trusses where the geometry is straightforward and the schedule suits. The structural result is equivalent; the choice comes down to the design.',
      },
      {
        q: 'How long does roof framing take?',
        a: 'A standard hip roof on a double-storey house takes four to six days for a crew. Complex roofs with multiple intersecting planes take longer. We\'ll confirm the timeline with you before starting.',
      },
      {
        q: 'What are Pryda rafter screws?',
        a: 'Structural screws that fix the rafter to the top plate from below, preventing rafter spread and taking load off the toenailing. Standard in our work. Not standard practice on most sites — which is part of why most sites\' roofs eventually move.',
      },
      {
        q: 'Do you install roof sarking?',
        a: 'No. Sarking is installed separately after framing by a roofing contractor. We prepare the frame correctly so whoever installs it has a true surface to work with.',
      },
    ],
  },
  {
    slug: 'fit-out',
    image: '/pivot-front-door.webp',
    name: 'Fit Out',
    seoTitle: 'Fit Out Carpenter Sydney | Internal Carpentry | Strava Group',
    seoDescription:
      'Fit out carpentry in Sydney. Door installation, window frames, internal walls, finish carpentry. Commercial and residential. Licensed carpenter. Call 0450 605 080.',
    shortDescription:
      'Internal carpentry where the quality of the frame becomes visible — in the doors that hang straight and the reveals that are consistent.',
    description:
      "Fit-out is where the structural frame either pays off or costs you. Doors hang straight because the frame behind them is plumb. Reveals are consistent because the plates were straight. Joinery sits flush because the walls were square from the first day.\n\nIf any of those things weren't done right at framing stage, fit-out becomes a series of workarounds. You shim the door frame to compensate for the wall. You scribe the architrave to cover the gap. You accept that the kitchen is a few millimetres out and live with it.\n\nWe carry the same specification through to internal carpentry. Partition walls are framed to the same standard as structural walls. Door frames are installed plumb and consistent. Window frames are set level with matching reveals across each opening. We work across residential renovations, new builds, commercial tenancies, and shop fit-outs — anywhere internal carpentry needs to be done properly rather than made to look like it was.",
    features: [
      'Internal partition walls framed to structural standard',
      'Door frame installation — plumb, consistent reveals throughout',
      'Window frame and sill installation with matching reveals',
      'Commercial and retail shop fit-outs',
      'Renovation and extension internal carpentry',
      'Structural blocking and nogging above code',
      'VJ panelling and feature wall carpentry',
      'Skirting, architrave, and trim installation',
    ],
    icon: 'fitout',
    faqs: [
      {
        q: 'What does fit-out carpentry include?',
        a: 'Internal partition walls, door frames and door installation, window frames and sills, skirting, architrave, VJ panelling, built-in joinery framing, structural blocking and nogging. Anything inside the building after the structural frame is up and before the finishing trades arrive.',
      },
      {
        q: 'Do you do commercial fit-outs as well as residential?',
        a: 'Yes. Retail tenancies, office partitioning, commercial shop fit-outs. The specification is the same regardless of the building type.',
      },
      {
        q: 'Can you take over a fit-out job from another contractor?',
        a: 'Yes, but we\'ll assess what we\'re inheriting before we commit to a price. If the frame underneath is wrong, we\'ll tell you what needs to be fixed before we can do the fit-out properly.',
      },
      {
        q: 'Why do doors stick after installation?',
        a: 'Usually a frame that wasn\'t plumb when the door was hung, or a wall that\'s moved since installation because the studs weren\'t fixed correctly. Occasionally timber movement from moisture — but genuine straight-grained MGP10 doesn\'t move dramatically. Suspect the frame first.',
      },
    ],
  },
  {
    slug: 'cladding',
    image: '/axon-cladding.webp',
    name: 'Cladding',
    seoTitle: 'Cladding Sydney | Timber & Fibre Cement Cladding | Strava Group',
    seoDescription:
      'Cladding installation in Sydney. Fibre cement, timber, and battened systems installed over true and prepared substrates. Licensed carpenter. Call 0450 605 080.',
    shortDescription:
      'External cladding installed over a true, plumb, and level substrate — because straight cladding requires a straight frame behind it.',
    description:
      "Cladding is unforgiving. Every joint gap, every shadow line, every course of boards reads differently on a wall that bows than on one that runs true. The substrate determines the result. Cladding installed over a frame that wasn't set correctly will look exactly like cladding installed over a frame that wasn't set correctly.\n\nWe install cladding over correctly prepared substrates — walls that are plumb, flat, and level because that work was done at framing stage. Joint widths are consistent. Course lines are level. Fixings are appropriate for the cladding type, the climate zone, and the wind exposure classification.\n\nInterfaces with windows, doors, flashings, and waterproofing are sequenced correctly — not left to chance or another trade to sort out. Battened systems are installed with correct framing to support the batten load and provide the ventilated cavity the system requires.",
    features: [
      'Fibre cement sheet and plank systems',
      'Engineered timber and hardwood cladding',
      'Battened and ventilated facade systems',
      'Consistent joint spacing and course lines across full wall runs',
      'Fixings specified for cladding type and wind exposure zone',
      'Correct sequencing with flashings, membranes, and waterproofing',
      'Window and door reveal integration',
      'Timber privacy screens and feature screens',
    ],
    icon: 'cladding',
    faqs: [
      {
        q: 'What types of cladding do you install?',
        a: 'Fibre cement sheet and plank systems (Scyon, Primeline), engineered timber and hardwood cladding, battened and ventilated facade systems, and timber privacy screens. If it goes on the outside of a building and involves a carpenter, we do it.',
      },
      {
        q: 'Does cladding installation require a licensed contractor in NSW?',
        a: 'External cladding that forms part of the building envelope — weatherproofing, flashing interfaces, waterproofing — is licensed work. An unlicensed contractor can install it, but the moment something leaks you\'ll be arguing about who\'s responsible.',
      },
      {
        q: 'How long does cladding take?',
        a: 'Depends on the facade area and cladding system. A typical single-storey residential facade takes three to five days. We\'ll confirm once we see the plans.',
      },
      {
        q: 'How do you handle the weatherproofing around windows and doors?',
        a: 'Flashings and waterproofing interfaces need to be installed and sequenced correctly before cladding goes on. We coordinate this with the waterproofing contractor rather than hope it gets done after the fact. Incorrect sequencing is the most common reason cladding leaks.',
      },
    ],
  },
  {
    slug: 'decking-pergolas',
    image: '/composite-decking-around-pool.webp',
    name: 'Decking & Pergolas',
    seoTitle: 'Deck Builders Sydney | Pergola Builders Sydney | Strava Group',
    seoDescription:
      'Deck builders and pergola builders in Sydney. Timber, composite, and hardwood decking. Freestanding and attached pergolas. Licensed carpenter. Call 0450 605 080.',
    shortDescription:
      'Decks and pergolas built to the same structural standard as the main frame — because a deck that moves is a deck that fails.',
    description:
      "A deck is not complicated. Two people can build one in a weekend. Whether it holds up for two years or twenty depends almost entirely on what happens in the first few hours — the post sizing, the beam spans, the joist connections, the bearer bearings.\n\nMost decks fail at the connections. Posts notched incorrectly. Bearers undersized for the span. Joists toenailed rather than properly bracketed. Hardware that's the wrong grade for the exposure. None of it is visible once the decking boards go down. You find out at year three when something starts moving.\n\nWe apply the same specification to outdoor structures as we do internally: level, square, and properly connected at every junction. Posts are sized for the load. Beams are sized for the span. Joists are bracketed, not toenailed. Hardware is rated for the exposure. Footings and connection details follow engineering where the span or load requires it.\n\nPergolas get the same treatment. Rafters, purlins, and secondary members are fixed with structural fixings — not just nailed — and connections at posts are bolted rather than hoped for.",
    features: [
      'Hardwood decking — spotted gum, blackbutt, ironbark, merbau',
      'Treated pine and composite decking systems',
      'Freestanding and attached pergola structures',
      'Post footings and connection details to engineering where required',
      'Joists bracketed, not toenailed — hardware rated for exposure',
      'Beam spans sized for the load, not the minimum',
      'Handrail and balustrade framing',
      'Alfresco and outdoor room structures',
    ],
    icon: 'deck',
    faqs: [
      {
        q: 'Do I need council approval for a deck or pergola in Sydney?',
        a: 'In NSW, most decks and pergolas qualify as exempt development if they\'re under certain size and height thresholds. The specific limits vary by council LEP. We can advise what\'s typical, but confirm with your council or a private certifier before building — getting it wrong is your problem, not ours.',
      },
      {
        q: 'What timber species do you recommend for decking?',
        a: 'Spotted gum and blackbutt for hardwood — both durable, both widely available, both look good. Treated pine if budget is the main constraint. Composite decking if you want minimal maintenance and are happy with the look. Merbau is an option but has sustainability concerns we\'d steer you away from.',
      },
      {
        q: 'How long does a deck take to build?',
        a: 'A straightforward freestanding deck of 30–40 m² takes three to four days for a crew. Larger structures, elevated decks, or those requiring engineering take longer. We\'ll confirm the timeline when we quote.',
      },
      {
        q: 'How long will a hardwood deck last?',
        a: 'A properly constructed hardwood deck in Sydney — correct footings, correct hardware for the exposure, correct species — should last twenty to thirty years with basic oiling. Most decks fail earlier because the connections weren\'t right. You don\'t find out until year three when something shifts.',
      },
      {
        q: 'Do you build pergolas without a deck underneath?',
        a: 'Yes. Freestanding pergolas over concrete or pavers, attached pergolas over an existing outdoor area, alfresco roofing structures. The pergola frame is designed and built as a standalone structure where required.',
      },
    ],
  },
  {
    slug: 'wall-removal',
    image: '/shrinkage-cracks.webp',
    name: 'Wall Removal',
    seoTitle: 'Wall Removal Sydney | Load Bearing Wall Removal Sydney | Strava Group',
    seoDescription:
      'Structural and load bearing wall removal in Sydney. Correct temporary support, engineer-specified beams, proper load transfer. Licensed builder. Call 0450 605 080.',
    shortDescription:
      'Load bearing and structural wall removal done with the ceiling still attached — temporary support, correct beams, proper load transfer.',
    description:
      "Most people want to remove a wall because they want open-plan living. That's a reasonable want. The unreasonable part is when the ceiling decides to follow the wall down.\n\nLoad path is everything. Before any wall comes down, the loads above it need somewhere to go. That means understanding what the wall is carrying, what sits above it, and what the permanent solution looks like — before the first cut is made. We work from engineering documentation. We install correct temporary support. We do not start swinging hammers and figure it out as we go.\n\nThe permanent beam is specified by an engineer, sized for the span and the load, and installed with the correct bearing lengths and connection hardware at each end. The surrounding structure — ceiling, floor, adjacent walls — is made good as part of the scope, not left as someone else's problem.\n\nNon-structural internal walls are simpler, but they still need to be done correctly. Services need to be identified and relocated. Make-good to ceiling, floor, and walls needs to be clean.",
    features: [
      'Load path assessment before any wall is touched',
      'Temporary propping and support systems installed first',
      'Engineer-specified beam and post installation',
      'Correct bearing lengths and structural connection hardware',
      'Head and frame trimming to new opening dimensions',
      'Make-good to surrounding ceiling, floor, and wall structure',
      'Non-structural internal wall removal',
      'Services identification and relocation coordination',
    ],
    icon: 'removal',
    faqs: [
      {
        q: 'How do I know if a wall is load bearing?',
        a: 'A wall is likely load bearing if it runs perpendicular to the floor joists above, sits over a beam or foundation below, or has point loads from structure above. If you\'re not sure, engage a structural engineer before touching it. [We\'ve written a full guide on how to tell if a wall is load bearing](/blog/how-to-tell-if-wall-is-load-bearing/) — worth reading before you start pulling things apart.',
      },
      {
        q: 'Do I need an engineer for load bearing wall removal in Sydney?',
        a: 'Yes. An engineer needs to specify the beam size, bearing lengths, and connection hardware. Anyone removing a load bearing wall without engineering documentation is taking a risk — and it\'s a risk that stays in the building permanently.',
      },
      {
        q: 'How long does wall removal take?',
        a: 'A single load bearing wall removal including temporary propping, beam installation, and structural make-good typically takes two to three days. Non-structural walls are faster — often one day.',
      },
      {
        q: 'How much does load bearing wall removal cost in Sydney?',
        a: 'Roughly $3,000–$8,000 for a standard load bearing wall removal including temporary propping and beam installation, depending on span, beam size, and complexity. Engineering fees are separate. Contact us for a site-specific quote.',
      },
      {
        q: 'Can the ceiling stay up during wall removal?',
        a: 'Yes — that\'s the entire point of temporary support. The loads above are transferred to props before any structural member is cut. If someone is removing a load bearing wall without propping the ceiling first, stop the job and call someone who knows what they\'re doing.',
      },
    ],
  },
  {
    slug: 'restumping',
    image: '/more-movement-cracks.webp',
    name: 'Restumping',
    seoTitle: 'Restumping Sydney | House Restumping & Subfloor Repair | Strava Group',
    seoDescription:
      'Restumping and house restumping in Sydney. Stump replacement, floor levelling, subfloor repair. Old timber stumps replaced with concrete or steel. Call 0450 605 080.',
    shortDescription:
      'Stump replacement and floor levelling for Sydney\'s older homes — before the floor slope becomes impossible to ignore.',
    description:
      "Old stumps fail quietly. The floors slope so gradually you blame the furniture. The doors stick just slightly — easy to attribute to humidity. Then someone drops a marble and it rolls straight to the corner of the room. That's usually when people call us.\n\nSydney has tens of thousands of homes built on timber stumps — federation cottages, interwar bungalows, post-war houses across the inner west, north shore, and eastern suburbs. Those stumps were typically hardwood, typically good for fifty to eighty years, and typically overdue. When they fail, the floor follows.\n\nRestumping involves temporary support of the floor structure, removal of failed stumps, installation of new concrete or steel stumps to correct height, and re-levelling the floor system. Done correctly, a floor that was sloping noticeably can be brought back to level — or close to it, accounting for any long-term settlement in the structure above.\n\nWe also handle the carpentry component of subfloor repairs: access, bearer and joist replacement where necessary, subfloor sheeting reinstatement, and structural make-good after the stumping work is complete.",
    features: [
      'Temporary floor support installed before any stump is touched',
      'Timber stump removal — full or partial restumping',
      'New concrete or steel stump installation to correct level',
      'Floor relevelling and re-packing after stump replacement',
      'Bearer and joist replacement where required',
      'Subfloor sheeting and flooring reinstatement',
      'Subfloor access and ventilation carpentry',
      'Brick pier assessment and replacement where applicable',
    ],
    icon: 'restumping',
    faqs: [
      {
        q: 'How do I know if my house needs restumping?',
        a: 'Sloping floors — especially where one end of a room is noticeably lower than the other. Doors starting to stick. Cracks in plaster running from the corners of door and window openings. Stumps that are visibly rotten, cracked, checked, or leaning. Any one of these warrants a look underneath.',
      },
      {
        q: 'How much does restumping cost in Sydney?',
        a: 'For a full restump of a standard three-bedroom home, budget $8,000–$20,000 depending on the number of stumps, site access, and stump material (concrete vs steel). Partial restumping of a handful of failed stumps costs significantly less. [See our detailed restumping cost guide for Sydney](/blog/restumping-cost-sydney/) for a full breakdown.',
      },
      {
        q: 'How long does restumping take?',
        a: 'A full restump of a three-bedroom home typically takes three to five days. Partial jobs involving a small number of stumps are faster — often one to two days.',
      },
      {
        q: 'Do I need to vacate the house during restumping?',
        a: 'Not always. The floor structure is temporarily supported — the house isn\'t lifted significantly. Most people can stay in the house during the work. We\'ll advise based on the extent of the job and what access is required.',
      },
      {
        q: 'What\'s the difference between concrete and steel stumps?',
        a: 'Concrete stumps are standard for most restumping work. Steel adjustable stumps are sometimes used in areas with heavy clay soils where ongoing ground movement is a factor — they can be re-levelled without excavation. Both are significantly more durable than the original timber stumps they replace.',
      },
    ],
  },
]
