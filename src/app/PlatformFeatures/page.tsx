import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Features | Genivra Insights",
  description: "Comprehensive AI-powered tools for CNS trial de-risking.",
};

const sections = [
  {
    title: "AI-Powered Analysis",
    cards: [
      { icon: "psychology", title: "Neural Pattern Recognition", desc: "Our proprietary AI models are trained on over 10,000 CNS trials spanning two decades. We identify success patterns that traditional statistical methods miss." },
      { icon: "model_training", title: "Predictive Modeling", desc: "Forecast trial outcomes with 73% accuracy using multi-modal data integration including biomarkers, patient demographics, and protocol designs." },
      { icon: "warning", title: "Failure Pattern Detection", desc: "Automatically flag red flags in trial design, patient selection criteria, and endpoint choices that have historically led to failure in similar CNS indications." },
    ],
  },
  {
    title: "Data Intelligence",
    cards: [
      { icon: "database", title: "Comprehensive CNS Database", desc: "Access curated data from Alzheimer\u2019s, Parkinson\u2019s, ALS, depression, schizophrenia, and 50+ other neurological and psychiatric indications." },
      { icon: "hub", title: "Biomarker Correlation Engine", desc: "Cross-reference your biomarkers against thousands of successful and failed trials to identify predictive signals for efficacy and safety." },
      { icon: "sync", title: "Real-Time Data Updates", desc: "Our database is continuously updated with new trial results, regulatory decisions, and published research to keep insights current." },
    ],
  },
  {
    title: "Workflow & Collaboration",
    cards: [
      { icon: "tune", title: "Protocol Optimization", desc: "Generate data-driven recommendations for patient inclusion/exclusion criteria, primary endpoints, dose selection, and trial duration." },
      { icon: "groups", title: "Team Collaboration Tools", desc: "Share insights, annotations, and reports across clinical development, medical affairs, and executive teams with role-based permissions." },
      { icon: "description", title: "Instant Report Generation", desc: "Create investor-ready or regulatory-focused reports in minutes, complete with visualizations and supporting evidence." },
    ],
  },
  {
    title: "Security & Compliance",
    cards: [
      { icon: "security", title: "Enterprise-Grade Security", desc: "SOC 2 Type II certified infrastructure with AES-256 encryption at rest and TLS 1.3 in transit." },
      { icon: "verified_user", title: "HIPAA Compliance", desc: "Full HIPAA compliance for handling patient-level data with audit trails, access logs, and automated data retention policies." },
      { icon: "fact_check", title: "FDA Validation", desc: "Our analytical methods and AI models have been reviewed and validated by FDA statisticians for use in regulatory submissions." },
    ],
  },
];

export default function PlatformFeaturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Link href="/" className="mb-12 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <div className="mb-20">
        <h1 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">
          Everything You Need to <br />
          <span className="text-slate-400">De-Risk CNS Trials</span>
        </h1>
        <p className="max-w-3xl text-lg text-slate-400">
          Comprehensive AI-powered tools designed specifically for neurological and psychiatric drug development.
        </p>
      </div>

      {sections.map((section) => (
        <section key={section.title} className="mb-20">
          <h2 className="mb-8 text-2xl font-semibold text-white">{section.title}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {section.cards.map((card) => (
              <div key={card.title} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-sky-500/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-500">
                  <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="rounded-3xl bg-slate-800 p-12 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-emerald-400/20 opacity-50" />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4">Ready to See It in Action?</h2>
          <p className="mb-8 text-slate-400">Schedule a personalized demo to see how Genivra can transform your CNS trial strategy.</p>
          <a href="/#join-waitlist" className="inline-block rounded-full bg-sky-500 px-10 py-4 font-semibold text-white transition hover:bg-sky-400">Get Access</a>
        </div>
      </section>
    </div>
  );
}
