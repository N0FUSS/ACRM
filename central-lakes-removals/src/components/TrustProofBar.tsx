const proofPoints = [
  { label: "Personally led by Russell Brown", icon: "👤" },
  { label: "12,000+ relocations", icon: "🏠" },
  { label: "5.0 Google rating", icon: "⭐" },
  { label: "One dedicated team", icon: "👥" },
  { label: "Based in Cromwell", icon: "📍" },
];

export default function TrustProofBar() {
  return (
    <div className="bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] py-4">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {proofPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm font-medium animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--bg-card)] border border-[var(--border-medium)] text-[10px]">
                {point.icon}
              </div>
              <span className={index % 2 === 0 ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}>
                {point.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}