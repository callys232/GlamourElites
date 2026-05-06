import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import ParticleBg from './ParticleBg'

export default function Hero() {
  const { scrollY } = useScroll()
  const y    = useTransform(scrollY, [0, 600], [0, 35])
  const fade = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section
      className="relative min-h-[92vh] flex items-center text-white overflow-hidden"
      aria-label="Luxury beauty studio hero"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="/runway.mp4"
        autoPlay muted loop playsInline preload="metadata"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0000]/50 via-black/50 to-[#0c0000]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,#4c1d95/20,transparent_60%)]" />

      {/* Particles */}
      <ParticleBg opacity={0.7} />

      {/* Content */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8
          grid md:grid-cols-2 gap-8 md:gap-14 items-center py-16 md:py-0"
      >
        {/* Left — image with parallax */}
        <motion.div
          style={{ y }}
          className="flex justify-center md:justify-start order-2 md:order-1"
        >
          <div className="relative group">
            {/* Glow aura */}
            <div className="absolute -inset-5 bg-gradient-to-tr from-purple-600/25 via-transparent to-[#d4af37]/15
              blur-3xl rounded-full transition-all duration-500 group-hover:scale-110 group-hover:opacity-90" />

            <img
              src="/hero-fashion.png"
              alt="Glamour Elites luxury beauty studio"
              className="relative w-full max-w-[240px] md:max-w-[400px] rounded-2xl shadow-2xl
                border border-white/10
                transition-all duration-500 ease-out
                group-hover:scale-[1.03] group-hover:rotate-[0.5deg]
                group-hover:shadow-purple-500/25"
            />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 bg-[#1a0b2e] border border-[#d4af37]/40
                px-4 py-2 rounded-xl shadow-xl backdrop-blur-sm"
            >
              <p className="text-[10px] text-[#d4af37] font-semibold tracking-widest uppercase">Est. 2019</p>
              <p className="text-white text-xs font-bold">500+ Happy Clients</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — text panel */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="backdrop-blur-xl bg-white/4 border border-white/8 p-6 md:p-8
              rounded-2xl shadow-xl transition-all duration-500
              hover:bg-white/[0.06] hover:border-white/14 hover:-translate-y-0.5"
          >
            {/* Label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#d4af37] mb-3"
            >
              Makeup · Braiding · Tailoring · Barbering
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-5xl font-extrabold leading-tight font-serif"
            >
              Where Beauty{' '}
              <span className="shimmer-text">Meets Royalty</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0"
            >
              Premium beauty and fashion studio crafting signature looks for weddings,
              events, and everyday luxury. Your transformation starts here.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-6 flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/book"
                className="btn-glow relative px-6 py-3 rounded-xl
                  bg-gradient-to-r from-purple-600 via-purple-700 to-[#d4af37]
                  text-black font-bold text-sm shadow-lg shadow-purple-500/25
                  hover:shadow-xl hover:shadow-purple-500/35 hover:-translate-y-0.5
                  active:scale-95 transition-all duration-300 text-center"
              >
                Book a Session
              </Link>
              <Link
                to="/gallery"
                className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm
                  hover:bg-white/8 hover:border-white/32 hover:-translate-y-0.5
                  active:scale-95 transition-all duration-300 text-center"
              >
                View Gallery
              </Link>
            </motion.div>

            {/* Trust signal */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-5 text-[10px] text-gray-500 tracking-wide"
            >
              Trusted by 500+ clients · Premium services · 100% satisfaction
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <p className="text-[10px] text-gray-400 tracking-widest uppercase">Scroll</p>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          className="w-0.5 h-5 bg-gradient-to-b from-[#d4af37] to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}
