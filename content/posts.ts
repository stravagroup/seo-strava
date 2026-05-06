export interface BlogPost {
  slug: string
  image?: string
  title: string
  seoTitle: string
  seoDescription: string
  publishDate: string // ISO date
  readingTime: number // minutes
  excerpt: string
  sections: Array<{
    id: string
    heading: string
    body: string[] // paragraphs — [link text](/href/) syntax supported
  }>
  faqs: Array<{
    q: string
    a: string
  }>
  references: Array<{
    title: string
    url: string
  }>
}

export const posts: BlogPost[] = [
  {
    slug: 'quality-carpentry-vs-cheap-carpentry',
    image: '/plan-reading.webp',
    title: 'Quality Carpentry vs Cheap Carpentry: What You\'re Actually Paying For',
    seoTitle: 'Quality Carpentry Sydney: What Sets It Apart | Strava Group',
    seoDescription:
      'Most Sydney carpenters use imported Baltic Pine, snap plates instead of cutting them, and use liquid nails on subfloors. Here\'s what the difference between cheap and quality carpentry actually costs you.',
    publishDate: '2026-04-10',
    readingTime: 7,
    excerpt:
      'The gap between cheap carpentry and quality carpentry is not mostly the price. It\'s the specification. Here\'s what actually changes when you pay for above-standard work.',
    sections: [
      {
        id: 'price-gap',
        heading: 'The price difference is mostly about specification',
        body: [
          'Most residential carpentry in Sydney sits in a fairly narrow price range. The gap between the cheapest and most expensive framing carpenters is not enormous. What changes is what you get for the money — specifically, what gets done when no one is watching.',
          'Cheap carpentry is not always obviously bad on the day. The frames look like frames. The floors look like floors. The problems show up later, in ways that are expensive to trace back to their source. By then, the finishes are in, the joinery is installed, and the trades that followed the framing have already worked around whatever the frame gave them.',
          'Understanding the difference requires understanding what the shortcuts are — and why they\'re taken.',
        ],
      },
      {
        id: 'cheap-carpentry',
        heading: 'What cheap carpentry looks like in practice',
        body: [
          'The shortcuts are predictable and consistent. They\'re not the result of individual carelessness — they\'re driven by time pressure on jobs priced at minimum margin.',
          'Timber choice is the first one. Around 80% of carpenters in Sydney are framing with Baltic Pine. It\'s imported, light, cheaper than local alternatives, and it moves more after installation because it was grown and dried in a completely different climate. Frames built with Baltic Pine are typically straighter on day one than they\'ll be in year three.',
          'Plates are measured and snapped rather than cut on a drop saw. Snapping is faster. It also introduces cumulative error across long wall runs. By the time you\'re fifteen metres in, the plate line can be several millimetres out — error that gets locked into every stud from that point forward.',
          'Studs go in without being checked individually. If a stud has a bow, it goes in with the bow. Some face one direction, some face the other. The result is a frame that holds an argument between its own members from the day it goes up.',
          'On [subfloors](/services/subfloor-framing/), the adhesive is usually liquid nails. It cures hard and brittle. A floor is a dynamic system — it flexes constantly under foot traffic and thermal cycling. Liquid nails doesn\'t flex. It debonds. The gap between joist and sheet is [where the squeak comes from](/blog/why-subfloors-squeak/).',
        ],
      },
      {
        id: 'above-standard',
        heading: 'What above-standard carpentry looks like',
        body: [
          'The differences are not dramatic in isolation. They\'re systematic — a set of decisions made consistently rather than a single expensive upgrade.',
          'Timber starts with [Radiata Pine](/blog/baltic-pine-vs-radiata-pine/) — an Australian product supplied by Timberlink, grown in plantation conditions here, dried to local moisture targets. By the time it arrives on a Sydney site, it\'s already acclimatised. It costs more. It\'s also straighter and stays straighter over time.',
          'Every stud is checked before installation. Bows are identified, oriented in the same direction, and marked. This is not about removing every imperfect piece of timber — it\'s about making the imperfections predictable and manageable. A frame where all bows face the same way is far easier to straighten than one where they argue.',
          'Plates are cut on a drop saw across all wall runs. Clean, square, consistent. The cumulative error that builds across a long snapped plate run doesn\'t exist when the cuts are correct from the start.',
          'On subfloors, polyurethane adhesive replaces liquid nails. A 30mm bead, applied before every joist, provides full coverage and cushioning. Ring-shank nails go in first, then a full structural screw fix-off after installation. Both tongue-and-groove and butt joints get adhesive. That\'s the sequence that produces [floors that don\'t squeak](/services/subfloor-framing/).',
        ],
      },
      {
        id: 'where-cost-shows',
        heading: 'Where the cost of cheap carpentry shows up',
        body: [
          'The trades that follow framing work around whatever the frame gave them. A plasterer can hide a lot. An electrician can reroute. A tiler will fill.',
          'Where it shows up unavoidably: joinery. Kitchen cabinets that won\'t sit flush against a wall that bows. Door frames shimmed to compensate for plates that ran out of square. Reveals that aren\'t consistent across an opening because the frame shifted between the stud and the plate.',
          'An $80,000 kitchen built against a wall that isn\'t straight is not fixable after installation. A door hung in a frame that isn\'t plumb is wrong on day one and gets worse as the timber settles.',
          'The other place it shows up is in [wall removal](/services/wall-removal/) and renovation work on existing builds. When you open a wall to remove it, you find out exactly what the original framing was. Often it\'s a discovery best made when the budget is still intact.',
        ],
      },
      {
        id: 'when-not-to-hire',
        heading: 'When not to hire us',
        body: [
          'Not every job needs above-standard carpentry. A partition wall in a garage doesn\'t require individually checked studs. A storage room addition doesn\'t need Radiata Pine. Volume production work where speed matters more than long-term precision is not where we compete.',
          'We\'re the right fit for jobs where something expensive and permanent is going in front of or on top of the carpentry. High-end joinery. Significant tiling runs. Structural work where the finishes can\'t compensate for a bad frame underneath.',
          'If the budget is tight and the use is low-visibility, minimum standard is fine. We\'re not here to argue otherwise.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What timber do most carpenters in Sydney use for framing?',
        a: 'Around 80% use Baltic Pine, which is imported and lighter than locally grown alternatives. It\'s cheaper and more widely available, but it moves more after installation because it wasn\'t grown or dried under Australian conditions. We use Radiata Pine from Timberlink — an Australian product that\'s more dimensionally stable.',
      },
      {
        q: 'How can I tell if my carpenter is cutting plates correctly?',
        a: 'Ask whether they\'re using a drop saw for plates or snapping them. Snapping is faster but introduces cumulative error across long wall runs. Drop saw cutting produces clean, consistent cuts that don\'t drift over a 15-metre wall run.',
      },
      {
        q: 'Why does my new floor squeak?',
        a: 'Usually adhesive failure. Liquid nails — used on most new builds — cures brittle and debonds under the cyclic loading a floor takes every day. Polyurethane adhesive applied in a 30mm bead with full ring-shank and screw fix-off doesn\'t produce squeaking floors.',
      },
      {
        q: 'Does timber choice make a real difference to the finished result?',
        a: 'Yes — primarily in how straight the frame stays over time. Radiata Pine is more dimensionally stable in Australian conditions because it was grown and dried here. The difference shows up most in long joinery runs and door frames, where a few millimetres of frame movement becomes visible in the finished product.',
      },
      {
        q: 'Should every job pay for above-standard carpentry?',
        a: 'No. For low-visibility work, storage structures, or volume production builds where speed is the priority, minimum standard is appropriate. Above-standard matters most when expensive finishes, precision joinery, or long-term structural performance are at stake.',
      },
    ],
    references: [
      {
        title: 'Australian Standard AS 1684 — Residential Timber-Framed Construction',
        url: 'https://www.standards.org.au',
      },
      {
        title: 'WoodSolutions — Structural Timber Specification',
        url: 'https://www.woodsolutions.com.au',
      },
      {
        title: 'NSW Fair Trading — Licensing for Building and Trade Work',
        url: 'https://www.fairtrading.nsw.gov.au/trades-and-businesses/licensing',
      },
    ],
  },

  {
    slug: 'why-subfloors-squeak',
    image: '/bottom-plate-shot.webp',
    title: 'Why Subfloors Squeak (and Why It\'s Not a Maintenance Issue)',
    seoTitle: 'Why Sydney Subfloors Squeak (and How to Fix It) | Strava Group',
    seoDescription:
      'A squeaking floor was built that way. The three causes — adhesive failure, crowned joists, substrate movement — are all preventable at construction stage. Here\'s how.',
    publishDate: '2026-04-17',
    readingTime: 6,
    excerpt:
      'A squeaking floor is not something that develops over time. It was built that way. The cause is almost always preventable at construction stage — and almost always comes down to what went under the first sheet.',
    sections: [
      {
        id: 'built-that-way',
        heading: 'It happened before the first sheet went down',
        body: [
          'A squeaking floor is not a maintenance issue. It\'s a construction failure that was locked in before the first sheet of particleboard or plywood ever went down.',
          'This is worth being direct about because a lot of homeowners spend years accepting squeaking floors as a fact of life — oiling hinges, tightening screws, replacing boards. None of that addresses what\'s actually happening in the subfloor structure underneath.',
          'The cause is almost always one of three things. All three are preventable. None of them fix themselves.',
        ],
      },
      {
        id: 'three-causes',
        heading: 'The three causes of subfloor squeaking',
        body: [
          'The adhesive failed. Liquid nails is used on most Sydney subfloors. It cures hard and brittle. A floor is a dynamic system — it moves constantly under foot traffic, furniture loads, and thermal cycling. Liquid nails doesn\'t accommodate that movement. It debonds. The gap between joist and sheet is where the squeak comes from.',
          'The joist was crowned. Joists are not perfectly straight. When a joist has an upward bow in the middle — a crown — adhesive can\'t bridge the gap between the joist\'s high point and the sheet. You get contact at the ends and no contact in the middle. The sheet flexes underfoot and produces noise.',
          'The substrate moved. If the slab wasn\'t walked and high points identified before framing, those points get locked into the floor structure. The frame sits on a slab that isn\'t flat, the sheet bridges a gap, and it flexes every time someone walks across it. No amount of adhesive fixes a sheet that\'s bouncing.',
        ],
      },
      {
        id: 'liquid-nails',
        heading: 'Why liquid nails is the wrong product',
        body: [
          'Liquid nails is cheap, available at every hardware store, and used by the majority of subfloor installers in Sydney. It\'s also the wrong product for structural subfloor bonding.',
          'The issue is not initial bond strength — liquid nails adheres fine on day one. The issue is what happens under cyclic loading over time. Every person who walks across a floor deflects that floor a small amount. Thousands of deflections per year. Liquid nails cures rigid and doesn\'t absorb those deflections. It fatigues and debonds — not everywhere at once, but at the points where movement is highest.',
          'Polyurethane adhesive is the correct product. It cures with a degree of flexibility. It doesn\'t fatigue under cyclic loading. Applied in a 30mm bead across the full width of the joist, it provides both bonding and cushioning — which is part of why it eliminates the squeak rather than just delaying it.',
          'This is one of the things that genuinely distinguishes [quality subfloor framing](/services/subfloor-framing/) from minimum-standard work. The product costs more. The time to apply it correctly costs more. The result is a floor that doesn\'t squeak in year one or year ten.',
        ],
      },
      {
        id: 'correct-construction',
        heading: 'What correct subfloor construction looks like',
        body: [
          'The slab is walked at all wall locations before any frame goes in. The highest point becomes the datum for the entire structure. All packing goes at slab level — directly on the slab — not disguised at top-plate level where it\'s invisible.',
          'Every joist gets a straightedge check before sheeting starts. Crowning is identified and planed. This takes time. It\'s the time most subfloor installers skip.',
          'Polyurethane adhesive only, in a 30mm bead for full coverage. Ring-shank nails go in first to hold the sheet while the adhesive sets, then a full structural screw fix-off after installation. Both tongue-and-groove and butt joints get adhesive. Expansion joints are installed to manufacturer requirements.',
          'Done correctly, this produces a floor that won\'t squeak. The sequence is not complicated. It just takes longer than the minimum.',
        ],
      },
      {
        id: 'can-it-be-fixed',
        heading: 'Can existing squeaking be fixed?',
        body: [
          'Sometimes. The honest answer depends on what the cause is and how accessible the subfloor is.',
          'If the house has a raised subfloor with crawl space access — common in Sydney\'s [federation and interwar homes](/services/restumping/) — joists can be re-glued and screwed from below at the squeak points. This works reasonably well for localised adhesive failure.',
          'If the floor is on a concrete slab with no access from below, and the sheeting is intact, options are more limited. Long screws driven at an angle from above, into the joist below, can eliminate localised squeaks. Full resolution often requires lifting the floor and starting the subfloor correctly.',
          'If the floor is being retiled or replaced anyway, it\'s worth pulling the sheeting back to slab level and reinstating it correctly rather than re-sheeting on top of a bad substrate. The substrate doesn\'t improve under new sheets.',
        'For homes on raised timber subfloors — particularly the federation and interwar homes common to Sydney\'s Inner West and North Shore — squeaking can also indicate stump settlement below the floor rather than just adhesive failure above it. If the stumps are failing, re-gluing the sheets treats the symptom. [What restumping costs and involves in Sydney](/blog/restumping-cost-sydney/) is worth understanding before committing to a subfloor-only repair.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Are squeaking floors normal in older Sydney homes?',
        a: 'Common, yes. Normal, no. Most subfloor squeaking in older homes comes from original adhesive failing or timber joists that have dried and shifted over decades. Both are fixable — the question is whether it\'s worth the cost relative to the scope of other work being done.',
      },
      {
        q: 'Why is my brand new floor already squeaking?',
        a: 'Most likely the adhesive. Liquid nails — used on most new builds — cures brittle and debonds under foot traffic. If the floor is new and already squeaking, it\'s a construction issue, not a settling issue. In NSW, structural defects in new residential buildings are covered under the Home Building Act warranty provisions.',
      },
      {
        q: 'Can squeaking floors be fixed without replacing them?',
        a: 'Sometimes. From below (if there\'s access), joists can be re-glued and screwed. From above, long structural screws driven into joists at squeak points can resolve localised issues. Full resolution of widespread squeaking usually requires lifting the floor and reinstating the subfloor correctly.',
      },
      {
        q: 'How do I know if my joist is crowned?',
        a: 'A straightedge laid along the length of the joist will show it. Any gap between the straightedge and the joist of more than 2–3mm needs to be planed before sheeting. This check should happen at construction stage — not after the squeaking starts.',
      },
      {
        q: 'What\'s the difference between ring-shank nails and standard nails for subfloors?',
        a: 'Ring-shank nails have annular rings on the shank that grip the timber and resist withdrawal. They hold better under the cyclic loading a floor experiences. Standard smooth-shank nails can work loose over time, creating another source of movement and noise.',
      },
    ],
    references: [
      {
        title: 'AS 1684.2 — Residential Timber-Framed Construction (Non-Cyclonic Areas)',
        url: 'https://www.standards.org.au',
      },
      {
        title: 'WoodSolutions — Timber Floor Systems',
        url: 'https://www.woodsolutions.com.au',
      },
      {
        title: 'NSW Home Building Act 1989 — Statutory Warranty Provisions',
        url: 'https://legislation.nsw.gov.au/view/html/inforce/current/act-1989-147',
      },
    ],
  },

  {
    slug: 'restumping-cost-sydney',
    image: '/more-movement-cracks.webp',
    title: 'How Much Does Restumping Cost in Sydney? (A Realistic Guide)',
    seoTitle: 'Restumping Cost Sydney 2026: A Realistic Guide | Strava Group',
    seoDescription:
      'Partial restumping in Sydney typically costs $3,000–$8,000. Full house restumping runs $15,000–$25,000+. Here\'s what drives the difference and what a correct scope looks like.',
    publishDate: '2026-04-24',
    readingTime: 7,
    excerpt:
      'Partial restumping typically runs $3,000–$8,000 in Sydney. Full restumping of a standard bungalow is $15,000–$25,000. Here\'s what drives the difference, what the job actually involves, and when you should stop waiting.',
    sections: [
      {
        id: 'the-numbers',
        heading: 'What restumping costs in Sydney',
        body: [
          'Partial restumping — replacing a section of failed stumps — typically runs between $3,000 and $8,000 in Sydney, depending on the number of stumps, access conditions, and materials.',
          'Full restumping — removing and replacing every stump under the house — is more involved. For an average inner west or north shore bungalow, expect $15,000 to $25,000. Larger properties, difficult access, or extensive bearer and joist replacement alongside the stumping work can push that higher.',
          'These are realistic estimates based on what the work actually requires. They are not quotes. [Restumping](/services/restumping/) price varies significantly based on factors that can only be assessed on-site — stump count, access height, condition of the bearer and joist structure above, and whether the floor levelling scope is straightforward or complex.',
        ],
      },
      {
        id: 'price-factors',
        heading: 'What affects the price',
        body: [
          'Stump count. The most direct driver. A typical post-war bungalow might sit on 30–60 stumps. A larger federation home could have more. Each stump involves temporary support, extraction, and installation of the replacement — so more stumps is more time and more material.',
          'Subfloor access. A house with 600mm of clearance under the bearers is a different job from one with 300mm. Tight access slows every step of the work and limits equipment. Some older homes have external access only through a hatch, which adds time. Brick pier foundations add further complexity over straight timber or concrete stumps.',
          'Materials. Concrete stumps are the standard modern replacement — dimensionally stable, rot-proof, and maintenance-free. Steel stumps are used where concrete isn\'t appropriate for the load configuration or space. Either option is more expensive than the original timber stumps, but original timber stumps in 2026 are not a long-term solution.',
          'Floor levelling scope. Replacing the stumps is the structural component. Getting the floor back to level — careful packing and adjustment at each stump as the work progresses — is a separate skill. If a house has been living with a significant slope for years, the re-levelling scope increases. Some long-term floor movement in the structure above can\'t be fully reversed.',
        ],
      },
      {
        id: 'partial-vs-full',
        heading: 'Partial vs full restumping: which is right',
        body: [
          'If only a section of the house is noticeably sloping, or if a proper inspection identifies isolated failures with sound timber elsewhere, partial restumping is appropriate. You replace what has failed and monitor the rest.',
          'If the inspection reveals widespread failure — or if the stumps are original timber that has reached or passed the end of its service life — full restumping is the correct call. Doing a quarter of the stumps today and the remaining three-quarters in five years is not more economical than doing the full job once. Mobilisation costs, access work, and temporary support are largely fixed regardless of stump count.',
          'Sydney\'s federation cottages, interwar bungalows, and post-war homes were built on hardwood stumps that were typically good for 50–80 years. Most of them are in or past that range. If you\'re buying or renovating one of these homes, the subfloor condition is worth assessing as part of the project.',
        ],
      },
      {
        id: 'scope',
        heading: 'What\'s included in a correct scope',
        body: [
          'Correct [restumping](/services/restumping/) is not just pulling old stumps and driving new ones. It follows a sequence.',
          'Temporary support of the floor structure is installed before any stump is touched. Full-height support — not a jack under a bearer and a hope — goes in first. The support stays in place until each new stump is set and packed to height.',
          'Bearer and joist condition should be assessed during the job. Old timber subfloors often have rot, white ant damage, or structural failure in the bearers and joists above the stumps. If the bearers need replacement, that\'s additional scope — but it\'s better identified during the restumping job than after everything is packed back to height.',
          'After stumping, the floor requires re-levelling and re-packing. The carpentry component — [subfloor sheeting reinstatement](/services/subfloor-framing/), access hatches, ventilation — completes the scope. These are often treated as separate line items but should be budgeted as part of the full job. A correctly reinstated subfloor should not squeak — [the causes of subfloor squeaking and why they\'re preventable](/blog/why-subfloors-squeak/) are worth understanding if that\'s what prompted the investigation.',
        ],
      },
      {
        id: 'signs',
        heading: 'Signs you need it now rather than later',
        body: [
          'The marble test is the most reliable indicator most people know about. Drop a marble on the floor. If it rolls consistently toward one corner of the room, the floor has moved beyond normal tolerance.',
          'Sticking internal doors — especially doors that were fine for years and now won\'t close without effort — often indicate frame movement driven by differential stump settlement.',
          'Diagonal plaster cracks running from the corners of windows and doors suggest the frame is racking. The wall above is following the floor.',
          'Don\'t wait until the slope is hard to ignore. By the time a floor is noticeably tilted, the structural movement has usually been underway for years. Earlier intervention means less damage to the structure above, fewer secondary repairs, and lower overall cost.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How long does a restumping job take?',
        a: 'Partial restumping (5–15 stumps) typically takes 2–4 days. Full restumping of a standard Sydney bungalow takes 5–10 days, depending on access and the extent of bearer and joist work required alongside the stumping.',
      },
      {
        q: 'Can I stay in the house during restumping?',
        a: 'Usually yes, though it\'s not comfortable. Temporary propping means certain areas of the house are restricted during the work, and there will be dust and noise throughout. Most homeowners choose to be elsewhere during the main working days.',
      },
      {
        q: 'What\'s the difference between a timber stump and a concrete stump?',
        a: 'Original timber stumps — typically hardwood — were standard in residential construction until the mid-20th century. They last 50–80 years depending on conditions. Concrete stumps are the modern replacement: dimensionally stable, rot-proof, and not susceptible to white ants. Steel stumps are used in some configurations. Neither concrete nor steel requires the ongoing inspection that timber stumps do.',
      },
      {
        q: 'Do I need council approval to restump my house in NSW?',
        a: 'In most cases, restumping is maintenance work that doesn\'t require development approval. However, some heritage-listed or heritage-affected properties in Sydney have restrictions that apply to subfloor work. Check with your local council before starting, particularly for homes in heritage conservation areas.',
      },
      {
        q: 'Will restumping fix my sloping floors completely?',
        a: 'Usually significantly, sometimes completely. It depends on how long the floor has been sloping and whether the timber frame above has taken a permanent set. Noticeably sloping floors can almost always be brought back to near-level. Some long-term structural movement above the stumps can\'t be fully reversed, particularly in older homes with significant original deflection.',
      },
    ],
    references: [
      {
        title: 'NSW Fair Trading — Home Building Licensing',
        url: 'https://www.fairtrading.nsw.gov.au/trades-and-businesses/licensing',
      },
      {
        title: 'WoodSolutions — Subfloor Systems and Maintenance',
        url: 'https://www.woodsolutions.com.au',
      },
      {
        title: 'Australian Building Codes Board — National Construction Code',
        url: 'https://abcb.gov.au',
      },
    ],
  },

  {
    slug: 'baltic-pine-vs-radiata-pine',
    image: '/single-story-house-frame.webp',
    title: 'Baltic Pine vs Radiata Pine: Why 80% of Sydney Frames Use the Wrong Timber',
    seoTitle: 'Baltic Pine vs Radiata Pine: Sydney Framing | Strava Group',
    seoDescription:
      'Most Sydney carpenters frame with Baltic Pine — imported, cheaper, and less stable than Radiata Pine under Australian conditions. Here\'s what the difference means for your frame over time.',
    publishDate: '2026-05-01',
    readingTime: 6,
    excerpt:
      '80% of carpenters in Sydney are framing with Baltic Pine. It\'s imported, cheaper, and moves more after installation than locally grown alternatives. Here\'s what that difference means in practice.',
    sections: [
      {
        id: 'default-choice',
        heading: 'The default in Sydney residential framing',
        body: [
          'Most residential framing in Sydney uses Baltic Pine. It\'s available, it\'s cheap, it\'s familiar, and the framing contractors who use it have been using it long enough that they don\'t ask questions about it.',
          'Baltic Pine is an imported softwood. It comes from Scandinavia and Eastern Europe — grown in one climate, kiln-dried for shipping, and arriving in Australia having already adjusted to one set of moisture conditions. When it lands in Sydney — which has different humidity, different seasonal variation — it adjusts again. That adjustment is called movement, and it shows up in the frame.',
          'Around 80% of [wall framing](/services/wall-framing/) in Sydney uses Baltic Pine. Most of those frames hold up. The question is not whether they stand — they do — it\'s how straight they stay over time and what that movement costs in the trades that follow.',
        ],
      },
      {
        id: 'radiata-pine',
        heading: 'What Radiata Pine is and why it\'s different',
        body: [
          'Radiata Pine is an Australian product. Timberlink is the main supplier. It\'s grown in plantation conditions here, kiln-dried to local moisture targets, and by the time it arrives on a Sydney framing job, it\'s already acclimatised to Australian conditions.',
          'It costs more. The timber cost difference on a full residential frame runs $2,000–$4,000 depending on frame size. Against the total cost of a residential build, that\'s a real but manageable number. Against the cost of correcting joinery that won\'t sit flush against a bowed wall, it\'s trivial.',
          'The practical differences are straightness on delivery and dimensional stability over time. Radiata Pine comes off the mill straighter than Baltic Pine and holds that straightness better as the structure settles and seasonal humidity cycles through.',
        ],
      },
      {
        id: 'practical-difference',
        heading: 'What the timber choice means for the frame',
        body: [
          'Before any sheeting starts, frames should be straightened — packed, shaved, adjusted where necessary — to get walls as flat as possible. This takes time and is where a lot of installation shortcuts occur. Starting with straighter timber means less time correcting.',
          'The longer-term picture is where the real difference shows. A frame that moves significantly over the first two to three years — as timber dries, acclimatises, and settles — creates problems in the trades that followed. Plaster cracks. Joinery moves off its datum. Doors that hung perfectly at handover start to stick.',
          'Most of those problems get attributed to the house settling. Some of it is. A meaningful portion of it is timber behaviour — specifically, imported timber that hadn\'t finished acclimatising when the frame went up.',
          'We also mark all bows on individual studs before installation. Bows are oriented in the same direction within each frame run, and marked on the face so they\'re visible. This applies whether we\'re using Radiata or any other product. Predictable imperfection is manageable. Randomised imperfection is not.',
        ],
      },
      {
        id: 'ovo-studs',
        heading: 'Beyond the timber: LVL',
        body: [
          'For clients who want to take frame performance further, LVL — laminated veneer lumber — represents a significant step beyond Radiata Pine for dimensional stability. It\'s engineered from bonded timber veneers, manufactured to tighter tolerances than any solid timber, and far less susceptible to the movement that affects even well-selected Radiata Pine.',
          'We use LVL where the brief and the budget call for it. For [high-specification residential work](/services/fit-out/) where the joinery is expensive and the finish standard is tight, the upgrade is worth discussing.',
          'For standard residential work where the budget is a genuine constraint, Radiata Pine in MGP10 structural grade is the correct call. Baltic Pine is not.',
        ],
      },
      {
        id: 'when-it-matters',
        heading: 'When the timber choice matters and when it doesn\'t',
        body: [
          'A non-structural partition wall in a laundry doesn\'t need Radiata Pine. A storage room, a simple garden shed, a garage dividing wall — the timber choice makes little practical difference in low-visibility, low-specification applications.',
          'The choice matters when something expensive and permanent goes in front of or on top of the frame. A long kitchen run. High-end floor-to-ceiling joinery. A tiled bathroom where substrate movement cracks the grout. A staircase with tight tolerances at every rise and going.',
          'In those applications, a frame that stays straight saves money that would otherwise be spent in workarounds. The plasterer doesn\'t scribe to a bowed wall. The joiner doesn\'t shim to a wall that\'s out. The tiler doesn\'t deal with a substrate that\'s moved.',
          'The full picture of what separates above-standard from minimum-standard carpentry — beyond just timber choice — is covered in [quality carpentry vs cheap carpentry: what you\'re actually paying for](/blog/quality-carpentry-vs-cheap-carpentry/).',
        ],
      },
    ],
    faqs: [
      {
        q: 'What does MGP10 mean for timber framing?',
        a: 'MGP stands for Machine Graded Pine. The 10 refers to the stiffness classification — timber rated to a minimum modulus of elasticity of 10,000 MPa. It\'s the standard structural grade required for residential framing under the National Construction Code. Both Baltic Pine and Radiata Pine are available in MGP10.',
      },
      {
        q: 'Is Baltic Pine structurally unsafe?',
        a: 'No. Baltic Pine in MGP10 meets the structural requirements of the National Construction Code. The issue is not structural capacity — it\'s dimensional stability over time. Baltic Pine moves more as it acclimatises to Australian conditions, which affects frame straightness rather than structural performance.',
      },
      {
        q: 'Can I request Radiata Pine from my carpenter?',
        a: 'Yes. Ask your carpenter what timber they\'re planning to use and why. A carpenter who understands the difference and has a considered reason for their timber choice is in a different position from one who doesn\'t know what they\'re supplying.',
      },
      {
        q: 'What is Timberlink and are they reliable?',
        a: 'Timberlink is one of Australia\'s main plantation softwood producers, supplying structural and appearance-grade Radiata Pine to the Australian market. Their products carry the required structural grading certificates. They\'re not a boutique supplier — they\'re a mainstream Australian timber producer whose product happens to be better suited to Australian framing than imports.',
      },
      {
        q: 'How much more does Radiata Pine cost than Baltic Pine for a full house frame?',
        a: 'For a full residential frame, the timber cost difference is typically $2,000–$4,000 depending on frame size and complexity. Against total build cost, that\'s a real number — but against the cost of joinery remediation or frame straightening after the build, it\'s still trivial.',
      },
    ],
    references: [
      {
        title: 'Timberlink Australia — Structural Pine Products',
        url: 'https://www.timberlink.com.au',
      },
      {
        title: 'WoodSolutions — Softwood Timber Framing',
        url: 'https://www.woodsolutions.com.au',
      },
      {
        title: 'Australian Building Codes Board — NCC Volume One and Two',
        url: 'https://abcb.gov.au',
      },
    ],
  },

  {
    slug: 'how-to-tell-if-wall-is-load-bearing',
    image: '/groundfloor-wall-frames.webp',
    title: 'How to Tell if a Wall is Load Bearing in a Sydney Home',
    seoTitle: 'Load Bearing Wall Sydney: How to Tell | Strava Group',
    seoDescription:
      'Signs a wall might be load bearing — and why the correct answer always requires a structural engineer. What structural wall removal in Sydney actually involves, costs, and takes.',
    publishDate: '2026-05-05',
    readingTime: 8,
    excerpt:
      'Most people can identify some of the signs. Getting the correct answer requires an engineer. Here\'s what to look for, what to do with that information, and what the removal process actually involves.',
    sections: [
      {
        id: 'why-it-matters',
        heading: 'Why getting it right matters',
        body: [
          'You want open-plan living. The wall between the kitchen and the living room is in the way. You\'d like it gone.',
          'Whether that\'s a straightforward job or a complex one depends on what the wall is doing. A non-structural partition sits between rooms and carries its own weight and whatever is screwed to it. A [load bearing wall](/services/wall-removal/) carries structural load — floor load, roof load, or both — and transfers it down to the foundation.',
          'Remove a non-structural wall: straightforward job, minimal engineering involvement. Remove a load bearing wall without correctly transferring the load: the ceiling comes with it, and in a two-storey home, so does the floor above. The consequences are not hypothetical and they are not cheap to fix.',
        ],
      },
      {
        id: 'signs-load-bearing',
        heading: 'Signs a wall might be load bearing',
        body: [
          'It runs perpendicular to the floor joists. Floor joists typically span the short dimension of a room and need support along their span. A wall that runs across the direction of the joists — perpendicular to them — is positioned to provide that support and is more likely to be structural.',
          'It sits directly above a wall or beam on the floor below. Load transfers straight down. A wall on the first floor that sits directly above a wall or prominent beam on the ground floor is almost certainly part of the load path.',
          'It\'s at or near the centre of the house. Most houses have a central spine wall — sometimes called a loadbearing internal wall — that carries load from the ridge or upper floor down to the foundations. Walls near the centre of the building plan are more often structural than walls at the perimeter.',
          'Roof structure bears on it. Open the ceiling space and look. Rafters, ceiling joists, or truss members that sit on or attach to the top of a wall indicate that the wall is carrying [roof load](/services/roof-framing/). That load needs somewhere to go if the wall comes out.',
        ],
      },
      {
        id: 'signs-not-load-bearing',
        heading: 'Signs a wall is probably not load bearing',
        body: [
          'It runs parallel to the floor joists. A wall that sits between joists — running in the same direction rather than across them — isn\'t positioned to carry joist load and is more likely to be a partition.',
          'It was clearly added after original construction. Walls that meet the ceiling with a gap, that don\'t align with anything above or below, that have original brick or weatherboard behind them when opened — these are usually later additions built to divide existing space rather than carry load.',
          'There is nothing structural above it. A single-storey wall with only ceiling (not an upper floor or roof structure) above it is often non-structural. Often, not always.',
          'Important caveat: none of these indicators are reliable enough to act on without professional confirmation. "Probably not structural" is not a basis for removing a wall.',
        ],
      },
      {
        id: 'need-engineer',
        heading: 'Why you need a structural engineer',
        body: [
          'The correct answer to "is this wall load bearing?" comes from a structural engineer. Not a carpenter, not a real estate agent, not a YouTube tutorial, and not the previous owner who says they\'re pretty sure it\'s not structural.',
          'An engineer will assess the full load path — what the wall is carrying, what sits above it, and what the permanent solution looks like. They\'ll specify the beam size, the bearing lengths, the connection hardware at each end, and any requirements for new posts or footings.',
          'Engineering fees for a residential [wall removal](/services/wall-removal/) are typically $500–$1,500. The cost of installing an undersized beam because someone guessed is structural remediation — which costs considerably more and requires demolishing the work that was done above it.',
          'In NSW, structural building work must be performed by a licensed builder or carpenter. An unlicensed person removing a load bearing wall without engineering and correct temporary support creates both a safety risk and an uninsured liability that follows the property. The questions worth asking when choosing who does the structural work are in [quality carpentry vs cheap carpentry](/blog/quality-carpentry-vs-cheap-carpentry/).',
        ],
      },
      {
        id: 'removal-process',
        heading: 'What the structural wall removal process involves',
        body: [
          'Correct structural wall removal follows a fixed sequence. The sequence does not vary based on cost pressure or schedule.',
          'Load path is assessed and engineering documentation is obtained. Temporary support — full-height props or a temporary load-bearing wall — is installed before any work starts. The ceiling remains fully supported throughout the removal.',
          'The permanent beam is installed to the engineer\'s specification: correct size for the span and load, correct bearing lengths at each end, correct connection hardware. The beam goes in while the temporary support is still in place. The temporary support comes down after the permanent structure is confirmed.',
          'Make-good to the ceiling, floor, and adjacent walls is part of the scope. Services that run through the wall — electrical, plumbing, data — are identified and relocated before the wall is touched.',
          'Non-structural internal walls are simpler: no temporary support needed, no engineering required. But services still need to be identified, and the make-good to ceiling, floor, and adjacent walls still needs to be done cleanly.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I remove a load bearing wall myself?',
        a: 'Not legally in NSW. Structural building work must be performed by a licensed builder or carpenter. Practically, doing it without correct temporary support and engineering is dangerous — the load doesn\'t wait while you work out where it\'s going. The correct approach is engineering first, then licensed installation.',
      },
      {
        q: 'How much does structural wall removal cost in Sydney?',
        a: 'For a typical single-storey residential wall, including engineering, temporary support, beam installation, and make-good, expect $5,000–$12,000 depending on span and complexity. Two-storey walls — where the load above is greater and the beam specification is larger — are more expensive. These are estimates; the correct figure comes from a site assessment.',
      },
      {
        q: 'Do I need council approval for wall removal in NSW?',
        a: 'Structural wall removal typically requires a CDC (Complying Development Certificate) or DA (Development Application) depending on the property, zoning, and extent of work. Check with a private certifier or your local council before beginning. Heritage-listed or heritage-affected properties have additional requirements.',
      },
      {
        q: 'How long does structural wall removal take?',
        a: 'The physical work — temporary support, beam installation, make-good — is typically 1–2 days for a single-storey residential wall. Lead time from initial enquiry to completion, including engineering and any required approvals, is typically 2–6 weeks.',
      },
      {
        q: 'What size beam do I need for a structural wall removal?',
        a: 'Beam size is determined by span and load — the structural engineer specifies it based on what the wall is carrying and how far the beam needs to span. There is no standard answer. An undersized beam is not a cost-saving measure. It\'s a structural defect.',
      },
    ],
    references: [
      {
        title: 'NSW Fair Trading — Home Building Licensing',
        url: 'https://www.fairtrading.nsw.gov.au/trades-and-businesses/licensing',
      },
      {
        title: 'Service NSW — When Does Home Building Work Need Approval?',
        url: 'https://www.service.nsw.gov.au/transaction/check-if-home-building-work-needs-approval',
      },
      {
        title: 'Australian Building Codes Board — NCC Structural Requirements',
        url: 'https://abcb.gov.au',
      },
    ],
  },

  {
    slug: 'wall-framing-cost-sydney',
    image: '/erected-wall-frame.webp',
    title: 'How Much Does Wall Framing Cost in Sydney?',
    seoTitle: 'Wall Framing Cost Sydney: Realistic 2026 Pricing | Strava Group',
    seoDescription:
      'Wall framing in Sydney costs $100–150 per lineal metre for straight stud walls. A full residential floor frame typically runs $10,000–20,000. Here\'s what drives the difference.',
    publishDate: '2026-05-06',
    readingTime: 6,
    excerpt:
      'Wall framing in Sydney runs $100–150 per lineal metre for straight stud walls on a slab. A complete ground floor frame for a standard home is $10,000–20,000 depending on complexity. Here\'s what makes quotes vary significantly for the same job.',
    sections: [
      {
        id: 'the-numbers',
        heading: 'What wall framing costs in Sydney',
        body: [
          'The per-metre rate for [wall framing](/services/wall-framing/) on a residential job in Sydney is $100–150 per lineal metre for straight stud walls on a slab, standard ceiling height, no unusual complexity. That\'s a useful starting point and an almost useless number on its own.',
          'A typical three to four bedroom single-storey home has 80–130 lineal metres of internal and external walls. At the per-metre rate, that\'s $3,200–7,800 for the walls alone. Add in plates, headers over openings, double top plates, bracing, junctions, temporary bracing, and the mobilisation cost of a crew, and a complete single-storey residential frame runs $10,000–20,000.',
          'Two-storey frames — ground floor walls, floor framing between levels, upper floor walls, double top plates, temporary bracing — are $20,000–40,000 for a standard Sydney home. Complex geometry, vaulted ceilings, or unusual structural requirements push prices higher.',
          'These are realistic estimates, not quotes. A quote requires plans, measurements, and a site visit. Be wary of any quote that arrives without plans — it\'s either an estimate or a price that will change once someone looks at the job properly.',
        ],
      },
      {
        id: 'what-drives-cost',
        heading: 'What actually drives the price',
        body: [
          'Wall height. Standard residential ceiling heights in Sydney are 2.4m or 2.7m. Higher ceiling heights mean longer studs, more material, and more time to raise and brace walls that are heavier and more awkward to handle. A 3.0m ceiling height frame costs meaningfully more than a 2.4m equivalent.',
          'Junction count and complexity. A simple rectangular floor plan with a few internal walls is straightforward to frame. A complex floor plan with multiple junctions, splayed corners, bay windows, and custom-sized openings takes more time at every step — set-out, plate work, stud layout, junction work, bracing.',
          'Slab condition. A correctly formed slab — flat within tolerance, dimensions matching the plans, anchor bolt locations accurate — makes for a fast day one. A slab with a significant high point that becomes the datum, dimensions that don\'t match the plans, or bolt locations that require redrilling is an expensive day one. We walk slabs before starting and flag issues early rather than discovering them mid-frame.',
          'Timber specification. Above-standard framing uses [Radiata Pine rather than Baltic Pine](/blog/baltic-pine-vs-radiata-pine/) — an Australian product that\'s more dimensionally stable under local conditions. The cost difference on a full residential frame is modest relative to the total, but it\'s in the materials.',
          'Labour quality. A framing crew that checks every stud, cuts all plates on a drop saw, and orients bows consistently before erection takes more time than one that doesn\'t. That time is in the price. It\'s also in the result.',
        ],
      },
      {
        id: 'what-cheap-quotes-cut',
        heading: 'What cheap quotes are leaving out',
        body: [
          'The most common omission in a low framing quote is the assumption that the slab is perfect. It never is. A quote that doesn\'t include slab walking, high-point determination, and packing at slab level is assuming conditions that don\'t exist.',
          'Temporary bracing. A frame that isn\'t correctly braced as it goes up is a frame that moves. Bracing comes out when the roof goes on — until then, the frame is held by temporary bracing. Skimping on temporary bracing isn\'t immediately visible. The frame passes inspection. Then the wind hits it.',
          'Double top plates on every wall. The NCC requires double top plates on load-bearing walls. Some cheaper quotes single-plate internal non-structural walls to save time. Above-standard framing double-plates every wall — it provides a consistent fixing surface and the frame behaves consistently as a system.',
          'Pre-locked junctions. Junctions between walls — T-junctions, corners, intersections — are either built in place or pre-locked before walls are erected. Pre-locking takes more time. It produces a junction that stays tight over time rather than one that opens as the frame settles.',
        ],
      },
      {
        id: 'above-standard',
        heading: 'Why above-standard framing costs more and what you get',
        body: [
          'The difference between minimum-standard and above-standard wall framing is not dramatic in dollar terms — typically $1,000–3,000 more on a full residential floor. It shows up in how long the frame stays straight and what the joinery looks like at handover and in year five.',
          'Above-standard framing costs more because it takes longer. Checking every stud takes time. Cutting plates on a drop saw takes time. Pre-locking junctions takes time. Installing structural screws at end studs takes time. None of this is visible in the finished house. All of it affects the finished house.',
          'The most expensive places to discover a frame wasn\'t straight are kitchens and bathrooms. A long kitchen run against a bowed wall costs money in the joinery. A tiled bathroom on a substrate that has moved costs money in cracked grout and relaid tiles. The framing cost is a small fraction of those remediation costs.',
          'The full picture of what distinguishes quality framing from minimum standard is covered in [quality carpentry vs cheap carpentry](/blog/quality-carpentry-vs-cheap-carpentry/).',
        ],
      },
      {
        id: 'when-not-to-hire',
        heading: 'When not to hire us',
        body: [
          'Non-structural partitions in storage rooms, garages, or outbuildings don\'t need above-standard framing. A wall that will never have expensive joinery installed against it doesn\'t need individually checked studs.',
          'We\'re structured for structural framing where the specification matters — residential floors, two-storey construction, load-bearing walls, frames that joinery and expensive finishes will follow. If the job is a single partition in a low-visibility space, there are smaller operators who will do it more economically.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does wall framing cost per metre in Sydney?',
        a: 'Straight stud framing on a slab in Sydney runs $100–150 per lineal metre as a rough guide. That figure is for standard residential wall heights and doesn\'t account for lintels, junctions, bracing, or mobilisation costs. A complete residential floor frame is a different figure from the per-metre rate alone.',
      },
      {
        q: 'How much does it cost to frame a house in Sydney?',
        a: 'A complete single-storey residential frame — walls, lintels, bracing, double top plates — typically runs $10,000–20,000 in Sydney depending on floor plan complexity, ceiling height, and slab condition. Two-storey frames including the floor system between levels and upper floor walls are $20,000–40,000.',
      },
      {
        q: 'Why do framing quotes vary so much for the same job?',
        a: 'Specification. A quote using standard Baltic Pine, single top plates on some walls, and no pre-locked junctions will come in cheaper than one using Radiata Pine, double top plates throughout, and pre-locked junctions. The frame looks the same on day one. The difference shows up over years in how straight it stays and how the trades that follow can work.',
      },
      {
        q: 'How long does wall framing take for a single-storey house?',
        a: 'A two to three-person crew takes three to four days to frame a standard single-storey residential floor. Complex floor plans with many junctions and high ceilings take longer. Two-storey construction with the floor system between levels is seven to twelve days for a complete frame.',
      },
      {
        q: 'Is wall framing covered by a building warranty in NSW?',
        a: 'Structural framing is part of residential building work covered by the Home Building Act statutory warranty in NSW — six years for major defects, two years for other defects. The warranty runs from completion of work.',
      },
    ],
    references: [
      { title: 'Standards Australia — AS 1684 Residential Timber-Framed Construction', url: 'https://www.standards.org.au' },
      { title: 'WoodSolutions — Structural Timber Framing', url: 'https://www.woodsolutions.com.au' },
      { title: 'NSW Fair Trading — Home Building Licensing', url: 'https://www.fairtrading.nsw.gov.au/trades-and-businesses/licensing' },
    ],
  },

  {
    slug: 'granny-flat-carpentry-sydney',
    image: '/double-story-frame-no-roof.webp',
    title: 'Granny Flat Structural Carpentry in Sydney: What the Framing Work Involves',
    seoTitle: 'Granny Flat Carpentry Sydney: Structural Framing Guide | Strava Group',
    seoDescription:
      'Granny flat framing in Sydney is standard single-storey residential carpentry — but site access, approvals, and the constrained build environment make it different in practice. Here\'s what the structural work involves.',
    publishDate: '2026-05-06',
    readingTime: 6,
    excerpt:
      'Since NSW expanded secondary dwelling provisions, the structural carpentry for a granny flat is fundamentally the same as a small house. The complication is everything surrounding it — site access, existing services, and getting approvals right before the frame goes up.',
    sections: [
      {
        id: 'what-changed',
        heading: 'What changed with NSW granny flat rules',
        body: [
          'NSW expanded secondary dwelling provisions in 2023. Most Sydney residential blocks can now accommodate a granny flat without the restrictions that previously made many sites non-viable. The allowed footprint is up to 60 m² for lots under 900 m², with larger allowances for bigger blocks.',
          'The planning change has driven a significant increase in granny flat construction across Sydney. The structural carpentry involved is standard single-storey timber framing — the same skills as any residential floor — but the site context adds complications that a volume builder\'s standard process doesn\'t account for.',
          'Most of the complications are not structural. They\'re spatial: getting material to a back-garden build, working around existing services, and framing correctly on a site with limited access and no room for error.',
        ],
      },
      {
        id: 'structural-framing',
        heading: 'What the structural framing involves',
        body: [
          'A standard granny flat frame — 40–60 m² single-storey, slab on ground — is three to four days of framing. [Wall framing](/services/wall-framing/) at standard residential specification: double top plates, individual stud checks, pre-locked junctions, structural screws at end studs. The scope is no different from a small house.',
          'The roof framing is typically a simple hip or gable — either a prefab truss from a fabricator or a cut roof for designs that don\'t suit standard truss geometry. A simple granny flat with a hip roof and standard geometry suits trusses. Anything with a higher pitch, a skillion component, or a complicated roofline needs cut [roof framing](/services/roof-framing/).',
          'Subfloor framing is straightforward on a slab. If the granny flat is on a sloped block and needs to be elevated — a raised floor system — the subfloor becomes a structural design exercise with its own bearer and joist specification, and usually requires an engineer\'s input.',
          'The structural framing is usually the least complicated part of a granny flat build. It\'s the site that makes it complicated.',
        ],
      },
      {
        id: 'site-complications',
        heading: 'Site complications that make granny flats different',
        body: [
          'Access. A granny flat in a back garden typically means materials traveling through or around the existing house, through a side gate, or over a fence. Framing timber, roof trusses, and sheeting panels need to get from the street to the build site. On a standard new build, that\'s a clear site. On a back-garden granny flat, it\'s often a 900mm side gate and a ninety-degree turn.',
          'A crane lift over the house is sometimes the correct solution for truss delivery. It adds cost. It\'s worth knowing before the trusses are ordered — some truss configurations won\'t survive the lift without additional strongbacks. Plan the delivery before designing the roof structure.',
          'Existing services. Water, gas, sewer, and electrical services to the existing house typically run through the back yard. A granny flat slab and footings need to be positioned around them. Service locations need to be confirmed before concrete is poured — not after a footing punch-through discovers a sewer line.',
          'Existing structures. Fences, garden beds, paving, and the existing house all constrain what can be built and where. The setback requirements under the standard instrument give you the outer envelope. Working within that envelope on a constrained site requires careful set-out.',
        ],
      },
      {
        id: 'approvals',
        heading: 'What a granny flat needs for approvals in NSW',
        body: [
          'Most granny flats in NSW are approved via the Complying Development Certificate (CDC) pathway through a private certifier rather than a Development Application through council. The CDC pathway typically takes 10 working days and covers most standard secondary dwelling configurations.',
          'Heritage-listed properties and those in some heritage conservation areas may not qualify for the CDC pathway. Bushfire-prone land, flood-prone lots, and some coastal foreshore lots also have additional requirements.',
          'The private certifier will require structural engineering for the slab, framing, and any retaining works. The engineering documentation tells the carpenter what to build — beam spans, connection hardware, anchor specifications. We frame to the engineering.',
          'One common approval mistake: assuming the CDC covers everything. Services connections for a secondary dwelling — water, sewer, electricity — require separate authority approvals and may require upgrading the existing connection to the property. Budget for them as a separate line item.',
        ],
      },
      {
        id: 'when-not-to-hire',
        heading: 'When not to hire us',
        body: [
          'A standard granny flat on a flat, accessible block with easy side access and no complications is a job any competent licensed carpenter can handle. There are volume granny flat builders in Sydney whose whole business model is the standard uncomplicated CDC job, and they do it efficiently.',
          'We\'re the right call when the site is constrained, the block is sloped, access requires problem-solving, the design deviates from the standard configuration, or the primary dwelling needs structural work at the same time — [wall removal](/services/wall-removal/), [restumping](/services/restumping/), or subfloor repairs alongside the granny flat build. If it\'s a straightforward back-yard slab job with simple access, we\'ll say so.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does a granny flat cost to build in Sydney?',
        a: 'A fully completed granny flat in Sydney — slab, frame, fit-out, wet areas, kitchen, electrical, plumbing — typically runs $150,000–$250,000 depending on specification and site conditions. The structural carpentry (framing) component is $10,000–20,000 of that total.',
      },
      {
        q: 'Do I need council approval for a granny flat in NSW?',
        a: 'Most standard secondary dwellings in NSW are approved via the CDC pathway through a private certifier rather than a DA through council. The CDC applies to lots that meet the standard instrument criteria. Heritage-listed properties, some conservation areas, and certain constrained sites require a DA.',
      },
      {
        q: 'Can a granny flat be built on a sloped block in Sydney?',
        a: 'Yes, but it requires more engineering than a flat site. A sloped block typically means retaining walls, a suspended floor system rather than slab-on-ground, or cut-and-fill earthworks to create a level platform. Each approach has structural implications and cost consequences.',
      },
      {
        q: 'How long does granny flat framing take?',
        a: 'A standard 40–60 m² single-storey granny flat frame takes three to four days for a crew — the same as a small residential floor. Site access constraints and material delivery logistics can add time on back-yard builds where materials can\'t be staged efficiently.',
      },
      {
        q: 'Can I rent out a granny flat in Sydney?',
        a: 'Yes. NSW secondary dwelling provisions explicitly allow rental of a granny flat on a residential lot without requiring a separate strata title. The main requirement is that the dwelling meets the standard, which a CDC approval confirms.',
      },
    ],
    references: [
      { title: 'NSW Planning — Secondary Dwellings Policy', url: 'https://www.planning.nsw.gov.au/policy-and-legislation/housing/secondary-dwellings' },
      { title: 'WoodSolutions — Residential Timber Framing Systems', url: 'https://www.woodsolutions.com.au' },
      { title: 'Standards Australia — AS 1684 Residential Timber-Framed Construction', url: 'https://www.standards.org.au' },
    ],
  },

  {
    slug: 'second-storey-addition-sydney',
    image: '/double-story-frame.webp',
    title: 'Second Storey Addition in Sydney: What the Structural Work Actually Involves',
    seoTitle: 'Second Storey Addition Sydney: Structural Guide | Strava Group',
    seoDescription:
      'Adding a second storey to a Sydney home involves engineering the existing frame, installing the floor system between levels, and correctly sequencing the roof removal. Here\'s what the carpentry scope looks like and what goes wrong.',
    publishDate: '2026-05-06',
    readingTime: 7,
    excerpt:
      'A second storey addition is the most structurally complex residential project most Sydney homeowners undertake. The carpentry scope — reinforcing the existing frame, installing the floor system, framing the upper walls and roof — needs to be sequenced correctly. Here\'s what that looks like and where projects fail.',
    sections: [
      {
        id: 'what-it-involves',
        heading: 'What a second storey addition actually involves structurally',
        body: [
          'Adding a second storey to an existing Sydney home is not a standard new build from the first floor up. It\'s a structural intervention on a building designed and built for single-storey loads. The existing frame — walls, footings, stumps or slab — was sized for what it carries now, not for an additional floor above it.',
          'Before any second storey framing starts, the existing structure needs to be assessed. Are the existing external walls adequate to carry the additional load? Are the footings adequate? Is there a subfloor system below that needs reinforcing? A structural engineer answers these questions. The engineer\'s report defines the scope: what needs to be reinforced, how the new floor system connects to the existing walls, and the correct sequence.',
          'Missing this step — framing an upper floor onto an existing structure that hasn\'t been assessed — is how second storey additions develop cracked external walls, doors that won\'t close, and foundations that have settled under a load they weren\'t designed for.',
        ],
      },
      {
        id: 'existing-structure',
        heading: 'Assessing and reinforcing the existing frame',
        body: [
          'Most Sydney homes built before the 1990s have external brick or brick-veneer walls. Brick walls carrying single-storey loads for decades may need additional reinforcing for a second storey — the engineer specifies what: additional tie-rods, reinforced footings, or a new structural frame within the existing external walls.',
          'Timber-framed external walls need to be checked for condition before any additional load is applied. In [federation and interwar homes](/blog/federation-home-renovations-sydney/), the original wall framing may have been modified over decades — walls opened up, plates cut, structural members removed without replacement. What\'s actually in those walls determines the reinforcement scope.',
          'The bottom plate connection — how the new upper floor attaches to the top of the existing lower walls — is a critical structural detail. Connection hardware, anchor bolt spacing, and tie-down requirements are specified by the engineer and must be installed exactly as documented. Short-cuts at this connection show up as upper floor movement years later.',
        ],
      },
      {
        id: 'floor-system',
        heading: 'The floor system between levels',
        body: [
          'The floor system between the ground floor and upper floor is the structural spine of a two-storey addition. Typically LVL bearers spanning between external walls, with floor joists at 450mm centres, sheeted with structural particleboard.',
          'LVL bearer sizing is specified by the engineer based on span and load. The most common installation error is short-bearing at the ends — the bearer doesn\'t sit on enough wall at each end to correctly transfer load. Bearing length is specified by the engineer. It is not a detail to adjust on site.',
          'The [subfloor framing](/services/subfloor-framing/) for the between-levels system follows the same specification as ground-level subfloor work: polyurethane adhesive, ring-shank nails, structural screw fix-off. A floor between levels is under the same cyclic loading as a ground floor. Install it the same way.',
          'Services rough-in typically goes in before the floor sheeting — plumbing and electrical penetrations through the floor system need to be located and sleeved before sheeting starts. Coordinate with the plumber and electrician before the sheets go down.',
        ],
      },
      {
        id: 'upper-frame',
        heading: 'Upper floor framing and roof',
        body: [
          'Once the floor system is inspected and confirmed, the upper floor [wall framing](/services/wall-framing/) proceeds as standard residential framing. The connection to the floor system below needs to be correct: bottom plates anchored to the floor system with the specified fixings, not just nailed into sheeting.',
          'Roof framing for a second storey addition is often the most complex part of the job. The roof form has to integrate with the existing roofline — which may have valleys, hips, and existing framing that needs to be extended or replaced. A cut [roof](/services/roof-framing/) framed by a carpenter who understands load paths and roof geometry is the right call. Prefab trusses sometimes work on simple geometry but rarely accommodate the complex junctions that second storey additions create.',
          'The temporary weatherproofing sequence matters. The roof over the existing lower floor is removed before the upper floor is started. The house is exposed. Temporary covers manage rain penetration while the work is in progress. Plan this before it rains, not during.',
        ],
      },
      {
        id: 'when-not-to-hire',
        heading: 'When not to hire us',
        body: [
          'If you have a simple, structurally straightforward single-storey brick veneer home with solid footings and an engineer has confirmed minimal reinforcement is needed, a licensed builder with second storey experience can manage the job. The structural complexity drives the specification, not the brand on the ute.',
          'We\'re the right call when the existing frame is complex or unknown in condition, when heritage constraints affect the approach, when the roof geometry requires a cut roof, or when the existing subfloor needs structural work alongside the addition. Second storey work on older homes in Sydney\'s Inner West and Eastern Suburbs almost always falls into that category.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does a second storey addition cost in Sydney?',
        a: 'The structural carpentry component — floor system, upper wall frame, roof framing — typically runs $30,000–60,000 in Sydney depending on floor area and complexity. Total project cost including engineering, approvals, finishes, and services is $150,000–$350,000+ for a standard second storey addition.',
      },
      {
        q: 'Does a second storey addition need structural engineering in NSW?',
        a: 'Yes. Adding a second storey is structural work that must be engineered. The engineer assesses the existing structure, specifies any required reinforcement, and documents the floor system, wall frame, and roof connections. Licensed carpentry work must be carried out to that documentation.',
      },
      {
        q: 'Do I need council approval for a second storey addition in NSW?',
        a: 'Second storey additions typically require a CDC or DA in NSW. Many qualify for the CDC pathway through a private certifier. Heritage-listed properties and those in heritage conservation areas usually require a DA. Check with a private certifier for your specific property.',
      },
      {
        q: 'How long does a second storey addition take?',
        a: 'From initial design to handover, a standard second storey addition in Sydney takes five to twelve months — including design, engineering, approvals, structural carpentry, services, and finishes. The framing component itself is three to six weeks for a standard addition.',
      },
      {
        q: 'Can I live in the house during a second storey addition?',
        a: 'During the roof removal and floor system installation phase, the house is exposed and typically uninhabitable. Most homeowners arrange to be elsewhere for three to five weeks during the structural phase. Once the new roof is on and the building is weathertight again, living in the lower floor during finishing work is usually possible.',
      },
    ],
    references: [
      { title: 'Service NSW — When Does Home Building Work Need Approval?', url: 'https://www.service.nsw.gov.au/transaction/check-if-home-building-work-needs-approval' },
      { title: 'WoodSolutions — Multi-Storey Timber Framing', url: 'https://www.woodsolutions.com.au' },
      { title: 'Standards Australia — AS 1684 Residential Timber-Framed Construction', url: 'https://www.standards.org.au' },
    ],
  },
]
