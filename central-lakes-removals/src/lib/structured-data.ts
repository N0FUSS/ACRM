import { businessConfig } from "./business-config";
import { cache } from "react";

const siteUrl = businessConfig.siteUrl;

const businessAddress = {
  "@type": "PostalAddress",
  addressLocality: businessConfig.baseLocation.locality,
  addressRegion: businessConfig.baseLocation.region,
  addressCountry: businessConfig.baseLocation.country,
};

const serviceArea = businessConfig.serviceAreas;

export function createLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#local-business`,
    name: businessConfig.businessName,
    url: siteUrl,
    telephone: businessConfig.phoneTel,
    email: businessConfig.email,
    description:
      "Moving services built around Russell Brown's judgement, standards, care, and accountability. Based in Cromwell, serving Central Otago and wider South Island routes.",
    address: businessAddress,
    areaServed: serviceArea,
    founder: {
      "@id": `${siteUrl}/#russell-brown`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessConfig.verifiedClaims.googleRating,
      reviewCount: businessConfig.verifiedClaims.googleReviewCount,
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function createMovingCompanyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${siteUrl}/#moving-company`,
    name: businessConfig.businessName,
    url: siteUrl,
    telephone: businessConfig.phoneTel,
    email: businessConfig.email,
    address: businessAddress,
    areaServed: serviceArea,
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "House Moving",
          description: "Full household moves planned around access, timing, furniture protection, loading order, and the details that determine a move's outcome.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Furniture Moving",
          description: "Skilled handling for valuable, heavy, awkward, or fragile furniture that requires more than rough transport.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Long Distance Moving",
          description: "Regional and intercity moving across Central Otago, Queenstown, Wanaka, Christchurch, Dunedin, Invercargill, and wider South Island routes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Packing and Materials",
          description: "Packing support and proper moving materials for better protection, better organisation, and less pressure before move day.",
        },
      },
    ],
  };
}

export function createPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#russell-brown`,
    name: businessConfig.ownerName,
    jobTitle: "Owner and Lead Moving Specialist",
    description: "Russell Brown has personally led more than 12,000 relocations across Central Otago and wider South Island routes. He assesses, plans, and leads every move on site — applying direct judgement and taking personal accountability for the outcome.",
    worksFor: {
      "@id": `${siteUrl}/#moving-company`,
    },
    knowsAbout: [
      "House moving",
      "Furniture moving",
      "Long distance moving",
      "Moving logistics",
      "Load planning",
      "Furniture protection",
      "Access assessment",
      "Move day coordination",
    ],
  };
}

export function createWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: businessConfig.businessName,
    description: "Moving services built around Russell Brown's judgement and standards. Based in Cromwell, serving Central Otago and wider South Island routes.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Fetches live review data from the Google Places API.
 * Falls back to business-config values if env vars are missing or request fails.
 * Wrapped with React.cache so multiple server components share one request per render.
 */
export const getReviewData = cache(async (): Promise<{
  rating: string;
  reviewCount: number;
}> => {
  const fallback = {
    rating: businessConfig.verifiedClaims.googleRating,
    reviewCount: businessConfig.verifiedClaims.googleReviewCount,
  };

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return fallback;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`,
      // Time-based revalidation: refresh once every 24 hours
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return fallback;

    const data = await res.json();
    if (data.status !== "OK" || !data.result) return fallback;

    return {
      rating: String(data.result.rating ?? fallback.rating),
      reviewCount: data.result.user_ratings_total ?? fallback.reviewCount,
    };
  } catch {
    return fallback;
  }
});
