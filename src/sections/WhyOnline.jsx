import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import HalftonePattern from "../components/decor/HalftonePattern";

const advantages = [
  {
    icon: "lucide:globe-2",
    metric: "Brasil + mundo",
    title: "Professores selecionados sem fronteira",
    body: "Sem o limite geográfico de uma sala física, conseguimos recrutar artistas e profissionais sêniores do Brasil e do mundo. A escalação que ministra para você cresceu — em qualidade e diversidade.",
  },
  {
    icon: "lucide:rotate-ccw",
    metric: "24/7",
    title: "Volte na aula quando quiser",
    body: "Tudo gravado e disponível enquanto sua assinatura está ativa. Pause, volte, refaça — no seu ritmo, no seu fuso, na sua agenda.",
  },
  {
    icon: "lucide:network",
    metric: "Alcance global",
    title: "Comunidade sem CEP",
    body: "Você passa a conviver com alunos, residentes e convidados de todas as regiões. Networking real é onde as oportunidades de carreira costumam aparecer.",
  },
];

export default function WhyOnline() {
  return (
    <section className="relative px-6 md:px-12 py-32 overflow-hidden">
      <HalftonePattern color="rgba(255,90,31,0.05)" size={12} density={1} />
      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow text-[var(--accent)]">
            Por que online é evolução
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.4rem)] leading-[1.02] tracking-tight"
          >
            O online <span className="text-[var(--accent)]">amplifica</span>.
            <br />
            Não substitui.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-white/70 leading-relaxed"
          >
            A modalidade online não é apenas conveniência. É o que destrava a SAGA para
            entregar uma experiência que a sala de aula sozinha não conseguiria.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-5"
        >
          {advantages.map((a) => (
            <motion.article
              key={a.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="relative p-7 rounded-2xl bg-[var(--bg-elevated)] border border-white/10 hover:border-[var(--accent)]/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-5">
                <Icon icon={a.icon} className="w-7 h-7 text-[var(--accent)]" />
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)] font-bold">
                  {a.metric}
                </span>
              </div>
              <h3 className="font-display text-xl uppercase tracking-tight leading-tight">
                {a.title}
              </h3>
              <p className="mt-4 text-sm text-white/65 leading-relaxed">{a.body}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[var(--accent)]/10 via-[var(--bg-elevated)] to-transparent border-l-2 border-[var(--accent)] max-w-3xl"
        >
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            <span className="text-[var(--accent)] font-display text-2xl">"</span>
            Quando o professor não precisa caber no mesmo CEP que você, quem ministra
            a sua próxima aula pode ser o melhor profissional da área —{" "}
            <span className="text-white font-semibold">esteja ele onde estiver</span>.
            <span className="text-[var(--accent)] font-display text-2xl">"</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
