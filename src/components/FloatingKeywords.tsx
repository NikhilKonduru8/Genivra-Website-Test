"use client";

import { useEffect, useState } from "react";

const KEYWORDS = [
  "Reduce costs",
  "Save time",
  "De-risk trials",
  "Faster decisions",
  "Data-driven",
  "Less waste",
  "Smarter protocols",
  "Predict outcomes",
  "Cut failure risk",
  "Evidence-based",
];

const POSITIONS = [
  { top: "12%", left: "8%" },
  { top: "25%", right: "12%" },
  { top: "45%", left: "5%" },
  { top: "55%", right: "8%" },
  { top: "70%", left: "15%" },
  { top: "85%", right: "6%" },
  { top: "18%", right: "20%" },
  { top: "38%", left: "18%" },
  { top: "62%", right: "14%" },
  { top: "78%", left: "10%" },
];

export default function FloatingKeywords() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxOffset = scrollY * 0.12;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
      style={{ transform: `translate3d(0, ${-parallaxOffset}px, 0)` }}
    >
      {KEYWORDS.map((text, i) => {
        const pos = POSITIONS[i % POSITIONS.length];
        const delay = i * 0.6;
        const duration = 9 + (i % 3) * 2;
        return (
          <span
            key={i}
            className="absolute text-sm font-medium tracking-wide whitespace-nowrap select-none"
            style={{
              ...pos,
              animation: `float-keyword ${duration}s ease-in-out ${delay}s infinite`,
              color: "rgba(255, 255, 255, 0.04)",
            }}
          >
            {text}
          </span>
        );
      })}
    </div>
  );
}
