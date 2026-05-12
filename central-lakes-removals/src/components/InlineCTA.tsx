import Link from "next/link";
import { businessConfig } from "@/lib/business-config";

interface InlineCTAProps {
  headline?: string;
  subtext?: string;
  variant?: "default" | "accent";
}

export default function InlineCTA({
  headline = "Ready to plan your move?",
  subtext = "Russell will personally review your details and get back to you.",
  variant = "default",
}: InlineCTAProps) {
  const bgClass =
    variant === "accent"
      ? "bg-gradient-to-br from-[#0C1421] via-[#1a1408] to-[#0C1421] border-[var(--brass-muted)]"
      : "bg-[var(--bg-card)] border-[var(--border-medium)]";

  return (
    <div className={`border rounded-lg p-8 lg:p-10 ${bgClass}`}>
      <div className="max-w-2xl mx-auto text-center space-y-5">
        <h3 className="text-2xl lg:text-3xl font-heading font-medium text-[var(--text-primary)]">
          {headline}
        </h3>
        <p className="text-[var(--text-secondary)]">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link href="/contact#quote" className="btn-primary">
            Request a Quote
          </Link>
          <a
            href={`tel:${businessConfig.phoneTel}`}
            className="btn-secondary"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call {businessConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
