import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Science | Genivra Insights",
  description:
    "Discover the science behind Genivra AI. Proprietary CNS dataset, multi-modal AI architecture, and FDA-validated methodology.",
};

export default function SciencePage() {
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
          The Science Behind{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Genivra AI
          </span>
        </h1>
        <p className="max-w-3xl text-lg text-zinc-400">
          Our AI models are built on rigorous scientific principles, trained on decades of CNS clinical
          trial data, and validated against real-world outcomes.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold">Methodology</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Proprietary CNS Dataset</h3>
            <p className="text-sm text-zinc-400">
              Our models are trained on a curated database of 10,000+ neurological and psychiatric
              clinical trials spanning Alzheimer&apos;s, Parkinson&apos;s, depression, schizophrenia, and
              50+ other indications. Each trial is annotated with outcomes, design characteristics,
              and biomarker data.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Multi-Modal AI Architecture</h3>
            <p className="text-sm text-zinc-400">
              We combine transformer-based language models for protocol analysis with graph neural
              networks for biomarker correlation and gradient-boosted trees for outcome prediction. This
              ensemble approach achieves 73% accuracy on trial outcome forecasting.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Regulatory Validation</h3>
            <p className="text-sm text-zinc-400">
              Our analytical methods have been reviewed by FDA statisticians and validated for use in
              regulatory submissions. We maintain full audit trails and reproducibility documentation.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-lg font-semibold">Continuous Learning</h3>
            <p className="text-sm text-zinc-400">
              Our models are continuously updated as new trial results, regulatory decisions, and
              published research become available. We retrain on a quarterly basis to incorporate the
              latest CNS clinical development insights.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold">Peer-Reviewed Research</h2>
        <p className="mb-8 text-zinc-400">
          Our approach is grounded in published research on CNS trial design, biomarker validation,
          and machine learning applications in clinical development.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-zinc-400">
            Genivra&apos;s methodology draws from established frameworks in clinical trial design
            optimization, leveraging evidence-based approaches to identify factors associated with
            trial success and failure. Our team includes experts in neuropharmacology, biostatistics,
            and machine learning who collaborate to ensure our insights are both scientifically
            rigorous and clinically actionable.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-12 text-center">
        <h2 className="mb-4 text-2xl font-bold">Want to Learn More?</h2>
        <p className="mb-8 text-zinc-400">
          Schedule a technical deep-dive to explore our AI architecture and validation methodology.
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
