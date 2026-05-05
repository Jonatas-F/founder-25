import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import CircuitLines from "../components/decor/CircuitLines";

const features = [
  {
    icon: "lucide:image",
    title: "Criação por nodes",
    desc: "Plataforma estilo workspace visual: combine geração de imagens, vídeos, ediçōes e referências em um fluxo conectado.",
  },
  {
    icon: "lucide:lock",
    title: "Gerações privadas",
    desc: "Tudo o que você cria fica no seu usuário — só você decide o que entra na galeria pública.",
  },
  {
    icon: "lucide:zap",
    title: "Modelos PRO",
    desc: "Acesso aos modelos mais avançados disponíveis (incluindo nanobanana.pro).",
  },
  {
    icon: "lucide:rocket",
    title: "Acesso antecipado",
    desc: "Modelos novos chegam primeiro pra você — antes do lançamento público.",
  },
];

const traditionalTools = [
  "Blender",
  "ZBrush",
  "Substance",
  "Unreal",
  "Photoshop",
  "Premiere",
  "After Effects",
  "Illustrator",
];

export default function SagaIA() {
  return (
    <section className="relative px-6 md:px-12 py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <CircuitLines animate={false} />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow text-[var(--accent)]">
            SAGA.iA · Plataforma criativa
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.4rem)] leading-[1.02] tracking-tight"
          >
            Vire uma <span className="text-[var(--accent)]">empresa de uma pessoa só</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-white/75 leading-relaxed"
          >
            Ambiente criativo proprietário onde você gera imagens, vídeos, peças e
            mood-boards em um fluxo de nodes conectados. Faça suas próprias campanhas,
            animações e protótipos —
            <span className="text-white font-semibold"> sem depender de terceiros</span>{" "}
            para tirar uma ideia do papel.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="p-6 rounded-xl bg-[var(--bg-elevated)] border border-white/10 hover:border-[var(--accent)]/40 transition-colors"
            >
              <Icon icon={f.icon} className="w-6 h-6 text-[var(--accent)] mb-4" />
              <h3 className="font-display text-base uppercase tracking-wide mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer crítico — IA não substitui ferramentas tradicionais */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-black/60 to-[var(--bg-elevated)] border border-[var(--accent)]/30 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4 mb-5">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent)] text-black flex items-center justify-center flex-shrink-0">
              <Icon icon="lucide:alert-circle" className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] font-bold">
                Importante
              </span>
              <h3 className="mt-1 font-display text-xl md:text-2xl uppercase tracking-tight">
                A IA é mais uma ferramenta no ecossistema.{" "}
                <span className="text-[var(--accent)]">Não substitui as outras.</span>
              </h3>
            </div>
          </div>

          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            A SAGA continua formando você nos programas mais utilizados na indústria —
            os que estúdios contratam, agências usam e produções exigem. A SAGA.iA entra
            como mais um superpoder na sua caixa de ferramentas, não como atalho.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {traditionalTools.map((t) => (
              <span
                key={t}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-semibold text-white/85"
              >
                {t}
              </span>
            ))}
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/40 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
              + SAGA.iA
            </span>
          </div>

          <p className="mt-5 text-sm text-white/55 leading-relaxed">
            O objetivo é claro: levar você do{" "}
            <span className="font-display text-xl md:text-2xl text-white tracking-tight">
              ponto A
            </span>{" "}
            ao{" "}
            <span
              className="font-display text-xl md:text-2xl text-[var(--accent)] tracking-tight"
              style={{ textShadow: "0 0 20px var(--accent-glow)" }}
            >
              ponto B
            </span>{" "}
            formando o melhor profissional possível. Tudo o que ajuda nessa jornada está
            incluído.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
