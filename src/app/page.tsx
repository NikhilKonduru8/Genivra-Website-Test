import Link from "next/link";
import HeroWaitlistForm from "@/components/HeroWaitlistForm";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-40 overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[800px]">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path className="text-white/10" d="M360 120 L660 150 L1020 210 M180 270 L480 360 L840 420 L900 90 M300 510 L480 360 M840 420 L1020 210" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Now in Private Alpha
          </div>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-8 tracking-tight leading-tight">
            CNS Trials, <br />
            <span className="text-slate-400">Decoded by AI</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Unlock the complexities of clinical data with Genivra&apos;s proprietary neural processing engine. Designed for precision biotech and clinical researchers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#join-waitlist"
              className="w-full sm:w-auto px-10 py-5 bg-sky-500 text-white font-medium rounded-full shadow-xl shadow-sky-500/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              Request a Demo
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <Link
              href="/PlatformFeatures"
              className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-center"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">
              Built for the future of clinical intelligence.
            </h2>
            <p className="text-slate-400">
              Streamline your entire clinical trial lifecycle with intelligent automation and predictive modeling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: "psychology", title: "Neural Data Mapping", desc: "Automatically categorize and link complex neurobiological data points with 99.8% accuracy using our LLM-driven parser.", hoverColor: "group-hover:bg-sky-500" },
              { icon: "insights", title: "Predictive Outcomes", desc: "Simulate trial results based on historical cohorts to identify potential bottlenecks before they impact your timeline.", hoverColor: "group-hover:bg-emerald-500" },
              { icon: "security", title: "Immutable Compliance", desc: "Enterprise-grade security with audit trails logged on a private ledger, ensuring absolute data integrity and regulatory readiness.", hoverColor: "group-hover:bg-sky-500" },
              { icon: "auto_awesome", title: "Automated Reporting", desc: "Generate publication-ready reports and visualization suites with a single click, formatted for FDA and EMA submissions.", hoverColor: "group-hover:bg-emerald-500" },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-sky-500/30 transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 ${feature.hoverColor} group-hover:text-white transition-colors duration-500`}>
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "450+", label: "Trials Managed" },
            { value: "40%", label: "Faster Processing" },
            { value: "12M+", label: "Data Points" },
            { value: "99%", label: "Retention Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-sans font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400 font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="rounded-3xl bg-slate-800 p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-emerald-400/20 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-8">
                Ready to accelerate your research?
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                Join leading biotech teams who trust Genivra for their critical intelligence needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#join-waitlist"
                  className="w-full sm:w-auto px-8 py-4 bg-sky-500 text-white font-medium rounded-full hover:bg-sky-400 transition-colors"
                >
                  Start Free Trial
                </a>
                <a
                  href="#join-waitlist"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 border border-white/10 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
