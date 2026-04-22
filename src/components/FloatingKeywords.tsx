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
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {KEYWORDS.map((text, i) => {
        const pos = POSITIONS[i % POSITIONS.length];
        const duration = 16 + (i % 4) * 3;
        const delay = (i * 0.7) % 5;
        return (
          <span
            key={i}
            className="absolute whitespace-nowrap select-none text-[11px] font-medium tracking-[0.14em] uppercase"
            style={{
              ...pos,
              color: "rgba(255, 255, 255, 0.03)",
              animation: `drift ${duration}s ease-in-out ${delay}s infinite`,
              willChange: "transform",
            }}
          >
            {text}
          </span>
        );
      })}
    </div>
  );
}
