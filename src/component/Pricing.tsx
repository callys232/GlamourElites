import { useState } from 'react'
import { motion } from 'framer-motion'
import BookingModal from './BookingModal'
import ParticleBg from './ParticleBg'

const plans = [
  {
    name: 'Atelier',
    subtitle: 'The Art of First Impressions',
    price: '₺4.850',
    usd: '$150',
    color: '#a855f7',
    badge: null,
    icon: '✦',
    features: [
      { text: '1 Signature Service Session',   icon: '◈' },
      { text: 'Personal Style Consultation',    icon: '◈' },
      { text: 'Premium Product Application',    icon: '◈' },
      { text: 'WhatsApp Aftercare Support',     icon: '◈' },
      { text: 'Digital Look Preview',           icon: '◈' },
    ],
    cta: 'Reserve Atelier',
    highlight: false,
    service: 'Atelier Package',
  },
  {
    name: 'Prestige',
    subtitle: 'For Those Who Demand Excellence',
    price: '₺9.500',
    usd: '$295',
    color: '#d4af37',
    badge: 'Most Requested',
    icon: '✦✦',
    features: [
      { text: '2 Luxury Service Sessions',        icon: '◈' },
      { text: 'Full VIP Consultation',             icon: '◈' },
      { text: 'Couture-Level Finish',              icon: '◈' },
      { text: 'Priority Scheduling',               icon: '◈' },
      { text: 'Exclusive Aftercare Regimen',       icon: '◈' },
      { text: 'High-Res Photo Session',            icon: '◈' },
    ],
    cta: 'Reserve Prestige',
    highlight: true,
    service: 'Prestige Package',
  },
  {
    name: 'Haute',
    subtitle: 'The Pinnacle of Luxury',
    price: '₺16.500',
    usd: '$510',
    color: '#ec4899',
    badge: 'Signature',
    icon: '✦✦✦',
    features: [
      { text: 'Unlimited Sessions (Monthly)',    icon: '◈' },
      { text: 'White-Glove VIP Concierge',       icon: '◈' },
      { text: 'Bespoke Signature Artistry',      icon: '◈' },
      { text: 'In-Studio or Home Visit',         icon: '◈' },
      { text: '24/7 Dedicated Line',             icon: '◈' },
      { text: 'Luxury Product Kit Included',     icon: '◈' },
      { text: 'Editorial Photography',           icon: '◈' },
    ],
    cta: 'Reserve Haute',
    highlight: false,
    service: 'Haute Package',
  },
]

export default function Pricing() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selected,  setSelected]  = useState<string | null>(null)

  const open = (service: string) => { setSelected(service); setModalOpen(true) }

  return (
    <section id="pricing" className="py-24 bg-[#0b0615] relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#4c1d95,transparent_60%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#1a0b2e,transparent_55%)] opacity-60" />
      <ParticleBg opacity={0.35} />

      <div className="relative max-w-6xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-3">Investment in Excellence</p>
          <h2 className="text-4xl md:text-6xl font-extrabold font-serif leading-tight">
            Pricing &amp;{' '}
            <span className="shimmer-text">Packages</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm max-w-md mx-auto leading-relaxed">
            Every tier is an investment in yourself. Prices in Turkish Lira — no hidden fees, ever.
          </p>

          {/* Currency note */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/4 border border-white/8 text-[10px] text-gray-400 tracking-wider">
            <span className="text-[#d4af37]">₺</span>
            Turkish Lira · USD equivalent shown
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 items-end">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.45, ease: 'easeOut' }}
              className={`relative rounded-3xl flex flex-col overflow-hidden
                transition-all duration-400 group
                ${plan.highlight
                  ? 'shadow-2xl md:scale-[1.05] md:-translate-y-3'
                  : 'hover:-translate-y-2 hover:shadow-xl'
                }`}
              style={{
                boxShadow: plan.highlight
                  ? `0 0 0 1px ${plan.color}55, 0 24px 60px ${plan.color}20`
                  : undefined,
              }}
            >
              {/* Shimmer top border */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${plan.color}80, transparent)`,
                }}
              />

              {/* Card inner */}
              <div
                className={`flex flex-col flex-1 p-6 md:p-7
                  ${plan.highlight
                    ? 'bg-gradient-to-b from-[#2e1650] via-[#1f0e3a] to-[#150827]'
                    : 'bg-[#1a0b2e] hover:bg-[#1e0d35]'
                  } transition-colors duration-300 border border-white/6`
                }
                style={{
                  borderColor: plan.highlight ? `${plan.color}35` : undefined,
                  borderRadius: '1.5rem',
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className={`self-start mb-5 px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase
                      ${plan.highlight
                        ? 'bg-[#d4af37] text-black shadow-lg shadow-yellow-500/25'
                        : 'border text-white/80'
                      }`}
                    style={!plan.highlight ? {
                      borderColor: `${plan.color}60`,
                      background: `${plan.color}15`,
                      color: plan.color,
                    } : undefined}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Tier icon */}
                <p
                  className="text-xs tracking-[0.2em] mb-2 font-semibold"
                  style={{ color: plan.color }}
                >
                  {plan.icon}
                </p>

                {/* Name */}
                <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-white leading-none">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1.5 italic leading-relaxed">{plan.subtitle}</p>

                {/* Price */}
                <div className="mt-6 mb-1 flex items-end gap-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-white leading-none tracking-tight">
                    {plan.price}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-500">≈ {plan.usd} USD</span>
                  <span className="text-gray-700 text-xs">·</span>
                  <span className="text-xs text-gray-500">per session</span>
                </div>

                {/* Divider */}
                <div
                  className="my-6 h-px w-full opacity-20"
                  style={{ background: `linear-gradient(90deg, ${plan.color}, transparent)` }}
                />

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map(f => (
                    <li key={f.text} className="flex items-start gap-3 text-sm">
                      <span
                        className="mt-0.5 shrink-0 text-[10px] leading-none font-bold"
                        style={{ color: plan.color }}
                      >
                        {f.icon}
                      </span>
                      <span className="text-gray-300 leading-snug">{f.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => open(plan.service)}
                  className={`w-full py-3.5 rounded-2xl font-bold text-sm tracking-wide
                    transition-all duration-300 active:scale-95 group/btn relative overflow-hidden
                    ${plan.highlight
                      ? 'bg-[#d4af37] text-black hover:bg-yellow-300 shadow-xl shadow-yellow-500/25'
                      : 'border text-white hover:brightness-110'
                    }`}
                  style={!plan.highlight ? {
                    borderColor: `${plan.color}50`,
                    background: `${plan.color}12`,
                  } : undefined}
                >
                  {/* Shine sweep on hover */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 60%, transparent 70%)',
                    }}
                  />
                  <span className="relative">{plan.cta} →</span>
                </button>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[10px] text-gray-600 mt-10 tracking-wider"
        >
          All packages include a private consultation. Custom quotes available for events &amp; weddings.
        </motion.p>
      </div>

      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected ? { name: selected } : null}
      />
    </section>
  )
}
