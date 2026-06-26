import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const LINES = [
  'Aligning your stars…',
  'Consulting the aether…',
  'Cross-referencing your sign…',
  'Shuffling the deck of fate…',
]

// Fake "reading your chart" progress 0->100% then onDone().
export default function Calculating({ onDone }) {
  const reduce = useReducedMotion()
  const [pct, setPct] = useState(0)
  const [status, setStatus] = useState(LINES[0])
  const doneRef = useRef(false)

  useEffect(() => {
    const dur = reduce ? 900 : 4200
    const t0 = performance.now()
    let raf = 0
    let li = 0

    const statTimer = setInterval(
      () => {
        li = (li + 1) % LINES.length
        setStatus(LINES[li])
      },
      reduce ? 300 : 1000,
    )

    const tick = (now) => {
      const k = Math.min(1, (now - t0) / dur)
      setPct(Math.round(k * 100))
      if (k < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        clearInterval(statTimer)
        setTimeout(() => {
          if (!doneRef.current) {
            doneRef.current = true
            onDone()
          }
        }, 350)
      }
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      clearInterval(statTimer)
    }
  }, [reduce, onDone])

  return (
    <section className="screen" id="calc">
      <div className="label" style={{ textAlign: 'center' }}>
        reading your chart
      </div>
      <div id="calcNum">{pct}%</div>
      <div id="calcBar">
        <i style={{ width: pct + '%' }} />
      </div>
      <div id="calcStatus">{status}</div>
    </section>
  )
}
