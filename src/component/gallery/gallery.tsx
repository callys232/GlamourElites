import { useState } from 'react'
import { motion } from 'framer-motion'
import { getGalleryImages } from '../../lib/getGalleryImage'

export default function MosaicGallery() {
  const images = getGalleryImages()
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="bg-[#0b0615] text-white py-16">
      <div className="max-w-7xl mx-auto px-5">
        <header className="text-center mb-10">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37] mb-2">Our Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-serif">Mosaic Gallery</h2>
          <p className="mt-2 text-gray-400 text-sm">A curated showcase of our finest work.</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[240px]">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.35 }}
              onClick={() => setActive(active === idx ? null : idx)}
              className={`relative group overflow-hidden rounded-xl cursor-pointer
                border transition-all duration-300
                ${active === idx
                  ? 'border-[#d4af37]/60 shadow-xl shadow-[#d4af37]/15'
                  : 'border-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10'
                }
                ${idx % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              `}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 flex flex-col justify-end p-4
                bg-gradient-to-t from-black/80 via-black/30 to-transparent
                transition-opacity duration-300
                ${active === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              >
                <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                <p className="text-xs text-gray-300 mt-0.5">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
