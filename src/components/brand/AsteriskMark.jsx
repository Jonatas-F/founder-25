/**
 * Asterisco laranja — marcador usado nas peças oficiais Founder 25 antes
 * dos pilares (Método · Direção · Portfólio · Execução Real).
 */
export default function AsteriskMark({ size = 14, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2V22M4 6L20 18M20 6L4 18M2 12H22"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
