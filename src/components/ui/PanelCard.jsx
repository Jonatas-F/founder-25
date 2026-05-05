import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

/**
 * Card com estética "panel de HQ": borda preta espessa, fundo escuro com leve textura,
 * canto laranja quando destacado, levemente rotacionado para vibe quadrinho.
 */
export default function PanelCard({
  label,
  title,
  children,
  accent = false,
  tilt = 0,
  icon,
  className = "",
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, rotate: tilt * 0.6 }}
      style={{ rotate: `${tilt}deg` }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className={`relative bg-[var(--bg-elevated)] border-2 ${
        accent ? "border-[var(--accent)]" : "border-white/15"
      } rounded-md p-6 md:p-7 shadow-[0_18px_40px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}
    >
      {/* Halftone-ish texture using radial dots */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />
      {label && (
        <div
          className={`relative inline-flex items-center gap-2 px-3 py-1 mb-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] rounded-sm ${
            accent ? "bg-[var(--accent)] text-black" : "bg-white text-black"
          }`}
        >
          {label}
        </div>
      )}
      <div className="relative">
        {icon && <div className="mb-4 text-[var(--accent)]">{icon}</div>}
        {title && (
          <h3 className="font-display text-2xl md:text-3xl leading-tight mb-3">
            {title}
          </h3>
        )}
        {children && (
          <div className="text-white/70 leading-relaxed text-[0.95rem]">{children}</div>
        )}
      </div>
    </motion.div>
  );
}
