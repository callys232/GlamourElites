import { useState } from 'react'
import { motion } from 'framer-motion'
import { mockFashionServices } from '../mocks/mockFashion'
import { buildWhatsAppUrl } from '../lib/config'
import { sendBookingEmail } from '../lib/emailService'
import ParticleBg from '../component/ParticleBg'

type Form = { name: string; email: string; phone: string; service: string; date: string; notes: string }
type Status = 'idle' | 'loading' | 'success' | 'error'

const inputCls = `w-full px-4 py-3 rounded-xl bg-[#2a1245] text-white text-sm
  placeholder-gray-500 border border-white/8
  focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/40
  hover:border-white/16 transition-all duration-200`

export default function BookPage() {
  const [form, setForm]     = useState<Form>({ name: '', email: '', phone: '', service: '', date: '', notes: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendBookingEmail({ name: form.name, email: form.email, phone: form.phone, service: form.service || 'General', date: form.date, notes: form.notes })

      const msg = `Hi Glamour Elites! I'd like to book a *${form.service || 'session'}*.\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Phone:* ${form.phone}\n*Date/Time:* ${form.date}\n*Notes:* ${form.notes || 'None'}`
      window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer')

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="min-h-screen bg-[#0c0000] text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4c1d95,transparent_65%)] opacity-30" />
      <ParticleBg opacity={0.5} />

      <div className="relative max-w-lg mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37] mb-2 text-center">Reserve Your Spot</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-center font-serif mb-2">Book a Session</h1>
          <p className="text-gray-400 text-sm text-center mb-8">
            Fill in your details and we'll confirm via WhatsApp instantly.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#1a0b2e] border border-[#d4af37]/40 rounded-2xl p-10 text-center"
            >
              <div className="text-5xl mb-4">✨</div>
              <h2 className="text-2xl font-bold text-[#d4af37]">Booking Sent!</h2>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                WhatsApp has opened so we can confirm your session.<br />
                Check your inbox for an email receipt.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 px-6 py-2.5 rounded-xl border border-[#d4af37]/40 text-[#d4af37] text-sm
                  hover:bg-[#d4af37] hover:text-black transition-all duration-200 active:scale-95"
              >
                Book Another
              </button>
            </motion.div>
          ) : (
            <div className="bg-[#1a0b2e] border border-white/8 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block">Full Name *</label>
                    <input name="name" value={form.name} onChange={handle} type="text" placeholder="Your name" required className={inputCls} />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block">Email *</label>
                    <input name="email" value={form.email} onChange={handle} type="email" placeholder="you@email.com" required className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block">WhatsApp Number *</label>
                  <input name="phone" value={form.phone} onChange={handle} type="tel" placeholder="+234 800 000 0000" required className={inputCls} />
                </div>

                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block">Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handle}
                    className={`${inputCls} appearance-none`}
                  >
                    <option value="">Select a service</option>
                    {mockFashionServices.map(s => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Essential Package">Essential Package</option>
                    <option value="Luxury Package">Luxury Package</option>
                    <option value="Elite Package">Elite Package</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block">Preferred Date & Time *</label>
                  <input name="date" value={form.date} onChange={handle} type="datetime-local" required className={inputCls} />
                </div>

                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block">Notes / Special Requests</label>
                  <textarea
                    name="notes" value={form.notes} onChange={handle}
                    placeholder="Anything we should know beforehand..."
                    rows={3}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs bg-red-950/40 border border-red-500/30 rounded-lg px-3 py-2">
                    Something went wrong. Please try again or message us directly on WhatsApp.
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
                  {status === 'loading' ? 'Sending...' : '📲 Confirm via WhatsApp'}
                </motion.button>

                <p className="text-[10px] text-gray-500 text-center mt-2">
                  You'll be redirected to WhatsApp to complete your booking confirmation.
                </p>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
