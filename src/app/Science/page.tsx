import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FeatureGrid, type FeatureItem } from "@/components/ui/feature";

export const metadata: Metadata = {
  title: "Research | Genivra Insights",
  description:
    "Discover the science behind Genivra AI. Proprietary CNS dataset, multi-modal AI architecture, and FDA-validated methodology.",
};

const methodology: FeatureItem[] = [
  {
    label: "Dataset",
    visual: "dataset",
    title: "Proprietary CNS Dataset",
    desc: "Our models are trained on a curated database of 10,000+ neurological and psychiatric clinical trials spanning Alzheimer\u2019s, Parkinson\u2019s, depression, schizophrenia, and 50+ other indications. Each trial is annotated with outcomes, design characteristics, and biomarker data.",
  },
  {
    label: "Architecture",
    visual: "architecture",
    title: "Multi-Modal AI Architecture",
    desc: "We combine transformer-based language models for protocol analysis with graph neural networks for biomarker correlation and gradient-boosted trees for outcome prediction. This ensemble approach achieves 73% accuracy on trial outcome forecasting.",
  },
  {
    label: "Validation",
    visual: "validation",
    title: "Regulatory Validation",
    desc: "Our analytical methods have been reviewed by FDA statisticians and validated for use in regulatory submissions. We maintain full audit trails and reproducibility documentation.",
  },
  {
    label: "Learning",
    visual: "continuous",
    title: "Continuous Learning",
    desc: "Our models are continuously updated as new trial results, regulatory decisions, and published research become available. We retrain on a quarterly basis to incorporate the latest CNS clinical development insights.",
  },
];

export default function SciencePage() {
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
        <p className="eyebrow mb-5">Research</p>
        <h1 className="display-xxl max-w-5xl text-5xl text-white sm:text-7xl md:text-[6.5rem]">
          The Science Behind{" "}
          <span className="text-slate-500">Genivra AI.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-slate-400 sm:text-base">
          Our AI models are built on rigorous scientific principles, trained on decades of CNS clinical trial data, and validated against real-world outcomes.
        </p>
      </header>

      <section className="mb-20 md:mb-28">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Methodology
          </h2>
        </div>
        <FeatureGrid items={methodology} />
      </section>

      <section className="mb-20 md:mb-28">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Peer-Reviewed Research
        </h2>
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-12">
          <p className="text-[15px] leading-relaxed text-slate-400 sm:text-base">
            Genivra&apos;s methodology draws from established frameworks in clinical trial design optimization, leveraging evidence-based approaches to identify factors associated with trial success and failure. Our team includes experts in neuropharmacology, biostatistics, and machine learning who collaborate to ensure our insights are both scientifically rigorous and clinically actionable.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-sky-500/[0.08] via-white/[0.02] to-transparent px-8 py-14 sm:px-14 sm:py-20 md:px-20">
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow mb-5">Get Started</p>
          <h2 className="display-xl text-3xl text-white sm:text-4xl md:text-5xl">
            Want to Learn More?
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-400">
            Schedule a technical deep-dive to explore our AI architecture and validation methodology.
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
    </div>
  );
}
