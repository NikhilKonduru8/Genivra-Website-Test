import Link from "next/link";
import HeroWaitlistForm from "@/components/HeroWaitlistForm";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Promptic-style: split headline + inline waitlist */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-4 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
              Early Access Available Now
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Decode the Future
            </h1>
            <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-emerald-400 md:text-5xl lg:text-6xl">
              Of Neuro Trials
            </h2>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              For pharmaceutical and biotech teams that want to de-risk CNS development, predict outcomes, and avoid costly trial failures—test our AI now.
            </p>
            <a
              href="#why-choose"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-emerald-500/50 hover:bg-white/5"
            >
              Learn how it works
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
          <div className="w-full shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:max-w-md">
            <HeroWaitlistForm />
          </div>
        </div>
      </section>

      {/* Stats - Moved up like Promptic */}
      <section className="border-y border-white/10 bg-white/[0.02] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "6,372+", label: "CNS Trials Analyzed", sub: "Historical data powering insights" },
              { value: "10,000+", label: "Pharma on Waitlist", sub: "Join the growing community" },
              { value: "73%", label: "Prediction Accuracy", sub: "On trial outcome forecasting" },
              { value: "25%", label: "Faster Decisions", sub: "Accelerated protocol design" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-1 text-3xl font-bold text-emerald-400 md:text-4xl">{stat.value}</div>
                <div className="font-medium">{stat.label}</div>
                <div className="mt-0.5 text-sm text-zinc-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="border-y border-white/10 bg-white/5 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-8 text-center text-sm text-zinc-500">
            Trusted by leading pharmaceutical & biotech companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <span className="text-lg font-semibold text-white">NEUROTECH</span>
            <span className="text-lg font-semibold text-white">BIOGENIX</span>
            <span className="text-lg font-semibold text-white">SYNAPTIC</span>
            <span className="text-lg font-semibold text-white">CORTEX LABS</span>
            <span className="text-lg font-semibold text-white">NEURAL DYNAMICS</span>
          </div>
        </div>
      </section>

      {/* Why Choose Genivra - Promptic-style */}
      <section id="why-choose" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Why Choose Genivra?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            The most effective way to de-risk CNS clinical development through AI-powered pattern recognition and data-driven insights
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-500/30 hover:bg-white/[0.07]">
            <h4 className="mb-4 text-xl font-semibold">Analyze Historical CNS Trials</h4>
            <p className="mb-6 text-zinc-400">
              Deep-dive into decades of neurological trial data. Our AI extracts patterns from
              thousands of studies to reveal what drives outcomes in CNS research.
            </p>
            <ul className="mb-6 space-y-2 text-sm text-zinc-400">
              <li>• Multi-indication support</li>
              <li>• Real-time data processing</li>
              <li>• 10,000+ trials analyzed</li>
            </ul>
            <Link
              href="/PlatformFeatures"
              className="inline-flex items-center gap-2 text-emerald-400 transition hover:text-emerald-300"
            >
              Learn more
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-500/30 hover:bg-white/[0.07]">
            <h4 className="mb-4 text-xl font-semibold">Identify Failure Patterns</h4>
            <p className="mb-6 text-zinc-400">
              Uncover hidden reasons behind trial failures before they happen. Our pattern recognition
              surfaces risk factors that traditional analysis misses.
            </p>
            <ul className="mb-6 space-y-2 text-sm text-zinc-400">
              <li>• Dropout prediction</li>
              <li>• Protocol optimization</li>
              <li>• Predictive risk scoring</li>
            </ul>
            <Link
              href="/PlatformFeatures"
              className="inline-flex items-center gap-2 text-emerald-400 transition hover:text-emerald-300"
            >
              Learn more
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-500/30 hover:bg-white/[0.07]">
            <h4 className="mb-4 text-xl font-semibold">Flag Success Biomarkers</h4>
            <p className="mb-6 text-zinc-400">
              Discover the biomarkers that correlate with positive outcomes. Make data-driven
              decisions on patient selection and endpoint design.
            </p>
            <ul className="mb-6 space-y-2 text-sm text-zinc-400">
              <li>• Outcome prediction</li>
              <li>• Enrichment strategies</li>
              <li>• Biomarker discovery</li>
            </ul>
            <Link
              href="/PlatformFeatures"
              className="inline-flex items-center gap-2 text-emerald-400 transition hover:text-emerald-300"
            >
              Learn more
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/PlatformFeatures"
            className="inline-flex items-center gap-2 text-emerald-400 transition hover:text-emerald-300"
          >
            Explore All Platform Features
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-white/10 bg-white/[0.02] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
              How It Works
            </h2>
            <h3 className="text-3xl font-bold md:text-4xl">From Data to Discovery</h3>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              A streamlined workflow that transforms complex clinical data into clear, actionable
              intelligence
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Connect Your Data",
                desc: "Securely integrate your historical trial data, protocols, and outcomes. Our platform supports all major clinical data formats.",
              },
              {
                step: "02",
                title: "AI Analysis",
                desc: "Our neural networks analyze patterns across your data and our proprietary database of 10,000+ CNS trials.",
              },
              {
                step: "03",
                title: "Generate Insights",
                desc: "Receive actionable recommendations on protocol design, patient selection, and biomarker strategies.",
              },
              {
                step: "04",
                title: "Optimize & Execute",
                desc: "Apply insights to your trial design. Track predictions against real outcomes to continuously improve.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-500/20"
              >
                <span className="mb-4 block text-2xl font-bold text-emerald-500/80">{item.step}</span>
                <h4 className="mb-3 text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/HowItWorksGuide"
              className="inline-flex items-center gap-2 text-emerald-400 transition hover:text-emerald-300"
            >
              See Detailed Step-by-Step Guide
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-400">
            Features
          </h2>
          <h3 className="text-3xl font-bold md:text-4xl">Built for CNS Excellence</h3>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Comprehensive tools designed specifically for neurological clinical development
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Neural Pattern Recognition",
              desc: "Advanced AI models trained on CNS-specific trial data to identify success patterns invisible to traditional analysis.",
            },
            {
              title: "Comprehensive CNS Database",
              desc: "Access to 10,000+ historical neurological trials spanning Alzheimer's, Parkinson's, depression, and more.",
            },
            {
              title: "Predictive Analytics",
              desc: "Forecast trial outcomes with 73% accuracy using biomarker correlation and protocol optimization algorithms.",
            },
            {
              title: "Enterprise Security",
              desc: "SOC 2 Type II certified infrastructure with end-to-end encryption for your sensitive clinical data.",
            },
            {
              title: "Real-Time Insights",
              desc: "Generate comprehensive trial risk assessments and recommendations in minutes, not months.",
            },
            {
              title: "Collaborative Workspace",
              desc: "Share insights across teams with role-based access and integrated communication tools.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20"
            >
              <h4 className="mb-2 font-semibold">{feature.title}</h4>
              <p className="text-sm text-zinc-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/Science"
            className="inline-flex items-center gap-2 text-emerald-400 transition hover:text-emerald-300"
          >
            Discover the Science Behind Our AI
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Final CTA - Promptic-style with inline waitlist */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-12 text-center md:p-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to De-Risk Your CNS Trials?
          </h2>
          <p className="mb-8 text-zinc-400">
            Join leading pharmaceutical companies using AI to transform neurological drug development
          </p>
          <div className="mx-auto max-w-md">
            <HeroWaitlistForm compact />
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Free initial consultation • No credit card required • Response within 24 hours
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              SOC 2 Certified
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              HIPAA Compliant
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              FDA Validated Methods
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
