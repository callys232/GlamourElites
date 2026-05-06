import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sendNewsletterEmail } from '../lib/emailService'

const navLinks = [
  { name: 'Home',     href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery',  href: '/gallery' },
  { name: 'Shop',     href: '/shop' },
  { name: 'Contact',  href: '/contact' },
]

const socials = [
  { name: 'Instagram', href: '#', icon: '📸' },
  { name: 'TikTok',    href: '#', icon: '🎵' },
  { name: 'WhatsApp',  href: '#', icon: '💬' },
  { name: 'Facebook',  href: '#', icon: '📘' },
]

type NewsletterStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Footer() {
  const [email,  setEmail]  = useState('')
  const [status, setStatus] = useState<NewsletterStatus>('idle')

  const subscribe = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      await sendNewsletterEmail(email)
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className="bg-[#1a0b2e] text-white pt-12 pb-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 grid gap-10 sm:grid-cols-2 md:grid-cols-3">

        {/* Brand */}
        <section>
          <img
            src="/logo.png"
            alt="Glamour Elites"
            loading="lazy"
            className="h-9 mb-4 opacity-90 hover:opacity-100 transition-opacity"
          />
          <p className="text-xs text-gray-300 leading-relaxed max-w-[200px]">
            Elevating beauty with a touch of royalty, luxury, and elitehood.
          </p>
          {/* Socials */}
          <div className="mt-5 flex gap-3">
            {socials.map(s => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="w-9 h-9 rounded-xl bg-white/6 flex items-center justify-center text-sm
                  hover:bg-[#d4af37]/20 hover:scale-110 hover:-translate-y-0.5
                  active:scale-95 transition-all duration-200 border border-white/8 hover:border-[#d4af37]/30"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section>
          <h2 className="text-base font-semibold text-[#d4af37] mb-1">Newsletter</h2>
          <p className="text-xs text-gray-400 mb-4">
            Exclusive offers and beauty insights, delivered to you.
          </p>

          {status === 'success' ? (
            <div className="text-sm text-[#d4af37] flex items-center gap-2">
              <span className="text-base">✓</span>
              <span>You're subscribed! Welcome to the inner circle.</span>
            </div>
          ) : (
            <form onSubmit={subscribe} className="flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-2.5 rounded-xl bg-[#2a1245] text-white text-sm
                  placeholder-gray-500 border border-white/8
                  focus:outline-none focus:ring-2 focus:ring-[#d4af37]/40 focus:border-[#d4af37]/30
                  hover:border-white/16 transition-all duration-200"
              />
              {status === 'error' && (
                <p className="text-red-400 text-xs">Something went wrong. Try again.</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="py-2.5 rounded-xl bg-[#d4af37] text-black text-sm font-semibold
                  hover:bg-yellow-400 active:scale-95 disabled:opacity-60
                  shadow-md shadow-yellow-500/10 hover:shadow-lg
                  transition-all duration-200"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </section>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <h2 className="text-base font-semibold text-[#d4af37] mb-3">Explore</h2>
          <ul className="space-y-2">
            {navLinks.map(l => (
              <li key={l.name}>
                <Link
                  to={l.href}
                  className="group flex items-center gap-1.5 text-xs text-white/80
                    hover:text-[#d4af37] transition-colors duration-200"
                >
                  <span className="w-3 h-px bg-white/30 group-hover:bg-[#d4af37] group-hover:w-5 transition-all duration-200" />
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/8 pt-5 px-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[10px] text-gray-500 tracking-wide">
          © {new Date().getFullYear()} Glamour Elites. All rights reserved.
        </p>
        <p className="text-[10px] text-gray-600 tracking-wide">
          Luxury · Beauty · Identity
        </p>
      </div>
    </footer>
  )
}
