import { motion } from 'framer-motion'

// 13 invisible value zones: a 4x3 reading-order grid (A..Q) + a bottom King band.
// CR1: NO visible value labels, only a tasteful checker/grid tint backdrop.
export default function Welcome({ onCapture }) {
  // tapping a zone records value index and advances.
  const tapValue = (v) => onCapture(v)

  return (
    <section className="screen" id="welcome">
      {/* hidden tap matrix */}
      <div id="wTiles">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="vz"
            data-v={i}
            onClick={() => tapValue(i)}
          />
        ))}
        <div className="vz king" data-v={12} onClick={() => tapValue(12)} />
      </div>

      {/* foreground content (pointer-events:none so taps fall through to zones) */}
      <div id="wContent">
        <motion.div
          className="big"
          style={{ display: 'block' }}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
        >
          SIGNS
        </motion.div>
        <div className="wsub">your reading starts now</div>
        <div className="tap">tap anywhere to begin</div>
      </div>
    </section>
  )
}
