import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Sparkles } from 'lucide-react'

type Message = { role: 'ai' | 'user'; text: string; ts: number }

const GREETING: Message = {
  role: 'ai',
  ts: Date.now(),
  text: "Welcome to Glamour Elites ✨ I'm your personal beauty concierge. Ask me about our services, pricing, booking, or anything else — I'm here to help.",
}

/* ── Smart response engine ── */
function getReply(input: string): string {
  const q = input.toLowerCase()

  if (/\b(price|pricing|cost|how much|package|plan|tier|atelier|prestige|haute)\b/.test(q))
    return "Our packages start at **₺4.850 (~$150)** for the Atelier tier. The Prestige package is **₺9.500 (~$295)** and our signature Haute package is **₺16.500 (~$510)**. Every package includes a private consultation. Want me to walk you through what each includes?"

  if (/\b(book|appointment|reserve|session|schedule)\b/.test(q))
    return "Booking is easy! You can tap the green WhatsApp button to chat with us directly, or head to our [Book](/book) page to fill in your details. We'll confirm your slot within a few hours. What service are you thinking?"

  if (/\b(makeup|mua|bridal|wedding|glam)\b/.test(q))
    return "Our Makeup service covers bridal looks, editorial, event glam, and everyday luxury. We use premium products tailored to your skin tone. Sessions typically run 1.5–2 hours. Would you like to book a consultation?"

  if (/\b(braid|braiding|knotless|protective|locs)\b/.test(q))
    return "Our braiding artists specialise in knotless braids, box braids, cornrows, and protective styles with cultural and modern fusion. A typical session is 3–5 hours. Interested in booking?"

  if (/\b(sew|tailor|tailoring|custom|dress|outfit|fashion|fabric)\b/.test(q))
    return "We offer fully bespoke custom tailoring — from event outfits to everyday luxury pieces. Each garment is crafted to your measurements with premium fabrics. Turnaround is usually 7–14 days. Want to schedule a fitting?"

  if (/\b(dread|dreadlock|loc|natural|loc maintenance)\b/.test(q))
    return "Our dreadlock specialists handle new installations, maintenance, and styling for all loc stages. We use natural products that protect your hair health. Would you like to book a consultation?"

  if (/\b(wig|install|lace|frontal|barber|cut|fade|shape)\b/.test(q))
    return "We do premium wig installations (HD lace, frontals, full-sew) and precision barbering — fades, shape-ups, and sculpted cuts. Want to know more or book a session?"

  if (/\b(location|address|where|studio|istanbul|turkey)\b/.test(q))
    return "Our studio is based in Istanbul, Turkey 📍 We also offer home visits for Elite package clients. Reach us on WhatsApp for the exact address and directions."

  if (/\b(hour|open|time|when|available|schedule|weekend)\b/.test(q))
    return "We're available Monday–Saturday, 9am–7pm (Istanbul time). We sometimes accommodate Sunday appointments for special events — just ask on WhatsApp!"

  if (/\b(contact|whatsapp|call|phone|number|email|reach)\b/.test(q))
    return "The fastest way to reach us is WhatsApp — tap the green button on this page. You can also fill in our [Contact](/contact) form and we'll respond within 24 hours."

  if (/\b(gallery|work|portfolio|photo|example|result)\b/.test(q))
    return "Head over to our [Gallery](/gallery) page to see our latest work — bridal transformations, braiding sessions, tailored pieces and more. Our work speaks for itself 💅"

  if (/\b(shop|product|tool|affiliate|brush|kit)\b/.test(q))
    return "We've curated a selection of professional-grade tools and products we actually use in our studio. Browse them on the [Shop](/shop) page — everything is tried, tested, and trusted by our team."

  if (/\b(hi|hello|hey|good morning|good afternoon|good evening|hiya)\b/.test(q))
    return "Hello! 💛 So lovely to have you here. How can I help you today? Ask me about our services, packages, or how to book."

  if (/\b(thank|thanks|appreciate)\b/.test(q))
    return "You're so welcome! ✨ Is there anything else I can help with? We'd love to have you in the studio."

  if (/\b(bye|goodbye|see you|later)\b/.test(q))
    return "Goodbye for now! 💛 We hope to see you in the studio soon. Don't hesitate to reach out anytime."

  return "Great question! For the most precise answer I'd recommend chatting with our team directly on WhatsApp — they can give you personalised guidance. In the meantime, feel free to explore our [Services](/services) or [Pricing](/pricing) pages. Is there anything else I can help with?"
}

