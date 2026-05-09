import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sendNewsletterEmail } from '../lib/emailService'
import ParticleBg from './ParticleBg'

type Status = 'idle' | 'loading' | 'success' | 'error'

const perks = [
  { icon: '✨', text: 'Style tips & trends' },
  { icon: '🎁', text: 'Exclusive subscriber offers' },
  { icon: '📅', text: 'Early booking access' },
  { icon: '💌', text: 'VIP event invitations' },
]

export default function Newsletter() {
  const [email,  setEmail]  = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      await sendNewsletterEmail(email.trim())
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-24 bg-[#0c0000] relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a0b2e,transparent_65%)] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#4c1d95,transparent_50%)] opacity-20" />
      <ParticleBg opacity={0.5} />

      <div className="relative max-w-4xl mx-auto px-5">
        <div className="bg-[#1a0b2e]/80 backdrop-blur-xl border border-white/8 rounded-3xl overflow-hidden
          shadow-2xl hover:border-white/14 transition-all duration-500 relative">

          {/* Top shimmer */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#d4af3708,transparent_60%)]" />

          <div className="relative p-8 md:p-14">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Left — copy */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-4">Stay in the Loop</p>
                <h2 className="text-2xl md:text-4xl font-extrabold font-serif leading-tight mb-4">
                  Join the{' '}
                  <span className="shimmer-text">Glamour Elites</span>{' '}
                  Inner Circle
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-7">
                  Get exclusive style content, early access to bookings, and special offers delivered
                  straight to your inbox. No spam — only the good stuff.
                </p>

                {/* Perks */}
                <div className="grid grid-cols-2 gap-3">
                  {perks.map((p) => (
                    <motion.div
                      key={p.text}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2 text-xs text-gray-300"
                    >
                      <span>{p.icon}</span>
                      <span>{p.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right — form */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="text-center py-8"
                    >
                      {/* Animated checkmark */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="w-16 h-16 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40
                          flex items-center justify-center mx-auto mb-4"
                      >
                        <svg className="w-7 h-7 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl font-bold text-[#d4af37] mb-2"
                      >
                        You're In!
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 text-sm"
                      >
                        Welcome to the Glamour Elites circle. Watch your inbox.
                      </motion.p>
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.55 }}
                        onClick={() => setStatus('idle')}
                        className="mt-5 text-xs text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        Subscribe another email
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={submit}
                      className="space-y-4"
                    >
                      <div>
                        <label className="text-xs text-gray-400 mb-1.5 block">Email address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                          className="w-full px-4 py-3.5 rounded-xl bg-[#2a1245] text-white text-sm
                            placeholder-gray-500 border border-white/8
                            focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37]/40
                            hover:border-white/18 transition-all duration-200"
                        />
                      </div>

                      {status === 'error' && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs bg-red-950/40 border border-red-500/30 rounded-lg px-3 py-2"
                        >
                          Something went wrong. Please try again.
                        </motion.p>
                      )}

                      <motion.button
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-3.5 rounded-xl font-bold text-sm
                          bg-gradient-to-r from-purple-600 via-purple-700 to-[#d4af37]
                          shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30
                          disabled:opacity-60 transition-all duration-200 btn-glow"
                      >
                        {status === 'loading' ? (
                          <span className="flex items-center justify-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                              className="inline-block w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                            />
                            Subscribing...
                          </span>
                        ) : (
                          'Join the Inner Circle →'
                        )}
                      </motion.button>

                      <p className="text-[10px] text-gray-600 text-center">
                        No spam. Unsubscribe anytime. We respect your privacy.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
