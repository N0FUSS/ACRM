import Link from "next/link";
import { businessConfig } from "@/lib/business-config";

const services = [
  { label: "House Moving", href: "/services/house-moving" },
  { label: "Furniture Moving", href: "/services/furniture-moving" },
  { label: "Long Distance Moving", href: "/services/long-distance" },
  { label: "Packing & Materials", href: "/services/packing" },
];

const serviceAreas = [
  { label: "Cromwell", href: "/service-areas/cromwell" },
  { label: "Queenstown", href: "/service-areas/queenstown" },
  { label: "Wanaka", href: "/service-areas/wanaka" },
  { label: "Alexandra", href: "/service-areas/alexandra" },
  { label: "Central Otago", href: "/service-areas/central-otago" },
  { label: "Christchurch", href: "/service-areas/christchurch" },
  { label: "Dunedin", href: "/service-areas/dunedin" },
  { label: "Invercargill", href: "/service-areas/invercargill" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-xl font-semibold text-[var(--text-primary)]">
                Central Lakes Removals
              </span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
              Premium owner-led moving services based in Cromwell, serving Central Otago and wider South Island routes.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-[var(--brass-primary)]" />
              <span className="text-xs text-[var(--text-muted)]">
                Personally led by Russell Brown
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h2 className="font-heading text-lg font-medium text-[var(--text-primary)] mb-4">
              Services
            </h2>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--brass-warm)] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h2 className="font-heading text-lg font-medium text-[var(--text-primary)] mb-4">
              Service Areas
            </h2>
            <ul className="space-y-3">
              {serviceAreas.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--brass-warm)] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h2 className="font-heading text-lg font-medium text-[var(--text-primary)] mb-4">
              Contact
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${businessConfig.phoneTel}`}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--brass-warm)] transition-colors duration-200"
                >
                  {businessConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--brass-warm)] transition-colors duration-200"
                >
                  {businessConfig.email}
                </a>
              </li>
              <li>
                <span className="text-sm text-[var(--text-muted)]">
                  Based in Cromwell
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact#quote"
                className="btn-primary text-sm"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border-subtle)]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[var(--text-muted)]">
              © {new Date().getFullYear()} Central Lakes Removals. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
