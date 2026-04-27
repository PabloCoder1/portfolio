// 📄 components/sections/Portfolio.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("Todos");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Extrai as categorias únicas dinamicamente dos dados
  const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = filter === "Todos" 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <SectionWrapper id="portfolio" className="border-t border-border">
      
      {/* Header da Seção e Filtros */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <span className="text-electric font-inter text-xs tracking-[0.2em] uppercase mb-4 block">
            Trabalhos Selecionados
          </span>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-bone uppercase tracking-tighter">
            Portfólio.
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-inter text-xs uppercase tracking-wider px-5 py-2.5 rounded-none transition-all ${
                filter === cat
                  ? "bg-bone text-ink border border-bone font-medium"
                  : "bg-transparent text-mist border border-border hover:border-electric hover:text-bone"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Lista Editorial */}
      <div className="flex flex-col border-t border-border relative">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.a
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              href={project.liveUrl || "#"}
              target={project.liveUrl ? "_blank" : "_self"}
              rel={project.liveUrl ? "noopener noreferrer" : ""}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-14 border-b border-border md:hover:px-8 transition-all duration-500 z-10"
            >
              {/* Fundo sutil no hover */}
              <div className="absolute inset-0 bg-slate opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full md:w-auto">
                <span className="text-mist font-syne font-bold text-xl md:text-2xl w-12 hidden md:block">
                  #{project.id}
                </span>
                <div>
                  <span className="text-electric font-inter text-xs uppercase tracking-widest mb-3 block">
                    {project.category}
                  </span>
                  <h3 className="font-syne font-extrabold text-3xl md:text-5xl text-bone group-hover:text-electric transition-colors duration-300 uppercase tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-8 mt-6 md:mt-0">
                <div className="hidden lg:flex gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-inter text-mist border border-border px-3 py-1 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-electric group-hover:border-electric group-hover:text-white text-mist transition-all duration-300">
                  <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              {/* Thumbnail flutuante no Desktop */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[320px] h-[200px] hidden xl:block pointer-events-none z-20 overflow-hidden shadow-2xl border border-border bg-slate"
                  >
                    {/* TODO: Substituir por <Image /> do Next.js após adicionar as imagens na pasta public */}
                    <div 
                      className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          ))}
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-mist font-inter uppercase tracking-widest text-sm">
            Nenhum projeto encontrado.
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}