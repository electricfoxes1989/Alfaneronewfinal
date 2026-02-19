import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  preloadImage?: string; // Hero image to preload for LCP optimization
}

/**
 * SEOHead Component
 * Updates document head with page-specific meta tags for better SEO.
 * Primary meta tags (title, description, OG, Twitter) are set in index.html
 * for the homepage. This component overrides them for subpages via JS.
 */
export default function SEOHead({ 
  title, 
  description, 
  image = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.webp',
  url = '',
  type = 'website',
  preloadImage
}: SEOHeadProps) {
  useEffect(() => {
    // Add preload hint for hero image (LCP optimization)
    let preloadLink: HTMLLinkElement | null = null;
    if (preloadImage) {
      preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = preloadImage;
      preloadLink.setAttribute('fetchpriority', 'high');
      document.head.appendChild(preloadLink);
    }
    
    // Update document title
    document.title = `${title} | ALFA NERO`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && url) {
      canonical.setAttribute('href', url);
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogType = document.querySelector('meta[property="og:type"]');
    
    if (ogTitle) ogTitle.setAttribute('content', `${title} | ALFA NERO`);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogImage) ogImage.setAttribute('content', image);
    if (ogUrl && url) ogUrl.setAttribute('content', url);
    if (ogType) ogType.setAttribute('content', type);
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    
    if (twitterTitle) twitterTitle.setAttribute('content', `${title} | ALFA NERO`);
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    if (twitterImage) twitterImage.setAttribute('content', image);
    
    // Cleanup - restore defaults on unmount
    return () => {
      document.title = 'ALFA NERO | 82m Oceanco Superyacht For Sale';
      if (canonical) canonical.setAttribute('href', 'https://alfaneroyacht.com/');
      if (preloadLink) {
        document.head.removeChild(preloadLink);
      }
    };
  }, [title, description, image, url, type, preloadImage]);
  
  return null;
}

/**
 * Page-specific SEO configurations
 * Each page has a unique, keyword-rich meta description (150-160 chars)
 */
export const SEO_CONFIG = {
  home: {
    title: 'ALFA NERO | 82m Oceanco Superyacht For Sale',
    description: 'ALFA NERO is an 82-metre Oceanco superyacht for sale. Award-winning design by Nuvolari Lenard, interiors by Alberto Pinto, infinity pool. Built 2007, refitted 2024.'
  },
  history: {
    title: 'History & Provenance',
    description: 'The story of ALFA NERO: commissioned 2002, launched 2007 by Oceanco as hull Y702. Winner of multiple World Superyacht Awards. Comprehensively refitted in 2024.'
  },
  technical: {
    title: 'Technical Specifications',
    description: 'ALFA NERO technical specifications: 82m LOA, 14.2m beam, 2,159 GT, twin MTU 20V 4000 M91 engines, 20 knots top speed, 5,500nm range. 12 guests in 6 staterooms.'
  },
  interior: {
    title: 'Interior Design by Alberto Pinto',
    description: 'ALFA NERO interiors by Alberto Pinto. Zebrano wood panelling, Pleyel grand piano, Art Deco influences. Winner of Best Interior Design at the World Superyacht Awards 2008.'
  },
  exterior: {
    title: 'Exterior Design by Nuvolari Lenard',
    description: 'ALFA NERO exterior designed by Nuvolari Lenard. First superyacht with infinity pool to helipad conversion. Winner of Best Exterior Styling, World Superyacht Awards 2008.'
  },
  oceanco: {
    title: 'Oceanco Builder',
    description: 'ALFA NERO was built by Oceanco in the Netherlands as hull Y702 in the 700-series programme. Dutch engineering, precision construction, and a proven track record.'
  },
  gallery: {
    title: 'Photo Gallery',
    description: 'High-resolution photography of ALFA NERO superyacht. Exterior, interior, aerial, and lifestyle images of this 82-metre Oceanco vessel.'
  },

  masterCabin: {
    title: 'Master Cabin',
    description: 'ALFA NERO owner suite: full-beam master cabin with private terrace, his-and-hers marble bathrooms, walk-in wardrobe, and private office. Designed by Alberto Pinto.'
  },
  guestAccommodations: {
    title: 'Guest Accommodations',
    description: 'ALFA NERO guest cabins: 6 staterooms for 12 guests including VIP suite with convertible layout, elevator access, and direct spa connection. Alberto Pinto interiors.'
  },
  crewSpaces: {
    title: 'Crew Spaces',
    description: 'ALFA NERO crew quarters for 28 crew members. Captain cabin, officer quarters, professional galley, crew mess, and dedicated service areas.'
  },
  entertainment: {
    title: 'Entertainment Areas',
    description: 'ALFA NERO entertainment spaces: main salon with Pleyel grand piano, cinema system, retractable doors to aft deck, and Kaleidescape media throughout.'
  },
  dining: {
    title: 'Dining',
    description: 'ALFA NERO dining: formal dining for 12, intimate four-seat private dining room, and al fresco options on the aft deck and sundeck. Professional galley.'
  },
  wellness: {
    title: 'Wellness & Spa',
    description: 'ALFA NERO wellness facilities: full-beam gym with panoramic views, stone-clad sauna, steam room, beauty salon, treatment rooms, and sea-level spa terrace.'
  },
  deckSpace: {
    title: 'Outdoor Living',
    description: 'ALFA NERO outdoor spaces: infinity pool with helipad conversion, sundeck with jacuzzi, aft deck entertaining areas, and beach club at sea level.'
  },
  waterToys: {
    title: 'Water Toys & Garage',
    description: 'ALFA NERO water toys and tender garage. Comprehensive inventory including tenders, jet skis, diving equipment, and water sports gear stored in dedicated garage.'
  }
};
