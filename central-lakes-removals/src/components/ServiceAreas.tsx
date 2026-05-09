import Link from "next/link";

const locations = [
  { label: "Cromwell", href: "/service-areas/cromwell" },
  { label: "Queenstown", href: "/service-areas/queenstown" },
  { label: "Wanaka", href: "/service-areas/wanaka" },
  { label: "Alexandra", href: "/service-areas/alexandra" },
  { label: "Central Otago", href: "/service-areas/central-otago" },
  { label: "Christchurch", href: "/service-areas/christchurch" },
  { label: "Dunedin", href: "/service-areas/dunedin" },
  { label: "Invercargill", href: "/service-areas/invercargill" },
];

export default function ServiceAreas() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)]">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="eyebrow mb-4 block animate-on-scroll">
            Service Areas
          </span>
          <h2 className="animate-on-scroll stagger-1">
            Moving across Central Otago and the Lower South Island.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mt-4 animate-on-scroll stagger-2">
            Central Lakes Removals is based in Cromwell and provides moving services across Central Otago and wider South Island routes. We regularly support moves involving Cromwell, Queenstown, Wanaka, Alexandra, Christchurch, Dunedin, Invercargill, and surrounding areas.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {locations.map((location, index) => (
            <Link
              key={location.href}
              href={location.href}
              className="group p-6 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg hover:bg-[var(--bg-elevated)] hover:border-[var(--brass-muted)] transition-all duration-300 animate-on-scroll"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg text-[var(--text-primary)] group-hover:text-[var(--brass-warm)] transition-colors duration-200">
                  {location.label}
                </span>
                <svg
                  className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--brass-primary)] transition-colors duration-200"
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
            </Link>
          ))}
        </div>

        {/* Trust Line */}
        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] text-center animate-on-scroll">
          <p className="text-sm text-[var(--text-muted)]">
            Based in Cromwell. Serving Central Otago and wider South Island routes.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center animate-on-scroll">
          <Link href="/service-areas" className="btn-secondary">
            See All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
}