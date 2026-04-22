"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  LineChart,
  ShieldCheck,
  Sparkles,
  Database,
  Cpu,
  BadgeCheck,
  RefreshCw,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ----------------------------- VISUALS ------------------------------ */

function NeuralMapVisual() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1600);
    return () => clearInterval(id);
  }, []);

  const nodes = [
    { x: 20, y: 30 },
    { x: 50, y: 18 },
    { x: 82, y: 34 },
    { x: 30, y: 62 },
    { x: 64, y: 58 },
    { x: 44, y: 82 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [2, 4],
    [3, 4],
    [3, 5],
    [4, 5],
  ];
  const active = tick % nodes.length;

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full max-h-[180px] max-w-[260px]"
        preserveAspectRatio="xMidYMid meet"
      >
        {edges.map(([a, b], i) => {
          const p1 = nodes[a];
          const p2 = nodes[b];
          const highlight = a === active || b === active;
          return (
            <motion.line
              key={i}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke={highlight ? "rgb(94,179,255)" : "rgba(255,255,255,0.12)"}
              strokeWidth={highlight ? 0.6 : 0.35}
              animate={{ opacity: highlight ? 1 : 0.55 }}
              transition={{ duration: 0.4 }}
            />
          );
        })}
        {nodes.map((n, i) => {
          const isActive = i === active;
          return (
            <g key={i}>
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={isActive ? 2.8 : 1.6}
                fill={isActive ? "rgb(94,179,255)" : "rgba(255,255,255,0.55)"}
                animate={{
                  scale: isActive ? [1, 1.4, 1] : 1,
                }}
                transition={{ duration: 0.9, ease: EASE }}
              />
              {isActive && (
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r={1.6}
                  fill="transparent"
                  stroke="rgb(94,179,255)"
                  strokeWidth={0.4}
                  initial={{ scale: 1, opacity: 0.7 }}
                  animate={{ scale: 3.5, opacity: 0 }}
                  transition={{ duration: 1.2, ease: EASE, repeat: Infinity }}
                />
              )}
            </g>
          );
        })}
      </svg>
      <span className="absolute bottom-3 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
        99.8% accuracy
      </span>
    </div>
  );
}

function PredictiveChartVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-20%" });
  const bars = [42, 68, 56, 82, 64, 92, 78];

  return (
    <div ref={ref} className="flex h-full w-full items-end justify-center px-4 pb-6">
      <div className="flex h-full w-full max-w-[260px] items-end justify-between gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: "10%" }}
            animate={inView ? { height: `${h}%` } : { height: "10%" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.08 * i }}
            className="relative w-full rounded-sm bg-gradient-to-t from-sky-500/80 via-sky-400/50 to-sky-300/20"
          >
            {i === bars.length - 1 && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-sm border border-sky-500/30 bg-sky-500/10 px-1 py-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-sky-300"
              >
                73%
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ComplianceShieldVisual() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setProgress((p) => (p >= 100 ? 0 : Math.min(p + 4, 100))),
      140
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <div className="relative">
        <svg viewBox="0 0 80 80" className="h-24 w-24">
          <defs>
            <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(94,179,255)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="rgb(94,179,255)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M40 6 L70 16 V40 Q70 60 40 74 Q10 60 10 40 V16 Z"
            fill="url(#shieldGrad)"
            stroke="rgba(94,179,255,0.4)"
            strokeWidth="0.8"
          />
          <motion.path
            d="M28 41 L36 49 L52 31"
            fill="none"
            stroke="rgb(94,179,255)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: EASE, repeat: Infinity, repeatDelay: 0.8 }}
          />
        </svg>
      </div>
      <div className="flex w-full max-w-[180px] flex-col gap-1.5">
        <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">
          <span>Audit trail</span>
          <span>{progress}%</span>
        </div>
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.08]">
          <motion.div
            className="h-full bg-sky-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </div>
  );
}

function ReportStackVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute flex h-28 w-44 flex-col gap-2 rounded-lg border border-white/10 bg-[var(--surface-elevated)] p-3 shadow-2xl shadow-black/30"
          initial={{ y: 14 * i, rotate: (i - 1) * -4, opacity: 0 }}
          animate={{
            y: [14 * i, 14 * i - 6, 14 * i],
            rotate: (i - 1) * -4,
            opacity: 1,
          }}
          transition={{
            opacity: { duration: 0.6, delay: i * 0.1 },
            y: {
              duration: 3.4,
              repeat: Infinity,
              ease: EASE,
              delay: i * 0.2,
            },
          }}
          style={{ zIndex: 3 - i }}
        >
          <div className="flex items-center justify-between">
            <div className="h-1.5 w-10 rounded-full bg-white/20" />
            <div className="h-1.5 w-4 rounded-full bg-sky-400/70" />
          </div>
          <div className="h-1 w-full rounded-full bg-white/[0.08]" />
          <div className="h-1 w-4/5 rounded-full bg-white/[0.08]" />
          <div className="mt-auto flex items-end gap-1">
            {[40, 70, 55, 82, 60].map((h, j) => (
              <div
                key={j}
                className="w-2 rounded-sm bg-gradient-to-t from-sky-500/60 to-sky-400/20"
                style={{ height: `${h * 0.28}px` }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* -------------------------- FEATURE CARDS --------------------------- */

function DatasetVisual() {
  const rows = 6;
  const cols = 10;
  return (
    <div className="flex h-full w-full items-center justify-center px-4">
      <div className="grid w-full max-w-[260px] gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: rows * cols }).map((_, i) => {
          const isActive = [3, 7, 14, 22, 31, 35, 44, 48, 52, 55].includes(i);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.008, ease: EASE }}
              className="h-3 rounded-[2px]"
              style={{
                background: isActive
                  ? "rgba(94,179,255,0.85)"
                  : "rgba(255,255,255,0.08)",
              }}
            >
              {isActive && (
                <motion.div
                  className="h-full w-full rounded-[2px] bg-sky-400"
                  animate={{ opacity: [0.9, 0.4, 0.9] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: (i % 4) * 0.3 }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ArchitectureVisual() {
  const layers = [
    { label: "Language", x: 20 },
    { label: "Graph", x: 50 },
    { label: "Boosted", x: 80 },
  ];
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <svg viewBox="0 0 100 100" className="h-full w-full max-h-[180px] max-w-[260px]">
        {/* Input nodes */}
        {[25, 50, 75].map((y, i) => (
          <circle key={`in-${i}`} cx={8} cy={y} r={1.6} fill="rgba(255,255,255,0.4)" />
        ))}
        {/* Layer nodes */}
        {layers.map((layer, li) => (
          <g key={layer.label}>
            {[25, 50, 75].map((y, i) => (
              <motion.circle
                key={i}
                cx={layer.x}
                cy={y}
                r={2}
                fill="rgb(94,179,255)"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: li * 0.6 + i * 0.15,
                  ease: EASE,
                }}
              />
            ))}
            <text
              x={layer.x}
              y={92}
              textAnchor="middle"
              fill="rgba(255,255,255,0.35)"
              fontSize="4"
              fontFamily="monospace"
              letterSpacing="0.2"
            >
              {layer.label.toUpperCase()}
            </text>
          </g>
        ))}
        {/* Output */}
        {[40, 60].map((y, i) => (
          <circle key={`out-${i}`} cx={95} cy={y} r={1.6} fill="rgba(255,255,255,0.5)" />
        ))}
        {/* Connections */}
        {[25, 50, 75].flatMap((y1) =>
          [25, 50, 75].map((y2) => (
            <line
              key={`${y1}-${y2}-l1`}
              x1={8}
              y1={y1}
              x2={20}
              y2={y2}
              stroke="rgba(94,179,255,0.15)"
              strokeWidth={0.3}
            />
          ))
        )}
        {[25, 50, 75].flatMap((y1) =>
          [25, 50, 75].map((y2) => (
            <line
              key={`${y1}-${y2}-l2`}
              x1={20}
              y1={y1}
              x2={50}
              y2={y2}
              stroke="rgba(94,179,255,0.15)"
              strokeWidth={0.3}
            />
          ))
        )}
        {[25, 50, 75].flatMap((y1) =>
          [25, 50, 75].map((y2) => (
            <line
              key={`${y1}-${y2}-l3`}
              x1={50}
              y1={y1}
              x2={80}
              y2={y2}
              stroke="rgba(94,179,255,0.15)"
              strokeWidth={0.3}
            />
          ))
        )}
        {[25, 50, 75].flatMap((y1) =>
          [40, 60].map((y2) => (
            <line
              key={`${y1}-${y2}-out`}
              x1={80}
              y1={y1}
              x2={95}
              y2={y2}
              stroke="rgba(94,179,255,0.2)"
              strokeWidth={0.3}
            />
          ))
        )}
      </svg>
    </div>
  );
}

function ValidationVisual() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 4), 900);
    return () => clearInterval(id);
  }, []);
  const checks = ["Methodology", "Audit trail", "Reproducibility", "FDA review"];
  return (
    <div className="flex h-full w-full items-center justify-center px-8">
      <div className="flex w-full max-w-[260px] flex-col gap-2.5">
        {checks.map((label, i) => {
          const done = i <= step;
          return (
            <div key={label} className="flex items-center gap-3">
              <motion.div
                animate={{
                  borderColor: done ? "rgb(94,179,255)" : "rgba(255,255,255,0.1)",
                  backgroundColor: done ? "rgba(94,179,255,0.15)" : "transparent",
                }}
                className="flex h-5 w-5 items-center justify-center rounded-full border"
              >
                {done && (
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.35 }}
                    viewBox="0 0 12 12"
                    className="size-3"
                  >
                    <motion.path
                      d="M3 6 L5 8 L9 4"
                      fill="none"
                      stroke="rgb(94,179,255)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.35 }}
                    />
                  </motion.svg>
                )}
              </motion.div>
              <motion.span
                animate={{ color: done ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)" }}
                className="font-mono text-[11px] uppercase tracking-[0.12em]"
              >
                {label}
              </motion.span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ContinuousLearningVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.svg
        viewBox="0 0 100 100"
        className="h-full w-full max-h-[180px] max-w-[180px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" strokeDasharray="2 3" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="rgb(94,179,255)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="188"
          animate={{ strokeDashoffset: [188, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: EASE }}
        />
        {[0, 90, 180, 270].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 50 + 30 * Math.cos(rad);
          const y = 50 + 30 * Math.sin(rad);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={1.8}
              fill="rgb(94,179,255)"
            />
          );
        })}
      </motion.svg>
      <div className="pointer-events-none absolute flex flex-col items-center">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">Quarterly</span>
        <span className="mt-0.5 text-[11px] font-semibold tracking-tight text-white">Retrained</span>
      </div>
    </div>
  );
}