/* ── Bold markdown renderer (simple) ── */
function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/)
  return parts.map((p, i) => {
    if (/^\*\*(.+)\*\*$/.test(p)) return <strong key={i} className="text-white">{p.slice(2, -2)}</strong>
    const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) return <a key={i} href={link[2]} className="text-[#d4af37] underline underline-offset-2 hover:text-yellow-300 transition-colors">{link[1]}</a>
    return <span key={i}>{p}</span>
  })
}

export default function AiChatPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input,    setInput]    = useState('')
  const [typing,   setTyping]   = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = () => {
    const text = input.trim()
    if (!text) return
    setInput('')
    setMessages(m => [...m, { role: 'user', text, ts: Date.now() }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(m => [...m, { role: 'ai', text: getReply(text), ts: Date.now() }])
    }, 900 + Math.random() * 600)
  }

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop (mobile) */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] md:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="fixed z-[9999] flex flex-col overflow-hidden
              bottom-[130px] right-4
              w-[calc(100vw-2rem)] max-w-[370px]
              rounded-3xl shadow-2xl shadow-purple-900/40
              border border-purple-500/20"
            style={{ height: 'min(520px, calc(100vh - 160px))' }}
          >
            {/* Top shimmer */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />

            {/* Header */}
            <div className="shrink-0 flex items-center justify-between px-5 py-4
              bg-gradient-to-r from-[#2d1060] via-[#3b1280] to-[#1a0b2e]
              border-b border-purple-500/15">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/40">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-none">Glamour AI</p>
                  <p className="text-[10px] text-purple-300 mt-0.5">Beauty concierge · Always on</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-[10px] text-purple-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
                <button
                  onClick={onClose}
                  className="w-7 h-7 rounded-lg flex items-center justify-center
                    hover:bg-white/10 active:scale-90 transition-all"
                >
                  <X size={15} className="text-white/70" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#120828] scrollbar-hide">
              {messages.map(msg => (
                <motion.div
                  key={msg.ts}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'ai' && (
                    <div className="w-6 h-6 rounded-lg bg-purple-700 flex items-center justify-center mr-2 mt-1 shrink-0 shadow-md shadow-purple-500/30">
                      <Sparkles size={11} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed
                      ${msg.role === 'ai'
                        ? 'bg-[#1e0d40] border border-purple-500/15 text-gray-200 rounded-tl-sm'
                        : 'bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-tr-sm shadow-md shadow-purple-500/20'
                      }`}
                  >
                    {renderText(msg.text)}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-lg bg-purple-700 flex items-center justify-center shadow-md shadow-purple-500/30">
                    <Sparkles size={11} className="text-white" />
                  </div>
                  <div className="bg-[#1e0d40] border border-purple-500/15 px-4 py-2.5 rounded-2xl rounded-tl-sm flex gap-1.5 items-center">
                    {[0, 1, 2].map(i => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-purple-400"
                        style={{ animation: `pulse-glow 1.2s ease-in-out ${i * 0.2}s infinite` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="shrink-0 px-3 py-3 bg-[#120828] border-t border-purple-500/12">
              <div className="flex items-center gap-2 bg-[#1e0d40] border border-purple-500/20
                rounded-2xl px-4 py-2 focus-within:border-purple-500/50 focus-within:shadow-lg
                focus-within:shadow-purple-500/10 transition-all duration-200">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={onKey}
                  placeholder="Ask about services, booking, pricing…"
                  className="flex-1 bg-transparent text-white text-sm placeholder-purple-400/50
                    focus:outline-none min-w-0"
                />
                <button
                  onClick={send}
                  disabled={!input.trim() || typing}
                  className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center shrink-0
                    hover:bg-purple-500 active:scale-90 disabled:opacity-40
                    shadow-md shadow-purple-500/30 transition-all duration-200"
                >
                  <Send size={13} className="text-white" />
                </button>
              </div>
              <p className="text-[9px] text-purple-500/50 text-center mt-2">Glamour Elites AI · Powered by intelligence</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
