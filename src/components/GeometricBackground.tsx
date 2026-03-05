"use client";

export default function GeometricBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#05070a] pointer-events-none overflow-hidden opacity-60">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[800px]">
        <div className="neural-node w-1.5 h-1.5" style={{ top: "20%", left: "30%" }} />
        <div className="neural-node w-1 h-1" style={{ top: "25%", left: "55%" }} />
        <div className="neural-node w-2 h-2" style={{ top: "45%", left: "15%" }} />
        <div className="neural-node w-1.5 h-1.5" style={{ top: "60%", left: "40%" }} />
        <div className="neural-node w-1 h-1" style={{ top: "70%", left: "70%" }} />
        <div className="neural-node w-2 h-2" style={{ top: "35%", left: "85%" }} />
        <div className="neural-node w-1.5 h-1.5" style={{ top: "15%", left: "75%" }} />
        <div className="neural-node w-1 h-1" style={{ top: "85%", left: "25%" }} />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            className="text-white/10"
            d="M360 120 L660 150 L1020 210 M180 270 L480 360 L840 420 L900 90 M300 510 L480 360 M840 420 L1020 210"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle className="fill-sky-500" cx="360" cy="120" r="1.5" />
          <circle className="fill-sky-500" cx="660" cy="150" r="1.5" />
          <circle className="fill-sky-500" cx="1020" cy="210" r="1.5" />
        </svg>
      </div>
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-500/5 blur-[120px] rounded-full" />
    </div>
  );
}
