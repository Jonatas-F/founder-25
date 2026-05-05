import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../lib/useReducedMotion";

/**
 * Canvas leve que desenha brasas/partículas subindo, evocando o portal em chamas
 * da identidade visual. Auto-pausa quando reduced-motion está ativo.
 */
export default function EmberCanvas({ density = 0.6, className = "" }) {
  const canvasRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let rafId;
    let particles = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      return {
        x: Math.random() * w,
        y: h + Math.random() * 40,
        vy: 0.3 + Math.random() * 0.9,
        vx: (Math.random() - 0.5) * 0.2,
        r: 0.6 + Math.random() * 1.6,
        life: 0,
        maxLife: 280 + Math.random() * 280,
        hue: 18 + Math.random() * 18,
      };
    };

    const init = () => {
      const target = Math.floor(60 * density);
      particles = Array.from({ length: target }, spawn);
    };

    const tick = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life += 1;
        p.y -= p.vy;
        p.x += p.vx;
        const fade = 1 - p.life / p.maxLife;
        if (p.life > p.maxLife || p.y < -10) {
          particles[i] = spawn();
          continue;
        }
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${fade * 0.85})`;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, ${fade * 0.6})`;
        ctx.shadowBlur = 10;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      rafId = requestAnimationFrame(tick);
    };

    resize();
    init();
    tick();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [reduced, density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    />
  );
}
