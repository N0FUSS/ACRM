const proofPoints = [
  { 
    label: "Personally led by Russell Brown", 
    icon: (
      <svg className="w-3.5 h-3.5 text-[var(--brass-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  },
  { 
    label: "12,000+ relocations", 
    icon: (
      <svg className="w-3.5 h-3.5 text-[var(--brass-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  { 
    label: "5.0 Google rating", 
    icon: (
      <svg className="w-3.5 h-3.5 text-[var(--brass-primary)]" fill="currentColor" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  { 
    label: "One dedicated team", 
    icon: (
      <svg className="w-3.5 h-3.5 text-[var(--brass-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  { 
    label: "Based in Cromwell", 
    icon: (
      <svg className="w-3.5 h-3.5 text-[var(--brass-primary)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
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
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--brass-glow)] border border-[var(--brass-muted)] opacity-90">
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