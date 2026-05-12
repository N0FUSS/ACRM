"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { businessConfig } from "@/lib/business-config";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Show after scrolling past the hero (approx 400px)
      // Hide when scrolling up (reading), show when scrolling down (leaving)
      if (currentY < 400) {
        setVisible(false);
      } else if (currentY > lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-[110] lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[var(--bg-primary)]/95 backdrop-blur-md border-t border-[var(--border-subtle)] px-4 py-3">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href={`tel:${businessConfig.mobileTel}`}
            className="btn-secondary flex-1 text-center text-sm py-2.5 min-h-0"
          >
            <svg className="w-4 h-4 inline-block mr-1.5 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Russell
          </a>
          <Link
            href="/contact#quote"
            className="btn-primary flex-1 text-center text-sm py-2.5 min-h-0"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
