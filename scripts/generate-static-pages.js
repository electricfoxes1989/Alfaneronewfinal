/**
 * Post-build script to generate static HTML pages for each route
 *
 * Each page gets:
 * - Unique <title>, <meta description>, canonical, OG/Twitter tags
 * - Pre-rendered semantic HTML content for crawlers (SEO + GEO)
 * - Per-page structured data (Schema.org JSON-LD)
 *
 * The pre-rendered content is hidden visually but readable by all crawlers,
 * including AI bots (GPTBot, PerplexityBot, etc.) that cannot execute JavaScript.
 * React will mount over the #root div as normal for interactive users.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist', 'public');
const BASE_URL = 'https://alfaneroyacht.com';

// Page-specific SEO data with pre-rendered content
const pages = [
  {
    path: '/',
    isHome: true,
    title: 'ALFA NERO | 82m Oceanco Superyacht For Sale',
    description: '82m Oceanco superyacht for sale. Award-winning design by Nuvolari Lenard, Alberto Pinto interiors. Built 2007, refitted 2024.',
    h1: 'ALFA NERO — 82m Oceanco Superyacht For Sale',
    content: `<p>A multi-award-winning 82-metre superyacht built by Oceanco and originally commissioned by Greek shipping magnate Theodore Angelopoulos, ALFA NERO remains a benchmark in her class almost two decades after launch.</p>
<h2>An Oceanco Icon</h2>
<p>ALFA NERO was the first superyacht to feature a convertible infinity pool-to-helipad system. Designed by Nuvolari Lenard with interiors by Alberto Pinto, she won seven international awards including Best Interior Design and Best Exterior Styling at the World Superyacht Awards 2008.</p>
<h2>Design Heritage</h2>
<p>Three legendary houses collaborated on ALFA NERO: Oceanco built the hull in the Netherlands as hull Y702, Nuvolari Lenard designed the exterior from their Venice studio, and Alberto Pinto created 1,250 square metres of interior living space.</p>
<h2>Specifications at a Glance</h2>
<ul>
<li>Length Overall: 82 metres (269 feet)</li>
<li>Builder: Oceanco, Netherlands</li>
<li>Year Built: 2007, Refitted 2024</li>
<li>Guests: 12 in 6 staterooms</li>
<li>Crew: Up to 28</li>
<li>Top Speed: 20 knots</li>
<li>Range: 5,500 nautical miles</li>
</ul>`,
    images: [
      { src: '/images/exterior-profile.webp', alt: 'ALFA NERO 82m Oceanco superyacht profile view' },
      { src: '/images/main-master-cabin.webp', alt: 'ALFA NERO master cabin by Alberto Pinto' },
      { src: '/images/aft-deck-pool.webp', alt: 'ALFA NERO infinity pool on aft deck' },
    ],
    schema: {
      '@type': 'Product',
      name: 'ALFA NERO Superyacht',
      description: 'An 82-metre Oceanco superyacht for sale. Award-winning design by Nuvolari Lenard, Alberto Pinto interiors. Built 2007, comprehensively refitted 2024.',
      brand: { '@type': 'Brand', name: 'Oceanco' },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'EUR', priceValidUntil: '2027-12-31' },
    },
  },
  {
    path: '/history',
    title: 'History & Provenance | ALFA NERO',
    description: 'The story of ALFA NERO: commissioned 2002, launched 2007 by Oceanco as hull Y702. Winner of multiple World Superyacht Awards. Comprehensively refitted in 2024.',
    h1: 'The Icon That Changed Design',
    content: `<p>Launched in 2007 by Oceanco in the Netherlands, ALFA NERO was commissioned by Greek shipping magnate Theodore Angelopoulos. She was Oceanco's second-largest delivery at the time, surpassed only by Indian Empress.</p>
<h2>Construction &amp; Launch</h2>
<p>Built as hull Y702 in Oceanco's 700-series programme at the Alblasserdam shipyard in South Holland. Carlo Nuvolari and Dan Lenard designed the exterior while Alberto Pinto created the interiors.</p>
<h2>Award-Winning Design</h2>
<p>ALFA NERO won seven international awards in 2008 including Best Interior Design and Best Exterior Styling at the World Superyacht Awards, and Best Motor Yacht Over 75m at the ShowBoats International Awards.</p>
<h2>The 2024 Refit</h2>
<p>A comprehensive refit in 2024 updated all technical systems, refreshed interior spaces, and ensured ALFA NERO meets the latest classification standards while preserving her original design integrity.</p>
<h2>Available Now</h2>
<p>Nearly two decades after launch, ALFA NERO's original innovations — from the infinity pool to the convertible helipad — have become standard features on new builds. She remains available for acquisition.</p>`,
    images: [
      { src: '/images/OLDER - ALFA NERO.jpg', alt: 'ALFA NERO historic photograph' },
      { src: '/images/yard2.webp', alt: 'ALFA NERO at Oceanco shipyard, 2007' },
      { src: '/images/refit-2024-drydock.webp', alt: 'ALFA NERO during 2024 refit in dry dock' },
    ],
  },
  {
    path: '/technical',
    title: 'Technical Specifications | ALFA NERO',
    description: 'ALFA NERO technical specifications: 82m LOA, 14.2m beam, 2,159 GT, twin MTU engines, 20 knots top speed, 5,500nm range. 12 guests in 6 staterooms.',
    h1: 'Technical Specifications',
    content: `<h2>Principal Dimensions</h2>
<table>
<tr><th>Length Overall</th><td>82 metres / 269 feet</td></tr>
<tr><th>Beam</th><td>14.2 metres / 46.6 feet</td></tr>
<tr><th>Draft</th><td>3.90 metres / 12.8 feet</td></tr>
<tr><th>Gross Tonnage</th><td>2,159 GT</td></tr>
<tr><th>Living Space</th><td>1,250 m² / 13,455 ft²</td></tr>
</table>
<h2>Propulsion &amp; Performance</h2>
<table>
<tr><th>Engines</th><td>2 × MTU 16V 595 TE70</td></tr>
<tr><th>Maximum Speed</th><td>20 knots</td></tr>
<tr><th>Cruising Speed</th><td>15–17 knots</td></tr>
<tr><th>Range</th><td>5,500 nautical miles at 15 knots</td></tr>
</table>
<h2>Accommodation</h2>
<table>
<tr><th>Guests</th><td>12 in 6 staterooms</td></tr>
<tr><th>Crew</th><td>Up to 28</td></tr>
<tr><th>Staterooms</th><td>1 Master, 1 VIP, 4 Guest cabins</td></tr>
</table>
<h2>Build Details</h2>
<table>
<tr><th>Builder</th><td>Oceanco, Netherlands</td></tr>
<tr><th>Hull Number</th><td>Y702</td></tr>
<tr><th>Year Built</th><td>2007</td></tr>
<tr><th>Year Refitted</th><td>2024</td></tr>
<tr><th>Exterior Designer</th><td>Nuvolari Lenard</td></tr>
<tr><th>Interior Designer</th><td>Alberto Pinto</td></tr>
<tr><th>Naval Architect</th><td>Azure Yacht Design</td></tr>
<tr><th>Classification</th><td>Lloyd's Register</td></tr>
<tr><th>Flag</th><td>Malta</td></tr>
</table>`,
    images: [
      { src: '/images/alfa-nero-technical-drawing.avif', alt: 'ALFA NERO technical side profile drawing' },
      { src: '/images/technical-deck-plans.webp', alt: 'ALFA NERO deck plans by Nuvolari Lenard' },
      { src: '/images/engine-room.webp', alt: 'ALFA NERO engine room' },
    ],
    schema: {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How long is ALFA NERO?', acceptedAnswer: { '@type': 'Answer', text: 'ALFA NERO is 82 metres (269 feet) in length overall.' } },
        { '@type': 'Question', name: 'How many guests can ALFA NERO accommodate?', acceptedAnswer: { '@type': 'Answer', text: 'ALFA NERO accommodates 12 guests in 6 staterooms, with crew quarters for up to 28.' } },
        { '@type': 'Question', name: 'What is ALFA NERO\'s top speed?', acceptedAnswer: { '@type': 'Answer', text: 'ALFA NERO has a top speed of 20 knots, with a cruising speed of 15-17 knots and a range of 5,500 nautical miles.' } },
        { '@type': 'Question', name: 'Who built ALFA NERO?', acceptedAnswer: { '@type': 'Answer', text: 'ALFA NERO was built by Oceanco in the Netherlands as hull Y702, launched in 2007.' } },
      ],
    },
  },
  {
    path: '/gallery',
    title: 'Photo Gallery | ALFA NERO',
    description: 'High-resolution photography of ALFA NERO superyacht. Exterior, interior, aerial, and lifestyle images of this 82-metre Oceanco vessel.',
    h1: 'Photo Gallery',
    content: `<p>Professional photography showcasing ALFA NERO's design excellence across exterior, interior, aerial, and lifestyle categories.</p>
<h2>Exterior Photography</h2>
<p>ALFA NERO's distinctive black hull and Nuvolari Lenard exterior design captured from every angle — profile views, stern perspectives, and evening illumination shots.</p>
<h2>Aerial Views</h2>
<p>Drone photography revealing ALFA NERO's dramatic scale and proportions at sea, including the iconic aft deck infinity pool and helipad.</p>
<h2>Interior Spaces</h2>
<p>Alberto Pinto's award-winning interiors including the main salon, formal dining room, master cabin, sky lounge, and guest staterooms featuring art by Lichtenstein, Miro, and Warhol.</p>
<h2>Wellness &amp; Outdoor</h2>
<p>The spa, gym, beach club, sundeck entertainment areas, and the pioneering infinity pool that converts to a helipad.</p>`,
    images: [
      { src: '/images/exterior-profile.webp', alt: 'ALFA NERO exterior profile' },
      { src: '/images/formal-dining-room.webp', alt: 'ALFA NERO formal dining room by Alberto Pinto' },
      { src: '/images/DJI_20250911101923_0042_D.webp', alt: 'ALFA NERO aerial drone view' },
    ],
    schema: {
      '@type': 'ImageGallery',
      name: 'ALFA NERO Photo Gallery',
      description: 'Professional photography of the 82-metre Oceanco superyacht ALFA NERO.',
      about: { '@type': 'Vehicle', name: 'ALFA NERO' },
    },
  },
  {
    path: '/exterior-designer',
    title: 'Exterior Design by Nuvolari Lenard | ALFA NERO',
    description: 'ALFA NERO exterior designed by Nuvolari Lenard. First superyacht with infinity pool to helipad conversion. Winner of Best Exterior Styling, World Superyacht Awards 2008.',
    h1: 'The Studio Behind the Silhouette',
    content: `<p>Nuvolari Lenard, the Venice-based design studio founded by Carlo Nuvolari and Dan Lenard in 1998, created ALFA NERO's exterior — their fullest expression of a design philosophy rooted in the way an owner wants to live aboard.</p>
<h2>A Studio Built on Water</h2>
<p>Operating from Venice, Nuvolari Lenard have completed over 120 superyacht projects ranging from 25 to 185 metres. Their approach begins with how the owner wants to live, then designs the yacht that enables it.</p>
<h2>ALFA NERO — The Fullest Expression</h2>
<p>For ALFA NERO, Nuvolari Lenard created the revolutionary infinity pool-to-helipad system, massive outdoor entertaining spaces, and the distinctive aggressive bow profile that defined a new direction in superyacht design.</p>
<h2>Recognition</h2>
<p>ALFA NERO won Best Exterior Styling at the World Superyacht Awards 2008 and Most Innovative Custom Motoryacht at the World Yachts Trophies 2008.</p>`,
    images: [
      { src: '/images/nuvolari-lenard-founders.webp', alt: 'Carlo Nuvolari and Dan Lenard at their Venice studio' },
      { src: '/images/exterior-profile.webp', alt: 'ALFA NERO bow profile by Nuvolari Lenard' },
      { src: '/images/aft-deck-pool.webp', alt: 'ALFA NERO infinity pool designed by Nuvolari Lenard' },
    ],
  },
  {
    path: '/interior-designer',
    title: 'Interior Design by Alberto Pinto | ALFA NERO',
    description: 'ALFA NERO interiors by Alberto Pinto. Zebrano wood panelling, Pleyel grand piano, Art Deco influences. Winner of Best Interior Design at the World Superyacht Awards 2008.',
    h1: 'The Parisian Who Understood Scale',
    content: `<p>Alberto Pinto (1943–2012) created ALFA NERO's 1,250 square metres of interior living space. Born in Casablanca to a family of Sephardic Jewish heritage, Pinto became one of the most celebrated interior designers of his generation.</p>
<h2>Design Philosophy</h2>
<p>Pinto approached ALFA NERO not as a yacht interior but as a series of residential spaces that happen to float. His interiors blend Pop Art and Art Deco influences with works by Roy Lichtenstein, Joan Miro, Takashi Murakami, Andy Warhol, Frank Stella, and Marc Chagall.</p>
<h2>Signature Elements</h2>
<p>Key features include scalloped white lacquer panels, zebrano wood panelling, a black lacquered Pleyel grand piano with white wave patterns, and a coral theme connecting the guest cabins.</p>
<h2>Recognition</h2>
<p>ALFA NERO won Best Interior Design, Motor Yacht at the World Superyacht Awards 2008.</p>`,
    images: [
      { src: '/images/alberto-pinto-portrait.jpg', alt: 'Alberto Pinto (1943-2012), interior designer' },
      { src: '/images/formal-dining-room.webp', alt: 'ALFA NERO formal dining by Alberto Pinto' },
      { src: '/images/main-salon-lounge.webp', alt: 'ALFA NERO main salon by Alberto Pinto' },
    ],
  },
  {
    path: '/oceanco',
    title: 'Oceanco Builder | ALFA NERO',
    description: 'ALFA NERO was built by Oceanco in the Netherlands as hull Y702. Dutch engineering, precision construction, and a proven track record of superyachts over 80 metres.',
    h1: 'The Dutch Who Built It',
    content: `<p>Oceanco was founded in 1987 in Alblasserdam, South Holland. The shipyard has delivered over 30 superyachts exceeding 80 metres, including Black Pearl (106m), Bravo Eugenia (109m), and Jubilee (110m).</p>
<h2>The Y702 Project</h2>
<p>ALFA NERO was built as hull Y702 in Oceanco's 700-series programme. Naval architecture by Azure Yacht Design ensured the hull could support the revolutionary infinity pool system while maintaining performance.</p>
<h2>Engineering Excellence</h2>
<p>Oceanco's 60,000+ square metre facility enables builds up to 140 metres. Their engineering enabled the spindle-driven pool floor that converts to a helipad in 90 seconds.</p>
<h2>Notable Oceanco Fleet</h2>
<ul>
<li>Black Pearl — 106m, 2018</li>
<li>Bravo Eugenia — 109m, 2018</li>
<li>Jubilee — 110m, 2017</li>
<li>ALFA NERO — 82m, 2007</li>
</ul>`,
    images: [
      { src: '/images/oceanco-engineering-wireframe.webp', alt: 'ALFA NERO engineering wireframe by Oceanco' },
      { src: '/images/alfa-nero-oceanco-pool.webp', alt: 'ALFA NERO pool built by Oceanco' },
    ],
  },
  {
    path: '/master-cabin',
    title: 'Master Cabin | ALFA NERO',
    description: 'ALFA NERO owner suite: full-beam master cabin with private terrace, his-and-hers marble bathrooms, walk-in wardrobe, and private office. Designed by Alberto Pinto.',
    h1: 'A Private Domain — The Owner\'s Suite',
    content: `<p>The master suite occupies the entire forward section of the upper deck, creating a private residence within the vessel that rivals the most exclusive shoreside retreats.</p>
<h2>Layout</h2>
<p>Full-beam across the yacht with super king-sized bed, private office with trading screens, walk-in wardrobe with dressing table, and his-and-hers marble bathrooms with cherrywood finishes.</p>
<h2>Private Terrace</h2>
<p>A dedicated outdoor terrace with private Jacuzzi accessible only from the master suite, offering complete privacy at the forward section of the yacht.</p>
<h2>Design</h2>
<p>Alberto Pinto approached the owner's suite not as a yacht cabin but as a private residence that happens to float. Glass-enclosed elevator access connects to all decks.</p>`,
    images: [
      { src: '/images/main-master-cabin.webp', alt: 'ALFA NERO master cabin with panoramic ocean views' },
      { src: '/images/Master Bathroom.jpg', alt: 'ALFA NERO master bathroom with marble finishes' },
    ],
  },
  {
    path: '/guest-accommodations',
    title: 'Guest Accommodations | ALFA NERO',
    description: 'ALFA NERO guest cabins: 6 staterooms for 12 guests including VIP suite with convertible layout, elevator access, and direct spa connection. Alberto Pinto interiors.',
    h1: 'Guest Accommodations',
    content: `<p>Six individually designed staterooms across three decks, each a private sanctuary created by Alberto Pinto. A glass-enclosed elevator connects all guest levels.</p>
<h2>Cabin Configuration</h2>
<ul>
<li>Master Suite — Upper Deck Forward, full-beam</li>
<li>VIP Suite — Main Deck, his &amp; her bathrooms</li>
<li>VIP Suite — Lower Deck, spa access &amp; sea terrace</li>
<li>Double Cabin — Lower Deck, queen bed</li>
<li>Twin Cabin — Lower Deck, convertible to double</li>
<li>Twin Cabin — Lower Deck, convertible to double</li>
</ul>
<h2>Design Details</h2>
<p>Individual colour coordination per cabin with a coral theme connecting spaces. Sea creatures on coverlets and cushions, bathroom mosaics of black slate and marble, wenge wood panelling, and curated artwork by Lichtenstein, Murakami, and Warhol.</p>`,
    images: [
      { src: '/images/guest-vip-suite.webp', alt: 'ALFA NERO VIP suite with coral accents' },
      { src: '/images/guest-room.webp', alt: 'ALFA NERO guest cabin by Alberto Pinto' },
      { src: '/images/guest-corridor-gallery.webp', alt: 'ALFA NERO art-lined guest corridor' },
    ],
  },
  {
    path: '/wellness',
    title: 'Wellness & Spa | ALFA NERO',
    description: 'ALFA NERO wellness facilities: full-beam gym with panoramic views, stone-clad sauna, steam room, beauty salon, treatment rooms, and sea-level spa terrace.',
    h1: 'Where Recovery Meets the Horizon',
    content: `<h2>Infinity Pool</h2>
<p>The pioneering 3.7m × 11.6m infinity pool features a spindle-driven floor that converts to a certified helipad in 90 seconds. Glass waterfall feature at the aft edge with variable depths.</p>
<h2>Spa &amp; Treatment</h2>
<p>Full spa with treatment menu, onboard therapist capability, stone-clad sauna on the main deck, and upper deck steam room.</p>
<h2>Fitness</h2>
<p>Air-conditioned gym with 180-degree panoramic views, professional equipment, and sundeck access.</p>
<h2>Beach Club</h2>
<p>Water-level beach club with fold-down platforms providing direct sea access for swimming, diving, and water sports.</p>
<h2>Jacuzzi Pools</h2>
<p>Multiple Jacuzzi pools on the master deck and sundeck for relaxation with ocean views.</p>`,
    images: [
      { src: '/images/Spa.webp', alt: 'ALFA NERO spa and sauna' },
      { src: '/images/sundeck-gym-jacuzzi.webp', alt: 'ALFA NERO sundeck jacuzzi' },
      { src: '/images/beach-club-terrace.webp', alt: 'ALFA NERO beach club at sea level' },
    ],
  },
  {
    path: '/deck-space',
    title: 'Outdoor Living | ALFA NERO',
    description: 'ALFA NERO outdoor spaces: infinity pool with helipad conversion, sundeck with jacuzzi, aft deck entertaining areas, and beach club at sea level.',
    h1: 'Outdoor Living',
    content: `<p>ALFA NERO's exterior spaces were conceived as outdoor rooms — extensions of the interior with the same attention to proportion, flow, and comfort. Over 1,250 square metres of living space across multiple decks.</p>
<h2>Aft Deck</h2>
<p>Full wet bar, generous banquette seating, BBQ facilities, and direct access to the infinity pool.</p>
<h2>Sundeck</h2>
<p>180-degree views with Jacuzzi pool, sun pads, and dedicated dining area. Retractable awnings for shade.</p>
<h2>Beach Club</h2>
<p>Water-level access with fold-down platforms, sun loungers, and direct tender and water toy launch.</p>
<h2>Al Fresco Dining</h2>
<p>Three separate exterior dining areas across the aft deck, sundeck, and beach club level.</p>`,
    images: [
      { src: '/images/aft-deck-pool.webp', alt: 'ALFA NERO aft deck with infinity pool' },
      { src: '/images/sundeck-entertainment.webp', alt: 'ALFA NERO sundeck entertainment area' },
      { src: '/images/beach-club-sea-terrace.webp', alt: 'ALFA NERO beach club sea terrace' },
    ],
  },
  {
    path: '/entertainment',
    title: 'Entertainment Areas | ALFA NERO',
    description: 'ALFA NERO entertainment spaces: main salon with grand piano, cinema system, retractable doors to aft deck, and media throughout.',
    h1: 'Where Memories Are Made',
    content: `<h2>Main Salon</h2>
<p>The social heart of the yacht with rich sycamore panelling, floor-to-ceiling windows, curated art pieces, and custom furnishings. An intimate venue for cocktails and conversation.</p>
<h2>Grand Piano</h2>
<p>A handcrafted instrument in the main salon — a centrepiece of ALFA NERO's entertainment offering.</p>
<h2>Sky Lounge</h2>
<p>An elevated retreat with commanding views that doubles as a screening room with curated film library.</p>
<h2>Sundeck Entertainment</h2>
<p>Open-air luxury with 360-degree views, sound system, and bar facilities for outdoor events.</p>`,
    images: [
      { src: '/images/main-salon-lounge.webp', alt: 'ALFA NERO main salon lounge' },
      { src: '/images/piano-room.webp', alt: 'Grand piano in ALFA NERO main salon' },
      { src: '/images/sky-lounge.webp', alt: 'ALFA NERO sky lounge' },
    ],
  },
  {
    path: '/dining',
    title: 'Dining | ALFA NERO',
    description: 'ALFA NERO dining: formal dining for 12, intimate private dining room, and al fresco options on the aft deck and sundeck. Professional galley.',
    h1: 'The Art of Dining',
    content: `<h2>Formal Dining Room</h2>
<p>Seats 12 guests at a custom-designed dining table with floor-to-ceiling windows, museum-quality lighting, and acoustic properties optimised for conversation.</p>
<h2>Private Dining</h2>
<p>A secluded alternative for intimate occasions, offering a more personal dining experience.</p>
<h2>Al Fresco Dining</h2>
<p>Multiple exterior dining locations on the aft deck and sundeck, with shade options and sea views.</p>
<h2>Culinary Programme</h2>
<p>Professional galley equipped to the highest standards. Mediterranean and international fine dining with personalised menus, a curated wine cellar, and premium spirits.</p>`,
    images: [
      { src: '/images/formal-dining-room.webp', alt: 'ALFA NERO formal dining room' },
      { src: '/images/private-dining.webp', alt: 'ALFA NERO private dining area' },
    ],
  },
  {
    path: '/water-toys',
    title: 'Water Toys & Garage | ALFA NERO',
    description: 'ALFA NERO water toys and tender garage. 13.5m Vanquish VQ45 chase tender, jet skis, diving equipment, and extensive water sports inventory.',
    h1: 'Adventure Awaits',
    content: `<h2>Chase Tender</h2>
<p>13.5-metre Vanquish VQ45 — a high-performance Dutch-built tender with deep-V hull accommodating all 12 guests for independent operations.</p>
<h2>Personal Watercraft</h2>
<ul>
<li>4× Yamaha WaveRunners</li>
<li>SeaBob underwater scooters</li>
</ul>
<h2>Water Sports</h2>
<ul>
<li>6× Waterskis and wakeboards</li>
<li>Stand-up paddleboards and kayaks</li>
<li>Full snorkelling and scuba diving equipment</li>
<li>Inflatable towables, banana boats</li>
<li>Jellyfish-protected sea pool</li>
</ul>
<h2>Tender Garage</h2>
<p>Purpose-built stern storage with platform lowering to water level and direct beach club access.</p>`,
    images: [
      { src: '/images/toys-tenders-deck.webp', alt: 'ALFA NERO water toys on tender deck' },
      { src: '/images/beach-club-sea-terrace.webp', alt: 'ALFA NERO beach club with water access' },
    ],
  },
  {
    path: '/crew-spaces',
    title: 'Crew Spaces | ALFA NERO',
    description: 'ALFA NERO crew quarters for 28 crew members. Captain cabin, officer quarters, professional galley, crew mess, and dedicated service areas.',
    h1: 'Crew Spaces — The Operational Heart',
    content: `<p>Accommodation and operational spaces for up to 28 crew members, designed for efficient service delivery and crew wellbeing.</p>
<h2>Crew Accommodation</h2>
<ul>
<li>Captain's Cabin — Bridge deck with ensuite and office</li>
<li>Officer Cabins — Individual with ensuite (Chief Engineer, First Officer, Chief Stewardess)</li>
<li>Crew Cabins — Twin-berth with shared facilities</li>
<li>Crew Mess — Dedicated dining and lounge area</li>
</ul>
<h2>Operational Spaces</h2>
<ul>
<li>Professional galley with commercial-grade appliances</li>
<li>Extensive cold storage for extended voyages</li>
<li>Industrial-scale laundry facilities</li>
<li>Engine room with twin MTU engines and monitoring systems</li>
<li>Temperature-controlled wine cellar</li>
</ul>`,
    images: [
      { src: '/images/CREW Area.webp', alt: 'ALFA NERO crew spaces' },
      { src: '/images/galley.webp', alt: 'ALFA NERO professional galley' },
      { src: '/images/engine-room.webp', alt: 'ALFA NERO engine room' },
    ],
  },
  {
    path: '/full-tour',
    title: 'Full Video Tour | ALFA NERO',
    description: 'Take a complete video tour of ALFA NERO, the 82-metre Oceanco superyacht. Explore every deck, cabin, and living space in this exclusive walkthrough.',
    h1: 'Full Video Tour',
    content: `<p>Experience the full tour of this iconic 82-metre Oceanco superyacht. From the revolutionary infinity pool to the exquisite Alberto Pinto interiors, discover why ALFA NERO remains one of the most celebrated vessels ever built.</p>
<h2>Highlights</h2>
<ul>
<li>82 metres length overall</li>
<li>12 guests in 6 staterooms</li>
<li>Comprehensive 2024 refit</li>
<li>Award-winning Nuvolari Lenard exterior</li>
<li>Alberto Pinto interior design</li>
</ul>`,
    images: [
      { src: '/images/DJI_20250911101923_0042_D.webp', alt: 'ALFA NERO aerial view' },
    ],
    schema: {
      '@type': 'VideoObject',
      name: 'ALFA NERO Full Video Tour',
      description: 'Complete video tour of the 82-metre Oceanco superyacht ALFA NERO.',
      thumbnailUrl: 'https://alfaneroyacht.com/images/DJI_20250911101923_0042_D.webp',
      uploadDate: '2025-09-11',
      embedUrl: 'https://www.youtube.com/embed/eXXwZUQ4et0',
    },
  },
  {
    path: '/broker',
    title: 'Broker Information | ALFA NERO',
    description: 'Broker details and acquisition information for ALFA NERO, an 82-metre Oceanco superyacht. Contact information for viewing arrangements and sale enquiries.',
    h1: 'Available for Acquisition',
    content: `<p>ALFA NERO represents a rare opportunity to acquire one of the most recognised superyachts in the world. Built by Oceanco in 2007 and comprehensively refitted in 2024.</p>
<h2>Vessel Overview</h2>
<ul>
<li>82 metres length overall</li>
<li>12 guests across 6 staterooms (plus staff suite)</li>
<li>Crew of 28</li>
<li>Pioneering infinity pool-to-helipad conversion</li>
<li>Seven international design awards</li>
<li>Distinctive black hull</li>
<li>Comprehensive 2024 refit</li>
</ul>
<h2>Design Heritage</h2>
<p>Exterior by Nuvolari Lenard. Interiors by Alberto Pinto. Built by Oceanco in the Netherlands.</p>
<h2>Services</h2>
<p>Flag state registration and compliance, crew recruitment and management, operational budgeting, refit planning, charter management opportunities, and insurance and legal considerations.</p>`,
    images: [
      { src: '/images/exterior-profile.webp', alt: 'ALFA NERO superyacht profile' },
    ],
  },
  {
    path: '/brochure',
    title: 'Digital Brochure | ALFA NERO',
    description: 'Download the ALFA NERO digital brochure. Comprehensive overview of this 82-metre Oceanco superyacht including specifications, design, accommodations, and amenities.',
    h1: 'ALFA NERO — Digital Brochure',
    content: `<p>ALFA NERO is a multi-award-winning 82-metre superyacht built by Oceanco and originally commissioned by Greek shipping magnate Theodore Angelopoulos. She was the first superyacht to feature a convertible infinity pool-to-helipad system.</p>
<h2>Specifications at a Glance</h2>
<ul>
<li>Length: 82m / 269ft</li>
<li>Beam: 14.2m</li>
<li>Builder: Oceanco</li>
<li>Year: 2007, Refitted 2024</li>
<li>Guests: 12 / Crew: 28</li>
</ul>
<h2>Seven International Awards</h2>
<ul>
<li>Best Interior Design — World Superyacht Awards 2008</li>
<li>Best Exterior Styling — World Superyacht Awards 2008</li>
<li>Best Motor Yacht Over 75m — ShowBoats International 2008</li>
<li>Most Innovative Custom Motoryacht — World Yachts Trophies 2008</li>
</ul>`,
    images: [
      { src: '/images/exterior-profile.webp', alt: 'ALFA NERO superyacht' },
      { src: '/images/main-master-cabin.webp', alt: 'ALFA NERO master cabin' },
    ],
  },
  {
    path: '/exterior',
    title: 'Exterior Design by Nuvolari Lenard | ALFA NERO',
    description: 'ALFA NERO exterior designed by Nuvolari Lenard. First superyacht with infinity pool to helipad conversion. Winner of Best Exterior Styling, World Superyacht Awards 2008.',
    h1: 'Exterior Design by Nuvolari Lenard',
    redirectsTo: '/exterior-designer',
  },
  {
    path: '/interior',
    title: 'Interior Design by Alberto Pinto | ALFA NERO',
    description: 'ALFA NERO interiors by Alberto Pinto. Winner of Best Interior Design at the World Superyacht Awards 2008.',
    h1: 'Interior Design by Alberto Pinto',
    redirectsTo: '/interior-designer',
  },
];

function generatePreRenderedHTML(page) {
  if (page.redirectsTo) {
    return `<article id="seo-content" style="position:absolute;left:-9999px;top:-9999px"><h1>${page.h1}</h1><p>This page has moved to <a href="${page.redirectsTo}">${page.redirectsTo}</a>.</p></article>`;
  }

  let html = `<article id="seo-content" style="position:absolute;left:-9999px;top:-9999px">`;
  html += `<h1>${page.h1}</h1>`;
  html += page.content;

  // Add images with alt text
  if (page.images && page.images.length > 0) {
    for (const img of page.images) {
      html += `<img src="${img.src}" alt="${img.alt}" width="800" height="450" loading="lazy" />`;
    }
  }

  html += `</article>`;
  return html;
}

function generateSchemaLD(page) {
  if (!page.schema) return '';
  const schema = {
    '@context': 'https://schema.org',
    ...page.schema,
  };
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

function generatePage(template, page) {
  let html = template;
  const url = page.isHome ? BASE_URL + '/' : `${BASE_URL}${page.path}`;

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${page.title}</title>`
  );

  // Replace meta title
  html = html.replace(
    /<meta name="title" content=".*?" \/>/,
    `<meta name="title" content="${page.title}" />`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${page.description}" />`
  );

  // Replace canonical URL
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${url}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${page.description}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta property="twitter:url" content=".*?" \/>/,
    `<meta property="twitter:url" content="${url}" />`
  );
  html = html.replace(
    /<meta property="twitter:title" content=".*?" \/>/,
    `<meta property="twitter:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta property="twitter:description" content=".*?" \/>/,
    `<meta property="twitter:description" content="${page.description}" />`
  );

  // Inject pre-rendered content before closing </body>
  const preRendered = generatePreRenderedHTML(page);
  const schemaLD = generateSchemaLD(page);
  html = html.replace('</body>', `${preRendered}\n${schemaLD}\n</body>`);

  return html;
}

// Main
const templatePath = join(DIST_DIR, 'index.html');
if (!existsSync(templatePath)) {
  console.error('Error: dist/public/index.html not found. Run build first.');
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf-8');
let count = 0;

for (const page of pages) {
  if (page.isHome) {
    // Inject content into the main index.html directly
    const homePath = join(DIST_DIR, 'index.html');
    writeFileSync(homePath, generatePage(template, page), 'utf-8');
    count++;
    continue;
  }

  const dirPath = join(DIST_DIR, page.path);
  const filePath = join(dirPath, 'index.html');

  mkdirSync(dirPath, { recursive: true });
  writeFileSync(filePath, generatePage(template, page), 'utf-8');
  count++;
}

console.log(`Generated ${count} static HTML pages with pre-rendered content for SEO/GEO.`);
