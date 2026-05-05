import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold tracking-tight rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-5 text-lg",
    xl: "px-10 py-6 text-xl",
  };

  const variants = {
    primary:
      "bg-[var(--accent)] text-white hover:bg-[var(--accent-deep)] shadow-[0_0_50px_var(--accent-glow)]",
    outline:
      "bg-transparent text-white border border-white/20 hover:border-[var(--accent)] hover:text-[var(--accent)]",
    ghost: "bg-transparent text-white/80 hover:text-white",
  };

  const Component = href ? motion.a : motion.button;
  const props = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
    : { onClick, type: rest.type || "button" };

  return (
    <Component
      {...props}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && <ArrowUpRight className="h-[1em] w-[1em]" strokeWidth={2.4} />}
    </Component>
  );
}
