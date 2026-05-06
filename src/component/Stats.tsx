import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Happy Clients', icon: '✨' },
  { value: '5+',   label: 'Years of Craft', icon: '🏆' },
  { value: '99%',  label: 'Satisfaction',  icon: '💛' },
  { value: '5',    label: 'Elite Services', icon: '💎' },
]

export default function Stats() {
  return (
    <section className="bg-[#1a0b2e] border-y border-white/5 py-10">
      <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="text-center group"
          >
            <p className="text-2xl mb-1">{s.icon}</p>
            <p className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-[#d4af37] leading-none">
              {s.value}
            </p>
            <p className="text-gray-400 text-xs mt-1.5 tracking-wide">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
