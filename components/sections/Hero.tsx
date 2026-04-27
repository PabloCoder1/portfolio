// 📄 components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/contact";
import { ArrowDown, MessageCircle } from "lucide-react";

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const textVariant = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { duration: 1, delay: 0.8 } 
  },
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto">
      
      {/* Badge Superior */}
      <motion.div 
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="flex items-center gap-3 mb-8 md:mb-12"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-glow opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-glow"></span>
        </span>
        <span className="text-mist font-inter text-sm tracking-wider uppercase">
          Disponível para novos projetos
        </span>
      </motion.div>

      {/* Título Gigante com Stagger */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="flex flex-col font-syne font-extrabold text-[12vw] md:text-[110px] lg:text-[130px] leading-[0.9] tracking-tighter text-bone uppercase mb-10"
      >
        <motion.div variants={textVariant} className="overflow-hidden">
          SITES PREMIUM
        </motion.div>
        <motion.div variants={textVariant} className="overflow-hidden flex items-center gap-4 md:gap-8">
          <span className="text-mist font-inter font-light text-2xl md:text-5xl lowercase hidden md:block mt-6">
            de
          </span>
          ALTA CONVERSÃO
        </motion.div>
        <motion.div variants={textVariant} className="overflow-hidden text-electric">
          & OTIMIZAÇÃO GMN.
        </motion.div>
      </motion.div>

      {/* Subtítulo e CTAs */}
      <motion.div 
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-auto"
      >
        <p className="text-mist font-inter text-base md:text-lg max-w-md leading-relaxed text-balance">
          Desenvolvedor Full-Stack focado em transformar a presença digital do seu negócio com design premium e estratégias que geram vendas todos os dias.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a
            href="#portfolio"
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-bone hover:text-electric transition-colors font-inter uppercase text-sm tracking-widest pb-2 border-b border-border hover:border-electric"
          >
            Ver portfólio
            <ArrowDown size={16} />
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-bone text-ink hover:bg-electric hover:text-white transition-all px-8 py-4 font-inter font-medium uppercase text-sm tracking-wider"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}