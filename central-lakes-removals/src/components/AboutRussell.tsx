import Image from "next/image";
import Link from "next/link";

const proofPoints = [
  { label: "Owner operator" },
  { label: "Personally leads each move" },
  { label: "12,000+ relocations" },
  { label: "Based in Cromwell" },
  { label: "One dedicated team" },
];

export default function AboutRussell() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 animate-on-scroll">
            <div className="relative">
              <div className="image-frame image-vignette aspect-[4/5]">
                <Image
                  src="/images/generated/russell-portrait.webp"
                  alt="Generated interim portrait of Russell Brown for the owner-led moving story"
                fill
                className="image-warm object-cover"
                sizes="(min-width: 1024px) 38vw, 100vw"
                unoptimized
              />
              </div>
              
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-[var(--brass-muted)] rounded-lg -z-10 opacity-30" />
            </div>
          </div>

          {/* Right Column - Content (60%) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="eyebrow mb-4 block animate-on-scroll">
                About
              </span>
              <h2 className="animate-on-scroll stagger-1">
                Personally led by Russell Brown.
              </h2>
            </div>

            <div className="space-y-6 animate-on-scroll stagger-2">
              <p className="text-lg text-[var(--text-secondary)]">
                Central Lakes Removals is personally led by Russell Brown, an experienced owner operator with more than 12,000 relocations behind him.
              </p>
              
              <p className="text-lg text-[var(--text-secondary)]">
                Russell is directly involved in the planning, communication, and physical execution of each move. That gives customers a level of accountability that is rare in the moving industry.
              </p>
              
              <p className="text-lg text-[var(--text-secondary)]">
                The result is a more careful, more considered, and more personal moving experience.
              </p>
            </div>

            {/* Proof Points */}
            <div className="flex flex-wrap gap-4 animate-on-scroll stagger-3">
              {proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-full"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--brass-primary)]" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    {point.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="animate-on-scroll stagger-4">
              <Link href="/about" className="btn-secondary">
                Meet Russell
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
