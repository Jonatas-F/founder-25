import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

/**
 * Wrapper para seções: eyebrow + título grande + opcional descrição.
 * Mantém ritmo tipográfico consistente.
 */
export default function SectionFrame({
  id,
  eyebrow,
  title,
  highlight,
  description,
  children,
  align = "left",
  className = "",
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  // Allow inline accent highlight in the title via {highlight} replacement
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split("{}");
    return (
      <>
        {parts[0]}
        <span className="text-[var(--accent)]">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      id={id}
      className={`relative min-h-screen flex items-center px-6 md:px-12 py-24 md:py-32 ${className}`}
    >
      <div className={`mx-auto w-full max-w-6xl flex flex-col ${alignClass}`}>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={`flex flex-col ${alignClass}`}
        >
          {eyebrow && (
            <motion.span variants={fadeUp} className="eyebrow text-[var(--accent)] mb-6">
              {eyebrow}
            </motion.span>
          )}
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-[1.02] tracking-tight max-w-4xl"
          >
            {renderTitle()}
          </motion.h2>
          {description && (
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {children && <div className="mt-14 w-full">{children}</div>}
      </div>
    </section>
  );
}
