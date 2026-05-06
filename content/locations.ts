export interface Location {
  slug: string
  name: string
  suburb: string // primary suburb for H1
  suburbs: string[]
  headline: string
  subheadline: string
  description: string
  whyLocal: string
  image: string
  services: Array<{
    name: string
    slug: string
    description: string
    keywords: string[]
  }>
  seoTitle: string
  seoDescription: string
  faqs: Array<{ q: string; a: string }>
}

export const locations: Location[] = [
  {
    slug: 'inner-west',
    name: 'Inner West',
    suburb: 'Inner West Sydney',
    suburbs: [
      'Balmain', 'Rozelle', 'Leichhardt', 'Five Dock', 'Drummoyne',
      'Concord', 'Lilyfield', 'Annandale', 'Glebe', 'Newtown',
      'Marrickville', 'Petersham', 'Stanmore', 'Enmore',
    ],
    headline: 'Carpenter & Builder — Inner West Sydney',
    subheadline: 'Structural carpentry for the Inner West\'s federation homes, renovations, and new builds.',
    description:
      "The Inner West has more pre-war and federation homes per square kilometre than almost anywhere else in Sydney. That means more original timber floors, more subfloors that have been bearing load for eighty years, more walls that have shifted, more kitchens that need opening up, and more decks and pergolas being added to narrow Balmain and Leichhardt blocks where every centimetre counts.\n\nWe work across the Inner West on structural framing, wall removal, subfloor repairs, decking, pergolas, fit-out, and restumping. The work is the same regardless of the suburb — above-standard, properly fixed, built to last.",
    whyLocal:
      "Old homes in the Inner West are not the same as new builds. Timber moves. Stumps rot. Load paths change when kitchens get opened up. We understand how these homes are built, where they fail, and how to fix them properly rather than over the top of the problem.",
    image: '/double-story-frame.webp',
    services: [
      {
        name: 'Wall Framing & Fit Out',
        slug: 'wall-framing',
        description: 'Structural framing and internal carpentry for renovations, extensions, and new builds across the Inner West.',
        keywords: ['carpenter inner west', 'carpenters inner west', 'carpentry inner west', 'framing carpenter inner west', 'carpentry services inner west'],
      },
      {
        name: 'Decking & Pergolas',
        slug: 'decking-pergolas',
        description: 'Hardwood and composite decking built on correctly sized framing. Pergolas for narrow inner-west blocks where every metre matters.',
        keywords: ['deck builder inner west', 'decking inner west', 'pergola builder inner west', 'deck builder balmain', 'decking balmain', 'deck builder leichhardt', 'deck builder drummoyne', 'decking five dock'],
      },
      {
        name: 'Wall Removal',
        slug: 'wall-removal',
        description: 'Load bearing and structural wall removal for open-plan renovations — with the ceiling still attached when we\'re done.',
        keywords: ['structural wall removal inner west', 'load bearing wall removal balmain', 'wall removal leichhardt', 'structural wall removal drummoyne'],
      },
      {
        name: 'Restumping',
        slug: 'restumping',
        description: 'Stump replacement and floor levelling for the Inner West\'s federation and interwar homes — before the marble rolls to the corner.',
        keywords: ['restumping inner west', 'house restumping balmain', 'restumping leichhardt', 'subfloor repair inner west', 'floor levelling inner west'],
      },
      {
        name: 'Subfloor Framing',
        slug: 'subfloor-framing',
        description: 'Squeak-free subfloor framing for Inner West homes — polyurethane adhesive, ring-shank nails, full screw fix-off.',
        keywords: ['subfloor framing inner west', 'subfloor repair inner west', 'squeaky floor inner west'],
      },
      {
        name: 'Roof Framing',
        slug: 'roof-framing',
        description: 'Roof framing for extensions and new builds across the Inner West — pre-camber control, correct fixings throughout.',
        keywords: ['roof framing inner west', 'roof carpenter inner west'],
      },
      {
        name: 'Cladding',
        slug: 'cladding',
        description: 'External cladding installation for Inner West homes — fibre cement, timber, and battened systems over correctly prepared substrates.',
        keywords: ['cladding inner west', 'cladding balmain', 'cladding leichhardt'],
      },
    ],
    seoTitle: 'Carpenter Inner West Sydney | Decking, Pergolas & Wall Removal | Strava Group',
    seoDescription:
      'Structural carpentry across the Inner West — Balmain, Leichhardt, Drummoyne, Five Dock, Rozelle, Concord. Decking, pergolas, wall removal, restumping. Call 0450 605 080.',
    faqs: [
      {
        q: 'Do you cover all suburbs across the Inner West?',
        a: 'Yes. Balmain, Rozelle, Leichhardt, Five Dock, Drummoyne, Concord, Lilyfield, Annandale, Glebe, Newtown, Marrickville, Petersham, Stanmore, and Enmore. Same rate across the Inner West — no suburb surcharges.',
      },
      {
        q: 'Do you work on federation and interwar homes in the Inner West?',
        a: 'Regularly. Federation cottages and interwar bungalows have specific structural characteristics — original timber floors, close-spaced stumps, low subfloor clearance, framing that has moved over decades. These aren\'t the same as new builds and we don\'t treat them the same way.',
      },
      {
        q: 'Can you build a deck on a narrow Balmain or Leichhardt block?',
        a: 'Yes. Inner West blocks tend to be narrow with rear access constraints and not much flat ground to work with. We\'ve built decks and pergolas on sites where a standard approach doesn\'t fit. We\'ll work out what the site allows before we quote.',
      },
      {
        q: 'How quickly can you quote for work in the Inner West?',
        a: 'We work regularly in the area and can typically get out for a quote within a week. Call 0450 605 080 for current availability.',
      },
    ],
  },
  {
    slug: 'north-shore',
    name: 'North Shore',
    suburb: 'North Shore Sydney',
    suburbs: [
      'Chatswood', 'Lane Cove', 'Willoughby', 'Mosman', 'Cremorne',
      'North Sydney', 'Roseville', 'Lindfield', 'Killara', 'Gordon',
      'St Leonards', 'Crows Nest', 'Artarmon',
    ],
    headline: 'Carpenter & Builder — North Shore Sydney',
    subheadline: 'Above-standard structural carpentry for the North Shore\'s high-end homes and renovations.',
    description:
      "The North Shore demands a high standard of finish. Homes in Mosman, Chatswood, and Willoughby are not the place for minimum-standard carpentry — the joinery is too expensive, the finishes too precise, and the owners too attentive for corners to be cut and not noticed.\n\nWe work across the North Shore on structural framing, wall framing, decking and pergola construction, wall removal, cladding, and fit-out. The same above-standard specification applies here as it does everywhere else — because minimum compliance produces minimum results.",
    whyLocal:
      "North Shore projects tend to be high-specification with multiple trades working in sequence. The framing needs to be right the first time — because errors at frame stage show up in every trade that follows, and no one wants to be explaining to a joiner why the kitchen cabinets don't sit flush.",
    image: '/groundfloor-wall-frames.webp',
    services: [
      {
        name: 'Wall Framing & Fit Out',
        slug: 'wall-framing',
        description: 'Precision wall framing and internal carpentry for renovations and new builds across the North Shore.',
        keywords: ['carpenter north shore', 'carpenters north shore', 'carpentry north shore', 'carpenter chatswood', 'carpenter mosman', 'carpenter lane cove', 'carpenter willoughby', 'carpentry services north shore'],
      },
      {
        name: 'Decking & Pergolas',
        slug: 'decking-pergolas',
        description: 'Hardwood and composite decking for North Shore homes. Attached and freestanding pergola structures sized and fixed correctly.',
        keywords: ['deck builder north shore', 'decking north shore', 'pergola builder north shore', 'deck builder chatswood', 'decking chatswood', 'pergola builder chatswood', 'deck builder mosman', 'deck builder lane cove', 'pergola builder mosman'],
      },
      {
        name: 'Wall Removal',
        slug: 'wall-removal',
        description: 'Structural wall removal with engineer-specified beams and correct temporary support throughout.',
        keywords: ['structural wall removal north shore', 'load bearing wall removal chatswood', 'wall removal mosman', 'structural wall removal willoughby', 'structural wall removal lane cove'],
      },
      {
        name: 'Restumping',
        slug: 'restumping',
        description: 'Stump replacement and floor levelling for North Shore\'s older homes — Mosman, Cremorne, and Crows Nest have plenty of them.',
        keywords: ['restumping north shore', 'house restumping mosman', 'restumping chatswood', 'restumping cremorne', 'subfloor repair north shore'],
      },
      {
        name: 'Cladding',
        slug: 'cladding',
        description: 'External cladding installed over true, prepared substrates. Fibre cement, timber, and battened systems.',
        keywords: ['cladding north shore', 'cladding chatswood', 'cladding mosman'],
      },
      {
        name: 'Subfloor Framing',
        slug: 'subfloor-framing',
        description: 'Squeak-free subfloor framing for North Shore homes — polyurethane adhesive, correct datum, full screw fix-off.',
        keywords: ['subfloor framing north shore', 'subfloor repair north shore', 'squeaky floor north shore'],
      },
      {
        name: 'Roof Framing',
        slug: 'roof-framing',
        description: 'Roof framing for North Shore extensions and new builds — pre-camber control, hand-finished bird\'s mouths, structural fixings throughout.',
        keywords: ['roof framing north shore', 'roof carpenter north shore', 'roof carpenter mosman'],
      },
    ],
    seoTitle: 'Carpenter North Shore Sydney | Decking, Pergolas & Wall Removal | Strava Group',
    seoDescription:
      'Structural carpentry across the North Shore — Chatswood, Mosman, Lane Cove, Willoughby, Roseville. Decking, pergolas, wall removal, framing. Call 0450 605 080.',
    faqs: [
      {
        q: 'Do you work across the whole North Shore?',
        a: 'Yes. Chatswood, Lane Cove, Willoughby, Mosman, Cremorne, North Sydney, Roseville, Lindfield, Killara, Gordon, St Leonards, Crows Nest, and Artarmon. Same rate across the area.',
      },
      {
        q: 'Do you work on high-specification North Shore renovations?',
        a: 'Yes, and the specification matters more here than most places. North Shore projects typically involve significant joinery and finish investment. Errors at frame stage flow through to every trade that follows — the kitchen that won\'t sit flush, the reveals that are inconsistent. We frame it right so you don\'t find out later.',
      },
      {
        q: 'Can you work to a schedule that coordinates with other trades?',
        a: 'Yes. If you need framing done before the joinery arrives or cladding ready before the waterproofing contractor books in, let us know when you brief us. We\'ll plan around your programme.',
      },
      {
        q: 'Do you travel to the Upper North Shore — Gordon, Killara, Lindfield?',
        a: 'Yes. Same service, same rate. No extra charge for the Upper North Shore.',
      },
    ],
  },
  {
    slug: 'eastern-suburbs',
    name: 'Eastern Suburbs',
    suburb: 'Eastern Suburbs Sydney',
    suburbs: [
      'Bondi', 'Bondi Junction', 'Randwick', 'Coogee', 'Maroubra',
      'Woollahra', 'Paddington', 'Double Bay', 'Rose Bay', 'Vaucluse',
      'Bronte', 'Clovelly', 'Waverley',
    ],
    headline: 'Carpenter & Builder — Eastern Suburbs Sydney',
    subheadline: 'Structural carpentry for the Eastern Suburbs\' renovations, extensions, and outdoor builds.',
    description:
      "The Eastern Suburbs sits at the premium end of Sydney's property market. That means renovations where the budget is significant and the expectation is high. It also means older terrace homes and semi-detached houses where wall removal is complicated by shared walls, tight sites, and original structures that weren't built to modern standards.\n\nWe work across the Eastern Suburbs on wall framing, wall removal, decking and pergola construction, cladding, and fit-out. Precision at framing stage is not optional when the finishes are high-end — it's what makes everything else possible.",
    whyLocal:
      "Eastern Suburbs properties are often expensive, often old, and often being renovated to a high standard. The framing behind those finishes matters more than anywhere. A plasterer can hide a lot. An $80,000 kitchen cannot hide a wall that isn't straight.",
    image: '/erected-wall-frame.webp',
    services: [
      {
        name: 'Wall Framing & Fit Out',
        slug: 'wall-framing',
        description: 'Precision framing and internal carpentry where the standard of finish demands the frame underneath is right.',
        keywords: ['carpenter eastern suburbs', 'carpenters eastern suburbs', 'carpenter bondi', 'carpenter randwick', 'carpenter coogee', 'carpentry services eastern suburbs'],
      },
      {
        name: 'Decking & Pergolas',
        slug: 'decking-pergolas',
        description: 'Hardwood and composite decking for Eastern Suburbs courtyards and gardens. Pergolas and alfresco structures built to last.',
        keywords: ['deck builder eastern suburbs', 'decking eastern suburbs', 'pergola builder eastern suburbs', 'deck builder bondi', 'deck builder randwick', 'deck builder coogee'],
      },
      {
        name: 'Wall Removal',
        slug: 'wall-removal',
        description: 'Load bearing wall removal for open-plan renovations in terrace homes and semi-detached properties across the Eastern Suburbs.',
        keywords: ['structural wall removal eastern suburbs', 'load bearing wall removal bondi', 'wall removal randwick', 'structural wall removal paddington'],
      },
      {
        name: 'Restumping',
        slug: 'restumping',
        description: 'Stump replacement and floor levelling for Eastern Suburbs terrace homes, semis, and older cottages in Paddington, Woollahra, and Randwick.',
        keywords: ['restumping eastern suburbs', 'house restumping paddington', 'restumping woollahra', 'restumping randwick', 'subfloor repair eastern suburbs'],
      },
      {
        name: 'Cladding',
        slug: 'cladding',
        description: 'External cladding and feature screens for Eastern Suburbs homes and renovations.',
        keywords: ['cladding eastern suburbs', 'cladding bondi', 'timber privacy screens eastern suburbs'],
      },
      {
        name: 'Subfloor Framing',
        slug: 'subfloor-framing',
        description: 'Subfloor framing for Eastern Suburbs terrace homes and semis — polyurethane adhesive, ring-shank nails, no squeaking.',
        keywords: ['subfloor framing eastern suburbs', 'subfloor repair eastern suburbs', 'squeaky floor eastern suburbs'],
      },
      {
        name: 'Roof Framing',
        slug: 'roof-framing',
        description: 'Roof framing for Eastern Suburbs extensions and new builds — correctly fixed, pre-cambered, built to stay straight.',
        keywords: ['roof framing eastern suburbs', 'roof carpenter eastern suburbs', 'roof carpenter bondi'],
      },
    ],
    seoTitle: 'Carpenter Eastern Suburbs Sydney | Decking, Pergolas & Wall Removal | Strava Group',
    seoDescription:
      'Structural carpentry across the Eastern Suburbs — Bondi, Randwick, Coogee, Paddington, Woollahra, Maroubra. Decking, wall removal, framing. Call 0450 605 080.',
    faqs: [
      {
        q: 'Do you work on terrace homes and semis in the Eastern Suburbs?',
        a: 'Yes. Paddington and Woollahra terraces, Bondi and Bronte semis. Shared walls, tight sites, original structures that weren\'t built to modern standards — we understand how these buildings work and what complications come with them.',
      },
      {
        q: 'Why does framing quality matter more in high-end renovations?',
        a: 'A plasterer can skim over a lot. An $80,000 kitchen cannot hide a wall that isn\'t straight. Expensive finishes amplify frame problems rather than covering them. If the frame isn\'t right, the finish will show it — eventually.',
      },
      {
        q: 'Do you build decks in Eastern Suburbs courtyards?',
        a: 'Yes. Courtyards, narrow rear gardens, roof terraces. Eastern Suburbs sites are often constrained and sometimes require engineering for elevated structures. We\'ll work through what\'s practical for the site before committing to a design.',
      },
      {
        q: 'Which Eastern Suburbs do you cover?',
        a: 'Bondi, Bondi Junction, Randwick, Coogee, Maroubra, Woollahra, Paddington, Double Bay, Rose Bay, Vaucluse, Bronte, Clovelly, and Waverley.',
      },
    ],
  },
  {
    slug: 'northern-beaches',
    name: 'Northern Beaches',
    suburb: 'Northern Beaches Sydney',
    suburbs: [
      'Manly', 'Dee Why', 'Brookvale', 'Frenchs Forest', 'Mona Vale',
      'Narrabeen', 'Collaroy', 'Warriewood', 'Newport', 'Avalon',
      'Curl Curl', 'Freshwater', 'Fairlight',
    ],
    headline: 'Carpenter & Builder — Northern Beaches Sydney',
    subheadline: 'Structural carpentry built for the Northern Beaches\' outdoor lifestyle and coastal conditions.',
    description:
      "The Northern Beaches is outdoor living country. Decks, pergolas, and alfresco structures are not optional extras up here — they're the point of the house. That means the quality of the outdoor structure matters, and so does its ability to handle a coastal environment where salt air, sun, and movement are constants.\n\nWe work across the Northern Beaches on decking, pergola construction, wall framing, fit-out, and wall removal. Hardware is specified for the exposure zone. Timber species and treatment levels are appropriate for coastal conditions. The structure is built to move with the environment, not against it.",
    whyLocal:
      "Coastal conditions are hard on outdoor structures. The wrong hardware corrodes within a few years. Untreated or undertreated timber won't last a decade. We specify materials and fixings appropriate for the Northern Beaches' coastal exposure — so the deck looks right in year ten, not just year one.",
    image: '/composite-decking-around-pool.webp',
    services: [
      {
        name: 'Decking & Pergolas',
        slug: 'decking-pergolas',
        description: 'Hardwood, treated pine, and composite decking specified for coastal conditions. Pergolas and alfresco structures for Northern Beaches homes.',
        keywords: ['deck builder northern beaches', 'decking northern beaches', 'pergola builder northern beaches', 'deck builder manly', 'deck builder dee why', 'alfresco builders northern beaches'],
      },
      {
        name: 'Wall Framing & Fit Out',
        slug: 'wall-framing',
        description: 'Structural framing and internal carpentry for renovations and extensions across the Northern Beaches.',
        keywords: ['carpenter northern beaches', 'carpenters northern beaches', 'carpentry northern beaches', 'carpenter manly', 'carpentry services northern beaches'],
      },
      {
        name: 'Wall Removal',
        slug: 'wall-removal',
        description: 'Structural and load bearing wall removal for open-plan renovations — engineer-specified beams, correct temporary support.',
        keywords: ['structural wall removal northern beaches', 'load bearing wall removal manly', 'wall removal northern beaches'],
      },
      {
        name: 'Cladding',
        slug: 'cladding',
        description: 'External cladding systems specified for coastal exposure zones — correct fixings, correct treatment levels, correct sequencing.',
        keywords: ['cladding northern beaches', 'timber cladding northern beaches'],
      },
      {
        name: 'Restumping',
        slug: 'restumping',
        description: 'Stump replacement and floor levelling for older Northern Beaches homes — Manly, Fairlight, Freshwater, and Curl Curl.',
        keywords: ['restumping northern beaches', 'house restumping manly', 'restumping dee why', 'subfloor repair northern beaches'],
      },
      {
        name: 'Subfloor Framing',
        slug: 'subfloor-framing',
        description: 'Squeak-free subfloor framing for Northern Beaches homes — polyurethane adhesive, correct datum, full screw fix-off.',
        keywords: ['subfloor framing northern beaches', 'subfloor repair northern beaches', 'squeaky floor northern beaches'],
      },
      {
        name: 'Roof Framing',
        slug: 'roof-framing',
        description: 'Roof framing for Northern Beaches extensions and new builds — pre-camber, correct fixings, coastal hardware specifications.',
        keywords: ['roof framing northern beaches', 'roof carpenter northern beaches', 'roof carpenter manly'],
      },
    ],
    seoTitle: 'Carpenter Northern Beaches Sydney | Deck Builders & Pergolas | Strava Group',
    seoDescription:
      'Structural carpentry across the Northern Beaches — Manly, Dee Why, Brookvale, Mona Vale, Newport, Avalon. Decking, pergolas, framing. Call 0450 605 080.',
    faqs: [
      {
        q: 'Do you understand coastal exposure requirements for the Northern Beaches?',
        a: 'Yes. Hardware, fixings, and timber treatment levels all need to be appropriate for the coastal exposure zone. The wrong bolt grade or the wrong steel specification will corrode within a few years in a salt environment. We spec materials for the conditions, not just the minimum required by the code.',
      },
      {
        q: 'Do you replace old decks that have corroded on the Northern Beaches?',
        a: 'Yes. Old decks with the wrong hardware are common on the Northern Beaches — especially ones built ten or fifteen years ago when coastal-specific specifications weren\'t as closely followed. Replacement is usually better than repair when the substructure has corroded through.',
      },
      {
        q: 'Do you travel to Avalon and the northern end of the Northern Beaches?',
        a: 'Yes. Manly, Dee Why, Brookvale, Frenchs Forest, Mona Vale, Narrabeen, Collaroy, Warriewood, Newport, Avalon, Curl Curl, Freshwater, and Fairlight. Yes, including Avalon.',
      },
      {
        q: 'Do I need a permit for a deck on the Northern Beaches?',
        a: 'Most decks on the Northern Beaches qualify as exempt development if they\'re below certain height and area thresholds under the Northern Beaches LEP. We can advise what\'s typical, but confirm with council or a private certifier for your specific property — the rules vary by lot.',
      },
    ],
  },
  {
    slug: 'hills-district',
    name: 'Hills District',
    suburb: 'Hills District Sydney',
    suburbs: [
      'Castle Hill', 'Baulkham Hills', 'Kellyville', 'Cherrybrook',
      'Pennant Hills', 'West Pennant Hills', 'Carlingford', 'Epping',
      'Parramatta', 'Northmead', 'Winston Hills', 'Rouse Hill',
    ],
    headline: 'Carpenter & Builder — Hills District Sydney',
    subheadline: 'Structural carpentry for the Hills District\'s new builds, dual occupancies, and renovations.',
    description:
      "The Hills District is one of Sydney's most active construction zones — new homes, duplexes, granny flats, and large-scale renovations being built constantly across Castle Hill, Baulkham Hills, Kellyville, and Parramatta. Volume construction is the norm out here. That creates an environment where minimum-standard framing is standard practice.\n\nWe work in the Hills District on structural wall framing, roof framing, subfloor framing, decking, pergolas, fit-out, and wall removal. Our specification doesn't change based on the build type or the suburb — above-standard on a Hills District duplex means the same thing it does on a Mosman renovation.",
    whyLocal:
      "High-volume construction areas attract high-volume carpentry. Fast, minimum-standard framing is the default out here — because no one's watching closely and the schedule is tight. We're not the fastest. We're the ones you call when you want it done right and don't want to be fixing it in year five.",
    image: '/cathedral-ceiling-roof-frame.webp',
    services: [
      {
        name: 'Wall Framing & Fit Out',
        slug: 'wall-framing',
        description: 'Structural wall framing for new builds, duplexes, and renovations across the Hills District — above the minimum standard the area is used to.',
        keywords: ['carpenter hills district', 'carpenters hills district', 'carpenter castle hill', 'carpenter baulkham hills', 'carpenter parramatta', 'framing carpenter hills district', 'carpentry services hills district'],
      },
      {
        name: 'Roof Framing',
        slug: 'roof-framing',
        description: 'Roof framing for new builds and extensions — pre-camber control, hand-finished bird\'s mouths, correct fixings throughout.',
        keywords: ['roof carpenter hills district', 'roof framing hills district', 'framing services hills district'],
      },
      {
        name: 'Decking & Pergolas',
        slug: 'decking-pergolas',
        description: 'Decking and pergola construction for Hills District homes — correct framing, correct fixings, hardware that lasts.',
        keywords: ['deck builder hills district', 'decking hills district', 'pergola builder hills district', 'deck builder castle hill', 'deck builder parramatta', 'deck builder baulkham hills', 'pergola builder castle hill'],
      },
      {
        name: 'Wall Removal',
        slug: 'wall-removal',
        description: 'Structural wall removal for Hills District renovations — load path assessment first, correct temporary support, engineer-specified beams.',
        keywords: ['structural wall removal hills district', 'load bearing wall removal castle hill', 'wall removal parramatta', 'structural wall removal baulkham hills'],
      },
      {
        name: 'Subfloor Framing',
        slug: 'subfloor-framing',
        description: 'Subfloor framing for Hills District homes — polyurethane adhesive, correct datum, full screw fix-off. No squeaking.',
        keywords: ['subfloor framing hills district', 'subfloor repair hills district', 'squeaky floor hills district'],
      },
      {
        name: 'Restumping',
        slug: 'restumping',
        description: 'Stump replacement and floor levelling for older Hills District homes across Epping, Pennant Hills, and Carlingford.',
        keywords: ['restumping hills district', 'house restumping epping', 'restumping pennant hills', 'restumping carlingford'],
      },
      {
        name: 'Cladding',
        slug: 'cladding',
        description: 'External cladding installation for Hills District homes — fibre cement, timber, and battened systems installed correctly.',
        keywords: ['cladding hills district', 'cladding castle hill', 'cladding parramatta'],
      },
    ],
    seoTitle: 'Carpenter Hills District Sydney | Wall Framing, Decking & Pergolas | Strava Group',
    seoDescription:
      'Structural carpentry across the Hills District — Castle Hill, Baulkham Hills, Kellyville, Parramatta, Epping, Carlingford. Framing, decking, pergolas. Call 0450 605 080.',
    faqs: [
      {
        q: 'Do you work on duplexes and dual occupancies in the Hills District?',
        a: 'Yes. Structural framing for new duplexes, secondary dwellings, and granny flats across Castle Hill, Baulkham Hills, and Kellyville. Same specification regardless of build type.',
      },
      {
        q: 'How does your framing compare to volume builders in the Hills District?',
        a: 'Volume framing in high-activity construction areas tends to be minimum-standard — minimum stud size, minimum fixings, minimum checking. Our specification is consistent regardless of build type or suburb. The difference is in the checking, the fixings, and what gets rejected before it goes up.',
      },
      {
        q: 'Do you work directly with owner-builders in the Hills District?',
        a: 'Yes. We can be engaged directly by owner-builders or as a framing subcontractor to a builder. Either way, the work is the same.',
      },
      {
        q: 'Which Hills District suburbs do you cover?',
        a: 'Castle Hill, Baulkham Hills, Kellyville, Cherrybrook, Pennant Hills, West Pennant Hills, Carlingford, Epping, Parramatta, Northmead, Winston Hills, and Rouse Hill.',
      },
    ],
  },
  {
    slug: 'ryde',
    name: 'Ryde & Gladesville',
    suburb: 'Ryde & Gladesville',
    suburbs: [
      'Ryde', 'North Ryde', 'West Ryde', 'Gladesville', 'Hunters Hill',
      'Putney', 'Meadowbank', 'Ermington', 'Shepherds Bay', 'Eastwood',
      'Epping', 'Marsfield',
    ],
    headline: 'Carpenter & Builder — Ryde & Gladesville',
    subheadline: 'Structural carpentry, restumping, and decking across Ryde, Gladesville, and Hunters Hill.',
    description:
      "The Ryde and Gladesville area sits at the intersection of old and new Sydney. Hunters Hill has some of the oldest homes in the country. Ryde and North Ryde have seen significant apartment and duplex development. West Ryde and Meadowbank are in constant renovation. The work spans the full range — original federation homes needing restumping and structural repair, to new builds and extensions that need framing done right from the ground up.\n\nWe work across the Ryde area on structural wall framing, subfloor framing, restumping, decking, pergolas, wall removal, and fit-out. Hunters Hill in particular has some of Sydney's most significant heritage homes — structures that require careful work and genuine understanding of how old buildings behave.",
    whyLocal:
      "Ryde and Gladesville sit close to Strava Group's base of operations. We know this area well — the mix of old and new, the heritage constraints in Hunters Hill, the activity in North Ryde. Quick response, local knowledge, and no travel surcharge.",
    image: '/bottom-plate-shot.webp',
    services: [
      {
        name: 'Wall Framing & Fit Out',
        slug: 'wall-framing',
        description: 'Structural framing and internal carpentry for renovations, extensions, and new builds across the Ryde area.',
        keywords: ['carpenter ryde', 'carpenter west ryde', 'carpentry services ryde', 'carpenter gladesville', 'carpenter hunters hill', 'carpenter north ryde'],
      },
      {
        name: 'Restumping',
        slug: 'restumping',
        description: 'Stump replacement and floor levelling for Ryde\'s older homes — including Hunters Hill\'s heritage properties.',
        keywords: ['restumping ryde', 'house restumping ryde', 'restumping north ryde', 'restumping gladesville', 'restumping hunters hill', 'restumping epping', 'subfloor repair ryde'],
      },
      {
        name: 'Decking & Pergolas',
        slug: 'decking-pergolas',
        description: 'Hardwood and composite decking for Ryde and Gladesville homes. Pergolas and outdoor structures built correctly.',
        keywords: ['deck builder ryde', 'deck builder north ryde', 'deck builder gladesville', 'decking ryde', 'decking north ryde', 'pergola builder ryde', 'deck builder hunters hill'],
      },
      {
        name: 'Wall Removal',
        slug: 'wall-removal',
        description: 'Load bearing and structural wall removal across Ryde and Gladesville — engineer-specified, correctly propped, properly finished.',
        keywords: ['structural wall removal ryde', 'structural wall removal north ryde', 'load bearing wall removal ryde', 'wall removal gladesville', 'structural wall removal hunters hill'],
      },
      {
        name: 'Subfloor Framing',
        slug: 'subfloor-framing',
        description: 'Subfloor framing and squeak-free floors for Ryde and Hunters Hill homes — polyurethane adhesive, ring-shank nails, full screw fix-off.',
        keywords: ['subfloor framing ryde', 'subfloor repair ryde', 'squeaky floor ryde', 'subfloor repair hunters hill'],
      },
      {
        name: 'Roof Framing',
        slug: 'roof-framing',
        description: 'Roof framing for Ryde area extensions and new builds — pre-camber, correct fixings, hand-finished bird\'s mouths.',
        keywords: ['roof framing ryde', 'roof carpenter ryde', 'roof framing hunters hill'],
      },
      {
        name: 'Cladding',
        slug: 'cladding',
        description: 'External cladding for Ryde and Gladesville homes — fibre cement, timber, and battened systems over correctly prepared substrates.',
        keywords: ['cladding ryde', 'cladding gladesville', 'cladding hunters hill'],
      },
    ],
    seoTitle: 'Carpenter Ryde & Gladesville | Restumping, Decking & Wall Removal | Strava Group',
    seoDescription:
      'Structural carpentry across Ryde, Gladesville, Hunters Hill, North Ryde, West Ryde. Restumping, decking, pergolas, wall removal. Call 0450 605 080.',
    faqs: [
      {
        q: 'Do you do restumping in Hunters Hill?',
        a: 'Yes. Hunters Hill has some of Sydney\'s oldest homes, some of which are still on original timber or brick stumps. We work carefully with heritage structures — assessing what\'s needed rather than defaulting to a full restump when partial work will do the job.',
      },
      {
        q: 'How far is your base from Ryde?',
        a: 'Close. Ryde and Gladesville are near Strava Group\'s operating base — no travel surcharge and faster response than contractors coming from the other side of Sydney.',
      },
      {
        q: 'Do you work on heritage homes in the Ryde area?',
        a: 'Yes. Hunters Hill has significant heritage-listed properties. We understand how these homes are built and work carefully with the original fabric rather than around it. If heritage constraints affect the scope, we\'ll tell you upfront.',
      },
      {
        q: 'Which suburbs do you cover in the Ryde area?',
        a: 'Ryde, North Ryde, West Ryde, Gladesville, Hunters Hill, Putney, Meadowbank, Ermington, Shepherds Bay, Eastwood, Epping, and Marsfield.',
      },
    ],
  },
]
