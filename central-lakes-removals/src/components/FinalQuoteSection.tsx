import QuoteFormLoader from "./QuoteFormLoader";
import { businessConfig } from "@/lib/business-config";

export default function FinalQuoteSection() {
  return (
    <section id="quote" className="flex min-h-[calc(100svh-5rem)] items-center py-10 sm:min-h-0 sm:py-12 lg:section-padding bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Copy (40%) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="eyebrow mb-4 block animate-on-scroll">
                Get Started
              </span>
              <h2 className="critical-heading">
                Plan your move.
              </h2>
            </div>

            <div className="space-y-5 animate-on-scroll stagger-2">
              <p className="critical-copy hidden text-base sm:block lg:text-lg text-[var(--text-secondary)]">
                Tell us where you are moving from, where you are moving to, and what needs to be moved. Russell will review the details.
              </p>
              
              <p className="hidden text-[var(--text-secondary)] sm:block">
                The more detail you provide, the easier it is to plan your move accurately.
              </p>
            </div>

            {/* Phone Option */}
            <div className="pt-4 animate-on-scroll stagger-3">
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Prefer to talk directly?
              </p>
              <a
                href={`tel:${businessConfig.phoneTel}`}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Russell
              </a>
            </div>
          </div>

          {/* Right Column - Form (60%) */}
          <div className="lg:col-span-7 animate-on-scroll stagger-2">
            <div className="bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg p-6 lg:p-10">
              <QuoteFormLoader />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
