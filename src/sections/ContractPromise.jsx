import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import TriangleMark from "../components/brand/TriangleMark";

const promises = [
  {
    icon: "lucide:lock",
    eyebrow: "Seu contrato",
    title: "O valor que você já paga.",
    body: "Nada muda no que foi acordado. O Founder 25 entra como evolução natural do seu plano — sem reajuste, sem pegadinha.",
  },
  {
    icon: "lucide:repeat",
    eyebrow: "Seu curso",
    title: "Continua exatamente o seu.",
    body: "Suite Design, Vídeo, 3D, Game ou Art Suite — segue ativo até o fim do contrato. Você só ganha mais.",
  },
  {
    icon: "lucide:gift",
    eyebrow: "Tudo o resto",
    title: "Vem como presente de 25 anos.",
    body: "Plataforma completa, séries de lives, comunidade, mentorias, catálogo OnDemand e SAGA.iA — incluídos sem custo extra.",
  },
];

export default function ContractPromise() {
  return (
    <section id="contrato" className="relative px-6 md:px-12 py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <TriangleMark size={16} className="text-[var(--accent)]" />
            <span className="eyebrow text-[var(--accent)]">A primeira coisa importante</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.0] tracking-tight"
          >
            O que muda no seu contrato?
            <br />
            <span className="text-[var(--accent)]">Nada do que importa.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl"
          >
            Antes de qualquer benefício, a promessa que sustenta o Founder 25:
            seu contrato permanece. Tudo o resto se soma.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-5"
        >
          {promises.map((p, i) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`relative p-7 rounded-2xl border-2 ${
                i === 2
                  ? "bg-gradient-to-br from-[var(--accent)]/12 to-transparent border-[var(--accent)] shadow-[0_0_50px_var(--accent-glow)]"
                  : "bg-[var(--bg-elevated)] border-white/10"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  i === 2 ? "bg-[var(--accent)] text-black" : "bg-[var(--accent)]/15 text-[var(--accent)]"
                }`}
              >
                <Icon icon={p.icon} className="w-6 h-6" />
              </div>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] font-bold">
                {p.eyebrow}
              </span>
              <h3 className="mt-2 font-display text-2xl uppercase tracking-tight leading-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">{p.body}</p>
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
          Founder 25 é como a SAGA diz <span className="text-white font-semibold">obrigado</span> pelos
          25 anos — e <span className="text-[var(--accent)]">você faz parte deles</span>.
        </motion.p>
      </div>
    </section>
  );
}
