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
              The difference is not the truck. It's <span className="brass-gradient-text">who's making the calls</span>.
            </h2>
            
            <div className="space-y-6 animate-on-scroll stagger-1">
              <p className="text-lg text-[var(--text-secondary)]">
                Russell Brown doesn't just show up on move day. He assesses access, sequences the load, reads the pressure points in your property, and makes the decisions that prevent damage, delay, and unnecessary stress.
              </p>
              
              <p className="text-lg text-[var(--text-secondary)]">
                Moving is full of small decisions that affect the outcome. Access, timing, protection, loading order, difficult items, tight spaces, weather, stairs, long driveways, settlement timing, and customer priorities all need judgement on the day.
              </p>
              
              <p className="text-lg text-[var(--text-secondary)]">
                When Russell is on site, those calls are made by someone with 12,000+ relocations behind him — not a crew leader checking a clipboard.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-2 border-[var(--brass-primary)] pl-6 py-2 animate-on-scroll stagger-2">
              <p className="text-xl lg:text-2xl font-heading text-[var(--text-primary)] italic leading-relaxed">
                You are not just booking a truck. You are trusting Russell Brown with your home, your belongings, and your peace of mind.
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
                  alt="Generated interim scene of an owner-led moving team carefully handling furniture"
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
