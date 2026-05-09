import { motion } from 'framer-motion'
import ParticleBg from './ParticleBg'

const values = [
  {
    icon: '✦',
    title: 'Artistry First',
    desc: 'Every look is a handcrafted masterpiece. We treat each client as a canvas for our finest work.',
    color: '#d4af37',
  },
  {
    icon: '◈',
    title: 'Premium Only',
    desc: 'We source only the highest-grade products and tools — because your skin and style deserve nothing less.',
    color: '#a855f7',
  },
  {
    icon: '❋',
    title: 'You, Amplified',
    desc: 'We don\'t change who you are. We bring out the most radiant, powerful version of you.',
    color: '#ec4899',
  },
  {
    icon: '◉',
    title: 'Always On Time',
    desc: 'Punctuality is part of the luxury. We respect your time because your schedule matters.',
    color: '#3b82f6',
  },
]

const stats = [
  { value: '2019', label: 'Founded' },
  { value: '500+', label: 'Clients Served' },
  { value: '5',    label: 'Signature Services' },
  { value: '99%',  label: 'Satisfaction Rate' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0c0000] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,#4c1d95,transparent_60%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,#1a0b2e,transparent_55%)] opacity-50" />
      <ParticleBg opacity={0.4} />

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-3">Our Story</p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-serif leading-tight">
            Born from Passion,{' '}
            <span className="shimmer-text">Built for You</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm max-w-xl mx-auto leading-relaxed">
            Glamour Elites was born in 2019 with a singular vision — to make every person feel seen,
            celebrated, and stunning. What started as a dream became Lagos's most trusted luxury beauty studio.
          </p>
        </motion.div>

        {/* Two-col: image + text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* Left — story image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 via-transparent to-[#d4af37]/15 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-3xl overflow-hidden border border-white/8 group-hover:border-white/20 transition-all duration-400 shadow-2xl">
              <img
                src="/makeup.png"
                alt="Glamour Elites studio"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Floating tag */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute bottom-5 left-5 bg-[#1a0b2e]/90 backdrop-blur-md border border-[#d4af37]/40 px-4 py-2.5 rounded-xl"
              >
                <p className="text-[10px] text-[#d4af37] font-semibold tracking-widest uppercase">Lagos, Nigeria</p>
                <p className="text-white text-xs font-bold mt-0.5">Est. 2019</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <div className="h-0.5 w-10 rounded-full bg-[#d4af37] mb-5" />
              <h3 className="text-2xl md:text-3xl font-extrabold font-serif leading-snug">
                More Than a Studio —<br />A Transformation Space
              </h3>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Our team of elite artisans brings decades of combined experience across makeup, braiding,
              dreadlocking, wig installation, and precision barbering. We believe beauty isn't a
              privilege — it's a right.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every appointment is a sanctuary. From the moment you walk in, you're treated with the
              warmth and care of someone who genuinely cares about making you feel extraordinary.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="bg-[#1a0b2e] border border-white/8 rounded-xl p-4
                    hover:border-[#d4af37]/30 hover:shadow-lg hover:shadow-[#d4af37]/8
                    transition-all duration-300 cursor-default"
                >
                  <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#d4af37]">
                    {s.value}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37] mb-2">What Drives Us</p>
          <h3 className="text-2xl md:text-3xl font-extrabold font-serif">Our Core Values</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative bg-[#1a0b2e] border border-white/8 rounded-2xl p-6
                hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden"
              style={{
                boxShadow: '0 0 0 0 transparent',
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-400 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${v.color}, transparent 70%)` }}
              />

              {/* Top shimmer line */}
              <div
                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: `linear-gradient(90deg, transparent, ${v.color}80, transparent)` }}
              />

              <p className="text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block"
                style={{ color: v.color }}>
                {v.icon}
              </p>
              <h4 className="text-white font-bold text-sm mb-2">{v.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
