import { motion } from "framer-motion";
import TriangleMark from "../brand/TriangleMark";

/**
 * Pequenos triângulos SAGA flutuando suavemente — pontuação visual
 * em transições e backgrounds.
 */
const POSITIONS = [
  { top: "8%", left: "6%", size: 28, delay: 0, rot: -8 },
  { top: "22%", left: "88%", size: 22, delay: 0.4, rot: 12 },
  { top: "62%", left: "4%", size: 18, delay: 0.8, rot: -4 },
  { top: "76%", left: "92%", size: 32, delay: 1.2, rot: 6 },
  { top: "44%", left: "70%", size: 14, delay: 0.6, rot: -10 },
  { top: "12%", left: "48%", size: 16, delay: 1.0, rot: 4 },
  { top: "84%", left: "34%", size: 20, delay: 0.3, rot: -6 },
];

export default function FloatingTriangles({ className = "", opacity = 0.18 }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {POSITIONS.map((p, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            opacity,
            color: "var(--accent)",
            rotate: `${p.rot}deg`,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6 + i * 0.5,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <TriangleMark size={p.size} color="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
