import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const COLS = ['#FCEE21', '#FF5C5C', '#37E0A6', '#9b59ff', '#fff']

// Confetti burst from screen centre. Mounts only when fired; pieces fly out.
export default function Confetti() {
  const reduce = useReducedMotion()

  const pieces = useMemo(() => {
    if (reduce) return []
    return Array.from({ length: 26 }, (_, i) => {
      const size = 6 + Math.random() * 8
      const ang = Math.random() * Math.PI * 2
      const dist = 80 + Math.random() * 150
      return {
        color: COLS[i % COLS.length],
        size,
        round: Math.random() < 0.5,
        dx: Math.cos(ang) * dist,
        dy: Math.sin(ang) * dist - 40,
        rot: Math.random() * 720 - 360,
        dur: 1.4 + Math.random() * 0.6,
      }
    })
  }, [reduce])

  if (reduce) return null

  return (
    <>
      {pieces.map((p, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute', zIndex: 50, left: '50%', top: '42%',
            width: p.size, height: p.size, background: p.color,
            borderRadius: p.round ? '50%' : 2, pointerEvents: 'none',
          }}
          initial={{ x: '-50%', y: '-50%', rotate: 0, opacity: 1 }}
          animate={{
            x: `calc(-50% + ${p.dx}px)`,
            y: `calc(-50% + ${p.dy + 220}px)`,
            rotate: p.rot,
            opacity: 0,
          }}
          transition={{ duration: p.dur, ease: [0.2, 0.6, 0.3, 1] }}
        />
      ))}
    </>
  )
}
