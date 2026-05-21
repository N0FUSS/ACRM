import { Metadata } from "next";
import { businessConfig } from "@/lib/business-config";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Russell Brown | Central Lakes Removals",
  description:
    "Meet Russell Brown, owner and operator of Central Lakes Removals. With over 12,000 relocations and personally led moves, Russell brings experienced judgement and direct accountability to every move.",
  openGraph: {
    title: "About Russell Brown | Central Lakes Removals",
    description:
      "Meet the person who leads every move. Russell Brown — 12,000+ relocations, 5.0 Google rated.",
  },
};

const milestones = [
  {
    year: "Early Career",
    title: "Building Experience",
    description: "Russell began his moving career learning the fundamentals of careful handling, logistics planning, and customer service. Every job was an opportunity to understand what matters most to customers."
  },
  {
    year: "Establishment",
    title: "Starting Central Lakes Removals",
    description: "With thousands of moves behind him, Russell established Central Lakes Removals with one principle: the person making the decisions on site should be the person accountable for the outcome."
  },
  {
    year: "Growth",
    title: "Expanding the South Island",
    description: "As reputation grew through careful work and direct accountability, Central Lakes Removals expanded to serve more of the South Island — with Russell's judgement and standards applied to every job."
  },
  {
    year: "Today",
    title: "12,000+ Relocations Later",
    description: "Today, Russell has personally led over 12,000 relocations. The experience shows in every decision, every handling technique, and every conversation with customers."
  }
];

const values = [
  {
    title: "Personal Accountability",
    description: "When Russell says he'll be there, he means it. When something needs attention, you deal directly with him."
  },
  {
    title: "Careful Planning",
    description: "Every move is planned before the truck arrives. Access, timing, protection, and logistics are considered in advance."
  },
  {
    title: "Experienced Judgement",
    description: "12,000+ moves means Russell has seen most situations. He brings that experience to every job, anticipating what needs attention."
  },
  {
    title: "Calm Leadership",
    description: "Moving day can be stressful. Russell's calm approach helps keep things on track when unexpected situations arise."
  }
];

export default function AboutPage() {
  return (
      <main className="flex-1">
        <Header />
        
        {/* Hero */}
        <section className="mobile-stable-hero min-h-[calc(100svh-5rem)] py-10 sm:min-h-0 sm:pt-24 sm:pb-14 lg:block lg:pt-40 lg:pb-28">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image - 5 cols */}
              <div className="order-2 hidden sm:block lg:order-1 lg:col-span-5 animate-on-scroll">
                <div className="relative">
                  <div className="image-frame image-vignette aspect-[4/5]">
                    <Image
                      src="/images/generated/russell-portrait.webp"
                      alt="Generated interim portrait of Russell Brown beside a moving truck"
                  fill
                  className="image-warm object-cover"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  unoptimized
                />
                  </div>
                  <div className="absolute -top-4 -left-4 w-24 h-24 border border-[var(--brass-muted)] rounded-lg -z-10 opacity-30" />
                </div>
              </div>

              {/* Content - 7 cols */}
              <div className="order-1 lg:order-2 lg:col-span-7 space-y-8">
                <div>
                  <span className="eyebrow mb-4 block animate-on-scroll">
                    About
                  </span>
                  <h1 className="critical-heading">
                    Personally led by Russell Brown.
                  </h1>
                </div>

                <div className="space-y-6 animate-on-scroll stagger-2">
                  <p className="hidden critical-copy text-base sm:block sm:text-xl text-[var(--text-secondary)]">
                    Russell Brown has personally led more than 12,000 relocations — assessing risk, reading situations, and making the decisions that protect your belongings and your time.
                  </p>
                  
                  <p className="hidden critical-copy text-base sm:block sm:text-lg text-[var(--text-secondary)]">
                    The result is a move where someone experienced is watching, thinking, and adjusting — not just lifting.
                  </p>
                  
                  <p className="hidden text-lg text-[var(--text-secondary)] sm:block">
                    Every move is led by Russell Brown — his judgement, his standards, his accountability.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 pt-4 animate-on-scroll stagger-3">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-semibold text-[var(--brass-primary)]">
                      12,000+
                    </div>
                    <div className="text-sm text-[var(--text-muted)]">
                      Relocations
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-semibold text-[var(--brass-primary)]">
                      5.0
                    </div>
                    <div className="text-sm text-[var(--text-muted)]">
                      Google Rating
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-semibold text-[var(--brass-primary)]">
                      100%
                    </div>
                    <div className="text-sm text-[var(--text-muted)]">
                      Russell-Led
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-heading animate-on-scroll">
                What Russell Brings to Every Move
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-6 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg animate-on-scroll"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-heading text-[var(--text-primary)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-heading mb-12 text-center animate-on-scroll">
                The Journey
              </h2>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className="flex gap-6 animate-on-scroll"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-32 hidden md:block">
                      <span className="text-sm text-[var(--brass-primary)] font-medium uppercase">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="flex-shrink-0 md:hidden">
                      <div className="w-3 h-3 rounded-full bg-[var(--brass-primary)] mt-2" />
                    </div>
                    <div className="flex-1 pb-8 border-b border-[var(--border-subtle)] last:border-0 last:pb-0">
                      <h3 className="text-lg font-heading text-[var(--text-primary)] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-[var(--text-secondary)]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-heading mb-6 animate-on-scroll">
                Ready to Work with Russell?
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8 animate-on-scroll stagger-1">
                Every move is led by Russell Brown — his judgement, his standards, his accountability. Get in touch to discuss your move.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll stagger-2">
                <Link href="/contact#quote" className="btn-primary">
                  Request a Quote
                </Link>
                <a href={`tel:${businessConfig.phoneTel}`} className="btn-secondary">
                  Call {businessConfig.ownerName.split(" ")[0]}
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
  );
}
