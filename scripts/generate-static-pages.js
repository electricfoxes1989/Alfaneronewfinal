/**
 * Post-build script to generate static HTML pages for each route
 * This ensures Google sees unique meta tags per page (critical for SPA SEO)
 *
 * Each page gets its own index.html with:
 * - Unique <title>
 * - Unique <meta description>
 * - Correct <link rel="canonical">
 * - Correct OG/Twitter meta tags
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist', 'public');
const BASE_URL = 'https://alfaneroyacht.com';

// Page-specific SEO data
const pages = [
  {
    path: '/history',
    title: 'History & Provenance | ALFA NERO',
    description: 'The story of ALFA NERO: commissioned 2002, launched 2007 by Oceanco as hull Y702. Winner of multiple World Superyacht Awards. Comprehensively refitted in 2024.',
  },
  {
    path: '/technical',
    title: 'Technical Specifications | ALFA NERO',
    description: 'ALFA NERO technical specifications: 82m LOA, 14.2m beam, 2,159 GT, twin MTU 20V 4000 M91 engines, 20 knots top speed, 5,500nm range. 12 guests in 6 staterooms.',
  },
  {
    path: '/gallery',
    title: 'Photo Gallery | ALFA NERO',
    description: 'High-resolution photography of ALFA NERO superyacht. Exterior, interior, aerial, and lifestyle images of this 82-metre Oceanco vessel.',
  },
  {
    path: '/exterior-designer',
    title: 'Exterior Design by Nuvolari Lenard | ALFA NERO',
    description: 'ALFA NERO exterior designed by Nuvolari Lenard. First superyacht with infinity pool to helipad conversion. Winner of Best Exterior Styling, World Superyacht Awards 2008.',
  },
  {
    path: '/interior-designer',
    title: 'Interior Design by Alberto Pinto | ALFA NERO',
    description: 'ALFA NERO interiors by Alberto Pinto. Zebrano wood panelling, Pleyel grand piano, Art Deco influences. Winner of Best Interior Design at the World Superyacht Awards 2008.',
  },
  {
    path: '/oceanco',
    title: 'Oceanco Builder | ALFA NERO',
    description: 'ALFA NERO was built by Oceanco in the Netherlands as hull Y702 in the 700-series programme. Dutch engineering, precision construction, and a proven track record.',
  },
  {
    path: '/master-cabin',
    title: 'Master Cabin | ALFA NERO',
    description: 'ALFA NERO owner suite: full-beam master cabin with private terrace, his-and-hers marble bathrooms, walk-in wardrobe, and private office. Designed by Alberto Pinto.',
  },
  {
    path: '/guest-accommodations',
    title: 'Guest Accommodations | ALFA NERO',
    description: 'ALFA NERO guest cabins: 6 staterooms for 12 guests including VIP suite with convertible layout, elevator access, and direct spa connection. Alberto Pinto interiors.',
  },
  {
    path: '/wellness',
    title: 'Wellness & Spa | ALFA NERO',
    description: 'ALFA NERO wellness facilities: full-beam gym with panoramic views, stone-clad sauna, steam room, beauty salon, treatment rooms, and sea-level spa terrace.',
  },
  {
    path: '/deck-space',
    title: 'Outdoor Living | ALFA NERO',
    description: 'ALFA NERO outdoor spaces: infinity pool with helipad conversion, sundeck with jacuzzi, aft deck entertaining areas, and beach club at sea level.',
  },
  {
    path: '/entertainment',
    title: 'Entertainment Areas | ALFA NERO',
    description: 'ALFA NERO entertainment spaces: main salon with Pleyel grand piano, cinema system, retractable doors to aft deck, and Kaleidescape media throughout.',
  },
  {
    path: '/dining',
    title: 'Dining | ALFA NERO',
    description: 'ALFA NERO dining: formal dining for 12, intimate four-seat private dining room, and al fresco options on the aft deck and sundeck. Professional galley.',
  },
  {
    path: '/water-toys',
    title: 'Water Toys & Garage | ALFA NERO',
    description: 'ALFA NERO water toys and tender garage. Comprehensive inventory including tenders, jet skis, diving equipment, and water sports gear stored in dedicated garage.',
  },
  {
    path: '/crew-spaces',
    title: 'Crew Spaces | ALFA NERO',
    description: 'ALFA NERO crew quarters for 28 crew members. Captain cabin, officer quarters, professional galley, crew mess, and dedicated service areas.',
  },
  {
    path: '/full-tour',
    title: 'Full Video Tour | ALFA NERO',
    description: 'Take a complete video tour of ALFA NERO, the 82-metre Oceanco superyacht. Explore every deck, cabin, and living space in this exclusive walkthrough.',
  },
  {
    path: '/broker',
    title: 'Broker Information | ALFA NERO',
    description: 'Broker details and acquisition information for ALFA NERO, an 82-metre Oceanco superyacht. Contact information for viewing arrangements and sale enquiries.',
  },
  {
    path: '/brochure',
    title: 'Digital Brochure | ALFA NERO',
    description: 'Download the ALFA NERO digital brochure. Comprehensive overview of this 82-metre Oceanco superyacht including specifications, design, accommodations, and amenities.',
  },
  {
    path: '/exterior',
    title: 'Exterior Design by Nuvolari Lenard | ALFA NERO',
    description: 'ALFA NERO exterior designed by Nuvolari Lenard. First superyacht with infinity pool to helipad conversion. Winner of Best Exterior Styling, World Superyacht Awards 2008.',
  },
  {
    path: '/interior',
    title: 'Interior Design by Alberto Pinto | ALFA NERO',
    description: 'ALFA NERO interiors by Alberto Pinto. Zebrano wood panelling, Pleyel grand piano, Art Deco influences. Winner of Best Interior Design at the World Superyacht Awards 2008.',
  },
];

function generatePage(template, page) {
  let html = template;
  const url = `${BASE_URL}${page.path}`;

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
  const dirPath = join(DIST_DIR, page.path);
  const filePath = join(dirPath, 'index.html');

  mkdirSync(dirPath, { recursive: true });
  writeFileSync(filePath, generatePage(template, page), 'utf-8');
  count++;
}

console.log(`Generated ${count} static HTML pages for SEO.`);
