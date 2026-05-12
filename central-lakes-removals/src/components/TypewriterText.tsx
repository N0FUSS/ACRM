"use client";

import { useEffect, useState, type CSSProperties } from "react";

const DEFAULT_SLOGANS = [
  "calm in the chaos.",
  "antidote to stress.",
  "steady hand.",
];

interface TypewriterTextProps {
  slogans?: string[];
  className?: string;
}

export default function TypewriterText({
  slogans = DEFAULT_SLOGANS,
  className = "",
}: TypewriterTextProps) {
  const [text, setText] = useState(slogans[0] ?? "");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [gradientAtEnd, setGradientAtEnd] = useState(false);

  useEffect(() => {
    if (!slogans.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return;

    let timeoutId: number | undefined;
    let sloganIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    const typeDelay = (current: string, nextIndex: number) => {
      const character = current.charAt(Math.max(0, nextIndex - 1));
      const nextCharacter = current.charAt(nextIndex);
      const base = 76 + Math.random() * 82;

      if (character === " ") return base + 45;
      if (/[.,!?]/.test(character)) return base + 180;
      if (nextCharacter === " ") return base + 30;
      return base;
    };

    const deleteDelay = () => 34 + Math.random() * 34;

    const tick = () => {
      const current = slogans[sloganIndex];
      letterIndex += isDeleting ? -1 : 1;
      setText(current.slice(0, letterIndex));

      let delay = isDeleting ? deleteDelay() : typeDelay(current, letterIndex);

      if (!isDeleting && letterIndex === current.length) {
        delay = 2200;
        isDeleting = true;
      } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        sloganIndex = (sloganIndex + 1) % slogans.length;
        delay = 360;
      }

      timeoutId = window.setTimeout(tick, delay);
    };

    timeoutId = window.setTimeout(() => {
      setText("");
      timeoutId = window.setTimeout(tick, 120);
    }, 400);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [slogans]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const cursorId = window.setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 500);

    const gradientId = window.setInterval(() => {
      setGradientAtEnd((atEnd) => !atEnd);
    }, 5000);

    return () => {
      window.clearInterval(cursorId);
      window.clearInterval(gradientId);
    };
  }, []);

  return (
    <span className={`typewriter-text ${className}`} aria-hidden="true">
      {text}
    </span>
  );
}
