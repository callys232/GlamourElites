import { useState } from 'react'
import { motion } from 'framer-motion'
import { sendContactEmail } from '../lib/emailService'
import { buildWhatsAppUrl } from '../lib/config'
import ParticleBg from '../component/ParticleBg'

type Form   = { name: string; email: string; subject: string; message: string }
type Status = 'idle' | 'loading' | 'success' | 'error'

const inputCls = `w-full px-4 py-3 rounded-xl bg-[#2a1245] text-white text-sm
  placeholder-gray-500 border border-white/8
  focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/40
  hover:border-white/16 transition-all duration-200`

const contacts = [
  { icon: '📲', label: 'WhatsApp', value: '+234 800 000 0000', href: 'https://wa.me/2348000000000' },
  { icon: '✉️', label: 'Email',    value: 'hello@glamourelites.com', href: 'mailto:hello@glamourelites.com' },
  { icon: '📍', label: 'Location', value: 'Lagos, Nigeria', href: '#' },
]

export default function ContactPage() {
  const [form,   setForm]   = useState<Form>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendContactEmail(form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const whatsappUrl = buildWhatsAppUrl(`Hi Glamour Elites! I'd like to get in touch.\n\n*Name:* ${form.name || '...'}\n*Message:* ${form.message || '...'}`)

  return (
    <section className="min-h-screen bg-[#0c0000] text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#4c1d95,transparent_65%)] opacity-30" />
      <ParticleBg opacity={0.5} />

      <div className="relative max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37] mb-2">Get In Touch</p>
          <h1 className="text-3xl md:text-5xl font-extrabold font-serif">Contact Us</h1>
          <p className="text-gray-400 mt-3 text-sm max-w-sm mx-auto">
            We'd love to hear from you. Reach out and we'll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="space-y-5"
          >
            {contacts.map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#1a0b2e] border border-white/8 rounded-2xl p-5
                  hover:border-[#d4af37]/35 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#d4af37]/8
                  transition-all duration-300 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{c.icon}</span>
                <div>
                  <p className="text-xs text-gray-400">{c.label}</p>
                  <p className="text-white text-sm font-medium mt-0.5">{c.value}</p>
                </div>
              </a>
            ))}

            {/* Quick WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl
                bg-[#25D366] text-black font-bold text-sm
                hover:bg-[#20b856] hover:-translate-y-0.5 hover:shadow-lg
                active:scale-95 transition-all duration-200"
            >
              <span className="text-lg">💬</span>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1a0b2e] border border-white/8 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-5xl mb-4">💌</div>
                <h3 className="text-xl font-bold text-[#d4af37]">Message Sent!</h3>
                <p className="text-gray-300 text-sm mt-2">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-5 px-6 py-2.5 rounded-xl border border-[#d4af37]/40 text-[#d4af37] text-sm
                    hover:bg-[#d4af37] hover:text-black transition-all duration-200 active:scale-95"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block">Your Name *</label>
                    <input name="name" value={form.name} onChange={handle} type="text" placeholder="Full name" required className={inputCls} />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block">Email *</label>
                    <input name="email" value={form.email} onChange={handle} type="email" placeholder="you@email.com" required className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block">Subject</label>
                  <input name="subject" value={form.subject} onChange={handle} type="text" placeholder="How can we help?" className={inputCls} />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block">Message *</label>
                  <textarea
                    name="message" value={form.message} onChange={handle}
                    placeholder="Tell us what you need..."
                    rows={5}
                    required
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs bg-red-950/40 border border-red-500/30 rounded-lg px-3 py-2">
                    Something went wrong. Please try WhatsApp instead.
                  </p>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-xl font-bold text-sm
                    bg-gradient-to-r from-purple-600 via-purple-700 to-[#d4af37]
                    shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30
                    disabled:opacity-60 transition-all duration-200 btn-glow"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
