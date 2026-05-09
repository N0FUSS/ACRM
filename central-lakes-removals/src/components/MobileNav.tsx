import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

export default function MobileNav({ navItems }: { navItems: NavItem[] }) {
  return (
    <details className="group lg:hidden">
      <summary
        className="mobile-nav-summary flex min-h-11 min-w-11 cursor-pointer flex-col items-center justify-center gap-1.5"
        aria-label="Open menu"
      >
        <span className="block h-0.5 w-6 bg-[var(--text-primary)] transition-transform duration-200 group-open:translate-y-2 group-open:rotate-45" />
        <span className="block h-0.5 w-6 bg-[var(--text-primary)] transition-opacity duration-200 group-open:opacity-0" />
        <span className="block h-0.5 w-6 bg-[var(--text-primary)] transition-transform duration-200 group-open:-translate-y-2 group-open:-rotate-45" />
      </summary>

      <div
        className="fixed inset-x-0 top-20 z-[120] border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-2xl"
        id="mobile-navigation"
      >
        <nav className="container flex flex-col gap-1 py-6" aria-label="Mobile">
          <div className="mb-2 flex flex-col gap-3 border-b border-[var(--border-subtle)] pb-6">
            <Link href="/contact#quote" className="btn-primary text-center">
              Request a Quote
            </Link>
            <a href="tel:+6421XXXXXX" className="btn-secondary text-center">
              Call Russell
            </a>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center py-2 text-lg font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </details>
  );
}
