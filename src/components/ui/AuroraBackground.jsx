import { motion } from "framer-motion";

/**
 * Fundo com blobs gradientes laranja respirando — usado em CTA e seções de destaque.
 */
export default function AuroraBackground({ intensity = 0.6, className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(255,90,31,${0.5 * intensity}) 0%, rgba(255,90,31,0) 60%)`,
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(230,71,21,${0.4 * intensity}) 0%, rgba(230,71,21,0) 65%)`,
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
