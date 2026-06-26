import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

// The slap-in sticker stamp ("OK!", "Great!", ...). `text` non-null = visible.
export default function ResponseStamp({ text }) {
  const reduce = useReducedMotion()

  return (
    <div
      style={{
        position: 'absolute', inset: 0, zIndex: 40,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <AnimatePresence>
        {text != null && (
          <motion.div
            key={text + Math.random()}
            initial={{ rotate: -18, scale: 0.3, opacity: 0 }}
            animate={
              reduce
                ? { rotate: -6, scale: 1, opacity: 1 }
                : {
                    rotate: -6,
                    scale: [0.3, 1.12, 0.98, 1.02, 1],
                    opacity: [0, 1, 1, 1, 1],
                  }
            }
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.15 } }}
            transition={reduce ? { duration: 0.12 } : { duration: 0.6, ease: [0.22, 1.4, 0.36, 1] }}
            style={{
              fontFamily: 'Manrope, system-ui, sans-serif', fontWeight: 800,
              fontSize: 'clamp(40px,15vw,72px)', letterSpacing: '-0.03em',
              color: 'var(--grape)', background: 'var(--yellow)',
              padding: '18px 30px', borderRadius: 24,
              boxShadow: '0 12px 0 rgba(0,0,0,.3)', textAlign: 'center',
              border: '5px solid var(--grape)',
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
