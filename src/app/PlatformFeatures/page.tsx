import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Features | Genivra Insights",
  description:
    "Comprehensive AI-powered tools for CNS trial de-risking. Neural pattern recognition, predictive modeling, biomarker discovery, and enterprise security.",
};

export default function PlatformFeaturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Link
        href="/"
        className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Everything You Need to{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            De-Risk CNS Trials
          </span>
        </h1>
        <p className="max-w-3xl text-lg text-zinc-400">
          Comprehensive AI-powered tools designed specifically for neurological and psychiatric drug
          development. From data analysis to protocol optimization, we provide the insights you need
          to succeed.
        </p>
      </div>

      {/* AI-Powered Analysis */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold">AI-Powered Analysis</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Neural Pattern Recognition</h3>
            <p className="text-sm text-zinc-400">
              Our proprietary AI models are trained on over 10,000 CNS trials spanning two decades. We
              identify success patterns that traditional statistical methods miss.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Predictive Modeling</h3>
            <p className="text-sm text-zinc-400">
              Forecast trial outcomes with 73% accuracy using multi-modal data integration including
              biomarkers, patient demographics, and protocol designs.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Failure Pattern Detection</h3>
            <p className="text-sm text-zinc-400">
              Automatically flag red flags in trial design, patient selection criteria, and endpoint
              choices that have historically led to failure in similar CNS indications.
            </p>
          </div>
        </div>
      </section>

      {/* Data Intelligence */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold">Data Intelligence</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Comprehensive CNS Database</h3>
            <p className="text-sm text-zinc-400">
              Access curated data from Alzheimer&apos;s, Parkinson&apos;s, ALS, depression, schizophrenia,
              and 50+ other neurological and psychiatric indications.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Biomarker Correlation Engine</h3>
            <p className="text-sm text-zinc-400">
              Cross-reference your biomarkers against thousands of successful and failed trials to
              identify predictive signals for efficacy and safety.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Real-Time Data Updates</h3>
            <p className="text-sm text-zinc-400">
              Our database is continuously updated with new trial results, regulatory decisions, and
              published research to keep insights current.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow & Collaboration */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold">Workflow & Collaboration</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Protocol Optimization</h3>
            <p className="text-sm text-zinc-400">
              Generate data-driven recommendations for patient inclusion/exclusion criteria, primary
              endpoints, dose selection, and trial duration.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Team Collaboration Tools</h3>
            <p className="text-sm text-zinc-400">
              Share insights, annotations, and reports across clinical development, medical affairs,
              and executive teams with role-based permissions.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Instant Report Generation</h3>
            <p className="text-sm text-zinc-400">
              Create investor-ready or regulatory-focused reports in minutes, complete with
              visualizations and supporting evidence from our database.
            </p>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold">Security & Compliance</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Enterprise-Grade Security</h3>
            <p className="text-sm text-zinc-400">
              SOC 2 Type II certified infrastructure with AES-256 encryption at rest and TLS 1.3 in
              transit. Your proprietary data never leaves your secure environment.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">HIPAA Compliance</h3>
            <p className="text-sm text-zinc-400">
              Full HIPAA compliance for handling patient-level data with audit trails, access logs,
              and automated data retention policies.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">FDA Validation</h3>
            <p className="text-sm text-zinc-400">
              Our analytical methods and AI models have been reviewed and validated by FDA
              statisticians for use in regulatory submissions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-12 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to See It in Action?</h2>
        <p className="mb-8 text-zinc-400">
          Schedule a personalized demo to see how Genivra can transform your CNS trial strategy.
        </p>
        <a
          href="/#join-waitlist"
          className="inline-block rounded-full bg-emerald-500 px-10 py-4 font-semibold text-white transition hover:bg-emerald-600"
        >
          Join Waitlist
        </a>
      </section>
    </div>
  );
}
