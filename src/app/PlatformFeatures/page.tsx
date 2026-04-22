import Link from "next/link";
import type { Metadata } from "next";
import {
  Brain,
  LineChart,
  AlertTriangle,
  Database,
  Network,
  RefreshCw,
  SlidersHorizontal,
  Users,
  FileText,
  Lock,
  ShieldCheck,
  BadgeCheck,
  ArrowLeft,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Platform Features | Genivra Insights",
  description: "Comprehensive AI-powered tools for CNS trial de-risking.",
};

type Card = { icon: LucideIcon; title: string; desc: string };
type Section = { title: string; cards: Card[] };

const sections: Section[] = [
  {
    title: "AI-Powered Analysis",
    cards: [
      { icon: Brain, title: "Neural Pattern Recognition", desc: "Our proprietary AI models are trained on over 10,000 CNS trials spanning two decades. We identify success patterns that traditional statistical methods miss." },
      { icon: LineChart, title: "Predictive Modeling", desc: "Forecast trial outcomes with 73% accuracy using multi-modal data integration including biomarkers, patient demographics, and protocol designs." },
      { icon: AlertTriangle, title: "Failure Pattern Detection", desc: "Automatically flag red flags in trial design, patient selection criteria, and endpoint choices that have historically led to failure in similar CNS indications." },
    ],
  },
  {
    title: "Data Intelligence",
    cards: [
      { icon: Database, title: "Comprehensive CNS Database", desc: "Access curated data from Alzheimer\u2019s, Parkinson\u2019s, ALS, depression, schizophrenia, and 50+ other neurological and psychiatric indications." },
      { icon: Network, title: "Biomarker Correlation Engine", desc: "Cross-reference your biomarkers against thousands of successful and failed trials to identify predictive signals for efficacy and safety." },
      { icon: RefreshCw, title: "Real-Time Data Updates", desc: "Our database is continuously updated with new trial results, regulatory decisions, and published research to keep insights current." },
    ],
  },
  {
    title: "Workflow & Collaboration",
    cards: [
      { icon: SlidersHorizontal, title: "Protocol Optimization", desc: "Generate data-driven recommendations for patient inclusion/exclusion criteria, primary endpoints, dose selection, and trial duration." },
      { icon: Users, title: "Team Collaboration Tools", desc: "Share insights, annotations, and reports across clinical development, medical affairs, and executive teams with role-based permissions." },
      { icon: FileText, title: "Instant Report Generation", desc: "Create investor-ready or regulatory-focused reports in minutes, complete with visualizations and supporting evidence." },
    ],
  },
  {
    title: "Security & Compliance",
    cards: [
      { icon: Lock, title: "Enterprise-Grade Security", desc: "SOC 2 Type II certified infrastructure with AES-256 encryption at rest and TLS 1.3 in transit." },
      { icon: ShieldCheck, title: "HIPAA Compliance", desc: "Full HIPAA compliance for handling patient-level data with audit trails, access logs, and automated data retention policies." },
      { icon: BadgeCheck, title: "FDA Validation", desc: "Our analytical methods and AI models have been reviewed and validated by FDA statisticians for use in regulatory submissions." },
    ],
  },
];

export default function PlatformFeaturesPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-[13px] font-medium text-slate-500 transition-colors hover:text-white"
      >
        <ArrowLeft className="size-3.5" />
        Back to Home
      </Link>

      <header className="mb-20 border-b border-white/[0.06] pb-16 md:mb-28 md:pb-20">
        <p className="eyebrow mb-5">Platform</p>
        <h1 className="display-xxl max-w-5xl text-5xl text-white sm:text-7xl md:text-[6.5rem]">
          Everything You Need to{" "}
          <span className="text-slate-500">De-Risk CNS Trials.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-slate-400 sm:text-base">
          Comprehensive AI-powered tools designed specifically for neurological and psychiatric drug development.
        </p>
      </header>

      {sections.map((section, sIdx) => (
        <section key={section.title} className="mb-20 md:mb-28">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-2">Section {String(sIdx + 1).padStart(2, "0")}</p>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {section.title}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {section.cards.map((card, cIdx) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.035] to-white/[0.01] p-7 transition-all duration-500 hover:border-white/[0.18] sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="eyebrow">
                      {String(cIdx + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="size-4 text-slate-600 transition-colors group-hover:text-white" />
                  </div>
                  <div className="mt-8 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.03] text-slate-300 transition-colors group-hover:border-sky-500/40 group-hover:text-sky-300">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-400">
                    {card.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <CtaBlock
        heading="Ready to See It in Action?"
        body="Schedule a personalized demo to see how Genivra can transform your CNS trial strategy."
      />
    </div>
  );
}

function CtaBlock({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-sky-500/[0.08] via-white/[0.02] to-transparent px-8 py-14 sm:px-14 sm:py-20 md:px-20">
      <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-sky-500/20 blur-[120px]" />
      <div className="relative z-10 max-w-3xl">
        <p className="eyebrow mb-5">Get Started</p>
        <h2 className="display-xl text-3xl text-white sm:text-4xl md:text-5xl">
          {heading}
        </h2>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-400">
          {body}
        </p>
        <div className="mt-10">
          <a
            href="/#join-waitlist"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Get Access
          </a>
        </div>
      </div>
    </section>
  );
}
