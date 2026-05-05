/**
 * Triângulo SAGA — montanha estilizada com 3 V's empilhados.
 * Reproduz o símbolo presente na assinatura oficial da marca.
 */
export default function TriangleMark({ size = 28, className = "", color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size * 0.86}
      viewBox="0 0 100 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Three nested V's that form a layered mountain — characteristic SAGA mark */}
      <path
        d="M50 4L96 84H78L50 36L22 84H4L50 4Z"
        fill={color}
      />
      <path
        d="M50 30L70 64H58L50 50L42 64H30L50 30Z"
        fill={color}
        opacity="0.55"
      />
    </svg>
  );
}
