import { Metadata } from "next";
import { businessConfig } from "@/lib/business-config";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FinalQuoteSection from "@/components/FinalQuoteSection";

export const metadata: Metadata = {
  title: "Contact & Get a Quote | Central Lakes Removals",
  description:
    "Get in touch with Russell Brown to discuss your move. Request a detailed quote or call directly. Based in Cromwell, serving Central Otago and the South Island.",
  openGraph: {
    title: "Contact & Get a Quote | Central Lakes Removals",
    description:
      "Request a quote or call Russell Brown directly. Owner-led moving based in Cromwell.",
  },
};

const contactMethods = [
  {
    label: "Free Call",
    value: businessConfig.phoneDisplay,
    href: `tel:${businessConfig.phoneTel}`,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: "Mobile",
    value: businessConfig.mobileDisplay,
    href: `tel:${businessConfig.mobileTel}`,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: businessConfig.email,
    href: `mailto:${businessConfig.email}`,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-14 lg:pt-40 lg:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow mb-4 block animate-on-scroll">
              Contact
            </span>
            <h1 className="critical-heading animate-on-scroll stagger-1">
              Get in touch with Russell.
            </h1>
            <p className="critical-copy text-base sm:text-xl text-[var(--text-secondary)] mt-5 lg:mt-6 animate-on-scroll stagger-2">
              Whether you&apos;re ready for a quote or just want to talk
              through your move, Russell is available to help directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-12 lg:pb-16">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 max-w-3xl">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="flex items-center gap-4 p-5 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg hover:border-[var(--brass-muted)] transition-all duration-200 animate-on-scroll"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--brass-glow)] flex items-center justify-center flex-shrink-0 text-[var(--brass-primary)]">
                  {method.icon}
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                    {method.label}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <div id="quote">
        <FinalQuoteSection />
      </div>

      {/* Location / Trust */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-2xl lg:text-3xl font-heading mb-6">
                Based in Cromwell, Central Otago
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  Central Lakes Removals operates from Cromwell, in the heart of
                  Central Otago. From here, Russell Brown personally plans and
                  leads moves across the region and wider South Island.
                </p>
                <p>
                  Regular routes include Queenstown, Wanaka, Alexandra,
                  Christchurch, Dunedin, and Invercargill. Every move receives
                  the same level of care and direct accountability, regardless
                  of distance.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/service-areas"
                  className="text-sm text-[var(--brass-primary)] hover:text-[var(--brass-warm)] transition-colors"
                >
                  View all service areas →
                </Link>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg space-y-6">
                <h3 className="font-heading text-xl">What Happens Next</h3>
                <ol className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "You get in touch",
                      desc: "Fill out the form above or call Russell directly.",
                    },
                    {
                      step: "2",
                      title: "Russell reviews your move",
                      desc: "He'll assess the details and come back with questions if needed.",
                    },
                    {
                      step: "3",
                      title: "You get a detailed quote",
                      desc: "A proper quote based on the specifics of your move — not a generic estimate.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--brass-primary)] flex items-center justify-center">
                        <span className="text-sm font-heading font-semibold text-[var(--bg-primary)]">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-[var(--text-primary)]">
                          {item.title}
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
