import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import FounderBadge from "../components/brand/FounderBadge";

export default function FounderAnchor() {
  return (
    <section className="relative px-6 md:px-12 py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,90,31,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <motion.span variants={fadeUp} className="eyebrow text-[var(--accent)]">
            Por que Founder 25
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4.4rem)] leading-[1.02] tracking-tight"
          >
            O preço que você já paga.
            <br />
            O acesso que vai virar <span className="text-[var(--accent)]">referência</span>.
          </motion.h2>
        </motion.div>

        {/* Comparativo dois lados */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto"
        >
          {/* Novos assinantes */}
          <motion.div
            variants={fadeUp}
            className="relative p-8 md:p-10 rounded-2xl bg-[var(--bg-elevated)] border border-white/10"
          >
            <span className="inline-block px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.3em] bg-white/5 text-white/55 rounded-sm border border-white/15">
              Novos assinantes
            </span>
            <h3 className="mt-5 font-display text-2xl md:text-3xl uppercase tracking-tight text-white/70">
              SAGA Pass
            </h3>
            <p className="mt-4 text-white/55 leading-relaxed">
              Acesso ao mesmo ecossistema — séries de lives, comunidade, OnDemand e
              SAGA.iA — porém em um plano de assinatura com{" "}
              <span className="text-white">valor diferenciado</span> para o público
              externo.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/55">
              <li className="flex items-center gap-2">
                <Icon icon="lucide:circle" className="w-3.5 h-3.5" />
                Não inclui curso ativo SAGA
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:circle" className="w-3.5 h-3.5" />
                Valor de assinatura padrão de mercado
              </li>
            </ul>
          </motion.div>

          {/* Founder 25 (você) */}
          <motion.div
            variants={fadeUp}
            className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[var(--accent)]/15 via-[var(--bg-elevated)] to-transparent border-2 border-[var(--accent)] shadow-[0_0_60px_var(--accent-glow)]"
          >
            <div className="absolute -top-6 -right-6 hidden md:block">
              <FounderBadge variant="lockup" tone="dark" size={110} rotate />
            </div>

            <span className="inline-block px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.3em] bg-[var(--accent)] text-black rounded-sm">
              Você · Founder 25
            </span>
            <h3 className="mt-5 font-display text-2xl md:text-3xl uppercase tracking-tight">
              Curso ativo + ecossistema completo
            </h3>
            <p className="mt-4 text-white/85 leading-relaxed">
              <span className="text-white font-semibold">Mesmo valor</span> do contrato
              que você já tem. <span className="text-[var(--accent)] font-semibold">Zero</span> reajuste.
              Tudo o que está nesta página entra como presente comemorativo dos 25 anos
              SAGA.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-white/90">
              {[
                "Seu contrato atual permanece intacto",
                "Modalidade online sem custo adicional",
                "SAGA Pass completo incluído",
                "Selo Founder 25 — exclusivo de quem entra agora",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Icon
                    icon="lucide:check-circle-2"
                    className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 text-center text-lg md:text-xl text-white/65 max-w-3xl mx-auto leading-relaxed"
        >
          Founder 25 não volta. É o reconhecimento da SAGA por quem já está com a gente —
          <span className="text-white font-semibold"> uma vez</span>, em comemoração aos
          25 anos. <span className="text-[var(--accent)]">Os próximos 25 começam agora.</span>
        </motion.p>
      </div>
    </section>
  );
}