export type FeatureVisual =
  | "neural"
  | "predictive"
  | "compliance"
  | "report"
  | "dataset"
  | "architecture"
  | "validation"
  | "continuous";

export type FeatureItem = {
  label: string;
  title: string;
  desc: string;
  visual: FeatureVisual;
};

const VISUAL_MAP: Record<FeatureVisual, React.FC> = {
  neural: NeuralMapVisual,
  predictive: PredictiveChartVisual,
  compliance: ComplianceShieldVisual,
  report: ReportStackVisual,
  dataset: DatasetVisual,
  architecture: ArchitectureVisual,
  validation: ValidationVisual,
  continuous: ContinuousLearningVisual,
};

const ICON_MAP: Record<FeatureVisual, LucideIcon> = {
  neural: Brain,
  predictive: LineChart,
  compliance: ShieldCheck,
  report: Sparkles,
  dataset: Database,
  architecture: Cpu,
  validation: BadgeCheck,
  continuous: RefreshCw,
};

export function FeatureCard({
  item,
  index,
}: {
  item: FeatureItem;
  index: number;
}) {
  const Visual = VISUAL_MAP[item.visual];
  const Icon = ICON_MAP[item.visual];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      whileHover={{ y: -4 }}
      transition={{
        opacity: { duration: 0.6, delay: index * 0.08, ease: EASE },
        y: { duration: 0.4, ease: EASE },
      }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] transition-colors duration-500 hover:border-white/[0.18]"
    >
      <div className="relative flex h-[260px] items-center justify-center overflow-hidden border-b border-white/[0.06] bg-[radial-gradient(circle_at_50%_30%,rgba(94,179,255,0.08),transparent_60%)]">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }} />
        <Visual />
      </div>

      <div className="flex flex-col gap-4 p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.1] bg-white/[0.03] text-slate-400 transition-colors group-hover:border-sky-500/40 group-hover:text-sky-300">
              <Icon className="size-3.5" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              {String(index + 1).padStart(2, "0")} · {item.label}
            </span>
          </div>
          <ArrowUpRight className="size-4 text-slate-600 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {item.title}
        </h3>
        <p className="text-[14px] leading-relaxed text-slate-400">
          {item.desc}
        </p>
      </div>
    </motion.article>
  );
}

export function FeatureGrid({ items }: { items: FeatureItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
      {items.map((item, i) => (
        <FeatureCard key={item.title} item={item} index={i} />
      ))}
    </div>
  );
}

export const HOME_FEATURES: FeatureItem[] = [
  {
    label: "Analysis",
    visual: "neural",
    title: "Neural Data Mapping",
    desc: "Automatically categorize and link complex neurobiological data points with 99.8% accuracy using our LLM-driven parser.",
  },
  {
    label: "Prediction",
    visual: "predictive",
    title: "Predictive Outcomes",
    desc: "Simulate trial results based on historical cohorts to identify potential bottlenecks before they impact your timeline.",
  },
  {
    label: "Compliance",
    visual: "compliance",
    title: "Immutable Compliance",
    desc: "Enterprise-grade security with audit trails logged on a private ledger, ensuring absolute data integrity and regulatory readiness.",
  },
  {
    label: "Reporting",
    visual: "report",
    title: "Automated Reporting",
    desc: "Generate publication-ready reports and visualization suites with a single click, formatted for FDA and EMA submissions.",
  },
];
