import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { PROFESSORES } from "../lib/professores";
import TeacherCard from "../components/TeacherCard";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

export default function Professores() {
  const series = PROFESSORES.series;
  const [active, setActive] = useState(series[0].slug);
  const current = series.find((s) => s.slug === active) || series[0];
  const hasContent = current.teachers.length > 0 || current.guests.length > 0;

  return (
    <section className="relative px-6 md:px-12 py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mb-12"
        >
          <motion.span variants={fadeUp} className="eyebrow text-[var(--accent)]">
            Temporada inaugural
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.02] tracking-tight"
          >
            Quem ministra as <span className="text-[var(--accent)]">primeiras seasons</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-white/70 leading-relaxed"
          >
            Corpo docente dinâmico e rotativo. Professores fixos da SAGA, convidados do
            mercado e participações pontuais — atualização constante, diversidade de
            visões e contato com diferentes experiências reais.
          </motion.p>
        </motion.div>

        {/* Tabs por série */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap gap-3 mb-10"
        >
          {series.map((s) => {
            const isActive = s.slug === active;
            return (
              <button
                key={s.slug}
                onClick={() => setActive(s.slug)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 transition-all text-sm font-semibold uppercase tracking-wider ${
                  isActive
                    ? "bg-[var(--accent)] text-black border-[var(--accent)] shadow-[0_0_30px_var(--accent-glow)]"
                    : "bg-transparent text-white/65 border-white/15 hover:border-[var(--accent)]/40 hover:text-white"
                }`}
              >
                <Icon icon={s.icon} className="w-4 h-4" />
                Série {s.area}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div>
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-[var(--accent)] font-bold">
                  Série {current.area} · {current.season}
                </span>
                <p className="mt-1 text-white/70">{current.tagline}</p>
              </div>
            </div>

            {!hasContent && (
              <div className="p-12 rounded-2xl bg-[var(--bg-elevated)] border border-dashed border-white/15 text-center">
                <Icon
                  icon="lucide:hourglass"
                  className="w-10 h-10 text-[var(--accent)] mx-auto mb-4"
                />
                <h3 className="font-display text-xl uppercase tracking-wide">
                  Em breve · revelação da escalação
                </h3>
                <p className="mt-3 text-sm text-white/55 max-w-md mx-auto">
                  Os professores da Season inaugural de {current.area} serão anunciados
                  em breve. Espaço reservado para vídeos de apresentação.
                </p>
              </div>
            )}

            {current.teachers.length > 0 && (
              <>
                <h3 className="font-display text-base uppercase tracking-[0.2em] text-white/80 mb-5">
                  · Residentes SAGA
                </h3>
                <motion.div
                  variants={staggerContainer(0.08)}
                  initial="hidden"
                  animate="visible"
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
                >
                  {current.teachers.map((t) => (
                    <TeacherCard key={t.name} teacher={t} accent />
                  ))}
                </motion.div>
              </>
            )}

            {current.guests.length > 0 && (
              <>
                <h3 className="font-display text-base uppercase tracking-[0.2em] text-white/80 mb-5">
                  · Artistas convidados
                </h3>
                <motion.div
                  variants={staggerContainer(0.08)}
                  initial="hidden"
                  animate="visible"
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {current.guests.map((g) => (
                    <TeacherCard key={g.name} teacher={g} />
                  ))}
                </motion.div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 text-center text-sm text-white/45"
        >
          Os vídeos de apresentação dos professores serão liberados em breve. Para
          adicionar, basta editar <code className="text-white/65">src/lib/professores.js</code>.
        </motion.p>
      </div>
    </section>
  );
}
