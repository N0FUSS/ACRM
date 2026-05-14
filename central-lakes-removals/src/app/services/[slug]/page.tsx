import { Metadata } from "next";
import Link from "next/link";
import ServiceTemplate from "@/components/ServiceTemplate";

const services = {
  "house-moving": {
    name: "House Moving",
    slug: "house-moving",
    tagline: "Carefully planned household moves for people who want their furniture, belongings, and property treated with respect.",
    description: "House moving is about more than just transporting furniture from one address to another. It's about handling someone's home—their memories, their investments, and their everyday life. Central Lakes Removals approaches every house move with the care and attention it deserves. Russell Brown personally assesses each move, plans the approach, and leads the work on site — making the decisions that protect your property and keep the day on track. Whether you are moving across town or across the region, Russell's judgement and standards are applied directly.",
    whatIncluded: [
      "Pre-move consultation and planning",
      "Full household inventory assessment",
      "Professional packing of fragile items",
      "Careful loading and unloading",
      "Furniture protection and placement",
      "Clear communication throughout",
      "Russell Brown's direct leadership and decision-making"
    ],
    whatAffectsPrice: [
      "Distance between properties",
      "Number of rooms and items",
      "Access considerations (stairs, lifts, narrow driveways)",
      "Preferred moving date",
      "Packing services required",
      "Special handling needs"
    ],
    commonSituations: [
      "Moving to a new family home",
      "Downsizing to a smaller property",
      "Relocating for work",
      "Moving to or from rural properties",
      "Moving with children and pets",
      "Estate moves"
    ],
    processSteps: [
      { title: "Initial Consultation", description: "Tell us about your move and Russell will assess the requirements." },
      { title: "Planning", description: "We identify access points, timing, and any special considerations." },
      { title: "Move Day", description: "Russell leads the team with careful loading and transport." },
      { title: "Placement", description: "Furniture and belongings are placed where you want them." }
    ]
  },
  "furniture-moving": {
    name: "Furniture Moving",
    slug: "furniture-moving",
    tagline: "Skilled handling for valuable, heavy, awkward, fragile, or difficult furniture that needs more than rough transport.",
    description: "Some furniture pieces require more than just lifting and loading. Antique wardrobes, grand pianos, spa pools, oversized sofas, and fragile antiques all need experienced handling. Central Lakes Removals has the equipment, technique, and judgement to move difficult furniture safely. Russell Brown assesses each piece before the move to plan the best approach, ensuring your valuable items are protected throughout the process.",
    whatIncluded: [
      "Pre-move assessment of each piece",
      "Custom protection for fragile items",
      "Specialist equipment (dollies, straps, blankets)",
      "Disassembly and reassembly where needed",
      "Careful navigation of tight spaces",
      "Heavy lifting with proper technique",
      "Direct Russell Brown involvement"
    ],
    whatAffectsPrice: [
      "Size and weight of pieces",
      "Fragility and value",
      "Access complexity",
      "Disassembly requirements",
      "Special equipment needs",
      "Distance of transport"
    ],
    commonSituations: [
      "Moving a piano or organ",
      "Large antique furniture",
      "Spa pool relocation",
      "Artwork and mirrors",
      "Modular furniture systems",
      "Heavy gym equipment"
    ],
    processSteps: [
      { title: "Assessment", description: "Russell assesses each piece and plans the approach." },
      { title: "Preparation", description: "Special protection and equipment is prepared." },
      { title: "Careful Transport", description: "Items are moved with specialist technique." },
      { title: "Placement", description: "Furniture is placed and reassembled as needed." }
    ]
  },
  "long-distance": {
    name: "Long Distance Moving",
    slug: "long-distance",
    tagline: "Reliable long distance moving across Central Otago, Queenstown, Wanaka, Christchurch, Dunedin, Invercargill, and wider South Island routes.",
    description: "Long distance moves require additional planning and logistics. Routes between Central Otago and Christchurch, Dunedin, or Invercargill are handled regularly by Central Lakes Removals. Russell applies the same judgement and standards regardless of distance — assessing, planning, and leading the job from first load to final placement. The same owner-led approach applies regardless of distance—your move is led by the person whose name is on the business.",
    whatIncluded: [
      "Detailed route planning",
      "Secure loading and containment",
      "Regular check-ins during transit",
      "Coordinated timing with settlements",
      "Direct Russell Brown leadership",
      "One dedicated team throughout",
      "Accountability from start to finish"
    ],
    whatAffectsPrice: [
      "Total distance of the move",
      "Size of load and vehicle required",
      "Timing coordination with settlements",
      "Accommodation needs for crew",
      "Multiple drop-offs or pickups",
      "Seasonal demand variations"
    ],
    commonSituations: [
      "Moving from Queenstown to Christchurch",
      "Relocating to Dunedin for work",
      "Moving to Invercargill from Cromwell",
      "Cross-regional family relocations",
      "University moves to Otago",
      "Retirement relocations south"
    ],
    processSteps: [
      { title: "Route Planning", description: "Russell plans the logistics for the extended route." },
      { title: "Secure Loading", description: "Items are carefully loaded and secured." },
      { title: "Transit", description: "The team travels with your belongings." },
      { title: "Delivery", description: "Safe arrival and careful placement at destination." }
    ]
  },
  "packing": {
    name: "Packing Services",
    slug: "packing",
    tagline: "Packing support and proper moving materials for customers who want added protection, better organisation, and less pressure before move day.",
    description: "Proper packing is the foundation of a successful move. Central Lakes Removals provides packing services and quality moving materials to ensure your belongings are protected from the moment they're packed to when they're placed in your new home. Russell can advise on what needs special attention, and the team can handle the packing or provide you with the right materials to do it yourself. Either way, your move starts with the right preparation.",
    whatIncluded: [
      "Professional packing service",
      "Quality moving boxes and materials",
      "Specialist wrapping for fragile items",
      "Wardrobe boxes for clothes",
      "Kitchen and bathroom packing",
      "Labelling and inventory system",
      "Unpacking service available"
    ],
    whatAffectsPrice: [
      "Number of rooms to pack",
      "Fragility of items",
      "Quality of materials requested",
      "Partial vs full packing service",
      "Unpacking service required",
      "Time sensitivity"
    ],
    commonSituations: [
      "Pre-move packing before settlement",
      "Packing fragile kitchen items",
      "Professional wrapping of artwork",
      "Partial packing (just difficult items)",
      "Materials only for self-packing",
      "Post-move unpacking assistance"
    ],
    processSteps: [
      { title: "Consultation", description: "We assess what needs packing and how." },
      { title: "Materials", description: "Quality boxes and wrapping are provided." },
      { title: "Packing", description: "Careful, systematic packing begins." },
      { title: "Labelling", description: "Everything is clearly marked for easy unpacking." }
    ]
  },
  "office-commercial-relocations": {
    name: "Office and Commercial Relocations",
    slug: "office-commercial-relocations",
    tagline: "Professional office moving and commercial asset relocation with minimal disruption to business operations.",
    description: "Relocating a business demands tight coordination, minimal downtime, and secure handling of assets and sensitive items. Central Lakes Removals understands the logistical demands of moving commercial spaces, retail inventory, and office environments. Russell Brown plans every phase with your operational schedule in mind, ensuring a smooth transition so your team can return to work as quickly as possible.",
    whatIncluded: [
      "Pre-relocation timeline planning",
      "Systematic furniture and asset tagging",
      "Specialized equipment handling",
      "Sequential packing and loading",
      "Coordination with building managers",
      "Placement at destination layout",
      "Direct oversight by Russell Brown"
    ],
    whatAffectsPrice: [
      "Size of commercial premises",
      "Volume of specialized equipment",
      "Building access timings and protocols",
      "Required sequence of arrival",
      "Off-hours or weekend scheduling",
      "Packing assistance required"
    ],
    commonSituations: [
      "Office relocations and fit-outs",
      "Retail inventory and store transfers",
      "Asset distribution to storage",
      "Internal departmental rearrangements",
      "Downsizing commercial space",
      "New business set-ups"
    ],
    processSteps: [
      { title: "Site Audit", description: "Assessment of access routes and item volume." },
      { title: "Logistical Plan", description: "Setting clear timelines to minimize downtime." },
      { title: "Controlled Move", description: "Coordinated and orderly transport of assets." },
      { title: "Layout Execution", description: "Precise placement as per the floorplan." }
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} | Central Lakes Removals`,
    description: service.tagline,
    openGraph: {
      title: `${service.name} | Central Lakes Removals`,
      description: service.tagline,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading mb-4">Service Not Found</h1>
          <p className="text-[var(--text-secondary)] mb-6">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  return <ServiceTemplate service={service} />;
}
