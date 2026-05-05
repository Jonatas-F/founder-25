import { motion } from "framer-motion";
import { staggerContainer, wordReveal } from "../lib/motion";

/**
 * Lockup tipográfico "FOUN / DER 25" — empilhado, com "25" gigante em laranja.
 * Reproduz a hierarquia da identidade visual.
 */
export default function LogoFounder25({ size = "xl", animate = true }) {
  const scales = {
    md: { wrap: "gap-3", text: "text-5xl md:text-6xl", num: "text-7xl md:text-8xl" },
    lg: { wrap: "gap-4", text: "text-6xl md:text-7xl", num: "text-8xl md:text-9xl" },
    xl: {
      wrap: "gap-5",
      text: "text-[clamp(3rem,9vw,7rem)]",
      num: "text-[clamp(5rem,16vw,13rem)]",
    },
  };
  const s = scales[size];

  const Container = animate ? motion.div : "div";
  const Line = animate ? motion.span : "span";

  const containerProps = animate
    ? {
        variants: staggerContainer(0.18),
        initial: "hidden",
        animate: "visible",
      }
    : {};

  return (
    <Container
      {...containerProps}
      className={`inline-flex flex-col items-start ${s.wrap} font-display leading-[0.85]`}
    >
      <span className="overflow-hidden">
        <Line variants={wordReveal} className={`block ${s.text} text-white`}>
          FOUN
        </Line>
      </span>
      <span className="flex items-baseline gap-3 overflow-hidden">
        <Line variants={wordReveal} className={`block ${s.text} text-white`}>
          DER
        </Line>
        <Line
          variants={wordReveal}
          className={`block ${s.num} text-[var(--accent)] leading-[0.8]`}
        >
          25
        </Line>
      </span>
    </Container>
  );
}
