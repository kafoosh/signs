import { AnimatePresence, motion } from 'framer-motion'

// CR7: includes "A webapp by Kenneth Aidan Foo".
export default function InfoModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="info"
          className="modal-overlay"
          style={{ zIndex: 70, background: 'rgba(10,2,22,.8)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            id="infoCard"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <h3>Signs</h3>
            <p>A playful astrology reading, just for fun. Built with love.</p>
            <p style={{ marginBottom: 18 }}>A webapp by Kenneth Aidan Foo</p>
            <a
              href="https://www.instagram.com/oddpaq"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow @oddpaq
            </a>
            <div className="x" onClick={onClose}>
              Close
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
