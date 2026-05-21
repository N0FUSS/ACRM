import Link from "next/link";
import { businessConfig } from "@/lib/business-config";
import { createBreadcrumbJsonLd, createServiceJsonLd } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";

interface ServiceTemplateProps {
  service: {
    name: string;
    slug: string;
    tagline: string;
    description: string;
    whatIncluded: string[];
    whatAffectsPrice?: string[];
    commonSituations?: string[];
    processSteps?: { title: string; description: string }[];
  };
}

export default function ServiceTemplate({ service }: ServiceTemplateProps) {
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "Home", url: "https://centrallakesremovals.co.nz" },
    { name: "Services", url: "https://centrallakesremovals.co.nz/services" },
    { name: service.name, url: `https://centrallakesremovals.co.nz/services/${service.slug}` },
  ]);
  const serviceJsonLd = createServiceJsonLd({
    name: service.name,
    slug: service.slug,
    description: service.tagline,
  });

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, serviceJsonLd]) }}
      />
      <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-14 lg:pt-40 lg:pb-28">
          <div className="container">
            <div className="max-w-3xl">
              <span className="eyebrow mb-4 block animate-on-scroll">
                Moving Services
              </span>
              <h1 className="critical-heading animate-on-scroll stagger-1">
                {service.name}
              </h1>
              <div className="landing-typewriter critical-heading animate-on-scroll stagger-1">
                <span>We are your...</span>
                <TypewriterText />
              </div>
              <p className="critical-copy text-base sm:text-xl text-[var(--text-secondary)] mt-5 lg:mt-6 animate-on-scroll stagger-2">
                {service.tagline}
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
                    About {service.name}
                  </h2>
                  <div className="space-y-4 text-[var(--text-secondary)]">
                    <p>{service.description}</p>
                  </div>
                </div>

                {/* What's Included */}
                <div className="animate-on-scroll">
                  <h2 className="text-2xl lg:text-3xl font-heading mb-6">
                    What&apos;s Included
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.whatIncluded.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg"
                      >
                        <div className="w-5 h-5 rounded-full bg-[var(--brass-glow)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-[var(--brass-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[var(--text-secondary)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What Affects Price */}
                {service.whatAffectsPrice && service.whatAffectsPrice.length > 0 && (
                  <div className="animate-on-scroll">
                    <h2 className="text-2xl lg:text-3xl font-heading mb-6">
                      What Affects Your Quote
                    </h2>
                    <div className="space-y-3">
                      {service.whatAffectsPrice.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg"
                        >
                          <div className="w-2 h-2 rounded-full bg-[var(--brass-primary)] mt-2" />
                          <span className="text-[var(--text-secondary)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Common Situations */}
                {service.commonSituations && service.commonSituations.length > 0 && (
                  <div className="animate-on-scroll">
                    <h2 className="text-2xl lg:text-3xl font-heading mb-6">
                      Common Situations We Handle
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.commonSituations.map((item, index) => (
                        <div
                          key={index}
                          className="p-4 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg"
                        >
                          <span className="text-[var(--text-secondary)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Process */}
                {service.processSteps && service.processSteps.length > 0 && (
                  <div className="animate-on-scroll">
                    <h2 className="text-2xl lg:text-3xl font-heading mb-6">
                      Our Process
                    </h2>
                    <div className="space-y-4">
                      {service.processSteps.map((step, index) => (
                        <div
                          key={index}
                          className="flex gap-4 p-4 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--brass-primary)] flex items-center justify-center">
                            <span className="text-lg font-heading font-semibold text-[var(--bg-primary)]">
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-medium text-[var(--text-primary)] mb-1">
                              {step.title}
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)]">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
                        Russell Brown&apos;s judgement on every move
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
                    Get a Quote for Your Move
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
                  <a href={`tel:${businessConfig.mobileTel}`} className="btn-secondary">
                    Call {businessConfig.ownerName.split(" ")[0]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="section-padding">
          <div className="container">
            <h2 className="text-2xl lg:text-3xl font-heading mb-8 text-center animate-on-scroll">
              Other Moving Services
            </h2>
            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
              {[
                { name: "House Moving", slug: "house-moving" },
                { name: "Furniture Moving", slug: "furniture-moving" },
                { name: "Long Distance", slug: "long-distance" },
                { name: "Packing Services", slug: "packing" },
                { name: "Office & Commercial", slug: "office-commercial-relocations" },
              ].filter(s => s.slug !== service.slug).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-full text-sm text-[var(--text-secondary)] hover:border-[var(--brass-muted)] hover:text-[var(--text-primary)] transition-all duration-200"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

      <Footer />
    </main>
  );
}
