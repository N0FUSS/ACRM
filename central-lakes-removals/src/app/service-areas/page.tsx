import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Service Areas | Central Lakes Removals",
  description:
    "Central Lakes Removals is based in Cromwell and provides moving services across Central Otago and the wider South Island including Queenstown, Wanaka, Christchurch, Dunedin, and Invercargill.",
  openGraph: {
    title: "Service Areas | Central Lakes Removals",
    description:
      "Based in Cromwell, serving Central Otago and the South Island. Queenstown, Wanaka, Alexandra, Christchurch, Dunedin, Invercargill.",
  },
};

const serviceAreas = [
  {
    name: "Cromwell",
    slug: "cromwell",
    region: "Central Otago",
    tagline: "Our base in the heart of Central Otago"
  },
  {
    name: "Queenstown",
    slug: "queenstown",
    region: "Central Otago",
    tagline: "Regular routes to the adventure capital"
  },
  {
    name: "Wanaka",
    slug: "wanaka",
    region: "Otago",
    tagline: "Serving the Wanaka region and surrounds"
  },
  {
    name: "Alexandra",
    slug: "alexandra",
    region: "Central Otago",
    tagline: "Regular routes through the Alexandra basin"
  },
  {
    name: "Central Otago",
    slug: "central-otago",
    region: "Otago",
    tagline: "Owner-led moves across the wider Central Otago area"
  },
  {
    name: "Christchurch",
    slug: "christchurch",
    region: "Canterbury",
    tagline: "Long-distance moves to and from Christchurch"
  },
  {
    name: "Dunedin",
    slug: "dunedin",
    region: "Otago",
    tagline: "Regular service to and from Dunedin"
  },
  {
    name: "Invercargill",
    slug: "invercargill",
    region: "Southland",
    tagline: "Extended routes serving Southland"
  }
];

export default function ServiceAreasPage() {
  return (
    <main id="main-content" className="flex-1">
      <Header />
        
        {/* Hero */}
        <section className="relative flex min-h-[calc(100svh-5rem)] items-center py-10 sm:min-h-0 sm:block sm:pt-24 sm:pb-14 lg:pt-40 lg:pb-28">
          <div className="container">
            <div className="max-w-3xl">
              <span className="eyebrow mb-4 hidden animate-on-scroll sm:block">
                Service Areas
              </span>
              <h1 className="critical-heading">
                Moving areas.
              </h1>
              <p className="critical-copy hidden text-base sm:block sm:text-xl text-[var(--text-secondary)] mt-5 lg:mt-6 animate-on-scroll stagger-2">
                Based in Cromwell, serving Central Otago and wider South Island routes including Queenstown, Wanaka, Alexandra, Christchurch, Dunedin, and Invercargill.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((area, index) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group p-6 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg hover:bg-[var(--bg-elevated)] hover:border-[var(--brass-muted)] transition-all duration-300 animate-on-scroll"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-heading text-[var(--text-primary)] group-hover:text-[var(--brass-warm)] transition-colors duration-200">
                        {area.name}
                      </h2>
                      <span className="text-xs text-[var(--text-muted)] uppercase">
                        {area.region}
                      </span>
                    </div>
                    <svg
                      className="w-6 h-6 text-[var(--text-muted)] group-hover:text-[var(--brass-primary)] transition-colors duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {area.tagline}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[var(--border-subtle)]">
                    <span className="text-sm text-[var(--brass-primary)] group-hover:text-[var(--brass-warm)] transition-colors duration-200">
                      View {area.name} movers →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Statement */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-heading mb-6 animate-on-scroll">
                Based in Cromwell. Serving the South Island.
              </h2>
              <p className="text-lg text-[var(--text-secondary)] animate-on-scroll stagger-1">
                Every move, regardless of destination, is personally led by Russell Brown. This means you get the same level of care, communication, and accountability whether you are moving across town or across the South Island.
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
