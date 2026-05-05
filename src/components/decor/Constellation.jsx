import { motion } from "framer-motion";

/**
 * Rede pentagonal — pontos com linhas conectando — usada como pano de fundo
 * da seção "Cada área abre um novo caminho".
 */
export default function Constellation({ className = "" }) {
  // Pontos de uma malha pentagonal estilizada
  const center = { x: 250, y: 240 };
  const ring = [
    { x: 250, y: 80 },
    { x: 410, y: 200 },
    { x: 350, y: 380 },
    { x: 150, y: 380 },
    { x: 90, y: 200 },
  ];
  const outerRing = [
    { x: 250, y: 30, label: "▲" },
    { x: 470, y: 160, label: "■" },
    { x: 380, y: 420, label: "✶" },
    { x: 120, y: 420, label: "◆" },
    { x: 30, y: 160, label: "●" },
  ];

  const lines = [
    // center to inner ring
    ...ring.map((r) => ({ x1: center.x, y1: center.y, x2: r.x, y2: r.y })),
    // inner ring polygon
    ...ring.map((r, i) => {
      const next = ring[(i + 1) % ring.length];
      return { x1: r.x, y1: r.y, x2: next.x, y2: next.y };
    }),
    // inner to outer
    ...ring.map((r, i) => ({ x1: r.x, y1: r.y, x2: outerRing[i].x, y2: outerRing[i].y })),
  ];

  return (
    <svg
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      className={className}
    >
      {lines.map((l, i) => (
        <motion.line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="rgba(255,90,31,0.25)"
          strokeWidth="0.8"
          strokeDasharray="2 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: i * 0.04 }}
        />
      ))}

      {/* Center node — Founder 25 */}
      <motion.circle
        cx={center.x}
        cy={center.y}
        r="22"
        fill="rgba(255,90,31,0.15)"
        stroke="var(--accent)"
        strokeWidth="2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
      <text
        x={center.x}
        y={center.y + 5}
        textAnchor="middle"
        fontSize="13"
        fontWeight="900"
        fill="var(--accent)"
        fontFamily="var(--font-display)"
      >
        25
      </text>

      {/* Inner ring nodes */}
      {ring.map((r, i) => (
        <motion.g
          key={`r${i}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 + i * 0.08 }}
        >
          <circle cx={r.x} cy={r.y} r="6" fill="var(--accent)" />
          <circle cx={r.x} cy={r.y} r="12" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
        </motion.g>
      ))}

      {/* Outer ring */}
      {outerRing.map((o, i) => (
        <motion.g
          key={`o${i}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 + i * 0.08 }}
        >
          <circle cx={o.x} cy={o.y} r="3" fill="rgba(255,90,31,0.5)" />
        </motion.g>
      ))}
    </svg>
  );
}
