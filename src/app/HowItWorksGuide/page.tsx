import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How It Works | Genivra Insights",
  description: "Step-by-step guide to transforming your CNS trial strategy with Genivra.",
};

const steps = [
  {
    num: "01",
    title: "Connect Your Data",
    desc: "Begin by securely uploading your trial data, biomarker results, and protocol documentation.",
    cards: [
      { title: "Data Input Options", desc: "Upload Excel files, CSVs, EDC exports, or connect directly to your clinical data warehouse via API. We support CDISC standards (SDTM, ADaM) for seamless integration." },
      { title: "What We Analyze", desc: "Protocol details, patient inclusion/exclusion criteria, dosing regimens, primary/secondary endpoints, biomarker data (blood, CSF, imaging), adverse events, and demographics." },
      { title: "Data Security", desc: "Your data is encrypted end-to-end (AES-256), stored in HIPAA-compliant infrastructure, and never used to train models accessible to other customers." },
      { title: "Typical Upload Time", desc: "Most customers complete data upload in 15-30 minutes. Our team provides hands-on support for complex datasets or legacy systems." },
    ],
  },
  {
    num: "02",
    title: "AI Analysis",
    desc: "Our AI engine compares your trial against 10,000+ historical CNS studies to identify patterns.",
    cards: [
      { title: "Comparative Analysis", desc: "We match your trial against similar studies by indication, mechanism of action, target population, and design characteristics." },
      { title: "Failure Pattern Detection", desc: "Our models flag protocol elements historically associated with failure\u2014such as overly broad inclusion criteria, suboptimal endpoints, or inappropriate trial duration." },
      { title: "Success Factor Identification", desc: "We identify which elements of successful trials (e.g., specific biomarker thresholds, patient enrichment strategies) are present or absent in your protocol." },
      { title: "Processing Time", desc: "Initial analysis completes in 5-10 minutes. Deep biomarker correlation and subgroup analyses may take 30-60 minutes for complex datasets." },
    ],
  },
  {
    num: "03",
    title: "Generate Insights",
    desc: "Receive actionable recommendations to optimize trial design and reduce failure risk.",
    cards: [
      { title: "Risk Assessment Report", desc: "A comprehensive report scoring your trial\u2019s success probability across multiple dimensions (patient selection, endpoint choice, dosing strategy, trial duration)." },
      { title: "Protocol Optimization", desc: "Data-driven suggestions for modifying inclusion/exclusion criteria, refining endpoints, adjusting dose selection, or implementing biomarker stratification." },
      { title: "Biomarker Insights", desc: "Identification of predictive biomarkers that correlate with success in similar trials, including thresholds for patient enrichment or stratification." },
      { title: "Benchmarking", desc: "See how your trial compares to industry averages and best-in-class designs for your indication, with specific areas for improvement highlighted." },
    ],
  },
  {
    num: "04",
    title: "Optimize & Execute",
    desc: "Implement recommendations and continuously monitor trial performance with ongoing support.",
    cards: [
      { title: "Implementation Support", desc: "Our clinical development experts help you translate AI insights into protocol amendments, statistical analysis plans, and regulatory submissions." },
      { title: "Ongoing Monitoring", desc: "Track your trial\u2019s progress against predictive benchmarks. Our platform flags emerging risks and provides adaptive recommendations." },
      { title: "Iterative Refinement", desc: "As new data becomes available (interim analyses, biomarker results), re-run analyses to refine predictions and adjust trial strategy in real-time." },
      { title: "Regulatory Readiness", desc: "Generate reports suitable for FDA/EMA submissions, including methodology descriptions, validation evidence, and supporting literature." },
    ],
  },
];

export default function HowItWorksGuidePage() {
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
        <p className="eyebrow mb-5">How It Works</p>
        <h1 className="display-xxl max-w-5xl text-5xl text-white sm:text-7xl md:text-[6.5rem]">
          How Genivra Works:{" "}
          <span className="text-slate-500">Step-by-Step.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-slate-400 sm:text-base">
          From data upload to trial optimization, here&apos;s a detailed walkthrough of how our platform transforms your CNS trial strategy with AI-powered insights.
        </p>
      </header>

      {steps.map((step) => (
        <section
          key={step.num}
          className="mb-16 border-t border-white/[0.06] pt-12 md:mb-24 md:pt-16"
        >
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="md:sticky md:top-28">
                <span className="display-xl block text-6xl text-slate-700 sm:text-7xl">
                  {step.num}
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed text-slate-400">
                  {step.desc}
                </p>
              </div>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                {step.cards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.035] sm:p-7"
                  >
                    <h3 className="text-[15px] font-semibold tracking-tight text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-slate-400">
                      {card.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="mt-8 relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-sky-500/[0.08] via-white/[0.02] to-transparent px-8 py-14 sm:px-14 sm:py-20 md:px-20">
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow mb-5">Get Started</p>
          <h2 className="display-xl text-3xl text-white sm:text-4xl md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-400">
            See Genivra in action with a personalized demo using your trial data.
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
