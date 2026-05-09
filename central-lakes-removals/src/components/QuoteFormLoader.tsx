"use client";

import dynamic from "next/dynamic";

const QuoteForm = dynamic(() => import("./QuoteForm"), {
  ssr: false,
  loading: () => (
    <div
      className="min-h-[560px] rounded bg-[var(--bg-card)]"
      aria-busy="true"
      aria-label="Loading quote form"
    />
  ),
});

export default function QuoteFormLoader() {
  return <QuoteForm />;
}
