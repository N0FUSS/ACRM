"use client";

import { useEffect } from "react";

/**
 * Initialises IntersectionObserver for .animate-on-scroll elements.
 * Elements start invisible (via CSS) and get .is-visible when they
 * enter the viewport. Respects prefers-reduced-motion.
 */
export default function ScrollAnimationInit() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
