import Link from "next/link";

const proofBlocks = [
  {
    stat: "12,000+",
    label: "Relocations",
    description: "Hands on experience matters when the job becomes difficult, awkward, time sensitive, or more complex than expected.",
  },
  {
    stat: "5.0",
    label: "Google Rating",
    description: "Consistent customer satisfaction built through care, communication, and dependable work.",
  },
  {
    stat: "100%",
    label: "Personally Led Moves",
    description: "Russell is directly involved in the planning and execution of every move.",
  },
];

const reviewThemes = [
  "Careful handling",
  "Clear communication",
  "Hard working team",
  "Calm problem solving",
  "Professional and trustworthy",
];

export default function ReputationReviews() {
  return (
    <section className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="eyebrow mb-4 block animate-on-scroll">
            Reputation
          </span>
          <h2 className="animate-on-scroll stagger-1">
            Trusted by customers who want their move done properly.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mt-4 animate-on-scroll stagger-2">
            Central Lakes Removals has built its reputation through careful handling, clear communication, reliable planning, and personal accountability on move day.
          </p>
        </div>

        {/* Proof Blocks */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {proofBlocks.map((block, index) => (
            <div
              key={block.label}
              className="text-center animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-heading font-semibold text-[var(--brass-primary)] mb-2">
                {block.stat}
              </div>
              <div className="text-sm font-medium text-[var(--text-primary)] uppercase mb-4">
                {block.label}
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        {/* Review Themes */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-medium)] rounded-lg p-8 lg:p-12 animate-on-scroll">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {reviewThemes.map((theme) => (
              <span
                key={theme}
                className="px-4 py-2 bg-[var(--bg-elevated)] border border-[var(--border-medium)] rounded-full text-sm text-[var(--text-secondary)]"
              >
                {theme}
              </span>
            ))}
          </div>
          <p className="text-center text-[var(--text-muted)] text-sm mt-6">
            Real customer feedback from verified reviews
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-on-scroll">
          <Link href="/reviews" className="btn-secondary">
            Read Customer Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
