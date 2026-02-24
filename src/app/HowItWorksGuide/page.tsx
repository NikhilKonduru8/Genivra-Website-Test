import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Genivra Insights",
  description:
    "Step-by-step guide: Connect your data, AI analysis, generate insights, and optimize execution. Transform your CNS trial strategy with Genivra.",
};

export default function HowItWorksGuidePage() {
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
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-emerald-400">
          Complete Guide
        </p>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          How Genivra Works:{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Step-by-Step
          </span>
        </h1>
        <p className="max-w-3xl text-lg text-zinc-400">
          From data upload to trial optimization, here&apos;s a detailed walkthrough of how our
          platform transforms your CNS trial strategy with AI-powered insights.
        </p>
      </div>

      {/* Step 01 */}
      <section className="mb-20">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-3xl font-bold text-emerald-500">01</span>
          <h2 className="text-2xl font-bold">Connect Your Data</h2>
        </div>
        <p className="mb-8 text-zinc-400">
          Begin by securely uploading your trial data, biomarker results, and protocol documentation.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Data Input Options</h3>
            <p className="text-sm text-zinc-400">
              Upload Excel files, CSVs, EDC exports, or connect directly to your clinical data
              warehouse via API. We support CDISC standards (SDTM, ADaM) for seamless integration.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">What We Analyze</h3>
            <p className="text-sm text-zinc-400">
              Protocol details, patient inclusion/exclusion criteria, dosing regimens,
              primary/secondary endpoints, biomarker data (blood, CSF, imaging), adverse events, and
              patient demographics.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Data Security</h3>
            <p className="text-sm text-zinc-400">
              Your data is encrypted end-to-end (AES-256), stored in HIPAA-compliant infrastructure,
              and never used to train models accessible to other customers. You maintain full
              ownership and control.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Typical Upload Time</h3>
            <p className="text-sm text-zinc-400">
              Most customers complete data upload in 15-30 minutes. Our team provides hands-on
              support for complex datasets or legacy systems.
            </p>
          </div>
        </div>
      </section>

      {/* Step 02 */}
      <section className="mb-20">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-3xl font-bold text-emerald-500">02</span>
          <h2 className="text-2xl font-bold">AI Analysis</h2>
        </div>
        <p className="mb-8 text-zinc-400">
          Our AI engine compares your trial against 10,000+ historical CNS studies to identify
          patterns.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Comparative Analysis</h3>
            <p className="text-sm text-zinc-400">
              We match your trial against similar studies by indication, mechanism of action, target
              population, and design characteristics to identify the most relevant comparisons.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Failure Pattern Detection</h3>
            <p className="text-sm text-zinc-400">
              Our models flag protocol elements historically associated with failure—such as overly
              broad inclusion criteria, suboptimal endpoints, or inappropriate trial duration.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Success Factor Identification</h3>
            <p className="text-sm text-zinc-400">
              We identify which elements of successful trials (e.g., specific biomarker thresholds,
              patient enrichment strategies) are present or absent in your protocol.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Processing Time</h3>
            <p className="text-sm text-zinc-400">
              Initial analysis completes in 5-10 minutes. Deep biomarker correlation and subgroup
              analyses may take 30-60 minutes for complex datasets.
            </p>
          </div>
        </div>
      </section>

      {/* Step 03 */}
      <section className="mb-20">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-3xl font-bold text-emerald-500">03</span>
          <h2 className="text-2xl font-bold">Generate Insights</h2>
        </div>
        <p className="mb-8 text-zinc-400">
          Receive actionable recommendations to optimize trial design and reduce failure risk.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Risk Assessment Report</h3>
            <p className="text-sm text-zinc-400">
              A comprehensive report scoring your trial&apos;s success probability across multiple
              dimensions (patient selection, endpoint choice, dosing strategy, trial duration).
              Includes specific risk factors and severity ratings.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Protocol Optimization Recommendations</h3>
            <p className="text-sm text-zinc-400">
              Data-driven suggestions for modifying inclusion/exclusion criteria, refining endpoints,
              adjusting dose selection, or implementing biomarker stratification to improve trial
              outcomes.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Biomarker Insights</h3>
            <p className="text-sm text-zinc-400">
              Identification of predictive biomarkers that correlate with success in similar trials,
              including thresholds for patient enrichment or stratification.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Benchmarking</h3>
            <p className="text-sm text-zinc-400">
              See how your trial compares to industry averages and best-in-class designs for your
              indication, with specific areas for improvement highlighted.
            </p>
          </div>
        </div>
      </section>

      {/* Step 04 */}
      <section className="mb-20">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-3xl font-bold text-emerald-500">04</span>
          <h2 className="text-2xl font-bold">Optimize & Execute</h2>
        </div>
        <p className="mb-8 text-zinc-400">
          Implement recommendations and continuously monitor trial performance with ongoing support.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Implementation Support</h3>
            <p className="text-sm text-zinc-400">
              Our clinical development experts help you translate AI insights into protocol
              amendments, statistical analysis plans, and regulatory submissions.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Ongoing Monitoring</h3>
            <p className="text-sm text-zinc-400">
              Track your trial&apos;s progress against predictive benchmarks. Our platform flags
              emerging risks (e.g., higher-than-expected dropout rates) and provides adaptive
              recommendations.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Iterative Refinement</h3>
            <p className="text-sm text-zinc-400">
              As new data becomes available (interim analyses, biomarker results), re-run analyses to
              refine predictions and adjust trial strategy in real-time.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Regulatory Readiness</h3>
            <p className="text-sm text-zinc-400">
              Generate reports suitable for FDA/EMA submissions, including methodology descriptions,
              validation evidence, and supporting literature for AI-derived insights.
            </p>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold">Common Use Cases</h2>
        <p className="mb-8 text-zinc-400">
          How leading pharma and biotech companies use Genivra across the clinical development
          lifecycle
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Early Asset Evaluation</h3>
            <p className="text-sm text-zinc-400">
              Before committing to a Phase II program, assess your preclinical data and proposed
              trial design against historical outcomes to make go/no-go decisions.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Protocol Optimization</h3>
            <p className="text-sm text-zinc-400">
              Refine patient selection, endpoints, and dosing before trial initiation to maximize
              success probability and minimize wasted resources.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Mid-Trial Course Correction</h3>
            <p className="text-sm text-zinc-400">
              Use interim data to identify subgroups likely to respond, adjust sample size, or
              modify endpoints with regulatory agency alignment.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 font-semibold">Competitive Intelligence</h3>
            <p className="text-sm text-zinc-400">
              Analyze competitor trials in your indication space to identify their strategic
              advantages and inform your own development plan.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-12 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
        <p className="mb-8 text-zinc-400">
          See Genivra in action with a personalized demo using your trial data.
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
