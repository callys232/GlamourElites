import { useState } from 'react'
import { motion } from 'framer-motion'
import BookingModal from '../BookingModal'
import { galleryItems } from '../../mocks/mockFashion'

type Tab = 'Shop Collection' | 'Book a Session'
const TABS: Tab[] = ['Shop Collection', 'Book a Session']

export default function GalleryPage() {
  const [tab,       setTab]       = useState<Tab>('Shop Collection')
  const [modalOpen, setModalOpen] = useState(false)
  const [selected,  setSelected]  = useState<string | null>(null)

  const filtered = galleryItems.filter(i =>
    tab === 'Shop Collection' ? i.type === 'shop' : i.type === 'service'
  )

  const openBooking = (name: string) => { setSelected(name); setModalOpen(true) }

  return (
    <section className="bg-[#1a0b2e] text-white py-14">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <header className="text-center mb-10">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37] mb-2">Curated For You</p>
          <h2 className="text-3xl md:text-5xl font-extrabold font-serif">Our Gallery</h2>
          <p className="mt-2 text-gray-300 text-sm">Explore fashion pieces and bespoke service sessions.</p>
        </header>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95
                ${tab === t
                  ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-[#d4af37] text-black shadow-lg'
                  : 'bg-white/8 text-white/80 hover:bg-white/14 hover:text-white border border-white/8 hover:border-white/20'
                }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
              className="group bg-[#0b0615] rounded-2xl overflow-hidden
                border border-white/8 hover:border-white/22
                hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10
                transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-base text-white">{item.name}</h3>
                <p className="text-sm text-[#d4af37] font-medium mt-0.5">{item.price}</p>

                {item.type === 'shop' ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold
                      bg-gradient-to-r from-purple-600 via-purple-700 to-[#d4af37] text-black
                      hover:shadow-lg transition-all duration-200 active:scale-95"
                  >
                    Shop Now →
                  </a>
                ) : (
                  <button
                    onClick={() => openBooking(item.name)}
                    className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold
                      border border-[#d4af37]/60 text-[#d4af37]
                      hover:bg-[#d4af37] hover:text-black
                      transition-all duration-200 active:scale-95"
                  >
                    Book Now
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selected ? { name: selected } : null}
      />
    </section>
  )
}
