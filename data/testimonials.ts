// 📄 data/testimonials.ts

export type Testimonial = {
  id: string;
  name: string;
  business: string;
  text: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    id: '01',
    name: 'Roberto Dantas',
    business: 'Clínica Odontológica Dantas',
    text: 'O nível de detalhe e a mentalidade focada em conversão fizeram toda a diferença. Nosso site antigo não trazia contatos, mas a nova landing page com design premium dobrou os agendamentos via WhatsApp no primeiro mês.',
    service: 'Criação de Site'
  },
  {
    id: '02',
    name: 'Mariana Silva',
    business: 'Studio de Estética Avançada',
    text: 'Trabalho impecável! O visual ficou moderno e minimalista, exatamente a estética de marca de luxo que eu buscava. A estrutura da página guiou perfeitamente meus clientes para a ação de compra.',
    service: 'Criação de Site'
  },
  {
    id: '03',
    name: 'Carlos Mendes',
    business: 'Escritório de Consultoria',
    text: 'A otimização e as configurações avançadas me colocaram no mapa. O fluxo de clientes locais que chegam até nós pelas buscas do Google aumentou drasticamente. É um investimento com retorno claro e direto.',
    service: 'Google Meu Negócio'
  }
];