import { createContext, useContext, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'

type ToastType = 'success' | 'error' | 'info'
type Toast = { id: number; message: string; type: ToastType }
type Ctx = { toast: (message: string, type?: ToastType) => void }

const ToastContext = createContext<Ctx>({ toast: () => {} })

let _id = 0

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = useCallback((message: string, type: ToastType = 'success') => {
    const id = ++_id
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4200)
  }, [])

  const icon = { success: '✓', error: '✕', info: 'ℹ' }
  const styles = {
    success: 'bg-[#1a0b2e] border border-[#d4af37]/50 text-white',
    error:   'bg-red-950/90 border border-red-500/50 text-white',
    info:    'bg-[#2a1245] border border-purple-500/50 text-white',
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-5 right-4 left-4 sm:left-auto sm:w-80 z-[9999] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map(t => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`px-4 py-3 rounded-xl shadow-2xl text-sm flex items-center gap-3 pointer-events-auto ${styles[t.type]}`}
            >
              <span className="text-base font-bold shrink-0">{icon[t.type]}</span>
              <span>{t.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
