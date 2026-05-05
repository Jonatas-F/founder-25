import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import FloatingTriangles from "../components/decor/FloatingTriangles";

const pillars = [
  {
    icon: "lucide:headphones",
    title: "Plantões de dúvidas",
    desc: "Encontros recorrentes na nossa plataforma onde você tira dúvidas em tempo real com mentores e ADMs.",
  },
  {
    icon: "lucide:users",
    title: "Mentorias coletivas e individuais",
    desc: "Espaços com profissionais SAGA e convidados — em grupo ou em sessões individuais para destravar o que está parando você.",
  },
  {
    icon: "lucide:sword",
    title: "Desafios semanais",
    desc: "Briefings novos toda semana para você produzir, entregar e ver seu portfólio crescer com consistência.",
  },
  {
    icon: "lucide:message-circle-heart",
    title: "Comunidade ativa 24/7",
    desc: "Alunos, residentes e convidados trocando trabalhos, indicações e oportunidades — sem dia certo para acontecer.",
  },
];

export default function Community() {
  return (
    <section className="relative px-6 md:px-12 py-32 overflow-hidden">
      <FloatingTriangles opacity={0.10} />
      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow text-[var(--accent)]">
            Comunidade & mentoria
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.4rem)] leading-[1.02] tracking-tight"
          >
            Você nunca está <span className="text-[var(--accent)]">sozinho</span> na build.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-white/70 leading-relaxed"
          >
            A diferença entre desistir e evoluir, normalmente, é ter alguém ao lado.
            O Founder 25 abre uma área exclusiva da comunidade onde você sempre encontra
            quem te ajude — mentor, residente ou colega.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-5"
        >
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`relative p-7 rounded-2xl border-2 ${
                i === 2
                  ? "bg-gradient-to-br from-[var(--accent)]/12 to-transparent border-[var(--accent)] shadow-[0_0_40px_var(--accent-glow)]"
                  : "bg-[var(--bg-elevated)] border-white/10 hover:border-[var(--accent)]/40"
              } transition-colors`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  i === 2 ? "bg-[var(--accent)] text-black" : "bg-[var(--accent)]/15 text-[var(--accent)]"
                }`}
              >
                <Icon icon={p.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-tight mb-3">
                {p.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{p.desc}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 text-center text-lg md:text-xl text-white/65 max-w-3xl mx-auto leading-relaxed"
        >
          Os melhores trabalhos da nossa base costumam nascer assim:
          uma dúvida no chat → uma mentoria → um desafio entregue →{" "}
          <span className="text-white font-semibold">uma nova peça no portfólio</span>.
        </motion.p>
      </div>
    </section>
  );
}
