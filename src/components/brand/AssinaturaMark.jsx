import TriangleMark from "./TriangleMark";

/**
 * Assinatura oficial: ▲ SAGA | PASS — replicada com tipografia ao vivo.
 * Variants: "dark" (texto branco), "light" (texto preto, fundo claro), "accent" (texto laranja).
 */
export default function AssinaturaMark({ tone = "dark", size = "md", className = "" }) {
  const sizes = {
    sm: { triangle: 16, text: "text-base", pass: "text-xs" },
    md: { triangle: 22, text: "text-xl", pass: "text-sm" },
    lg: { triangle: 30, text: "text-3xl", pass: "text-base" },
    xl: { triangle: 44, text: "text-5xl", pass: "text-xl" },
  };
  const s = sizes[size];

  const tones = {
    dark: { fg: "text-white", divider: "bg-white/30" },
    light: { fg: "text-black", divider: "bg-black/30" },
    accent: { fg: "text-[var(--accent)]", divider: "bg-[var(--accent)]/40" },
  };
  const t = tones[tone];

  return (
    <div className={`inline-flex items-center gap-3 ${t.fg} ${className}`}>
      <TriangleMark size={s.triangle} color="currentColor" />
      <span className={`font-display tracking-[0.04em] ${s.text}`}>SAGA</span>
      <span className={`w-px ${s.text === "text-base" ? "h-4" : "h-5"} ${t.divider}`} />
      <span
        className={`font-semibold uppercase tracking-[0.4em] ${s.pass} opacity-80`}
      >
        Pass
      </span>
    </div>
  );
}
