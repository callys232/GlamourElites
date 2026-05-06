import { useState } from 'react'
import { motion } from 'framer-motion'
import { mockFashionServices } from '../mocks/mockFashion'
import BookingModal from '../component/BookingModal'
import ParticleBg from '../component/ParticleBg'

export default function ServicesPage() {
  const [modalOpen, setModal] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const open = (name: string) => { setSelected(name); setModal(true) }

  return (
    <section className="min-h-screen bg-[#0c0000] text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4c1d95,transparent_65%)] opacity-30" />
      <ParticleBg opacity={0.45} />

      <div className="relative max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37] mb-2">What We Offer</p>
          <h1 className="text-3xl md:text-5xl font-extrabold font-serif">Our Services</h1>
          <p className="text-gray-400 mt-3 text-sm max-w-sm mx-auto">
            Premium beauty and fashion crafted for every occasion.
          </p>
        </motion.div>

        <div className="space-y-10">
          {mockFashionServices.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-6 md:gap-10 items-center
                group`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl
                border border-white/8 group-hover:border-white/20 transition-all duration-300
                shadow-lg group-hover:shadow-xl"
                style={{ boxShadow: `0 8px 40px ${service.color}20` }}
              >
                <img
                  src={service.images[0]}
                  alt={service.name}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div
                  className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase"
                  style={{ backgroundColor: `${service.color}25`, color: service.color, border: `1px solid ${service.color}40` }}
                >
                  {service.hint}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="h-0.5 w-12 rounded-full mb-4 mx-auto md:mx-0" style={{ backgroundColor: service.color }} />
                <h2 className="text-2xl md:text-3xl font-extrabold font-serif">{service.name}</h2>
                <p className="text-gray-300 mt-4 text-sm leading-relaxed">{service.description}</p>
                <p className="text-xs text-gray-500 mt-2 italic">{service.hint}</p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <button
                    onClick={() => open(service.name)}
                    className="px-6 py-3 rounded-xl font-bold text-sm
                      bg-gradient-to-r from-purple-600 via-purple-700 to-[#d4af37]
                      shadow-md hover:shadow-lg hover:-translate-y-0.5
                      active:scale-95 transition-all duration-200 btn-glow"
                  >
                    Book This Service
                  </button>
                  <a
                    href={`/shop?service=${service.id}`}
                    className="px-6 py-3 rounded-xl border border-white/18 text-white text-sm font-semibold
                      hover:bg-white/6 hover:border-white/28 hover:-translate-y-0.5
                      active:scale-95 transition-all duration-200 text-center"
                  >
                    Shop Products
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BookingModal open={modalOpen} onClose={() => setModal(false)} service={selected ? { name: selected } : null} />
    </section>
  )
}
