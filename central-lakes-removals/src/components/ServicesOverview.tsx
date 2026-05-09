import Link from "next/link";

const services = [
  {
    title: "House Moving",
    description: "Carefully planned household moves for people who want their furniture, belongings, and property treated with respect.",
    href: "/services/house-moving",
  },
  {
    title: "Furniture Moving",
    description: "Skilled handling for valuable, heavy, awkward, fragile, or difficult furniture that needs more than rough transport.",
    href: "/services/furniture-moving",
  },
  {
    title: "Long Distance Moving",
    description: "Reliable long distance moving across Central Otago, Queenstown, Wanaka, Christchurch, Dunedin, Invercargill, and wider South Island routes.",
    href: "/services/long-distance",
  },
  {
    title: "Packing & Materials",
    description: "Packing support and proper moving materials for customers who want added protection, better organisation, and less pressure before move day.",
    href: "/services/packing",
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)]">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="eyebrow mb-4 block animate-on-scroll">
            Moving Services
          </span>
          <h2 className="animate-on-scroll stagger-1">
            Moving services planned with care and led with experience.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mt-4 animate-on-scroll stagger-2">
            Whether you are moving a full household, a few important items, or relocating across the South Island, Central Lakes Removals provides careful, practical moving support with experienced on site leadership.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="card group animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-medium text-[var(--text-primary)] group-hover:text-[var(--brass-warm)] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {service.description}
                </p>
                <div className="pt-4">
                  <span className="text-link inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-on-scroll">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}