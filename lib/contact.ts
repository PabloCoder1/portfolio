// 📄 lib/contact.ts

// TODO: Substituir pelo WhatsApp e e-mail reais antes de publicar
export const WHATSAPP_NUMBER = '5500000000000'
export const EMAIL = 'seuemail@exemplo.com'

export const whatsappLink = (service?: string): string => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  const msg = service
    ? `Olá! Tenho interesse no serviço de ${service}. Podemos conversar?`
    : 'Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.'
  return `${base}?text=${encodeURIComponent(msg)}`
}

export const emailLink = (): string => `mailto:${EMAIL}`