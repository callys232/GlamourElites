import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { buildWhatsAppUrl } from '../lib/config'
import { sendBookingEmail } from '../lib/emailService'

type Form = { name: string; email: string; phone: string; date: string; notes: string }
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function BookingModal({
  open,
  onClose,
  service,
}: {
  open: boolean
  onClose: () => void
  service: { name: string } | null
}) {
  const [form, setForm]     = useState<Form>({ name: '', email: '', phone: '', date: '', notes: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const reset = () => {
    setForm({ name: '', email: '', phone: '', date: '', notes: '' })
    setStatus('idle')
  }

  const handleClose = () => { reset(); onClose() }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await sendBookingEmail({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: service?.name ?? 'General',
        date: form.date,
        notes: form.notes,
      })

      const msg = `Hi Glamour Elites! I'd like to book a *${service?.name ?? 'session'}*.\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Phone:* ${form.phone}\n*Date/Time:* ${form.date}\n*Notes:* ${form.notes || 'None'}`
      window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer')

      setStatus('success')
      setTimeout(handleClose, 2800)
    } catch {
      setStatus('error')
    }
  }

  const inputCls = `w-full px-4 py-3 rounded-xl bg-[#2a1245] text-white text-sm
    placeholder-gray-500 border border-white/8
    focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/40
    hover:border-white/16 transition-all duration-200`

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={e => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative bg-[#1a0b2e] text-white w-full sm:max-w-md
              rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Glow accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/10 via-transparent to-[#d4af37]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 p-6 max-h-[90vh] overflow-y-auto">
              {/* Pull handle (mobile) */}
              <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-5 sm:hidden" />

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">✨</div>
                  <h3 className="text-xl font-bold text-[#d4af37]">Booking Sent!</h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    WhatsApp opened to confirm your session.<br />
                    Check your email for your receipt.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-1">
                    Book {service?.name ?? 'a Session'}
                  </h3>
                  <p className="text-xs text-gray-400 mb-5">
                    Fill in your details — we'll confirm via WhatsApp instantly.
                  </p>

                  <form onSubmit={submit} className="space-y-3">
                    <input name="name"  value={form.name}  onChange={handle} type="text"          placeholder="Your Full Name"            required className={inputCls} />
                    <input name="email" value={form.email} onChange={handle} type="email"         placeholder="Email Address"             required className={inputCls} />
                    <input name="phone" value={form.phone} onChange={handle} type="tel"           placeholder="WhatsApp Number (+234...)"  required className={inputCls} />
                    <input name="date"  value={form.date}  onChange={handle} type="datetime-local"                                         required className={inputCls} />
                    <textarea
                      name="notes" value={form.notes} onChange={handle}
                      placeholder="Special requests or notes (optional)"
                      rows={3}
                      className={`${inputCls} resize-none`}
                    />

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
                      className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-[#d4af37]
                        py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-purple-500/20
                        hover:shadow-xl hover:shadow-purple-500/30
                        disabled:opacity-60 transition-all duration-200 btn-glow"
                    >
                      {status === 'loading' ? 'Sending...' : '📲 Confirm via WhatsApp'}
                    </motion.button>
                  </form>

                  <button
                    onClick={handleClose}
                    className="mt-4 w-full text-sm text-gray-400 hover:text-white transition py-1"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
