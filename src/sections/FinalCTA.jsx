import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Button from "../components/ui/Button";
import AuroraBackground from "../components/ui/AuroraBackground";
import EmberCanvas from "../components/ui/EmberCanvas";
import LogoFounder25 from "../components/LogoFounder25";
import FounderBadge from "../components/brand/FounderBadge";
import TriangleMark from "../components/brand/TriangleMark";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { WHATSAPP_URL } from "../lib/config";

const reassurances = [
  { icon: "lucide:lock", label: "Seu contrato não muda" },
  { icon: "lucide:zap", label: "Ativação em minutos" },
  { icon: "lucide:message-circle", label: "Conversa pelo WhatsApp" },
];

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-32 overflow-hidden"
    >
      <AuroraBackground intensity={0.85} />
      <EmberCanvas density={0.5} />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none"
      >
        <FounderBadge variant="lockup" tone="outline" size={680} />
      </motion.div>

      <motion.div
        variants={staggerContainer(0.14)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--accent)]/40 bg-black/30 backdrop-blur-sm"
        >
          <TriangleMark size={12} className="text-[var(--accent)]" />
          <span className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-white/85">
            Sua vaga já está reservada
          </span>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <LogoFounder25 size="lg" animate={false} />
        </div>

        <motion.h2
          variants={fadeUp}
          className="mt-12 text-3xl md:text-5xl font-semibold text-white leading-[1.1]"
        >
          Tudo o que mostramos aqui já é seu.
          <br />
          <span className="text-[var(--accent)]">Falta só ativar</span>.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto"
        >
          Você fala direto com seu consultor SAGA pelo WhatsApp. Em poucos minutos sua
          conta entra no Founder 25 — sem mudar nada do que você já paga.
        </motion.p>

        {/* Reassurances */}
        <motion.div
          variants={staggerContainer(0.06)}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {reassurances.map((r) => (
            <motion.span
              key={r.label}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/40 border border-white/15 text-xs uppercase tracking-[0.15em] text-white/85"
            >
              <Icon icon={r.icon} className="w-3.5 h-3.5 text-[var(--accent)]" />
              {r.label}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col items-center justify-center gap-4"
        >
          <Button href={WHATSAPP_URL} size="xl">
            Ativar meu Founder 25
          </Button>
          <span className="text-sm text-white/55">
            Conversa direta com seu consultor · WhatsApp
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-12 font-display text-2xl md:text-3xl text-white"
        >
          Os próximos <span className="text-[var(--accent)]">25 anos</span> começam agora.
        </motion.p>
      </motion.div>
    </section>
  );
}
