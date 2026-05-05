import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import BuildTree, { CAREER_PRESETS } from "../components/decor/BuildTree";

const profileFields = [
  { icon: "lucide:user", label: "Perfil & repertório" },
  { icon: "lucide:target", label: "Objetivo profissional" },
  { icon: "lucide:bookmark", label: "Referências" },
  { icon: "lucide:wand-2", label: "Habilidades atuais" },
];

// Ordem na vitrine: capa por categoria
const SHOWCASE_ORDER = [
  "characterDesign",
  "gameDesign",
  "audiovisual",
  "modelador3d",
  "motionDesign",
  "vfxArtist",
];

function CategoryPill({ category }) {
  const palette = {
    Design: "bg-[var(--accent)]/15 text-[var(--accent)] border-[var(--accent)]/40",
    Games: "bg-[var(--accent)]/15 text-[var(--accent)] border-[var(--accent)]/40",
    Audiovisual: "bg-[var(--accent)]/15 text-[var(--accent)] border-[var(--accent)]/40",
    "3D": "bg-[var(--accent)]/15 text-[var(--accent)] border-[var(--accent)]/40",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-sm text-[0.6rem] font-bold uppercase tracking-[0.25em] border ${
        palette[category] || palette.Design
      }`}
    >
      {category}
    </span>
  );
}

function BuildCard({ careerKey, index }) {
  const career = CAREER_PRESETS[careerKey];
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="relative group rounded-2xl bg-gradient-to-b from-[#16161a] to-[#0a0a0c] border border-white/10 hover:border-[var(--accent)]/40 transition-colors overflow-hidden"
    >
      {/* Cantos HQ */}
      <span aria-hidden="true" className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[var(--accent)]/60" />
      <span aria-hidden="true" className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[var(--accent)]/60" />
      <span aria-hidden="true" className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[var(--accent)]/60" />
      <span aria-hidden="true" className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[var(--accent)]/60" />

      {/* Header com ícone + categoria */}
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center">
            <Icon icon={career.icon} className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <CategoryPill category={career.category} />
        </div>
      </div>

      {/* Build tree (compact) */}
      <div className="px-3 pt-3 pb-1">
        <BuildTree careerKey={careerKey} compact />
      </div>

      {/* Footer com descrição */}
      <div className="px-5 pb-5 pt-2 border-t border-white/5">
        <p className="text-xs text-white/55 leading-relaxed">{career.description}</p>
      </div>

      {/* Glow ao redor no hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          boxShadow: "0 0 60px rgba(255,90,31,0.15) inset",
        }}
      />
    </motion.article>
  );
}

export default function Build() {
  return (
    <section className="relative px-6 md:px-12 py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,90,31,0.18) 0%, transparent 60%)" }}
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mb-12"
        >
          <motion.span variants={fadeUp} className="eyebrow text-[var(--accent)]">
            A ferramenta · Sua build
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.6rem)] leading-[1.02] tracking-tight"
          >
            Várias carreiras.
            <br />
            <span className="text-[var(--accent)]">Vários caminhos</span>. A sua build é única.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-white/75 leading-relaxed"
          >
            Logo na ativação fazemos um <span className="text-white font-semibold">levantamento de perfil</span> —
            conhecimentos prévios, objetivo profissional, referências e preferências. A
            partir daí, a SAGA monta dentro de uma rede ampla de seasons, cursos e
            mentorias o caminho recomendado do <span className="text-white">ponto A</span> ao
            <span className="text-[var(--accent)]"> ponto B</span> que você quer alcançar.
          </motion.p>
        </motion.div>

        {/* Profile fields chips */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap gap-2 mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="text-[0.65rem] uppercase tracking-[0.25em] text-white/40 font-semibold mr-2 self-center"
          >
            Levantamento inicial:
          </motion.span>
          {profileFields.map((f) => (
            <motion.span
              key={f.label}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[var(--bg-elevated)] border border-white/10 text-sm text-white/85"
            >
              <Icon icon={f.icon} className="w-3.5 h-3.5 text-[var(--accent)]" />
              {f.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Vitrine de 6 builds */}
        <div className="mb-10 flex items-center gap-3">
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[var(--accent)] font-bold">
            Exemplos de jornada
          </span>
          <span className="h-px flex-1 bg-[var(--accent)]/30" />
          <span className="text-[0.6rem] uppercase tracking-[0.25em] text-white/35">
            6 de muitas possíveis
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SHOWCASE_ORDER.map((key, i) => (
            <BuildCard key={key} careerKey={key} index={i} />
          ))}
        </div>

        {/* Hammer abaixo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            Conteúdos fora do caminho recomendado ficam{" "}
            <span className="text-white">apagados</span> — mas seguem disponíveis. Você
            tem liberdade total para explorar bifurcações: a SAGA só{" "}
            <span className="text-[var(--accent)]">clareia a rota mais direta</span>{" "}
            para o seu objetivo.
          </p>
          <p className="mt-4 text-sm text-white/45">
            Sua build é gerada a partir do seu levantamento de perfil. Os exemplos
            acima são ilustrativos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
