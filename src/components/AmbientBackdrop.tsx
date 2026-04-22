export default function AmbientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-[20%] left-1/2 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-sky-500/[0.04] blur-[120px]" />
      <div className="absolute -bottom-[20%] right-0 h-[50vh] w-[50vw] rounded-full bg-sky-400/[0.03] blur-[120px]" />
    </div>
  );
}
