import Link from "next/link";

export default function PremiumValue() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl animate-on-scroll">
            Good moving is not just transport.
          </h2>
          
          {/* Body */}
          <div className="space-y-6 animate-on-scroll stagger-1">
            <p className="text-xl text-[var(--text-secondary)]">
              The cheapest move can become expensive when care, planning, and accountability are missing.
            </p>
            <p className="text-xl text-[var(--text-secondary)]">
              A quality move depends on judgement, sequencing, protection, communication, and experience. Central Lakes Removals is built for customers who value their belongings, their time, and the confidence that the job is being led properly.
            </p>
          </div>

          {/* Supporting Line */}
          <p className="text-lg font-heading text-[var(--brass-primary)] italic animate-on-scroll stagger-2">
            You are not just paying for a truck. You are paying for experienced leadership, careful handling, practical problem solving, and someone who takes personal responsibility for the result.
          </p>

          {/* Final Line */}
          <p className="text-lg text-[var(--text-secondary)] animate-on-scroll stagger-3">
            If you want the move done carefully, calmly, and professionally, we are built for that.
          </p>

          {/* CTA */}
          <div className="pt-4 animate-on-scroll stagger-4">
            <Link href="/contact#quote" className="btn-primary">
              Get a Properly Planned Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}