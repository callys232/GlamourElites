import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { name: 'Home',     href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery',  href: '/gallery' },
  { name: 'Shop',     href: '/shop' },
  { name: 'Contact',  href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }           = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      {/* ── Top bar ── */}
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-[#1a0b2e]/92 backdrop-blur-lg shadow-lg shadow-black/40 border-b border-white/5'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-[60px]">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group shrink-0"
            aria-label="Glamour Elites home"
          >
            <img
              src="/logo.png"
              alt="Glamour Elites"
              className="h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <li key={l.name}>
                <Link
                  to={l.href}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200
                    ${isActive(l.href)
                      ? 'text-[#d4af37]'
                      : 'text-white/70 hover:text-white hover:bg-white/6'
                    }`}
                >
                  {l.name}
                  {isActive(l.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#d4af37]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            to="/book"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 rounded-xl
              bg-gradient-to-r from-purple-600 via-purple-700 to-[#d4af37]
              text-black font-semibold text-sm shadow-md shadow-purple-500/20
              hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5
              active:scale-95 transition-all duration-200 btn-glow"
          >
            Book Now
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-200 active:scale-90
              hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/40"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={22} className="text-[#d4af37]" />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* ── Mobile drawer ── */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-[#1a0b2e] z-50 shadow-2xl
          transform transition-transform duration-300 ease-in-out md:hidden flex flex-col
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex justify-between items-center px-5 h-[60px] border-b border-white/8 shrink-0">
          <img src="/logo.png" alt="Glamour Elites" className="h-7 object-contain opacity-90" />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-1.5 rounded-lg hover:bg-white/8 transition active:scale-90"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 pt-4 pb-6">
          <ul className="flex flex-col gap-1">
            {links.map(l => (
              <li key={l.name}>
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium
                    transition-all duration-200 group
                    ${isActive(l.href)
                      ? 'bg-[#2a1245] text-[#d4af37]'
                      : 'text-white/80 hover:bg-white/6 hover:text-white'
                    }`}
                >
                  <span>{l.name}</span>
                  {isActive(l.href) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile CTA */}
        <div className="px-4 pb-6 shrink-0">
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="block w-full py-3.5 rounded-xl text-center text-sm font-bold
              bg-gradient-to-r from-purple-600 via-purple-700 to-[#d4af37]
              text-black shadow-lg active:scale-95 transition-all duration-200 btn-glow"
          >
            Book Appointment
          </Link>
        </div>
      </aside>
    </>
  )
}
