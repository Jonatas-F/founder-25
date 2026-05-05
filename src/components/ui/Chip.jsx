export default function Chip({ children, accent = false, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] border ${
        accent
          ? "bg-[var(--accent)]/10 border-[var(--accent)]/40 text-[var(--accent)]"
          : "bg-white/5 border-white/15 text-white/80"
      } ${className}`}
    >
      {children}
    </span>
  );
}
