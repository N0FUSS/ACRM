import { Metadata } from "next";
import Link from "next/link";
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";

const serviceAreas = {
  cromwell: {
    name: "Cromwell",
    slug: "cromwell",
    region: "Central Otago",
    description: "Central Lakes Removals is based in Cromwell, providing professional moving services throughout Central Otago and the wider South Island. As your local Cromwell movers, Russell Brown plans and leads every move for households and businesses in the Cromwell basin and surrounding areas.",
    routes: [
      "Cromwell to Queenstown",
      "Cromwell to Wanaka",
      "Cromwell to Alexandra",
      "Cromwell to Christchurch",
      "Cromwell to Dunedin",
      "Cromwell to Invercargill",
      "Cromwell to Clyde",
      "Cromwell to Arrowtown"
    ],
    services: [
      "House Moving",
      "Furniture Moving",
      "Long Distance Moving",
      "Packing Services",
      "Local Moves",
      "Commercial Moving"
    ],
    localContext: "Being based in Cromwell means we know the local area intimately - from the Cromwell basin to the surrounding hills, we understand the access points, weather patterns, and logistics unique to moving in this region."
  },
  queenstown: {
    name: "Queenstown",
    slug: "queenstown",
    region: "Central Otago",
    description: "Central Lakes Removals provides professional moving services involving Queenstown. Based in Cromwell, we regularly support moves to, from, and around the Queenstown area. Every Queenstown move is led by Russell Brown — the same judgement, standards, and direct accountability as moves from our Cromwell base.",
    routes: [
      "Queenstown to Cromwell",
      "Queenstown to Wanaka",
      "Queenstown to Christchurch",
      "Queenstown to Arrowtown",
      "Queenstown to Frankton",
      "Queenstown to Glenorchy"
    ],
    services: [
      "House Moving",
      "Furniture Moving",
      "Long Distance Moving",
      "Packing Services",
      "Mountain Property Moves"
    ],
    localContext: "Queenstown moves require careful planning due to the terrain, weather, and access considerations. Russell's experience with Central Otago roads and conditions ensures your move is handled appropriately."
  },
  wanaka: {
    name: "Wanaka",
    slug: "wanaka",
    region: "Otago",
    description: "Central Lakes Removals provides professional moving services involving Wanaka. Regular routes between Wanaka and Cromwell, Queenstown, and other South Island destinations are handled with the same standards and accountability. Russell Brown leads all moves directly, applying the same judgement regardless of location.",
    routes: [
      "Wanaka to Cromwell",
      "Wanaka to Queenstown",
      "Wanaka to Christchurch",
      "Wanaka to Alexandra",
      "Wanaka to Hawea"
    ],
    services: [
      "House Moving",
      "Furniture Moving",
      "Long Distance Moving",
      "Packing Services",
      "Seasonal Moves"
    ],
    localContext: "Wanaka's growing popularity means more people are moving to and from this beautiful area. We understand the unique considerations for moving in the Wanaka region, from lake-front properties to mountain homes."
  },
  alexandra: {
    name: "Alexandra",
    slug: "alexandra",
    region: "Central Otago",
    description: "Central Lakes Removals provides professional moving services involving Alexandra and the wider Alexandra basin. Regular routes between Alexandra and Cromwell, Queenstown, and other South Island destinations are handled with Russell Brown's direct leadership and practical experience.",
    routes: [
      "Alexandra to Cromwell",
      "Alexandra to Queenstown",
      "Alexandra to Clyde",
      "Alexandra to Ranfurly",
      "Alexandra to Alexandra Airport"
    ],
    services: [
      "House Moving",
      "Furniture Moving",
      "Long Distance Moving",
      "Packing Services"
    ],
    localContext: "Alexandra's central location in the Otago region makes it a common route for long-distance moves. Russell's familiarity with the area ensures efficient routing and careful handling of your belongings."
  },
  "central-otago": {
    name: "Central Otago",
    slug: "central-otago",
    region: "Otago",
    description: "Central Lakes Removals is based in Cromwell and provides professional moving services across Central Otago. From local moves around Cromwell, Alexandra, Clyde, and Bannockburn to wider South Island routes, every move is carefully planned and personally led by Russell Brown.",
    routes: [
      "Central Otago to Cromwell",
      "Central Otago to Alexandra",
      "Central Otago to Clyde",
      "Central Otago to Queenstown",
      "Central Otago to Wanaka",
      "Central Otago to Christchurch",
      "Central Otago to Dunedin",
      "Central Otago to Invercargill"
    ],
    services: [
      "House Moving",
      "Furniture Moving",
      "Long Distance Moving",
      "Packing Services",
      "Local Moves",
      "Commercial Moving"
    ],
    localContext: "Central Otago moves often involve rural access, changing weather, lake and hill roads, and careful timing between smaller towns. Russell plans those details directly so the right crew, route, and handling approach are set before move day."
  },
  christchurch: {
    name: "Christchurch",
    slug: "christchurch",
    region: "Canterbury",
    description: "Central Lakes Removals provides long-distance moving services involving Christchurch. Regular routes between Christchurch and Central Otago are a core part of our service offering. Every long-distance move is personally led by Russell Brown with careful planning and professional execution.",
    routes: [
      "Christchurch to Cromwell",
      "Christchurch to Queenstown",
      "Christchurch to Wanaka",
      "Christchurch to Alexandra",
      "Christchurch to Dunedin"
    ],
    services: [
      "Long Distance Moving",
      "House Moving",
      "Furniture Moving",
      "Packing Services",
      "Inter-island Support"
    ],
    localContext: "Long-distance moves to Christchurch require careful logistics planning. Russell coordinates these moves personally to ensure your belongings arrive safely and on time."
  },
  dunedin: {
    name: "Dunedin",
    slug: "dunedin",
    region: "Otago",
    description: "Central Lakes Removals provides long-distance moving services involving Dunedin. Regular routes between Dunedin and Central Otago destinations are handled with the same owner-led approach. Russell Brown personally oversees all long-distance moves to ensure consistent quality.",
    routes: [
      "Dunedin to Cromwell",
      "Dunedin to Queenstown",
      "Dunedin to Wanaka",
      "Dunedin to Alexandra",
      "Dunedin to Oamaru"
    ],
    services: [
      "Long Distance Moving",
      "House Moving",
      "Furniture Moving",
      "Packing Services"
    ],
    localContext: "Dunedin moves often involve students, families, and professionals relocating to or from the Otago region. We understand the unique considerations for each type of move."
  },
  invercargill: {
    name: "Invercargill",
    slug: "invercargill",
    region: "Southland",
    description: "Central Lakes Removals provides long-distance moving services involving Invercargill and Southland. These longer routes are handled with careful planning and professional execution. Russell Brown personally leads all long-distance moves to ensure your belongings are handled with care over the extended journey.",
    routes: [
      "Invercargill to Cromwell",
      "Invercargill to Queenstown",
      "Invercargill to Dunedin",
      "Invercargill to Gore",
      "Invercargill to Bluff"
    ],
    services: [
      "Long Distance Moving",
      "House Moving",
      "Furniture Moving",
      "Packing Services"
    ],
    localContext: "Long-distance moves to Southland require additional planning and logistics. Russell coordinates these extended routes personally to ensure your move is handled with the same care as local moves."
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = serviceAreas[slug as keyof typeof serviceAreas];
  
  if (!location) {
    return {
      title: "Service Area Not Found",
    };
  }

  return {
    title: `${location.name} Movers | Central Lakes Removals`,
    description: `Professional moving services in ${location.name}, ${location.region}. ${location.description.slice(0, 140)}`,
    openGraph: {
      title: `${location.name} Movers | Central Lakes Removals`,
      description: `Professional moving services in ${location.name}. Led by Russell Brown — 12,000+ relocations. Based in Cromwell, Central Otago.`,
    },
    alternates: {
      canonical: `https://centrallakesremovals.co.nz/service-areas/${location.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(serviceAreas).map((slug) => ({
    slug,
  }));
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const location = serviceAreas[slug as keyof typeof serviceAreas];
  
  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading mb-4">Service Area Not Found</h1>
          <p className="text-[var(--text-secondary)] mb-6">
            The service area you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/service-areas" className="btn-primary">
            View All Service Areas
          </Link>
        </div>
      </div>
    );
  }

  return <ServiceAreaTemplate location={location} />;
}
