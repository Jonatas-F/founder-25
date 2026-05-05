import { motion } from "framer-motion";

/**
 * Linhas de "circuito" tech com nós laranja — referência das peças
 * "Tudo começa pelo seu objetivo" e "Uma plataforma para guiar sua evolução".
 */
export default function CircuitLines({ className = "", animate = true }) {
  const lines = [
    "M 0 80 L 200 80 L 220 100 L 380 100",
    "M 0 200 L 120 200 L 140 180 L 260 180 L 280 200 L 420 200",
    "M 0 320 L 80 320 L 100 340 L 200 340 L 220 320 L 360 320 L 380 340 L 480 340",
    "M 480 60 L 380 60 L 360 80 L 280 80 L 260 60 L 160 60",
    "M 480 260 L 360 260 L 340 240 L 220 240 L 200 260 L 80 260",
  ];
  const nodes = [
    { x: 220, y: 100 },
    { x: 380, y: 100 },
    { x: 140, y: 180 },
    { x: 280, y: 200 },
    { x: 100, y: 340 },
    { x: 220, y: 320 },
    { x: 380, y: 340 },
    { x: 360, y: 80 },
    { x: 340, y: 240 },
  ];

  return (
    <svg
      viewBox="0 0 480 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={`block w-full h-full ${className}`}
    >
      <defs>
        <linearGradient id="circuitGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,90,31,0)" />
          <stop offset="50%" stopColor="rgba(255,90,31,0.45)" />
          <stop offset="100%" stopColor="rgba(255,90,31,0)" />
        </linearGradient>
      </defs>

      {lines.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="url(#circuitGrad)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="square"
          initial={animate ? { pathLength: 0, opacity: 0 } : false}
          whileInView={animate ? { pathLength: 1, opacity: 1 } : undefined}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.6, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}

      {nodes.map((n, i) => (
        <motion.g
          key={i}
          initial={animate ? { opacity: 0, scale: 0 } : false}
          whileInView={animate ? { opacity: 1, scale: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ delay: 1.2 + i * 0.06, duration: 0.4 }}
        >
          <circle cx={n.x} cy={n.y} r="3" fill="var(--accent)" />
          <circle cx={n.x} cy={n.y} r="6" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
        </motion.g>
      ))}
    </svg>
  );
}
