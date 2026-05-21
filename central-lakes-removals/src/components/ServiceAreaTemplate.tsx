import Link from "next/link";
import { businessConfig } from "@/lib/business-config";
import { createBreadcrumbJsonLd } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";

interface ServiceAreaTemplateProps {
  location: {
    name: string;
    slug: string;
    region: string;
    description: string;
    routes?: string[];
    services?: string[];
    localContext?: string;
  };
}

export default function ServiceAreaTemplate({ location }: ServiceAreaTemplateProps) {
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", url: "https://centrallakesremovals.co.nz" },
    { name: "Service Areas", url: "https://centrallakesremovals.co.nz/service-areas" },
    { name: location.name, url: `https://centrallakesremovals.co.nz/service-areas/${location.slug}` },
  ]);

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-14 lg:pt-40 lg:pb-28">
          <div className="container">
            <div className="max-w-3xl">
              <span className="eyebrow mb-4 block animate-on-scroll">
                Service Area
              </span>
              <h1 className="critical-heading animate-on-scroll stagger-1">
                {location.name} Movers
              </h1>
              <div
                className="landing-typewriter critical-heading animate-on-scroll stagger-1"
                style={{
                  display: "grid",
                  gap: "0.08em",
                  marginTop: "1.25rem",
                  maxWidth: "11ch",
                  fontSize: "clamp(2rem, 8vw, 4.2rem)",
                  textTransform: "none",
                }}
              >
                <span>We are your</span>
                <TypewriterText />
              </div>
              <p className="critical-copy text-base sm:text-xl text-[var(--text-secondary)] mt-5 lg:mt-6 animate-on-scroll stagger-2">
                {location.description}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Main Content - 7 cols */}
              <div className="lg:col-span-7 space-y-12">
                {/* About Section */}
                <div className="animate-on-scroll">
                  <h2 className="text-2xl lg:text-3xl font-heading mb-6">
                    Moving Services in {location.name}
                  </h2>
                  <div className="space-y-4 text-[var(--text-secondary)]">
                    <p>
                      Central Lakes Removals is based in Cromwell and provides professional moving services involving {location.name}. Every move is personally led by Russell Brown, ensuring you receive the same level of care and accountability whether you are moving within {location.name}, from {location.name}, or to {location.name}.
                    </p>
                    <p>
                      {location.localContext || `As a service area for Central Lakes Removals, ${location.name} moves receive the same careful planning, professional execution, and personal attention as moves originating from our Cromwell base.`}
                    </p>
                  </div>
                </div>

                {/* Services Offered */}
                <div className="animate-on-scroll">
                  <h2 className="text-2xl lg:text-3xl font-heading mb-6">
                    Services Available to {location.name}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {(location.services || [
                      "House Moving",
                      "Furniture Moving", 
                      "Long Distance Moving",
                      "Packing Services"
                    ]).map((service) => (
                      <div
                        key={service}
                        className="p-4 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg"
                      >
                        <h3 className="font-medium text-[var(--text-primary)] mb-2">
                          {service}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)]">
                          Assessed and led by Russell Brown
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Routes */}
                <div className="animate-on-scroll">
                  <h2 className="text-2xl lg:text-3xl font-heading mb-6">
                    Common Routes
                  </h2>
                  <div className="space-y-3">
                    {(location.routes || [
                      `${location.name} to Cromwell`,
                      `${location.name} to Queenstown`,
                      `${location.name} to Christchurch`,
                      `${location.name} to Dunedin`,
                      `${location.name} to Wanaka`
                    ]).map((route) => (
                      <div
                        key={route}
                        className="flex items-center gap-3 p-3 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-[var(--brass-primary)]" />
                        <span className="text-[var(--text-secondary)]">{route}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar - 5 cols */}
              <div className="lg:col-span-5 space-y-8">
                {/* Trust Card */}
                <div className="bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg p-6 animate-on-scroll">
                  <h3 className="font-heading text-xl mb-4">
                    Why Choose Central Lakes Removals?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--brass-glow)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[var(--brass-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--text-secondary)]">
                        Owner-led moving with Russell Brown
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--brass-glow)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[var(--brass-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--text-secondary)]">
                        12,000+ successful relocations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--brass-glow)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[var(--brass-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--text-secondary)]">
                        5.0 Google rating
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--brass-glow)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[var(--brass-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--text-secondary)]">
                        One dedicated team
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[var(--brass-glow)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[var(--brass-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--text-secondary)]">
                        Direct accountability
                      </span>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-[var(--bg-card)] border border-[var(--brass-muted)] rounded-lg p-6 animate-on-scroll">
                  <h3 className="font-heading text-xl mb-4">
                    Get a Quote for Your {location.name} Move
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">
                    Tell us about your move and Russell will provide a detailed, accurate quote.
                  </p>
                  <Link href="/contact#quote" className="btn-primary w-full text-center">
                    Request a Quote
                  </Link>
                  <div className="mt-4 pt-4 border-t border-[var(--border-subtle)]">
                    <p className="text-xs text-[var(--text-muted)] text-center">
                      No pressure. No generic estimate.
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="text-center animate-on-scroll">
                  <p className="text-sm text-[var(--text-muted)] mb-3">
                    Prefer to talk directly?
                  </p>
                  <a href={`tel:${businessConfig.phoneTel}`} className="btn-secondary">
                    Call {businessConfig.ownerName.split(" ")[0]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Service Areas */}
        <section className="section-padding">
          <div className="container">
            <h2 className="text-2xl lg:text-3xl font-heading mb-8 text-center animate-on-scroll">
              Other Service Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
              {[
                { name: "Cromwell", slug: "cromwell" },
                { name: "Queenstown", slug: "queenstown" },
                { name: "Wanaka", slug: "wanaka" },
                { name: "Alexandra", slug: "alexandra" },
                { name: "Central Otago", slug: "central-otago" },
                { name: "Christchurch", slug: "christchurch" },
                { name: "Dunedin", slug: "dunedin" },
                { name: "Invercargill", slug: "invercargill" },
              ].filter(area => area.slug !== location.slug).map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-full text-sm text-[var(--text-secondary)] hover:border-[var(--brass-muted)] hover:text-[var(--text-primary)] transition-all duration-200"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

      <Footer />
    </main>
  );
}
