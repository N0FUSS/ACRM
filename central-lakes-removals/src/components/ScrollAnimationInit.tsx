"use client";

import { useEffect } from "react";

/**
 * Initialises IntersectionObserver for .animate-on-scroll elements.
 * Adds .scroll-ready to <html> so CSS knows JS is active.
 * Uses MutationObserver to catch dynamically added elements (client nav).
 * Respects prefers-reduced-motion.
 */
export default function ScrollAnimationInit() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    // 1. Mark document as ready for scroll animations
    document.documentElement.classList.add("scroll-ready");

    // 2. Create IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    // 3. Observe all current elements
    const observeAll = () => {
      document
        .querySelectorAll(".animate-on-scroll:not(.is-visible)")
        .forEach((el) => observer.observe(el));
    };

    observeAll();

    // 4. Watch for new elements (client-side navigation)
    const mutation = new MutationObserver(() => {
      observeAll();
    });

    mutation.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutation.disconnect();
      document.documentElement.classList.remove("scroll-ready");
    };
  }, []);

  return null;
}
