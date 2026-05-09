import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import ParticleBg from './ParticleBg'

const items = [
  { img: '/makeup.png',    label: 'Makeup Artistry',   tag: 'Editorial',  color: '#ec4899' },
  { img: '/braiding.png',  label: 'Knotless Braiding',  tag: 'Protective', color: '#d4af37' },
  { img: '/sewin.png',     label: 'Sew-in Extensions',  tag: 'Luxury',     color: '#a855f7' },
  { img: '/barbering.png', label: 'Precision Barbering', tag: 'Sharp',      color: '#3b82f6' },
  { img: '/makeup.png',    label: 'Bridal Glam',        tag: 'Wedding',    color: '#f472b6' },
  { img: '/braiding.png',  label: 'Box Braids',         tag: 'Classic',    color: '#fbbf24' },
]

export default function GalleryPreview() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const close = useCallback(() => setLightbox(null), [])
  const prev  = useCallback(() => setLightbox(i => (i === null ? null : (i - 1 + items.length) % items.length)), [])
  const next  = useCallback(() => setLightbox(i => (i === null ? null : (i + 1) % items.length)), [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, close, prev, next])

  return (
    <section className="py-24 bg-[#0b0615] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4c1d95,transparent_65%)] opacity-25" />
      <ParticleBg opacity={0.4} />

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-serif">
            Our <span className="shimmer-text">Finest Work</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm max-w-md mx-auto leading-relaxed">
            Every image tells a story of transformation. Click any piece to explore the details.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.02, zIndex: 2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLightbox(i)}
              className={`relative overflow-hidden rounded-2xl border border-white/8 cursor-pointer group
                ${i === 0 || i === 3 ? 'row-span-1 aspect-[3/4]' : 'aspect-square'}
                hover:border-white/25 hover:shadow-2xl transition-all duration-350`}
              style={{ boxShadow: `0 0 0 0 ${item.color}00` }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Base overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Hover color bloom */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-400"
                style={{ background: `radial-gradient(circle at 50% 100%, ${item.color}, transparent 70%)` }}
              />

              {/* Labels — always show on mobile, hover on desktop */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span
                  className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold tracking-widest uppercase mb-1.5"
                  style={{ backgroundColor: `${item.color}25`, color: item.color, border: `1px solid ${item.color}40` }}
                >
                  {item.tag}
                </span>
                <p className="text-white text-xs font-semibold leading-tight">{item.label}</p>
              </div>

              {/* Expand icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 0 }}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm
                  flex items-center justify-center opacity-0 group-hover:opacity-100
                  transition-all duration-300 group-hover:scale-100 scale-75"
              >
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </motion.div>
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm
              hover:bg-white/8 hover:border-white/35 hover:-translate-y-1 hover:shadow-xl
              active:scale-95 transition-all duration-300"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={close}
          >
            {/* Close */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20
                flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 z-10"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Prev */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-white/10 border border-white/20
                flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 z-10"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
            >
              <img
                src={items[lightbox].img}
                alt={items[lightbox].label}
                className="w-full max-h-[80vh] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <span
                  className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2"
                  style={{
                    backgroundColor: `${items[lightbox].color}25`,
                    color: items[lightbox].color,
                    border: `1px solid ${items[lightbox].color}40`,
                  }}
                >
                  {items[lightbox].tag}
                </span>
                <p className="text-white font-bold text-lg font-serif">{items[lightbox].label}</p>
                <p className="text-xs text-gray-400 mt-1">{lightbox + 1} / {items.length}</p>
              </div>
            </motion.div>

            {/* Next */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-white/10 border border-white/20
                flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 z-10"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
