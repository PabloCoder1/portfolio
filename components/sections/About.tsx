// 📄 components/sections/About.tsx
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" className="border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Texto da Esquerda (60%) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-electric font-inter text-xs tracking-[0.2em] uppercase mb-4">
            A Abordagem
          </span>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-bone mb-8 uppercase tracking-tighter leading-tight">
            Muito além do <br className="hidden md:block"/>
            <span className="text-mist">código.</span>
          </h2>
          
          <div className="space-y-6 text-mist font-inter text-base md:text-lg leading-relaxed text-balance">
            <p>
              Sou o Pablo Lima, Desenvolvedor Full-Stack e Analista de Automação/RPA. Eu não construo apenas sites esteticamente agradáveis; eu desenvolvo sistemas de conversão e arquiteturas eficientes para o seu negócio.
            </p>
            <p>
              Minha visão de desenvolvimento é fortemente baseada no mindset <span className="text-bone">Lean Six Sigma</span>. Antes de escrever a primeira linha de código, meu foco é identificar e eliminar o lixo. Se uma etapa, funcionalidade ou elemento visual não gera valor real para o usuário ou não aumenta a conversão, ele não deve existir.
            </p>
            <p>
              Transitando entre o desenvolvimento web moderno com Next.js e a hiperautomação, construo presenças digitais com visual premium e performance extrema, garantindo que o seu negócio funcione sem fricção na internet.
            </p>
          </div>
        </div>

        {/* Estatísticas / Destaques da Direita (40%) */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-10 lg:pl-16 mt-8 lg:mt-0">
          <div className="flex flex-col border-l-2 border-electric pl-6 hover:translate-x-2 transition-transform duration-300">
            <span className="font-syne font-extrabold text-5xl md:text-6xl text-bone">100%</span>
            <span className="font-inter text-xs text-mist uppercase tracking-[0.15em] mt-3">Foco em Conversão (CRO)</span>
          </div>
          
          <div className="flex flex-col border-l-2 border-border pl-6 hover:border-glow hover:translate-x-2 transition-all duration-300">
            <span className="font-syne font-extrabold text-5xl md:text-6xl text-bone">Zero</span>
            <span className="font-inter text-xs text-mist uppercase tracking-[0.15em] mt-3">Desperdício (Metodologia Lean)</span>
          </div>

          <div className="flex flex-col border-l-2 border-border pl-6 hover:border-electric hover:translate-x-2 transition-all duration-300">
            <span className="font-syne font-extrabold text-5xl md:text-6xl text-bone">Tech</span>
            <span className="font-inter text-xs text-mist uppercase tracking-[0.15em] mt-3">Next.js, React & Hiperautomação</span>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}