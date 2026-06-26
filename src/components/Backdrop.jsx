import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'

const PALETTE = ['#FCEE21', '#FF5C5C', '#37E0A6', '#56119E', '#9b59ff']

// A slow drifting float (translate + rotate, eased in-out, infinite).
function driftAnim(dx, dy, dr, dur, reduce) {
  if (reduce) return {}
  return {
    animate: { x: [0, dx, 0], y: [0, dy, 0], rotate: [0, dr, 0] },
    transition: { duration: dur, ease: 'easeInOut', repeat: Infinity },
  }
}

export default function Backdrop() {
  const reduce = useReducedMotion()

  // Stars get randomized positions once.
  const stars = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        left: 8 + Math.random() * 82,
        top: 6 + Math.random() * 86,
        color: PALETTE[i % PALETTE.length],
        size: 14 + Math.random() * 22,
        opacity: 0.35 + Math.random() * 0.4,
        dx: Math.random() * 24 - 12,
        dy: Math.random() * 24 - 12,
        dr: Math.random() * 40 - 20,
        dur: 12 + Math.random() * 10,
      })),
    [],
  )

  return (
    <div id="bg" aria-hidden="true">
      {/* big blobs */}
      <motion.div
        className="shape"
        style={{
          width: '62vmin', height: '62vmin', left: '-20vmin', top: '-16vmin',
          background: '#56119E', opacity: 0.9,
          borderRadius: '48% 52% 56% 44% / 52% 46% 54% 48%',
        }}
        {...driftAnim(18, 14, 14, 19, reduce)}
      />
      <motion.div
        className="shape"
        style={{
          width: '46vmin', height: '46vmin', right: '-16vmin', top: '30vh',
          background: '#FF5C5C', opacity: 0.85,
          borderRadius: '54% 46% 50% 50% / 46% 54% 46% 54%',
        }}
        {...driftAnim(-16, -20, -18, 16, reduce)}
      />
      <motion.div
        className="shape"
        style={{
          width: '40vmin', height: '40vmin', left: '6vmin', bottom: '-16vmin',
          background: '#37E0A6', opacity: 0.7, borderRadius: '50%',
        }}
        {...driftAnim(14, -12, 20, 22, reduce)}
      />

      {/* rings (spin slowly) */}
      <div
        className="shape"
        style={{
          width: '30vmin', height: '30vmin', right: '8vmin', top: '8vh',
          color: '#FCEE21', opacity: 0.5, border: '6px solid currentColor',
          borderRadius: '50%', background: 'transparent',
          animation: reduce ? 'none' : 'spinslow 40s linear infinite',
        }}
      />
      <div
        className="shape"
        style={{
          width: '18vmin', height: '18vmin', left: '-6vmin', top: '52vh',
          color: '#37E0A6', opacity: 0.45, border: '5px dashed currentColor',
          borderRadius: '50%', background: 'transparent',
          animation: reduce ? 'none' : 'spinslow 30s linear infinite reverse',
        }}
      />

      {/* stars */}
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="shape star"
          style={{
            left: s.left + '%', top: s.top + '%', color: s.color,
            fontSize: s.size + 'px', opacity: s.opacity, fontWeight: 800,
            lineHeight: 1,
          }}
          {...driftAnim(s.dx, s.dy, s.dr, s.dur, reduce)}
        >
          ★
        </motion.div>
      ))}

      {/* squiggle */}
      <motion.div
        className="shape"
        style={{ right: '6vmin', bottom: '14vh', opacity: 0.5 }}
        {...driftAnim(-12, 10, -10, 17, reduce)}
      >
        <svg width="120" height="40" viewBox="0 0 120 40">
          <path
            d="M4 24 Q20 4 36 24 T68 24 T100 24"
            fill="none" stroke="#FCEE21" strokeWidth="8" strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* dotted arc */}
      <motion.div
        className="shape"
        style={{ left: '4vmin', top: '4vh', opacity: 0.55 }}
        {...driftAnim(8, 8, 8, 21, reduce)}
      >
        <svg width="140" height="80" viewBox="0 0 140 80">
          <path
            d="M6 74 A70 70 0 0 1 134 74"
            fill="none" stroke="#FF5C5C" strokeWidth="6" strokeLinecap="round"
            strokeDasharray="2 16"
          />
        </svg>
      </motion.div>
    </div>
  )
}
