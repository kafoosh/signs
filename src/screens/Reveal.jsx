import { useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { buildRevealBlocks } from '../data/reading.js'
import PlayingCard, { cardCaption } from '../components/PlayingCard.jsx'
import Confetti from '../components/Confetti.jsx'

// Typewriter reading: intro -> 6 random sections -> conclusion -> card.
// CR11: only the current/most-recent section keeps a blinking caret.
export default function Reveal({ captured, signName, name }) {
  const reduce = useReducedMotion()
  const blocks = useMemo(() => buildRevealBlocks(signName, name), [signName, name])

  const [committed, setCommitted] = useState([]) // fully-typed, caret-free blocks
  const [active, setActive] = useState(null) // {block, text} currently/just typed (has caret)
  const [revIdx, setRevIdx] = useState(0) // index of the NEXT block to type
  const [typing, setTyping] = useState(false)
  const [showCard, setShowCard] = useState(false)

  const scrollRef = useRef(null)
  const timerRef = useRef(null)

  const scrollDown = () => {
    const sc = scrollRef.current
    if (sc) sc.scrollTop = sc.scrollHeight
  }
  useEffect(() => {
    scrollDown()
  })
  useEffect(() => () => clearTimeout(timerRef.current), [])

  // Begin typing block at index `idx`. Any previously-active block must already
  // have been folded into `committed` by the caller (so its caret is gone).
  const typeBlock = (idx) => {
    const block = blocks[idx]
    setRevIdx(idx + 1)
    setTyping(true)

    if (reduce) {
      setActive({ block, text: block.text })
      setTyping(false)
      return
    }

    const full = block.text
    let i = 0
    const speed = 14
    setActive({ block, text: '' })
    const step = () => {
      i += 2
      if (i >= full.length) {
        setActive({ block, text: full })
        setTyping(false)
        return
      }
      setActive({ block, text: full.slice(0, i) })
      timerRef.current = setTimeout(step, speed)
    }
    timerRef.current = setTimeout(step, speed)
  }

  const allTyped = active != null && revIdx >= blocks.length && !typing
  const started = committed.length > 0 || active != null

  let label = 'Next ›'
  if (!started) label = 'Begin ›'
  else if (allTyped) label = 'and also...'

  const onClick = () => {
    if (typing) return

    // Last block already typed -> flip the card.
    if (allTyped) {
      setCommitted((prev) => [...prev, active.block]) // strip caret from last block
      setActive(null)
      setShowCard(true)
      return
    }

    // First press -> type the intro.
    if (!active) {
      typeBlock(0)
      return
    }

    // Commit the current block (loses caret), then type the next one.
    const idx = revIdx
    setCommitted((prev) => [...prev, active.block])
    setActive(null)
    typeBlock(idx)
  }

  return (
    <section className="screen" id="reveal">
      <div className="head" style={{ marginBottom: 10 }}>
        <div className="label">your reading</div>
      </div>

      <div id="revScroll" ref={scrollRef}>
        {committed.map((b, i) => (
          <div className="revblock" key={'c' + i}>
            <div className="revh">{b.h}</div>
            <div className={'revtext ' + (b.cls || '')}>{b.text}</div>
          </div>
        ))}
        {active && (
          <div className="revblock" key="active">
            <div className="revh">{active.block.h}</div>
            <div className={'revtext ' + (active.block.cls || '')}>
              {active.text}
              <span className="caret" />
            </div>
          </div>
        )}

        {/* Card + caption live INSIDE the scroll, so they scroll with the reading. */}
        {showCard && (
          <div id="cardStage" className="show">
            <PlayingCard captured={captured} />
            <div className="revcap">{cardCaption(captured)}</div>
          </div>
        )}
      </div>

      {showCard && <Confetti />}

      <div className="foot" style={{ textAlign: 'center', marginTop: 12 }}>
        {!showCard && (
          <button className="cta" type="button" onClick={onClick}>
            {label}
          </button>
        )}
      </div>
    </section>
  )
}
