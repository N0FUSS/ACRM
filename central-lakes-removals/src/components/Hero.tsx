import Image from "next/image";
import Link from "next/link";
import { businessConfig } from "@/lib/business-config";
import { getReviewData } from "@/lib/structured-data";

function GoogleStars() {
  return (
    <span className="inline-flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[var(--brass-primary)]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default async function Hero() {
  const { rating, reviewCount } = await getReviewData();

  return (
    <section className="relative flex items-start pt-12 pb-10 sm:min-h-[calc(100svh-5rem)] sm:items-center sm:py-10 lg:min-h-[calc(100svh-6rem)] lg:py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[var(--bg-secondary)] opacity-50" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Copy (52%) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Mobile Russell Avatar + Eyebrow */}
            <div className="animate-on-scroll flex items-center gap-4">
              <div className="sm:hidden w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--brass-muted)] flex-shrink-0">
                <Image
                  src="/images/generated/russell-hero.webp"
                  alt="Russell Brown"
                  width={56}
                  height={56}
                  className="image-warm object-cover w-full h-full"
                  priority
                />
              </div>
              <div>
                <span className="eyebrow">
                  Central Otago moving, planned before the pressure starts
                </span>
                {/* Availability signal */}
                <span className="block mt-1 text-xs text-[var(--text-muted)] font-medium">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                  Currently accepting bookings
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="critical-heading font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight">
              A good move is decided before the heavy lifting starts.
            </h1>

            {/* Body */}
            <p className="critical-copy text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-xl animate-on-scroll stagger-2">
              Access, timing, stairs, fragile items, loading order, weather, and settlement windows can all change the outcome of a move. Russell Brown assesses every job on site before anything is touched — then builds the load plan around what&apos;s actually in front of him, not a generic checklist. That&apos;s the difference between a move that&apos;s handled and a move that&apos;s handled properly.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll stagger-3">
              <Link href="/contact#quote" className="btn-primary text-center">
                Request a Quote
              </Link>
              <a href={`tel:${businessConfig.mobileTel}`} className="btn-secondary text-center sm:hidden">
                📞 Call Russell — {businessConfig.mobileDisplay}
              </a>
              <a href={`tel:${businessConfig.phoneTel}`} className="btn-secondary text-center hidden sm:inline-flex">
                📞 Call Free — {businessConfig.phoneDisplay}
              </a>
            </div>

            {/* Proof Line */}
            <div className="pt-6 border-t border-[var(--border-subtle)] animate-on-scroll stagger-4 flex flex-wrap gap-x-6 gap-y-3 text-base text-[var(--text-muted)] font-medium">
              <span className="flex items-center gap-2">
                <GoogleIcon />
                <span className="text-[var(--text-primary)] font-semibold">{rating}</span>
                <GoogleStars />
                <span className="text-sm">{reviewCount} reviews</span>
              </span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brass-muted)]"></span> 12,000+ Relocations</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brass-muted)]"></span> Based in Cromwell</span>
            </div>
          </div>

          <div className="hidden sm:block lg:col-span-5 animate-on-scroll stagger-2">
            <div className="relative">
              <div className="image-frame image-vignette aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded">
                <Image
                  src="/images/generated/russell-hero.webp"
                  alt="Russell Brown, owner of Central Lakes Removals"
                  fill
                  className="image-warm object-cover"
                  sizes="(min-width: 1024px) 41.6vw, 100vw"
                  priority
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
