import { motion } from "framer-motion";
import { PROFESSORES } from "../lib/professores";
import TeacherCard from "../components/TeacherCard";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

export default function Professores() {
  // Mostra apenas a série com conteúdo confirmado (IA na temporada inaugural)
  const current = PROFESSORES.series.find((s) => s.teachers.length > 0) || PROFESSORES.series[0];

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
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

          {current.teachers.length > 0 && (
            <>
              <h3 className="font-display text-base uppercase tracking-[0.2em] text-white/80 mb-5">
                · Residentes SAGA
              </h3>
              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
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
                whileInView="visible"
                viewport={viewportOnce}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {current.guests.map((g) => (
                  <TeacherCard key={g.name} teacher={g} />
                ))}
              </motion.div>
            </>
          )}
        </motion.div>

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
