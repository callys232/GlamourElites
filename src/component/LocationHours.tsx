import { useState } from 'react'
import { motion } from 'framer-motion'
import { buildWhatsAppUrl } from '../lib/config'
import ParticleBg from './ParticleBg'

const hours = [
  { day: 'Monday',    time: '9:00 AM – 7:00 PM',  open: true  },
  { day: 'Tuesday',   time: '9:00 AM – 7:00 PM',  open: true  },
  { day: 'Wednesday', time: '9:00 AM – 7:00 PM',  open: true  },
  { day: 'Thursday',  time: '9:00 AM – 8:00 PM',  open: true  },
  { day: 'Friday',    time: '9:00 AM – 8:00 PM',  open: true  },
  { day: 'Saturday',  time: '8:00 AM – 9:00 PM',  open: true  },
  { day: 'Sunday',    time: 'By Appointment Only', open: true  },
]

const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

const contacts = [
  { icon: '📍', label: 'Location',  value: 'Victoria Island, Lagos, Nigeria', href: 'https://maps.google.com/?q=Victoria+Island+Lagos' },
  { icon: '📞', label: 'Phone',     value: '+234 800 000 0000',              href: 'tel:+2348000000000' },
  { icon: '✉️', label: 'Email',     value: 'hello@glamourelites.com',        href: 'mailto:hello@glamourelites.com' },
  { icon: '🕐', label: 'Hours',     value: 'Mon–Fri 9am–7pm, Sat 8am–9pm',  href: null },
]

export default function LocationHours() {
  const [copied, setCopied] = useState(false)

  const copyAddress = () => {
    navigator.clipboard.writeText('Victoria Island, Lagos, Nigeria')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const waUrl = buildWhatsAppUrl("Hi Glamour Elites! I'd like to get directions to your studio.")

  return (
    <section className="py-24 bg-[#0b0615] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#4c1d95,transparent_65%)] opacity-20" />
      <ParticleBg opacity={0.35} />

      <div className="relative max-w-6xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-3">Find Us</p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-serif">
            Location &amp; <span className="shimmer-text">Hours</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm max-w-md mx-auto">
            We're centrally located in Victoria Island. Parking available. Walk-ins welcome — appointments preferred.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left — map + contact */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Map placeholder */}
            <div className="relative rounded-2xl overflow-hidden border border-white/8 h-52 bg-[#1a0b2e] group
              hover:border-white/20 transition-all duration-300">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                  className="w-12 h-12 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center"
                >
                  <span className="text-2xl">📍</span>
                </motion.div>
                <p className="text-white text-sm font-semibold">Victoria Island, Lagos</p>
                <p className="text-gray-500 text-xs">Nigeria</p>
                <a
                  href="https://maps.google.com/?q=Victoria+Island+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 px-4 py-2 rounded-xl text-xs font-semibold border border-[#d4af37]/40 text-[#d4af37]
                    hover:bg-[#d4af37]/10 transition-all duration-200 active:scale-95"
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* Grid overlay for map look */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Contact cards */}
            {contacts.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
              >
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-[#1a0b2e] border border-white/8 rounded-xl p-4
                      hover:border-[#d4af37]/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#d4af37]/8
                      transition-all duration-300 group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-200">{c.icon}</span>
                    <div>
                      <p className="text-[10px] text-gray-500 tracking-wider uppercase">{c.label}</p>
                      <p className="text-white text-sm font-medium mt-0.5">{c.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 bg-[#1a0b2e] border border-white/8 rounded-xl p-4">
                    <span className="text-xl">{c.icon}</span>
                    <div>
                      <p className="text-[10px] text-gray-500 tracking-wider uppercase">{c.label}</p>
                      <p className="text-white text-sm font-medium mt-0.5">{c.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Copy address + WhatsApp */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={copyAddress}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold
                  border border-white/12 text-white hover:bg-white/6 hover:border-white/22 transition-all duration-200"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Address
                  </>
                )}
              </motion.button>
              <motion.a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold
                  bg-[#25D366] text-black hover:bg-[#20b856] transition-all duration-200"
              >
                <span>💬</span> Get Directions
              </motion.a>
            </div>
          </motion.div>

          {/* Right — hours table */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#1a0b2e] border border-white/8 rounded-2xl overflow-hidden relative"
          >
            {/* Top shimmer */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

            <div className="p-6 pb-4">
              <h3 className="font-extrabold text-lg font-serif mb-1">Opening Hours</h3>
              <p className="text-xs text-gray-500">All times in West Africa Time (WAT)</p>
            </div>

            <div className="divide-y divide-white/5">
              {hours.map((h, i) => {
                const isToday = h.day === today
                return (
                  <motion.div
                    key={h.day}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.025)' }}
                    className={`flex items-center justify-between px-6 py-3.5 transition-colors duration-150 ${
                      isToday ? 'bg-[#d4af37]/8' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                          className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"
                        />
                      )}
                      <span
                        className={`text-sm font-medium ${isToday ? 'text-[#d4af37] font-bold' : 'text-gray-300'}`}
                      >
                        {h.day}
                        {isToday && <span className="text-[10px] ml-1.5 text-[#d4af37]/70">Today</span>}
                      </span>
                    </div>
                    <span className={`text-xs ${isToday ? 'text-[#d4af37] font-semibold' : 'text-gray-400'}`}>
                      {h.time}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            <div className="p-6 pt-4">
              <div className="flex items-center gap-2 p-3.5 rounded-xl bg-[#d4af37]/8 border border-[#d4af37]/20">
                <span className="text-lg">💡</span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Walk-ins are welcome but booking ahead guarantees your preferred time slot.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
