import AssinaturaMark from "./brand/AssinaturaMark";

/**
 * Wrapper compatível com o uso anterior. Delega para AssinaturaMark.
 */
export default function LogoSaga({ withPass = true, tone = "dark", size = "md", className = "" }) {
  if (!withPass) {
    // Fallback: sem o "PASS" — usa o triangle + SAGA apenas
    const sz = size === "lg" ? 30 : size === "sm" ? 16 : 22;
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <svg width={sz} height={sz * 0.86} viewBox="0 0 100 86" aria-hidden="true">
          <path d="M50 4L96 84H78L50 36L22 84H4L50 4Z" fill="currentColor" />
          <path d="M50 30L70 64H58L50 50L42 64H30L50 30Z" fill="currentColor" opacity="0.55" />
        </svg>
        <span className="font-display tracking-[0.04em] text-lg">SAGA</span>
      </span>
    );
  }
  return <AssinaturaMark tone={tone} size={size} className={className} />;
}
