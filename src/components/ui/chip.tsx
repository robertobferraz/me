'use client';

import { motion } from 'framer-motion';

export function Chip({ label }: { label: string }) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className="rounded-full border border-slate-400/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted"
    >
      {label}
    </motion.span>
  );
}
