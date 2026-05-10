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
    founder: {
      "@id": `${siteUrl}/#russell-brown`,
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
      "House moving",
      "Furniture moving",
      "Long distance moving",
      "Packing services",
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
  };
}
