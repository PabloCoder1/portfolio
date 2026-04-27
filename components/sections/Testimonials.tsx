// 📄 components/sections/Testimonials.tsx
import SectionWrapper from "@/components/ui/SectionWrapper";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Lado Esquerdo: Header da Seção */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="sticky top-32">
            <span className="text-electric font-inter text-xs tracking-[0.2em] uppercase mb-4 block">
              Prova Social
            </span>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-bone uppercase tracking-tighter mb-6 leading-tight">
              O impacto <br className="hidden lg:block"/>
              do foco em <br className="hidden lg:block"/>
              <span className="text-mist">resultado.</span>
            </h2>
            <p className="text-mist font-inter text-base max-w-sm leading-relaxed text-balance">
              Não confie apenas nas minhas palavras. Veja o impacto real que projetos construídos com o mindset de conversão trouxeram para outros negócios.
            </p>
          </div>
        </div>

        {/* Lado Direito: Lista Assimétrica de Depoimentos */}
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-slate p-8 md:p-10 border border-border relative transition-colors duration-300 hover:border-electric ${
                index % 2 !== 0 ? 'lg:ml-12' : 'lg:mr-12'
              }`}
            >
              {/* Ícone de aspas decorativo */}
              <Quote size={48} className="text-border absolute top-6 right-6 md:right-8 opacity-30 pointer-events-none" />
              
              {/* Texto do depoimento */}
              <p className="font-inter text-bone text-base md:text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              
              {/* Autor e Serviço */}
              <div className="flex flex-col border-t border-border pt-6">
                <span className="font-syne font-bold text-xl text-bone uppercase tracking-tight">
                  {testimonial.name}
                </span>
                <span className="font-inter text-mist text-sm mt-1">
                  {testimonial.business}
                </span>
                <span className="text-electric font-inter text-xs uppercase tracking-widest mt-4">
                  Serviço: {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}