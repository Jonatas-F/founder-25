import { motion } from "framer-motion";

/**
 * Selo circular com anel laranja — linguagem do brandbook Founder 25.
 * Variants: "filled" (fundo laranja, texto preto) | "outline" (fundo preto, anel laranja).
 */
export default function CircleBadge({
  children,
  variant = "outline",
  size = 140,
  className = "",
  pulse = false,
}) {
  const isFilled = variant === "filled";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative inline-flex items-center justify-center rounded-full uppercase ${
        isFilled
          ? "bg-[var(--accent)] text-black"
          : "bg-black text-white border-2 border-[var(--accent)]"
      } ${className}`}
      style={{ width: size, height: size }}
    >
      {pulse && (
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-[var(--accent)]"
          animate={{ scale: [1, 1.18], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <span className="relative z-10 text-center font-display leading-tight">
        {children}
      </span>
    </motion.div>
  );
}
