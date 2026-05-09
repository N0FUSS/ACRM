const siteUrl = "https://centrallakesremovals.co.nz";

const businessAddress = {
  "@type": "PostalAddress",
  addressLocality: "Cromwell",
  addressRegion: "Otago",
  addressCountry: "NZ",
};

const serviceArea = [
  "Cromwell",
  "Central Otago",
  "Queenstown",
  "Wanaka",
  "Alexandra",
  "Christchurch",
  "Dunedin",
  "Invercargill",
  "Lower South Island",
];

export function createLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#local-business`,
    name: "Central Lakes Removals",
    url: siteUrl,
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
    name: "Central Lakes Removals",
    url: siteUrl,
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
    name: "Russell Brown",
    jobTitle: "Owner and Operator",
    worksFor: {
      "@id": `${siteUrl}/#moving-company`,
    },
  };
}
