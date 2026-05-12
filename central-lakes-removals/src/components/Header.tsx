import Link from "next/link";
import { businessConfig } from "@/lib/business-config";
import MobileNav from "./MobileNav";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Reviews", href: "/reviews" },
  { label: "About Russell", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] transition-colors duration-300">
      <div className="container">
        <div className="flex min-h-20 items-center justify-between gap-4 lg:min-h-24">
          <Link href="/" className="flex min-h-11 items-center gap-3">
            <span className="flex flex-col">
              <span className="font-heading text-xl font-semibold text-[var(--text-primary)] lg:text-2xl">
                Central Lakes Removals
              </span>
              <span className="eyebrow hidden text-xs sm:block">
                Owner Led Moving
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${businessConfig.phoneTel}`}
              className="btn-secondary text-sm px-4 py-2 min-h-0"
            >
              📞 {businessConfig.phoneDisplay}
            </a>
            <Link href="/#quote" className="btn-primary text-sm px-4 py-2 min-h-0">
              Request a Quote
            </Link>
          </div>

          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
