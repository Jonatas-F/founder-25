/**
 * Skyline de cidade vetorial — silhueta de prédios em estilo HQ.
 * Útil como camada de fundo nas seções de "futuro / mercado".
 */

// Conjunto de prédios pseudo-aleatório-mas-determinístico para evitar regenerar a cada render.
const BUILDINGS = [
  { x: 0, w: 60, h: 180, w1: 4, w2: 0 },
  { x: 60, w: 80, h: 240, w1: 6, w2: 8 },
  { x: 140, w: 50, h: 140, w1: 4, w2: 0 },
  { x: 190, w: 90, h: 320, w1: 6, w2: 4 },
  { x: 280, w: 70, h: 200, w1: 6, w2: 6 },
  { x: 350, w: 100, h: 280, w1: 5, w2: 8 },
  { x: 450, w: 50, h: 160, w1: 4, w2: 0 },
  { x: 500, w: 110, h: 360, w1: 7, w2: 6 },
  { x: 610, w: 60, h: 200, w1: 5, w2: 4 },
  { x: 670, w: 80, h: 260, w1: 6, w2: 6 },
  { x: 750, w: 50, h: 140, w1: 4, w2: 0 },
  { x: 800, w: 90, h: 300, w1: 5, w2: 8 },
  { x: 890, w: 70, h: 220, w1: 6, w2: 4 },
  { x: 960, w: 60, h: 180, w1: 4, w2: 0 },
  { x: 1020, w: 110, h: 340, w1: 7, w2: 6 },
  { x: 1130, w: 50, h: 160, w1: 4, w2: 0 },
  { x: 1180, w: 80, h: 240, w1: 6, w2: 4 },
  { x: 1260, w: 60, h: 200, w1: 5, w2: 0 },
  { x: 1320, w: 90, h: 280, w1: 6, w2: 6 },
  { x: 1410, w: 70, h: 220, w1: 6, w2: 4 },
];

export default function CitySkyline({ className = "", color = "rgba(255,90,31,0.18)" }) {
  const baseY = 400;
  return (
    <svg
      viewBox="0 0 1480 400"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className={`block w-full h-full ${className}`}
    >
      {/* Glow horizon */}
      <defs>
        <linearGradient id="skyGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,90,31,0)" />
          <stop offset="100%" stopColor="rgba(255,90,31,0.35)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1480" height="400" fill="url(#skyGlow)" opacity="0.4" />

      {BUILDINGS.map((b, i) => {
        const top = baseY - b.h;
        return (
          <g key={i}>
            <rect x={b.x} y={top} width={b.w} height={b.h} fill={color} />
            {/* Janelas — pontilhadas */}
            {Array.from({ length: Math.floor(b.h / 18) }).map((_, row) =>
              Array.from({ length: Math.floor(b.w / 12) }).map((_, col) => {
                const lit = (i * 7 + row * 3 + col) % 6 < 2;
                return lit ? (
                  <rect
                    key={`${i}-${row}-${col}`}
                    x={b.x + 4 + col * 12}
                    y={top + 6 + row * 18}
                    width="3"
                    height="6"
                    fill="rgba(255,160,80,0.6)"
                  />
                ) : null;
              })
            )}
            {/* Antena ocasional */}
            {b.w1 > 5 && (
              <line
                x1={b.x + b.w / 2}
                y1={top}
                x2={b.x + b.w / 2}
                y2={top - 14}
                stroke={color}
                strokeWidth="1"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
