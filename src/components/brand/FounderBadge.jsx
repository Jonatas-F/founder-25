import { motion } from "framer-motion";
import TriangleMark from "./TriangleMark";

/**
 * Badge circular oficial Founder 25 — reproduz fielmente o sistema de selos do brandbook.
 * Variants:
 *   - "lockup":   anel laranja + lockup "FOUN / DER 25" em duas linhas
 *   - "numeric":  anel laranja + numeral "25" gigante
 *   - "symbol":   anel laranja + triângulo SAGA centralizado
 *
 * Tones:
 *   - "dark":   fundo preto, texto branco/laranja, anel laranja
 *   - "filled": fundo laranja, texto preto
 *   - "outline": transparente, anel + texto laranja
 */
export default function FounderBadge({
  variant = "lockup",
  tone = "dark",
  size = 160,
  rotate = false,
  className = "",
}) {
  const ring = tone === "filled" ? "border-black/15" : "border-[var(--accent)]";
  const bg = {
    dark: "bg-black",
    filled: "bg-[var(--accent)]",
    outline: "bg-transparent",
  }[tone];
  const textPrimary = tone === "filled" ? "text-black" : "text-white";
  const textAccent = tone === "filled" ? "text-black" : "text-[var(--accent)]";

  const Wrapper = rotate ? motion.div : "div";
  const wrapperProps = rotate
    ? {
        animate: { rotate: 360 },
        transition: { duration: 30, repeat: Infinity, ease: "linear" },
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`relative inline-flex items-center justify-center rounded-full border-2 ${ring} ${bg} ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Inner subtle ring */}
      <span
        aria-hidden="true"
        className={`absolute inset-[6%] rounded-full border ${
          tone === "filled" ? "border-black/15" : "border-[var(--accent)]/30"
        }`}
      />

      {variant === "lockup" && (
        <div className="relative flex flex-col items-center font-display leading-[0.85] uppercase">
          <TriangleMark
            size={size * 0.13}
            className={textAccent}
            color="currentColor"
          />
          <span
            className={`mt-1 ${textPrimary}`}
            style={{ fontSize: size * 0.16, letterSpacing: "-0.02em" }}
          >
            Foun
          </span>
          <span
            className={textPrimary}
            style={{ fontSize: size * 0.16, letterSpacing: "-0.02em" }}
          >
            der
          </span>
          <span
            className={`mt-1 ${textAccent}`}
            style={{
              fontSize: size * 0.22,
              letterSpacing: "-0.04em",
              lineHeight: 0.8,
            }}
          >
            25
          </span>
        </div>
      )}

      {variant === "numeric" && (
        <span
          className={`font-display ${textAccent}`}
          style={{
            fontSize: size * 0.55,
            letterSpacing: "-0.06em",
            lineHeight: 0.8,
          }}
        >
          25
        </span>
      )}

      {variant === "symbol" && (
        <TriangleMark
          size={size * 0.5}
          className={textAccent}
          color="currentColor"
        />
      )}

      {/* Tiny tick marks at cardinal points (detail from brandbook) */}
      {[0, 90, 180, 270].map((deg) => (
        <span
          key={deg}
          aria-hidden="true"
          className={`absolute w-px h-2 ${
            tone === "filled" ? "bg-black/40" : "bg-[var(--accent)]/70"
          }`}
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-${size / 2 - 2}px)`,
          }}
        />
      ))}
    </Wrapper>
  );
}
