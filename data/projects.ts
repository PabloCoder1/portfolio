// 📄 data/projects.ts

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: '01',
    title: 'Thuany Lima: Estética',
    category: 'Landing Page',
    description: 'Landing page de alta conversão para clínica de estética, com foco em CRO, design premium e copywriting estratégico para agendamentos.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'CRO'],
    image: '/images/projects/thuany-lima.jpg', // TODO: adicionar imagem real na pasta /public/images/projects/
    featured: true,
  },
  {
    id: '02',
    title: 'Gym Performance',
    category: 'Landing Page',
    description: 'Página de conversão para academia com background em vídeo na hero section, visual clean e foco total na experiência do usuário.',
    tags: ['React', 'TypeScript', 'UI/UX'],
    image: '/images/projects/gym-performance.jpg', // TODO: adicionar imagem real na pasta /public/images/projects/
    featured: true,
  },
  {
    id: '03',
    title: 'GoodHamburger',
    category: 'E-commerce',
    description: 'Plataforma de pedidos online com interface moderna e sistema de carrinho otimizado para aumentar o ticket médio e facilitar a navegação.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://github.com/PabloCoder1/Desafio-GoodHamburger',
    image: '/images/projects/goodhamburger.jpg', // TODO: adicionar imagem real na pasta /public/images/projects/
    featured: false,
  },
  {
    id: '04',
    title: 'Thorogood Data',
    category: 'Site Institucional',
    description: 'Site corporativo focado em serviços especializados, aliado à otimização completa do perfil do Google Meu Negócio (GMN) para captura de leads locais.',
    tags: ['Next.js', 'SEO', 'GMN'],
    image: '/images/projects/thorogood.jpg', // TODO: adicionar imagem real na pasta /public/images/projects/
    featured: false,
  }
];