/**
 * Schema.org Structured Data for ALFA NERO Yacht
 * Implements Product schema with luxury yacht specific properties
 * Helps Google display rich snippets in search results
 */

import { useEffect } from 'react';

export default function YachtSchema() {
  useEffect(() => {
    // Create schema.org structured data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "ALFA NERO",
      "description": "82-metre Oceanco superyacht built in 2007 and comprehensively refitted in 2024. Designed by Nuvolari Lenard with interior by Alberto Pinto. Features the world's first superyacht infinity pool, accommodates 12 guests in 6 staterooms, and includes comprehensive water toys collection.",
      "brand": {
        "@type": "Brand",
        "name": "Oceanco"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Oceanco",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Netherlands"
        }
      },
      "category": "Luxury Superyacht",
      "image": [
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/kZTRjDHOrESFtISr.jpg",
        "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591/AA_0536.jpg"
      ],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/UsedCondition",
        "priceCurrency": "USD",
        "price": "0",
        "priceValidUntil": "2027-12-31",
        "url": "https://alfaneroyacht.com"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Length Overall",
          "value": "82 metres / 269 feet"
        },
        {
          "@type": "PropertyValue",
          "name": "Beam",
          "value": "14.2 metres / 46.6 feet"
        },
        {
          "@type": "PropertyValue",
          "name": "Gross Tonnage",
          "value": "2,159 GT"
        },
        {
          "@type": "PropertyValue",
          "name": "Year Built",
          "value": "2007"
        },
        {
          "@type": "PropertyValue",
          "name": "Refit Year",
          "value": "2024"
        },
        {
          "@type": "PropertyValue",
          "name": "Guest Capacity",
          "value": "12 guests in 6 staterooms"
        },
        {
          "@type": "PropertyValue",
          "name": "Crew Capacity",
          "value": "Up to 28 crew"
        },
        {
          "@type": "PropertyValue",
          "name": "Maximum Speed",
          "value": "20 knots"
        },
        {
          "@type": "PropertyValue",
          "name": "Cruising Speed",
          "value": "15-17 knots"
        },
        {
          "@type": "PropertyValue",
          "name": "Range",
          "value": "5,500 nautical miles at 15 knots"
        },
        {
          "@type": "PropertyValue",
          "name": "Exterior Designer",
          "value": "Nuvolari Lenard"
        },
        {
          "@type": "PropertyValue",
          "name": "Interior Designer",
          "value": "Alberto Pinto"
        },
        {
          "@type": "PropertyValue",
          "name": "Hull Material",
          "value": "Steel"
        },
        {
          "@type": "PropertyValue",
          "name": "Superstructure",
          "value": "Aluminium"
        },
        {
          "@type": "PropertyValue",
          "name": "Flag",
          "value": "Malta"
        }
      ],
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "World Superyacht Awards"
        },
        "reviewBody": "Winner of Best Interior Design and Best Exterior Styling at the World Superyacht Awards 2008. ALFA NERO represents exceptional achievement in luxury yacht design and engineering."
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "1",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // Insert schema into document head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
}
