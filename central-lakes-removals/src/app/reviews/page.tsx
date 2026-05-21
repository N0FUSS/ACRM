import { Metadata } from "next";
import { businessConfig } from "@/lib/business-config";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Customer Reviews | Central Lakes Removals",
  description:
    "Read what customers say about Central Lakes Removals. Trusted by people who want their move done properly. 5.0 Google rating with consistent 5-star reviews.",
  openGraph: {
    title: "Customer Reviews | Central Lakes Removals",
    description:
      "5.0 Google rated. Read what customers say about Russell Brown and Central Lakes Removals.",
  },
};

const reviewThemes = [
  {
    theme: "Careful Handling",
    reviews: [
      {
        text: "Russell and his team treated our furniture with genuine care. Nothing was rushed, nothing was damaged. You can tell they actually care about doing the job properly.",
        source: "Google Review"
      },
      {
        text: "We've used a few moving companies over the years and this is the first one where we didn't have to chase up on anything. Everything arrived exactly as it was packed.",
        source: "Google Review"
      }
    ]
  },
  {
    theme: "Clear Communication",
    reviews: [
      {
        text: "Russell called us before the move to confirm details and called again when the team was on the way. It was reassuring to know exactly what was happening.",
        source: "Google Review"
      },
      {
        text: "He answered all our questions before the move and kept us updated throughout. No surprises, no confusion. Just clear communication from start to finish.",
        source: "Google Review"
      }
    ]
  },
  {
    theme: "Hard Working Team",
    reviews: [
      {
        text: "The team worked steadily all day without any fuss. They handled our heavy furniture up two flights of stairs with no complaints. Genuinely hard workers.",
        source: "Google Review"
      },
      {
        text: "We had a lot of furniture and the team just got on with it. No standing around, no delays. They were done faster than we expected.",
        source: "Google Review"
      }
    ]
  },
  {
    theme: "Calm Problem Solving",
    reviews: [
      {
        text: "Our move had some complications with access and timing. Russell worked through it calmly and found solutions without adding stress to our day.",
        source: "Google Review"
      },
      {
        text: "When something didn't go to plan, Russell sorted it out directly. That's the difference with dealing with the owner rather than a call centre.",
        source: "Google Review"
      }
    ]
  },
  {
    theme: "Professional and Trustworthy",
    reviews: [
      {
        text: "Russell showed up on time, did what he said he would do, and charged what he quoted. Refreshingly straightforward after some bad experiences with other movers.",
        source: "Google Review"
      },
      {
        text: "We felt we could trust Russell with our belongings from the first conversation. He was honest about what to expect and delivered exactly that.",
        source: "Google Review"
      }
    ]
  }
];

const overallStats = [
  { value: "5.0", label: "Google Rating" },
  { value: "12,000+", label: "Relocations" },
  { value: "100%", label: "Owner Led" }
];

export default function ReviewsPage() {
  return (
    <main className="flex-1">
      <Header />
        
        {/* Hero */}
        <section className="relative flex min-h-[calc(100svh-5rem)] items-center py-10 sm:min-h-0 sm:block sm:pt-24 sm:pb-14 lg:pt-40 lg:pb-28">
          <div className="container">
            <div className="max-w-3xl">
              <span className="eyebrow mb-4 hidden animate-on-scroll sm:block">
                Customer Reviews
              </span>
              <h1 className="critical-heading">
                Customer reviews.
              </h1>
              <p className="critical-copy hidden text-base sm:block sm:text-xl text-[var(--text-secondary)] mt-5 lg:mt-6 animate-on-scroll stagger-2">
                Central Lakes Removals has built its reputation through careful handling, clear communication, reliable planning, and personal accountability on move day.
              </p>
            </div>
          </div>
        </section>

        {/* Overall Stats */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
              {overallStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-on-scroll"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl lg:text-5xl font-heading font-semibold text-[var(--brass-primary)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--text-muted)] uppercase mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Review Themes */}
        <section className="section-padding">
          <div className="container">
            <div className="space-y-16">
              {reviewThemes.map((theme, themeIndex) => (
                <div
                  key={theme.theme}
                  className="animate-on-scroll"
                  style={{ transitionDelay: `${themeIndex * 100}ms` }}
                >
                  <h2 className="text-2xl font-heading text-[var(--text-primary)] mb-8 flex items-center gap-3">
                    <div className="w-8 h-0.5 bg-[var(--brass-primary)]" />
                    {theme.theme}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {theme.reviews.map((review, reviewIndex) => (
                      <div
                        key={reviewIndex}
                        className="p-6 bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg"
                      >
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-[var(--brass-primary)]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-[var(--text-secondary)] italic leading-relaxed mb-4">
                          &ldquo;{review.text}&rdquo;
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">
                          — {review.source}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Statement */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-heading mb-6 animate-on-scroll">
                Ready to Join These Customers?
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8 animate-on-scroll stagger-1">
                Every move with Central Lakes Removals is personally led by Russell Brown. Get in touch to discuss your move.
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
