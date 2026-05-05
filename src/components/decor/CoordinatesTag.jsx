import TriangleMark from "../brand/TriangleMark";

/**
 * Tag tipográfica decorativa, no estilo das peças oficiais Founder 25:
 * coordenadas, ID de versão, manifesto-em-uma-linha, etc.
 */
export default function CoordinatesTag({
  variant = "coords",
  className = "",
  align = "left",
}) {
  const presets = {
    coords: {
      left: "34° 06′ 06″ N",
      right: "118° 19′ 35″ O",
      caption: "THE CREATIVE FUTURE\nHAS NO WALLS",
    },
    edition: {
      left: "ED. 25/SP",
      right: "FNDR · LOTE 01",
      caption: "EXCLUSIVO\nALUNOS & EX-ALUNOS",
    },
    timestamp: {
      left: new Date().getFullYear().toString(),
      right: "BR · MUNDO",
      caption: "OS PRÓXIMOS 25\nCOMEÇAM AGORA",
    },
  };
  const data = presets[variant] || presets.coords;

  return (
    <div
      className={`flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.25em] text-white/40 font-semibold ${
        align === "center" ? "justify-center" : ""
      } ${className}`}
    >
      <span>{data.left}</span>
      <span className="w-px h-3 bg-white/15" />
      <span>{data.right}</span>
      <span className="text-[var(--accent)]/70">
        <TriangleMark size={10} color="currentColor" />
      </span>
      <span className="whitespace-pre-line text-white/35 text-[0.55rem] leading-tight">
        {data.caption}
      </span>
    </div>
  );
}
