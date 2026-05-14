import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Tell us about your move",
    description: "Send through your moving locations, preferred date, access details, main items, and anything unusual we should know.",
  },
  {
    number: "2",
    title: "We review the details",
    description: "Russell looks over the move, considers the practical requirements, and helps identify what needs to be planned before move day.",
  },
  {
    number: "3",
    title: "Your move is personally led",
    description: "Russell and the team arrive with a clear plan, proper equipment, and his direct leadership on site.",
  },
  {
    number: "4",
    title: "Your items are handled with care",
    description: "Furniture and belongings are protected, loaded, transported, and placed with attention to the details that matter.",
  },
  {
    number: "5",
    title: "Loose ends are followed through",
    description: "If anything needs clarification, adjustment, or follow up, you deal directly with Russell.",
  },
];

export default function MovingProcess() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] section-topo relative">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16 relative z-10">
          <span className="eyebrow mb-4 block animate-on-scroll">
            Our Process
          </span>
          <h2 className="animate-on-scroll stagger-1">
            A clear process from <span className="brass-gradient-text">first enquiry</span> to final placement.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mt-4 animate-on-scroll stagger-2">
            A good move starts before the truck arrives. Russell reviews the details, identifies risks, and plans the job properly so move day runs with more clarity and less avoidable pressure.
          </p>
        </div>

        {/* Process Steps - Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--brass-muted)] to-transparent opacity-50" />
          
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative pt-24 animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step number */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[var(--brass-primary)] flex items-center justify-center">
                  <span className="text-xl font-heading font-semibold text-[var(--bg-primary)]">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-heading font-medium text-[var(--text-primary)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps - Mobile: Vertical Stack */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex gap-6 animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--brass-primary)] flex items-center justify-center">
                <span className="text-xl font-heading font-semibold text-[var(--bg-primary)]">
                  {step.number}
                </span>
              </div>
              
              {/* Content */}
              <div className="pt-2">
                <h3 className="text-lg font-heading font-medium text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <Link href="/contact#quote" className="btn-primary">
            Start Planning Your Move
          </Link>
        </div>
      </div>
    </section>
  );
}