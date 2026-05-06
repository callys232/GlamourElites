import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ParticleBg from './ParticleBg'

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0c0000]">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/40 via-transparent to-[#1a0b2e]/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#4c1d95,transparent_65%)] opacity-35" />
      <ParticleBg opacity={0.6} />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-3xl mx-auto px-5 text-center"
      >
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37] mb-4">Limited Slots Available</p>

        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight font-serif">
          Ready to Experience{' '}
          <span className="shimmer-text">Elite Beauty?</span>
        </h2>

        <p className="text-gray-300 mt-4 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          Book your session today and let us craft a look that's uniquely, undeniably you.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/book"
            className="btn-glow px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-[#d4af37]
              text-black font-bold text-sm shadow-xl shadow-purple-500/20
              hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1
              active:scale-95 transition-all duration-300"
          >
            Book Your Session
          </Link>
          <Link
            to="/gallery"
            className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm
              hover:bg-white/8 hover:border-white/35 hover:-translate-y-1
              active:scale-95 transition-all duration-300"
          >
            View Our Work
          </Link>
        </div>

        <p className="mt-6 text-[10px] text-gray-500 tracking-widest uppercase">
          Trusted by 500+ clients · Premium results · Your satisfaction guaranteed
        </p>
      </motion.div>
    </section>
  )
}
