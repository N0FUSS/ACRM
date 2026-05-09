import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Moving Services | Central Lakes Removals",
  description: "Professional moving services including house moving, furniture moving, long distance moving, and packing services. All moves personally led by Russell Brown.",
};

const services = [
  {
    name: "House Moving",
    slug: "house-moving",
    tagline: "Carefully planned household moves",
    description: "Carefully planned household moves for people who want their furniture, belongings, and property treated with respect."
  },
  {
    name: "Furniture Moving",
    slug: "furniture-moving",
    tagline: "Skilled handling for valuable pieces",
    description: "Skilled handling for valuable, heavy, awkward, fragile, or difficult furniture that needs more than rough transport."
  },
  {
    name: "Long Distance Moving",
    slug: "long-distance",
    tagline: "Reliable moves across the South Island",
    description: "Reliable long distance moving across Central Otago, Queenstown, Wanaka, Christchurch, Dunedin, Invercargill, and wider South Island routes."
  },
  {
    name: "Packing Services",
    slug: "packing",
    tagline: "Professional packing support and materials",
    description: "Packing support and proper moving materials for customers who want added protection, better organisation, and less pressure before move day."
  }
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <Header />
        
        {/* Hero */}
        <section className="relative flex min-h-[calc(100svh-5rem)] items-center py-10 sm:min-h-0 sm:block sm:pt-24 sm:pb-14 lg:pt-40 lg:pb-28">
          <div className="container">
            <div className="max-w-3xl">
              <span className="eyebrow mb-4 hidden animate-on-scroll sm:block">
                Moving Services
              </span>
              <h1 className="critical-heading">
                Moving services.
              </h1>
              <p className="critical-copy hidden text-base sm:block sm:text-xl text-[var(--text-secondary)] mt-5 lg:mt-6 animate-on-scroll stagger-2">
                Whether you are moving a full household, a few important items, or relocating across the South Island, Central Lakes Removals provides careful, practical moving support with experienced on site leadership.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group p-8 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg hover:bg-[var(--bg-elevated)] hover:border-[var(--brass-muted)] transition-all duration-300 animate-on-scroll"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading text-[var(--text-primary)] group-hover:text-[var(--brass-warm)] transition-colors duration-200">
                      {service.name}
                    </h2>
                    <p className="text-sm text-[var(--brass-primary)]">
                      {service.tagline}
                    </p>
                    <p className="hidden text-[var(--text-secondary)] sm:block">
                      {service.description}
                    </p>
                    <div className="pt-4">
                      <span className="text-sm text-[var(--brass-primary)] group-hover:text-[var(--brass-warm)] transition-colors duration-200">
                        Learn more →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Owner Led Section */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-heading mb-6 animate-on-scroll">
                Every Move Personally Led by Russell Brown
              </h2>
              <p className="text-lg text-[var(--text-secondary)] animate-on-scroll stagger-1">
                With Central Lakes Removals, your move is not handed off to a faceless crew. Russell Brown personally leads the work, plans the details, manages the team, and stays accountable for the result.
              </p>
              <div className="mt-8 animate-on-scroll stagger-2">
                <Link href="/contact#quote" className="btn-primary">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

      <Footer />
    </main>
  );
}
