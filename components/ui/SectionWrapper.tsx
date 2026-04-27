// 📄 components/ui/SectionWrapper.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
};

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 ${className}`}
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      transition={fadeInUp.transition}
    >
      {children}
    </motion.section>
  );
}