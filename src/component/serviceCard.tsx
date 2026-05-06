import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { FashionService } from '../types/fashion'
import BookingModal from './BookingModal'

export default function ServiceCard({
  service,
  active,
}: {
  service: FashionService
  active?: boolean
}) {
  const [imgIdx, setImgIdx]     = useState(0)
  const [modalOpen, setModal]   = useState(false)

  const prev = () => setImgIdx(p => (p === 0 ? service.images.length - 1 : p - 1))
  const next = () => setImgIdx(p => (p + 1) % service.images.length)

  return (
    <>
      <div
        id={service.id}
        className={`group relative rounded-2xl overflow-hidden backdrop-blur-xl
          border transition-all duration-300 card-hover
          ${active
            ? 'border-white/30 scale-[1.02]'
            : 'border-white/8 hover:border-white/20'
          }`}
        style={{
          boxShadow: active ? `0 0 40px ${service.color}35` : undefined,
        }}
      >
        {/* Active glow overlay */}
        {active && (
          <div
            className="absolute inset-0 opacity-20 pointer-events-none z-0"
            style={{ background: `radial-gradient(circle at top, ${service.color}55, transparent 70%)` }}
          />
        )}

        {/* Image carousel */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={service.images[imgIdx]}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Carousel controls — appear on hover */}
          {service.images.length > 1 && (
            <div
              className="absolute bottom-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              onClick={e => e.preventDefault()}
            >
              <button
                onClick={prev}
                className="w-7 h-7 flex items-center justify-center bg-black/60 rounded-lg text-white text-xs
                  hover:bg-black/80 active:scale-90 transition-all"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="w-7 h-7 flex items-center justify-center bg-black/60 rounded-lg text-white text-xs
                  hover:bg-black/80 active:scale-90 transition-all"
              >
                ›
              </button>
            </div>
          )}

          {/* Dot indicator */}
          {service.images.length > 1 && (
            <div className="absolute bottom-3 left-3 flex gap-1">
              {service.images.map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i === imgIdx ? service.color : 'rgba(255,255,255,0.35)',
                    transform: i === imgIdx ? 'scale(1.3)' : 'scale(1)',
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative z-10 p-5 bg-[#1a0b2e]">
          <div
            className="h-0.5 w-10 rounded-full mb-3 transition-all duration-300 group-hover:w-16"
            style={{ backgroundColor: service.color }}
          />

          <h3 className="text-base font-bold text-white">{service.name}</h3>

          <p className="text-[10px] uppercase tracking-widest mt-1" style={{ color: service.color }}>
            {service.hint}
          </p>

          <p className="text-xs text-gray-400 mt-2.5 leading-relaxed line-clamp-2">
            {service.description}
          </p>

          <div className="mt-4 flex gap-2">
            <Link
              to={`/services#${service.id}`}
              className="text-xs px-3 py-1.5 rounded-lg border border-white/15
                text-white/70 hover:text-white hover:border-white/30
                hover:bg-white/5 active:scale-95 transition-all duration-200"
            >
              View Details
            </Link>

            <button
              onClick={() => setModal(true)}
              className="text-xs px-3 py-1.5 rounded-lg font-semibold
                bg-gradient-to-r from-purple-600/80 to-[#d4af37]/80
                text-white hover:from-purple-600 hover:to-[#d4af37]
                active:scale-95 transition-all duration-200 shadow-sm"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <BookingModal
        open={modalOpen}
        onClose={() => setModal(false)}
        service={{ name: service.name }}
      />
    </>
  )
}
