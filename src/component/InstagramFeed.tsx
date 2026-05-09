import { useState } from 'react'
import { motion } from 'framer-motion'

const posts = [
  { img: '/makeup.png',    likes: '2.4k', comments: '83',  caption: 'Bridal glam done right ✨', tags: ['#MakeupArtist', '#BridalGlam'] },
  { img: '/braiding.png',  likes: '1.8k', comments: '64',  caption: 'Knotless perfection 🪢',    tags: ['#KnotlessBraids', '#ProtectiveStyle'] },
  { img: '/sewin.png',     likes: '3.1k', comments: '120', caption: 'Sew-in goals 💛',            tags: ['#SewIn', '#HairGoals'] },
  { img: '/barbering.png', likes: '1.2k', comments: '41',  caption: 'Sharp & clean every time 💈', tags: ['#Barbering', '#FreshCut'] },
  { img: '/makeup.png',    likes: '2.9k', comments: '97',  caption: 'Editorial look ready 📸',   tags: ['#EditorialMakeup', '#GlamourElites'] },
  { img: '/braiding.png',  likes: '1.6k', comments: '55',  caption: 'Culture & artistry 🌍',     tags: ['#AfricanBeauty', '#BraidArt'] },
  { img: '/sewin.png',     likes: '2.2k', comments: '78',  caption: 'Luxury in every strand 💎', tags: ['#LuxuryHair', '#WeaveGoals'] },
  { img: '/barbering.png', likes: '980',  comments: '32',  caption: 'Precision is everything ✦',  tags: ['#BarberLife', '#CleanLines'] },
  { img: '/makeup.png',    likes: '3.5k', comments: '142', caption: 'Transformation Tuesday 🔥', tags: ['#Transformation', '#GlowUp'] },
]

export default function InstagramFeed() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-20 bg-[#0c0000] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#4c1d95,transparent_60%)] opacity-15" />

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4"
        >
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-2">Social Feed</p>
            <h2 className="text-2xl md:text-4xl font-extrabold font-serif">
              Follow <span className="shimmer-text">@GlamourElites</span>
            </h2>
          </div>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-white/15 text-white text-sm font-semibold
              hover:bg-white/8 hover:border-white/28 transition-all duration-250 shrink-0"
          >
            {/* Instagram icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow Us
          </motion.a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-1.5 md:gap-2.5">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="relative aspect-square overflow-hidden rounded-lg md:rounded-xl cursor-pointer group"
            >
              <img
                src={post.img}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <motion.div
                animate={{ opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center gap-3 p-3"
              >
                {/* Likes & comments */}
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    {post.likes}
                  </div>
                  <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M21 6.5C21 5.12 19.88 4 18.5 4h-13C4.12 4 3 5.12 3 6.5v8C3 15.88 4.12 17 5.5 17H6v3.5l3.5-3.5H18.5c1.38 0 2.5-1.12 2.5-2.5v-8z" />
                    </svg>
                    {post.comments}
                  </div>
                </div>

                {/* Caption */}
                <p className="text-white text-[11px] font-medium text-center leading-snug line-clamp-2 px-2">
                  {post.caption}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 justify-center">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[9px] text-purple-300 font-medium">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-gray-500">
            Share your look with us —{' '}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:underline"
            >
              tag @GlamourElites
            </a>
            {' '}for a chance to be featured
          </p>
        </motion.div>

      </div>
    </section>
  )
}
