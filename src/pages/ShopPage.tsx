import { useState } from 'react'
import { motion } from 'framer-motion'
import { mockAffiliateProducts, mockFashionServices } from '../mocks/mockFashion'
import AffiliateCard from '../component/affiliateCard'
import ParticleBg from '../component/ParticleBg'
import { useLocation } from 'react-router-dom'

export default function ShopPage() {
  const { search } = useLocation()
  const params     = new URLSearchParams(search)
  const preService = params.get('service') ?? 'all'

  const [filter, setFilter] = useState(preService)

  const categories = [
    { id: 'all', name: 'All Products' },
    ...mockFashionServices.map(s => ({ id: s.id, name: s.name })),
  ]

  const products = filter === 'all'
    ? mockAffiliateProducts
    : mockAffiliateProducts.filter(p => p.serviceId === filter)

  return (
    <section className="min-h-screen bg-[#0c0000] text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4c1d95,transparent_65%)] opacity-25" />
      <ParticleBg opacity={0.4} />

      <div className="relative max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37] mb-2">Affiliate Products</p>
          <h1 className="text-3xl md:text-5xl font-extrabold font-serif">Shop Our Picks</h1>
          <p className="text-gray-400 mt-3 text-sm max-w-sm mx-auto">
            Professional tools and products trusted by our stylists.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95
                ${filter === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-[#d4af37] text-black font-semibold shadow-md'
                  : 'bg-white/8 text-white/70 hover:bg-white/14 hover:text-white border border-white/8 hover:border-white/18'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-4xl mb-3">🛍️</p>
            <p>No products found for this category yet.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
              >
                <AffiliateCard product={p} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-center text-[10px] text-gray-600 mt-10 max-w-sm mx-auto">
          Some links are affiliate links. We may earn a small commission at no extra cost to you.
        </p>
      </div>
    </section>
  )
}
