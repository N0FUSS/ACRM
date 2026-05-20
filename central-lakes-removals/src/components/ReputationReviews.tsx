import Link from "next/link";
import { getReviewData } from "@/lib/structured-data";

function GoogleStars({ size = "w-5 h-5" }: { size?: string }) {
  return (
    <span className="inline-flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`${size} text-[var(--brass-primary)]`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

const reviewThemes = [
  "Careful handling",
  "Clear communication",
  "Hard working team",
  "Calm problem solving",
  "Professional and trustworthy",
];

export default async function ReputationReviews() {
  const { rating, reviewCount } = await getReviewData();

  const proofBlocks = [
    {
      stat: "12,000+",
      label: "Relocations",
      description: "Hands-on experience matters when the job becomes difficult, awkward, time sensitive, or more complex than expected.",
      isGoogle: false,
    },
    {
      stat: rating,
      label: "Google Rating",
      description: "Consistent customer satisfaction built through care, communication, and dependable work.",
      isGoogle: true,
    },
    {
      stat: String(reviewCount),
      label: "Google Reviews",
      description: "Real feedback from real customers — not a curated highlight reel. Every review earned through the work.",
      isGoogle: false,
    },
  ];

  return (
    <section className="section-padding section-brass-wash relative">
      <div className="container relative z-10">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="eyebrow mb-4 block animate-on-scroll">Reputation</span>
          <h2 className="animate-on-scroll stagger-1">
            Care is easiest to trust when <span className="brass-gradient-text">other customers have seen it.</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mt-4 animate-on-scroll stagger-2">
            The strongest proof is what customers notice after the work is done: careful handling, clear communication, hard work, calm problem solving, and a move that felt properly managed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {proofBlocks.map((block, index) => (
            <div key={block.label} className="text-center animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              {block.isGoogle ? (
                <div className="flex flex-col items-center mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <GoogleIcon />
                    <span className="text-4xl lg:text-5xl font-heading font-semibold text-[var(--brass-primary)]">{block.stat}</span>
                  </div>
                  <GoogleStars />
                </div>
              ) : (
                <div className="text-5xl lg:text-7xl font-heading font-semibold text-[var(--brass-primary)] mb-2">{block.stat}</div>
              )}
              <div className="text-sm font-medium text-[var(--text-primary)] uppercase mb-4">{block.label}</div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{block.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg p-8 lg:p-12 animate-on-scroll">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {reviewThemes.map((theme) => (
              <span key={theme} className="px-4 py-2 bg-[var(--bg-elevated)] border border-[var(--border-medium)] rounded-full text-sm text-[var(--text-secondary)]">
                {theme}
              </span>
            ))}
          </div>
          <p className="text-center text-[var(--text-muted)] text-sm mt-6">
            Real customer feedback from {reviewCount} verified Google reviews
          </p>
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <Link href="/reviews" className="btn-secondary">Read Customer Reviews</Link>
        </div>
      </div>
    </section>
  );
}
