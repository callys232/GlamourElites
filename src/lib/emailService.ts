import emailjs from '@emailjs/browser'
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_BOOKING_TEMPLATE,
  EMAILJS_NEWSLETTER_TEMPLATE,
  EMAILJS_CONTACT_TEMPLATE,
  EMAILJS_PUBLIC_KEY,
} from './config'

let initialised = false

function init() {
  if (!initialised && EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY)
    initialised = true
  }
}

export async function sendBookingEmail(params: {
  name: string
  email: string
  phone: string
  service: string
  date: string
  notes: string
}) {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_BOOKING_TEMPLATE) return
  init()
  await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_BOOKING_TEMPLATE, {
    from_name: params.name,
    from_email: params.email,
    phone: params.phone,
    service: params.service,
    date: params.date,
    notes: params.notes || 'None',
    reply_to: params.email,
  })
}

export async function sendNewsletterEmail(email: string) {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_NEWSLETTER_TEMPLATE) return
  init()
  await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_NEWSLETTER_TEMPLATE, {
    subscriber_email: email,
  })
}

export async function sendContactEmail(params: {
  name: string
  email: string
  subject: string
  message: string
}) {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_CONTACT_TEMPLATE) return
  init()
  await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE, {
    from_name: params.name,
    from_email: params.email,
    subject: params.subject,
    message: params.message,
    reply_to: params.email,
  })
}
