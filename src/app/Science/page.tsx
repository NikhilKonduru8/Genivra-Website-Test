import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Genivra Insights",
  description: "Discover the science behind Genivra AI. Proprietary CNS dataset, multi-modal AI architecture, and FDA-validated methodology.",
};

export default function SciencePage() {
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
          The Science Behind <br />
          <span className="text-slate-400">Genivra AI</span>
        </h1>
        <p className="max-w-3xl text-lg text-slate-400">
          Our AI models are built on rigorous scientific principles, trained on decades of CNS clinical trial data, and validated against real-world outcomes.
        </p>
      </div>

      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-semibold text-white">Methodology</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { icon: "database", title: "Proprietary CNS Dataset", desc: "Our models are trained on a curated database of 10,000+ neurological and psychiatric clinical trials spanning Alzheimer\u2019s, Parkinson\u2019s, depression, schizophrenia, and 50+ other indications. Each trial is annotated with outcomes, design characteristics, and biomarker data." },
            { icon: "memory", title: "Multi-Modal AI Architecture", desc: "We combine transformer-based language models for protocol analysis with graph neural networks for biomarker correlation and gradient-boosted trees for outcome prediction. This ensemble approach achieves 73% accuracy on trial outcome forecasting." },
            { icon: "fact_check", title: "Regulatory Validation", desc: "Our analytical methods have been reviewed by FDA statisticians and validated for use in regulatory submissions. We maintain full audit trails and reproducibility documentation." },
            { icon: "autorenew", title: "Continuous Learning", desc: "Our models are continuously updated as new trial results, regulatory decisions, and published research become available. We retrain on a quarterly basis to incorporate the latest CNS clinical development insights." },
          ].map((card) => (
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

      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-semibold text-white">Peer-Reviewed Research</h2>
        <div className="rounded-3xl bg-white/[0.02] border border-white/5 p-8">
          <p className="text-slate-400 leading-relaxed">
            Genivra&apos;s methodology draws from established frameworks in clinical trial design optimization, leveraging evidence-based approaches to identify factors associated with trial success and failure. Our team includes experts in neuropharmacology, biostatistics, and machine learning who collaborate to ensure our insights are both scientifically rigorous and clinically actionable.
          </p>
        </div>
      </section>

      <section className="rounded-3xl bg-slate-800 p-12 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-emerald-400/20 opacity-50" />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4">Want to Learn More?</h2>
          <p className="mb-8 text-slate-400">Schedule a technical deep-dive to explore our AI architecture and validation methodology.</p>
          <a href="/#join-waitlist" className="inline-block rounded-full bg-sky-500 px-10 py-4 font-semibold text-white transition hover:bg-sky-400">Get Access</a>
        </div>
      </section>
    </div>
  );
}
