import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import BuildTree from "../components/decor/BuildTree";
import AccessStamp from "../components/decor/AccessStamp";

const stats = [
  {
    icon: "lucide:user-search",
    label: "Levantamento de perfil",
    value: "Sim",
  },
  {
    icon: "lucide:route",
    label: "Trilha personalizada",
    value: "Completa",
  },
  {
    icon: "lucide:sparkles",
    label: "Recomendações",
    value: "Atualizadas a cada season",
  },
  {
    icon: "lucide:target",
    label: "Foco",
    value: "Seu objetivo profissional",
  },
];

export default function Journey() {
  return (
    <section className="relative px-6 md:px-12 py-32 overflow-hidden">
      {/* Glow ambiente atrás da árvore */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-50 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,90,31,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
        {/* === Coluna esquerda: copy === */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="eyebrow text-[var(--accent)]">
            Sua build · Sua rota
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.4rem)] leading-[1.02] tracking-tight"
          >
            Uma jornada montada como uma <span className="text-[var(--accent)]">build</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-white/75 leading-relaxed"
          >
            No início da assinatura, fazemos um levantamento de perfil — conhecimentos
            prévios, objetivos profissionais, referências e preferências. A partir daí,
            o Founder 25 desenha um caminho recomendado dentro de uma rede ampla de
            seasons, conteúdos e mentores.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base text-white/55 leading-relaxed"
          >
            Você vê o destino, conhece todas as rotas possíveis — e segue a trilha que faz
            mais sentido para o seu objetivo, com liberdade de explorar bifurcações.
          </motion.p>

          {/* Stats grid */}
          <motion.dl
            variants={staggerContainer(0.08)}
            className="mt-10 grid grid-cols-2 gap-3"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-elevated)] border border-white/8"
              >
                <Icon icon={s.icon} className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-white/45 font-semibold">
                    {s.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-white">
                    {s.value}
                  </dd>
                </div>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        {/* === Coluna direita: build tree visualization === */}
        <div className="relative">
          {/* Frame estilo HQ ao redor da árvore */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#16161a] to-[#0a0a0c] border border-white/10 p-6 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.55)] overflow-hidden">
            {/* Cantos decorativos como nas peças HQ */}
            <span aria-hidden="true" className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[var(--accent)]/60" />
            <span aria-hidden="true" className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[var(--accent)]/60" />
            <span aria-hidden="true" className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[var(--accent)]/60" />
            <span aria-hidden="true" className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[var(--accent)]/60" />

            <BuildTree />

            {/* Stamp absoluto no canto */}
            <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4">
              <AccessStamp size={108} />
            </div>
          </div>

          {/* Caption discreta */}
          <p className="mt-4 text-center text-[0.7rem] uppercase tracking-[0.25em] text-white/35">
            Visualização ilustrativa · Cada aluno recebe uma build única
          </p>
        </div>
      </div>
    </section>
  );
}
