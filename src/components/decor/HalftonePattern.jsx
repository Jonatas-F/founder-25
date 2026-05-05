/**
 * Padrão de halftone (pontos diagonais decrescentes) — estética HQ/comic-book
 * usada nas peças oficiais do PDF Founder 25.
 */
export default function HalftonePattern({
  className = "",
  color = "rgba(255,255,255,0.08)",
  size = 6,
  density = 1,
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(${color} ${density}px, transparent ${density + 0.5}px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
