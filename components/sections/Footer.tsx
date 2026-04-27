// 📄 components/sections/Footer.tsx
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/pablo-lima-aaba02269/" },
    { name: "GitHub", href: "https://github.com/PabloCoder1" },
    { name: "WhatsApp", href: "#contact" }
  ];

  return (
    <footer className="w-full bg-ink border-t border-border py-12 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        
        {/* Marca & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-syne font-extrabold text-2xl text-bone tracking-tight uppercase mb-2">
            Pablo Lima<span className="text-electric">.</span>
          </span>
          <span className="text-mist font-inter text-xs tracking-[0.15em] uppercase">
            Desenvolvedor Full-Stack & RPA
          </span>
        </div>

        {/* Links Sociais */}
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : "_self"}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
              className="group flex items-center gap-1 text-mist hover:text-electric transition-colors font-inter text-sm uppercase tracking-wider"
            >
              {link.name}
              {link.href.startsWith("http") && (
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              )}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-border font-inter text-xs tracking-widest uppercase">
          &copy; {currentYear} TODOS OS DIREITOS RESERVADOS.
        </div>
      </div>
    </footer>
  );
}