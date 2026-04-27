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
    liveUrl: 'https://tl-estetica-landing.vercel.app/',
    image: '/images/projects/thuany-lima.png', // TODO: adicionar imagem real na pasta /public/images/projects/
    featured: true,
  },
  {
    id: '02',
    title: 'Gym Performance',
    category: 'Landing Page',
    description: 'Página de conversão para academia com background em vídeo na hero section, visual clean e foco total na experiência do usuário.',
    tags: ['React', 'TypeScript', 'UI/UX'],
    liveUrl: 'https://animal-gym-landing.vercel.app/',
    image: '/images/projects/gym-performance.png', // TODO: adicionar imagem real na pasta /public/images/projects/
    featured: true,
  },
  {
    id: '03',
    title: 'J Garcia Frutos do Mar',
    category: 'Landing Page',
    description: 'Plataforma de pedidos online com interface moderna e sistema de carrinho otimizado para aumentar o ticket médio e facilitar a navegação.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://j-garcia-site.vercel.app/',
    image: '/images/projects/j-garcia.png', // TODO: adicionar imagem real na pasta /public/images/projects/
    featured: false,
  },
  {
    id: '04',
    title: 'Mundo Animal',
    category: 'Landing Page + GMN',
    description: 'Página de conversão para Petshop com background em vídeo na hero section, visual clean e foco total na experiência do usuário.',
    tags: ['Next.js', 'SEO', 'GMN'],
    liveUrl: 'https://mundo-animal-nu.vercel.app/',
    image: '/images/projects/mundo-animal.png', // TODO: adicionar imagem real na pasta /public/images/projects/
    featured: false,
  }
];