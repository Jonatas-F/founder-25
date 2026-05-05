import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const series = [
  { name: "3D", icon: "lucide:box" },
  { name: "Design", icon: "lucide:palette" },
  { name: "Audiovisual", icon: "lucide:clapperboard" },
  { name: "Game", icon: "lucide:gamepad-2" },
  { name: "IA", icon: "lucide:brain-circuit" },
];

const weeks = [
  {
    week: "Semana 1",
    label: "Live de abertura",
    sub: "Formato podcast",
    desc: "Entrevista com o profissional: trajetória, inspirações e o que será ministrado nas próximas três semanas.",
    accent: true,
  },
  {
    week: "Semana 2",
    label: "Episódio 01",
    sub: "Live técnica",
    desc: "Primeira aula do mês — fundamentos e abertura prática do tema.",
    accent: false,
  },
  {
    week: "Semana 3",
    label: "Episódio 02",
    sub: "Live técnica",
    desc: "Aprofundamento e desenvolvimento do projeto em construção.",
    accent: false,
  },
  {
    week: "Semana 4",
    label: "Episódio 03",
    sub: "Live técnica",
    desc: "Refinamento, fechamento e entrega da temporada.",
    accent: false,
  },
];

const valueProps = [
  {
    icon: "lucide:library",
    title: "Catálogo permanente",
    desc: "Todas as temporadas anteriores ficam disponíveis no Hub. Quanto mais tempo você fica, mais conteúdo você acessa.",
  },
  {
    icon: "lucide:scissors",
    title: "Pílulas em formato corte",
    desc: "Cada live é fatiada em cortes curtos — assista no ônibus, na pausa, no fim do dia. Sem precisar reservar 1h.",
  },
  {
    icon: "lucide:user-check",
    title: "Profissionais entrevistados",
    desc: "Cada série traz nomes diferentes do mercado. Você acompanha a indústria de perto, com quem está fazendo agora.",
  },
];

export default function SagaPassSeries() {
  return (
    <section className="relative px-6 md:px-12 py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow text-[var(--accent)]">
            SAGA Pass · Séries
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.4rem)] leading-[1.02] tracking-tight"
          >
            <span className="text-[var(--accent)]">5 séries</span>. Temporadas mensais.
            <br />
            Episódios semanais.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-white/70 leading-relaxed"
          >
            O coração novo do Founder 25. As lives não são eventos soltos —
            são <span className="text-white font-semibold">temporadas estruturadas</span>,
            organizadas por área de atuação, com episódios conectados que constroem um
            entregável real ao final de cada mês.
          </motion.p>
        </motion.div>

        {/* As 5 séries */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[0.65rem] uppercase tracking-[0.3em] text-white/40 font-bold">
              As séries
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 md:grid-cols-5 gap-3"
          >
            {series.map((s) => (
              <motion.div
                key={s.name}
                variants={fadeUp}
                whileHover={{ y: -4, rotate: 1 }}
                className="flex flex-col items-center justify-center p-5 rounded-xl bg-[var(--bg-elevated)] border-2 border-[var(--accent)]/30 hover:border-[var(--accent)] transition-colors"
              >
                <Icon icon={s.icon} className="w-8 h-8 text-[var(--accent)] mb-3" />
                <span className="font-display text-base uppercase tracking-wider">
                  {s.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Anatomia do mês */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[var(--accent)] font-bold">
              Anatomia de uma temporada
            </span>
            <span className="h-px flex-1 bg-[var(--accent)]/30" />
          </div>
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {weeks.map((w) => (
              <motion.div
                key={w.week}
                variants={fadeUp}
                className={`relative p-6 rounded-xl border-2 ${
                  w.accent
                    ? "bg-[var(--accent)] text-black border-[var(--accent)]"
                    : "bg-[var(--bg-elevated)] text-white border-white/15"
                }`}
              >
                <span
                  className={`block text-[0.65rem] uppercase tracking-[0.25em] font-bold ${
                    w.accent ? "text-black/70" : "text-white/45"
                  }`}
                >
                  {w.week}
                </span>
                <h3
                  className={`mt-2 font-display text-base md:text-lg uppercase tracking-tight ${
                    w.accent ? "text-black" : "text-white"
                  }`}
                >
                  {w.label}
                </h3>
                <span
                  className={`text-[0.65rem] uppercase tracking-wider ${
                    w.accent ? "text-black/70" : "text-[var(--accent)]"
                  }`}
                >
                  {w.sub}
                </span>
                <p
                  className={`mt-3 text-xs leading-relaxed ${
                    w.accent ? "text-black/75" : "text-white/65"
                  }`}
                >
                  {w.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Value props extras */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-4"
        >
          {valueProps.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              className="p-6 rounded-xl bg-black/40 border border-white/8"
            >
              <Icon icon={v.icon} className="w-6 h-6 text-[var(--accent)] mb-3" />
              <h3 className="font-display text-base uppercase tracking-wider mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
