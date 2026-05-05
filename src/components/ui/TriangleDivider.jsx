import { motion } from "framer-motion";
import TriangleMark from "../brand/TriangleMark";

/**
 * Divisor com o triângulo oficial SAGA centralizado entre duas linhas finas laranja.
 */
export default function TriangleDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-6 w-full ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-[var(--accent)]/60" />
      <motion.div
        whileInView={{ rotate: [0, 6, 0] }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-[var(--accent)]"
      >
        <TriangleMark size={20} color="currentColor" />
      </motion.div>
      <span className="h-px flex-1 bg-gradient-to-r from-[var(--accent)]/60 via-white/15 to-transparent" />
    </div>
  );
}
