import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LogoSaga from "../components/LogoSaga";
import LogoFounder25 from "../components/LogoFounder25";
import EmberCanvas from "../components/ui/EmberCanvas";
import ScrollIndicator from "../components/ScrollIndicator";
import Button from "../components/ui/Button";
import FounderBadge from "../components/brand/FounderBadge";
import TriangleMark from "../components/brand/TriangleMark";
import CitySkyline from "../components/decor/CitySkyline";
import NoiseGrain from "../components/decor/NoiseGrain";
import CoordinatesTag from "../components/decor/CoordinatesTag";
import { Icon } from "@iconify/react";
import { WHATSAPP_URL } from "../lib/config";

const microPromises = [
  { icon: "lucide:lock", label: "Mesmo contrato" },
  { icon: "lucide:globe", label: "100% online" },
  { icon: "lucide:route", label: "Build personalizada" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portalY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const portalScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
    >
      <motion.div style={{ y: portalY, scale: portalScale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />

        <div className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-50">
          <CitySkyline color="rgba(255,90,31,0.22)" />
        </div>

        <div className="absolute inset-0 flex items-end justify-center">
          <div
            className="relative w-[140vw] max-w-[1400px] aspect-[4/3] -mb-[8vh]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 80%, rgba(255,90,31,0.55) 0%, rgba(255,90,31,0.2) 30%, rgba(0,0,0,0) 60%)",
            }}
          />
        </div>

        <svg
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[100vw] max-w-[1100px]"
          viewBox="0 0 1000 880"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="portalFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,90,31,0)" />
              <stop offset="55%" stopColor="rgba(255,90,31,0.25)" />
              <stop offset="100%" stopColor="rgba(255,160,80,0.85)" />
            </linearGradient>
            <linearGradient id="portalStroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,90,31,0.4)" />
              <stop offset="100%" stopColor="rgba(255,180,90,1)" />
            </linearGradient>
          </defs>
          <path d="M500 60L960 860H40L500 60Z" fill="url(#portalFill)" stroke="url(#portalStroke)" strokeWidth="3" />
          <path d="M500 130L900 830H100L500 130Z" fill="none" stroke="rgba(255,140,80,0.35)" strokeWidth="1.5" />
        </svg>

        <svg
          className="absolute left-1/2 bottom-[7%] -translate-x-1/2"
          width="36"
          height="92"
          viewBox="0 0 36 92"
          fill="none"
          aria-hidden="true"
        >
          <ellipse cx="18" cy="11" rx="7" ry="9" fill="#000" />
          <path d="M6 32 L30 32 L27 90 L9 90 Z" fill="#000" />
        </svg>
      </motion.div>

      <EmberCanvas density={0.7} className="z-[1]" />
      <NoiseGrain opacity={0.07} className="z-[2]" />

      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-black z-[2]" />
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <motion.div
        style={{ rotate: badgeRotate }}
        className="absolute right-[-160px] top-[18%] z-[4] opacity-[0.10] hidden md:block pointer-events-none"
      >
        <FounderBadge variant="lockup" tone="outline" size={520} />
      </motion.div>
      <motion.div
        style={{ rotate: badgeRotate }}
        className="absolute left-[-120px] bottom-[14%] z-[4] opacity-[0.08] hidden md:block pointer-events-none"
      >
        <FounderBadge variant="numeric" tone="outline" size={360} />
      </motion.div>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6"
      >
        <LogoSaga tone="dark" size="md" />
        <div className="hidden md:block">
          <FounderBadge variant="lockup" tone="dark" size={64} />
        </div>
      </motion.header>

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--accent)]/40 bg-black/30 backdrop-blur-sm"
        >
          <TriangleMark size={12} className="text-[var(--accent)]" />
          <span className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-white/80">
            25 anos SAGA · Edição comemorativa para alunos
          </span>
        </motion.div>

        <LogoFounder25 size="xl" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 max-w-2xl text-2xl md:text-4xl font-semibold text-white leading-[1.15]"
        >
          A SAGA evoluiu.
          <br />
          <span className="text-[var(--accent)]">Você foi escolhido</span> para entrar primeiro.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed"
        >
          Tudo o que você já tinha no seu curso, agora dentro de uma plataforma criativa
          inteira. <span className="text-white font-semibold">Pelo mesmo valor do seu contrato.</span>
        </motion.p>

        {/* Micro-promessas (3 chips) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {microPromises.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/15 text-xs uppercase tracking-[0.15em] text-white/85"
            >
              <Icon icon={p.icon} className="w-3.5 h-3.5 text-[var(--accent)]" />
              {p.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href={WHATSAPP_URL} size="lg">
            Ativar meu Founder 25
          </Button>
          <Button href="#contrato" variant="ghost" size="lg" icon={false}>
            Como funciona
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 pb-6 flex flex-col items-center gap-5"
      >
        <ScrollIndicator />
        <CoordinatesTag variant="coords" align="center" className="hidden md:flex" />
      </motion.div>
    </section>
  );
}
