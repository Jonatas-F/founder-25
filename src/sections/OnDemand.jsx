import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

// Categorias representativas do catálogo OnDemand
const categories = [
  { icon: "lucide:palette", label: "Design" },
  { icon: "lucide:box", label: "3D" },
  { icon: "lucide:clapperboard", label: "Audiovisual" },
  { icon: "lucide:gamepad-2", label: "Game" },
  { icon: "lucide:brain-circuit", label: "IA" },
  { icon: "lucide:layers", label: "Pipelines" },
  { icon: "lucide:sparkles", label: "Motion" },
  { icon: "lucide:wand-2", label: "Conceito" },
];

export default function OnDemand() {
  return (
    <section className="relative px-6 md:px-12 py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        {/* Esquerda: copy */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="eyebrow text-[var(--accent)]">
            SAGA OnDemand
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.4rem)] leading-[1.02] tracking-tight"
          >
            Todo o catálogo.
            <br />
            <span className="text-[var(--accent)]">Aberto pra você</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-white/75 leading-relaxed"
          >
            Cursos gravados de profissionais nacionais e internacionais que normalmente
            são vendidos individualmente no Hub passam a ficar todos liberados durante
            sua assinatura Founder 25.
          </motion.p>
          <motion.ul
            variants={staggerContainer(0.06)}
            className="mt-8 space-y-3"
          >
            {[
              "Profissionais do Brasil e do exterior",
              "Cursos completos, do básico ao avançado",
              "Atualizações e novos lançamentos incluídos",
              "Sem compra unitária, sem upsell",
            ].map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 text-white/85"
              >
                <Icon
                  icon="lucide:check-circle-2"
                  className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5"
                />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Direita: vitrine de catálogo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-3xl blur-3xl opacity-50 -z-10"
            style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)" }}
          />
          <div className="relative bg-[var(--bg-elevated)] border border-white/10 rounded-2xl p-6 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:library" className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-xs uppercase tracking-[0.25em] text-white/70 font-semibold">
                  hub.saga · ondemand
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-[0.6rem] uppercase tracking-[0.2em] font-bold">
                <Icon icon="lucide:unlock" className="w-3 h-3" />
                Aberto
              </span>
            </div>

            {/* "Bibliotecas" simuladas */}
            <div className="space-y-3 mb-5">
              {[
                { title: "Pipeline de Animação 3D", author: "Internacional", duration: "12h" },
                { title: "UI Design para Produtos Digitais", author: "Brasil", duration: "8h" },
                { title: "Concept Art Profissional", author: "Internacional", duration: "16h" },
                { title: "Direção de Motion Design", author: "Brasil", duration: "10h" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/5"
                >
                  <div className="w-10 h-10 rounded bg-[var(--accent)]/15 flex items-center justify-center flex-shrink-0">
                    <Icon icon="lucide:play" className="w-3.5 h-3.5 text-[var(--accent)] ml-0.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white truncate">{item.title}</div>
                    <div className="text-[0.65rem] uppercase tracking-wider text-white/45">
                      {item.author} · {item.duration}
                    </div>
                  </div>
                  <Icon icon="lucide:check" className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-2">
              {categories.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg bg-black/30 border border-white/5"
                >
                  <Icon icon={c.icon} className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-[0.6rem] text-white/60 text-center leading-tight">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-[0.65rem] uppercase tracking-[0.25em] text-white/35">
              + dezenas de cursos · catálogo expansível
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
