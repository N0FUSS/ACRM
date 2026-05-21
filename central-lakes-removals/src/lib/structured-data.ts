import { businessConfig } from "./business-config";

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
      "Owner-led moving services based in Cromwell, serving Central Otago and wider South Island routes.",
    address: businessAddress,
    areaServed: serviceArea,
    priceRange: "$$",
    founder: {
      "@id": `${siteUrl}/#russell-brown`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    image: `${siteUrl}/images/generated/russell-portrait.webp`,
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
    priceRange: "$$",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "House Moving",
          url: `${siteUrl}/services/house-moving`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Furniture Moving",
          url: `${siteUrl}/services/furniture-moving`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Long Distance Moving",
          url: `${siteUrl}/services/long-distance`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Packing Services",
          url: `${siteUrl}/services/packing`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Office & Commercial Relocations",
          url: `${siteUrl}/services/office-commercial-relocations`,
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
    jobTitle: "Owner and Operator",
    worksFor: {
      "@id": `${siteUrl}/#moving-company`,
    },
    image: `${siteUrl}/images/generated/russell-portrait.webp`,
  };
}

export function createBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createServiceJsonLd(service: {
  name: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${siteUrl}/services/${service.slug}`,
    provider: {
      "@id": `${siteUrl}/#moving-company`,
    },
    areaServed: serviceArea,
  };
}

export function createFAQJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
