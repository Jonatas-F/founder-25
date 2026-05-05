import { motion, AnimatePresence } from "framer-motion";

/**
 * Skill-tree estilo RPG mostrando a jornada personalizada do ALUNO ao OBJETIVO.
 * Suporta múltiplos "presets" de carreira — cada um com rota destacada distinta.
 */

// Estrutura em losango — 1, 3, 5, 7, 5, 3, 1 = 25 nós (eco aos 25 anos SAGA)
const ROWS = [
  { y: 40, count: 1, spacing: 0 },
  { y: 130, count: 3, spacing: 130 },
  { y: 220, count: 5, spacing: 100 },
  { y: 310, count: 7, spacing: 75 },
  { y: 400, count: 5, spacing: 100 },
  { y: 490, count: 3, spacing: 130 },
  { y: 580, count: 1, spacing: 0 },
];
const CENTER_X = 300;

function buildNodes() {
  const nodes = [];
  ROWS.forEach((row, rowIndex) => {
    const startX = CENTER_X - ((row.count - 1) * row.spacing) / 2;
    for (let i = 0; i < row.count; i++) {
      nodes.push({
        id: `${rowIndex}-${i}`,
        rowIndex,
        col: i,
        x: startX + i * row.spacing,
        y: row.y,
      });
    }
  });
  return nodes;
}

function buildConnections(nodes) {
  const lines = [];
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    for (let j = 0; j < nodes.length; j++) {
      const b = nodes[j];
      if (b.rowIndex === a.rowIndex - 1) {
        const dx = Math.abs(b.x - a.x);
        if (dx <= 145) {
          lines.push({ from: a, to: b, key: `${a.id}->${b.id}` });
        }
      }
    }
  }
  return lines;
}

const NODES = buildNodes();
const CONNECTIONS = buildConnections(NODES);

// Cada carreira destaca um caminho distinto pela árvore — exemplos ilustrativos
export const CAREER_PRESETS = {
  characterDesign: {
    label: "Character Designer",
    objetivo: "Character Designer",
    category: "Design",
    icon: "lucide:user-square-2",
    path: ["6-0", "5-0", "4-1", "3-2", "2-1", "1-0", "0-0"],
    description: "Anatomia, sculpt, line-up, color script e portfólio focado em personagens.",
  },
  gameDesign: {
    label: "Game Designer",
    objetivo: "Game Designer",
    category: "Games",
    icon: "lucide:gamepad-2",
    path: ["6-0", "5-2", "4-3", "3-4", "2-3", "1-2", "0-0"],
    description: "Mecânicas, level design, game feel e protótipos jogáveis.",
  },
  audiovisual: {
    label: "Produtor Audiovisual",
    objetivo: "Produtor Audiovisual",
    category: "Audiovisual",
    icon: "lucide:clapperboard",
    path: ["6-0", "5-1", "4-2", "3-3", "2-2", "1-1", "0-0"],
    description: "Direção, captação, edição e pipelines integradas com IA.",
  },
  modelador3d: {
    label: "Modelador 3D",
    objetivo: "Modelador 3D",
    category: "3D",
    icon: "lucide:box",
    path: ["6-0", "5-2", "4-2", "3-2", "2-2", "1-0", "0-0"],
    description: "Modelagem hard-surface, sculpt orgânico e texturização para estúdios.",
  },
  motionDesign: {
    label: "Motion Designer",
    objetivo: "Motion Designer",
    category: "Audiovisual",
    icon: "lucide:sparkles",
    path: ["6-0", "5-0", "4-2", "3-4", "2-2", "1-1", "0-0"],
    description: "Animação, design em movimento e branding animado para marcas.",
  },
  vfxArtist: {
    label: "VFX Artist",
    objetivo: "VFX Artist",
    category: "3D",
    icon: "lucide:wand-2",
    path: ["6-0", "5-2", "4-3", "3-3", "2-1", "1-0", "0-0"],
    description: "Simulações, compositing e efeitos visuais para cinema, games e publicidade.",
  },
};

function isHighlightedConnection(from, to, pathIds) {
  const idxA = pathIds.indexOf(from.id);
  const idxB = pathIds.indexOf(to.id);
  if (idxA === -1 || idxB === -1) return false;
  return Math.abs(idxA - idxB) === 1;
}

