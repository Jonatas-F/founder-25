import { motion } from "framer-motion";

export default function ScrollIndicator({ className = "" }) {
  return (
    <motion.div
      className={`flex flex-col items-center gap-2 text-white/50 ${className}`}
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-[0.65rem] uppercase tracking-[0.3em]">Role</span>
      <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
        <path d="M7 11L1 1H13L7 11Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
}
