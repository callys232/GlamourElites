export const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER as string) ?? '2348000000000'
export const EMAILJS_SERVICE_ID = (import.meta.env.VITE_EMAILJS_SERVICE_ID as string) ?? ''
export const EMAILJS_BOOKING_TEMPLATE = (import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE as string) ?? ''
export const EMAILJS_NEWSLETTER_TEMPLATE = (import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE as string) ?? ''
export const EMAILJS_CONTACT_TEMPLATE = (import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE as string) ?? ''
export const EMAILJS_PUBLIC_KEY = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string) ?? ''

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
