import Link from "next/link";

export default function PremiumValue() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl animate-on-scroll">
            A cheaper move is not always a lower cost.
          </h2>

          {/* Body */}
          <div className="space-y-6 animate-on-scroll stagger-1">
            <p className="text-xl text-[var(--text-secondary)]">
              Poor planning can cost more than the quote difference.
            </p>
            <p className="text-xl text-[var(--text-secondary)]">
              Damage, delays, rushed loading, settlement pressure, access problems, and avoidable confusion all carry a cost. Central Lakes Removals is built for customers who value their belongings, their time, and the confidence that the job is being handled properly.
            </p>
            <p className="text-xl text-[var(--text-secondary)]">
              People trust us with every item they own. That trust is not taken lightly — it drives every decision Russell makes on site, from the first assessment to the last box checked.
            </p>
          </div>

          {/* Supporting Line */}
          <p className="text-lg font-heading text-[var(--brass-primary)] italic animate-on-scroll stagger-2">
            Paying for judgement is usually cheaper than paying for mistakes.
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
