// 📄 components/sections/Services.tsx
import SectionWrapper from "@/components/ui/SectionWrapper";
import { services } from "@/data/services";
import { whatsappLink } from "@/lib/contact";
import { Check, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <SectionWrapper id="services" className="border-t border-border">
      
      {/* Header da Seção */}
      <div className="mb-16">
        <span className="text-electric font-inter text-xs tracking-[0.2em] uppercase mb-4 block">
          Áreas de Atuação
        </span>
        <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-bone uppercase tracking-tighter">
          Serviços.
        </h2>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div 
            key={service.id}
            className="group relative bg-slate p-8 md:p-12 overflow-hidden border border-border hover:border-electric transition-colors duration-500 flex flex-col h-full"
          >
            {/* Número em Background */}
            <div className="absolute -right-4 -bottom-10 text-[180px] font-syne font-extrabold text-ink opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-500">
              {service.id}
            </div>

            {/* Conteúdo do Card */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <h3 className="font-syne font-extrabold text-3xl text-bone mb-2 uppercase tracking-tight">
                  {service.title}
                </h3>
                <span className="text-electric font-inter text-sm tracking-wide block mb-6">
                  {service.subtitle}
                </span>
                <p className="text-mist font-inter text-base leading-relaxed text-balance">
                  {service.description}
                </p>
              </div>

              {/* Entregáveis */}
              <div className="mb-10 flex-grow">
                <span className="font-inter text-xs text-bone uppercase tracking-[0.15em] mb-4 block">
                  O que está incluso:
                </span>
                <ul className="space-y-3">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-electric shrink-0 mt-0.5" />
                      <span className="font-inter text-sm text-mist">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href={whatsappLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-between w-full border border-border group-hover:border-electric p-4 font-inter text-sm uppercase tracking-wider text-bone group-hover:text-electric transition-colors duration-300 bg-ink/50 backdrop-blur-sm"
              >
                <span>{service.cta}</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}