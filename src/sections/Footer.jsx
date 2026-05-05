import AssinaturaMark from "../components/brand/AssinaturaMark";
import TriangleMark from "../components/brand/TriangleMark";

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-12 py-16 border-t border-white/8 overflow-hidden">
      {/* Triângulo enorme atrás, mal visível */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none">
        <TriangleMark size={520} className="text-[var(--accent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <AssinaturaMark tone="dark" size="lg" />
          <div className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.3em] text-white/40 font-semibold">
            <span>34° 06′ 06″ N</span>
            <span className="w-px h-3 bg-white/15" />
            <span>118° 19′ 35″ O</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-10 border-t border-white/8">
          <p className="max-w-md text-sm text-white/55 leading-relaxed">
            A escola de carreiras criativas para o novo mundo.
            <br />
            <span className="text-white/35">
              The creative future has no walls. Now, you can learn and create anywhere.
            </span>
          </p>
          <div className="flex flex-col gap-1 text-right md:text-right text-[0.7rem] uppercase tracking-[0.25em] text-white/35">
            <span>SAGA · Founder 25</span>
            <span>© {new Date().getFullYear()} · Edição comemorativa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
