import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'

const OPTIONS = ['Passionately', 'Mildly', 'Hehe', '6/10', 'N/A']

// Themed dropdown (decoy answer). Any choice is accepted and advances.
export default function Feelings({ onAnswer }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDoc)
    return () => document.removeEventListener('pointerdown', onDoc)
  }, [open])

  const pick = () => {
    setOpen(false)
    onAnswer()
  }

  return (
    <section className="screen" id="feelings">
      <StaggerGroup className="head">
        <StaggerItem className="label">question 05</StaggerItem>
        <StaggerItem as="h1" className="q">
          How do you<br />feel about<br />things?
        </StaggerItem>
      </StaggerGroup>

      <StaggerGroup
        className="body"
        style={{ justifyContent: 'flex-start', paddingTop: 8 }}
      >
        <StaggerItem>
          <div className={'dropdown' + (open ? ' open' : '')} ref={ref}>
            <button
              type="button"
              className="dropdown-trigger placeholder"
              onClick={() => setOpen((o) => !o)}
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              <span>Choose one…</span>
              <span className="arrow">▾</span>
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  className="dropdown-menu"
                  role="listbox"
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                >
                  {OPTIONS.map((o) => (
                    <div
                      key={o}
                      role="option"
                      className="dropdown-opt"
                      onClick={pick}
                    >
                      {o}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </StaggerItem>
      </StaggerGroup>
    </section>
  )
}