export default function BuildTree({ careerKey = "characterDesign", compact = false, className = "" }) {
  const career = CAREER_PRESETS[careerKey] || CAREER_PRESETS.characterDesign;
  const pathIds = career.path;
  const isHighlightedNode = (id) => pathIds.includes(id);
  const labelText = compact ? career.objetivo.toUpperCase() : `OBJETIVO · ${career.objetivo.toUpperCase()}`;
  const labelSize = compact ? 16 : 13;

  return (
    <svg
      viewBox="0 0 600 620"
      preserveAspectRatio="xMidYMid meet"
      className={`block w-full h-auto ${className}`}
      aria-label={`Jornada personalizada — caminho para ${career.objetivo}`}
    >
      <defs>
        <linearGradient id="bt-line-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,90,31,0.95)" />
          <stop offset="100%" stopColor="rgba(255,140,80,0.6)" />
        </linearGradient>
        <radialGradient id="bt-node-glow">
          <stop offset="0%" stopColor="rgba(255,90,31,0.5)" />
          <stop offset="100%" stopColor="rgba(255,90,31,0)" />
        </radialGradient>
        <filter id="bt-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Linhas off-path (apagadas) */}
      {CONNECTIONS.filter((c) => !isHighlightedConnection(c.from, c.to, pathIds)).map((c) => (
        <line
          key={c.key}
          x1={c.from.x}
          y1={c.from.y}
          x2={c.to.x}
          y2={c.to.y}
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1.2"
        />
      ))}

      {/* Nós off-path (apagados) */}
      {NODES.filter((n) => !isHighlightedNode(n.id)).map((n) => (
        <g key={n.id} opacity="0.4">
          <circle cx={n.x} cy={n.y} r="9" fill="#0e0e10" stroke="rgba(255,255,255,0.18)" strokeWidth="1.3" />
          <circle cx={n.x} cy={n.y} r="2.5" fill="rgba(255,255,255,0.18)" />
        </g>
      ))}

      {/* Linhas laranja (rota destacada) — animadas ao trocar de preset */}
      <AnimatePresence mode="wait">
        <motion.g key={careerKey}>
          {CONNECTIONS.filter((c) => isHighlightedConnection(c.from, c.to, pathIds)).map(
            (c, i) => (
              <motion.line
                key={c.key}
                x1={c.from.x}
                y1={c.from.y}
                x2={c.to.x}
                y2={c.to.y}
                stroke="url(#bt-line-orange)"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#bt-glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeInOut" }}
              />
            )
          )}

          {NODES.filter((n) => isHighlightedNode(n.id)).map((n, i) => {
            const isEndpoint = n.rowIndex === 0 || n.rowIndex === ROWS.length - 1;
            return (
              <motion.g
                key={n.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + i * 0.12,
                  type: "spring",
                  stiffness: 320,
                  damping: 18,
                }}
              >
                <circle cx={n.x} cy={n.y} r="22" fill="url(#bt-node-glow)" />
                {isEndpoint && (
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r="14"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 1 + i * 0.1,
                    }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  />
                )}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={isEndpoint ? 12 : 10}
                  fill="#0e0e10"
                  stroke="var(--accent)"
                  strokeWidth="2.4"
                  filter="url(#bt-glow)"
                />
                <circle cx={n.x} cy={n.y} r={isEndpoint ? 5 : 4} fill="var(--accent)" />
              </motion.g>
            );
          })}
        </motion.g>
      </AnimatePresence>

      {/* Labels */}
      <motion.text
        x={CENTER_X}
        y={compact ? 18 : 20}
        textAnchor="middle"
        fontSize={labelSize}
        fontWeight="900"
        letterSpacing="2"
        fill="var(--accent)"
        fontFamily="var(--font-display)"
      >
        {labelText}
      </motion.text>
      <text
        x={CENTER_X}
        y={612}
        textAnchor="middle"
        fontSize="14"
        fontWeight="900"
        letterSpacing="2"
        fill="rgba(255,255,255,0.85)"
        fontFamily="var(--font-display)"
      >
        ALUNO
      </text>
    </svg>
  );
}
