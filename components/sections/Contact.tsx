// 📄 components/sections/Contact.tsx
import SectionWrapper from "@/components/ui/SectionWrapper";
import { whatsappLink, emailLink } from "@/lib/contact";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="border-t border-border">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between items-center">
        
        {/* Esquerda: Chamada para Ação */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <span className="text-electric font-inter text-xs tracking-[0.2em] uppercase mb-4 block">
            Próximos Passos
          </span>
          <h2 className="font-syne font-extrabold text-5xl md:text-7xl lg:text-[100px] text-bone uppercase tracking-tighter leading-[0.9] mb-8">
            Vamos <br />
            <span className="text-mist">conversar.</span>
          </h2>
          <p className="text-mist font-inter text-lg md:text-xl max-w-md leading-relaxed text-balance">
            Tem um projeto em mente? Esqueça formulários longos e demorados. Fale diretamente comigo pelo canal que preferir e vamos transformar a sua ideia em resultados.
          </p>
        </div>

        {/* Direita: Botões Gigantes */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-8 md:p-10 bg-bone text-ink hover:bg-electric hover:text-white transition-colors duration-500"
          >
            <div className="flex items-center gap-6 md:gap-8">
              <MessageCircle size={32} strokeWidth={1.5} />
              <span className="font-syne font-extrabold text-2xl md:text-4xl uppercase tracking-tight">
                WhatsApp
              </span>
            </div>
            <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform duration-500" />
          </a>

          <a
            href={emailLink()}
            className="group flex items-center justify-between p-8 md:p-10 border border-border hover:border-electric bg-transparent text-bone hover:text-electric transition-colors duration-500"
          >
            <div className="flex items-center gap-6 md:gap-8">
              <Mail size={32} strokeWidth={1.5} />
              <span className="font-syne font-extrabold text-2xl md:text-4xl uppercase tracking-tight">
                E-mail Direto
              </span>
            </div>
            <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform duration-500" />
          </a>
        </div>

      </div>
    </SectionWrapper>
  );
}