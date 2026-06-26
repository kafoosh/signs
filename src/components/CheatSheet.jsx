import { AnimatePresence, motion } from 'framer-motion'
import { VALNAMES, SUITS } from '../data/content.js'

// Performer cheat-sheet: armed card + value/suit maps. CR3: no em/en dashes.
export default function CheatSheet({ open, onClose, captured }) {
  const armed =
    'Armed: ' + VALNAMES[captured.valueIdx] + ' of ' + SUITS[captured.suitIdx].k

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="cheat"
          className="modal-overlay"
          style={{ zIndex: 80, background: 'rgba(10,2,22,.86)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <motion.div
            id="cheatCard"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <h3>Performer cheat-sheet</h3>
            <div className="armed">{armed}</div>
            <table>
              <tbody>
                <tr>
                  <td colSpan={2} style={{ fontWeight: 800, color: '#56119E' }}>
                    VALUE: welcome zones (4x3 + King bar)
                  </td>
                </tr>
                <tr><td>Row 1</td><td>A · 2 · 3 · 4</td></tr>
                <tr><td>Row 2</td><td>5 · 6 · 7 · 8</td></tr>
                <tr><td>Row 3</td><td>9 · 10 · J · Q</td></tr>
                <tr><td>Bottom bar</td><td>King</td></tr>
                <tr>
                  <td colSpan={2} style={{ fontWeight: 800, color: '#56119E', paddingTop: 10 }}>
                    SUIT: gender card quarters (L to R)
                  </td>
                </tr>
                <tr><td>Q1 ♣</td><td>Clubs</td></tr>
                <tr><td>Q2 ♥</td><td>Hearts</td></tr>
                <tr><td>Q3 ♠</td><td>Spades</td></tr>
                <tr><td>Q4 ♦</td><td>Diamonds (CHaSeD)</td></tr>
              </tbody>
            </table>
            <button className="close" onClick={onClose}>
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
