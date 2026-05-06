import { motion } from 'framer-motion'
import ParticleBg from './ParticleBg'

const testimonials = [
  {
    name: 'Amara O.',
    service: 'Bridal Makeup',
    text: 'I looked absolutely breathtaking on my wedding day. The attention to detail and the way they understood my vision was unmatched. Truly a luxury experience.',
    rating: 5,
    initials: 'AO',
    color: '#ec4899',
  },
  {
    name: 'Chidera N.',
    service: 'Knotless Braiding',
    text: 'My braids lasted 8 weeks and still looked fresh! The technique and care put into every strand was evident. I won\'t go anywhere else.',
    rating: 5,
    initials: 'CN',
    color: '#d4af37',
  },
  {
    name: 'Funmi A.',
    service: 'Custom Tailoring',
    text: 'I needed an outfit for a high-profile event and they delivered beyond expectation. The fit, the fabric, the finish — absolute perfection.',
    rating: 5,
    initials: 'FA',
    color: '#a855f7',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0b0615] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#4c1d95,transparent_65%)] opacity-30" />
      <ParticleBg opacity={0.5} />

      <div className="relative max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37] mb-2">What They Say</p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-serif">Client Testimonials</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              className="bg-[#1a0b2e] border border-white/8 rounded-2xl p-5 md:p-6
                hover:border-white/20 hover:-translate-y-1 hover:shadow-xl
                transition-all duration-300 group flex flex-col"
              style={{ '--hover-shadow': `0 12px 40px ${t.color}22` } as React.CSSProperties}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-[#d4af37] text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed italic flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-sm shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${t.color}, #d4af37)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
