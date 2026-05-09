import Image from "next/image";
import Link from "next/link";
import TypewriterText from "@/components/TypewriterText";

export default function Hero() {
  return (
    <section className="relative flex items-start pt-12 pb-10 sm:min-h-[calc(100svh-5rem)] sm:items-center sm:py-10 lg:min-h-[calc(100svh-6rem)] lg:py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-secondary)] opacity-50" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Copy (52%) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Eyebrow */}
            <div className="animate-on-scroll">
              <span className="eyebrow">
                Owner-Led Moving · Cromwell, Central Otago
              </span>
            </div>

            {/* Headline */}
            <h1
              className="critical-heading typewriter-heading"
              style={{
                display: "grid",
                gap: "0.08em",
                maxWidth: "11ch",
                textTransform: "none",
              }}
            >
              <span>We are your</span>
              <TypewriterText />
            </h1>

            {/* Body */}
            <p className="critical-copy text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-xl animate-on-scroll stagger-2">
              Every move is planned, managed, and physically led by Russell Brown. Not a call centre. Not a franchise. One experienced owner, one dedicated team, one standard of care.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll stagger-3">
              <Link href="/contact#quote" className="btn-primary text-center">
                Request a Quote
              </Link>
              <a href="tel:+64211234567" className="btn-secondary text-center">
                📞 Call Russell — 027 334 3803
              </a>
            </div>

            {/* Proof Line */}
            <div className="pt-6 border-t border-[var(--border-subtle)] animate-on-scroll stagger-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--text-muted)] font-medium">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brass-muted)]"></span> 5.0 ★ Google Rating</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brass-muted)]"></span> 12,000+ Relocations</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brass-muted)]"></span> Owner on Every Move</span>
            </div>
          </div>

          <div className="hidden sm:block lg:col-span-5 animate-on-scroll stagger-2">
            <div className="relative">
              <div className="image-frame image-vignette aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded">
                <Image
                  src="/images/generated/russell-hero.webp"
                  alt="Russell Brown of Central Lakes Removals"
                  fill
                  className="image-warm object-cover"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  unoptimized
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[var(--brass-muted)] rounded -z-10 opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
