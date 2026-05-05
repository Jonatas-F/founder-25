import { motion } from "framer-motion";

/**
 * Stamp circular "Acesso Completo" — referência visual do brandbook
 * (selo wax-style com texto curvado em torno e estrelas).
 */
export default function AccessStamp({
  size = 120,
  text = "ACESSO COMPLETO",
  className = "",
}) {
  const radius = size / 2;
  // Texto curvado em torno do círculo (top half)
  const id = "stamp-arc";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.6, duration: 0.7, type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ rotate: 2 }}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
        <defs>
          <path id={id} d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
          <radialGradient id="stamp-bg">
            <stop offset="60%" stopColor="rgba(40,12,4,1)" />
            <stop offset="100%" stopColor="rgba(80,24,8,1)" />
          </radialGradient>
        </defs>

        {/* Outer ring */}
        <circle cx="100" cy="100" r="92" fill="url(#stamp-bg)" stroke="var(--accent)" strokeWidth="3" />
        {/* Inner ring */}
        <circle cx="100" cy="100" r="78" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.7" />

        {/* Curved text (top arc) */}
        <text
          fontSize="14"
          fontWeight="900"
          fontFamily="var(--font-display)"
          fill="var(--accent)"
          letterSpacing="3"
        >
          <textPath href={`#${id}`} startOffset="25%" textAnchor="middle">
            {text}
          </textPath>
        </text>

        {/* Stars left/right */}
        {[40, 160].map((cx) => (
          <g key={cx} fill="var(--accent)">
            <polygon
              points={`${cx},90 ${cx + 3},97 ${cx + 10},97 ${cx + 4.5},101 ${cx + 7},108 ${cx},104 ${cx - 7},108 ${cx - 4.5},101 ${cx - 10},97 ${cx - 3},97`}
            />
          </g>
        ))}

        {/* Center text */}
        <text
          x="100"
          y="115"
          textAnchor="middle"
          fontSize="22"
          fontWeight="900"
          fill="var(--accent)"
          fontFamily="var(--font-display)"
          letterSpacing="-1"
        >
          FOUNDER
        </text>
        <text
          x="100"
          y="138"
          textAnchor="middle"
          fontSize="26"
          fontWeight="900"
          fill="var(--accent)"
          fontFamily="var(--font-display)"
          letterSpacing="-1"
        >
          25
        </text>
      </svg>
    </motion.div>
  );
}
