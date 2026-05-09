import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ParticleBg from './ParticleBg'

const faqs = [
  {
    q: 'How do I book an appointment?',
    a: 'You can book directly through our Book page — fill in your details and hit confirm. We\'ll reach out via WhatsApp within minutes to lock in your slot. It takes less than 2 minutes.',
    color: '#d4af37',
  },
  {
    q: 'What services do you specialise in?',
    a: 'We offer five signature services: Makeup Artistry, Knotless Braiding, Dreadlocks, Wig Installation & Barbering, and Custom Sew-in Extensions. Each service is performed by dedicated specialists.',
    color: '#a855f7',
  },
  {
    q: 'Do you offer home or on-site visits?',
    a: 'Yes! Our Haute package includes in-home or on-site visits for clients who prefer a fully private experience. This is perfect for weddings, photoshoots, and VIP events.',
    color: '#ec4899',
  },
  {
    q: 'What should I do to prepare for my appointment?',
    a: 'Arrive with clean, dry hair (unless otherwise specified). Bring any inspiration photos you have. If it\'s a makeup session, come with a clean, moisturised face. We\'ll handle everything else.',
    color: '#3b82f6',
  },
  {
    q: 'How long do sessions typically take?',
    a: 'Session length depends on the service: Makeup typically takes 1–2 hours, braiding 3–6 hours, sew-in 2–4 hours, dreadlocks 2–5 hours, and barbering 45–90 minutes. Your confirmation will include an estimated duration.',
    color: '#10b981',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfers, cash, and all major mobile payment apps (OPay, PalmPay, Flutterwave). Full payment is due at time of service. Deposits may be required for large-scale bookings.',
    color: '#f59e0b',
  },
  {
    q: 'Do you cater for bridal parties and events?',
    a: 'Absolutely. Bridal party bookings are our specialty. We can accommodate full parties at our studio or travel to your venue. Contact us early — bridal slots fill up months in advance.',
    color: '#ec4899',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'We ask for at least 24 hours notice for cancellations. Late cancellations may incur a rebooking fee. We understand emergencies happen — just reach out on WhatsApp and we\'ll always work something out.',
    color: '#a855f7',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 bg-[#0b0615] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#4c1d95,transparent_65%)] opacity-20" />
      <ParticleBg opacity={0.3} />

      <div className="relative max-w-3xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-3">Got Questions?</p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-serif">
            Frequently Asked <span className="shimmer-text">Questions</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm max-w-sm mx-auto">
            Everything you need to know before your first visit — and beyond.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
              >
                <motion.div
                  animate={{
                    borderColor: isOpen ? `${faq.color}40` : 'rgba(255,255,255,0.06)',
                    boxShadow: isOpen ? `0 8px 32px ${faq.color}12` : 'none',
                  }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border overflow-hidden bg-[#1a0b2e]"
                >
                  {/* Question row */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start gap-4 p-5 text-left
                      hover:bg-white/[0.02] transition-colors duration-200 group"
                  >
                    {/* Icon */}
                    <motion.div
                      animate={{
                        rotate: isOpen ? 45 : 0,
                        backgroundColor: isOpen ? `${faq.color}20` : 'rgba(255,255,255,0.04)',
                        borderColor: isOpen ? `${faq.color}50` : 'rgba(255,255,255,0.08)',
                      }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 mt-0.5 w-7 h-7 rounded-full border flex items-center justify-center"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        style={{ color: isOpen ? faq.color : '#9ca3af' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.div>

                    <span
                      className="text-sm font-semibold leading-snug transition-colors duration-200"
                      style={{ color: isOpen ? '#ffffff' : '#d1d5db' }}
                    >
                      {faq.q}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-16">
                          <div
                            className="h-px w-full mb-4 opacity-20"
                            style={{ background: `linear-gradient(90deg, ${faq.color}, transparent)` }}
                          />
                          <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-gray-500 mt-10"
        >
          Still have questions?{' '}
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4af37] hover:underline"
          >
            Chat with us on WhatsApp
          </a>
          {' '}— we reply instantly.
        </motion.p>

      </div>
    </section>
  )
}
