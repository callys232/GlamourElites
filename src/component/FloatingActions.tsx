import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../lib/config'
import AiChatPanel from './AiChatPanel'

const WA_MSG = "Hi Glamour Elites! I'd like to book a session 💛"

export default function FloatingActions() {
  const [aiOpen, setAiOpen] = useState(false)
  const [hint,   setHint]   = useState<'wa' | 'ai' | null>(null)

  return (
    <>
      {/* ── Stacked FABs ── */}
      <div className="fixed bottom-5 right-4 z-[9990] flex flex-col items-center gap-3">

        {/* WhatsApp — top */}
        <motion.div
          className="relative"
          onHoverStart={() => setHint('wa')}
          onHoverEnd={() => setHint(null)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 16, stiffness: 260, delay: 0.1 }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hint === 'wa' && (
              <motion.div
                initial={{ opacity: 0, x: 8, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 8, scale: 0.92 }}
                transition={{ duration: 0.18 }}
                className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2
                  bg-[#1a1a1a] border border-white/10 text-white text-xs font-medium
                  px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl"
              >
                Book on WhatsApp
                <span className="absolute right-[-5px] top-1/2 -translate-y-1/2
                  w-2.5 h-2.5 bg-[#1a1a1a] border-r border-t border-white/10
                  rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={buildWhatsAppUrl(WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book on WhatsApp"
            className="group flex items-center justify-center w-14 h-14 rounded-2xl
              bg-[#25D366] shadow-xl shadow-[#25D366]/40
              hover:bg-[#20c05a] hover:scale-110 hover:-translate-y-0.5
              active:scale-95 transition-all duration-250"
          >
            {/* Pulse ring */}
            <span className="absolute w-14 h-14 rounded-2xl bg-[#25D366]/30 animate-ping" />
            <MessageCircle size={24} className="text-white relative z-10 drop-shadow" />
          </a>
        </motion.div>

        {/* AI — bottom */}
        <motion.div
          className="relative"
          onHoverStart={() => setHint('ai')}
          onHoverEnd={() => setHint(null)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 16, stiffness: 260, delay: 0.22 }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hint === 'ai' && (
              <motion.div
                initial={{ opacity: 0, x: 8, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 8, scale: 0.92 }}
                transition={{ duration: 0.18 }}
                className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2
                  bg-[#1a1a1a] border border-white/10 text-white text-xs font-medium
                  px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl"
              >
                Ask Glamour AI
                <span className="absolute right-[-5px] top-1/2 -translate-y-1/2
                  w-2.5 h-2.5 bg-[#1a1a1a] border-r border-t border-white/10
                  rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setAiOpen(v => !v)}
            aria-label="Open Glamour AI"
            aria-expanded={aiOpen}
            className={`relative flex items-center justify-center w-14 h-14 rounded-2xl
              shadow-xl transition-all duration-250
              ${aiOpen
                ? 'bg-purple-800 shadow-purple-500/50 scale-95'
                : 'bg-gradient-to-br from-purple-600 to-purple-900 shadow-purple-600/40 hover:scale-110 hover:-translate-y-0.5 active:scale-95'
              }`}
          >
            {/* Idle glow ring */}
            {!aiOpen && (
              <span className="absolute inset-0 rounded-2xl border-2 border-purple-400/40
                animate-[drift_3s_ease-in-out_infinite]" />
            )}

            <Sparkles
              size={22}
              className={`relative z-10 transition-transform duration-300 drop-shadow
                ${aiOpen ? 'text-purple-300 rotate-12' : 'text-white'}`}
            />
          </button>
        </motion.div>
      </div>

      {/* ── AI Panel ── */}
      <AiChatPanel open={aiOpen} onClose={() => setAiOpen(false)} />
    </>
  )
}
