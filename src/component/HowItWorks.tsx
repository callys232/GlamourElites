import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import ParticleBg from './ParticleBg'

const steps = [
  {
    number: '01',
    icon: '◈',
    title: 'Choose Your Service',
    short: 'Pick your vibe',
    desc: 'Browse our full menu of luxury services — from bridal makeup to precision barbering. Not sure? Our team helps you find the perfect fit.',
    color: '#d4af37',
    action: 'Browse Services',
    href: '/services',
  },
  {
    number: '02',
    icon: '✦',
    title: 'Book Your Slot',
    short: 'Reserve your time',
    desc: 'Fill out a quick booking form online or tap straight into WhatsApp for instant conversation. We make reservations effortless.',
    color: '#a855f7',
    action: 'Book Now',
    href: '/book',
  },
  {
    number: '03',
    icon: '❋',
    title: 'Get Confirmed',
    short: 'We\'ll reach out',
    desc: 'Receive instant WhatsApp confirmation + an email receipt. We\'ll remind you the day before so you\'re never caught off guard.',
    color: '#ec4899',
    action: null,
    href: null,
  },
  {
    number: '04',
    icon: '◉',
    title: 'Arrive & Transform',
    short: 'The magic happens',
    desc: 'Walk in, sit back, and let our artisans do the rest. Walk out as the most powerful version of yourself — every single time.',
    color: '#3b82f6',
    action: null,
    href: null,
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-24 bg-[#0c0000] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a0b2e,transparent_70%)] opacity-60" />
      <ParticleBg opacity={0.35} />

      <div className="relative max-w-6xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-3">The Experience</p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-serif">
            How It <span className="shimmer-text">Works</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm max-w-md mx-auto">
            Four simple steps stand between you and your most elevated look yet.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
              className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-[#d4af37]/60 via-[#a855f7]/60 to-[#3b82f6]/60"
            />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.45 }}
                  onHoverStart={() => setActive(i)}
                  onHoverEnd={() => setActive(null)}
                  className="relative group cursor-default"
                >
                  {/* Number bubble */}
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    className="w-24 h-24 rounded-full mx-auto mb-6 flex flex-col items-center justify-center
                      border-2 transition-all duration-400 relative z-10 shadow-lg"
                    style={{
                      borderColor: active === i ? step.color : 'rgba(255,255,255,0.1)',
                      backgroundColor: active === i ? `${step.color}15` : '#0c0000',
                      boxShadow: active === i ? `0 0 24px ${step.color}30` : 'none',
                    }}
                  >
                    <span className="text-xl font-bold" style={{ color: step.color }}>{step.icon}</span>
                    <span className="text-[10px] font-bold text-gray-500 tracking-wider mt-0.5">{step.number}</span>
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    animate={{ y: active === i ? -4 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="bg-[#1a0b2e] border border-white/8 rounded-2xl p-5 text-center
                      transition-all duration-300 group-hover:border-white/20 group-hover:shadow-xl min-h-[180px] flex flex-col"
                    style={{
                      borderColor: active === i ? `${step.color}35` : undefined,
                      boxShadow: active === i ? `0 12px 40px ${step.color}15` : undefined,
                    }}
                  >
                    <div className="h-0.5 w-8 rounded-full mx-auto mb-3" style={{ backgroundColor: step.color }} />
                    <h3 className="text-white font-bold text-sm mb-2">{step.title}</h3>

                    <AnimatePresence mode="wait">
                      {active === i ? (
                        <motion.p
                          key="full"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-400 text-xs leading-relaxed flex-1"
                        >
                          {step.desc}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="short"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-gray-500 text-xs flex-1"
                        >
                          {step.short}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {step.href && active === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3"
                      >
                        <Link
                          to={step.href}
                          className="inline-block px-4 py-1.5 rounded-lg text-[10px] font-bold tracking-wide
                            transition-all duration-200 active:scale-95"
                          style={{
                            backgroundColor: `${step.color}20`,
                            color: step.color,
                            border: `1px solid ${step.color}40`,
                          }}
                        >
                          {step.action} →
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative"
            >
              {/* Vertical connector */}
              {i < steps.length - 1 && (
                <div className="absolute left-7 top-16 bottom-0 w-px bg-gradient-to-b from-white/15 to-transparent" />
              )}

              <div className="flex gap-4 items-start">
                {/* Step circle */}
                <div
                  className="shrink-0 w-14 h-14 rounded-full flex flex-col items-center justify-center border-2"
                  style={{ borderColor: `${step.color}50`, backgroundColor: `${step.color}12` }}
                >
                  <span style={{ color: step.color }} className="text-base">{step.icon}</span>
                  <span className="text-[9px] text-gray-500 font-bold">{step.number}</span>
                </div>

                {/* Card */}
                <div className="flex-1 bg-[#1a0b2e] border border-white/8 rounded-2xl p-4">
                  <div className="h-0.5 w-6 rounded-full mb-2" style={{ backgroundColor: step.color }} />
                  <h3 className="text-white font-bold text-sm mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                  {step.href && (
                    <Link
                      to={step.href}
                      className="inline-block mt-3 px-3 py-1.5 rounded-lg text-[10px] font-bold"
                      style={{
                        backgroundColor: `${step.color}18`,
                        color: step.color,
                        border: `1px solid ${step.color}35`,
                      }}
                    >
                      {step.action} →
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            to="/book"
            className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-xl
              bg-gradient-to-r from-purple-600 via-purple-700 to-[#d4af37]
              text-black font-bold text-sm shadow-xl shadow-purple-500/20
              hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1
              active:scale-95 transition-all duration-300"
          >
            Start Your Journey →
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
