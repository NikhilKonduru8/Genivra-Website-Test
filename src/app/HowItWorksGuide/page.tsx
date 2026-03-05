import Link from "next/link";
import type { Metadata } from "next";

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
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Link href="/" className="mb-12 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <div className="mb-20">
        <h1 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">
          How Genivra Works: <br />
          <span className="text-slate-400">Step-by-Step</span>
        </h1>
        <p className="max-w-3xl text-lg text-slate-400">
          From data upload to trial optimization, here&apos;s a detailed walkthrough of how our platform transforms your CNS trial strategy with AI-powered insights.
        </p>
      </div>

      {steps.map((step) => (
        <section key={step.num} className="mb-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-2xl font-sans font-bold text-sky-400">{step.num}</span>
            <h2 className="text-2xl font-semibold text-white">{step.title}</h2>
          </div>
          <p className="mb-8 text-slate-400">{step.desc}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {step.cards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-sky-500/20 transition-all duration-500">
                <h3 className="mb-2 font-semibold text-white">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="rounded-3xl bg-slate-800 p-12 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-emerald-400/20 opacity-50" />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-slate-400">See Genivra in action with a personalized demo using your trial data.</p>
          <a href="/#join-waitlist" className="inline-block rounded-full bg-sky-500 px-10 py-4 font-semibold text-white transition hover:bg-sky-400">Get Access</a>
        </div>
      </section>
    </div>
  );
}
