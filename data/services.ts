// 📄 data/services.ts

export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  cta: string;
};

export const services: Service[] = [
  {
    id: '01',
    title: 'Criação de Sites',
    subtitle: 'Plataformas de alta conversão e design premium',
    description: 'Desenvolvimento de sites e landing pages focados na experiência do usuário (UX/UI), design moderno e otimização para vendas (CRO). Cada projeto é construído com código limpo e arquitetura de ponta para garantir máxima performance.',
    deliverables: [
      'Design moderno, limpo e minimalista',
      'Foco estratégico em Conversão (CRO)',
      'Performance extrema e SEO técnico',
      'Aplicações escaláveis com Next.js e React'
    ],
    cta: 'Quero um site premium'
  },
  {
    id: '02',
    title: 'Google Meu Negócio (GMN)',
    subtitle: 'Domine as buscas locais e atraia mais clientes',
    description: 'Configuração e otimização avançada do seu perfil no Google. Analisamos e eliminamos os gargalos de visibilidade para focar exatamente no que gera valor e atrai clientes qualificados da sua região todos os dias.',
    deliverables: [
      'Configuração e verificação de perfil',
      'Otimização avançada de SEO local',
      'Estratégia de ranqueamento e autoridade',
      'Posicionamento visual da marca nas buscas'
    ],
    cta: 'Quero otimizar meu GMN'
  }
];