// Easy-to-edit constants — central place to update WhatsApp, copy, etc.

export const WHATSAPP_NUMBER = "5500000000000"; // TODO: substituir pelo número real
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Quero garantir minha vaga no Founder 25 e fazer o upgrade do meu curso."
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const SUITES = [
  { name: "Suite Design", icon: "lucide:palette" },
  { name: "Suite Vídeo", icon: "lucide:clapperboard" },
  { name: "Suite 3D", icon: "lucide:box" },
  { name: "Suite Game", icon: "lucide:gamepad-2" },
  { name: "Art Suite", icon: "lucide:layers" },
];
