import Image from "next/image";
import Link from "next/link";

export default function OwnerLedDifference() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Heading & Body (60%) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="animate-on-scroll">
              Judgement shows up in the <span className="brass-gradient-text">small decisions.</span>
            </h2>

            <div className="space-y-6 animate-on-scroll stagger-1">
              <p className="text-lg text-[var(--text-secondary)]">
                A move is shaped by dozens of practical calls. Every load is built in tiers — heavier cabinets as base, boxes for mid-stow, fragile items and chairs as top-stow — with each tier planned around the specific shapes, weights, and quantities in that particular move. No two load plans are the same because no two loads are.
              </p>

              <p className="text-lg text-[var(--text-secondary)]">
                Russell Brown leads those decisions directly. That matters because the person making the calls is also the person accountable for the result.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-2 border-[var(--brass-primary)] pl-6 py-2 animate-on-scroll stagger-2">
              <p className="text-xl lg:text-2xl font-heading text-[var(--text-primary)] italic leading-relaxed">
                The difference is not a bigger promise. It is better judgement at the moments that matter.
              </p>
            </blockquote>

            <div className="animate-on-scroll stagger-3">
              <Link href="/about" className="text-link inline-flex items-center gap-2">
                Why Russell Brown Matters
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 animate-on-scroll stagger-2">
            <div className="relative">
              <div className="image-frame image-vignette aspect-square">
                <Image
                  src="/images/generated/owner-led-move.webp"
                  alt="Generated interim scene of the Central Lakes Removals team carefully handling furniture"
                  fill
                  className="image-warm object-cover"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
